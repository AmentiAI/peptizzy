import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Selank & Semax Nootropic Peptide Guide: Anxiety, Focus & Cognitive Enhancement | PeptidesMuscle',
  description: 'The complete guide to Selank and Semax — Russian nootropic peptides for anxiety reduction, cognitive enhancement, focus, mood, and social confidence. Mechanism, dosing, intranasal protocol, and comparison.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/selank-semax-nootropic-peptide-guide' },
  keywords: 'selank semax nootropic peptide guide anxiety focus, selank anxiety, semax cognitive enhancement, Russian nootropic peptides, selank vs semax, nootropic peptides 2026',
  openGraph: {
    title: 'Selank & Semax: Nootropic Peptide Guide for Anxiety & Focus | PeptidesMuscle',
    description: 'Complete guide to Selank (anxiolytic) and Semax (cognitive enhancer) — Russian nootropic peptides with decades of research behind them.',
    url: 'https://www.peptidesmuscle.com/selank-semax-nootropic-peptide-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selank & Semax: Nootropic Peptide Guide | PeptidesMuscle',
    description: 'Russian nootropic peptides for anxiety, focus, and cognitive performance — complete guide with dosing and protocols.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'Selank & Semax Nootropic Peptide Guide: Anxiety, Focus & Cognitive Enhancement',
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
          name: 'What is Selank and what does it do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Selank is a synthetic heptapeptide (Thr-Lys-Pro-Arg-Pro-Gly-Pro) derived from the naturally occurring immunomodulatory tetrapeptide tuftsin, with an added sequence that improves its stability and CNS penetration. Developed by the Russian Academy of Sciences, it functions as an anxiolytic — it reduces anxiety without the sedation, tolerance development, or addiction risk of benzodiazepines. It works by modulating GABAergic transmission, increasing BDNF expression, regulating enkephalin degradation, and balancing monoamine neurotransmitters. It is used clinically in Russia for generalized anxiety disorder.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Semax and how is it different from Selank?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Semax is a synthetic heptapeptide analogue of ACTH (4-7) fragment. While Selank is primarily anxiolytic, Semax is primarily a cognitive enhancer and neuroprotectant. It increases BDNF more potently than Selank, stimulates dopamine and serotonin activity, improves working memory and attention, and has demonstrated neuroprotective effects in stroke and traumatic brain injury models. Semax is used clinically in Russia for cognitive impairment, stroke rehabilitation, and ADHD-like presentations.',
          },
        },
        {
          '@type': 'Question',
          name: 'How are Selank and Semax administered?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both Selank and Semax are most commonly administered intranasally (nasal drops or spray) because the intranasal route provides direct olfactory nerve access to the brain, bypassing the blood-brain barrier. Subcutaneous injection is also effective for systemic bioavailability. Standard dosing: Selank 250–750mcg intranasally 2–3x daily; Semax 300–900mcg intranasally 1–2x daily. The peptides come in nasal drop formulations in Russia (0.1%) and are reconstituted in saline for intranasal use from lyophilized powder.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Selank be used instead of benzodiazepines for anxiety?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Selank is not a direct benzodiazepine substitute — it does not produce equivalent anxiolysis for severe anxiety disorders. However, for mild to moderate anxiety, social anxiety, and stress management, Selank provides meaningful anxiolytic effects without any of the tolerance, dependence, cognitive impairment, or withdrawal risks of benzodiazepines. It does not produce sedation. Many biohackers use Selank as a non-addictive anxiolytic alternative for situational anxiety management. Always consult a physician before modifying anxiety medication.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the looksmaxxing connection to Selank and Semax?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Social performance and confidence are recognized looksmaxxing targets — physical attractiveness is significantly modulated by behavioral and social presentation. Selank reduces anxiety and social inhibition without sedation, improving social fluency, eye contact, and confident behavior. Semax improves cognitive processing speed and verbal fluency. The combined effect is measurable improvement in the social expression of physical features — the full projection of appearance-related attractiveness, which is as much behavioral as physical.',
          },
        },
      ],
    },
  ],
}

