import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AOD-9604 Fat Loss Peptide Guide: HGH Fragment Dosing & Results | PeptidesMuscle',
  description: 'The definitive AOD-9604 guide. How the HGH C-terminal fragment activates lipolysis without blood sugar effects, body recomposition protocols, looksmaxxing applications, and stacking with CJC-1295.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/aod-9604-fat-loss-peptide-guide' },
  keywords: 'AOD-9604 fat loss peptide guide, AOD-9604 dosage, AOD-9604 results, HGH fragment, AOD-9604 looksmaxxing, AOD-9604 body recomposition, AOD-9604 CJC-1295 stack',
  openGraph: {
    title: 'AOD-9604 Fat Loss Peptide Guide: HGH Fragment Protocol | PeptidesMuscle',
    description: 'C-terminal HGH fragment for targeted lipolysis without IGF-1 or blood sugar effects. Full AOD-9604 dosing protocol, results timeline, and looksmaxxing applications.',
    url: 'https://www.peptidesmuscle.com/aod-9604-fat-loss-peptide-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AOD-9604 Fat Loss Peptide Guide | PeptidesMuscle',
    description: 'HGH fragment for targeted fat loss without blood sugar effects. Full protocol and looksmaxxing applications.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'AOD-9604 Fat Loss Peptide Guide: HGH Fragment Dosing & Results',
      datePublished: '2026-04-03',
      dateModified: '2026-04-03',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AOD-9604 and how does it work for fat loss?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AOD-9604 (Anti-Obesity Drug 9604) is a synthetic peptide fragment representing amino acids 177–191 of the C-terminal region of human growth hormone (HGH). This specific fragment contains the lipolytic activity of full HGH — the ability to stimulate fat breakdown — without the insulin-like effects of the N-terminal region. AOD-9604 activates beta-3 adrenergic receptors in adipose tissue to stimulate lipolysis while simultaneously inhibiting lipogenesis (fat storage), producing a dual fat-loss effect.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the correct AOD-9604 dosage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard AOD-9604 dosing is 250–500mcg per day, administered subcutaneously in the morning in a fasted state. Some protocols split into two doses (morning fasted and pre-sleep). Fasted morning administration maximizes the lipolytic effect by combining AOD-9604\'s fat mobilization with the natural overnight fasted state. The optimal dose in clinical trials was 1mg/kg body weight orally; subcutaneous dosing at 250–500mcg is the established research community standard.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does AOD-9604 affect blood sugar or IGF-1?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No — this is AOD-9604\'s most important distinguishing characteristic. The C-terminal fragment lacks the N-terminal sequence responsible for HGH\'s insulin-like effects and IGF-1 stimulation. AOD-9604 does not raise blood glucose, does not increase insulin resistance, and does not elevate IGF-1. This makes it safe for diabetics, metabolically compromised individuals, and anyone concerned about the anabolic side effects of full HGH.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does AOD-9604 take to produce visible fat loss?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most users notice the beginning of fat loss effects at weeks 3–6, with meaningful body composition changes visible at weeks 8–12. AOD-9604 produces gradual, sustained fat loss rather than rapid acute results. The rate of fat loss depends significantly on dietary context — AOD-9604 enhances fat mobilization but does not overcome caloric surplus. Its effects are most pronounced in a moderate caloric deficit or maintenance setting.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can AOD-9604 be stacked with CJC-1295 and Ipamorelin?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — AOD-9604 stacks synergistically with CJC-1295 and Ipamorelin. The stack combines AOD-9604\'s targeted fat loss mechanism with the muscle-preserving and recovery-enhancing GH pulse stimulation of the CJC-1295/Ipamorelin combination. This creates a body recomposition effect: fat loss from AOD-9604 plus muscle quality improvement from GH optimization. There is no receptor conflict — the compounds work through independent pathways.',
          },
        },
      ],
    },
  ],
}

const accent = '#e08040'

