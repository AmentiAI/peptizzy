import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'PT-141 Bremelanotide Complete Guide: Libido, Dosing & Looksmaxxing | PeptidesMuscle',
  description: 'The definitive PT-141 (Bremelanotide) guide. How it activates MC3R/MC4R for libido and sexual function, intranasal vs SubQ dosing, tanning, appetite suppression, and looksmaxxing protocols.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/pt-141-bremelanotide-guide' },
  keywords: 'PT-141 bremelanotide peptide guide, PT-141 dosage, PT-141 libido, bremelanotide sexual function, PT-141 tanning, melanocortin peptide, PT-141 looksmaxxing',
  openGraph: {
    title: 'PT-141 Bremelanotide Guide: Libido, Tanning & Looksmaxxing | PeptidesMuscle',
    description: 'MC3R/MC4R activation for libido, tanning, and appetite suppression. Full dosing protocol, side effect management, and looksmaxxing applications.',
    url: 'https://www.peptidesmuscle.com/pt-141-bremelanotide-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT-141 Bremelanotide Complete Guide | PeptidesMuscle',
    description: 'Libido, tanning, appetite suppression, and looksmaxxing protocols for PT-141.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'PT-141 Bremelanotide Complete Guide: Libido, Dosing & Looksmaxxing',
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
          name: 'What is PT-141 (Bremelanotide) and how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PT-141, also known as Bremelanotide, is a synthetic cyclic heptapeptide that acts as a non-selective agonist of melanocortin receptors — primarily MC3R and MC4R in the central nervous system. Unlike PDE5 inhibitors (Viagra, Cialis) that work through vascular mechanisms, PT-141 directly activates the brain\'s sexual arousal pathways, making it effective for both men and women and addressing libido at a neurological rather than peripheral level.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the correct PT-141 dosage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The typical PT-141 dosage ranges from 0.5mg to 2mg per use. Beginners should start at 0.5mg to assess tolerance, particularly for nausea. Most users find 1mg to be the optimal balance of effect and side effect profile. The maximum recommended dose is 2mg. For intranasal administration, dosing starts lower (0.5–1mg) due to reduced bioavailability. Doses should not be taken more than once every 48–72 hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does PT-141 take to work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PT-141 effects typically onset within 30–60 minutes of subcutaneous injection, or 60–90 minutes of intranasal administration. Peak effect occurs at 1–3 hours post-dose. The libido-enhancing effects can last 6–72 hours depending on dose and individual response. Tanning effects from repeated use accumulate over 2–4 weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the side effects of PT-141?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most common side effect is nausea, which affects a significant percentage of users especially at doses above 1mg. Nausea typically peaks at 1–2 hours post-dose and resolves within 3–4 hours. Other side effects include facial flushing, mild headache, and spontaneous erections in men. Taking PT-141 with food, using an anti-nausea medication like Ondansetron, or starting at the lowest effective dose all reduce nausea significantly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can PT-141 be used for tanning and looksmaxxing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. PT-141 activates MC1R (in addition to MC3R/MC4R), which stimulates melanogenesis — melanin production — in skin cells. With repeated use, this creates a gradual, natural-looking tan without UV exposure. Combined with its appetite-suppressing effects (via MC4R) and confidence-boosting neurological effects, PT-141 is used in looksmaxxing protocols for a trifecta of aesthetic and social benefits.',
          },
        },
      ],
    },
  ],
}

const accent = '#e05080'

const mechanisms = [
  {
    title: 'MC4R Activation — Central Libido Pathway',
    body: 'The primary sexual arousal mechanism of PT-141 runs through melanocortin-4 receptors (MC4R) in the hypothalamus and limbic system. Unlike peripheral vasodilators, MC4R activation generates genuine neurological desire — the subjective experience of arousal — at the central nervous system level. This is why PT-141 works even when psychological inhibition or hormonal decline has blunted sexual interest.',
  },
  {
    title: 'MC3R Activation — Energy & Appetite Regulation',
    body: 'Melanocortin-3 receptors (MC3R) regulate energy homeostasis and appetite. PT-141 activation of MC3R contributes to the appetite suppression many users report, making it useful as a looksmaxxing adjunct for those managing caloric intake. MC3R activation also plays a role in the reported mood elevation and confidence enhancement associated with PT-141 use.',
  },
  {
    title: 'MC1R Activation — Melanogenesis & Tanning',
    body: 'MC1R is the primary melanocyte-stimulating receptor in skin. PT-141 activates MC1R, triggering increased melanin synthesis in melanocytes. With repeated use over 2–4 weeks, this produces a progressive deepening of skin pigmentation — a natural-looking tan. This is the same receptor targeted by Melanotan 2, though PT-141 has a somewhat weaker tanning effect due to lower MC1R binding affinity.',
  },
  {
    title: 'Dopamine System Modulation',
    body: 'PT-141 indirectly influences dopaminergic signaling pathways connected to reward and motivation circuitry. Users frequently report elevated mood, increased sociability, and enhanced confidence for 12–48 hours after administration. This neurological component is distinct from direct receptor activation and contributes substantially to the compound\'s looksmaxxing value — confidence is the most visible social signal.',
  },
]

