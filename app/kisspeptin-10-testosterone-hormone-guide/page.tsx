import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Kisspeptin-10: The Hormone Master Switch for Testosterone & Fertility | PeptidesMuscle',
  description: 'Kisspeptin-10 regulates the HPG axis above GnRH, LH, and FSH — the highest-leverage intervention point for natural testosterone optimization. Full protocol, HPG cascade explained, and TRT comparison.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/kisspeptin-10-testosterone-hormone-guide' },
  keywords: 'kisspeptin-10 testosterone, kisspeptin HPG axis, kisspeptin LH, kisspeptin dosage, natural testosterone optimization, kisspeptin vs TRT, kisspeptin fertility, kisspeptin protocol',
  openGraph: {
    title: 'Kisspeptin-10: The Hormone Master Switch for Testosterone & Fertility | PeptidesMuscle',
    description: 'Kisspeptin-10 sits above GnRH, LH, and FSH in the hormonal cascade — making it the highest-leverage intervention for natural testosterone optimization without HPG axis shutdown.',
    url: 'https://www.peptidesmuscle.com/kisspeptin-10-testosterone-hormone-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kisspeptin-10: Testosterone Master Switch Guide | PeptidesMuscle',
    description: 'How Kisspeptin-10 activates the HPG axis for natural testosterone optimization — and why it is fundamentally different from TRT.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'Kisspeptin-10: The Hormone Master Switch for Testosterone & Fertility',
      datePublished: '2026-04-14',
      dateModified: '2026-04-14',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com', logo: { '@type': 'ImageObject', url: 'https://www.peptidesmuscle.com/max-avatar.png' } },
      author: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#dr-marcus-chen', name: 'Dr. Marcus Chen', url: 'https://www.peptidesmuscle.com/about/editors' },
      reviewedBy: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#dr-marcus-chen' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Kisspeptin-10 and what does it do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kisspeptin-10 is a ten-amino-acid fragment of the kisspeptin-54 protein produced by neurons in the hypothalamus. It is the master upstream regulator of the HPG (hypothalamic-pituitary-gonadal) axis — the hormonal cascade that governs testosterone production in men and LH/FSH balance in women. By binding KISS1R receptors on GnRH neurons, kisspeptin-10 triggers pulsatile GnRH release, which drives LH and FSH secretion from the pituitary, which in turn stimulates testosterone production in the testes. It works with the body\'s own hormonal system rather than bypassing it.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the correct Kisspeptin-10 dosage for men?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The standard dosage for men is 100mcg subcutaneously administered 2–3 times per week. Morning dosing aligns kisspeptin\'s GnRH pulse with the natural diurnal testosterone peak. Start at 100mcg twice weekly and assess LH and testosterone response after 2–4 weeks before increasing frequency. Do not use kisspeptin-10 concurrently with exogenous testosterone therapy, as TRT suppresses the HPG axis that kisspeptin is designed to activate.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is Kisspeptin-10 different from TRT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TRT (testosterone replacement therapy) bypasses the HPG axis entirely by introducing exogenous testosterone. This shuts down natural production through negative feedback — the pituitary stops releasing LH because testosterone levels are already elevated, the testes atrophy from disuse, and fertility is suppressed. Kisspeptin-10 does the opposite: it activates the top of the HPG cascade to stimulate the body\'s own testosterone production, preserving testicular function and fertility. It works with the body\'s natural system rather than replacing it.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does Kisspeptin-10 take to increase testosterone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LH elevation is measurable within 24–48 hours of the first dose, as kisspeptin\'s effect on GnRH release is rapid. Testosterone rise from the increased LH signal becomes measurable at 2–4 weeks of consistent use. Libido effects, which track LH more closely than total testosterone, are often noticed within the first week. Significant improvements in energy, body composition, and wellbeing typically emerge at weeks 4–8 of a consistent protocol.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Kisspeptin-10 be used for post-TRT recovery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kisspeptin-10 is theoretically well-suited for HPG axis restart after TRT discontinuation, as it stimulates the cascade from the very top — above the GnRH neurons that TRT suppresses. Post-TRT recovery typically uses SERMs (clomiphene, tamoxifen) to block estrogen feedback at the pituitary and restore LH production. Kisspeptin-10 could complement or in some cases replace this approach by directly driving GnRH → LH signaling. This is an area of active research interest; standard PCT protocols should be followed under medical guidance.',
          },
        },
      ],
    },
  ],
}