const accent = '#40c0ff'

const selankMechanisms = [
  {
    title: 'GABAergic Modulation',
    body: 'Selank modulates GABA-A receptor function through allosteric mechanisms similar in concept to, but distinct from, benzodiazepines. It increases GABAergic inhibitory tone without directly binding the benzodiazepine site, producing anxiolysis without the sedation, motor impairment, or tolerance development associated with BZD drugs. This makes it functionally anxiolytic without the downsides that limit clinical benzodiazepine use.',
  },
  {
    title: 'BDNF Upregulation',
    body: 'Brain-Derived Neurotrophic Factor (BDNF) is the primary neurotrophin responsible for neuronal survival, synaptic plasticity, and neurogenesis. Selank reliably increases hippocampal and cortical BDNF expression. Higher BDNF correlates with reduced anxiety, improved mood, better learning and memory consolidation, and resilience to stress. This mechanism partly explains Selank\'s antidepressant-adjacent effects beyond its acute anxiolysis.',
  },
  {
    title: 'Enkephalin Regulation',
    body: 'Enkephalins are endogenous opioid peptides involved in pain modulation, mood regulation, and reward processing. Selank inhibits enkephalinase — the enzyme that degrades enkephalins — increasing the lifetime and bioavailability of endogenous enkephalins at their receptors. This produces a natural mood uplift and reinforces the anxiolytic effect through the opioid system, without the abuse potential of exogenous opioids.',
  },
  {
    title: 'Immunomodulation',
    body: 'Selank is derived from tuftsin — a tetrapeptide with documented immunomodulatory activity. It modulates the expression of interleukins and interferons, reducing neuroinflammation that contributes to anxiety and depression. The neuroinflammatory component of anxiety is increasingly recognized in psychiatry research; Selank\'s immunomodulatory dimension may explain its efficacy in stress-induced anxiety where inflammatory mediators play a role.',
  },
]

const semaxMechanisms = [
  {
    title: 'BDNF & NGF Upregulation',
    body: 'Semax increases both BDNF and NGF (Nerve Growth Factor) more potently than Selank. The rapid, robust BDNF response to Semax administration is the primary mechanism behind its acute cognitive enhancement effects — BDNF drives LTP (long-term potentiation), the synaptic mechanism of learning and memory formation. Higher BDNF also creates a neuroprotective environment that reduces cognitive decline with repeated stress.',
  },
  {
    title: 'Dopaminergic & Serotonergic Activity',
    body: 'Semax increases turnover and activity in both the dopaminergic and serotonergic systems. Enhanced dopamine function improves working memory, motivation, executive function, and sustained attention — the cognitive dimensions most relevant to high-performance tasks. Serotonin modulation contributes to mood stabilization and may partially explain the anxiolytic-adjacent effects some users report alongside Semax\'s primary stimulatory cognitive effects.',
  },
  {
    title: 'Neuroprotection & Neurogenesis',
    body: 'Semax has demonstrated neuroprotective effects in ischemic stroke models, traumatic brain injury models, and neurodegeneration models. It reduces excitotoxicity, promotes neuronal survival following injury, and appears to stimulate neurogenesis in the hippocampus. This makes it relevant not only for acute cognitive enhancement but also as a long-term neurological maintenance compound in biohacking protocols.',
  },
  {
    title: 'ACTH Analogue Activity',
    body: 'Semax is structurally based on ACTH (4-7), but lacks the corticotropic activity that would elevate cortisol. The melanocortin receptor signaling from its ACTH-analogue structure contributes to its CNS effects without the adrenal axis implications of full ACTH. This elegant pharmacological design preserves the cognitive-enhancing properties of ACTH fragment peptides while removing the cortisol side effects.',
  },
]

