import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Tirzepatide Complete Guide: Dual GIP+GLP-1 Mechanism, Dosing & SURMOUNT Results | PeptidesMuscle',
  description: 'The definitive tirzepatide guide. How dual GIP+GLP-1 agonism works, the complete titration protocol from 2.5mg to 15mg, SURMOUNT-1 trial results showing 20.9% average weight loss, and side effect management strategies.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/tirzepatide-complete-guide' },
  keywords: 'tirzepatide guide, tirzepatide dosage, tirzepatide results, tirzepatide titration, Mounjaro guide, Zepbound guide, dual GIP GLP-1 agonist, tirzepatide vs semaglutide, SURMOUNT trial, tirzepatide weight loss',
  openGraph: {
    title: 'Tirzepatide Complete Guide: Dual GIP+GLP-1 Weight Loss Protocol | PeptidesMuscle',
    description: 'How dual GIP+GLP-1 agonism outperforms semaglutide, the complete 2.5–15mg titration protocol, SURMOUNT trial results, and body composition strategies.',
    url: 'https://www.peptidesmuscle.com/tirzepatide-complete-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tirzepatide Complete Guide | PeptidesMuscle',
    description: 'Complete 2.5–15mg titration protocol, SURMOUNT trial results, side effect management, and body composition strategies for dual GIP+GLP-1 therapy.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'Tirzepatide Complete Guide: Dual GIP+GLP-1 Mechanism, Dosing & SURMOUNT Results',
      datePublished: '2026-03-29',
      dateModified: '2026-03-29',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com', logo: { '@type': 'ImageObject', url: 'https://www.peptidesmuscle.com/max-avatar.png' } },
      author: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent', name: 'LooksMax Agent', url: 'https://www.peptidesmuscle.com/about/editors' },
      reviewedBy: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is tirzepatide and how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tirzepatide is a dual GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptor agonist. Sold as Mounjaro for type 2 diabetes and Zepbound for obesity, it simultaneously activates two incretin hormone receptors. The GIP component enhances insulin secretion, promotes both fat storage and fat breakdown depending on metabolic context, and critically increases the sensitivity of GLP-1 receptors — amplifying the appetite-suppressing effects of GLP-1 stimulation. The result is dramatically greater weight loss than GLP-1 agonism alone.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much weight can I lose on tirzepatide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The SURMOUNT-1 trial with 2,539 participants over 72 weeks demonstrated an average of 20.9% body weight reduction at the 15mg maximum dose. Up to 25.2% weight loss was observed in some cohorts. At 10mg, the average was 19.5%, and at 5mg, 15.0%. These figures substantially exceed those achieved with semaglutide (14.9% at maximum dose) in comparable trials. Individual results depend on diet adherence, activity levels, and metabolic response.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the tirzepatide titration schedule?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tirzepatide titration starts at 2.5mg per week for the first 4 weeks (an induction dose not used for weight loss but for GI tolerance). Every 4 weeks, the dose increases by 2.5mg: to 5mg, then 7.5mg, then 10mg, then 12.5mg, and finally 15mg as the maximum therapeutic dose. Many users find 10–12.5mg their optimal maintenance dose and do not need to reach 15mg. Hold at any dose level for an additional 4 weeks if side effects are significant.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does tirzepatide compare to semaglutide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tirzepatide consistently outperforms semaglutide across every efficacy metric. The SURMOUNT-1 trial showed 20.9% average weight loss vs. semaglutide\'s 14.9% in the STEP trials — a 40% improvement in absolute weight loss. Tirzepatide also shows superior fasting glucose reduction, better HbA1c lowering, and improved lipid profiles. Head-to-head data (SURPASS-2 trial comparing tirzepatide vs. semaglutide in T2D patients) confirmed tirzepatide\'s superiority at all matched doses. The primary advantage comes from the additive GIP agonism enhancing GLP-1 receptor sensitivity.',
          },
        },
      ],
    },
  ],
}

const accent = '#e05080'

