import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GHK-Cu Before and After: Injectable vs. Topical Results, Timeline & Anti-Aging Protocol | PeptidesMuscle',
  description: 'GHK-Cu copper peptide before and after results guide. Injectable vs topical comparison, week-by-week results timeline, hair benefits, anti-aging stack, and dosing protocol.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/ghk-cu-before-and-after-guide' },
  keywords: 'GHK-Cu before and after results, ghk-cu injectable vs topical, copper peptide skin results, ghk-cu dosage protocol, ghk-cu hair loss, copper peptide anti-aging',
  openGraph: { title: 'GHK-Cu Before and After: Injectable vs. Topical Results & Timeline', description: 'Injectable vs topical comparison, week-by-week results, hair benefits, and the complete anti-aging stack with GHK-Cu.', url: 'https://www.peptidesmuscle.com/ghk-cu-before-and-after-guide', type: 'article', siteName: 'PeptidesMuscle', images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }] },
  twitter: { card: 'summary_large_image', title: 'GHK-Cu Before and After: Complete Results Guide', description: 'Injectable vs topical, week-by-week timeline, hair benefits, and anti-aging stack.', images: ['/max-avatar.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: 'GHK-Cu Before and After: Injectable vs. Topical Results, Timeline & Protocol', datePublished: '2026-03-21', dateModified: '2026-03-21', publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' } },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How long before GHK-Cu shows before and after results?', acceptedAnswer: { '@type': 'Answer', text: 'Improved skin hydration and early elasticity changes appear within 3–4 weeks of consistent use. Measurable increases in skin density and collagen matrix quality become visible around weeks 6–8. The full structural remodeling — new collagen replacing damaged tissue — takes the complete 8–12 week cycle to reach peak expression.' } },
        { '@type': 'Question', name: 'Is injectable GHK-Cu better than topical for before and after results?', acceptedAnswer: { '@type': 'Answer', text: 'Injectable GHK-Cu produces more significant and consistent before and after results than topical application. Subcutaneous injection delivers the compound to the deeper dermal layers where fibroblasts produce collagen. Topical GHK-Cu works at the epidermal level — useful for surface quality but limited penetration depth. For maximum skin density improvement and collagen architecture changes, injectable is significantly more effective.' } },
        { '@type': 'Question', name: 'Does GHK-Cu help with hair loss?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — GHK-Cu has documented effects on hair follicles. It enlarges the size of hair follicles and stimulates hair growth in research models. The mechanism involves activation of genes related to follicle development and angiogenesis to the scalp. Injectable GHK-Cu may produce more significant hair effects than topical serums due to deeper penetration.' } },
      ],
    },
  ],
}

const AFF = (s: string) => `https://phiogen.is/products/${s}?ref=PEPS`

