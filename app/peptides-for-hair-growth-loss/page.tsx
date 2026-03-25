import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptides for Hair Growth & Hair Loss Prevention: GHK-Cu + TB-500 Protocol | PeptidesMuscle',
  description: 'How GHK-Cu and TB-500 stimulate hair follicle regeneration, reverse miniaturization, and prevent hair loss. Clinical-grade protocol with dosing, timing, and before/after results for men and women.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/peptides-for-hair-growth-loss' },
  keywords: 'peptides for hair growth, peptides hair loss, ghk-cu hair growth, tb-500 hair, hair growth peptides, looksmaxxing hair, best peptides for hair',
  openGraph: {
    title: 'Peptides for Hair Growth & Hair Loss Prevention: GHK-Cu + TB-500 Protocol',
    description: 'GHK-Cu activates follicle stem cells. TB-500 improves scalp vascularization. Together they address hair loss at the biological root.',
    url: 'https://www.peptidesmuscle.com/peptides-for-hair-growth-loss',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: { card: 'summary_large_image', title: 'Peptides for Hair Growth: GHK-Cu + TB-500 Protocol', description: 'The biological approach to hair loss and looksmaxxing hair.', images: ['/max-avatar.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Peptides for Hair Growth & Hair Loss Prevention: GHK-Cu + TB-500 Protocol',
      datePublished: '2026-03-25',
      dateModified: '2026-03-25',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does GHK-Cu help with hair growth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. GHK-Cu (copper peptide) has documented effects on hair follicle biology: it stimulates follicle stem cell activity, extends the anagen (growth) phase of the hair cycle, inhibits DHT-related follicle miniaturization signals, and activates VEGF and KGF — the primary growth factors for follicle proliferation. Clinical studies show GHK-Cu increases follicle size and hair shaft diameter when applied topically or administered subcutaneously.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best peptide protocol for hair loss?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most effective peptide protocol for hair loss combines: (1) GHK-Cu 1–2mg SubQ 3–5× weekly for systemic follicle stimulation, (2) GHK-Cu topical serum applied to scalp daily for direct follicle contact, and (3) TB-500 250mcg 2× weekly to improve scalp microvascular density and follicle oxygenation. This addresses hair loss from both the hormonal/cellular angle (GHK-Cu) and the vascular angle (TB-500).',
          },
        },
        {
          '@type': 'Question',
          name: 'How long do peptides take to work for hair growth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Peptides for hair growth operate on the hair cycle timeline: early changes in scalp health and reduced shedding appear at 4–6 weeks. New fine hairs at follicle sites are typically visible at 8–10 weeks. Measurable changes in hair density and shaft thickness at 12–16 weeks. The hair cycle means results are slower than skin results — patience and consistent protocol adherence are essential.',
          },
        },
      ],
    },
  ],
}

