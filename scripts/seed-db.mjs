/**
 * Seed script — creates the peptides table and inserts all Apollo products.
 * Run with: node scripts/seed-db.mjs
 */
import { neon } from '@neondatabase/serverless'

const DATABASE_URL = 'postgresql://neondb_owner:npg_4SnJCPt1FkAN@ep-square-sky-ads8jwf0-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require'
const sql = neon(DATABASE_URL)

const AFFILIATE = (apolloSlug) => `https://apollopeptidesciences.com/product/${apolloSlug}/?rfsn=9016964.3f1b1e`

const products = [
  // Recovery & Healing
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    category: 'Recovery & Healing',
    price: '$59.99',
    tagline: 'The Universal Healing Peptide',
    short_description: 'The most versatile recovery peptide available. Accelerates healing of tendons, ligaments, gut, and neural tissue through angiogenesis and growth factor upregulation.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/bpc157_10mg.webp',
    affiliate_url: AFFILIATE('bpc157-10mg'),
    featured: true,
  },
  {
    slug: 'tb-500',
    name: 'TB-500',
    category: 'Recovery & Healing',
    price: '$59.99',
    tagline: 'Systemic Tissue Regeneration',
    short_description: 'Thymosin Beta-4 analogue that travels systemically to repair tissue throughout the body. Unmatched for flexibility, range of motion, and full-body recovery.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/TB500_10mg.webp',
    affiliate_url: AFFILIATE('tb500-10mg'),
    featured: false,
  },

  // Looks Maxing
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    category: 'Looks Maxing',
    price: '$50.00',
    tagline: 'The Collagen & Skin Optimizer',
    short_description: 'Activates 4,000+ genes involved in skin repair, stimulates fibroblast collagen production. Up to 121% increase in skin density documented. The gold standard anti-aging skin peptide.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/ghk-cu_50mg.webp',
    affiliate_url: AFFILIATE('ghk-cu'),
    featured: true,
  },
  {
    slug: 'snap-8',
    name: 'SNAP-8',
    category: 'Looks Maxing',
    price: '$45.00',
    tagline: 'The Anti-Wrinkle Peptide',
    short_description: 'Acetyl Glutamyl Heptapeptide-3 — blocks neuromuscular signals that cause expression lines. Reduces wrinkle depth by up to 63%. The topical Botox alternative in peptide form.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/snap-8_10mg.webp',
    affiliate_url: AFFILIATE('snap-8'),
    featured: false,
  },

  // Body Composition
  {
    slug: 'cjc-1295-ipamorelin',
    name: 'CJC-1295 / Ipamorelin',
    category: 'Body Composition',
    price: '$50.00',
    tagline: 'The GH Optimization Stack',
    short_description: 'Pre-blended GHRH + GHRP combo — the most synergistic growth hormone protocol. Dual-receptor stimulation produces GH pulses far beyond either peptide alone for lean mass and recovery.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/cjc1295_5-5mg.webp',
    affiliate_url: AFFILIATE('cjc1295-ipamorelin'),
    featured: true,
  },
  {
    slug: 'igf-1-lr3',
    name: 'IGF-1 LR3',
    category: 'Body Composition',
    price: '$79.99',
    tagline: 'Direct Anabolic Signal',
    short_description: 'Long-acting IGF-1 analogue that directly activates muscle hypertrophy pathways. The most anabolic peptide available — promotes lean mass growth and visceral fat reduction.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/igf-1lr3-1mg.webp',
    affiliate_url: AFFILIATE('igf-1lr3'),
    featured: false,
  },

  // Weight Management
  {
    slug: 'semaglutide',
    name: 'Semaglutide',
    category: 'Weight Management',
    price: '$79.99',
    tagline: 'GLP-1 Fat Loss Compound',
    short_description: 'The compound behind Ozempic/Wegovy. GLP-1 receptor agonist producing significant appetite suppression, fat loss, and metabolic improvement with once-weekly dosing.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/10/semaglutide_5mg.webp',
    affiliate_url: AFFILIATE('glp-1s-5mg'),
    featured: true,
  },
  {
    slug: 'tirzepatide',
    name: 'Tirzepatide',
    category: 'Weight Management',
    price: '$149.99',
    tagline: 'Dual GLP-1/GIP Agonist',
    short_description: 'The compound behind Mounjaro/Zepbound. Dual GLP-1 and GIP receptor agonist producing dramatic fat loss, appetite suppression, and metabolic improvements.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/04/tirzepatide_15mg-1.webp',
    affiliate_url: AFFILIATE('glp-2t-15m'),
    featured: true,
  },
  {
    slug: 'retatrutide',
    name: 'Retatrutide',
    category: 'Weight Management',
    price: '$189.99',
    tagline: 'Triple Agonist Fat Loss',
    short_description: 'The most advanced weight loss peptide — triple GLP-1/GIP/Glucagon receptor agonist. Clinical trials show up to 24% body weight reduction. The strongest fat loss compound available.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/retatrutide_15mg.webp',
    affiliate_url: AFFILIATE('glp-3r-15mg'),
    featured: false,
  },
  {
    slug: 'cagrilintide-semaglutide',
    name: 'Cagrilintide + Semaglutide',
    category: 'Weight Management',
    price: '$109.99',
    tagline: 'Dual-Mechanism Weight Loss Stack',
    short_description: 'Cagrilintide (amylin analogue) + Semaglutide (GLP-1 agonist) — two complementary satiety pathways combined for additive fat loss beyond either compound alone.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/cagri_sema_5_5mg-1.webp',
    affiliate_url: AFFILIATE('glp-1cglp-1s-5mg'),
    featured: false,
  },

  // Anti-Aging
  {
    slug: 'epithalon',
    name: 'Epithalon',
    category: 'Anti-Aging',
    price: '$139.99',
    tagline: 'The Longevity Peptide',
    short_description: 'Activates telomerase to rebuild telomere caps — the only known compound to achieve measurable telomere lengthening. Profound sleep improvement and biological age reversal.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/epithalon_50mg.webp',
    affiliate_url: AFFILIATE('epithalon-50mg'),
    featured: true,
  },
  {
    slug: 'nad-plus',
    name: 'NAD+',
    category: 'Anti-Aging',
    price: '$69.99',
    tagline: 'Cellular Energy & Longevity Coenzyme',
    short_description: 'Nicotinamide adenine dinucleotide — the master coenzyme driving cellular energy production, DNA repair, and sirtuin activation. Critical for metabolic health and biological age reversal.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/nad_500mg.webp',
    affiliate_url: AFFILIATE('nad'),
    featured: false,
  },
]

