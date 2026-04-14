import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptides for Athletic Performance: Complete Sports Guide | PeptidesMuscle',
  description: 'The complete peptide guide for athletes. BPC-157 + TB-500 recovery stack, CJC-1295/Ipamorelin for GH optimization, Hexarelin for strength, MOTS-c for endurance — protocols, timing, and results timelines.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/peptides-athletic-performance-sports' },
  keywords: 'peptides athletic performance, peptides for athletes, BPC-157 recovery, TB-500 muscle repair, CJC-1295 ipamorelin performance, Hexarelin strength, MOTS-c endurance, peptides bodybuilding, sports peptides guide',
  openGraph: {
    title: 'Peptides for Athletic Performance: Complete Sports Guide | PeptidesMuscle',
    description: 'Recovery, GH optimization, strength, and endurance peptide protocols for athletes, bodybuilders, and CrossFitters. Full stack guide with timing and cycling.',
    url: 'https://www.peptidesmuscle.com/peptides-athletic-performance-sports',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Athletic Performance: Complete Sports Guide | PeptidesMuscle',
    description: 'Complete peptide protocols for athletes — BPC-157/TB-500 recovery, GH secretagogues, Hexarelin, MOTS-c, and the elite recovery stack.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Peptides for Athletic Performance: Complete Sports Guide',
      description: 'Complete peptide protocols for athletes covering recovery, GH optimization, strength, hypertrophy, and endurance — with full stack protocols and results timelines.',
      url: 'https://www.peptidesmuscle.com/peptides-athletic-performance-sports',
      datePublished: '2026-04-14',
      dateModified: '2026-04-14',
      author: { '@type': 'Organization', name: 'PeptidesMuscle' },
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are peptides banned in sports?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many peptides are prohibited by the World Anti-Doping Agency (WADA). Growth hormone-releasing peptides (GHRPs) and GHRH analogues — including CJC-1295, Ipamorelin, Hexarelin, GHRP-6, and Sermorelin — are prohibited under WADA\'s S2 list (Peptide Hormones, Growth Factors, Related Substances and Mimetics). BPC-157 and TB-500 (thymosin beta-4) are also on the WADA prohibited list. MOTS-c is classified as a metabolic modulator (S4) and is prohibited. Athletes subject to drug testing should not use any of these compounds. This content is for research purposes only.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to cycle off peptides?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cycling requirements depend on the specific compound. GH secretagogues like CJC-1295 and Ipamorelin are generally run in 12–16 week cycles with 4–8 week breaks to maintain pituitary sensitivity, though some protocols use lower-dose continuous administration. Hexarelin requires stricter cycling (4–6 weeks on, 2–4 weeks off) due to its higher GHS-R1a desensitization rate. BPC-157 and TB-500 are typically used in shorter injury-focused cycles (4–8 weeks) rather than continuous long-term administration. MOTS-c has limited long-term human data, so cycling (8–12 weeks on, 4 weeks off) is the conservative approach. None of these compounds cause endocrine suppression in the way anabolic steroids do.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use peptides during competition prep?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'From a physiological standpoint, several peptides are highly compatible with competition prep goals. AOD-9604 and CJC-1295/Ipamorelin support the body composition goals of competition prep (fat loss, muscle preservation) without the water retention associated with anabolic compounds. BPC-157 and TB-500 can manage the high injury risk that comes with extreme training loads during prep. PT-141 has no body composition effects. That said, tested competitors should be aware that GH secretagogues and BPC-157/TB-500 are on WADA\'s prohibited list. Untested competition (bodybuilding, powerlifting) has no such restrictions. Wash-out times for peptides are generally short (days), but blood/urine testing for peptides is becoming increasingly sophisticated.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the fastest recovery stack for injuries?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most evidence-backed acute injury recovery stack is BPC-157 + TB-500. BPC-157 at 250–500mcg/day (subcutaneous near the injury site) provides the most potent local tissue repair signal — it upregulates growth factor receptors, promotes angiogenesis, and has been shown to accelerate tendon, muscle, ligament, and bone healing in research models. TB-500 at 2–2.5mg twice weekly provides systemic actin-regulatory and anti-inflammatory effects that complement BPC-157\'s local mechanism. Together they address both local repair (BPC-157) and systemic inflammation management (TB-500). Most users see meaningful injury symptom improvement within 2–4 weeks of this combination.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do peptides help with overtraining syndrome?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Overtraining syndrome (OTS) is characterized by accumulated physiological stress, HPA axis dysregulation, suppressed immune function, and inadequate recovery. Several peptides address OTS mechanisms directly. CJC-1295/Ipamorelin restores GH pulsatility, which is suppressed in overtrained athletes — improving sleep quality, anabolic signaling, and recovery capacity. Epithalon optimizes sleep architecture through melatonin pathway modulation, addressing the sleep disruption central to OTS. BPC-157\'s gut health and systemic anti-inflammatory effects address the gut permeability and inflammatory burden that characterizes chronic overtraining. MOTS-c\'s AMPK activation may help restore mitochondrial function impaired by overtraining. None of these replace adequate rest and training load management, but they can accelerate recovery from OTS.',
          },
        },
      ],
    },
  ],
}

