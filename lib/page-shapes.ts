import type { Product } from './products'
import { VARIANT_GROUPS, PARENT_SLUGS } from './variants'

// Seven page shapes per SEO playbook. Each shape enables a different section
// ensemble — value-shop shows a prominent variants grid; recon-first emphasizes
// reconstitution math; solvent is its own very-different page. Pages with
// different shapes should score <20% 6-gram shingle overlap.

export type PageShape =
  | 'value-shop'   // ≥3 variants (semaglutide, retatrutide, etc.) — variants dominate
  | 'recon-first'  // standard lyophilized vial, 1-2 sizes — reconstitution focus
  | 'capsule'      // oral capsule — no reconstitution, oral dosing panel
  | 'liquid'       // pre-dissolved solution — concentration/aliquot focus
  | 'blend'        // multi-component blend — component ratio + mechanism pairing
  | 'solvent'      // bacteriostatic water — preservative + handling only
  | 'specialty'    // topical / unusual format — mechanism-centric

export function pageShape(product: Product): PageShape {
  const slug = product.slug
  const name = product.name.toLowerCase()
  const cat = product.category

  // Solvent: bacteriostatic water only
  if (/bacteriostatic[- ]water/i.test(slug) || /bacteriostatic[- ]water/i.test(name)) return 'solvent'

  // Blend: explicit blend products or Blends & Stacks category
  if (cat === 'Blends & Stacks') return 'blend'
  if (/blend/.test(name) || /blend/.test(slug)) return 'blend'

  // Capsule / tablet: oral format
  if (/capsule/.test(slug) || /capsule/.test(name)) return 'capsule'
  if (/tablet/.test(slug) || /tablet/.test(name)) return 'capsule'

  // Liquid: pre-dissolved (ends in -ml or -30ml, or explicit liquid descriptor).
  // Parent slugs like 'slu-pp-332-liquid' are liquids.
  if (/-\d+ml($|-)/.test(slug)) return 'liquid'
  if (/mg[- ]ml/.test(slug)) return 'liquid'
  if (slug === 'methylene-blue' || slug.startsWith('methylene-blue-')) return 'liquid'
  if (slug.endsWith('-liquid')) return 'liquid'

  // Value-shop: parent product with ≥3 variants
  if (PARENT_SLUGS.has(slug)) {
    const variantCount = VARIANT_GROUPS[slug]?.length ?? 0
    if (variantCount >= 3) return 'value-shop'
  }

  // Specialty: topical, one-off mechanism products flagged by category+suffix.
  // SNAP-8 is a SNARE-blocker specialty; RU-58841 is topical.
  if (/ru-58841/.test(slug)) return 'specialty'
  if (/snap-8/.test(slug)) return 'specialty'

  // Everything else: standard lyophilized peptide vial
  return 'recon-first'
}

// Block ensemble per shape. `summary` is universal. Each shape enables/omits
// specific blocks so the HTML section set — not just the text — varies by shape.
// Permutations rotate section ORDER within the enabled set (per product-slug hash)
// so two products of the same shape don't render identical layouts.
export const SHAPE_BLOCK_ORDERS: Record<PageShape, readonly (readonly string[])[]> = {
  'value-shop': [
    ['summary', 'variants', 'specs', 'clinicalEvidence', 'benefits'],
    ['summary', 'variants', 'clinicalEvidence', 'specs', 'benefits'],
    ['summary', 'clinicalEvidence', 'variants', 'specs', 'benefits'],
  ],
  'recon-first': [
    ['summary', 'reconstitution', 'specs', 'highlights', 'benefits'],
    ['summary', 'highlights', 'reconstitution', 'benefits', 'specs'],
    ['summary', 'benefits', 'reconstitution', 'highlights', 'specs'],
  ],
  'capsule': [
    ['summary', 'oralDosing', 'specs', 'benefits'],
    ['summary', 'specs', 'oralDosing', 'benefits'],
    ['summary', 'benefits', 'oralDosing', 'specs'],
  ],
  'liquid': [
    ['summary', 'concentration', 'specs', 'handling', 'highlights'],
    ['summary', 'specs', 'concentration', 'highlights', 'handling'],
  ],
  'blend': [
    ['summary', 'components', 'variants', 'specs', 'benefits'],
    ['summary', 'variants', 'components', 'benefits', 'specs'],
  ],
  'solvent': [
    ['summary', 'preservative', 'specs', 'handling'],
  ],
  'specialty': [
    ['summary', 'mechanism', 'specs', 'benefits'],
    ['summary', 'specs', 'mechanism', 'benefits'],
  ],
}

// H1 prefix/pattern per shape. Page title formula varies by shape so titles
// aren't interchangeable across pages. Keep it tight — Google trims ≥60 chars.
export function shapeSeoTitle(product: Product, shape: PageShape): string {
  const base = 'PeptidesMuscle'
  switch (shape) {
    case 'value-shop':
      return `${product.name} — Research Vials | ${base}`
    case 'recon-first':
      return `${product.name} (Lyophilized Peptide Vial) | ${base}`
    case 'capsule':
      return `${product.name} Oral Capsules | ${base}`
    case 'liquid':
      return `${product.name} Solution | ${base}`
    case 'blend':
      return `${product.name} — Co-Formulated Blend | ${base}`
    case 'solvent':
      return `${product.name} — Reconstitution Solvent | ${base}`
    case 'specialty':
      return `${product.name} | ${base}`
  }
}

// H2 copy per shape — distinct phrasing per shape avoids cross-shape heading
// overlap while the within-shape rotation handled by slug-hash keeps same-shape
// pages from using identical H2 ordering.
export const SHAPE_H2: Record<PageShape, { [key: string]: readonly string[] }> = {
  'value-shop': {
    variants: ['Available Research Sizes', 'Size & Price Grid', 'Research-Vial Options'],
    clinicalEvidence: ['Clinical Trial Evidence', 'Published Trial Endpoints', 'Key Trial Data'],
    benefits: ['Reported Endpoints', 'Study-Observed Effects'],
  },
  'recon-first': {
    reconstitution: ['Reconstitution Notes', 'Dilution Guidance', 'Prep Notes'],
    highlights: ['Mechanism Notes', 'Research Highlights'],
    benefits: ['Reported Outcomes', 'Documented Effects'],
  },
  'capsule': {
    oralDosing: ['Oral Dosing Panel', 'Capsule Administration'],
    benefits: ['Research Outcomes', 'Reported Effects'],
  },
  'liquid': {
    concentration: ['Concentration & Volume', 'Stock Strength & Volume'],
    handling: ['Handling & Stability', 'Storage Notes'],
    highlights: ['Handling Highlights'],
  },
  'blend': {
    components: ['Component Breakdown', 'Ingredient Ratio'],
    variants: ['Available Dose Ratios'],
    benefits: ['Mechanism Pair Outcomes'],
  },
  'solvent': {
    preservative: ['Preservative System', 'Antimicrobial Agent'],
    handling: ['Handling Protocol', 'Storage & Stability'],
  },
  'specialty': {
    mechanism: ['Mechanism of Action', 'Research Target'],
    benefits: ['Study Outcomes'],
  },
}