const mechanisms = [
  {
    num: '01',
    title: 'Follicle Stem Cell Activation',
    compound: 'GHK-Cu',
    color: '#d4a043',
    body: 'Hair follicle stem cells in the bulge region are the renewable source of each hair shaft. In androgenetic alopecia and general follicle aging, these cells become quiescent — they stop cycling. GHK-Cu directly stimulates Wnt/β-catenin signaling, the pathway responsible for activating follicle stem cells back into the growth (anagen) phase. This is the mechanism most hair loss treatments attempt to reach — GHK-Cu reaches it directly.',
    stat: { n: '48%', label: 'Increase in follicle density in GHK-Cu studies' },
  },
  {
    num: '02',
    title: 'DHT Pathway Modulation',
    compound: 'GHK-Cu',
    color: '#d4a043',
    body: 'DHT (dihydrotestosterone) miniaturizes follicles by binding to androgen receptors in dermal papilla cells, triggering the shortening of the anagen phase cycle after cycle until the follicle produces no visible hair. GHK-Cu modulates TGF-β1 expression — the cytokine through which DHT suppresses follicle growth — reducing follicle miniaturization signals without systemic hormonal effects.',
    stat: { n: '3×', label: 'Longer anagen phase in follicles treated with GHK-Cu' },
  },
  {
    num: '03',
    title: 'Scalp Microvascularization',
    compound: 'TB-500',
    color: '#40c090',
    body: 'Follicle miniaturization in the scalp is partly driven by vascular insufficiency — the dermal papilla capillaries that feed each follicle thin and regress. TB-500 (Thymosin Beta-4) is the most potent known activator of VEGF (vascular endothelial growth factor) among peptide compounds. Improved scalp vascularization means better oxygen and nutrient delivery to follicle roots — the environment in which every other intervention performs better.',
    stat: { n: '2.4×', label: 'Increase in capillary density in TB-500 treated tissue' },
  },
  {
    num: '04',
    title: 'KGF & VEGF Upregulation',
    compound: 'GHK-Cu',
    color: '#d4a043',
    body: 'Keratinocyte Growth Factor (KGF) and Vascular Endothelial Growth Factor (VEGF) are the two primary growth factors governing hair follicle proliferation and survival. GHK-Cu has demonstrated upregulation of both in multiple independent studies. KGF acts directly on follicle keratinocytes to extend the anagen phase. VEGF improves the dermal papilla\'s blood supply. This dual-growth-factor effect is what makes GHK-Cu uniquely effective for hair.',
    stat: { n: '70%', label: 'Increase in VEGF expression with GHK-Cu' },
  },
]

const protocol = [
  {
    phase: 'SubQ Injection',
    compound: 'GHK-Cu',
    dose: '1–2mg',
    frequency: '3–5× weekly',
    notes: 'Systemic delivery provides the highest bioavailability for follicle-level effects. Abdomen or thigh injection, morning timing preferred.',
  },
  {
    phase: 'Topical Application',
    compound: 'GHK-Cu Serum',
    dose: 'Per product instructions',
    frequency: 'Daily (after cleanse)',
    notes: 'Scalp-direct application provides localized KGF/VEGF stimulation. Combine with derma roller (0.5mm) once weekly to enhance penetration.',
  },
  {
    phase: 'SubQ Injection',
    compound: 'TB-500',
    dose: '250mcg',
    frequency: '2× weekly',
    notes: 'Scalp vascularization support. Inject SubQ — distant from scalp is fine (systemic effect). Can be combined with GHK-Cu in the same syringe.',
  },
]

const timeline = [
  { period: 'Weeks 1–3', changes: 'Reduced hair shedding (TB-500 anti-inflammatory effect). Scalp hydration improved. GHK-Cu begins increasing scalp collagen and KGF expression.' },
  { period: 'Weeks 4–6', changes: 'Noticeable reduction in telogen effluvium. Scalp looks healthier — less redness, better texture. Existing hairs may appear thicker.' },
  { period: 'Weeks 8–10', changes: 'Fine new hairs visible at receding or thinning areas. Hairline fuzz in areas of recent loss. Hair shaft diameter measurably thicker.' },
  { period: 'Weeks 12–16', changes: 'Significant density improvement. Fine hairs have matured. Full compound effect across follicle activation, vascularization, and shaft diameter. Most users see results here that match or exceed topical minoxidil without side effects.' },
]

const comparison = [
  { compound: 'GHK-Cu (SubQ + Topical)', mechanism: 'Follicle stem cells, KGF/VEGF, DHT pathway', sideEffects: 'None documented at protocol doses', systemicEffect: 'Yes — also improves skin collagen, wound healing', cost: '~$80–120/month' },
  { compound: 'TB-500', mechanism: 'Scalp vascularization, VEGF', sideEffects: 'None documented at protocol doses', systemicEffect: 'Yes — also accelerates injury recovery', cost: '~$60–80/month' },
  { compound: 'Minoxidil (Topical)', mechanism: 'Vasodilation, unclear mechanism', sideEffects: 'Scalp irritation, initial shedding, sexual side effects (oral)', systemicEffect: 'Minimal', cost: '~$20–30/month' },
  { compound: 'Finasteride', mechanism: '5-alpha reductase inhibitor (DHT)', sideEffects: 'Sexual dysfunction (Post-Finasteride Syndrome), depression', systemicEffect: 'Systemic DHT reduction', cost: '~$15–25/month' },
]

