import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Sermorelin Anti-Aging Guide: HGH Stimulation, Dosing & Results | PeptidesMuscle',
  description: 'The definitive Sermorelin guide. How this GHRH analogue stimulates natural HGH release, anti-aging benefits, body composition, sleep improvement, and full dosing protocols.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/sermorelin-anti-aging-hgh-guide' },
  keywords: 'sermorelin peptide anti-aging HGH guide, sermorelin dosage, sermorelin results, GHRH analogue, sermorelin vs HGH, sermorelin protocol, sermorelin anti-aging',
  openGraph: {
    title: 'Sermorelin Guide: Natural HGH Stimulation & Anti-Aging | PeptidesMuscle',
    description: 'GHRH receptor stimulation for HGH release, anti-aging, body recomposition, and sleep quality. Full protocol and results timeline.',
    url: 'https://www.peptidesmuscle.com/sermorelin-anti-aging-hgh-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sermorelin Anti-Aging & HGH Guide | PeptidesMuscle',
    description: 'Natural HGH stimulation, anti-aging protocols, body composition, and sleep quality improvement with Sermorelin.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'Sermorelin Anti-Aging Guide: HGH Stimulation, Dosing & Results',
      datePublished: '2026-04-03',
      dateModified: '2026-04-03',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com', logo: { '@type': 'ImageObject', url: 'https://www.peptidesmuscle.com/max-avatar.png' } },
      author: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent', name: 'LooksMax Agent', url: 'https://www.peptidesmuscle.com/about/editors' },
      reviewedBy: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Sermorelin and how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sermorelin is a synthetic analogue of growth hormone-releasing hormone (GHRH), consisting of the first 29 amino acids of the naturally occurring GHRH-44. It binds to GHRH receptors on pituitary somatotroph cells, stimulating the pulsatile release of endogenous growth hormone. Unlike synthetic HGH injections, Sermorelin works through the pituitary\'s own regulatory mechanisms, preserving natural GH pulse architecture and feedback loops.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the correct Sermorelin dosage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard Sermorelin dosing is 100–500mcg administered subcutaneously, typically once nightly 30–60 minutes before sleep. Lower doses (100–200mcg) are used for anti-aging and general optimization. Higher doses (300–500mcg) are used for more aggressive body composition and recovery goals. The nightly timing aligns with the natural nocturnal GH surge, amplifying the body\'s endogenous release pattern.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does Sermorelin take to show results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sermorelin results develop gradually over a 12-week minimum protocol. Sleep quality improvements are often noticed within the first 1–2 weeks. Energy and recovery benefits emerge at weeks 3–6. Visible body composition changes (fat loss, muscle tone improvement) typically appear at weeks 8–12. Full anti-aging benefits — skin quality, joint health, cognitive clarity — require 3–6 months of consistent use.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Sermorelin better than synthetic HGH?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sermorelin and synthetic HGH have different risk-benefit profiles. Synthetic HGH produces supraphysiological GH levels, bypassing the pituitary\'s regulatory feedback — this increases results but also increases risk of side effects including insulin resistance, joint swelling, and carpal tunnel syndrome. Sermorelin produces physiological GH release through natural pituitary mechanisms, resulting in more moderate but safer and more sustainable results with significantly lower side effect risk.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Sermorelin be stacked with CJC-1295 or Ipamorelin?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — Sermorelin stacking with CJC-1295 or Ipamorelin is a common and highly effective strategy. CJC-1295 is a longer-acting GHRH analogue that extends GH stimulation duration, while Ipamorelin provides a complementary GH secretagogue pulse through a different receptor. The combination produces larger and more sustained GH pulses than any single compound, significantly amplifying anti-aging and body composition results.',
          },
        },
      ],
    },
  ],
}

const accent = '#a060ff'

