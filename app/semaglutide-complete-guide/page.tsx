import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Semaglutide (Ozempic/Wegovy) Complete Guide: Dosing, Results & Protocol | PeptidesMuscle',
  description: 'The definitive semaglutide guide. How it works, titration schedule, expected weight loss results, side effect management, and how it compares to tirzepatide and retatrutide.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/semaglutide-complete-guide' },
  keywords: 'semaglutide guide, semaglutide dosage, semaglutide results, ozempic guide, wegovy guide, semaglutide vs tirzepatide, semaglutide protocol, GLP-1 agonist',
  openGraph: {
    title: 'Semaglutide (Ozempic/Wegovy) Complete Guide | PeptidesMuscle',
    description: 'How semaglutide works, titration schedule, weight loss results, side effect management, and comparison to tirzepatide and retatrutide.',
    url: 'https://www.peptidesmuscle.com/semaglutide-complete-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semaglutide Complete Guide | PeptidesMuscle',
    description: 'Titration schedule, weight loss results, side effect management, and comparison to tirzepatide and retatrutide.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'Semaglutide (Ozempic/Wegovy) Complete Guide: Dosing, Results & Protocol',
      datePublished: '2026-03-28',
      dateModified: '2026-03-28',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com', logo: { '@type': 'ImageObject', url: 'https://www.peptidesmuscle.com/max-avatar.png' } },
      author: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent', name: 'LooksMax Agent', url: 'https://www.peptidesmuscle.com/about/editors' },
      reviewedBy: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is semaglutide and how does it cause weight loss?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Semaglutide is a GLP-1 receptor agonist — a modified version of the naturally occurring incretin hormone GLP-1 (glucagon-like peptide-1). It causes weight loss through three primary mechanisms: powerful appetite suppression by acting on hypothalamic satiety centers, delayed gastric emptying that prolongs the feeling of fullness after meals, and direct effects on reward centers that reduce food cravings and hedonic eating.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much weight can I lose on semaglutide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Clinical trials (STEP program) demonstrated an average of 14.9% body weight reduction over 68 weeks at maximum dose (2.4mg/week). Individual results vary significantly — some participants lost over 20%, others less. Adherence to dietary guidance, activity levels, and individual metabolic factors all influence outcomes. Most users lose 1–2 lbs per week during active dose escalation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the semaglutide titration schedule?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard titration begins at 0.25mg/week for 4 weeks, then increases to 0.5mg/week for 4 weeks, then 1mg/week for 4 weeks, then 1.7mg/week, and finally 2.4mg/week as the maintenance dose. The slow escalation minimizes GI side effects (nausea, vomiting). Many users find significant efficacy at 1–1.7mg and do not need to reach maximum dose.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does semaglutide compare to tirzepatide and retatrutide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Semaglutide acts on one receptor (GLP-1R). Tirzepatide acts on two (GLP-1R + GIPR) and produces ~20.9% weight loss — significantly more than semaglutide. Retatrutide acts on three receptors (GLP-1R + GIPR + GCGR) and demonstrated 24.2% weight loss in trials. Semaglutide remains highly effective and has the longest safety track record. Those who do not respond adequately to semaglutide often achieve better results upgrading to tirzepatide or retatrutide.',
          },
        },
      ],
    },
  ],
}

const accent = '#6090ff'

const titration = [
  { phase: 'Weeks 1–4', dose: '0.25mg/week', purpose: 'Induction — receptor exposure, GI tolerance establishment', notes: 'Minimal weight loss expected. This phase is about tolerability, not efficacy.' },
  { phase: 'Weeks 5–8', dose: '0.5mg/week', purpose: 'Early efficacy — appetite suppression becomes noticeable', notes: 'Most users begin experiencing meaningful appetite reduction. Weight loss 1–2 lbs/week.' },
  { phase: 'Weeks 9–12', dose: '1.0mg/week', purpose: 'Therapeutic dose — full GLP-1 effect established', notes: 'Strong appetite suppression and gastric slowing. Accelerated weight loss phase.' },
  { phase: 'Weeks 13–16', dose: '1.7mg/week', purpose: 'Escalated dose — enhanced effect for faster progress', notes: 'Many users find 1.0–1.7mg their optimal dose range. GI side effects may increase.' },
  { phase: 'Week 17+', dose: '2.4mg/week', purpose: 'Maximum therapeutic dose', notes: 'FDA-approved ceiling for Wegovy. 14.9% average total weight loss at this dose in trials.' },
]