const mechanisms = [
  {
    title: 'GIP Receptor Agonism',
    body: 'GIP (glucose-dependent insulinotropic polypeptide) is an incretin hormone released from the small intestine in response to eating. By agonizing the GIPR, tirzepatide enhances insulin secretion in a glucose-dependent manner — insulin is released when glucose is present, preventing hypoglycemia at rest. Critically, GIP also amplifies GLP-1 receptor sensitivity in the hypothalamus and elsewhere, creating a synergistic signaling environment that pure GLP-1 agonists like semaglutide cannot replicate.',
  },
  {
    title: 'GLP-1 Receptor Agonism',
    body: 'GLP-1 (glucagon-like peptide-1) receptor agonism suppresses appetite through hypothalamic signaling, slows gastric emptying to extend the sensation of fullness, reduces glucagon secretion from the pancreas, and directly acts on mesolimbic reward circuits to reduce hedonic food cravings. Tirzepatide\'s GLP-1 component uses a peptide backbone optimized for GIPR co-agonism, creating a balanced dual receptor activation rather than simply stacking two separate agonists.',
  },
  {
    title: 'Fat Cell Metabolism',
    body: 'One of GIP\'s lesser-known roles is modulating adipocyte (fat cell) metabolism. In the presence of insulin, GIPR activation on fat cells promotes energy storage. However, in a caloric deficit, GIP receptor activation on adipose tissue shifts toward lipolysis — fat mobilization. This context-dependent switching, combined with the appetite suppression from GLP-1 agonism, creates a metabolic environment that favors fat catabolism while sparing lean tissue.',
  },
  {
    title: 'Insulin Sensitivity',
    body: 'Beyond acute insulin secretion, both GIP and GLP-1 receptor agonism improve peripheral insulin sensitivity over time — tissues respond more efficiently to circulating insulin, requiring less of it to move glucose out of the bloodstream. This improvement in insulin sensitivity has independent benefits for body composition: chronically elevated insulin drives fat storage and impairs fat mobilization, so improving it directly supports the fat loss process.',
  },
]

const titration = [
  { phase: 'Weeks 1–4', dose: '2.5mg/week', purpose: 'Induction — GI tolerance establishment, not for weight loss', notes: 'The 2.5mg starting dose is a receptor priming phase. Do not evaluate efficacy here — it is below therapeutic threshold. Most users tolerate this phase well.' },
  { phase: 'Weeks 5–8', dose: '5mg/week', purpose: 'Early efficacy begins — meaningful appetite suppression', notes: 'First therapeutic dose. Significant appetite reduction begins. Average weight loss 1–2 lbs/week. GI side effects most common at this transition.' },
  { phase: 'Weeks 9–12', dose: '7.5mg/week', purpose: 'Therapeutic escalation — accelerated fat loss phase', notes: 'Appetite suppression intensifies. Gastric emptying slowing becomes more pronounced. Weight loss 1.5–2.5 lbs/week common.' },
  { phase: 'Weeks 13–16', dose: '10mg/week', purpose: 'High-efficacy range — 19.5% average total weight loss at this dose', notes: 'Many users find 10mg their optimal long-term dose. SURMOUNT-1 showed 19.5% weight loss at this level — close to maximum dose efficacy.' },
  { phase: 'Weeks 17–20', dose: '12.5mg/week', purpose: 'Near-maximum dose — plateau breaking', notes: 'Used when weight loss has slowed at 10mg. GI side effect risk increases at escalation. Ensure 4 weeks of stability before advancing.' },
  { phase: 'Week 21+', dose: '15mg/week', purpose: 'Maximum therapeutic dose — 20.9% average weight loss in SURMOUNT-1', notes: 'FDA-approved ceiling. Up to 25.2% weight loss observed in trial subgroups. Maintain at this dose for sustained fat loss in those who need it.' },
]

