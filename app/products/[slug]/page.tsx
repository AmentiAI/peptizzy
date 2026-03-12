import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProductBySlug, products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProductBySlug(params.slug)
  if (!p) return {}
  return {
    title: `${p.name} | PeptiZzy`,
    description: p.shortDescription,
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = products
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-2 text-[13px] text-[#50505e]">
          <Link href="/" className="hover:text-[#d4a043] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#d4a043] transition-colors">Peptides</Link>
          <span>/</span>
          <span className="text-[#8888a0]">{product.name}</span>
        </div>
      </div>

      {/* ── PRODUCT HERO ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="grid lg:grid-cols-[1fr_460px] gap-14 items-start">

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl img-shimmer"
              style={{ aspectRatio: '1/1', background: `radial-gradient(ellipse at 50% 65%, rgba(212,160,67,0.15), #0a0a0e)` }}>
              <Image src={product.image} alt={product.name} fill
                className="object-contain p-8" priority />
            </div>
            {product.badge && (
              <div className="absolute top-5 left-5">
                <span className="tag-gold">{product.badge}</span>
              </div>
            )}
            {/* Glow */}
            <div className="absolute inset-0 -z-10 scale-75 blur-[80px] opacity-10 rounded-full"
              style={{ background: 'radial-gradient(ellipse, #d4a043, transparent)' }} />
          </div>

          {/* Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="tag-gold">{product.category}</span>
              {product.tags.slice(0, 2).map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <h1 className="font-['Playfair_Display'] font-900 text-white leading-tight mb-3"
              style={{ fontSize: 'clamp(38px, 5vw, 62px)' }}>
              {product.name}
            </h1>
            <p className="label text-[#d4a043] mb-6 tracking-[0.18em]">{product.tagline}</p>
            <p className="text-[#8888a0] text-[17px] leading-relaxed mb-10">{product.shortDescription}</p>

            {/* Buy box */}
            <div className="card-elevated rounded-2xl p-6 mb-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[11px] text-[#50505e] uppercase tracking-widest mb-1">Starting From</p>
                  <p className="font-['Playfair_Display'] font-900 gold-text"
                    style={{ fontSize: '38px', lineHeight: '1' }}>
                    {product.price}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-[#50505e] uppercase tracking-widest mb-1">Sold By</p>
                  <p className="text-white font-500 text-[15px]">Pantheon Peptides</p>
                </div>
              </div>
              <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer"
                className="btn-primary w-full justify-center py-4 text-[14px] mb-3">
                Buy {product.name} Now
              </a>
              <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer"
                className="btn-secondary w-full justify-center py-3 text-[13px]">
                View on Pantheon Peptides ↗
              </a>
            </div>

            {/* Protocol */}
            <div className="card rounded-2xl p-5 mb-4">
              <p className="label text-[#d4a043] mb-2">Suggested Protocol</p>
              <p className="text-[#8888a0] text-[15px] leading-relaxed">{product.protocol}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      <div className="rule max-w-7xl mx-auto my-14" />

      {/* ── DEEP DIVE ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid lg:grid-cols-[1fr_360px] gap-14">

          {/* Main */}
          <div>
            <h2 className="font-['Playfair_Display'] font-900 text-white mb-8"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              The Science Behind{' '}
              <span className="font-['Playfair_Display'] font-900 font-italic gold-text">{product.name}</span>
            </h2>
            <div className="space-y-5 mb-14">
              {product.fullDescription.split('\n\n').map((p, i) => (
                <p key={i} className="text-[#8888a0] text-[16px] leading-relaxed">{p}</p>
              ))}
            </div>

            <h2 className="font-['Playfair_Display'] font-900 text-white mb-8"
              style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
              Key Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {product.benefits.map((b, i) => (
                <div key={i} className="card rounded-xl p-4 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#d4a043]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4a043]" />
                  </div>
                  <p className="text-[#8888a0] text-[14px] leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="card rounded-2xl p-6">
              <p className="label text-[#d4a043] mb-3">Full Protocol</p>
              <p className="text-[#8888a0] text-[15px] leading-relaxed">{product.protocol}</p>
            </div>

            {product.synergies.length > 0 && (
              <div className="card rounded-2xl p-6">
                <p className="label text-[#d4a043] mb-4">Best Stacked With</p>
                <div className="space-y-1">
                  {product.synergies.map(syn => {
                    const sp = products.find(p => p.name.toLowerCase().includes(syn.toLowerCase()))
                    if (sp) return (
                      <Link key={syn} href={`/products/${sp.slug}`}>
                        <div className="flex items-center gap-3 py-3 border-b border-white/[0.05] hover:border-[#d4a043]/20 group transition-colors">
                          <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0"
                            style={{ background: 'radial-gradient(circle, rgba(212,160,67,0.1), #0d0d11)' }}>
                            <Image src={sp.image} alt={sp.name} width={40} height={40}
                              className="w-full h-full object-contain p-1" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white text-[14px] font-500 group-hover:text-[#d4a043] transition-colors">{sp.name}</p>
                            <p className="text-[#50505e] text-[12px]">{sp.category}</p>
                          </div>
                          <svg className="w-4 h-4 text-[#50505e] group-hover:text-[#d4a043] group-hover:translate-x-1 transition-all"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </Link>
                    )
                    return (
                      <div key={syn} className="flex items-center gap-2.5 py-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d4a043] opacity-50" />
                        <span className="text-[#8888a0] text-[14px]">{syn}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            <div className="card-elevated rounded-2xl p-6">
              <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-2">Ready to start?</p>
              <p className="font-['Playfair_Display'] font-900 text-white text-3xl mb-5">{product.price}</p>
              <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer"
                className="btn-primary w-full justify-center py-3.5 text-[13px]">
                Buy {product.name}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#0a0a0e] py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-['Playfair_Display'] font-900 text-white text-3xl">
                More in{' '}
                <span className="italic gold-text">{product.category}</span>
              </h2>
              <Link href="/products" className="btn-ghost text-[14px]">
                View All
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
