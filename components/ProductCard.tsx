'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/products'

interface Props {
  product: Product
  variant?: 'default' | 'compact' | 'hero'
  index?: number
}

export default function ProductCard({ product, variant = 'default', index = 0 }: Props) {

  /* ── COMPACT: horizontal pill card ── */
  if (variant === 'compact') {
    return (
      <Link href={`/products/${product.slug}`}>
        <div className="card flex items-center gap-4 p-4 group hover:scale-[1.01] transition-all duration-200">
          <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-[#16161c]">
            <Image src={product.image} alt={product.name} width={56} height={56}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-white font-600 text-[15px] leading-tight truncate">{product.name}</p>
            <p className="text-[#8888a0] text-[13px] mt-0.5 truncate">{product.tagline}</p>
          </div>
          <div className="flex-shrink-0 text-right">
            <p className="text-[#d4a043] font-600 text-[13px]">{product.price}</p>
            <svg className="w-4 h-4 text-[#50505e] group-hover:text-white group-hover:translate-x-1 transition-all mt-1 ml-auto"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    )
  }

  /* ── HERO: large featured card ── */
  if (variant === 'hero') {
    return (
      <div className="card group overflow-hidden relative">
        <Link href={`/products/${product.slug}`} className="block">
          {/* Image */}
          <div className="relative h-80 overflow-hidden bg-[#0f0f13]">
            <Image src={product.image} alt={product.name} fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-[rgba(15,15,19,0.1)] to-transparent" />
            {/* Badge */}
            {product.badge && (
              <div className="absolute top-4 left-4">
                <span className="tag-gold">{product.badge}</span>
              </div>
            )}
            {/* Number */}
            <div className="absolute top-4 right-4 num-accent">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Body */}
          <div className="p-7">
            <p className="label-gold mb-2">{product.category}</p>
            <h3 className="text-white font-800 text-2xl leading-tight mb-2 group-hover:text-[#e8c060] transition-colors">
              {product.name}
            </h3>
            <p className="text-[#8888a0] text-[15px] leading-relaxed line-clamp-2 mb-5">
              {product.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {product.tags.slice(0, 3).map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#d4a043] font-700 text-lg">{product.price}</span>
              <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="btn-primary py-2.5 px-5 text-[12px]">
                Buy Now
              </a>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  /* ── DEFAULT ── */
  return (
    <div className="card group overflow-hidden flex flex-col h-full relative">
      <Link href={`/products/${product.slug}`} className="flex flex-col h-full">
        {/* Image */}
        <div className="relative overflow-hidden bg-[#0f0f13]" style={{ height: '220px' }}>
          <Image src={product.image} alt={product.name} fill
            className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-600" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-transparent to-transparent" />
          {product.badge && (
            <div className="absolute top-3 left-3">
              <span className="tag-gold">{product.badge}</span>
            </div>
          )}
          <div className="absolute top-3 right-3 num-accent">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <p className="label mb-2">{product.category}</p>
          <h3 className="text-white font-700 text-[18px] leading-snug mb-2 group-hover:text-[#e8c060] transition-colors">
            {product.name}
          </h3>
          <p className="text-[#8888a0] text-[14px] leading-relaxed line-clamp-3 flex-1">
            {product.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {product.tags.slice(0, 2).map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.05]">
            <span className="text-[#d4a043] font-600 text-[15px]">{product.price}</span>
            <div className="flex items-center gap-2">
              <span className="btn-ghost text-[13px]">Details</span>
              <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="btn-primary py-2 px-4 text-[12px]">
                Buy
              </a>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