const selankBenefits = [
  { benefit: 'Anxiety Reduction', detail: 'Dose-dependent reduction in trait and state anxiety. Effective for generalized anxiety, social anxiety, and situational stress. Onset within 15–30 minutes of intranasal administration.' },
  { benefit: 'Fear Extinction', detail: 'Clinical research suggests Selank accelerates extinction of conditioned fear responses — relevant for trauma-adjacent anxiety patterns and phobias.' },
  { benefit: 'Social Confidence', detail: 'Reduced social anxiety translates to improved social fluency, willingness to engage, and natural charisma expression. The "social lubricant without intoxication" effect.' },
  { benefit: 'Sleep Quality', detail: 'Reduces hyperarousal and nighttime anxiety that interfere with sleep onset. Not sedating, but removes the anxious activation that prevents sleep in anxiety-prone individuals.' },
  { benefit: 'Mood Stabilization', detail: 'Modest antidepressant-adjacent effects via BDNF and enkephalin mechanisms. Particularly effective for anxiety-driven low mood and stress-related dysphoria.' },
]

const semaxBenefits = [
  { benefit: 'Working Memory', detail: 'Enhanced digit span, spatial working memory performance, and information manipulation capacity. Onset relatively rapid — many users report effects within hours of administration.' },
  { benefit: 'Attention & Focus', detail: 'Sustained attention and selective attention improvements documented in clinical trials. Relevant for demanding cognitive work, studying, and performance contexts.' },
  { benefit: 'Verbal Fluency', detail: 'Improved word retrieval and verbal fluency — particularly notable in users who experience cognitive sluggishness or word-finding difficulty under stress.' },
  { benefit: 'Neuroprotection', detail: 'BDNF/NGF elevation creates a neuroprotective environment. Long-term users report better cognitive resilience under stress and faster recovery from cognitive fatigue.' },
  { benefit: 'Mood & Motivation', detail: 'Dopaminergic activity contributes to improved motivation, drive, and executive initiation — the ability to begin and sustain cognitive tasks.' },
]

const comparison = [
  { dimension: 'Primary Effect', selank: 'Anxiolytic — anxiety and stress reduction', semax: 'Cognitive enhancement — focus and memory' },
  { dimension: 'Speed of Onset', selank: '15–30 min intranasal', semax: '20–45 min intranasal' },
  { dimension: 'BDNF Upregulation', selank: 'Moderate', semax: 'Strong' },
  { dimension: 'Dopamine', selank: 'Modest modulation', semax: 'Significant increase' },
  { dimension: 'Stimulating?', selank: 'No — calming without sedation', semax: 'Mildly stimulating at higher doses' },
  { dimension: 'Best For', selank: 'Anxiety, social situations, stress', semax: 'Study, work, demanding cognitive tasks' },
  { dimension: 'Looksmaxxing Angle', selank: 'Social confidence, reduced inhibition', semax: 'Verbal fluency, cognitive edge' },
  { dimension: 'Tolerance Development', selank: 'None documented', semax: 'None documented' },
  { dimension: 'Standard Dose (Intranasal)', selank: '250–750mcg 2–3x/day', semax: '300–900mcg 1–2x/day' },
]

