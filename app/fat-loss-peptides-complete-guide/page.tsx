import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Fat Loss Peptides: Complete Ranking & Guide for 2026 | PeptidesMuscle',
  description: 'The definitive fat loss peptide guide for 2026. Compare GLP-1 agonists, GH-axis peptides, and metabolic optimizers. Protocols for pure fat loss, recomp, and metabolic health.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/fat-loss-peptides-complete-guide' },
  keywords: 'fat loss peptides, best peptides for fat loss, semaglutide vs tirzepatide, AOD-9604, CJC-1295 ipamorelin fat loss, MOTS-c fat loss, peptide weight loss guide 2026',
  openGraph: {
    title: 'Fat Loss Peptides: Complete Ranking & Guide for 2026 | PeptidesMuscle',
    description: 'Compare every fat loss peptide tier by tier — GLP-1 agonists, GH-axis compounds, and metabolic optimizers. Full protocols and a head-to-head comparison table.',
    url: 'https://www.peptidesmuscle.com/fat-loss-peptides-complete-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fat Loss Peptides: Complete Ranking & Guide for 2026 | PeptidesMuscle',
    description: 'Every fat loss peptide ranked and compared — GLP-1s, GH-axis, metabolic optimizers. Full 2026 protocol guide.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'Fat Loss Peptides: Complete Ranking & Guide for 2026',
      description: 'The definitive 2026 guide to fat loss peptides — tiered comparison of GLP-1 agonists, GH-axis compounds, and metabolic optimizers with full protocols.',
      url: 'https://www.peptidesmuscle.com/fat-loss-peptides-complete-guide',
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
          name: 'What is the fastest fat loss peptide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Retatrutide produces the fastest clinically documented fat loss of any single peptide, with Phase 2 trial participants losing up to 17.5% of body weight in 24 weeks — outpacing both semaglutide and tirzepatide. It achieves this through triple receptor agonism (GLP-1, GIP, and glucagon receptors simultaneously), driving appetite suppression, enhanced energy expenditure, and direct fat mobilization at once. For those unable to tolerate strong appetite suppression, tirzepatide offers the next-best result with a slightly more manageable side effect profile.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use peptides for fat loss without exercise?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GLP-1 class peptides (semaglutide, tirzepatide, retatrutide) produce significant fat loss even without structured exercise, as their primary mechanism is caloric restriction via appetite suppression. Clinical trials show 10–17% bodyweight loss largely independent of exercise. However, exercise dramatically improves lean mass preservation during GLP-1 use — without it, a meaningful percentage of weight lost may come from muscle. GH-axis peptides like CJC-1295/Ipamorelin and metabolic optimizers like MOTS-c have their fat loss effects amplified significantly by exercise and produce minimal fat loss in completely sedentary individuals.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I regain weight when I stop fat loss peptides?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Weight regain upon discontinuation is a well-documented phenomenon with GLP-1 agonists — studies show patients regain approximately two-thirds of lost weight within one year of stopping semaglutide. This occurs because the peptides suppress appetite pharmacologically rather than resetting metabolic set-point permanently. Strategies to minimize regain include tapering rather than abrupt cessation, transitioning to a maintenance protocol (lower dose or less frequent injection), building sustainable dietary habits during the active phase, and considering MOTS-c or CJC-1295/Ipamorelin as metabolic maintenance tools post-GLP-1.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do fat loss peptides compare to Ozempic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ozempic is the brand name for semaglutide 0.5–2mg weekly injection — the same active compound available as a research peptide. Research-grade semaglutide is functionally identical in mechanism: GLP-1 receptor agonism driving appetite suppression, delayed gastric emptying, and improved insulin sensitivity. The practical differences are cost (research peptides are significantly less expensive), regulation (Ozempic is FDA-approved for type 2 diabetes; research peptides are not for human use), and access. Tirzepatide (Mounjaro/Zepbound) and retatrutide represent next-generation compounds beyond what Ozempic offers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do fat loss peptides preserve muscle?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends strongly on the class. GLP-1 agonists alone cause some lean mass loss — typically 25–40% of total weight lost comes from muscle. Pairing GLP-1s with resistance training and adequate protein intake reduces this significantly. GH-axis peptides (CJC-1295/Ipamorelin, hexarelin) actively preserve and build lean mass while promoting fat oxidation, making them the best choice for recomposition goals. AOD-9604 is fat-selective and has no meaningful effect on muscle. MOTS-c preserves metabolically active tissue via AMPK activation. The gold-standard recomp stack combines a low-dose GLP-1 with CJC-1295/Ipamorelin.',
          },
        },
      ],
    },
  ],
}

