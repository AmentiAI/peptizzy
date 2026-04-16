import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hexarelin Guide: The Most Potent GHRP — Dosage, Cardioprotection & Protocols | PeptidesMuscle',
  description: 'Complete Hexarelin guide. Why it is the most potent GHRP, its unique cardioprotective effects via CD36 receptor, desensitization management, cortisol/prolactin considerations, and full dosing protocols.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/hexarelin-growth-hormone-peptide-guide' },
  keywords: 'hexarelin growth hormone peptide guide, hexarelin dosage, hexarelin cardioprotective, GHRP comparison, hexarelin vs ipamorelin, hexarelin protocol',
  openGraph: {
    title: 'Hexarelin: The Most Potent GHRP — Complete Protocol Guide | PeptidesMuscle',
    description: 'Hexarelin mechanism, GH release potency vs other GHRPs, cardioprotective effects, desensitization protocol, and full dosing guide.',
    url: 'https://www.peptidesmuscle.com/hexarelin-growth-hormone-peptide-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hexarelin: Most Potent GHRP Guide | PeptidesMuscle',
    description: 'Complete Hexarelin guide — the strongest GHRP, its unique cardioprotective mechanism, and dosing protocols.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Hexarelin Guide: The Most Potent GHRP — Dosage, Cardioprotection & Protocols',
      datePublished: '2026-04-03',
      dateModified: '2026-04-03',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Hexarelin and how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hexarelin is a synthetic hexapeptide (6 amino acids) that functions as a potent agonist of the GHS-R1a receptor (growth hormone secretagogue receptor), stimulating pulsatile GH release from the pituitary. It is the most potent GHRP in terms of raw GH secretion capacity. Uniquely among GHRPs, Hexarelin also binds to the CD36 scavenger receptor, producing cardioprotective effects independent of its GH-releasing activity. It also stimulates ACTH/cortisol release to a greater degree than other GHRPs, which is an important consideration for protocol design.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Hexarelin compare to other GHRPs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In terms of GH secretion potency: Hexarelin > GHRP-6 > GHRP-2 > Ipamorelin. Hexarelin produces the highest acute GH pulse of any GHRP at equivalent doses. However, it also produces the highest cortisol and prolactin elevation, and is most susceptible to receptor desensitization with continuous use. Ipamorelin has the cleanest side effect profile (minimal cortisol/prolactin), while Hexarelin has the highest peak GH output. GHRP-6 sits in between with significant appetite stimulation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are Hexarelin\'s cardioprotective effects?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hexarelin\'s cardioprotective effects are mediated through the CD36 receptor — a scavenger receptor expressed on cardiomyocytes. Hexarelin binding to CD36 activates intracellular signaling cascades that reduce cardiomyocyte apoptosis (cell death), improve cardiac contractility, reduce ischemia-reperfusion injury, and modulate cardiac fibrosis. These effects are completely independent of GH secretion and have been demonstrated in GH-deficient animal models, confirming the direct cardiac action.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Hexarelin cause receptor desensitization?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Hexarelin is the GHRP most prone to GHS-R1a receptor desensitization due to its high receptor binding affinity and efficacy. Continuous daily use beyond 4–6 weeks typically results in measurable attenuation of GH response. This is managed through cycling: 4–6 weeks on, followed by a 2–4 week break, or alternating Hexarelin with lower-efficacy GHRPs like Ipamorelin. Alternatively, Hexarelin can be used in a targeted short-cycle strategy rather than long-term continuous administration.',
          },
        },
        {
          '@type': 'Question',
          name: 'What dose of Hexarelin should I use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The research-validated Hexarelin dose range is 100–200mcg per injection. Most protocols use 100mcg 2–3 times daily for GH optimization, or 200mcg once daily for cardioprotective purposes. For GH maximization, 2x daily (morning and pre-bed) combined with CJC-1295 is the standard approach. Doses above 200mcg show significantly diminishing returns due to GH response saturation — higher doses do not proportionally increase GH output.',
          },
        },
      ],
    },
  ],
}

