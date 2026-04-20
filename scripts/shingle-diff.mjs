#!/usr/bin/env node
// Prints the top 30 shared 6-grams between two prerendered product pages.
// Usage: node scripts/shingle-diff.mjs <slug-a> <slug-b>
import { readFile } from 'node:fs/promises'

const [a, b] = process.argv.slice(2)
if (!a || !b) { console.error('usage: shingle-diff.mjs <slug-a> <slug-b>'); process.exit(1) }

function strip(html) {
  const m = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)
  const body = m ? m[1] : html
  return body
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ').trim().toLowerCase()
}
function shingle(text) {
  const w = text.split(/\s+/).filter(Boolean)
  const s = new Set()
  for (let i = 0; i <= w.length - 6; i++) s.add(w.slice(i, i + 6).join(' '))
  return s
}
const [ah, bh] = await Promise.all([
  readFile(`.next/server/app/products/${a}.html`, 'utf8'),
  readFile(`.next/server/app/products/${b}.html`, 'utf8'),
])
const as = shingle(strip(ah))
const bs = shingle(strip(bh))
const shared = [...as].filter(g => bs.has(g))
console.log(`A grams: ${as.size}  B grams: ${bs.size}  shared: ${shared.length}`)
console.log(`Jaccard: ${(shared.length / (as.size + bs.size - shared.length) * 100).toFixed(1)}%\n`)
console.log('First 40 shared shingles:')
shared.slice(0, 40).forEach(g => console.log(`  ${g}`))
