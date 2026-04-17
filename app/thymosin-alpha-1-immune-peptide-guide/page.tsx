import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: "Thymosin Alpha-1: The Immune System's Master Regulator | PeptidesMuscle",
  description: 'Complete Thymosin Alpha-1 guide. FDA-approved in 36 countries for immune support, TA-1 mechanism, T-cell maturation, clinical applications for viral infections, autoimmunity, and chronic fatigue, with full dosing protocol.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/thymosin-alpha-1-immune-peptide-guide' },
  keywords: 'thymosin alpha-1 guide, Thymosin Alpha-1 immune peptide, TA-1 dosing protocol, thymosin alpha-1 T-cells, Zadaxin guide, thymosin alpha-1 autoimmune, thymosin alpha-1 viral infection',
  openGraph: {
    title: "Thymosin Alpha-1: The Immune System's Master Regulator | PeptidesMuscle",
    description: 'FDA-approved in 36 countries. How Thymosin Alpha-1 restores thymic function, matures T-cells, and rebalances immune competence — complete protocol and clinical context.',
    url: 'https://www.peptidesmuscle.com/thymosin-alpha-1-immune-peptide-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Thymosin Alpha-1 Complete Guide | PeptidesMuscle",
    description: 'The immune peptide approved in 36 countries. T-cell maturation, NK cell activation, clinical applications, and complete dosing protocol.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: "Thymosin Alpha-1: The Immune System's Master Regulator",
      datePublished: '2026-04-13',
      dateModified: '2026-04-13',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com', logo: { '@type': 'ImageObject', url: 'https://www.peptidesmuscle.com/max-avatar.png' } },
      author: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent', name: 'LooksMax Agent', url: 'https://www.peptidesmuscle.com/about/editors' },
      reviewedBy: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Thymosin Alpha-1 do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thymosin Alpha-1 (Tα-1) is a 28-amino-acid peptide naturally produced by the thymus gland. It is the master regulator of adaptive immunity: it drives T-cell maturation and differentiation, promotes Th1 cytokine balance (favoring pathogen clearance over allergy/inflammation), activates NK (natural killer) cells, and enhances dendritic cell function. In clinical use across 36 countries (as Zadaxin), it is approved for viral hepatitis B and C, and as an adjunct to chemotherapy to prevent immunosuppression. As a research compound, it is used for immune restoration, chronic infections, autoimmune modulation, and chronic fatigue.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Thymosin Alpha-1 dosing protocol?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The standard Thymosin Alpha-1 protocol mirrors the clinically validated Zadaxin dosing: 1.6mg subcutaneously, 2–3 times per week. For immune restoration and general use, cycle 4–8 weeks. For acute illness or viral infections, daily dosing of 1.6mg for 7–14 days is used in clinical settings. Thymosin Alpha-1 has no receptor desensitization — it can be cycled repeatedly without diminishing returns. Most users run 2 cycles per year for immune maintenance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Thymosin Alpha-1 safe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thymosin Alpha-1 (as Zadaxin) has been used in clinical practice for over 25 years and approved in 36 countries. Its safety profile is excellent: the most reported adverse effect is mild injection site irritation. No immunosuppression, no hormonal disruption, no organ toxicity have been documented. Unlike immunosuppressants, it does not broadly suppress immunity — it restores competent immune function. This distinguishes it from most immunomodulatory drugs, which come with serious side effect profiles.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Thymosin Alpha-1 help with autoimmune conditions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thymosin Alpha-1\'s immunomodulatory properties include restoration of regulatory T-cell (Treg) function, which is dysregulated in most autoimmune conditions. By promoting Th1/Th2 balance and restoring normal immune tolerance mechanisms, TA-1 may reduce autoimmune activity without the broad immunosuppression of conventional treatments. Clinical research in hepatitis, lupus, and Sjogren\'s syndrome shows benefit. For autoimmunity driven by leaky gut or chronic infection, addressing these root causes alongside TA-1 produces the best results.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Thymosin Alpha-1 compare to other immune peptides?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thymosin Alpha-1 is the most extensively clinically validated immune peptide. BPC-157 addresses gut immune dysfunction (GALT-mediated). KPV reduces intestinal inflammation. Epithalon restores thymic tissue via telomere lengthening in thymic cells. TA-1 operates systemically on mature adaptive immunity — T-cells, NK cells, dendritic cells — making it the most directly immune-targeted compound. For comprehensive immune optimization, TA-1 is typically the centerpiece, with BPC-157 and Epithalon as complementary agents.',
          },
        },
      ],
    },
  ],
}

