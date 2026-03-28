import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IGF-1 LR3: Muscle Growth, Dosing Protocol & Complete Guide | PeptidesMuscle',
  description: 'The complete IGF-1 LR3 guide. How it builds muscle directly at the cellular level, dosing protocol, results timeline, IGF-1 LR3 vs HGH comparison, and the Body Sculptor stack.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/igf-1-lr3-muscle-growth-guide' },
  keywords: 'IGF-1 LR3 guide, IGF-1 LR3 dosage, IGF-1 LR3 muscle growth, IGF-1 LR3 results, IGF-1 LR3 protocol, insulin-like growth factor LR3',
  openGraph: {
    title: 'IGF-1 LR3: Complete Muscle Growth Guide | PeptidesMuscle',
    description: 'How IGF-1 LR3 builds muscle at the cellular level, dosing protocol, results timeline, and the Body Sculptor stack.',
    url: 'https://www.peptidesmuscle.com/igf-1-lr3-muscle-growth-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGF-1 LR3 Complete Guide | PeptidesMuscle',
    description: 'Mechanism, dosing, results timeline, and the complete muscle growth stack with IGF-1 LR3.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'IGF-1 LR3: Muscle Growth, Dosing Protocol & Complete Guide',
      datePublished: '2026-03-28',
      dateModified: '2026-03-28',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is IGF-1 LR3 and how does it build muscle?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'IGF-1 LR3 (Insulin-like Growth Factor-1 Long R3) is a modified form of IGF-1 with significantly extended half-life. It directly activates IGF-1 receptors on muscle cells, stimulating protein synthesis, satellite cell activation (myoblast differentiation), and cellular hyperplasia — the actual creation of new muscle fibers, not just hypertrophy. This distinguishes it from most anabolic compounds that only increase existing fiber size.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the correct IGF-1 LR3 dosage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard IGF-1 LR3 dosage is 20–60mcg per day, administered post-workout via subcutaneous or intramuscular injection. Beginners start at 20–30mcg to assess tolerance. Experienced users run 40–60mcg. IGF-1 LR3 is typically cycled in 4–6 week blocks with equal rest periods due to receptor desensitization.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does IGF-1 LR3 differ from regular IGF-1?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Regular IGF-1 has a very short half-life of approximately 10–20 minutes, limiting its practical utility. IGF-1 LR3 is modified with a 13-amino-acid extension and arginine substitution that reduces its affinity for IGF-binding proteins (IGFBPs), extending its half-life to 20–30 hours. This means a single daily injection maintains effective tissue levels throughout the day.',
          },
        },
        {
          '@type': 'Question',
          name: 'What results can I expect from IGF-1 LR3?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Over a 4–6 week cycle, users typically report 3–5 lbs of lean muscle gain, significantly improved muscle fullness and vascularity, faster recovery between training sessions, and reduced fat accumulation. The hyperplastic effect — new muscle fiber creation — means gains can be more permanent than typical hypertrophy-based gains.',
          },
        },
      ],
    },
  ],
}

const accent = '#6090ff'

const comparison = [
  {
    compound: 'IGF-1 LR3',
    halfLife: '20–30 hours',
    mechanism: 'Direct IGF-1R activation. Hyperplasia (new fiber creation) + hypertrophy.',
    doseFreq: 'Once daily post-workout',
    best: 'Maximum muscle fiber creation. Best lean mass gains.',
    color: accent,
  },
  {
    compound: 'Regular IGF-1',
    halfLife: '10–20 min',
    mechanism: 'Same receptor, but clears too fast for practical systemic use. Better suited for local injection.',
    doseFreq: 'Multiple daily or local injection only',
    best: 'Site-specific lagging muscle injection protocols.',
    color: '#8888a0',
  },
  {
    compound: 'CJC-1295 / Ipamorelin',
    halfLife: 'CJC: ~8 days; Ipam: ~2h',
    mechanism: 'Stimulates pituitary to release GH → liver produces IGF-1 endogenously.',
    doseFreq: '3–5× weekly pre-sleep',
    best: 'Restoring youthful GH pulsatility. GH-downstream effects (sleep, skin, fat loss).',
    color: '#d4a043',
  },
  {
    compound: 'HGH (Exogenous)',
    halfLife: '~3 hours (active)',
    mechanism: 'Exogenous GH directly → IGF-1 production + direct GH receptor action.',
    doseFreq: 'Daily injection',
    best: 'Maximum GH/IGF-1 axis elevation. Superior to peptides in raw effect at higher doses.',
    color: '#a78bfa',
  },
]

