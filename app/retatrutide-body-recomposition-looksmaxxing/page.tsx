import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retatrutide for Body Recomposition & Looksmaxxing: The 28.7% Fat Loss Stack | PeptidesMuscle',
  description: 'What 28.7% body weight reduction actually looks like in practice — and how stacking retatrutide with CJC-1295/Ipamorelin protects lean mass while maximizing fat loss. The looksmaxxing recomp protocol.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/retatrutide-body-recomposition-looksmaxxing' },
  keywords: 'retatrutide body recomposition, retatrutide looksmaxxing, retatrutide stack cjc-1295, retatrutide fat loss muscle preservation, retatrutide gh peptides stack, retatrutide recomp protocol',
  openGraph: {
    title: 'Retatrutide for Body Recomposition & Looksmaxxing',
    description: 'What 28.7% fat loss looks like in practice — and the GH peptide stack that preserves muscle while retatrutide strips fat.',
    url: 'https://www.peptidesmuscle.com/retatrutide-body-recomposition-looksmaxxing',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: { card: 'summary_large_image', title: 'Retatrutide for Body Recomposition & Looksmaxxing', description: 'The looksmaxxing recomp stack — retatrutide fat loss + GH peptides for muscle preservation.', images: ['/max-avatar.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Retatrutide for Body Recomposition & Looksmaxxing: The 28.7% Fat Loss Stack',
      datePublished: '2026-03-27',
      dateModified: '2026-03-27',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does retatrutide change body composition for looksmaxxing?',
          acceptedAnswer: { '@type': 'Answer', text: 'Retatrutide produces 24–28.7% average body weight reduction primarily through visceral and subcutaneous fat loss, with a significant reduction in appetite. For looksmaxxing, this means dramatically improved muscle-to-fat ratio, enhanced jaw and facial definition from reduced facial adipose tissue, and visible veins and muscle striations that were previously hidden under body fat. The main looksmaxxing risk is lean mass loss — which is why GH peptide stacking is critical.' },
        },
        {
          '@type': 'Question',
          name: 'Should you stack retatrutide with CJC-1295/Ipamorelin?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. GH peptides (CJC-1295 + Ipamorelin) are the most important addition to a retatrutide recomp protocol. Retatrutide creates a significant caloric deficit — the same environment where muscle catabolism accelerates. GH optimization directly counteracts this: growth hormone is anabolic to lean tissue, promotes fat mobilization preferentially, and improves the skin tightening response that determines how physique looks during the weight loss phase.' },
        },
        {
          '@type': 'Question',
          name: 'What does 28.7% weight loss look like on an average person?',
          acceptedAnswer: { '@type': 'Answer', text: 'For a 200lb person, 28.7% is 57.4 lbs lost. For a 180lb person it is 51.7 lbs. In appearance terms: this is the difference between being visibly overweight and being lean, or between being lean and being extremely defined. The transformation is dramatic enough to be unrecognizable to people who knew the subject before the protocol. Most of the loss occurs in the first 24–36 weeks with a plateau and stabilization phase after.' },
        },
      ],
    },
  ],
}


const weightExamples = [
  { start: '160 lbs', loss: '45.9 lbs', end: '~114 lbs', body: 'Lean to very lean. Dramatic facial definition, visible muscle striations at rest.' },
  { start: '180 lbs', loss: '51.7 lbs', end: '~128 lbs', body: 'Average build to athletic lean. Jaw definition, visible abs, significant change in how clothing fits.' },
  { start: '200 lbs', loss: '57.4 lbs', end: '~143 lbs', body: 'Overweight to lean. The most visually dramatic transformation — facial fat redistribution alone changes perceived attractiveness significantly.' },
  { start: '220 lbs', loss: '63.1 lbs', end: '~157 lbs', body: 'Obese to normal weight. Near-complete elimination of visceral adipose, restored hormonal function, complete body silhouette change.' },
  { start: '250 lbs', loss: '71.75 lbs', end: '~178 lbs', body: 'Obese to overweight/normal. At this starting weight the transformation is among the most dramatic physically possible through any non-surgical intervention.' },
]

