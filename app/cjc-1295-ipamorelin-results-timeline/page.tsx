import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CJC-1295 + Ipamorelin Results: Week-by-Week Timeline, Before & After & Protocol | PeptidesMuscle',
  description: 'Honest CJC-1295 Ipamorelin results timeline — what to expect week by week, CJC-1295 with DAC vs without DAC, dosing protocol, body composition changes, and how to optimize the stack.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/cjc-1295-ipamorelin-results-timeline' },
  keywords: 'CJC-1295 ipamorelin results timeline, cjc-1295 ipamorelin before and after, cjc ipamorelin results, cjc-1295 with dac vs without dac, cjc ipamorelin dosage protocol',
  openGraph: { title: 'CJC-1295 + Ipamorelin Results: Week-by-Week Timeline', description: 'What to really expect from CJC-1295/Ipamorelin — honest week-by-week timeline, DAC vs non-DAC, and dosing protocol.', url: 'https://www.peptidesmuscle.com/cjc-1295-ipamorelin-results-timeline', type: 'article', siteName: 'PeptidesMuscle', images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }] },
  twitter: { card: 'summary_large_image', title: 'CJC-1295 + Ipamorelin Results: Week-by-Week Timeline', description: 'Honest results timeline and protocol guide.', images: ['/max-avatar.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: 'CJC-1295 + Ipamorelin Results: Week-by-Week Timeline', datePublished: '2026-03-21', dateModified: '2026-03-21', publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' } },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What results can I expect from CJC-1295 Ipamorelin?', acceptedAnswer: { '@type': 'Answer', text: 'Week 1–2: Noticeably deeper sleep and improved recovery. Week 3–4: Enhanced energy levels and early body composition shifts. Week 6–8: Measurable reduction in subcutaneous fat, increased muscle fullness, improved skin quality. Week 10–12: Full GH optimization benefits — leaner physique, significantly improved body composition, dramatically better recovery capacity.' } },
        { '@type': 'Question', name: 'CJC-1295 with DAC vs without DAC — which is better?', acceptedAnswer: { '@type': 'Answer', text: 'CJC-1295 without DAC (CJC-1295 no-DAC or Mod-GRF 1-29) has a short half-life (~30 minutes) producing a sharp, pulsatile GH release — closer to natural GH physiology. CJC-1295 with DAC extends the half-life to 6–8 days, providing continuous GH elevation. For looksmaxxing and body composition, pulsatile (no-DAC) is generally preferred. DAC version is used when convenience (less frequent dosing) is a priority.' } },
        { '@type': 'Question', name: 'How long does a CJC-1295 Ipamorelin cycle last?', acceptedAnswer: { '@type': 'Answer', text: 'Standard cycles are 12–16 weeks, followed by 4–8 weeks off. Most users see meaningful body composition changes by weeks 8–10, with full protocol benefits at the 12-week mark. Some run continuous protocols for 6 months before cycling off.' } },
      ],
    },
  ],
}

const timeline = [
  { week: 'Week 1–2', title: 'Sleep & Recovery Shift', what: 'The most immediate and universal effect. Sleep depth improves dramatically — users consistently report waking feeling genuinely rested within the first week. Recovery from training accelerates. Some notice reduced joint soreness and improved morning energy. This is the GH pulse doing exactly what it is supposed to do: amplifying the nocturnal repair process.', icon: '💤' },
  { week: 'Week 3–4', title: 'Energy & Early Composition', what: 'Sustained energy increases throughout the day. Early body composition shifts become noticeable — some reduction in subcutaneous water retention, slight increase in muscle fullness post-workout. Libido often improves. Skin quality begins to show early changes — improved hydration and subtle elasticity improvement.', icon: '⚡' },
  { week: 'Week 5–8', title: 'Visible Body Composition Changes', what: 'This is where the protocol visually delivers. Subcutaneous fat reduction — particularly around the abdomen — becomes measurable. Muscle definition improves. Skin quality is noticeably improved: thicker, more luminous, and more elastic. These changes are driven by sustained GH elevation optimizing fat metabolism and tissue quality simultaneously.', icon: '📉' },
  { week: 'Week 9–12', title: 'Full Protocol Expression', what: 'Maximum benefit from the 12-week cycle. Body composition at this stage reflects months of optimized GH pulsing: leaner, more defined, better recovery capacity, and noticeably improved skin quality. Many users report this phase as transformative — the compound effects of consistent GH optimization become clearly visible.', icon: '🏆' },
  { week: 'Week 13–16', title: 'Extended Protocol (Optional)', what: 'For those running 16-week cycles: marginal additional body composition gains with diminishing returns. Primary value of extended protocols is maintenance and preventing the 4-week off-cycle regression. At 16 weeks, receptor sensitivity maintenance (4+ weeks off) becomes important.', icon: '📅' },
]

const AFF = (s: string) => `https://phiogen.is/products/${s}?ref=PEPS`