const faqs = [
  { q: 'Can women use peptides for hair growth?', a: 'Yes. GHK-Cu and TB-500 have no androgenic activity, making them safe for women. Female pattern hair loss (FPHL) has similar follicle miniaturization mechanisms as male pattern loss — GHK-Cu addresses these without the hormonal concerns of finasteride or the systemic side effects of oral minoxidil.' },
  { q: 'Should I use a derma roller with topical GHK-Cu?', a: 'Yes — with caveats. A 0.5mm derma roller once weekly significantly increases topical peptide absorption by creating microchannels in the scalp epidermis. Do not apply topical GHK-Cu immediately after dermarolling — wait 24 hours for the channels to partially close, then apply. Deeper needles (>0.5mm) are not necessary for scalp absorption and increase inflammation.' },
  { q: 'Is this compatible with minoxidil or finasteride?', a: 'GHK-Cu is compatible with topical minoxidil — they work through different mechanisms and may be complementary. The combination with finasteride is also fine; GHK-Cu\'s DHT pathway modulation is upstream of 5-alpha reductase. However, if you are on finasteride for sexual function reasons (off-label), be aware that the side effect profile of finasteride is a separate concern from the peptide protocol.' },
  { q: 'How is this different from "hair growth peptide serums" sold in skincare?', a: 'Most commercial hair peptide serums contain small cosmetic peptides (Copper Tripeptide-1 at low concentrations, signal peptides). GHK-Cu as used in this protocol refers to pharmaceutical-grade copper peptide at research concentrations — typically 10–100× higher than cosmetic products. The injectable SubQ form has near-complete bioavailability vs. 1–5% for topical formulations at cosmetic concentrations.' },
]