const mechanisms = [
  {
    title: 'GHRH Receptor Binding',
    body: 'Sermorelin consists of the active first 29 amino acids of endogenous GHRH-44. This truncated structure retains full receptor binding capacity at pituitary GHRH receptors. Upon binding, it activates adenylyl cyclase via Gs protein coupling, elevating intracellular cAMP — the primary signaling cascade for growth hormone synthesis and secretion in pituitary somatotroph cells.',
  },
  {
    title: 'Pulsatile GH Architecture Preservation',
    body: 'The critical advantage of Sermorelin over exogenous HGH is that it stimulates GH release through the pituitary\'s own regulatory machinery. This preserves the natural pulsatile release pattern — short bursts of GH followed by trough periods — that is essential for optimal tissue response. Continuous supraphysiological GH (from synthetic HGH injections) leads to receptor desensitization, whereas Sermorelin-driven pulsatile release maintains receptor sensitivity.',
  },
  {
    title: 'IGF-1 Upregulation',
    body: 'GH pulses stimulated by Sermorelin travel to the liver where they trigger IGF-1 (insulin-like growth factor 1) production. IGF-1 is the primary mediator of most of GH\'s anabolic and anti-aging effects: muscle protein synthesis, fat mobilization, collagen production, bone density maintenance, and cellular repair. Sermorelin elevates IGF-1 into optimal ranges without the supraphysiological spikes that cause insulin resistance.',
  },
  {
    title: 'Somatostatin Feedback Sensitivity',
    body: 'Endogenous GH release is regulated by the interplay between GHRH (stimulatory) and somatostatin (inhibitory). Sermorelin works within this regulatory system, meaning that when GH levels are already elevated, somatostatin naturally suppresses further release — preventing dangerous GH excess. This built-in safety mechanism is absent with direct HGH injections, making Sermorelin inherently self-regulating.',
  },
]

const benefitAreas = [
  {
    area: 'Body Composition',
    icon: '▲',
    points: [
      'Increased lean muscle mass through IGF-1-mediated protein synthesis',
      'Enhanced lipolysis — fat cells become more responsive to GH-driven fat mobilization',
      'Improved muscle-to-fat ratio even without changes to training or diet',
      'Reduced visceral fat accumulation — the dangerous metabolic fat around organs',
    ],
  },
  {
    area: 'Sleep Quality',
    icon: '◆',
    points: [
      'The largest endogenous GH pulse occurs during slow-wave (deep) sleep',
      'Sermorelin amplifies this nocturnal GH surge, deepening and improving sleep quality',
      'Users consistently report improved sleep onset, duration, and morning energy',
      'Improved sleep architecture creates a positive feedback loop for GH optimization',
    ],
  },
  {
    area: 'Skin & Anti-Aging',
    icon: '●',
    points: [
      'IGF-1 stimulates collagen synthesis in fibroblasts, increasing skin thickness and elasticity',
      'Improved skin hydration and reduced fine lines with 3–6 months of use',
      'Hair quality improvements reported — increased thickness and growth rate',
      'Nail strength and growth rate improvements observed with extended protocols',
    ],
  },
  {
    area: 'Recovery & Joints',
    icon: '■',
    points: [
      'GH accelerates connective tissue repair and cartilage proteoglycan synthesis',
      'Faster recovery from training — reduced DOMS, improved next-session readiness',
      'Joint pain reduction common — particularly in individuals with GH decline',
      'Tendon and ligament integrity supported through collagen pathway activation',
    ],
  },
]