export default function CjcTimelinePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#6090ff] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Growth Hormone Protocol</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            CJC-1295 + Ipamorelin<br />
            <span className="italic" style={{ color: '#6090ff' }}>Results Timeline</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            Honest week-by-week expectations, DAC vs. non-DAC explained, full dosing protocol, and what actually drives the results you see.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Why the Combination Works</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>CJC-1295 activates the GHRH receptor — the receptor that tells the pituitary to release growth hormone. Ipamorelin activates the ghrelin receptor (GHSR) through a completely different pathway. Together, the two signals converge on the pituitary and produce GH pulses far greater than either could generate alone.</p>
            <p>Ipamorelin&apos;s critical advantage: selectivity. It triggers GH release without elevating cortisol, prolactin, or ACTH — meaning the full anabolic and lipolytic benefit of GH optimization is captured without hormonal interference. This is why CJC-1295/Ipamorelin consistently outperforms Ipamorelin alone, and why users tolerate it better than older GHRP compounds (GHRP-2, GHRP-6) that did elevate cortisol and appetite.</p>
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Week-by-Week Results Timeline</h2>
          </div>
          <div className="pl-10 space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-5 flex gap-4">
                <div className="flex-shrink-0 w-[90px]">
                  <p className="text-[#6090ff] font-700 text-[13px]">{t.week}</p>
                </div>
                <div>
                  <p className="text-white font-600 text-[15px] mb-2">{t.title}</p>
                  <p className="text-[#8888a0] text-[14px] leading-relaxed">{t.what}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>CJC-1295 With DAC vs. Without DAC</h2>
          </div>
          <div className="pl-10 space-y-4">
            <p className="text-[#8888a0] text-[16px] leading-relaxed mb-5">DAC (Drug Affinity Complex) is a modification that binds CJC-1295 to albumin in the bloodstream, extending its half-life from ~30 minutes to 6–8 days. This is not a minor difference — it fundamentally changes the pharmacological profile.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #6090ff' }}>
                <p className="text-white font-700 text-[15px] mb-3">Without DAC (Mod-GRF 1-29)</p>
                <ul className="space-y-2 text-[#8888a0] text-[13px]">
                  <li>• Half-life ~30 minutes — sharp, pulsatile GH release</li>
                  <li>• Closer to natural GH physiology</li>
                  <li>• Requires injection 2–3× daily</li>
                  <li>• Preferred for body composition and looksmaxxing</li>
                  <li>• Used in the standard CJC-1295/Ipamorelin blended vial</li>
                </ul>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #d4a043' }}>
                <p className="text-white font-700 text-[15px] mb-3">With DAC</p>
                <ul className="space-y-2 text-[#8888a0] text-[13px]">
                  <li>• Half-life 6–8 days — continuous elevated GH</li>
                  <li>• Only 1–2 injections per week needed</li>
                  <li>• Less physiological — blunts natural GH pulsatility</li>
                  <li>• Some evidence of increased IGF-1 elevation</li>
                  <li>• Preferred for convenience-focused protocols</li>
                </ul>
              </div>
            </div>
            <p className="text-[#50505e] text-[13px] italic mt-3">The pre-blended CJC-1295/Ipamorelin vial uses the non-DAC version — the standard for most research protocols.</p>
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Full Dosing Protocol</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              { label: 'Dose per injection', value: '100mcg CJC-1295 + 100mcg Ipamorelin (from pre-blended vial)', note: 'Some researchers dose up to 300mcg each — start at 100mcg to assess response' },
              { label: 'Injection frequency', value: '2–3× daily: pre-sleep (mandatory), AM (recommended), pre-workout (optional)', note: 'Pre-sleep timing is the most important — amplifies natural nocturnal GH pulse' },
              { label: 'Fasted requirement', value: 'Yes — inject at least 2 hours after last meal or 30 minutes before eating', note: 'Insulin blunts GH response. This is non-negotiable for optimal results.' },
              { label: 'Cycle length', value: '12–16 weeks on, 4–8 weeks off', note: 'Most meaningful results appear at weeks 8–12. Extended cycles beyond 16 weeks show diminishing returns.' },
              { label: 'Injection site', value: 'Subcutaneous — abdomen, thigh, or deltoid (pinch and inject at 45°)', note: 'No need to inject near muscle groups. SubQ absorption is consistent.' },
            ].map(d => (
              <div key={d.label} className="card rounded-xl p-4">
                <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">{d.label}</p>
                <p className="text-white text-[14px] font-600 mb-1">{d.value}</p>
                <p className="text-[#8888a0] text-[13px] italic">{d.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get CJC-1295 / Ipamorelin</h2>
          <div className="card-elevated rounded-2xl p-6">
            <p className="text-[#50505e] text-[12px] uppercase tracking-widest mb-2">Pre-Blended Formula</p>
            <p className="text-white font-700 text-[18px] mb-2">CJC-1295 / Ipamorelin</p>
            <p className="text-[#8888a0] text-[14px] leading-relaxed mb-5">Pre-blended 5mg/5mg vial — both compounds in one vial eliminates the complexity of separate dosing and reconstitution.</p>
            <div className="flex gap-3">
              <a href="/go/cjc1295-ipamorelin"
                          target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
              <Link href="/products/cjc-1295-ipamorelin" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Full Product Info</Link>
            </div>
          </div>
        </div>

        <div className="rule" />

        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/looksmaxxing-routine-daily-protocol', label: 'Looksmaxxing Daily Routine', desc: 'Where CJC-1295/Ipamorelin fits in the full daily peptide schedule' },
              { href: '/looksmaxxing-peptides-guide-men', label: 'Looksmaxxing Peptides: Men\'s Guide', desc: 'Body composition as one of four looksmaxxing pillars' },
              { href: '/how-to-inject-peptides-beginners-guide', label: 'How to Inject Peptides', desc: 'Reconstitution, dosing, and injection technique for beginners' },
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'How CJC-1295/Ipamorelin stacks with BPC-157, GHK-Cu, and others' },
              { href: '/epithalon-anti-aging-telomere-peptide-guide', label: 'Epithalon Anti-Aging Guide', desc: 'Stack with GH peptides for the full anti-aging + body recomp protocol' },
              { href: '/blog', label: 'All Peptide Guides', desc: 'Browse every in-depth protocol and research article' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="card rounded-xl p-5 group hover:border-[#6090ff]/20 transition-colors">
                <p className="text-[#6090ff] text-[13px] font-600 mb-1 group-hover:underline">{r.label} →</p>
                <p className="text-[#8888a0] text-[13px]">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
