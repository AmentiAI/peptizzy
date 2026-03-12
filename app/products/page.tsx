'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/lib/products'

function Content() {
  const searchParams = useSearchParams()
  const [cat, setCat] = useState(searchParams.get('category') || 'all')
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

  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* Header */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="spot w-[600px] h-[300px] bg-[#d4a043] opacity-[0.04] top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Full Catalog</p>
          </div>
          <h1 className="display text-white mb-5" style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>
            All Peptides
          </h1>
          <p className="text-[#8888a0] text-lg max-w-lg leading-relaxed">
            Every premium peptide available through our partner Pantheon Peptides.
          </p>
        </div>
      </div>

      <div className="rule" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative max-w-xs">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#50505e]"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input type="text" placeholder="Search peptides..."
              value={q} onChange={e => setQ(e.target.value)}
              className="input pl-11 text-[14px]" />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setCat('all')}
              className={`text-[12px] px-4 py-2 rounded-full font-500 transition-all ${
                cat === 'all'
                  ? 'bg-[#d4a043] text-[#07070a] font-700'
                  : 'bg-white/[0.04] border border-white/[0.07] text-[#8888a0] hover:text-white'
              }`}>
              All
            </button>
            {categories.map(c => (
              <button key={c.name} onClick={() => setCat(c.name)}
                className={`text-[12px] px-4 py-2 rounded-full font-500 transition-all ${
                  cat === c.name
                    ? 'bg-[#d4a043] text-[#07070a] font-700'
                    : 'bg-white/[0.04] border border-white/[0.07] text-[#8888a0] hover:text-white'
                }`}>
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-[#8888a0] text-[14px]">
            <span className="text-[#d4a043] font-600">{filtered.length}</span> peptides
            {cat !== 'all' && ` · ${cat}`}
          </p>
          <a href="https://pantheonpeptides.com/partner/AmentiAI/"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary text-[12px] py-2.5 px-5">
            Shop at Pantheon
          </a>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-[#8888a0] text-lg mb-5">No peptides match your search.</p>
            <button onClick={() => { setQ(''); setCat('all') }} className="btn-secondary text-[13px] px-6 py-3">
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 card-elevated rounded-2xl p-12 text-center">
          <h3 className="font-['Playfair_Display'] font-900 text-white text-3xl mb-3">
            Browse the Complete Catalog
          </h3>
          <p className="text-[#8888a0] text-base mb-7 max-w-md mx-auto">
            Every premium peptide at Pantheon Peptides — the most comprehensive selection for physical optimization.
          </p>
          <a href="https://pantheonpeptides.com/partner/AmentiAI/"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary text-[13px] px-8 py-3.5 inline-flex">
            Visit Pantheon Peptides
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#07070a] flex items-center justify-center">
        <p className="text-[#d4a043]">Loading...</p>
      </div>
    }>
      <Content />
    </Suspense>
  )
}
