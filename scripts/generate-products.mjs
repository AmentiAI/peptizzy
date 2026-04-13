// Generates lib/products.ts for Phiogen catalog
// Run: node scripts/generate-products.mjs

import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// [name, phiogen-slug, original-price, category, featured?, badge?]
const RAW = [
  ['BPC-157 + TB-500 Blend 20mg','bpc-157-tb-500-blend-bpc-157-10mg-tb-500-10mg',99.99,'Blends & Stacks'],
  ['BPC-157 10mg','bpc-157-10mg',59.99,'Recovery & Healing',true,'Elite Recovery'],
  ['Epitalon 50mg','epitalon-50mg',139.99,'Anti-Aging & Longevity',true,'Longevity Essential'],
  ['GHK-Cu 50mg','ghk-cu-50mg',50.00,'Anti-Aging & Longevity'],
  ['IGF-1 LR3 1mg','igf-1-lr3-1mg',79.99,'Growth Peptides'],
  ['Ipamorelin 10mg','ipamorelin-10mg',59.99,'Growth Peptides',true,'Best Seller'],
  ['Ipamorelin/CJC-1295 Blend 10mg','ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg',89.99,'Blends & Stacks'],
  ['NAD+ 500mg','nad-500mg',79.99,'Anti-Aging & Longevity'],
  ['TB-500 10mg','tb-500-thymosin-beta-4-10mg',59.99,'Recovery & Healing'],
  ['Tirzepatide 15mg','tirzepatide-15mg',149.99,'Fat Loss / Metabolic',true,'Most Effective'],
  ['5-Amino-1MQ 50mg','5-amino-1mq-50mg',79.99,'Fat Loss / Metabolic'],
  ['5-Amino-1MQ 50mg x60 Capsules','5-amino-1mq-capsules-50mg-x-60-capsules',119.99,'Fat Loss / Metabolic'],
  ['5-Amino-1MQ 5mg','5-amino-1mq-5mg',19.99,'Fat Loss / Metabolic'],
  ['ACE-031 1mg','ace-031-1mg',199.99,'Anti-Aging & Longevity'],
  ['AICAR 50mg','aicar-50mg',69.99,'Fat Loss / Metabolic'],
  ['AOD-9604 10mg','aod9604-10mg',119.99,'Fat Loss / Metabolic'],
  ['AOD-9604 2mg','aod9604-2mg',39.99,'Fat Loss / Metabolic'],
  ['AOD-9604 5mg','aod9604-5mg',69.99,'Fat Loss / Metabolic'],
  ['ARA-290 10mg','ara-290-10mg',89.99,'Recovery & Healing'],
  ['Abaloparatide 3mg','abaloparatide-3mg',149.99,'Anti-Aging & Longevity'],
  ['Adamax 10mg','adamax-10mg',99.99,'Cognitive & Nootropic'],
  ['Adipotide (FTPP) 10mg','adipotide-fttp-10mg',149.99,'Fat Loss / Metabolic'],
  ['Adipotide (FTPP) 5mg','adipotide-fttp-5mg',89.99,'Fat Loss / Metabolic'],
  ['BAM-15 30mg/mL 30mL','bam-15-30mg-ml-30ml',89.99,'Fat Loss / Metabolic'],
  ['BAM-15 50mg/mL 30mL','bam-15-50mg-ml-30ml',129.99,'Fat Loss / Metabolic'],
  ['BPC-157 + TB-500 Blend 10mg','bpc-157-tb-500-blend-bpc-157-5mg-tb-500-5mg',59.99,'Blends & Stacks'],
  ['BPC-157 Capsules 500mcg x60','bpc-157-capsules-500mcg-x-60-capsules',79.99,'Recovery & Healing'],
  ['Bacteriostatic Water 30mL','bacteriostatic-water-30ml',12.99,'Recovery & Healing'],
  ['Bacteriostatic Water USP 30mL','usp-bacteriostatic-water-30ml',14.99,'Recovery & Healing'],
  ['Bronchogen 20mg','bronchogen-20mg',79.99,'Recovery & Healing'],
  ['CJC-1295 No DAC 10mg','cjc-1295-no-dac-10mg',79.99,'Growth Peptides'],
  ['CJC-1295 No DAC 5mg','cjc-1295-no-dac-5mg',49.99,'Growth Peptides'],
  ['CJC-1295 with DAC 10mg','cjc-1295-with-dac-10mg',99.99,'Growth Peptides'],
  ['Cagri-Reta 10mg','cagri-reta-10mg',189.99,'Blends & Stacks'],
  ['Cagri-Reta 5mg','cagri-reta-5mg',129.99,'Blends & Stacks'],
  ['Cagri-Sema Blend 10mg','cagri-sema-blend-5mg-cagrilintide-5mg-sema-10mg',179.99,'Blends & Stacks'],
  ['Cagrilintide 10mg','cagrilintide-10mg',169.99,'Fat Loss / Metabolic'],
  ['Cagrilintide 5mg','cagrilintide-5mg',99.99,'Fat Loss / Metabolic'],
  ['Cardiogen 20mg','cardiogen-20mg',79.99,'Recovery & Healing'],
  ['Cartalax 20mg','cartalax-20mg',79.99,'Recovery & Healing'],
  ['Chonluten 20mg','chonluten-20mg',79.99,'Recovery & Healing'],
  ['Cortagen 20mg','cortagen-20mg',79.99,'Recovery & Healing'],
  ['Crystagen 20mg','crystagen-20mg',79.99,'Recovery & Healing'],
  ['DSIP 10mg','dsip-delta-sleep-inducing-peptide-10mg',79.99,'Cognitive & Nootropic'],
  ['DSIP 15mg','dsip-delta-sleep-inducing-peptide-15mg',99.99,'Cognitive & Nootropic'],
  ['DSIP 5mg','dsip-delta-sleep-inducing-peptide-5mg',49.99,'Cognitive & Nootropic'],
  ['Epitalon 10mg','epitalon-10mg',59.99,'Anti-Aging & Longevity'],
  ['FOXO4-DRI 10mg','fox04-dri-10mg',149.99,'Anti-Aging & Longevity'],
  ['GHK-Cu 100mg','ghk-cu-100mg',89.99,'Anti-Aging & Longevity'],
  ['GHRP-2 10mg','ghrp-2-10mg',49.99,'Growth Peptides'],
  ['GHRP-6 10mg','ghrp-6-10mg',49.99,'Growth Peptides'],
  ['GLOW Blend 50mg','glow-blend-50mg',89.99,'Blends & Stacks'],
  ['GLOW Blend 70mg','glow-blend-70mg',109.99,'Blends & Stacks'],
  ['Glutathione 1500mg','glutathione-1500mg',179.99,'Anti-Aging & Longevity'],
  ['Glutathione 200mg','glutathione-200mg',49.99,'Anti-Aging & Longevity'],
  ['Glutathione 600mg','glutathione-600mg',89.99,'Anti-Aging & Longevity'],
  ['Gonadorelin Acetate','gonadorelin-acetate',49.99,'Growth Peptides'],
  ['Hexarelin 5mg','hexarelin-5mg',59.99,'Growth Peptides'],
  ['IPA/TESA Blend 15mg','ipa-tesa-blend-ipa-5mg-tesa-10mg-15mg',149.99,'Blends & Stacks'],
  ['Ipamorelin/CJC-1295 Blend 10mg v2','ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipamorelin-5mg',89.99,'Blends & Stacks'],
  ['Ipamorelin/Tesamorelin Blend 13mg','ipamorelin-tesamorelin-blend-ipa-3mg-tesa-10mg',129.99,'Blends & Stacks'],
  ['Ipamorelin/Tesamorelin Blend 15mg','ipamorelin-tesamorelin-blend-ipa-5mg-tesa-10mg',149.99,'Blends & Stacks'],
  ['KLOW Blend 80mg','klow-blend-80mg',119.99,'Blends & Stacks'],
  ['KPV 10mg','kpv-10mg',99.99,'Recovery & Healing'],
  ['KPV 5mg','kpv-5mg',59.99,'Recovery & Healing'],
  ['Kisspeptin-10 10mg','kisspeptin-10-10mg',99.99,'Growth Peptides'],
  ['Kisspeptin-10 5mg','kisspeptin-10-5mg',59.99,'Growth Peptides'],
  ['L-Carnitine 400mg/mL','l-carnitine-400mg-ml',39.99,'Fat Loss / Metabolic'],
  ['L-Carnitine 5-Pack 600mg','l-carnitine-5-pack-600mg',89.99,'Fat Loss / Metabolic'],
  ['L-Carnitine 600mg/mL','l-carnitine-600mg-ml',49.99,'Fat Loss / Metabolic'],
  ['LL-37 10mg','ll-37-10mg',99.99,'Recovery & Healing'],
  ['Livagen 20mg','livagen-20mg',79.99,'Recovery & Healing'],
  ['MOTS-c 10mg','mots-c-10mg',129.99,'Recovery & Healing'],
  ['MOTS-c 20mg','mots-c-20mg',219.99,'Recovery & Healing'],
  ['MOTS-c 40mg','mots-c-40mg',379.99,'Recovery & Healing'],
  ['Mazdutide 6mg','mazdutide-6mg',129.99,'Fat Loss / Metabolic'],
  ['Melanotan I 10mg','melanotan-1-10mg',59.99,'Anti-Aging & Longevity'],
  ['Melanotan II 10mg','melanotan-2-10mg',59.99,'Anti-Aging & Longevity'],
  ['Methylene Blue 10mg/mL 50mL','methylene-blue-10mg-ml-50ml',59.99,'Anti-Aging & Longevity'],
  ['N-Acetyl Semax Amidate 30mg','n-acetyl-semax-amidate-30mg',149.99,'Cognitive & Nootropic'],
  ['NA-Epitalon 10mg','na-epitalon-10mg',79.99,'Anti-Aging & Longevity'],
  ['NA-Selank Amidate 10mg','na-selank-amidate-10mg',79.99,'Cognitive & Nootropic'],
  ['NA-Selank Amidate 30mg','na-selank-amidate-30mg',179.99,'Cognitive & Nootropic'],
  ['NAD+ 1000mg','nad-1000mg',139.99,'Anti-Aging & Longevity'],
  ['O-304 (ATX-304) 100mg x60 Capsules','o-304-atx-304-100mg-x-60-capsules',119.99,'Fat Loss / Metabolic'],
  ['Ovagen 20mg','ovagen-20mg',79.99,'Recovery & Healing'],
  ['Oxytocin 10mg','oxytocin-10mg',79.99,'Recovery & Healing'],
  ['Oxytocin 8mg','oxytocin-8mg',69.99,'Recovery & Healing'],
  ['P21 10mg','p21-10mg',89.99,'Anti-Aging & Longevity'],
  ['PE-22-28 10mg','pe-22-28-10mg',79.99,'Cognitive & Nootropic'],
  ['PEG-MGF 2mg','peg-mgf-2mg',69.99,'Growth Peptides'],
  ['PNC-27 30mg','pnc-27-30mg',119.99,'Anti-Aging & Longevity'],
  ['PT-141 10mg','pt-141-10mg',69.99,'Anti-Aging & Longevity'],
  ['Pancragen 20mg','pancragen-20mg',79.99,'Recovery & Healing'],
  ['Pinealon 10mg','pinealon-10mg',69.99,'Cognitive & Nootropic'],
  ['Pinealon 20mg','pinealon-20mg',119.99,'Cognitive & Nootropic'],
  ['Prostamax 20mg','prostamax-20mg',79.99,'Recovery & Healing'],
  ['RU-58841 50mg x30mL','ru-58841-50mg-x-30ml',79.99,'Anti-Aging & Longevity'],
  ['RU-58841 50mg x60mL','ru-58841-50mg-x-60ml',129.99,'Anti-Aging & Longevity'],
  ['Reta-Cagri 5mg/5mg','reta-cagri-5mg-5mg',149.99,'Blends & Stacks'],
  ['Retatrutide 10mg','retatrutide-10mg',149.99,'Fat Loss / Metabolic',true,'Triple Agonist'],
  ['Retatrutide 15mg','retatrutide-15mg',199.99,'Fat Loss / Metabolic'],
  ['Retatrutide 20mg','retatrutide-20mg',249.99,'Fat Loss / Metabolic'],
  ['Retatrutide 30mg','retatrutide-30mg',329.99,'Fat Loss / Metabolic'],
  ['SLU-PP-332 100mg x120 Capsules','slu-pp-332-100mg-x-120-capsules',159.99,'Fat Loss / Metabolic'],
  ['SLU-PP-332 100mg x30 Capsules','slu-pp-332-100mg-x-30-capsules',59.99,'Fat Loss / Metabolic'],
  ['SLU-PP-332 1mg x30 Capsules','slu-pp-332-1mg-x-30-capsules',39.99,'Fat Loss / Metabolic'],
  ['SLU-PP-332 1mg/mL 30mL','slu-pp-332-1mg-ml-30ml',79.99,'Fat Loss / Metabolic'],
  ['SLU-PP-332 5mg/mL 30mL','slu-pp-332-5mg-ml-30ml',99.99,'Fat Loss / Metabolic'],
  ['SNAP-8 10mg','snap-8-10mg',45.00,'Anti-Aging & Longevity'],
  ['SS-31 10mg','ss-31-10mg',99.99,'Recovery & Healing'],
  ['SS-31 25mg','ss-31-25mg',189.99,'Recovery & Healing'],
  ['SS-31 50mg','ss-31-50mg',329.99,'Recovery & Healing'],
  ['Selank 10mg','selank-10mg',69.99,'Cognitive & Nootropic'],
  ['Semaglutide 12mg','semaglutide-12mg',129.99,'Fat Loss / Metabolic'],
  ['Semaglutide 20mg','semaglutide-20mg',189.99,'Fat Loss / Metabolic'],
  ['Semaglutide 30mg','semaglutide-30mg',249.99,'Fat Loss / Metabolic'],
  ['Semaglutide 3mg','semaglutide-3mg',49.99,'Fat Loss / Metabolic'],
  ['Semaglutide 6mg','semaglutide-6mg',79.99,'Fat Loss / Metabolic',true,'Clinical Grade'],
  ['Sermorelin 10mg','sermorelin-10mg',119.99,'Growth Peptides'],
  ['Sermorelin 2mg','sermorelin-2mg',39.99,'Growth Peptides'],
  ['Sermorelin 5mg','sermorelin-5mg',69.99,'Growth Peptides'],
  ['Survodutide 10mg','survodutide-10mg',159.99,'Fat Loss / Metabolic'],
  ['Tesamorelin 10mg','tesamorelin-10mg',119.99,'Growth Peptides'],
  ['Tesamorelin 20mg','tesamorelin-20mg',199.99,'Growth Peptides'],
  ['Tesofensine 500mcg x30 Capsules','tesofensine-500mcg-x-30-capsules',99.99,'Fat Loss / Metabolic'],
  ['Tesofensine 500mcg x30 Tablets','tesofensine-500mcg-x-30-tablets',99.99,'Fat Loss / Metabolic'],
  ['Testagen 20mg','testagen-20mg',89.99,'Recovery & Healing'],
  ['Thymogen 20mg','thymogen-20mg',79.99,'Recovery & Healing'],
  ['Thymosin Alpha-1 10mg','thymosin-alpha-1-10mg',119.99,'Recovery & Healing'],
  ['Thymosin Alpha-1 5mg','thymosin-alpha-1-5mg',69.99,'Recovery & Healing'],
  ['Thymulin 10mg','thymulin-10mg',59.99,'Recovery & Healing'],
  ['Tirzepatide 30mg','tirzepatide-30mg',249.99,'Fat Loss / Metabolic'],
  ['Tirzepatide 60mg','tirzepatide-60mg',399.99,'Fat Loss / Metabolic'],
  ['VIP 10mg','vip-10mg',139.99,'Recovery & Healing'],
  ['VIP 5mg','vip-5mg',79.99,'Recovery & Healing'],
  ['Vesilute 20mg','vesilute-20mg',79.99,'Recovery & Healing'],
  ['Vesugen 20mg','vesugen-20mg',79.99,'Recovery & Healing'],
  ['Vilon 20mg','vilon-20mg',79.99,'Recovery & Healing'],
]

