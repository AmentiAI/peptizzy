import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'GHRP-6 Complete Guide: Dosage, Results & GH Secretagogue Protocol | PeptidesMuscle',
  description: 'The definitive GHRP-6 guide. Ghrelin receptor activation for GH pulse generation, appetite stimulation, muscle growth, and full dosing protocols with CJC-1295 stacking.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/ghrp-6-complete-guide' },
  keywords: 'GHRP-6 peptide guide dosage results, GHRP-6 protocol, GHRP-6 vs GHRP-2, GH secretagogue, GHRP-6 muscle growth, GHRP-6 CJC-1295 stack, ghrelin mimetic peptide',
  openGraph: {
    title: 'GHRP-6 Complete Guide: Dosage, GH Pulses & Results | PeptidesMuscle',
    description: 'Ghrelin receptor activation for GH pulse generation and muscle growth. Complete GHRP-6 protocol, comparison guide, and CJC-1295 stacking.',
    url: 'https://www.peptidesmuscle.com/ghrp-6-complete-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GHRP-6 Complete Guide | PeptidesMuscle',
    description: 'GH pulse generation, muscle growth, and full dosing protocols for GHRP-6.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'GHRP-6 Complete Guide: Dosage, Results & GH Secretagogue Protocol',
      datePublished: '2026-04-03',
      dateModified: '2026-04-03',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com', logo: { '@type': 'ImageObject', url: 'https://www.peptidesmuscle.com/max-avatar.png' } },
      author: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#dr-marcus-chen', name: 'Dr. Marcus Chen', url: 'https://www.peptidesmuscle.com/about/editors' },
      reviewedBy: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#dr-marcus-chen' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is GHRP-6 and how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GHRP-6 (Growth Hormone Releasing Peptide-6) is a synthetic hexapeptide that acts as a potent agonist of the ghrelin receptor (GHS-R1a) in the pituitary and hypothalamus. By mimicking ghrelin, the natural GH-releasing hormone of the stomach, GHRP-6 stimulates powerful GH pulses from the pituitary. It simultaneously suppresses somatostatin (GH\'s inhibitory hormone), creating a permissive environment for maximal GH release.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the correct GHRP-6 dosage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard GHRP-6 dosing is 100–300mcg per injection, administered subcutaneously 2–3 times daily. Common timing includes morning (fasted), pre-workout or mid-afternoon, and before sleep. The fasted state is critical — food, particularly glucose and fatty acids, blunts the GH pulse by 50–90%. Dose response plateaus above 300mcg; higher doses do not produce proportionally larger GH pulses.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does GHRP-6 cause such strong hunger?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GHRP-6 activates the ghrelin receptor (GHS-R1a) — and ghrelin is the body\'s primary appetite-stimulating hormone. GHRP-6\'s hunger effect is a direct consequence of this receptor activation. The hunger typically peaks 20–40 minutes post-injection and subsides within 1–2 hours. Users seeking appetite stimulation (bulking, recovery from illness) find this desirable; those seeking GH benefits without appetite effects should consider GHRP-2 or Ipamorelin instead.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does GHRP-6 compare to GHRP-2 and Hexarelin?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GHRP-6 produces the strongest appetite stimulation of the three (due to highest ghrelin receptor binding and ghrelin-like effects). GHRP-2 produces slightly larger GH pulses with less hunger and more cortisol/prolactin elevation. Hexarelin is the most potent GH releaser but causes the most cortisol and prolactin increase, and may produce cardiac changes with extended use. GHRP-6 is the most balanced choice for long-term use in most contexts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should GHRP-6 be combined with CJC-1295?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — GHRP-6 combined with CJC-1295 (or Sermorelin) produces dramatically larger GH pulses than either compound alone. GHRP-6 activates ghrelin receptors while CJC-1295 activates GHRH receptors — two distinct receptor pathways for GH release. Studies show the combination produces GH pulses 3–8x larger than GHRP-6 alone. This stack is considered the gold standard for GH secretagogue protocols.',
          },
        },
      ],
    },
  ],
}

const accent = '#6090ff'

