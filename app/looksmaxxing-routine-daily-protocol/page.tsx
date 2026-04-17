import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Looksmaxxing Routine 2026: The Complete Daily Peptide Protocol | PeptidesMuscle',
  description: 'The complete looksmaxxing daily routine with peptides. Morning and evening protocols for skin, body composition, hair, and recovery. Step-by-step schedule with dosing for beginners to advanced.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/looksmaxxing-routine-daily-protocol' },
  keywords: 'looksmaxxing routine, looksmaxxing daily routine, looksmaxxing protocol, how to looksmaxx, looksmaxxing schedule, looksmaxxing peptide routine 2026',
  openGraph: {
    title: 'Looksmaxxing Routine 2026: The Complete Daily Peptide Protocol',
    description: 'Morning, pre-sleep, and training-day protocols. Every compound, every dose, every timing — built for measurable appearance results.',
    url: 'https://www.peptidesmuscle.com/looksmaxxing-routine-daily-protocol',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: { card: 'summary_large_image', title: 'Looksmaxxing Routine 2026: Complete Daily Peptide Protocol', description: 'Step-by-step daily routine for skin, body, and recovery.', images: ['/max-avatar.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'Looksmaxxing Routine 2026: The Complete Daily Peptide Protocol',
      datePublished: '2026-03-25',
      dateModified: '2026-03-25',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com', logo: { '@type': 'ImageObject', url: 'https://www.peptidesmuscle.com/max-avatar.png' } },
      author: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#dr-marcus-chen', name: 'Dr. Marcus Chen', url: 'https://www.peptidesmuscle.com/about/editors' },
      reviewedBy: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#dr-marcus-chen' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best looksmaxxing routine with peptides?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The optimal looksmaxxing routine combines a morning SubQ injection (GHK-Cu 1–2mg, BPC-157 250mcg), topical SNAP-8 after your skincare cleanse, and a pre-sleep CJC-1295/Ipamorelin injection (100mcg each) to leverage the overnight GH pulse. Training days add TB-500 250mcg post-workout for connective tissue recovery. This 4-compound routine addresses all major looksmaxxing pillars simultaneously.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a looksmaxxing peptide routine take to show results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Skin texture (GHK-Cu, SNAP-8): visible improvement at 3–4 weeks. Body recomposition (CJC-1295/Ipamorelin): noticeable at 6–8 weeks. Full protocol compound results across all pillars: 10–12 weeks. Cycle-based compounds like Epithalon show results during the 10–20 day cycle window.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you run a looksmaxxing peptide routine every day?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. GHK-Cu, BPC-157, and CJC-1295/Ipamorelin are designed for daily use. SNAP-8 is applied twice daily topically. The key is consistent timing — especially for GH peptides which work best 30–60 minutes before sleep on an empty stomach.',
          },
        },
      ],
    },
  ],
}

const morningSteps = [
  {
    time: '7:00 AM',
    title: 'GHK-Cu Injection',
    detail: '1–2mg SubQ (abdomen or thigh). This is the cornerstone of the skin layer. On an empty or near-empty stomach. Can be co-injected with BPC-157 in the same site.',
    tag: 'Skin Layer',
    color: '#d4a043',
  },
  {
    time: '7:01 AM',
    title: 'BPC-157 Injection',
    detail: '250–300mcg SubQ. Systemic anti-inflammatory and gut health. Can be combined in the same syringe as GHK-Cu for a single injection. Reduces systemic inflammation that degrades skin quality and recovery.',
    tag: 'Foundation Layer',
    color: '#40c090',
  },
  {
    time: '7:15 AM',
    title: 'Skincare Cleanse',
    detail: 'Gentle, non-stripping cleanser. The peptide injections are working systemically — topical SNAP-8 works on the surface. Clean skin maximizes absorption.',
    tag: 'Topical Prep',
    color: '#8888a0',
  },
  {
    time: '7:20 AM',
    title: 'SNAP-8 Application',
    detail: 'Apply topical SNAP-8 serum to forehead, crow\'s feet, and any expression lines. Works as a biomimetic peptide that inhibits acetylcholine release at the neuromuscular junction — the same mechanism as Botox.',
    tag: 'Skin Layer',
    color: '#d4a043',
  },
]

const eveningSteps = [
  {
    time: '9:00 PM',
    title: 'Last Meal (2h Before Bed)',
    detail: 'CJC-1295/Ipamorelin works best in a low-insulin state. Stop eating at least 90 minutes — ideally 2 hours — before your pre-sleep injection. This is the single most overlooked part of GH peptide optimization.',
    tag: 'Timing Critical',
    color: '#e05080',
  },
  {
    time: '10:30 PM',
    title: 'CJC-1295 + Ipamorelin Injection',
    detail: '100mcg CJC-1295 + 100mcg Ipamorelin, SubQ. Pre-sleep timing leverages the body\'s natural midnight GH pulse, amplifying it significantly. This is when your skin repairs, your muscles grow, and fat is mobilized.',
    tag: 'Body Comp Layer',
    color: '#6090ff',
  },
  {
    time: '10:45 PM',
    title: 'SNAP-8 Second Application',
    detail: 'Apply SNAP-8 again before bed. Overnight is when expression line reduction compounds are most effective — collagen synthesis peaks during sleep.',
    tag: 'Skin Layer',
    color: '#d4a043',
  },
]

