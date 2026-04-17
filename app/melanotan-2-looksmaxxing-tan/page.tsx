import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Melanotan 2 for Looksmaxxing: Tan, Libido & Appetite Guide | PeptidesMuscle',
  description: 'Melanotan 2 (MT-2) for a deep melanin-driven tan, libido enhancement, and appetite suppression. Complete looksmaxxing protocol with dosing, timing, side effects, and tanning results.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/melanotan-2-looksmaxxing-tan' },
  keywords: 'melanotan 2 looksmaxxing, melanotan 2 tan, mt2 protocol, melanotan 2 dosage, melanotan 2 results, tanning peptide looksmaxxing, melanotan 2 before after',
  openGraph: {
    title: 'Melanotan 2 for Looksmaxxing: Tan, Libido & Appetite Control Guide',
    description: 'A melanocortin receptor agonist that drives deep melanin production, enhances libido, and suppresses appetite. The complete MT-2 protocol for looksmaxxing.',
    url: 'https://www.peptidesmuscle.com/melanotan-2-looksmaxxing-tan',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: { card: 'summary_large_image', title: 'Melanotan 2 for Looksmaxxing: Complete MT-2 Guide', description: 'Deep melanin-driven tan, libido boost, and appetite control — the MT-2 protocol.', images: ['/max-avatar.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'Melanotan 2 for Looksmaxxing: Tan, Libido & Appetite Control Guide',
      datePublished: '2026-03-25',
      dateModified: '2026-03-25',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com', logo: { '@type': 'ImageObject', url: 'https://www.peptidesmuscle.com/max-avatar.png' } },
      author: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent', name: 'LooksMax Agent', url: 'https://www.peptidesmuscle.com/about/editors' },
      reviewedBy: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Melanotan 2 do for looksmaxxing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Melanotan 2 (MT-2) activates melanocortin receptors (MC1R and MC4R) to produce three distinct looksmaxxing effects: (1) Deep, even full-body melanin-driven tan without UV required for maintenance, (2) Libido enhancement via MC4R activation (the same receptor targeted by PT-141), and (3) Appetite suppression and modest fat loss via melanocortin signaling in the hypothalamus. The tan effect is the primary looksmaxxing application — a base tan dramatically alters appearance, skin texture visibility, and facial contrast.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you dose Melanotan 2 for a tan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MT-2 tanning protocol: Loading phase — 250mcg SubQ daily for 7–14 days with UV exposure (15–30 min natural sun or tanning bed) to activate melanogenesis. Maintenance phase — 250–500mcg 2–3× weekly, with minimal ongoing UV. Most users reach their target tan depth in 10–14 days of loading and maintain it with 1–2 injections per week. Always start with 100mcg to test sensitivity before increasing to full dose.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the side effects of Melanotan 2?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common side effects at loading doses: nausea (most common, resolves within 60–90 min), facial flushing, spontaneous erections in men (at doses above 500mcg), and increased libido. Side effects are dose-dependent — starting at 100mcg and titrating up significantly reduces nausea. Mole darkening is expected and part of the melanin activation mechanism. Any new, irregularly-shaped mole growth should be evaluated by a dermatologist.',
          },
        },
      ],
    },
  ],
}