const accent = '#a78bfa'

const thymusMechanisms = [
  {
    title: 'T-Cell Maturation',
    body: 'The thymus gland is where immature T-cells (thymocytes) are educated into functional, self-tolerant lymphocytes. Thymosin Alpha-1 is the primary thymic hormone driving this maturation process. It promotes differentiation of thymocytes into CD4+ helper T-cells and CD8+ cytotoxic T-cells, expanding the body\'s capacity to mount antigen-specific adaptive immune responses. As thymic output declines with age, TA-1 supplementation partially compensates for lost thymic function.',
  },
  {
    title: 'Th1 Cytokine Balance',
    body: 'The immune system\'s response character is determined by the balance between Th1 (cellular immunity — pathogen clearance, tumor surveillance) and Th2 (humoral immunity — allergy, inflammation) cytokine profiles. Modern life — chronic stress, poor sleep, dysbiosis, environmental toxins — skews immunity toward Th2 dominance, reducing pathogen clearance capacity and increasing inflammatory and allergic responses. TA-1 strongly promotes Th1 cytokine production (IL-2, IFN-γ, TNF-α in appropriate contexts), restoring immune balance.',
  },
  {
    title: 'NK Cell Activation',
    body: 'Natural killer (NK) cells are the innate immune system\'s primary defense against virally infected cells and tumor cells. They do not require prior antigen sensitization — they kill any cell displaying aberrant surface markers. TA-1 increases NK cell number and cytotoxic activity, directly enhancing viral clearance capacity and tumor immunosurveillance. This NK-activating effect is one of the key reasons TA-1 is used as cancer immunotherapy adjunct in clinical settings.',
  },
  {
    title: 'Dendritic Cell Function',
    body: 'Dendritic cells are the immune system\'s professional antigen-presenting cells — they capture pathogens, process antigens, and present them to T-cells to initiate adaptive responses. TA-1 enhances dendritic cell maturation and function, improving antigen presentation efficiency and the quality of the T-cell response mounted against new pathogens. This mechanism contributes to TA-1\'s effectiveness when used alongside vaccines — it amplifies the adaptive immune response to vaccination.',
  },
]

const clinicalApplications = [
  {
    condition: 'Viral Infections (Hepatitis B, C, HIV)',
    evidence: 'Highest clinical evidence',
    color: accent,
    detail: 'Zadaxin is approved for chronic hepatitis B and C in 36 countries. Randomized controlled trials demonstrate accelerated viral clearance, improved seroconversion rates, and reduced hepatic inflammation. In HIV, TA-1 increases CD4+ T-cell counts and reduces opportunistic infection frequency. The mechanism is direct enhancement of antiviral cellular immunity — the Th1-dominant immune response required to clear intracellular viral pathogens.',
  },
  {
    condition: 'Autoimmune Modulation',
    evidence: 'Clinical trials + mechanistic data',
    color: '#6090ff',
    detail: 'TA-1 normalizes regulatory T-cell (Treg) function — the suppressor cells that prevent immune self-attack. In autoimmune states (Hashimoto\'s, lupus, Sjogren\'s, RA), Treg dysfunction allows immune cells to attack self-tissue. TA-1\'s Treg-restoring effect reduces autoimmune activity. Crucially, it does this without broad immunosuppression — preserving pathogen defense while reducing the misdirected self-attack. This selectivity makes it superior to corticosteroids or biologics for long-term immune normalization.',
  },
  {
    condition: 'Cancer Adjunct Immunotherapy',
    evidence: 'Multiple RCTs, approved use',
    color: '#d4a043',
    detail: 'TA-1 is used in clinical oncology as an adjunct to chemotherapy and radiation to prevent treatment-induced immunosuppression. Multiple randomized trials demonstrate that TA-1 administration during chemotherapy maintains immune cell counts, reduces infection-related hospitalizations, and improves treatment completion rates. It also appears to potentiate direct anti-tumor immune responses through NK cell and cytotoxic T-cell activation.',
  },
  {
    condition: 'Chronic Fatigue & Post-Viral Syndrome',
    evidence: 'Mechanistic + anecdotal',
    color: '#40c090',
    detail: 'Chronic fatigue syndrome (ME/CFS) and post-viral fatigue (including post-COVID) are characterized by persistent immune dysregulation — elevated inflammatory cytokines, NK cell dysfunction, and impaired cellular immunity. TA-1 addresses these immune abnormalities directly. Users and clinicians report significant improvement in fatigue, cognitive function, and exercise tolerance. The mechanisms align well with post-viral immune pathology, making TA-1 one of the most rationally targeted compounds for this indication.',
  },
]

