import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Peptides for Anti-Aging: Epithalon, NAD+ & GHK-Cu Longevity Protocols | PeptidesMuscle',
  description: 'The definitive anti-aging peptide guide. Epithalon for telomere lengthening, NAD+ for cellular energy, GHK-Cu for skin — science-backed protocols that reverse biological age.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/anti-aging' },
  keywords: 'peptides for anti aging, anti-aging peptides, epithalon longevity, NAD+ anti-aging, best peptides for longevity, telomere peptide',
  openGraph: {
    title: 'Peptides for Anti-Aging: Epithalon, NAD+ & GHK-Cu | PeptidesMuscle',
    description: 'Epithalon for telomere lengthening, NAD+ for cellular energy, GHK-Cu for skin — science-backed anti-aging peptide protocols.',
    url: 'https://www.peptidesmuscle.com/anti-aging',
    type: 'website',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Anti-Aging: Epithalon, NAD+ & GHK-Cu | PeptidesMuscle',
    description: 'Epithalon, NAD+, GHK-Cu — science-backed anti-aging peptide protocols that reverse biological age.',
    images: ['/max-avatar.png'],
  },
}

const accent = '#a78bfa'

const pillars = [
  {
    num: '01',
    slug: 'epithalon',
    title: 'Telomere Restoration',
    sub: 'The Root Cause of Aging',
    body: `Every time a cell divides, its telomeres — the protective caps on chromosomes — shorten. When telomeres become critically short, the cell enters senescence: it stops dividing, releases inflammatory signals, and drags surrounding tissue into a state of accelerated decay. This is not metaphorical aging. It is aging at the molecular level.

Epithalon is the only known compound demonstrated to activate telomerase — the enzyme capable of rebuilding telomere length. Developed and studied for over 35 years by the St. Petersburg Institute of Bioregulation, Epithalon has shown measurable telomere lengthening in multiple human and animal studies, along with dramatically improved sleep architecture, restored melatonin production, normalized cortisol rhythms, and reduced markers of oxidative stress.

Two cycles per year is the standard research protocol. The compound's effects appear to be cumulative — subjects followed over multiple years show progressive improvements in biological age markers.`,
    points: [
      'Activates telomerase — the only known compound proven to do so in human tissue',
      'Measurable telomere lengthening documented across multiple independent studies',
      'Restores melatonin production disrupted by age-related pineal gland decline',
      'Normalizes cortisol patterns — reduces chronic low-grade inflammatory state',
      'Potent antioxidant activity reduces oxidative damage accumulation',
      'Immune system recalibration toward youthful baseline function',
    ],
  },
  {
    num: '02',
    slug: 'nad-plus',
    title: 'Cellular Energy Restoration',
    sub: 'The Metabolic Currency of Youth',
    body: `NAD+ (Nicotinamide Adenine Dinucleotide) is the coenzyme at the center of every energy-producing reaction in the human body. It is the essential cofactor for sirtuins — the longevity proteins that regulate DNA repair, gene expression, and mitochondrial function. It drives the conversion of nutrients into ATP, powers the cellular repair enzymes that undo DNA damage, and maintains the metabolic rate that keeps tissue functioning at youthful efficiency.

By age 60, NAD+ levels have declined by roughly 50% from peak. This decline is not incidental — it is causative. Lower NAD+ means reduced sirtuin activity, impaired DNA repair, declining mitochondrial density, and a cascade of age-associated metabolic dysfunction.

NAD+ peptide supplementation replenishes cellular NAD+ pools directly, bypassing the metabolic bottlenecks that limit oral precursor conversion. The results are measurable: improved cellular energy output, enhanced DNA repair capacity, restored mitochondrial function, and the metabolic substrate that longevity interventions like caloric restriction and exercise actually work through.`,
    points: [
      'Essential cofactor for sirtuins — the master regulators of cellular longevity',
      'Direct replenishment bypasses conversion bottlenecks of oral NAD+ precursors',
      'Restores mitochondrial density and ATP production capacity',
      'Activates PARP enzymes responsible for DNA break repair',
      'Improves insulin sensitivity and metabolic flexibility',
      'Supports neurotransmitter synthesis and cognitive clarity',
    ],
  },
  {
    num: '03',
    slug: 'ghk-cu',
    title: 'Tissue & Skin Restoration',
    sub: 'The Biological Reset Signal',
    body: `GHK-Cu is a naturally occurring copper-binding tripeptide — present in human plasma, saliva, and urine — whose concentrations peak in youth and decline sharply with age. At 20, plasma GHK-Cu is approximately 200ng/mL. By 60, it has fallen below 80ng/mL. This decline correlates directly with the tissue deterioration we associate with aging.

The mechanism is extraordinary in its scope: GHK-Cu has been shown to modulate the expression of over 4,000 human genes. It upregulates genes related to collagen synthesis, elastin production, skin repair, anti-inflammatory signaling, and wound healing. It downregulates genes associated with cancer progression, inflammation, and tissue degradation. It essentially shifts the gene expression profile of aging cells toward patterns characteristic of younger tissue.

In measurable terms: skin thickness increases up to 121%, wrinkle depth reduces measurably, hair follicle size increases, and connective tissue repair rates dramatically improve. GHK-Cu is the signal the body uses to initiate tissue renewal — and supplementing it restores that signal in aging tissue.`,
    points: [
      'Modulates over 4,000 genes — the broadest tissue-regulatory action of any peptide',
      'Increases skin thickness up to 121% and reduces wrinkle depth measurably',
      'Stimulates collagen I, III, and elastin synthesis across all connective tissue',
      'Reverses inflammatory gene expression patterns toward youthful profiles',
      'Promotes hair follicle enlargement and growth factor production',
      'Accelerates wound healing and reduces scar formation',
    ],
  },
  {
    num: '04',
    slug: 'cjc-1295-ipamorelin',
    title: 'Growth Hormone Restoration',
    sub: 'The Hormonal Foundation of Youth',
    body: `Growth hormone pulsatility — the frequency and amplitude of GH pulses from the pituitary — is one of the most reliable biomarkers of biological age. Peak GH output in the early 20s is roughly 700mcg/day. By 60, this has typically declined to under 100mcg/day — a 85% reduction that drives the body composition changes, skin deterioration, reduced recovery capacity, and sleep disruption most people attribute simply to "getting older."

The CJC-1295 / Ipamorelin combination is the gold standard for restoring youthful GH pulsatility. CJC-1295 is a GHRH analogue that primes the pituitary, while Ipamorelin provides a clean ghrelin-mimetic pulse — together they produce GH elevations approaching the output of the body's peak decade, without stimulating cortisol or prolactin.

The downstream effects of restored GH are comprehensive: improved body composition, enhanced skin thickness and elasticity via IGF-1, dramatically improved sleep architecture, faster recovery from training and injury, and the general vitality that characterizes biological youth rather than chronological age.`,
    points: [
      'Restores GH pulsatility toward patterns characteristic of peak biological youth',
      'Zero cortisol or prolactin elevation — clean GH pulse without hormonal interference',
      'Dramatically improved deep sleep within the first week of use',
      'Enhanced lean mass retention and fat mobilization via elevated IGF-1',
      'Improved skin thickness and elasticity as secondary GH/IGF-1 benefit',
      'Faster tissue repair — connective tissue, muscle, and neural recovery all accelerate',
    ],
  },
]

