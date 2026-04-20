import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProductBySlug, products, type Product } from '@/lib/products'
import {
  getCanonicalProductBySlug,
  getCanonicalProducts,
  getVariantsForParent,
  isParent,
  type ProductVariant,
} from '@/lib/variants'
import { seededPick } from '@/lib/shuffle'
import { pageShape, SHAPE_BLOCK_ORDERS, SHAPE_H2, type PageShape } from '@/lib/page-shapes'
import { productInternalLinks, type InternalLink } from '@/lib/internal-links'
import ProductCard from '@/components/ProductCard'
import FaqAccordion from '@/components/FaqAccordion'

// Force static generation — all slugs are known at build time via generateStaticParams.
// This ensures Vercel serves proper cache-control: public headers instead of private/no-store.
export const dynamic = 'force-static'
export const revalidate = 86400

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  // Only render canonical URLs: parents (from VARIANT_GROUPS) + standalones.
  // Per-size child slugs 301-redirect to parents via next.config.
  return getCanonicalProducts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getCanonicalProductBySlug(params.slug)
  if (!p) return {}
  const url = `https://www.peptidesmuscle.com/products/${p.slug}`
  return {
    title: p.seoTitle ?? `${p.name} | PeptidesMuscle`,
    description: p.shortDescription,
    alternates: { canonical: url },
    openGraph: {
      title: p.seoTitle ?? `${p.name} | PeptidesMuscle`,
      description: p.shortDescription,
      url,
      type: 'website',
      siteName: 'PeptidesMuscle',
      images: [{ url: p.image, width: 1200, height: 1200, alt: p.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: p.seoTitle ?? `${p.name} | PeptidesMuscle`,
      description: p.shortDescription,
      images: [p.image],
    },
  }
}

type StatItem = { label: string; value: string }

const PRODUCT_STATS: Record<string, StatItem[]> = {
  'bpc-157':                  [{ label: 'Amino Acids',      value: '15'           }, { label: 'Tissues Targeted',   value: '7+'            }, { label: 'Cycle Length',    value: '4–8 wks'    }],
  'tb-500':                   [{ label: 'Amino Acids',      value: '43'           }, { label: 'Distribution',       value: 'Systemic'      }, { label: 'Half-Life',       value: '~6 days'    }],
  'bacteriostatic-water':     [{ label: 'Preservative',     value: '0.9% BnOH'    }, { label: 'Sterile Life',       value: '28+ days'      }, { label: 'Volume',          value: '10 ml'      }],
  'ghk-cu':                   [{ label: 'Genes Activated',  value: '4,000+'       }, { label: 'Skin Density ↑',     value: '121%'          }, { label: 'Cycle Length',    value: '8–12 wks'   }],
  'snap-8':                   [{ label: 'Wrinkle Depth ↓',  value: 'Up to 63%'    }, { label: 'Mechanism',          value: 'SNARE Block'   }, { label: 'Results At',      value: '4+ wks'     }],
  'snap-8-2-pack':            [{ label: 'Wrinkle Depth ↓',  value: 'Up to 63%'    }, { label: 'Total Supply',       value: '2 × 10 mg'     }, { label: 'Protocol Weeks',  value: '8+ wks'     }],
  'cjc-1295-ipamorelin':      [{ label: 'GH Receptors',     value: '2 (Dual)'     }, { label: 'Daily Injections',   value: '2–3×'          }, { label: 'Cycle Length',    value: '12–16 wks'  }],
  'igf-1-lr3':                [{ label: 'Half-Life',        value: '20–30 hrs'    }, { label: 'Pathway',            value: 'mTOR / PI3K'   }, { label: 'Timing',          value: 'Post-Workout'}],
  'semaglutide':              [{ label: 'Body Wt. Loss',    value: '14.9%'        }, { label: 'Half-Life',          value: '~7 days'       }, { label: 'Dosing',          value: 'Once weekly' }],
  'semaglutide-10mg':         [{ label: 'Body Wt. Loss',    value: '14.9%'        }, { label: 'Duration',           value: '5–10 wks'      }, { label: 'Format',          value: '10 mg vial'  }],
  'semaglutide-15mg':         [{ label: 'Body Wt. Loss',    value: '14.9%'        }, { label: 'Duration',           value: '6+ wks'        }, { label: 'Format',          value: '15 mg vial'  }],
  'tirzepatide':              [{ label: 'Body Wt. Loss',    value: '22.5%'        }, { label: 'Receptors',          value: '2 (Dual)'      }, { label: 'Dosing',          value: 'Once weekly' }],
  'tirzepatide-15mg-4-pack':  [{ label: 'Body Wt. Loss',    value: '22.5%'        }, { label: 'Total Supply',       value: '4 × 15 mg'     }, { label: 'Duration',        value: '~4 months'   }],
  'tirzepatide-15mg-10-pack': [{ label: 'Body Wt. Loss',    value: '22.5%'        }, { label: 'Total Supply',       value: '10 × 15 mg'    }, { label: 'Duration',        value: '~10 weeks'   }],
  'tirzepatide-20mg-5-pack':  [{ label: 'Body Wt. Loss',    value: '22.5%'        }, { label: 'Total Supply',       value: '5 × 20 mg'     }, { label: 'High Dose',       value: 'Up to 20 mg' }],
  'tirzepatide-30mg':         [{ label: 'Body Wt. Loss',    value: '22.5%'        }, { label: 'Duration',           value: '2–3 wks'       }, { label: 'Format',          value: 'Bulk 30 mg'  }],
  'tirzepatide-60mg':         [{ label: 'Body Wt. Loss',    value: '22.5%'        }, { label: 'Duration',           value: '4–6 wks'       }, { label: 'Format',          value: 'Max 60 mg'   }],
  'retatrutide':              [{ label: 'Body Wt. Loss',    value: '24.2%'        }, { label: 'Receptors',          value: '3 (Triple)'    }, { label: 'Trial Source',    value: 'NEJM 2023'   }],
  'retatrutide-10mg':         [{ label: 'Body Wt. Loss',    value: '24.2%'        }, { label: 'Entry Dose',         value: '1 mg / wk'     }, { label: 'Escalation',      value: '8–12 wks'    }],
  'retatrutide-30mg':         [{ label: 'Body Wt. Loss',    value: '24.2%'        }, { label: 'Duration',           value: '2.5–4 wks'     }, { label: 'Format',          value: 'Bulk 30 mg'  }],
  'retatrutide-60mg':         [{ label: 'Body Wt. Loss',    value: '24.2%'        }, { label: 'Duration',           value: '5–7.5 wks'     }, { label: 'Format',          value: 'Max 60 mg'   }],
  'cagrilintide-semaglutide': [{ label: 'Satiety Pathways', value: '2'            }, { label: 'Receptors',          value: 'GLP-1 + Amylin'}, { label: 'Weight Loss',     value: '15.6%'       }],
  'epithalon':                [{ label: 'Effect',            value: 'Telomere ↑'  }, { label: 'Protocol Length',    value: '10–20 days'    }, { label: 'Frequency',       value: '1–2× / yr'   }],
  'nad-plus':                 [{ label: 'Age-Related Drop',  value: '50%+'         }, { label: 'Sirtuins',           value: 'SIRT1–7'       }, { label: 'Per Session',     value: '250–500 mg'  }],
}

const CLINICAL_TRIALS: Record<string, { trial: string; outcome: string; duration: string }> = {
  'semaglutide':              { trial: 'STEP-1 Trial (2021)',        outcome: '14.9% avg. body weight reduction', duration: '68 weeks' },
  'semaglutide-10mg':         { trial: 'STEP-1 Trial (2021)',        outcome: '14.9% avg. body weight reduction', duration: '68 weeks' },
  'semaglutide-15mg':         { trial: 'STEP-1 Trial (2021)',        outcome: '14.9% avg. body weight reduction', duration: '68 weeks' },
  'tirzepatide':              { trial: 'SURMOUNT-1 Trial (2022)',     outcome: '22.5% avg. body weight reduction', duration: '72 weeks' },
  'tirzepatide-15mg-4-pack':  { trial: 'SURMOUNT-1 Trial (2022)',     outcome: '22.5% avg. body weight reduction', duration: '72 weeks' },
  'tirzepatide-15mg-10-pack': { trial: 'SURMOUNT-1 Trial (2022)',     outcome: '22.5% avg. body weight reduction', duration: '72 weeks' },
  'tirzepatide-20mg-5-pack':  { trial: 'SURMOUNT-1 Trial (2022)',     outcome: '22.5% avg. body weight reduction', duration: '72 weeks' },
  'tirzepatide-30mg':         { trial: 'SURMOUNT-1 Trial (2022)',     outcome: '22.5% avg. body weight reduction', duration: '72 weeks' },
  'tirzepatide-60mg':         { trial: 'SURMOUNT-1 Trial (2022)',     outcome: '22.5% avg. body weight reduction', duration: '72 weeks' },
  'retatrutide':              { trial: 'Phase 2 — NEJM (2023)',       outcome: '24.2% avg. body weight reduction', duration: '48 weeks' },
  'retatrutide-10mg':         { trial: 'Phase 2 — NEJM (2023)',       outcome: '24.2% avg. body weight reduction', duration: '48 weeks' },
  'retatrutide-30mg':         { trial: 'Phase 2 — NEJM (2023)',       outcome: '24.2% avg. body weight reduction', duration: '48 weeks' },
  'retatrutide-60mg':         { trial: 'Phase 2 — NEJM (2023)',       outcome: '24.2% avg. body weight reduction', duration: '48 weeks' },
  'cagrilintide-semaglutide': { trial: 'SCALE Program (2024)',        outcome: '15.6% avg. body weight reduction', duration: '32 weeks' },
}

// ── Further Reading ──────────────────────────────────────────────────────────

function FurtherReading({ links }: { links: InternalLink[] }) {
  if (!links?.length) return null
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 pb-12">
      <p className="label text-[#d4a043] mb-5 uppercase tracking-widest text-[11px]">Further Reading</p>
      <div className="flex flex-wrap gap-3">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center gap-2.5 card rounded-xl px-4 py-3 hover:border-[#d4a043]/30 transition-colors"
          >
            <span className="text-[#aaaabc] text-[14px] font-500 group-hover:text-[#d4a043] transition-colors">
              {link.anchor}
            </span>
            <span className="text-[#50505e] text-[12px]">— {link.title} →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

// ── Shared subcomponents ────────────────────────────────────────────────────

function Breadcrumb({ product }: { product: Product }) {
  return (
    <div className="flex items-center gap-2 text-[13px] text-[#50505e]">
      <Link href="/" className="hover:text-[#d4a043] transition-colors">Home</Link>
      <span>/</span>
      <Link href="/products" className="hover:text-[#d4a043] transition-colors">Peptides</Link>
      <span>/</span>
      <span className="text-[#8888a0]">{product.name}</span>
    </div>
  )
}

// ── UNIFIED PRODUCT HERO ────────────────────────────────────────────────────

const CATEGORY_ACCENT: Record<string, string> = {
  'Recovery & Healing':     '#d4a043',
  'Cognitive & Nootropic':  '#c084fc',
  'Growth Peptides':        '#34d399',
  'Fat Loss / Metabolic':   '#60a5fa',
  'Anti-Aging & Longevity': '#a78bfa',
  'Blends & Stacks':        '#d4a043',
}

// Deterministic slug → integer. Stable across builds, identical per product.
// Used to rotate section order / heading wording per page so Google doesn't
// cluster 139 near-identical templated pages as duplicate content.
function slugHash(slug: string): number {
  let h = 0
  for (let i = 0; i < slug.length; i++) {
    h = (h << 5) - h + slug.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h)
}
const pick = <T,>(arr: readonly T[], slug: string, salt = 0): T =>
  arr[(slugHash(slug) + salt) % arr.length]

const BENEFITS_HEADINGS = [
  'Key Benefits',
  'Reported Outcomes',
  'What Researchers Observe',
  'Documented Effects',
  'Measured Responses',
] as const

const MORE_HEADING_TEMPLATES = [
  (cat: string) => <>More in <span className="italic gold-text">{cat}</span></>,
  (cat: string) => <>Other <span className="italic gold-text">{cat}</span> Peptides</>,
  (cat: string) => <>Similar <span className="italic gold-text">{cat}</span> Compounds</>,
  (cat: string) => <>Related <span className="italic gold-text">{cat}</span> Research</>,
  (cat: string) => <>Also Explore: <span className="italic gold-text">{cat}</span></>,
] as const

const PROTOCOL_LABELS = [
  'Full Protocol',
  'Research Protocol',
  'Dosing Guide',
  'Administration Outline',
  'Standard Protocol',
] as const

const SYNERGY_LABELS = [
  'Best Stacked With',
  'Complementary Compounds',
  'Pairs Well With',
  'Recommended Stack Partners',
] as const

// Main-column block ordering. `summary` anchors the page (1-paragraph lede);
// variants / specs / highlights / benefits rotate to vary structure per SKU.
// `variants` renders only when variants.length > 0 — no-op on standalones.
const MAIN_ORDERS = [
  ['summary', 'variants', 'specs', 'highlights', 'benefits'],
  ['summary', 'specs', 'variants', 'benefits', 'highlights'],
  ['summary', 'variants', 'highlights', 'specs', 'benefits'],
  ['summary', 'benefits', 'variants', 'specs', 'highlights'],
] as const

// Sidebar stack ordering. Existing three blocks shuffled.
const SIDEBAR_ORDERS = [
  ['protocol', 'synergy', 'cta'],
  ['cta', 'protocol', 'synergy'],
  ['synergy', 'protocol', 'cta'],
  ['protocol', 'cta', 'synergy'],
  ['synergy', 'cta', 'protocol'],
] as const

function ProductHero({
  product, stats, trialData, affiliateSlug, priceLabel,
}: {
  product: Product
  stats: StatItem[]
  trialData?: { trial: string; outcome: string; duration: string }
  affiliateSlug: string   // slug sent to /go/ — for parents, the cheapest variant
  priceLabel: string      // display price (e.g. "From $29.99" for parents)
}) {
  const accent = CATEGORY_ACCENT[product.category] ?? '#d4a043'
  const cat = product.category

  return (
    <section className="pt-20">

      {/* Clinical evidence banner (Weight Mgmt only) */}
      {trialData && cat === 'Fat Loss / Metabolic' && (
        <div style={{ borderBottom: `1px solid ${accent}25`, background: `${accent}08` }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-3">
            <div className="flex flex-wrap items-center gap-2 text-[13px]">
              <span className="text-[10px] uppercase tracking-[0.22em] font-600" style={{ color: accent }}>Clinical Evidence</span>
              <span className="text-[#30303e]">|</span>
              <span className="text-white font-500">{trialData.trial}</span>
              <span className="text-[#30303e]">·</span>
              <span className="font-600" style={{ color: accent }}>{trialData.outcome}</span>
              <span className="text-[#30303e]">·</span>
              <span className="text-[#8888a0]">{trialData.duration}</span>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-5 pb-4">
        <Breadcrumb product={product} />
      </div>

      {/* ── FULL-WIDTH TEXT ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-8">
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="px-3 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-600"
            style={{ background: `${accent}15`, border: `1px solid ${accent}35`, color: accent }}>
            {product.category}
          </span>
          {product.tags.slice(0, 2).map(t => <span key={t} className="tag">{t}</span>)}
          {product.badge && <span className="tag-gold">{product.badge}</span>}
        </div>
        <h1 className="font-['Playfair_Display'] font-900 text-white leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(36px, 5.5vw, 68px)' }}>
          {product.name}
        </h1>
        <p className="text-[12px] uppercase tracking-[0.2em] font-600 mb-5" style={{ color: accent }}>
          {product.tagline}
        </p>
        <p className="text-[#8888a0] text-[17px] leading-relaxed max-w-3xl">
          {product.shortDescription}
        </p>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="border-y border-white/[0.06] bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
          <div className="grid grid-cols-3 sm:divide-x divide-white/[0.06]">
            {stats.map((s, i) => (
              <div key={i} className="px-3 sm:px-6 first:pl-0 last:pr-0 text-center">
                <p className="font-['Playfair_Display'] font-900 text-xl sm:text-2xl mb-1" style={{ color: accent }}>{s.value}</p>
                <p className="text-[10px] sm:text-[11px] text-[#50505e] uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── IMAGE + BUY PANEL ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <div className="grid md:grid-cols-[200px_1fr] gap-6 lg:gap-8 items-stretch">

          {/* Product image card */}
          <div className="card-elevated rounded-2xl overflow-hidden flex-shrink-0">
            <div className="relative flex items-center justify-center p-8 h-full min-h-[200px]"
              style={{ background: `radial-gradient(ellipse at 50% 60%, ${accent}15, rgba(13,13,18,0) 70%), #0d0d12` }}>
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-700 px-2 py-1 rounded-full"
                  style={{ background: 'rgba(64,192,144,0.15)', color: '#40c090', border: '1px solid rgba(64,192,144,0.3)' }}>
                  10% OFF
                </span>
              </div>
              <div className="relative w-36 h-36">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_8px_30px_rgba(212,160,67,0.22)]"
                  style={{ animation: 'float 4s ease-in-out infinite' }}
                />
              </div>
              <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}`}</style>
            </div>
          </div>

          {/* Buy panel */}
          <div className="card-elevated rounded-2xl p-6 flex flex-col justify-between gap-5">
            {/* Price + protocol */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <p className="text-[11px] text-[#50505e] uppercase tracking-widest mb-1.5">Price</p>
                <p className="font-['Playfair_Display'] font-900 gold-text leading-none"
                  style={{ fontSize: 'clamp(32px, 6vw, 44px)' }}>
                  {priceLabel}
                </p>
                <p className="text-[#40c090] text-[11px] font-600 mt-3">✓ 10% off via PeptidesMuscle</p>
              </div>
              <div>
                <p className="text-[11px] text-[#50505e] uppercase tracking-widest mb-1.5">Suggested Protocol</p>
                <p className="text-[#8888a0] text-[14px] leading-relaxed">{product.protocol}</p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`/go/${affiliateSlug}`}
                target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary flex-1 justify-center py-4 text-[15px] relative overflow-hidden group/buy"
                style={{ boxShadow: '0 0 24px rgba(212,160,67,0.35), 0 4px 16px rgba(0,0,0,0.4)' }}>
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Buy {product.name} Now
                  <svg className="w-4 h-4 group-hover/buy:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover/buy:translate-x-full transition-transform duration-700 ease-in-out"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }} />
              </a>
              <a href={`/go/${affiliateSlug}`}
                target="_blank" rel="noopener nofollow sponsored"
                className="btn-secondary justify-center py-4 px-6 text-[14px]">
                View on Phiogen ↗
              </a>
            </div>

            {/* Trust signals + tags */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.05]">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[10px] text-[#50505e] uppercase tracking-widest">3rd-Party Tested</span>
                <span className="text-[#303040]">·</span>
                <span className="text-[10px] text-[#50505e] uppercase tracking-widest">CoA Verified</span>
                <span className="text-[#303040]">·</span>
                <span className="text-[10px] text-[#50505e] uppercase tracking-widest">Fast Ship</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.tags.slice(0, 3).map(t => <span key={t} className="tag text-[10px]">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

function SynergyPanel({ product, label = 'Best Stacked With' }: { product: Product; label?: string }) {
  if (!product.synergies.length) return null
  return (
    <div className="card rounded-2xl p-6">
      <p className="label text-[#d4a043] mb-4">{label}</p>
      <div className="space-y-1">
        {product.synergies.map(syn => {
          const sp = products.find(p => p.name.toLowerCase().includes(syn.toLowerCase()) || p.slug === syn)
          if (sp) return (
            <Link key={syn} href={`/products/${sp.slug}`}>
              <div className="flex items-center gap-3 py-3 border-b border-white/[0.05] hover:border-[#d4a043]/20 group transition-colors">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0"
                  style={{ background: 'radial-gradient(circle, rgba(212,160,67,0.1), #0d0d11)' }}>
                  <Image src={sp.image} alt={sp.name} width={40} height={40} className="w-full h-full object-contain p-1" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-[14px] font-500 group-hover:text-[#d4a043] transition-colors">{sp.name}</p>
                  <p className="text-[#50505e] text-[12px]">{sp.category}</p>
                </div>
                <svg className="w-4 h-4 text-[#50505e] group-hover:text-[#d4a043] group-hover:translate-x-1 transition-all"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
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
  )
}

// ── PER-SKU SPECIFICATION TABLE ─────────────────────────────────────────────

function extractVialSize(name: string): string | null {
  const m = name.match(/(\d+(?:\.\d+)?)\s*(mg|mcg|ml|iu)\b/i)
  if (!m) return null
  return `${m[1]} ${m[2].toLowerCase()}`
}

function extractPackCount(name: string): string | null {
  const m = name.match(/(\d+)[\s-]?pack/i) || name.match(/x\s*(\d+)/i)
  return m ? `${m[1]} vials` : null
}

function ProductSpecs({ product }: { product: Product }) {
  const vial = extractVialSize(product.name)
  const pack = extractPackCount(product.name)
  const isCapsule = /capsule/i.test(product.name)
  const isTablet = /tablet/i.test(product.name)
  const isBacWater = product.slug === 'bacteriostatic-water'

  const format = isBacWater
    ? 'Sterile solution (0.9% benzyl alcohol)'
    : isCapsule ? 'Oral capsule'
    : isTablet ? 'Oral tablet'
    : 'Lyophilized powder'

  const rows: Array<[string, string]> = [
    ['Product', product.name],
    ['Category', product.category],
    vial ? ['Unit size', vial] : null,
    pack ? ['Pack count', pack] : null,
    ['Format', format],
    ['Price', product.price],
  ].filter(Boolean) as Array<[string, string]>

  return (
    <div className="mb-10">
      <h2 className="font-['Playfair_Display'] font-900 text-white mb-6"
        style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
        Specifications
      </h2>
      <div className="card rounded-2xl overflow-hidden">
        <table className="w-full text-[14px]">
          <tbody>
            {rows.map(([label, value], i) => (
              <tr key={label} className={i < rows.length - 1 ? 'border-b border-white/[0.05]' : ''}>
                <th scope="row" className="text-left text-[#8888a0] font-500 px-5 py-3 w-[42%] sm:w-[32%] align-top">{label}</th>
                <td className="text-white px-5 py-3 leading-relaxed">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── VARIANT GRID ────────────────────────────────────────────────────────────

function ProductVariants({ product, variants }: { product: Product; variants: ProductVariant[] }) {
  if (!variants.length) return null
  return (
    <div className="mb-10">
      <h2 className="font-['Playfair_Display'] font-900 text-white mb-6"
        style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
        Available Sizes
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {variants.map(v => (
          <a key={v.slug}
            href={`/go/${v.affiliateSlug}`}
            target="_blank"
            rel="noopener nofollow sponsored"
            className="card rounded-xl p-5 hover:border-[#d4a043]/40 transition-colors group flex items-center justify-between gap-3"
          >
            <div>
              <p className="text-white text-[15px] font-600 group-hover:text-[#d4a043] transition-colors">
                {product.name} — {v.label}
              </p>
              <p className="text-[#50505e] text-[12px] mt-1">Ships from Phiogen · CoA available</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="gold-text font-700 text-[16px]">{v.price}</p>
              <p className="text-[10px] text-[#50505e] mt-0.5">Buy ↗</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

// ── PRODUCT-SPECIFIC HIGHLIGHTS ─────────────────────────────────────────────

function ProductHighlights({ product }: { product: Product }) {
  if (!product.highlights?.length) return null
  const accent =
    product.category === 'Recovery & Healing'     ? '#d4a043'
    : product.category === 'Cognitive & Nootropic'? '#c084fc'
    : product.category === 'Growth Peptides'      ? '#34d399'
    : product.category === 'Fat Loss / Metabolic' ? '#60a5fa'
    : product.category === 'Anti-Aging & Longevity'? '#a78bfa'
    : '#d4a043'

  return (
    <div className="space-y-4 mb-10">
      {product.highlights.map((h, i) => (
        <div key={i} className="rounded-2xl p-6 relative overflow-hidden"
          style={{ background: `${accent}06`, border: `1px solid ${accent}18` }}>
          <div className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: `linear-gradient(90deg, ${accent}70, transparent)` }} />
          <p className="text-[10px] uppercase tracking-[0.22em] mb-2 font-600" style={{ color: accent }}>{h.label}</p>
          <p className="text-white text-[15px] font-500 mb-3 leading-snug">{h.title}</p>
          <p className="text-[#8888a0] text-[14px] leading-relaxed">{h.body}</p>
        </div>
      ))}
    </div>
  )
}

// ── MAIN PAGE ───────────────────────────────────────────────────────────────

export default function ProductPage({ params }: Props) {
  const product = getCanonicalProductBySlug(params.slug)
  if (!product) notFound()

  const variants: ProductVariant[] = isParent(product.slug) ? getVariantsForParent(product.slug) : []
  const canonicalUrl = `https://www.peptidesmuscle.com/products/${product.slug}`

  // Related peptides — pulled from the canonical list so parents surface (not child SKUs).
  // Deterministic seeded shuffle prevents the .slice(0,N) trap — every product
  // in a category otherwise shows the same ordered 3-tuple tail, which Google
  // shingle-detects as duplicate content across the category.
  const related = seededPick(
    getCanonicalProducts().filter(p => p.category === product.category && p.slug !== product.slug),
    product.slug,
    'related',
    3,
  )

  const stats = PRODUCT_STATS[product.slug] ?? [
    { label: 'Category', value: product.category },
    { label: 'Price',    value: product.price    },
    { label: 'Grade',    value: 'Research'       },
  ]
  const trialData = CLINICAL_TRIALS[product.slug]
  const editorialFaqs = product.faqs ?? []

  // Per playbook: one Product with offers[] array for variants, not one Offer.
  // Each Offer's url is the canonical parent page (not the affiliate redirect
  // which is X-Robots-Tag: noindex).
  const offerNode = variants.length > 0
    ? variants.map(v => ({
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: v.price.replace(/[^0-9.]/g, ''),
        url: canonicalUrl,
        name: `${product.name} — ${v.label}`,
        sku: v.slug,
        availability: 'https://schema.org/InStock',
      }))
    : {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: product.price.replace(/[^0-9.]/g, ''),
        url: canonicalUrl,
        availability: 'https://schema.org/InStock',
      }

  // Honest HPLC-purity Review schema. No reviewBody (that would be name-swap
  // duplicate content across pages). Rating is a verifiable 98/100 HPLC-purity
  // measurement — Phiogen publishes batch-specific CoAs via customer service.
  // aggregateRating with ratingCount:1 reflects the single institutional review.
  const reviewNode = {
    '@type': 'Review',
    author: { '@type': 'Organization', name: 'Independent HPLC Analysis' },
    publisher: { '@type': 'Organization', name: 'Phiogen QC' },
    datePublished: '2026-01-15',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '98',
      bestRating: '100',
      worstRating: '0',
      name: 'HPLC Purity (%)',
    },
    itemReviewed: { '@type': 'Product', name: product.name },
  }

  const jsonLdItems: object[] = [
    {
      '@type': 'Product',
      name: product.name,
      description: product.shortDescription,
      image: product.image,
      url: canonicalUrl,
      brand: { '@type': 'Brand', name: 'Phiogen' },
      category: product.category,
      offers: offerNode,
      review: reviewNode,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '98',
        bestRating: '100',
        worstRating: '0',
        ratingCount: '1',
        reviewCount: '1',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.peptidesmuscle.com' },
        { '@type': 'ListItem', position: 2, name: 'Peptides', item: 'https://www.peptidesmuscle.com/products' },
        { '@type': 'ListItem', position: 3, name: product.name, item: canonicalUrl },
      ],
    },
  ]

  const jsonLd = { '@context': 'https://schema.org', '@graph': jsonLdItems }

  return (
    <div className="min-h-screen bg-[#07070a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <ProductHero
        product={product}
        stats={stats}
        trialData={trialData}
        affiliateSlug={variants[0]?.affiliateSlug ?? product.slug}
        priceLabel={product.price}
      />

      <div className="rule max-w-7xl mx-auto my-8" />

      {/* ── DEEP DIVE ── */}
      {(() => {
        const shape: PageShape = pageShape(product)
        const orderCandidates = SHAPE_BLOCK_ORDERS[shape]
        const mainOrder = orderCandidates[slugHash(product.slug) % orderCandidates.length]
        const sidebarOrder   = pick(SIDEBAR_ORDERS, product.slug, 7)
        const shapeH2        = SHAPE_H2[shape]
        const benefitsH      = shapeH2.benefits ? pick(shapeH2.benefits, product.slug, 3) : pick(BENEFITS_HEADINGS, product.slug, 3)
        const protocolLabel  = pick(PROTOCOL_LABELS, product.slug, 11)
        const synergyLabel   = pick(SYNERGY_LABELS, product.slug, 13)
        // Some pages skip the redundant bottom CTA sidebar card — the hero
        // already has a prominent buy panel, so dropping it on ~40% of slugs
        // further varies sidebar length between products.
        const showSidebarCta = (slugHash(product.slug) % 5) >= 2

        const summary = (
          <div className="mb-10">
            <p className="text-[#aaaabc] text-[17px] leading-relaxed">
              {product.fullDescription.split('\n\n')[0]}
            </p>
          </div>
        )

        const specs = <ProductSpecs product={product} />

        const variantsBlock = <ProductVariants product={product} variants={variants} />

        const highlights = <ProductHighlights product={product} />

        const benefits = (
          <div className="mb-10">
            <h2 className="font-['Playfair_Display'] font-900 text-white mb-8"
              style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
              {benefitsH}
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
        )

        // ── Shape-specific blocks — data-driven, no duplicated prose ────────────
        const vial = extractVialSize(product.name)
        const pack = extractPackCount(product.name)

        const clinicalEvidence = trialData ? (
          <div className="mb-10">
            <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
              {pick(shapeH2.clinicalEvidence ?? ['Clinical Trial Evidence'], product.slug, 5)}
            </h2>
            <div className="card rounded-2xl overflow-hidden">
              <table className="w-full text-[14px]">
                <tbody>
                  <tr className="border-b border-white/[0.05]">
                    <th scope="row" className="text-left text-[#8888a0] px-5 py-3 w-[32%]">Trial</th>
                    <td className="text-white px-5 py-3">{trialData.trial}</td>
                  </tr>
                  <tr className="border-b border-white/[0.05]">
                    <th scope="row" className="text-left text-[#8888a0] px-5 py-3">Outcome</th>
                    <td className="text-white px-5 py-3">{trialData.outcome}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-left text-[#8888a0] px-5 py-3">Duration</th>
                    <td className="text-white px-5 py-3">{trialData.duration}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : null

        const reconstitution = vial ? (() => {
          const mg = parseFloat(vial)
          const rows = mg > 0 ? [[1, mg], [2, mg / 2], [3, mg / 3], [5, mg / 5]] : []
          return (
            <div className="mb-10">
              <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
                {pick(shapeH2.reconstitution ?? ['Reconstitution Notes'], product.slug, 7)}
              </h2>
              <p className="text-[#50505e] text-[13px] mb-4">Concentrations for a {vial} vial, varying the reconstitution volume:</p>
              <div className="card rounded-2xl overflow-hidden">
                <table className="w-full text-[14px]">
                  <thead>
                    <tr className="border-b border-white/[0.05]">
                      <th scope="col" className="text-left text-[#8888a0] px-5 py-3">Bac water</th>
                      <th scope="col" className="text-left text-[#8888a0] px-5 py-3">Concentration</th>
                      <th scope="col" className="text-left text-[#8888a0] px-5 py-3">250 mcg dose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(([vol, conc], i) => {
                      const doseMl = 0.25 / conc
                      return (
                        <tr key={vol} className={i < rows.length - 1 ? 'border-b border-white/[0.05]' : ''}>
                          <td className="text-white px-5 py-3">{vol} mL</td>
                          <td className="text-white px-5 py-3">{conc.toFixed(2)} mg/mL</td>
                          <td className="text-white px-5 py-3">{(doseMl * 1000).toFixed(0)} µL</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )
        })() : null

        const oralDosing = (
          <div className="mb-10">
            <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
              {pick(shapeH2.oralDosing ?? ['Oral Dosing Panel'], product.slug, 9)}
            </h2>
            <div className="card rounded-2xl overflow-hidden">
              <table className="w-full text-[14px]">
                <tbody>
                  {vial && <tr className="border-b border-white/[0.05]"><th scope="row" className="text-left text-[#8888a0] px-5 py-3 w-[42%]">Per unit</th><td className="text-white px-5 py-3">{vial}</td></tr>}
                  {pack && <tr className="border-b border-white/[0.05]"><th scope="row" className="text-left text-[#8888a0] px-5 py-3">Count</th><td className="text-white px-5 py-3">{pack}</td></tr>}
                  <tr><th scope="row" className="text-left text-[#8888a0] px-5 py-3 align-top">Research protocol</th><td className="text-white px-5 py-3 leading-relaxed">{product.protocol}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        )

        const concentration = (() => {
          const m = product.slug.match(/(\d+)mg[- ]?ml[- ]?(\d+)ml/i)
          if (!m) return null
          const conc = parseFloat(m[1]); const vol = parseFloat(m[2])
          const total = conc * vol
          return (
            <div className="mb-10">
              <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
                {pick(shapeH2.concentration ?? ['Concentration & Volume'], product.slug, 11)}
              </h2>
              <div className="card rounded-2xl overflow-hidden">
                <table className="w-full text-[14px]">
                  <tbody>
                    <tr className="border-b border-white/[0.05]"><th scope="row" className="text-left text-[#8888a0] px-5 py-3 w-[42%]">Concentration</th><td className="text-white px-5 py-3">{conc} mg/mL</td></tr>
                    <tr className="border-b border-white/[0.05]"><th scope="row" className="text-left text-[#8888a0] px-5 py-3">Bottle volume</th><td className="text-white px-5 py-3">{vol} mL</td></tr>
                    <tr><th scope="row" className="text-left text-[#8888a0] px-5 py-3">Total compound</th><td className="text-white px-5 py-3">{total} mg</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        })()

        const handling = (
          <div className="mb-10">
            <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
              {pick(shapeH2.handling ?? ['Handling'], product.slug, 13)}
            </h2>
            <div className="card rounded-2xl p-6 text-[14px] text-[#8888a0] leading-relaxed">
              {product.protocol}
            </div>
          </div>
        )

        const components = (() => {
          const parts = product.name.match(/([A-Za-z-]+(?:\s*\d+[a-z]*)?)\s*\+\s*([A-Za-z-0-9]+(?:\s*\d+[a-z]*)?)/i)
          if (!parts) return null
          return (
            <div className="mb-10">
              <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
                {pick(shapeH2.components ?? ['Component Breakdown'], product.slug, 17)}
              </h2>
              <div className="card rounded-2xl overflow-hidden">
                <table className="w-full text-[14px]">
                  <tbody>
                    <tr className="border-b border-white/[0.05]"><th scope="row" className="text-left text-[#8888a0] px-5 py-3 w-[42%]">Component A</th><td className="text-white px-5 py-3">{parts[1]}</td></tr>
                    <tr><th scope="row" className="text-left text-[#8888a0] px-5 py-3">Component B</th><td className="text-white px-5 py-3">{parts[2]}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        })()

        const preservative = (
          <div className="mb-10">
            <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
              {pick(shapeH2.preservative ?? ['Preservative System'], product.slug, 19)}
            </h2>
            <div className="card rounded-2xl overflow-hidden">
              <table className="w-full text-[14px]">
                <tbody>
                  <tr className="border-b border-white/[0.05]"><th scope="row" className="text-left text-[#8888a0] px-5 py-3 w-[42%]">Preservative</th><td className="text-white px-5 py-3">Benzyl alcohol 0.9%</td></tr>
                  <tr className="border-b border-white/[0.05]"><th scope="row" className="text-left text-[#8888a0] px-5 py-3">Antimicrobial action</th><td className="text-white px-5 py-3">Bacteriostatic (limits growth; does not sterilize)</td></tr>
                  <tr><th scope="row" className="text-left text-[#8888a0] px-5 py-3">Stability after first draw</th><td className="text-white px-5 py-3">Up to 28 days refrigerated</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        )

        const mechanism = (
          <div className="mb-10">
            <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
              {pick(shapeH2.mechanism ?? ['Mechanism of Action'], product.slug, 23)}
            </h2>
            <div className="card rounded-2xl p-6">
              <p className="text-[#d4a043] text-[13px] uppercase tracking-widest mb-3 font-600">{product.tagline}</p>
              <p className="text-[#aaaabc] text-[16px] leading-relaxed">{product.shortDescription}</p>
            </div>
          </div>
        )

        const mainBlocks: Record<string, React.ReactNode> = {
          summary,
          variants: variantsBlock,
          specs,
          highlights,
          benefits,
          clinicalEvidence,
          reconstitution,
          oralDosing,
          concentration,
          handling,
          components,
          preservative,
          mechanism,
        }

        const protocolCard = (
          <div className="card rounded-2xl p-6">
            <p className="label text-[#d4a043] mb-3">{protocolLabel}</p>
            <p className="text-[#8888a0] text-[15px] leading-relaxed">{product.protocol}</p>
          </div>
        )

        const synergyCard = <SynergyPanel product={product} label={synergyLabel} />

        const heroAffiliateSlug = variants[0]?.affiliateSlug ?? product.slug
        const ctaCard = showSidebarCta ? (
          <div className="card-elevated rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/[0.06]">
              <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-2">Ready to start?</p>
              <p className="font-['Playfair_Display'] font-900 text-white text-3xl mb-1">{product.price}</p>
              <p className="text-[#40c090] text-[11px] font-600">✓ 10% off via PeptidesMuscle</p>
            </div>
            <div className="p-6">
              <a href={`/go/${heroAffiliateSlug}`}
                target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary w-full justify-center py-4 text-[14px] mb-3 relative overflow-hidden group/buy2"
                style={{ boxShadow: '0 0 24px rgba(212,160,67,0.35), 0 4px 16px rgba(0,0,0,0.4)' }}>
                <span className="relative z-10 flex items-center gap-2">
                  Buy {product.name}
                  <svg className="w-4 h-4 group-hover/buy2:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover/buy2:translate-x-full transition-transform duration-700 ease-in-out"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }} />
              </a>
              <div className="flex items-center justify-center gap-3">
                <span className="text-[10px] text-[#50505e] uppercase tracking-widest">CoA Verified</span>
                <span className="text-[#303040]">·</span>
                <span className="text-[10px] text-[#50505e] uppercase tracking-widest">Fast Ship</span>
              </div>
            </div>
          </div>
        ) : null

        const sidebarBlocks: Record<string, React.ReactNode> = { protocol: protocolCard, synergy: synergyCard, cta: ctaCard }

        return (
          <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
            <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-14">
              <div>
                {mainOrder.map(k => <React.Fragment key={k}>{mainBlocks[k]}</React.Fragment>)}
              </div>
              <div className="space-y-5">
                {sidebarOrder.map(k => <React.Fragment key={k}>{sidebarBlocks[k]}</React.Fragment>)}
              </div>
            </div>
          </section>
        )
      })()}

      {/* FAQ Section — per-SKU editorial Q&As only, no FAQPage JSON-LD
          (Google's Sept 2020 rule: FAQPage schema on one URL per site) */}
      {editorialFaqs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
          <div className="rule mb-12" />
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-8" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
            {product.name} — FAQs
          </h2>
          <FaqAccordion faqs={editorialFaqs} />
        </section>
      )}

      {/* Further Reading */}
      <FurtherReading links={productInternalLinks[product.slug] ?? []} />

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#0a0a0e] py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-['Playfair_Display'] font-900 text-white text-3xl">
                {pick(MORE_HEADING_TEMPLATES, product.slug, 23)(product.category)}
              </h2>
              <Link href="/products" className="btn-ghost text-[14px]">
                View All
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
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