const accent = '#f59e0b'

const hpgCascade = [
  {
    step: '01',
    title: 'Kisspeptin Neurons (Hypothalamus)',
    body: 'Kiss1-expressing neurons in the arcuate nucleus and anteroventral periventricular nucleus of the hypothalamus release kisspeptin in pulses. These neurons are the master upstream switch of the entire HPG axis — they respond to sex steroids, stress hormones, body composition signals, and light-dark cycles to modulate the testosterone cascade.',
    note: 'Kisspeptin-10 acts at this level — the highest point in the cascade.',
    highlight: true,
  },
  {
    step: '02',
    title: 'GnRH Pulse Release',
    body: 'Kisspeptin binds KISS1R receptors on GnRH (gonadotropin-releasing hormone) neurons, triggering pulsatile GnRH secretion into the hypothalamic-pituitary portal system. The pulsatile pattern is critical — continuous GnRH actually suppresses the pituitary (used in chemical castration therapies). Kisspeptin preserves the physiological pulse pattern.',
    note: 'GnRH analogues that bypass kisspeptin cannot achieve natural pulse patterning.',
  },
  {
    step: '03',
    title: 'LH & FSH from the Pituitary',
    body: 'GnRH pulses stimulate anterior pituitary gonadotroph cells to release LH (luteinizing hormone) and FSH (follicle-stimulating hormone) into systemic circulation. LH is the primary driver of testosterone production in Leydig cells. FSH drives sperm production and follicular development. Both are preserved by kisspeptin-10.',
    note: 'TRT shuts LH and FSH secretion off entirely via negative feedback.',
  },
  {
    step: '04',
    title: 'Testosterone Production (Testes)',
    body: 'LH binds LH receptors on testicular Leydig cells, stimulating cholesterol conversion to testosterone. Testosterone enters circulation, exerts anabolic effects, and feeds back to the hypothalamus and pituitary to regulate its own production. Kisspeptin works with this negative feedback loop rather than overriding it with supraphysiological exogenous levels.',
    note: 'Testicular function and fertility are maintained throughout kisspeptin-10 use.',
  },
]

const declineReasons = [
  {
    title: 'Kisspeptin Neuron Loss With Age',
    body: 'The density and activity of hypothalamic kisspeptin neurons declines measurably with age — particularly after 35 in men. This upstream failure is the root cause of age-related testosterone decline that occurs before the testes themselves lose function. The cascade fails at the top before it fails at the bottom.',
  },
  {
    title: 'HPA-HPG Antagonism',
    body: 'Chronic cortisol elevation — from training stress, sleep debt, psychological pressure, or metabolic dysfunction — directly suppresses kisspeptin neuron firing. This is the mechanism behind stress-induced low testosterone. CRH (corticotropin-releasing hormone) from HPA activation inhibits kisspeptin neurons, turning off the testosterone cascade from the top.',
  },
  {
    title: 'Estrogenic Environment',
    body: 'Xenoestrogens from plastics, food, and environmental exposures, combined with elevated aromatase activity in excess adipose tissue, create estrogenic signaling that suppresses GnRH pulsatility via negative feedback at the kisspeptin level. This is why body fat percentage is strongly inversely correlated with testosterone — not just through aromatization but through kisspeptin suppression.',
  },
  {
    title: 'Sleep Debt & REM Disruption',
    body: 'Pulsatile LH secretion is tightly linked to REM sleep cycles. Men with sleep debt show measurably reduced testosterone production from the disrupted LH pulse pattern. Sleep deprivation also elevates cortisol, compounding HPA-HPG antagonism. Kisspeptin-10 combined with DSIP for sleep optimization addresses both the upstream signaling and the sleep-linked LH pulse pattern.',
  },
]