// Category → synergy pairs (same-category slugs to cross-link)
const CAT_SYNERGIES = {
  'Recovery & Healing':    ['bpc-157-10mg','tb-500-thymosin-beta-4-10mg','kpv-10mg'],
  'Growth Peptides':       ['ipamorelin-10mg','cjc-1295-no-dac-10mg','ghrp-6-10mg'],
  'Fat Loss / Metabolic':  ['semaglutide-6mg','tirzepatide-15mg','retatrutide-10mg'],
  'Anti-Aging & Longevity':['epitalon-50mg','ghk-cu-50mg','nad-500mg'],
  'Cognitive & Nootropic': ['selank-10mg','dsip-delta-sleep-inducing-peptide-10mg','n-acetyl-semax-amidate-30mg'],
  'Blends & Stacks':       ['ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg','bpc-157-tb-500-blend-bpc-157-10mg-tb-500-10mg','cagri-sema-blend-5mg-cagrilintide-5mg-sema-10mg'],
}

// Category-specific taglines templates
const TAGLINES = {
  'Recovery & Healing':    ['Elite Tissue Repair','Accelerated Recovery','Systemic Healing','Cellular Regeneration'],
  'Growth Peptides':       ['Peak GH Stimulation','Optimized Growth Hormone','Anabolic Amplifier','GH Pulse Maximizer'],
  'Fat Loss / Metabolic':  ['Next-Gen Fat Loss','Metabolic Optimizer','Advanced Lipolysis','Clinical Weight Management'],
  'Anti-Aging & Longevity':['Longevity Protocol','Anti-Aging Powerhouse','Cellular Youth Preservation','DNA-Level Repair'],
  'Cognitive & Nootropic': ['Enhanced Neural Function','Cognitive Optimizer','Brain Performance Peptide','Mental Edge Compound'],
  'Blends & Stacks':       ['Synergistic Formula','Precision Blend','Optimized Stack','Dual-Action Protocol'],
}