const trainingDay = [
  { step: 'Post-Workout (within 30 min)', compound: 'TB-500 250mcg', note: 'Accelerates connective tissue repair, reduces joint inflammation from heavy training. Critical for sustaining training volume without degrading results.' },
  { step: 'Pre-Workout (optional)', compound: 'BPC-157 (second dose)', note: 'On heavy leg or shoulder days, a second BPC-157 dose pre-workout reduces inflammation and improves joint tolerance.' },
]

const weeklySchedule = [
  { day: 'Monday', compounds: ['GHK-Cu', 'BPC-157', 'CJC/Ipamorelin', 'SNAP-8 ×2'], training: true },
  { day: 'Tuesday', compounds: ['GHK-Cu', 'BPC-157', 'CJC/Ipamorelin', 'SNAP-8 ×2', 'TB-500'], training: true },
  { day: 'Wednesday', compounds: ['GHK-Cu', 'BPC-157', 'CJC/Ipamorelin', 'SNAP-8 ×2'], training: false },
  { day: 'Thursday', compounds: ['GHK-Cu', 'BPC-157', 'CJC/Ipamorelin', 'SNAP-8 ×2', 'TB-500'], training: true },
  { day: 'Friday', compounds: ['GHK-Cu', 'BPC-157', 'CJC/Ipamorelin', 'SNAP-8 ×2'], training: false },
  { day: 'Saturday', compounds: ['GHK-Cu', 'BPC-157', 'CJC/Ipamorelin', 'SNAP-8 ×2', 'TB-500'], training: true },
  { day: 'Sunday', compounds: ['BPC-157', 'CJC/Ipamorelin', 'SNAP-8 ×2'], training: false },
]

const milestones = [
  { week: 'Week 1–2', change: 'Skin hydration noticeably improved. GHK-Cu begins stimulating pro-collagen synthesis. SNAP-8 starts downregulating neurotransmitter activity at expression sites.' },
  { week: 'Week 3–4', change: 'Skin texture refinement visible. Pore size reduction begins. Expression lines shallower with consistent SNAP-8. Better sleep quality from optimized GH release.' },
  { week: 'Week 5–8', change: 'Body composition shifts: fat loss in subcutaneous areas, improved muscle definition. Skin density increase becomes obvious — better "snap" when pressed. Recovery from training is significantly faster.' },
  { week: 'Week 9–12', change: 'Full compound effect across all pillars. Skin collagen architecture rebuilt (GHK-Cu studies show up to 121% density increase at 12 weeks). GH optimization has shifted body composition measurably. Expression lines at 30–50% reduction.' },
]

const faqs = [
  { q: 'Can I run this routine if I\'m a beginner?', a: 'Start with the skin layer only: GHK-Cu morning + SNAP-8 twice daily. Run this for 4 weeks, then add CJC-1295/Ipamorelin pre-sleep. After another 4 weeks, add BPC-157. Layering compounds gives your body time to adapt and lets you identify which compound is responsible for each change.' },
  { q: 'Do I need to cycle off this routine?', a: 'GHK-Cu: run 12–16 weeks, break 4–6 weeks. BPC-157: run 8–12 weeks, break 4 weeks. CJC-1295/Ipamorelin: 12–16 week cycles, 4–6 week break (or switch to CJC-1295 without DAC for continuous use). SNAP-8 topical: no cycling needed. Plan cycles in advance — going off and on without gaps reduces pituitary receptor sensitivity.' },
  { q: 'What\'s the minimum routine for visible results?', a: 'GHK-Cu 1mg 3× weekly + SNAP-8 twice daily. This is the entry-level looksmaxxing routine. At roughly $90–100/month, it specifically targets the most visible appearance variable — skin quality. Results are typically visible at 4 weeks and significant at 8.' },
]

export default function LooksmaxxingRoutinePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] bg-[#d4a043] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Daily Protocol · 2026</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(34px, 6vw, 72px)', lineHeight: 1.08 }}>
            The Looksmaxxing<br />
            <span className="italic" style={{ color: '#d4a043' }}>Daily Routine</span>
          </h1>
      <AuthorByline datePublished="2026-03-25" dateModified="2026-03-25" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl mb-8">
            A complete morning-to-night peptide schedule targeting skin, body composition, recovery, and GH optimization — with exact timings, dosing, and the reasoning behind every decision.
          </p>
          <div className="flex flex-wrap gap-2">
            {['GHK-Cu', 'SNAP-8', 'BPC-157', 'CJC-1295 / Ipamorelin', 'TB-500'].map(c => (
              <span key={c} className="tag-gold">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* Why timing matters */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Why</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              Why Timing Is Everything
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Peptides are not supplements you take whenever convenient. They are signaling molecules that work in alignment — or against — your body's natural hormonal rhythms. GH peptides administered with elevated insulin produce a fraction of the GH pulse they would in a fasted state. GHK-Cu applied topically on unwashed skin has lower bioavailability. SNAP-8 applied once daily achieves maybe 40% of the results of twice-daily application.</p>
            <p>The routine below is designed around three biological facts: (1) GH secretion peaks during the first 90 minutes of deep sleep, (2) skin repair peaks overnight, and (3) systemic inflammation is lowest in the morning — making it the ideal window for growth factor peptides. Every timing decision is mechanistically justified.</p>
          </div>
        </div>

        <div className="rule" />

        {/* Morning Protocol */}
        <div>
          <div className="flex items-start gap-6 mb-8">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">AM</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              Morning Protocol
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-4">
            {morningSteps.map((s) => (
              <div key={s.title} className="card rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <p className="mono text-[12px]" style={{ color: s.color }}>{s.time}</p>
                  <span className="tag">{s.tag}</span>
                </div>
                <p className="text-white font-700 text-[17px] mb-2">{s.title}</p>
                <p className="text-[#8888a0] text-[14px] leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* Evening Protocol */}
        <div>
          <div className="flex items-start gap-6 mb-8">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">PM</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              Evening Protocol
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-4">
            {eveningSteps.map((s) => (
              <div key={s.title} className="card rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <p className="mono text-[12px]" style={{ color: s.color }}>{s.time}</p>
                  <span className="tag">{s.tag}</span>
                </div>
                <p className="text-white font-700 text-[17px] mb-2">{s.title}</p>
                <p className="text-[#8888a0] text-[14px] leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* Training Day Add-ons */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#40c090] text-[12px] mt-1 flex-shrink-0">+</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              Training Day Additions
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-4">
            <p className="text-[#8888a0] text-[16px] leading-relaxed mb-5">Hard training generates inflammation that impairs both recovery and the appearance results you're chasing. These additions turn training days into accelerators rather than setbacks.</p>
            {trainingDay.map(t => (
              <div key={t.step} className="card-elevated rounded-xl p-5 border-l-2" style={{ borderLeftColor: '#40c090' }}>
                <p className="text-[#40c090] mono text-[11px] mb-1">{t.step}</p>
                <p className="text-white font-700 text-[15px] mb-2">{t.compound}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* Weekly Schedule */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">7d</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              Full Weekly Schedule
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-2">
            {weeklySchedule.map(d => (
              <div key={d.day} className="card rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-3 sm:w-28 flex-shrink-0">
                  <p className="text-white font-700 text-[14px]">{d.day}</p>
                  {d.training && <span className="tag" style={{ fontSize: '10px', color: '#40c090', borderColor: 'rgba(64,192,144,0.2)', background: 'rgba(64,192,144,0.07)' }}>Training</span>}
                </div>
                <div className="flex flex-wrap gap-2">
                  {d.compounds.map(c => (
                    <span key={c} className="tag text-[11px]">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* Results Timeline */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">→</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              What to Expect Week by Week
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-4">
            {milestones.map((m, i) => (
              <div key={m.week} className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-700" style={{ background: 'rgba(212,160,67,0.12)', color: '#d4a043', border: '1px solid rgba(212,160,67,0.25)' }}>
                    {i + 1}
                  </div>
                  {i < milestones.length - 1 && <div className="w-[1px] flex-1 mt-2" style={{ background: 'rgba(212,160,67,0.12)' }} />}
                </div>
                <div className="pb-8">
                  <p className="text-white font-700 text-[15px] mb-2">{m.week}</p>
                  <p className="text-[#8888a0] text-[14px] leading-relaxed">{m.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* FAQ */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-8" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
            Common Questions
          </h2>
          <div className="space-y-0">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-white/[0.06] py-6">
                <p className="text-white font-700 text-[16px] mb-3">{f.q}</p>
                <p className="text-[#8888a0] text-[15px] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* Related */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
            Deep Dive into Each Compound
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/looksmaxxing-peptides-guide-men', label: 'Looksmaxxing Peptides: The Men\'s Guide', desc: 'All four appearance pillars — skin, body, recovery, cellular age' },
              { href: '/ghk-cu-before-and-after-guide', label: 'GHK-Cu Before & After', desc: 'Injectable vs topical results, the 12-week timeline' },
              { href: '/snap-8-vs-botox-peptide-alternative', label: 'SNAP-8 vs. Botox', desc: 'The topical peptide that mimics neurotoxin wrinkle reduction' },
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin Results', desc: 'Week-by-week GH optimization and body recomp outcomes' },
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
