import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'MK-677 Ibutamoren Guide: Dosage, Results, Looksmaxxing & Science | PeptidesMuscle',
  description: 'The complete MK-677 (Ibutamoren) guide. How this oral GH secretagogue works, dosing protocols, week-by-week results timeline, looksmaxxing applications for skin, hair, and facial fullness, plus side effect management.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/mk-677-ibutamoren-guide' },
  keywords: 'MK-677 ibutamoren guide dosage results looksmaxxing, MK-677 growth hormone, ibutamoren protocol, MK-677 skin hair, MK-677 side effects, oral GH secretagogue',
  openGraph: {
    title: 'MK-677 Ibutamoren Guide: Dosage, Results & Looksmaxxing | PeptidesMuscle',
    description: 'Complete MK-677 guide covering mechanism, dosing, week-by-week results, looksmaxxing applications, and side effect management.',
    url: 'https://www.peptidesmuscle.com/mk-677-ibutamoren-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MK-677 Ibutamoren Complete Guide | PeptidesMuscle',
    description: 'Mechanism, dosing, week-by-week results, and looksmaxxing protocols for the most popular oral GH secretagogue.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'MK-677 Ibutamoren Guide: Dosage, Results, Looksmaxxing & Science',
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
          name: 'What is MK-677 (Ibutamoren) and how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MK-677 (Ibutamoren) is an orally active, non-peptide ghrelin mimetic that selectively binds to the GHS-R1a receptor in the pituitary gland and hypothalamus. It stimulates pulsatile growth hormone release without affecting cortisol, and consequently elevates IGF-1 levels within weeks of daily use. Unlike injectable GH peptides, it is taken orally and has a long half-life of approximately 24 hours, making once-daily dosing sufficient.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the correct MK-677 dosage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The standard MK-677 dosage is 10–25mg taken orally once daily, typically at night before sleep. Beginners should start at 10mg to assess tolerability. Most users find 20mg delivers the optimal balance of GH elevation and side effect management. 25mg is the research-validated ceiling for most adults. Doses above 25mg provide diminishing returns and increase water retention and appetite stimulation disproportionately.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does MK-677 take to show results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sleep quality improvements often appear within days. IGF-1 levels measurably rise within 2–4 weeks. Skin quality improvements (tightening, smoothness, improved texture) typically become visible at weeks 4–8. Hair thickness and nail growth improvements appear at weeks 6–12. Significant body composition changes (muscle gain, fat reduction) require a minimum 3-month continuous run, with best results seen at 6 months.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does MK-677 cause water retention?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, water retention is the most common side effect of MK-677, particularly in the first 4–8 weeks. It is caused by aldosterone stimulation and increased IGF-1 driving intracellular water uptake. Most users find it diminishes after the initial adaptation period. Moderating sodium intake, staying well-hydrated, and starting at 10mg can minimize this effect. Some users take MK-677 only 5 days on, 2 days off to manage retention.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can MK-677 help with looksmaxxing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MK-677 is one of the most popular compounds in the looksmaxxing community for its multi-system effects on appearance: it improves skin collagen density and elasticity, increases hair shaft thickness and rate of growth, promotes a subtle facial fullness by improving subcutaneous tissue quality, and enhances sleep quality which compounds all other aesthetic effects. It is frequently stacked with GHK-Cu for a synergistic skin and appearance protocol.',
          },
        },
      ],
    },
  ],
}

const accent = '#40c090'