const CATEGORY_BENEFITS = {
  'Recovery & Healing': [
    'Accelerates tissue repair at the cellular level',
    'Reduces systemic and localized inflammation',
    'Promotes collagen synthesis and structural integrity',
    'Enhances blood flow to damaged tissue via angiogenesis',
    'Supports immune modulation for optimal healing',
    'Protects against oxidative stress in recovering tissue',
  ],
  'Growth Peptides': [
    'Stimulates pituitary growth hormone secretion',
    'Supports lean muscle mass accrual and preservation',
    'Enhances fat oxidation through elevated GH signaling',
    'Improves sleep quality and recovery through GH pulses',
    'Strengthens connective tissue alongside muscle growth',
    'Supports IGF-1 production for sustained anabolic signaling',
  ],
  'Fat Loss / Metabolic': [
    'Targets adipose tissue through metabolic receptor activation',
    'Reduces appetite and caloric intake via hormonal pathways',
    'Improves insulin sensitivity and glucose metabolism',
    'Preserves lean muscle mass during caloric restriction',
    'Supports cardiovascular health markers',
    'Enhances mitochondrial efficiency and fat oxidation',
  ],
  'Anti-Aging & Longevity': [
    'Activates telomerase to extend cellular lifespan',
    'Reduces oxidative damage and free radical accumulation',
    'Supports collagen production for skin and joint health',
    'Optimizes mitochondrial function for cellular energy',
    'Modulates inflammatory pathways implicated in aging',
    'Supports neuroprotective mechanisms against age-related decline',
  ],
  'Cognitive & Nootropic': [
    'Enhances neuroplasticity and synaptic formation',
    'Supports BDNF production for long-term cognitive health',
    'Reduces anxiety and stress via GABAergic modulation',
    'Improves focus, memory consolidation, and recall',
    'Neuroprotective against oxidative and inflammatory damage',
    'Supports balanced neurotransmitter production',
  ],
  'Blends & Stacks': [
    'Combines complementary peptides for synergistic effects',
    'Eliminates guesswork from multi-compound protocols',
    'Pre-dosed for convenience and precision',
    'Targets multiple biological pathways simultaneously',
    'Maximizes efficacy versus single-compound administration',
    'Pharmaceutical-grade purity across all components',
  ],
}