const AFF = (s: string) => `https://phiogen.is/products/${s}?ref=PEPS`
const accent = '#22d3ee'

const pillars = [
  {
    title: 'Faster Recovery',
    body: 'BPC-157 and TB-500 accelerate repair of muscle, tendon, ligament, and connective tissue through direct growth factor upregulation, angiogenesis promotion, and actin dynamics regulation. Recovery is the rate-limiting step for adaptation — faster recovery enables higher training frequency and volume.',
    icon: '⚡',
  },
  {
    title: 'GH Optimization',
    body: 'Growth hormone drives protein synthesis, fat oxidation, IGF-1 production, collagen synthesis, and sleep-stage recovery. CJC-1295 and Ipamorelin restore and amplify the natural GH pulse — the single most impactful endocrine lever for body composition and recovery in drug-free training.',
    icon: '📈',
  },
  {
    title: 'Injury Prevention',
    body: 'Peptides like BPC-157 and TB-500 don\'t just repair injuries — they strengthen connective tissue, improve tendon compliance, and upregulate protective mechanisms before injuries occur. Athletes under high training loads have a preventive use case as compelling as the therapeutic one.',
    icon: '🛡',
  },
  {
    title: 'Body Composition',
    body: 'GH secretagogues and metabolic peptides (MOTS-c, AOD-9604) shift the body composition equation without the androgenic side effects of anabolic steroids: increased lean mass, reduced adipose, and improved muscle quality through GH/IGF-1 axis optimization and mitochondrial biogenesis.',
    icon: '💪',
  },
]

const recoveryComparison = [
  { metric: 'Primary target', bpc: 'Local tissue repair (tendon, muscle, ligament)', tb: 'Systemic actin regulation & anti-inflammation' },
  { metric: 'Mechanism', bpc: 'Upregulates VEGF, EGF receptors; angiogenesis; collagen remodeling', tb: 'Thymosin β4 — actin monomer sequestration, cell migration, anti-fibrotic' },
  { metric: 'Administration', bpc: 'SubQ near injury site OR systemic oral (limited bioavailability)', tb: 'Systemic SubQ injection — goes everywhere' },
  { metric: 'Best for', bpc: 'Tendon injuries, muscle tears, joint issues, GI inflammation, fractures', tb: 'Systemic inflammation, cardiac tissue, widespread muscle damage, overtraining' },
  { metric: 'Dose', bpc: '250–500mcg/day', tb: '2–2.5mg 2x/week (loading); 2–2.5mg/week (maintenance)' },
  { metric: 'Onset of effect', bpc: '1–3 weeks for symptom improvement', tb: '2–4 weeks for systemic anti-inflammatory effect' },
  { metric: 'Stack synergy', bpc: 'Works best with TB-500 simultaneously', tb: 'Works best with BPC-157 simultaneously' },
]