const stackComponents = [
  {
    num: '01',
    name: 'Retatrutide',
    role: 'The Fat Loss Engine',
    color: '#6090ff',
    dose: '2mg → 4mg → 8mg → 12mg (weekly SubQ, escalated over 20 weeks)',
    mechanism: 'Triple receptor agonism (GLP-1 + GIP + Glucagon) creates a profound caloric deficit through appetite suppression and direct glucagon-mediated energy expenditure increase. The glucagon component is what separates retatrutide from tirzepatide — it directly accelerates hepatic fat burning and raises basal metabolic rate above baseline, so fat loss occurs even without large dietary restriction.',
    looksMaxAngle: 'Creates the caloric environment for fat loss. At 28.7% body weight reduction, retatrutide strips adipose from all depots including facial fat pads, the neck, and subcutaneous layers over muscle — revealing definition that training alone cannot expose in the presence of excess body fat.',
    products: [
      { name: 'Retatrutide 15mg', url: '/go/retatrutide-15mg' },
      { name: 'Retatrutide 30mg', url: '/go/retatrutide-30mg' },
    ],
  },
  {
    num: '02',
    name: 'CJC-1295 + Ipamorelin',
    role: 'Lean Mass Preservation & Skin Quality',
    color: '#d4a043',
    dose: '100mcg each, 2–3× daily (morning + pre-sleep; add midday if running hard training)',
    mechanism: 'CJC-1295 stimulates GHRH receptors for sustained GH pulse elevation. Ipamorelin activates the ghrelin receptor for a separate, complementary GH pulse — without the cortisol and prolactin elevation of older GHRP compounds. Together they produce physiologically elevated GH pulses that preserve lean mass during caloric deficit, preferentially mobilize fat, improve sleep quality, and dramatically tighten skin as body fat drops.',
    looksMaxAngle: 'The critical countermeasure to retatrutide\'s lean mass risk. GH is directly anabolic to muscle and connective tissue. During the aggressive fat loss phase, GH optimization means the body selectively burns fat rather than catabolizing muscle — producing a physique that is lean AND muscular rather than simply thin. Skin tightening from GH prevents the loose skin appearance that can accompany rapid fat loss.',
    products: [
      { name: 'CJC-1295 / Ipamorelin', url: '/go/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg' },
    ],
  },
  {
    num: '03',
    name: 'BPC-157',
    role: 'Gut & Connective Tissue Foundation',
    color: '#40c090',
    dose: '250mcg SubQ daily (or oral 500mcg for GI focus)',
    mechanism: 'BPC-157 repairs gut permeability — which is directly relevant for retatrutide users, as GLP-1 agonists alter GI motility and the gut microbiome environment during the weight loss phase. BPC-157 also accelerates connective tissue remodeling, which matters as fascia and ligaments adapt to rapidly changing body composition. The anti-inflammatory effect supports joint health during intensified training.',
    looksMaxAngle: 'A stable, healthy gut environment means better nutrient absorption from reduced food intake. Connective tissue remodeling during fat loss determines how skin and underlying structures adapt — BPC-157 supports the tissue quality outcome as body fat drops.',
    products: [
      { name: 'BPC-157', url: '/go/bpc-157-10mg' },
    ],
  },
  {
    num: '04',
    name: 'GHK-Cu',
    role: 'Skin Adaptation During Fat Loss',
    color: '#d4a043',
    dose: '1mg SubQ 3× weekly or topical 2× daily',
    mechanism: 'As body fat decreases, the skin must contract and remodel its collagen architecture to the new body shape. GHK-Cu directly stimulates collagen I, III, and elastin synthesis — accelerating the skin\'s structural adaptation to fat loss. This is most visible in the face: as facial adipose reduces on retatrutide, GHK-Cu ensures the overlying skin tightens and densifies rather than appearing loose or deflated.',
    looksMaxAngle: 'The defining difference between someone who looks "lean and tight" versus someone who looks "thin and gaunt" after significant weight loss. GHK-Cu drives the skin quality response that makes the physique transformation look like optimization rather than weight loss.',
    products: [
      { name: 'GHK-Cu', url: '/go/ghk-cu-50mg' },
    ],
  },
]