const timeline = [
  {
    period: 'Weeks 1–2',
    changes: 'Sleep quality begins improving. Deeper sleep, more vivid dreams (a classic early GH optimization indicator). Some users report improved mood and morning energy.',
    markers: 'IGF-1 levels beginning to rise. No visible body composition changes yet.',
  },
  {
    period: 'Weeks 3–6',
    changes: 'Energy levels visibly elevated. Recovery from training accelerates. Early fat loss may be noticeable, particularly around the midsection. Skin begins to feel more hydrated.',
    markers: 'IGF-1 measurably elevated. GH pulse amplitude increasing. Collagen synthesis ramping up.',
  },
  {
    period: 'Weeks 7–12',
    changes: 'Clear body composition changes visible — muscle tone improved, body fat reduced. Skin appears more youthful. Joint comfort improved. Libido and drive frequently elevated.',
    markers: 'Peak protocol benefits. IGF-1 in optimal range for age. Full anti-aging protocol effects manifesting.',
  },
  {
    period: 'Months 4–6+',
    changes: 'Sustained anti-aging effects. Continued gradual improvements in skin, joint health, and body composition. Many users report cognitive improvements — mental clarity and focus.',
    markers: 'Long-term collagen remodeling. Bone density maintenance benefits. Cumulative tissue quality improvements.',
  },
]

