import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: "GLP-1 Peptides: Complete Beginner's Guide to Semaglutide, Tirzepatide & Retatrutide | PeptidesMuscle",
  description: 'Everything you need to know about GLP-1 receptor agonist peptides. How they work, comparing semaglutide vs tirzepatide vs retatrutide, results timelines, dosing protocols, and who should start with which compound.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/glp-1-peptides-complete-guide' },
  keywords: 'GLP-1 peptides guide, semaglutide vs tirzepatide vs retatrutide, GLP-1 weight loss, GLP-1 receptor agonist, best GLP-1 peptide beginners, tirzepatide GIPR, retatrutide triple agonist',
  openGraph: {
    title: "GLP-1 Peptides: Complete Beginner's Guide | PeptidesMuscle",
    description: 'Semaglutide, tirzepatide, and retatrutide compared — mechanism, results data, dosing protocols, and who should use each compound.',
    url: 'https://www.peptidesmuscle.com/glp-1-peptides-complete-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GLP-1 Peptides Complete Guide | PeptidesMuscle",
    description: 'Three generations of GLP-1 therapy compared. Which compound to start with, realistic weight loss expectations, and full titration schedules.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: "GLP-1 Peptides: Complete Beginner's Guide to Semaglutide, Tirzepatide & Retatrutide",
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
          name: 'What is a GLP-1 peptide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GLP-1 (glucagon-like peptide-1) is an incretin hormone naturally secreted by intestinal L-cells in response to eating. GLP-1 receptor agonist peptides — including semaglutide, tirzepatide, and retatrutide — mimic and amplify this signal, producing appetite suppression, slowed gastric emptying, improved insulin sensitivity, and substantial body weight reduction. They are now the most clinically validated weight-loss compounds in existence.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is GLP-1 therapy safe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GLP-1 receptor agonists have been studied in tens of thousands of patients across multi-year trials. Semaglutide alone has been evaluated in the STEP (obesity) and SUSTAIN (diabetes) trial programs with a strong safety profile. The most common adverse effects are gastrointestinal — nausea, constipation, and reduced appetite — which typically resolve as the body adapts during titration. Rare but serious events include pancreatitis and potential thyroid effects (observed in rodents; clinical relevance in humans remains low). Slow titration dramatically reduces side effect burden.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast do you lose weight on GLP-1 peptides?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most users experience 1–2 lbs per week of weight loss once at a therapeutic dose (typically weeks 8–12 of titration). Clinical trial data shows: Semaglutide (STEP-1): 14.9% average body weight loss over 68 weeks. Tirzepatide (SURMOUNT-1): 20.9% over 72 weeks at 15mg. Retatrutide (Phase 2 trial): 24.2% over 48 weeks. Individual results depend on starting body weight, dietary adherence, and physical activity.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between semaglutide, tirzepatide, and retatrutide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The three compounds represent successive generations of incretin therapy. Semaglutide (Ozempic/Wegovy) is a pure GLP-1 receptor agonist — the first generation and best validated. Tirzepatide (Mounjaro/Zepbound) adds GIP receptor agonism — dual-receptor activation produces roughly 40% greater weight loss than semaglutide. Retatrutide adds glucagon receptor agonism on top of both — triple agonism increases thermogenesis and fat oxidation, producing the greatest weight loss of any approved or pipeline compound to date.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you need to inject GLP-1 peptides?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Semaglutide, tirzepatide, and retatrutide research peptides are administered via subcutaneous injection, typically once per week. The injection uses an insulin syringe (29–31 gauge, 5/16 inch needle) into abdominal fat or the outer thigh. The weekly dosing interval makes injection burden minimal — many users find the once-weekly routine straightforward after the first few doses. An oral formulation of semaglutide (Rybelsus) exists for diabetes management but has lower bioavailability than injectable forms.',
          },
        },
      ],
    },
  ],
}

const accent = '#e05080'