const ghProtocol = {
  mechanism: 'CJC-1295 is a GHRH (growth hormone-releasing hormone) analogue that binds GHRH receptors on the pituitary, amplifying GH pulse amplitude. Ipamorelin is a selective GHRP (growth hormone-releasing peptide) that binds the ghrelin receptor (GHS-R1a), amplifying GH pulse frequency and magnitude without significant cortisol or prolactin elevation. When administered together 15–30 minutes before sleep, they produce a synergistic GH pulse that is 2–3× greater than either compound alone — timed to the body\'s natural nocturnal GH secretion window.',
  results: [
    { period: '8 Weeks', muscle: 'Improved muscle hardness and density. Faster post-workout recovery. Sleep quality noticeably improved by week 2–3.', fat: 'Mild fat loss beginning, particularly from abdomen. Body weight may stay stable as lean mass increases.' },
    { period: '12 Weeks', muscle: 'Clear lean mass gains. Strength improvements across major lifts. Connective tissue strength improved.', fat: 'Visible fat loss — 3–5% body fat reduction is common. Vascularity improving. Waist measurement decreasing.' },
    { period: '16 Weeks', muscle: 'Significant body recomposition complete. Skin quality and elasticity markedly improved. Joint health improved.', fat: 'Peak fat loss for the cycle. Continued lean mass quality improvement. Many users report best physique of their life.' },
  ],
}

const strengthCompounds = [
  {
    name: 'Hexarelin',
    label: 'Potency Leader',
    color: accent,
    mechanism: 'Hexarelin is the most potent GHRP — it binds GHS-R1a with the highest affinity of any known peptide in its class, producing the largest acute GH pulse. Its unique additional mechanism is CD36 receptor binding on cardiomyocytes, providing cardioprotective effects that operate independently of GH release. This dual action (peak GH output + cardiac protection) makes Hexarelin the compound of choice for short-burst GH maximization cycles.',
    vsGhrp6: 'Hexarelin produces higher GH output than GHRP-6 at equivalent doses without GHRP-6\'s notorious appetite stimulation — which can be problematic for athletes in body composition phases. Hexarelin\'s appetite stimulation is minimal (★★ vs GHRP-6\'s ★★★★★). The trade-off is faster receptor desensitization, requiring stricter cycling (4–6 weeks on, 2–4 weeks off).',
    dose: '100–200mcg SubQ, 2x daily (morning fasted + pre-bed)',
    cycle: '4–6 weeks ON / 2–4 weeks OFF',
  },
  {
    name: 'MOTS-c',
    label: 'Mitochondrial Performance',
    color: '#34d399',
    mechanism: 'MOTS-c is a mitochondria-derived peptide encoded in mitochondrial rDNA. It acts as an AMPK activator — the cellular energy sensor. AMPK activation drives mitochondrial biogenesis (the creation of new mitochondria), enhances fatty acid oxidation, improves insulin sensitivity, and upregulates the mitochondrial electron transport chain. In athletes, this translates to improved energy substrate utilization, greater aerobic capacity, and enhanced recovery between high-intensity efforts.',
    vsGhrp6: 'MOTS-c is fundamentally different from GHRPs — it does not stimulate GH. Instead it acts at the mitochondrial level to enhance cellular energy production. Athletes stacking MOTS-c with CJC-1295/Ipamorelin get both GH axis optimization (anabolic, recovery) and mitochondrial performance enhancement (endurance, energy) simultaneously — two non-overlapping pathways.',
    dose: '5–10mg SubQ, 3–5x/week',
    cycle: '8–12 weeks ON / 4 weeks OFF',
  },
]