export default function GhkCuGuidePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#d4a043] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Copper Peptide Results Guide</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            GHK-Cu Before & After:<br />
            <span className="italic" style={{ color: '#d4a043' }}>Injectable vs. Topical</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            Honest timeline, injectable vs. topical comparison, hair benefits, and the complete anti-aging stack built around GHK-Cu.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What GHK-Cu Actually Does</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>GHK-Cu (Glycyl-L-Histidyl-L-Lysine:copper) is a naturally occurring copper complex found in human plasma, saliva, and urine. Its concentration declines with age — from approximately 200 ng/mL at age 20 to 80 ng/mL at age 60 — and this decline correlates directly with the loss of tissue repair capacity that defines visible aging.</p>
            <p>The mechanism is not surface-level. GHK-Cu activates or inhibits over 4,000 genes — including those responsible for collagen synthesis, matrix metalloproteinase (MMP) production, anti-inflammatory signaling, and antioxidant defense. It directly stimulates dermal fibroblasts — the cells that produce collagen and elastin — and simultaneously breaks down damaged, cross-linked collagen to make room for new structural proteins. This dual action (demolish and rebuild) is why GHK-Cu produces measurable structural changes rather than just surface hydration.</p>
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Before & After Results Timeline</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              { week: 'Weeks 1–3', skin: 'Improved hydration, skin feels plumper and more moisturized. Early elasticity changes begin.', hair: 'Minimal visible change. Follicle environment begins to improve.', note: 'Foundational phase — cellular changes precede visible results.' },
              { week: 'Weeks 4–6', skin: 'Noticeable improvement in fine line depth. Skin luminosity increases. Pores appear smaller.', hair: 'Some researchers report reduced shedding and improved scalp condition.', note: 'Most users first notice results in this window.' },
              { week: 'Weeks 7–9', skin: 'Measurable increase in skin firmness and density. Collagen matrix improvements become clearly visible. Hyperpigmentation begins to even.', hair: 'Early new growth may appear along hairline and thinning areas.', note: 'The window where before/after photos become compelling.' },
              { week: 'Weeks 10–12', skin: 'Full structural remodeling. Skin density, thickness, and elasticity at protocol maximum. Fine lines significantly reduced. Characteristic luminous quality of dense collagen.', hair: 'Hair thickness and coverage noticeably improved in consistent users.', note: 'Complete 12-week cycle produces the maximum cumulative benefit.' },
            ].map((t, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="text-[#d4a043] font-700 text-[14px] mb-3">{t.week}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-2">
                  <div><p className="text-[#50505e] text-[11px] mb-1">SKIN</p><p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.skin}</p></div>
                  <div><p className="text-[#50505e] text-[11px] mb-1">HAIR</p><p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.hair}</p></div>
                </div>
                <p className="text-[#50505e] text-[12px] italic">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Injectable vs. Topical: Honest Comparison</h2>
          </div>
          <div className="pl-10 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #d4a043' }}>
                <p className="text-white font-700 text-[15px] mb-3">Injectable GHK-Cu (SubQ)</p>
                <ul className="space-y-2 text-[#8888a0] text-[13px]">
                  <li>✓ Reaches deep dermal layers where fibroblasts live</li>
                  <li>✓ Consistent bioavailability — not limited by skin barrier</li>
                  <li>✓ Documented 121% increase in skin density in research</li>
                  <li>✓ Systemic distribution — benefits all skin tissue</li>
                  <li>✗ Requires injection technique and reconstitution</li>
                </ul>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #6090ff' }}>
                <p className="text-white font-700 text-[15px] mb-3">Topical GHK-Cu Serum</p>
                <ul className="space-y-2 text-[#8888a0] text-[13px]">
                  <li>✓ No injection required</li>
                  <li>✓ Good for epidermal surface quality</li>
                  <li>✓ Easy to use for targeted areas</li>
                  <li>✗ Limited skin penetration — stays near surface</li>
                  <li>✗ Cannot reach deep fibroblast layers</li>
                </ul>
              </div>
            </div>
            <div className="card rounded-xl p-4 mt-4">
              <p className="text-white font-600 text-[14px] mb-2">The Verdict</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Injectable GHK-Cu produces significantly more dramatic before and after results than topical formulations. For structural skin changes — collagen density, skin thickness, elasticity — SubQ injection is the only method that reliably reaches the fibroblast layer. Most serious looksmaxxers use injectable for the structural layer and topical serum for surface refinement and targeted area application.</p>
            </div>
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>The Anti-Aging Stack: GHK-Cu + SNAP-8 + Epithalon</h2>
          </div>
          <div className="pl-10 space-y-3">
            {[
              { name: 'GHK-Cu', role: 'Structural collagen rebuilding — the foundation', dose: '1–2mg SubQ, 3–5× weekly', href: '/products/ghk-cu' },
              { name: 'SNAP-8', role: 'Neuromuscular wrinkle reduction — expression lines', dose: 'Topical 2× daily', href: '/products/snap-8' },
              { name: 'Epithalon', role: 'Telomere lengthening — cellular age reversal', dose: '5–10mg daily × 10–20 days/cycle', href: '/products/epithalon' },
            ].map(c => (
              <div key={c.name} className="card-elevated rounded-xl p-5 flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-white font-700 text-[15px]">{c.name}</p>
                  <p className="text-[#d4a043] text-[12px] mt-0.5">{c.role}</p>
                  <p className="text-[#8888a0] text-[12px] mt-1">{c.dose}</p>
                </div>
                <Link href={c.href} className="btn-ghost py-2 px-4 text-[12px]">View →</Link>
              </div>
            ))}
            <Link href="/stacks/looks-max" className="inline-flex items-center gap-2 text-[#d4a043] text-[14px] hover:underline mt-3">
              See the full Looks Max Stack protocol →
            </Link>
          </div>
        </div>

        <div className="rule" />

        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get GHK-Cu</h2>
          <div className="card-elevated rounded-2xl p-6">
            <p className="text-white font-700 text-[18px] mb-2">GHK-Cu (Injectable)</p>
            <p className="text-[#8888a0] text-[14px] leading-relaxed mb-5">Pharmaceutical-grade lyophilized powder. Certificate of analysis verified. The most clinically studied skin peptide available.</p>
            <div className="flex gap-3">
              <a href="/go/ghk-cu"
                          target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
              <Link href="/products/ghk-cu" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Full Product Info</Link>
            </div>
          </div>
        </div>

        <div className="rule" />

        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/looksmaxxing-routine-daily-protocol', label: 'Looksmaxxing Daily Routine', desc: 'Complete morning-to-night schedule with exact GHK-Cu timing and dosing' },
              { href: '/peptides-for-hair-growth-loss', label: 'Peptides for Hair Growth', desc: 'How GHK-Cu activates follicle stem cells and prevents hair loss' },
              { href: '/snap-8-vs-botox-peptide-alternative', label: 'SNAP-8 vs. Botox', desc: 'The topical peptide that pairs with GHK-Cu for full skin optimization' },
              { href: '/looksmaxxing-peptides-guide-men', label: 'Looksmaxxing Peptides: Men\'s Guide', desc: 'Skin, body, recovery, and cellular aging — the full stack' },
              { href: '/epithalon-anti-aging-telomere-peptide-guide', label: 'Epithalon Anti-Aging Guide', desc: 'Stack with GHK-Cu for the complete anti-aging protocol' },
              { href: '/blog', label: 'All Peptide Guides', desc: 'Browse every in-depth protocol and research article' },
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