const mechanisms = [
  {
    title: 'Beta-3 Adrenergic Receptor Activation',
    body: 'AOD-9604 activates beta-3 adrenergic receptors (β3-AR) expressed on adipocytes — fat cells. β3-AR activation triggers a cAMP-mediated signaling cascade that activates hormone-sensitive lipase (HSL), the primary enzyme responsible for breaking down stored triglycerides into free fatty acids and glycerol. These mobilized fatty acids are then available for oxidation as energy. β3-AR agonism is the same mechanism exploited by thermogenic compounds, but AOD-9604 achieves it through a peptide that mimics GH\'s fat-mobilizing domain without systemic adrenergic stimulation.',
  },
  {
    title: 'Lipogenesis Inhibition',
    body: 'Beyond stimulating fat breakdown, AOD-9604 simultaneously inhibits lipogenesis — the conversion of dietary carbohydrates and other substrates into stored fat. This dual mechanism (increased lipolysis + decreased lipogenesis) creates a powerful fat-reducing environment that operates independently of caloric intake. While caloric control amplifies results, AOD-9604 produces fat loss benefits even in eucaloric (maintenance) settings — a property not shared by most fat loss interventions.',
  },
  {
    title: 'No IGF-1 or Insulin-Like Effects',
    body: 'Full HGH\'s fat-releasing and anabolic effects reside in different parts of the molecule. The N-terminal region drives IGF-1 upregulation and insulin-like metabolic effects (which can cause insulin resistance with supraphysiological dosing). The C-terminal region (which AOD-9604 replicates) contains only the lipolytic activity. AOD-9604 therefore delivers HGH\'s fat loss mechanism in isolation — without affecting blood glucose regulation, insulin sensitivity, or IGF-1 levels.',
  },
  {
    title: 'Cartilage Repair Properties',
    body: 'Research has identified that AOD-9604 promotes cartilage repair and may have chondroprotective properties independent of its fat loss mechanisms. Studies suggest AOD-9604 stimulates proteoglycan synthesis in cartilage tissue, potentially making it useful as an adjunct for joint health alongside its primary body composition applications. This positions AOD-9604 as a uniquely dual-purpose compound: fat loss primary with joint support secondary.',
  },
]

const comparisonData = [
  { metric: 'Primary mechanism', aod: 'β3-AR activation / lipolysis', hgh: 'IGF-1, protein synthesis, lipolysis', sema: 'GLP-1 receptor agonist / appetite' },
  { metric: 'IGF-1 elevation', aod: 'None', hgh: 'High', sema: 'None' },
  { metric: 'Blood sugar effect', aod: 'None', hgh: 'Increases (high doses)', sema: 'Decreases' },
  { metric: 'Muscle preservation', aod: 'Indirect (via GH receptor)', hgh: 'Strong (anabolic)', sema: 'Partial (GLP-1 effects)' },
  { metric: 'Appetite effect', aod: 'None', hgh: 'None', sema: 'Strong suppression' },
  { metric: 'Fat loss speed', aod: 'Gradual, sustainable', hgh: 'Moderate', sema: 'Rapid' },
  { metric: 'Joint health', aod: 'Positive (chondroprotective)', hgh: 'Positive', sema: 'None' },
  { metric: 'Best use case', aod: 'Targeted fat loss, recomp', hgh: 'Full body optimization', sema: 'Rapid weight loss, metabolic' },
]

const protocols = [
  {
    use: 'Fat Loss Protocol (Primary)',
    color: accent,
    dose: '250–500mcg SubQ',
    timing: 'Morning fasted, immediately upon waking',
    duration: '12–16 weeks',
    notes: 'The fasted morning injection leverages the overnight fasted state to maximize lipolysis. Follow with 30–45 minutes of fasted cardio or delay first meal by 30+ minutes for amplified effect. Caloric deficit of 300–500 calories enhances results significantly.',
  },
  {
    use: 'Body Recomposition Protocol',
    color: '#c06020',
    dose: '250mcg AM fasted + 250mcg pre-sleep',
    timing: 'Split dosing — morning and evening',
    duration: '12–20 weeks',
    notes: 'Twice daily dosing provides more consistent lipolytic signaling throughout the day. Evening dose leverages overnight fasted catabolism of mobilized fat. Combine with CJC-1295/Ipamorelin in the evening dose for muscle preservation.',
  },
  {
    use: 'Looksmaxxing Recomp Stack',
    color: '#a04010',
    dose: 'AOD-9604 300mcg AM + CJC-1295/Ipamorelin 200mcg PM',
    timing: 'AM fasted / PM pre-sleep',
    duration: '12–16 weeks',
    notes: 'The definitive body recomposition stack for looksmaxxing. AOD-9604 drives facial and body fat reduction; CJC-1295/Ipamorelin improves muscle quality, skin tightening, and recovery. Together they create simultaneous fat loss and muscle quality improvement.',
  },
]

