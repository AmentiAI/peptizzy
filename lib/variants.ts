import { products, type Product } from './products'

// Variant consolidation per SEO playbook: one URL per compound, N sizes inside.
// Children render at /products/[child] get 301-redirected to /products/[parent]
// via next.config redirects. Parents emit one Product JSON-LD with offers[] array.
// /out/[child] affiliate routes stay per-variant — supplier SKUs are real.

export interface ProductVariant {
  slug: string         // child SKU slug
  label: string        // display label (e.g. "10 mg", "100mg × 30 capsules")
  price: string        // variant-specific price
  affiliateSlug: string // /out/<slug> target
}

// parentSlug → ordered child slugs (ascending by size/pack count)
export const VARIANT_GROUPS: Record<string, string[]> = {
  // GLP-1/GIP/glucagon family (highest-volume consolidation)
  'semaglutide':              ['semaglutide-3mg', 'semaglutide-6mg', 'semaglutide-12mg', 'semaglutide-20mg', 'semaglutide-30mg'],
  'tirzepatide':              ['tirzepatide-15mg', 'tirzepatide-30mg', 'tirzepatide-60mg'],
  'retatrutide':              ['retatrutide-10mg', 'retatrutide-15mg', 'retatrutide-20mg', 'retatrutide-30mg'],
  'cagri-reta':               ['cagri-reta-5mg', 'cagri-reta-10mg'],
  'cagrilintide':             ['cagrilintide-5mg', 'cagrilintide-10mg'],

  // GH-axis
  'sermorelin':               ['sermorelin-2mg', 'sermorelin-5mg', 'sermorelin-10mg'],
  'tesamorelin':              ['tesamorelin-10mg', 'tesamorelin-20mg'],
  'thymosin-alpha-1':         ['thymosin-alpha-1-5mg', 'thymosin-alpha-1-10mg'],
  'cjc-1295-no-dac':          ['cjc-1295-no-dac-5mg', 'cjc-1295-no-dac-10mg'],

  // Fat loss / metabolic variants
  'aod9604':                  ['aod9604-2mg', 'aod9604-5mg', 'aod9604-10mg'],
  'adipotide-fttp':           ['adipotide-fttp-5mg', 'adipotide-fttp-10mg'],
  'bam-15':                   ['bam-15-30mg-ml-30ml', 'bam-15-50mg-ml-30ml'],
  'l-carnitine':              ['l-carnitine-400mg-ml', 'l-carnitine-600mg-ml', 'l-carnitine-5-pack-600mg'],
  'slu-pp-332-liquid':        ['slu-pp-332-1mg-ml-30ml', 'slu-pp-332-5mg-ml-30ml'],
  'slu-pp-332-capsules':      ['slu-pp-332-1mg-x-30-capsules', 'slu-pp-332-100mg-x-30-capsules', 'slu-pp-332-100mg-x-120-capsules'],
  'ru-58841':                 ['ru-58841-50mg-x-30ml', 'ru-58841-50mg-x-60ml'],

  // Longevity / anti-aging
  'epitalon':                 ['epitalon-10mg', 'epitalon-50mg'],
  'ghk-cu':                   ['ghk-cu-50mg', 'ghk-cu-100mg'],
  'nad':                      ['nad-500mg', 'nad-1000mg'],
  'glutathione':              ['glutathione-200mg', 'glutathione-600mg', 'glutathione-1500mg'],
  'mots-c':                   ['mots-c-10mg', 'mots-c-20mg', 'mots-c-40mg'],
  'ss-31':                    ['ss-31-10mg', 'ss-31-25mg', 'ss-31-50mg'],
  'pinealon':                 ['pinealon-10mg', 'pinealon-20mg'],

  // Nootropic / neuro
  'dsip':                     ['dsip-delta-sleep-inducing-peptide-5mg', 'dsip-delta-sleep-inducing-peptide-10mg', 'dsip-delta-sleep-inducing-peptide-15mg'],
  'na-selank-amidate':        ['na-selank-amidate-10mg', 'na-selank-amidate-30mg'],
  'kisspeptin-10':            ['kisspeptin-10-5mg', 'kisspeptin-10-10mg'],
  'oxytocin':                 ['oxytocin-8mg', 'oxytocin-10mg'],
  'vip':                      ['vip-5mg', 'vip-10mg'],
  'kpv':                      ['kpv-5mg', 'kpv-10mg'],

  // 5-amino-1mq (keep oral-capsule SKU separate — different format)
  '5-amino-1mq':              ['5-amino-1mq-5mg', '5-amino-1mq-50mg'],

  // Blends with dose-variant only (composition constant)
  'bpc-157-tb-500-blend':     ['bpc-157-tb-500-blend-bpc-157-5mg-tb-500-5mg', 'bpc-157-tb-500-blend-bpc-157-10mg-tb-500-10mg'],
  'ipamorelin-tesamorelin-blend': ['ipamorelin-tesamorelin-blend-ipa-3mg-tesa-10mg', 'ipamorelin-tesamorelin-blend-ipa-5mg-tesa-10mg'],
  'ipamorelin-cjc-1295-blend': ['ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg', 'ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipamorelin-5mg'],
}