const timeline = [
  {
    phase: 'Phase 1',
    weeks: 'Weeks 1–8',
    title: 'Titration & Appetite Reset',
    color: '#6090ff',
    retatrutide: '2mg weekly → 4mg weekly',
    ghPeptides: 'CJC-1295/Ipamorelin at 100mcg 2× daily',
    bodyChange: '3–7% body weight reduction. Primary change is appetite suppression — food noise disappears rapidly. GI side effects most prominent here. Training continues at moderate intensity.',
    looksMaxNote: 'Early bloating and water weight reduction makes existing muscle definition more visible. Not dramatic changes yet — foundation phase.',
  },
  {
    phase: 'Phase 2',
    weeks: 'Weeks 9–20',
    title: 'Accelerated Fat Loss',
    color: '#d4a043',
    retatrutide: '4mg → 8mg weekly',
    ghPeptides: 'CJC-1295/Ipamorelin at 100mcg 3× daily (add midday)',
    bodyChange: '12–18% total body weight reduction. Visible fat loss in all depots. Facial fat reduction becomes noticeable. Visceral adipose drops significantly — waistline narrows rapidly. Lean mass at risk — GH peptides critical here.',
    looksMaxNote: 'The most visually dramatic phase. Jaw definition, cheekbones, and neck taper emerge. Abs become visible in people who have never had visible abs. Skin tightening from GHK-Cu becomes increasingly important.',
  },
  {
    phase: 'Phase 3',
    weeks: 'Weeks 21–36',
    title: 'Optimization & Remodeling',
    color: '#40c090',
    retatrutide: '8mg → 12mg weekly (or maintain 8mg if GI symptoms)',
    ghPeptides: 'CJC-1295/Ipamorelin maintain 3× daily. Add Epithalon 10-day cycle for cellular anti-aging.',
    bodyChange: '22–28.7% cumulative body weight reduction. Rate of loss slows. Body begins adapting to new setpoint. Lean mass maintenance — and in optimal protocol, lean mass gain — becomes possible.',
    looksMaxNote: 'The refinement phase. Muscle definition visible through skin. Skin quality from GHK-Cu + GH peptides critical for final appearance outcome. Most people reach their target physique during this phase.',
  },
  {
    phase: 'Phase 4',
    weeks: 'Weeks 37+',
    title: 'Maintenance & Build',
    color: '#a060ff',
    retatrutide: '4–6mg weekly maintenance (or taper off)',
    ghPeptides: 'CJC-1295/Ipamorelin continue. Optionally add Epithalon cycle for longevity.',
    bodyChange: 'Weight stabilization at new setpoint. Progressive resistance training now produces visible lean mass gain on the newly lean frame. Body recomposition in the truest sense — fat lost, muscle added.',
    looksMaxNote: 'The most gratifying phase. Adding muscle to a lean frame is dramatically more visible than adding muscle with body fat present. The looksmaxxing outcome — lean muscle visible through tight skin — is fully realized here.',
  },
]

const lossRisks = [
  {
    risk: 'Lean Mass Catabolism',
    why: 'Any significant caloric deficit accelerates muscle protein breakdown. Retatrutide\'s aggressive deficit amplifies this.',
    fix: 'CJC-1295/Ipamorelin daily. Protein intake ≥1g/lb bodyweight. Resistance training 3–4× weekly minimum.',
    severity: 'High',
    color: '#ff6060',
  },
  {
    risk: 'Loose / Sagging Skin',
    why: 'Rapid fat loss outpaces the skin\'s natural collagen remodeling. More significant above 200lbs starting weight.',
    fix: 'GHK-Cu injectable 3× weekly throughout the protocol. GH optimization via CJC-1295/Ipamorelin for systemic skin tightening.',
    severity: 'Medium',
    color: '#d4a043',
  },
  {
    risk: 'Facial Fat Loss (Gaunt Appearance)',
    why: 'Retatrutide removes fat from all depots including the face. Excessive facial fat loss without collagen support looks aged rather than lean.',
    fix: 'GHK-Cu topical and injectable to maintain skin density as facial adipose decreases. SNAP-8 to maintain skin quality around expression areas.',
    severity: 'Medium',
    color: '#d4a043',
  },
  {
    risk: 'Dysesthesia',
    why: 'Retatrutide\'s unique glucagon-agonist side effect — tingling/numbness in 8–20% of users. Not seen with semaglutide or tirzepatide.',
    fix: 'Dose reduction typically resolves. Slow escalation protocol minimizes onset severity.',
    severity: 'Low–Medium',
    color: '#40c090',
  },
]

