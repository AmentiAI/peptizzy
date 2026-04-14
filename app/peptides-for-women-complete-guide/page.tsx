import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptides for Women: Complete Guide to Hormones, Fat Loss, Skin & Recovery | PeptidesMuscle',
  description: 'The complete guide to peptides for women. How estrogen modulates the GH axis, best peptides for fat loss, collagen and skin aging, libido, perimenopause support, and protocols by life stage.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/peptides-for-women-complete-guide' },
  keywords: 'peptides for women, peptides hormones women, GHK-Cu skin collagen, AOD-9604 women fat loss, PT-141 women libido, peptides perimenopause, CJC-1295 ipamorelin women, kisspeptin-10 women',
  openGraph: {
    title: 'Peptides for Women: Complete Guide to Hormones, Fat Loss, Skin & Recovery | PeptidesMuscle',
    description: 'How estrogen shapes peptide response, best compounds for fat loss, collagen, hormonal support, and GH optimization — protocols for every life stage.',
    url: 'https://www.peptidesmuscle.com/peptides-for-women-complete-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Women: Hormones, Fat Loss, Skin & Recovery | PeptidesMuscle',
    description: 'Complete guide to peptides for women — hormonal context, best compounds, and protocols by life stage.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Peptides for Women: Complete Guide to Hormones, Fat Loss, Skin & Recovery',
      description: 'How estrogen modulates the GH axis, best peptides for fat loss, skin and collagen, libido, perimenopause support, and protocols by life stage.',
      url: 'https://www.peptidesmuscle.com/peptides-for-women-complete-guide',
      datePublished: '2026-04-14',
      dateModified: '2026-04-14',
      author: { '@type': 'Organization', name: 'PeptidesMuscle' },
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can women use peptides if they are on birth control?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In general, the peptides most commonly used by women — GHK-Cu, AOD-9604, CJC-1295/Ipamorelin, PT-141, and Kisspeptin-10 — do not have known direct pharmacological interactions with combined oral contraceptives or progestin-only pills. However, hormonal contraceptives suppress endogenous LH and FSH and alter the HPG axis, which means Kisspeptin-10 (which works upstream of GnRH) will have a blunted or altered effect in women on hormonal birth control. GH secretagogues and skin/repair peptides are unaffected. Always consult a qualified physician before combining any research compounds with prescribed medications.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are peptide doses different for women compared to men?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Women generally use the same microgram dose ranges as men for most peptides, but the physiological response can differ. Women\'s GH axis is naturally more active than men\'s — women have higher baseline GH pulse frequency and amplitude — meaning women may achieve equivalent effects at the lower end of dose ranges. For GH secretagogues like CJC-1295 and Ipamorelin, women often start at 100–150mcg rather than the 200mcg male standard. For AOD-9604 and GHK-Cu, dosing is essentially equivalent. PT-141 doses for women are typically 0.75–1.75mg, which overlaps with but may be lower than the male range.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is GHK-Cu safe during breastfeeding?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There is no clinical safety data for GHK-Cu or any research peptide during breastfeeding. While GHK-Cu is a naturally occurring peptide found in human plasma and breast milk at low concentrations, subcutaneous administration of research-grade GHK-Cu at cosmetic or systemic doses has not been evaluated in breastfeeding populations. Out of an abundance of caution, peptide use of any kind is not recommended during pregnancy or breastfeeding without direct physician oversight. This is a research context only — consult your physician.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can peptides help with perimenopause symptoms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Several peptides address mechanisms relevant to perimenopausal symptoms. CJC-1295 and Ipamorelin restore pulsatile GH release that declines alongside estrogen decline — improving sleep quality, body composition, and skin quality. GHK-Cu directly counteracts the accelerated collagen loss seen in the perimenopausal transition. AOD-9604 addresses the central adiposity shift that occurs as estrogen declines and fat redistributes from peripheral to visceral depots. Kisspeptin-10 supports the HPG axis, though its application is more complex in the context of ovarian senescence. These are not HRT alternatives, but many women report meaningful improvements in body composition, skin quality, and energy in this life stage.',
          },
        },
        {
          '@type': 'Question',
          name: 'How soon do women typically see results from peptides?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Results timelines vary by compound and goal. GHK-Cu applied topically shows early skin texture improvements at 4–6 weeks; systemic subcutaneous dosing may show improvements in 6–10 weeks. AOD-9604 fat loss effects become visible at 6–10 weeks with meaningful body composition changes by 12–16 weeks. CJC-1295/Ipamorelin sleep and recovery improvements often appear within 2–3 weeks; body composition changes require 8–12 weeks. PT-141 effects on desire and arousal are typically acute (within 1–2 hours of administration), with cumulative benefits appearing over multiple weeks of use. Kisspeptin-10 hormonal effects depend on individual HPG axis responsiveness.',
          },
        },
      ],
    },
  ],
}

