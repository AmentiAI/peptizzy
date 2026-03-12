import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Stack Protocols | PeptiZzy',
  description: 'Expert-designed peptide stack protocols for looks maxing, body composition, anti-aging, and cognitive performance.',
}

const stacks = [
  {
    id: 'looks-max',
    name: 'The Looks Max Stack',
    tagline: 'Comprehensive physical transformation',
    desc: 'Addresses all four pillars of physical optimization: skin quality, pigmentation, body composition, and cellular longevity. The definitive looks maximization protocol.',
    badge: 'Most Popular',
    accent: '#d4a043',
    compounds: [
      { slug: 'ghk-cu',        role: 'Skin & Collagen',        timing: '3× weekly' },
      { slug: 'melanotan-2',   role: 'Pigmentation & Libido',  timing: 'Loading + Maintenance' },
      { slug: 'bpc-157',       role: 'Foundation Recovery',    timing: 'Daily' },
      { slug: 'ipamorelin',    role: 'GH Optimization',        timing: '2–3× daily' },
    ],
    outcomes: ['Deep, even tan', 'Improved skin thickness', 'Lean body composition', 'Accelerated recovery'],
    duration: '12 weeks',
  },
  {
    id: 'body-comp',
    name: 'The Body Sculptor',
    tagline: 'Elite lean mass and fat loss',
    desc: 'Growth hormone optimization stacked for maximum body composition transformation. Build lean muscle while stripping fat — the dual recomposition effect.',
    badge: 'Advanced',
    accent: '#6090ff',
    compounds: [
      { slug: 'ipamorelin',    role: 'GH Pulse Optimization',  timing: '2–3× daily' },
      { slug: 'cjc-1295',     role: 'Sustained GH Elevation', timing: 'With Ipamorelin' },
      { slug: 'tesamorelin',   role: 'Visceral Fat Reduction', timing: 'Daily (evening)' },
      { slug: 'igf-1-lr3',    role: 'Muscle Hyperplasia',     timing: 'Post-workout' },
    ],
    outcomes: ['Significant lean mass', 'Visceral fat reduction', 'Sharper definition', 'Enhanced recovery'],
    duration: '16 weeks',
  },
  {
    id: 'wolverine',
    name: 'The Wolverine Stack',
    tagline: 'Maximum tissue repair and regeneration',
    desc: 'Near-superhuman recovery properties. Combines the two most powerful tissue repair peptides with GH optimization for training frequency otherwise unattainable.',
    badge: 'Elite Recovery',
    accent: '#40c090',
    compounds: [
      { slug: 'bpc-157',       role: 'Local Tissue Repair',    timing: 'Daily near injury' },
      { slug: 'tb-500',        role: 'Systemic Regeneration',  timing: '2–3× weekly' },
      { slug: 'ipamorelin',    role: 'GH for Recovery',        timing: 'Pre-sleep' },
      { slug: 'ghk-cu',        role: 'Connective Tissue',      timing: '2× weekly' },
    ],
    outcomes: ['Accelerated healing', 'Reduced inflammation', 'Greater training frequency', 'Joint health'],
    duration: '8 weeks',
  },
  {
    id: 'longevity',
    name: 'The Longevity Protocol',
    tagline: 'Biological age reversal',
    desc: 'The most comprehensive anti-aging protocol available. Combines telomere extension, mitochondrial optimization, immune enhancement, and sleep improvement.',
    badge: 'Longevity',
    accent: '#a060ff',
    compounds: [
      { slug: 'epithalon',         role: 'Telomere Extension',     timing: '10–20 day cycle ×2/yr' },
      { slug: 'ghk-cu',            role: 'Skin & Gene Expression', timing: '3× weekly' },
      { slug: 'thymosin-alpha-1',  role: 'Immune Optimization',    timing: '2–3× weekly' },
      { slug: 'mots-c',            role: 'Mitochondrial Health',   timing: '3–5× weekly' },
    ],
    outcomes: ['Telomere lengthening', 'Improved biological age', 'Enhanced immunity', 'Better sleep'],
    duration: 'Ongoing / Annual Cycle',
  },
  {
    id: 'neural',
    name: 'The Neural Edge',
    tagline: 'Peak cognitive performance',
    desc: 'Optimize the cognitive dimension of looks maxing — mental sharpness, confidence, and presence that convert physical transformation into total magnetism.',
    badge: 'Cognitive',
    accent: '#40c0ff',
    compounds: [
      { slug: 'semax',     role: 'BDNF & Cognitive Performance', timing: '1–2× daily (nasal)' },
      { slug: 'selank',    role: 'Anxiolytic & Confidence',      timing: '1–2× daily (nasal)' },
      { slug: 'dsip',      role: 'Deep Sleep Architecture',      timing: 'Pre-sleep' },
      { slug: 'epithalon', role: 'Neuroprotection',              timing: 'Cycle protocol' },
    ],
    outcomes: ['Enhanced focus', 'Reduced anxiety', 'Deeper sleep', 'Social confidence'],
    duration: '6–8 weeks',
  },
]

