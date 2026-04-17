import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'CagriSema (Cagrilintide + Semaglutide) Complete Guide: Dual-Pathway Fat Loss | PeptidesMuscle',
  description: 'CagriSema combines cagrilintide (amylin analogue) with semaglutide (GLP-1 agonist) for additive fat loss through two separate satiety pathways. Full protocol, dosing, and comparison to tirzepatide.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/cagrilintide-semaglutide-complete-guide' },
  keywords: 'cagrilintide semaglutide, CagriSema guide, cagrilintide dosage, cagrisema vs tirzepatide, amylin GLP-1 weight loss, cagrilintide protocol',
  openGraph: {
    title: 'CagriSema: Cagrilintide + Semaglutide Complete Guide | PeptidesMuscle',
    description: 'Two completely different satiety pathways. One injection. How CagriSema outperforms semaglutide alone — and how it compares to tirzepatide.',
    url: 'https://www.peptidesmuscle.com/cagrilintide-semaglutide-complete-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CagriSema Complete Guide | PeptidesMuscle',
    description: 'Dual amylin + GLP-1 satiety — why the combination outperforms semaglutide alone and how to run the protocol.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'CagriSema (Cagrilintide + Semaglutide) Complete Guide: Dual-Pathway Fat Loss',
      datePublished: '2026-04-01',
      dateModified: '2026-04-01',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com', logo: { '@type': 'ImageObject', url: 'https://www.peptidesmuscle.com/max-avatar.png' } },
      author: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent', name: 'LooksMax Agent', url: 'https://www.peptidesmuscle.com/about/editors' },
      reviewedBy: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is CagriSema?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CagriSema is a combination of cagrilintide (a long-acting amylin analogue) and semaglutide (a GLP-1 receptor agonist). The two compounds work through entirely separate receptor systems to suppress appetite through complementary pathways, producing additive fat loss greater than either compound alone. It is currently in Phase 3 clinical trials as a pharmaceutical product.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does cagrilintide work differently from semaglutide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Semaglutide activates GLP-1 receptors in the hypothalamus to reduce hunger and slow gastric emptying. Cagrilintide activates amylin receptors in the brain\'s area postrema — a completely separate neural circuit for satiety. Because they target different receptors in different brain regions, the appetite suppression is additive rather than redundant, producing greater total reduction in caloric intake.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does CagriSema compare to tirzepatide for weight loss?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both CagriSema and tirzepatide represent second-generation improvements over semaglutide monotherapy. Tirzepatide adds GIP receptor activation (a related gut hormone) to GLP-1 signaling. CagriSema adds amylin pathway activation to GLP-1 signaling. They represent two different approaches to the same goal — early clinical data suggests comparable fat loss potential, with Phase 3 CagriSema data still emerging.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who should use CagriSema instead of semaglutide alone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CagriSema is particularly well-suited for individuals who have plateaued on semaglutide monotherapy, those seeking maximum appetite suppression from the outset, or researchers who want to explore dual-pathway satiety. Because the amylin pathway is not desensitized by prior GLP-1 exposure, adding cagrilintide to an established semaglutide protocol consistently produces additional fat loss.',
          },
        },
      ],
    },
  ],
}

const accent = '#e05080'

const mechanisms = [
  {
    title: 'GLP-1 Receptor Activation (Semaglutide)',
    body: 'Semaglutide activates GLP-1 receptors in the hypothalamus — the brain\'s primary hunger-regulation center. This suppresses appetite, reduces food intake, and slows gastric emptying so meals produce prolonged satiety. The C18 fatty diacid modification extends its half-life to ~7 days, enabling once-weekly dosing.',
  },
  {
    title: 'Amylin Receptor Activation (Cagrilintide)',
    body: 'Cagrilintide activates amylin receptors in the area postrema and the nucleus tractus solitarius — separate brain regions from those targeted by GLP-1 agonists. Amylin is naturally co-secreted with insulin after meals and signals post-meal fullness. Cagrilintide\'s long-acting modification produces sustained inter-meal satiety signals that GLP-1 alone cannot replicate.',
  },
  {
    title: 'Additive Satiety: Two Circuits, One Outcome',
    body: 'Because GLP-1 and amylin receptors are in different neural circuits, activating both simultaneously produces additive — not merely additive — appetite suppression. The result is a lower total caloric intake than either compound achieves alone. This is the core mechanism that drives CagriSema\'s superior fat loss vs. semaglutide monotherapy.',
  },
  {
    title: 'The Plateau-Breaking Effect',
    body: 'Long-term semaglutide use can produce partial GLP-1 receptor accommodation — a gradual reduction in appetite suppression intensity over months. Because cagrilintide targets a completely different receptor, it is unaffected by GLP-1 accommodation. Adding cagrilintide to an established semaglutide protocol consistently restores and enhances total appetite suppression.',
  },
]

