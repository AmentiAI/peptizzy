'use client'

import { useState, useMemo } from 'react'
import ProductCard from '@/components/ProductCard'
import { products, categories, getFeaturedProducts } from '@/lib/products'

const CATEGORY_ACCENT: Record<string, string> = {
  'Fat Loss / Metabolic':   '#e05080',
  'Growth Peptides':        '#6090ff',
  'Recovery & Healing':     '#40c090',
  'Anti-Aging & Longevity': '#a060ff',
  'Cognitive & Nootropic':  '#40c0ff',
  'Blends & Stacks':        '#d4a043',
}

function Content({ initialCategory = 'all' }: { initialCategory?: string }) {
  const [cat, setCat] = useState(initialCategory)
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    let r = products
    if (cat !== 'all') r = r.filter(p => p.category === cat)
    if (q.trim()) {
      const lq = q.toLowerCase()
      r = r.filter(p =>
        p.name.toLowerCase().includes(lq) ||
        p.tags.some(t => t.toLowerCase().includes(lq)) ||
        p.shortDescription.toLowerCase().includes(lq)
      )
    }
    return r
  }, [cat, q])

  const featured = getFeaturedProducts().slice(0, 3)

  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* ── HERO ── */}
      <div className="relative pt-20 sm:pt-32 pb-12 sm:pb-24 overflow-hidden">
        <div className="spot w-[700px] h-[400px] bg-[#d4a043] opacity-[0.04] top-0 left-1/2 -translate-x-1/2" />
        <div className="spot w-[300px] h-[300px] bg-[#6090ff] opacity-[0.03] top-20 right-20" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Complete Catalog — 35 Compounds</p>
          </div>
          <h1 className="mb-5" style={{ lineHeight: '0.92' }}>
            <span className="display text-white block" style={{ fontSize: 'clamp(52px, 7vw, 100px)' }}>All</span>
            <span className="display-italic gold-shimmer block" style={{ fontSize: 'clamp(52px, 7vw, 100px)' }}>Peptides</span>
          </h1>
          <p className="text-[#8888a0] text-xl max-w-xl leading-relaxed">
            35 compounds. Every goal covered. CoA-verified on every batch — from skin collagen to telomere extension to 22.5% fat loss.
          </p>
        </div>
      </div>

      {/* ── FEATURED 3 HERO CARDS ── */}
      {cat === 'all' && !q && (
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Staff Picks</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <ProductCard key={p.slug} product={p} variant="hero" index={i} />
            ))}
          </div>
        </div>
      )}

      <div className="rule" />

      {/* ── CATEGORY SHOWCASE ── */}
      {cat === 'all' && !q && (
        <div className="py-16 bg-[#0a0a0e]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-[1px] bg-[#d4a043]" />
              <p className="label-gold">Browse by Goal</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {categories.map(c => {
                const accent = CATEGORY_ACCENT[c.name] ?? '#d4a043'
                const count = products.filter(p => p.category === c.name).length
                return (
                  <button key={c.name} onClick={() => setCat(c.name)}
                    className="card p-5 text-left group transition-all duration-200">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-base"
                      style={{ background: `${accent}18`, color: accent }}>
                      {c.icon}
                    </div>
                    <p className="text-white font-700 text-[15px] leading-snug mb-1 group-hover:text-[#e8c060] transition-colors">
                      {c.name}
                    </p>
                    <p className="text-[#50505e] text-[12px] mono">{count} compounds</p>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── FILTERS + GRID ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">

        {/* Filter bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10 items-start lg:items-center">
          {/* Search */}
          <div className="relative w-full max-w-sm">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#50505e]"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input type="text" placeholder="Search peptides, goals, tags..."
              value={q} onChange={e => setQ(e.target.value)}
              className="input pl-11 text-[14px]" />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            <button onClick={() => { setCat('all'); setQ('') }}
              className={`text-[12px] px-4 py-2 rounded-full font-600 transition-all border ${
                cat === 'all' && !q
                  ? 'bg-[#d4a043] text-[#07070a] border-[#d4a043]'
                  : 'bg-white/[0.04] border-white/[0.07] text-[#8888a0] hover:text-white hover:border-white/[0.15]'
              }`}>
              All ({products.length})
            </button>
            {categories.map(c => {
              const accent = CATEGORY_ACCENT[c.name] ?? '#d4a043'
              const active = cat === c.name
              return (
                <button key={c.name} onClick={() => setCat(c.name)}
                  style={active ? { background: `${accent}20`, color: accent, borderColor: `${accent}50` } : {}}
                  className={`text-[12px] px-4 py-2 rounded-full font-600 transition-all border ${
                    active
                      ? ''
                      : 'bg-white/[0.04] border-white/[0.07] text-[#8888a0] hover:text-white hover:border-white/[0.15]'
                  }`}>
                  {c.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Count bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
          <div className="flex items-center gap-3">
            <p className="text-[#8888a0] text-[15px]">
              Showing <span className="text-white font-700">{filtered.length}</span> peptides
              {cat !== 'all' && <span className="text-[#d4a043]"> · {cat}</span>}
            </p>
            {(cat !== 'all' || q) && (
              <button onClick={() => { setCat('all'); setQ('') }}
                className="text-[12px] text-[#50505e] hover:text-[#d4a043] transition-colors">
                Clear ×
              </button>
            )}
          </div>
          <a href="/go/shop"
                          target="_blank" rel="noopener nofollow sponsored"
            className="btn-primary text-[12px] py-2.5 px-6">
            Shop All
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Cards grid — 2 cols desktop for bigger cards */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {filtered.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <div className="w-16 h-16 rounded-2xl bg-[#16161c] flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-[#50505e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <p className="text-white font-600 text-xl mb-2">No peptides found</p>
            <p className="text-[#8888a0] text-[15px] mb-8">Try a different search term or category</p>
            <button onClick={() => { setQ(''); setCat('all') }} className="btn-primary text-[13px] px-7 py-3.5">
              Show All Peptides
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-24 relative overflow-hidden card-elevated rounded-3xl p-8 sm:p-14 text-center">
          <div className="spot w-[500px] h-[200px] bg-[#d4a043] opacity-[0.05] top-0 left-1/2 -translate-x-1/2" />
          <p className="label-gold mb-4">Premium Peptide Catalog</p>
          <h3 className="font-['Playfair_Display'] font-900 text-white text-2xl sm:text-4xl mb-4 relative z-10">
            Shop the Complete Catalog
          </h3>
          <p className="text-[#8888a0] text-[16px] mb-8 max-w-lg mx-auto relative z-10">
            35 premium compounds for looks maxing, body composition, longevity, and peak performance — pharmaceutical-grade, certificate of analysis verified on every batch.
          </p>
          <a href="/go/shop"
                          target="_blank" rel="noopener nofollow sponsored"
            className="btn-primary text-[14px] px-10 py-4 inline-flex relative z-10">
            Shop Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ProductsContent({ initialCategory }: { initialCategory?: string }) {
  return <Content initialCategory={initialCategory} />
}