export default function StacksPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="spot w-[500px] h-[350px] bg-[#d4a043] opacity-[0.04] top-0 right-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Synergistic Protocols</p>
          </div>
          <h1 className="mb-5" style={{ lineHeight: '0.93' }}>
            <span className="display text-white block" style={{ fontSize: 'clamp(50px, 7vw, 100px)' }}>
              Elite Stack
            </span>
            <span className="display-italic gold-shimmer block" style={{ fontSize: 'clamp(50px, 7vw, 100px)' }}>
              Protocols
            </span>
          </h1>
          <p className="text-[#8888a0] text-xl max-w-2xl leading-relaxed">
            Individual peptides are powerful. Strategically designed stacks are transformative. Each protocol combines compounds with complementary mechanisms for synergistic effects.
          </p>
        </div>
      </section>

      <div className="rule" />

      {/* STACKS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-8">
          {stacks.map((stack, si) => {
            const stackProducts = stack.compounds
              .map(c => products.find(p => p.slug === c.slug))
              .filter(Boolean) as typeof products

            return (
              <div key={stack.id} className="card-elevated rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="p-8 md:p-10 border-b border-white/[0.05] relative">
                  <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background: stack.accent }} />
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="mono text-[11px]" style={{ color: stack.accent }}>
                          Protocol {String(si + 1).padStart(2, '0')}
                        </span>
                        <span className="tag-gold text-[10px]">{stack.badge}</span>
                      </div>
                      <h2 className="font-['Playfair_Display'] font-900 text-white text-3xl md:text-4xl mb-2">
                        {stack.name}
                      </h2>
                      <p className="font-['Playfair_Display'] italic text-xl mb-4" style={{ color: stack.accent }}>
                        {stack.tagline}
                      </p>
                      <p className="text-[#8888a0] text-[15px] leading-relaxed max-w-2xl">{stack.desc}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="label mb-1">Duration</p>
                      <p className="text-white font-600 text-[15px]">{stack.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 grid lg:grid-cols-3 gap-10">

                  {/* Compounds */}
                  <div className="lg:col-span-2">
                    <p className="label mb-5">Compounds</p>
                    <div className="space-y-3">
                      {stack.compounds.map(item => {
                        const p = products.find(prod => prod.slug === item.slug)
                        if (!p) return null
                        return (
                          <Link key={item.slug} href={`/products/${item.slug}`}>
                            <div className="card flex items-center gap-4 p-4 group">
                              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-[#16161c]">
                                <Image src={p.image} alt={p.name} width={48} height={48}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2.5 mb-0.5">
                                  <p className="text-white font-600 text-[14px]">{p.name}</p>
                                  <span className="text-[10px] px-2 py-0.5 rounded-full font-500"
                                    style={{ background: `${stack.accent}18`, color: stack.accent }}>
                                    {item.role}
                                  </span>
                                </div>
                                <p className="text-[#8888a0] text-[13px] truncate">{p.shortDescription.slice(0, 75)}…</p>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <p className="mono text-[11px] text-[#50505e]">{item.timing}</p>
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  {/* Results + CTA */}
                  <div className="space-y-6">
                    <div>
                      <p className="label mb-4">Expected Outcomes</p>
                      <div className="space-y-2.5">
                        {stack.outcomes.map(o => (
                          <div key={o} className="flex items-center gap-3">
                            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                              <circle cx="8" cy="8" r="7" stroke="#d4a043" strokeWidth="1" opacity="0.3"/>
                              <path d="M5 8l2 2 4-4" stroke="#d4a043" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <span className="text-[#8888a0] text-[14px]">{o}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a href="https://pantheonpeptides.com/partner/AmentiAI/"
                      target="_blank" rel="noopener noreferrer"
                      className="btn-primary w-full justify-center py-3.5 text-[13px] block text-center">
                      Shop This Stack
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* HOW TO STACK */}
      <section className="py-20 bg-[#0a0a0e]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="label-gold mb-4">Stacking Strategy</p>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-12"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
            How to Stack Peptides Effectively
          </h2>
          <div className="space-y-4">
            {[
              { n: '01', title: 'Start with a Foundation', body: 'Begin every stack with BPC-157 or TB-500 — they optimize the cellular environment so other peptides work most effectively. These repair underlying damage and reduce inflammation.' },
              { n: '02', title: 'Layer by System', body: 'Add compounds that address your primary goals in order of importance. Each layer should have a clear, non-redundant mechanism to avoid diminishing returns from receptor overlap.' },
              { n: '03', title: 'Time Your Doses Strategically', body: 'GH peptides are most effective at night and post-workout. Cognitive peptides perform best in the morning. Strategic timing compounds effectiveness significantly.' },
              { n: '04', title: 'Cycle Intelligently', body: 'Most protocols benefit from structured cycles: 3 months on, 1 month off for GH peptides. Cycling maintains receptor sensitivity and allows continuous assessment.' },
            ].map(s => (
              <div key={s.n} className="card rounded-2xl p-6 flex gap-6">
                <p className="mono text-[#d4a043] text-[12px] flex-shrink-0 mt-0.5">{s.n}</p>
                <div>
                  <p className="text-white font-700 text-[16px] mb-2">{s.title}</p>
                  <p className="text-[#8888a0] text-[14px] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Ready to start your stack?
          </h2>
          <p className="text-[#8888a0] text-[16px] mb-8">
            All compounds available through our partner Pantheon Peptides.
          </p>
          <a href="https://pantheonpeptides.com/partner/AmentiAI/"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary text-[13px] px-8 py-4 inline-flex">
            Shop at Pantheon Peptides
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
