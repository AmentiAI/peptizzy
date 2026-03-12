/**
 * Seed script — creates the peptides table and inserts all products.
 * Run with: node scripts/seed-db.mjs
 */
import { neon } from '@neondatabase/serverless'

const DATABASE_URL = 'postgresql://neondb_owner:npg_4SnJCPt1FkAN@ep-square-sky-ads8jwf0-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
const sql = neon(DATABASE_URL)

const products = [
  // Recovery & Healing
  { slug: 'bpc-157', name: 'BPC-157', category: 'Recovery & Healing', price: '$49', tagline: 'The Universal Healing Peptide', short_description: 'The most versatile recovery peptide available. Accelerates healing of tendons, ligaments, gut, and neural tissue through angiogenesis and growth factor upregulation.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/BPC-157-2mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: true },
  { slug: 'bpc-157-oral', name: 'BPC-157 Oral', category: 'Recovery & Healing', price: '$49', tagline: 'Oral Gut Healing Protocol', short_description: 'Orally bioavailable BPC-157 specifically designed for gastrointestinal healing and systemic anti-inflammatory benefits without injections.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/11/BPC-157-500mcg-Oral-1.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'tb-500', name: 'TB-500', category: 'Recovery & Healing', price: '$59', tagline: 'Systemic Tissue Regeneration', short_description: 'Thymosin Beta-4 analogue that travels systemically to repair tissue throughout the body. Unmatched for flexibility, range of motion, and full-body recovery.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/TD-500-2mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'bpc-157-tb-500', name: 'BPC-157 + TB-500 Blend', category: 'Recovery & Healing', price: '$69', tagline: 'The Ultimate Recovery Stack', short_description: 'The most complete recovery protocol available — local and systemic tissue repair combined in a single vial for maximum healing synergy.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/BPC-157-2mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'll-37', name: 'LL-37', category: 'Recovery & Healing', price: '$59', tagline: 'Antimicrobial Immune Peptide', short_description: 'Human cathelicidin antimicrobial peptide with potent immune-modulating properties, tissue repair acceleration, and broad-spectrum antimicrobial activity.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/10/LL37-5mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },

  // Looks Maxing
  { slug: 'ghk-cu', name: 'GHK-Cu', category: 'Looks Maxing', price: '$49', tagline: 'The Collagen & Skin Optimizer', short_description: 'Activates 4,000+ genes involved in skin repair, stimulates fibroblast collagen production. Up to 121% increase in skin density documented. The gold standard anti-aging skin peptide.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/GHKCU-50mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: true },
  { slug: 'melanotan-2', name: 'Melanotan 2', category: 'Looks Maxing', price: '$39', tagline: 'The Bronze Protocol', short_description: 'Deep eumelanin pigmentation without UV exposure. Libido enhancement. Appetite suppression. Three looks-maxing benefits in one peptide.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/MT2-10mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: true },

  // Body Composition
  { slug: 'ipamorelin', name: 'Ipamorelin', category: 'Body Composition', price: '$49', tagline: 'Clean GH Optimization', short_description: 'The cleanest growth hormone secretagogue available. Triggers precise GH pulses with zero cortisol or prolactin elevation. Superior body composition, sleep quality, and recovery.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/IPAMORELIN-2mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: true },
  { slug: 'cjc-1295', name: 'CJC-1295', category: 'Body Composition', price: '$49', tagline: 'GHRH for Sustained GH Elevation', short_description: 'Growth hormone releasing hormone analogue that dramatically increases GH and IGF-1 levels. Stack with Ipamorelin for the most effective natural GH optimization protocol.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/IPAMORELIN-2mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'cjc-1295-dac', name: 'CJC-1295 DAC', category: 'Body Composition', price: '$59', tagline: 'Long-Acting GH Amplifier', short_description: 'Drug Affinity Complex version of CJC-1295 with a half-life of 6-8 days. Once or twice weekly dosing for sustained GH elevation with maximum convenience.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/CJC1295-DAC-2mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'cjc-1295-ipamorelin', name: 'CJC-1295 + Ipamorelin', category: 'Body Composition', price: '$59', tagline: 'The GH Stack Combo Vial', short_description: 'Pre-mixed blend of CJC-1295 and Ipamorelin — the two most synergistic GH peptides combined for maximum growth hormone optimization in a single injection.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/IPAMORELIN-2mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'sermorelin', name: 'Sermorelin', category: 'Body Composition', price: '$49', tagline: 'The Beginner GH Protocol', short_description: 'The gentlest and most natural GH secretagogue. Stimulates pituitary GH release through endogenous pathways. Ideal starting point for GH optimization.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/SERMORELIN-2mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'ghrp-2', name: 'GHRP-2', category: 'Body Composition', price: '$49', tagline: 'Potent GH Release Peptide', short_description: 'One of the most potent growth hormone releasing peptides. Strong GH pulse stimulus with appetite enhancement — ideal for lean mass building protocols.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/GHRP-2-5mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'mk-677', name: 'MK-677', category: 'Body Composition', price: '$59', tagline: 'Oral GH Secretagogue', short_description: 'The only oral growth hormone secretagogue. Increases GH and IGF-1 without injections. Profound sleep quality improvement, lean mass growth, and anti-aging benefits.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/MK-677-15mg-Oral-1.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'igf-1-lr3', name: 'IGF-1 LR3', category: 'Body Composition', price: '$69', tagline: 'Direct Anabolic Signal', short_description: 'Long-acting IGF-1 analogue that directly activates muscle hypertrophy pathways. The most anabolic peptide available — promotes lean mass growth and visceral fat reduction.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/image_2024_10_24T01_11_01_146Z.png', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'tesamorelin', name: 'Tesamorelin', category: 'Body Composition', price: '$79', tagline: 'FDA-Validated Visceral Fat Eliminator', short_description: 'The only FDA-approved peptide for visceral fat reduction. Clinically proven to reduce dangerous belly fat by 15-20% over 26 weeks while maintaining muscle mass.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/TESAMORELIN-2mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'aod-9604', name: 'AOD-9604', category: 'Body Composition', price: '$49', tagline: 'Targeted Fat Metabolism Fragment', short_description: 'The fat-burning fragment of growth hormone — stimulates lipolysis specifically without affecting blood sugar or IGF-1. Clean fat loss with zero anabolic side effects.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/10/AOD9604-2mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'ace-031', name: 'ACE-031', category: 'Body Composition', price: '$89', tagline: 'Myostatin Inhibitor for Muscle Growth', short_description: 'Blocks myostatin and activin — the proteins that limit muscle growth. Enables muscle hypertrophy beyond natural genetic limits.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/image_2024_09_14T03_02_12_168Z.png', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: '5-amino-1mq', name: '5-Amino-1MQ', category: 'Body Composition', price: '$49', tagline: 'Cellular Fat Metabolism Optimizer', short_description: 'NNMT inhibitor that reactivates fat cell metabolism at the cellular level. Targets metabolically inactive fat cells, reactivating dormant fat burning pathways.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/10/5-AMINO-1MQ-5mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },

  // Weight Management
  { slug: 'retatrutide', name: 'Retatrutide', category: 'Weight Management', price: '$129', tagline: 'Triple Agonist Fat Loss', short_description: 'The most advanced weight loss peptide — triple GLP-1/GIP/Glucagon receptor agonist. Clinical trials show up to 24% body weight reduction. The strongest fat loss compound available.', image: 'https://pantheonpeptides.com/wp-content/uploads/2025/08/Retatrutide-5mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'tirzepatide', name: 'Tirzepatide', category: 'Weight Management', price: '$99', tagline: 'Dual GLP-1/GIP Agonist', short_description: 'The compound behind Mounjaro/Zepbound. Dual GLP-1 and GIP receptor agonist producing dramatic fat loss, appetite suppression, and metabolic improvements.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/TIRZEPTIDE-5mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'mazdutide', name: 'Mazdutide', category: 'Weight Management', price: '$109', tagline: 'GLP-1/Glucagon Dual Agonist', short_description: 'Next-generation dual agonist targeting both GLP-1 and glucagon receptors for enhanced fat oxidation and metabolic improvements beyond standard GLP-1 compounds.', image: 'https://pantheonpeptides.com/wp-content/uploads/2025/10/Mazdutide-5mg-1-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'cagrilintide', name: 'Cagrilintide', category: 'Weight Management', price: '$89', tagline: 'Amylin Analogue for Satiety', short_description: 'Long-acting amylin analogue that signals fullness through hypothalamic pathways. Stacks powerfully with GLP-1 peptides for additive weight loss and appetite control.', image: 'https://pantheonpeptides.com/wp-content/uploads/2025/10/Cagrilintide-5mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },

  // Anti-Aging
  { slug: 'epithalon', name: 'Epithalon', category: 'Anti-Aging', price: '$59', tagline: 'The Longevity Peptide', short_description: 'Activates telomerase to rebuild telomere caps — the only known compound to achieve measurable telomere lengthening. Profound sleep improvement and biological age reversal.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/EPITALON-10mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: true },
  { slug: 'mots-c', name: 'MOTS-c', category: 'Anti-Aging', price: '$79', tagline: 'Mitochondrial Optimization Peptide', short_description: 'Mitochondrial-derived peptide that acts as a molecular exercise signal. Activates AMPK, regulates metabolic homeostasis, and reverses age-related metabolic decline.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/EPITALON-10mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'aicar', name: 'AICAR', category: 'Anti-Aging', price: '$69', tagline: 'AMPK Activator & Endurance Compound', short_description: 'AMPK activator that mimics the cellular effects of exercise. Enhances mitochondrial biogenesis, fat oxidation, and endurance capacity without physical training.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/image_2024_09_14T03_02_18_646Z.png', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },

  // Cognitive Performance
  { slug: 'semax', name: 'Semax', category: 'Cognitive Performance', price: '$49', tagline: 'BDNF-Boosting Nootropic', short_description: 'ACTH analogue that dramatically increases BDNF and NGF levels. Enhances focus, working memory, and neuroprotection while reducing anxiety and cognitive fatigue.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/SEMAX-10mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'selank', name: 'Selank', category: 'Cognitive Performance', price: '$49', tagline: 'Anxiolytic Nootropic Peptide', short_description: 'GABA-modulating peptide with anxiolytic and nootropic properties. Eliminates anxiety without sedation, enhances memory consolidation, and stabilizes mood.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/SELANK-5mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'selank-semax', name: 'Selank + Semax Blend', category: 'Cognitive Performance', price: '$59', tagline: 'Complete Nootropic Stack', short_description: 'The definitive cognitive enhancement blend — Semax for BDNF-driven focus and Selank for anxiety elimination, combined for synergistic neural optimization.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/SELANK-5mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'dsip', name: 'DSIP', category: 'Cognitive Performance', price: '$49', tagline: 'Deep Sleep Architecture Optimizer', short_description: 'Delta Sleep-Inducing Peptide that directly modulates sleep architecture. Increases slow-wave deep sleep, reduces sleep latency, and maximizes overnight GH secretion.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/SELANK-5mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'cerebrolysin', name: 'Cerebrolysin', category: 'Cognitive Performance', price: '$79', tagline: 'Neuroregeneration Complex', short_description: 'Complex of neuropeptides with BDNF-like effects. Promotes neuronal growth, synaptic plasticity, and neuroprotection. Used clinically for cognitive enhancement and neural repair.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/11/CEREBROLYSIN-60mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },

  // Immune & Vitality
  { slug: 'thymosin-alpha-1', name: 'Thymosin Alpha-1', category: 'Immune & Vitality', price: '$79', tagline: 'Immune System Master Regulator', short_description: 'The most powerful immune-modulating peptide available. Activates T-cells, NK cells, and dendritic cells for comprehensive immune optimization and enhanced pathogen resistance.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/BPC-157-2mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'thymulin', name: 'Thymulin', category: 'Immune & Vitality', price: '$59', tagline: 'Thymic Immune Peptide', short_description: 'Natural thymic hormone that regulates immune function, reduces inflammation, and maintains immune homeostasis. Declines dramatically with age — supplementation restores youthful immune tone.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/THYMULIN-10mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'pt-141', name: 'PT-141', category: 'Immune & Vitality', price: '$49', tagline: 'Central Sexual Enhancement', short_description: 'Melanocortin receptor agonist that enhances sexual arousal through the central nervous system. Works for both men and women — the most effective sexual enhancement peptide available.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/PT141-10mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
  { slug: 'kisspeptin-10', name: 'Kisspeptin-10', category: 'Immune & Vitality', price: '$59', tagline: 'Hormonal Axis Activator', short_description: 'Master regulator of the reproductive hormone axis. Directly stimulates GnRH release, elevating LH, FSH, and testosterone. The most powerful natural testosterone optimization peptide.', image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/KISSPEPTINE-5mg-scaled.jpg', affiliate_url: 'https://pantheonpeptides.com/partner/AmentiAI/', featured: false },
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

  console.log('Seeding products...')
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
