import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { stacks, getStackById } from '@/lib/stacks'
import { products } from '@/lib/products'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return stacks.map(s => ({ slug: s.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const stack = getStackById(params.slug)
  if (!stack) return {}
  return {
    title: `${stack.name} | PeptiZzy Stack Protocols`,
    description: stack.shortDesc,
  }
}

export default function StackPage({ params }: Props) {
  const stack = getStackById(params.slug)
  if (!stack) notFound()

  const allStacks = stacks.filter(s => s.id !== stack.id)

  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-2 text-[13px] text-[#50505e]">
          <Link href="/" className="hover:text-[#d4a043] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/stacks" className="hover:text-[#d4a043] transition-colors">Stacks</Link>
          <span>/</span>
          <span className="text-[#8888a0]">{stack.name}</span>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="relative rounded-2xl overflow-hidden card-elevated p-10 md:p-14">
          <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl" style={{ background: stack.accent }} />
          <div className="absolute top-0 right-0 w-[500px] h-[300px] -z-0 opacity-[0.04] blur-[80px] rounded-full"
            style={{ background: `radial-gradient(ellipse, ${stack.accent}, transparent)` }} />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="mono text-[11px]" style={{ color: stack.accent }}>
                  {stack.difficulty} · {stack.goal}
                </span>
                <span className="tag-gold text-[10px]">{stack.badge}</span>
              </div>
              <h1 className="font-['Playfair_Display'] font-900 text-white leading-tight mb-3"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
                {stack.name}
              </h1>
              <p className="font-['Playfair_Display'] italic text-2xl mb-6" style={{ color: stack.accent }}>
                {stack.tagline}
              </p>
              <p className="text-[#8888a0] text-[17px] leading-relaxed max-w-2xl mb-8">{stack.shortDesc}</p>

              <div className="flex flex-wrap gap-3">
                <a href="https://pantheonpeptides.com/partner/AmentiAI/"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-[13px] px-7 py-3.5">
                  Shop This Stack
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
                <Link href="/stacks" className="btn-secondary text-[13px] px-7 py-3.5">
                  All Stacks
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="flex-shrink-0 grid grid-cols-2 gap-3 lg:w-64">
              {[
                { label: 'Duration', value: stack.duration },
                { label: 'Difficulty', value: stack.difficulty },
                { label: 'Compounds', value: `${stack.compounds.length} Peptides` },
                { label: 'Primary Goal', value: stack.goal },
              ].map(stat => (
                <div key={stat.label} className="card rounded-xl p-4">
                  <p className="label text-[10px] mb-1">{stat.label}</p>
                  <p className="text-white font-600 text-[13px] leading-snug">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="rule max-w-7xl mx-auto" />

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid lg:grid-cols-[1fr_360px] gap-14">

          {/* LEFT */}
          <div>
            {/* Overview */}
            <h2 className="font-['Playfair_Display'] font-900 text-white mb-7"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
              Why This Stack Works
            </h2>
            <div className="space-y-5 text-[#8888a0] text-[16px] leading-relaxed mb-14">
              {stack.fullDescription.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Synergy */}
            <div className="card rounded-2xl p-7 mb-14 border-l-2" style={{ borderLeftColor: stack.accent }}>
              <p className="label mb-3" style={{ color: stack.accent }}>The Synergy Mechanism</p>
              <p className="text-[#8888a0] text-[15px] leading-relaxed">{stack.synergy}</p>
            </div>

            {/* Compounds */}
            <h2 className="font-['Playfair_Display'] font-900 text-white mb-7"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
              Compounds & Roles
            </h2>
            <div className="space-y-4 mb-14">
              {stack.compounds.map((item, i) => {
                const product = products.find(p => p.slug === item.slug)
                return (
                  <div key={item.slug} className="card rounded-2xl overflow-hidden">
                    {/* Header row */}
                    <div className="flex items-center gap-4 p-5 border-b border-white/[0.05]">
                      <span className="mono text-[11px] flex-shrink-0 w-6" style={{ color: stack.accent }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {product && (
                        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-[#16161c]">
                          <Image src={product.image} alt={product.name} width={40} height={40}
                            className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-white font-700 text-[15px]">
                            {product?.name ?? item.slug}
                          </p>
                          <span className="text-[11px] px-2 py-0.5 rounded-full font-500"
                            style={{ background: `${stack.accent}18`, color: stack.accent }}>
                            {item.role}
                          </span>
                        </div>
                        <p className="mono text-[11px] text-[#50505e] mt-0.5">{item.timing}</p>
                      </div>
                      {product && (
                        <Link href={`/products/${item.slug}`}
                          className="btn-ghost text-[12px] flex-shrink-0">
                          Details
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                          </svg>
                        </Link>
                      )}
                    </div>
                    {/* Why this compound */}
                    <div className="px-5 py-4">
                      <p className="text-[11px] text-[#50505e] uppercase tracking-widest mb-2">Why It's In This Stack</p>
                      <p className="text-[#8888a0] text-[14px] leading-relaxed">{item.why}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Timeline */}
            <h2 className="font-['Playfair_Display'] font-900 text-white mb-7"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
              Expected Timeline
            </h2>
            <div className="space-y-3 mb-14">
              {stack.timeline.map((phase, i) => (
                <div key={i} className="card rounded-xl p-5 flex gap-5">
                  <div className="flex-shrink-0">
                    <p className="mono text-[11px] mb-1" style={{ color: stack.accent }}>{phase.range}</p>
                    <div className="w-px h-full bg-white/[0.06] mx-auto hidden" />
                  </div>
                  <div>
                    <p className="text-white font-700 text-[15px] mb-1.5">{phase.title}</p>
                    <p className="text-[#8888a0] text-[14px] leading-relaxed">{phase.what}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Who is it for */}
            <div className="card-elevated rounded-2xl p-7 mb-14">
              <p className="label-gold mb-3">Who Is This Stack For?</p>
              <p className="text-[#8888a0] text-[15px] leading-relaxed">{stack.whoIsItFor}</p>
            </div>

            {/* FAQ */}
            <h2 className="font-['Playfair_Display'] font-900 text-white mb-7"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {stack.faqs.map((faq, i) => (
                <div key={i} className="card rounded-xl p-5">
                  <p className="text-white font-700 text-[15px] mb-3">{faq.q}</p>
                  <p className="text-[#8888a0] text-[14px] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-5">

            {/* Buy CTA */}
            <div className="card-elevated rounded-2xl p-6">
              <p className="label mb-4" style={{ color: stack.accent }}>Shop This Stack</p>
              <div className="space-y-2 mb-5">
                {stack.compounds.map(item => {
                  const product = products.find(p => p.slug === item.slug)
                  return (
                    <div key={item.slug} className="flex items-center justify-between py-2 border-b border-white/[0.05] last:border-0">
                      <span className="text-[#8888a0] text-[13px]">{product?.name ?? item.slug}</span>
                      <span className="text-[#50505e] mono text-[11px]">{item.timing}</span>
                    </div>
                  )
                })}
              </div>
              <a href="https://pantheonpeptides.com/partner/AmentiAI/"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary w-full justify-center py-3.5 text-[13px]">
                Buy at Pantheon Peptides
              </a>
            </div>

            {/* Key Benefits */}
            <div className="card rounded-2xl p-6">
              <p className="label-gold mb-4">Key Benefits</p>
              <div className="space-y-2.5">
                {stack.keyBenefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full border border-[#d4a043]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4a043]" />
                    </div>
                    <span className="text-[#8888a0] text-[13px] leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Outcomes */}
            <div className="card rounded-2xl p-6">
              <p className="label mb-4" style={{ color: stack.accent }}>Expected Outcomes</p>
              <div className="flex flex-wrap gap-2">
                {stack.outcomes.map(o => (
                  <span key={o} className="text-[12px] px-3 py-1.5 rounded-full"
                    style={{ background: `${stack.accent}15`, color: stack.accent }}>
                    {o}
                  </span>
                ))}
              </div>
            </div>

            {/* Cycle Protocol */}
            <div className="card rounded-2xl p-6">
              <p className="label-gold mb-3">Cycle Protocol</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed">{stack.cycleProtocol}</p>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER STACKS */}
      <section className="bg-[#0a0a0e] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-['Playfair_Display'] font-900 text-white text-3xl">
              More <span className="italic gold-text">Protocols</span>
            </h2>
            <Link href="/stacks" className="btn-ghost text-[14px]">
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allStacks.slice(0, 3).map(s => (
              <Link key={s.id} href={`/stacks/${s.id}`}>
                <div className="card rounded-2xl p-6 group h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-opacity duration-200 opacity-40 group-hover:opacity-100"
                    style={{ background: s.accent }} />
                  <div className="flex items-center gap-2 mb-3">
                    <span className="mono text-[11px]" style={{ color: s.accent }}>{s.difficulty}</span>
                    <span className="tag-gold text-[10px]">{s.badge}</span>
                  </div>
                  <p className="font-['Playfair_Display'] font-900 text-white text-xl mb-2 group-hover:text-[#d4a043] transition-colors">
                    {s.name}
                  </p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed mb-4 line-clamp-2">{s.shortDesc}</p>
                  <div className="flex items-center justify-between">
                    <span className="mono text-[11px] text-[#50505e]">{s.duration}</span>
                    <span className="text-[#d4a043] text-[13px] font-500 group-hover:translate-x-1 transition-transform inline-block">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