const accent = '#f97316'

export default function FatLossPeptidesPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden pt-20 sm:pt-32 pb-16 px-4">
        <div className="spot" style={{ background: accent, top: '-10%', right: '-5%', opacity: 0.12 }} />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="label-gold mb-4">COMPLETE GUIDE · 2026</div>
            <h1 className="font-['Playfair_Display'] text-[clamp(2rem,5vw,3.5rem)] font-900 leading-[1.08] tracking-tight text-white mb-6">
              Fat Loss Peptides:<br />
              <span style={{ color: accent }}>The Definitive</span> Ranking
            </h1>
      <AuthorByline datePublished="2026-04-14" dateModified="2026-04-14" />
            <p className="text-[#8888a0] text-lg leading-relaxed mb-8 max-w-xl">
              Every fat-loss peptide ranked by mechanism, speed, and lean-mass preservation. From GLP-1 agonists to GH-axis compounds — find the protocol that matches your goal.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="tag-gold">GLP-1 Agonists</span>
              <span className="tag-gold">GH-Axis Lipolysis</span>
              <span className="tag">MOTS-c</span>
              <span className="tag">Recomp Protocols</span>
              <span className="tag">2026 Dosing</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Retatrutide', stat: '17.5%', sub: 'avg body wt lost (24 wks)' },
              { label: 'Tirzepatide', stat: '22.5%', sub: 'max body wt reduction' },
              { label: 'AOD-9604', stat: 'Zero', sub: 'IGF-1 / blood sugar impact' },
              { label: 'MOTS-c', stat: 'AMPK', sub: 'visceral fat targeting' },
            ].map(({ label, stat, sub }) => (
              <div key={label} className="card p-4 flex flex-col gap-1">
                <div className="text-[#8888a0] text-xs mono uppercase">{label}</div>
                <div className="text-white text-2xl font-700" style={{ color: accent }}>{stat}</div>
                <div className="text-[#8888a0] text-xs">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 1: HOW FAT LOSS PEPTIDES WORK */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="label-gold mb-3">SECTION 01</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-6">
            How Fat Loss Peptides Actually Work
          </h2>
          <p className="text-[#8888a0] text-lg leading-relaxed mb-10">
            Fat loss peptides don't share a single mechanism — they hit four distinct biological pathways, each with a different risk/benefit profile and ideal use case. Understanding which pathway you're targeting is the foundation of any effective protocol.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                num: '01',
                title: 'GLP-1 / GIP Receptor Agonism',
                body: 'Glucagon-like peptide-1 and glucose-dependent insulinotropic polypeptide receptors sit in the hypothalamus, gut, and pancreas. Agonizing them slows gastric emptying, amplifies satiety signaling after meals, and sharply reduces appetite. Result: effortless caloric restriction without hunger — the dominant mechanism of semaglutide, tirzepatide, and retatrutide.',
              },
              {
                num: '02',
                title: 'Growth Hormone Axis → Lipolysis',
                body: 'GH pulses activate hormone-sensitive lipase in fat cells, breaking stored triglycerides into free fatty acids for oxidation. GHRH analogues (CJC-1295) and GH secretagogues (ipamorelin, hexarelin) amplify natural GH pulses — especially the deep-sleep pulse — to drive overnight fat oxidation while sparing lean mass.',
              },
              {
                num: '03',
                title: 'Melanocortin System',
                body: 'AOD-9604 engages beta-3 adrenergic receptors via a pathway adjacent to the melanocortin system, stimulating lipolysis directly in adipose tissue while simultaneously blocking lipogenesis. Unlike full GH, this fragment is fat-selective — no blood sugar, no IGF-1, no anabolic side effects. Pure fat mobilization.',
              },
              {
                num: '04',
                title: 'Peptide-Driven Metabolic Rate (AMPK)',
                body: 'MOTS-c, encoded in mitochondrial DNA, activates AMPK — the master metabolic switch. AMPK activation mimics the cellular effects of fasting and exercise: increased fatty acid oxidation, improved insulin sensitivity, upregulated mitochondrial biogenesis, and preferential burning of visceral fat. The only peptide that improves metabolic rate at the cellular level.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="card p-6 flex flex-col gap-3">
                <div className="mono text-2xl font-700" style={{ color: accent }}>{num}</div>
                <h3 className="text-white font-700 text-lg">{title}</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 2: TIER 1 — GLP-1/GIP AGONISTS */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="label-gold mb-3">SECTION 02</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-6">
            Tier 1: GLP-1 / GIP Agonists
          </h2>
          <p className="text-[#8888a0] text-lg leading-relaxed mb-10">
            The most powerful fat loss compounds available in 2026. Clinical data shows 10–17.5% bodyweight reduction across 24 weeks — outcomes that exceed any prior pharmaceutical or lifestyle intervention.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              {
                name: 'Semaglutide',
                receptor: 'GLP-1 only',
                appetite: '~30% reduction',
                fatLoss: '10–15% BW (24 wks)',
                lean: 'Modest loss without training',
                dose: 'Weekly SC injection',
                best: 'First-time GLP-1 users',
              },
              {
                name: 'Tirzepatide',
                receptor: 'GLP-1 + GIP dual',
                appetite: '~38% reduction',
                fatLoss: '15–22% BW (72 wks)',
                lean: 'Better preserved vs. sema',
                dose: 'Weekly SC injection',
                best: 'Maximum fat loss + tolerability',
              },
              {
                name: 'Retatrutide',
                receptor: 'GLP-1 + GIP + Glucagon',
                appetite: '~45% reduction',
                fatLoss: '17.5% BW (24 wks — Phase 2)',
                lean: 'Glucagon drives energy expend.',
                dose: 'Weekly SC injection',
                best: 'Fastest possible fat loss',
              },
            ].map(({ name, receptor, appetite, fatLoss, lean, dose, best }) => (
              <div key={name} className="card-elevated p-5 flex flex-col gap-3">
                <div className="text-white font-700 text-lg">{name}</div>
                <div className="flex flex-col gap-2 text-sm">
                  <div><span className="text-[#8888a0]">Receptors: </span><span className="text-white">{receptor}</span></div>
                  <div><span className="text-[#8888a0]">Appetite ↓: </span><span className="text-white">{appetite}</span></div>
                  <div><span className="text-[#8888a0]">Fat loss: </span><span style={{ color: accent }} className="font-700">{fatLoss}</span></div>
                  <div><span className="text-[#8888a0]">Lean mass: </span><span className="text-white">{lean}</span></div>
                  <div><span className="text-[#8888a0]">Dosing: </span><span className="text-white">{dose}</span></div>
                  <div className="tag mt-1 w-fit">{best}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="card p-6">
            <h3 className="text-white font-700 mb-3">GLP-1 Weekly Dosing Ramp (Semaglutide Example)</h3>
            <p className="text-[#8888a0] text-sm leading-relaxed">
              Weeks 1–4: 0.25mg weekly · Weeks 5–8: 0.5mg · Weeks 9–12: 1mg · Weeks 13+: 1.5–2.4mg based on tolerance. Ramp slowly to minimize GI side effects. Tirzepatide follows the same principle starting at 2.5mg and stepping to 5, 10, 15mg. Retatrutide Phase 2 doses ranged from 1–12mg weekly — start conservatively at 1–2mg.
            </p>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 3: TIER 2 — GH-AXIS FAT LOSS */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="label-gold mb-3">SECTION 03</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-6">
            Tier 2: GH-Axis Fat Loss Peptides
          </h2>
          <p className="text-[#8888a0] text-lg leading-relaxed mb-8">
            GH-axis peptides work more slowly than GLP-1s but preserve and build lean mass while promoting fat oxidation — making them ideal for recomposition rather than pure scale movement. They also carry none of the GI side effects associated with GLP-1 class compounds.
          </p>
          <div className="flex flex-col gap-6">
            <div className="card p-6 grid sm:grid-cols-2 gap-6">
              <div>
                <div className="label-gold mb-2">HGH FRAGMENT</div>
                <h3 className="text-white font-700 text-xl mb-2">AOD-9604</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">
                  The C-terminal fragment of HGH (residues 177–191) isolated purely for its lipolytic activity. AOD-9604 activates beta-3 adrenergic receptors to stimulate fat breakdown while simultaneously blocking new fat storage. Unlike full HGH, it causes zero blood sugar disruption and zero IGF-1 elevation. Administered at 250–500mcg subcutaneously in a fasted state each morning. Effects are fat-selective and most pronounced in stubborn subcutaneous depots.
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Dose</span><span className="text-white">250–500mcg/day</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Timing</span><span className="text-white">Fasted AM</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">IGF-1 elevation</span><span className="text-white" style={{ color: accent }}>None</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Blood sugar</span><span className="text-white" style={{ color: accent }}>Unaffected</span></div>
                <div className="flex justify-between py-2"><span className="text-[#8888a0]">Best for</span><span className="text-white">Stubborn fat, safety</span></div>
              </div>
            </div>

            <div className="card p-6 grid sm:grid-cols-2 gap-6">
              <div>
                <div className="label-gold mb-2">GH SECRETAGOGUE</div>
                <h3 className="text-white font-700 text-xl mb-2">Hexarelin</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">
                  A potent GHRP-6 analogue that stimulates robust GH pulses without the hunger spike associated with GHRP-6. Hexarelin's GH stimulation is among the strongest of any secretagogue peptide, and the resulting GH elevation drives significant lipolysis over weeks of use. It also shows direct cardiac-protective activity via GHS receptor expression in myocardial tissue. Dose: 100–200mcg 2–3x daily, pre-workout or fasted.
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Dose</span><span className="text-white">100–200mcg 2–3x/day</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">GH pulse strength</span><span className="text-white">Very high</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Hunger effect</span><span className="text-white">Minimal vs GHRP-6</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Desensitization</span><span className="text-white">Cycle 8 wks on/2 off</span></div>
                <div className="flex justify-between py-2"><span className="text-[#8888a0]">Best for</span><span className="text-white">GH-driven fat loss</span></div>
              </div>
            </div>

            <div className="card p-6">
              <div className="label-gold mb-2">SYNERGY STACK</div>
              <h3 className="text-white font-700 text-xl mb-3">CJC-1295 / Ipamorelin: Overnight Fat Oxidation</h3>
              <p className="text-[#8888a0] text-sm leading-relaxed mb-4">
                CJC-1295 (GHRH analogue) plus Ipamorelin (selective GHRP) is the most widely used GH-axis fat loss stack. CJC-1295 extends the amplitude of GH pulses; Ipamorelin enhances pulse frequency without raising cortisol or prolactin. Administered together pre-sleep (10 mins before bed, fasted for 2hrs), the stack capitalizes on the body's largest natural GH pulse during slow-wave sleep — driving fat oxidation through the night while sparing muscle.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">CJC-1295 No-DAC: 100–200mcg</span>
                <span className="tag">Ipamorelin: 200–300mcg</span>
                <span className="tag">Pre-sleep injection</span>
                <span className="tag">5 days on / 2 off</span>
                <span className="tag">Cycle 12 wks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 4: TIER 3 — METABOLIC OPTIMIZATION */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="label-gold mb-3">SECTION 04</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-6">
            Tier 3: Metabolic Optimization Support
          </h2>
          <p className="text-[#8888a0] text-lg leading-relaxed mb-8">
            These compounds don't generate dramatic scale movement on their own — but they address root causes of metabolic dysfunction that block fat loss and accelerate results when stacked with Tier 1 or 2 compounds.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card p-6">
              <div className="label-gold mb-2">MITOCHONDRIAL PEPTIDE</div>
              <h3 className="text-white font-700 text-lg mb-3">MOTS-c</h3>
              <p className="text-[#8888a0] text-sm leading-relaxed mb-4">
                Encoded in mitochondrial DNA, MOTS-c is the only known peptide that functions as an "exercise mimetic." It activates AMPK, the master metabolic regulator, driving increased fatty acid oxidation, improved insulin sensitivity, and preferential reduction of visceral adipose tissue — the metabolically dangerous fat surrounding organs. MOTS-c levels decline with age and correlate with metabolic disease risk.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">5–10mg/week</span>
                <span className="tag">Visceral fat targeting</span>
                <span className="tag">AMPK activation</span>
              </div>
            </div>
            <div className="card p-6">
              <div className="label-gold mb-2">GUT-METABOLIC AXIS</div>
              <h3 className="text-white font-700 text-lg mb-3">BPC-157</h3>
              <p className="text-[#8888a0] text-sm leading-relaxed mb-4">
                Body Protective Compound 157 is a gastric pentadecapeptide with documented gut barrier restoration activity. Leaky gut and microbiome disruption are increasingly recognized as drivers of metabolic dysfunction and obesity. BPC-157 repairs tight junction integrity, modulates gut motility, and reduces systemic inflammation — creating a metabolic environment more conducive to fat loss and insulin sensitivity. It is often stacked under GLP-1 protocols to reduce GI side effects.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">250–500mcg/day</span>
                <span className="tag">Gut barrier repair</span>
                <span className="tag">Anti-inflammatory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 5: COMPARISON TABLE */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="label-gold mb-3">SECTION 05</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-8">
            Fat Loss Peptide Comparison Table
          </h2>
          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1e1e2a]">
                  {['Compound', 'Mechanism', 'Inject Freq', 'Avg Fat Loss', 'Lean Mass', 'Cost Tier', 'Best For'].map(h => (
                    <th key={h} className="text-left py-3 px-4 text-[#8888a0] font-600 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Semaglutide', 'GLP-1 agonist', '1x / week', '10–15% BW', 'Slight loss', '$', 'First GLP-1 cycle'],
                  ['Tirzepatide', 'GLP-1 + GIP dual', '1x / week', '15–22% BW', 'Better preserved', '$$', 'Max fat loss'],
                  ['Retatrutide', 'GLP-1+GIP+GCG triple', '1x / week', '17.5%+ BW', 'Energy expenditure↑', '$$$', 'Fastest results'],
                  ['AOD-9604', 'Beta-3 lipolysis', '1x / day', 'Moderate', 'Neutral / positive', '$', 'Stubborn fat, safety'],
                  ['CJC/Ipamorelin', 'GH axis / GHRH+GHRP', '1x / day', 'Gradual recomp', 'Builds muscle', '$', 'Recomp, anti-aging'],
                  ['MOTS-c', 'AMPK / mitochondrial', '3x / week', 'Visceral focus', 'Preserves', '$$', 'Metabolic health'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[#1e1e2a] hover:bg-[#0f0f14] transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className={`py-3 px-4 ${j === 0 ? 'text-white font-600' : j === 3 ? 'font-600' : 'text-[#8888a0]'}`}
                        style={j === 3 ? { color: accent } : {}}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 6: PROTOCOLS BY GOAL */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="label-gold mb-3">SECTION 06</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-8">
            Protocol by Goal
          </h2>
          <div className="flex flex-col gap-6">
            {[
              {
                tag: 'PURE FAT LOSS',
                headline: 'Maximum Scale Movement — Tirzepatide or Retatrutide',
                body: 'For those whose primary goal is total body fat reduction, a GLP-1/GIP agonist is the most effective single compound. Start with tirzepatide at 2.5mg weekly, ramping by 2.5mg every 4 weeks to tolerance (up to 15mg). Pair with 150–200g protein daily and 2–3x/week resistance training to preserve lean mass. Add BPC-157 at 250mcg/day to manage GI side effects during ramp-up.',
                tags: ['Tirzepatide 2.5–15mg/week', 'Protein 1.6–2g/kg BW', 'Resistance training 3x/week', 'BPC-157 250mcg/day optional'],
              },
              {
                tag: 'BODY RECOMPOSITION',
                headline: 'Simultaneous Fat Loss + Muscle Building — CJC-1295/Ipamorelin + AOD-9604',
                body: 'For those wanting to lose fat while improving muscle quality and aesthetics, combine GH-axis optimization with targeted lipolysis. CJC-1295 No-DAC (100–200mcg) + Ipamorelin (200–300mcg) pre-sleep for overnight GH pulse amplification. AOD-9604 (250–500mcg) fasted morning for direct fat mobilization. This stack produces slower scale movement than GLP-1s but superior aesthetic outcomes and no lean mass loss.',
                tags: ['CJC-1295 100–200mcg pre-sleep', 'Ipamorelin 200–300mcg pre-sleep', 'AOD-9604 250–500mcg fasted AM', '12-week cycle'],
              },
              {
                tag: 'METABOLIC HEALTH',
                headline: 'Root-Cause Metabolic Repair — MOTS-c + BPC-157',
                body: "For those with insulin resistance, metabolic syndrome, or who want fat loss without appetite suppression or GI disruption, MOTS-c plus BPC-157 addresses the underlying metabolic dysfunction. MOTS-c (5–10mg/week, 3 injections) activates AMPK to restore cellular energy sensing and target visceral fat. BPC-157 (250–500mcg/day) repairs gut barrier integrity and reduces systemic inflammation. Amplify results by pairing with zone-2 cardio 3–4x/week — MOTS-c's effects are dramatically enhanced by concurrent exercise.",
                tags: ['MOTS-c 5–10mg/week', 'BPC-157 250–500mcg/day', 'Zone-2 cardio 3–4x/week', 'No appetite suppression'],
              },
            ].map(({ tag, headline, body, tags }) => (
              <div key={tag} className="card-elevated p-6 flex flex-col gap-4">
                <div className="tag-gold w-fit">{tag}</div>
                <h3 className="text-white font-700 text-lg">{headline}</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">{body}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(t => <span key={t} className="tag text-xs">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 7: RESULTS TIMELINE */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="label-gold mb-3">SECTION 07</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-8">
            Results Timeline: What to Expect Week by Week
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { phase: 'Weeks 1–2', title: 'Appetite Shift', body: 'GLP-1 users notice the first meaningful reduction in appetite — meals feel satisfying with smaller portions. Cravings for high-calorie foods diminish. GH-axis users may notice improved sleep quality and subtle energy improvements. No visible body changes yet.' },
              { phase: 'Weeks 3–6', title: 'Scale Begins Moving', body: 'GLP-1 users: 2–5 lbs of weight loss typical, driven primarily by reduced caloric intake. AOD-9604 users begin noticing subtle reduction in the most stubborn fat areas. MOTS-c users: improved energy during exercise, early insulin sensitivity improvements measurable by fasting glucose.' },
              { phase: 'Weeks 6–12', title: 'Visible Body Composition Change', body: 'Most significant visible changes occur in this window. GLP-1 users: 5–15 lbs lost depending on dose. Recomp stack users: noticeable improvements in muscle definition as fat recedes and muscle quality improves. Waistline and visceral fat reduction become apparent.' },
              { phase: 'Weeks 12–24', title: 'Normalized Body Composition', body: 'Full metabolic adaptation achieved. GLP-1 users reach maximum tolerated dose, fat loss rate stabilizes at 1–2 lbs/week. Body fat percentage at its lowest point of the cycle. Lean mass maintained or improved with proper protein intake and resistance training. Metabolic markers (fasting insulin, triglycerides, HbA1c) measurably improved.' },
            ].map(({ phase, title, body }, i) => (
              <div key={i} className="card p-6 flex gap-5 items-start">
                <div className="shrink-0 w-20 text-center">
                  <div className="mono text-xs text-[#8888a0] mb-1">TIMELINE</div>
                  <div className="font-700 text-sm" style={{ color: accent }}>{phase}</div>
                </div>
                <div>
                  <div className="text-white font-700 mb-2">{title}</div>
                  <p className="text-[#8888a0] text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 8: PRODUCT CARDS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="label-gold mb-3">SECTION 08</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-8">
            Research-Grade Fat Loss Peptides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            <div className="card-elevated p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="label-gold mb-2">TIER 1 — GLP-1 AGONIST</div>
                  <h3 className="text-white font-700 text-xl">Semaglutide</h3>
                  <p className="text-[#8888a0] text-sm mt-1">GLP-1 receptor agonist — appetite suppression + insulin sensitivity</p>
                </div>
              </div>
              <a href={'/go/semaglutide-12mg'} target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary text-center block">View on Phiogen →</a>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
                className="btn-ghost text-center block text-sm">Browse All Peptides</a>
            </div>

            <div className="card-elevated p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="label-gold mb-2">TIER 1 — DUAL AGONIST</div>
                  <h3 className="text-white font-700 text-xl">Tirzepatide</h3>
                  <p className="text-[#8888a0] text-sm mt-1">GLP-1 + GIP dual agonism — superior fat loss vs. semaglutide alone</p>
                </div>
              </div>
              <a href={'/go/tirzepatide-15mg'} target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary text-center block">View on Phiogen →</a>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
                className="btn-ghost text-center block text-sm">Browse All Peptides</a>
            </div>

            <div className="card-elevated p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="label-gold mb-2">TIER 1 — TRIPLE AGONIST</div>
                  <h3 className="text-white font-700 text-xl">Retatrutide</h3>
                  <p className="text-[#8888a0] text-sm mt-1">GLP-1 + GIP + glucagon triple agonism — fastest fat loss in clinical data</p>
                </div>
              </div>
              <a href={'/go/retatrutide-10mg'} target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary text-center block">View on Phiogen →</a>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
                className="btn-ghost text-center block text-sm">Browse All Peptides</a>
            </div>

            <div className="card-elevated p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="label-gold mb-2">TIER 2 — HGH FRAGMENT</div>
                  <h3 className="text-white font-700 text-xl">AOD-9604</h3>
                  <p className="text-[#8888a0] text-sm mt-1">Isolated HGH lipolytic fragment — no IGF-1, no blood sugar effects</p>
                </div>
              </div>
              <a href={'/go/aod9604-5mg'} target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary text-center block">View on Phiogen →</a>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
                className="btn-ghost text-center block text-sm">Browse All Peptides</a>
            </div>

            <div className="card-elevated p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="label-gold mb-2">TIER 3 — MITOCHONDRIAL</div>
                  <h3 className="text-white font-700 text-xl">MOTS-c</h3>
                  <p className="text-[#8888a0] text-sm mt-1">AMPK activation — exercise mimetic, visceral fat targeting</p>
                </div>
              </div>
              <a href={'/go/mots-c-10mg'} target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary text-center block">View on Phiogen →</a>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
                className="btn-ghost text-center block text-sm">Browse All Peptides</a>
            </div>

            <div className="card-elevated p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="label-gold mb-2">RECOMP STACK</div>
                  <h3 className="text-white font-700 text-xl">CJC-1295 + Ipamorelin</h3>
                  <p className="text-[#8888a0] text-sm mt-1">GHRH + GHRP synergy — overnight fat oxidation with muscle preservation</p>
                </div>
              </div>
              <a href={'/go/cjc-1295-no-dac-5mg'} target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary text-center block">CJC-1295 on Phiogen →</a>
              <a href={'/go/ipamorelin-10mg'} target="_blank" rel="noopener nofollow sponsored"
                className="btn-ghost text-center block text-sm">Ipamorelin on Phiogen →</a>
            </div>

          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 9: FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="label-gold mb-3">FAQ</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-5">
            {[
              {
                q: 'What is the fastest fat loss peptide?',
                a: 'Retatrutide produces the fastest clinically documented fat loss — up to 17.5% bodyweight in 24 weeks via triple GLP-1/GIP/glucagon receptor agonism. For most users, tirzepatide offers the next-best combination of speed and tolerability, with 15–22% bodyweight loss over longer cycles.',
              },
              {
                q: 'Can I use peptides for fat loss without exercise?',
                a: 'GLP-1 agonists (semaglutide, tirzepatide, retatrutide) drive significant fat loss even without structured exercise via appetite suppression. However, exercise dramatically improves lean mass preservation. GH-axis peptides and MOTS-c have their fat loss effects amplified substantially by exercise and produce minimal results in fully sedentary use.',
              },
              {
                q: 'Will I regain weight when I stop fat loss peptides?',
                a: 'Yes — GLP-1 users typically regain ~65% of lost weight within one year of stopping, as the compounds suppress appetite pharmacologically rather than permanently resetting metabolism. Minimize regain by tapering doses slowly, building sustainable dietary habits during the active phase, and transitioning to a lower-dose maintenance protocol.',
              },
              {
                q: 'How do fat loss peptides compare to Ozempic?',
                a: 'Ozempic is the brand name for semaglutide — the same molecule available as research-grade semaglutide. Research peptides are functionally identical in mechanism but carry no FDA approval for human use. Tirzepatide (Mounjaro/Zepbound) and retatrutide represent next-generation compounds that outperform Ozempic in clinical fat loss data.',
              },
              {
                q: 'Do fat loss peptides preserve muscle?',
                a: 'GLP-1s alone cause some lean mass loss (25–40% of total weight lost). Pairing with resistance training and 1.6–2g/kg protein reduces this significantly. GH-axis peptides (CJC-1295/Ipamorelin) actively preserve and build lean mass. AOD-9604 is fat-selective with neutral lean mass effects. The best recomp combination is a low-dose GLP-1 paired with CJC-1295/Ipamorelin.',
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-white font-700 mb-3">{q}</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* RELATED GUIDES */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="label-gold mb-3">EXPLORE MORE</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-8">
            Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { href: '/glp-1-peptides-complete-guide', label: 'GLP-1 Peptides', sub: 'Complete guide to GLP-1 agonists' },
              { href: '/aod-9604-fat-loss-peptide-guide', label: 'AOD-9604 Guide', sub: 'HGH fragment fat loss protocol' },
              { href: '/mots-c-mitochondrial-longevity-guide', label: 'MOTS-c Guide', sub: 'Mitochondrial fat loss & longevity' },
              { href: '/peptides-for-women-complete-guide', label: 'Peptides for Women', sub: 'Female-optimized peptide protocols' },
            ].map(({ href, label, sub }) => (
              <Link key={href} href={href} className="card p-5 flex flex-col gap-2 hover:border-[#f97316] transition-colors group">
                <div className="text-white font-700 group-hover:text-[#f97316] transition-colors">{label}</div>
                <div className="text-[#8888a0] text-sm">{sub}</div>
                <div className="text-[#f97316] text-sm mt-1">Read guide →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
