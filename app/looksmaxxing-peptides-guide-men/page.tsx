import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Looksmaxxing Peptides for Men: Complete Stack Guide — Skin, Body, Hair & Recovery | PeptidesMuscle',
  description: 'The definitive looksmaxxing peptides guide for men. GHK-Cu for skin collagen, SNAP-8 for wrinkle reduction, CJC-1295 for body recomp, BPC-157 for recovery — protocol stacks by goal and budget.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/looksmaxxing-peptides-guide-men' },
  keywords: 'looksmaxxing peptides for men, looksmaxxing peptides guide, peptides for appearance enhancement, looksmaxxing stack, ghk-cu looksmaxxing, best peptides looks maxing',
  openGraph: { title: 'Looksmaxxing Peptides for Men: The Complete Stack Guide', description: 'GHK-Cu, SNAP-8, CJC-1295, BPC-157 — protocol stacks for skin, body, hair and recovery.', url: 'https://www.peptidesmuscle.com/looksmaxxing-peptides-guide-men', type: 'article', siteName: 'PeptidesMuscle', images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }] },
  twitter: { card: 'summary_large_image', title: 'Looksmaxxing Peptides for Men: Complete Stack Guide', description: 'The definitive guide to peptide-based appearance optimization.', images: ['/max-avatar.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: 'Looksmaxxing Peptides for Men: Complete Stack Guide', datePublished: '2026-03-21', dateModified: '2026-03-21', publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' } },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What are the best peptides for looksmaxxing?', acceptedAnswer: { '@type': 'Answer', text: 'The top looksmaxxing peptides are: GHK-Cu for skin collagen and density (up to 121% increase), SNAP-8 for wrinkle reduction (up to 63%), CJC-1295/Ipamorelin for body recomposition and skin quality via GH optimization, BPC-157 for recovery and gut health optimization, and Epithalon for cellular anti-aging. Together they address all four dimensions of physical appearance: skin quality, body composition, facial recovery, and biological age.' } },
        { '@type': 'Question', name: 'What is the best looksmaxxing stack for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'The best beginner looksmaxxing stack is GHK-Cu (injectable, 1mg 3x weekly) + SNAP-8 (topical, twice daily). These two address the most visible looksmaxxing goal — skin quality — without requiring complex protocols. Total cost is approximately $100–120/month. After 8 weeks, add CJC-1295/Ipamorelin for body composition optimization.' } },
        { '@type': 'Question', name: 'How long does it take to see results from looksmaxxing peptides?', acceptedAnswer: { '@type': 'Answer', text: 'GHK-Cu shows improved skin hydration and early elasticity within 3–4 weeks. Body composition changes from CJC-1295/Ipamorelin are noticeable at weeks 4–8. The full compound protocol — skin, body, and recovery — requires 12 weeks to show complete results. Most users see significant changes by weeks 6–8.' } },
      ],
    },
  ],
}

const AFF = (s: string) => `https://phiogen.is/products/${s}?ref=PEPS`

const goals = [
  { num: '01', goal: 'Skin Quality', sub: 'The Most Visible Signal', color: '#d4a043', body: 'Skin is the most immediately readable physical signal — texture, density, luminosity, and the absence of lines communicate youth and vitality more than almost anything else. Peptides address skin at the biological level, not the surface level.', peptides: [{ name: 'GHK-Cu', role: 'Collagen stimulation, skin density', dose: '1–2mg SubQ, 3–5× weekly', href: '/products/ghk-cu-50mg' }, { name: 'SNAP-8', role: 'Expression line reduction (topical Botox)', dose: 'Applied topically 2× daily', href: '/products/snap-8-10mg' }] },
  { num: '02', goal: 'Body Composition', sub: 'The Structural Foundation', color: '#6090ff', body: 'Lean muscle with low body fat is the structural prerequisite for physical attractiveness. Growth hormone peptides create the hormonal environment where this transformation happens naturally — fat loss, muscle definition, and the characteristic skin tightening that accompanies GH optimization.', peptides: [{ name: 'CJC-1295 / Ipamorelin', role: 'GH optimization — dual receptor stimulation', dose: '100mcg each, 2–3× daily', href: '/products/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg' }] },
  { num: '03', goal: 'Recovery & Foundation', sub: 'The Infrastructure Layer', color: '#40c090', body: 'Hard training creates systemic inflammation, connective tissue stress, and gut permeability that undermines everything else in a looksmaxxing protocol. BPC-157 addresses all three — making it the compound that makes every other peptide work better.', peptides: [{ name: 'BPC-157', role: 'Systemic anti-inflammatory, gut health, connective tissue', dose: '250–300mcg SubQ daily', href: '/products/bpc-157-10mg' }] },
  { num: '04', goal: 'Cellular Anti-Aging', sub: 'The Deepest Layer', color: '#a060ff', body: 'Biological age — measured by telomere length, cellular senescence, and hormonal output — determines the ceiling of what every other intervention can achieve. Epithalon is the only known compound that activates telomerase to rebuild telomere caps.', peptides: [{ name: 'Epithalon', role: 'Telomere lengthening, melatonin regulation', dose: '5–10mg daily × 10–20 days (cycle)', href: '/products/epitalon-50mg' }] },
]