const mechanisms = [
  {
    title: 'GHS-R1a (Ghrelin Receptor) Agonism',
    body: 'GHRP-6 is a structural mimic of ghrelin — the stomach-produced "hunger hormone" that also serves as the primary endogenous GH-releasing signal from peripheral tissue. By binding GHS-R1a receptors in both the pituitary and hypothalamus, GHRP-6 triggers a two-pronged response: direct stimulation of GH secretion from pituitary somatotrophs and suppression of somatostatin release from the hypothalamus, removing the brake on GH production.',
  },
  {
    title: 'Somatostatin Suppression',
    body: 'Somatostatin is the principal inhibitory regulator of GH release. GHRP-6 directly reduces hypothalamic somatostatin tone, creating a permissive environment for maximal GH pulse amplitude. This is why GHRP-6 combined with a GHRH analogue (which increases GH-stimulatory signaling) produces synergistically larger GH pulses — both sides of the regulatory system are simultaneously addressed.',
  },
  {
    title: 'IGF-1 Upregulation via Hepatic GH Signaling',
    body: 'The GH pulses driven by GHRP-6 stimulate hepatic IGF-1 production through the JAK-STAT5 signaling cascade. Elevated IGF-1 is the downstream mediator of GHRP-6\'s anabolic effects: increased nitrogen retention, enhanced satellite cell activation for muscle repair, accelerated protein synthesis, and improved glucose uptake into skeletal muscle. IGF-1 also stimulates lipolysis, contributing to the fat loss effects of GHRP-6 protocols.',
  },
  {
    title: 'Ghrelin-Mediated Appetite Signaling',
    body: 'GHRP-6\'s activation of peripheral GHS-R1a receptors in the gastrointestinal tract and vagal nerve afferents produces powerful appetite stimulation — a direct consequence of mimicking ghrelin\'s physiological role in hunger regulation. This effect, while considered a side effect by some users, is actively sought by those in caloric surplus for muscle building, those recovering from illness with poor appetite, or athletes in high-energy-demand sports.',
  },
]

const comparisonData = [
  { property: 'GH Pulse Size', ghrp6: '+++', ghrp2: '++++', hexarelin: '+++++', ipamorelin: '++' },
  { property: 'Appetite Stimulation', ghrp6: '++++', ghrp2: '++', hexarelin: '++', ipamorelin: 'None' },
  { property: 'Cortisol Increase', ghrp6: '+', ghrp2: '++', hexarelin: '+++', ipamorelin: 'None' },
  { property: 'Prolactin Increase', ghrp6: '+', ghrp2: '++', hexarelin: '+++', ipamorelin: 'None' },
  { property: 'GH Desensitization Risk', ghrp6: 'Low', ghrp2: 'Low', hexarelin: 'Moderate', ipamorelin: 'Very Low' },
  { property: 'Long-term Safety', ghrp6: 'Good', ghrp2: 'Good', hexarelin: 'Fair', ipamorelin: 'Excellent' },
  { property: 'Best For', ghrp6: 'Bulk/Mass Gain', ghrp2: 'GH Optimization', hexarelin: 'Short-term GH max', ipamorelin: 'Anti-aging/Lean Gain' },
]

const protocols = [
  {
    use: 'Muscle Building (Bulk)',
    color: accent,
    dose: '200–300mcg GHRP-6',
    frequency: '3x daily (morning fasted, pre-workout, before sleep)',
    stack: 'Add CJC-1295 without DAC 100–200mcg at each injection',
    notes: 'The appetite stimulation from GHRP-6 is an asset here — it makes hitting caloric surplus easier. Largest GH pulses occur with fasted morning and pre-sleep doses.',
  },
  {
    use: 'Body Recomposition',
    color: '#4070d0',
    dose: '100–200mcg GHRP-6',
    frequency: '2–3x daily',
    stack: 'CJC-1295 + Ipamorelin for evening dose; GHRP-6 for morning and pre-workout',
    notes: 'Moderate GHRP-6 doses balance GH pulse generation with manageable appetite effects. The morning fasted dose maximizes lipolytic GH response.',
  },
  {
    use: 'Anti-Aging / General Optimization',
    color: '#3050b0',
    dose: '100mcg GHRP-6',
    frequency: '1–2x daily (morning and evening)',
    stack: 'Consider switching to Ipamorelin if appetite effects are unwanted',
    notes: 'Low-dose GHRP-6 for anti-aging produces meaningful GH pulses with minimal side effects. Many users prefer Ipamorelin for long-term anti-aging due to cleaner profile.',
  },
]