const effects = [
  {
    num: '01',
    title: 'Deep Melanin-Driven Tan',
    receptor: 'MC1R',
    color: '#d4a043',
    body: 'MT-2 binds MC1R (melanocortin 1 receptor) on melanocytes — the cells that produce melanin. Unlike UV-driven tanning, which produces eumelanin as a DNA damage response, MT-2 directly upregulates eumelanin production through a separate pathway. The result is a tan that: (a) develops faster than UV-only, (b) is more even across the body, (c) requires less UV exposure to trigger, and (d) is maintained with minimal ongoing UV. For looksmaxxing, a natural-looking tan increases skin contrast, makes muscle definition more visible, and changes facial aesthetics substantially.',
    callout: 'A tan shifts perceived attractiveness by 15–20% in controlled visual studies — more than most other single physical variables.',
  },
  {
    num: '02',
    title: 'Libido & Sexual Function',
    receptor: 'MC4R',
    color: '#a060ff',
    body: 'MT-2 is structurally similar to PT-141 (Bremelanotide) and binds the same MC4R receptor in the hypothalamus responsible for sexual arousal initiation. Unlike phosphodiesterase inhibitors (Viagra, Cialis), MC4R activation works at the CNS level — it initiates the desire and arousal response, not just the vascular response. This makes it effective for both men and women. At loading doses (500mcg+), spontaneous erections are a common and expected side effect in men.',
    callout: 'MC4R activation drives central arousal — the upstream signal that initiates every downstream sexual response.',
  },
  {
    num: '03',
    title: 'Appetite Suppression',
    receptor: 'MC3R / MC4R',
    color: '#40c090',
    body: 'Melanocortin signaling in the hypothalamic arcuate nucleus plays a central role in energy homeostasis — specifically in suppressing appetite via the POMC/AgRP pathway. MT-2 activates MC3R and MC4R in these pathways, producing moderate but clinically meaningful appetite reduction. Users typically report 20–30% reduction in spontaneous hunger, making dietary adherence significantly easier. This is a secondary looksmaxxing benefit but compounds the body composition effects of GH peptides.',
    callout: 'Users report appetite reduction equivalent to mild caloric restriction — without the cravings or hunger typically associated with dieting.',
  },
]

const protocol = {
  loading: [
    { step: 'Day 1', action: 'Test dose: 100mcg SubQ, evening', note: 'Assess sensitivity. Nausea is common at first dose. Take anti-nausea medication (e.g., ondansetron or ginger) 30 min before if desired.' },
    { step: 'Days 2–14', action: '250mcg SubQ, 30–60 min before UV exposure', note: '15–30 min sun or 5–10 min low-pressure tanning bed. MT-2 amplifies UV response — you need less UV than you think.' },
    { step: 'Day 14', action: 'Evaluate tan depth', note: 'Most users reach target by day 10–14. Stop loading when satisfied with color.' },
  ],
  maintenance: [
    { step: 'Ongoing', action: '250–500mcg, 2–3× weekly', note: 'Minimal UV (10–15 min weekly) helps maintain melanin activation. Tan fades gradually without any UV.' },
    { step: 'Summer', action: 'Reduce to 1× weekly', note: 'Natural ambient UV from being outdoors 30+ min daily typically maintains the tan without additional sessions.' },
  ],
}

const sideEffects = [
  { effect: 'Nausea', severity: 'Common', onset: '30–60 min post-injection', management: 'Start at 100mcg, titrate up. Take with food. Anti-nausea aids (ginger, ondansetron) effective.' },
  { effect: 'Facial Flushing', severity: 'Common', onset: '20–40 min post-injection', management: 'Dose-dependent and transient. Reduces significantly after loading phase.' },
  { effect: 'Spontaneous Erections (men)', severity: 'Common at >500mcg', onset: '1–4h post-injection', management: 'Reduce dose if unwanted. At loading doses, time injections for evenings.' },
  { effect: 'Mole Darkening', severity: 'Expected', onset: '1–3 weeks', management: 'Part of melanin activation. Have baseline dermatology check before protocol. Monitor for changes in shape/asymmetry.' },
  { effect: 'Increased Libido', severity: 'Common', onset: 'Days 3–7', management: 'Not a side effect for most users — a primary reason many run MT-2.' },
  { effect: 'Fatigue / Yawning', severity: 'Uncommon', onset: '30–90 min post-injection', management: 'Typically resolves after loading phase. Take injections in evenings if this occurs.' },
]

const stackSynergies = [
  { compound: 'GHK-Cu', synergy: 'GHK-Cu improves skin collagen and texture — a tan over high-quality skin looks dramatically better than a tan over low-density, poorly-textured skin. Run GHK-Cu 4–8 weeks before starting MT-2 for best aesthetic result.' },
  { compound: 'CJC-1295 / Ipamorelin', synergy: 'GH optimization improves skin quality and reduces subcutaneous fat — both make the tan\'s appearance more aesthetic. The appetite suppression from MT-2 supports the leaner body composition from CJC-1295/Ipamorelin.' },
  { compound: 'SNAP-8', synergy: 'MT-2 tan dramatically reduces the visibility of expression lines — a tan provides contrast that naturally obscures fine lines. SNAP-8 reduces them further. Together they address the two primary facial aging signals simultaneously.' },
]

