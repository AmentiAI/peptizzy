import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide Guides & Research Articles | PeptidesMuscle Blog',
  description: 'In-depth guides on peptide protocols, looksmaxxing stacks, anti-aging science, body composition, and injectable peptide how-tos. Evidence-based research articles for serious optimizers.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/blog' },
  openGraph: {
    title: 'Peptide Guides & Research Articles | PeptidesMuscle',
    description: 'Deep-dive guides on GHK-Cu, CJC-1295, BPC-157, looksmaxxing stacks, and the science behind peptide optimization.',
    url: 'https://www.peptidesmuscle.com/blog',
    type: 'website',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: { card: 'summary_large_image', title: 'Peptide Guides & Blog | PeptidesMuscle', description: 'Evidence-based peptide guides for looksmaxxing, anti-aging, and body composition.', images: ['/max-avatar.png'] },
}

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Looksmaxxing', value: 'looksmaxxing' },
  { label: 'Anti-Aging', value: 'anti-aging' },
  { label: 'Body Composition', value: 'body-comp' },
  { label: 'Protocols', value: 'protocols' },
  { label: 'Recovery', value: 'recovery' },
]

const articles = [
  {
    href: '/looksmaxxing-routine-daily-protocol',
    title: 'Looksmaxxing Daily Routine: The Complete 2026 Peptide Protocol',
    desc: 'Morning-to-night schedule with exact timings, dosing, and the reasoning behind every decision. GHK-Cu, SNAP-8, CJC-1295, BPC-157.',
    tags: ['Looksmaxxing', 'Protocols'],
    category: 'looksmaxxing',
    badge: 'New',
    color: '#d4a043',
  },
  {
    href: '/peptides-for-hair-growth-loss',
    title: 'Peptides for Hair Growth & Hair Loss Prevention',
    desc: 'GHK-Cu activates follicle stem cells and upregulates KGF/VEGF. TB-500 rebuilds scalp microvascularization. The complete hair protocol.',
    tags: ['Looksmaxxing', 'GHK-Cu', 'TB-500'],
    category: 'looksmaxxing',
    badge: 'New',
    color: '#d4a043',
  },
  {
    href: '/melanotan-2-looksmaxxing-tan',
    title: 'Melanotan 2 for Looksmaxxing: Tan, Libido & Appetite Guide',
    desc: 'A melanocortin receptor agonist with three simultaneous effects: deep melanin tan, libido enhancement, and appetite suppression.',
    tags: ['Looksmaxxing', 'MT-2'],
    category: 'looksmaxxing',
    badge: 'New',
    color: '#d4a043',
  },
  {
    href: '/looksmaxxing-peptides-guide-men',
    title: 'Looksmaxxing Peptides for Men: Complete Stack Guide',
    desc: 'GHK-Cu for skin collagen, SNAP-8 for wrinkle reduction, CJC-1295 for body recomp, BPC-157 for recovery — protocol stacks by goal and budget.',
    tags: ['Looksmaxxing', 'Stack'],
    category: 'looksmaxxing',
    color: '#d4a043',
  },
  {
    href: '/ghk-cu-before-and-after-guide',
    title: 'GHK-Cu Before & After: 12-Week Results Guide',
    desc: 'Injectable vs. topical comparison, skin density data, hair benefits, and a week-by-week timeline of what to expect.',
    tags: ['GHK-Cu', 'Skin', 'Looksmaxxing'],
    category: 'looksmaxxing',
    color: '#d4a043',
  },
  {
    href: '/snap-8-vs-botox-peptide-alternative',
    title: 'SNAP-8 vs. Botox: Can a Peptide Replace Neurotoxins?',
    desc: 'Honest comparison of SNAP-8 (acetyl octapeptide-3) against botulinum toxin for expression line reduction and wrinkle prevention.',
    tags: ['SNAP-8', 'Skin', 'Looksmaxxing'],
    category: 'looksmaxxing',
    color: '#d4a043',
  },
  {
    href: '/epithalon-anti-aging-telomere-peptide-guide',
    title: 'Epithalon: Anti-Aging, Telomere Science & Complete Protocol',
    desc: 'The only known compound that activates telomerase to rebuild telomere caps. Cellular longevity, melatonin regulation, and 10-day cycle protocol.',
    tags: ['Anti-Aging', 'Epithalon', 'Longevity'],
    category: 'anti-aging',
    color: '#a060ff',
  },
  {
    href: '/cjc-1295-ipamorelin-results-timeline',
    title: 'CJC-1295 + Ipamorelin: Results Timeline & Protocol',
    desc: 'Dual receptor GH optimization: week-by-week results for body composition, skin quality, sleep, and recovery.',
    tags: ['GH Peptides', 'Body Comp', 'CJC-1295'],
    category: 'body-comp',
    color: '#6090ff',
  },
  {
    href: '/tirzepatide-vs-semaglutide-vs-retatrutide',
    title: 'Tirzepatide vs Semaglutide vs Retatrutide: Complete Comparison',
    desc: 'The most thorough comparison of the three leading GLP-1 agonists for weight loss — mechanism, efficacy, side effects, and which to choose.',
    tags: ['Weight Loss', 'GLP-1', 'Body Comp'],
    category: 'body-comp',
    color: '#6090ff',
  },
  {
    href: '/retatrutide-complete-guide-results-dosage',
    title: 'Retatrutide: Complete Guide, Results & Dosage Protocol',
    desc: 'The triple receptor agonist (GLP-1R/GIPR/GCGR) showing the most dramatic weight loss results of any peptide. Full protocol and titration schedule.',
    tags: ['Weight Loss', 'Retatrutide'],
    category: 'body-comp',
    color: '#6090ff',
  },
  {
    href: '/wolverine-stack-bpc-157-tb-500-guide',
    title: 'The Wolverine Stack: BPC-157 + TB-500 Complete Guide',
    desc: 'The most powerful recovery combination in peptide protocols. Connective tissue repair, gut health, and systemic anti-inflammatory effects.',
    tags: ['Recovery', 'BPC-157', 'TB-500'],
    category: 'recovery',
    color: '#40c090',
  },
  {
    href: '/how-to-inject-peptides-beginners-guide',
    title: 'How to Inject Peptides: Complete Beginner\'s Guide',
    desc: 'Reconstitution, needle selection, injection sites, storage, and every step in between. The definitive first-injection guide.',
    tags: ['Protocols', 'Beginners'],
    category: 'protocols',
    color: '#8888a0',
  },
  {
    href: '/peptide-stacking-guide',
    title: 'Peptide Stacking Guide: Combinations, Synergies & Timing',
    desc: 'How to combine peptides safely and effectively. Receptor compatibility, synergistic mechanisms, and pre-built protocol stacks.',
    tags: ['Protocols', 'Stacking'],
    category: 'protocols',
    color: '#8888a0',
  },
]