// Parent metadata — hand-written, compound-level (not size-specific) to avoid
// duplicating any one child's description.
export const PARENT_META: Record<string, {
  name: string
  category: string
  tagline: string
  shortDescription: string
  image: string
  tags: string[]
  seoTitle?: string
  featured?: boolean
  badge?: string
}> = {
  'semaglutide': {
    name: 'Semaglutide',
    category: 'Fat Loss / Metabolic',
    tagline: 'GLP-1 Receptor Agonist — Weekly Dosing',
    shortDescription: 'Long-half-life GLP-1 receptor agonist studied in the STEP weight-management trials. Available in five vial sizes from 3 mg through 30 mg to match research-protocol duration; all sizes draw from the same batch and CoA.',
    image: 'https://phiogen.is/images/products/semaglutide-3mg.png',
    tags: ['GLP-1', 'Weight Management', 'STEP Trials', 'Once-Weekly'],
    seoTitle: 'Semaglutide — Research Vials (3mg / 6mg / 12mg / 20mg / 30mg) | PeptidesMuscle',
    featured: true,
    badge: 'Weight Management',
  },
  'tirzepatide': {
    name: 'Tirzepatide',
    category: 'Fat Loss / Metabolic',
    tagline: 'Dual GLP-1 / GIP Receptor Agonist',
    shortDescription: 'Dual incretin agonist engaging both GLP-1 and GIP receptors. Studied in SURMOUNT-1 (22.5% weight reduction at 72 weeks). Available in 15 mg, 30 mg, and 60 mg vials.',
    image: 'https://phiogen.is/images/products/tirzepatide-15mg.png',
    tags: ['GLP-1', 'GIP', 'SURMOUNT', 'Dual Agonist'],
    seoTitle: 'Tirzepatide — Research Vials (15mg / 30mg / 60mg) | PeptidesMuscle',
    featured: true,
    badge: 'Dual Agonist',
  },
  'retatrutide': {
    name: 'Retatrutide',
    category: 'Fat Loss / Metabolic',
    tagline: 'Triple GLP-1 / GIP / Glucagon Receptor Agonist',
    shortDescription: 'Triple incretin agonist reported to produce 24.2% body-weight reduction at 48 weeks in NEJM Phase 2 data (2023). Available across four vial sizes from 10 mg through 30 mg.',
    image: 'https://phiogen.is/images/products/retatrutide-10mg.png',
    tags: ['GLP-1', 'GIP', 'Glucagon', 'Triple Agonist'],
    seoTitle: 'Retatrutide — Research Vials (10mg / 15mg / 20mg / 30mg) | PeptidesMuscle',
    featured: true,
    badge: 'Triple Agonist',
  },
  'cagri-reta': {
    name: 'CagriReta',
    category: 'Fat Loss / Metabolic',
    tagline: 'Cagrilintide + Retatrutide Combination Vial',
    shortDescription: 'Amylin-analogue cagrilintide combined with triple-agonist retatrutide for researchers exploring additive satiety and energy-balance pathways. Available in 5 mg and 10 mg sizes.',
    image: 'https://phiogen.is/images/products/cagri-reta-5mg.png',
    tags: ['Amylin', 'Triple Agonist', 'Combination'],
  },
  'cagrilintide': {
    name: 'Cagrilintide',
    category: 'Fat Loss / Metabolic',
    tagline: 'Long-Acting Amylin Analogue',
    shortDescription: 'Acylated amylin analogue designed for once-weekly subcutaneous dosing. Studied alongside semaglutide and retatrutide for combined incretin/amylin research. Available in 5 mg and 10 mg.',
    image: 'https://phiogen.is/images/products/cagrilintide-5mg.png',
    tags: ['Amylin', 'Once-Weekly', 'Satiety'],
  },
  'sermorelin': {
    name: 'Sermorelin',
    category: 'Growth Peptides',
    tagline: 'GHRH(1-29) Growth Hormone Releasing Hormone',
    shortDescription: 'Truncated GHRH analogue covering the first 29 residues — the portion sufficient for pituitary GH-release activity. Available as 2 mg, 5 mg, or 10 mg vials.',
    image: 'https://phiogen.is/images/products/sermorelin-2mg.png',
    tags: ['GHRH', 'Pituitary', 'GH-Axis'],
  },
  'tesamorelin': {
    name: 'Tesamorelin',
    category: 'Growth Peptides',
    tagline: 'Stabilized GHRH Analogue — FDA-Studied',
    shortDescription: 'N-terminally trans-3-hexenoyl-modified GHRH(1-44) with enhanced plasma stability. Research focus on visceral-adipose reduction. Available in 10 mg and 20 mg sizes.',
    image: 'https://phiogen.is/images/products/tesamorelin-10mg.png',
    tags: ['GHRH', 'Visceral Fat', 'HIV-Associated Lipodystrophy'],
  },
  'thymosin-alpha-1': {
    name: 'Thymosin Alpha-1',
    category: 'Recovery & Healing',
    tagline: 'Immune-Modulating 28-Residue Peptide',
    shortDescription: 'Acetylated N-terminal fragment of prothymosin-α, studied for T-cell maturation and innate-immune modulation. Available in 5 mg and 10 mg research vials.',
    image: 'https://phiogen.is/images/products/thymosin-alpha-1-5mg.png',
    tags: ['Immune', 'T-Cell', 'Thymus'],
  },
  'cjc-1295-no-dac': {
    name: 'CJC-1295 (No DAC)',
    category: 'Growth Peptides',
    tagline: 'Short-Half-Life GHRH Analogue',
    shortDescription: 'CJC-1295 without the Drug Affinity Complex — ~30 minute half-life, preserves pulsatile GH release. Research vials in 5 mg and 10 mg.',
    image: 'https://phiogen.is/images/products/cjc-1295-no-dac-5mg.png',
    tags: ['GHRH', 'Short-Half-Life', 'Pulsatile'],
  },
  'aod9604': {
    name: 'AOD-9604',
    category: 'Fat Loss / Metabolic',
    tagline: 'hGH Lipolytic C-Terminal Fragment',
    shortDescription: 'Modified 16-residue C-terminal fragment of human growth hormone (177-191), engineered to retain lipolytic activity without the metabolic effects of full-length hGH. Available in 2 mg, 5 mg, and 10 mg.',
    image: 'https://phiogen.is/images/products/aod9604-2mg.png',
    tags: ['Lipolysis', 'hGH Fragment', 'Fat Metabolism'],
  },
  'adipotide-fttp': {
    name: 'Adipotide (FTTP)',
    category: 'Fat Loss / Metabolic',
    tagline: 'Proapoptotic Peptide Targeting Adipose Vasculature',
    shortDescription: 'Fat-targeting proapoptotic peptide studied in primate adiposity models by Arap & Pasqualini. Available in 5 mg and 10 mg research vials.',
    image: 'https://phiogen.is/images/products/adipotide-fttp-5mg.png',
    tags: ['Apoptosis', 'Adipose', 'Proapoptotic'],
  },
  'bam-15': {
    name: 'BAM15',
    category: 'Fat Loss / Metabolic',
    tagline: 'Mitochondrial Uncoupling Agent',
    shortDescription: 'Small-molecule mitochondrial protonophore studied as a tissue-safe alternative to DNP for thermogenesis research. Available as 30 mg/mL or 50 mg/mL in 30 mL.',
    image: 'https://phiogen.is/images/products/bam-15-30mg-ml-30ml.png',
    tags: ['Uncoupler', 'Mitochondria', 'Thermogenesis'],
  },
  'l-carnitine': {
    name: 'L-Carnitine',
    category: 'Fat Loss / Metabolic',
    tagline: 'Mitochondrial Fatty-Acid Transport Cofactor',
    shortDescription: 'Quaternary ammonium compound required for long-chain fatty-acid transport into mitochondria. Available in two concentrations and a 5-pack.',
    image: 'https://phiogen.is/images/products/l-carnitine-400mg-ml.png',
    tags: ['Mitochondria', 'Fatty-Acid Oxidation'],
  },
  'slu-pp-332-liquid': {
    name: 'SLU-PP-332 (Liquid)',
    category: 'Fat Loss / Metabolic',
    tagline: 'ERR Agonist — Oral Solution',
    shortDescription: 'Estrogen-related-receptor agonist studied for endurance and mitochondrial biogenesis. Liquid formulation in two concentrations.',
    image: 'https://phiogen.is/images/products/slu-pp-332-1mg-ml-30ml.png',
    tags: ['ERR', 'Mitochondrial Biogenesis', 'Endurance'],
  },
  'slu-pp-332-capsules': {
    name: 'SLU-PP-332 (Capsules)',
    category: 'Fat Loss / Metabolic',
    tagline: 'ERR Agonist — Oral Capsules',
    shortDescription: 'Estrogen-related-receptor agonist studied for endurance and mitochondrial biogenesis. Capsule format across three strength/count combinations.',
    image: 'https://phiogen.is/images/products/slu-pp-332-1mg-x-30-capsules.png',
    tags: ['ERR', 'Mitochondrial Biogenesis', 'Endurance', 'Capsule'],
  },
  'ru-58841': {
    name: 'RU-58841',
    category: 'Anti-Aging & Longevity',
    tagline: 'Topical Androgen Receptor Antagonist',
    shortDescription: 'Non-steroidal anti-androgen researched for scalp-localized androgen-receptor blockade in hair-follicle models. Available in 30 mL and 60 mL bottles.',
    image: 'https://phiogen.is/images/products/ru-58841-50mg-x-30ml.png',
    tags: ['Anti-Androgen', 'Topical', 'Hair Research'],
  },
  'epitalon': {
    name: 'Epitalon',
    category: 'Anti-Aging & Longevity',
    tagline: 'Khavinson Tetrapeptide — Ala-Glu-Asp-Gly',
    shortDescription: 'Four-residue synthetic peptide derived from Epithalamin, the pineal extract characterized by Khavinson. Available in 10 mg and 50 mg vials.',
    image: 'https://phiogen.is/images/products/epitalon-10mg.png',
    tags: ['Khavinson', 'Tetrapeptide', 'Pineal', 'Telomere'],
  },
  'ghk-cu': {
    name: 'GHK-Cu',
    category: 'Anti-Aging & Longevity',
    tagline: 'Copper Tripeptide — Pickart 1973',
    shortDescription: 'Glycyl-L-histidyl-L-lysine coordinated with Cu(II) — the Pickart copper-tripeptide metallopeptide studied for collagen remodelling and matrix signalling. 50 mg and 100 mg vials.',
    image: 'https://phiogen.is/images/products/ghk-cu-50mg.png',
    tags: ['Copper Tripeptide', 'Pickart', 'Matrix'],
  },
  'nad': {
    name: 'NAD+',
    category: 'Anti-Aging & Longevity',
    tagline: 'Nicotinamide Adenine Dinucleotide',
    shortDescription: 'Cofactor for sirtuin and PARP enzymes implicated in DNA-repair and metabolic longevity programs. Available in 500 mg and 1000 mg sizes.',
    image: 'https://phiogen.is/images/products/nad-500mg.png',
    tags: ['NAD+', 'Sirtuin', 'Cofactor'],
  },
  'glutathione': {
    name: 'Glutathione',
    category: 'Anti-Aging & Longevity',
    tagline: 'Endogenous Tripeptide Antioxidant',
    shortDescription: 'Gamma-glutamyl-cysteinyl-glycine — the primary intracellular antioxidant. Research vials in 200 mg, 600 mg, and 1500 mg.',
    image: 'https://phiogen.is/images/products/glutathione-200mg.png',
    tags: ['Antioxidant', 'Liver', 'Detoxification'],
  },
  'mots-c': {
    name: 'MOTS-c',
    category: 'Anti-Aging & Longevity',
    tagline: 'Mitochondrial-Derived Peptide (MDP)',
    shortDescription: '16-residue peptide encoded by the 12S rRNA region of mitochondrial DNA. Studied for metabolic homeostasis and exercise-response modulation. Available in 10, 20, and 40 mg sizes.',
    image: 'https://phiogen.is/images/products/mots-c-10mg.png',
    tags: ['Mitochondrial', 'MDP', 'Exercise'],
  },
  'ss-31': {
    name: 'SS-31 (Elamipretide)',
    category: 'Anti-Aging & Longevity',
    tagline: 'Mitochondria-Targeted Tetrapeptide',
    shortDescription: 'D-Arg-dimethyl-Tyr-Lys-Phe-NH₂ — a cationic peptide that concentrates in the inner mitochondrial membrane and binds cardiolipin. Available in 10, 25, and 50 mg.',
    image: 'https://phiogen.is/images/products/ss-31-10mg.png',
    tags: ['Mitochondrial', 'Cardiolipin', 'Elamipretide'],
  },
  'pinealon': {
    name: 'Pinealon',
    category: 'Anti-Aging & Longevity',
    tagline: 'Khavinson Tripeptide (Glu-Asp-Arg)',
    shortDescription: 'Short synthetic tripeptide studied by the Khavinson group for neuroprotection and cognitive-aging endpoints. Available in 10 mg and 20 mg.',
    image: 'https://phiogen.is/images/products/pinealon-10mg.png',
    tags: ['Khavinson', 'Tripeptide', 'Neuro'],
  },
  'dsip': {
    name: 'DSIP (Delta Sleep-Inducing Peptide)',
    category: 'Cognitive & Nootropic',
    tagline: 'Nine-Residue Sleep-Modulating Peptide',
    shortDescription: 'Nonapeptide characterized by Monnier in the 1970s for its effects on delta-wave EEG activity. Available as 5, 10, and 15 mg research vials.',
    image: 'https://phiogen.is/images/products/dsip-delta-sleep-inducing-peptide-5mg.png',
    tags: ['Sleep', 'Delta Wave', 'EEG', 'Nonapeptide'],
  },
  'na-selank-amidate': {
    name: 'N-Acetyl Selank Amidate',
    category: 'Cognitive & Nootropic',
    tagline: 'Modified Selank — Enhanced Intranasal Stability',
    shortDescription: 'N-acetylated, C-amidated variant of the Semax-family nootropic Selank, designed for intranasal stability. Available in 10 mg and 30 mg.',
    image: 'https://phiogen.is/images/products/na-selank-amidate-10mg.png',
    tags: ['Nootropic', 'Selank', 'Intranasal'],
  },
  'kisspeptin-10': {
    name: 'Kisspeptin-10',
    category: 'Growth Peptides',
    tagline: 'GnRH-Upstream Decapeptide',
    shortDescription: 'C-terminal decapeptide of kisspeptin — the primary endogenous driver of GnRH release. Available in 5 mg and 10 mg.',
    image: 'https://phiogen.is/images/products/kisspeptin-10-5mg.png',
    tags: ['GnRH', 'Reproductive Axis', 'Decapeptide'],
  },
  'oxytocin': {
    name: 'Oxytocin',
    category: 'Cognitive & Nootropic',
    tagline: 'Nine-Residue Neurohypophyseal Hormone',
    shortDescription: 'Endogenous nonapeptide hormone studied for social-bonding, pair-bonding, and stress-response research. Available in 8 mg and 10 mg.',
    image: 'https://phiogen.is/images/products/oxytocin-8mg.png',
    tags: ['Hormone', 'Social', 'Nonapeptide'],
  },
  'vip': {
    name: 'VIP (Vasoactive Intestinal Peptide)',
    category: 'Recovery & Healing',
    tagline: '28-Residue Neuropeptide',
    shortDescription: 'Vasoactive intestinal peptide — 28-residue neuropeptide studied for smooth-muscle relaxation and mast-cell stabilization research. Available in 5 mg and 10 mg.',
    image: 'https://phiogen.is/images/products/vip-5mg.png',
    tags: ['Neuropeptide', 'Vasoactive'],
  },
  'kpv': {
    name: 'KPV',
    category: 'Recovery & Healing',
    tagline: 'α-MSH C-Terminal Tripeptide',
    shortDescription: 'Lysine-proline-valine — the C-terminal tripeptide of α-MSH studied for anti-inflammatory and gut-barrier endpoints. Available in 5 mg and 10 mg.',
    image: 'https://phiogen.is/images/products/kpv-5mg.png',
    tags: ['Anti-Inflammatory', 'Tripeptide', 'α-MSH'],
  },
  '5-amino-1mq': {
    name: '5-Amino-1MQ',
    category: 'Fat Loss / Metabolic',
    tagline: 'NNMT Inhibitor — Research Vial',
    shortDescription: 'Nicotinamide N-methyltransferase inhibitor studied for white-adipose NAD+ preservation and metabolic endpoints. Lyophilized research vials; 5 mg and 50 mg.',
    image: 'https://phiogen.is/images/products/5-amino-1mq-5mg.png',
    tags: ['NNMT', 'NAD+', 'Adipose'],
  },
  'bpc-157-tb-500-blend': {
    name: 'BPC-157 + TB-500 Blend',
    category: 'Blends & Stacks',
    tagline: 'Orthogonal Tissue-Repair Blend',
    shortDescription: 'Co-lyophilized blend of BPC-157 (angiogenic signalling) and TB-500 (actin-motility). Available in matched 5+5 mg and 10+10 mg ratios.',
    image: 'https://phiogen.is/images/products/bpc-157-tb-500-blend-bpc-157-5mg-tb-500-5mg.png',
    tags: ['BPC-157', 'TB-500', 'Repair Blend'],
  },
  'ipamorelin-tesamorelin-blend': {
    name: 'Ipamorelin + Tesamorelin Blend',
    category: 'Blends & Stacks',
    tagline: 'GHRP + GHRH Dual-Axis Blend',
    shortDescription: 'Co-formulated ipamorelin (GHRP, ghrelin-receptor agonist) with tesamorelin (stabilized GHRH). Two ipamorelin-dose variants over constant 10 mg tesamorelin.',
    image: 'https://phiogen.is/images/products/ipamorelin-tesamorelin-blend-ipa-3mg-tesa-10mg.png',
    tags: ['Ipamorelin', 'Tesamorelin', 'GHRP+GHRH'],
  },
  'ipamorelin-cjc-1295-blend': {
    name: 'Ipamorelin + CJC-1295 Blend',
    category: 'Blends & Stacks',
    tagline: 'GHRP + Short-Half-Life GHRH Blend',
    shortDescription: 'Co-formulated ipamorelin with CJC-1295 (no-DAC). Dual ghrelin/GHRH stimulation studied for pulsatile GH release. Available as matched 5+5 mg.',
    image: 'https://phiogen.is/images/products/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg.png',
    tags: ['Ipamorelin', 'CJC-1295', 'GHRP+GHRH'],
  },
}