export default function SelankSemaxNootropicPeptideGuide() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#40c0ff] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Nootropic Peptides</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            Selank & Semax:<br />
            <span className="italic" style={{ color: accent }}>Nootropic Peptide Guide</span>
          </h1>
      <AuthorByline datePublished="2026-04-03" dateModified="2026-04-03" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            Russia&apos;s most researched nootropic peptides — Selank for anxiety and social confidence, Semax for cognitive enhancement and focus. Mechanism, dosing, protocols, and looksmaxxing applications.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — ORIGINS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Russian Military Research Origins</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Selank and Semax are not fringe compounds — they are registered pharmaceutical drugs in Russia with decades of clinical research, developed by the Institute of Molecular Genetics of the Russian Academy of Sciences in collaboration with Russia&apos;s Zakusov Institute of Pharmacology. Their development was partly driven by military and cosmonaut applications: the need for compounds that could reduce stress and maintain cognitive performance in extreme operational conditions without the impairment, addiction risk, or detectable effects on motor function associated with conventional psychoactive drugs.</p>
            <p>The research program that produced Selank and Semax operated in parallel with (and completely independently of) Western pharmaceutical development, drawing on Soviet-era traditions of synthetic peptide research that produced numerous novel neurological compounds. This tradition — distinct from Western drug development pathways — resulted in a class of compounds with mechanisms and profiles that simply do not exist among FDA-approved pharmaceuticals.</p>
            <p>Both compounds are legal to purchase for research purposes in the United States and most European countries, though they are not FDA-approved for human use. In Russia, they are available as registered nasal spray formulations (Selank 0.15%, Semax 0.1% and 1%) through pharmacies. Their safety profiles, established through Soviet and Russian clinical trials spanning the 1980s through 2010s, are well-characterized at standard doses.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 02 — SELANK MECHANISM */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Selank: Mechanism of Action</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Selank (Thr-Lys-Pro-Arg-Pro-Gly-Pro) is a stabilized analogue of the endogenous immunomodulatory peptide tuftsin. Its design solved a key pharmacological challenge: tuftsin is rapidly degraded by serum enzymes, making it impractical as a therapeutic. Selank&apos;s structural modifications confer metabolic stability while retaining and extending tuftsin&apos;s biological activity, with the addition of CNS-targeted effects not present in the parent compound.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {selankMechanisms.map((m, i) => (
                <div key={i} className="card rounded-xl p-5">
                  <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{m.title}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-2">The net pharmacological profile of Selank is one of the most clinically useful in the nootropic peptide class: meaningful anxiolysis, mood stabilization, and cognitive support — without sedation, motor impairment, tolerance, or dependence. Phase II and III clinical trials in Russia demonstrated statistically significant reduction in anxiety scores on the Hamilton Anxiety Rating Scale versus placebo, with no adverse event signal above placebo.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 03 — SELANK BENEFITS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Selank Benefits</h2>
          </div>
          <div className="pl-10 space-y-4">
            <p className="text-[#8888a0] text-[16px] leading-relaxed mb-4">Selank&apos;s benefits cluster around anxiety reduction and the downstream effects of anxiety on cognition, social function, sleep, and mood. For the looksmaxxing community specifically, Selank&apos;s effect on social anxiety and confidence is the primary appeal — physical attractiveness is substantially mediated by social behavior and presence.</p>
            <div className="space-y-3">
              {selankBenefits.map((b, i) => (
                <div key={i} className="card rounded-xl p-4" style={{ borderLeft: `2px solid ${accent}` }}>
                  <p className="text-white font-600 text-[14px] mb-1">{b.benefit}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{b.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 04 — SEMAX MECHANISM */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Semax: Mechanism of Action</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Semax (Met-Glu-His-Phe-Pro-Gly-Pro) is a synthetic heptapeptide analogue of the N-terminal fragment of ACTH (4-10), the region responsible for ACTH&apos;s CNS effects rather than its corticotropic (cortisol-releasing) activity. This key design decision gives Semax the neurological effects of ACTH-family peptides without stimulating the adrenal axis — an elegant pharmacological separation of mechanism from unwanted side effects.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {semaxMechanisms.map((m, i) => (
                <div key={i} className="card rounded-xl p-5">
                  <p className="font-700 text-[14px] mb-2" style={{ color: '#d4a043' }}>{m.title}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-2">The combination of strong BDNF/NGF upregulation, dopaminergic enhancement, and neuroprotective signaling makes Semax a genuinely multi-mechanistic cognitive enhancer — not a stimulant or a mood drug that secondarily improves apparent cognition, but a compound that directly enhances the biological mechanisms of learning, memory, and neural performance.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 05 — SEMAX BENEFITS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Semax Benefits</h2>
          </div>
          <div className="pl-10 space-y-4">
            <div className="space-y-3">
              {semaxBenefits.map((b, i) => (
                <div key={i} className="card rounded-xl p-4" style={{ borderLeft: '2px solid #d4a043' }}>
                  <p className="text-white font-600 text-[14px] mb-1">{b.benefit}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{b.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — DOSING */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dosing: Intranasal Administration</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Both Selank and Semax are most commonly and most effectively administered intranasally. The nasal route provides direct access to the olfactory nerve — a unique pathway that bypasses the blood-brain barrier entirely, allowing peptides to reach the CNS via olfactory transport within minutes. This route also provides good systemic bioavailability through nasal mucosal absorption into the bloodstream.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[15px] mb-3">Selank Dosing</p>
                <div className="space-y-2">
                  {[
                    { label: 'Standard Dose', val: '250–750mcg per administration' },
                    { label: 'Frequency', val: '2–3x daily. Morning + afternoon most common. Can add evening dose for anxiety-prone individuals.' },
                    { label: 'Administration', val: '1–2 drops of 0.15% solution per nostril, or reconstitute lyophilized powder in 0.9% saline to equivalent concentration' },
                    { label: 'Cycle', val: 'Can be used daily for 2–4 weeks, then 1–2 week break. Some users use situationally (before social events, stressful periods)' },
                    { label: 'Onset', val: '15–30 minutes intranasal. Effects last 4–8 hours.' },
                  ].map((d, i) => (
                    <div key={i} className="flex gap-2">
                      <p className="text-[#d4a043] text-[11px] font-600 flex-shrink-0 mt-0.5 w-24">{d.label}:</p>
                      <p className="text-[#8888a0] text-[12px] leading-relaxed">{d.val}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #d4a043' }}>
                <p className="text-white font-700 text-[15px] mb-3">Semax Dosing</p>
                <div className="space-y-2">
                  {[
                    { label: 'Standard Dose', val: '300–900mcg per administration' },
                    { label: 'Frequency', val: '1–2x daily. Morning + optional early afternoon. Avoid late evening (mildly stimulating at higher doses).' },
                    { label: 'Administration', val: '1–2 drops 0.1% solution per nostril intranasal, or 1 drop 1% solution for higher dose. Alternatively SubQ injection.' },
                    { label: 'Cycle', val: '2–4 week cycles. Intermittent use (5 days on, 2 days off) also common. Can be used situationally for demanding cognitive tasks.' },
                    { label: 'Onset', val: '20–45 minutes intranasal. Cognitive effects last 6–8 hours.' },
                  ].map((d, i) => (
                    <div key={i} className="flex gap-2">
                      <p className="text-[#d4a043] text-[11px] font-600 flex-shrink-0 mt-0.5 w-24">{d.label}:</p>
                      <p className="text-[#8888a0] text-[12px] leading-relaxed">{d.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Reconstitution for Intranasal Use (from Lyophilized Powder)</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed mb-3">Reconstitute lyophilized Selank or Semax in sterile 0.9% sodium chloride (normal saline). For Selank: 5mg vial + 3.3ml saline = 0.15% solution. For Semax: 5mg vial + 5ml saline = 0.1% solution. Store reconstituted solution refrigerated. Use within 28 days. Use a nasal drop bottle or insulin syringe for intranasal delivery — 1 drop per nostril = approximately 25–30mcg depending on drop size.</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Subcutaneous injection is also effective — use 0.1–0.5ml of reconstituted solution. Injectable administration provides slightly different pharmacokinetics: more systemic bioavailability, less direct olfactory nerve delivery. Some users prefer SubQ for systemic neuroprotective effects, intranasal for acute cognitive/anxiolytic effects.</p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 07 — SELANK VS SEMAX */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">07</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Selank vs. Semax: Which to Choose?</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Selank and Semax address different but complementary aspects of cognitive and psychological performance. Choosing between them — or combining them — depends on the primary goal:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-[#18181f]">
                    <th className="text-left text-[#50505e] text-[11px] py-2 pr-4">DIMENSION</th>
                    <th className="text-left py-2 pr-4" style={{ color: accent }}>SELANK</th>
                    <th className="text-left py-2" style={{ color: '#d4a043' }}>SEMAX</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-[#12121a]">
                      <td className="text-[#50505e] text-[11px] py-2.5 pr-4">{row.dimension}</td>
                      <td className="text-[#aaaabc] text-[12px] py-2.5 pr-4 leading-relaxed">{row.selank}</td>
                      <td className="text-[#aaaabc] text-[12px] py-2.5 leading-relaxed">{row.semax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Decision Framework</p>
              <div className="space-y-2">
                {[
                  { cond: 'Anxiety is the primary concern', rec: 'Start with Selank. It is purpose-designed for anxiolysis and has the most clinical data for anxiety applications.' },
                  { cond: 'Cognitive enhancement / productivity is the goal', rec: 'Start with Semax. Its BDNF/dopaminergic profile is superior for focus, memory, and sustained cognitive output.' },
                  { cond: 'Social performance and confidence', rec: 'Selank for anxiety reduction + social fluency; Semax for verbal and cognitive sharpness. The combination is optimal.' },
                  { cond: 'Neuroprotection and long-term brain health', rec: 'Semax for stronger BDNF/NGF effects. Selank\'s immunomodulation also contributes to neuroinflammation reduction.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <p className="text-[#d4a043] text-[12px] font-600 flex-shrink-0 mt-0.5">If:</p>
                    <div>
                      <p className="text-white text-[12px] font-600">{item.cond}</p>
                      <p className="text-[#8888a0] text-[12px] leading-relaxed">{item.rec}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 08 — COMBINED PROTOCOL */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">08</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Combined Selank + Semax Protocol</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Selank and Semax are highly complementary — their mechanisms do not overlap significantly, and the combination addresses anxiety, mood, and cognitive performance simultaneously. Many advanced users run them together, particularly for high-stakes performance contexts.</p>
            <div className="space-y-3">
              {[
                {
                  time: 'Morning (on waking)',
                  actions: [
                    'Semax 300–600mcg intranasal — cognitive activation for the day ahead',
                    'Selank 250–500mcg intranasal — anxiety buffering to complement Semax\'s mild stimulation',
                  ],
                  note: 'The combination on waking creates a state of alert calm — cognitive sharpness without the anxious edge that pure stimulants can produce.',
                },
                {
                  time: 'Afternoon (12–2pm)',
                  actions: [
                    'Selank 250mcg intranasal only — maintains anxiety buffering as cognitive demands peak',
                    'Optional: Semax 300mcg if demanding cognitive work extends into the afternoon',
                  ],
                  note: 'Avoid high-dose Semax after 2pm to prevent sleep disruption from mild stimulatory effects.',
                },
                {
                  time: 'Situational Use',
                  actions: [
                    'Social event / high-stakes presentation: Selank 500mcg 30 min before',
                    'Exam / intense study session: Semax 600mcg 30 min before + Selank 250mcg for anxiety management',
                  ],
                  note: 'Both compounds can be used situationally without a daily protocol, making them highly flexible nootropic tools.',
                },
              ].map((t, i) => (
                <div key={i} className="card rounded-xl p-5">
                  <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{t.time}</p>
                  <ul className="space-y-1.5 mb-3">
                    {t.actions.map((a, j) => (
                      <li key={j} className="text-[#aaaabc] text-[13px] leading-relaxed flex gap-2"><span style={{ color: accent }} className="flex-shrink-0">→</span>{a}</li>
                    ))}
                  </ul>
                  <p className="text-[#50505e] text-[12px] italic">{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 09 — LOOKSMAXXING ANGLE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">09</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Looksmaxxing Angle: Confidence & Social Presence</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Physical attractiveness is not purely a function of facial structure and body composition — it is substantially mediated by how physical features are expressed and presented through behavior, vocal tone, social ease, and presence. Research consistently shows that confidence, charisma, and social fluency dramatically amplify the perceived attractiveness of the same physical features.</p>
            <p>The looksmaxxing community has increasingly recognized this dimension — sometimes called &apos;behaviormaxxing&apos; or &apos;presencemaxxing&apos; — as an essential layer of the full optimization protocol. Selank and Semax address this dimension directly through their neurological mechanisms:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Selank: Social Confidence Layer',
                  color: accent,
                  points: [
                    'Reduces social anxiety that manifests as stiffness, avoidance, and inhibited social expression',
                    'Enables natural, fluid social interaction without pharmaceutical sedation',
                    'Improves eye contact comfort and reduces hypervigilance in social environments',
                    'The "calm confidence" state that physically attractive people project naturally — now accessible pharmacologically',
                    'No impairment of judgment, motor function, or verbal expression (unlike alcohol)',
                  ],
                },
                {
                  title: 'Semax: Cognitive Edge Layer',
                  color: '#d4a043',
                  points: [
                    'Improves verbal fluency and word retrieval for sharper, more confident communication',
                    'Enhances cognitive processing speed for quicker social reading and response',
                    'Reduces cognitive fatigue during social events that would otherwise diminish presence',
                    'Dopaminergic tone supports extraversion-adjacent behavior patterns and motivated social engagement',
                    'Working memory enhancement improves the ability to track complex social dynamics',
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-5" style={{ borderTop: `2px solid ${item.color}` }}>
                  <p className="text-white font-700 text-[14px] mb-3">{item.title}</p>
                  <ul className="space-y-1.5">
                    {item.points.map((p, j) => (
                      <li key={j} className="text-[#8888a0] text-[12px] leading-relaxed flex gap-2"><span style={{ color: item.color }} className="flex-shrink-0">•</span>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">The Complete Looksmaxxing Stack Addition</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">For advanced looksmaxxers with physical protocols already established, adding Selank pre-social event and Semax for cognitive performance creates the behavioral layer that makes physical improvements fully visible. The investment in GHK-Cu, CJC-1295/Ipamorelin, and body recomposition compounds pays full dividends when combined with the confident, present, and cognitively sharp social expression that Selank and Semax enable.</p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 10 — VS PHARMACEUTICALS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">10</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Comparison to Pharmaceuticals</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Understanding how Selank and Semax compare to conventional pharmaceutical approaches clarifies their unique value proposition — and helps contextualize when they are and are not appropriate tools.</p>
            <div className="space-y-3">
              {[
                {
                  comparison: 'Selank vs. Benzodiazepines (Xanax, Valium)',
                  peptide: 'Anxiolytic without sedation, cognitive impairment, motor effects, tolerance, dependence, or withdrawal. Does not amplify alcohol. Non-scheduled.',
                  pharma: 'High anxiolytic potency but significant sedation, cognitive impairment, tolerance (weeks), dependence risk, severe withdrawal syndrome, abuse potential, scheduled substance.',
                  verdict: 'Selank is clearly superior for mild-moderate anxiety, social anxiety, and performance situations. Benzodiazepines remain superior for acute panic or pre-surgical anxiety where rapid, powerful sedation is appropriate.',
                },
                {
                  comparison: 'Semax vs. Stimulants (Adderall, Modafinil)',
                  peptide: 'Cognitive enhancement via BDNF/neurotrophin upregulation and dopaminergic modulation. Mildly stimulating. No cardiovascular effects, no appetite suppression, no crash, no dependence.',
                  pharma: 'Amphetamines produce stronger acute focus but with significant cardiovascular effects, appetite suppression, sleep disruption, tolerance, and dependence risk. Modafinil provides wakefulness with fewer side effects but lacks the BDNF/neuroprotective dimension.',
                  verdict: 'Semax is preferable for sustained cognitive optimization without side effect burden. Stimulants outperform for acute, high-intensity focus requirements where their side effect profile is acceptable.',
                },
                {
                  comparison: 'Selank vs. SSRIs for Anxiety',
                  peptide: 'Immediate onset (minutes). No sexual side effects. No weight gain. No initial anxiety increase. No 4–6 week onset delay. No discontinuation syndrome.',
                  pharma: 'SSRIs require 4–6 weeks to demonstrate efficacy, carry sexual side effects in a majority of patients, cause weight changes, and require gradual tapering to discontinue.',
                  verdict: 'For research-grade biohacking and non-clinical anxiety optimization, Selank\'s profile is substantially better. SSRIs remain appropriate for clinical depression and severe anxiety disorders under medical supervision.',
                },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-5">
                  <p className="text-white font-700 text-[14px] mb-3">{item.comparison}</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-[#50505e] text-[10px] mb-1">PEPTIDE ADVANTAGE</p>
                      <p className="text-[#aaaabc] text-[12px] leading-relaxed">{item.peptide}</p>
                    </div>
                    <div>
                      <p className="text-[#50505e] text-[10px] mb-1">PHARMACEUTICAL PROFILE</p>
                      <p className="text-[#8888a0] text-[12px] leading-relaxed">{item.pharma}</p>
                    </div>
                  </div>
                  <p className="text-[#50505e] text-[11px] mb-0.5">VERDICT</p>
                  <p className="text-[#aaaabc] text-[12px] leading-relaxed">{item.verdict}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 11 — BUY */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get Selank & Semax</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Selank & Semax</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Russian nootropic peptides for anxiety, cognitive enhancement, and social performance. Research-grade with third-party testing.</p>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored" className="btn-primary w-full justify-center py-3 text-[13px] flex">Shop Nootropic Peptides →</a>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">NAD+ (Cognitive Stack)</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">NAD+ combined with Semax creates a powerful mitochondrial + neurotrophin cognitive optimization stack for maximum mental performance.</p>
              <a href="/go/nad-500mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary w-full justify-center py-3 text-[13px] flex">Get NAD+ →</a>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 12 — FAQ */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">12</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Frequently Asked Questions</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              {
                q: 'Can Selank and Semax be used together?',
                a: 'Yes — Selank and Semax have complementary, non-overlapping mechanisms and are frequently used in combination. The most common combined protocol is Selank 250–500mcg + Semax 300–600mcg intranasally in the morning. The combination provides anxiolytic coverage from Selank alongside the cognitive enhancement of Semax, creating a state of calm, focused mental performance.',
              },
              {
                q: 'Do Selank and Semax cause tolerance?',
                a: 'No significant tolerance development has been documented for either compound in published research or in extensive community use. Unlike benzodiazepines (which develop tolerance in 2–4 weeks) or stimulants (rapid tolerance to mood effects), Selank and Semax appear to maintain their efficacy with repeated use. Some users report diminished effects with very high-frequency long-term use, resolved with brief breaks.',
              },
              {
                q: 'Are Selank and Semax safe?',
                a: 'Both have well-characterized safety profiles from decades of Russian clinical research. No serious adverse events have been documented in clinical trials. The most commonly reported effects are mild and transient: slight nasal irritation from intranasal administration, and occasional mild headache. Neither compound affects testosterone, LH, FSH, cortisol (at standard doses), or other hormonal axes.',
              },
              {
                q: 'Can Selank/Semax interact with psychiatric medications?',
                a: 'This is an important consideration. Selank modulates GABAergic activity — caution is advised when combining with benzodiazepines or other GABAergic drugs. Semax increases dopaminergic activity — caution with dopaminergic medications. Always consult your prescribing physician before using any nootropic peptides alongside psychiatric medication. Do not abruptly discontinue prescribed medications in favor of research peptides.',
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

        {/* 13 — RELATED */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/peptides-cognitive-performance-guide', label: 'Peptides for Cognitive Performance', desc: 'Complete guide to all cognitive-enhancing peptides — Selank, Semax, and beyond' },
              { href: '/epithalon-anti-aging-telomere-peptide-guide', label: 'Epithalon Anti-Aging Guide', desc: 'The telomere peptide with anti-aging and circadian rhythm regulation effects' },
              { href: '/looksmaxxing-research-peptides-beginners', label: 'Looksmaxxing Peptides for Beginners', desc: 'Complete beginner\'s introduction to peptides for appearance and performance optimization' },
              { href: '/nad-plus-anti-aging-guide', label: 'NAD+ Anti-Aging Guide', desc: 'Combine with Semax for a comprehensive mitochondrial + neurotrophin cognitive stack' },
              { href: '/blog', label: 'All Peptide Guides', desc: 'Browse every research article and protocol on PeptidesMuscle' },
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