const stackProtocol = [
  { phase: 'Longevity', name: 'Epithalon', purpose: 'Telomerase activation and telomere restoration — twice yearly cycle', freq: '2× per year' },
  { phase: 'Cellular Energy', name: 'NAD+', purpose: 'Restore NAD+ pools, activate sirtuins and DNA repair pathways', freq: 'Daily' },
  { phase: 'Tissue Reset', name: 'GHK-Cu', purpose: 'Modulate gene expression toward youthful tissue repair profiles', freq: '3× weekly' },
  { phase: 'Hormonal', name: 'CJC-1295 / Ipamorelin', purpose: 'Restore GH pulsatility for body composition, sleep, and recovery', freq: '2–3× daily' },
  { phase: 'Foundation', name: 'BPC-157', purpose: 'Systemic angiogenesis and tissue repair baseline — keeps the environment optimal', freq: 'Daily' },
]

const biomarkers = [
  { label: 'Telomere Length', metric: 'Measured via telomere Q-PCR', dir: 'Increases', timeframe: '6–12 months' },
  { label: 'NAD+ Levels', metric: 'Whole blood NAD+ assay', dir: 'Increases', timeframe: '4–8 weeks' },
  { label: 'Skin Thickness', metric: 'Ultrasound dermometry', dir: 'Increases', timeframe: '8–12 weeks' },
  { label: 'IGF-1', metric: 'Serum IGF-1 blood test', dir: 'Increases', timeframe: '4–6 weeks' },
  { label: 'hsCRP', metric: 'High-sensitivity C-reactive protein', dir: 'Decreases', timeframe: '4–8 weeks' },
  { label: 'GH Pulse Amplitude', metric: 'IGF-1 as proxy', dir: 'Increases', timeframe: '4–6 weeks' },
]