async function main() {
  console.log('Creating peptides table...')
  await sql`
    CREATE TABLE IF NOT EXISTS peptides (
      id          SERIAL PRIMARY KEY,
      slug        TEXT UNIQUE NOT NULL,
      name        TEXT NOT NULL,
      category    TEXT NOT NULL,
      price       TEXT NOT NULL,
      tagline     TEXT,
      short_description TEXT,
      image       TEXT,
      affiliate_url TEXT,
      featured    BOOLEAN DEFAULT false,
      created_at  TIMESTAMPTZ DEFAULT NOW()
    )
  `

  console.log('Deleting old Pantheon products...')
  await sql`DELETE FROM peptides`

  console.log('Seeding Apollo products...')
  let inserted = 0
  for (const p of products) {
    await sql`
      INSERT INTO peptides (slug, name, category, price, tagline, short_description, image, affiliate_url, featured)
      VALUES (${p.slug}, ${p.name}, ${p.category}, ${p.price}, ${p.tagline}, ${p.short_description}, ${p.image}, ${p.affiliate_url}, ${p.featured})
      ON CONFLICT (slug) DO UPDATE SET
        name = EXCLUDED.name,
        category = EXCLUDED.category,
        price = EXCLUDED.price,
        tagline = EXCLUDED.tagline,
        short_description = EXCLUDED.short_description,
        image = EXCLUDED.image,
        affiliate_url = EXCLUDED.affiliate_url,
        featured = EXCLUDED.featured
    `
    inserted++
  }
  console.log(`✓ Seeded ${inserted} peptides`)

  const count = await sql`SELECT COUNT(*) FROM peptides`
  console.log(`✓ Total in DB: ${count[0].count}`)
}

main().catch(console.error)