const sideEffects = [
  {
    effect: 'Nausea',
    frequency: 'Very common (30–40%)',
    management: 'The single most important management strategy is the titration schedule — it exists entirely to allow GI tolerance to develop. Take the injection at night before bed so peak absorption occurs during sleep. Eat smaller, low-fat, low-fiber meals in the 2–4 hours after injection. Ginger tea and anti-nausea remedies (OTC B6 supplements or prescription promethazine if prescribed) can help.',
    severity: 'Mild to moderate — typically resolves 2–4 weeks after each dose escalation',
  },
  {
    effect: 'Vomiting',
    frequency: 'Common (5–10%)',
    management: 'Usually accompanies severe nausea at dose escalation. If vomiting occurs more than twice per week after a dose increase, hold at the previous dose for another 4 weeks. Hydration and electrolyte replacement are critical — vomiting combined with reduced food intake can cause significant electrolyte depletion.',
    severity: 'Moderate — warrants dose hold if persistent',
  },
  {
    effect: 'Diarrhea / Constipation',
    frequency: 'Common (20–30% each)',
    management: 'Tirzepatide can cause either loose stools or constipation depending on individual gut motility response. For diarrhea: increase electrolytes, use BRAT diet temporarily, reduce dietary fat. For constipation: prioritize hydration (3+ liters/day), increase soluble fiber, use gentle magnesium supplementation at night.',
    severity: 'Mild to moderate — typically self-limiting',
  },
  {
    effect: 'Injection Site Reactions',
    frequency: 'Common (15–20%)',
    management: 'Redness, itching, or bruising at injection sites. Rotate injection locations systematically — abdomen, outer thigh, upper arm. Allow skin to reach room temperature before injecting. Use the smallest needle gauge possible. Warming the injection site briefly before administration reduces discomfort.',
    severity: 'Mild — rarely causes discontinuation',
  },
  {
    effect: 'Muscle Loss Risk',
    frequency: 'Common with rapid weight loss',
    management: 'Tirzepatide\'s superior appetite suppression creates a substantial caloric deficit that can accelerate muscle catabolism alongside fat loss. Counter this aggressively: minimum 1.6–2.2g of protein per kg of bodyweight daily, structured resistance training, and consider adding CJC-1295/Ipamorelin to maintain anabolic GH pulsatility during the caloric deficit.',
    severity: 'Significant if unmanaged — requires active protocol',
  },
]

