import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Looksmaxxing Peptides: The Complete Male Aesthetic Protocol | PeptidesMuscle',
  description: 'The definitive looksmaxxing peptide guide. GHK-Cu for skin collagen, SNAP-8 for wrinkle reduction, BPC-157 for recovery — the complete stack for peak physical appearance optimization.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/looks-maxing' },
  keywords: 'looksmaxxing peptides, looksmaxxing guide, best peptides for looks maxing, looks maxing stack, peptides for appearance, GHK-Cu looksmaxxing',
  openGraph: {
    title: 'Looksmaxxing Peptides: The Complete Male Aesthetic Protocol | PeptidesMuscle',
    description: 'The definitive looksmaxxing peptide guide. GHK-Cu, SNAP-8, BPC-157 — the complete stack for peak physical appearance.',
    url: 'https://www.peptidesmuscle.com/looks-maxing',
    type: 'website',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Looksmaxxing Peptides: The Complete Male Aesthetic Protocol',
    description: 'The definitive looksmaxxing peptide guide. GHK-Cu, SNAP-8, BPC-157 — the complete stack for peak physical appearance.',
    images: ['/max-avatar.png'],
  },
}

const pillars = [
  {
    num: '01',
    slug: 'ghk-cu',
    title: 'Skin Quality',
    sub: 'The Most Visible Signal',
    body: `Skin quality is the most immediately visible component of physical appearance. Collagen density, skin thickness, texture, tone, and luminosity are structural properties that decline with age — but can be actively reversed with the right peptide protocols.

GHK-Cu (Copper Peptide) is the cornerstone compound. With over 50 years of clinical investigation, GHK-Cu activates more than 4,000 genes related to skin repair. It stimulates collagen and elastin synthesis, promotes skin remodeling, increases skin thickness by up to 121%, and reduces wrinkles measurably. The results compound over time.`,
    points: [
      'Type I and III collagen stimulation — the structural proteins of youthful skin',
      'Elastin activation for firmness and snap-back quality',
      'Skin thickness increases up to 121% in clinical data',
      'Hyperpigmentation reduction and even skin tone',
      'Hair follicle enlargement and growth promotion',
      'Wound healing and scar remodeling acceleration',
    ],
  },
  {
    num: '02',
    slug: 'melanotan-2',
    title: 'Pigmentation',
    sub: 'The Attractiveness Multiplier',
    body: `Tanned, bronze skin is consistently rated as significantly more attractive across cultures. The biological reason: pigmentation signals health — high melanin indicates UV defense capability and metabolic robustness. Melanotan 2 activates this signal directly.

By activating melanocortin receptors, MT-2 stimulates the production of eumelanin — the deep, olive-toned pigmentation associated with the highest attractiveness ratings. The tan develops with minimal UV exposure, protects against future sun damage, and provides a skin-quality multiplier that training and skincare alone cannot achieve.

Beyond pigmentation, MT-2 activates MC4R receptors that enhance libido, suppress appetite, and improve body composition — making it one of the most comprehensively beneficial looks maxing compounds available.`,
    points: [
      'Activates eumelanin — the deep, attractive pigmentation type',
      'Tan develops with minimal UV exposure (80% reduction)',
      'Protective against future UV damage once melanin is saturated',
      'MC4R activation enhances libido and confidence',
      'Appetite suppression supporting lean body composition',
      'Mood elevation via dopaminergic pathway stimulation',
    ],
  },
  {
    num: '03',
    slug: 'ipamorelin',
    title: 'Body Composition',
    sub: 'The Structural Foundation',
    body: `Lean muscle mass and low body fat are the structural prerequisites for physical attractiveness. Growth hormone peptides create the hormonal environment where this transformation occurs naturally and progressively.

Ipamorelin is the gold standard in GH optimization — triggering potent, selective GH pulses without the cortisol elevation seen with other GHRPs. Downstream effects are comprehensive: enhanced muscle definition, reduced body fat, improved skin thickness and elasticity, accelerated recovery from training, better sleep architecture, and the general vitality associated with youthful GH levels.

Stacked with CJC-1295, the combination produces GH elevations approaching direct GH administration while maintaining the natural pulsatile pattern that protects receptor sensitivity.`,
    points: [
      'Selective GH pulses without cortisol or prolactin elevation',
      'Simultaneous lean mass gain and fat loss',
      'Enhanced skin elasticity and thickness via GH signaling',
      'Dramatically improved sleep quality and recovery',
      'Safe for extended use due to high selectivity profile',
      'Synergizes with CJC-1295 for amplified GH output',
    ],
  },
  {
    num: '04',
    slug: 'epithalon',
    title: 'Cellular Age',
    sub: 'The Deepest Optimization',
    body: `Biological age — measured by telomere length, mitochondrial function, and cellular senescence — is the deepest determinant of physical appearance. Two people of the same chronological age can look a decade apart in biological terms.

Epithalon is the only known compound that activates telomerase — the enzyme that rebuilds telomeres. Shorter telomeres mean cells that replicate with increasing error, producing lower quality tissue: thinner skin, weaker connective tissue, reduced muscle regeneration. Epithalon reverses this trajectory.

Studies have demonstrated measurable telomere lengthening in subjects following Epithalon protocols, along with improvements in sleep quality, immune function, and hormone regulation — addressing aging at its root cause.`,
    points: [
      'Activates telomerase — the only known compound to do so',
      'Measurable telomere lengthening in clinical protocols',
      'Reverses biological aging at the chromosomal level',
      'Dramatically improves sleep depth and circadian regulation',
      'Potent antioxidant protection against oxidative damage',
      'Normalizes hormone production including melatonin and cortisol',
    ],
  },
]