const comparisonRows = [
  { metric: 'Primary mechanism', reta: 'GLP-1 + GIP + Glucagon (triple)', tirze: 'GLP-1 + GIP (dual)', sema: 'GLP-1 only' },
  { metric: 'Avg. weight loss', reta: '24–28.7%', tirze: '20–22.5%', sema: '13.7–14.9%' },
  { metric: 'Lean mass risk', reta: 'Higher (more aggressive deficit)', tirze: 'Moderate', sema: 'Lower' },
  { metric: 'Skin tightening (GH stack needed)', reta: 'Critical', tirze: 'Important', sema: 'Moderate' },
  { metric: 'Looksmaxxing ceiling', reta: 'Highest — most dramatic recomp', tirze: 'High', sema: 'Moderate' },
  { metric: 'FDA approval (2026)', reta: 'Phase 3 — not yet approved', tirze: 'Approved (Zepbound)', sema: 'Approved (Wegovy)' },
]

export default function RetatrutideRecompPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[700px] h-[500px] bg-[#6090ff] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Body Recomposition & Looksmaxxing</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.1 }}>
            Retatrutide<br />
            <span className="italic" style={{ color: '#d4a043' }}>The Recomp Stack</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl mb-10">
            What 28.7% body weight reduction actually looks like in practice — and why stacking retatrutide with GH peptides is the difference between thin and genuinely lean.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Avg. Fat Loss', val: '28.7%' },
              { label: 'Lean Mass Risk', val: 'High' },
              { label: 'GH Stack', val: 'Critical' },
              { label: 'Timeline', val: '36 weeks' },
            ].map(s => (
              <div key={s.label} className="card rounded-xl p-4 text-center">
                <p className="text-white font-700 text-[20px] mb-1">{s.val}</p>
                <p className="text-[#50505e] text-[11px] uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* What 28.7% looks like */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              What 28.7% Weight Loss Actually Looks Like
            </h2>
          </div>
          <div className="pl-10 space-y-6">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">The number 28.7% is abstract until you map it to a real body. This is the average from the TRIUMPH-4 Phase 3 trial at 12mg weekly over 68 weeks. Some subjects lost significantly more — 35–40% of starting body weight in the top quartile. Here is what those numbers look like in practice at different starting points:</p>
            <div className="space-y-3">
              {weightExamples.map(w => (
                <div key={w.start} className="card rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-6 flex-shrink-0">
                    <div className="text-center">
                      <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Start</p>
                      <p className="text-white font-700 text-[16px]">{w.start}</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-px bg-[#6090ff]/40" />
                      <p className="text-[#6090ff] text-[11px] font-600">−{w.loss}</p>
                      <div className="w-12 h-px bg-[#6090ff]/40" />
                    </div>
                    <div className="text-center">
                      <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">End</p>
                      <p className="text-[#d4a043] font-700 text-[16px]">{w.end}</p>
                    </div>
                  </div>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed sm:border-l sm:border-white/5 sm:pl-4">{w.body}</p>
                </div>
              ))}
            </div>
            <div className="card rounded-xl p-5 border-l-2 border-[#6090ff]/50">
              <p className="text-[#8888a0] text-[14px] leading-relaxed">
                <strong className="text-white">The looksmaxxing lens:</strong> Body fat is the primary variable obscuring facial bone structure, muscle definition, and the V-taper silhouette that drives physical attractiveness assessment. Retatrutide does not just reduce weight — it reveals structure that exists but is hidden. The jaw, cheekbones, and neck are the most visually transformative sites of fat reduction for perceived attractiveness.
              </p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* Why the stack matters */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Why the Stack — Not Just Retatrutide Alone
            </h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Retatrutide alone produces dramatic weight loss. But weight loss and body <em className="text-white">recomposition</em> are different outcomes — and for looksmaxxing, only recomposition matters.</p>
            <p>The distinction: weight loss loses both fat and muscle. Recomposition loses fat while preserving or building muscle. The visual difference between the two outcomes is enormous — the first produces a thin frame, the second produces a lean, defined physique.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="card rounded-xl p-5 border-l-2 border-[#ff6060]/40">
                <p className="text-white font-700 text-[14px] mb-3">Retatrutide Alone</p>
                <ul className="space-y-2">
                  {[
                    'Significant caloric deficit accelerates muscle catabolism',
                    'Skin loses fat rapidly without collagen scaffolding — sagging risk',
                    'Facial fat loss without skin density support = gaunt appearance',
                    'Weight loss outcome, not recomposition outcome',
                  ].map(p => (
                    <li key={p} className="flex items-start gap-2 text-[#8888a0] text-[13px]">
                      <span className="text-[#ff6060] mt-0.5 flex-shrink-0">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card rounded-xl p-5 border-l-2 border-[#40c090]/40">
                <p className="text-white font-700 text-[14px] mb-3">Retatrutide + GH Peptides + GHK-Cu</p>
                <ul className="space-y-2">
                  {[
                    'GH optimization preserves lean mass during aggressive deficit',
                    'GHK-Cu drives collagen remodeling as fat drops — tight skin',
                    'Facial skin adapts to fat reduction with maintained density',
                    'True recomposition: lean, defined, tight physique outcome',
                  ].map(p => (
                    <li key={p} className="flex items-start gap-2 text-[#8888a0] text-[13px]">
                      <span className="text-[#40c090] mt-0.5 flex-shrink-0">+</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* Stack Components */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              The Full Recomp Stack
            </h2>
          </div>
          <div className="pl-10 space-y-10">
            {stackComponents.map((c, i) => (
              <div key={c.num}>
                <div className="flex items-start gap-4 mb-5">
                  <p className="mono text-[12px] mt-1 flex-shrink-0" style={{ color: c.color }}>{c.num}</p>
                  <div>
                    <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">{c.role}</p>
                    <h3 className="font-['Playfair_Display'] font-900 text-white text-[24px]">{c.name}</h3>
                  </div>
                </div>
                <div className="pl-8 space-y-4">
                  <div className="card rounded-xl px-5 py-3 inline-flex items-center gap-3">
                    <p className="text-[#50505e] text-[11px] uppercase tracking-widest">Dose</p>
                    <p className="text-white text-[13px]">{c.dose}</p>
                  </div>
                  <p className="text-[#8888a0] text-[15px] leading-relaxed">{c.mechanism}</p>
                  <div className="card rounded-xl p-4 border-l-2" style={{ borderLeftColor: c.color }}>
                    <p className="text-[11px] uppercase tracking-widest mb-2" style={{ color: c.color }}>Looksmaxxing Role</p>
                    <p className="text-[#8888a0] text-[13px] leading-relaxed">{c.looksMaxAngle}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {c.products.map(p => (
                      <a key={p.name} href={p.url} target="_blank" rel="noopener nofollow sponsored" className="btn-primary text-[12px] py-2.5 px-5">
                        Buy {p.name} →
                      </a>
                    ))}
                  </div>
                </div>
                {i < stackComponents.length - 1 && <div className="rule mt-8" />}
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 36-Week Timeline */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              36-Week Protocol Timeline
            </h2>
          </div>
          <div className="pl-10 space-y-4">
            {timeline.map((t, i) => (
              <div key={t.phase} className="card rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-700 text-white text-[16px]">{t.title}</p>
                      <span className="tag text-[11px]">{t.weeks}</span>
                    </div>
                    <p className="text-[11px] uppercase tracking-widest" style={{ color: t.color }}>{t.phase}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Retatrutide</p>
                    <p className="text-[#aaaabc] text-[13px]">{t.retatrutide}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">GH Peptides</p>
                    <p className="text-[#aaaabc] text-[13px]">{t.ghPeptides}</p>
                  </div>
                </div>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">{t.bodyChange}</p>
                <div className="bg-[#0e0e14] rounded-lg px-4 py-3">
                  <p className="text-[11px] uppercase tracking-widest mb-1" style={{ color: t.color }}>Looksmaxxing Milestone</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{t.looksMaxNote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* Risks & Solutions */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Looksmaxxing Risks & How to Counter Them
            </h2>
          </div>
          <div className="pl-10 space-y-4">
            <p className="text-[#8888a0] text-[16px] leading-relaxed mb-6">Retatrutide is the most powerful fat loss compound available. That power comes with specific risks to the <em className="text-white">quality</em> of the physique outcome — not just the amount of fat lost. These are solvable with the right stack.</p>
            {lossRisks.map(r => (
              <div key={r.risk} className="card rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <p className="text-white font-700 text-[15px]">{r.risk}</p>
                  <span className="text-[11px] font-600 px-2.5 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: `${r.color}15`, color: r.color }}>{r.severity} Risk</span>
                </div>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">{r.why}</p>
                <div className="bg-[#0e0e14] rounded-lg px-4 py-3">
                  <p className="text-[#40c090] text-[11px] uppercase tracking-widest mb-1">Solution</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{r.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* Comparison Table */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Retatrutide vs. Tirzepatide vs. Semaglutide<br />
              <span style={{ color: '#d4a043' }} className="italic">for Looksmaxxing</span>
            </h2>
          </div>
          <div className="pl-10">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-[#50505e] py-3 pr-6 font-500 min-w-[160px]">Metric</th>
                    <th className="text-left py-3 pr-6 font-600 min-w-[130px]" style={{ color: '#6090ff' }}>Retatrutide</th>
                    <th className="text-left text-[#aaaabc] py-3 pr-6 font-500 min-w-[110px]">Tirzepatide</th>
                    <th className="text-left text-[#aaaabc] py-3 font-500 min-w-[110px]">Semaglutide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonRows.map(r => (
                    <tr key={r.metric}>
                      <td className="text-[#50505e] py-3 pr-6">{r.metric}</td>
                      <td className="py-3 pr-6 font-600" style={{ color: '#6090ff' }}>{r.reta}</td>
                      <td className="text-[#aaaabc] py-3 pr-6">{r.tirze}</td>
                      <td className="text-[#8888a0] py-3">{r.sema}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#50505e] text-[12px] mt-4 italic">Weight loss percentages from separate trials. For a full 3-way comparison see the <Link href="/tirzepatide-vs-semaglutide-vs-retatrutide" className="text-[#d4a043] hover:underline">GLP-1 comparison guide</Link>.</p>
          </div>
        </div>

        <div className="rule" />

        {/* Full stack summary CTA */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Stack</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Get the Full Recomp Stack
            </h2>
          </div>
          <div className="pl-10 space-y-4">
            <p className="text-[#8888a0] text-[15px] leading-relaxed mb-6">Every compound in this protocol, in one place:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: 'Retatrutide 15mg', sub: 'Triple GLP — the fat loss engine', url: '/go/retatrutide-15mg', color: '#6090ff' },
                { name: 'Retatrutide 30mg', sub: 'Mid-protocol supply format', url: '/go/retatrutide-30mg', color: '#6090ff' },
                { name: 'CJC-1295 / Ipamorelin', sub: 'GH optimization — lean mass + skin', url: '/go/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg', color: '#d4a043' },
                { name: 'GHK-Cu', sub: 'Collagen & skin tightening during fat loss', url: '/go/ghk-cu-50mg', color: '#d4a043' },
                { name: 'BPC-157', sub: 'Gut health + connective tissue foundation', url: '/go/bpc-157-10mg', color: '#40c090' },
              ].map(p => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener nofollow sponsored" className="card-elevated rounded-2xl p-5 group hover:border-white/10 transition-colors">
                  <p className="text-white font-700 text-[15px] mb-1">{p.name}</p>
                  <p className="text-[13px] mb-4" style={{ color: p.color }}>{p.sub}</p>
                  <p className="text-[12px] font-600 group-hover:underline" style={{ color: p.color }}>Buy Now →</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/retatrutide-complete-guide-results-dosage', label: 'Retatrutide Complete Guide', desc: 'Full TRIUMPH Phase 3 data, dosage protocol, FDA timeline, and side effects' },
              { href: '/tirzepatide-vs-semaglutide-vs-retatrutide', label: 'GLP-1 Triple Comparison', desc: 'Tirzepatide vs. Semaglutide vs. Retatrutide — full side-by-side breakdown' },
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin Guide', desc: 'The GH peptide stack that preserves lean mass during aggressive fat loss' },
              { href: '/ghk-cu-before-and-after-guide', label: 'GHK-Cu Before & After', desc: 'How collagen peptides prevent loose skin during rapid body recomposition' },
              { href: '/looksmaxxing-peptides-guide-men', label: 'Looksmaxxing Peptides: Men\'s Guide', desc: 'The complete appearance optimization stack — all four dimensions' },
              { href: '/wolverine-stack-bpc-157-tb-500-guide', label: 'The Wolverine Stack', desc: 'BPC-157 + TB-500 — recovery and connective tissue during intense recomp training' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="card rounded-xl p-5 group hover:border-[#d4a043]/20 transition-colors">
                <p className="text-[#d4a043] text-[13px] font-600 mb-1 group-hover:underline">{r.label} →</p>
                <p className="text-[#8888a0] text-[13px]">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