export default function TirzepatideCompletePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#e05080] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Dual GIP+GLP-1 Weight Loss</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            Tirzepatide:<br />
            <span className="italic" style={{ color: accent }}>Complete Protocol Guide</span>
          </h1>
      <AuthorByline datePublished="2026-03-29" dateModified="2026-03-29" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            The science behind dual GIP+GLP-1 agonism, the complete 2.5mg–15mg titration protocol, SURMOUNT-1 trial results showing up to 25.2% weight loss, and how to optimize body composition while using it.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — WHAT TIRZEPATIDE IS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What Tirzepatide Is — And Why Dual Agonism Changes Everything</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Tirzepatide is a first-in-class dual receptor agonist approved by the FDA for type 2 diabetes management (brand name Mounjaro, 2022) and obesity treatment (brand name Zepbound, 2023). It is a synthetic peptide that simultaneously activates two incretin hormone receptors: the GIP receptor (glucose-dependent insulinotropic polypeptide receptor) and the GLP-1 receptor (glucagon-like peptide-1 receptor). This dual agonism is not simply additive — it is synergistic, which is why tirzepatide consistently produces weight loss outcomes that exceed those of pure GLP-1 agonists by a significant margin.</p>
            <p>To understand why dual agonism matters, consider what each receptor does independently. GLP-1 receptors, when activated, suppress appetite through hypothalamic signaling, slow gastric emptying, and reduce glucagon secretion. These are the same mechanisms exploited by semaglutide (Ozempic/Wegovy), which acts on GLP-1 receptors alone. Semaglutide is highly effective — producing approximately 14.9% average weight loss in clinical trials. But tirzepatide, despite including GLP-1 agonism as just one of its two mechanisms, produces 20.9% average weight loss at maximum dose — a 40% improvement in absolute weight loss. The explanation lies in the GIP component.</p>
            <p>GIP receptors are expressed throughout the brain, adipose tissue, skeletal muscle, pancreas, and gut. In the brain, GIP receptor activation appears to sensitize GLP-1 receptors — essentially increasing the potency of the GLP-1 component. This receptor cross-sensitization is the key mechanistic reason tirzepatide outperforms semaglutide despite using a lower absolute dose of GLP-1 receptor stimulation per molecule. Beyond brain effects, GIP modulates adipocyte metabolism in a context-dependent manner, shifting fat cells toward lipolysis under caloric deficit conditions. The net effect is a metabolic environment uniquely favorable to fat loss and — critically — lean mass preservation.</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {mechanisms.map((m, i) => (
                <div key={i} className="card rounded-xl p-5">
                  <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{m.title}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>

            <div className="card rounded-xl p-5 mt-2">
              <p className="text-white font-600 text-[14px] mb-2">Mounjaro vs. Zepbound: Same Molecule, Different Labels</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Tirzepatide is sold under two brand names depending on indication: Mounjaro for type 2 diabetes management and Zepbound specifically for obesity treatment. Both contain identical tirzepatide peptide at identical doses — 2.5mg, 5mg, 7.5mg, 10mg, 12.5mg, and 15mg weekly injection formats. The branding distinction exists for regulatory and insurance purposes. Research-grade tirzepatide is the same molecule, available as lyophilized powder for reconstitution.</p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 02 — CLINICAL RESULTS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Clinical Results: The SURMOUNT Trials</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>The SURMOUNT clinical trial program represents the most rigorous evaluation of tirzepatide&apos;s weight loss efficacy to date. SURMOUNT-1, the flagship trial, enrolled 2,539 adults with obesity (BMI ≥30) or overweight with at least one weight-related comorbidity, excluding type 2 diabetes. Participants received either tirzepatide at doses of 5mg, 10mg, or 15mg weekly, or placebo, over 72 weeks (approximately 17 months).</p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { dose: '5mg', loss: '15.0%', lbs: '~34 lbs', note: 'Lowest therapeutic dose. Equivalent to semaglutide 2.4mg in efficacy.' },
                { dose: '10mg', loss: '19.5%', lbs: '~44 lbs', note: 'High-efficacy dose. Optimal balance of results and tolerability for most users.' },
                { dose: '15mg', loss: '20.9%', lbs: '~48 lbs', note: 'Maximum dose. Up to 25.2% weight loss in highest-response cohorts.' },
              ].map((d, i) => (
                <div key={i} className="card rounded-xl p-4 text-center">
                  <p className="text-[#50505e] text-[11px] mb-1">WEEKLY DOSE</p>
                  <p className="text-white font-700 text-[20px] mb-2">{d.dose}</p>
                  <p className="font-900 text-[28px] mb-1" style={{ color: accent }}>{d.loss}</p>
                  <p className="text-[#aaaabc] text-[13px] font-600 mb-3">{d.lbs} avg</p>
                  <p className="text-[#50505e] text-[11px] leading-relaxed">{d.note}</p>
                </div>
              ))}
            </div>

            <p>Beyond the headline weight loss numbers, SURMOUNT-1 revealed additional metabolic improvements that distinguish tirzepatide from prior weight loss therapies. Fasting insulin levels dropped by 47–55%, reflecting dramatic improvements in insulin sensitivity. Triglycerides decreased by 26–32%, and waist circumference (a key marker of visceral fat) shrank by an average of 14–15 cm at maximum dose. These metabolic improvements often precede or accompany the weight loss itself, suggesting tirzepatide is reshaping metabolic function rather than simply reducing caloric intake.</p>

            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">SURMOUNT-2: Results in Type 2 Diabetes Patients</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">SURMOUNT-2 evaluated tirzepatide specifically in patients with both obesity and type 2 diabetes — a population where weight loss drugs typically underperform due to metabolic impairment. Even in this more challenging population, tirzepatide produced 15.7% average weight loss at 15mg over 72 weeks, alongside HbA1c reductions of 2.1–2.3 percentage points. Many participants achieved HbA1c levels below the diabetic threshold entirely — a result rarely seen with any single intervention.</p>
            </div>

            <p>The SURMOUNT-3 and SURMOUNT-4 trials extended the evidence base further. SURMOUNT-4 is particularly instructive: patients who completed an initial tirzepatide course and then were randomized to either continue or switch to placebo showed that those who continued tirzepatide maintained and extended their weight loss, while those who discontinued regained an average of 14% body weight within one year. This confirms that tirzepatide produces its effects through sustained receptor signaling — not a one-time metabolic reset — meaning active administration is required to maintain results.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 03 — TITRATION PROTOCOL */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Complete Titration Protocol: 2.5mg → 15mg</h2>
          </div>
          <div className="pl-10 space-y-3">
            <p className="text-[#8888a0] text-[15px] leading-relaxed mb-5">The titration schedule is non-negotiable. Starting tirzepatide at a therapeutic dose causes severe GI distress in the vast majority of users. The slow escalation allows GI motility receptors to adapt, nausea pathways to downregulate, and gastric emptying changes to become gradual rather than abrupt. Follow this schedule precisely, and hold at any level if side effects are significant.</p>
            {titration.map((t, i) => (
              <div key={i} className="card rounded-xl p-5 flex gap-5">
                <div className="flex-shrink-0 w-[80px]">
                  <p className="text-[#50505e] text-[11px] mb-1">PHASE</p>
                  <p className="text-white font-600 text-[13px]">{t.phase}</p>
                </div>
                <div className="w-[80px] flex-shrink-0">
                  <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                  <p className="font-700 text-[15px]" style={{ color: accent }}>{t.dose}</p>
                </div>
                <div className="flex-1">
                  <p className="text-[#aaaabc] text-[13px] leading-relaxed mb-1">{t.purpose}</p>
                  <p className="text-[#50505e] text-[12px] italic">{t.notes}</p>
                </div>
              </div>
            ))}
            <div className="card rounded-xl p-5 mt-3">
              <p className="text-white font-600 text-[14px] mb-2">Dose Adjustment Rules</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed mb-3">If side effects at any dose level are more than mild and transient, hold at that dose for an additional 4 weeks before attempting escalation. There is no clinical benefit to pushing through significant nausea — it increases dropout risk and is unnecessary given that lower doses still produce meaningful weight loss. Many users achieve optimal results at 10–12.5mg and maintain at that level indefinitely without ever reaching 15mg.</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Injection timing matters: administering tirzepatide in the evening (1–2 hours before sleep) allows the peak nausea window — typically 24–48 hours post-injection — to occur during sleep, dramatically improving tolerability compared to morning dosing.</p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 04 — SIDE EFFECTS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Managing Side Effects</h2>
          </div>
          <div className="pl-10 space-y-3">
            <p className="text-[#8888a0] text-[15px] leading-relaxed mb-5">Tirzepatide&apos;s side effects are predominantly gastrointestinal and occur primarily during dose escalation phases. At stable doses, GI side effects typically resolve within 2–4 weeks as the body adapts to the new receptor activation level. Understanding each side effect and how to manage it proactively dramatically improves the treatment experience.</p>
            {sideEffects.map((s, i) => (
              <div key={i} className="card rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-700 text-[14px]">{s.effect}</p>
                  <span className="tag text-[10px]">{s.frequency}</span>
                </div>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-2">{s.management}</p>
                <p className="text-[#50505e] text-[12px]">Severity: {s.severity}</p>
              </div>
            ))}

            <div className="card rounded-xl p-5 mt-2">
              <p className="text-white font-600 text-[14px] mb-3">Practical Side Effect Management Protocol</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'Inject at Night', val: 'Take your weekly injection 1–2 hours before sleep. The peak nausea window passes during sleep, dramatically improving daily quality of life compared to morning dosing.' },
                  { label: 'Eat Before Injecting', val: 'Having a small, low-fat meal 1–2 hours before injection blunts the acute GI response. Avoid eating a large meal immediately after injection.' },
                  { label: 'Protein Priority', val: 'With reduced appetite, every calorie counts. Prioritize protein at 1.6–2.2g/kg bodyweight to preserve muscle mass. High-protein foods are also more satiating, working synergistically with tirzepatide\'s appetite suppression.' },
                  { label: 'Hydration', val: 'Dehydration amplifies nausea and GI side effects significantly. Aim for 3+ liters of water daily, plus electrolyte supplementation (sodium, potassium, magnesium) especially during early titration phases.' },
                ].map((item, i) => (
                  <div key={i} className="card rounded-xl p-4">
                    <p className="text-white font-600 text-[13px] mb-1">{item.label}</p>
                    <p className="text-[#8888a0] text-[12px] leading-relaxed">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 05 — BODY COMPOSITION */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Body Composition: Beyond Weight Loss</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Weight loss numbers alone tell an incomplete story. What matters for long-term health and appearance is body composition — specifically, how much of the lost weight comes from fat versus lean tissue. This is where tirzepatide distinguishes itself from both conventional caloric restriction and even other GLP-1 receptor agonists.</p>
            <p>DEXA scan data from SURMOUNT-1 showed that approximately 83% of tirzepatide-induced weight loss came from fat mass at maximum dose — a remarkable figure given that typical caloric restriction diets produce roughly 75% fat loss and 25% lean tissue loss. The GIP component plays a central role here. GIP receptors on skeletal muscle cells appear to support preservation of lean tissue during caloric deficits, partially by enhancing glucose uptake into muscle independently of insulin and by modulating the balance between muscle protein synthesis and breakdown.</p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Fat Mass Lost', val: '~83%', desc: 'Of total weight loss from fat tissue — significantly higher than diet alone (~75%)' },
                { label: 'Lean Mass Preserved', val: '~17%', desc: 'Only modest lean mass loss despite aggressive caloric deficit — better than semaglutide comparators' },
                { label: 'Visceral Fat', val: '−40%', desc: 'Visceral (organ) fat reduction — the metabolically dangerous fat depot — disproportionately reduced' },
              ].map((s, i) => (
                <div key={i} className="card rounded-xl p-4 text-center">
                  <p className="font-900 text-[26px] mb-1" style={{ color: accent }}>{s.val}</p>
                  <p className="text-white font-600 text-[13px] mb-2">{s.label}</p>
                  <p className="text-[#50505e] text-[12px] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <p>Despite these favorable numbers, lean mass loss is still a real concern when aggressive caloric deficits meet the powerful appetite suppression of tirzepatide. Users who are not actively eating enough protein and training with resistance exercise will lose meaningful muscle mass. For those prioritizing physique outcomes rather than just scale weight, a structured muscle preservation protocol is essential.</p>

            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-3">The Muscle Preservation Stack: Tirzepatide + CJC-1295/Ipamorelin</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed mb-3">Adding CJC-1295 and Ipamorelin — a growth hormone-releasing hormone analogue and a growth hormone secretagogue — to a tirzepatide protocol creates a powerful synergy for body recomposition. While tirzepatide aggressively drives fat loss through appetite suppression and metabolic improvement, CJC-1295/Ipamorelin maintains pulsatile growth hormone secretion, which in turn preserves lean mass through IGF-1 signaling, supports lipolysis of existing fat stores, and improves recovery.</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed mb-3">The combination is particularly valuable because tirzepatide&apos;s caloric deficit signals the body to downregulate anabolic pathways including growth hormone secretion. CJC-1295/Ipamorelin directly counteracts this downregulation, maintaining the anabolic environment necessary for lean mass preservation. Users running this combination consistently report superior body composition outcomes — losing fat while maintaining or even gaining modest amounts of lean tissue simultaneously.</p>
              <Link href="/cjc-1295-ipamorelin-results-timeline" className="inline-flex items-center gap-1 text-[13px] hover:underline" style={{ color: accent }}>
                CJC-1295 / Ipamorelin Results Timeline →
              </Link>
            </div>

            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Results Timeline: What to Expect Week by Week</p>
              <div className="space-y-3 mt-3">
                {[
                  { period: 'Week 1–2 (2.5mg)', result: 'Appetite reduction begins even at the induction dose. Most users notice reduced hunger within days of the first injection. No significant weight loss expected yet — this is a physiological adaptation phase.' },
                  { period: 'Weeks 4–8 (5mg)', result: 'First meaningful weight loss. Appetite suppression is now substantial — many users struggle to eat enough protein, not too much food. Gastric emptying changes become noticeable (feeling full after small meals). Expect 6–12 lbs total loss in this window for most users.' },
                  { period: 'Months 3–4 (7.5–10mg)', result: 'The most dramatic visible transformation phase for most users. Weight loss is steady and accelerating. Energy may be lower due to caloric deficit — prioritize sleep and electrolytes. Total weight loss of 15–25 lbs common by month 4.' },
                  { period: 'Months 5–6 (10–15mg)', result: 'Approaching therapeutic ceiling for many users. Weight loss rate may plateau temporarily as the body adapts — this is normal and not treatment failure. Dose escalation or diet refinement typically breaks plateaus. Cumulative losses of 30–50+ lbs achievable in motivated users.' },
                  { period: 'Month 6+ (Maintenance)', result: 'Long-term maintenance phase. Most users find a dose that keeps appetite controlled with minimal side effects and maintain there indefinitely. SURMOUNT-4 showed that continuing treatment prevents weight regain — the goal becomes stable maintenance, not ongoing loss.' },
                ].map((t, i) => (
                  <div key={i} className="border-l-2 pl-4" style={{ borderColor: accent + '40' }}>
                    <p className="text-white font-600 text-[13px] mb-1">{t.period}</p>
                    <p className="text-[#8888a0] text-[13px] leading-relaxed">{t.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — TIRZEPATIDE VS SEMAGLUTIDE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Tirzepatide vs Semaglutide: Where Dual Agonism Wins</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Semaglutide (Ozempic/Wegovy) is an excellent weight loss compound with a proven track record. Tirzepatide does not replace it for everyone — but the clinical evidence is unambiguous that tirzepatide produces superior efficacy across virtually every measured outcome when they are compared head-to-head. Understanding why helps you make an informed decision about which compound matches your goals.</p>

            <div className="space-y-3">
              {[
                {
                  metric: 'Average Weight Loss',
                  sema: '14.9% (STEP trials, 68 weeks)',
                  tirz: '20.9% (SURMOUNT-1, 72 weeks)',
                  winner: 'tirzepatide',
                  note: 'A 40% relative improvement in absolute weight loss. At 200 lbs starting weight, that is the difference between losing 30 lbs and losing 42 lbs.',
                },
                {
                  metric: 'Body Fat % Reduction',
                  sema: '~75% of lost weight from fat',
                  tirz: '~83% of lost weight from fat',
                  winner: 'tirzepatide',
                  note: 'The GIP component&apos;s effect on adipocyte metabolism and lean tissue preservation gives tirzepatide a meaningful body composition advantage.',
                },
                {
                  metric: 'Fasting Insulin Improvement',
                  sema: '~30–35% reduction',
                  tirz: '~47–55% reduction',
                  winner: 'tirzepatide',
                  note: 'Better insulin sensitivity improvement means stronger long-term metabolic health benefits beyond the weight loss itself.',
                },
                {
                  metric: 'Head-to-Head Trial (SURPASS-2)',
                  sema: 'Semaglutide 1mg baseline',
                  tirz: 'All tirzepatide doses superior',
                  winner: 'tirzepatide',
                  note: 'The SURPASS-2 trial directly compared tirzepatide (5mg, 10mg, 15mg) against semaglutide 1mg in type 2 diabetes patients. All tirzepatide doses produced greater HbA1c reduction and greater weight loss.',
                },
                {
                  metric: 'GI Side Effect Profile',
                  sema: 'Nausea 44%, constipation 24%',
                  tirz: 'Nausea 30–40%, diarrhea 20–30%',
                  winner: 'comparable',
                  note: 'Side effect profiles are broadly similar. Individual tolerance varies — some users tolerate tirzepatide better than semaglutide, others the reverse.',
                },
                {
                  metric: 'Dosing Complexity',
                  sema: '5-step titration (0.25→2.4mg)',
                  tirz: '6-step titration (2.5→15mg)',
                  winner: 'comparable',
                  note: 'Both require slow dose escalation. Tirzepatide&apos;s starting dose of 2.5mg is a true induction dose with no weight loss effect — just tolerance building.',
                },
              ].map((row, i) => (
                <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${row.winner === 'tirzepatide' ? accent : row.winner === 'comparable' ? '#50505e' : '#6090ff'}` }}>
                  <p className="text-white font-700 text-[14px] mb-3">{row.metric}</p>
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <div>
                      <p className="text-[#50505e] text-[11px] mb-1">SEMAGLUTIDE</p>
                      <p className="text-[#aaaabc] text-[13px]">{row.sema}</p>
                    </div>
                    <div>
                      <p className="text-[#50505e] text-[11px] mb-1">TIRZEPATIDE</p>
                      <p className="text-[13px] font-600" style={{ color: row.winner === 'tirzepatide' ? accent : '#aaaabc' }}>{row.tirz}</p>
                    </div>
                  </div>
                  <p className="text-[#50505e] text-[12px] leading-relaxed italic">{row.note}</p>
                </div>
              ))}
            </div>

            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">When Semaglutide Is Still the Right Choice</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Tirzepatide&apos;s superiority in trials does not mean it is always the right starting point. Semaglutide has a longer safety record, more long-term follow-up data, and strong efficacy for many users. If you have never used a GLP-1-class compound, semaglutide represents a well-validated, lower-cost entry point. Tirzepatide is the logical next step if you plateau on semaglutide, want maximum efficacy from the start, or are specifically prioritizing body composition alongside fat loss.</p>
              <Link href="/tirzepatide-vs-semaglutide-vs-retatrutide" className="inline-flex items-center gap-1 text-[13px] hover:underline mt-3" style={{ color: accent }}>
                Full Three-Way Comparison: Tirzepatide vs Semaglutide vs Retatrutide →
              </Link>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 07 — GET TIRZEPATIDE */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get Tirzepatide</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Tirzepatide</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Pharmaceutical-grade lyophilized powder. Certificate of analysis verified. The dual GIP+GLP-1 agonist that outperforms all pure GLP-1 therapies in clinical trials.</p>
              <div className="flex gap-3">
                <a href="/go/tirzepatide-15mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/tirzepatide-15mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Tirzepatide 15mg — 4-Pack</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Four vials of 15mg tirzepatide — a full month&apos;s supply at maximum dose for users who have completed titration and need sustained maintenance supply.</p>
              <div className="flex gap-3">
                <a href="/go/tirzepatide-15mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy 4-Pack →</a>
                <Link href="/products/tirzepatide-60mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Start with Semaglutide</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">New to GLP-1 therapy? Semaglutide is the well-validated entry point with the longest safety track record — the proven first step before upgrading to dual agonism.</p>
              <div className="flex gap-3">
                <Link href="/products/semaglutide-6mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">View Semaglutide</Link>
                <Link href="/semaglutide-complete-guide" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Sema Guide</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Maximum Fat Loss: Retatrutide</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Need more than tirzepatide? Retatrutide&apos;s triple GIP+GLP-1+glucagon agonism produced 24.2% weight loss in trials — the most powerful option available.</p>
              <div className="flex gap-3">
                <Link href="/products/retatrutide-10mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">View Retatrutide</Link>
                <Link href="/retatrutide-complete-guide-results-dosage" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Reta Guide</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 08 — FAQ */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">08</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Frequently Asked Questions</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              {
                q: 'How long does tirzepatide take to work?',
                a: 'Appetite suppression begins within days of the first injection — even at the 2.5mg induction dose. Significant weight loss becomes noticeable by weeks 4–8 once the 5mg therapeutic dose is reached. The most dramatic transformation period is typically months 3–5, when users are in the 7.5–10mg range and have built sustained appetite control. Total weight loss continues accumulating for the full 72-week trial duration — there is no sharp plateau with proper dosing.',
              },
              {
                q: 'Will I regain weight after stopping tirzepatide?',
                a: 'Yes — SURMOUNT-4 showed that participants who discontinued tirzepatide after successful weight loss regained an average of 14% body weight within one year, recovering roughly two-thirds of the weight lost. This is not a failure of the drug — it is the expected consequence of removing the sustained receptor activation that was managing appetite and metabolic rate. Successful long-term users either continue at a reduced maintenance dose, develop structural lifestyle changes (diet and training habits) during treatment that they sustain after discontinuation, or cycle on and off with structured protocols.',
              },
              {
                q: 'Can tirzepatide be combined with other peptides?',
                a: 'Yes. The most evidence-supported combination is tirzepatide with CJC-1295 and Ipamorelin for body composition optimization. Tirzepatide drives aggressive fat loss; CJC-1295/Ipamorelin maintains GH pulsatility and anabolic signaling to preserve lean mass during the caloric deficit. This combination is widely used by physique-focused users who want to lose fat without the muscle loss that typically accompanies aggressive caloric restriction.',
              },
              {
                q: 'How do I reconstitute and inject tirzepatide?',
                a: 'Tirzepatide research peptide is supplied as lyophilized (freeze-dried) powder. Reconstitute with bacteriostatic water using a 1ml syringe — typically 1–2ml of BAC water per 5mg vial. Draw your weekly dose into a 29–31 gauge insulin syringe. Inject subcutaneously (just under the skin) into the abdomen, outer thigh, or upper arm. Rotate injection sites weekly. Store reconstituted solution refrigerated at 2–8°C and use within 28 days. Unmixed lyophilized powder can be stored long-term in the freezer.',
              },
              {
                q: 'Is tirzepatide safe for people without diabetes?',
                a: 'Tirzepatide was specifically approved for obesity treatment (as Zepbound) in people with a BMI ≥30, or BMI ≥27 with at least one weight-related comorbidity — regardless of diabetic status. The SURMOUNT-1 trial that demonstrated 20.9% weight loss explicitly excluded patients with type 2 diabetes. The safety profile in non-diabetic patients is well-characterized: the primary concerns are GI side effects during dose escalation, theoretical pancreatitis risk (rare), and potential thyroid C-cell effects (a contraindication exists for those with personal or family history of medullary thyroid carcinoma).',
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
              { href: '/tirzepatide-vs-semaglutide-vs-retatrutide', label: 'Tirzepatide vs Semaglutide vs Retatrutide', desc: 'The complete three-way comparison of all GLP-1 class compounds — head-to-head data and decision guide' },
              { href: '/semaglutide-complete-guide', label: 'Semaglutide Complete Guide', desc: 'The proven GLP-1 entry point — how it works, STEP trial results, and titration protocol' },
              { href: '/retatrutide-complete-guide-results-dosage', label: 'Retatrutide Complete Guide', desc: 'Triple GIP+GLP-1+glucagon agonism for maximum fat loss — 24.2% in trials' },
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin Stack', desc: 'Add GH optimization to preserve lean mass and improve body composition during tirzepatide fat loss' },
              { href: '/how-to-inject-peptides-beginners-guide', label: 'How to Inject Peptides', desc: 'Reconstitution, needle selection, injection technique, and storage guide for beginners' },
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
