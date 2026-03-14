'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import AnimateIn from '@/components/AnimateIn'
import { products, getFeaturedProducts } from '@/lib/products'

/* ─── Marquee ─── */
const NAMES = [
  'BPC-157','GHK-Cu','Melanotan 2','Ipamorelin','CJC-1295','Epithalon',
  'TB-500','MK-677','PT-141','Semax','Selank','IGF-1 LR3','Tesamorelin',
  'MOTS-c','DSIP','Thymosin Alpha-1','Kisspeptin-10','Sermorelin','ACE-031','AOD-9604',
]
function Marquee() {
  const items = [...NAMES, ...NAMES]
  return (
    <div className="overflow-hidden py-5 border-y border-white/[0.05]">
      <div className="marquee-track">
        {items.map((name, i) => (
          <span key={i} className="flex items-center gap-5 px-5">
            <span className="text-[#8888a0] text-[13px] font-500 tracking-wide whitespace-nowrap">{name}</span>
            <span className="w-1 h-1 rounded-full bg-[#d4a043] opacity-40 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── FAQ item ─── */
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-white font-600 text-[16px] leading-snug">{q}</span>
        <svg
          className={`w-5 h-5 text-[#d4a043] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4"/>
        </svg>
      </button>
      {open && (
        <p className="text-[#8888a0] text-[15px] leading-relaxed pb-5 pr-8">{a}</p>
      )}
    </div>
  )
}

const TABS = ['All', 'Looks Maxing', 'Body Composition', 'Recovery & Healing', 'Anti-Aging', 'Cognitive Performance']

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
function accentFor(cat: string) { return CATEGORY_ACCENT[cat] ?? '#d4a043' }

export default function Home() {
  const [tab, setTab] = useState('All')
  const featured = getFeaturedProducts()
  const grid = tab === 'All'
    ? products.slice(0, 9)
    : products.filter(p => p.category === tab).slice(0, 9)

  return (
    <div className="bg-[#07070a]">

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="spot spot-pulse w-[560px] h-[400px] bg-[#d4a043] opacity-[0.055] -top-20 left-[15%]" />
        <div className="spot spot-pulse-2 w-[400px] h-[400px] bg-[#6030d0] opacity-[0.04] top-[35%] right-[5%]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-16 w-full">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-center min-h-[70vh]">

            <div>
              <div className="flex items-center gap-3 mb-8 hero-sub" style={{ animationDelay: '0s', opacity: 0 }}>
                <div className="w-6 h-[1px] bg-[#d4a043]" />
                <p className="mono text-[#d4a043] text-[12px] tracking-[0.2em] uppercase">Elite Peptide Protocols</p>
              </div>
              <h1 className="mb-8">
                <span className="display hero-line hero-line-1 block text-white" style={{ fontSize: 'clamp(60px, 8.5vw, 118px)' }}>Peak</span>
                <span className="display-italic hero-line hero-line-2 block gold-shimmer" style={{ fontSize: 'clamp(60px, 8.5vw, 118px)' }}>Physical</span>
                <span className="display hero-line hero-line-3 block text-white" style={{ fontSize: 'clamp(60px, 8.5vw, 118px)' }}>Form.</span>
              </h1>
              <p className="text-[#8888a0] text-lg leading-relaxed max-w-md mb-10 hero-sub">
                The most advanced peptide protocols for looks maximization, body composition, and cellular longevity. Premium compounds. Documented results.
              </p>
              <div className="flex flex-wrap gap-3 mb-12 hero-cta">
                <a href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-[13px] px-7 py-3.5 glow-pulse">
                  Shop All Peptides
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
                <Link href="/looks-maxing" className="btn-secondary text-[13px] px-7 py-3.5">
                  Looks Maxing Guide
                </Link>
              </div>
              <div className="flex flex-wrap gap-8 pt-8 border-t border-white/[0.05] hero-stats">
                {[{ n: '35+', l: 'Peptides' },{ n: '99%', l: 'Purity' },{ n: '10K+', l: 'Customers' },{ n: '48h', l: 'Dispatch' }].map(s => (
                  <div key={s.l}>
                    <p className="font-['Playfair_Display'] font-900 text-white leading-none" style={{ fontSize: '32px' }}>{s.n}</p>
                    <p className="text-[#8888a0] text-[13px] mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image grid — 2×2 large product cards */}
            <div className="hidden lg:grid grid-cols-2 gap-3 hero-grid">
              {featured.slice(0, 4).map((p, i) => {
                const accent = accentFor(p.category)
                return (
                  <Link key={p.slug} href={`/products/${p.slug}`}>
                    <div className="relative rounded-2xl overflow-hidden group cursor-pointer"
                      style={{ height: '300px' }}>
                      <Image src={p.image} alt={p.name} fill priority={i < 2}
                        className="object-contain p-5 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                      {/* Accent glow on hover */}
                      <div className="absolute bottom-0 left-0 right-0 h-28 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(to top, ${accent}35, transparent)` }} />
                      {p.badge && (
                        <div className="absolute top-4 left-4">
                          <span className="tag-gold text-[10px]">{p.badge}</span>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-[11px] font-600 tracking-widest uppercase mb-1.5" style={{ color: accent }}>
                          {p.category}
                        </p>
                        <p className="text-white font-700 text-[17px] leading-tight mb-1">{p.name}</p>
                        <p className="text-[#8888a0] text-[12px] leading-snug mb-2 line-clamp-2">{p.tagline}</p>
                        <div className="flex items-center justify-between">
                          <p className="font-700 text-[15px]" style={{ color: accent }}>{p.price}</p>
                          <svg className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
              <div className="col-span-2">
                <a href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-[13px] py-3.5 w-full text-center inline-flex justify-center">
                  Shop All 35 Peptides
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ══════════════════════════════════════════
          1b. VISUAL PRODUCT SHOWCASE
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-[1px] bg-[#d4a043]" />
                <p className="label-gold">Staff Picks</p>
              </div>
              <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: '1.05' }}>
                The Most Powerful<br />
                <span className="italic gold-text">Peptides Available</span>
              </h2>
            </div>
            <Link href="/products" className="btn-ghost text-[14px] flex-shrink-0">
              Full Catalog — 35 Compounds
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Large hero cards row */}
          <div className="grid md:grid-cols-3 gap-5 mb-5">
            {featured.slice(0, 3).map((p, i) => (
              <AnimateIn key={p.slug} type="up" delay={i * 120}>
                <ProductCard product={p} variant="hero" index={i} />
              </AnimateIn>
            ))}
          </div>

          {/* Secondary row — wide horizontal cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {featured.slice(3, 5).map((p, i) => (
              <AnimateIn key={p.slug} type="up" delay={i * 150}>
                <ProductCard product={p} variant="wide" index={i + 3} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* ══════════════════════════════════════════
          2. HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[420px_1fr] gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-[1px] bg-[#d4a043]" />
                <p className="label-gold">The Process</p>
              </div>
              <h2 className="display text-white mb-6" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
                How Peptide Protocols Work
              </h2>
              <p className="text-[#8888a0] text-[16px] leading-relaxed mb-6">
                Unlike conventional supplements that add nutrients on top of a suboptimal biological state, peptides signal your cells to <em className="text-white not-italic">behave differently</em>. They communicate directly with receptors to trigger changes at the gene expression level — optimizing the systems that determine how you look, feel, and perform.
              </p>
              <p className="text-[#8888a0] text-[16px] leading-relaxed">
                The result is optimization you can measure: higher collagen synthesis, elevated growth hormone, lengthened telomeres, reduced visceral fat. Every protocol on this site has documented, measurable outcomes.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Choose Your Protocol',
                  body: 'Select peptides matched to your specific optimization goals — whether that\'s looks maxing, fat loss, muscle growth, anti-aging, or cognitive performance. Each peptide has a defined mechanism and documented outcome.',
                  detail: 'Our protocol guides tell you exactly what to use, when, and at what dose.',
                },
                {
                  step: '02',
                  title: 'Order Through Apollo Peptide Sciences',
                  body: 'All peptides on this site are sourced through our partner Apollo Peptide Sciences — one of the most trusted suppliers for premium grade compounds with third-party purity verification.',
                  detail: 'Fast shipping, pharmaceutical-grade quality, and comprehensive product support.',
                },
                {
                  step: '03',
                  title: 'Execute and Measure',
                  body: 'Follow the protocol consistently. Most peptides show initial effects within 2–4 weeks, with compounding results over 3–6 months. Track your outcomes — body composition, skin quality, sleep depth, energy levels.',
                  detail: 'Stack intelligently for synergistic effects across multiple biological systems.',
                },
              ].map((s, i) => (
                <AnimateIn key={s.step} type="left" delay={i * 130}>
                  <div className="card rounded-2xl p-6 flex gap-5">
                    <p className="mono text-[#d4a043] text-[13px] flex-shrink-0 mt-0.5 font-500">{s.step}</p>
                    <div>
                      <p className="text-white font-700 text-[17px] mb-2">{s.title}</p>
                      <p className="text-[#8888a0] text-[14px] leading-relaxed mb-2">{s.body}</p>
                      <p className="text-[#50505e] text-[13px] italic">{s.detail}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. BENTO — SCIENCE
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimateIn type="up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[1px] bg-[#d4a043]" />
              <p className="label-gold">The Science</p>
            </div>
            <h2 className="mb-5" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: '1.05' }}>
              <span className="display text-white">Looks Maxing at the</span>
              <span className="display-italic gold-text block">Molecular Level</span>
            </h2>
            <p className="text-[#8888a0] text-[17px] leading-relaxed max-w-2xl mb-14">
              Physical attractiveness has a biological code. Skin collagen density, body fat percentage, hormonal markers, pigmentation, telomere length — all measurable, all optimizable with the right peptide protocols.
            </p>
          </AnimateIn>

          <AnimateIn type="scale" delay={150}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            <Link href="/products/ghk-cu" className="col-span-2 row-span-2 card overflow-hidden relative group block">
              <Image src="https://apollopeptidesciences.com/wp-content/uploads/2025/01/ghk-cu_50mg.webp"
                alt="GHK-Cu collagen peptide" fill
                className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="tag-gold mb-3 inline-block">Looks Max #1</span>
                <h3 className="font-['Playfair_Display'] font-900 text-white text-3xl leading-tight mb-2">
                  Skin Transformation
                </h3>
                <p className="text-[#8888a0] text-[14px] leading-relaxed">
                  GHK-Cu activates 4,000+ genes to rebuild collagen architecture. Up to 121% increase in skin density. The most powerful anti-aging skin peptide available.
                </p>
              </div>
            </Link>

            <div className="card flex flex-col justify-between p-5">
              <p className="label">Collagen boost</p>
              <div>
                <p className="font-['Playfair_Display'] font-900 gold-text" style={{ fontSize: '52px', lineHeight: '1' }}>
                  121<span className="text-3xl">%</span>
                </p>
                <p className="text-[#8888a0] text-[13px] mt-1">Skin density increase (clinical data, GHK-Cu)</p>
              </div>
            </div>

            <Link href="/products/cjc-1295-ipamorelin" className="card flex flex-col justify-between p-5 group block">
              <p className="label-gold">Body Composition</p>
              <div>
                <h3 className="text-white font-700 text-lg group-hover:text-[#e8c060] transition-colors mb-1">GH Optimization</h3>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">CJC-1295/Ipamorelin triggers clean dual GH pulses — lean mass and fat loss simultaneously. No cortisol elevation.</p>
              </div>
            </Link>

            <Link href="/products/epithalon" className="card flex flex-col justify-between p-5 group block">
              <p className="label-gold">Longevity</p>
              <div>
                <h3 className="text-white font-700 text-lg group-hover:text-[#e8c060] transition-colors mb-1">Telomere Extension</h3>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">Epithalon activates telomerase — the only known compound to reverse biological age at the chromosomal level.</p>
              </div>
            </Link>

            <Link href="/products/tirzepatide" className="col-span-2 card overflow-hidden relative group block">
              <Image src="https://apollopeptidesciences.com/wp-content/uploads/2024/04/tirzepatide_15mg-1.webp"
                alt="Tirzepatide fat loss peptide" fill
                className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07070a] via-[#07070a]/60 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="tag-gold mb-2 inline-block">Clinical Grade</span>
                <h3 className="text-white font-700 text-xl">Tirzepatide — The Metabolic Reset</h3>
                <p className="text-[#8888a0] text-[13px] mt-1">Dual GLP-1/GIP agonist. Up to 22.5% body weight reduction. The compound behind Mounjaro and Zepbound.</p>
              </div>
            </Link>
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. PEPTIDES BY GOAL
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimateIn type="up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-[1px] bg-[#d4a043]" />
              <p className="label-gold">Find Your Protocol</p>
            </div>
            <h2 className="display text-white mb-5" style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}>
              Peptides by Goal
            </h2>
            <p className="text-[#8888a0] text-[17px] leading-relaxed max-w-xl mb-14">
              Every optimization goal has a corresponding peptide protocol. Find yours below.
            </p>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                goal: 'Looks Maxing',
                desc: 'Comprehensive physical optimization — skin, tan, hormones, and cellular age addressed simultaneously.',
                peptides: ['GHK-Cu', 'Melanotan 2', 'Ipamorelin', 'Epithalon'],
                href: '/looks-maxing', icon: '◈', accent: '#d4a043',
              },
              {
                goal: 'Fat Loss',
                desc: 'Peptides that target visceral fat, improve metabolic function, and create a lean physique without muscle loss.',
                peptides: ['Tesamorelin', 'CJC-1295', 'Ipamorelin', 'AOD-9604'],
                href: '/products?category=Body+Composition', icon: '◆', accent: '#e05080',
              },
              {
                goal: 'Muscle Growth',
                desc: 'GH secretagogues and IGF-1 modulators that create continuous anabolic signaling for lean mass development.',
                peptides: ['IGF-1 LR3', 'CJC-1295', 'Ipamorelin', 'MK-677'],
                href: '/products?category=Body+Composition', icon: '◉', accent: '#6090ff',
              },
              {
                goal: 'Skin & Anti-Aging',
                desc: 'Collagen-stimulating and gene-resetting peptides that reverse the visible markers of skin aging.',
                peptides: ['GHK-Cu', 'Epithalon', 'BPC-157', 'MOTS-c'],
                href: '/products?category=Anti-Aging', icon: '✦', accent: '#a060ff',
              },
              {
                goal: 'Recovery & Healing',
                desc: 'The fastest tissue repair compounds available — muscle, tendon, ligament, and gut healing accelerated.',
                peptides: ['BPC-157', 'TB-500', 'GHK-Cu', 'Thymosin Alpha-1'],
                href: '/products?category=Recovery+%26+Healing', icon: '⬡', accent: '#40c090',
              },
              {
                goal: 'Cognitive Performance',
                desc: 'BDNF-boosting nootropic peptides that enhance focus, reduce anxiety, and optimize neural performance.',
                peptides: ['Semax', 'Selank', 'DSIP', 'Epithalon'],
                href: '/products?category=Cognitive+Performance', icon: '◎', accent: '#40c0ff',
              },
              {
                goal: 'Sleep Optimization',
                desc: 'Delta-wave sleep inducers that transform recovery quality and maximize overnight GH secretion.',
                peptides: ['DSIP', 'Ipamorelin', 'MK-677', 'Selank'],
                href: '/products', icon: '◐', accent: '#60d090',
              },
              {
                goal: 'Sexual Health & Libido',
                desc: 'Melanocortin agonists that work on the central nervous system to enhance desire and performance.',
                peptides: ['PT-141', 'Melanotan 2', 'Kisspeptin-10', 'BPC-157'],
                href: '/products', icon: '◑', accent: '#ff8040',
              },
              {
                goal: 'Immune & Longevity',
                desc: 'Thymic peptides and mitochondrial compounds for bulletproof immunity and biological age reversal.',
                peptides: ['Thymosin Alpha-1', 'Epithalon', 'MOTS-c', 'GHK-Cu'],
                href: '/products?category=Anti-Aging', icon: '◫', accent: '#60d090',
              },
            ].map((g, i) => {
              const repImage = products.find(p => p.name === g.peptides[0])?.image
              return (
                <AnimateIn key={g.goal} type="up" delay={i * 70}>
                  <Link href={g.href} className="h-full block">
                    <div className="card rounded-2xl overflow-hidden h-full group flex flex-col transition-all duration-200">

                      {/* ── Product image thumbnail ── */}
                      {repImage && (
                        <div className="relative overflow-hidden flex-shrink-0" style={{ height: '140px',
                          background: `radial-gradient(ellipse at 50% 70%, ${g.accent}28, #0a0a0e 75%)` }}>
                          <Image src={repImage} alt={g.goal} fill
                            className="object-contain p-5 group-hover:scale-108 transition-transform duration-600" />
                          {/* Hover accent glow */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{ background: `radial-gradient(ellipse at 50% 100%, ${g.accent}20, transparent 65%)` }} />
                          {/* Bottom fade into card */}
                          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0f0f13] to-transparent" />
                          {/* Category accent top-left line */}
                          <div className="absolute top-0 left-0 right-0 h-0.5"
                            style={{ background: `linear-gradient(90deg, ${g.accent}80, transparent)` }} />
                        </div>
                      )}

                      {/* ── Body ── */}
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                            style={{ background: `${g.accent}18`, color: g.accent }}>
                            {g.icon}
                          </div>
                          <svg className="w-4 h-4 text-[#50505e] group-hover:text-white group-hover:translate-x-1 transition-all mt-0.5 flex-shrink-0"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                          </svg>
                        </div>
                        <h3 className="text-white font-700 text-[16px] mb-2 leading-tight group-hover:opacity-80 transition-opacity">
                          {g.goal}
                        </h3>
                        <p className="text-[#8888a0] text-[13px] leading-relaxed mb-4 flex-1">{g.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {g.peptides.map(p => (
                            <span key={p} className="tag text-[10px]"
                              style={{ color: g.accent, borderColor: `${g.accent}25`, background: `${g.accent}08` }}>
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. PRODUCT CATALOG
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-[1px] bg-[#d4a043]" />
                <p className="label-gold">Catalog</p>
              </div>
              <h2 className="display text-white" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>All Peptides</h2>
            </div>
            <Link href="/products" className="btn-ghost text-[14px]">
              Browse Full Catalog
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {TABS.map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`text-[13px] px-4 py-2 rounded-full font-500 transition-all duration-150 ${
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
            <Link href="/products" className="btn-secondary text-[13px] px-8 py-3.5">View All 35 Peptides</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. ALL PRODUCTS STRIP
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Featured</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
            <h2 className="display text-white" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
              Looks Max Essentials
            </h2>
            <Link href="/looks-maxing" className="btn-ghost text-[14px]">
              Full Protocol Guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.slice(0, 3).map((p, i) => (
              <ProductCard key={p.slug} product={p} variant="hero" index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. ALL 16 PRODUCTS — compact list
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Complete Catalog</p>
          </div>
          <h2 className="display text-white mb-4" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
            Every Protocol Available
          </h2>
          <p className="text-[#8888a0] text-[17px] mb-12 max-w-xl leading-relaxed">
            35 elite peptide compounds covering every dimension of physical and cognitive optimization — all available through Apollo Peptide Sciences.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} variant="compact" index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary text-[13px] px-8 py-3.5 inline-flex">
              Shop All at Apollo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. WHY PEPTIDES (COMPARISON)
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-[1px] bg-[#d4a043]" />
                <p className="label-gold">Why Peptides</p>
              </div>
              <h2 className="mb-6" style={{ fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: '1.05' }}>
                <span className="display text-white">Precision Over</span>
                <span className="display-italic gold-text block">Broad Intervention</span>
              </h2>
              <p className="text-[#8888a0] text-[16px] leading-relaxed mb-6">
                Conventional approaches to physical optimization — training, nutrition, supplementation — operate as systemic inputs. They create conditions that may or may not trigger the desired responses. Peptides operate differently: they are targeted biological signals that trigger precisely defined cellular responses.
              </p>
              <p className="text-[#8888a0] text-[16px] leading-relaxed mb-8">
                When you administer GHK-Cu, it activates specific genes involved in collagen production. When you use Ipamorelin, it binds to GHSR receptors and triggers a GH pulse. When you cycle Epithalon, it directly activates telomerase in aging cells. The mechanism is known, the outcome is measurable, and the effect is consistent.
              </p>

              <div className="space-y-3">
                {[
                  { label: 'Collagen synthesis', value: 'GHK-Cu directly stimulates fibroblasts to produce Type I and III collagen' },
                  { label: 'Growth hormone', value: 'Ipamorelin triggers GH pulses with no cortisol — impossible to achieve with supplementation alone' },
                  { label: 'Tan & pigmentation', value: 'Melanotan 2 directly activates melanocytes — no UV required for eumelanin production' },
                  { label: 'Telomere length', value: 'Epithalon activates telomerase — no nutritional intervention achieves this' },
                ].map(c => (
                  <div key={c.label} className="flex items-start gap-3 p-4 card rounded-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4a043] flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="text-white font-600 text-[14px]">{c.label}</p>
                      <p className="text-[#8888a0] text-[13px] mt-0.5">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison table */}
            <div className="card-elevated rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 bg-[#16161c] p-4 border-b border-white/[0.05]">
                <p className="label text-center">Metric</p>
                <p className="label text-center text-[#d4a043]">Peptides</p>
                <p className="label text-center">Conventional</p>
              </div>
              {[
                { metric: 'Collagen increase', peptide: 'Up to 121%', conv: '5–15%' },
                { metric: 'GH elevation', peptide: 'Physiological pulse', conv: 'Indirect only' },
                { metric: 'Tan without UV', peptide: 'Yes (MT-2)', conv: 'No' },
                { metric: 'Telomere length', peptide: 'Measurable gain', conv: 'No known method' },
                { metric: 'Fat loss target', peptide: 'Visceral specific', conv: 'Non-specific' },
                { metric: 'Recovery speed', peptide: '2–4× faster', conv: 'Baseline only' },
                { metric: 'Mechanism', peptide: 'Direct receptor', conv: 'Indirect systemic' },
                { metric: 'Onset', peptide: '2–4 weeks', conv: '3–6+ months' },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 p-4 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'} border-b border-white/[0.03]`}>
                  <p className="text-[#8888a0] text-[13px]">{row.metric}</p>
                  <p className="text-[#d4a043] text-[13px] font-600 text-center">{row.peptide}</p>
                  <p className="text-[#50505e] text-[13px] text-center">{row.conv}</p>
                </div>
              ))}
              <div className="p-5">
                <a href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary w-full justify-center py-3.5 text-[13px]">
                  Start Your Protocol
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. WHO USES PEPTIDES
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-5 h-[1px] bg-[#d4a043]" />
              <p className="label-gold">Community</p>
              <div className="w-5 h-[1px] bg-[#d4a043]" />
            </div>
            <h2 className="display text-white mb-4" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
              Who Uses Peptide Protocols
            </h2>
            <p className="text-[#8888a0] text-[17px] max-w-xl mx-auto leading-relaxed">
              From competitive athletes to longevity practitioners — peptide optimization spans every high-performance domain.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                type: 'Athletes & Competitors',
                desc: 'BPC-157 and TB-500 for accelerated injury recovery. Ipamorelin for lean body composition. Higher training frequency, faster adaptation.',
                protocols: ['BPC-157', 'TB-500', 'Ipamorelin', 'IGF-1 LR3'],
                icon: '◆', accent: '#40c090',
              },
              {
                type: 'Looks Maxers',
                desc: 'GHK-Cu for skin quality. MT-2 for optimal pigmentation. Hormonal optimization for body composition. The complete physical transformation stack.',
                protocols: ['GHK-Cu', 'MT-2', 'Epithalon', 'Ipamorelin'],
                icon: '◈', accent: '#d4a043',
              },
              {
                type: 'Biohackers',
                desc: 'Epithalon for telomere extension. MOTS-c for mitochondrial optimization. Comprehensive multi-system optimization with measurable biomarkers.',
                protocols: ['Epithalon', 'MOTS-c', 'GHK-Cu', 'Thymosin A1'],
                icon: '◉', accent: '#a060ff',
              },
              {
                type: 'High Performers',
                desc: 'Semax and Selank for cognitive edge. DSIP for optimal sleep architecture. The neural and recovery stack for sustained peak output.',
                protocols: ['Semax', 'Selank', 'DSIP', 'MK-677'],
                icon: '◎', accent: '#40c0ff',
              },
            ].map((u, i) => {
              // First 2 matching product images for the mini thumbnail strip
              const thumbImgs = u.protocols
                .map(name => products.find(p => p.name === name)?.image)
                .filter(Boolean).slice(0, 2) as string[]
              const heroImg = thumbImgs[0]
              return (
              <AnimateIn key={u.type} type="up" delay={i * 100}>
              <div className="card rounded-2xl overflow-hidden flex flex-col h-full group">
                {/* Product image header */}
                {heroImg && (
                  <div className="relative overflow-hidden flex-shrink-0" style={{ height: '120px',
                    background: `radial-gradient(ellipse at 50% 70%, ${u.accent}25, #0a0a0e 70%)` }}>
                    <Image src={heroImg} alt={u.type} fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-600" />
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0f0f13] to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(90deg, ${u.accent}80, transparent)` }} />
                    {/* Second product ghosted to the right */}
                    {thumbImgs[1] && (
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 w-14 h-14 opacity-30">
                        <Image src={thumbImgs[1]} alt="" fill className="object-contain" />
                      </div>
                    )}
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                      style={{ background: `${u.accent}15`, color: u.accent }}>
                      {u.icon}
                    </div>
                    <h3 className="text-white font-700 text-[16px] leading-tight">{u.type}</h3>
                  </div>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed mb-4 flex-1">{u.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                    {u.protocols.map(p => (
                      <span key={p} className="tag text-[11px]" style={{ color: u.accent, borderColor: `${u.accent}25`, background: `${u.accent}08` }}>{p}</span>
                    ))}
                  </div>
                </div>
              </div>
              </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          10. STACKS CALLOUT
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="card-elevated rounded-2xl p-10 md:p-14 relative overflow-hidden">
            <div className="spot w-[400px] h-[300px] bg-[#d4a043] opacity-[0.05] -top-10 -right-20" />
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <p className="label-gold mb-4">Synergistic Protocols</p>
                <h2 className="mb-5" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: '1.05' }}>
                  <span className="display text-white">Elite Peptide</span>
                  <span className="display-italic gold-text block">Stack Protocols</span>
                </h2>
                <p className="text-[#8888a0] text-[16px] leading-relaxed max-w-md">
                  Individual peptides are powerful. Strategically combined stacks are transformative. Each protocol below maximizes synergy across every optimization goal — from looks maxing to longevity.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { name: 'The Looks Max Stack',   desc: 'Skin · Pigmentation · Hormones · Longevity', href: '/stacks' },
                  { name: 'The Body Sculptor',      desc: 'GH Optimization · Fat Loss · Muscle Growth', href: '/stacks' },
                  { name: 'The Wolverine Stack',    desc: 'Maximum Tissue Repair · Recovery', href: '/stacks' },
                  { name: 'The Longevity Protocol', desc: 'Telomeres · Mitochondria · Immune', href: '/stacks' },
                  { name: 'The Neural Edge',        desc: 'Cognitive Performance · Anxiety · Sleep', href: '/stacks' },
                ].map(s => (
                  <Link key={s.name} href={s.href}>
                    <div className="card p-4 flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-[#d4a043] flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-600 text-[14px] group-hover:text-[#e8c060] transition-colors">{s.name}</p>
                        <p className="text-[#8888a0] text-[12px] truncate">{s.desc}</p>
                      </div>
                      <svg className="w-4 h-4 text-[#50505e] group-hover:text-[#d4a043] group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                ))}
                <Link href="/stacks" className="btn-primary text-[13px] py-3.5 text-center">View All Stack Protocols</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          11. KEY INGREDIENTS DEEP DIVE
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Deep Dive</p>
          </div>
          <h2 className="display text-white mb-5" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
            The Most Powerful Peptides Explained
          </h2>
          <p className="text-[#8888a0] text-[17px] max-w-2xl leading-relaxed mb-14">
            Understanding the mechanism behind each peptide helps you stack intelligently and set accurate expectations for your protocol.
          </p>

          <div className="space-y-5">
            {[
              {
                name: 'BPC-157 — The Foundation Peptide',
                slug: 'bpc-157',
                image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/bpc157_10mg.webp',
                mechanism: 'Promotes angiogenesis, upregulates growth factor receptors, modulates nitric oxide synthesis',
                keyBenefit: 'Heals tendons, ligaments, gut, and neural tissue simultaneously. The single most versatile recovery peptide.',
                timeline: '2–4 weeks for injury recovery, 4–8 weeks for gut healing',
                keywords: 'BPC-157 benefits, body protection compound 157, BPC 157 healing',
              },
              {
                name: 'GHK-Cu — The Skin and Anti-Aging Peptide',
                slug: 'ghk-cu',
                image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/ghk-cu_50mg.webp',
                mechanism: 'Activates 4,000+ genes involved in skin repair, stimulates fibroblast collagen production, remodels scar tissue',
                keyBenefit: 'The only peptide that resets skin gene expression to a younger profile. Up to 121% increase in skin density documented.',
                timeline: '4–8 weeks for visible skin improvement, compounding over 6+ months',
                keywords: 'GHK-Cu benefits, copper peptide skin, collagen peptide GHK',
              },
              {
                name: 'CJC-1295 / Ipamorelin — The GH Stack',
                slug: 'cjc-1295-ipamorelin',
                image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/cjc1295_5-5mg.webp',
                mechanism: 'CJC-1295 stimulates GHRH receptors; Ipamorelin activates GHSR — double-stimulus GH pulse without cortisol elevation',
                keyBenefit: 'The cleanest, most effective GH optimization available. Body composition transformation over 3–6 months of consistent use.',
                timeline: 'Sleep improvements in week 1–2, body composition changes visible at 8–12 weeks',
                keywords: 'ipamorelin CJC-1295 stack, GH peptides, growth hormone peptides',
              },
              {
                name: 'Epithalon — The Longevity Peptide',
                slug: 'epithalon',
                image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/epithalon_50mg.webp',
                mechanism: 'Activates telomerase enzyme to rebuild telomere caps on chromosomes — the only known compound to achieve this',
                keyBenefit: 'Measurable telomere lengthening. Profound sleep quality improvements. Biological age reversal at the cellular level.',
                timeline: '10–20 day cycle twice yearly. Sleep effects within days, biological aging markers over months.',
                keywords: 'epithalon telomere, epithalon anti-aging, epitalon peptide longevity',
              },
            ].map((item, i) => {
              const isEven = i % 2 === 0
              return (
                <AnimateIn key={item.slug} type={isEven ? 'left' : 'right'} delay={100}>
                <div className="card rounded-2xl overflow-hidden">
                  <div className={`grid md:grid-cols-[300px_1fr] ${!isEven ? 'md:grid-cols-[1fr_300px]' : ''}`}>
                    <div className={`relative h-64 md:h-auto overflow-hidden img-shimmer ${!isEven ? 'md:order-2' : ''}`}
                      style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(212,160,67,0.12), #0a0a0e)' }}>
                      <Image src={item.image} alt={item.name} fill className="object-contain p-6" />
                    </div>
                    <div className={`p-7 ${!isEven ? 'md:order-1' : ''}`}>
                      <h3 className="text-white font-700 text-xl mb-3">{item.name}</h3>
                      <div className="grid sm:grid-cols-3 gap-4 mb-5">
                        <div>
                          <p className="label mb-1">Mechanism</p>
                          <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.mechanism}</p>
                        </div>
                        <div>
                          <p className="label mb-1">Key Benefit</p>
                          <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.keyBenefit}</p>
                        </div>
                        <div>
                          <p className="label mb-1">Timeline</p>
                          <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.timeline}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Link href={`/products/${item.slug}`} className="btn-secondary text-[12px] py-2.5 px-5">Full Details</Link>
                        <a href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
                          target="_blank" rel="noopener noreferrer"
                          className="btn-primary text-[12px] py-2.5 px-5">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          12. TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Testimonials</p>
          </div>
          <h2 className="display text-white mb-14" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
            Real Transformations
          </h2>
          {/* Featured testimonial — full width */}
          <AnimateIn type="up">
          <div className="card-elevated rounded-2xl p-8 md:p-10 mb-6 relative overflow-hidden border-glow">
            <div className="spot w-[300px] h-[200px] bg-[#d4a043] opacity-[0.04] top-0 right-0" />
            <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-[#d4a043]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="font-['Playfair_Display'] italic text-white text-[22px] md:text-[26px] leading-relaxed mb-6">
                  "GHK-Cu completely transformed my skin. Within 8 weeks I was getting compliments I had not received in years. The collagen density change is real and visible — my skin looks a decade younger."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#07070a] font-800 text-[16px]"
                    style={{ background: 'linear-gradient(135deg, #c08020, #f0c858)' }}>M</div>
                  <div>
                    <p className="text-white font-700 text-[15px]">Marcus T.</p>
                    <p className="text-[#8888a0] text-[13px]">Biohacker & Athlete</p>
                  </div>
                  <span className="tag-gold text-[10px] ml-auto">GHK-Cu</span>
                </div>
              </div>
            </div>
          </div>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              { q: 'The Ipamorelin + CJC-1295 stack is game changing. Sleep quality improved immediately and after 3 months the body composition shift was dramatic — leaner and more muscular simultaneously.', name: 'Jordan K.', role: 'Performance Coach', peptide: 'Ipamorelin Stack', initial: 'J', color: '#6090ff' },
              { q: 'Epithalon is on another level. The sleep improvement was profound. Anti-aging effects became visible over months. My bloodwork markers improved across the board — testosterone up, inflammation markers down.', name: 'Alex M.', role: 'Longevity Practitioner', peptide: 'Epithalon', initial: 'A', color: '#a060ff' },
            ].map((t, i) => (
              <AnimateIn key={i} type="up" delay={i * 150}>
              <div className="card p-7 flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-[#d4a043]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="tag text-[11px]" style={{ color: t.color, borderColor: `${t.color}30`, background: `${t.color}10` }}>{t.peptide}</span>
                </div>
                <p className="text-[#c0c0d0] text-[15px] leading-relaxed flex-1 mb-6">"{t.q}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.05]">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-700 text-[14px] flex-shrink-0"
                    style={{ background: `${t.color}25`, border: `1px solid ${t.color}40`, color: t.color }}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-white font-600 text-[14px]">{t.name}</p>
                    <p className="text-[#8888a0] text-[13px]">{t.role}</p>
                  </div>
                </div>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          13. FAQ
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0a0a0e]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">FAQ</p>
          </div>
          <h2 className="display text-white mb-5" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
            Common Questions
          </h2>
          <p className="text-[#8888a0] text-[17px] leading-relaxed mb-12 max-w-xl">
            Everything you need to know before starting a peptide protocol.
          </p>

          <div className="card-elevated rounded-2xl px-7 py-2">
            <FAQ q="What exactly are peptides and how do they differ from supplements?"
              a="Peptides are short chains of amino acids — typically 2–50 in length — that function as biological signaling molecules. Unlike conventional supplements that provide nutrients, peptides communicate directly with cellular receptors to trigger specific biological responses: collagen synthesis, growth hormone release, melanin production, tissue regeneration. The key difference is precision. A peptide doesn't improve conditions that may support a response — it directly triggers the response itself." />
            <FAQ q="Are peptides safe to use?"
              a="The peptides featured here have well-characterized safety profiles with years of clinical and community use. Most, like BPC-157 and GHK-Cu, are naturally occurring in the human body or are close analogues of endogenous compounds. Side effect profiles are typically minimal when used within established dosing ranges. Always source from quality suppliers like Apollo Peptide Sciences to ensure purity, and consult your healthcare provider before beginning any new protocol." />
            <FAQ q="How long until I see results from peptide protocols?"
              a="Timeline varies significantly by peptide and goal. BPC-157 for acute injuries can produce noticeable effects within 1–2 weeks. GHK-Cu shows skin improvements at 4–8 weeks with compounding results over 6 months. Ipamorelin + CJC-1295 produces sleep improvements within the first week and body composition changes visible at 8–12 weeks. Epithalon's anti-aging effects accumulate over months. Most protocols require consistent use of 3–6 months to fully appreciate the depth of transformation." />
            <FAQ q="Can peptides be stacked together?"
              a="Yes — and strategic stacking is often where the most significant results are achieved. Compounds with complementary mechanisms synergize powerfully: CJC-1295 + Ipamorelin produce greater GH pulses than either alone. BPC-157 + TB-500 cover both local and systemic tissue repair. GHK-Cu + Epithalon together create a comprehensive anti-aging and skin optimization protocol. Our Stacks page provides expert-designed combinations for every optimization goal." />
            <FAQ q="What's the difference between BPC-157 and TB-500?"
              a="Both are tissue repair peptides, but with different mechanisms and scopes. BPC-157 (Body Protection Compound) works primarily through local mechanisms — promoting blood vessel formation and growth factor receptor activation near the administration site. It's particularly effective for gut health, tendon injuries, and neural recovery. TB-500 (Thymosin Beta-4 analogue) works systemically — traveling through the bloodstream to identify and repair damage throughout the body. It excels at improving flexibility and range of motion. Most advanced recovery protocols use both simultaneously." />
            <FAQ q="Do I need to inject peptides or are there other options?"
              a="Most peptides require subcutaneous injection for optimal bioavailability — this is a simple, shallow injection into fatty tissue that most users find straightforward. MK-677 is a notable exception as it's fully orally bioavailable and taken as a capsule. Semax and Selank are effective intranasally. BPC-157 has an oral form that's effective specifically for gut-related benefits. For injection-averse users, MK-677 provides many of the GH optimization benefits through oral dosing." />
            <FAQ q="What peptides are best for looks maxing specifically?"
              a="The core looks maxing peptide stack includes: GHK-Cu for collagen synthesis and skin quality, Melanotan 2 for deep eumelanin pigmentation and libido, Ipamorelin + CJC-1295 for GH-optimized body composition, and Epithalon for cellular anti-aging. BPC-157 serves as a foundation compound to optimize the cellular environment. This combination addresses all four pillars of physical optimization: skin structure, pigmentation, hormones, and cellular age." />
            <FAQ q="Where can I buy the peptides featured on this site?"
              a="All peptides on PeptidesMuscle are available through our partner Apollo Peptide Sciences — a premium supplier with third-party purity verification and fast shipping. Use our affiliate link to shop the complete catalog with full product information and support." />
          </div>

          <div className="text-center mt-10">
            <Link href="/faq" className="btn-secondary text-[13px] px-7 py-3.5 inline-flex">
              View Full FAQ
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          14. FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="label-gold mb-6">Begin Today</p>
          <h2 className="mb-7" style={{ fontSize: 'clamp(44px, 7vw, 96px)', lineHeight: '0.95' }}>
            <span className="display text-white">Your Peak </span>
            <span className="display-italic gold-shimmer">Physical</span>
            <span className="display text-white block">Form Awaits.</span>
          </h2>
          <p className="text-[#8888a0] text-[18px] leading-relaxed max-w-xl mx-auto mb-10">
            Elite peptide protocols. Premium quality compounds. One protocol separates you from your best physical form.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary text-[14px] px-10 py-4">
              Shop Apollo Peptides
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </a>
            <Link href="/guide" className="btn-secondary text-[14px] px-10 py-4">
              Protocol Guide
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