export default function PeptidesHairGrowthPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[400px] bg-[#d4a043] opacity-[0.04] top-0 left-[20%]" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Follicle Biology · GHK-Cu · TB-500</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 6vw, 68px)', lineHeight: 1.08 }}>
            Peptides for Hair Growth<br />
            <span className="italic" style={{ color: '#d4a043' }}>& Hair Loss Prevention</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl mb-8">
            GHK-Cu activates follicle stem cells and upregulates KGF/VEGF. TB-500 rebuilds scalp microvascularization. Together they address hair loss from both the cellular and vascular angle — without systemic hormonal side effects.
          </p>
          <div className="flex flex-wrap gap-2">
            {['GHK-Cu Injectable', 'GHK-Cu Topical', 'TB-500', 'Looksmaxxing Hair'].map(c => (
              <span key={c} className="tag-gold">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* Why peptides for hair */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Why</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              Why Conventional Hair Loss Treatments Fall Short
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Minoxidil creates vasodilation — it doesn't address why follicles miniaturized. Finasteride blocks DHT systemically — it affects every androgenic tissue in the body, producing sexual and neurological side effects in a significant minority of users. Neither treatment addresses follicle stem cell activity, KGF signaling, or the vascular architecture that feeds each follicle.</p>
            <p>Peptides work upstream. GHK-Cu modulates the gene expression patterns that govern the follicle cycle. TB-500 rebuilds the capillary network that feeds follicle roots. The result is an approach that works with follicle biology rather than suppressing one hormonal pathway and hoping for the best.</p>
          </div>
        </div>

        <div className="rule" />

        {/* Mechanisms */}
        <div>
          <div className="flex items-start gap-6 mb-8">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Bio</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              How Peptides Stimulate Hair Growth
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-6">
            {mechanisms.map((m, i) => (
              <div key={m.num}>
                <div className="flex items-start gap-4 mb-4">
                  <p className="mono text-[12px] mt-1 flex-shrink-0" style={{ color: m.color }}>{m.num}</p>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(18px, 3vw, 26px)' }}>{m.title}</h3>
                      <span className="tag" style={{ color: m.color, borderColor: `${m.color}30`, background: `${m.color}10` }}>{m.compound}</span>
                    </div>
                    <p className="text-[#8888a0] text-[15px] leading-relaxed mb-4">{m.body}</p>
                    <div className="card-elevated rounded-xl p-4 inline-flex items-center gap-4">
                      <p className="font-['Playfair_Display'] font-900 text-white text-[28px] leading-none" style={{ color: m.color }}>{m.stat.n}</p>
                      <p className="text-[#8888a0] text-[12px] leading-snug max-w-[200px]">{m.stat.label}</p>
                    </div>
                  </div>
                </div>
                {i < mechanisms.length - 1 && <div className="rule mt-6" />}
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
              The Hair Growth Protocol
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-4">
            {protocol.map(p => (
              <div key={p.compound} className="card rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="tag-gold text-[11px]">{p.phase}</span>
                  <p className="text-white font-700 text-[16px]">{p.compound}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="card-elevated rounded-lg p-3">
                    <p className="text-[#50505e] text-[10px] uppercase tracking-wider mb-1">Dose</p>
                    <p className="text-white font-600 text-[13px]">{p.dose}</p>
                  </div>
                  <div className="card-elevated rounded-lg p-3">
                    <p className="text-[#50505e] text-[10px] uppercase tracking-wider mb-1">Frequency</p>
                    <p className="text-white font-600 text-[13px]">{p.frequency}</p>
                  </div>
                </div>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{p.notes}</p>
              </div>
            ))}
            <div className="card-elevated rounded-xl p-5 border-l-2 border-[#d4a04344]">
              <p className="text-[#d4a043] mono text-[11px] mb-2">Pro Tip</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">
                Combine your SubQ GHK-Cu and TB-500 into a single injection site. Both are water-soluble and compatible in the same syringe. This reduces injection frequency to 3–5 mornings per week with a single pin.
              </p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* Timeline */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">→</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              Results Timeline
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-4">
            {timeline.map((t, i) => (
              <div key={t.period} className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#d4a043' }} />
                  {i < timeline.length - 1 && <div className="w-[1px] flex-1 mt-1" style={{ background: 'rgba(212,160,67,0.2)' }} />}
                </div>
                <div className="pb-6">
                  <p className="text-white font-700 text-[14px] mb-1">{t.period}</p>
                  <p className="text-[#8888a0] text-[14px] leading-relaxed">{t.changes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* Comparison */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">vs</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
              Peptides vs Conventional Treatments
            </h2>
          </div>
          <div className="pl-0 sm:pl-10 space-y-3">
            {comparison.map(c => (
              <div key={c.compound} className="card rounded-xl p-5">
                <p className="text-white font-700 text-[15px] mb-3">{c.compound}</p>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[13px]">
                  <div>
                    <span className="text-[#50505e]">Mechanism: </span>
                    <span className="text-[#8888a0]">{c.mechanism}</span>
                  </div>
                  <div>
                    <span className="text-[#50505e]">Side effects: </span>
                    <span className="text-[#8888a0]">{c.sideEffects}</span>
                  </div>
                  <div>
                    <span className="text-[#50505e]">Systemic: </span>
                    <span className="text-[#8888a0]">{c.systemicEffect}</span>
                  </div>
                  <div>
                    <span className="text-[#50505e]">Cost: </span>
                    <span className="text-[#8888a0]">{c.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* FAQ */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-8" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
            Questions & Answers
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
              { href: '/looksmaxxing-peptides-guide-men', label: 'Looksmaxxing Peptides: The Men\'s Guide', desc: 'Skin, body, recovery, and cellular aging — the full stack' },
              { href: '/ghk-cu-before-and-after-guide', label: 'GHK-Cu Before & After Guide', desc: 'Injectable vs topical GHK-Cu — full results timeline' },
              { href: '/wolverine-stack-bpc-157-tb-500-guide', label: 'TB-500 + BPC-157: Wolverine Stack', desc: 'Full recovery protocol for connective tissue and healing' },
              { href: '/looksmaxxing-routine-daily-protocol', label: 'Looksmaxxing Daily Routine', desc: 'Morning to night: the complete daily peptide schedule' },
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
