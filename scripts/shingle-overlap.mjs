#!/usr/bin/env node
// 6-gram shingle overlap acceptance test.
// Reads prerendered /products/<slug>.html from .next/server, strips markup,
// builds 6-gram word sets per page, computes pairwise Jaccard similarity,
// reports the max within-shape and cross-shape overlap. Fails the build if
// cross-shape > 20% or within-shape > 35% (per SEO playbook).

import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const PRODUCTS_DIR = '.next/server/app/products'
const CROSS_SHAPE_THRESHOLD = 0.20
const WITHIN_SHAPE_THRESHOLD = 0.35
const NGRAM_N = 6

// Minimal copy of lib/page-shapes.ts classifier — plain JS so this script has
// no TS toolchain dependency. Keep in sync with that file.
const VALUE_SHOP_PARENTS = new Set([
  'semaglutide', 'tirzepatide', 'retatrutide', 'sermorelin', 'aod9604',
  'glutathione', 'mots-c', 'ss-31', 'dsip',
])
function shapeOf(slug) {
  if (/bacteriostatic[- ]water/.test(slug)) return 'solvent'
  if (/blend/.test(slug)) return 'blend'
  if (/capsule|tablet/.test(slug)) return 'capsule'
  if (/-\d+ml($|-)/.test(slug)) return 'liquid'
  if (/mg[- ]ml/.test(slug)) return 'liquid'
  if (slug === 'methylene-blue' || slug.startsWith('methylene-blue-')) return 'liquid'
  if (slug.endsWith('-liquid')) return 'liquid'
  if (/ru-58841|snap-8/.test(slug)) return 'specialty'
  if (VALUE_SHOP_PARENTS.has(slug)) return 'value-shop'
  return 'recon-first'
}

function stripHtml(html) {
  // Extract <main>…</main> content so we compare page BODY, not site chrome
  // (global <header>/<footer>/<nav> are shared by every page and would
  // artificially inflate the overlap). If no <main>, fall back to full html.
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)
  const body = mainMatch ? mainMatch[1] : html
  return body
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

function shingle(text, n) {
  const words = text.split(/\s+/).filter(Boolean)
  const set = new Set()
  for (let i = 0; i <= words.length - n; i++) {
    set.add(words.slice(i, i + n).join(' '))
  }
  return set
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0
  let intersect = 0
  for (const s of a) if (b.has(s)) intersect++
  const union = a.size + b.size - intersect
  return intersect / union
}

async function main() {
  const files = (await readdir(PRODUCTS_DIR)).filter(f => f.endsWith('.html'))
  if (files.length === 0) {
    console.error(`No .html in ${PRODUCTS_DIR} — run \`next build\` first.`)
    process.exit(1)
  }

  const pages = []
  for (const f of files) {
    const slug = f.replace(/\.html$/, '')
    const html = await readFile(join(PRODUCTS_DIR, f), 'utf8')
    const text = stripHtml(html)
    const grams = shingle(text, NGRAM_N)
    pages.push({ slug, shape: shapeOf(slug), grams })
  }

  let maxCross = { score: 0, a: '', b: '' }
  let maxWithin = { score: 0, a: '', b: '', shape: '' }
  const withinBuckets = {}

  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const a = pages[i], b = pages[j]
      const score = jaccard(a.grams, b.grams)
      if (a.shape === b.shape) {
        if (score > maxWithin.score) maxWithin = { score, a: a.slug, b: b.slug, shape: a.shape }
        withinBuckets[a.shape] = Math.max(withinBuckets[a.shape] ?? 0, score)
      } else {
        if (score > maxCross.score) maxCross = { score, a: a.slug, b: b.slug }
      }
    }
  }

  const pct = x => (x * 100).toFixed(1) + '%'
  console.log(`\n6-gram shingle overlap — ${pages.length} canonical product pages\n`)
  console.log(`Cross-shape max: ${pct(maxCross.score)}  (${maxCross.a} ↔ ${maxCross.b})`)
  console.log(`  threshold: ${pct(CROSS_SHAPE_THRESHOLD)}  ${maxCross.score <= CROSS_SHAPE_THRESHOLD ? 'PASS' : 'FAIL'}`)
  console.log(`\nWithin-shape max: ${pct(maxWithin.score)}  (${maxWithin.shape}: ${maxWithin.a} ↔ ${maxWithin.b})`)
  console.log(`  threshold: ${pct(WITHIN_SHAPE_THRESHOLD)}  ${maxWithin.score <= WITHIN_SHAPE_THRESHOLD ? 'PASS' : 'FAIL'}`)
  console.log(`\nPer-shape within-bucket max:`)
  for (const [shape, score] of Object.entries(withinBuckets).sort()) {
    console.log(`  ${shape.padEnd(14)} ${pct(score)}`)
  }

  const failed = maxCross.score > CROSS_SHAPE_THRESHOLD || maxWithin.score > WITHIN_SHAPE_THRESHOLD
  if (failed) {
    console.error('\nFAIL — shingle overlap exceeds threshold.')
    process.exit(1)
  }
  console.log('\nPASS — shingle overlap within thresholds.')
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
