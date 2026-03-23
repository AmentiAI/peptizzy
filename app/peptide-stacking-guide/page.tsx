import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide Stacking Guide 2026: Best Combinations for Fat Loss, Muscle, Healing & Anti-Aging | PeptidesMuscle',
  description: 'Complete peptide stacking guide. Fat loss stacks, muscle building stacks, healing stacks, anti-aging stacks — with dosing schedules, timing charts, what not to stack, and cost estimates.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/peptide-stacking-guide' },
  keywords: 'peptide stacking guide, best peptide stacks, how to stack peptides, peptide combinations guide, peptide stack fat loss, peptide stack muscle',
  openGraph: { title: 'Peptide Stacking Guide 2026: Best Combinations for Every Goal', description: 'Fat loss, muscle, healing, and anti-aging stacks with dosing schedules, timing charts, and cost estimates.', url: 'https://www.peptidesmuscle.com/peptide-stacking-guide', type: 'article', siteName: 'PeptidesMuscle', images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }] },
  twitter: { card: 'summary_large_image', title: 'Peptide Stacking Guide 2026', description: 'Best peptide combinations for fat loss, muscle, healing, and anti-aging.', images: ['/max-avatar.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: 'Peptide Stacking Guide 2026: Best Combinations for Fat Loss, Muscle, Healing & Anti-Aging', datePublished: '2026-03-21', dateModified: '2026-03-21', publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' } },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is peptide stacking?', acceptedAnswer: { '@type': 'Answer', text: 'Peptide stacking is the practice of using two or more peptides together to achieve synergistic or complementary effects that exceed what either peptide produces alone. Effective stacks pair peptides with different mechanisms — for example, BPC-157 (local healing) with TB-500 (systemic healing), or CJC-1295 (GHRH receptor) with Ipamorelin (ghrelin receptor).' } },
        { '@type': 'Question', name: 'What is the best peptide stack for fat loss?', acceptedAnswer: { '@type': 'Answer', text: 'The most effective fat loss peptide stack combines: Semaglutide or Tirzepatide (GLP-1 agonist for appetite suppression, 13–22% weight loss) with CJC-1295/Ipamorelin (GH optimization for fat mobilization and body composition). This covers both caloric intake reduction and metabolic optimization simultaneously.' } },
        { '@type': 'Question', name: 'Can you stack BPC-157 and TB-500?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — BPC-157 and TB-500 are the classic stacking combination known as the Wolverine Stack. They work through complementary mechanisms: BPC-157 heals locally at the injection site while TB-500 distributes systemically throughout the body. They have no negative interaction and produce superior healing results together.' } },
      ],
    },
  ],
}