const timeline = [
  {
    week: 'Week 1–2',
    muscle: 'Increased muscle fullness within days. Glycogen and cellular water retention in muscle tissue creates a noticeably fuller, harder appearance.',
    recovery: 'Training soreness reduces significantly. Recovery between sessions measurably faster.',
    note: 'The fullness effect begins almost immediately — a sign of active IGF-1R stimulation.',
  },
  {
    week: 'Week 3–4',
    muscle: 'Visible lean mass gains. Satellite cell activation begins producing new muscle fiber precursors. Strength improvements accelerate.',
    recovery: 'Connective tissue adaptations improving. Injury risk during heavy training decreases.',
    note: 'The hyperplastic effect — actual new fiber formation — starts manifesting here.',
  },
  {
    week: 'Week 5–6',
    muscle: 'Peak anabolic effect of the cycle. 3–5 lbs of lean muscle gain typical. Vascularity increases as muscle density improves.',
    recovery: 'Maximum recovery speed. Most users train at higher frequencies than usual.',
    note: 'End cycle here (4–6 week maximum) to prevent receptor desensitization.',
  },
  {
    week: 'Post-Cycle (Week 7+)',
    muscle: 'Gains are largely retained — hyperplastic gains (new fibers) are permanent. Maintain with nutrition and continued training.',
    recovery: 'Normal recovery rates return. Consider CJC-1295/Ipamorelin to maintain GH-axis optimization between IGF-1 LR3 cycles.',
    note: 'Take equal time off before next cycle. 4–6 weeks on / 4–6 weeks off.',
  },
]

