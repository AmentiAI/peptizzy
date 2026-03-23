import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Epithalon (Epitalon) Complete Guide 2026: Telomere Science, Dosing Protocol & Anti-Aging Stack | PeptidesMuscle',
  description: 'Complete Epithalon guide 2026. Telomere lengthening mechanism, clinical research, dosing protocol (5–10mg × 10–20 days), anti-aging stack with GHK-Cu and NAD+, and what to realistically expect.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/epithalon-anti-aging-telomere-peptide-guide' },
  keywords: 'epithalon anti-aging guide, epithalon telomere peptide, epitalon dosage protocol, epithalon before and after, epithalon vs rapamycin longevity, epithalon results how long',
  openGraph: { title: 'Epithalon (Epitalon) Complete Guide 2026: Telomere Science & Protocol', description: 'Telomere lengthening mechanism, clinical research, dosing protocol, and realistic expectations from the only known telomerase-activating peptide.', url: 'https://www.peptidesmuscle.com/epithalon-anti-aging-telomere-peptide-guide', type: 'article', siteName: 'PeptidesMuscle' },
  twitter: { card: 'summary_large_image', title: 'Epithalon Complete Guide 2026: Telomere Science & Anti-Aging Protocol', description: 'The only telomerase-activating peptide — mechanism, dosing, and clinical evidence.' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: 'Epithalon (Epitalon) Complete Guide 2026: Telomere Science, Dosing Protocol & Anti-Aging Stack', datePublished: '2026-03-21', dateModified: '2026-03-21', publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' } },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does Epithalon do?', acceptedAnswer: { '@type': 'Answer', text: 'Epithalon (Ala-Glu-Asp-Gly) is a synthetic tetrapeptide derived from Epithalamin, a natural extract of the pineal gland. Its primary documented mechanism is activation of telomerase — the enzyme responsible for maintaining and extending telomere length. It also stimulates melatonin production, regulates circadian rhythm function, and has documented antioxidant activity. Across 35+ years of Russian research (initiated by Dr. Vladimir Khavinson), Epithalon is associated with increased lifespan in animal models and improved biomarkers of biological age in human trials.' } },
        { '@type': 'Question', name: 'What is the Epithalon dosing protocol?', acceptedAnswer: { '@type': 'Answer', text: 'The standard Epithalon protocol is 5–10mg daily, injected subcutaneously, for 10–20 consecutive days. This is cycled 1–2 times per year. Most researchers use 10mg daily for 10 days (2x per year) or 5mg daily for 20 days (1–2x per year). The course-based approach (not continuous) reflects the original Khavinson research methodology and is the established protocol for telomere-targeting use.' } },
        { '@type': 'Question', name: 'How long does it take to see results from Epithalon?', acceptedAnswer: { '@type': 'Answer', text: 'Sleep quality improvement (from melatonin pathway activation) is typically noticeable within the first week of a course. Skin and anti-aging effects require multiple cycles — meaningful changes in biological age markers are seen over 6–12 months of cyclical use. Telomere length changes occur at the cellular level over extended time periods and are not directly perceivable. The compound is a long-game intervention, not a quick-result compound.' } },
        { '@type': 'Question', name: 'Is Epithalon safe?', acceptedAnswer: { '@type': 'Answer', text: 'Epithalon has one of the longest research records of any research peptide. The Khavinson Institute has studied it for 35+ years, including human trials. No significant adverse effects have been documented in the literature at standard doses. As with all research peptides, it is not FDA-approved for human use. The side effect profile in documented research has been minimal — mild injection site reactions are the most reported event.' } },
      ],
    },
  ],
}

const AFF = (s: string) => `https://apollopeptidesciences.com/product/${s}/?rfsn=9016964.3f1b1e`