const faqs = [
  { q: 'Do I need UV to tan with Melanotan 2?', a: 'UV catalyzes the initial melanin production that MT-2 triggers — you technically need some UV to "activate" the tan, but far less than conventional tanning. 10–20 minutes of sun or a 5-minute tanning bed session per day during loading is sufficient. After loading, minimal UV (outdoor ambient light) maintains the tan. Completely UV-free use is possible but results in slower, less even tanning.' },
  { q: 'Will Melanotan 2 tan my whole body evenly?', a: 'More evenly than UV-only tanning, yes. UV tanning produces uneven results based on sun exposure patterns — MT-2 upregulates melanogenesis systemically, so areas that receive minimal sun (torso, inner arms) tan relative to their baseline melanin response. Fair-skinned individuals see the most dramatic and uniform change. Very dark-skinned individuals see less dramatic color shift but often notice enhanced "glow" and skin luminosity.' },
  { q: 'How is MT-2 different from a spray tan?', a: 'A spray tan is dihydroxyacetone (DHA) — a chemical that reacts with dead skin cells to produce a surface color. It fades as skin cells shed (7–10 days), looks orange in many skin types, and doesn\'t affect underlying melanin at all. MT-2 produces actual melanin synthesis — the same pigment your skin naturally makes. The result is a more natural color, better skin tone evenness, and UV photoprotection that DHA doesn\'t provide.' },
  { q: 'Is Melanotan 2 the same as PT-141?', a: 'Structurally similar but not identical. PT-141 (Bremelanotide) is a cyclized version of MT-2 specifically developed for sexual dysfunction, removing the tanning effect while preserving the MC4R libido effect. MT-2 produces both tanning and libido effects simultaneously. If the sole goal is sexual function enhancement without the tan, PT-141 is the more targeted compound.' },
]

