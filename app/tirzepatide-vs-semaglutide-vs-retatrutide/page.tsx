import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tirzepatide vs. Semaglutide vs. Retatrutide: 2026 GLP-1 Comparison | PeptidesMuscle',
  description: 'Complete 2026 comparison of all three GLP-1 class compounds. Tirzepatide vs semaglutide vs retatrutide — weight loss data, mechanisms, side effects, FDA status, cost, and which to choose.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/tirzepatide-vs-semaglutide-vs-retatrutide' },
  keywords: 'tirzepatide vs semaglutide vs retatrutide, semaglutide vs tirzepatide weight loss, glp-1 comparison 2026, retatrutide comparison, which glp-1 is best',
  openGraph: { title: 'Tirzepatide vs. Semaglutide vs. Retatrutide: 2026 Comparison', description: 'All trial data, mechanisms, side effects, and a decision framework for choosing between the three GLP-1 class compounds.', url: 'https://www.peptidesmuscle.com/tirzepatide-vs-semaglutide-vs-retatrutide', type: 'article', siteName: 'PeptidesMuscle', images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }] },
  twitter: { card: 'summary_large_image', title: 'Tirzepatide vs. Semaglutide vs. Retatrutide: 2026 GLP-1 Comparison', description: 'All trial data and a decision framework for the three GLP-1 class compounds.', images: ['/max-avatar.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: 'Tirzepatide vs. Semaglutide vs. Retatrutide: 2026 GLP-1 Comparison', datePublished: '2026-03-21', dateModified: '2026-03-21', publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' } },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Is tirzepatide better than semaglutide for weight loss?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The SURMOUNT-5 head-to-head trial showed tirzepatide produces 20.2% average weight loss vs semaglutide\'s 13.7% — a 47% relative difference. Tirzepatide\'s dual GLP-1/GIP mechanism outperforms semaglutide\'s single-receptor approach across all dose levels studied.' } },
        { '@type': 'Question', name: 'Is retatrutide stronger than tirzepatide?', acceptedAnswer: { '@type': 'Answer', text: 'Based on separate trials (not head-to-head), retatrutide shows 28.7% weight loss vs tirzepatide\'s 22.5% at comparable timepoints. Retatrutide\'s additional glucagon receptor activation is the likely explanation. However, retatrutide is not yet FDA approved and introduces dysesthesia as a unique side effect.' } },
        { '@type': 'Question', name: 'Which GLP-1 should I choose in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'If you want the most weight loss and can tolerate potential dysesthesia: wait for retatrutide or access it in research format. If you want the best approved option: tirzepatide. If you want the most established safety record: semaglutide. For most people currently starting, tirzepatide is the optimal choice.' } },
      ],
    },
  ],
}

const AFF = (s: string) => `https://apollopeptidesciences.com/product/${s}/?rfsn=9016964.3f1b1e`

const compounds = [
  { name: 'Semaglutide', receptors: 'GLP-1', loss: '13.7–14.9%', trial: 'STEP-1 (2021)', approved: 'Yes — Wegovy/Ozempic', dosing: 'Once weekly SubQ', sideEffect: 'Nausea, GI', cost: '$$', color: '#6090ff', slug: 'semaglutide', aff: AFF('glp-1s-5mg') },
  { name: 'Tirzepatide', receptors: 'GLP-1 + GIP', loss: '20.2–22.5%', trial: 'SURMOUNT-1 (2022)', approved: 'Yes — Zepbound', dosing: 'Once weekly SubQ', sideEffect: 'Nausea, GI (similar to sema)', cost: '$$$', color: '#d4a043', slug: 'tirzepatide', aff: AFF('glp-2t-15m') },
  { name: 'Retatrutide', receptors: 'GLP-1 + GIP + Glucagon', loss: '24.2–28.7%', trial: 'TRIUMPH Phase 3', approved: 'No — ~2027', dosing: 'Once weekly SubQ', sideEffect: 'Nausea + Dysesthesia', cost: '$$$$', color: '#a060ff', slug: 'retatrutide', aff: AFF('glp-3r-15mg') },
]