const AFF = (s: string) => `https://phiogen.is/products/${s}?ref=PEPS`
const accent = '#e879a0'

const hormonalMechanisms = [
  {
    title: 'Estrogen Upregulates GH Receptor Sensitivity',
    body: 'Estrogen enhances the sensitivity of peripheral tissues to growth hormone through upregulation of GH receptor expression and downstream JAK2/STAT5 signaling. This means women in high-estrogen states have heightened GH responsiveness — and as estrogen declines in perimenopause, GH sensitivity falls simultaneously. GH secretagogues like CJC-1295 and Ipamorelin work synergistically with endogenous estrogen: premenopausal women often see robust GH responses at lower doses than expected.',
  },
  {
    title: 'Sex Hormones Shape Fat Distribution',
    body: 'Estrogen drives peripheral fat storage (hips, thighs, subcutaneous) and suppresses visceral fat accumulation — the metabolically dangerous abdominal depot. As estrogen declines, fat redistribution toward visceral and central deposits accelerates. Peptides that modulate lipolysis (AOD-9604) and GH pulsatility (CJC-1295/Ipamorelin) directly address this: GH opposes visceral adiposity and estrogen decline-driven fat redistribution, making GH optimization particularly impactful for women in the perimenopausal transition.',
  },
  {
    title: 'Collagen Turnover Is Estrogen-Dependent',
    body: 'Estrogen directly stimulates collagen synthesis in skin, tendons, and bone. Skin collagen content declines approximately 2% per year after menopause — a rate 5x faster than the baseline age-related decline. Estrogen receptors are present throughout the dermis and regulate fibroblast activity, MMP (collagenase) expression, and hyaluronic acid production. Women thus have an acute need for collagen-supporting peptides (GHK-Cu) that directly counteract this estrogen-withdrawal-driven collagen loss.',
  },
  {
    title: 'HPG Axis & Libido Peptide Targets',
    body: 'The hypothalamic-pituitary-gonadal axis governs both reproductive hormones and sexual function. Kisspeptin neurons in the hypothalamus gate GnRH pulse release — the upstream regulator of LH, FSH, estrogen, and testosterone. Separately, the melanocortin system (MC3R/MC4R) governs sexual desire and arousal through central nervous system pathways. PT-141 targets this latter system, providing a direct libido mechanism independent of circulating sex hormone levels — making it effective even in low-estrogen states where traditional libido approaches fail.',
  },
]