export default function Melanotan2LooksmaxxingPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] bg-[#d4a043] opacity-[0.04] -top-10 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Melanocortin · Tanning · Libido</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 6vw, 68px)', lineHeight: 1.08 }}>
            Melanotan 2<br />
            <span className="italic" style={{ color: '#d4a043' }}>The Looksmaxxing Tan Protocol</span>
          </h1>
      <AuthorByline datePublished="2026-03-25" dateModified="2026-03-25" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl mb-8">
            A melanocortin receptor agonist with three simultaneous looksmaxxing effects: deep melanin-driven tan, libido enhancement, and appetite suppression. The biology, the protocol, and the results.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Melanotan 2', 'MC1R / MC4R', 'Tanning Peptide', 'Looksmaxxing Stack'].map(c => (
              <span key={c} className="tag-gold">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* What is MT-2 */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">What</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              What Is Melanotan 2?
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Melanotan 2 is a synthetic analog of alpha-melanocyte-stimulating hormone (α-MSH), a naturally occurring peptide that regulates melanin production, energy homeostasis, and sexual function. It was originally developed at the University of Arizona as a potential sunless tanning agent and skin cancer preventative.</p>
            <p>As a broad melanocortin receptor agonist (MC1R, MC3R, MC4R, MC5R), it produces effects beyond skin pigmentation — it is why MT-2 has become one of the most-researched peptides in the looksmaxxing community. The tan effect is the primary draw, but the libido and appetite effects are what make it a genuinely multidimensional compound in a looks optimization stack.</p>
          </div>
        </div>

        <div className="rule" />

        {/* Three effects */}
        <div>
          <div className="flex items-start gap-6 mb-8">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">FX</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              Three Looksmaxxing Effects
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-10">
            {effects.map((e, i) => (
              <div key={e.num}>
                <div className="flex items-start gap-4 mb-4">
                  <p className="mono text-[12px] mt-1 flex-shrink-0" style={{ color: e.color }}>{e.num}</p>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}>{e.title}</h3>
                      <span className="mono text-[11px] px-2 py-1 rounded" style={{ color: e.color, background: `${e.color}12`, border: `1px solid ${e.color}30` }}>{e.receptor}</span>
                    </div>
                    <p className="text-[#8888a0] text-[15px] leading-relaxed mb-4">{e.body}</p>
                    <div className="card-elevated rounded-xl p-4 border-l-2" style={{ borderLeftColor: e.color }}>
                      <p className="text-[#8888a0] text-[13px] leading-relaxed italic">{e.callout}</p>
                    </div>
                  </div>
                </div>
                {i < effects.length - 1 && <div className="rule mt-8" />}
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* Protocol */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Rx</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              The MT-2 Protocol
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-8">
            <div>
              <p className="text-white font-700 text-[15px] mb-4 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] flex-shrink-0" style={{ background: 'rgba(212,160,67,0.15)', border: '1px solid rgba(212,160,67,0.3)', color: '#d4a043' }}>1</span>
                Loading Phase (7–14 Days)
              </p>
              <div className="space-y-3">
                {protocol.loading.map(p => (
                  <div key={p.step} className="card rounded-xl p-4">
                    <p className="text-[#d4a043] mono text-[11px] mb-1">{p.step}</p>
                    <p className="text-white font-600 text-[14px] mb-2">{p.action}</p>
                    <p className="text-[#8888a0] text-[13px] leading-relaxed">{p.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white font-700 text-[15px] mb-4 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] flex-shrink-0" style={{ background: 'rgba(212,160,67,0.15)', border: '1px solid rgba(212,160,67,0.3)', color: '#d4a043' }}>2</span>
                Maintenance Phase
              </p>
              <div className="space-y-3">
                {protocol.maintenance.map(p => (
                  <div key={p.step} className="card rounded-xl p-4">
                    <p className="text-[#d4a043] mono text-[11px] mb-1">{p.step}</p>
                    <p className="text-white font-600 text-[14px] mb-2">{p.action}</p>
                    <p className="text-[#8888a0] text-[13px] leading-relaxed">{p.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* Side Effects */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#e05080] text-[12px] mt-1 flex-shrink-0">SE</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              Side Effects & Management
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-3">
            {sideEffects.map(s => (
              <div key={s.effect} className="card rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <p className="text-white font-700 text-[14px]">{s.effect}</p>
                  <span className="tag text-[11px]">{s.severity}</span>
                  <span className="text-[#50505e] text-[11px]">{s.onset}</span>
                </div>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{s.management}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* Stack Synergies */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">+</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              Stack Synergies
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-4">
            <p className="text-[#8888a0] text-[16px] leading-relaxed mb-5">MT-2 is best run alongside other looksmaxxing peptides — the tan effect compounds significantly with improvements in skin quality and body composition.</p>
            {stackSynergies.map(s => (
              <div key={s.compound} className="card-elevated rounded-xl p-5 border-l-2 border-[#d4a04344]">
                <p className="text-white font-700 text-[15px] mb-2">{s.compound}</p>
                <p className="text-[#8888a0] text-[14px] leading-relaxed">{s.synergy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* FAQ */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-8" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
            Common Questions
          </h2>
          <div className="space-y-0">
            {faqs.map(f => (
              <div key={f.q} className="border-b border-white/[0.06] py-6">
                <p className="text-white font-700 text-[16px] mb-3">{f.q}</p>
                <p className="text-[#8888a0] text-[15px] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* Related */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
            Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/looksmaxxing-peptides-guide-men', label: 'Looksmaxxing Peptides: The Men\'s Guide', desc: 'All four appearance pillars — skin, body, recovery, cellular aging' },
              { href: '/looksmaxxing-routine-daily-protocol', label: 'Looksmaxxing Daily Routine', desc: 'Complete morning-to-night peptide schedule with timings' },
              { href: '/ghk-cu-before-and-after-guide', label: 'GHK-Cu Before & After', desc: 'The skin quality compound that makes the MT-2 tan look its best' },
              { href: '/peptides-for-hair-growth-loss', label: 'Peptides for Hair Growth', desc: 'GHK-Cu and TB-500 for follicle regeneration and hair density' },
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