const eliteStack = {
  compounds: [
    { name: 'BPC-157', dose: '250–500mcg SubQ', timing: 'Morning fasted', role: 'Tissue repair & GI health' },
    { name: 'TB-500', dose: '2–2.5mg SubQ', timing: '2x/week (any time)', role: 'Systemic recovery & anti-inflammation' },
    { name: 'CJC-1295 No-DAC', dose: '200mcg SubQ', timing: '30 min pre-sleep', role: 'GH pulse amplitude' },
    { name: 'Ipamorelin', dose: '200mcg SubQ', timing: '30 min pre-sleep (with CJC)', role: 'GH pulse frequency' },
  ],
  trainingTiming: 'On training days: BPC-157 in the morning fasted. Post-workout window is also acceptable for BPC-157 (injury site focus). TB-500 can be administered any time — twice weekly regardless of training day. CJC-1295/Ipamorelin always pre-sleep, 2–3 hours after last meal and away from any fat-containing meal.',
  cycle: '12–16 weeks ON / 6–8 weeks OFF for GH peptides. BPC-157 and TB-500 can be cycled shorter (6–8 weeks injury-focused) or maintained at lower dose throughout.',
  benefits: [
    'Complete tissue repair coverage (local BPC-157 + systemic TB-500)',
    'Maximized nocturnal GH pulse (GHRH + GHRP synergy)',
    'Improved body composition over 12–16 weeks',
    'Enhanced sleep quality and recovery speed',
    'Reduced injury risk and faster return from setbacks',
    'GI health maintenance under high training stress',
  ],
}

const relatedGuides = [
  { title: 'BPC-157 Complete Guide: Tendon, Muscle & Gut Repair', href: '/bpc-157-complete-guide', tag: 'Recovery' },
  { title: 'TB-500 Complete Guide: Systemic Recovery & Repair', href: '/tb-500-complete-guide', tag: 'Recovery' },
  { title: 'CJC-1295 + Ipamorelin: Results Timeline & Protocols', href: '/cjc-1295-ipamorelin-results-timeline', tag: 'GH Peptides' },
  { title: 'Hexarelin: Most Potent GHRP Guide', href: '/hexarelin-growth-hormone-peptide-guide', tag: 'Strength' },
]

export default function PeptidesAthleticPerformancePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] opacity-[0.05] top-0 right-0" style={{ background: accent }} />
        <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-[1px] bg-[#d4a043]" />
                <p className="label-gold">Sports Performance Guide</p>
              </div>
              <h1 className="font-['Playfair_Display'] text-[clamp(2rem,5vw,3.5rem)] font-900 leading-[1.08] tracking-tight text-white mb-6">
                Peptides for Athletic<br />
                <span className="italic" style={{ color: accent }}>Performance & Recovery</span>
              </h1>
              <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl mb-8">
                The complete guide for athletes, bodybuilders, and CrossFitters — covering recovery peptides, GH optimization, strength, endurance, and the elite full-stack protocol used by serious competitors.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="tag-gold">Recovery</span>
                <span className="tag">GH Optimization</span>
                <span className="tag">Strength</span>
                <span className="tag">Endurance</span>
                <span className="tag">Body Composition</span>
              </div>
            </div>
            {/* Stat pills */}
            <div className="mt-10 md:mt-0 flex flex-col gap-4 md:min-w-[220px]">
              {[
                { label: 'BPC-157 tendon repair speed', value: '2–4×', sub: 'vs. control in research models' },
                { label: 'CJC/Ipa GH pulse increase', value: '2–3×', sub: 'vs. either compound alone' },
                { label: 'MOTS-c AMPK activation', value: 'Mitochondrial', sub: 'biogenesis + fat oxidation' },
                { label: 'Elite stack cycle', value: '12–16 wk', sub: 'with 6–8 week off cycle' },
              ].map((s) => (
                <div key={s.label} className="card p-4">
                  <p className="text-[#8888a0] text-xs uppercase tracking-wider mb-1">{s.label}</p>
                  <p className="font-700 text-2xl mono" style={{ color: accent }}>{s.value}</p>
                  <p className="text-[#8888a0] text-xs mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 1 — 4 Pillars */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Section 01</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Why Athletes Use Peptides
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            Four distinct mechanisms — each addressing a specific performance bottleneck that training intensity creates.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="card p-6">
              <div className="text-2xl mb-4">{p.icon}</div>
              <h3 className="text-white font-700 text-lg mb-3">{p.title}</h3>
              <p className="text-[#8888a0] text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 2 — Recovery: BPC-157 + TB-500 */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Section 02</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Recovery Peptides: BPC-157 + TB-500
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            BPC-157 and TB-500 are the most evidence-backed recovery peptides available. They are complementary — not redundant — and work best as a stack.
          </p>
        </div>
        <div className="card p-6 md:p-8 mb-6">
          <h3 className="text-white font-700 text-lg mb-5">BPC-157 vs. TB-500: Mechanism Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2a2a3a]">
                  <th className="text-left text-[#8888a0] pb-3 pr-6 font-400 uppercase text-xs tracking-wider">Property</th>
                  <th className="text-left pb-3 pr-6 font-700 text-xs uppercase tracking-wider" style={{ color: accent }}>BPC-157</th>
                  <th className="text-left pb-3 font-700 text-xs uppercase tracking-wider text-[#34d399]">TB-500</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a1a2a]">
                {recoveryComparison.map((row) => (
                  <tr key={row.metric}>
                    <td className="py-3 pr-6 text-[#8888a0] text-xs">{row.metric}</td>
                    <td className="py-3 pr-6 text-white text-xs">{row.bpc}</td>
                    <td className="py-3 text-[#a0a0b8] text-xs">{row.tb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card-elevated p-6">
            <div className="label-gold mb-3">INJURY-SITE INJECTION</div>
            <h3 className="text-white font-700 mb-3">BPC-157 Local Administration</h3>
            <p className="text-[#8888a0] text-sm leading-relaxed">
              BPC-157 injected subcutaneously near the injury site achieves higher local tissue concentrations and more direct growth factor upregulation at the repair site. For tendon injuries (Achilles, rotator cuff, patellar tendon), muscle tears, or joint issues, local injection provides faster and more targeted repair signaling than systemic dosing. Inject as close as safely possible to the affected tissue — not directly into tendons or joints, but subcutaneously near them.
            </p>
          </div>
          <div className="card-elevated p-6">
            <div className="label-gold mb-3">SYSTEMIC ADMINISTRATION</div>
            <h3 className="text-white font-700 mb-3">TB-500 Whole-Body Coverage</h3>
            <p className="text-[#8888a0] text-sm leading-relaxed">
              TB-500 (synthetic thymosin beta-4) distributes systemically — it does not need to be injected near the injury site. This makes it ideal for athletes with multiple areas of tissue stress, systemic inflammation, or overtraining syndrome. TB-500's actin dynamics regulation helps with widespread muscle micro-damage from high-volume training, while its anti-fibrotic effects prevent the scar tissue buildup that impairs long-term tissue quality and flexibility.
            </p>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 3 — GH Secretagogues */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Section 03</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Growth Hormone Secretagogues for Performance
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            CJC-1295 + Ipamorelin: the most widely used GH optimization protocol — GHRH/GHRP synergy, overnight pulse protocol, and results at 8, 12, and 16 weeks.
          </p>
        </div>
        <div className="card-elevated p-6 md:p-8 mb-6">
          <h3 className="text-white font-700 text-lg mb-4">GHRH + GHRP Synergy Mechanism</h3>
          <p className="text-[#8888a0] text-sm leading-relaxed mb-6">{ghProtocol.mechanism}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <div className="label-gold mb-2">CJC-1295 No-DAC</div>
              <p className="text-white text-sm font-700 mb-2">GHRH Analogue — Pulse Amplitude</p>
              <p className="text-[#8888a0] text-xs leading-relaxed">Binds GHRH receptor on pituitary somatotrophs. Short half-life (30 min) means it produces clean, discrete GH pulses rather than continuous GH elevation. Must be dosed immediately before sleep for optimal nocturnal pulse augmentation. Used at 100–200mcg per injection.</p>
            </div>
            <div className="card p-5">
              <div className="label-gold mb-2">Ipamorelin</div>
              <p className="text-white text-sm font-700 mb-2">Selective GHRP — Pulse Frequency</p>
              <p className="text-[#8888a0] text-xs leading-relaxed">The cleanest GHRP — negligible cortisol and prolactin elevation compared to GHRP-2, GHRP-6, or Hexarelin. Binds GHS-R1a to amplify GH pulse magnitude and frequency. Selective for GH release without meaningfully stimulating ACTH or prolactin — ideal for long-duration use. Used at 100–200mcg per injection.</p>
            </div>
          </div>
        </div>
        <h3 className="text-white font-700 text-lg mb-4">Results Timeline: CJC-1295 + Ipamorelin</h3>
        <div className="grid sm:grid-cols-3 gap-5">
          {ghProtocol.results.map((r) => (
            <div key={r.period} className="card p-5">
              <p className="font-700 text-sm mb-3" style={{ color: accent }}>{r.period}</p>
              <p className="text-[#8888a0] text-xs leading-relaxed mb-3"><strong className="text-white">Muscle & Recovery:</strong> {r.muscle}</p>
              <p className="text-[#8888a0] text-xs leading-relaxed"><strong className="text-white">Body Composition:</strong> {r.fat}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 4 — Strength & Hypertrophy */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Section 04</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Strength & Hypertrophy Peptides
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            For athletes prioritizing peak GH output or mitochondrial performance, Hexarelin and MOTS-c offer distinct mechanisms beyond the CJC-1295/Ipamorelin baseline.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {strengthCompounds.map((c) => (
            <div key={c.name} className="card-elevated p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs font-700 uppercase tracking-widest mb-2 mono" style={{ color: c.color }}>{c.label}</div>
                  <h3 className="text-white font-700 text-xl">{c.name}</h3>
                </div>
                <div className="flex gap-4 text-sm">
                  <div className="text-right">
                    <span className="text-[#8888a0] text-xs uppercase tracking-wider block mb-1">Dose</span>
                    <span className="text-white mono text-xs">{c.dose}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#8888a0] text-xs uppercase tracking-wider block mb-1">Cycle</span>
                    <span className="text-white mono text-xs">{c.cycle}</span>
                  </div>
                </div>
              </div>
              <p className="text-[#a0a0b8] text-sm leading-relaxed mb-4">{c.mechanism}</p>
              <div className="card p-4">
                <p className="text-[#8888a0] text-xs uppercase tracking-wider mb-2">vs. Other GHRPs / Comparison</p>
                <p className="text-[#a0a0b8] text-sm leading-relaxed">{c.vsGhrp6}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 5 — Endurance & Performance Optimization */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Section 05</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Endurance & Performance Optimization
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            For endurance athletes and those prioritizing aerobic performance, sleep quality, and gut health under training stress.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="card p-6">
            <div className="w-8 h-[2px] mb-4" style={{ background: accent }} />
            <h3 className="text-white font-700 text-base mb-3">MOTS-c & Aerobic Capacity</h3>
            <p className="text-[#8888a0] text-sm leading-relaxed">
              MOTS-c's AMPK activation increases mitochondrial density and improves the efficiency of the electron transport chain. For endurance athletes, this means enhanced fat oxidation at submaximal intensities (fat-burning at higher intensities = glycogen sparing), improved VO2 utilization efficiency, and faster restoration of mitochondrial function post-effort. Animal studies show MOTS-c improves running endurance and exercise capacity significantly — human data is emerging.
            </p>
          </div>
          <div className="card p-6">
            <div className="w-8 h-[2px] mb-4" style={{ background: '#a855f7' }} />
            <h3 className="text-white font-700 text-base mb-3">Epithalon & Sleep Optimization</h3>
            <p className="text-[#8888a0] text-sm leading-relaxed">
              Epithalon (Epitalon) is a tetrapeptide that regulates pineal melatonin production and circadian rhythm synchronization. Deep sleep is where GH is secreted, muscle protein synthesis peaks, and nervous system recovery occurs. Athletes with disrupted sleep cycles — from travel, competition anxiety, or overtraining — see disproportionate performance decline. Epithalon restores melatonin production patterns and improves sleep architecture, indirectly maximizing GH secretion and all downstream recovery processes.
            </p>
          </div>
          <div className="card p-6">
            <div className="w-8 h-[2px] mb-4" style={{ background: '#f59e0b' }} />
            <h3 className="text-white font-700 text-base mb-3">BPC-157 & Gut Health</h3>
            <p className="text-[#8888a0] text-sm leading-relaxed">
              High training loads increase intestinal permeability ("leaky gut") through mechanical stress, reduced gut blood flow during exercise, and elevated cortisol. Increased gut permeability drives systemic inflammation, impairs nutrient absorption, and contributes to immune suppression. BPC-157 is the most potent gut-healing peptide known — it repairs intestinal tight junctions, promotes gastric mucosal healing, and has a clinical pedigree as a GI healing agent. Athletes under extreme training stress benefit from BPC-157's gut health mechanism as much as its tissue repair applications.
            </p>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 6 — Elite Recovery Stack */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Section 06</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            The Elite Recovery Stack
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            BPC-157 + TB-500 + CJC-1295/Ipamorelin — the complete performance optimization protocol covering local repair, systemic recovery, and GH optimization simultaneously.
          </p>
        </div>
        <div className="card-elevated p-6 md:p-8 mb-6">
          <h3 className="text-white font-700 text-lg mb-5">Daily Protocol</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2a2a3a]">
                  <th className="text-left text-[#8888a0] pb-3 pr-6 font-400 uppercase text-xs tracking-wider">Compound</th>
                  <th className="text-left pb-3 pr-6 font-400 uppercase text-xs tracking-wider text-[#8888a0]">Dose</th>
                  <th className="text-left pb-3 pr-6 font-400 uppercase text-xs tracking-wider text-[#8888a0]">Timing</th>
                  <th className="text-left pb-3 font-400 uppercase text-xs tracking-wider text-[#8888a0]">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a1a2a]">
                {eliteStack.compounds.map((c) => (
                  <tr key={c.name}>
                    <td className="py-3 pr-6 text-white font-700">{c.name}</td>
                    <td className="py-3 pr-6 text-[#a0a0b8] mono text-xs">{c.dose}</td>
                    <td className="py-3 pr-6 text-[#a0a0b8] text-xs">{c.timing}</td>
                    <td className="py-3 text-[#8888a0] text-xs">{c.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card p-6">
            <h3 className="text-white font-700 mb-3">Training Day Timing</h3>
            <p className="text-[#8888a0] text-sm leading-relaxed">{eliteStack.trainingTiming}</p>
          </div>
          <div className="card p-6">
            <h3 className="text-white font-700 mb-4">Stack Benefits</h3>
            <ul className="flex flex-col gap-2">
              {eliteStack.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                  <span className="text-[#8888a0]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card p-5 mt-5">
          <p className="text-[#8888a0] text-xs uppercase tracking-wider mb-2">Cycle Length</p>
          <p className="text-white text-sm">{eliteStack.cycle}</p>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 7 — Product Buy Cards */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Research Compounds</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Sourcing the Elite Performance Stack
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            Research-use compounds only. Consult a physician before use.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">

          <div className="card-elevated p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="label-gold mb-2">LOCAL TISSUE REPAIR</div>
                <h3 className="text-white font-700 text-xl">BPC-157 10mg</h3>
                <p className="text-[#8888a0] text-sm mt-1">Body protection compound — VEGF upregulation, angiogenesis, tendon and GI healing</p>
              </div>
            </div>
            <a href={AFF('bpc-157-10mg')} target="_blank" rel="noopener nofollow sponsored"
              className="btn-primary text-center block">View on Phiogen →</a>
            <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
              className="btn-ghost text-center block text-sm">Browse All Peptides</a>
          </div>

          <div className="card-elevated p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="label-gold mb-2">SYSTEMIC RECOVERY</div>
                <h3 className="text-white font-700 text-xl">TB-500 10mg</h3>
                <p className="text-[#8888a0] text-sm mt-1">Thymosin beta-4 — actin dynamics, systemic anti-inflammation, whole-body repair</p>
              </div>
            </div>
            <a href={AFF('tb-500-thymosin-beta-4-10mg')} target="_blank" rel="noopener nofollow sponsored"
              className="btn-primary text-center block">View on Phiogen →</a>
            <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
              className="btn-ghost text-center block text-sm">Browse All Peptides</a>
          </div>

          <div className="card-elevated p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="label-gold mb-2">GH OPTIMIZATION STACK</div>
                <h3 className="text-white font-700 text-xl">CJC-1295 No-DAC 2mg</h3>
                <p className="text-[#8888a0] text-sm mt-1">GHRH analogue — GH pulse amplitude, nocturnal protocol, pulsatile architecture</p>
              </div>
            </div>
            <a href={AFF('cjc-1295-no-dac-2mg')} target="_blank" rel="noopener nofollow sponsored"
              className="btn-primary text-center block">View on Phiogen →</a>
            <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
              className="btn-ghost text-center block text-sm">Browse All Peptides</a>
          </div>

          <div className="card-elevated p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="label-gold mb-2">GH OPTIMIZATION STACK</div>
                <h3 className="text-white font-700 text-xl">Ipamorelin 2mg</h3>
                <p className="text-[#8888a0] text-sm mt-1">Selective GHRP — GH pulse frequency, no cortisol/prolactin, ideal long-term use</p>
              </div>
            </div>
            <a href={AFF('ipamorelin-2mg')} target="_blank" rel="noopener nofollow sponsored"
              className="btn-primary text-center block">View on Phiogen →</a>
            <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
              className="btn-ghost text-center block text-sm">Browse All Peptides</a>
          </div>

          <div className="card-elevated p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="label-gold mb-2">PEAK GH OUTPUT</div>
                <h3 className="text-white font-700 text-xl">Hexarelin 2mg</h3>
                <p className="text-[#8888a0] text-sm mt-1">Most potent GHRP — GHS-R1a peak agonism + CD36 cardioprotection, 4–6 week cycles</p>
              </div>
            </div>
            <a href={AFF('hexarelin-2mg')} target="_blank" rel="noopener nofollow sponsored"
              className="btn-primary text-center block">View on Phiogen →</a>
            <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
              className="btn-ghost text-center block text-sm">Browse All Peptides</a>
          </div>

          <div className="card-elevated p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="label-gold mb-2">MITOCHONDRIAL PERFORMANCE</div>
                <h3 className="text-white font-700 text-xl">MOTS-c 10mg</h3>
                <p className="text-[#8888a0] text-sm mt-1">Mitochondria-derived peptide — AMPK activation, mitochondrial biogenesis, endurance</p>
              </div>
            </div>
            <a href={AFF('mots-c-10mg')} target="_blank" rel="noopener nofollow sponsored"
              className="btn-primary text-center block">View on Phiogen →</a>
            <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
              className="btn-ghost text-center block text-sm">Browse All Peptides</a>
          </div>

        </div>
      </section>

      <div className="rule" />

      {/* SECTION 8 — FAQ */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">FAQ</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {(jsonLd['@graph'][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((q) => (
            <div key={q.name} className="card p-6">
              <h3 className="text-white font-700 text-base mb-3">{q.name}</h3>
              <p className="text-[#8888a0] text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 9 — Related Guides */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Continue Reading</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Related Guides
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {relatedGuides.map((g) => (
            <Link key={g.href} href={g.href} className="card p-6 flex items-start justify-between gap-4 hover:border-[#22d3ee]/30 transition-colors group">
              <div>
                <span className="tag text-xs mb-3 inline-block">{g.tag}</span>
                <h3 className="text-white font-600 text-base group-hover:text-[#22d3ee] transition-colors">{g.title}</h3>
              </div>
              <span className="text-[#8888a0] group-hover:text-[#22d3ee] transition-colors mt-1 text-lg">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-16">
        <div className="card p-6">
          <p className="text-[#5a5a70] text-xs leading-relaxed">
            <strong className="text-[#7a7a90]">Research Use Disclaimer:</strong> All content on PeptidesMuscle is for informational and educational purposes only. The compounds discussed are research chemicals not approved by the FDA for human use. Nothing on this page constitutes medical advice. Always consult a qualified physician before using any research compound. Athletes subject to WADA or other anti-doping authority jurisdiction should be aware that many peptides discussed are on prohibited substance lists. Individual responses vary.
          </p>
        </div>
      </div>

    </div>
  )
}