const PROTOCOLS = {
  'Recovery & Healing':    'Typically 200–500mcg administered subcutaneously once or twice daily. Inject near the injury site for localized effects or abdominally for systemic benefits. Run 4–8 week cycles with 2–4 week breaks.',
  'Growth Peptides':       'Standard protocols use 100–300mcg subcutaneously 1–3× daily, with the most important dose before sleep to amplify natural GH pulses. Cycle 12–16 weeks on with a 4-week break.',
  'Fat Loss / Metabolic':  'Dosing varies by compound. GLP-1/GIP agonists typically start low (0.25–0.5mg/week) and titrate upward over 4–8 weeks. Subcutaneous injection once weekly is standard for most GLP-1 class compounds.',
  'Anti-Aging & Longevity':'Common protocols involve daily or every-other-day subcutaneous administration. Epithalamin-class peptides are often cycled 10 days on, 3–6 months off. NAD+ compounds can be run continuously.',
  'Cognitive & Nootropic': 'Intranasal administration is common for Selank/Semax class peptides (2–3 drops per nostril). Injectable variants use 100–300mcg subcutaneously. Many users run 2–4 week cycles.',
  'Blends & Stacks':       'Follow the dosing guidance for the primary active compound in the blend. Most blends are administered subcutaneously once daily. Reconstitute with bacteriostatic water per standard peptide protocols.',
}