const timeline = [
  {
    phase: '30–90 Minutes',
    libido: 'Onset of arousal signaling. Subjective increase in sexual interest and sensitivity. Men may experience spontaneous erections.',
    tanning: 'No visible tanning effect yet — melanin synthesis has begun at the cellular level.',
    note: 'Effect onset timing depends on administration route: SubQ 30–60 min, intranasal 60–90 min.',
  },
  {
    phase: '1–3 Hours',
    libido: 'Peak libido-enhancing effect. Heightened sensitivity, enhanced arousal response, improved sexual performance.',
    tanning: 'No visible change on first use.',
    note: 'This is the optimal window for sexual activity. Nausea, if it occurs, typically peaks here.',
  },
  {
    phase: '6–72 Hours',
    libido: 'Lingering increase in baseline libido and sensitivity beyond the peak window. Many users report a 1–2 day "afterglow" effect.',
    tanning: 'Still no visible tan from a single use.',
    note: 'The extended libido effect differentiates PT-141 from short-acting PDE5 inhibitors.',
  },
  {
    phase: 'Weeks 2–4 (Repeated Use)',
    libido: 'Sustained improvements in sexual confidence and response frequency with regular use.',
    tanning: 'Progressive tan visible from week 2 onward. Deepens with each dose. Most dramatic in lighter skin types.',
    note: 'Tanning accumulates nonlinearly — most users notice a clear change after 4–6 uses.',
  },
]

const protocols = [
  {
    use: 'Sexual Function / Libido',
    color: accent,
    dose: '0.5–2mg',
    route: 'SubQ injection (abdomen)',
    timing: '1–2 hours before activity',
    notes: 'Start at 0.5mg for tolerance assessment. Most users find 1mg optimal. Do not exceed 2mg per use or dose more than once every 48 hours.',
  },
  {
    use: 'Intranasal Protocol',
    color: '#d4a043',
    dose: '0.5–1mg',
    route: 'Intranasal spray',
    timing: '60–90 min before activity',
    notes: 'Lower bioavailability than SubQ. Requires a nasal spray applicator. Some users prefer this route for convenience despite longer onset.',
  },
  {
    use: 'Tanning Protocol',
    color: '#c06030',
    dose: '0.5–1mg',
    route: 'SubQ injection',
    timing: '2–3x weekly over 3–4 weeks',
    notes: 'Use lowest effective dose for tanning — MC1R activation is dose-independent above threshold. After initial loading, once weekly maintains pigmentation.',
  },
  {
    use: 'Looksmaxxing Stack',
    color: '#9050e0',
    dose: '0.5–1mg PT-141 + MT2 tanning protocol',
    route: 'SubQ injection',
    timing: '2–3x weekly',
    notes: 'Combine with Melanotan 2 for enhanced tanning (MT2 has stronger MC1R binding). PT-141 contributes libido/confidence; MT2 handles aggressive melanogenesis.',
  },
]

const looksmaxxingBenefits = [
  {
    benefit: 'Natural Tan Without UV',
    detail: 'MC1R-driven melanogenesis produces a gradually deepening, even tan. Unlike UV tanning, there is no UV-related skin damage. The tan develops uniformly across all skin areas, including unexposed areas, making it cosmetically superior to sun tanning.',
  },
  {
    benefit: 'Appetite Suppression',
    detail: 'MC3R and MC4R activation reduces appetite for 12–24 hours post-dose. For individuals managing body composition, PT-141 can serve as a tool for maintaining a caloric deficit without the psychological struggle of hunger — improving adherence to lean bulk or cut protocols.',
  },
  {
    benefit: 'Confidence & Social Dominance',
    detail: 'The dopaminergic and melanocortinergic effects of PT-141 produce documented mood elevation and social confidence. In social interactions, this translates to more assertive body language, improved eye contact, and the kind of relaxed, high-status composure that is the most powerful looksmaxxing variable of all.',
  },
  {
    benefit: 'Spontaneous Erection Quality (Men)',
    detail: 'PT-141 improves erectile quality through CNS mechanisms rather than vascular effects. This results in improved spontaneous erections rather than demand-only performance — an indicator of testosterone and neurological health that contributes to the aura of sexual vitality that looksmaxxers seek.',
  },
]

