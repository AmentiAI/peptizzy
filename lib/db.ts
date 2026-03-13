import { neon } from '@neondatabase/serverless'

export const sql = neon(process.env.DATABASE_URL!)

export interface PeptideRow {
  id: number
  slug: string
  name: string
  category: string
  price: string
  tagline: string
  short_description: string
  image: string
  affiliate_url: string
  featured: boolean
}

export async function searchPeptides(query: string): Promise<PeptideRow[]> {
  const combined = `%${query.toLowerCase()}%`

  // Primary: full phrase match across all searchable fields including tags
  const primary = await sql`
    SELECT id, slug, name, category, price, tagline, short_description, image, affiliate_url, featured
    FROM peptides
    WHERE LOWER(
      name || ' ' || COALESCE(category,'') || ' ' || COALESCE(tags,'') || ' ' ||
      COALESCE(tagline,'') || ' ' || COALESCE(short_description,'')
    ) LIKE ${combined}
    ORDER BY featured DESC, name ASC
    LIMIT 4
  ` as unknown as PeptideRow[]

  if (primary.length >= 4) return primary

  // Fallback: match any individual keyword and fill remaining slots
  const keywords = query.toLowerCase().split(/\s+/).filter(Boolean)
  const seen = new Set(primary.map(r => r.slug))
  const extra: PeptideRow[] = []

  for (const kw of keywords) {
    if (primary.length + extra.length >= 4) break
    const q = `%${kw}%`
    const rows = await sql`
      SELECT id, slug, name, category, price, tagline, short_description, image, affiliate_url, featured
      FROM peptides
      WHERE LOWER(
        name || ' ' || COALESCE(category,'') || ' ' || COALESCE(tags,'') || ' ' ||
        COALESCE(tagline,'') || ' ' || COALESCE(short_description,'')
      ) LIKE ${q}
      ORDER BY featured DESC, name ASC
      LIMIT 4
    ` as unknown as PeptideRow[]
    for (const r of rows) {
      if (!seen.has(r.slug) && primary.length + extra.length < 4) {
        seen.add(r.slug)
        extra.push(r)
      }
    }
  }

  return [...primary, ...extra]
}

export async function getFeaturedPeptides(): Promise<PeptideRow[]> {
  const rows = await sql`
    SELECT id, slug, name, category, price, tagline, short_description, image, affiliate_url, featured
    FROM peptides
    WHERE featured = true
    ORDER BY name ASC
  `
  return rows as unknown as PeptideRow[]
}

export async function getAllPeptides(): Promise<PeptideRow[]> {
  const rows = await sql`
    SELECT id, slug, name, category, price, tagline, short_description, image, affiliate_url, featured
    FROM peptides
    ORDER BY featured DESC, name ASC
  `
  return rows as unknown as PeptideRow[]
}
