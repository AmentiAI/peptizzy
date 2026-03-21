import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Inject Peptides: Complete Beginner\'s Guide — Reconstitution, Sites & Storage | PeptidesMuscle',
  description: 'Step-by-step guide to injecting peptides. How to reconstitute lyophilized peptides, choose injection sites, select needle gauge, store vials, and avoid common mistakes.',
  alternates: { canonical: 'https://peptidesmuscle.com/how-to-inject-peptides-beginners-guide' },
  keywords: 'how to inject peptides beginners guide, how to reconstitute peptides, subcutaneous peptide injection, peptide injection sites, bacteriostatic water peptides, peptide needle gauge',
  openGraph: { title: 'How to Inject Peptides: Complete Beginner\'s Guide', description: 'Step-by-step: reconstitution, injection sites, needle selection, storage, and common mistakes to avoid.', url: 'https://peptidesmuscle.com/how-to-inject-peptides-beginners-guide', type: 'article', siteName: 'PeptidesMuscle' },
  twitter: { card: 'summary_large_image', title: 'How to Inject Peptides: Complete Beginner\'s Guide', description: 'Reconstitution, sites, needles, storage — everything a first-timer needs.' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: 'How to Inject Peptides: Complete Beginner\'s Guide', datePublished: '2026-03-21', dateModified: '2026-03-21', publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://peptidesmuscle.com' } },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How do you reconstitute lyophilized peptides?', acceptedAnswer: { '@type': 'Answer', text: 'Add bacteriostatic water slowly along the inside wall of the vial — never inject directly onto the powder. Use 1–2mL BAC water per vial depending on your target concentration. Gently swirl, never shake. Allow 5–10 minutes for complete dissolution. The solution should be clear — cloudiness indicates degradation or contamination.' } },
        { '@type': 'Question', name: 'What needle size do I use to inject peptides?', acceptedAnswer: { '@type': 'Answer', text: 'For subcutaneous injection: 29–31 gauge, 0.5 inch (12.7mm) insulin syringe. The fine gauge minimizes discomfort and is appropriate for SubQ tissue depth. Do not use standard 1-inch needles — they will penetrate into muscle tissue rather than the subcutaneous layer.' } },
        { '@type': 'Question', name: 'Where do you inject peptides subcutaneously?', acceptedAnswer: { '@type': 'Answer', text: 'The three standard subcutaneous injection sites are: (1) abdomen — 2 inches from the navel, avoiding the midline; (2) thigh — outer quadrant of the upper thigh; (3) deltoid — fatty tissue on the back of the upper arm. Rotate sites to prevent lipodystrophy from repeated injection at the same spot.' } },
        { '@type': 'Question', name: 'How long do reconstituted peptides last in the fridge?', acceptedAnswer: { '@type': 'Answer', text: 'Reconstituted peptides stored in bacteriostatic water at 2–8°C (standard refrigerator) remain stable for 4–6 weeks. Lyophilized (powder) vials remain stable for 12–24 months at room temperature or longer when frozen. Never freeze reconstituted peptides — this degrades the structure. Keep away from light.' } },
      ],
    },
  ],
}

const steps = [
  {
    num: '01',
    title: 'What You Need Before You Start',
    content: 'Gather all supplies before opening any vial. You need: the peptide vial (lyophilized powder), bacteriostatic water (BAC water — not saline, not plain sterile water), insulin syringes (29–31g, 0.5 inch), alcohol swabs, and a sharps container for disposal. Do not substitute BAC water with other diluents unless specifically indicated — the benzyl alcohol preservative in BAC water is what allows multi-use vials to remain sterile over weeks of use.',
  },
  {
    num: '02',
    title: 'Reconstitution: Step by Step',
    content: 'Clean both vial tops with an alcohol swab and allow to dry completely (30 seconds). Draw the desired volume of BAC water into the syringe. Insert the needle through the rubber stopper at an angle. Inject the BAC water slowly down the inside wall of the vial — never directly onto the powder at high velocity, as this can denature the peptide structure. Remove the syringe. Gently swirl (do not shake) until the powder is fully dissolved. Allow 5–10 minutes if needed. The resulting solution should be completely clear.',
  },
  {
    num: '03',
    title: 'Calculating Your Dose',
    content: 'The concentration of your solution determines your injection volume. Example: a 5mg vial reconstituted with 2mL of BAC water = 2.5mg/mL = 2,500mcg/mL. For a 250mcg dose: 250 ÷ 2,500 = 0.10mL = 10 units on a 100-unit insulin syringe. Write this calculation down before your first injection. A simple ratio: (dose in mcg ÷ total mcg in vial) × total mL = injection volume.',
  },
  {
    num: '04',
    title: 'The Injection: Technique',
    content: 'Choose your injection site (abdomen, thigh, or deltoid). Clean the site with an alcohol swab and wait 30 seconds. Pinch 1–2 inches of skin to create a subcutaneous tent. Insert the needle at 45° (or 90° for very lean individuals with little subcutaneous tissue). Inject slowly over 5–10 seconds. Withdraw smoothly. Apply gentle pressure with a clean swab — do not rub. Dispose of the needle immediately in a sharps container.',
  },
  {
    num: '05',
    title: 'Storage',
    content: 'Lyophilized (unreconstituted) peptides: store at room temperature, away from heat and direct light. Stable for 12–24+ months. Reconstituted peptides: refrigerate at 2–8°C immediately after mixing. Stable for 4–6 weeks with BAC water. Never freeze reconstituted peptides — ice crystals physically damage peptide structure. Keep vials upright. Mark the reconstitution date on each vial.',
  },
]