export default function GlpComparisonPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] bg-[#a060ff] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">2026 Clinical Data</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            Tirzepatide vs. Semaglutide<br />
            <span className="italic" style={{ color: '#a060ff' }}>vs. Retatrutide</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            All three GLP-1 class compounds compared — mechanisms, trial data, side effects, approval status, and a clear decision framework for 2026.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* The Mechanism Story */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              The Mechanism: Why More Receptors Means More Weight Loss
            </h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>All three compounds descend from the same family — GLP-1 receptor agonists. But each generation adds a receptor, and each addition produces a meaningful jump in efficacy. Understanding why explains why the progression is so dramatic.</p>
            <p><strong className="text-white">GLP-1 alone (Semaglutide):</strong> Activates GLP-1 receptors in the brain&apos;s hunger centers, producing appetite suppression and slowed gastric emptying. Effective, but limited by a single mechanism.</p>
            <p><strong className="text-white">GLP-1 + GIP (Tirzepatide):</strong> Adds GIP receptor activation, which enhances insulin secretion, reduces glucagon, and appears to make GLP-1 signaling more effective through synergistic interaction. The result is ~50% more weight loss than semaglutide.</p>
            <p><strong className="text-white">GLP-1 + GIP + Glucagon (Retatrutide):</strong> Adds glucagon receptor agonism, which directly increases energy expenditure and hepatic (liver) fat oxidation. This metabolic rate enhancement is the mechanism that semaglutide and tirzepatide cannot replicate — and explains the additional jump to 28.7% weight loss.</p>
          </div>
        </div>

        <div className="rule" />

        {/* The Data */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              The Complete Data Comparison
            </h2>
          </div>
          <div className="pl-10 space-y-4">
            {compounds.map(c => (
              <div key={c.name} className="card rounded-xl p-5" style={{ borderLeft: `3px solid ${c.color}` }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-white font-700 text-[17px]">{c.name}</p>
                    <p className="text-[12px] mt-0.5" style={{ color: c.color }}>{c.receptors}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-700 text-[20px]">{c.loss}</p>
                    <p className="text-[#50505e] text-[11px]">avg. weight loss</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[12px]">
                  <div><p className="text-[#50505e] mb-0.5">Trial</p><p className="text-[#aaaabc]">{c.trial}</p></div>
                  <div><p className="text-[#50505e] mb-0.5">FDA Status</p><p className="text-[#aaaabc]">{c.approved}</p></div>
                  <div><p className="text-[#50505e] mb-0.5">Side Effects</p><p className="text-[#aaaabc]">{c.sideEffect}</p></div>
                  <div><p className="text-[#50505e] mb-0.5">Dosing</p><p className="text-[#aaaabc]">{c.dosing}</p></div>
                </div>
              </div>
            ))}
            <p className="text-[#50505e] text-[12px] italic">Weight loss data from separate trials with different durations. No direct head-to-head trial of all three exists yet.</p>
          </div>
        </div>

        <div className="rule" />

        {/* Decision Framework */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Which One Should You Choose?
            </h2>
          </div>
          <div className="pl-10 space-y-3">
            {[
              { profile: 'You want maximum weight loss, available now', answer: 'Tirzepatide', why: '22.5% average loss, FDA approved, available compounded at significantly lower cost than brand Zepbound' },
              { profile: 'You want the safest, most established option', answer: 'Semaglutide', why: '5+ years of post-market data, longest real-world safety record, well-understood side effect profile' },
              { profile: 'You want to maximize long-term results', answer: 'Retatrutide (research access)', why: '28.7% weight loss — the highest ever recorded. Available in research format now, approval expected ~2027' },
              { profile: 'You plateaued on semaglutide', answer: 'Tirzepatide', why: 'Dual mechanism provides additional efficacy beyond semaglutide alone — effective for semaglutide non-responders' },
              { profile: 'You want FDA-approved + maximum efficacy combo', answer: 'Tirzepatide', why: 'Currently the best approved option by a significant margin' },
            ].map((d, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="text-[#50505e] text-[12px] mb-1">{d.profile}</p>
                <p className="text-white font-700 text-[15px] mb-1">→ {d.answer}</p>
                <p className="text-[#8888a0] text-[13px]">{d.why}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* Shop */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Shop All Three Compounds
            </h2>
          </div>
          <div className="pl-10 grid sm:grid-cols-3 gap-4">
            {compounds.map(c => (
              <div key={c.name} className="card-elevated rounded-2xl p-5 flex flex-col">
                <p className="text-[11px] font-600 mb-2" style={{ color: c.color }}>{c.receptors}</p>
                <p className="text-white font-700 text-[16px] mb-1">{c.name}</p>
                <p className="text-[#d4a043] font-700 text-[14px] mb-4">{c.loss} loss</p>
                <a href={c.aff} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center py-3 text-[13px] mb-2">
                  Buy on Apollo →
                </a>
                <Link href={`/products/${c.slug}`} className="btn-ghost justify-center py-2.5 text-[12px]">Learn More</Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
