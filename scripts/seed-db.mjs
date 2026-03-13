/**
 * Seed script — creates the peptides table and inserts ALL 24 Apollo products.
 * Run with: node scripts/seed-db.mjs
 */
import { neon } from '@neondatabase/serverless'

const DATABASE_URL = 'postgresql://neondb_owner:npg_4SnJCPt1FkAN@ep-square-sky-ads8jwf0-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require'
const sql = neon(DATABASE_URL)

const AFF = (apolloSlug) => `https://apollopeptidesciences.com/product/${apolloSlug}/?rfsn=9016964.3f1b1e`

const products = [

  // ── RECOVERY & HEALING ──────────────────────────────────────────────────────
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    category: 'Recovery & Healing',
    price: '$59.99',
    tagline: 'The Universal Healing Peptide',
    short_description: 'The gold standard in biological performance optimization. Accelerates healing of tendons, ligaments, gut, and neural tissue through angiogenesis and growth factor upregulation.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/bpc157_10mg.webp',
    affiliate_url: AFF('bpc157-10mg'),
    featured: true,
    tags: 'recovery healing tendon ligament gut joint anti-inflammatory repair injury',
  },
  {
    slug: 'tb-500',
    name: 'TB-500',
    category: 'Recovery & Healing',
    price: '$59.99',
    tagline: 'Systemic Tissue Regeneration',
    short_description: 'Thymosin Beta-4 analogue that travels systemically to repair tissue throughout the body. Unmatched for flexibility, range of motion, and full-body recovery.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/TB500_10mg.webp',
    affiliate_url: AFF('tb500-10mg'),
    featured: false,
    tags: 'recovery systemic healing flexibility range of motion full body repair thymosin',
  },
  {
    slug: 'bacteriostatic-water',
    name: 'Bacteriostatic Water 10ml',
    category: 'Recovery & Healing',
    price: '$9.99',
    tagline: 'Essential Peptide Reconstitution Solution',
    short_description: 'Pharmaceutical-grade 0.9% benzyl alcohol sterile solution. Required to reconstitute all lyophilized injectable peptides — preserves vials across 28+ days of multi-dose use.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/reconsitution_solution_10ml.webp',
    affiliate_url: 'https://apollopeptidesciences.com/product/bacteriostatic-water-reconstitution-solution-10ml/?rfsn=9016964.3f1b1e',
    featured: false,
    tags: 'reconstitution sterile water inject peptide prep essential mixing solution',
  },

  // ── LOOKS MAXING ────────────────────────────────────────────────────────────
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    category: 'Looks Maxing',
    price: '$50.00',
    tagline: 'The Collagen & Skin Optimizer',
    short_description: 'Activates 4,000+ genes involved in skin repair, stimulates fibroblast collagen production. Up to 121% increase in skin density. The gold standard anti-aging skin peptide.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/ghk-cu_50mg.webp',
    affiliate_url: AFF('ghk-cu'),
    featured: true,
    tags: 'skin collagen anti-aging looks maxing wrinkle copper peptide elastin firming appearance',
  },
  {
    slug: 'snap-8',
    name: 'SNAP-8',
    category: 'Looks Maxing',
    price: '$45.00',
    tagline: 'The Anti-Wrinkle Peptide',
    short_description: 'Blocks neuromuscular signals that cause expression lines. Reduces wrinkle depth by up to 63%. The research peptide alternative to Botox for crow\'s feet and forehead lines.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/snap-8_10mg.webp',
    affiliate_url: AFF('snap-8'),
    featured: false,
    tags: 'wrinkle anti-wrinkle botox expression lines skin looks maxing face appearance',
  },
  {
    slug: 'snap-8-2-pack',
    name: 'SNAP-8 (2-Pack)',
    category: 'Looks Maxing',
    price: '$80.00',
    tagline: 'Double Supply for Extended Anti-Wrinkle Protocols',
    short_description: 'Two 10mg SNAP-8 vials bundled for the best value. Provides 8+ weeks of supply for the consistent daily application that produces measurable wrinkle depth reduction.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/snap-8_10mg.webp',
    affiliate_url: 'https://apollopeptidesciences.com/product/snap-8-2-pack/?rfsn=9016964.3f1b1e',
    featured: false,
    tags: 'wrinkle anti-wrinkle botox expression lines skin looks maxing bundle value',
  },

  // ── BODY COMPOSITION ────────────────────────────────────────────────────────
  {
    slug: 'cjc-1295-ipamorelin',
    name: 'CJC-1295 / Ipamorelin',
    category: 'Body Composition',
    price: '$50.00',
    tagline: 'The Gold Standard GH Stack',
    short_description: 'Pre-blended GHRH + GHRP combo. Dual-receptor GH stimulation produces GH pulses far beyond either peptide alone — for lean muscle growth, fat loss, and dramatically improved deep sleep.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/cjc1295_5-5mg.webp',
    affiliate_url: AFF('cjc1295-ipamorelin'),
    featured: true,
    tags: 'growth hormone muscle fat loss sleep lean mass GH peptide body composition anabolic',
  },
  {
    slug: 'igf-1-lr3',
    name: 'IGF-1 LR3',
    category: 'Body Composition',
    price: '$79.99',
    tagline: 'Direct Anabolic Signal',
    short_description: 'Long-acting IGF-1 analogue that directly activates mTOR and muscle hypertrophy pathways. The most anabolic peptide — promotes lean mass growth and visceral fat reduction.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/igf-1lr3-1mg.webp',
    affiliate_url: AFF('igf-1lr3'),
    featured: false,
    tags: 'muscle growth anabolic mtor body composition lean mass hypertrophy strength bulking',
  },

  // ── WEIGHT MANAGEMENT ───────────────────────────────────────────────────────
  {
    slug: 'semaglutide',
    name: 'Semaglutide',
    category: 'Weight Management',
    price: '$79.99',
    tagline: 'GLP-1 Fat Loss Compound',
    short_description: 'The compound behind Ozempic and Wegovy. GLP-1 receptor agonist producing 14.9% average body weight reduction in clinical trials, appetite suppression, and metabolic improvement.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/10/semaglutide_5mg.webp',
    affiliate_url: AFF('glp-1s-5mg'),
    featured: true,
    tags: 'weight loss fat loss ozempic wegovy GLP-1 appetite suppression obesity semaglutide metabolic',
  },
  {
    slug: 'semaglutide-10mg',
    name: 'Semaglutide 10mg',
    category: 'Weight Management',
    price: '$99.99',
    tagline: 'Intermediate Dose — Where Real Results Begin',
    short_description: 'Intermediate 10mg semaglutide vial for researchers who have completed dose escalation and are operating at the 1–2mg weekly therapeutic range for sustained fat loss.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/10/semaglutide_10mg-1.webp',
    affiliate_url: 'https://apollopeptidesciences.com/product/glp-1s-10mg/?rfsn=9016964.3f1b1e',
    featured: false,
    tags: 'weight loss fat loss ozempic GLP-1 semaglutide intermediate supply bulk',
  },
  {
    slug: 'semaglutide-15mg',
    name: 'Semaglutide 15mg',
    category: 'Weight Management',
    price: '$159.99',
    tagline: 'Maximum Dose — Long-Term Maintenance Format',
    short_description: 'The maximum volume semaglutide format — 15mg matches the full STEP trial maintenance dose (2.4mg weekly) for 6+ weeks. Best value per mg for long-term fat loss.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/semaglutide_15mg.webp',
    affiliate_url: 'https://apollopeptidesciences.com/product/glp-1s-15mg/?rfsn=9016964.3f1b1e',
    featured: false,
    tags: 'weight loss fat loss ozempic GLP-1 semaglutide long term maintenance best value',
  },
  {
    slug: 'tirzepatide',
    name: 'Tirzepatide',
    category: 'Weight Management',
    price: '$149.99',
    tagline: 'Dual GLP-1/GIP Agonist',
    short_description: 'The compound behind Mounjaro and Zepbound. Dual GLP-1/GIP receptor agonist with 22.5% average body weight reduction in clinical trials — more effective than semaglutide.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/04/tirzepatide_15mg-1.webp',
    affiliate_url: AFF('glp-2t-15m'),
    featured: true,
    tags: 'weight loss fat loss mounjaro zepbound GLP-1 GIP tirzepatide appetite suppression metabolic',
  },
  {
    slug: 'tirzepatide-15mg-4-pack',
    name: 'Tirzepatide 15mg (4-Pack)',
    category: 'Weight Management',
    price: '$569.99',
    tagline: 'Multi-Vial Bundle for 4-Month Supply',
    short_description: 'Four 15mg tirzepatide vials — approximately 4 months of supply at 15mg weekly maintenance. The most cost-effective bundle for sustained dual GLP-1/GIP fat loss protocols.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/04/tirzepatide_15mg-1.webp',
    affiliate_url: 'https://apollopeptidesciences.com/product/glp-2t-15mg-4-pack/?rfsn=9016964.3f1b1e',
    featured: false,
    tags: 'weight loss fat loss tirzepatide bundle 4 pack bulk value long term supply',
  },
  {
    slug: 'tirzepatide-15mg-10-pack',
    name: 'Tirzepatide 15mg (10-Pack)',
    category: 'Weight Management',
    price: '$1399.99',
    tagline: 'Maximum Bundle — Lowest Cost Per Vial',
    short_description: 'Ten 15mg tirzepatide vials — 10 weeks of supply at 15mg weekly. Lowest cost per vial available. For researchers fully committed to long-term tirzepatide protocols.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/04/tirzepatide_15mg-1.webp',
    affiliate_url: 'https://apollopeptidesciences.com/product/glp-2t-15mg-10-pack/?rfsn=9016964.3f1b1e',
    featured: false,
    tags: 'weight loss fat loss tirzepatide bundle 10 pack bulk wholesale cheapest best price',
  },
  {
    slug: 'tirzepatide-20mg-5-pack',
    name: 'Tirzepatide 20mg (5-Pack)',
    category: 'Weight Management',
    price: '$699.99',
    tagline: 'High-Dose Bundle for Advanced Protocols',
    short_description: 'Five 20mg tirzepatide vials for researchers at higher maintenance doses. More compound per vial means fewer reorders and lower cost for advanced fat loss programs.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/04/tirzepatide_15mg-1.webp',
    affiliate_url: 'https://apollopeptidesciences.com/product/glp-2t-20mg-5-pack/?rfsn=9016964.3f1b1e',
    featured: false,
    tags: 'weight loss fat loss tirzepatide high dose bundle 5 pack 20mg advanced',
  },
  {
    slug: 'tirzepatide-30mg',
    name: 'Tirzepatide 30mg',
    category: 'Weight Management',
    price: '$279.99',
    tagline: 'Bulk Format — Extended Protocol Supply',
    short_description: 'Double the standard 15mg vial. Provides 2–3 weeks of supply at maintenance dosing. Lower cost per mg and fewer reorders for researchers in the maintenance phase.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_30mg.webp',
    affiliate_url: 'https://apollopeptidesciences.com/product/glp-2t-30mg/?rfsn=9016964.3f1b1e',
    featured: false,
    tags: 'weight loss fat loss tirzepatide 30mg bulk supply mounjaro GLP-1 GIP',
  },
  {
    slug: 'tirzepatide-60mg',
    name: 'Tirzepatide 60mg',
    category: 'Weight Management',
    price: '$489.99',
    tagline: 'Maximum Bulk — Lowest Cost Per mg',
    short_description: 'Four times the standard vial. Lowest cost per mg of any tirzepatide format — for serious long-term research programs at maintenance dosing. 4–6 weeks of supply per vial.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/12/tirzepatide_60mg-1.webp',
    affiliate_url: 'https://apollopeptidesciences.com/product/glp-2-t-60mg/?rfsn=9016964.3f1b1e',
    featured: false,
    tags: 'weight loss fat loss tirzepatide 60mg bulk max supply cheapest best value long term',
  },
  {
    slug: 'retatrutide',
    name: 'Retatrutide',
    category: 'Weight Management',
    price: '$189.99',
    tagline: 'Triple Agonist — Maximum Fat Loss',
    short_description: 'The most advanced weight loss peptide — triple GLP-1/GIP/Glucagon receptor agonist. Phase 2 trials show up to 24.2% body weight reduction — more than semaglutide or tirzepatide.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/retatrutide_15mg.webp',
    affiliate_url: AFF('glp-3r-15mg'),
    featured: true,
    tags: 'weight loss fat loss triple agonist strongest most effective GLP-1 GIP glucagon retatrutide',
  },
  {
    slug: 'retatrutide-10mg',
    name: 'Retatrutide 10mg',
    category: 'Weight Management',
    price: '$149.99',
    tagline: 'Entry Point for Triple Agonist Research',
    short_description: 'The lower-cost entry format for retatrutide. Ideal for the gradual escalation phase — covers 8–12 weeks of careful dose escalation before transitioning to larger vials.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/04/retatrutide_10mg-1.webp',
    affiliate_url: 'https://apollopeptidesciences.com/product/glp-3r-10mg/?rfsn=9016964.3f1b1e',
    featured: false,
    tags: 'weight loss fat loss retatrutide triple agonist starter entry beginner start',
  },
  {
    slug: 'retatrutide-30mg',
    name: 'Retatrutide 30mg',
    category: 'Weight Management',
    price: '$349.99',
    tagline: 'Bulk Triple Agonist Supply',
    short_description: 'Double the standard 15mg vial for researchers at therapeutic maintenance doses of 8–12mg weekly. Lower cost per mg and sustained supply continuity for the most potent fat loss compound.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/12/retatrutide_30mg.webp',
    affiliate_url: 'https://apollopeptidesciences.com/product/glp-3-r-30mg/?rfsn=9016964.3f1b1e',
    featured: false,
    tags: 'weight loss fat loss retatrutide 30mg bulk triple agonist supply maintenance',
  },
  {
    slug: 'retatrutide-60mg',
    name: 'Retatrutide 60mg',
    category: 'Weight Management',
    price: '$589.99',
    tagline: 'Maximum Bulk — Lowest Cost Per mg',
    short_description: 'Maximum bulk format for the strongest fat loss compound. Lowest cost per mg in the entire retatrutide lineup — 5–7.5 weeks of supply at maintenance dosing.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/12/retatrutide_60mg.webp',
    affiliate_url: 'https://apollopeptidesciences.com/product/glp-3-r-60mg/?rfsn=9016964.3f1b1e',
    featured: false,
    tags: 'weight loss fat loss retatrutide 60mg max bulk cheapest long term best value',
  },
  {
    slug: 'cagrilintide-semaglutide',
    name: 'Cagrilintide + Semaglutide',
    category: 'Weight Management',
    price: '$109.99',
    tagline: 'Dual-Mechanism Satiety Stack',
    short_description: 'Cagrilintide (amylin analogue) + Semaglutide (GLP-1 agonist) in one vial. Two separate appetite suppression pathways for additive fat loss beyond semaglutide alone.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/cagri_sema_5_5mg-1.webp',
    affiliate_url: AFF('glp-1cglp-1s-5mg'),
    featured: false,
    tags: 'weight loss fat loss cagrilintide semaglutide dual appetite satiety combo stack GLP-1 amylin',
  },

  // ── ANTI-AGING ──────────────────────────────────────────────────────────────
  {
    slug: 'epithalon',
    name: 'Epithalon',
    category: 'Anti-Aging',
    price: '$139.99',
    tagline: 'The Telomere Lengthening Peptide',
    short_description: 'Activates telomerase to rebuild telomere caps — the only known compound to achieve measurable telomere lengthening in humans. Improves sleep quality and may reverse biological aging.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/epithalon_50mg.webp',
    affiliate_url: AFF('epithalon-50mg'),
    featured: true,
    tags: 'anti-aging longevity telomere sleep age reversal biological age immortality lifespan epithalon',
  },
  {
    slug: 'nad-plus',
    name: 'NAD+',
    category: 'Anti-Aging',
    price: '$69.99',
    tagline: 'Cellular Energy & Longevity Coenzyme',
    short_description: 'Nicotinamide adenine dinucleotide — the master coenzyme for cellular energy, DNA repair, and sirtuin longevity protein activation. Levels decline 50%+ with age.',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/nad_500mg.webp',
    affiliate_url: AFF('nad'),
    featured: false,
    tags: 'anti-aging energy longevity DNA repair sirtuin mitochondria NAD cognitive brain fog aging',
  },
]

