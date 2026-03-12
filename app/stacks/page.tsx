import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { stacks } from '@/lib/stacks'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Stack Protocols | PeptiZzy',
  description: 'Expert-designed peptide stack protocols for looks maxing, body composition, anti-aging, fat loss, and cognitive performance. Full detail pages for each stack.',
}

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
            Individual peptides are powerful. Strategically designed stacks are transformative. Each protocol combines compounds with complementary mechanisms for synergistic effects that exceed what any single compound can achieve.
          </p>
        </div>
      </section>

      <div className="rule" />

      {/* STACKS GRID */}
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
                          Protocol {String(si + 1).padStart(2, '0')} · {stack.difficulty}
                        </span>
                        <span className="tag-gold text-[10px]">{stack.badge}</span>
                      </div>
                      <h2 className="font-['Playfair_Display'] font-900 text-white text-3xl md:text-4xl mb-2">
                        {stack.name}
                      </h2>
                      <p className="font-['Playfair_Display'] italic text-xl mb-4" style={{ color: stack.accent }}>
                        {stack.tagline}
                      </p>
                      <p className="text-[#8888a0] text-[15px] leading-relaxed max-w-2xl">{stack.shortDesc}</p>
                    </div>
                    <div className="flex-shrink-0 text-right space-y-3">
                      <div>
                        <p className="label mb-1">Duration</p>
                        <p className="text-white font-600 text-[15px]">{stack.duration}</p>
                      </div>
                      <div>
                        <p className="label mb-1">Goal</p>
                        <p className="text-white font-600 text-[13px]">{stack.goal}</p>
                      </div>
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
                              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0"
                                style={{ background: `radial-gradient(circle, ${stack.accent}18, #0d0d11)` }}>
                                <Image src={p.image} alt={p.name} width={48} height={48}
                                  className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-400" />
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
                  <div className="space-y-5">
                    <div>
                      <p className="label mb-4">Expected Outcomes</p>
                      <div className="space-y-2">
                        {stack.outcomes.map(o => (
                          <div key={o} className="flex items-center gap-3">
                            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                              <circle cx="8" cy="8" r="7" stroke="#d4a043" strokeWidth="1" opacity="0.3"/>
                              <path d="M5 8l2 2 4-4" stroke="#d4a043" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <span className="text-[#8888a0] text-[13px]">{o}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href={`/stacks/${stack.id}`}
                      className="btn-secondary w-full justify-center py-3 text-[13px] block text-center">
                      View Full Protocol Guide
                    </Link>
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
              { n: '01', title: 'Start with a Foundation', body: 'Begin every stack with BPC-157 or TB-500 — they optimize the cellular environment so other peptides work most effectively. These repair underlying damage and reduce inflammation that would otherwise limit every other compound\'s efficacy.' },
              { n: '02', title: 'Layer by System', body: 'Add compounds that address your primary goals in order of importance. Each layer should have a clear, non-redundant mechanism to avoid diminishing returns from receptor overlap. The stacks on this page are pre-designed with non-competing mechanisms.' },
              { n: '03', title: 'Time Your Doses Strategically', body: 'GH peptides are most effective at night and post-workout. Cognitive peptides perform best in the morning. GLP-1 weight loss peptides work once weekly. Strategic timing compounds the effectiveness of every compound in the protocol significantly.' },
              { n: '04', title: 'Cycle Intelligently', body: 'Most protocols benefit from structured cycles: 3 months on, 1 month off for GH peptides. Cycling maintains receptor sensitivity, allows continuous assessment of results, and prevents the adaptation that reduces compound effectiveness over time.' },
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
            All compounds available through our partner Pantheon Peptides. Every stack, every protocol — sourced from the highest-quality peptide supplier available.
          </p>
          <a href="https://pantheonpeptides.com/partner/AmentiAI/"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary text-[13px] px-8 py-4 inline-flex">
            Shop at Pantheon Peptides
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
