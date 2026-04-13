'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import AnimateIn from '@/components/AnimateIn'
import { products } from '@/lib/products'
import Link from 'next/link'

const TABS = ['All', 'Fat Loss / Metabolic', 'Growth Peptides', 'Recovery & Healing', 'Anti-Aging & Longevity', 'Cognitive & Nootropic', 'Blends & Stacks']

export default function HomeTabs() {
  const [tab, setTab] = useState('All')
  const grid = tab === 'All'
    ? products.slice(0, 9)
    : products.filter(p => p.category === tab).slice(0, 9)

  return (
    <>
      <div className="scroll-x-mobile mb-10">
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`text-[13px] px-4 py-2 rounded-full font-500 transition-all duration-150 whitespace-nowrap flex-shrink-0 ${
              tab === t
                ? 'bg-[#d4a043] text-[#07070a] font-700'
                : 'bg-white/[0.04] border border-white/[0.07] text-[#8888a0] hover:text-white hover:border-white/[0.15]'
            }`}>
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {grid.map((p, i) => (
          <AnimateIn key={p.slug} type="up" delay={i * 60}>
            <ProductCard product={p} index={i} />
          </AnimateIn>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/products" className="btn-secondary text-[13px] px-8 py-3.5">View All 139 Peptides</Link>
      </div>
    </>
  )
}
