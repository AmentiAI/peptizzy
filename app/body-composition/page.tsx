import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Peptide Stack for Body Composition: Build Muscle & Lose Fat | PeptidesMuscle',
  description: 'The definitive body composition peptide guide. CJC-1295/Ipamorelin for GH optimization, IGF-1 LR3 for muscle growth, BPC-157 for recovery — science-backed stacks for elite physique development.',
  alternates: { canonical: 'https://peptidesmuscle.com/body-composition' },
  keywords: 'peptide stack body composition, best peptides for muscle growth, peptides for fat loss, CJC-1295 ipamorelin body composition, IGF-1 LR3 muscle',
  openGraph: {
    title: 'Peptide Stack for Body Composition: Build Muscle & Lose Fat | PeptidesMuscle',
    description: 'CJC-1295/Ipamorelin, IGF-1 LR3, BPC-157 — science-backed peptide stacks for lean mass, fat loss, and elite physique development.',
    url: 'https://peptidesmuscle.com/body-composition',
    type: 'website',
    siteName: 'PeptidesMuscle',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Stack for Body Composition: Build Muscle & Lose Fat | PeptidesMuscle',
    description: 'CJC-1295/Ipamorelin, IGF-1 LR3, BPC-157 — science-backed peptide stacks for elite physique development.',
  },
}

const accent = '#34d399'

const pillars = [
  {
    num: '01',
    slug: 'cjc-1295-ipamorelin',
    title: 'GH Optimization',
    sub: 'The Hormonal Foundation',
    body: `Growth hormone is the master regulator of body composition. It drives fat mobilization from adipose tissue, preserves and builds lean muscle mass, improves recovery between training sessions, and determines the fundamental ratio of muscle to fat that defines a physique at any given body weight.

The CJC-1295 / Ipamorelin stack is the gold standard protocol for restoring and optimizing GH pulsatility. CJC-1295 activates the GHRH receptor — priming the pituitary to release more GH per pulse. Ipamorelin activates the ghrelin receptor through an entirely separate pathway, amplifying the pulse amplitude without the cortisol or prolactin elevation seen with older GHRPs like GHRP-6.

The combined effect is a "double stimulus" that produces GH levels approaching pharmaceutical administration while operating entirely through the body's own regulatory mechanisms. Three doses per day — upon waking, pre-workout, and before bed — creates sustained GH elevation that meaningfully shifts body composition over a 12–16 week cycle.`,
    points: [
      'Dual-receptor stimulation produces synergistic GH output beyond either compound alone',
      'Ipamorelin selectivity: zero cortisol or prolactin elevation — clean hormonal environment',
      'Elevated GH drives fat lipolysis from all adipose depots, particularly visceral fat',
      'IGF-1 elevation downstream preserves and grows lean muscle tissue',
      'Dramatically improved deep sleep within days — when most muscle repair occurs',
      'Faster recovery enables higher training frequency without overtraining',
    ],
  },
  {
    num: '02',
    slug: 'igf-1-lr3',
    title: 'Direct Anabolic Signal',
    sub: 'Muscle Hypertrophy at the Cellular Level',
    body: `Where GH peptides work upstream — stimulating the pituitary to produce GH, which travels to the liver to produce IGF-1, which then signals muscles to grow — IGF-1 LR3 delivers the anabolic signal directly to muscle tissue. It is the terminal effector of the entire GH/IGF-1 axis, acting without dependence on pituitary function, liver conversion, or any upstream regulatory bottleneck.

The LR3 modification reduces IGF-binding protein affinity by approximately 1000-fold, extending the half-life from minutes (native IGF-1) to 20–30 hours and enabling systemic distribution to all muscle groups. At the receptor level, it activates the PI3K/Akt/mTOR cascade — the primary molecular pathway driving muscle hypertrophy — with a potency and duration that no naturally occurring IGF-1 pulse can match.

The practical result: post-workout injection into the window when IGF-1 receptors are maximally upregulated delivers a concentrated anabolic signal that stacks directly on top of the GH-driven IGF-1 elevation from CJC-1295/Ipamorelin. Together, these compounds create an anabolic environment at both the upstream and downstream levels simultaneously.`,
    points: [
      'Directly activates mTOR — the master regulator of muscle protein synthesis',
      'Extended 20–30 hour half-life provides sustained anabolic signaling from a single injection',
      'Systemic distribution from SubQ injection reaches all muscle groups',
      'Promotes both hypertrophy (fiber growth) and hyperplasia (new fiber formation)',
      'Reduces visceral fat via IGF-1 receptor activation in adipose tissue',
      'Post-workout timing maximizes receptor sensitivity for amplified response',
    ],
  },
  {
    num: '03',
    slug: 'bpc-157',
    title: 'Tissue Repair & Recovery',
    sub: 'Train Harder. Recover Completely.',
    body: `The limiting factor in body composition development is rarely effort — it is the capacity to recover from effort. Tendons, ligaments, joints, and muscle tissue accumulate micro-damage under training load. Without adequate repair, this damage compounds: performance declines, injury risk increases, and the volume necessary for physique development becomes impossible to sustain.

BPC-157 — Body Protection Compound 157 — is the most extensively studied recovery peptide in the research literature. Its primary mechanism is the upregulation of angiogenesis (new blood vessel formation) in injured tissue, driven by its effect on VEGF and NO pathways. More blood flow means more oxygen, more nutrients, more growth factors, and faster removal of inflammatory byproducts — the complete biological environment for accelerated repair.

In body composition terms: BPC-157 means tendons and joints that recover as fast as muscles, tissue integrity that holds up under progressive overload, and a recovery profile that supports training frequencies previously only sustainable with pharmaceutical support.`,
    points: [
      'Upregulates VEGF and NO pathways — creates new blood vessels in injured tissue',
      'Tendon and ligament repair at rates significantly faster than baseline healing',
      'Reduces inflammatory signaling without suppressing the repair cascade',
      'Gut lining protection — maintains nutrient absorption under high training stress',
      'Nerve repair and neuroprotective effects support neuromuscular function',
      'Systemic effect from a single injection site — reaches all tissues simultaneously',
    ],
  },
  {
    num: '04',
    slug: 'tb-500',
    title: 'Systemic Healing',
    sub: 'The Mobility & Injury Stack',
    body: `TB-500 is a synthetic analogue of Thymosin Beta-4, a protein expressed in virtually every cell of the human body and particularly concentrated at sites of injury. Its primary mechanism is actin regulation — actin is the structural protein that drives cell migration, wound contraction, and tissue remodeling. By modulating actin dynamics, TB-500 accelerates the movement of repair cells to damaged sites and enhances the structural reorganization of healing tissue.

Unlike BPC-157, which excels at localized tendon and gut repair, TB-500's effect is systemic. A single SubQ injection distributes throughout the entire body via the lymphatic system — reaching every joint, tendon, ligament, and muscle group simultaneously. This systemic distribution makes it the preferred compound for athletes with multiple sites of overuse damage, or for full-body recovery protocols.

Stacked with BPC-157, the two compounds provide complementary mechanisms: BPC-157 drives local angiogenesis and VEGF signaling while TB-500 provides systemic actin-mediated repair mobilization. Together they represent the most comprehensive injury-prevention and recovery stack available.`,
    points: [
      'Systemic distribution via lymphatic system — reaches all tissue simultaneously',
      'Actin modulation accelerates repair cell migration to damaged sites',
      'Reduces joint inflammation and improves range of motion in overused joints',
      'Complements BPC-157 through an entirely different but synergistic mechanism',
      'Improves flexibility and connective tissue quality as a secondary benefit',
      'Extended half-life allows twice-weekly dosing rather than daily injections',
    ],
  },
]

