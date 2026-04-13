import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bacteriostatic Water: How to Reconstitute Peptides Safely | Complete Guide | PeptidesMuscle',
  description: 'How to reconstitute any injectable peptide using bacteriostatic water — reconstitution math, concentration calculations, sterile technique, storage guidelines, and why bacteriostatic water is non-negotiable.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/bacteriostatic-water-peptide-reconstitution-guide' },
  keywords: 'bacteriostatic water reconstitution, how to reconstitute peptides, peptide reconstitution guide, bacteriostatic water dosing, reconstitute semaglutide, reconstitute BPC-157',
  openGraph: {
    title: 'Bacteriostatic Water & Peptide Reconstitution Guide | PeptidesMuscle',
    description: 'The complete reconstitution guide — math, technique, storage, and why bacteriostatic water is the non-negotiable foundation for every injectable peptide protocol.',
    url: 'https://www.peptidesmuscle.com/bacteriostatic-water-peptide-reconstitution-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bacteriostatic Water & Peptide Reconstitution Guide | PeptidesMuscle',
    description: 'Reconstitution math, sterile technique, storage, and why bac water is the non-negotiable foundation for every injectable peptide protocol.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Bacteriostatic Water: How to Reconstitute Peptides Safely — Complete Guide',
      datePublished: '2026-04-01',
      dateModified: '2026-04-01',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why must bacteriostatic water be used instead of plain sterile water?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bacteriostatic water contains 0.9% benzyl alcohol, a preservative that prevents bacterial growth in the vial between uses. Plain sterile water offers no such protection — once opened, it can be contaminated by bacteria from the air, the needle, or the septum. For multi-dose protocols requiring weekly or daily draws from the same vial, bacteriostatic water is the only safe choice.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I calculate the correct reconstitution volume?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Divide the total peptide amount by your desired concentration. For example, a 5mg BPC-157 vial reconstituted with 2ml bacteriostatic water produces a 2.5mg/ml solution. On an insulin syringe with 100 units per ml, each 10-unit mark delivers 0.25mg — making the standard 250mcg dose exactly 10 units. Adding more water lowers concentration; adding less water raises it.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does reconstituted peptide last?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Reconstituted peptide stored refrigerated at 2–8°C with bacteriostatic water maintains stability for up to 28 days. The benzyl alcohol in bacteriostatic water prevents microbial contamination across this window. After 28 days, discard the reconstituted vial and start fresh. Unreconstituted (lyophilized) peptide powder can be frozen for extended storage.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size needle do I need for peptide injection?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For subcutaneous injection, use an insulin syringe with a 29–31 gauge needle, 1/2 inch (12.7mm) length. These are available in 0.3ml (30 unit), 0.5ml (50 unit), and 1ml (100 unit) barrel sizes. The 0.5ml and 1ml sizes are most commonly used for peptide protocols. The fine gauge needle makes subcutaneous injection nearly painless.',
          },
        },
      ],
    },
  ],
}

const accent = '#40c090'

const steps = [
  {
    step: '01',
    title: 'Gather Your Supplies',
    body: 'You need: bacteriostatic water vial, peptide vial (lyophilized powder), insulin syringe (29–31 gauge, 0.5ml or 1ml), alcohol swabs, and a clean surface. Work in a clean, draft-free area. Wash hands thoroughly before beginning.',
  },
  {
    step: '02',
    title: 'Wipe Both Septums',
    body: 'Swab the rubber septum of both the bacteriostatic water vial and the peptide vial with an alcohol wipe. Allow 10–15 seconds for the alcohol to dry before inserting the needle. This step prevents contamination from surface bacteria.',
  },
  {
    step: '03',
    title: 'Draw the Bacteriostatic Water',
    body: 'Insert the insulin syringe needle through the septum of the bacteriostatic water vial. Draw back the plunger to the desired volume — typically 1–2ml for a 5mg peptide vial. Remove the needle from the water vial.',
  },
  {
    step: '04',
    title: 'Inject Into Peptide Vial — Slowly',
    body: 'Insert the needle through the septum of the peptide vial. Direct the needle toward the inner wall of the vial (not directly onto the powder) and inject the water slowly down the glass. This prevents foaming and mechanical degradation of the peptide. Do not inject directly onto the powder cake.',
  },
  {
    step: '05',
    title: 'Dissolve — Do Not Shake',
    body: 'Gently swirl or roll the vial between your palms until the powder is fully dissolved. The solution should become clear. Never shake a peptide vial — agitation can denature the peptide structure. If the solution remains cloudy after 1–2 minutes of gentle swirling, give it additional time.',
  },
  {
    step: '06',
    title: 'Label and Refrigerate',
    body: 'Label the vial with the date of reconstitution and the concentration (mg/ml). Refrigerate at 2–8°C. Use within 28 days. Between draws, always re-wipe the septum with an alcohol swab before each injection.',
  },
]

