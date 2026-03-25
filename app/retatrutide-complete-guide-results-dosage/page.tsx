import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retatrutide 2026: Complete Guide to Results, Dosage, Side Effects & Comparison | PeptidesMuscle',
  description: 'Comprehensive retatrutide guide with all TRIUMPH Phase 3 trial data. 28.7% weight loss vs tirzepatide vs semaglutide — side effects, dosage, FDA timeline, and how to access it now.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/retatrutide-complete-guide-results-dosage' },
  keywords: 'retatrutide guide 2026, retatrutide results, retatrutide vs tirzepatide, retatrutide review, retatrutide dosage, retatrutide side effects',
  openGraph: {
    title: 'Retatrutide 2026: Complete Guide — Results, Dosage & Comparison',
    description: 'All TRIUMPH Phase 3 trial data: 28.7% weight loss. Full comparison vs tirzepatide and semaglutide.',
    url: 'https://www.peptidesmuscle.com/retatrutide-complete-guide-results-dosage',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: { card: 'summary_large_image', title: 'Retatrutide 2026: Complete Guide', description: '28.7% weight loss in Phase 3 — full results, dosage, and comparison guide.', images: ['/max-avatar.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Retatrutide 2026: Complete Guide to Results, Dosage, Side Effects & Comparison',
      description: 'Comprehensive retatrutide guide with all TRIUMPH Phase 3 trial data.',
      url: 'https://www.peptidesmuscle.com/retatrutide-complete-guide-results-dosage',
      datePublished: '2026-03-21',
      dateModified: '2026-03-21',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is retatrutide?', acceptedAnswer: { '@type': 'Answer', text: 'Retatrutide is an investigational triple agonist developed by Eli Lilly that simultaneously activates GLP-1, GIP, and glucagon receptors. Phase 3 trials show up to 28.7% average body weight reduction — the highest ever recorded for a pharmacological intervention.' } },
        { '@type': 'Question', name: 'How does retatrutide compare to tirzepatide?', acceptedAnswer: { '@type': 'Answer', text: 'Retatrutide outperforms tirzepatide on weight loss (28.7% vs 22.5% in separate trials), primarily because its glucagon receptor activation adds metabolic rate enhancement on top of tirzepatide\'s GLP-1/GIP mechanism. Retatrutide also comes with a unique side effect — dysesthesia (tingling/numbness) — not seen with tirzepatide.' } },
        { '@type': 'Question', name: 'When will retatrutide be FDA approved?', acceptedAnswer: { '@type': 'Answer', text: 'Based on current Phase 3 timelines (TRIUMPH program), FDA approval for obesity is estimated earliest Q3 2027. The diabetes Phase 3 trial cleared in March 2026. No approval date has been officially set.' } },
        { '@type': 'Question', name: 'Can you get retatrutide now?', acceptedAnswer: { '@type': 'Answer', text: 'Retatrutide is available in research peptide format from licensed vendors. It is not FDA approved for human use. Compounded pharmaceutical versions are not yet widely available pending approval.' } },
      ],
    },
  ],
}

const AFF_BASE = 'https://apollopeptidesciences.com/product'
const REF = '?rfsn=9016964.3f1b1e'