const stackProtocol = [
  { phase: 'GH Pulse', name: 'CJC-1295 / Ipamorelin', purpose: 'Optimize GH pulsatility for fat loss, lean mass, sleep quality, and recovery', freq: '3× daily' },
  { phase: 'Anabolic', name: 'IGF-1 LR3', purpose: 'Direct mTOR activation post-workout for maximized muscle protein synthesis', freq: 'Post-workout' },
  { phase: 'Recovery', name: 'BPC-157', purpose: 'Angiogenesis and connective tissue repair — supports training frequency', freq: 'Daily' },
  { phase: 'Systemic', name: 'TB-500', purpose: 'Full-body tissue repair, anti-inflammatory, and mobility support', freq: '2× weekly' },
]

const timeline = [
  { week: 'Week 1–2', result: 'Sleep quality improves markedly. Mild water retention as GH ramps up. Recovery between sessions noticeably faster.' },
  { week: 'Week 3–4', result: 'Fat mobilization becomes visible, particularly in the abdominal area. Muscle fullness improves. Strength numbers begin to climb.' },
  { week: 'Week 6–8', result: 'Lean mass gains evident. Body fat percentage drops measurably. Recovery capacity allows higher training volume.' },
  { week: 'Week 12–16', result: 'Full cycle results: 5–10lb lean mass gain, 3–5% body fat reduction. Physique structurally different from cycle start.' },
]

