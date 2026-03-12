'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/products'

interface Props {
  product: Product
  variant?: 'default' | 'compact' | 'hero' | 'wide'
  index?: number
}

const CATEGORY_ACCENT: Record<string, string> = {
  'Looks Maxing':           '#d4a043',
  'Body Composition':       '#6090ff',
  'Weight Management':      '#e05080',
  'Recovery & Healing':     '#40c090',
  'Anti-Aging':             '#a060ff',
  'Cognitive Performance':  '#40c0ff',
  'Immune & Vitality':      '#60d090',
  'Performance & Vitality': '#ff8040',
}

function accentFor(cat: string) {
  return CATEGORY_ACCENT[cat] ?? '#d4a043'
}

export default function ProductCard({ product, variant = 'default', index = 0 }: Props) {
  const accent = accentFor(product.category)

  /* ─── COMPACT horizontal card ─── */
  if (variant === 'compact') {
    return (
      <Link href={`/products/${product.slug}`}>
        <div className="card flex items-center gap-5 p-4 group hover:scale-[1.01] transition-all duration-200">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-[#16161c]">
            <Image src={product.image} alt={product.name} fill
              className="object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-white font-700 text-[15px] leading-tight truncate">{product.name}</p>
            <p className="text-[#8888a0] text-[12px] mt-0.5 truncate">{product.tagline}</p>
          </div>
          <div className="flex-shrink-0 text-right">
            <p className="font-700 text-[14px]" style={{ color: accent }}>{product.price}</p>
            <svg className="w-4 h-4 text-[#50505e] group-hover:text-white group-hover:translate-x-1 transition-all mt-1 ml-auto"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    )
  }

  /* ─── WIDE horizontal card (for featured sections) ─── */
  if (variant === 'wide') {
    return (
      <div className="card group overflow-hidden relative">
        <Link href={`/products/${product.slug}`} className="flex flex-col sm:flex-row h-full">
          {/* Image */}
          <div className="relative w-full sm:w-64 h-56 sm:h-auto flex-shrink-0 overflow-hidden bg-[#0f0f13]">
            <Image src={product.image} alt={product.name} fill
              className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0f13]/80 hidden sm:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13]/80 to-transparent sm:hidden" />
            {product.badge && (
              <div className="absolute top-4 left-4">
                <span className="tag-gold">{product.badge}</span>
              </div>
            )}
          </div>
          {/* Body */}
          <div className="p-7 flex flex-col justify-center flex-1 relative">
            <div className="absolute top-4 right-4">
              <span className="mono text-[11px] text-[#50505e]">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <p className="text-[11px] font-600 tracking-widest uppercase mb-2" style={{ color: accent }}>
              {product.category}
            </p>
            <h3 className="font-['Playfair_Display'] font-900 text-white text-2xl leading-tight mb-2 group-hover:text-[#e8c060] transition-colors">
              {product.name}
            </h3>
            <p className="text-[#8888a0] text-[14px] leading-relaxed line-clamp-2 mb-4">
              {product.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {product.tags.slice(0, 3).map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="font-700 text-lg" style={{ color: accent }}>{product.price}</span>
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

  /* ─── HERO large card ─── */
  if (variant === 'hero') {
    return (
      <div className="card-product group overflow-hidden relative flex flex-col h-full">
        <Link href={`/products/${product.slug}`} className="flex flex-col h-full">
          {/* Image — big */}
          <div className="relative overflow-hidden bg-[#0f0f13]" style={{ height: '360px' }}>
            <Image src={product.image} alt={product.name} fill priority
              className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-[rgba(12,12,16,0.15)] to-transparent" />
            {/* Accent glow bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(to top, ${accent}18, transparent)` }} />
            {/* Badge */}
            {product.badge && (
              <div className="absolute top-5 left-5">
                <span className="tag-gold">{product.badge}</span>
              </div>
            )}
            {/* Number */}
            <div className="absolute top-5 right-5 mono text-[12px] text-[#50505e]">
              {String(index + 1).padStart(2, '0')}
            </div>
            {/* Category pill on image */}
            <div className="absolute bottom-5 left-5">
              <span className="text-[11px] font-600 tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}35` }}>
                {product.category}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-7 flex flex-col flex-1">
            <h3 className="font-['Playfair_Display'] font-900 text-white text-[26px] leading-tight mb-2 group-hover:text-[#e8c060] transition-colors">
              {product.name}
            </h3>
            <p className="text-[#8888a0] text-[14px] leading-relaxed line-clamp-3 mb-5 flex-1">
              {product.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {product.tags.slice(0, 3).map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
              <span className="font-700 text-xl" style={{ color: accent }}>{product.price}</span>
              <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="btn-primary py-3 px-6 text-[13px]">
                Buy Now
              </a>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  /* ─── DEFAULT card ─── */
  return (
    <div className="card-product group overflow-hidden flex flex-col h-full relative">
      <Link href={`/products/${product.slug}`} className="flex flex-col h-full">

        {/* Image — bigger */}
        <div className="relative overflow-hidden bg-[#0f0f13]" style={{ height: '300px' }}>
          <Image src={product.image} alt={product.name} fill
            className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-106 transition-all duration-600" />
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent" />
          {/* Hover accent glow */}
          <div className="absolute bottom-0 left-0 right-0 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: `linear-gradient(to top, ${accent}20, transparent)` }} />
          {/* Badge */}
          {product.badge && (
            <div className="absolute top-4 left-4">
              <span className="tag-gold">{product.badge}</span>
            </div>
          )}
          {/* Index number */}
          <div className="absolute top-4 right-4 mono text-[11px] text-[#50505e]">
            {String(index + 1).padStart(2, '0')}
          </div>
          {/* Category on image */}
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] font-600 tracking-wider uppercase px-2.5 py-1 rounded-full"
              style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}30` }}>
              {product.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-['Playfair_Display'] font-900 text-white text-[22px] leading-snug mb-2 group-hover:text-[#e8c060] transition-colors">
            {product.name}
          </h3>
          <p className="text-[#8888a0] text-[14px] leading-relaxed line-clamp-3 flex-1 mb-4">
            {product.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {product.tags.slice(0, 3).map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
            <span className="font-700 text-lg" style={{ color: accent }}>{product.price}</span>
            <div className="flex items-center gap-2">
              <span className="btn-ghost text-[13px]">Details</span>
              <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="btn-primary py-2.5 px-5 text-[12px]">
                Buy
              </a>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