export default function SermorelinAntiAgingPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#a060ff] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">GHRH Analogue</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            Sermorelin:<br />
            <span className="italic" style={{ color: accent }}>Natural HGH & Anti-Aging Protocol</span>
          </h1>
      <AuthorByline datePublished="2026-04-03" dateModified="2026-04-03" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            The intelligent approach to growth hormone optimization. Sermorelin works through your pituitary&apos;s own mechanisms — stimulating natural, pulsatile HGH release for anti-aging, body composition, and recovery without the risks of synthetic HGH.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — WHAT IT DOES */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What Sermorelin Actually Does</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Sermorelin is a synthetic 29-amino-acid peptide representing the biologically active fragment of endogenous growth hormone-releasing hormone (GHRH). First synthesized in the 1970s, it became the first FDA-approved GHRH analogue used in clinical medicine for diagnosing and treating GH deficiency. Today it is one of the most prescribed anti-aging peptides in functional medicine practices worldwide.</p>
            <p>The fundamental concept is elegant: instead of introducing exogenous HGH from outside the body — which bypasses the pituitary and disrupts natural feedback regulation — Sermorelin signals the pituitary to produce more of its own growth hormone. The pituitary then releases GH in natural pulses, maintaining the physiological architecture that determines how tissues respond to GH stimulation.</p>
            <p>Human growth hormone declines by approximately 14% per decade after age 30, with a corresponding decline in IGF-1. This age-related GH decline — termed somatopause — is closely correlated with the body composition changes, skin aging, reduced recovery capacity, sleep deterioration, and cognitive decline associated with aging. Sermorelin addresses somatopause at its source: inadequate stimulation of the pituitary rather than a failure of the pituitary itself.</p>
            <p>The practical result is a restoration of GH and IGF-1 levels toward youthful ranges, with the breadth of anti-aging, metabolic, and physical performance benefits those levels support.</p>
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

        {/* 02 — SERMORELIN VS HGH */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Sermorelin vs. Synthetic HGH</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">The comparison between Sermorelin and synthetic HGH is fundamentally a risk-benefit trade-off. Synthetic HGH produces faster, more dramatic results at the cost of bypassing natural regulatory systems. Sermorelin produces more gradual results through physiologically appropriate mechanisms, with dramatically fewer side effects and no suppression of pituitary function.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[15px] mb-3">Sermorelin</p>
                <div className="space-y-2">
                  {[
                    ['Mechanism', 'Stimulates pituitary GH release'],
                    ['GH pattern', 'Pulsatile (physiological)'],
                    ['IGF-1 increase', 'Moderate, within range'],
                    ['Insulin resistance risk', 'Very low'],
                    ['Carpal tunnel risk', 'Very low'],
                    ['Pituitary suppression', 'None — maintains function'],
                    ['Cost', 'Lower'],
                    ['Regulation', 'Prescription (FDA-approved)'],
                  ].map(([k, v], i) => (
                    <div key={i} className="flex justify-between text-[12px]">
                      <span className="text-[#50505e]">{k}</span>
                      <span className="text-[#aaaabc]">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #6090ff' }}>
                <p className="text-white font-700 text-[15px] mb-3">Synthetic HGH</p>
                <div className="space-y-2">
                  {[
                    ['Mechanism', 'Replaces endogenous HGH'],
                    ['GH pattern', 'Continuous/supraphysiological'],
                    ['IGF-1 increase', 'High, dose-dependent'],
                    ['Insulin resistance risk', 'Moderate-high'],
                    ['Carpal tunnel risk', 'Moderate'],
                    ['Pituitary suppression', 'Yes — atrophies with disuse'],
                    ['Cost', 'Very high'],
                    ['Regulation', 'Controlled substance'],
                  ].map(([k, v], i) => (
                    <div key={i} className="flex justify-between text-[12px]">
                      <span className="text-[#50505e]">{k}</span>
                      <span className="text-[#aaaabc]">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Who Should Use Sermorelin vs HGH?</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Sermorelin is appropriate for individuals aged 30+ experiencing the early signs of somatopause: declining body composition, reduced recovery, sleep deterioration, and skin aging. It is also appropriate for those who want the benefits of GH optimization with minimal risk. Synthetic HGH is typically reserved for individuals with confirmed GH deficiency (IGF-1 below normal range) under physician supervision, or bodybuilders accepting higher risk profiles for accelerated results.</p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 03 — BENEFITS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Benefits by System</h2>
          </div>
          <div className="pl-10 grid sm:grid-cols-2 gap-4">
            {benefitAreas.map((area, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{area.area}</p>
                <ul className="space-y-1">
                  {area.points.map((point, j) => (
                    <li key={j} className="text-[#8888a0] text-[13px] leading-relaxed flex gap-2">
                      <span className="text-[#50505e] mt-0.5 flex-shrink-0">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 04 — DOSING PROTOCOL */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dosing Protocol</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>The timing of Sermorelin administration is critical and non-negotiable: inject 30–60 minutes before sleep. This is because the largest endogenous GH pulse occurs during the first hours of slow-wave sleep. Sermorelin timed for this window amplifies the nocturnal GH surge, producing the largest possible GH pulse from a given dose. Daytime injections compete with somatostatin tone and cortisol, dramatically reducing efficacy.</p>
            <p>Sermorelin should be administered on an empty stomach — food intake (particularly carbohydrates and fats) suppresses GH release by elevating insulin. Wait at least 2 hours after your last meal before injecting. Protein intake also raises IGF-1, and avoiding it in the pre-injection window further reduces suppression of the Sermorelin-driven pulse.</p>

            <div className="space-y-4 mt-2">
              {[
                {
                  label: 'Beginner / Anti-Aging Protocol',
                  dose: '100–200mcg nightly SubQ',
                  color: accent,
                  notes: 'Appropriate for individuals 35+ seeking anti-aging benefits. Low enough to minimize side effects while producing meaningful IGF-1 elevation. Run for minimum 3 months.',
                },
                {
                  label: 'Intermediate / Body Composition Protocol',
                  dose: '200–300mcg nightly SubQ',
                  color: '#6060c0',
                  notes: 'For active individuals seeking meaningful body composition improvements alongside anti-aging benefits. Sweet spot for most users over 40. Run 3–6 months.',
                },
                {
                  label: 'Advanced / Aggressive Protocol',
                  dose: '300–500mcg nightly SubQ',
                  color: '#8050d0',
                  notes: 'For those with confirmed sub-optimal IGF-1 levels or seeking maximal body composition and recovery results. Monitor IGF-1 every 6–8 weeks. Run 3–6 months.',
                },
              ].map((p, i) => (
                <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${p.color}` }}>
                  <p className="text-white font-700 text-[15px] mb-2">{p.label}</p>
                  <p className="font-600 text-[13px] mb-2" style={{ color: p.color }}>{p.dose}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{p.notes}</p>
                </div>
              ))}
            </div>

            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Reconstitution Guide</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { label: 'Standard Mix', val: '2ml bacteriostatic water per 5mg vial → 2.5mg/ml (2500mcg/ml)' },
                  { label: '300mcg Dose', val: 'Draw 0.12ml on insulin syringe (12 units at U-100 scale)' },
                  { label: 'Storage', val: 'Reconstituted: refrigerate, use within 28 days. Dry powder: freeze for long-term storage' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-[#50505e] text-[11px] mb-1">{item.label}</p>
                    <p className="text-[#aaaabc] text-[13px]">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 05 — RESULTS TIMELINE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>12-Week Results Timeline</h2>
          </div>
          <div className="pl-10 space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{t.period}</p>
                <div className="space-y-2 mb-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">SUBJECTIVE CHANGES</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.changes}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">MEASURABLE MARKERS</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.markers}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 06 — WHO IS IT FOR */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Who Is Sermorelin For?</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Sermorelin is most appropriate for individuals aged 30+ who are experiencing the early to mid-stage effects of somatopause — the age-related decline in growth hormone secretion. Unlike synthetic HGH, which requires confirmed GH deficiency for medical justification, Sermorelin operates within physiological ranges and is appropriate for preventive anti-aging use even in individuals with sub-optimal but not clinically deficient GH levels.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Ideal Candidates', items: ['Age 35+ experiencing declining body composition', 'Poor sleep quality or reduced deep sleep duration', 'Slower recovery from exercise or injury', 'Visible skin aging and reduced collagen', 'Low energy and reduced drive/motivation', 'IGF-1 in the lower quartile for age'] },
                { label: 'Less Optimal Candidates', items: ['Under 30 with naturally high GH levels', 'Active cancer or history of hormone-sensitive cancer', 'Diabetes or severe insulin resistance (use with monitoring)', 'Individuals expecting rapid body composition changes', 'Those unwilling to commit to 3+ month protocols', 'Active pituitary disease'] },
              ].map((group, i) => (
                <div key={i} className="card rounded-xl p-5">
                  <p className="font-700 text-[14px] mb-3" style={{ color: i === 0 ? accent : '#50505e' }}>{group.label}</p>
                  <ul className="space-y-1">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-[#8888a0] text-[13px] flex gap-2">
                        <span className="text-[#50505e] flex-shrink-0">{i === 0 ? '✓' : '✗'}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 07 — STACKING */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">07</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Stacking with CJC-1295 & Ipamorelin</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">Sermorelin&apos;s efficacy can be substantially enhanced by combining it with complementary GH-stimulating compounds. The two most common additions are CJC-1295 (a longer-acting GHRH analogue) and Ipamorelin (a GH secretagogue acting through the ghrelin receptor). Together, these three compounds produce synergistic GH pulses through two distinct receptor pathways.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: 'Sermorelin', color: accent, role: 'Short-acting GHRH stimulation', dose: '100–300mcg nightly', note: 'Provides the primary GHRH pulse. Fast onset.' },
                { name: 'CJC-1295', color: '#6060c0', role: 'Long-acting GHRH amplification', dose: '100–300mcg nightly', note: 'Extends and amplifies the GHRH signal over hours. DAC variant has 1–2 week half-life.' },
                { name: 'Ipamorelin', color: '#40c0ff', role: 'GHS-R1a agonist (ghrelin pathway)', dose: '100–300mcg nightly', note: 'Activates a separate GH-releasing receptor. Synergistic with GHRH compounds.' },
              ].map((s, i) => (
                <div key={i} className="card rounded-xl p-4" style={{ borderTop: `2px solid ${s.color}` }}>
                  <p className="text-white font-700 text-[14px] mb-1">{s.name}</p>
                  <p className="text-[12px] mb-2" style={{ color: s.color }}>{s.role}</p>
                  <p className="text-[#50505e] text-[11px] mb-0.5">DOSE</p>
                  <p className="text-[#aaaabc] text-[12px] mb-2">{s.dose}</p>
                  <p className="text-[#8888a0] text-[12px]">{s.note}</p>
                </div>
              ))}
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Recommended Stack Protocol</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">CJC-1295 without DAC (100–200mcg) + Ipamorelin (100–200mcg) nightly is the most popular combination, often considered superior to Sermorelin alone due to the complementary dual-pathway mechanism. Sermorelin can be used as a standalone or as a more affordable base in a three-compound stack. Most users will advance from Sermorelin monotherapy to a CJC-1295/Ipamorelin combination after initial protocol completion.</p>
            </div>
            <Link href="/cjc-1295-ipamorelin-results-timeline" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
              Full CJC-1295 + Ipamorelin Protocol Guide →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 08 — BUY */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get Sermorelin</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Sermorelin</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Pharmaceutical-grade lyophilized Sermorelin. Certificate of analysis verified. The foundational GHRH analogue for anti-aging GH optimization.</p>
              <div className="flex gap-3">
                <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Sermorelin →</a>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">CJC-1295 + Ipamorelin Stack</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">The premium GH optimization combo. Dual-pathway GH stimulation for superior anti-aging and body composition results.</p>
              <div className="flex gap-3">
                <a href="/go/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Stack →</a>
                <Link href="/cjc-1295-ipamorelin-results-timeline" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Stack Guide</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 09 — FAQ */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">09</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Frequently Asked Questions</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              {
                q: 'Does Sermorelin require a prescription?',
                a: 'In the United States, Sermorelin is an FDA-approved peptide that was previously prescription-only. Following the FDA\'s 2023 compounding guidance changes, its availability has shifted, and many individuals obtain it through peptide research channels or licensed compounding pharmacies with a physician prescription. Regulations vary by country — consult your local regulations before obtaining.',
              },
              {
                q: 'How long should I run Sermorelin?',
                a: 'Minimum protocol length is 12 weeks for meaningful anti-aging and body composition results. Most functional medicine protocols run 3–6 months continuously. Sermorelin does not suppress natural GH production, so it can technically be run indefinitely. Common practice is 6 months on, 2–3 months off, then reassess IGF-1 levels. Many individuals run continuous low-dose maintenance protocols year-round.',
              },
              {
                q: 'Will Sermorelin make me tired or groggy?',
                a: 'Initially, some users notice slightly deeper sleep and briefly feeling "heavy" in the morning — an indicator that deep sleep quality is improving. This typically resolves after 1–2 weeks as sleep architecture adapts. Most users report significantly improved morning energy and alertness after the adaptation period. Administering Sermorelin 30–60 minutes before your target sleep time minimizes any grogginess.',
              },
              {
                q: 'Should I test IGF-1 before and during Sermorelin?',
                a: 'Testing IGF-1 before starting provides a baseline to measure progress and confirm sub-optimal GH status. Retesting at 6–8 weeks allows dose adjustment if IGF-1 has not moved appropriately. Target IGF-1 ranges are age-dependent — work with a physician to interpret results. Regular IGF-1 monitoring is the only reliable way to confirm Sermorelin is working at your specific dose.',
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

        {/* 10 — RELATED */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin Guide', desc: 'The premium dual-pathway GH optimization stack — superior results timeline and protocol' },
              { href: '/epithalon-anti-aging-telomere-peptide-guide', label: 'Epithalon Anti-Aging Guide', desc: 'Telomere-lengthening peptide for cellular-level anti-aging — stack with Sermorelin' },
              { href: '/nad-plus-anti-aging-guide', label: 'NAD+ Anti-Aging Guide', desc: 'Cellular energy and DNA repair optimization to complement GH pathway anti-aging' },
              { href: '/peptides-cognitive-performance-guide', label: 'Cognitive Performance Peptides', desc: 'Brain optimization peptides that synergize with improved sleep and GH levels' },
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