const accent = '#6090ff'

const ghComparison = [
  {
    name: 'Hexarelin',
    potency: 'Highest',
    gh: '★★★★★',
    cortisol: '★★★★',
    prolactin: '★★★',
    appetite: '★★',
    desensitization: 'High',
    unique: 'CD36 cardioprotection',
    color: accent,
  },
  {
    name: 'GHRP-6',
    potency: 'High',
    gh: '★★★★',
    cortisol: '★★★',
    prolactin: '★★',
    appetite: '★★★★★',
    desensitization: 'Moderate',
    unique: 'Strongest appetite stimulation — useful for extreme bulking',
    color: '#d4a043',
  },
  {
    name: 'GHRP-2',
    potency: 'Moderate-High',
    gh: '★★★★',
    cortisol: '★★★',
    prolactin: '★★★',
    appetite: '★★★',
    desensitization: 'Moderate',
    unique: 'Balanced option between Hexarelin and Ipamorelin potency',
    color: '#a78bfa',
  },
  {
    name: 'Ipamorelin',
    potency: 'Moderate',
    gh: '★★★',
    cortisol: '★',
    prolactin: '★',
    appetite: '★',
    desensitization: 'Low',
    unique: 'Cleanest side effect profile of all GHRPs — preferred for long-term use',
    color: '#40c090',
  },
]

const mechanisms = [
  {
    title: 'GHS-R1a Agonism',
    body: 'Hexarelin binds GHS-R1a with the highest affinity of any known GHRP. This receptor is expressed in the pituitary, hypothalamus, hippocampus, and heart. In the pituitary and hypothalamus, GHS-R1a activation drives GH release by increasing GH pulse amplitude and inhibiting somatostatin release. Hexarelin\'s high receptor affinity translates directly to the highest acute GH pulse output of any GHRP — an advantage for short-cycle GH maximization strategies.',
  },
  {
    title: 'CD36 Receptor Activation (Cardioprotection)',
    body: 'The CD36 scavenger receptor is expressed on cardiomyocytes (heart muscle cells), macrophages, and endothelial cells. Hexarelin is the only GHRP known to bind CD36 with meaningful affinity. This binding activates Src kinase and downstream ERK1/2 signaling that protects cardiomyocytes from apoptosis, reduces infarct size following ischemia, improves left ventricular function, and has anti-fibrotic effects in the heart. Studies in GH-deficient rats demonstrate that Hexarelin improves cardiac function through CD36 independent of any GH elevation — a uniquely direct cardiac action.',
  },
  {
    title: 'ACTH/Cortisol Stimulation',
    body: 'A significant distinction between Hexarelin and cleaner GHRPs like Ipamorelin is Hexarelin\'s stimulation of ACTH (adrenocorticotropic hormone) release, which secondarily elevates cortisol. In the short term, this is not problematic and may even be beneficial for training adaptation. In long-term continuous use, chronically elevated cortisol is catabolic to muscle tissue and suppresses immunity — the primary reason Hexarelin is cycled rather than used continuously year-round.',
  },
  {
    title: 'Prolactin Elevation',
    body: 'Hexarelin modestly elevates prolactin levels, particularly at higher doses. Elevated prolactin in males can suppress testosterone via dopaminergic pathway interference. This effect is dose-dependent and generally manageable within the standard dosing range, but is worth monitoring in long cycles — particularly in males stacking multiple GH secretagogues.',
  },
]