const sideEffects = [
  {
    effect: 'Nausea',
    frequency: 'Very common (44%)',
    management: 'The primary reason for slow titration. Eat smaller meals, avoid fatty/spicy foods, stay hydrated. Typically subsides after 4–8 weeks at each dose level.',
    severity: 'Mild to moderate',
  },
  {
    effect: 'Constipation',
    frequency: 'Common (24%)',
    management: 'Increase fiber and water intake. Gentle activity helps. Temporary laxative use acceptable if persistent.',
    severity: 'Mild',
  },
  {
    effect: 'Diarrhea',
    frequency: 'Common (30%)',
    management: 'Often occurs at dose escalation. Temporary — typically resolves within days of a new dose level. Electrolyte replenishment important.',
    severity: 'Mild',
  },
  {
    effect: 'Muscle Loss',
    frequency: 'Common in rapid weight loss',
    management: 'High protein intake (1.6–2.2g/kg bodyweight) and resistance training are essential. Many users add CJC-1295/Ipamorelin to preserve lean mass during the cut.',
    severity: 'Manageable with protocol',
  },
  {
    effect: 'Fatigue',
    frequency: 'Common early phase',
    management: 'Ensure adequate caloric intake — too aggressive a deficit amplifies fatigue. Electrolytes (sodium, potassium, magnesium) are often depleted with rapid weight loss.',
    severity: 'Mild',
  },
]

const comparison = [
  { drug: 'Semaglutide', receptors: 'GLP-1R', trialLoss: '14.9%', half: '~7 days', best: 'Proven long-term safety record. Best entry point for GLP-1 therapy.', color: accent },
  { drug: 'Tirzepatide', receptors: 'GLP-1R + GIPR', trialLoss: '20.9%', half: '~5 days', best: 'Dual agonism — significantly more weight loss than semaglutide. Next step up.', color: '#d4a043' },
  { drug: 'Retatrutide', receptors: 'GLP-1R + GIPR + GCGR', trialLoss: '24.2%', half: '~6 days', best: 'Triple agonism — maximum fat loss. Best body composition effects.', color: '#a78bfa' },
]