// child slug → parent slug  (derived once at module load)
export const CHILD_TO_PARENT: Record<string, string> = Object.entries(VARIANT_GROUPS)
  .reduce<Record<string, string>>((acc, [parent, children]) => {
    children.forEach(c => { acc[c] = parent })
    return acc
  }, {})

// Set of all parent slugs
export const PARENT_SLUGS = new Set(Object.keys(VARIANT_GROUPS))

export function isChildVariant(slug: string): boolean {
  return slug in CHILD_TO_PARENT
}

export function isParent(slug: string): boolean {
  return PARENT_SLUGS.has(slug)
}

// Derive a display label from a child product's name
function deriveVariantLabel(child: Product): string {
  // Strip the parent portion, keep size/pack descriptor
  const sizeMatch = child.name.match(/(\d+(?:\.\d+)?)\s*(mg|mcg|mg\/mL|mL|mg\s*ml)(\s*[x×]\s*\d+\s*(?:capsules?|tablets?|pack|vials?))?/i)
  if (sizeMatch) return sizeMatch[0].replace(/\s+/g, ' ').trim()
  const packMatch = child.name.match(/(\d+[-\s]?pack)/i)
  if (packMatch) return packMatch[1]
  return child.name
}

// Return the ordered variant list for a parent slug. Empty array if parent has no children.
export function getVariantsForParent(parentSlug: string): ProductVariant[] {
  const children = VARIANT_GROUPS[parentSlug] ?? []
  return children
    .map(childSlug => {
      const child = products.find(p => p.slug === childSlug)
      if (!child) return null
      return {
        slug: child.slug,
        label: deriveVariantLabel(child),
        price: child.price,
        affiliateSlug: child.slug,
      }
    })
    .filter((v): v is ProductVariant => v !== null)
}

