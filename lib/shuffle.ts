// Deterministic seeded shuffle for related-products / pairs-with sections.
// Prevents the .slice(0,N) trap where every product page in a category shows
// the same ordered tail — Google's shingle detection reads that as duplicate.
//
// xmur3 (32-bit string hash) + Mulberry32 (fast seeded PRNG) + Fisher-Yates.
// Same (slug, salt) always produces the same shuffle order; different salts
// ("related", "pairs") produce different orders for the same product.

function xmur3(str: string): () => number {
  let h = 1779033703 ^ str.length
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    return (h ^= h >>> 16) >>> 0
  }
}

function mulberry32(seed: number): () => number {
  return () => {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Deterministic Fisher-Yates shuffle. Pure function of (items, slug, salt).
export function seededShuffle<T>(items: readonly T[], slug: string, salt: string): T[] {
  const arr = items.slice()
  if (arr.length <= 1) return arr
  const seedFn = xmur3(`${slug}:${salt}`)
  const rand = mulberry32(seedFn())
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Pick N items deterministically. Common use: related-products tails.
export function seededPick<T>(items: readonly T[], slug: string, salt: string, n: number): T[] {
  return seededShuffle(items, slug, salt).slice(0, n)
}