export default function BodyCompositionPage() {
  const categoryProducts = products.filter(p => p.category === 'Body Composition')

  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20 overflow-hidden">
        <div className="spot w-[700px] h-[500px] opacity-[0.04] -top-20 right-0"
          style={{ background: accent }} />
        <div className="spot w-[400px] h-[300px] opacity-[0.03] top-40 -left-20 bg-[#6090ff]" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px]" style={{ background: accent }} />
            <p className="label" style={{ color: accent }}>Scientific Protocol</p>
          </div>
          <h1 className="mb-6" style={{ lineHeight: '0.93' }}>
            <span className="display text-white block" style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>
              Elite Body
            </span>
            <span className="display-italic block" style={{ fontSize: 'clamp(48px, 7vw, 96px)', color: accent }}>
              Composition
            </span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl mb-10">
            Build lean muscle. Eliminate stubborn fat. Recover completely between sessions. Peptide protocols create the hormonal and cellular environment where physique transformation becomes inevitable.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
              target="_blank" rel="noopener noreferrer"
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

      {/* INTRO */}
      <section className="py-20 max-w-4xl mx-auto px-6 md:px-10">
        <p className="label mb-4" style={{ color: accent }}>The Science</p>
        <h2 className="font-['Playfair_Display'] font-900 text-white mb-7"
          style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
          Body composition is a hormonal problem with a molecular solution.
        </h2>
        <div className="space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
          <p>The human body's ratio of muscle to fat is not primarily determined by effort — it is determined by hormonal environment. Growth hormone, IGF-1, insulin sensitivity, and cortisol levels create the biochemical conditions that determine whether training stimulus produces hypertrophy or simply fatigue, whether a caloric deficit accelerates fat loss or muscle wasting, whether recovery allows frequency or forces deconditioning.</p>
          <p>Peptide protocols address body composition at its root: by optimizing the hormonal and cellular environment in which training and nutrition operate. GH peptides restore the fat-mobilizing, muscle-preserving hormonal profile of biological youth. Direct anabolic peptides amplify the cellular response to training stimulus. Recovery peptides remove the tissue damage ceiling that limits training volume and frequency.</p>
          <p>The result is not just better results from the same effort — it is access to a category of results that the natural hormonal environment of a 30, 40, or 50-year-old body cannot produce regardless of effort, diet, or programming.</p>
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
                    style={{ background: `linear-gradient(135deg, #22a870, ${accent})` }}>
                    View Full Protocol
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

                {/* Image side */}
                <div className={`relative ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="relative aspect-square rounded-2xl overflow-hidden img-shimmer"
                    style={{ background: `radial-gradient(ellipse at 50% 65%, ${accent}15, #0a0a0e)` }}>
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

      {/* RESULTS TIMELINE */}
      <section className="py-20 bg-[#0a0a0e]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="label text-center mb-4" style={{ color: accent }}>What to Expect</p>
          <h2 className="font-['Playfair_Display'] font-900 text-white text-center mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            16-Week Transformation Timeline
          </h2>
          <p className="text-[#8888a0] text-center text-[16px] max-w-2xl mx-auto mb-12">
            Results are progressive and cumulative. Individual outcomes vary based on diet, training, and baseline hormonal status.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {timeline.map((t, i) => (
              <div key={i} className="rounded-2xl p-6 relative overflow-hidden"
                style={{ background: `${accent}06`, border: `1px solid ${accent}18` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${accent}80, transparent)` }} />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${accent}18`, border: `1px solid ${accent}40` }}>
                    <span className="text-[11px] font-bold" style={{ color: accent }}>{i + 1}</span>
                  </div>
                  <p className="text-white font-600 text-[14px]">{t.week}</p>
                </div>
                <p className="text-[#8888a0] text-[14px] leading-relaxed">{t.result}</p>
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
            The Body Composition Stack
          </h2>
          <p className="text-[#8888a0] text-center text-[16px] max-w-xl mx-auto mb-12">
            Four compounds, four mechanisms, one unified biological environment optimized for lean mass accumulation and fat reduction.
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
              <a href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
                target="_blank" rel="noopener noreferrer"
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
                <p className="label mb-2" style={{ color: accent }}>All Body Composition Compounds</p>
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
                    style={{ background: `radial-gradient(ellipse at 50% 70%, ${accent}15, #0a0a0e)` }}>
                    <Image src={p.image} alt={p.name} fill className="object-contain p-6" />
                  </div>
                  <div className="p-5">
                    <Link href={`/products/${p.slug}`}>
                      <p className="text-white font-700 text-[16px] mb-1 hover:text-emerald-400 transition-colors">{p.name}</p>
                    </Link>
                    <p className="text-[#8888a0] text-[13px] mb-4 line-clamp-2">{p.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-700 text-[15px]" style={{ color: accent }}>{p.price}</span>
                      <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer"
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