const mistakes = [
  { mistake: 'Shaking the vial during reconstitution', fix: 'Swirl gently only. Shaking introduces air bubbles and mechanical stress that can break peptide bonds.' },
  { mistake: 'Injecting directly onto powder', fix: 'Always aim BAC water at the glass wall, not the powder. Vigorous direct injection degrades sensitive peptide structures.' },
  { mistake: 'Using saline instead of BAC water', fix: 'Saline has no preservative — a multi-use vial reconstituted with saline becomes contaminated quickly. Use bacteriostatic water exclusively.' },
  { mistake: 'Always injecting the same site', fix: 'Rotate through at least 3–4 sites. Repeated injection at the same spot causes lipodystrophy — visible fat tissue damage under the skin.' },
  { mistake: 'Freezing reconstituted peptide', fix: 'Freeze-thaw cycles destroy peptide integrity. Reconstituted peptides go in the fridge, not the freezer. If you can\'t use a reconstituted vial in 4–6 weeks, reconstitute smaller amounts.' },
  { mistake: 'Not allowing alcohol to dry before injection', fix: 'Wet alcohol on the needle kills the injection site\'s natural microflora asymmetrically. Wait the full 30 seconds.' },
]

export default function HowToInjectPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#40c090] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Beginner Protocol Guide</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            How to Inject Peptides:<br />
            <span className="italic" style={{ color: '#40c090' }}>The Beginner&apos;s Guide</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            Reconstitution, injection technique, site rotation, dose calculation, and storage — everything you need to start your first peptide protocol safely.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Intro</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Why Injection Technique Matters</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Most peptides sold for research purposes are lyophilized — freeze-dried into a powder that must be reconstituted before use. The reconstitution process, injection technique, and storage method all directly affect the bioavailability and stability of the compound. Poor technique wastes expensive peptide and can reduce results significantly.</p>
            <p>Subcutaneous (SubQ) injection is the standard delivery method for peptides. It is simpler than intramuscular injection, uses smaller needles, and is appropriate for all compounds covered on this site. Once you have done it twice, it becomes routine — the barrier is entirely psychological, not technical.</p>
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Steps</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Step-by-Step Protocol</h2>
          </div>
          <div className="pl-10 space-y-4">
            {steps.map(s => (
              <div key={s.num} className="card rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <p className="mono text-[#40c090] text-[13px] flex-shrink-0 mt-0.5">{s.num}</p>
                  <div>
                    <p className="text-white font-700 text-[15px] mb-2">{s.title}</p>
                    <p className="text-[#8888a0] text-[14px] leading-relaxed">{s.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Sites</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Injection Sites</h2>
          </div>
          <div className="pl-10">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { site: 'Abdomen', detail: '2 inches from the navel in any direction. Avoid the midline. The most consistent and accessible site — the standard first choice.', tag: 'Recommended' },
                { site: 'Thigh', detail: 'Outer quadrant of the upper thigh. Easy to access when seated. Good rotation alternative to abdomen.', tag: 'Common' },
                { site: 'Deltoid (Arm)', detail: 'Back of the upper arm, fatty tissue. Harder to self-inject without a mirror. Best used when abdomen and thigh sites need rest.', tag: 'Rotation' },
              ].map(s => (
                <div key={s.site} className="card rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-white font-700 text-[15px]">{s.site}</p>
                    <span className="text-[#40c090] text-[11px] border border-[#40c090]/30 rounded px-2 py-0.5">{s.tag}</span>
                  </div>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{s.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-[#50505e] text-[13px] italic mt-4">Rotate between at least 3 sites. Never inject the same spot on consecutive days.</p>
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Needles</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Needle Selection</h2>
          </div>
          <div className="pl-10">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'For injection', spec: '29–31 gauge, 0.5 inch (12.7mm)', note: 'Standard insulin syringe. The fine gauge means minimal discomfort. These are available at any pharmacy without prescription.' },
                { label: 'For drawing BAC water', spec: '18–21 gauge, 1 inch', note: 'A wider gauge draws liquid faster. Use this for reconstitution, then switch to the fine insulin syringe for injection.' },
              ].map(n => (
                <div key={n.label} className="card rounded-xl p-5">
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-2">{n.label}</p>
                  <p className="text-white font-700 text-[15px] mb-2">{n.spec}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{n.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Mistakes</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Common Mistakes & How to Avoid Them</h2>
          </div>
          <div className="pl-10 space-y-3">
            {mistakes.map(m => (
              <div key={m.mistake} className="card rounded-xl p-4">
                <p className="text-[#e05080] text-[13px] font-600 mb-1">✗ {m.mistake}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.fix}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'Goal-based stacks for fat loss, muscle, healing, and anti-aging' },
              { href: '/wolverine-stack-bpc-157-tb-500-guide', label: 'The Wolverine Stack', desc: 'BPC-157 + TB-500 injury recovery protocol' },
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 Ipamorelin Protocol', desc: 'Dosing schedule, timing, and week-by-week timeline' },
              { href: '/ghk-cu-before-and-after-guide', label: 'GHK-Cu Protocol', desc: 'Injectable vs topical, dosing, and results timeline' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="card rounded-xl p-5 group hover:border-[#40c090]/20 transition-colors">
                <p className="text-[#40c090] text-[13px] font-600 mb-1 group-hover:underline">{r.label} →</p>
                <p className="text-[#8888a0] text-[13px]">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