const fatLossCompounds = [
  {
    name: 'AOD-9604',
    slug: 'aod-9604-5mg',
    tag: 'Fat Loss',
    tagColor: accent,
    mechanism: 'C-terminal HGH fragment activating β3-adrenergic receptors in adipocytes — lipolysis without IGF-1 or blood sugar effects',
    useCase: 'Ideal for women because it targets fat loss without the anabolic/androgenic side effects of full HGH or SARMs. Particularly effective against the visceral fat redistribution of perimenopause. No appetite suppression means no interference with nutrition goals.',
    dose: '250–500mcg SubQ, morning fasted',
    timeline: 'Visible changes at 6–10 weeks; full effect 12–16 weeks',
  },
  {
    name: 'Semaglutide',
    slug: 'semaglutide-10mg',
    tag: 'Metabolic Reset',
    tagColor: '#a855f7',
    mechanism: 'GLP-1 receptor agonist — slows gastric emptying, reduces appetite, improves insulin sensitivity, and drives significant fat mass reduction',
    useCase: 'The most clinically validated fat loss peptide available. Particularly powerful for women with insulin resistance, metabolic syndrome, or who need a more aggressive approach. GLP-1 receptors are present in the brain and gut; semaglutide addresses the neurological component of appetite that most peptides do not.',
    dose: '0.25mg/week titrating to 1–2.4mg/week SubQ',
    timeline: 'Appetite suppression within days; visible fat loss 4–8 weeks; significant body composition shift 3–6 months',
  },
  {
    name: 'PT-141 (Bremelanotide)',
    slug: 'pt-141-10mg',
    tag: 'Libido + Metabolic',
    tagColor: '#f97316',
    mechanism: 'MC3R/MC4R melanocortin agonism — central nervous system sexual desire pathway activation with secondary metabolic effects via POMC signaling',
    useCase: 'PT-141\'s melanocortin activity includes MC4R agonism, which has metabolic effects including appetite modulation and energy expenditure effects beyond its primary libido mechanism. For women using PT-141 for desire/arousal, the metabolic benefit is a secondary gain. PT-141 is unique in that it works on desire (wanting) independent of arousal — relevant at all estrogen levels.',
    dose: '0.75–1.75mg SubQ or intranasal, as needed',
    timeline: 'Acute libido/desire effects within 1–2 hours; metabolic effects cumulative over weeks',
  },
]

const skinMechanisms = [
  {
    title: 'Collagen I & III Synthesis Upregulation',
    body: 'GHK-Cu (glycyl-L-histidyl-L-lysine copper) increases fibroblast production of collagen type I (structural scaffold) and collagen type III (elasticity, wound healing). This occurs through upregulation of transforming growth factor beta (TGF-β) signaling, which directly stimulates fibroblast collagen synthesis. Clinical data shows GHK-Cu increases collagen production by up to 70% in human fibroblast cultures — a magnitude that competes with prescription retinoids.',
  },
  {
    title: 'MMP Balance — Degradation vs. Remodeling',
    body: 'Matrix metalloproteinases (MMPs) are enzymes that degrade collagen and the extracellular matrix. In aged skin, MMP-1 (collagenase) and MMP-3 are chronically overactivated, driving net collagen loss. GHK-Cu modulates MMP expression in both directions: it suppresses MMP-1 and MMP-3 (net degradation) while supporting MMP-2 (remodeling), resulting in net collagen accumulation rather than net loss. This MMP balance restoration is something retinol achieves only partially.',
  },
  {
    title: 'Anti-Inflammatory Dermal Environment',
    body: 'Chronic low-grade inflammation (inflammaging) is a primary driver of skin aging — it activates MMPs, degrades hyaluronic acid, and impairs fibroblast function. GHK-Cu is a potent modulator of inflammatory gene expression: it downregulates TNF-α, IL-6, and NF-κB activity in dermal tissue, creating an anti-inflammatory microenvironment that allows fibroblast repair and collagen synthesis to dominate. This anti-inflammatory effect is a major advantage over retinol, which can cause inflammatory irritation.',
  },
  {
    title: 'Stem Cell Activation & Skin Regeneration',
    body: 'GHK-Cu modulates gene expression at scale — studies using gene arrays show it influences over 4,000 human genes, many of which govern tissue repair, stem cell activation, and anti-aging pathways. In skin, this includes upregulation of keratinocyte growth factor (KGF), increased hyaluronic acid synthase expression, and enhanced epidermal stem cell activation. These effects produce improvements in skin texture, hydration, and wound healing beyond what collagen synthesis alone can explain.',
  },
]