export default function Igf1Lr3GuidePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#6090ff] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Muscle Growth Peptide</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            IGF-1 LR3:<br />
            <span className="italic" style={{ color: accent }}>Complete Muscle Growth Guide</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            How IGF-1 LR3 creates new muscle fibers — not just hypertrophy — and why it&apos;s the most direct anabolic peptide available for serious body composition goals.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — MECHANISM */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>How IGF-1 LR3 Builds Muscle</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>IGF-1 LR3 (Insulin-like Growth Factor-1 Long R3) is a modified analogue of IGF-1 — the primary anabolic mediator of growth hormone. Where growth hormone works upstream, IGF-1 LR3 operates at the tissue level: it directly binds IGF-1 receptors on muscle cells, liver, bone, and connective tissue, triggering the downstream signaling cascade responsible for protein synthesis and cellular growth.</p>
            <p>The critical distinction from most anabolic compounds is <em>mechanism</em>. Most anabolics drive hypertrophy — enlarging existing muscle fibers. IGF-1 LR3 activates satellite cells, the muscle stem cells responsible for creating new muscle fibers (hyperplasia). This means the muscle fiber count itself can increase — a more permanent structural change than simple fiber enlargement, and the reason advanced athletes value IGF-1 LR3 for breaking through genetic plateaus.</p>
            <p>The LR3 modification extends IGF-1&apos;s native half-life from roughly 10 minutes to 20–30 hours by reducing binding affinity to IGF-Binding Proteins (IGFBPs), which normally sequester IGF-1 in plasma and limit its tissue-level activity. A single daily injection maintains effective serum concentrations throughout the day.</p>

            <div className="grid sm:grid-cols-3 gap-4 mt-2">
              {[
                { title: 'Satellite Cell Activation', body: 'Activates quiescent muscle stem cells to differentiate into new myofibers — actual hyperplasia, not just hypertrophy.' },
                { title: 'mTOR Pathway', body: 'Potently activates the mTOR signaling pathway — the master regulator of muscle protein synthesis.' },
                { title: 'Anti-Catabolic', body: 'Inhibits muscle protein breakdown (proteolysis), preserving lean tissue even in caloric deficit.' },
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

        {/* 02 — COMPARISON */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>IGF-1 LR3 vs HGH vs CJC-1295</h2>
          </div>
          <div className="pl-10 space-y-3">
            {comparison.map((c, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${c.color}` }}>
                <p className="text-white font-700 text-[15px] mb-2">{c.compound}</p>
                <div className="grid sm:grid-cols-3 gap-3 mb-2">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">HALF-LIFE</p>
                    <p className="text-[#aaaabc] text-[12px]">{c.halfLife}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">MECHANISM</p>
                    <p className="text-[#aaaabc] text-[12px]">{c.mechanism}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">BEST FOR</p>
                    <p className="text-[#aaaabc] text-[12px]">{c.best}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="card rounded-xl p-4 mt-2">
              <p className="text-white font-600 text-[14px] mb-2">The Stack Approach</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Most serious body composition protocols use CJC-1295/Ipamorelin as the base (restoring GH pulsatility year-round), then layer IGF-1 LR3 in 4–6 week cycles for maximum anabolic windows. CJC-1295 + Ipamorelin keeps the GH/IGF-1 axis optimized; IGF-1 LR3 adds a direct, supraphysiological hit to muscle tissue during concentrated growth phases.</p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 03 — TIMELINE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Results Timeline</h2>
          </div>
          <div className="pl-10 space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{t.week}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-2">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">MUSCLE / BODY COMPOSITION</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.muscle}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">RECOVERY / PERFORMANCE</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.recovery}</p>
                  </div>
                </div>
                <p className="text-[#50505e] text-[12px] italic">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 04 — PROTOCOL */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dosing Protocol</h2>
          </div>
          <div className="pl-10 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Beginner Dose', val: '20–30mcg/day', note: 'Start here to assess individual response. IGF-1 LR3 is potent — begin conservatively.' },
                { label: 'Intermediate / Advanced', val: '40–60mcg/day', note: 'Standard performance dose. Most research and user data is in this range.' },
                { label: 'Timing', val: 'Post-workout (within 30 min)', note: 'Post-workout is optimal — muscle cells are maximally primed for IGF-1R stimulation when nutrient uptake pathways are active.' },
                { label: 'Injection Route', val: 'SubQ or IM', note: 'Subcutaneous abdominal injection for systemic effects. Intramuscular into the worked muscle for site-enhancement protocols.' },
                { label: 'Cycle Length', val: '4–6 weeks on / 4–6 weeks off', note: 'Cycle strictly. IGF-1 receptors desensitize with chronic stimulation — equal rest periods restore receptor sensitivity.' },
                { label: 'Reconstitution', val: 'Bacteriostatic water, 1–2ml per vial', note: 'Use acetic acid (0.1%) for reconstitution if specified by manufacturer. Store reconstituted solution refrigerated for up to 21 days.' },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <p className="text-white font-600 text-[13px] mb-1">{item.label}</p>
                  <p className="font-700 text-[15px] mb-1" style={{ color: accent }}>{item.val}</p>
                  <p className="text-[#8888a0] text-[12px] leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="card rounded-xl p-5 mt-2">
              <p className="text-white font-600 text-[14px] mb-2">Important: Hypoglycemia Risk</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">IGF-1 LR3 has insulin-like activity and can lower blood glucose. Always inject post-workout when blood sugar is stable, and eat a carbohydrate-containing meal or snack immediately after injection. Monitor for signs of hypoglycemia (dizziness, sweating, brain fog) especially when starting. Never inject on an empty stomach.</p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 05 — STACK */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>The Body Sculptor Stack</h2>
          </div>
          <div className="pl-10 space-y-4">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">IGF-1 LR3 is most powerful as part of a comprehensive body recomposition stack. The Body Sculptor combines it with complementary compounds that address fat loss, GH optimization, and recovery simultaneously.</p>
            {[
              { name: 'IGF-1 LR3', role: 'Direct anabolic — hyperplasia + hypertrophy', dose: '40–60mcg post-workout, 4–6 week cycles', href: '/products/igf-1-lr3', color: accent },
              { name: 'CJC-1295 / Ipamorelin', role: 'GH pulsatility restoration — base layer', dose: '100mcg/100mcg, 3–5× weekly pre-sleep', href: '/products/cjc-1295-ipamorelin', color: '#d4a043' },
              { name: 'Retatrutide', role: 'Triple agonist fat loss — body recomposition', dose: 'Per titration schedule', href: '/products/retatrutide', color: '#a78bfa' },
            ].map((c, i) => (
              <div key={i} className="card-elevated rounded-xl p-5 flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-white font-700 text-[15px]">{c.name}</p>
                  <p className="text-[12px] mt-0.5" style={{ color: c.color }}>{c.role}</p>
                  <p className="text-[#8888a0] text-[12px] mt-1">{c.dose}</p>
                </div>
                <Link href={c.href} className="btn-ghost py-2 px-4 text-[12px]">View →</Link>
              </div>
            ))}
            <Link href="/stacks/body-comp" className="inline-flex items-center gap-2 text-[14px] hover:underline mt-2" style={{ color: accent }}>
              See the full Body Sculptor Stack →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — BUY */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get IGF-1 LR3</h2>
          <div className="card-elevated rounded-2xl p-6">
            <p className="text-white font-700 text-[18px] mb-2">IGF-1 LR3</p>
            <p className="text-[#8888a0] text-[14px] leading-relaxed mb-5">Pharmaceutical-grade lyophilized powder. Certificate of analysis verified. The most potent direct anabolic peptide for lean muscle development.</p>
            <div className="flex gap-3">
              <a href="/go/igf-1-lr3" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
              <Link href="/products/igf-1-lr3" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Full Product Info</Link>
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
                q: 'Does IGF-1 LR3 require PCT (post-cycle therapy)?',
                a: 'IGF-1 LR3 does not suppress endogenous testosterone or other hormonal axes, so traditional PCT (SERMs like Nolvadex) is not required. However, taking equal time off between cycles is important to prevent IGF-1 receptor desensitization. Some advanced users run a brief period of CJC-1295/Ipamorelin after an IGF-1 LR3 cycle to maintain GH-axis optimization during the off period.',
              },
              {
                q: 'Can IGF-1 LR3 cause cancer or tumor growth?',
                a: 'IGF-1 signaling promotes cellular proliferation, and elevated IGF-1 levels have been associated with cancer risk in observational studies. However, these studies examined chronically elevated endogenous IGF-1 over years — not short peptide cycles. The current consensus among researchers is that cycled IGF-1 LR3 at research doses (4–6 weeks on, equal time off) does not create meaningful cancer risk in healthy individuals. Individuals with a personal or family history of hormone-sensitive cancers should not use IGF-1 LR3.',
              },
              {
                q: 'What is site injection with IGF-1 LR3?',
                a: 'Site injection (injecting intramuscularly into the specific muscle worked that day) is a technique used to direct IGF-1 LR3\'s effects to a lagging body part. The theory is that locally elevated IGF-1 concentrations in the injected muscle drive satellite cell activation specifically in that area. Evidence for this approach is largely anecdotal but widely used in competitive bodybuilding contexts.',
              },
              {
                q: 'Can women use IGF-1 LR3?',
                a: 'Yes — IGF-1 LR3 is used by women for lean muscle development and body recomposition. Women are typically more sensitive to the compound and should start at 10–20mcg daily. The same cycling protocol applies (4–6 weeks on, equal time off). Unlike anabolic steroids, IGF-1 LR3 does not cause virilization at research doses.',
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
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin', desc: 'The GH base layer that complements IGF-1 LR3 for complete GH-axis optimization' },
              { href: '/retatrutide-body-recomposition-looksmaxxing', label: 'Retatrutide Body Recomposition', desc: 'Stack IGF-1 LR3 with the most potent fat loss peptide for maximum recomposition' },
              { href: '/how-to-inject-peptides-beginners-guide', label: 'How to Inject Peptides', desc: 'Reconstitution, needle selection, and injection technique guide' },
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'How to combine IGF-1 LR3 with other compounds for synergistic effects' },
              { href: '/body-composition', label: 'Body Composition Overview', desc: 'The complete guide to peptide protocols for fat loss and lean muscle gain' },
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