const comparison = [
  {
    label: 'CagriSema',
    color: accent,
    weightLoss: '~15.6% (32 wks, Phase 2)',
    mechanism: 'GLP-1 + Amylin',
    receptors: 'GLP-1R + Amylin R',
    dosing: 'Once weekly',
    bestFor: 'Semaglutide plateaus, maximum satiety',
  },
  {
    label: 'Semaglutide',
    color: '#6090ff',
    weightLoss: '14.9% (68 wks, STEP-1)',
    mechanism: 'GLP-1 only',
    receptors: 'GLP-1R',
    dosing: 'Once weekly',
    bestFor: 'First GLP-1 protocol, established safety data',
  },
  {
    label: 'Tirzepatide',
    color: '#a060ff',
    weightLoss: '22.5% (72 wks, SURMOUNT-1)',
    mechanism: 'GLP-1 + GIP',
    receptors: 'GLP-1R + GIPR',
    dosing: 'Once weekly',
    bestFor: 'Maximum fat loss, lean mass preservation',
  },
]

const protocol = [
  {
    phase: 'Weeks 1–4',
    sema: '0.25mg',
    cagri: '0.25mg',
    notes: 'Starting dose for both components. GI side effects are most common during this adaptation phase — slow escalation is essential.',
  },
  {
    phase: 'Weeks 5–8',
    sema: '0.5mg',
    cagri: '0.5mg',
    notes: 'First dose increase. Most users notice appetite suppression strengthening meaningfully here. Weight loss typically begins visibly.',
  },
  {
    phase: 'Weeks 9–16',
    sema: '1.0mg',
    cagri: '1.0mg',
    notes: 'Full therapeutic activity from both pathways begins here. Gastric emptying significantly slowed. Caloric intake reduction most pronounced.',
  },
  {
    phase: 'Weeks 17+',
    sema: '1.7–2.4mg',
    cagri: '1.7–2.4mg',
    notes: 'Maintenance range. The Phase 2 SCALE data generating 15.6% weight loss used 2.4mg of each component. Titrate to tolerance.',
  },
]