const comparisonRows = [
  { factor: 'Mechanism', kiss: 'Activates HPG cascade from the top (kisspeptin → GnRH → LH → T)', trt: 'Bypasses HPG axis entirely with exogenous testosterone' },
  { factor: 'Testicular Function', kiss: 'Preserved — testes remain active throughout', trt: 'Suppressed — Leydig cells atrophy from LH absence' },
  { factor: 'Natural T Production', kiss: 'Stimulated — body produces its own testosterone', trt: 'Shut down — negative feedback eliminates endogenous production' },
  { factor: 'Fertility', kiss: 'Maintained — FSH preserved, sperm production continues', trt: 'Suppressed — FSH eliminated, azoospermia common' },
  { factor: 'LH / FSH', kiss: 'Elevated — upstream drive increases both hormones', trt: 'Suppressed to near-zero — no drive from pituitary' },
  { factor: 'Post-Cycle Recovery', kiss: 'Not required — no HPG axis shutdown', trt: 'Required — PCT needed to restart suppressed cascade' },
  { factor: 'Physiological Ceiling', kiss: 'Upper range of natural production — no supraphysiological levels', trt: 'Dose-dependent — can reach supraphysiological levels' },
  { factor: 'Best For', kiss: 'Suboptimal natural T, age-related decline, fertility support, pre-TRT optimization', trt: 'Clinically hypogonadal, post-TRT maintenance, very low baseline T' },
]