const concentrations = [
  {
    peptide: 'BPC-157 (5mg vial)',
    water: '2ml',
    concentration: '2.5mg/ml (2,500mcg/ml)',
    dose250: '10 units on insulin syringe',
    dose500: '20 units on insulin syringe',
    color: accent,
  },
  {
    peptide: 'TB-500 (5mg vial)',
    water: '2ml',
    concentration: '2.5mg/ml',
    dose250: 'N/A',
    dose500: '2mg = 80 units',
    color: '#a78bfa',
  },
  {
    peptide: 'Semaglutide (5mg vial)',
    water: '2ml',
    concentration: '2.5mg/ml',
    dose250: '0.25mg = 10 units',
    dose500: '0.5mg = 20 units',
    color: '#6090ff',
  },
  {
    peptide: 'CJC-1295/Ipamorelin (5mg)',
    water: '2ml',
    concentration: '2.5mg/ml',
    dose250: '100mcg each = 4 units',
    dose500: '200mcg each = 8 units',
    color: '#d4a043',
  },
  {
    peptide: 'GHK-Cu (50mg vial)',
    water: '5ml',
    concentration: '10mg/ml',
    dose250: '250mcg = 2.5 units',
    dose500: '500mcg = 5 units',
    color: '#e05080',
  },
]

export default function BacteriostaticWaterGuidePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] opacity-[0.04] top-0 right-0" style={{ background: accent }} />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Peptide Protocol Fundamentals</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            Bacteriostatic Water:<br />
            <span className="italic" style={{ color: accent }}>Complete Reconstitution Guide</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            The non-negotiable foundation for every injectable peptide protocol. How to reconstitute safely, calculate concentrations, maintain sterility, and store correctly — for every compound in your stack.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — WHY BAC WATER */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Why Bacteriostatic Water — Not Plain Sterile Water</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Every lyophilized (freeze-dried) peptide in a research catalog — <Link href="/products/bpc-157" className="hover:underline" style={{ color: accent }}>BPC-157</Link>, <Link href="/products/semaglutide" className="hover:underline" style={{ color: accent }}>semaglutide</Link>, <Link href="/products/tirzepatide" className="hover:underline" style={{ color: accent }}>tirzepatide</Link>, <Link href="/products/cjc-1295-ipamorelin" className="hover:underline" style={{ color: accent }}>CJC-1295/Ipamorelin</Link>, <Link href="/products/ghk-cu" className="hover:underline" style={{ color: accent }}>GHK-Cu</Link> — arrives as a dry powder that must be dissolved before injection. The solvent you choose determines whether the reconstituted solution remains sterile across weeks of multi-dose use.</p>
            <p>Plain sterile water for injection is sterile at the moment of opening. Once the septum is punctured, there is nothing preventing microbial contamination from the needle, air exposure, or handling — each draw from the vial introduces a new contamination risk. For a peptide protocol requiring 14 injections over two weeks from the same vial, this is not acceptable.</p>
            <p>Bacteriostatic water contains 0.9% benzyl alcohol — a bacteriostatic preservative that creates a chemical environment hostile to bacterial growth throughout the vial&apos;s use. This single ingredient is the difference between a vial that stays sterile across 28+ days of multi-dose use and one that poses an infection risk after the second draw.</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[14px] mb-2">Bacteriostatic Water</p>
                <ul className="space-y-2 text-[#8888a0] text-[13px]">
                  <li>✓ 0.9% benzyl alcohol preservative</li>
                  <li>✓ Prevents microbial growth between draws</li>
                  <li>✓ Multi-dose safe for 28+ days refrigerated</li>
                  <li>✓ Pharmaceutical standard for peptide reconstitution</li>
                </ul>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #50505e' }}>
                <p className="text-[#8888a0] font-700 text-[14px] mb-2">Plain Sterile Water</p>
                <ul className="space-y-2 text-[#50505e] text-[13px]">
                  <li>✗ No preservative — single-use only</li>
                  <li>✗ Contamination risk after first draw</li>
                  <li>✗ Not appropriate for multi-dose vials</li>
                  <li>✗ Use only if entire vial will be used in one session</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 02 — STEP-BY-STEP */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Step-by-Step Reconstitution</h2>
          </div>
          <div className="pl-10 space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="card rounded-xl p-5 flex gap-4">
                <p className="mono text-[11px] flex-shrink-0 mt-0.5" style={{ color: accent }}>{s.step}</p>
                <div>
                  <p className="text-white font-600 text-[14px] mb-1">{s.title}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 03 — CONCENTRATION MATH */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Concentration Math: Getting Your Dose Right</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed mb-8">
            <p>The volume of bacteriostatic water you add determines the concentration of the reconstituted solution — and therefore how many units on your insulin syringe equal your target dose. Getting this calculation right is the most important skill in peptide reconstitution.</p>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-3">The Formula</p>
              <div className="space-y-2 text-[#aaaabc] text-[14px] font-mono">
                <p>Concentration = Peptide amount ÷ Water volume</p>
                <p className="text-[#50505e] text-[12px]">Example: 5mg ÷ 2ml = 2.5mg/ml = 2,500mcg/ml</p>
                <p className="mt-3">Units to draw = Target dose ÷ Concentration × 100</p>
                <p className="text-[#50505e] text-[12px]">Example: 250mcg ÷ 2,500mcg/ml × 100 = 10 units</p>
              </div>
            </div>
          </div>

          <div className="pl-10 space-y-4">
            <p className="text-[#50505e] text-[12px] uppercase tracking-wider mb-4">Common Reconstitution Reference Table</p>
            {concentrations.map((c, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${c.color}` }}>
                <p className="text-white font-700 text-[14px] mb-3">{c.peptide}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">BAC WATER ADDED</p>
                    <p className="text-[#aaaabc] text-[13px] font-600">{c.water}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">CONCENTRATION</p>
                    <p className="text-[#aaaabc] text-[13px]">{c.concentration}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">LOW DOSE</p>
                    <p className="text-[#aaaabc] text-[13px]">{c.dose250}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">STANDARD DOSE</p>
                    <p className="text-[#aaaabc] text-[13px]">{c.dose500}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 04 — STORAGE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Storage & Stability</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              {
                label: 'Unreconstituted Peptide (Lyophilized Powder)',
                color: accent,
                rules: [
                  'Store in refrigerator (2–8°C) for short-term — up to 6–12 months',
                  'Freeze at –20°C for long-term storage — 12–24 months or longer',
                  'Keep away from light and moisture — never store in bathroom or near heat sources',
                  'Do not freeze–thaw repeatedly — repeated temperature cycling degrades peptide bonds',
                ],
              },
              {
                label: 'Reconstituted Solution (After Adding Bacteriostatic Water)',
                color: '#d4a043',
                rules: [
                  'Refrigerate immediately after reconstitution at 2–8°C',
                  'Use within 28 days — benzyl alcohol maintains sterility across this window',
                  'Never freeze reconstituted peptide — freezing can damage the dissolved structure',
                  'Label with reconstitution date — discard after 28 days regardless of remaining volume',
                ],
              },
              {
                label: 'Bacteriostatic Water Vial (Before and During Use)',
                color: '#6090ff',
                rules: [
                  'Store at room temperature before opening — refrigeration after opening is preferred',
                  'Multi-dose safe: the 10ml vial can be drawn from repeatedly across weeks',
                  'Wipe septum with alcohol before every draw — including from the water vial itself',
                  'Discard if solution becomes cloudy or particulate matter is visible',
                ],
              },
            ].map((s, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${s.color}` }}>
                <p className="text-white font-700 text-[14px] mb-3">{s.label}</p>
                <ul className="space-y-2">
                  {s.rules.map((r, j) => (
                    <li key={j} className="text-[#8888a0] text-[13px] leading-relaxed flex gap-2">
                      <span style={{ color: s.color }} className="flex-shrink-0">→</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 05 — EQUIPMENT */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Equipment Checklist</h2>
          </div>
          <div className="pl-10">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { item: 'Bacteriostatic Water 10ml', desc: 'One vial per 1–2 peptide vials depending on protocol. Required for every injectable peptide.', essential: true },
                { item: 'Insulin Syringes (29–31g)', desc: '0.5ml or 1ml barrel. The 0.5ml is easier to read for small doses; 1ml works for most protocols.', essential: true },
                { item: 'Alcohol Wipes', desc: 'For wiping vial septums before every draw. Use individually packaged swabs for sterility.', essential: true },
                { item: 'Sharps Container', desc: 'For safe disposal of used needles. Required for safe peptide protocol management.', essential: true },
                { item: 'Permanent Marker', desc: 'Label reconstituted vials with date and concentration immediately after reconstitution.', essential: false },
                { item: 'Refrigerator Space', desc: 'Dedicated shelf or drawer for reconstituted peptides. Do not store near raw meats or foods that generate ethylene gas.', essential: false },
              ].map((e, i) => (
                <div key={i} className="card rounded-xl p-4 flex gap-3">
                  <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: e.essential ? accent : '#50505e' }} />
                  <div>
                    <p className="text-white font-600 text-[13px] mb-1">{e.item} {e.essential && <span className="text-[10px] ml-1" style={{ color: accent }}>Essential</span>}</p>
                    <p className="text-[#8888a0] text-[12px] leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — BUY */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get Bacteriostatic Water</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Bacteriostatic Water 10ml</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Pharmaceutical-grade 0.9% benzyl alcohol solution. Sterile, pyrogen-tested, compatible with every lyophilized peptide in the catalog. Add one to every order.</p>
              <div className="flex gap-3">
                <a href="/go/bacteriostatic-water" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/bacteriostatic-water" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Ready to Start a Protocol?</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Browse the full peptide catalog — every product includes reconstitution and dosing guidance for the protocol you&apos;re running.</p>
              <div className="flex gap-3">
                <Link href="/products" className="btn-primary flex-1 justify-center py-3 text-[13px]">All Peptides →</Link>
                <Link href="/stacks" className="btn-ghost flex-1 justify-center py-3 text-[13px]">View Stacks</Link>
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
                q: 'Can I use the same bacteriostatic water vial for multiple peptides?',
                a: 'Yes — the 10ml vial can be used to reconstitute multiple peptide vials sequentially. Always wipe the bacteriostatic water septum with a fresh alcohol swab before each draw. The benzyl alcohol maintains the water\'s sterility across multiple draws. A single 10ml vial is typically sufficient for 3–5 peptide vials depending on reconstitution volumes used.',
              },
              {
                q: 'What happens if I accidentally shake the peptide vial?',
                a: 'Vigorous shaking can disrupt the peptide\'s three-dimensional structure through mechanical agitation — particularly for larger, more complex peptides like GHK-Cu. If you accidentally shook a vial, inspect the solution: if it is clear without visible particles or cloudiness, the peptide is likely intact. Discard if cloudy. For future reconstitutions, tilt the vial and inject water down the inside wall, then swirl gently.',
              },
              {
                q: 'Does adding more bacteriostatic water make the peptide weaker?',
                a: 'Adding more water lowers the concentration per ml but does not degrade the peptide. The total amount of peptide in the vial is unchanged — you simply draw a larger volume to get the same dose. More water means you draw more units per injection. Less water means you draw fewer units. Neither changes potency; only the volume per dose changes.',
              },
              {
                q: 'Is there any peptide that should NOT use bacteriostatic water?',
                a: 'Bacteriostatic water is appropriate for essentially all lyophilized research peptides. The only consideration is that benzyl alcohol can be irritating in very large volumes — but at the standard 1–2ml reconstitution volumes used with insulin syringes, this is not a practical concern. Some researchers prefer sodium chloride 0.9% for certain compounds, but bacteriostatic water remains the standard for multi-dose protocols.',
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
              { href: '/how-to-inject-peptides-beginners-guide', label: 'How to Inject Peptides', desc: 'Complete beginner\'s guide — injection sites, needle selection, and first-injection walkthrough' },
              { href: '/bpc-157-complete-guide', label: 'BPC-157 Protocol Guide', desc: 'The most versatile healing peptide — reconstitution, dosing, and injury-specific protocols' },
              { href: '/semaglutide-complete-guide', label: 'Semaglutide Complete Guide', desc: 'GLP-1 fat loss protocol — reconstitution, dosing titration, and STEP trial data' },
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin', desc: 'GH optimization stack — reconstitution guide and week-by-week results timeline' },
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'How to combine multiple peptides safely — timing, compatibility, and protocol design' },
              { href: '/blog', label: 'All Peptide Guides', desc: 'Browse every protocol guide and research article in the catalog' },
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