const protocols = [
  {
    goal: 'GH Maximization (Short Cycle)',
    duration: '4–6 weeks ON / 2–4 weeks OFF',
    dosing: 'Hexarelin 100–200mcg + CJC-1295 (No-DAA) 100–200mcg, SubQ, 2x daily (morning fasted + pre-bed)',
    notes: 'The peak GH output protocol. Use Hexarelin for its maximum potency advantage during the ON cycle. Switch to Ipamorelin during OFF weeks to prevent full receptor desensitization while maintaining GH activity.',
    color: accent,
  },
  {
    goal: 'Cardioprotection',
    duration: '8–12 weeks, 1–2x/year',
    dosing: 'Hexarelin 100–200mcg, SubQ, once daily. Does not require GHRH co-administration for cardioprotective effects.',
    notes: 'The CD36-mediated cardiac protection appears maximal at 100–200mcg once daily. Twice daily dosing adds GH benefits but is not required for the cardiac mechanism. Particularly relevant for individuals with cardiovascular risk factors.',
    color: '#d4a043',
  },
  {
    goal: 'Alternating GHRP Protocol',
    duration: 'Continuous (12+ weeks)',
    dosing: 'Alternate 2 weeks Hexarelin 100mcg 2x/day with 2 weeks Ipamorelin 200mcg 2x/day. Maintain CJC-1295 (DAA) 2mg/week throughout.',
    notes: 'Avoids Hexarelin receptor desensitization by cycling between high-potency (Hexarelin) and low-desensitization (Ipamorelin) GHRPs. The GHRH base layer (CJC-1295 DAA) provides continuous GH signaling throughout.',
    color: '#a78bfa',
  },
]