const looksmaxxingBenefits = [
  {
    benefit: 'Facial Fat Reduction',
    detail: 'Facial fat — particularly submental (under chin), jowl, and buccal fat — contributes significantly to the perception of aging and reduced facial definition. AOD-9604\'s lipolytic effect applies to all adipose tissue, including facial fat deposits. Over 12–20 weeks, meaningful reduction in facial adiposity produces sharper jawline definition, higher cheekbone visibility, and reduced midface heaviness — all core looksmaxxing outcomes.',
  },
  {
    benefit: 'Abdominal Definition',
    detail: 'Visceral and subcutaneous abdominal fat is among the most lipolytically responsive fat depots to β3-AR activation. AOD-9604 produces preferential mobilization of abdominal fat, contributing to the lean midsection aesthetics central to looksmaxxing physique goals. This effect is amplified by fasted cardio in the post-injection window.',
  },
  {
    benefit: 'No Muscle Loss During Cut',
    detail: 'One of looksmaxxing\'s critical challenges is losing fat without the muscle loss that reduces aesthetic impact. AOD-9604\'s mechanism targets fat tissue directly without affecting muscle protein synthesis or nitrogen balance. When stacked with GH secretagogues (CJC-1295/Ipamorelin), the muscle-preserving GH signal actively counteracts the muscle-wasting risk of caloric restriction.',
  },
  {
    benefit: 'Skin Tightening via GH Pathway',
    detail: 'AOD-9604 retains some GH receptor binding activity that does not translate to IGF-1 elevation but may contribute to collagen synthesis signaling. Users report that fat loss from AOD-9604 tends to be accompanied by skin tightening rather than the loose skin that can follow rapid fat loss — a critically important distinction for looksmaxxing where skin quality is as important as fat reduction.',
  },
]

const timeline = [
  {
    period: 'Weeks 1–2',
    fat: 'Cellular lipolysis activation beginning. No visible fat loss yet — fatty acid mobilization has increased but visible changes require weeks of consistent use.',
    other: 'Some users report slightly increased morning energy from enhanced fat oxidation. No appetite effects. No hormonal changes.',
  },
  {
    period: 'Weeks 3–6',
    fat: 'Early fat loss noticeable on scale and by feel. Midsection feeling slightly less full. Facial definition may be slightly improved in individuals starting at higher body fat.',
    other: 'Recovery feeling slightly improved. If stacked with CJC/Ipamorelin, sleep improvements becoming evident. Energy during fasted cardio improved.',
  },
  {
    period: 'Weeks 7–12',
    fat: 'Clear visible fat loss. Abdominal definition improving. Facial jawline and cheekbone definition more visible. Body fat percentage measurably reduced.',
    other: 'Peak lipolytic effect. Skin quality improving, particularly if stacked with GH secretagogues. Joint comfort maintained or improved due to chondroprotective effects.',
  },
  {
    period: 'Weeks 13–20',
    fat: 'Continued gradual fat reduction. Maximum body recomposition benefit with extended protocol. Some users report plateau — implement diet adjustments or compound rotation.',
    other: 'Cumulative body composition transformation. When combined with muscle-building compounds, recomposition (simultaneous fat loss + muscle gain) becomes clearly visible.',
  },
]