const stacks = [
  {
    goal: 'Fat Loss', color: '#e05080', slug: 'weight-loss',
    compounds: [{ name: 'Semaglutide or Tirzepatide', dose: 'Once weekly SubQ, standard escalation', role: 'Primary appetite suppression + GLP-1 metabolic effects' }, { name: 'CJC-1295 / Ipamorelin', dose: '100mcg each, 2× daily (AM + before bed)', role: 'GH optimization — fat mobilization, body composition, sleep' }],
    why: 'GLP-1 agonists reduce caloric intake dramatically. GH secretagogues optimize the hormonal environment that determines where stored fat is mobilized. Together they address both sides of the fat loss equation — intake and metabolism.',
    timeline: 'Noticeable appetite changes: week 1. Body composition changes: weeks 4–8. Significant fat loss: weeks 8–20.',
    cost: '~$200–280/month',
  },
  {
    goal: 'Muscle & Body Recomposition', color: '#6090ff', slug: 'body-comp',
    compounds: [{ name: 'CJC-1295 / Ipamorelin', dose: '100mcg each, 2–3× daily', role: 'GH pulse optimization — primary anabolic driver' }, { name: 'IGF-1 LR3', dose: '50–100mcg post-workout', role: 'Direct muscle hypertrophy via mTOR/PI3K pathway' }, { name: 'BPC-157', dose: '250mcg SubQ daily', role: 'Recovery foundation — connective tissue and gut health' }],
    why: 'CJC-1295/Ipamorelin optimizes the GH axis. IGF-1 LR3 acts downstream on muscle receptors directly. BPC-157 ensures the connective tissue can withstand the increased training load. Three complementary mechanisms with no overlap.',
    timeline: 'Improved sleep/recovery: weeks 1–2. Noticeable body composition: weeks 6–8. Significant lean mass changes: weeks 10–16.',
    cost: '~$250–350/month',
  },
  {
    goal: 'Injury Recovery (The Wolverine Stack)', color: '#40c090', slug: 'wolverine',
    compounds: [{ name: 'BPC-157', dose: '250–500mcg daily near injury site or abdominal SubQ', role: 'Localized healing via angiogenesis and growth factor upregulation' }, { name: 'TB-500', dose: '4–5mg/week loading, 2mg/week maintenance', role: 'Systemic tissue regeneration through bloodstream distribution' }],
    why: 'BPC-157 provides targeted local repair; TB-500 covers the full body systemically. No negative interaction — pure synergy across the complete recovery spectrum.',
    timeline: 'Pain reduction: weeks 1–2. Structural repair: weeks 4–6. Full recovery: weeks 8–12.',
    cost: '~$120–150/month',
  },
  {
    goal: 'Skin & Aesthetics (Looksmaxxing)', color: '#d4a043', slug: 'looks-max',
    compounds: [{ name: 'GHK-Cu', dose: '1–2mg SubQ, 3–5× weekly', role: 'Collagen synthesis, skin density, elastin — structural anti-aging' }, { name: 'SNAP-8', dose: 'Topical, twice daily to expression line areas', role: 'Neuromuscular wrinkle reduction — topical Botox alternative' }, { name: 'BPC-157', dose: '200–300mcg daily', role: 'Anti-inflammatory foundation, skin healing optimization' }],
    why: 'GHK-Cu addresses structural collagen. SNAP-8 addresses dynamic expression lines. BPC-157 reduces the inflammation that blunts both. Three non-competing mechanisms for comprehensive skin optimization.',
    timeline: 'Hydration/early elasticity: weeks 3–4. Collagen changes: weeks 6–8. Full structural remodeling: weeks 10–12.',
    cost: '~$150–200/month',
  },
  {
    goal: 'Anti-Aging & Longevity', color: '#a060ff', slug: 'anti-aging',
    compounds: [{ name: 'Epithalon', dose: '5–10mg daily × 10–20 days (cycle 1–2× yearly)', role: 'Telomere lengthening, melatonin regulation, cellular age reversal' }, { name: 'GHK-Cu', dose: '1mg SubQ 3× weekly', role: 'Skin anti-aging, gene expression reset, tissue repair' }, { name: 'NAD+', dose: '250–500mg IV or SubQ per session', role: 'Cellular energy production, sirtuin activation, DNA repair' }],
    why: 'Epithalon addresses biological age at the chromosomal level. GHK-Cu resets gene expression in aging skin cells. NAD+ restores the cellular energy currency that powers every repair process. Three layers of biological age reversal.',
    timeline: 'Sleep improvement from Epithalon: week 1. Skin changes from GHK-Cu: weeks 4–8. Long-term biological age effects: months 3–12.',
    cost: '~$200–350/month',
  },
]