function discount(price) {
  return '$' + (Math.round(price * 0.9 * 100) / 100).toFixed(2)
}

function tagline(name, cat, idx) {
  const arr = TAGLINES[cat] || ['Research Peptide','Advanced Formula']
  return arr[idx % arr.length]
}

function tags(cat) {
  const MAP = {
    'Recovery & Healing':    ['Recovery','Healing','Anti-Inflammatory','Tissue Repair'],
    'Growth Peptides':       ['Growth Hormone','Anabolic','Muscle Growth','GH Stimulation'],
    'Fat Loss / Metabolic':  ['Fat Loss','Metabolic','Weight Management','Lipolysis'],
    'Anti-Aging & Longevity':['Anti-Aging','Longevity','Cellular Health','DNA Repair'],
    'Cognitive & Nootropic': ['Nootropic','Cognitive','Neuroprotective','Focus'],
    'Blends & Stacks':       ['Blend','Stack','Synergistic','Multi-Compound'],
  }
  return MAP[cat] || ['Research Peptide']
}

function synergies(slug, cat) {
  const base = CAT_SYNERGIES[cat] || []
  return base.filter(s => s !== slug).slice(0, 3)
}

function esc(str) {
  return str.replace(/'/g, "\\'")
}

function generateProduct(row, idx) {
  const [name, phiogenSlug, originalPrice, cat, featured, badge] = row
  const slug = phiogenSlug
  const price = discount(originalPrice)
  const image = `https://phiogen.is/images/products/${phiogenSlug}.png`
  const affiliateUrl = `AFF('${phiogenSlug}')`
  const tl = tagline(name, cat, idx)
  const t = tags(cat)
  const benefits = CATEGORY_BENEFITS[cat] || CATEGORY_BENEFITS['Recovery & Healing']
  const protocol = PROTOCOLS[cat] || PROTOCOLS['Recovery & Healing']
  const syn = synergies(slug, cat)
  const seoTitle = `${name} | ${cat} Research Peptide | PeptidesMuscle`
  const shortDesc = `${name} — a premium ${cat.toLowerCase()} compound from Phiogen, delivering research-grade purity for advanced protocols.`
  const fullDesc = `${name} is a research-grade ${cat.toLowerCase()} peptide produced by Phiogen to the highest purity standards. Used by researchers and biohackers worldwide, it represents the cutting edge of peptide science in the ${cat} category.\\n\\nEach vial is independently tested for purity and potency. Whether you are running a focused protocol or combining ${name} with complementary compounds, Phiogen's pharmaceutical-grade manufacturing ensures consistent results.\\n\\nAvailable at an exclusive 10% discount for PeptidesMuscle visitors. All products come with a full certificate of analysis.`

  const lines = []
  lines.push(`  {`)
  lines.push(`    slug: '${esc(slug)}',`)
  lines.push(`    name: '${esc(name)}',`)
  lines.push(`    seoTitle: '${esc(seoTitle)}',`)
  lines.push(`    tagline: '${esc(tl)}',`)
  lines.push(`    price: '${price}',`)
  lines.push(`    category: '${esc(cat)}',`)
  lines.push(`    tags: ${JSON.stringify(t)},`)
  lines.push(`    image: '${image}',`)
  lines.push(`    affiliateUrl: ${affiliateUrl},`)
  if (badge) lines.push(`    badge: '${esc(badge)}',`)
  if (featured) lines.push(`    featured: true,`)
  lines.push(`    shortDescription: '${esc(shortDesc)}',`)
  lines.push(`    fullDescription: \`${fullDesc}\`,`)
  lines.push(`    benefits: ${JSON.stringify(benefits)},`)
  lines.push(`    protocol: '${esc(protocol)}',`)
  lines.push(`    synergies: ${JSON.stringify(syn)},`)
  lines.push(`    deepDiveTitle: 'The Science Behind ${esc(name)} — Mechanism, Protocol & Results',`)
  lines.push(`    highlights: [`)
  lines.push(`      { label: 'Mechanism', title: 'How ${esc(name)} Works at the Cellular Level', body: '${esc(name)} operates through ${cat.toLowerCase()} pathways, engaging target receptors to drive measurable physiological changes. Research demonstrates consistent receptor affinity and downstream signaling efficacy at standard research doses.' },`)
  lines.push(`      { label: 'Key Benefits', title: 'What Researchers Report With ${esc(name)}', body: 'Documented outcomes in the ${cat} category include improvements in recovery speed, biomarker optimization, and compound-specific endpoints. ${esc(name)} is regarded as a reliable tool in evidence-based protocols.' },`)
  lines.push(`      { label: 'Stacking', title: 'Optimal Combinations for ${esc(name)}', body: '${esc(name)} pairs well with complementary ${cat.toLowerCase()} compounds. Common stack partners include other ${cat} peptides that act through synergistic mechanisms to amplify overall protocol outcomes.' },`)
  lines.push(`    ],`)
  lines.push(`    faqs: [`)
  lines.push(`      { q: 'What is ${esc(name)} used for?', a: '${esc(name)} is a ${cat.toLowerCase()} research peptide used to support ${cat.toLowerCase()} goals including the specific outcomes outlined above. It is widely used in advanced research protocols.' },`)
  lines.push(`      { q: 'What is the recommended dose for ${esc(name)}?', a: '${esc(protocol)}' },`)
  lines.push(`      { q: 'Can ${esc(name)} be stacked with other peptides?', a: 'Yes — ${esc(name)} stacks well with complementary ${cat.toLowerCase()} compounds. Review the synergies section above for recommended combinations.' },`)
  lines.push(`    ],`)
  lines.push(`  },`)
  return lines.join('\n')
}

// Build file
const header = `export interface Product {
  slug: string
  name: string
  tagline: string
  price: string
  category: string
  tags: string[]
  image: string
  affiliateUrl: string
  shortDescription: string
  fullDescription: string
  benefits: string[]
  protocol: string
  synergies: string[]
  badge?: string
  featured?: boolean
  seoTitle?: string
  deepDiveTitle: string
  highlights: { label: string; title: string; body: string }[]
  faqs?: { q: string; a: string }[]
}

const AFF = (slug: string) => \`https://phiogen.is/products/\${slug}?ref=PEPS\`

export const products: Product[] = [
`

const footer = `]

export const categories = [
  { name: 'Fat Loss / Metabolic',    icon: '⚡' },
  { name: 'Growth Peptides',          icon: '💪' },
  { name: 'Recovery & Healing',       icon: '🔬' },
  { name: 'Anti-Aging & Longevity',   icon: '🧬' },
  { name: 'Cognitive & Nootropic',    icon: '🧠' },
  { name: 'Blends & Stacks',          icon: '✨' },
]

export function getProduct(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

// alias used by product detail pages
export const getProductBySlug = getProduct

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}
`

const productBlocks = RAW.map((row, i) => generateProduct(row, i)).join('\n\n')
const output = header + '\n' + productBlocks + '\n\n' + footer

const outPath = join(__dirname, '..', 'lib', 'products.ts')
writeFileSync(outPath, output, 'utf8')
console.log(`Written ${RAW.length} products to ${outPath}`)
console.log(`File size: ${(output.length / 1024).toFixed(1)} KB`)