const mechanisms = [
  {
    title: 'Appetite Suppression via Hypothalamus',
    body: 'GLP-1 receptors are densely expressed in the arcuate nucleus of the hypothalamus — the brain\'s primary appetite-regulation hub. GLP-1 agonism activates POMC neurons (which generate satiety signals) and inhibits AgRP/NPY neurons (which drive hunger). The result is a dramatic reduction in caloric drive that is pharmacological, not willpower-dependent. Users typically describe feeling full on 30–50% fewer calories without conscious restriction.',
  },
  {
    title: 'Gastric Emptying Delay',
    body: 'GLP-1 slows the rate at which the stomach empties into the small intestine. This produces prolonged feelings of fullness after meals, blunts post-meal glucose spikes, and reduces the frequency and urgency of hunger signals. The gastric emptying effect is most pronounced at lower doses — at higher doses, central appetite suppression dominates. Together, these two mechanisms create a powerful and complementary reduction in caloric intake.',
  },
  {
    title: 'Insulin Sensitization & Glucose Control',
    body: 'GLP-1 stimulates insulin secretion from pancreatic beta cells in a strictly glucose-dependent manner — insulin is released only when blood glucose is elevated, preventing hypoglycemia at baseline. It simultaneously suppresses glucagon from alpha cells, reducing hepatic glucose output. The net effect is dramatically improved glucose tolerance and insulin sensitivity — which has metabolic benefits beyond weight loss, including reduced cardiovascular risk and improved lipid profiles.',
  },
  {
    title: 'Reward Pathway Modulation',
    body: 'GLP-1 receptors are present throughout the mesolimbic dopamine system — the brain\'s reward circuitry. GLP-1 agonism reduces the motivational salience of food cues, essentially diminishing food cravings and compulsive eating behavior at a neurochemical level. This is a key reason why GLP-1 therapy addresses emotional and hedonic eating, not just physiological hunger — and why compliance rates are dramatically higher than with diet-only or stimulant-based approaches.',
  },
]

const compounds = [
  {
    name: 'Semaglutide',
    brand: 'Ozempic / Wegovy',
    generation: '1st Generation',
    receptors: 'GLP-1R',
    weightLoss: '~14.9%',
    trial: 'STEP-1 (68 weeks)',
    color: accent,
    slug: 'semaglutide-6mg',
    bestFor: 'First-time GLP-1 users. Best safety track record, most clinical data, most forgiving titration profile. Ideal starting point.',
    titration: '0.25mg → 0.5mg → 1mg → 1.7mg → 2.4mg (each step 4 weeks)',
  },
  {
    name: 'Tirzepatide',
    brand: 'Mounjaro / Zepbound',
    generation: '2nd Generation',
    receptors: 'GLP-1R + GIPR',
    weightLoss: '~20.9%',
    trial: 'SURMOUNT-1 (72 weeks)',
    color: '#a060ff',
    slug: 'tirzepatide-15mg',
    bestFor: 'Intermediate users or those needing greater efficacy. Dual agonism adds ~40% more weight loss vs. semaglutide. Superior metabolic profile.',
    titration: '2.5mg → 5mg → 7.5mg → 10mg → 12.5mg → 15mg (each step 4 weeks)',
  },
  {
    name: 'Retatrutide',
    brand: 'Pipeline (LY3437943)',
    generation: '3rd Generation',
    receptors: 'GLP-1R + GIPR + GCGR',
    weightLoss: '~24.2%',
    trial: 'Phase 2 (48 weeks)',
    color: '#d4a043',
    slug: 'retatrutide-10mg',
    bestFor: 'Advanced users seeking maximum fat loss or those who have plateaued on tirzepatide. Triple agonism adds thermogenic glucagon effect.',
    titration: '2mg → 4mg → 8mg → 12mg (each step 4 weeks, max 12mg weekly)',
  },
]

const timeline = [
  {
    period: 'Week 1–2',
    what: 'Titration begins at lowest dose. Some nausea and reduced appetite. Most users notice they feel full sooner at meals.',
    scale: '~0.5–1 lb/week',
    note: 'Gastrointestinal adaptation period. Eat smaller meals and avoid fatty foods to minimize nausea.',
  },
  {
    period: 'Weeks 3–6',
    what: 'Appetite suppression increases with dose escalation. Food noise diminishes. First meaningful weight loss becomes visible.',
    scale: '~1–1.5 lbs/week',
    note: 'The "food noise" reduction — the constant background thoughts about eating — is often the most striking early effect.',
  },
  {
    period: 'Weeks 7–10',
    what: 'Approaching therapeutic dose range. Energy levels stabilize as the body adapts. Fat loss accelerating as caloric deficit compounds.',
    scale: '~1.5–2 lbs/week',
    note: 'Most users reach 5–8% total body weight reduction by week 10. Metabolic benefits (glucose, blood pressure) measurable at labs.',
  },
  {
    period: 'Week 11–16+',
    what: 'Full therapeutic dose established. Maximum appetite suppression. Body composition shifting — fat loss preserved, muscle mass maintained with adequate protein intake.',
    scale: '~1–2 lbs/week',
    note: 'Protein intake of 1g/lb of target bodyweight is critical at this stage to preserve lean mass during aggressive caloric restriction.',
  },
]