export default function EpithalonGuidePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[400px] bg-[#a060ff] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Longevity Peptide Guide</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            Epithalon (Epitalon):<br />
            <span className="italic" style={{ color: '#a060ff' }}>Complete 2026 Guide</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            The telomerase-activating tetrapeptide. 35 years of research, clinical data, the standard dosing protocol, and honest expectations for anti-aging and longevity use.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>The Telomere Biology</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Telomeres are the protective caps at the end of each chromosome — analogous to the plastic tips on shoelaces. Every time a cell divides, the telomere shortens slightly. When telomeres reach critically short length, the cell enters senescence (stops dividing) or undergoes apoptosis. Accumulated senescent cells are a primary driver of the inflammatory, degenerative processes we recognize as aging.</p>
            <p>Telomerase is the enzyme that rebuilds telomere length. It is highly active in stem cells and germ cells but nearly inactive in most adult somatic cells — meaning the shortening ratchet operates in one direction throughout adult life.</p>
            <p>Epithalon&apos;s documented mechanism: it upregulates telomerase activity in human somatic cells, allowing partial telomere length restoration. This is the only known peptide with this specific mechanism, which is why it occupies a unique position in longevity protocols.</p>
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What the Research Shows</h2>
          </div>
          <div className="pl-10 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {[
                { finding: 'Telomere lengthening', detail: 'Demonstrated in human somatic cells in vitro — telomerase activation led to measurable telomere extension across multiple cell types.', type: 'In vitro' },
                { finding: '33–68% lifespan increase', detail: 'Mice and fruit fly studies showed significant lifespan extension with Epithalon treatment. Animal models are not directly translatable to humans.', type: 'Animal model' },
                { finding: 'Cancer incidence reduction', detail: 'Multiple animal studies showed significant reduction in spontaneous tumor formation in Epithalon-treated groups vs controls.', type: 'Animal model' },
                { finding: 'Melatonin restoration', detail: 'Human trials (elderly patients) showed normalization of blunted melatonin rhythms — directly improving sleep architecture and circadian function.', type: 'Human trial' },
                { finding: 'Immune function improvement', detail: 'Human studies showed improvements in T-lymphocyte activity and immune parameters in elderly trial participants.', type: 'Human trial' },
                { finding: 'Reduced oxidative stress', detail: 'Multiple studies documented antioxidant effects — reduction in lipid peroxidation and improvement in superoxide dismutase activity.', type: 'Human trial' },
              ].map(f => (
                <div key={f.finding} className="card rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-600 text-[13px]">{f.finding}</p>
                    <span className="text-[11px] px-2 py-0.5 rounded border border-white/10" style={{ color: f.type === 'Human trial' ? '#a060ff' : '#50505e' }}>{f.type}</span>
                  </div>
                  <p className="text-[#8888a0] text-[12px] leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-[#50505e] text-[13px] italic">Research primarily from the St. Petersburg Institute of Bioregulation and Gerontology (Khavinson et al.), spanning 1980–2024. Most human studies are small and lack large-scale RCT validation by Western standards — but the research record is more extensive than virtually any other research peptide.</p>
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dosing Protocol</h2>
          </div>
          <div className="pl-10 space-y-3">
            {[
              { label: 'Standard dose', value: '5–10mg per injection', note: 'Most researchers use 10mg daily for shorter courses, or 5mg for longer courses' },
              { label: 'Course length', value: '10–20 consecutive days', note: 'The course-based protocol (not daily continuous use) reflects original Khavinson methodology' },
              { label: 'Cycle frequency', value: '1–2 courses per year', note: '2 courses/year is the most common protocol. Spring and fall timing is conventional.' },
              { label: 'Injection method', value: 'Subcutaneous (SubQ)', note: 'Standard abdominal or thigh injection site. Same technique as other peptides.' },
              { label: 'Timing', value: 'Any time of day — no fasting requirement', note: 'Unlike GH peptides, Epithalon has no insulin-interaction concern. Morning is conventional.' },
              { label: 'Stack with', value: 'GHK-Cu (3× weekly) + NAD+ (optional)', note: 'GHK-Cu addresses skin-level aging; NAD+ addresses cellular energy. The three-layer anti-aging stack.' },
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
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Realistic Expectations by Timeline</h2>
          </div>
          <div className="pl-10 space-y-3">
            {[
              { period: 'During course (days 1–10/20)', what: 'Improved sleep quality is the most consistent early finding — melatonin pathway activation is rapid. Some users report improved dream recall and deeper sleep within the first week.' },
              { period: 'Months 1–3 (post-first course)', what: 'Skin quality improvements from GHK-Cu stack become visible. Epithalon\'s cellular effects are operating at a level not directly perceivable. Energy and mood may be subtly improved.' },
              { period: 'Months 6–12 (second course and beyond)', what: 'Cumulative anti-aging effects build across cycles. Biological age markers (inflammatory markers, immune function, oxidative stress markers) show measurable improvement in documented research. The compound is a long-game intervention.' },
              { period: 'Long-term (2–5 year consistent cycling)', what: 'The timeframe where telomere-level effects have a meaningful impact on biological age rate of progression. This is not visible in a before/after photo — it is measured in reduced rate of aging, not reversal of specific symptoms.' },
            ].map(t => (
              <div key={t.period} className="card rounded-xl p-5">
                <p className="text-[#a060ff] font-700 text-[13px] mb-2">{t.period}</p>
                <p className="text-[#8888a0] text-[14px] leading-relaxed">{t.what}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>The Complete Anti-Aging Stack</h2>
          </div>
          <div className="pl-10 space-y-3">
            {[
              { name: 'Epithalon', role: 'Chromosomal level — telomere restoration', dose: '10mg daily × 10 days, 2× yearly', href: '/products/epithalon', color: '#a060ff' },
              { name: 'GHK-Cu', role: 'Gene expression level — skin anti-aging', dose: '1mg SubQ 3× weekly', href: '/products/ghk-cu', color: '#d4a043' },
              { name: 'NAD+ (if available)', role: 'Cellular energy level — sirtuin activation', dose: '250–500mg per session', href: '/products', color: '#40c090' },
            ].map(c => (
              <div key={c.name} className="card-elevated rounded-xl p-5 flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-white font-700 text-[15px]">{c.name}</p>
                  <p className="text-[12px] mt-0.5" style={{ color: c.color }}>{c.role}</p>
                  <p className="text-[#8888a0] text-[12px] mt-1">{c.dose}</p>
                </div>
                <Link href={c.href} className="btn-ghost py-2 px-4 text-[12px]">View →</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get Epithalon</h2>
          <div className="card-elevated rounded-2xl p-6">
            <p className="text-[#50505e] text-[12px] uppercase tracking-widest mb-2">Longevity Peptide</p>
            <p className="text-white font-700 text-[18px] mb-2">Epithalon (Epitalon)</p>
            <p className="text-[#8888a0] text-[14px] leading-relaxed mb-5">Research-grade Epithalon tetrapeptide. 10mg vials for the standard 10-day course protocol. The most extensively researched peptide in longevity science.</p>
            <div className="flex gap-3">
              <a href={AFF('epithalon')} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy on Apollo →</a>
              <Link href="/products/epithalon" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Full Product Info</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