export default function PeptideStackingGuidePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[350px] bg-[#d4a043] opacity-[0.03] top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Complete Stacking Reference</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.1 }}>
            Peptide Stacking Guide<br />
            <span className="italic" style={{ color: '#d4a043' }}>2026 Edition</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            Goal-based stack protocols for fat loss, muscle growth, injury recovery, skin optimization, and anti-aging — with dosing schedules, timing, and cost estimates.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-6">

        <div className="space-y-4 mb-16">
          <div className="flex items-start gap-6">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Rules</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>The Golden Rules of Peptide Stacking</h2>
          </div>
          <div className="pl-10 grid sm:grid-cols-2 gap-3">
            {[
              { rule: 'Start with one compound', detail: 'Establish your baseline and reaction to each peptide before combining. Assess for 2–4 weeks alone.' },
              { rule: 'Pair different mechanisms', detail: 'Stack peptides that work differently — not two GH secretagogues, not two GLP-1 agonists. Complementary, not redundant.' },
              { rule: 'Cycle off periodically', detail: 'Receptor sensitivity maintenance. Most protocols: 8–12 weeks on, 4 weeks off. Some peptides (Epithalon) are cycled annually.' },
              { rule: 'Inject on empty stomach', detail: 'GH peptides (CJC-1295, Ipamorelin) must be injected fasted — insulin blunts the GH response. Wait 2 hours after eating.' },
            ].map(r => (
              <div key={r.rule} className="card rounded-xl p-4">
                <p className="text-white font-600 text-[14px] mb-1">{r.rule}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        <div className="mt-16 space-y-16">
          {stacks.map((s, i) => (
            <div key={s.goal}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-8 rounded-full" style={{ background: s.color }} />
                <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>{s.goal} Stack</h2>
              </div>
              <div className="space-y-3 mb-5">
                {s.compounds.map(c => (
                  <div key={c.name} className="card rounded-xl p-4 flex gap-4 items-start">
                    <div className="flex-1">
                      <p className="text-white font-600 text-[14px]">{c.name}</p>
                      <p className="text-[13px] mt-0.5" style={{ color: s.color }}>{c.role}</p>
                    </div>
                    <p className="text-[#8888a0] text-[12px] text-right max-w-[150px]">{c.dose}</p>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-3 gap-3 mb-5">
                <div className="card rounded-xl p-3"><p className="text-[#50505e] text-[11px] mb-1">Why it works</p><p className="text-[#8888a0] text-[12px] leading-relaxed">{s.why}</p></div>
                <div className="card rounded-xl p-3"><p className="text-[#50505e] text-[11px] mb-1">Timeline</p><p className="text-[#8888a0] text-[12px] leading-relaxed">{s.timeline}</p></div>
                <div className="card rounded-xl p-3 flex flex-col justify-between"><p className="text-[#50505e] text-[11px] mb-1">Monthly Cost</p><p className="font-700 text-[16px]" style={{ color: s.color }}>{s.cost}</p></div>
              </div>
              <Link href={`/stacks/${s.slug}`} className="inline-flex items-center gap-2 text-[13px] hover:underline" style={{ color: s.color }}>
                View full {s.goal} stack protocol →
              </Link>
              {i < stacks.length - 1 && <div className="rule mt-10" />}
            </div>
          ))}
        </div>

        <div className="rule mt-16" />

        <div className="mt-16">
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>Timing Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead><tr className="border-b border-white/10"><th className="text-left text-[#50505e] py-3 pr-6 font-500">Peptide</th><th className="text-left text-[#50505e] py-3 pr-6 font-500">When</th><th className="text-left text-[#50505e] py-3 pr-6 font-500">Why</th><th className="text-left text-[#50505e] py-3 font-500">Fasted?</th></tr></thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { p: 'CJC-1295 / Ipamorelin', when: 'Pre-sleep + AM (+ pre-workout optional)', why: 'Amplifies natural nocturnal GH pulse', fasted: 'Yes — mandatory' },
                  { p: 'IGF-1 LR3', when: 'Post-workout (within 30 min)', why: 'Receptor upregulation post-exercise', fasted: 'No — fed state ok' },
                  { p: 'BPC-157', when: 'Any time, daily', why: 'Not GH-dependent — no timing requirement', fasted: 'No' },
                  { p: 'TB-500', when: '2× weekly (any time)', why: 'Long half-life — frequency matters more than timing', fasted: 'No' },
                  { p: 'GHK-Cu', when: 'Any time, 3–5× weekly', why: 'Not GH-dependent', fasted: 'No' },
                  { p: 'Semaglutide / Tirzepatide', when: 'Same day weekly (morning preferred)', why: 'Once weekly dosing — consistency of day', fasted: 'Preferred' },
                ].map(r => (
                  <tr key={r.p}><td className="text-white py-3 pr-6 font-500">{r.p}</td><td className="text-[#aaaabc] py-3 pr-6">{r.when}</td><td className="text-[#8888a0] py-3 pr-6">{r.why}</td><td className="py-3" style={{ color: r.fasted.startsWith('Yes') ? '#d4a043' : '#50505e' }}>{r.fasted}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