const stacks = [
  {
    partner: 'BPC-157',
    role: 'Gut Immune Barrier',
    color: '#40c090',
    rationale: 'Approximately 70% of the immune system resides in gut-associated lymphoid tissue (GALT). Leaky gut chronically dysregulates this immune machinery — producing systemic inflammation and autoimmune signals that counteract TA-1\'s immune-normalizing effects. BPC-157 repairs the gut barrier that is driving immune dysfunction, while TA-1 simultaneously normalizes systemic immune response. Together, they address gut-immune axis pathology at both ends — structural repair and immune rebalancing.',
    protocol: 'BPC-157: 250–500mcg oral 2x daily or SubQ. Thymosin Alpha-1: 1.6mg SubQ 2–3x weekly. Run concurrently for 8–12 weeks.',
    href: '/bpc-157-complete-guide',
  },
  {
    partner: 'Epithalon',
    role: 'Thymic Regeneration',
    color: '#a060ff',
    rationale: 'The thymus involutes (shrinks and loses function) progressively after puberty. By age 40, most adults have severely diminished thymic tissue — a primary driver of immunosenescence. Epithalon works through a fundamentally different mechanism than TA-1: it activates telomerase in thymic cells, preserving and potentially restoring thymic tissue at the cellular level. TA-1 optimizes the function of the thymic hormone axis. Epithalon preserves the gland itself. The combination addresses thymic aging at both the hormonal and structural level.',
    protocol: 'Epithalon: 5–10mg daily for 10 consecutive days (cyclical). Run Thymosin Alpha-1 concurrently during and for 4–8 weeks after the Epithalon course.',
    href: '/epithalon-anti-aging-telomere-peptide-guide',
  },
]