const featured = articles.slice(0, 3)
const rest = articles.slice(3)

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] bg-[#d4a043] opacity-[0.035] top-0 right-[10%]" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Evidence-Based Guides</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-4" style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.08 }}>
            Peptide Research<br />
            <span className="italic" style={{ color: '#d4a043' }}>& Guides</span>
          </h1>
          <p className="text-[#8888a0] text-lg leading-relaxed max-w-2xl">
            Deep-dive protocols, mechanism breakdowns, and clinical-grade guides for looksmaxxing, anti-aging, body composition, and recovery.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        {/* Featured — top 3 */}
        <div className="mb-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Latest Articles</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {featured.map(a => (
              <Link key={a.href} href={a.href} className="card rounded-2xl p-6 group hover:border-[#d4a043]/25 transition-colors flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    {a.tags.slice(0, 2).map(t => (
                      <span key={t} className="tag text-[10px]">{t}</span>
                    ))}
                  </div>
                  {a.badge && <span className="tag-gold text-[10px]">{a.badge}</span>}
                </div>
                <h2 className="text-white font-700 text-[16px] leading-snug mb-3 group-hover:text-[#d4a043] transition-colors flex-1">
                  {a.title}
                </h2>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">{a.desc}</p>
                <p className="text-[#d4a043] text-[12px] font-600 flex items-center gap-1">
                  Read Guide
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rule my-12" />

        {/* All articles */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">All Guides</p>
          </div>
          <div className="space-y-3">
            {rest.map(a => (
              <Link key={a.href} href={a.href} className="card rounded-xl p-5 group hover:border-[#d4a043]/20 transition-colors flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {a.tags.slice(0, 2).map(t => (
                      <span key={t} className="tag text-[10px]">{t}</span>
                    ))}
                  </div>
                  <p className="text-white font-700 text-[15px] leading-snug mb-1 group-hover:text-[#d4a043] transition-colors">{a.title}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed line-clamp-2">{a.desc}</p>
                </div>
                <svg className="w-4 h-4 text-[#50505e] group-hover:text-[#d4a043] group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>

        <div className="rule my-16" />

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#8888a0] text-[15px] mb-6">Ready to start your protocol?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored" className="btn-primary">
              Shop All Peptides →
            </a>
            <Link href="/stacks" className="btn-secondary">
              View Protocol Stacks
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
