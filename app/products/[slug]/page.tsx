import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProductBySlug, products, type Product } from '@/lib/products'
import { productInternalLinks, type InternalLink } from '@/lib/internal-links'
import ProductCard from '@/components/ProductCard'
import FaqAccordion from '@/components/FaqAccordion'

// Force static generation — all slugs are known at build time via generateStaticParams.
// This ensures Vercel serves proper cache-control: public headers instead of private/no-store.
export const dynamic = 'force-static'
export const revalidate = 86400

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProductBySlug(params.slug)
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
      images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: p.name }],
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

const LOOKS_TIMELINE = [
  { week: 'Week 1–2',   result: 'Improved hydration and baseline skin firmness begins' },
  { week: 'Week 3–4',   result: 'Visible reduction in fine lines, elasticity boost' },
  { week: 'Week 6–8',   result: 'Measurable increase in skin density and collagen matrix' },
  { week: 'Week 10–12', result: 'Full structural remodeling — new collagen replaces damaged tissue' },
]

const HEALING_STAGES = [
  { step: '01', title: 'Angiogenesis', desc: 'New blood vessels form, flooding damaged tissue with oxygen and nutrients' },
  { step: '02', title: 'Cell Recruitment', desc: 'Growth factor receptors upregulate, drawing repair cells to the injury site' },
  { step: '03', title: 'Tissue Regeneration', desc: 'Collagen synthesis and structural proteins rebuild at accelerated rates' },
]

const ANABOLIC_PATHWAY = [
  { node: 'IGF-1R / GHRH-R', desc: 'Receptor binding triggers intracellular cascade' },
  { node: 'PI3K → Akt', desc: 'Phosphorylation activates the pro-growth signaling chain' },
  { node: 'mTOR Complex', desc: 'Master regulator switches cells into anabolic, growth mode' },
  { node: 'Protein Synthesis', desc: 'Ribosomes upregulate — muscle fiber growth and repair begins' },
]

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