export default function RetatrutidePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] bg-[#6090ff] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Phase 3 Data — March 2026</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.1 }}>
            Retatrutide 2026:<br />
            <span className="italic" style={{ color: '#d4a043' }}>The Complete Guide</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl mb-8">
            Triple GLP-1/GIP/Glucagon agonist with 28.7% average body weight reduction in TRIUMPH Phase 3 trials — the highest number ever recorded for a pharmacological weight loss intervention. Here is everything you need to know.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="card rounded-xl px-5 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#d4a043]" />
              <span className="text-white text-[14px] font-600">28.7% avg. weight loss</span>
            </div>
            <div className="card rounded-xl px-5 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#6090ff]" />
              <span className="text-white text-[14px] font-600">Triple receptor agonist</span>
            </div>
            <div className="card rounded-xl px-5 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#40c090]" />
              <span className="text-white text-[14px] font-600">FDA approval ~2027</span>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — What Is Retatrutide */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              What Is Retatrutide?
            </h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Retatrutide (LY3437943) is an investigational peptide developed by Eli Lilly that simultaneously activates three receptors: GLP-1 (glucagon-like peptide-1), GIP (glucose-dependent insulinotropic polypeptide), and glucagon. This triple agonism is what makes it categorically different from every weight loss compound that came before it.</p>
            <p>Semaglutide works on one receptor (GLP-1). Tirzepatide works on two (GLP-1 + GIP). Retatrutide works on all three — and that additional glucagon receptor activation is the key differentiator. Glucagon receptor agonism directly increases energy expenditure and hepatic fat burning in ways that GLP-1 and GIP cannot replicate, explaining the dramatically superior weight loss outcomes seen in TRIUMPH trials.</p>
            <p>The compound was first reported in Phase 1 data in 2023 and has since completed Phase 2 and entered Phase 3 trials (TRIUMPH program) covering obesity, type 2 diabetes, cardiovascular outcomes, and liver disease (MASH).</p>
          </div>
        </div>

        <div className="rule" />

        {/* 02 — TRIUMPH Trial Data */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              TRIUMPH Phase 3 Results: All Data Consolidated
            </h2>
          </div>
          <div className="pl-10 space-y-6">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">The TRIUMPH program is Eli Lilly&apos;s Phase 3 clinical trial series for retatrutide across multiple indications. Here is every major data readout to date:</p>
            <div className="space-y-4">
              {[
                { trial: 'TRIUMPH-4 (Obesity)', result: '28.7% average body weight reduction', duration: '68 weeks', dose: '12mg weekly', note: 'Primary obesity trial — the headline number' },
                { trial: 'Phase 2 Obesity', result: '24.2% average body weight reduction', duration: '48 weeks', dose: '12mg weekly', note: 'Confirmed in earlier study' },
                { trial: 'TRIUMPH Diabetes (March 2026)', result: 'Phase 3 diabetes trial cleared', duration: 'Ongoing', dose: 'TBD', note: 'Late-stage data released March 19, 2026' },
                { trial: 'MASH (Liver Disease)', result: 'Significant MASH resolution vs. placebo', duration: 'Phase 3 ongoing', dose: 'Multiple arms', note: 'Broadening the clinical picture beyond obesity' },
              ].map(t => (
                <div key={t.trial} className="card rounded-xl p-5">
                  <div className="flex items-start justify-between mb-2 gap-4">
                    <p className="text-white font-600 text-[15px]">{t.trial}</p>
                    <span className="text-[#d4a043] text-[13px] font-700 whitespace-nowrap">{t.result}</span>
                  </div>
                  <div className="flex gap-6 text-[12px] text-[#50505e] mb-2">
                    <span>{t.duration}</span>
                    <span>Dose: {t.dose}</span>
                  </div>
                  <p className="text-[#8888a0] text-[13px]">{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 03 — The Big Comparison */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Retatrutide vs. Tirzepatide vs. Semaglutide
            </h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">The three GLP-class compounds represent a clear generational progression. Each adds a receptor, and each addition meaningfully increases efficacy.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-[#50505e] py-3 pr-6 font-500">Compound</th>
                    <th className="text-left text-[#50505e] py-3 pr-6 font-500">Receptors</th>
                    <th className="text-left text-[#50505e] py-3 pr-6 font-500">Avg. Weight Loss</th>
                    <th className="text-left text-[#50505e] py-3 pr-6 font-500">FDA Status</th>
                    <th className="text-left text-[#50505e] py-3 font-500">Key Downside</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { name: 'Semaglutide', rec: 'GLP-1', loss: '13.7–14.9%', status: 'Approved (Wegovy)', down: 'Lowest efficacy of the three' },
                    { name: 'Tirzepatide', rec: 'GLP-1 + GIP', loss: '20.2–22.5%', status: 'Approved (Zepbound)', down: 'More expensive, limited insurance' },
                    { name: 'Retatrutide', rec: 'GLP-1 + GIP + Glucagon', loss: '24.2–28.7%', status: 'Phase 3 (~2027)', down: 'Dysesthesia, not yet approved' },
                  ].map(r => (
                    <tr key={r.name}>
                      <td className="text-white font-600 py-3 pr-6">{r.name}</td>
                      <td className="text-[#d4a043] py-3 pr-6 text-[13px]">{r.rec}</td>
                      <td className="text-[#aaaabc] py-3 pr-6">{r.loss}</td>
                      <td className="text-[#aaaabc] py-3 pr-6 text-[13px]">{r.status}</td>
                      <td className="text-[#8888a0] py-3 text-[13px]">{r.down}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#8888a0] text-[14px] italic">Note: weight loss percentages from separate trials with different populations and durations. Direct head-to-head data pending TRIUMPH completion.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 04 — Side Effects */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Side Effects — Including the Dysesthesia Signal
            </h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Retatrutide shares the GI side effect profile of all GLP-1 agonists: nausea, vomiting, diarrhea, and constipation during dose escalation. These are dose-dependent and largely resolve after the escalation phase. Standard slow titration protocol mitigates most GI effects.</p>
            <p><strong className="text-white">The unique signal: dysesthesia.</strong> Unlike semaglutide and tirzepatide, retatrutide produced dysesthesia (abnormal skin sensations including tingling, numbness, and prickling) in 8.8%–20.9% of subjects across dose groups in Phase 2. This is attributed to the glucagon receptor component and is not seen with the other GLP-class compounds. In most cases it was mild to moderate and resolved with dose reduction.</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              {[
                { e: 'Nausea / Vomiting', freq: 'Common — GI class effect', manage: 'Slow escalation protocol' },
                { e: 'Dysesthesia', freq: '8.8–20.9% of patients', manage: 'Dose reduction, usually resolves' },
                { e: 'Constipation', freq: 'Common', manage: 'Fiber, hydration, time' },
                { e: 'Muscle loss (lean mass)', freq: 'Present — dose dependent', manage: 'Resistance training mandatory' },
              ].map(e => (
                <div key={e.e} className="card rounded-xl p-4">
                  <p className="text-white font-600 text-[14px] mb-1">{e.e}</p>
                  <p className="text-[#d4a043] text-[12px] mb-1">{e.freq}</p>
                  <p className="text-[#8888a0] text-[13px]">{e.manage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 05 — FDA Timeline */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              FDA Approval Timeline — What to Expect
            </h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>As of March 2026, retatrutide has not received FDA approval for any indication. The TRIUMPH obesity Phase 3 program is the primary pathway to approval. Based on current trial progress and standard FDA review timelines, the earliest realistic approval date for obesity is Q3–Q4 2027.</p>
            <p>The diabetes Phase 3 trial cleared its first readout in March 2026 — a significant milestone that increases confidence in the regulatory pathway, but does not accelerate the obesity approval timeline meaningfully.</p>
            <p>Key events to watch: TRIUMPH primary obesity endpoint data (expected late 2026), FDA NDA submission (2027), cardiovascular outcomes trial data (TRIUMPH-CV, ongoing).</p>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — How to Access Now */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              How to Access Retatrutide in 2026
            </h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Before FDA approval, retatrutide is available in lyophilized research peptide format from licensed vendors. This is the same format used for all research peptides — reconstituted with bacteriostatic water and administered subcutaneously per the researcher&apos;s protocol.</p>
            <p>Premium pharmaceutical-grade retatrutide is available with full certificate of analysis verification. The available formats (10mg, 30mg, 60mg) align with the dose ranges studied in TRIUMPH trials.</p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { name: 'Retatrutide 15mg', slug: 'retatrutide', url: `${AFF_BASE}/glp-3r-15mg/${REF}`, price: 'Starting Dose Format' },
                { name: 'Retatrutide 30mg', slug: 'retatrutide-30mg', url: `${AFF_BASE}/glp-3-r-30mg/${REF}`, price: 'Mid Protocol' },
                { name: 'Retatrutide 60mg', slug: 'retatrutide-60mg', url: `${AFF_BASE}/glp-3-r-60mg/${REF}`, price: 'Maximum Supply' },
              ].map(p => (
                <div key={p.name} className="card-elevated rounded-2xl p-5 flex flex-col">
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-2">{p.price}</p>
                  <p className="text-white font-700 text-[16px] mb-4 flex-1">{p.name}</p>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center py-3 text-[13px]">
                    View Product →
                  </a>
                </div>
              ))}
            </div>
            <p className="text-[#50505e] text-[13px] mt-4">For context while waiting: tirzepatide is the current best-approved option at 22.5% weight loss and is available now.</p>
            <Link href="/tirzepatide-vs-semaglutide-vs-retatrutide" className="inline-flex items-center gap-2 text-[#d4a043] text-[14px] hover:underline mt-2">
              Read the full GLP-1 comparison guide →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 07 — FAQ */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">07</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              { q: 'What is retatrutide?', a: 'Retatrutide is a triple agonist developed by Eli Lilly that activates GLP-1, GIP, and glucagon receptors simultaneously. Phase 3 TRIUMPH trials show 28.7% average body weight reduction — the highest ever recorded for a pharmacological weight loss intervention.' },
              { q: 'How does retatrutide compare to tirzepatide?', a: 'Retatrutide outperforms tirzepatide on weight loss (28.7% vs 22.5%) due to its additional glucagon receptor activation. However, retatrutide introduces a unique side effect — dysesthesia — not seen with tirzepatide, and remains unapproved as of 2026.' },
              { q: 'When will retatrutide be FDA approved?', a: 'Earliest Q3 2027 based on current Phase 3 timelines and standard FDA review periods. No submission date has been announced by Eli Lilly.' },
              { q: 'What should I use while waiting for retatrutide?', a: 'Tirzepatide is the strongest currently available option at 22.5% average body weight reduction. Semaglutide is an alternative at 14.9% for those who prefer the more established safety record.' },
            ].map((item, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="text-white font-600 text-[15px] mb-2">{item.q}</p>
                <p className="text-[#8888a0] text-[14px] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Related */}
      <section className="bg-[#0a0a0e] py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="label text-[#d4a043] mb-6">Related Guides</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/tirzepatide-vs-semaglutide-vs-retatrutide', label: 'Full GLP-1 Comparison', desc: 'Tirzepatide vs. Semaglutide vs. Retatrutide — side by side' },
              { href: '/body-composition', label: 'Body Composition Hub', desc: 'All peptides for fat loss, muscle, and recomposition' },
              { href: '/looksmaxxing-peptides-guide-men', label: 'Looksmaxxing Peptides: Men\'s Guide', desc: 'Body composition as a pillar of appearance optimization' },
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'How GLP-1 agonists stack with GH peptides for full body recomp' },
              { href: '/how-to-inject-peptides-beginners-guide', label: 'How to Inject Peptides', desc: 'Step-by-step subcutaneous injection guide for beginners' },
              { href: '/blog', label: 'All Peptide Guides', desc: 'Browse every in-depth protocol and research article' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="card rounded-xl p-5 group hover:border-[#d4a043]/20 transition-colors">
                <p className="text-[#d4a043] text-[12px] font-600 mb-2 group-hover:text-[#d4a043]">{r.label} →</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