export default function Pt141BremelanotidePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#e05080] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Melanocortin Peptide</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            PT-141 Bremelanotide:<br />
            <span className="italic" style={{ color: accent }}>Libido, Tan & Confidence Protocol</span>
          </h1>
      <AuthorByline datePublished="2026-04-03" dateModified="2026-04-03" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            The only peptide that activates sexual desire at the neurological level — while simultaneously driving melanogenesis, suppressing appetite, and elevating social confidence. The looksmaxxer&apos;s melanocortin compound.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — WHAT PT-141 DOES */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What PT-141 Actually Does</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>PT-141, chemically known as Bremelanotide, is a synthetic analogue of alpha-melanocyte-stimulating hormone (α-MSH). It is a cyclic heptapeptide derived from Melanotan 2, developed initially as a sunless tanning agent before researchers discovered its powerful effects on sexual function. It received FDA approval in 2019 for hypoactive sexual desire disorder (HSDD) in premenopausal women under the brand name Vyleesi.</p>
            <p>The fundamental difference between PT-141 and conventional sexual performance drugs is mechanism. Sildenafil (Viagra) and tadalafil (Cialis) are phosphodiesterase-5 inhibitors — they work peripherally by preventing the breakdown of cGMP in penile tissue, increasing blood flow to enable erections. They do nothing for desire. PT-141 acts centrally, in the brain, directly stimulating the neural circuits responsible for sexual motivation and arousal. It makes you want sex, not just facilitates the mechanics of it.</p>
            <p>This central mechanism is why PT-141 works for both men and women — libido is a neurological phenomenon in both sexes — and why it is effective in cases where conventional drugs fail: low testosterone, psychological inhibition, SSRl-induced sexual dysfunction, and age-related decline in sexual interest.</p>
            <p>Beyond sexual function, PT-141&apos;s activation of the melanocortin system produces a range of secondary effects that have made it a fixture in advanced looksmaxxing protocols: progressive skin tanning through MC1R activation, appetite suppression through MC3R/MC4R, and a confidence-elevating neurological effect that experienced users describe as a relaxed, high-status social presence lasting 24–48 hours post-dose.</p>
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

        {/* 02 — TIMELINE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Timeline of Effects</h2>
          </div>
          <div className="pl-10 space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{t.phase}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-2">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">LIBIDO / SEXUAL FUNCTION</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.libido}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">TANNING / MELANOGENESIS</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.tanning}</p>
                  </div>
                </div>
                <p className="text-[#50505e] text-[12px] italic">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 03 — DOSING PROTOCOLS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dosing Protocols</h2>
          </div>
          <div className="pl-10 space-y-4">
            {protocols.map((p, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${p.color}` }}>
                <p className="text-white font-700 text-[15px] mb-3">{p.use}</p>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                    <p className="text-[#aaaabc] text-[13px] font-600">{p.dose}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">ROUTE</p>
                    <p className="text-[#aaaabc] text-[13px]">{p.route}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">TIMING</p>
                    <p className="text-[#aaaabc] text-[13px]">{p.timing}</p>
                  </div>
                </div>
                <p className="text-[#8888a0] text-[12px] leading-relaxed">{p.notes}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 04 — SIDE EFFECTS MANAGEMENT */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Side Effects & Nausea Management</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Nausea is the primary limiting side effect of PT-141 and affects approximately 40% of users, particularly at doses of 1.75mg or higher. The mechanism is likely MC4R activation in the dorsal vagal complex and area postrema — brain regions that regulate nausea and vomiting. Understanding this allows for systematic management strategies that reduce or eliminate nausea without reducing efficacy.</p>
            <p>Facial flushing (redness, warmth) and mild headache are common at all doses and are generally mild and transient. These typically resolve within 2–3 hours and are considered acceptable side effects by most users. Blood pressure may transiently drop — individuals with cardiovascular conditions or those taking antihypertensives should consult a physician before use.</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {[
                { label: 'Start Low', val: 'Begin at 0.5mg for your first 2–3 uses to assess individual tolerance before increasing to 1mg or higher. Many users achieve full effect at 0.5–1mg.' },
                { label: 'Take With Food', val: 'Administering PT-141 after a light meal reduces nausea significantly by slowing absorption rate and blunting the acute melanocortin receptor activation peak.' },
                { label: 'Ondansetron (Zofran)', val: 'Taking 4mg Ondansetron 30–60 minutes before PT-141 injection nearly eliminates nausea in most users. This is the gold-standard nausea management approach.' },
                { label: 'Timing Matters', val: 'Lying down for 30–60 minutes after injection until the initial absorption peak passes reduces nausea severity. Movement worsens nausea during the onset phase.' },
                { label: 'Ginger Supplements', val: 'Ginger (500–1000mg) taken 30 minutes before administration is an evidence-based mild antiemetic that many users find sufficient for doses under 1.75mg.' },
                { label: 'Dose Frequency', val: 'Do not dose PT-141 more than once every 48 hours. More frequent dosing does not increase benefits and may increase cumulative side effect burden and receptor tolerance.' },
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

        {/* 05 — VS MELANOTAN 2 */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>PT-141 vs. Melanotan 2</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">PT-141 was derived from Melanotan 2 (MT2) — they share significant structural similarity but have distinct receptor binding profiles and practical use cases. Understanding the differences is essential for selecting the right compound or combination for your goals.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[15px] mb-3">PT-141 (Bremelanotide)</p>
                <div className="space-y-2">
                  {[
                    ['MC1R affinity', 'Moderate'],
                    ['MC3R affinity', 'High'],
                    ['MC4R affinity', 'High'],
                    ['Libido effect', 'Strong'],
                    ['Tanning effect', 'Moderate'],
                    ['Appetite suppression', 'Moderate-Strong'],
                    ['Duration of action', '6–72 hours'],
                    ['FDA approved', 'Yes (HSDD in women)'],
                  ].map(([k, v], i) => (
                    <div key={i} className="flex justify-between text-[12px]">
                      <span className="text-[#50505e]">{k}</span>
                      <span className="text-[#aaaabc]">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #d4a043' }}>
                <p className="text-white font-700 text-[15px] mb-3">Melanotan 2</p>
                <div className="space-y-2">
                  {[
                    ['MC1R affinity', 'Very High'],
                    ['MC3R affinity', 'Moderate'],
                    ['MC4R affinity', 'Moderate'],
                    ['Libido effect', 'Moderate'],
                    ['Tanning effect', 'Very Strong'],
                    ['Appetite suppression', 'Moderate'],
                    ['Duration of action', '2–3 weeks (tan)'],
                    ['FDA approved', 'No'],
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
              <p className="text-white font-600 text-[14px] mb-2">When to Combine Both</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Advanced looksmaxxers use MT2 for aggressive tanning (higher MC1R binding) while using PT-141 for its superior libido and confidence effects. Running MT2 2–3x weekly for tanning while using PT-141 situationally for social/sexual events captures the best of both compounds without redundant receptor saturation.</p>
            </div>
            <Link href="/melanotan-2-looksmaxxing-tan" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
              Full Melanotan 2 Guide →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — LOOKSMAXXING */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>PT-141 for Looksmaxxing</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">Looksmaxxing is the systematic optimization of physical and social attractiveness. PT-141 occupies a unique niche in this space because it addresses multiple dimensions simultaneously: physical appearance (tanning, body composition via appetite suppression) and social presentation (confidence, energy, sexual vitality). The compound is arguably the highest-leverage single peptide for social attractiveness optimization.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {looksmaxxingBenefits.map((b, i) => (
                <div key={i} className="card rounded-xl p-5">
                  <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{b.benefit}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{b.detail}</p>
                </div>
              ))}
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-3">Sample Looksmaxxing Weekly Protocol</p>
              <div className="space-y-2">
                {[
                  ['Monday', '0.5–1mg PT-141 SubQ — tanning + confidence loading dose'],
                  ['Wednesday', '0.5mg PT-141 SubQ — tanning maintenance + appetite suppression'],
                  ['Friday', '0.5–1mg PT-141 SubQ — social/event readiness dose (2–4 hrs before)'],
                  ['Weekend', 'No PT-141 — minimum 48-hour gap between doses maintained'],
                ].map(([day, action], i) => (
                  <div key={i} className="flex gap-4 text-[13px]">
                    <span className="text-[#50505e] w-24 flex-shrink-0">{day}</span>
                    <span className="text-[#aaaabc]">{action}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/looksmaxxing-peptides-guide-men" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
              Full Looksmaxxing Peptides Guide →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 07 — RECONSTITUTION & ADMINISTRATION */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">07</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Reconstitution & Administration</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>PT-141 is supplied as a lyophilized (freeze-dried) powder in vials of 10mg. It must be reconstituted with bacteriostatic water before injection. The reconstitution process is identical to other injectable peptides.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Reconstitution', val: 'Add 2ml bacteriostatic water to a 10mg vial. This yields 5mg/ml concentration. For a 1mg dose, draw 0.2ml (20 units on an insulin syringe).' },
                { label: 'Needle Selection', val: '29–31 gauge, 0.5 inch insulin syringe. Subcutaneous injection into the abdomen. Pinch skin, inject at 45°, release skin before withdrawing.' },
                { label: 'Storage', val: 'Lyophilized powder: refrigerate or freeze. Reconstituted solution: refrigerate (2–8°C), use within 28 days. Never freeze reconstituted peptide.' },
                { label: 'Intranasal Option', val: 'Transfer reconstituted PT-141 to a nasal spray bottle. Use 0.1ml per spray at 5mg/ml concentration = 0.5mg per nasal spray dose.' },
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

        {/* 08 — BUY */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get PT-141</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">PT-141 (Bremelanotide)</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Pharmaceutical-grade lyophilized powder. Certificate of analysis verified. The only FDA-approved melanocortin peptide for sexual function.</p>
              <div className="flex gap-3">
                <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Looksmaxxing Stack</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">PT-141 + Melanotan 2 for maximum tanning and confidence. The complete melanocortin protocol.</p>
              <div className="flex gap-3">
                <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Shop All →</a>
                <Link href="/melanotan-2-looksmaxxing-tan" className="btn-ghost flex-1 justify-center py-3 text-[13px]">MT2 Guide</Link>
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
                q: 'Does PT-141 work for women?',
                a: 'Yes — PT-141 is FDA-approved specifically for hypoactive sexual desire disorder (HSDD) in premenopausal women. The central mechanism of libido enhancement via MC4R activation applies equally in both sexes. Clinical trials demonstrated significant improvements in sexual desire and satisfying sexual events in women. Many women report PT-141 to be more effective than any other available intervention for low libido.',
              },
              {
                q: 'How does PT-141 compare to Viagra or Cialis?',
                a: 'They work through entirely different mechanisms and are not directly comparable. PDE5 inhibitors (Viagra, Cialis) improve erectile mechanics by increasing penile blood flow — they do not affect desire. PT-141 generates actual sexual desire through CNS mechanisms. The two can theoretically be combined for both desire and mechanical erectile support, though this has not been formally studied and should only be done with medical supervision.',
              },
              {
                q: 'Will PT-141 cause priapism (prolonged erection)?',
                a: 'Priapism is not a documented risk with PT-141 at standard doses. The spontaneous erections it produces are typically normal in duration and not medically concerning. Unlike PDE5 inhibitors, PT-141\'s mechanism does not continuously force blood into penile tissue — it acts through neurological pathways that have natural feedback regulation.',
              },
              {
                q: 'How long does the tan from PT-141 last?',
                a: 'The tan produced by PT-141 (and more dramatically by Melanotan 2) persists for several weeks after stopping administration, with natural fading over 4–8 weeks as melanocytes return to baseline activity. The exact duration depends on individual skin type and how much melanin was accumulated during the loading protocol.',
              },
              {
                q: 'Can PT-141 be used with peptide stacks?',
                a: 'PT-141 does not interact with common peptide stacks (BPC-157, TB-500, CJC-1295, ipamorelin, etc.) and can be used concurrently. It operates through the melanocortin system which is independent of GH secretagogue and tissue repair pathways. The primary consideration when combining PT-141 with other compounds is managing the injection schedule and ensuring adequate gaps between PT-141 doses.',
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
              { href: '/melanotan-2-looksmaxxing-tan', label: 'Melanotan 2 Guide', desc: 'Complete MT2 tanning and looksmaxxing protocol — the stronger melanocortin tanning peptide' },
              { href: '/looksmaxxing-peptides-guide-men', label: 'Looksmaxxing Peptides for Men', desc: 'Full stack guide for physical and social optimization using peptides' },
              { href: '/facial-looksmaxxing-peptides-guide', label: 'Facial Looksmaxxing Peptides', desc: 'GHK-Cu, SNAP-8, and other peptides for facial skin quality and aesthetics' },
              { href: '/looksmaxxing-routine-daily-protocol', label: 'Daily Looksmaxxing Protocol', desc: 'Where PT-141 fits in a comprehensive daily and weekly peptide schedule' },
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