export default function Glp1PeptidesGuidePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] bg-[#e05080] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Metabolic Peptide Guide</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            GLP-1 Peptides:<br />
            <span className="italic" style={{ color: accent }}>Complete Beginner&apos;s Guide</span>
          </h1>
      <AuthorByline datePublished="2026-04-13" dateModified="2026-04-13" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            What GLP-1 receptor agonists are, how semaglutide, tirzepatide, and retatrutide compare, realistic results timelines, and which compound to start with based on your goals.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — HOW GLP-1 WORKS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>How GLP-1 Works</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>GLP-1 (glucagon-like peptide-1) is a gut hormone secreted by intestinal L-cells within minutes of eating. Its job is to signal satiety — to tell the brain that food has arrived and appetite should decrease. In lean, metabolically healthy individuals, this system works well. In obesity and metabolic dysfunction, GLP-1 secretion is blunted and the satiety response is impaired.</p>
            <p>GLP-1 receptor agonist peptides bypass this impairment entirely. By delivering a continuous, pharmacological GLP-1 signal — far stronger and longer-lasting than what food intake alone generates — they restore and dramatically amplify the satiety response. The result is a fundamental reduction in caloric drive that operates at the hormonal and neurological level, not the willpower level.</p>
            <p>This is why GLP-1 therapy produces weight loss outcomes that no behavioral intervention has ever matched: it addresses the biological drivers of overeating, not just the behavioral ones.</p>
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

        {/* 02 — THREE GENERATIONS COMPARISON */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Three Generations of GLP-1 Therapy</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed mb-6">
            <p>The GLP-1 class has evolved rapidly. Each generation adds receptor targets beyond GLP-1 alone — producing compounding improvements in efficacy. Understanding the receptor pharmacology explains why newer generations outperform older ones by such a wide margin.</p>
          </div>

          {/* Comparison table */}
          <div className="pl-10 overflow-x-auto">
            <table className="w-full text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-[#1a1a2e]">
                  <th className="text-left text-[#50505e] uppercase tracking-widest text-[11px] py-3 pr-4">Compound</th>
                  <th className="text-left text-[#50505e] uppercase tracking-widest text-[11px] py-3 pr-4">Receptors</th>
                  <th className="text-left text-[#50505e] uppercase tracking-widest text-[11px] py-3 pr-4">Trial Weight Loss</th>
                  <th className="text-left text-[#50505e] uppercase tracking-widest text-[11px] py-3">Best For</th>
                </tr>
              </thead>
              <tbody>
                {compounds.map((c, i) => (
                  <tr key={i} className="border-b border-[#0f0f1a]">
                    <td className="py-4 pr-4">
                      <p className="font-700" style={{ color: c.color }}>{c.name}</p>
                      <p className="text-[#50505e] text-[11px] mt-0.5">{c.generation}</p>
                    </td>
                    <td className="py-4 pr-4 text-[#aaaabc]">{c.receptors}</td>
                    <td className="py-4 pr-4">
                      <p className="font-700 text-white">{c.weightLoss}</p>
                      <p className="text-[#50505e] text-[11px] mt-0.5">{c.trial}</p>
                    </td>
                    <td className="py-4 text-[#8888a0] max-w-xs">{c.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pl-10 mt-6 space-y-4">
            {compounds.map((c, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${c.color}` }}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="text-white font-700 text-[15px]">{c.name}</p>
                    <p className="text-[#50505e] text-[12px]">{c.brand} — {c.generation}</p>
                  </div>
                  <span className="tag text-[11px] px-2 py-0.5 rounded-full" style={{ background: `${c.color}18`, color: c.color }}>{c.receptors}</span>
                </div>
                <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Titration Schedule</p>
                <p className="text-[#aaaabc] text-[13px] leading-relaxed">{c.titration}</p>
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
            {timeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{t.period}</p>
                <div className="grid sm:grid-cols-3 gap-3 mb-2">
                  <div className="sm:col-span-2">
                    <p className="text-[#50505e] text-[11px] mb-1">WHAT HAPPENS</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.what}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">TYPICAL RATE</p>
                    <p className="text-[#aaaabc] text-[13px] font-600">{t.scale}</p>
                  </div>
                </div>
                <p className="text-[#50505e] text-[12px] italic">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 04 — WHO SHOULD USE WHICH */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Who Should Use Which</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              {
                label: 'Beginners — Start with Semaglutide',
                color: accent,
                points: [
                  'No prior GLP-1 experience',
                  'Want the best-validated safety record (10+ years of data)',
                  'Prefer the longest track record and most clinical literature',
                  '14.9% average weight loss is substantial for most users',
                  'Most forgiving titration — can pause/slow at any dose',
                ],
              },
              {
                label: 'Intermediate — Upgrade to Tirzepatide',
                color: '#a060ff',
                points: [
                  'Completed a semaglutide cycle or want greater efficacy from the start',
                  'Body weight loss goal exceeds what semaglutide typically achieves',
                  'Managing type 2 diabetes (tirzepatide has superior HbA1c reduction)',
                  '20.9% average weight loss — substantially greater than semaglutide',
                  'Dual receptor mechanism improves lipid profile more than pure GLP-1',
                ],
              },
              {
                label: 'Advanced / Maximum Fat Loss — Retatrutide',
                color: '#d4a043',
                points: [
                  'Seeking maximum possible fat loss (24.2% in Phase 2 — highest recorded)',
                  'Plateaued on tirzepatide and need additional thermogenic effect',
                  'Glucagon receptor agonism increases resting energy expenditure',
                  'Particularly effective for visceral adiposity and metabolic syndrome',
                  'Triple agonism produces the most dramatic body recomposition results',
                ],
              },
            ].map((tier, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderTop: `2px solid ${tier.color}` }}>
                <p className="text-white font-700 text-[15px] mb-3">{tier.label}</p>
                <ul className="space-y-1.5">
                  {tier.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#8888a0] text-[13px]">
                      <span style={{ color: tier.color }} className="mt-0.5 flex-shrink-0">→</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 05 — PRODUCT CARDS */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get GLP-1 Peptides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {compounds.map((c, i) => (
              <div key={i} className="card-elevated rounded-2xl p-6">
                <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-2">{c.generation}</p>
                <p className="text-white font-700 text-[17px] mb-1">{c.name}</p>
                <p className="text-[#50505e] text-[12px] mb-1">{c.receptors}</p>
                <p className="font-700 text-[13px] mb-4" style={{ color: c.color }}>{c.weightLoss} avg. weight loss</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`/go/${c.slug}`}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className="btn-primary justify-center py-2.5 text-[13px]"
                  >
                    Buy Now →
                  </a>
                  <Link href={`/products/${c.slug}`} className="btn-ghost justify-center py-2.5 text-[13px]">
                    Product Info
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 06 — DOSING PROTOCOLS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dosing Protocols</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>All three compounds are dosed once weekly via subcutaneous injection. The principle is the same across all three: start at the lowest possible dose and titrate up every 4 weeks. Rushing titration is the primary driver of GI side effects. There is no clinical benefit to reaching maximum dose faster — therapeutic weight loss occurs at every dose level.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Injection Technique', val: 'Subcutaneous injection into abdominal fat (2 inches from navel), outer thigh, or upper arm. Pinch the skin, insert at 45-90°, inject slowly, remove. Rotate sites weekly.' },
                { label: 'Needle Specifications', val: 'Insulin syringe: 29–31 gauge, 4–8mm (5/16 inch) needle length. Pull up the weekly dose and inject. No special preparation required beyond standard sterile technique.' },
                { label: 'Reconstitution', val: 'Research peptide vials are lyophilized (freeze-dried). Reconstitute with bacteriostatic water. Standard dilution: 2ml bac water per 5mg vial for easy volume measurement. See the full reconstitution guide for step-by-step instructions.' },
                { label: 'Storage', val: 'Unreconstituted vials: refrigerate or freeze for extended storage. Reconstituted solution: refrigerate, use within 28 days. Never freeze reconstituted peptides. Avoid light exposure during storage.' },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <p className="text-white font-600 text-[13px] mb-1">{item.label}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.val}</p>
                </div>
              ))}
            </div>

            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-3">Managing GI Side Effects During Titration</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed mb-3">Nausea is the most common early side effect and is entirely dose-dependent. Strategies that reliably reduce it: eat smaller, lower-fat meals; avoid eating to fullness; inject at night (sleep through peak plasma levels); keep ginger tea on hand for the first week at each new dose level. Most users find nausea minimal or absent after 1–2 weeks at any given dose.</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">If nausea is significant at a new dose, hold that dose for an additional 4 weeks before attempting to escalate. There is no penalty for a longer titration — many users reach their goal weight at intermediate doses and never need maximum dose.</p>
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
                q: 'What is a GLP-1 peptide?',
                a: 'GLP-1 (glucagon-like peptide-1) is an incretin hormone secreted by intestinal L-cells after eating. GLP-1 receptor agonists mimic and amplify this signal, producing powerful appetite suppression, slowed gastric emptying, improved insulin sensitivity, and substantial body weight reduction. They are the most clinically validated weight-loss compounds available.',
              },
              {
                q: 'Is GLP-1 therapy safe?',
                a: 'GLP-1 receptor agonists are among the most extensively studied compounds in metabolic medicine. Semaglutide has been evaluated in 10,000+ patients across multi-year trials. Common side effects — nausea, constipation — are GI-related and resolve with slow titration. Long-term cardiovascular data (SELECT trial) shows semaglutide reduces major adverse cardiovascular events by 20%, indicating cardiovascular benefit beyond weight loss.',
              },
              {
                q: 'How fast do you lose weight on GLP-1 peptides?',
                a: 'Typically 1–2 lbs per week once at therapeutic dose. Clinical trial averages: semaglutide 14.9% body weight over 68 weeks, tirzepatide 20.9% over 72 weeks, retatrutide 24.2% over 48 weeks. These are averages — metabolic responders achieve significantly more, and results are amplified with protein-adequate nutrition and resistance training.',
              },
              {
                q: 'What is the difference between semaglutide, tirzepatide, and retatrutide?',
                a: 'Generation defines the difference. Semaglutide activates GLP-1 receptors only. Tirzepatide adds GIP receptor co-agonism, which amplifies GLP-1 signaling and adds ~40% greater weight loss. Retatrutide adds glucagon receptor agonism on top of both — the glucagon component increases thermogenesis (resting energy expenditure), producing the highest weight loss of any compound tested to date.',
              },
              {
                q: 'Do you need to inject GLP-1 peptides?',
                a: 'Research formulations of semaglutide, tirzepatide, and retatrutide are all administered via once-weekly subcutaneous injection. The injection uses an insulin syringe with a 4–8mm needle into subcutaneous fat — a straightforward process most users adapt to quickly. The once-weekly dosing interval makes the injection burden minimal.',
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
              { href: '/tirzepatide-vs-semaglutide-vs-retatrutide', label: 'Full Three-Way Comparison', desc: 'Side-by-side analysis of all three compounds with trial data, receptor mechanisms, and which to choose' },
              { href: '/tirzepatide-complete-guide', label: 'Tirzepatide Complete Guide', desc: 'Dual GIP+GLP-1 mechanism, SURMOUNT trial data, full 2.5–15mg titration protocol' },
              { href: '/semaglutide-complete-guide', label: 'Semaglutide Complete Guide', desc: 'The definitive semaglutide guide — STEP trial results, dosing, and side effect management' },
              { href: '/retatrutide-complete-guide-results-dosage', label: 'Retatrutide Complete Guide', desc: 'Triple agonist mechanism, Phase 2 results, and the maximum fat loss protocol' },
              { href: '/bacteriostatic-water-peptide-reconstitution-guide', label: 'Reconstitution Guide', desc: 'Step-by-step guide to mixing, storing, and dosing research peptides correctly' },
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