export default function Aod9604FatLossPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#e08040] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">HGH Fragment</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            AOD-9604:<br />
            <span className="italic" style={{ color: accent }}>HGH Fragment for Targeted Fat Loss</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            The C-terminal fragment of human growth hormone — isolated for its lipolytic activity alone. AOD-9604 delivers HGH&apos;s fat-burning mechanism without affecting blood sugar, IGF-1, or insulin sensitivity. The precision fat loss peptide.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — WHAT IT DOES */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What AOD-9604 Actually Does</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>AOD-9604 (Anti-Obesity Drug 9604) is a synthetic peptide fragment corresponding to amino acids 177–191 of the C-terminus of human growth hormone (hGH). It was developed by Metabolic Pharmaceuticals in Australia, initially progressing through Phase IIb clinical trials for obesity treatment. While it did not receive regulatory approval for obesity (largely due to economic rather than safety reasons), it established an extensive safety and efficacy record that makes it one of the most well-characterized fat loss peptides in research use.</p>
            <p>The conceptual elegance of AOD-9604 is in its fragment strategy. Full HGH is a 191-amino-acid protein with multiple domains that produce different effects: the N-terminal region drives IGF-1 production, protein synthesis, and the insulin-like metabolic effects. The C-terminal region (amino acids 177–191) contains the lipolytic activity — the ability to stimulate fat breakdown. AOD-9604 is essentially this lipolytic domain extracted and synthesized independently.</p>
            <p>The result is a compound that delivers HGH&apos;s fat loss mechanism with remarkable selectivity: no blood glucose effects, no IGF-1 elevation, no anabolic effects on muscle, and none of the insulin resistance that high-dose synthetic HGH can induce. Clinical trials confirmed this profile — AOD-9604 reduced body fat in human subjects without meaningful changes in blood glucose, IGF-1, or other hormonal markers associated with full HGH use.</p>
            <p>For looksmaxxers and body recomposition seekers, this means targeted fat reduction — particularly from the face, midsection, and troublesome fat deposits — without the hormonal complexity of full HGH protocols, and without the appetite suppression (and associated discomfort) of GLP-1 agonists like semaglutide or tirzepatide.</p>
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

        {/* 02 — COMPARISON */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>AOD-9604 vs. Full HGH vs. Semaglutide</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">AOD-9604, full HGH, and GLP-1 agonists (semaglutide, tirzepatide) all produce fat loss through entirely different mechanisms. Understanding the differences clarifies AOD-9604&apos;s unique niche: targeted lipolysis without hormonal complexity or appetite manipulation.</p>
            <div className="card rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left p-3 text-[#50505e]">Metric</th>
                      <th className="text-center p-3" style={{ color: accent }}>AOD-9604</th>
                      <th className="text-center p-3 text-[#6090ff]">Full HGH</th>
                      <th className="text-center p-3 text-[#40c090]">Semaglutide</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="p-3 text-[#8888a0]">{row.metric}</td>
                        <td className="p-3 text-center" style={{ color: accent }}>{row.aod}</td>
                        <td className="p-3 text-center text-[#aaaabc]">{row.hgh}</td>
                        <td className="p-3 text-center text-[#aaaabc]">{row.sema}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">When to Choose AOD-9604</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">AOD-9604 is the optimal choice when the goal is targeted fat reduction without hormonal complexity, appetite suppression, or the risks of supraphysiological GH. It excels for individuals who are metabolically healthy but seeking body recomposition improvement — particularly those focused on facial aesthetics and body fat reduction while preserving muscle. It is not ideal for those seeking rapid weight loss (semaglutide performs this role better) or comprehensive anabolic optimization (full GH or IGF-1 protocols serve that role).</p>
            </div>
            <div className="flex gap-4">
              <Link href="/semaglutide-complete-guide" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
                Semaglutide Complete Guide →
              </Link>
              <Link href="/retatrutide-body-recomposition-looksmaxxing" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
                Retatrutide Recomp Guide →
              </Link>
            </div>
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
                    <p className="text-[#50505e] text-[11px] mb-1">TIMING</p>
                    <p className="text-[#aaaabc] text-[13px]">{p.timing}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DURATION</p>
                    <p className="text-[#aaaabc] text-[13px]">{p.duration}</p>
                  </div>
                </div>
                <p className="text-[#8888a0] text-[12px] leading-relaxed">{p.notes}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 04 — RESULTS TIMELINE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Results Timeline</h2>
          </div>
          <div className="pl-10 space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{t.period}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">FAT LOSS / BODY COMPOSITION</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.fat}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">OTHER EFFECTS</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.other}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 05 — WHO IS IT FOR */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Who Is AOD-9604 For?</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>AOD-9604 occupies a specific niche in the fat loss peptide landscape. It is most valuable for individuals who are already at a reasonable body composition and seeking the final level of refinement — facial definition, abdominal detail, and overall leanness — that is difficult to achieve through diet and training alone. It is less suited to individuals seeking dramatic rapid weight loss, for whom GLP-1 agonists (semaglutide, tirzepatide, retatrutide) are more appropriate.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Ideal Candidates', items: ['Individuals at moderate body fat seeking further reduction (15–25% BF)', 'Looksmaxxers focused on facial and body definition', 'Athletes in body composition optimization phases', 'Individuals who cannot tolerate appetite-suppressing compounds', 'Diabetics or pre-diabetics concerned about blood sugar effects of HGH', 'Body recompositioners wanting fat loss alongside muscle development'] },
                { label: 'Less Optimal Candidates', items: ['Individuals with significant obesity seeking primary weight loss', 'Those expecting rapid dramatic fat loss', 'Individuals under 20 with naturally high GH levels', 'Those expecting appetite suppression as a benefit', 'Individuals with active cancer or GH-sensitive conditions', 'Those unwilling to commit to 12+ week protocols'] },
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

        {/* 06 — LOOKSMAXXING */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>AOD-9604 for Looksmaxxing</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">Facial aesthetics are disproportionately determined by fat distribution. Facial fat — particularly submental, buccal, and infraorbital — directly affects the perception of jaw definition, cheekbone prominence, and overall facial attractiveness. These fat deposits are among the most lipolytically responsive to AOD-9604&apos;s β3-AR mechanism, making AOD-9604 one of the most targeted non-surgical facial refinement tools available.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {looksmaxxingBenefits.map((b, i) => (
                <div key={i} className="card rounded-xl p-5">
                  <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{b.benefit}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{b.detail}</p>
                </div>
              ))}
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-3">Looksmaxxing Recomposition Protocol</p>
              <div className="space-y-2">
                {[
                  ['Morning (fasted)', 'AOD-9604 300mcg SubQ → 30–45 min fasted cardio → break fast'],
                  ['Evening (pre-sleep)', 'CJC-1295 200mcg + Ipamorelin 200mcg SubQ — 2+ hrs post last meal'],
                  ['Daily (optional)', 'GHK-Cu topical to face for amplified skin quality during fat loss'],
                  ['Weekly', 'Track body measurements, not just weight — fat loss with muscle maintenance may show stable weight but improved composition'],
                  ['Duration', '12–16 weeks minimum for full looksmaxxing recomposition protocol'],
                ].map(([time, action], i) => (
                  <div key={i} className="flex gap-4 text-[13px]">
                    <span className="text-[#50505e] w-32 flex-shrink-0">{time}</span>
                    <span className="text-[#aaaabc]">{action}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/looksmaxxing-routine-daily-protocol" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
              Full Daily Looksmaxxing Protocol →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 07 — STACKING WITH CJC-1295 */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">07</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Stacking AOD-9604 with CJC-1295/Ipamorelin</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">AOD-9604 and CJC-1295/Ipamorelin work through completely independent mechanisms and are the definitive body recomposition stack. AOD-9604 drives fat mobilization and lipolysis. CJC-1295/Ipamorelin drives GH pulse optimization, muscle preservation, skin quality, and recovery. Combined, they create a simultaneous fat loss and muscle quality environment — body recomposition — that is difficult to achieve through any single compound or traditional dietary approaches.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  name: 'AOD-9604',
                  color: accent,
                  role: 'Targeted lipolysis',
                  dose: '250–500mcg AM fasted',
                  timing: 'Morning',
                  benefit: 'Fat mobilization, lipogenesis inhibition',
                },
                {
                  name: 'CJC-1295',
                  color: '#a060ff',
                  role: 'GHRH receptor activation',
                  dose: '200mcg pre-sleep',
                  timing: 'Evening',
                  benefit: 'GH pulse amplification, recovery',
                },
                {
                  name: 'Ipamorelin',
                  color: '#40c0ff',
                  role: 'GHS-R1a agonist',
                  dose: '200mcg pre-sleep',
                  timing: 'Evening (with CJC)',
                  benefit: 'Clean GH pulse, skin quality, sleep',
                },
              ].map((s, i) => (
                <div key={i} className="card rounded-xl p-4" style={{ borderTop: `2px solid ${s.color}` }}>
                  <p className="text-white font-700 text-[14px] mb-1">{s.name}</p>
                  <p className="text-[12px] mb-2" style={{ color: s.color }}>{s.role}</p>
                  <p className="text-[#50505e] text-[11px] mb-0.5">DOSE</p>
                  <p className="text-[#aaaabc] text-[12px] mb-1">{s.dose}</p>
                  <p className="text-[#50505e] text-[11px] mb-0.5">TIMING</p>
                  <p className="text-[#aaaabc] text-[12px] mb-1">{s.timing}</p>
                  <p className="text-[#50505e] text-[11px] mb-0.5">BENEFIT</p>
                  <p className="text-[#aaaabc] text-[12px]">{s.benefit}</p>
                </div>
              ))}
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Why This Stack Works So Well</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Body recomposition — the simultaneous loss of fat and gain (or preservation) of muscle — is normally constrained by the fact that caloric deficit for fat loss conflicts with the anabolic surplus required for muscle growth. This stack partially circumvents this constraint: AOD-9604 mobilizes stored fat as an energy source (reducing the actual caloric deficit your body experiences), while CJC-1295/Ipamorelin maintains the anabolic hormonal environment for muscle quality. The result is a fat loss rate faster than expected from caloric intake, while muscle is preserved or improved.</p>
            </div>
            <Link href="/cjc-1295-ipamorelin-results-timeline" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
              CJC-1295 + Ipamorelin Complete Guide →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 08 — SIDE EFFECTS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">08</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Safety Profile & Side Effects</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>AOD-9604 has one of the cleanest safety profiles in the peptide research space, validated across multiple human clinical trials. The compound was administered to human subjects across Phase IIa and IIb trials at doses ranging from 1mg/kg orally without significant adverse events. At the substantially lower subcutaneous doses used in research protocols (250–500mcg), side effects are minimal.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Injection Site Reactions', severity: 'Mild, common', val: 'Mild redness, itching, or bruising at the subcutaneous injection site. Rotate sites daily. Use appropriate gauge needle (29–31G).' },
                { label: 'Headache', severity: 'Occasional', val: 'Mild headache reported by some users, particularly early in the protocol. Typically resolves within the first week. Usually related to the metabolic shift associated with increased fat oxidation.' },
                { label: 'Fatigue (Initial)', severity: 'Occasional, early', val: 'Brief period of mild fatigue in the first 1–2 weeks as the body adapts to increased fat mobilization for fuel. Resolves quickly and typically reverses to increased energy.' },
                { label: 'No Hormonal Effects', severity: 'Not applicable', val: 'AOD-9604 does not affect IGF-1, insulin, testosterone, estrogen, cortisol, prolactin, or thyroid hormones. No hormone management compounds are required.' },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-white font-600 text-[13px]">{item.label}</p>
                    <span className="tag text-[10px]">{item.severity}</span>
                  </div>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.val}</p>
                </div>
              ))}
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">FDA GRAS Status</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">AOD-9604 received Generally Recognized As Safe (GRAS) status from the FDA — a designation reflecting the extensive safety data accumulated through clinical trials. This is an unusual and meaningful designation for a research peptide, confirming the safety validation achieved during the drug development process even though the compound never proceeded to final drug approval.</p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 09 — BUY */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get AOD-9604</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">AOD-9604</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Pharmaceutical-grade lyophilized AOD-9604. Certificate of analysis verified. The precision fat loss peptide for body recomposition and looksmaxxing.</p>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored" className="btn-primary w-full justify-center py-3 text-[13px]">Buy AOD-9604 →</a>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">CJC-1295 + Ipamorelin</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Stack with AOD-9604 for the definitive body recomposition protocol. Fat loss + GH optimization + muscle preservation.</p>
              <div className="flex gap-3">
                <a href="/go/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Stack →</a>
                <Link href="/cjc-1295-ipamorelin-results-timeline" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Stack Guide</Link>
              </div>
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
                q: 'Can AOD-9604 be taken orally?',
                a: 'AOD-9604 was originally developed as an oral compound and the clinical trials demonstrating fat loss used oral administration. However, oral peptide bioavailability is significantly lower than subcutaneous injection due to gastrointestinal peptide degradation. Most research protocols use subcutaneous injection for more consistent and reliable results at lower doses. Some users take higher oral doses, but subcutaneous administration at 250–500mcg is the established research standard.',
              },
              {
                q: 'Does AOD-9604 require dietary changes to work?',
                a: 'AOD-9604 produces fat loss effects independently of diet — it is genuinely lipolytic. However, results are substantially amplified by a modest caloric deficit (300–500 calories below maintenance). At maintenance calories, AOD-9604 produces body recomposition: fat loss with weight stability, as mobilized fat is replaced by maintained or gained lean mass. In caloric surplus, fat loss may be partially offset by dietary fat storage, though the lipolysis still occurs.',
              },
              {
                q: 'Is AOD-9604 safe for diabetics?',
                a: 'AOD-9604\'s most important property for diabetics is its lack of blood glucose effect. Unlike full HGH, which can induce insulin resistance and raise blood glucose at supraphysiological doses, AOD-9604 does not affect insulin signaling or blood glucose regulation. Clinical trials specifically evaluated diabetic safety endpoints and found no adverse metabolic effects. However, any peptide protocol in diabetics should be discussed with a managing physician.',
              },
              {
                q: 'Will AOD-9604 cause muscle loss?',
                a: 'AOD-9604 does not cause muscle loss — it is not catabolic. Its lipolytic mechanism specifically targets adipose tissue. There is no mechanism by which AOD-9604 increases muscle protein breakdown. When used alone in a caloric deficit, muscle preservation depends on training and protein intake as usual. When stacked with CJC-1295/Ipamorelin, the GH-mediated anabolic environment actively supports muscle preservation during fat loss.',
              },
              {
                q: 'How should I time AOD-9604 around training?',
                a: 'The most effective protocol for training individuals is: inject AOD-9604 fasted in the morning, then train in a fasted state for 30–45 minutes (typically low-intensity cardio) to oxidize the mobilized fatty acids. This combination leverages the mobilized fat directly as training fuel, maximizing fat oxidation efficiency. If training later in the day, inject AOD-9604 2+ hours after the previous meal in a fasted state for the same effect.',
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
              { href: '/retatrutide-body-recomposition-looksmaxxing', label: 'Retatrutide Recomposition Guide', desc: 'The GLP-1/GIP/GCG triple agonist — compare rapid weight loss vs AOD-9604 precision fat loss' },
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin Guide', desc: 'The muscle quality and recovery stack that completes the AOD-9604 recomposition protocol' },
              { href: '/semaglutide-complete-guide', label: 'Semaglutide Complete Guide', desc: 'Compare GLP-1-mediated weight loss with AOD-9604\'s targeted lipolytic approach' },
              { href: '/looksmaxxing-routine-daily-protocol', label: 'Daily Looksmaxxing Protocol', desc: 'Where AOD-9604 fits in the complete daily peptide and optimization schedule' },
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