export default function HexarelinGrowthHormonePeptideGuide() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#6090ff] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">GHRP Peptide</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            Hexarelin:<br />
            <span className="italic" style={{ color: accent }}>The Most Potent GHRP</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            The strongest growth hormone-releasing peptide available — mechanism, cardioprotective effects via CD36, desensitization management, and complete dosing protocols.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — WHAT IS HEXARELIN */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What Is Hexarelin?</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Hexarelin (also known as Examorelin) is a synthetic hexapeptide — a chain of six amino acids — developed by researchers seeking the most potent possible agonist of the GHS-R1a (Growth Hormone Secretagogue Receptor 1a). It belongs to the GHRP (Growth Hormone-Releasing Peptide) class alongside Ipamorelin, GHRP-2, and GHRP-6, but distinguishes itself through significantly higher receptor affinity, peak GH output, and a unique secondary mechanism involving the CD36 scavenger receptor.</p>
            <p>Originally developed in Italy by Europeptides in the 1980s as part of GH secretagogue research, Hexarelin reached Phase II clinical trials before the program was discontinued — not due to safety concerns, but due to the commercial decision to pivot toward non-peptide GH secretagogues (which eventually led to MK-677). Its clinical data established its potency profile and cardioprotective properties, making it the most clinically documented GHRP after the more widely trialed GHRP-2.</p>
            <p>What makes Hexarelin unique in the GHRP class is not merely that it produces higher GH output — it is that it operates through two distinct receptor systems simultaneously. Its GHS-R1a action drives GH secretion; its CD36 action protects the heart directly, through mechanisms entirely independent of GH. No other GHRP currently known shares this dual receptor profile.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 02 — MECHANISM */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Mechanism of Action</h2>
          </div>
          <div className="pl-10">
            <div className="grid sm:grid-cols-2 gap-4">
              {mechanisms.map((m, i) => (
                <div key={i} className="card rounded-xl p-5">
                  <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{m.title}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 03 — GH POTENCY */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>GH Release: How Hexarelin Compares</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>The GHRP class encompasses several compounds with significantly different potency, side effect, and desensitization profiles. Understanding where Hexarelin sits in this landscape is essential for making an informed protocol choice. The following comparison covers the four primary GHRPs in current use:</p>
            <div className="space-y-4">
              {ghComparison.map((g, i) => (
                <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `3px solid ${g.color}` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-white font-700 text-[15px]">{g.name}</p>
                    <span className="tag text-[11px]">{g.potency}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-3">
                    <div>
                      <p className="text-[#50505e] text-[10px] mb-1">GH RELEASE</p>
                      <p className="text-[11px]" style={{ color: g.color }}>{g.gh}</p>
                    </div>
                    <div>
                      <p className="text-[#50505e] text-[10px] mb-1">CORTISOL</p>
                      <p className="text-[#aaaabc] text-[11px]">{g.cortisol}</p>
                    </div>
                    <div>
                      <p className="text-[#50505e] text-[10px] mb-1">PROLACTIN</p>
                      <p className="text-[#aaaabc] text-[11px]">{g.prolactin}</p>
                    </div>
                    <div>
                      <p className="text-[#50505e] text-[10px] mb-1">APPETITE</p>
                      <p className="text-[#aaaabc] text-[11px]">{g.appetite}</p>
                    </div>
                    <div>
                      <p className="text-[#50505e] text-[10px] mb-1">DESENSITIZATION</p>
                      <p className="text-[#aaaabc] text-[11px]">{g.desensitization}</p>
                    </div>
                  </div>
                  <p className="text-[#50505e] text-[11px] mb-0.5">UNIQUE PROPERTY</p>
                  <p className="text-[#8888a0] text-[12px]">{g.unique}</p>
                </div>
              ))}
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">When to Choose Hexarelin Over Other GHRPs</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Choose Hexarelin when: (1) maximum acute GH pulse is the primary goal — short cycles for peak GH output, (2) cardiovascular protection is a specific objective alongside GH optimization, (3) experienced users who have established baseline GHRP tolerance and are strategically escalating potency. Choose Ipamorelin for long-term maintenance protocols, females, or those sensitive to cortisol/prolactin elevation.</p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 04 — CARDIOPROTECTION */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Cardioprotective Effects</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>The cardioprotective effects of Hexarelin represent one of the most scientifically fascinating properties of any research peptide currently available — and they are entirely separable from its GH-releasing activity. This distinction was first demonstrated by Deghenghi et al. and subsequently confirmed in multiple animal models, where Hexarelin improved cardiac function in GH-deficient subjects who could not respond to GH elevation.</p>
            <p>The mechanism operates through CD36, a multifunctional scavenger receptor involved in fatty acid transport, lipid metabolism, and cellular signaling in the heart. When Hexarelin binds CD36 on cardiomyocytes, it activates intracellular pathways including Src tyrosine kinase and ERK1/2 MAPK signaling. The downstream effects are: reduced apoptosis of heart muscle cells, improved calcium handling and contractile function, reduced infarct size following ischemic events, and modulation of cardiac remodeling and fibrosis.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {[
                { title: 'Ischemia Protection', body: 'Hexarelin pretreatment significantly reduces myocardial infarct size in animal ischemia-reperfusion models. The cardioprotective effect requires Hexarelin administration before or during the ischemic event — it is a protective rather than restorative mechanism.' },
                { title: 'Contractile Function', body: 'Hexarelin improves left ventricular function and cardiac output in GH-deficient animal models — effects that cannot be attributed to GH elevation, confirming direct CD36-mediated cardiac action.' },
                { title: 'Anti-Fibrotic Effects', body: 'Cardiac fibrosis — the replacement of functional heart muscle with stiff collagen scar tissue — is reduced by Hexarelin administration. This has implications for heart failure progression and hypertensive heart disease.' },
                { title: 'Clinical Relevance', body: 'While human cardioprotection data remains primarily extrapolated from animal studies, the mechanistic pathway is well-characterized. Athletes, individuals with cardiovascular risk factors, and anti-aging oriented users represent the primary population for whom this effect is most relevant.' },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <p className="font-600 text-[13px] mb-2" style={{ color: accent }}>{item.title}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 05 — DESENSITIZATION */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Desensitization: Why Cycles Matter</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Hexarelin&apos;s high GHS-R1a affinity — the same property that makes it the most potent GHRP — also makes it the most prone to receptor desensitization. Continuous daily administration beyond 4–6 weeks typically results in measurable attenuation of GH response, as GHS-R1a receptors downregulate or become less responsive to persistent stimulation.</p>
            <p>This desensitization is not permanent. A 2–4 week break from GHS-R1a agonism (or switching to a lower-efficacy GHRP like Ipamorelin) allows receptor expression and sensitivity to recover. The key insight is that desensitization is receptor-level, not organism-level: using Ipamorelin during Hexarelin off-weeks maintains some GH activity while permitting GHS-R1a recovery, because Ipamorelin&apos;s lower intrinsic efficacy produces less receptor downregulation.</p>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-3">Desensitization Management Strategies</p>
              <div className="space-y-3">
                {[
                  { strategy: 'Strict 4-6-2 Cycling', detail: '4–6 weeks Hexarelin, 2–4 weeks complete GHRP break (maintain GHRH if desired). Full receptor recovery during the break. Maximum potency rebound at the start of each Hexarelin cycle.' },
                  { strategy: 'Hexarelin/Ipamorelin Alternation', detail: '2 weeks Hexarelin, 2 weeks Ipamorelin, repeat. Maintains continuous GH activity while alternating between high and low desensitization burden GHRPs. Good for long-term GH optimization without complete breaks.' },
                  { strategy: 'Dose Reduction Protocol', detail: 'Start at 100mcg 2x/day for weeks 1–3, reduce to 100mcg once daily for weeks 4–6 as GH response begins to attenuate. This extends the effective window of each cycle before full desensitization.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <p className="text-[#d4a043] text-[12px] font-600 flex-shrink-0 mt-0.5">→</p>
                    <div>
                      <p className="text-white text-[13px] font-600 mb-0.5">{item.strategy}</p>
                      <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — CORTISOL/PROLACTIN */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Managing Cortisol & Prolactin</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Hexarelin&apos;s stimulation of ACTH/cortisol and prolactin release — unlike Ipamorelin which is virtually devoid of these effects — requires consideration in protocol design. Understanding the magnitude and context of these elevations is important to avoid overcorrecting an effect that is modest at standard doses.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Cortisol Elevation: What to Know',
                  points: [
                    'Hexarelin at 100mcg produces approximately 2–3x the cortisol elevation of Ipamorelin at equivalent dose',
                    'The elevation is transient — peaking 30–60 minutes post-injection and returning to baseline within 2–4 hours',
                    'Acute cortisol elevation post-workout may actually benefit muscle glycogen replenishment and anti-inflammatory recovery',
                    'Chronic, sustained cortisol elevation (not the pattern from twice-daily Hexarelin) is the catabolic concern',
                    'Manage with: shorter cycles (4–6 weeks), taking doses at times when cortisol interaction with training is favorable',
                  ],
                },
                {
                  title: 'Prolactin Elevation: What to Know',
                  points: [
                    'Hexarelin produces modest prolactin elevation — generally 1.5–2x baseline, dose-dependent',
                    'Clinically significant hyperprolactinemia (causing testosterone suppression in men) requires sustained, substantially elevated levels',
                    'At 100–200mcg 2x daily, prolactin elevation is unlikely to reach clinically relevant suppressive levels in most men',
                    'Monitor prolactin with blood work at 4–6 weeks if running Hexarelin continuously',
                    'Management: Vitamin B6 (P5P form, 100mg/day) modestly reduces prolactin. Cycling limits cumulative prolactin exposure.',
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-5">
                  <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{item.title}</p>
                  <ul className="space-y-1.5">
                    {item.points.map((p, j) => (
                      <li key={j} className="text-[#8888a0] text-[12px] leading-relaxed flex gap-2"><span className="text-[#50505e] flex-shrink-0">•</span>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 07 — DOSING PROTOCOLS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">07</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dosing Protocols</h2>
          </div>
          <div className="pl-10 space-y-4">
            {protocols.map((p, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${p.color}` }}>
                <p className="text-white font-700 text-[15px] mb-1">{p.goal}</p>
                <p className="mono text-[12px] mb-2" style={{ color: p.color }}>{p.duration}</p>
                <p className="text-[#50505e] text-[11px] mb-1">DOSING</p>
                <p className="text-[#aaaabc] text-[13px] leading-relaxed mb-3">{p.dosing}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{p.notes}</p>
              </div>
            ))}
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-3">Reconstitution & Injection</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: 'Reconstitution', val: '1–2ml bacteriostatic water per 5mg vial. Use insulin syringe (29–31g) for SubQ injection.' },
                  { label: 'Injection Site', val: 'Subcutaneous abdominal injection. Rotate sites. Inject 1–2 inches away from navel.' },
                  { label: 'Fasting Requirement', val: 'GHRPs are most effective when insulin levels are low. Inject at minimum 30 minutes from last food intake for optimal GH pulse amplitude.' },
                  { label: 'Storage', val: 'Lyophilized powder refrigerated. Reconstituted solution refrigerated, use within 28 days.' },
                ].map((item, i) => (
                  <div key={i} className="card rounded-xl p-3">
                    <p className="text-white text-[12px] font-600 mb-0.5">{item.label}</p>
                    <p className="text-[#8888a0] text-[12px] leading-relaxed">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 08 — STACKING WITH CJC-1295 */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">08</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Stacking with CJC-1295</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Like all GHRPs, Hexarelin reaches its full GH-releasing potential when combined with a GHRH analogue. Hexarelin alone stimulates the pituitary to release stored GH via GHS-R1a. CJC-1295 simultaneously signals the pituitary through the GHRH receptor, increasing GH pulse amplitude synergistically — the combination typically produces 3–5x the GH output of either compound alone at equivalent doses.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[14px] mb-2">Hexarelin</p>
                <p className="text-[#50505e] text-[11px] mb-1">MECHANISM</p>
                <p className="text-[#8888a0] text-[13px] mb-3">GHS-R1a agonist: stimulates pituitary GH release via ghrelin receptor pathway. Inhibits somatostatin.</p>
                <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                <p className="text-[#aaaabc] text-[13px]">100–200mcg per injection, 2x daily</p>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #d4a043' }}>
                <p className="text-white font-700 text-[14px] mb-2">CJC-1295 (No-DAA)</p>
                <p className="text-[#50505e] text-[11px] mb-1">MECHANISM</p>
                <p className="text-[#8888a0] text-[13px] mb-3">GHRH receptor agonist: drives GH synthesis and increases somatotroph cell responsiveness to GHS-R1a signals.</p>
                <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                <p className="text-[#aaaabc] text-[13px]">100–200mcg per injection, administered simultaneously with Hexarelin</p>
              </div>
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Combined Protocol: Maximum GH Output Cycle</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Morning (fasted): Hexarelin 100mcg + CJC-1295 (No-DAA) 100mcg, SubQ injection simultaneously. Wait 30–45 minutes before eating. Pre-sleep: Hexarelin 100mcg + CJC-1295 (No-DAA) 100mcg. Inject 2+ hours after last meal. The combined morning and pre-sleep protocol delivers two high-amplitude GH pulses timed to natural GH secretion windows, maximizing the anabolic and regenerative impact of the Hexarelin cycle.</p>
            </div>
            <a href="/go/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary inline-flex px-5 py-2.5 text-[13px]">Get CJC-1295 / Ipamorelin →</a>
          </div>
        </div>

        <div className="rule" />

        {/* 09 — WHO SHOULD USE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">09</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Who Should Use Hexarelin?</h2>
          </div>
          <div className="pl-10 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Ideal Hexarelin Users',
                  color: '#40c090',
                  items: [
                    'Experienced GHRP users seeking maximum GH output in short strategic cycles',
                    'Athletes seeking peak GH elevation during specific performance or body recomposition phases',
                    'Those with cardiovascular optimization goals alongside GH benefits',
                    'Advanced biohackers rotating multiple GH secretagogues for sustained optimization',
                    'Users who have plateaued on Ipamorelin and are escalating potency deliberately',
                  ],
                },
                {
                  title: 'Consider Ipamorelin Instead If:',
                  color: '#ff9040',
                  items: [
                    'You are new to GH peptides — Ipamorelin is the appropriate starting GHRP',
                    'You have elevated baseline cortisol or stress-related health concerns',
                    'You are running a long-term (3+ month) continuous GH optimization protocol',
                    'You are female — lower desensitization burden is generally preferred',
                    'You are stacking multiple androgenic or hormonal compounds where cortisol management is critical',
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-5" style={{ borderTop: `2px solid ${item.color}` }}>
                  <p className="text-white font-700 text-[14px] mb-3">{item.title}</p>
                  <ul className="space-y-2">
                    {item.items.map((point, j) => (
                      <li key={j} className="text-[#8888a0] text-[12px] leading-relaxed flex gap-2"><span style={{ color: item.color }} className="flex-shrink-0">•</span>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 10 — BUY */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get Hexarelin & Stack</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Hexarelin</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">The most potent GHRP. Research-grade lyophilized powder with Certificate of Analysis.</p>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored" className="btn-primary w-full justify-center py-3 text-[13px] flex">Shop Hexarelin →</a>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">CJC-1295 / Ipamorelin</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">The GHRH backbone for Hexarelin stacking, and Ipamorelin for off-cycle rotation management.</p>
              <a href="/go/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary w-full justify-center py-3 text-[13px] flex">Buy CJC-1295 / Ipamorelin →</a>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 11 — FAQ */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">11</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Frequently Asked Questions</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              {
                q: 'Is Hexarelin better than GHRP-6?',
                a: 'Hexarelin produces higher peak GH output than GHRP-6 and does not cause the extreme appetite stimulation associated with GHRP-6. Hexarelin\'s unique CD36-mediated cardioprotection is an additional advantage GHRP-6 lacks. GHRP-6 may be preferred specifically when aggressive appetite stimulation is desired for extreme bulking purposes. For GH maximization and cardioprotection combined, Hexarelin is the superior choice.',
              },
              {
                q: 'Can Hexarelin be used for looksmaxxing?',
                a: 'Yes — Hexarelin produces the same IGF-1 elevation downstream of its GH-releasing activity as other GHRPs, contributing to all the GH-mediated looksmaxxing effects: skin collagen synthesis, hair follicle stimulation, body recomposition. Its higher potency means these effects may appear more rapidly or at lower doses compared to Ipamorelin. However, the higher cortisol and desensitization burden makes cycling more important. For long-term looksmaxxing use, Ipamorelin or MK-677 may be more practical as the primary GHRP.',
              },
              {
                q: 'Does Hexarelin require PCT (Post-Cycle Therapy)?',
                a: 'No. Hexarelin does not suppress the HPG (hypothalamic-pituitary-gonadal) axis. It does not affect LH, FSH, or testosterone production. No PCT is required when discontinuing Hexarelin. The GH axis returns to natural function rapidly after cessation — natural GH production is not suppressed, just amplified during use.',
              },
              {
                q: 'Can Hexarelin be used by women?',
                a: 'Yes, with appropriate dose adjustments. Women typically respond to lower doses of GHRPs than men. Starting at 50–100mcg once daily and assessing cortisol and prolactin tolerance before escalating is recommended. Women may find Ipamorelin more suitable for long-term use due to its cleaner hormonal side effect profile, with Hexarelin reserved for specific short cycles.',
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

        {/* 12 — RELATED */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin Guide', desc: 'The complete guide to the most popular injectable GH peptide stack — ideal Hexarelin companion' },
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'How to intelligently combine GHRPs, GHRH analogues, and other peptide classes' },
              { href: '/looksmaxxing-research-peptides-beginners', label: 'Looksmaxxing Peptides for Beginners', desc: 'Start here if you are new to peptides before advancing to Hexarelin protocols' },
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
