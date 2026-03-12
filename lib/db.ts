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
  const q = `%${query.toLowerCase()}%`
  const rows = await sql`
    SELECT * FROM peptides
    WHERE LOWER(name) LIKE ${q}
       OR LOWER(category) LIKE ${q}
       OR LOWER(tagline) LIKE ${q}
       OR LOWER(short_description) LIKE ${q}
    ORDER BY featured DESC, name ASC
    LIMIT 4
  `
  return rows as unknown as PeptideRow[]
}

export async function getAllPeptides(): Promise<PeptideRow[]> {
  const rows = await sql`SELECT * FROM peptides ORDER BY featured DESC, name ASC`
  return rows as unknown as PeptideRow[]
}