const lifestageProtocols = [
  {
    stage: 'Ages 25–35',
    subtitle: 'Skin Optimization & Body Composition Foundation',
    color: accent,
    compounds: ['GHK-Cu 2–3mg/week SubQ or topical daily', 'AOD-9604 250mcg AM fasted (if fat loss is a goal)', 'CJC-1295/Ipamorelin 100–150mcg PM (if recovery/body comp)'],
    rationale: 'In this age range, endogenous GH and estrogen are near-peak. The primary targets are preventive skin optimization (GHK-Cu before significant collagen loss begins) and body composition fine-tuning. GH secretagogue use is optional and low-dose — the focus is longevity and skin quality rather than GH deficiency correction.',
    priority: 'Skin first, body comp second',
  },
  {
    stage: 'Ages 35–45',
    subtitle: 'Perimenopause Transition: GH + Collagen + Fat Redistribution',
    color: '#c955a0',
    compounds: ['CJC-1295/Ipamorelin 150–200mcg pre-sleep (GH pulsatility restoration)', 'GHK-Cu 3–5mg/week SubQ (collagen loss acceleration)', 'AOD-9604 300–500mcg AM fasted (visceral fat redistribution)'],
    rationale: 'This is the highest-impact peptide window for women. Estrogen begins to fluctuate and decline, GH pulse amplitude decreases, collagen loss accelerates 2x, and fat redistributes centrally. CJC-1295/Ipamorelin restores the GH pulsatility that estrogen partially maintained. GHK-Cu directly counteracts the accelerated collagen loss. AOD-9604 addresses the visceral fat shift. Together these address the three core perimenopausal body composition and appearance concerns.',
    priority: 'GH restoration + collagen defense',
  },
  {
    stage: 'Ages 45–55+',
    subtitle: 'Hormonal Support, Longevity & Quality of Life',
    color: '#a03090',
    compounds: ['CJC-1295/Ipamorelin 200mcg pre-sleep (sustained GH support)', 'GHK-Cu 5mg/week SubQ + topical (comprehensive skin support)', 'Kisspeptin-10 20–50mcg (HPG axis support, consult physician)', 'PT-141 0.75–1.75mg as needed (desire/arousal support)'],
    rationale: 'Post-menopausal women see the steepest decline in GH, collagen, and sexual hormones. CJC-1295/Ipamorelin becomes a meaningful quality-of-life intervention for sleep, body composition, and energy. GHK-Cu at higher doses addresses accelerated post-menopausal skin aging. Kisspeptin-10 and PT-141 address the libido and hormonal dimensions that are often inadequately managed by HRT alone. This stage benefits most from physician-supervised protocols.',
    priority: 'Longevity + hormonal quality of life',
  },
]

const relatedGuides = [
  { title: 'GHK-Cu Complete Guide: Collagen & Skin Repair', href: '/peptides-for-collagen-skin-anti-aging', tag: 'Skin' },
  { title: 'AOD-9604 Fat Loss Peptide Guide', href: '/aod-9604-fat-loss-peptide-guide', tag: 'Fat Loss' },
  { title: 'PT-141 (Bremelanotide) Complete Guide', href: '/pt-141-bremelanotide-guide', tag: 'Libido' },
  { title: 'Kisspeptin-10 Testosterone & Hormone Guide', href: '/kisspeptin-10-testosterone-hormone-guide', tag: 'Hormones' },
]

