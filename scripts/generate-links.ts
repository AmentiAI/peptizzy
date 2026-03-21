/**
 * Generates static internal links for every product and stack page.
 * Run once: npx tsx scripts/generate-links.ts
 * Commit the resulting lib/internal-links.ts — links never change at runtime.
 */

import { products } from '../lib/products'
import { stacks } from '../lib/stacks'
import * as fs from 'fs'
import * as path from 'path'

export type InternalLink = { href: string; title: string; anchor: string }

// ── Page descriptors ────────────────────────────────────────────────────────

interface PageDesc {
  href: string
  title: string
  tagline: string
  rawTags: string[]          // original casing, for anchor selection
  keywords: Set<string>      // lowercased tokens for scoring
  category: string
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[\s,/–&]+/)
    .filter(w => w.length > 3)
}

function buildKeywords(fields: string[]): Set<string> {
  const set = new Set<string>()
  for (const field of fields) {
    // Whole phrase (lowercased)
    set.add(field.toLowerCase())
    // Individual tokens
    for (const token of tokenize(field)) set.add(token)
  }
  return set
}

const pages: PageDesc[] = [
  ...products.map(p => ({
    href: `/products/${p.slug}`,
    title: p.name,
    tagline: p.tagline,
    rawTags: p.tags,
    category: p.category,
    keywords: buildKeywords([
      p.name, p.tagline, p.category, p.shortDescription,
      ...p.tags, ...p.benefits,
      ...p.highlights.map(h => `${h.label} ${h.title}`),
    ]),
  })),
  ...stacks.map(s => ({
    href: `/stacks/${s.id}`,
    title: s.name,
    tagline: s.tagline,
    rawTags: s.outcomes,
    category: 'Stack',
    keywords: buildKeywords([
      s.name, s.tagline, s.shortDesc, s.goal, s.synergy,
      ...s.outcomes, ...s.keyBenefits,
      ...s.compounds.map(c => c.role),
    ]),
  })),
]

// ── Scoring ─────────────────────────────────────────────────────────────────

function score(a: PageDesc, b: PageDesc): number {
  let s = 0

  // Exact shared tags / raw phrases (highest signal)
  for (const tag of a.rawTags) {
    const tl = tag.toLowerCase()
    if (b.keywords.has(tl)) s += 4
  }

  // Same category
  if (a.category !== 'Stack' && a.category === b.category) s += 2

  // Shared keyword tokens
  let shared = 0
  Array.from(a.keywords).forEach(kw => {
    if (b.keywords.has(kw)) shared++
  })
  s += Math.min(shared * 0.3, 5)

  return s
}

// ── Anchor text selection ────────────────────────────────────────────────────
// Prefer the target's tag/outcome that overlaps with the source's keywords.
// Fallback: target's tagline.

function bestAnchor(source: PageDesc, target: PageDesc): string {
  for (const tag of target.rawTags) {
    if (source.keywords.has(tag.toLowerCase())) return tag
  }
  // Any source tag that appears in target keywords
  for (const tag of source.rawTags) {
    if (target.keywords.has(tag.toLowerCase())) return tag
  }
  return target.tagline
}

// ── Generate links ───────────────────────────────────────────────────────────

function topLinks(sourcePage: PageDesc, count = 4): InternalLink[] {
  return pages
    .filter(p => p.href !== sourcePage.href)
    .map(p => ({ page: p, s: score(sourcePage, p) }))
    .sort((a, b) => b.s - a.s || a.page.href.localeCompare(b.page.href))
    .slice(0, count)
    .map(({ page }) => ({
      href: page.href,
      title: page.title,
      anchor: bestAnchor(sourcePage, page),
    }))
}

const productLinks: Record<string, InternalLink[]> = {}
for (const p of products) {
  const src = pages.find(pg => pg.href === `/products/${p.slug}`)!
  productLinks[p.slug] = topLinks(src)
}

const stackLinks: Record<string, InternalLink[]> = {}
for (const s of stacks) {
  const src = pages.find(pg => pg.href === `/stacks/${s.id}`)!
  stackLinks[s.id] = topLinks(src)
}

// ── Write output ─────────────────────────────────────────────────────────────

const output = `// AUTO-GENERATED — do not edit manually.
// Regenerate: npx tsx scripts/generate-links.ts

export type InternalLink = { href: string; title: string; anchor: string }

export const productInternalLinks: Record<string, InternalLink[]> = ${JSON.stringify(productLinks, null, 2)}

export const stackInternalLinks: Record<string, InternalLink[]> = ${JSON.stringify(stackLinks, null, 2)}
`

const outPath = path.join(__dirname, '../lib/internal-links.ts')
fs.writeFileSync(outPath, output, 'utf8')
console.log(`✓ Written ${Object.keys(productLinks).length} product link sets and ${Object.keys(stackLinks).length} stack link sets to lib/internal-links.ts`)