// Build a synthetic parent Product from PARENT_META + first-child defaults.
// The parent's non-meta fields (fullDescription, highlights, faqs, benefits,
// protocol, synergies) come from the first child so the page still renders
// compound-level content. The parent's hero-level fields (name, tagline,
// shortDescription, etc.) come from PARENT_META so nothing says "3 mg".
export function getParentProduct(parentSlug: string): Product | undefined {
  const meta = PARENT_META[parentSlug]
  if (!meta) return undefined
  const children = VARIANT_GROUPS[parentSlug] ?? []
  const firstChild = products.find(p => p.slug === children[0])
  if (!firstChild) return undefined

  // Lowest-priced variant is the "from $" price
  const variants = getVariantsForParent(parentSlug)
  const parsedPrices = variants
    .map(v => parseFloat(v.price.replace(/[^0-9.]/g, '')))
    .filter(n => !isNaN(n))
  const minPrice = parsedPrices.length ? Math.min(...parsedPrices) : 0
  const priceLabel = parsedPrices.length ? `From $${minPrice.toFixed(2)}` : firstChild.price

  return {
    ...firstChild,
    slug: parentSlug,
    name: meta.name,
    tagline: meta.tagline,
    category: meta.category,
    tags: meta.tags,
    image: meta.image,
    seoTitle: meta.seoTitle ?? `${meta.name} | PeptidesMuscle`,
    shortDescription: meta.shortDescription,
    price: priceLabel,
    featured: meta.featured,
    badge: meta.badge,
    affiliateUrl: firstChild.affiliateUrl,
  }
}

// Every Product (real or synthesized parent) that should have a static page.
// = all parent slugs + all products that are NOT child variants.
export function getCanonicalProducts(): Product[] {
  const parents: Product[] = Object.keys(VARIANT_GROUPS)
    .map(getParentProduct)
    .filter((p): p is Product => p !== undefined)
  const standalones = products.filter(p => !CHILD_TO_PARENT[p.slug])
  return [...parents, ...standalones]
}

// Lookup used by the product page: handles both parent slugs and standalone children.
// Returns undefined for child slugs (they must 301 to parent — caller should handle).
export function getCanonicalProductBySlug(slug: string): Product | undefined {
  if (PARENT_SLUGS.has(slug)) return getParentProduct(slug)
  if (CHILD_TO_PARENT[slug]) return undefined // will be redirected
  return products.find(p => p.slug === slug)
}