export default function AntiAgingPage() {
  const categoryProducts = products.filter(p => p.category === 'Anti-Aging')

  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20 overflow-hidden">
        <div className="spot w-[700px] h-[500px] opacity-[0.05] -top-20 right-0"
          style={{ background: accent }} />
        <div className="spot w-[400px] h-[300px] opacity-[0.03] top-40 -left-20"
          style={{ background: '#60a5fa' }} />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px]" style={{ background: accent }} />
            <p className="label" style={{ color: accent }}>Scientific Protocol</p>
          </div>
          <h1 className="mb-6" style={{ lineHeight: '0.93' }}>
            <span className="display text-white block" style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>
              Reverse Your
            </span>
            <span className="display-italic block" style={{ fontSize: 'clamp(48px, 7vw, 96px)', color: accent }}>
              Biological Age
            </span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl mb-10">
            Aging is not a single process — it is a cascade of molecular failures. Peptide protocols address each layer: telomere shortening, NAD+ depletion, GH decline, and tissue degradation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/go/shop"
                          target="_blank" rel="noopener nofollow sponsored"
              className="btn-primary text-[13px] px-7 py-3.5 inline-flex">
              Start Your Protocol
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
              </svg>
            </a>
            <Link href="/stacks" className="btn-ghost text-[13px] px-7 py-3.5 inline-flex">
              View Stacks
            </Link>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* WHAT IS BIOLOGICAL AGING */}
      <section className="py-20 max-w-4xl mx-auto px-6 md:px-10">
        <p className="label mb-4" style={{ color: accent }}>The Science</p>
        <h2 className="font-['Playfair_Display'] font-900 text-white mb-7"
          style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
          Aging is not inevitable — it is treatable.
        </h2>
        <div className="space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
          <p>Biological age and chronological age are not the same thing. Biological age is determined by measurable molecular markers: telomere length, NAD+ levels, epigenetic methylation patterns, mitochondrial density, and inflammatory signaling. Two people of the same chronological age can differ by a decade or more in biological terms — and the gap is driven by lifestyle, environment, and intervention.</p>
          <p>Peptides are the most targeted biological tools available for addressing the specific mechanisms of aging. Unlike broad approaches, each peptide operates through a defined molecular pathway — activating telomerase, restoring NAD+ pools, stimulating GH pulsatility, modulating gene expression toward youthful patterns. This is precision anti-aging at the cellular level.</p>
          <p>The four pillars of biological aging — telomere shortening, NAD+ depletion, GH decline, and tissue deterioration — each have corresponding peptide protocols with measurable outcomes. Address all four simultaneously, and the cumulative effect is a comprehensive shift in biological age trajectory.</p>
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
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Text side */}
                <div className={isEven ? '' : 'lg:order-2'}>
                  <p className="mono text-[12px] mb-3" style={{ color: accent }}>Pillar {pillar.num}</p>
                  <h2 className="font-['Playfair_Display'] font-900 text-white mb-2"
                    style={{ fontSize: 'clamp(30px, 4vw, 50px)' }}>
                    {pillar.title}
                  </h2>
                  <p className="font-['Playfair_Display'] font-700 italic text-2xl mb-7" style={{ color: accent }}>{pillar.sub}</p>
                  <div className="space-y-4 text-[#8888a0] text-[15px] leading-relaxed mb-8">
                    {pillar.body.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                  <div className="space-y-2.5 mb-8">
                    {pillar.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ border: `1px solid ${accent}40` }}>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                        </div>
                        <span className="text-[#8888a0] text-[14px] leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/products/${pillar.slug}`} className="btn-primary text-[12px] py-3 px-6 inline-flex"
                    style={{ background: `linear-gradient(135deg, ${accent}cc, ${accent})` }}>
                    View Full Protocol
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

                {/* Image side */}
                <div className={`relative ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="relative aspect-square rounded-2xl overflow-hidden img-shimmer"
                    style={{ background: `radial-gradient(ellipse at 50% 65%, ${accent}18, #0a0a0e)` }}>
                    <Image src={product.image} alt={product.name} fill className="object-contain p-8" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07070a]/80 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      {product.badge && <span className="tag-gold mb-2 inline-block">{product.badge}</span>}
                      <p className="font-['Playfair_Display'] font-900 text-white text-2xl">{product.name}</p>
                      <p className="text-[#8888a0] text-[14px] mt-1">{product.tagline}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 -z-10 scale-[0.7] blur-[80px] opacity-10 rounded-full"
                    style={{ background: `radial-gradient(ellipse, ${accent}, transparent)` }} />
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* BIOMARKERS */}
      <section className="py-20 bg-[#0a0a0e]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="label text-center mb-4" style={{ color: accent }}>Track Your Progress</p>
          <h2 className="font-['Playfair_Display'] font-900 text-white text-center mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            Measurable Biological Outcomes
          </h2>
          <p className="text-[#8888a0] text-center text-[16px] max-w-2xl mx-auto mb-12">
            Anti-aging protocols should produce quantifiable results in measurable biomarkers. These are the key markers to track, what to expect, and when.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {biomarkers.map((b, i) => (
              <div key={i} className="rounded-2xl p-5 relative overflow-hidden"
                style={{ background: `${accent}06`, border: `1px solid ${accent}18` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${accent}80, transparent)` }} />
                <p className="text-white font-600 text-[14px] mb-1">{b.label}</p>
                <p className="text-[#50505e] text-[11px] mb-3">{b.metric}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-600" style={{ color: accent }}>{b.dir}</span>
                  <span className="text-[#50505e] text-[11px] mono">{b.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLETE STACK */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="label text-center mb-4" style={{ color: accent }}>Complete Protocol</p>
          <h2 className="font-['Playfair_Display'] font-900 text-white text-center mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            The Complete Anti-Aging Stack
          </h2>
          <p className="text-[#8888a0] text-center text-[16px] max-w-xl mx-auto mb-12">
            Each compound addresses a distinct mechanism of aging. Used together, they create a comprehensive biological environment oriented toward restoration rather than decline.
          </p>

          <div className="card-elevated rounded-2xl overflow-hidden">
            <div className="divide-y divide-white/[0.05]">
              {stackProtocol.map((item, i) => (
                <div key={i} className="flex items-start gap-5 p-5 sm:p-6">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ border: `1px solid ${accent}40`, background: `${accent}12` }}>
                    <span className="font-700 text-[10px]" style={{ color: accent }}>{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
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

      {/* PRODUCTS IN CATEGORY */}
      {categoryProducts.length > 0 && (
        <section className="py-20 bg-[#0a0a0e]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="label mb-2" style={{ color: accent }}>All Anti-Aging Compounds</p>
                <h2 className="font-['Playfair_Display'] font-900 text-white"
                  style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}>
                  Shop the Category
                </h2>
              </div>
              <Link href="/products" className="btn-ghost text-[14px] hidden sm:flex">
                All Products
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map(p => (
                <div key={p.slug} className="card-elevated rounded-2xl overflow-hidden">
                  <div className="relative h-48 img-shimmer"
                    style={{ background: `radial-gradient(ellipse at 50% 70%, ${accent}18, #0a0a0e)` }}>
                    <Image src={p.image} alt={p.name} fill className="object-contain p-6" />
                  </div>
                  <div className="p-5">
                    <Link href={`/products/${p.slug}`}>
                      <p className="text-white font-700 text-[16px] mb-1 hover:text-[#c4b5fd] transition-colors">{p.name}</p>
                    </Link>
                    <p className="text-[#8888a0] text-[13px] mb-4 line-clamp-2">{p.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-700 text-[15px]" style={{ color: accent }}>{p.price}</span>
                      <a href={`/go/${p.slug}`}
                          target="_blank" rel="noopener nofollow sponsored"
                        className="btn-primary py-2 px-4 text-[12px]">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  )
}