export default function Kisspeptin10TestosteronePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] bg-[#f59e0b] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Testosterone & Hormonal Optimization</p>
          </div>
          <h1
            className="font-['Playfair_Display'] font-900 text-white mb-6"
            style={{ fontSize: 'clamp(30px, 5vw, 60px)', lineHeight: 1.1 }}
          >
            Kisspeptin-10:<br />
            <span className="italic" style={{ color: accent }}>The Hormone Master Switch</span>
          </h1>
      <AuthorByline datePublished="2026-04-14" dateModified="2026-04-14" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl mb-6">
            Kisspeptin-10 is the master regulator of the HPG axis — the hormonal command chain that governs testosterone production in men and LH/FSH balance in women. It sits above GnRH, LH, and FSH in the cascade, making it the highest-leverage intervention point for hormonal optimization available without exogenous testosterone.
          </p>
          <p className="text-[#8888a0] text-[16px] leading-relaxed max-w-2xl mb-8">
            Most hormonal interventions — TRT, SERMs, aromatase inhibitors — act at or below the pituitary level. Kisspeptin-10 acts above all of them, at the very source of the testosterone production signal. This is not replacing your hormones. This is reactivating the system that was producing them.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag-gold">HPG Axis Activation</span>
            <span className="tag">Natural Testosterone</span>
            <span className="tag">LH Optimization</span>
            <span className="tag">Fertility Support</span>
            <span className="tag">No Shutdown</span>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 01 — THE HPG AXIS */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>01</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            The HPG Axis — How Testosterone Is Actually Made
          </h2>
          <p className="text-[#8888a0] text-[16px] leading-relaxed mb-8 max-w-3xl">
            Testosterone production is not a simple gland-to-bloodstream process. It is the final output of a carefully orchestrated four-step cascade that begins in the brain. Understanding this cascade is the key to understanding why kisspeptin-10 is fundamentally different from every other testosterone intervention.
          </p>
          <div className="space-y-4">
            {hpgCascade.map((step, i) => (
              <div
                key={i}
                className={`card rounded-xl p-5 ${step.highlight ? 'border border-[#f59e0b]/25' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <p className="mono text-[13px] font-700 flex-shrink-0" style={{ color: accent }}>{step.step}</p>
                  <div>
                    <p className="font-700 text-white text-[15px] mb-2">{step.title}</p>
                    <p className="text-[#8888a0] text-[13px] leading-relaxed mb-2">{step.body}</p>
                    <p className="text-[12px] italic" style={{ color: step.highlight ? accent : '#50505e' }}>{step.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="card rounded-xl p-5 mt-4">
            <p className="text-white font-600 text-[14px] mb-2">The Key Difference From Other Interventions</p>
            <p className="text-[#8888a0] text-[14px] leading-relaxed">
              Most HRT and testosterone optimization approaches bypass some or all of this cascade. SERMs block estrogen feedback at the pituitary to increase LH indirectly. hCG mimics LH to drive testicular production. TRT replaces the final output entirely. Kisspeptin-10 is the only intervention that activates the cascade from the very top — the source — allowing the entire physiological system to function as it evolved, with natural pulse patterning preserved at every level.
            </p>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 02 — WHY TESTOSTERONE DECLINES */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>02</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Why Natural Testosterone Declines
          </h2>
          <p className="text-[#8888a0] text-[16px] leading-relaxed mb-8 max-w-3xl">
            Age-related testosterone decline is not primarily a testicular problem — it is a hypothalamic problem. The testes of most men in their 40s and 50s retain significant functional capacity. The failure is upstream, at the kisspeptin neuron level that controls the cascade. This is why kisspeptin-10 is particularly relevant to early-to-mid stage age-related decline.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {declineReasons.map((r, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="font-700 text-[14px] mb-2 text-white">{r.title}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 03 — RESULTS */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>03</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            What to Expect: Results by Timeline
          </h2>
          <p className="text-[#8888a0] text-[16px] leading-relaxed mb-8 max-w-3xl">
            Kisspeptin-10's effects follow the biological timeline of the HPG cascade — rapid upstream effects, with downstream testosterone changes emerging over weeks.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {/* Men */}
            <div>
              <p className="mono text-[11px] uppercase tracking-widest mb-4" style={{ color: accent }}>Men</p>
              <div className="space-y-3">
                {[
                  { time: '24–48 hours post-dose', result: 'LH elevation measurable in bloodwork. GnRH pulse triggered within hours of administration.' },
                  { time: 'Days 3–7', result: 'Libido effects often noted within the first week — LH tracks closer to libido than total testosterone in acute responses.' },
                  { time: 'Weeks 2–4', result: 'Total testosterone rise measurable via bloodwork. Morning erection quality improves. Energy and motivation increase.' },
                  { time: 'Weeks 4–8', result: 'Body composition improvements — better muscle recovery, reduced visceral fat accumulation, improved training performance.' },
                  { time: 'Weeks 8–12', result: 'Sustained hormonal optimization. Testicular fullness maintained throughout. No recovery protocol required after cycle.' },
                ].map((r, i) => (
                  <div key={i} className="card rounded-xl p-4">
                    <p className="mono text-[11px] uppercase tracking-widest mb-1" style={{ color: accent }}>{r.time}</p>
                    <p className="text-[#8888a0] text-[13px] leading-relaxed">{r.result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Women */}
            <div>
              <p className="mono text-[11px] uppercase tracking-widest mb-4" style={{ color: '#f472b6' }}>Women</p>
              <div className="space-y-3">
                {[
                  { time: 'Days 1–7', result: 'LH surge modulation begins. For women with irregular LH surges, kisspeptin-10 can help regularize the mid-cycle LH peak that triggers ovulation.' },
                  { time: 'Weeks 1–2', result: 'Improved energy and libido from normalized LH/FSH balance. Hormonal mood fluctuations begin to stabilize.' },
                  { time: 'Weeks 2–4', result: 'Menstrual cycle regularity improvements in women with LH-related cycle disruption (PCOS, hypothalamic amenorrhea).' },
                  { time: 'Weeks 4–8', result: 'Fertility window optimization for conception-focused protocols. Improved follicular development from FSH normalization.' },
                  { time: 'Note', result: 'Women should time dosing relative to their cycle phase. Consult cycle-specific protocols and healthcare guidance for fertility applications.' },
                ].map((r, i) => (
                  <div key={i} className="card rounded-xl p-4">
                    <p className="mono text-[11px] uppercase tracking-widest mb-1" style={{ color: '#f472b6' }}>{r.time}</p>
                    <p className="text-[#8888a0] text-[13px] leading-relaxed">{r.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 04 — PROTOCOL */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>04</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Kisspeptin-10 Protocol
          </h2>
          <p className="text-[#8888a0] text-[16px] leading-relaxed mb-8 max-w-3xl">
            Kisspeptin-10 is administered subcutaneously with an insulin syringe (29–31 gauge). The pulsatile nature of its mechanism means frequency and timing matter more than dose escalation.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="card-elevated rounded-2xl p-6">
              <p className="mono text-[11px] uppercase tracking-widest mb-3" style={{ color: accent }}>Men</p>
              <div className="space-y-3">
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Starting Protocol</p>
                  <p className="text-[#aaaabc] text-[14px]">100mcg SubQ, twice weekly (e.g. Mon/Thu)</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Full Protocol</p>
                  <p className="text-[#aaaabc] text-[14px]">100mcg SubQ, 2–3x per week</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Timing</p>
                  <p className="text-[#aaaabc] text-[14px]">Morning — aligns with natural diurnal testosterone peak</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Cycle</p>
                  <p className="text-[#aaaabc] text-[14px]">8–12 weeks on, 4 weeks off. Recheck labs at week 8.</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Important</p>
                  <p className="text-[#aaaabc] text-[14px]">Do NOT use with exogenous testosterone — TRT suppresses the HPG axis kisspeptin is activating</p>
                </div>
              </div>
            </div>

            <div className="card-elevated rounded-2xl p-6">
              <p className="mono text-[11px] uppercase tracking-widest mb-3" style={{ color: '#f472b6' }}>Women</p>
              <div className="space-y-3">
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">General Hormonal Balance</p>
                  <p className="text-[#aaaabc] text-[14px]">50–100mcg SubQ, 2x per week</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Fertility Targeting</p>
                  <p className="text-[#aaaabc] text-[14px]">Cycle-timed dosing — consult healthcare provider for LH-surge timing</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Cycle</p>
                  <p className="text-[#aaaabc] text-[14px]">Align with menstrual cycle. Not for use during pregnancy.</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Monitoring</p>
                  <p className="text-[#aaaabc] text-[14px]">Track LH, FSH, and estradiol at baseline and week 4</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Note</p>
                  <p className="text-[#aaaabc] text-[14px]">Women using HRT should consult prescriber before adding kisspeptin</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card rounded-xl p-5">
            <p className="text-white font-600 text-[14px] mb-2">Bloodwork Protocol</p>
            <p className="text-[#8888a0] text-[14px] leading-relaxed">
              Run baseline labs before starting: total testosterone, free testosterone, LH, FSH, SHBG, estradiol. Retest at week 4 (to confirm LH response) and week 8 (to assess total testosterone change). Bloodwork confirmation is the only objective measure of kisspeptin response and allows dose/frequency optimization.
            </p>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 05 — STACK */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>05</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            The Testosterone Optimization Stack
          </h2>
          <p className="text-[#8888a0] text-[16px] leading-relaxed mb-8 max-w-3xl">
            Kisspeptin-10 works best in the context of a complete hormonal optimization protocol. Two peptides complement it particularly well by addressing related axes without interfering with the HPG cascade it activates.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                name: 'Kisspeptin-10',
                role: 'HPG axis activator',
                why: 'The primary hormone switch — drives the GnRH → LH → Testosterone cascade from the top. The foundation of the stack.',
                color: accent,
              },
              {
                name: 'BPC-157',
                role: 'Gut health & nutrient absorption',
                why: 'Testosterone production requires cholesterol, zinc, and fat-soluble nutrient transport. BPC-157\'s gut healing improves the metabolic substrate available for steroidogenesis.',
                color: '#40c090',
              },
              {
                name: 'Ipamorelin',
                role: 'GH optimization',
                why: 'Growth hormone and testosterone synergize — GH promotes IGF-1 production, improves insulin sensitivity, and enhances the anabolic effect of normalized testosterone. Clean GH pulse without cortisol elevation.',
                color: '#60a5fa',
              },
            ].map((p, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="mono text-[11px] uppercase tracking-widest mb-2" style={{ color: p.color }}>{p.name}</p>
                <p className="font-700 text-white text-[14px] mb-2">{p.role}</p>
                <p className="text-[#8888a0] text-[12px] leading-relaxed">{p.why}</p>
              </div>
            ))}
          </div>

          <h3 className="font-['Playfair_Display'] font-700 text-white text-[20px] mb-5">Get the Stack</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6 flex flex-col gap-4">
              <p className="font-['Playfair_Display'] font-700 text-white text-lg">Kisspeptin-10 — 10mg</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">The HPG axis master switch. Activates the complete kisspeptin → GnRH → LH → Testosterone cascade for natural hormonal optimization without axis shutdown.</p>
              <div className="flex gap-3 mt-auto">
                <a href={'/go/kisspeptin-10-10mg'} target="_blank" rel="noopener nofollow sponsored" className="btn-primary text-[13px] py-2.5 px-5 flex-1 justify-center">Buy Now</a>
                <Link href="/products/kisspeptin-10-10mg" className="btn-secondary text-[13px] py-2.5 px-5">Details</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6 flex flex-col gap-4">
              <p className="font-['Playfair_Display'] font-700 text-white text-lg">Ipamorelin — 10mg</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Clean GH secretagogue without cortisol or prolactin elevation. Synergizes with normalized testosterone for improved body composition, recovery, and anabolic response.</p>
              <div className="flex gap-3 mt-auto">
                <a href={'/go/ipamorelin-10mg'} target="_blank" rel="noopener nofollow sponsored" className="btn-primary text-[13px] py-2.5 px-5 flex-1 justify-center">Buy Now</a>
                <Link href="/products/ipamorelin-10mg" className="btn-secondary text-[13px] py-2.5 px-5">Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 06 — KISSPEPTIN vs TRT */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>06</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Kisspeptin-10 vs TRT: Side-by-Side
          </h2>
          <p className="text-[#8888a0] text-[16px] leading-relaxed mb-8 max-w-3xl">
            Both kisspeptin-10 and TRT address low testosterone — but through opposite mechanisms with different trade-offs. Understanding the distinction is essential to choosing the right approach for your situation.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr>
                  <th className="text-left text-[#50505e] text-[11px] uppercase tracking-widest py-3 pr-4 font-400 min-w-[140px]">Factor</th>
                  <th className="text-left py-3 pr-4 min-w-[220px]">
                    <span className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>Kisspeptin-10</span>
                  </th>
                  <th className="text-left py-3 min-w-[220px]">
                    <span className="mono text-[11px] uppercase tracking-widest text-[#8888a0]">TRT (Testosterone Replacement)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={`border-t border-[#1a1a22] ${i % 2 === 0 ? 'bg-[#0d0d10]' : ''}`}>
                    <td className="py-3 pr-4 text-[#50505e] text-[12px] align-top font-500">{row.factor}</td>
                    <td className="py-3 pr-4 text-[#aaaabc] leading-relaxed align-top">{row.kiss}</td>
                    <td className="py-3 text-[#8888a0] leading-relaxed align-top">{row.trt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card rounded-xl p-5 mt-6">
            <p className="text-white font-600 text-[14px] mb-2">Who Should Choose Kisspeptin-10</p>
            <p className="text-[#8888a0] text-[14px] leading-relaxed">
              Kisspeptin-10 is the right choice for men with suboptimal testosterone from lifestyle, age-related hypothalamic decline, or stress-driven HPA-HPG suppression — where the HPG axis retains functional capacity but is not being adequately driven. It is also the appropriate choice for fertility preservation, for men wanting to avoid the HPG axis shutdown and dependence of TRT, and as a first step before committing to exogenous hormone replacement. TRT remains appropriate for men with clinically confirmed primary hypogonadism or very low baseline testosterone where the HPG axis has lost functional reserve.
            </p>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 07 — FAQ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>07</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-8"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is Kisspeptin-10 and what does it do?',
                a: 'Kisspeptin-10 is a ten-amino-acid fragment of the kisspeptin-54 protein produced by hypothalamic neurons. It is the master upstream regulator of the HPG axis. By binding KISS1R receptors on GnRH neurons, it triggers pulsatile GnRH release, driving LH and FSH from the pituitary, which stimulates testosterone production in the testes. It works with the body\'s own hormonal system rather than bypassing it.',
              },
              {
                q: 'What is the correct Kisspeptin-10 dosage for men?',
                a: '100mcg subcutaneously, 2–3 times per week. Morning dosing aligns with the natural diurnal testosterone peak. Start at twice weekly and assess via bloodwork (LH, total testosterone) at weeks 2 and 4 before adjusting frequency. Do not use concurrently with exogenous testosterone — TRT suppresses the HPG axis that kisspeptin is designed to activate.',
              },
              {
                q: 'How is Kisspeptin-10 different from TRT?',
                a: 'TRT bypasses the HPG axis by introducing exogenous testosterone, shutting down natural production via negative feedback. Kisspeptin-10 activates the cascade from the very top — the kisspeptin neuron level — allowing the entire physiological testosterone production system to operate naturally. Testicular function and fertility are preserved throughout kisspeptin-10 use. No post-cycle recovery protocol is required.',
              },
              {
                q: 'How long does Kisspeptin-10 take to increase testosterone?',
                a: 'LH elevation is measurable within 24–48 hours of the first dose. Testosterone rise becomes measurable at 2–4 weeks of consistent use. Libido effects often appear within the first week as they track LH closely. Significant energy, body composition, and wellbeing improvements emerge at weeks 4–8.',
              },
              {
                q: 'Can Kisspeptin-10 be used for post-TRT recovery?',
                a: 'Kisspeptin-10 is theoretically well-suited for HPG axis restart after TRT discontinuation, as it stimulates the cascade above the GnRH neurons that TRT suppresses. Standard PCT protocols typically use SERMs. Kisspeptin-10 could complement this approach by driving GnRH → LH signaling directly. Post-TRT recovery should be managed under medical guidance with bloodwork monitoring.',
              },
            ].map((f, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="text-white font-600 text-[14px] mb-2">{f.q}</p>
                <p className="text-[#8888a0] text-[14px] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* RELATED GUIDES */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-6"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
          >
            Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin Guide', desc: 'GH optimization stack that synergizes with kisspeptin-10 testosterone normalization for body composition' },
              { href: '/peptides-cognitive-performance-guide', label: 'Peptides for Cognitive Performance', desc: 'How testosterone optimization and GH peptides improve focus, motivation, and mental performance' },
              { href: '/ipamorelin-complete-guide', label: 'Ipamorelin Complete Guide', desc: 'The clean GH secretagogue that stacks with kisspeptin-10 for complete hormonal optimization' },
              { href: '/sermorelin-anti-aging-hgh-guide', label: 'Sermorelin Anti-Aging Guide', desc: 'GH optimization for age-related decline — complements kisspeptin\'s testosterone optimization in a comprehensive anti-aging stack' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="card rounded-xl p-5 group hover:border-[#d4a043]/20 transition-colors">
                <p className="text-[13px] font-600 mb-1 group-hover:underline" style={{ color: accent }}>{r.label} →</p>
                <p className="text-[#8888a0] text-[13px]">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