const benefits = [
  {
    title: 'GH & IGF-1 Elevation',
    body: 'MK-677 produces sustained, dose-dependent increases in GH pulse amplitude and serum IGF-1. In the landmark 1998 Thorner study, 25mg daily MK-677 elevated IGF-1 by 72% in elderly subjects and 52% in young adults. These levels remain elevated as long as administration continues, making it a reliable tool for anyone seeking the systemic benefits of optimized GH status without injections.',
  },
  {
    title: 'Muscle Growth & Body Recomposition',
    body: 'Elevated IGF-1 drives anabolic signaling in skeletal muscle via the PI3K/Akt/mTOR pathway — the same pathway activated by insulin and exogenous IGF-1. MK-677 users in lean-mass optimization phases consistently report accelerated lean tissue accrual and a favorable shift in body composition. The compound also demonstrates a nitrogen-sparing effect, reducing muscle catabolism during caloric restriction.',
  },
  {
    title: 'Skin Quality & Collagen',
    body: 'Growth hormone is a master regulator of dermal collagen synthesis. Higher GH/IGF-1 status drives fibroblast proliferation and increased collagen I and III production. This translates to noticeably improved skin texture, reduced fine lines, improved elasticity, and a natural "glow" that the looksmaxxing community refers to as the GH skin effect. Most users see measurable improvement by weeks 6–10.',
  },
  {
    title: 'Hair Thickness & Growth Rate',
    body: 'The hair follicle is exquisitely sensitive to IGF-1, which prolongs the anagen (growth) phase and increases follicle activity. MK-677 users frequently document increased hair shaft diameter, faster growth rate, and improved scalp coverage. The effect is systemic — body hair, beard density, eyebrows, and scalp hair all respond. This makes it particularly valuable in the facial looksmaxxing context.',
  },
  {
    title: 'Deep Sleep Enhancement',
    body: 'MK-677 increases slow-wave (deep) sleep duration — the most restorative sleep stage where GH secretion naturally peaks. Users commonly report more vivid dreams, improved sleep depth, and waking feeling more recovered. Since deep sleep is when GH is naturally highest, MK-677 taken at night creates a synergistic feedback loop of GH release and sleep quality, compounding all other benefits.',
  },
  {
    title: 'Fat Loss & Metabolic Effects',
    body: 'GH is lipolytic — it directly mobilizes fatty acids from adipocytes, particularly visceral fat. MK-677-driven GH elevation enhances fat oxidation, particularly during fasting periods and overnight. In a body recomposition context, the combination of increased muscle protein synthesis and enhanced lipolysis creates favorable conditions for simultaneous fat loss and muscle gain, especially when combined with appropriate training and nutrition.',
  },
]

const timeline = [
  {
    week: 'Week 1–2',
    results: 'Sleep quality noticeably deeper. More vivid dreams. Increased hunger, particularly at night. Mild water retention may appear. Some users notice a subtle improvement in skin hydration.',
    tip: 'Take at night 30 min before sleep. Start at 10mg to assess appetite and water retention tolerance.',
  },
  {
    week: 'Week 3–4',
    results: 'IGF-1 levels measurably elevated. Gym recovery noticeably faster. Water retention may peak then begin to normalize. Skin texture beginning to improve — pores tighten slightly. Nail growth accelerates.',
    tip: 'If tolerating 10mg well, increase to 20mg. Consider monitoring fasting blood glucose if you have insulin sensitivity concerns.',
  },
  {
    week: 'Week 5–8',
    results: 'Skin quality changes become clearly visible — improved elasticity, smoother texture, improved tone. Hair growth rate measurably faster. Body composition shifting toward more muscle, less fat. Sleep remains deep and restorative.',
    tip: 'This is the window most users report their first visible appearance improvements. Document with photos.',
  },
  {
    week: 'Week 9–12',
    results: 'Significant skin improvement. Hair thickness increasing. Facial skin appears more youthful and fuller. Lean mass gains compounding. Many users report unsolicited comments about appearance improvement from others.',
    tip: 'Full 12-week assessment point. Blood work (IGF-1, fasting glucose) recommended to track optimization.',
  },
  {
    week: 'Months 4–6',
    results: 'Maximum cumulative benefits. Deep skin collagen remodeling completed multiple cycles. Hair coverage visibly improved. Body composition transformed. Sleep architecture permanently improved in most users.',
    tip: 'Long-term runs of 6–12 months are common and well-tolerated. Annual blood work check-ins advised.',
  },
]

const sideEffects = [
  { name: 'Water Retention', severity: 'Moderate', management: 'Reduce sodium. Stay hydrated. Start at 10mg. Usually resolves after 4–6 weeks of adaptation.' },
  { name: 'Increased Appetite', severity: 'Moderate', management: 'Take at night to shift hunger to sleeping hours. High protein diet helps. The appetite increase can be leveraged for bulking phases.' },
  { name: 'Blood Glucose Elevation', severity: 'Mild–Moderate', management: 'GH is counter-regulatory to insulin. Monitor fasting glucose if pre-diabetic or insulin resistant. Time carbohydrates away from MK-677 dose.' },
  { name: 'Lethargy / Grogginess', severity: 'Mild', management: 'Most users who experience this find it resolves after the first 2 weeks. Night dosing minimizes next-day grogginess.' },
  { name: 'Tingling / Numbness', severity: 'Mild', management: 'Rare. Caused by fluid pressure on nerves. Reduces sodium intake usually resolves it.' },
]