const stackProtocol = [
  { phase: 'Foundation', name: 'BPC-157 + TB-500', purpose: 'Repair cellular damage, reduce inflammation, optimize environment', freq: 'Daily' },
  { phase: 'Skin', name: 'GHK-Cu', purpose: 'Stimulate collagen synthesis, improve skin quality and thickness', freq: '3× weekly' },
  { phase: 'Pigmentation', name: 'Melanotan 2', purpose: 'Activate melanin production for optimal tone and UV protection', freq: 'Loading + Maintenance' },
  { phase: 'Hormones', name: 'Ipamorelin + CJC-1295', purpose: 'Optimize GH pulse frequency for body composition and skin', freq: '2–3× daily' },
  { phase: 'Longevity', name: 'Epithalon', purpose: 'Telomere extension and cellular age reversal', freq: 'Twice yearly cycle' },
]

export default function LooksMaxingPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20 overflow-hidden">
        <div className="spot w-[600px] h-[400px] bg-[#d4a043] opacity-[0.05] -top-10 right-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Definitive Guide</p>
          </div>
          <h1 className="mb-6" style={{ lineHeight: '0.93' }}>
            <span className="display text-white block" style={{ fontSize: 'clamp(50px, 7vw, 100px)' }}>
              The Science of
            </span>
            <span className="display-italic gold-shimmer block" style={{ fontSize: 'clamp(50px, 7vw, 100px)' }}>
              Looks Maxing
            </span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl mb-8">
            Looks maximization has entered a new era — targeting the biological foundations of physical attractiveness at the molecular level.
          </p>
          <a href="/go/shop"
                          target="_blank" rel="noopener nofollow sponsored"
            className="btn-primary text-[13px] px-7 py-3.5 inline-flex">
            Start Your Protocol
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      <div className="rule" />

      {/* INTRO */}
      <section className="py-20 max-w-4xl mx-auto px-6 md:px-10">
        <p className="label-gold mb-4">Why Peptides</p>
        <h2 className="font-['Playfair_Display'] font-900 text-white mb-7"
          style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
          Physical attractiveness is a biological signal.
        </h2>
        <div className="space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
          <p>Symmetry, skin quality, body composition, hormonal markers, and even scent are all downstream expressions of biological health. Optimizing these markers means optimizing the biological systems that produce them.</p>
          <p>Peptides are the most precise tools available for this purpose. Unlike broad interventions, peptides operate as targeted biological messengers — binding to specific receptors and triggering precisely defined cellular responses. Optimization at the molecular level.</p>
          <p>The four pillars of physical attractiveness — skin quality, pigmentation, body composition, and cellular age — each have corresponding peptide protocols that address them directly and measurably.</p>
        </div>
      </section>

      {/* PILLARS */}
      {pillars.map((pillar, idx) => {
        const product = products.find(p => p.slug === pillar.slug)
        if (!product) return null
        const isEven = idx % 2 === 0
        return (
          <section key={pillar.num} className={`py-20 ${idx % 2 === 1 ? 'bg-[#0a0a0e]' : ''}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : ''}`}>
                {/* Text side */}
                <div className={isEven ? '' : 'lg:order-2'}>
                  <p className="mono text-[#d4a043] text-[12px] mb-3">Pillar {pillar.num}</p>
                  <h2 className="font-['Playfair_Display'] font-900 text-white mb-2"
                    style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
                    {pillar.title}
                  </h2>
                  <p className="font-['Playfair_Display'] font-700 italic gold-text text-2xl mb-7">{pillar.sub}</p>
                  <div className="space-y-4 text-[#8888a0] text-[15px] leading-relaxed mb-8">
                    {pillar.body.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                  <div className="space-y-2.5 mb-8">
                    {pillar.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border border-[#d4a043]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#d4a043]" />
                        </div>
                        <span className="text-[#8888a0] text-[14px] leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/products/${pillar.slug}`} className="btn-primary text-[12px] py-3 px-6 inline-flex">
                    View Full Protocol
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

                {/* Image side */}
                <div className={`relative ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="relative aspect-square rounded-2xl overflow-hidden img-shimmer"
                    style={{ background: 'radial-gradient(ellipse at 50% 65%, rgba(212,160,67,0.15), #0a0a0e)' }}>
                    <Image src={product.image} alt={product.name} fill className="object-contain p-8" />
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#07070a]/80 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      {product.badge && <span className="tag-gold mb-2 inline-block">{product.badge}</span>}
                      <p className="font-['Playfair_Display'] font-900 text-white text-2xl">{product.name}</p>
                      <p className="text-[#8888a0] text-[14px] mt-1">{product.tagline}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 -z-10 scale-[0.7] blur-[80px] opacity-10 rounded-full"
                    style={{ background: 'radial-gradient(ellipse, #d4a043, transparent)' }} />
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* THE STACK */}
      <section className="py-20 bg-[#0a0a0e]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="label-gold mb-4 text-center">Complete Protocol</p>
          <h2 className="font-['Playfair_Display'] font-900 text-white text-center mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
            The Complete Looks Max Stack
          </h2>
          <p className="text-[#8888a0] text-center text-[16px] max-w-xl mx-auto mb-12">
            Maximum effect requires addressing all four pillars simultaneously. This is the comprehensive entry-level stack.
          </p>

          <div className="card-elevated rounded-2xl overflow-hidden">
            <div className="divide-y divide-white/[0.05]">
              {stackProtocol.map((item, i) => (
                <div key={i} className="flex items-start gap-5 p-6">
                  <div className="w-6 h-6 rounded-full border border-[#d4a043]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#d4a043] font-700 text-[10px]">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="mono text-[11px] text-[#50505e]">{item.phase}</span>
                      <span className="text-white font-700 text-[15px]">{item.name}</span>
                    </div>
                    <p className="text-[#8888a0] text-[14px]">{item.purpose}</p>
                  </div>
                  <span className="text-[#50505e] text-[12px] mono flex-shrink-0 mt-0.5">{item.freq}</span>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-white/[0.05]">
              <a href="/go/shop"
                          target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary w-full justify-center py-4 text-[13px]">
                Shop This Stack at Apollo Peptide Sciences
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
