// Deterministic pseudo-random rating (4.0–5.0) + review count, seeded by slug.
// Stable across SSR/CSR so React hydration doesn't mismatch.

function hash(str: string): number {
  let h = 2166136261 >>> 0
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

export interface ProductRating {
  stars: number  // one decimal, 4.0–5.0
  count: number  // 18–487
}

export function productRating(slug: string): ProductRating {
  const h = hash(slug)
  // 0.0–1.0 decimal step → 4.0, 4.1, ... 5.0 (11 buckets). Skew toward 4.5–4.9.
  const buckets = [4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 4.4, 4.7, 4.8, 4.9, 4.6]
  const stars = buckets[h % buckets.length]
  const count = 18 + ((h >>> 8) % 470)
  return { stars, count }
}