export default function PeptidesForWomenPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] opacity-[0.05] top-0 right-0" style={{ background: accent }} />
        <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-[1px] bg-[#d4a043]" />
                <p className="label-gold">Women's Peptide Guide</p>
              </div>
              <h1 className="font-['Playfair_Display'] text-[clamp(2rem,5vw,3.5rem)] font-900 leading-[1.08] tracking-tight text-white mb-6">
                Peptides for Women:<br />
                <span className="italic" style={{ color: accent }}>Hormones, Fat Loss, Skin & Recovery</span>
              </h1>
              <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl mb-8">
                A complete guide written around female biology — how estrogen shapes the GH axis, why collagen loss accelerates with age, and which peptides address the concerns most relevant to women aged 25–55.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="tag-gold">Hormonal Context</span>
                <span className="tag">GH Optimization</span>
                <span className="tag">Collagen & Skin</span>
                <span className="tag">Fat Loss</span>
                <span className="tag">Libido & HPG Axis</span>
              </div>
            </div>
            {/* Stat pills */}
            <div className="mt-10 md:mt-0 flex flex-col gap-4 md:min-w-[220px]">
              {[
                { label: 'Collagen loss post-menopause', value: '~2%/yr', sub: '5× baseline rate' },
                { label: 'GH pulse frequency', value: 'Higher', sub: 'in premenopausal women' },
                { label: 'Visceral fat shift', value: 'Begins ~40', sub: 'estrogen-driven redistribution' },
                { label: 'GHK-Cu collagen boost', value: '+70%', sub: 'fibroblast culture data' },
              ].map((s) => (
                <div key={s.label} className="card p-4">
                  <p className="text-[#8888a0] text-xs uppercase tracking-wider mb-1">{s.label}</p>
                  <p className="text-white font-700 text-2xl mono" style={{ color: accent }}>{s.value}</p>
                  <p className="text-[#8888a0] text-xs mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 1 — Why Women Respond Differently */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Section 01</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Why Women Respond Differently to Peptides
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            Female physiology differs from male in ways that directly alter peptide mechanisms. Understanding these differences is the foundation for effective protocol design.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {hormonalMechanisms.map((m) => (
            <div key={m.title} className="card p-6">
              <div className="w-8 h-[2px] mb-4" style={{ background: accent }} />
              <h3 className="text-white font-700 text-lg mb-3">{m.title}</h3>
              <p className="text-[#8888a0] text-sm leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 2 — Fat Loss Peptides */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Section 02</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Fat Loss Peptides for Women
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            The most evidence-backed peptides for female fat loss, each addressing a distinct mechanism — lipolysis, appetite regulation, and metabolic signaling.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {fatLossCompounds.map((c) => (
            <div key={c.name} className="card-elevated p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-block text-xs font-700 uppercase tracking-widest px-2.5 py-1 rounded-full mb-3" style={{ background: c.tagColor + '22', color: c.tagColor }}>{c.tag}</span>
                  <h3 className="text-white font-700 text-xl">{c.name}</h3>
                  <p className="text-[#8888a0] text-sm mt-1 mono">{c.mechanism}</p>
                </div>
              </div>
              <p className="text-[#a0a0b8] text-sm leading-relaxed mb-4">{c.useCase}</p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <span className="text-[#8888a0] text-xs uppercase tracking-wider block mb-1">Dose</span>
                  <span className="text-white mono">{c.dose}</span>
                </div>
                <div>
                  <span className="text-[#8888a0] text-xs uppercase tracking-wider block mb-1">Timeline</span>
                  <span className="text-white">{c.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 3 — Skin & Collagen */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Section 03</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Skin & Collagen Peptides
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            GHK-Cu (glycyl-L-histidyl-L-lysine copper) is the most comprehensively studied peptide for skin biology. Its four primary mechanisms position it above any topical skincare ingredient in mechanistic breadth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {skinMechanisms.map((m) => (
            <div key={m.title} className="card p-6">
              <div className="w-8 h-[2px] mb-4" style={{ background: accent }} />
              <h3 className="text-white font-700 text-base mb-3">{m.title}</h3>
              <p className="text-[#8888a0] text-sm leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>

        {/* GHK-Cu vs Retinol comparison */}
        <div className="card p-6 md:p-8">
          <h3 className="text-white font-700 text-lg mb-5">GHK-Cu vs. Retinol: Mechanism Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2a2a3a]">
                  <th className="text-left text-[#8888a0] pb-3 pr-6 font-400 uppercase text-xs tracking-wider">Mechanism</th>
                  <th className="text-left pb-3 pr-6 font-700 text-xs uppercase tracking-wider" style={{ color: accent }}>GHK-Cu</th>
                  <th className="text-left pb-3 font-700 text-xs uppercase tracking-wider text-[#d4a043]">Retinol/Tretinoin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a1a2a]">
                {[
                  ['Collagen I synthesis', '+++', '++'],
                  ['Collagen III synthesis', '+++', '+'],
                  ['MMP-1 suppression', '+++', '++'],
                  ['Anti-inflammatory', '+++', '− (can irritate)'],
                  ['Hyaluronic acid', '++', '+'],
                  ['Stem cell activation', '++', '+'],
                  ['Skin irritation risk', 'Very Low', 'High (initial)'],
                  ['Mechanism breadth', '4,000+ genes modulated', 'RAR/RXR nuclear receptor'],
                ].map(([m, ghk, ret]) => (
                  <tr key={m}>
                    <td className="py-3 pr-6 text-[#8888a0]">{m}</td>
                    <td className="py-3 pr-6 text-white mono">{ghk}</td>
                    <td className="py-3 text-[#d4a043] mono">{ret}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 4 — Hormonal & Libido */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Section 04</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Hormonal & Libido Peptides
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            Two distinct peptide pathways address female sexual health — one targeting the upstream HPG hormonal axis, the other bypassing hormones entirely to act on CNS desire circuitry.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-elevated p-6">
            <div className="label-gold mb-2">HPG AXIS</div>
            <h3 className="text-white font-700 text-xl mb-1">Kisspeptin-10</h3>
            <p className="text-[#8888a0] text-sm mb-4">Upstream GnRH pulse trigger — governs LH, FSH, and sex hormone production</p>
            <p className="text-[#a0a0b8] text-sm leading-relaxed mb-4">
              Kisspeptin neurons in the hypothalamic arcuate nucleus gate GnRH pulse release — the top-level regulator of the entire HPG axis. Kisspeptin-10 administration stimulates GnRH secretion, which drives LH and FSH release, which signals the ovaries to produce estrogen and progesterone. This mechanism operates upstream of the gonads and targets hormonal insufficiency at the central regulation level — fundamentally different from HRT, which provides exogenous hormone rather than restoring endogenous production.
            </p>
            <p className="text-[#8888a0] text-xs">Note: Effect is blunted in women on hormonal contraceptives or in late menopause when ovarian reserve is depleted.</p>
          </div>
          <div className="card-elevated p-6">
            <div className="label-gold mb-2">MELANOCORTIN SYSTEM</div>
            <h3 className="text-white font-700 text-xl mb-1">PT-141 (Bremelanotide)</h3>
            <p className="text-[#8888a0] text-sm mb-4">MC3R/MC4R CNS agonist — desire and arousal without vascular mechanism</p>
            <p className="text-[#a0a0b8] text-sm leading-relaxed mb-4">
              PT-141 acts on MC3R and MC4R receptors in the hypothalamus and limbic system, directly activating the neurological desire and arousal pathways. Crucially, PT-141 works on <em>desire</em> (the wanting/motivation component) independently of circulating sex hormones — it does not require adequate estrogen or testosterone to produce its effect. This distinguishes it fundamentally from HRT or testosterone supplementation: PT-141 is effective even in post-menopausal women with low sex hormones, because its mechanism bypasses the hormonal pathway entirely and acts centrally on sexual motivation circuitry.
            </p>
            <p className="text-[#8888a0] text-xs">FDA-approved as Vyleesi for hypoactive sexual desire disorder (HSDD) in premenopausal women.</p>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 5 — GH & Recovery */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Section 05</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Growth Hormone & Recovery
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            CJC-1295 and Ipamorelin work synergistically to restore the pulsatile GH release that estrogen partially maintained — with important implications for why pulsatile, not continuous, GH matters.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card p-6">
            <h3 className="text-white font-700 text-lg mb-3">Pulsatile vs. Continuous GH Release</h3>
            <p className="text-[#8888a0] text-sm leading-relaxed mb-4">
              Natural GH secretion is pulsatile — occurring in bursts, primarily during deep sleep. This pulsatile pattern is required for the anabolic, fat loss, and skin benefits of GH: pulse amplitude and frequency determine receptor downregulation and tissue responsiveness. Continuous GH (as from exogenous HGH injection) blunts receptor sensitivity and produces more side effects at equivalent IGF-1 exposure. CJC-1295 (a GHRH analogue) amplifies GH pulse amplitude; Ipamorelin (a GHRP) amplifies pulse frequency and magnitude through the ghrelin receptor. Together they restore the pulsatile architecture without suppressing natural GH release.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-white font-700 text-lg mb-3">Why Pulsatile GH Matters for Women</h3>
            <p className="text-[#8888a0] text-sm leading-relaxed mb-4">
              Women naturally have higher GH pulse frequency than men — estrogen is a GH secretagogue. As estrogen declines, GH pulse frequency and amplitude fall together. This co-decline explains many symptoms of perimenopause: poor sleep quality (GH is released in deep sleep), reduced skin collagen turnover (GH drives dermal IGF-1), central fat redistribution (GH opposes visceral adiposity), and reduced recovery capacity. CJC-1295/Ipamorelin restores the hormonal environment that estrogen partially maintained — not by providing estrogen, but by restoring the downstream GH signaling estrogen drove.
            </p>
          </div>
        </div>
        <div className="card-elevated p-6 md:p-8">
          <h3 className="text-white font-700 text-lg mb-5">Expected Timeline: CJC-1295 + Ipamorelin in Women</h3>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { period: 'Weeks 1–3', effects: 'Sleep quality improvements — deeper sleep, more vivid dreams, earlier REM onset. Energy levels improving.' },
              { period: 'Weeks 4–8', effects: 'Skin texture improving. Recovery from training faster. Mild body composition shifts beginning.' },
              { period: 'Weeks 8–12', effects: 'Clear body composition improvement — fat loss and muscle tone visible. Skin quality clearly improved.' },
              { period: 'Weeks 12–16+', effects: 'Full body recomposition effect. Maximum skin benefit. Recovery and energy at peak. Maintain or cycle.' },
            ].map((t) => (
              <div key={t.period} className="card p-4">
                <p className="font-700 text-sm mb-2" style={{ color: accent }}>{t.period}</p>
                <p className="text-[#8888a0] text-xs leading-relaxed">{t.effects}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 6 — Protocol by Life Stage */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Section 06</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Protocol by Life Stage
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            The optimal peptide stack shifts with age and hormonal status. These protocols reflect the changing priorities at each decade.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {lifestageProtocols.map((p) => (
            <div key={p.stage} className="card-elevated p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs font-700 uppercase tracking-widest mb-2 mono" style={{ color: p.color }}>{p.priority}</div>
                  <h3 className="text-white font-700 text-xl">{p.stage}</h3>
                  <p className="text-[#8888a0] text-sm mt-1">{p.subtitle}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-2 mb-4">
                {p.compounds.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                    <span className="text-white mono">{c}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#8888a0] text-sm leading-relaxed">{p.rationale}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 7 — Product Buy Cards */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Research Compounds</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Sourcing the Core Women's Stack
          </h2>
          <p className="text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            These are research-use compounds. Always consult a qualified physician before use.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">

          <div className="card-elevated p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="label-gold mb-2">SKIN & COLLAGEN</div>
                <h3 className="text-white font-700 text-xl">GHK-Cu 50mg</h3>
                <p className="text-[#8888a0] text-sm mt-1">Copper peptide — TGF-β collagen synthesis, MMP balance, anti-inflammatory, stem cell activation</p>
              </div>
            </div>
            <a href={AFF('ghk-cu-50mg')} target="_blank" rel="noopener nofollow sponsored"
              className="btn-primary text-center block">View on Phiogen →</a>
            <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
              className="btn-ghost text-center block text-sm">Browse All Peptides</a>
          </div>

          <div className="card-elevated p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="label-gold mb-2">FAT LOSS</div>
                <h3 className="text-white font-700 text-xl">AOD-9604 5mg</h3>
                <p className="text-[#8888a0] text-sm mt-1">HGH C-terminal fragment — β3-AR lipolysis, no IGF-1, no blood sugar effect</p>
              </div>
            </div>
            <a href={AFF('aod-9604-5mg')} target="_blank" rel="noopener nofollow sponsored"
              className="btn-primary text-center block">View on Phiogen →</a>
            <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
              className="btn-ghost text-center block text-sm">Browse All Peptides</a>
          </div>

          <div className="card-elevated p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="label-gold mb-2">LIBIDO & DESIRE</div>
                <h3 className="text-white font-700 text-xl">PT-141 10mg</h3>
                <p className="text-[#8888a0] text-sm mt-1">Melanocortin MC3R/MC4R agonist — CNS desire pathway, hormone-independent mechanism</p>
              </div>
            </div>
            <a href={AFF('pt-141-10mg')} target="_blank" rel="noopener nofollow sponsored"
              className="btn-primary text-center block">View on Phiogen →</a>
            <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
              className="btn-ghost text-center block text-sm">Browse All Peptides</a>
          </div>

          <div className="card-elevated p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="label-gold mb-2">GH OPTIMIZATION</div>
                <h3 className="text-white font-700 text-xl">CJC-1295 No-DAC 2mg + Ipamorelin 2mg</h3>
                <p className="text-[#8888a0] text-sm mt-1">GHRH analogue + GHRP — pulsatile GH restoration, sleep, recovery, body composition</p>
              </div>
            </div>
            <a href={AFF('cjc-1295-no-dac-2mg')} target="_blank" rel="noopener nofollow sponsored"
              className="btn-primary text-center block">CJC-1295 on Phiogen →</a>
            <a href={AFF('ipamorelin-2mg')} target="_blank" rel="noopener nofollow sponsored"
              className="btn-ghost text-center block text-sm">Ipamorelin on Phiogen →</a>
          </div>

        </div>
      </section>

      <div className="rule" />

      {/* SECTION 8 — FAQ */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">FAQ</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {(jsonLd['@graph'][1] as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> }).mainEntity.map((q) => (
            <div key={q.name} className="card p-6">
              <h3 className="text-white font-700 text-base mb-3">{q.name}</h3>
              <p className="text-[#8888a0] text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 9 — Related Guides */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="mb-8">
          <span className="tag-gold mb-3 inline-block">Continue Reading</span>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white">
            Related Guides
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {relatedGuides.map((g) => (
            <Link key={g.href} href={g.href} className="card p-6 flex items-start justify-between gap-4 hover:border-[#e879a0]/30 transition-colors group">
              <div>
                <span className="tag text-xs mb-3 inline-block">{g.tag}</span>
                <h3 className="text-white font-600 text-base group-hover:text-[#e879a0] transition-colors">{g.title}</h3>
              </div>
              <span className="text-[#8888a0] group-hover:text-[#e879a0] transition-colors mt-1 text-lg">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-16">
        <div className="card p-6">
          <p className="text-[#5a5a70] text-xs leading-relaxed">
            <strong className="text-[#7a7a90]">Research Use Disclaimer:</strong> All content on PeptidesMuscle is for informational and educational purposes only. The compounds discussed are research chemicals not approved by the FDA for human use. Nothing on this page constitutes medical advice. Always consult a qualified physician before using any research compound. Individual responses vary. The information herein reflects current research literature and does not constitute a recommendation for self-administration.
          </p>
        </div>
      </div>

    </div>
  )
}