const timeline = [
  {
    period: 'Weeks 1–2',
    gh: 'Immediate GH pulse with each injection. Appetite stimulation strong and consistent. Sleep quality improving, especially with evening dose.',
    body: 'No visible body composition changes yet. Increased water retention possible from IGF-1 elevation. Energy levels improving.',
  },
  {
    period: 'Weeks 3–6',
    gh: 'GH pulse response optimized. IGF-1 measurably elevated. Adaptation to appetite effects — hunger peaks become more manageable.',
    body: 'Muscle fullness and pump quality increasing. Early fat loss in hypocaloric users. Recovery noticeably faster. Strength trending up.',
  },
  {
    period: 'Weeks 7–12',
    gh: 'Sustained GH and IGF-1 elevation. Peak anabolic environment. Soft tissue quality improving.',
    body: 'Clear muscle mass gains in bulking users. Body fat reduction in recomp users. Skin quality improving. Joint recovery enhanced.',
  },
]

export default function Ghrp6CompletePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#6090ff] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">GH Secretagogue</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            GHRP-6:<br />
            <span className="italic" style={{ color: accent }}>GH Pulse, Muscle Growth & Appetite Protocol</span>
          </h1>
      <AuthorByline datePublished="2026-04-03" dateModified="2026-04-03" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            The classic ghrelin mimetic secretagogue. GHRP-6 drives powerful growth hormone pulses through GHS-R1a receptor activation — with the most potent appetite stimulation of any GH peptide. The mass-building secretagogue.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — WHAT IT DOES */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What GHRP-6 Actually Does</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>GHRP-6 (Growth Hormone Releasing Peptide-6) is a synthetic hexapeptide first synthesized in the 1980s during research into the endogenous ghrelin system. As a ghrelin mimetic, it directly activates the growth hormone secretagogue receptor (GHS-R1a) — the same receptor that ghrelin, the stomach&apos;s hunger hormone, uses to communicate with the pituitary and hypothalamus. GHRP-6 produces one of the most powerful GH pulses of any peptide in current research use.</p>
            <p>The ghrelin receptor was identified in 1996, and its role in GH regulation clarified why compounds like GHRP-6 — developed empirically years earlier — worked so powerfully. GHS-R1a activation in pituitary somatotrophs directly stimulates GH release while simultaneously activating hypothalamic circuits that reduce somatostatin (the GH brake). The result is a two-sided amplification of GH output: more stimulation plus less inhibition.</p>
            <p>GHRP-6 is distinguished from other GH secretagogues by its potent appetite stimulation — a consequence of ghrelin receptor activation throughout the gastrointestinal tract and central appetite circuits. This makes it uniquely valuable for individuals seeking caloric surplus support alongside GH optimization, while less attractive for those managing body weight who prefer the appetite-neutral profile of Ipamorelin or GHRP-2.</p>
            <p>Combined with a GHRH analogue such as CJC-1295, GHRP-6 produces GH pulses dramatically larger than either compound alone — a synergy validated across multiple research contexts and universally reported by experienced users. The CJC-1295/GHRP-6 combination is one of the most effective GH secretagogue stacks available.</p>
          </div>

          <div className="pl-10 mt-8 grid sm:grid-cols-2 gap-4">
            {mechanisms.map((m, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{m.title}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 02 — GH PULSE GENERATION */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Understanding GH Pulse Generation</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>GH secretion is not continuous — it occurs in discrete pulses, with the largest naturally occurring during the first hours of deep sleep. The amplitude and frequency of these pulses determines GH&apos;s downstream anabolic effects. GHRP-6 is a pulse amplifier: it doesn&apos;t change GH pulse frequency but dramatically increases the amplitude of each pulse.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Critical: Fasted State', val: 'GH pulse amplitude is reduced 50–90% by food intake, particularly glucose and fatty acids. Always inject GHRP-6 in a fasted state — minimum 2 hours post-meal. Wait 30–45 minutes post-injection before eating.' },
                { label: 'Timing Matters', val: 'GH pulses are most clinically meaningful when timed around: morning fasted (highest natural somatostatin suppression), pre-workout (amplifies exercise-induced GH), and pre-sleep (amplifies nocturnal GH surge).' },
                { label: 'Dose Response Ceiling', val: 'GH pulse amplitude plateaus at approximately 100–150mcg per injection. Doses above 300mcg produce diminishing additional GH release but proportionally more appetite stimulation and potential cortisol elevation.' },
                { label: 'Injection Window', val: 'The GH pulse from GHRP-6 occurs within 15–30 minutes of injection, peaks at 30–60 minutes, and returns to baseline by 90–120 minutes. Plan injection timing accordingly for maximum benefit from the pulse window.' },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <p className="text-white font-600 text-[13px] mb-1">{item.label}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 03 — COMPARISON */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>GHRP-6 vs GHRP-2 vs Hexarelin vs Ipamorelin</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">The GH secretagogue family includes several compounds with overlapping but distinct profiles. Selecting the right peptide — or combination — requires understanding the trade-offs across GH pulse size, appetite effects, side effect profile, and long-term safety.</p>
            <div className="card rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left p-3 text-[#50505e]">Property</th>
                      <th className="text-center p-3" style={{ color: accent }}>GHRP-6</th>
                      <th className="text-center p-3 text-[#a060ff]">GHRP-2</th>
                      <th className="text-center p-3 text-[#e08040]">Hexarelin</th>
                      <th className="text-center p-3 text-[#40c0ff]">Ipamorelin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="p-3 text-[#8888a0]">{row.property}</td>
                        <td className="p-3 text-center text-[#aaaabc]">{row.ghrp6}</td>
                        <td className="p-3 text-center text-[#aaaabc]">{row.ghrp2}</td>
                        <td className="p-3 text-center text-[#aaaabc]">{row.hexarelin}</td>
                        <td className="p-3 text-center text-[#aaaabc]">{row.ipamorelin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[#8888a0] text-[13px]">For individuals prioritizing muscle mass gain with caloric surplus, GHRP-6 is the clear choice. For anti-aging, fat loss, or long-term optimization, Ipamorelin&apos;s cleaner profile typically wins. GHRP-2 is a middle ground. Hexarelin is best reserved for short-term GH maximization protocols.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 04 — DOSING PROTOCOLS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dosing Protocols by Goal</h2>
          </div>
          <div className="pl-10 space-y-4">
            {protocols.map((p, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${p.color}` }}>
                <p className="text-white font-700 text-[15px] mb-3">{p.use}</p>
                <div className="grid sm:grid-cols-3 gap-3 mb-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                    <p className="text-[#aaaabc] text-[13px] font-600">{p.dose}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">FREQUENCY</p>
                    <p className="text-[#aaaabc] text-[13px]">{p.frequency}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">STACK</p>
                    <p className="text-[#aaaabc] text-[13px]">{p.stack}</p>
                  </div>
                </div>
                <p className="text-[#8888a0] text-[12px] leading-relaxed">{p.notes}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 05 — CJC-1295 STACK */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>GHRP-6 + CJC-1295: The Synergy Stack</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">The combination of GHRP-6 and CJC-1295 represents the gold standard for GH secretagogue protocols. The synergy is not additive — it is multiplicative. GHRP-6 activates ghrelin receptors (GHS-R1a) while CJC-1295 activates GHRH receptors — these are two distinct receptor populations on pituitary somatotrophs. Simultaneous activation of both pathways produces GH pulses 3–8x larger than either compound alone.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[14px] mb-2">GHRP-6 (GHS-R1a)</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">Activates the ghrelin receptor, directly stimulating GH release and suppressing somatostatin. Creates the permissive environment for maximal GH output.</p>
                <p className="text-[#50505e] text-[11px] mb-1">STANDARD DOSE</p>
                <p className="text-[#aaaabc] text-[13px]">100–200mcg per injection, 2–3x daily</p>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #a060ff' }}>
                <p className="text-white font-700 text-[14px] mb-2">CJC-1295 (GHRH-R)</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">Activates GHRH receptors on the pituitary, amplifying the GH synthesis and secretion cascade independently of ghrelin. Synergizes with GHRP-6 for superadditive GH pulses.</p>
                <p className="text-[#50505e] text-[11px] mb-1">STANDARD DOSE</p>
                <p className="text-[#aaaabc] text-[13px]">100–200mcg per injection, timing matched with GHRP-6</p>
              </div>
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-3">Sample 3x Daily Stack Protocol</p>
              <div className="space-y-2">
                {[
                  ['Morning (fasted)', 'GHRP-6 200mcg + CJC-1295 200mcg SubQ — wait 30–45 min, then eat'],
                  ['Pre-workout / Afternoon', 'GHRP-6 200mcg + CJC-1295 100mcg SubQ — fasted or 2+ hrs post-meal'],
                  ['Pre-sleep', 'GHRP-6 200mcg + CJC-1295 200mcg SubQ — 2+ hrs after last meal'],
                ].map(([time, action], i) => (
                  <div key={i} className="flex gap-4 text-[13px]">
                    <span className="text-[#50505e] w-40 flex-shrink-0">{time}</span>
                    <span className="text-[#aaaabc]">{action}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/cjc-1295-ipamorelin-results-timeline" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
              CJC-1295 + Ipamorelin Guide →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — RESULTS TIMELINE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Results Timeline</h2>
          </div>
          <div className="pl-10 space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{t.period}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">GH / HORMONAL</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.gh}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">BODY COMPOSITION / PHYSICAL</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 07 — SIDE EFFECTS & HUNGER MANAGEMENT */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">07</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Side Effects & Hunger Management</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>GHRP-6 is generally well-tolerated with a favorable safety profile. The primary side effect — and the one that defines GHRP-6 relative to other secretagogues — is intense appetite stimulation. This is not a sign of toxicity; it is a direct pharmacological effect of ghrelin receptor activation in appetite regulatory circuits. Managing this effect is the primary skill required for successful GHRP-6 use.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Intense Hunger', severity: 'Common, dose-dependent', val: 'Peaks 20–40 min post-injection. Prepare food in advance if not bulking. Reduce dose to 100mcg if appetite interference is unacceptable.' },
                { label: 'Water Retention', severity: 'Common early in protocol', val: 'IGF-1 elevation causes mild water retention in first 2–4 weeks. Typically resolves as the body adapts. Does not indicate excess GH.' },
                { label: 'Cortisol / Prolactin', severity: 'Mild increase', val: 'GHRP-6 modestly elevates cortisol and prolactin — less than GHRP-2 or Hexarelin. At standard doses, this is not clinically significant for most healthy individuals.' },
                { label: 'Tingling / Numbness', severity: 'Occasional', val: 'Mild tingling in extremities is reported, especially at higher doses. This is consistent with elevated GH/IGF-1 and typically resolves with dose adjustment.' },
                { label: 'Fatigue (Initial)', severity: 'Occasional', val: 'Some users experience mild fatigue early in the protocol, related to the GH pulse and sleep architecture changes. Resolves within 1–2 weeks.' },
                { label: 'Injection Site', severity: 'Mild', val: 'Subcutaneous injections may cause minor redness or bruising at the site. Rotate injection sites and use appropriate needle gauge (29–31G).' },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-white font-600 text-[13px]">{item.label}</p>
                    <span className="tag text-[10px]">{item.severity}</span>
                  </div>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 08 — LOOKSMAXXING */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">08</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>GHRP-6 for Muscle Optimization & Looksmaxxing</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>In looksmaxxing contexts, GHRP-6 is primarily valued for its ability to optimize the GH/IGF-1 axis for muscle development, skin quality, and recovery. For the looksmaxxer focused on body composition optimization — building maximum lean muscle while maintaining low body fat — GHRP-6&apos;s powerful GH pulses provide a meaningful advantage.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Muscle Fullness', val: 'Elevated IGF-1 from GH pulses dramatically improves satellite cell activation and protein synthesis, leading to faster muscle development and greater muscle fullness that improves physique aesthetics.' },
                { label: 'Skin Quality', val: 'GH-driven collagen synthesis produces measurable improvements in skin thickness, elasticity, and texture. Long-term protocols show skin quality improvements that contribute to a more youthful appearance.' },
                { label: 'Bulking Support', val: 'GHRP-6\'s appetite stimulation is an asset for looksmaxxers in muscle-building phases, making it significantly easier to achieve and maintain caloric surplus without psychological resistance.' },
                { label: 'Recovery Optimization', val: 'Faster recovery allows higher training frequency and volume — the primary drivers of muscle hypertrophy. GHRP-6 allows more productive training weeks per year by reducing downtime.' },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <p className="text-white font-600 text-[13px] mb-1">{item.label}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.val}</p>
                </div>
              ))}
            </div>
            <Link href="/looksmaxxing-peptides-guide-men" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
              Full Looksmaxxing Peptides Guide for Men →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 09 — BUY */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get GHRP-6</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">GHRP-6</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Pharmaceutical-grade lyophilized GHRP-6. Certificate of analysis verified. The classic ghrelin mimetic for powerful GH pulse generation.</p>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored" className="btn-primary w-full justify-center py-3 text-[13px]">Buy GHRP-6 →</a>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">CJC-1295 + Ipamorelin Stack</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">The premium dual-pathway GH stack. Combine with GHRP-6 or use as a cleaner alternative for anti-aging focused protocols.</p>
              <div className="flex gap-3">
                <a href="/go/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Stack →</a>
                <Link href="/cjc-1295-ipamorelin-results-timeline" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Stack Guide</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 10 — FAQ */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">10</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Frequently Asked Questions</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              {
                q: 'Does GHRP-6 need to be cycled?',
                a: 'GHRP-6 does not cause the kind of receptor desensitization or hormonal axis suppression that requires mandatory cycling. However, most protocols run 8–12 weeks on with a 4-week break to maintain receptor sensitivity and allow assessment of baseline GH levels. Extended continuous use is used by some individuals without evidence of harm, but cycling is generally recommended practice.',
              },
              {
                q: 'Can GHRP-6 be used with steroids or SARMs?',
                a: 'GHRP-6 operates through a completely separate receptor system from androgens and can be used concurrently with any androgenic or SARM protocol without interference. The combination is popular in performance contexts: anabolics provide the androgenic environment for muscle building while GHRP-6 elevates GH and IGF-1 for amplified recovery and anabolism. No known adverse interactions exist.',
              },
              {
                q: 'What happens if I eat before a GHRP-6 injection?',
                a: 'Food — particularly carbohydrates and dietary fats — substantially blunts the GH pulse from GHRP-6 by raising insulin, which inhibits GH secretion, and by raising somatostatin tone. Eating within 2 hours before injection can reduce GH pulse amplitude by 50–90%. This is one of the most common protocol errors and explains why many users fail to see expected results. Always inject GHRP-6 in a fasted state.',
              },
              {
                q: 'Is GHRP-6 or Ipamorelin better?',
                a: 'The answer depends entirely on your goals. GHRP-6 produces larger GH pulses and significant appetite stimulation — ideal for muscle building and caloric surplus phases. Ipamorelin produces smaller but very clean GH pulses with no appetite effects, no cortisol elevation, and no prolactin increase — ideal for anti-aging, fat loss, and long-term use. For maximum body composition results, GHRP-6 with CJC-1295 is superior. For clean anti-aging optimization, CJC-1295 + Ipamorelin wins.',
              },
            ].map((f, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="text-white font-600 text-[14px] mb-2">{f.q}</p>
                <p className="text-[#8888a0] text-[14px] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 11 — RELATED */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin Guide', desc: 'The premium GH optimization stack — how it compares and complements GHRP-6' },
              { href: '/igf-1-lr3-muscle-growth-guide', label: 'IGF-1 LR3 Muscle Growth Guide', desc: 'Direct IGF-1 supplementation for synergistic anabolic effects with GHRP-6 protocols' },
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'How to combine GHRP-6 with other compounds for comprehensive optimization' },
              { href: '/looksmaxxing-peptides-guide-men', label: 'Looksmaxxing Peptides for Men', desc: 'Where GHRP-6 fits in the complete male physical optimization peptide protocol' },
              { href: '/blog', label: 'All Peptide Guides', desc: 'Browse every in-depth protocol and research article on PeptidesMuscle' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="card rounded-xl p-5 group hover:border-[#d4a043]/20 transition-colors">
                <p className="text-[13px] font-600 mb-1 group-hover:underline" style={{ color: accent }}>{r.label} →</p>
                <p className="text-[#8888a0] text-[13px]">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