export default function ThymosinAlpha1GuidePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[550px] h-[400px] bg-[#a78bfa] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Immune Peptide Guide</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            Thymosin Alpha-1:<br />
            <span className="italic" style={{ color: accent }}>The Immune System&apos;s Master Regulator</span>
          </h1>
      <AuthorByline datePublished="2026-04-13" dateModified="2026-04-13" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            FDA-approved in 36 countries as Zadaxin. The most clinically validated immune peptide in existence — how it works, who it helps, and the complete protocol for immune restoration and optimization.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="tag-gold text-[12px] px-3 py-1 rounded-full">Approved in 36 countries</span>
            <span className="tag text-[12px] px-3 py-1 rounded-full" style={{ background: `${accent}18`, color: accent }}>25+ years clinical use</span>
            <span className="tag text-[12px] px-3 py-1 rounded-full bg-[#1a1a2e] text-[#8888a0]">T-cell maturation</span>
          </div>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — THYMUS AGING & TA-1 MECHANISM */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>The Thymus Gland &amp; What TA-1 Does</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>The thymus is a specialized primary lymphoid organ located behind the sternum. It is the &quot;school&quot; of the adaptive immune system — the place where naive T-cells are educated into competent, self-tolerant lymphocytes capable of distinguishing pathogens from the body&apos;s own tissue. Without thymic education, T-cells are either non-functional or potentially self-attacking.</p>
            <p>The problem: the thymus involutes (functionally deteriorates) progressively beginning at puberty. By age 40, most adults have lost 70–80% of functional thymic tissue. By age 65, thymic function is negligible. This decline is a primary driver of immunosenescence — the age-related deterioration in immune competence that makes older adults more susceptible to infections, cancers, and autoimmune dysregulation.</p>
            <p>Thymosin Alpha-1 is the primary thymic hormone responsible for T-cell maturation. First isolated by Allan Goldstein in 1977, TA-1 is a 28-amino-acid peptide that drives the differentiation of thymocytes into mature, functional T-lymphocytes. Synthetic TA-1 (Zadaxin) provides this thymic signaling systemically, partially compensating for the loss of functional thymic output with age.</p>
          </div>

          <div className="pl-10 mt-8 grid sm:grid-cols-2 gap-4">
            {thymusMechanisms.map((m, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{m.title}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 02 — CLINICAL APPLICATIONS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Clinical Applications</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed mb-6">
            <p>Thymosin Alpha-1&apos;s clinical validation spans multiple therapeutic areas. As Zadaxin, it is registered and prescribed in 36 countries across Asia, Europe, and Latin America. Its applications range from the approved indications (viral hepatitis, chemotherapy adjunct) to well-documented off-label uses in autoimmunity, chronic fatigue, and general immune optimization.</p>
          </div>
          <div className="pl-10 space-y-4">
            {clinicalApplications.map((app, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${app.color}` }}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="text-white font-700 text-[15px]">{app.condition}</p>
                  <span className="tag text-[11px] px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: `${app.color}18`, color: app.color }}>{app.evidence}</span>
                </div>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{app.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 03 — RESULTS TIMELINE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Results Timeline</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              {
                period: 'Weeks 1–2',
                what: 'Acute immune boost. NK cell activity increases within the first week. Users report reduced severity of any concurrent infections. Energy levels and sense of immune resilience begin to improve. Some users notice improved sleep quality and reduced inflammatory symptoms (joint ache, brain fog) within the first 10 days.',
                note: 'The initial response is primarily innate immune activation — NK cells and dendritic cell function — before the slower adaptive T-cell effects mature.',
              },
              {
                period: 'Weeks 3–4',
                what: 'T-cell maturation effects becoming measurable. If running bloodwork, CD4+ and CD8+ T-cell counts may show improvement. Adaptive immune competence strengthening — infections encountered during this period typically resolve faster than baseline. Autoimmune symptoms (when applicable) may begin showing measurable reduction.',
                note: 'Adaptive immunity is slower to manifest than innate changes. Clinical trials measure T-cell changes at 4–8 week time points.',
              },
              {
                period: 'Weeks 4–8',
                what: 'Sustained immune competence established. Th1/Th2 balance normalizing — users with allergic or autoimmune tendencies often report reduced symptom burden. Post-viral fatigue and chronic fatigue users typically report meaningful energy improvement by week 6. Inflammatory markers (CRP, IL-6) may normalize in chronically elevated individuals.',
                note: 'The 4–8 week range is where most users find the primary therapeutic benefit — immune resilience, reduced fatigue, improved inflammatory balance.',
              },
              {
                period: 'Long-Term (Repeat Cycles)',
                what: 'Most users run 2 cycles per year for sustained immune maintenance. Each cycle maintains T-cell maturation output and Th1 balance between treatments. Anti-aging immune preservation benefits are cumulative — regular TA-1 use represents a rational immunological longevity strategy, partially compensating for ongoing thymic involution.',
                note: 'Unlike stimulant-based immune compounds, there is no desensitization or rebound — each cycle provides additive benefit.',
              },
            ].map((t, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{t.period}</p>
                <p className="text-[#aaaabc] text-[13px] leading-relaxed mb-3">{t.what}</p>
                <p className="text-[#50505e] text-[12px] italic">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 04 — PROTOCOL */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dosing Protocol</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">
              The standard TA-1 dosing protocol mirrors the clinically validated Zadaxin regimen exactly. No improvised protocol has been shown to outperform the established clinical dosing — and the clinical dosing is based on decades of pharmacokinetic and efficacy data.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[15px] mb-3">Standard Protocol (Immune Maintenance)</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                    <p className="text-[#aaaabc] text-[13px]">1.6mg subcutaneously</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">FREQUENCY</p>
                    <p className="text-[#aaaabc] text-[13px]">2–3 times per week (e.g., Monday / Thursday or Mon / Wed / Fri)</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">CYCLE LENGTH</p>
                    <p className="text-[#aaaabc] text-[13px]">4–8 weeks. Repeat 1–2 times per year for maintenance.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">INJECTION SITE</p>
                    <p className="text-[#aaaabc] text-[13px]">Subcutaneous — abdomen, outer thigh, or upper arm. Rotate sites.</p>
                  </div>
                </div>
              </div>

              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #d4a043' }}>
                <p className="text-white font-700 text-[15px] mb-3">Acute Illness Protocol</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                    <p className="text-[#aaaabc] text-[13px]">1.6mg subcutaneously</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">FREQUENCY</p>
                    <p className="text-[#aaaabc] text-[13px]">Daily dosing during active illness</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DURATION</p>
                    <p className="text-[#aaaabc] text-[13px]">7–14 days. Used in clinical settings for acute viral infections.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">BEST FOR</p>
                    <p className="text-[#aaaabc] text-[13px]">Acute viral infections, post-exposure prophylaxis, or pre-travel immune priming.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Reconstitution', val: 'Mix with 1–2ml bacteriostatic water per vial. Standard dilution: 1ml bac water per 10mg vial = 1,600mcg per 0.16ml. Use an insulin syringe for subcutaneous administration.' },
                { label: 'Storage', val: 'Lyophilized powder: refrigerate. Reconstituted: refrigerate, use within 28 days. Freeze unmixed vials for long-term storage up to 24 months.' },
                { label: 'Timing', val: 'No specific timing requirements relative to food. Many users inject in the morning for consistency. Injections on training days are fine — no interaction with exercise.' },
                { label: 'Safety Note', val: 'TA-1 is not an immunosuppressant and does not require PCT or cycling breaks. No receptor downregulation has been documented. Safe for long-term maintenance use at 2x per year cycle frequency.' },
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

        {/* 05 — STACKING */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Stacking with Other Peptides</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed mb-6">
            <p>Thymosin Alpha-1 is the systemic immune regulator — it optimizes adaptive immunity at the T-cell and NK cell level. Two other peptides address complementary dimensions of immune health: the gut-immune barrier and thymic tissue preservation. Together they form a comprehensive immune optimization protocol.</p>
          </div>
          <div className="pl-10 space-y-4">
            {stacks.map((s, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderTop: `2px solid ${s.color}` }}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="text-white font-700 text-[16px]">{s.partner}</p>
                    <p className="text-[12px] mt-0.5" style={{ color: s.color }}>{s.role}</p>
                  </div>
                </div>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">{s.rationale}</p>
                <div className="bg-[#0a0a14] rounded-lg p-3 mb-3">
                  <p className="text-[#50505e] text-[11px] mb-1">COMBINED PROTOCOL</p>
                  <p className="text-[#aaaabc] text-[13px] leading-relaxed">{s.protocol}</p>
                </div>
                <Link href={s.href} className="text-[13px] hover:underline" style={{ color: s.color }}>
                  Full {s.partner} Guide →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 06 — PRODUCT CARDS */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get Thymosin Alpha-1</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-[#50505e] text-[12px] uppercase tracking-widest mb-2">Primary Protocol</p>
              <p className="text-white font-700 text-[18px] mb-1">Thymosin Alpha-1</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">
                Research-grade Thymosin Alpha-1. Identical sequence to Zadaxin. Certificate of analysis verified. 10mg vials — sufficient for a full 4–8 week maintenance cycle at 1.6mg 2–3x weekly.
              </p>
              <div className="flex gap-3">
                <a href="/go/thymosin-alpha-1-10mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/thymosin-alpha-1-10mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-[#50505e] text-[12px] uppercase tracking-widest mb-2">Anti-Aging Stack</p>
              <p className="text-white font-700 text-[18px] mb-1">Epithalon (Epitalon)</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">
                The telomerase-activating tetrapeptide. Preserves thymic tissue at the cellular level through telomere maintenance. Pair with Thymosin Alpha-1 for comprehensive thymic and immune anti-aging.
              </p>
              <div className="flex gap-3">
                <a href="/go/epitalon-50mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/epitalon-50mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 07 — FAQ */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">07</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Frequently Asked Questions</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              {
                q: 'What does Thymosin Alpha-1 do?',
                a: 'TA-1 is the thymus gland\'s primary signaling hormone for T-cell maturation. It drives differentiation of immature thymocytes into functional CD4+ and CD8+ T-lymphocytes, promotes Th1 cytokine balance (critical for pathogen clearance and anti-tumor immunity), activates NK cells, and enhances dendritic cell antigen presentation. As the thymus involutes with age, TA-1 supplementation provides this hormonal signal systemically — partially restoring adaptive immune competence.',
              },
              {
                q: 'What is the dosing protocol for Thymosin Alpha-1?',
                a: 'The validated clinical protocol: 1.6mg subcutaneously, 2–3 times per week, for 4–8 weeks. For acute viral illness, daily dosing of 1.6mg for 7–14 days is used clinically. For long-term immune maintenance, most users run 2 cycles per year. No titration is required and there is no receptor desensitization.',
              },
              {
                q: 'Is Thymosin Alpha-1 safe?',
                a: 'As Zadaxin, TA-1 has been used clinically for 25+ years and approved in 36 countries. The safety record is excellent: no immunosuppression, no hormonal disruption, no organ toxicity. The most common reported event is mild injection site irritation. It does not require PCT or post-cycle management. Unlike immunosuppressants, it restores competent immune function rather than broadly suppressing immunity.',
              },
              {
                q: 'Can Thymosin Alpha-1 help autoimmune conditions?',
                a: 'TA-1 restores regulatory T-cell (Treg) function, which is dysregulated in autoimmune states. Tregs suppress self-reactive immune attacks — their dysfunction allows autoimmunity to progress. TA-1\'s Treg-restoring mechanism reduces autoimmune activity without broad immunosuppression. It is particularly valuable when autoimmunity is driven by gut permeability or chronic infection — addressing these root causes alongside TA-1 produces the most complete response.',
              },
              {
                q: 'How does Thymosin Alpha-1 compare to other immune peptides?',
                a: 'TA-1 is the most clinically validated immune peptide — the only one with FDA-equivalent approval in multiple countries and randomized controlled trial data. BPC-157 addresses gut immune dysfunction. KPV reduces intestinal inflammation. Epithalon preserves thymic tissue via telomere maintenance. TA-1 operates systemically on mature adaptive immunity. For comprehensive immune optimization, TA-1 is the foundation, with BPC-157 and Epithalon as targeted complements.',
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

        {/* RELATED GUIDES */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/epithalon-anti-aging-telomere-peptide-guide', label: 'Epithalon Complete Guide', desc: 'The telomerase-activating peptide — pairs with TA-1 for comprehensive thymic anti-aging' },
              { href: '/bpc-157-complete-guide', label: 'BPC-157 Complete Guide', desc: 'Repairs the gut immune barrier driving systemic immune dysfunction — key TA-1 partner' },
              { href: '/peptides-for-gut-health-leaky-gut', label: 'Peptides for Gut Health', desc: 'How BPC-157 and KPV repair leaky gut and the GALT immune dysregulation it causes' },
              { href: '/nad-plus-anti-aging-guide', label: 'NAD+ Anti-Aging Guide', desc: 'Cellular energy optimization — synergistic with TA-1 for comprehensive longevity protocols' },
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'How to combine Thymosin Alpha-1 with other compounds for optimal immune and recovery results' },
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