export default function CagriSemaGuidePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] opacity-[0.04] top-0 right-0" style={{ background: accent }} />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Dual-Pathway Weight Loss</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            CagriSema:<br />
            <span className="italic" style={{ color: accent }}>Complete Protocol Guide</span>
          </h1>
      <AuthorByline datePublished="2026-04-01" dateModified="2026-04-01" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            Two completely different satiety pathways. One injection. Why cagrilintide + semaglutide outperforms either compound alone — and how to run the protocol.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — WHAT IT IS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What CagriSema Is — and Why It Works</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>CagriSema is the research community's shorthand for the cagrilintide + semaglutide combination — the same dual-compound approach currently in Phase 3 clinical trials by Novo Nordisk. It pairs two compounds that work through entirely different receptor systems: semaglutide activates GLP-1 receptors, cagrilintide activates amylin receptors. They suppress appetite through separate neural circuits simultaneously.</p>
            <p>The logic is straightforward. Semaglutide is already the most effective single-compound weight loss peptide with an established safety record — 14.9% average body weight reduction over 68 weeks in the STEP-1 trial. CagriSema asks: what happens when you add a second, completely separate satiety pathway on top of that? Phase 2 SCALE program data showed 15.6% weight loss at 32 weeks — a shorter timeframe than STEP-1 and one that suggests the combination reaches its effective weight loss faster than semaglutide alone.</p>
            <p>The compound is available as a pre-blended 5mg/5mg vial, providing both cagrilintide and semaglutide in a single reconstituted solution. One injection per week. Both pathways covered simultaneously.</p>
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
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>CagriSema vs. Semaglutide vs. Tirzepatide</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed mb-8">
            <p>Three different approaches to improving on semaglutide monotherapy. Tirzepatide adds GIP receptor activation alongside GLP-1. CagriSema adds amylin receptor activation alongside GLP-1. Both strategies produce more weight loss than semaglutide alone — through different mechanisms.</p>
          </div>
          <div className="pl-10 space-y-4">
            {comparison.map((c, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${c.color}` }}>
                <p className="text-white font-700 text-[15px] mb-3">{c.label}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">AVG WEIGHT LOSS</p>
                    <p className="text-[#aaaabc] text-[13px] font-600">{c.weightLoss}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">MECHANISM</p>
                    <p className="text-[#aaaabc] text-[13px]">{c.mechanism}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">RECEPTORS</p>
                    <p className="text-[#aaaabc] text-[13px]">{c.receptors}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">BEST FOR</p>
                    <p className="text-[#aaaabc] text-[13px]">{c.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pl-10 mt-6">
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">How to Choose</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Start with <Link href="/products/semaglutide-6mg" className="hover:underline" style={{ color: accent }}>semaglutide</Link> if you&apos;re new to GLP-1 protocols — it has the longest safety record and extensive clinical data. Move to CagriSema if you&apos;ve plateaued on semaglutide or want dual-pathway suppression from the start. Choose <Link href="/products/tirzepatide-15mg" className="hover:underline" style={{ color: '#a060ff' }}>tirzepatide</Link> if maximum total fat loss is the primary objective — it currently holds the highest average weight loss data among available compounds.</p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 03 — PROTOCOL */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dose Escalation Protocol</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed mb-6">
            <p>CagriSema requires a slower, more deliberate escalation than semaglutide alone. Activating two satiety pathways simultaneously means GI adaptation takes longer — nausea, reduced appetite, and gastric discomfort are more pronounced if escalation is rushed. The protocol below matches the approach used in the SCALE Phase 2 program.</p>
          </div>
          <div className="pl-10 space-y-4">
            {protocol.map((p, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{p.phase}</p>
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">SEMAGLUTIDE DOSE</p>
                    <p className="text-[#aaaabc] text-[13px] font-600">{p.sema}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">CAGRILINTIDE DOSE</p>
                    <p className="text-[#aaaabc] text-[13px] font-600">{p.cagri}</p>
                  </div>
                </div>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{p.notes}</p>
              </div>
            ))}
          </div>
          <div className="pl-10 mt-6">
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Reconstitution Note</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">
                The pre-blended 5mg/5mg vial contains both compounds in equal concentration. Add 1–2ml of <Link href="/products/bacteriostatic-water-30ml" className="hover:underline" style={{ color: accent }}>bacteriostatic water</Link> per vial. At 1ml, each unit on an insulin syringe delivers 0.05mg of each component — making precise dose escalation straightforward. Inject subcutaneously (abdomen, thigh, or outer arm) once weekly. Rotate injection sites weekly.
              </p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 04 — SIDE EFFECTS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Side Effects & Management</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              {
                effect: 'Nausea & GI Discomfort',
                severity: 'Most Common',
                color: '#d4a043',
                management: 'Eat smaller, more frequent meals. Avoid high-fat meals that further slow gastric emptying. Dose after the evening meal rather than in the morning. If nausea is severe, hold dose escalation at the current level for an additional 2 weeks before increasing.',
              },
              {
                effect: 'Reduced Appetite (Desired Effect)',
                severity: 'Universal',
                color: accent,
                management: 'The primary mechanism — reduced appetite is the intended outcome. Ensure adequate protein intake (1.6–2.2g/kg bodyweight) to preserve lean mass during fat loss. Do not reduce protein even when overall appetite is significantly suppressed.',
              },
              {
                effect: 'Fatigue During Initial Escalation',
                severity: 'Common',
                color: '#6090ff',
                management: 'Typically resolves within 1–2 weeks of each dose increase. Ensure adequate caloric intake — severe restriction combined with dual-pathway appetite suppression can produce excessive energy deficit. Target a 500–750 calorie deficit, not extreme restriction.',
              },
              {
                effect: 'Injection Site Reactions',
                severity: 'Occasional',
                color: '#40c090',
                management: 'Minor redness, swelling, or itching at injection sites is normal. Rotate injection sites weekly. Allow needle insertion at a 45° angle for subcutaneous tissue. If persistent lump develops, allow site to fully recover before re-using.',
              },
            ].map((s, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${s.color}` }}>
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-white font-700 text-[14px]">{s.effect}</p>
                  <span className="tag text-[10px]">{s.severity}</span>
                </div>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{s.management}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 05 — MUSCLE PRESERVATION */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Muscle Preservation During Fat Loss</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>CagriSema&apos;s aggressive appetite suppression creates a significant caloric deficit — and unchecked caloric restriction always carries lean mass loss risk. The solution is stacking CagriSema with a peptide that specifically drives anabolic signaling to offset catabolic risk during fat loss.</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-2 text-white">CJC-1295 + Ipamorelin Stack</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">The most commonly used muscle-preservation addition to GLP-1 protocols. Stimulates pulsatile growth hormone release to maintain nitrogen retention, support protein synthesis, and preferentially drive fat oxidation over muscle catabolism.</p>
                <Link href="/products/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg" className="text-[13px] font-600 hover:underline" style={{ color: accent }}>
                  View CJC-1295 + Ipamorelin →
                </Link>
              </div>
              <div className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-2 text-white">High Protein + Resistance Training</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">Non-negotiable fundamentals. Maintain 1.6–2.2g protein per kg bodyweight daily even when appetite is severely suppressed. Resistance training 3–4x weekly prevents the muscle loss that accompanies any significant caloric deficit.</p>
                <Link href="/stacks/weight-loss" className="text-[13px] font-600 hover:underline" style={{ color: accent }}>
                  Full Weight Loss Stack →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — BUY */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get CagriSema</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Cagrilintide + Semaglutide</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Pre-blended 5mg/5mg vial. Dual amylin + GLP-1 pathway activation in a single weekly injection. Pharmaceutical-grade, COA verified.</p>
              <div className="flex gap-3">
                <a href="/go/cagri-sema-blend-5mg-cagrilintide-5mg-sema-10mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/cagri-sema-blend-5mg-cagrilintide-5mg-sema-10mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Compare GLP-1 Options</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">See semaglutide, tirzepatide, and retatrutide side by side. Find the right compound for your starting point and goals.</p>
              <div className="flex gap-3">
                <Link href="/tirzepatide-vs-semaglutide-vs-retatrutide" className="btn-primary flex-1 justify-center py-3 text-[13px]">Compare →</Link>
                <Link href="/products" className="btn-ghost flex-1 justify-center py-3 text-[13px]">All Peptides</Link>
              </div>
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
                q: 'Can I switch from semaglutide to CagriSema mid-protocol?',
                a: 'Yes — and this is one of CagriSema\'s most common use cases. If you\'ve been running semaglutide for several months and weight loss has plateaued, switching to or adding cagrilintide targets a receptor that has not been desensitized by your existing protocol. Start the combination at a dose matching your current semaglutide dose and follow the escalation schedule from that point.',
              },
              {
                q: 'Do I need to do a loading protocol like with tirzepatide?',
                a: 'No loading phase — CagriSema uses the same slow weekly escalation approach as semaglutide monotherapy. The key difference is that the dual-pathway activation makes GI side effects more pronounced than with semaglutide alone, so holding each dose level for 4 full weeks before increasing (rather than the 2–4 week semaglutide escalation) reduces adaptation discomfort.',
              },
              {
                q: 'What does the cagrilintide component actually add?',
                a: 'Cagrilintide adds amylin receptor activation — a satiety pathway that semaglutide alone never touches. Amylin acts in the area postrema and nucleus tractus solitarius, not the hypothalamic regions targeted by GLP-1. The result is suppression from two independent neural circuits simultaneously. Most users report that the combination produces a qualitatively different kind of fullness — not just reduced hunger, but a persistent inter-meal satiety that makes adherence substantially easier.',
              },
              {
                q: 'Is CagriSema safe for long-term use?',
                a: 'Both component compounds have established safety profiles: semaglutide from years of pharmaceutical use, cagrilintide from the SCALE Phase 2 program. No new safety signals emerged from the combination that were not already known for semaglutide monotherapy. As with all GLP-1-based protocols, appropriate medical oversight and protein intake maintenance are recommended for extended use.',
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

        {/* 08 — RELATED */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/semaglutide-complete-guide', label: 'Semaglutide Complete Guide', desc: 'The GLP-1 foundation — full protocol, STEP trial data, and dose escalation guide' },
              { href: '/tirzepatide-complete-guide', label: 'Tirzepatide Complete Guide', desc: 'Dual GIP+GLP-1 agonist — 22.5% average weight loss in SURMOUNT-1 trials' },
              { href: '/retatrutide-complete-guide-results-dosage', label: 'Retatrutide Complete Guide', desc: 'Triple receptor agonist — the most aggressive fat loss compound currently available' },
              { href: '/tirzepatide-vs-semaglutide-vs-retatrutide', label: 'GLP-1 Comparison Guide', desc: 'Head-to-head comparison of all three leading weight loss compounds' },
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin', desc: 'Add GH optimization to preserve muscle while CagriSema drives fat loss' },
              { href: '/how-to-inject-peptides-beginners-guide', label: 'How to Inject Peptides', desc: 'Reconstitution, injection technique, and bacteriostatic water guide' },
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
