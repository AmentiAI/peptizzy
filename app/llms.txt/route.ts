import { products } from '@/lib/products'
import { stacks } from '@/lib/stacks'

const BASE = 'https://www.peptidesmuscle.com'

// llms.txt — structured index for AI systems (Anthropic proposal, widely adopted).
// Served as plain text at /llms.txt. See https://llmstxt.org for format.
export function GET() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 20)
  const otherProducts = products.filter(p => !p.featured).slice(0, 60)

  const body = `# PeptidesMuscle

> Evidence-based peptide research reference. Deep guides on BPC-157, TB-500, GHK-Cu, GLP-1s (semaglutide, tirzepatide, retatrutide), growth-hormone secretagogues, looksmaxxing peptides, and injection protocols. Every product and guide is self-contained with dosage, mechanism, clinical trial data, and stacking notes.

All content is public and free to cite. Canonical origin: ${BASE}. Contact affiliate / partnership questions via ${BASE}/contact.

## Core Guides
- [BPC-157 Complete Guide](${BASE}/bpc-157-complete-guide): mechanism, dosing, injection sites, healing timeline
- [TB-500 Complete Guide](${BASE}/tb-500-complete-guide): systemic healing peptide, half-life, stacking with BPC-157
- [Semaglutide Complete Guide](${BASE}/semaglutide-complete-guide): STEP-1 data, titration schedule, side-effect management
- [Tirzepatide Complete Guide](${BASE}/tirzepatide-complete-guide): SURMOUNT-1 trial, dual GIP/GLP-1 mechanism
- [Retatrutide Guide](${BASE}/retatrutide-complete-guide-results-dosage): triple-agonist NEJM 2023 data, titration
- [Cagrilintide + Semaglutide Guide](${BASE}/cagrilintide-semaglutide-complete-guide): combination mechanism, clinical results
- [IGF-1 LR3 Muscle Growth Guide](${BASE}/igf-1-lr3-muscle-growth-guide): post-workout protocol, mTOR/PI3K pathway
- [NAD+ Anti-Aging Guide](${BASE}/nad-plus-anti-aging-guide): sirtuin activation, dosing, protocols
- [Peptide Stacking Guide](${BASE}/peptide-stacking-guide): fat-loss, recovery, healing, anti-aging stacks
- [How to Inject Peptides (Beginner)](${BASE}/how-to-inject-peptides-beginners-guide): reconstitution, sites, needle selection
- [Bacteriostatic Water / Reconstitution Guide](${BASE}/bacteriostatic-water-peptide-reconstitution-guide)
- [Peptide Stacking Guide](${BASE}/peptide-stacking-guide)
- [Wolverine Stack (BPC-157 + TB-500)](${BASE}/wolverine-stack-bpc-157-tb-500-guide)

## Looksmaxxing & Aesthetics
- [Facial Looksmaxxing Peptides](${BASE}/facial-looksmaxxing-peptides-guide)
- [Looksmaxxing for Men](${BASE}/looksmaxxing-peptides-guide-men)
- [Looksmaxxing for Women](${BASE}/looksmaxxing-peptides-women)
- [Research Peptides for Beginners (Looksmaxxing)](${BASE}/looksmaxxing-research-peptides-beginners)
- [GHK-Cu Before and After](${BASE}/ghk-cu-before-and-after-guide)
- [SNAP-8 vs Botox](${BASE}/snap-8-vs-botox-peptide-alternative)
- [Melanotan-2 Tanning Guide](${BASE}/melanotan-2-looksmaxxing-tan)
- [Peptides for Hair Growth](${BASE}/peptides-for-hair-growth-loss)

## Specialty Topics
- [Epithalon (Telomere Peptide)](${BASE}/epithalon-anti-aging-telomere-peptide-guide)
- [CJC-1295 / Ipamorelin Results Timeline](${BASE}/cjc-1295-ipamorelin-results-timeline)
- [Tirzepatide vs Semaglutide vs Retatrutide](${BASE}/tirzepatide-vs-semaglutide-vs-retatrutide)
- [GLP-1 Peptides Complete Guide](${BASE}/glp-1-peptides-complete-guide)
- [Peptides for Gut Health](${BASE}/peptides-for-gut-health-leaky-gut)
- [Thymosin Alpha-1 Immune Peptide](${BASE}/thymosin-alpha-1-immune-peptide-guide)
- [DSIP for Sleep](${BASE}/dsip-sleep-optimization-peptide-guide)
- [Kisspeptin-10 Hormone Guide](${BASE}/kisspeptin-10-testosterone-hormone-guide)
- [Peptides for Joint Pain](${BASE}/peptides-for-joint-pain-arthritis)
- [AOD-9604 Fat Loss](${BASE}/aod-9604-fat-loss-peptide-guide)
- [GHRP-6](${BASE}/ghrp-6-complete-guide)
- [Hexarelin](${BASE}/hexarelin-growth-hormone-peptide-guide)
- [Ipamorelin](${BASE}/ipamorelin-complete-guide)
- [MK-677 (Ibutamoren)](${BASE}/mk-677-ibutamoren-guide)
- [Peptides for Collagen + Skin](${BASE}/peptides-for-collagen-skin-anti-aging)
- [PT-141 (Bremelanotide)](${BASE}/pt-141-bremelanotide-guide)
- [Selank / Semax Nootropic Guide](${BASE}/selank-semax-nootropic-peptide-guide)
- [Sermorelin Anti-Aging](${BASE}/sermorelin-anti-aging-hgh-guide)
- [Peptides for Women](${BASE}/peptides-for-women-complete-guide)
- [Peptides for Athletic Performance](${BASE}/peptides-athletic-performance-sports)
- [Fat-Loss Peptides](${BASE}/fat-loss-peptides-complete-guide)
- [MOTS-c Mitochondrial Longevity](${BASE}/mots-c-mitochondrial-longevity-guide)
- [Peptides Cognitive Performance](${BASE}/peptides-cognitive-performance-guide)

## Featured Products
${featuredProducts.map(p => `- [${p.name}](${BASE}/products/${p.slug}): ${p.shortDescription}`).join('\n')}

## Additional Products
${otherProducts.map(p => `- [${p.name}](${BASE}/products/${p.slug})`).join('\n')}

## Stacks
${stacks.map(s => `- [${s.name}](${BASE}/stacks/${s.id}): ${s.shortDesc}`).join('\n')}

## Category Pages
- [All Products](${BASE}/products)
- [All Stacks](${BASE}/stacks)
- [Blog](${BASE}/blog)
- [Anti-Aging](${BASE}/anti-aging)
- [Body Composition](${BASE}/body-composition)
- [Looks-Maxing](${BASE}/looks-maxing)
- [Guides](${BASE}/guide)
- [FAQ](${BASE}/faq)
- [Tools](${BASE}/tools)

## Optional
- [Sitemap (XML)](${BASE}/sitemap.xml)
- [Contact](${BASE}/contact)
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