const budgetStacks = [
  { tier: 'Entry (~$100/month)', compounds: ['SNAP-8 (topical, daily)', 'GHK-Cu (1mg 3× weekly)'], result: 'Significant skin quality improvement within 6–8 weeks. The best ROI starting point for looksmaxxing.' },
  { tier: 'Intermediate (~$200/month)', compounds: ['GHK-Cu + SNAP-8 (skin layer)', 'BPC-157 (foundation/recovery layer)'], result: 'Skin optimization + systemic anti-inflammatory foundation. Noticeably better recovery from training.' },
  { tier: 'Advanced (~$350/month)', compounds: ['GHK-Cu + SNAP-8', 'BPC-157', 'CJC-1295 / Ipamorelin (body comp layer)'], result: 'The full looksmaxxing protocol. Comprehensive changes across skin, body composition, and recovery within 12 weeks.' },
]

export default function LooksmaxxingPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] bg-[#d4a043] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Complete Appearance Optimization</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.1 }}>
            Looksmaxxing Peptides<br />
            <span className="italic" style={{ color: '#d4a043' }}>The Men&apos;s Guide</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            A clinical-grade approach to peptide-based appearance optimization. Skin, body composition, recovery, and cellular aging — addressed simultaneously with the right compounds and protocols.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Why</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Why Peptides for Looksmaxxing?
            </h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Physical attractiveness is a composite of distinct biological variables — skin collagen architecture, body composition, facial tissue quality, and cellular age. Training and nutrition address some of these. Peptides address all of them at the biological level.</p>
            <p>The looksmaxxing community discovered peptides because the results are measurable, compounding, and address mechanisms that nothing else can. GHK-Cu literally rewrites how your skin cells behave. Epithalon rebuilds the chromosomal structures that determine cellular age. CJC-1295/Ipamorelin optimizes the hormonal environment that governs body composition. These are not cosmetic tricks — they are biological interventions with documented mechanisms.</p>
          </div>
        </div>

        <div className="rule" />

        {goals.map((g, i) => (
          <div key={g.num}>
            <div className="flex items-start gap-6 mb-7">
              <p className="mono text-[12px] mt-1 flex-shrink-0" style={{ color: g.color }}>{g.num}</p>
              <div>
                <p className="text-[#50505e] text-[12px] uppercase tracking-widest mb-1">{g.sub}</p>
                <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>{g.goal}</h2>
              </div>
            </div>
            <div className="pl-10 space-y-5">
              <p className="text-[#8888a0] text-[16px] leading-relaxed">{g.body}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {g.peptides.map(p => (
                  <div key={p.name} className="card-elevated rounded-2xl p-5">
                    <p className="text-white font-700 text-[16px] mb-1">{p.name}</p>
                    <p className="text-[12px] mb-2" style={{ color: g.color }}>{p.role}</p>
                    <p className="text-[#8888a0] text-[13px] mb-4">{p.dose}</p>
                    <Link href={p.href} className="btn-ghost justify-center py-2.5 text-[12px]">View Product →</Link>
                  </div>
                ))}
              </div>
            </div>
            {i < goals.length - 1 && <div className="rule mt-14" />}
          </div>
        ))}

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">$$</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Stack by Budget
            </h2>
          </div>
          <div className="pl-10 space-y-4">
            {budgetStacks.map(b => (
              <div key={b.tier} className="card rounded-xl p-5">
                <p className="text-white font-700 text-[15px] mb-3">{b.tier}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {b.compounds.map(c => <span key={c} className="tag-gold text-[12px]">{c}</span>)}
                </div>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{b.result}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/looksmaxxing-routine-daily-protocol', label: 'Looksmaxxing Daily Routine', desc: 'Complete morning-to-night schedule: timings, dosing, and weekly plan' },
              { href: '/peptides-for-hair-growth-loss', label: 'Peptides for Hair Growth', desc: 'GHK-Cu follicle activation and TB-500 scalp vascularization' },
              { href: '/melanotan-2-looksmaxxing-tan', label: 'Melanotan 2 Complete Guide', desc: 'Deep melanin tan, libido, and appetite suppression — MT-2 protocol' },
              { href: '/ghk-cu-before-and-after-guide', label: 'GHK-Cu Before & After', desc: 'Injectable vs. topical results, 12-week timeline and protocol' },
              { href: '/snap-8-vs-botox-peptide-alternative', label: 'SNAP-8 vs. Botox', desc: 'Can a topical peptide replace neurotoxin injections?' },
              { href: '/looks-maxing', label: 'Looksmaxxing Hub', desc: 'The science behind each biological pillar of physical appearance' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="card rounded-xl p-5 group hover:border-[#d4a043]/20 transition-colors">
                <p className="text-[#d4a043] text-[13px] font-600 mb-1 group-hover:underline">{r.label} →</p>
                <p className="text-[#8888a0] text-[13px]">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