function BuyBox({ product }: { product: Product }) {
  return (
    <div className="card-elevated rounded-2xl overflow-hidden mb-5">
      {/* Product image */}
      <div className="relative w-full flex items-center justify-center py-10 px-6"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(212,160,67,0.13), rgba(13,13,18,0) 70%), #0d0d12' }}>
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="tag-gold text-[11px]">{product.badge}</span>
          </div>
        )}
        {/* 10% off badge */}
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-700 px-2 py-1 rounded-full"
            style={{ background: 'rgba(64,192,144,0.15)', color: '#40c090', border: '1px solid rgba(64,192,144,0.3)' }}>
            10% OFF
          </span>
        </div>
        <div className="relative w-60 h-60">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-contain drop-shadow-[0_12px_40px_rgba(212,160,67,0.22)]"
            style={{ animation: 'float 4s ease-in-out infinite' }}
          />
        </div>
        <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }`}</style>
      </div>

      {/* Info + CTA */}
      <div className="p-6 border-t border-white/[0.06]">
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-[11px] text-[#50505e] uppercase tracking-widest mb-1">Price</p>
            <p className="font-['Playfair_Display'] font-900 gold-text" style={{ fontSize: 'clamp(30px, 8vw, 40px)', lineHeight: '1' }}>
              {product.price}
            </p>
            <p className="text-[#40c090] text-[11px] font-600 mt-1">✓ 10% off via PeptidesMuscle</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-[#50505e] uppercase tracking-widest mb-1">Purity</p>
            <p className="text-white font-600 text-[15px]">CoA Verified</p>
          </div>
        </div>

        <a href={`/go/${product.slug}`}
          target="_blank" rel="noopener nofollow sponsored"
          className="btn-primary w-full justify-center py-4 text-[15px] mb-3 relative overflow-hidden group/buy"
          style={{ boxShadow: '0 0 24px rgba(212,160,67,0.35), 0 4px 16px rgba(0,0,0,0.4)' }}>
          <span className="relative z-10 flex items-center gap-2">
            Buy {product.name} Now
            <svg className="w-4 h-4 group-hover/buy:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </span>
          {/* Shimmer sweep */}
          <span className="absolute inset-0 -translate-x-full group-hover/buy:translate-x-full transition-transform duration-700 ease-in-out"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }} />
        </a>
        <a href={`/go/${product.slug}`}
          target="_blank" rel="noopener nofollow sponsored"
          className="btn-secondary w-full justify-center py-3 text-[13px]">
          View on Phiogen ↗
        </a>

        <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/[0.05]">
          <span className="text-[11px] text-[#50505e] uppercase tracking-widest">3rd-Party Tested</span>
          <span className="text-[#303040]">·</span>
          <span className="text-[11px] text-[#50505e] uppercase tracking-widest">Pharma-Grade</span>
          <span className="text-[#303040]">·</span>
          <span className="text-[11px] text-[#50505e] uppercase tracking-widest">Fast Ship</span>
        </div>
      </div>
    </div>
  )
}

function SynergyPanel({ product }: { product: Product }) {
  if (!product.synergies.length) return null
  return (
    <div className="card rounded-2xl p-6">
      <p className="label text-[#d4a043] mb-4">Best Stacked With</p>
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

// ── HERO VARIANTS ───────────────────────────────────────────────────────────

/** Recovery & Healing — reversed split, amber-red glow, tissue strip */
function RecoveryHero({ product, stats }: { product: Product; stats: StatItem[] }) {
  return (
    <section className="pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-6">
        <Breadcrumb product={product} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <div className="grid lg:grid-cols-[460px_1fr] gap-8 lg:gap-14 items-center">

          {/* Info — LEFT */}
          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="tag-gold">{product.category}</span>
              {product.tags.slice(0, 2).map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 className="font-['Playfair_Display'] font-900 text-white leading-tight mb-3"
              style={{ fontSize: 'clamp(38px, 5vw, 62px)' }}>
              {product.name}
            </h1>
            <p className="label text-[#d4a043] mb-6 tracking-[0.18em]">{product.tagline}</p>
            <p className="text-[#8888a0] text-[17px] leading-relaxed mb-8">{product.shortDescription}</p>
            <BuyBox product={product} />
            <div className="card rounded-2xl p-5 mb-4">
              <p className="label text-[#d4a043] mb-2">Suggested Protocol</p>
              <p className="text-[#8888a0] text-[15px] leading-relaxed">{product.protocol}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          {/* Image — RIGHT */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: '1/1', background: 'radial-gradient(ellipse at 40% 60%, rgba(180,55,30,0.18), #0a0a0e)' }}>
              <Image src={product.image} alt={product.name} fill className="object-contain p-8" priority />
            </div>
            {product.badge && (
              <div className="absolute top-5 right-5">
                <span className="tag-gold">{product.badge}</span>
              </div>
            )}
            <div className="absolute inset-0 -z-10 scale-75 blur-[100px] opacity-20 rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(220,80,40,0.9), transparent)' }} />
          </div>
        </div>
      </div>

      {/* Key stats strip */}
      <div className="border-y border-white/[0.06] bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
          <div className="grid grid-cols-3 sm:divide-x divide-white/[0.06]">
            {stats.map((s, i) => (
              <div key={i} className="px-3 sm:px-6 first:pl-0 last:pr-0 text-center">
                <p className="font-['Playfair_Display'] font-900 text-[#d4a043] text-xl sm:text-2xl mb-1">{s.value}</p>
                <p className="text-[10px] sm:text-[11px] text-[#50505e] uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tissue target strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <p className="text-[11px] text-[#50505e] uppercase tracking-widest mb-4">Repair Targets</p>
        <div className="flex flex-wrap gap-2">
          {['Tendons', 'Ligaments', 'Gut Lining', 'Joints', 'Cartilage', 'Nerves', 'Muscle Tissue', 'Bone'].map(area => (
            <span key={area} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px]"
              style={{ background: 'rgba(212,160,67,0.08)', border: '1px solid rgba(212,160,67,0.2)', color: '#d4a043' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a043] block flex-shrink-0" />
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Looks Maxing — editorial masthead, purple accent, results timeline */
function LooksMaxingHero({ product, stats }: { product: Product; stats: StatItem[] }) {
  const accent = '#c084fc'
  return (
    <section className="pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-6">
        <Breadcrumb product={product} />
      </div>

      {/* Editorial masthead */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
          <div className="flex items-start justify-between gap-8 flex-wrap">
            <div className="flex-1 min-w-[280px]">
              <span className="block text-[11px] uppercase tracking-[0.22em] mb-4" style={{ color: accent }}>
                {product.category} / Skin Optimization Protocol
              </span>
              <h1 className="font-['Playfair_Display'] font-900 italic text-white leading-[1.05]"
                style={{ fontSize: 'clamp(42px, 6vw, 82px)' }}>
                {product.name}
              </h1>
              <p className="text-[#8888a0] text-lg mt-5 max-w-2xl italic">&ldquo;{product.tagline}&rdquo;</p>
            </div>
            <div className="text-right shrink-0 pt-1">
              <p className="text-[11px] text-[#50505e] uppercase tracking-widest mb-1">Starting From</p>
              <p className="font-['Playfair_Display'] font-900 text-4xl" style={{ color: accent }}>{product.price}</p>
              {product.badge && (
                <span className="mt-2 inline-block px-3 py-1.5 rounded-full text-[11px] uppercase tracking-widest"
                  style={{ background: `${accent}18`, border: `1px solid ${accent}40`, color: accent }}>
                  {product.badge}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-b border-white/[0.06] bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-3 sm:divide-x divide-white/[0.06]">
            {stats.map((s, i) => (
              <div key={i} className="px-3 sm:px-6 py-4 sm:py-5 first:pl-0 last:pr-0 text-center sm:text-left">
                <p className="font-['Playfair_Display'] font-900 text-xl sm:text-2xl mb-0.5" style={{ color: accent }}>{s.value}</p>
                <p className="text-[10px] sm:text-[11px] text-[#50505e] uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main split — image left, info right */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid lg:grid-cols-[1fr_460px] gap-8 lg:gap-14 items-start">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: '1/1', background: `radial-gradient(ellipse at 50% 65%, rgba(192,132,252,0.14), #0a0a0e)` }}>
              <Image src={product.image} alt={product.name} fill className="object-contain p-8" priority />
            </div>
            <div className="absolute inset-0 -z-10 scale-75 blur-[100px] opacity-15 rounded-full"
              style={{ background: `radial-gradient(ellipse, ${accent}, transparent)` }} />
          </div>

          <div>
            <p className="text-[#8888a0] text-[17px] leading-relaxed mb-8">{product.shortDescription}</p>
            <BuyBox product={product} />
            <div className="card rounded-2xl p-5 mb-4">
              <p className="label mb-2" style={{ color: accent }}>Suggested Protocol</p>
              <p className="text-[#8888a0] text-[15px] leading-relaxed">{product.protocol}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* Results timeline */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
        <p className="text-[11px] text-[#50505e] uppercase tracking-widest mb-5">Expected Results Timeline</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {LOOKS_TIMELINE.map((t, i) => (
            <div key={i} className="rounded-xl p-4 relative overflow-hidden"
              style={{ background: '#0d0d12', border: `1px solid ${accent}18` }}>
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, ${accent}80, transparent)` }} />
              <div className="w-7 h-7 rounded-full flex items-center justify-center mb-3"
                style={{ background: `${accent}18`, border: `1px solid ${accent}40` }}>
                <span className="text-[11px] font-bold" style={{ color: accent }}>{i + 1}</span>
              </div>
              <p className="text-white text-[13px] font-500 mb-1">{t.week}</p>
              <p className="text-[#50505e] text-[12px] leading-relaxed">{t.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Body Composition — performance stats dashboard header, green accent */
function BodyCompHero({ product, stats }: { product: Product; stats: StatItem[] }) {
  const accent = '#34d399'
  return (
    <section className="pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-6">
        <Breadcrumb product={product} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        {/* Performance header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${accent}40)` }} />
          <span className="text-[11px] uppercase tracking-[0.25em]" style={{ color: accent }}>Performance Profile</span>
          <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${accent}40, transparent)` }} />
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="card-elevated rounded-2xl p-5 sm:p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04]" style={{ background: `radial-gradient(circle at 50% 110%, ${accent}, transparent)` }} />
              <p className="font-['Playfair_Display'] font-900 text-2xl sm:text-3xl mb-1" style={{ color: accent }}>{s.value}</p>
              <p className="text-[11px] text-[#50505e] uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Product split */}
        <div className="grid lg:grid-cols-[1fr_460px] gap-8 lg:gap-14 items-start">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: '1/1', background: `radial-gradient(ellipse at 50% 65%, rgba(52,211,153,0.12), #0a0a0e)` }}>
              <Image src={product.image} alt={product.name} fill className="object-contain p-8" priority />
            </div>
            {product.badge && (
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-600"
                  style={{ background: `${accent}18`, border: `1px solid ${accent}40`, color: accent }}>
                  {product.badge}
                </span>
              </div>
            )}
            <div className="absolute inset-0 -z-10 scale-75 blur-[100px] opacity-15 rounded-full"
              style={{ background: `radial-gradient(ellipse, ${accent}, transparent)` }} />
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1.5 rounded-full text-[11px] uppercase tracking-widest"
                style={{ background: `${accent}12`, border: `1px solid ${accent}30`, color: accent }}>
                {product.category}
              </span>
              {product.tags.slice(0, 2).map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 className="font-['Playfair_Display'] font-900 text-white leading-tight mb-3"
              style={{ fontSize: 'clamp(38px, 5vw, 62px)' }}>
              {product.name}
            </h1>
            <p className="label mb-6 tracking-[0.18em]" style={{ color: accent }}>{product.tagline}</p>
            <p className="text-[#8888a0] text-[17px] leading-relaxed mb-8">{product.shortDescription}</p>
            <BuyBox product={product} />
            <div className="card rounded-2xl p-5 mb-4">
              <p className="label mb-2" style={{ color: accent }}>Suggested Protocol</p>
              <p className="text-[#8888a0] text-[15px] leading-relaxed">{product.protocol}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Weight Management — clinical trial banner at very top, blue accent */
function WeightMgmtHero({ product, stats, trialData }: { product: Product; stats: StatItem[]; trialData?: { trial: string; outcome: string; duration: string } }) {
  const accent = '#60a5fa'
  return (
    <section>
      {/* Clinical evidence banner — appears before breadcrumb */}
      {trialData && (
        <div style={{ borderBottom: `1px solid ${accent}25`, background: `${accent}08` }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-3">
            <div className="flex items-center gap-3 flex-wrap text-[13px]">
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

      <div className="pt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-6">
          <Breadcrumb product={product} />
        </div>

        {/* Hero split */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          <div className="grid lg:grid-cols-[1fr_460px] gap-8 lg:gap-14 items-start">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: '1/1', background: `radial-gradient(ellipse at 50% 65%, rgba(96,165,250,0.15), #0a0a0e)` }}>
                <Image src={product.image} alt={product.name} fill className="object-contain p-8" priority />
              </div>
              {product.badge && (
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-600"
                    style={{ background: `${accent}18`, border: `1px solid ${accent}40`, color: accent }}>
                    {product.badge}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 -z-10 scale-75 blur-[100px] opacity-15 rounded-full"
                style={{ background: `radial-gradient(ellipse, ${accent}, transparent)` }} />
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1.5 rounded-full text-[11px] uppercase tracking-widest"
                  style={{ background: `${accent}12`, border: `1px solid ${accent}30`, color: accent }}>
                  {product.category}
                </span>
                {product.tags.slice(0, 2).map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <h1 className="font-['Playfair_Display'] font-900 text-white leading-tight mb-3"
                style={{ fontSize: 'clamp(38px, 5vw, 62px)' }}>
                {product.name}
              </h1>
              <p className="label mb-6 tracking-[0.18em]" style={{ color: accent }}>{product.tagline}</p>
              <p className="text-[#8888a0] text-[17px] leading-relaxed mb-8">{product.shortDescription}</p>
              <BuyBox product={product} />
              <div className="card rounded-2xl p-5 mb-4">
                <p className="label mb-2" style={{ color: accent }}>Suggested Protocol</p>
                <p className="text-[#8888a0] text-[15px] leading-relaxed">{product.protocol}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-y border-white/[0.06] bg-[#0a0a0e]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
            <div className="grid grid-cols-3 sm:divide-x divide-white/[0.06]">
              {stats.map((s, i) => (
                <div key={i} className="px-3 sm:px-6 py-2 sm:py-0 first:pl-0 last:pr-0 text-center">
                  <p className="font-['Playfair_Display'] font-900 text-xl sm:text-2xl mb-1" style={{ color: accent }}>{s.value}</p>
                  <p className="text-[10px] sm:text-[11px] text-[#50505e] uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Anti-Aging — cosmic centered hero, orbital ring, purple accent */
function AntiAgingHero({ product, stats }: { product: Product; stats: StatItem[] }) {
  const accent = '#a78bfa'
  return (
    <section className="pt-24 relative overflow-hidden">
      {/* Background cosmic glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accent}08, transparent)` }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-6 relative">
        <Breadcrumb product={product} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 relative">
        {/* Centered header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: `${accent}40` }} />
            <span className="text-[11px] uppercase tracking-[0.25em]" style={{ color: accent }}>{product.category}</span>
            <div className="h-px w-16" style={{ background: `${accent}40` }} />
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(42px, 6vw, 80px)' }}>
            {product.name}
          </h1>
          <p className="label tracking-[0.18em] mb-5" style={{ color: accent }}>{product.tagline}</p>
          <p className="text-[#8888a0] text-[17px] leading-relaxed">{product.shortDescription}</p>
        </div>

        {/* Centered image with orbital ring */}
        <div className="relative flex justify-center mb-12 px-12 sm:px-0">
          <div className="relative w-full max-w-[340px]" style={{ aspectRatio: '1/1' }}>
            {/* Outer orbital ring */}
            <div className="absolute rounded-full pointer-events-none animate-spin"
              style={{ inset: -48, border: `1px solid ${accent}15`, animationDuration: '25s' }} />
            {/* Inner ring */}
            <div className="absolute rounded-full pointer-events-none"
              style={{ inset: -20, border: `1px solid ${accent}22` }} />

            <div className="relative w-full h-full overflow-hidden rounded-2xl"
              style={{ background: `radial-gradient(ellipse at 50% 60%, rgba(167,139,250,0.2), #0a0a0e)` }}>
              <Image src={product.image} alt={product.name} fill className="object-contain p-8" priority />
            </div>

            {product.badge && (
              <div className="absolute -top-3 -right-3">
                <span className="px-3 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-600"
                  style={{ background: `${accent}18`, border: `1px solid ${accent}40`, color: accent }}>
                  {product.badge}
                </span>
              </div>
            )}
          </div>
          <div className="absolute inset-0 -z-10 blur-[130px] opacity-10 pointer-events-none"
            style={{ background: `radial-gradient(ellipse, ${accent}, transparent)` }} />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mb-12">
          {stats.map((s, i) => (
            <div key={i} className="card rounded-xl p-4 text-center">
              <p className="font-['Playfair_Display'] font-900 text-xl mb-1" style={{ color: accent }}>{s.value}</p>
              <p className="text-[11px] text-[#50505e] uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Buy + protocol in two columns below */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <BuyBox product={product} />
          <div className="card rounded-2xl p-6">
            <p className="label mb-2" style={{ color: accent }}>Suggested Protocol</p>
            <p className="text-[#8888a0] text-[15px] leading-relaxed mb-4">{product.protocol}</p>
            <div className="flex flex-wrap gap-2">
              {product.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── PRODUCT-SPECIFIC HIGHLIGHTS ─────────────────────────────────────────────

function ProductHighlights({ product }: { product: Product }) {
  if (!product.highlights?.length) return null
  const accent =
    product.category === 'Recovery & Healing' ? '#d4a043'
    : product.category === 'Looks Maxing'     ? '#c084fc'
    : product.category === 'Body Composition' ? '#34d399'
    : product.category === 'Weight Management'? '#60a5fa'
    : '#a78bfa'

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

// ── CATEGORY-SPECIFIC DEEP-DIVE CALLOUT SECTIONS ───────────────────────────

function RecoveryCallout() {
  return (
    <div className="card rounded-2xl p-6 mb-10">
      <p className="label text-[#d4a043] mb-6">The Biological Repair Cascade</p>
      <div className="space-y-0">
        {HEALING_STAGES.map((stage, i) => (
          <div key={i} className="flex gap-5 pb-6 last:pb-0 relative">
            {i < HEALING_STAGES.length - 1 && (
              <div className="absolute left-[19px] top-10 bottom-0 w-px bg-[#d4a043]/15" />
            )}
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-700 text-[#d4a043] z-10"
              style={{ background: 'rgba(212,160,67,0.1)', border: '1px solid rgba(212,160,67,0.25)' }}>
              {stage.step}
            </div>
            <div className="pt-2">
              <p className="text-white text-[14px] font-500 mb-1">{stage.title}</p>
              <p className="text-[#50505e] text-[13px] leading-relaxed">{stage.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LooksMaxingCallout() {
  return (
    <div className="rounded-2xl p-6 mb-10" style={{ background: 'rgba(192,132,252,0.06)', border: '1px solid rgba(192,132,252,0.14)' }}>
      <p className="label mb-4" style={{ color: '#c084fc' }}>Skin Architecture — Where It Works</p>
      <div className="space-y-3">
        {[
          { layer: 'Epidermis',   role: 'Surface renewal — accelerates cell turnover and barrier repair' },
          { layer: 'Dermis',      role: 'Fibroblast activation — collagen and elastin synthesis upregulation' },
          { layer: 'Hypodermis',  role: 'Structural support — improved scaffolding reduces volume loss' },
        ].map((l, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#c084fc' }} />
            <div>
              <span className="text-white text-[13px] font-500">{l.layer}: </span>
              <span className="text-[#50505e] text-[13px]">{l.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BodyCompCallout() {
  return (
    <div className="rounded-2xl p-6 mb-10" style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.14)' }}>
      <p className="label mb-6" style={{ color: '#34d399' }}>Anabolic Signal Pathway</p>
      <div className="relative">
        {ANABOLIC_PATHWAY.map((node, i) => (
          <div key={i} className="flex items-start gap-4 mb-4 last:mb-0">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-700"
                style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)', color: '#34d399' }}>
                {i + 1}
              </div>
              {i < ANABOLIC_PATHWAY.length - 1 && (
                <div className="w-px h-4 mt-1" style={{ background: 'rgba(52,211,153,0.2)' }} />
              )}
            </div>
            <div className="pt-1">
              <p className="text-white text-[13px] font-500 mb-0.5">{node.node}</p>
              <p className="text-[#50505e] text-[12px]">{node.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function WeightMgmtCallout({ trialData }: { trialData?: { trial: string; outcome: string; duration: string } }) {
  if (!trialData) return null
  return (
    <div className="rounded-2xl p-6 mb-10 relative overflow-hidden" style={{ background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.15)' }}>
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #60a5fa, transparent)' }} />
      <p className="label mb-4" style={{ color: '#60a5fa' }}>Clinical Trial Reference</p>
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <p className="text-[10px] text-[#50505e] uppercase tracking-widest mb-1">Study</p>
          <p className="text-white text-[14px] font-500">{trialData.trial}</p>
        </div>
        <div>
          <p className="text-[10px] text-[#50505e] uppercase tracking-widest mb-1">Primary Outcome</p>
          <p className="text-[14px] font-600" style={{ color: '#60a5fa' }}>{trialData.outcome}</p>
        </div>
        <div>
          <p className="text-[10px] text-[#50505e] uppercase tracking-widest mb-1">Duration</p>
          <p className="text-white text-[14px] font-500">{trialData.duration}</p>
        </div>
      </div>
    </div>
  )
}

function AntiAgingCallout() {
  return (
    <div className="rounded-2xl p-6 mb-10" style={{ background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.14)' }}>
      <p className="label mb-4" style={{ color: '#a78bfa' }}>Cellular Age Reversal Mechanism</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { term: 'Telomerase Activation',  desc: 'Rebuilds chromosomal end-caps that shorten with each cell division' },
          { term: 'Melatonin Restoration',  desc: 'Normalizes age-related melatonin decline — improves deep sleep architecture' },
          { term: 'Antioxidant Activity',   desc: 'Scavenges free radicals that accelerate cellular aging and DNA damage' },
          { term: 'Immune Modulation',      desc: 'Recalibrates age-related immune dysregulation toward youthful baseline' },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#a78bfa' }} />
            <div>
              <p className="text-white text-[13px] font-500 mb-0.5">{item.term}</p>
              <p className="text-[#50505e] text-[12px] leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── MAIN PAGE ───────────────────────────────────────────────────────────────

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = products
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3)

  const stats = PRODUCT_STATS[product.slug] ?? [
    { label: 'Category', value: product.category },
    { label: 'Price',    value: product.price    },
    { label: 'Grade',    value: 'Research'       },
  ]
  const trialData = CLINICAL_TRIALS[product.slug]
  const cat = product.category

  const jsonLdItems: object[] = [
    {
      '@type': 'Product',
      name: product.name,
      description: product.shortDescription,
      image: product.image,
      url: `https://www.peptidesmuscle.com/products/${product.slug}`,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: product.price.replace(/[^0-9.]/g, ''),
        // url must be the canonical product page, not the affiliate redirect.
        // Affiliate URL is blocked/noindex — embedding it in schema confuses Googlebot.
        url: `https://www.peptidesmuscle.com/products/${product.slug}`,
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.peptidesmuscle.com' },
        { '@type': 'ListItem', position: 2, name: 'Peptides', item: 'https://www.peptidesmuscle.com/products' },
        { '@type': 'ListItem', position: 3, name: product.name, item: `https://www.peptidesmuscle.com/products/${product.slug}` },
      ],
    },
  ]

  if (product.faqs?.length) {
    jsonLdItems.push({
      '@type': 'FAQPage',
      mainEntity: product.faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  const jsonLd = { '@context': 'https://schema.org', '@graph': jsonLdItems }

  return (
    <div className="min-h-screen bg-[#07070a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── CATEGORY-SPECIFIC HERO ── */}
      {cat === 'Recovery & Healing'  && <RecoveryHero   product={product} stats={stats} />}
      {cat === 'Looks Maxing'        && <LooksMaxingHero product={product} stats={stats} />}
      {cat === 'Body Composition'    && <BodyCompHero    product={product} stats={stats} />}
      {cat === 'Weight Management'   && <WeightMgmtHero  product={product} stats={stats} trialData={trialData} />}
      {cat === 'Anti-Aging'          && <AntiAgingHero   product={product} stats={stats} />}

      <div className="rule max-w-7xl mx-auto my-14" />

      {/* ── DEEP DIVE ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-14">

          {/* Main */}
          <div>
            <h2 className="font-['Playfair_Display'] font-900 text-white mb-8"
              style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
              {product.deepDiveTitle}
            </h2>
            <div className="space-y-5 mb-10">
              {product.fullDescription.split('\n\n').map((para, i) => (
                <p key={i} className={`leading-relaxed ${i === 0 ? 'text-[#aaaabc] text-[17px]' : 'text-[#8888a0] text-[16px]'}`}>{para}</p>
              ))}
            </div>

            {/* Product-specific highlights */}
            <ProductHighlights product={product} />

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

            <SynergyPanel product={product} />

            <div className="card-elevated rounded-2xl p-6">
              <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-2">Ready to start?</p>
              <p className="font-['Playfair_Display'] font-900 text-white text-3xl mb-5">{product.price}</p>
              <a href={`/go/${product.slug}`}
                          target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary w-full justify-center py-3.5 text-[13px]">
                Buy {product.name}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {product.faqs?.length && (
        <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
          <div className="rule mb-12" />
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-8" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={product.faqs} />
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
                More in{' '}
                <span className="italic gold-text">{product.category}</span>
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