async function main() {
  console.log('Ensuring peptides table exists with tags column...')
  await sql`
    CREATE TABLE IF NOT EXISTS peptides (
      id            SERIAL PRIMARY KEY,
      slug          TEXT UNIQUE NOT NULL,
      name          TEXT NOT NULL,
      category      TEXT NOT NULL,
      price         TEXT NOT NULL,
      tagline       TEXT,
      short_description TEXT,
      image         TEXT,
      affiliate_url TEXT,
      featured      BOOLEAN DEFAULT false,
      tags          TEXT DEFAULT '',
      created_at    TIMESTAMPTZ DEFAULT NOW()
    )
  `

  // Add tags column if it doesn't exist yet (idempotent)
  await sql`ALTER TABLE peptides ADD COLUMN IF NOT EXISTS tags TEXT DEFAULT ''`

  console.log('Upserting all 24 products...')
  let upserted = 0
  for (const p of products) {
    await sql`
      INSERT INTO peptides (slug, name, category, price, tagline, short_description, image, affiliate_url, featured, tags)
      VALUES (${p.slug}, ${p.name}, ${p.category}, ${p.price}, ${p.tagline}, ${p.short_description}, ${p.image}, ${p.affiliate_url}, ${p.featured}, ${p.tags})
      ON CONFLICT (slug) DO UPDATE SET
        name              = EXCLUDED.name,
        category          = EXCLUDED.category,
        price             = EXCLUDED.price,
        tagline           = EXCLUDED.tagline,
        short_description = EXCLUDED.short_description,
        image             = EXCLUDED.image,
        affiliate_url     = EXCLUDED.affiliate_url,
        featured          = EXCLUDED.featured,
        tags              = EXCLUDED.tags
    `
    console.log(`  ✓ ${p.name}`)
    upserted++
  }

  const count = await sql`SELECT COUNT(*) FROM peptides`
  console.log(`\nDone. Upserted ${upserted} products. Total in DB: ${count[0].count}`)
}

main().catch(console.error)