export default function Mk677IbutamorenGuide() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#40c090] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Oral GH Secretagogue</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            MK-677 Ibutamoren:<br />
            <span className="italic" style={{ color: accent }}>Complete Protocol Guide</span>
          </h1>
      <AuthorByline datePublished="2026-04-03" dateModified="2026-04-03" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            The most popular oral growth hormone secretagogue — mechanism, dosing, results timeline, looksmaxxing applications for skin, hair, and facial fullness, and complete side-effect management.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — WHAT IS MK-677 */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What Is MK-677 (Ibutamoren)?</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>MK-677, also known by its research name Ibutamoren, is a potent, orally active, non-peptide ghrelin mimetic and selective agonist of the growth hormone secretagogue receptor GHS-R1a. Developed originally by Merck, it was designed to treat conditions associated with GH deficiency — muscle wasting, obesity, osteoporosis, and age-related GH decline — and represents a fundamentally different approach to GH optimization than injectable peptides.</p>
            <p>Unlike GHRH peptides (CJC-1295) or GHRPs (Ipamorelin, GHRP-6), which are themselves peptide molecules and must be injected to preserve bioactivity, MK-677 is a small-molecule drug with excellent oral bioavailability and a half-life of approximately 24 hours. A single daily dose reliably elevates growth hormone and IGF-1 levels throughout the entire 24-hour window, eliminating the need for multiple daily injections and precise timing protocols.</p>
            <p>MK-677 works by mimicking the actions of ghrelin — the stomach-derived hunger hormone — at the pituitary GHS-R1a receptor. When this receptor is activated, the pituitary releases GH in amplified pulses while simultaneously signaling the hypothalamus to suppress somatostatin (the GH-inhibiting hormone). The result is a sustained, physiologically pulsatile elevation of GH and downstream IGF-1 production in the liver. Critically, MK-677 does not interfere with the hypothalamic-pituitary-adrenal axis or suppress testosterone — a significant advantage over many anabolic compounds.</p>
            <p>Published clinical research spanning over two decades confirms its efficacy. A landmark 1998 New England Journal of Medicine study demonstrated that 25mg daily MK-677 elevated IGF-1 by 52–72% in subjects aged 18–65 after two months, with benefits sustained throughout long-term administration. No serious adverse events were recorded in any of the major clinical trials.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 02 — MECHANISM VS INJECTABLE PEPTIDES */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>MK-677 vs. Injectable GH Peptides</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>The GH optimization space offers several pathways: MK-677 (oral), injectable GHRH analogues (CJC-1295), injectable GHRPs (Ipamorelin, GHRP-6, Hexarelin), and exogenous recombinant human GH. Each approach carries distinct advantages and trade-offs that inform protocol design.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {[
                {
                  label: 'MK-677 (Oral)',
                  color: accent,
                  pros: 'Oral convenience, 24-hour coverage from one dose, no injections, well-documented safety profile, available without prescription in many regions.',
                  cons: 'Higher appetite stimulation, more water retention than peptide injections, slower GH pulse — less "peak" than injectable GHRP combinations.',
                },
                {
                  label: 'CJC-1295 + Ipamorelin (Injectable)',
                  color: '#d4a043',
                  pros: 'More precise GH pulse timing, lower appetite stimulation, less water retention, highly synergistic combination, preferred for body recomposition.',
                  cons: 'Requires multiple daily injections, reconstitution, cold storage, more complex protocol management.',
                },
                {
                  label: 'Exogenous HGH (Injectable)',
                  color: '#a78bfa',
                  pros: 'Highest GH levels achievable, complete control over dosing, decades of clinical use data.',
                  cons: 'Suppresses natural GH axis, expensive, requires medical supervision, higher carpal tunnel and side effect risk at higher doses.',
                },
                {
                  label: 'MK-677 + CJC-1295/Ipamorelin (Combined)',
                  color: '#6090ff',
                  pros: 'Oral coverage + injectable precision. The oral MK-677 provides baseline GH elevation while the peptides create acute GH pulses at strategic times.',
                  cons: 'Most complex protocol. Added cost and injection burden. Best reserved for advanced users.',
                },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-5" style={{ borderTop: `2px solid ${item.color}` }}>
                  <p className="text-white font-700 text-[14px] mb-2">{item.label}</p>
                  <p className="text-[#50505e] text-[11px] mb-1">ADVANTAGES</p>
                  <p className="text-[#aaaabc] text-[13px] leading-relaxed mb-2">{item.pros}</p>
                  <p className="text-[#50505e] text-[11px] mb-1">TRADE-OFFS</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.cons}</p>
                </div>
              ))}
            </div>
            <p>For most beginners and intermediate users, MK-677 offers the best entry point into GH optimization: no injections, once-daily dosing, and a robust evidence base. For more experienced users seeking body recomposition precision, the injectable peptide combinations outperform MK-677 — but both can be run simultaneously for maximum effect.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 03 — BENEFITS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Benefits Breakdown</h2>
          </div>
          <div className="pl-10">
            <p className="text-[#8888a0] text-[16px] leading-relaxed mb-6">MK-677&apos;s multi-system effects make it uniquely versatile — relevant to athletes, biohackers, anti-aging enthusiasts, and looksmaxxers simultaneously. Here is each benefit examined through the lens of the underlying mechanism:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="card rounded-xl p-5">
                  <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{b.title}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 04 — DOSING */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dosing Protocol</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>MK-677&apos;s oral availability and 24-hour half-life simplify dosing considerably compared to injectable peptide protocols. The key variables are dose level, timing, and cycle duration.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { level: 'Beginner', dose: '10mg/night', goal: 'Assess tolerance, establish sleep and appetite adaptation before increasing.' },
                { level: 'Standard', dose: '20mg/night', goal: 'Optimal balance of GH elevation, skin/hair effects, body recomposition, and side effect profile.' },
                { level: 'Advanced', dose: '25mg/night', goal: 'Maximum IGF-1 elevation. Research ceiling dose. Higher water retention and appetite expected.' },
              ].map((d, i) => (
                <div key={i} className="card rounded-xl p-5 text-center">
                  <p className="text-[#50505e] text-[11px] mb-1">{d.level.toUpperCase()}</p>
                  <p className="text-white font-700 text-[22px] mb-2" style={{ color: accent }}>{d.dose}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{d.goal}</p>
                </div>
              ))}
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-3">Timing & Practical Protocol</p>
              <div className="space-y-2">
                {[
                  { label: 'When to Take', val: '30–60 minutes before sleep. Aligns the MK-677-stimulated GH pulse with natural nocturnal GH release, creating a compounded peak. Also shifts appetite stimulation to sleeping hours, reducing daytime hunger interference.' },
                  { label: 'With or Without Food', val: 'Can be taken with or without food. Taking with a small protein-containing snack may blunt appetite side effects initially. Avoid taking with a large carbohydrate meal as GH counter-regulates insulin.' },
                  { label: 'Cycle Length', val: 'MK-677 is most commonly run in 3–6 month continuous cycles. Some advanced users run it year-round with annual blood work. Unlike GHRPs, there is no evidence of significant receptor desensitization with MK-677.' },
                  { label: 'Blood Work', val: 'Check IGF-1 and fasting blood glucose at baseline and at 8 weeks. IGF-1 in the upper quartile of normal range (400–600 ng/mL for young adults) is the target. Monitor glucose if you have any metabolic risk factors.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <p className="text-[#d4a043] text-[12px] font-600 flex-shrink-0 mt-0.5">{item.label}:</p>
                    <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.val}</p>
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
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Results Timeline: Week by Week</h2>
          </div>
          <div className="pl-10 space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[14px] mb-2" style={{ color: accent }}>{t.week}</p>
                <p className="text-[#aaaabc] text-[14px] leading-relaxed mb-3">{t.results}</p>
                <p className="text-[#50505e] text-[12px]"><span className="text-[#d4a043]">Protocol note:</span> {t.tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 06 — LOOKSMAXXING */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Looksmaxxing Applications</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>MK-677 has become one of the most discussed compounds in the looksmaxxing community, and for good reason. Its effects on GH and IGF-1 cascade into virtually every system that determines physical appearance: skin quality, hair, facial tissue quality, body composition, and the underlying metabolic environment that governs all of the above.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {[
                {
                  title: 'Skin Tightening & Texture',
                  body: 'GH drives dermal fibroblast proliferation and collagen synthesis. Users on MK-677 for 3+ months consistently report that their skin appears firmer, more elastic, and significantly smoother in texture. Fine lines soften. The skin takes on a characteristic "plumpness" from improved extracellular matrix density that is distinct from mere hydration.',
                },
                {
                  title: 'Hair Thickness & Coverage',
                  body: 'IGF-1 is one of the most potent stimulators of hair follicle activity known. MK-677 users document increases in hair shaft diameter, rate of growth, and for some, improved coverage in areas of mild thinning. The beard community in particular has noted increased beard density and uniformity with extended MK-677 use.',
                },
                {
                  title: 'Facial Fullness & Structure',
                  body: 'One of MK-677\'s subtler but most visually significant effects is improved quality of the soft tissue envelope of the face. GH drives retention of subcutaneous collagen and mild fat redistribution into favorable facial compartments. The result — most noticeable after 3–6 months — is a more youthful, full facial appearance without the artificial look of filler interventions.',
                },
                {
                  title: 'Sleep & Skin Recovery',
                  body: 'Skin repair occurs predominantly during deep sleep, when GH is naturally highest. MK-677 significantly increases slow-wave sleep duration, creating more repair time for skin cells. The compounding effect of better GH secretion AND longer deep sleep creates an accelerated skin regeneration cycle that visually manifests as clearer, more rested-looking skin from weeks 2–4 onward.',
                },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-5">
                  <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{item.title}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="card rounded-xl p-5 mt-4">
              <p className="text-white font-600 text-[14px] mb-2">Looksmaxxing Stack: MK-677 + GHK-Cu</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">The most synergistic looksmaxxing pairing for skin and hair involves combining MK-677 (systemic GH/IGF-1 elevation) with GHK-Cu (copper peptide — direct fibroblast stimulation and collagen remodeling). MK-677 drives the systemic environment for tissue repair; GHK-Cu provides targeted, localized collagen synthesis and anti-inflammatory signaling in the skin. Many advanced looksmaxxers add injectable or topical GHK-Cu to their MK-677 protocol starting at week 4–6 for amplified results.</p>
              <a href="/go/ghk-cu-50mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary inline-flex mt-4 px-5 py-2.5 text-[13px]">Get GHK-Cu →</a>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 07 — SIDE EFFECTS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">07</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Side Effects & Management</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>MK-677 has a well-characterized side effect profile from decades of clinical research. None of the documented effects are considered dangerous at standard doses, and most are manageable through protocol adjustments. Unlike anabolic steroids, MK-677 does not suppress testosterone, does not affect LH or FSH, requires no PCT, and does not carry cardiovascular risks associated with androgen use.</p>
            <div className="space-y-3">
              {sideEffects.map((se, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-white font-600 text-[14px]">{se.name}</p>
                    <span className="tag text-[11px]">{se.severity}</span>
                  </div>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{se.management}</p>
                </div>
              ))}
            </div>
            <div className="card rounded-xl p-5 mt-4">
              <p className="text-white font-600 text-[14px] mb-2">Who Should Not Use MK-677</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">MK-677 is contraindicated in active cancer (GH can promote tumor growth), uncontrolled diabetes or severe insulin resistance, and pregnancy. Those with existing fluid retention conditions (heart failure, nephrotic syndrome) should avoid it without medical supervision. Always consult a qualified physician before beginning any GH secretagogue protocol.</p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 08 — STACKING */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">08</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Stacking Guide</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>MK-677 pairs synergistically with several research peptides depending on the goal. The following stacks are organized by objective:</p>
            <div className="space-y-4">
              {[
                {
                  goal: 'Looksmaxxing & Anti-Aging',
                  stack: 'MK-677 20mg nightly + GHK-Cu 2mg 3x/week SubQ',
                  rationale: 'MK-677 elevates systemic GH/IGF-1 for skin, hair, and body composition. GHK-Cu directly stimulates fibroblasts, increases collagen I/III/IV synthesis, and provides anti-inflammatory signaling at the tissue level. Together they address both the systemic and local mechanisms of skin aging.',
                  color: accent,
                },
                {
                  goal: 'Body Recomposition & Muscle',
                  stack: 'MK-677 20mg nightly + CJC-1295 No-DAA 100mcg + Ipamorelin 100mcg (pre-bed, 3x/week)',
                  rationale: 'MK-677 provides oral baseline GH elevation. The injectable GHRH + GHRP combination creates acute GH pulses at night to amplify the MK-677 effect during sleep. The combined GH output significantly exceeds either protocol alone.',
                  color: '#d4a043',
                },
                {
                  goal: 'Injury Recovery + GH Optimization',
                  stack: 'MK-677 20mg nightly + BPC-157 300mcg 2x/day near injury site',
                  rationale: 'Elevated IGF-1 from MK-677 accelerates the tissue repair process that BPC-157 initiates locally. GH is anabolic to connective tissue; BPC-157 drives vascularization and fibroblast activity at the injury site. The combination can dramatically compress recovery timelines.',
                  color: '#a78bfa',
                },
              ].map((s, i) => (
                <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${s.color}` }}>
                  <p className="text-white font-700 text-[14px] mb-1">{s.goal}</p>
                  <p className="mono text-[12px] mb-3" style={{ color: s.color }}>{s.stack}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{s.rationale}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 09 — BUY */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get MK-677 & Looksmaxxing Stack</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">MK-677 (Ibutamoren)</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Oral GH secretagogue. Research-grade, third-party tested. The most convenient entry point into GH optimization.</p>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored" className="btn-primary w-full justify-center py-3 text-[13px] flex">Shop MK-677 →</a>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">GHK-Cu (Skin Stack)</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">The ideal companion to MK-677 for looksmaxxing. Direct fibroblast activation and collagen remodeling to amplify MK-677&apos;s systemic skin effects.</p>
              <a href="/go/ghk-cu-50mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary w-full justify-center py-3 text-[13px] flex">Get GHK-Cu →</a>
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
                q: 'Does MK-677 suppress natural GH production?',
                a: 'No. Unlike exogenous GH injections, MK-677 works by stimulating the pituitary to produce more GH naturally — it does not suppress the GH axis. Endogenous GH secretion remains intact and returns to normal baseline if MK-677 is discontinued. This is a major advantage over exogenous GH therapy.',
              },
              {
                q: 'Can women use MK-677?',
                a: 'Yes. MK-677 is non-androgenic and does not affect female hormonal axes. Women may be more sensitive to the GH-elevating effects and can often use lower doses (10–15mg) with equivalent results to men using 20–25mg. Women tend to experience more pronounced skin and hair benefits due to higher baseline skin collagen sensitivity to GH.',
              },
              {
                q: 'Is MK-677 legal to purchase?',
                a: 'MK-677 is not approved as a pharmaceutical drug in most countries and is sold for research purposes. It is not a controlled substance in the US, UK, EU, Canada, or Australia, making it legally purchasable as a research compound in most jurisdictions. Always verify current regulations in your specific country before purchasing.',
              },
              {
                q: 'Should I use MK-677 or CJC-1295/Ipamorelin?',
                a: 'Both are effective GH optimization tools. MK-677 is superior for convenience (oral, once daily) and long-term collagen/skin/hair benefits. CJC-1295/Ipamorelin is superior for precise GH pulse timing, body recomposition efficiency, and lower water retention. For pure looksmaxxing applications, many users prefer MK-677 or the combination of both. For athletic performance and body recomposition, the injectable combination is generally preferred by experienced users.',
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
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin Guide', desc: 'The injectable GH peptide stack — compare with MK-677 or combine for maximum effect' },
              { href: '/ghk-cu-before-and-after-guide', label: 'GHK-Cu Before & After Guide', desc: 'The ideal skin peptide to stack with MK-677 for advanced looksmaxxing' },
              { href: '/looksmaxxing-peptides-guide-men', label: 'Looksmaxxing Peptides: Men', desc: 'Complete guide to the peptide stack for male aesthetic optimization' },
              { href: '/facial-looksmaxxing-peptides-guide', label: 'Facial Looksmaxxing Peptides', desc: 'Targeted protocols for facial skin, jawline definition, and features' },
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