export default function SemaglutideCompletePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#6090ff] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">GLP-1 Weight Loss Peptide</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            Semaglutide:<br />
            <span className="italic" style={{ color: accent }}>Complete Protocol Guide</span>
          </h1>
      <AuthorByline datePublished="2026-03-28" dateModified="2026-03-28" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            How the compound behind Ozempic and Wegovy actually works, the titration schedule, realistic results, side effect management, and when to consider upgrading to tirzepatide or retatrutide.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — MECHANISM */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>How Semaglutide Works</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Semaglutide is a GLP-1 receptor agonist — a synthetic peptide analogue of GLP-1 (glucagon-like peptide-1), a hormone naturally released by the gut after eating. The body uses GLP-1 to signal satiety to the brain, stimulate insulin secretion, and regulate gastric emptying. Semaglutide mimics and amplifies all of these effects with dramatically extended duration.</p>
            <p>Natural GLP-1 has a half-life of 1–2 minutes. Semaglutide — modified with a C18 fatty acid chain and amino acid substitutions — has a half-life of approximately 7 days, allowing a single weekly injection to maintain consistent GLP-1 receptor stimulation. This transforms a transient post-meal signal into a sustained metabolic state change.</p>

            <div className="grid sm:grid-cols-3 gap-4 mt-2">
              {[
                {
                  title: 'Hypothalamic Satiety',
                  body: 'GLP-1 receptors in the hypothalamus reduce appetite by suppressing the hunger-signaling neurons that drive caloric intake. Users describe it as "not thinking about food" — appetite suppression at the neurological level.',
                },
                {
                  title: 'Delayed Gastric Emptying',
                  body: 'Semaglutide significantly slows gastric emptying — food moves through the stomach more slowly, prolonging mechanical fullness after meals. Small meals feel satisfying for hours.',
                },
                {
                  title: 'Reward Suppression',
                  body: 'GLP-1 receptors in the mesolimbic reward system reduce hedonic eating — the drive to eat for pleasure rather than hunger. Many users report reduced cravings for high-calorie foods specifically.',
                },
              ].map((m, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <p className="font-700 text-[13px] mb-2" style={{ color: accent }}>{m.title}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 02 — TITRATION */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Titration Schedule</h2>
          </div>
          <div className="pl-10 space-y-3">
            <p className="text-[#8888a0] text-[15px] leading-relaxed mb-5">Never start at a therapeutic dose. The titration schedule exists to allow GI tolerance to develop — jumping directly to 1mg+ causes severe nausea in most users. Slow and steady dose escalation is not optional.</p>
            {titration.map((t, i) => (
              <div key={i} className="card rounded-xl p-5 flex gap-5">
                <div className="flex-shrink-0 w-[80px]">
                  <p className="text-[#50505e] text-[11px] mb-1">PHASE</p>
                  <p className="text-white font-600 text-[13px]">{t.phase}</p>
                </div>
                <div className="w-[90px] flex-shrink-0">
                  <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                  <p className="font-700 text-[15px]" style={{ color: accent }}>{t.dose}</p>
                </div>
                <div className="flex-1">
                  <p className="text-[#aaaabc] text-[13px] leading-relaxed mb-1">{t.purpose}</p>
                  <p className="text-[#50505e] text-[12px] italic">{t.notes}</p>
                </div>
              </div>
            ))}
            <div className="card rounded-xl p-4 mt-3">
              <p className="text-white font-600 text-[14px] mb-2">Hold or Slow Down If Needed</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">If side effects (nausea, vomiting) are intolerable at a new dose level, stay at the previous dose for an additional 4 weeks before escalating. There is no benefit to pushing through severe nausea — it increases dropout risk. Many users find 1.0–1.7mg their personal optimal dose and maintain there indefinitely.</p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 03 — SIDE EFFECTS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Side Effects & Management</h2>
          </div>
          <div className="pl-10 space-y-3">
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
              <p className="text-white font-600 text-[14px] mb-2">Preserving Muscle Mass on Semaglutide</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Rapid caloric restriction from semaglutide-induced appetite suppression risks significant muscle loss alongside fat loss — a common complaint reported in DEXA scan studies. Two protocols dramatically reduce this risk: (1) protein intake of 1.6–2.2g/kg bodyweight daily, prioritized within reduced calorie budget; (2) adding CJC-1295/Ipamorelin to maintain GH pulsatility and anabolic signaling during the cut.</p>
              <Link href="/cjc-1295-ipamorelin-results-timeline" className="inline-flex items-center gap-1 text-[#d4a043] text-[13px] hover:underline mt-3">
                CJC-1295 / Ipamorelin Protocol →
              </Link>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 04 — COMPARISON */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Semaglutide vs Tirzepatide vs Retatrutide</h2>
          </div>
          <div className="pl-10 space-y-3">
            {comparison.map((c, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${c.color}` }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white font-700 text-[16px]">{c.drug}</p>
                  <p className="font-700 text-[18px]" style={{ color: c.color }}>{c.trialLoss}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">RECEPTORS</p>
                    <p className="text-[#aaaabc] text-[13px]">{c.receptors}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">HALF-LIFE</p>
                    <p className="text-[#aaaabc] text-[13px]">{c.half}</p>
                  </div>
                </div>
                <p className="text-[#8888a0] text-[13px]">{c.best}</p>
              </div>
            ))}

            <div className="card rounded-xl p-4 mt-2">
              <p className="text-white font-600 text-[14px] mb-2">When to Upgrade</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Semaglutide is the right starting point for GLP-1 therapy — it has the longest safety record and the most clinical data. If you plateau at maximum semaglutide dose with significant weight still to lose, the evidence consistently supports upgrading to tirzepatide (dual agonist) or retatrutide (triple agonist) for substantially greater efficacy.</p>
              <Link href="/tirzepatide-vs-semaglutide-vs-retatrutide" className="inline-flex items-center gap-1 text-[14px] hover:underline mt-3" style={{ color: accent }}>
                Full Three-Way Comparison Guide →
              </Link>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 05 — BUY */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get Semaglutide</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Semaglutide</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Pharmaceutical-grade lyophilized powder. Certificate of analysis verified. The most clinically proven weight loss peptide available.</p>
              <div className="flex gap-3">
                <a href="/go/semaglutide-6mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/semaglutide-6mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Ready to Upgrade?</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Tirzepatide and Retatrutide offer significantly greater weight loss for those who need more than semaglutide alone.</p>
              <div className="flex gap-3">
                <Link href="/products/tirzepatide-15mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Tirzepatide</Link>
                <Link href="/products/retatrutide-10mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Retatrutide</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — FAQ */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Frequently Asked Questions</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              {
                q: 'Will I regain weight after stopping semaglutide?',
                a: 'Clinical data shows that most weight is regained after discontinuing semaglutide if lifestyle habits have not changed. The compound manages the hormonal environment for weight loss — it does not create permanent metabolic changes on its own. Successful long-term users either continue maintenance dosing (at lower doses), transition to lifestyle protocols developed during treatment, or cycle on and off with structured diet and training protocols during the off period.',
              },
              {
                q: 'Can I use semaglutide while training for body composition?',
                a: 'Yes — and combining semaglutide with structured resistance training produces significantly better body composition outcomes than semaglutide alone. The key is protecting muscle mass through high protein intake and training stimulus. Adding CJC-1295/Ipamorelin to maintain anabolic signaling during the cut is a common strategy among performance-oriented users.',
              },
              {
                q: 'What happens if I miss a weekly dose?',
                a: 'If you miss a semaglutide dose and it has been less than 5 days since the missed injection, administer it as soon as you remember. If it has been more than 5 days, skip the missed dose and resume on your regular schedule. Do not double dose. Semaglutide\'s 7-day half-life provides a significant buffer — missing a single dose does not dramatically reduce efficacy.',
              },
              {
                q: 'Is research-grade semaglutide the same as Ozempic/Wegovy?',
                a: 'Research-grade semaglutide is the same molecule (GLP-1 receptor agonist, same amino acid sequence) as pharmaceutical Ozempic and Wegovy. The difference is in manufacturing oversight, QC standards, and regulatory approval. Research-grade semaglutide from reputable suppliers with third-party certificates of analysis is used extensively in clinical research and by knowledgeable self-administering users.',
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

        {/* 07 — RELATED */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/tirzepatide-vs-semaglutide-vs-retatrutide', label: 'Tirzepatide vs Semaglutide vs Retatrutide', desc: 'The complete three-way comparison — which GLP-1 agonist is right for you' },
              { href: '/retatrutide-complete-guide-results-dosage', label: 'Retatrutide Complete Guide', desc: 'Triple agonist for maximum fat loss — the next step after semaglutide' },
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin', desc: 'Add GH optimization to protect muscle mass during semaglutide fat loss' },
              { href: '/how-to-inject-peptides-beginners-guide', label: 'How to Inject Peptides', desc: 'Reconstitution, needle selection, and weekly injection technique guide' },
              { href: '/body-composition', label: 'Body Composition Protocols', desc: 'Complete guide to peptide protocols for fat loss and recomposition' },
              { href: '/blog', label: 'All Peptide Guides', desc: 'Browse every in-depth protocol and research article' },
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
