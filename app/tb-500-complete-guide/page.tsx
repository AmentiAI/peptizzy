import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TB-500 Complete Guide: Dosing, Results, Injury Protocols & Science | PeptidesMuscle',
  description: 'The definitive TB-500 (Thymosin Beta-4) guide. Mechanism of action, systemic tissue regeneration, injury-specific dosing protocols for muscle, tendon, nerve, and cardiovascular tissue, week-by-week results timeline, and the Wolverine Stack.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/tb-500-complete-guide' },
  keywords: 'TB-500 guide, TB-500 dosage, TB-500 results, TB-500 Thymosin Beta-4, TB-500 healing, TB-500 protocol, TB-500 muscle repair, TB-500 tendon, TB-500 loading dose',
  openGraph: {
    title: 'TB-500 Complete Guide: Dosing, Protocols & Results | PeptidesMuscle',
    description: 'Systemic tissue regeneration, dosing guide, results timeline, and the science behind the most powerful body-wide healing peptide.',
    url: 'https://www.peptidesmuscle.com/tb-500-complete-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TB-500 Complete Guide | PeptidesMuscle',
    description: 'Systemic tissue regeneration, results timeline, and the science behind the most powerful body-wide healing peptide.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'TB-500 Complete Guide: Dosing, Results, Injury Protocols & Science',
      datePublished: '2026-03-29',
      dateModified: '2026-03-29',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is TB-500 and how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TB-500 is a synthetic analogue of Thymosin Beta-4, a naturally occurring 43-amino acid peptide found throughout the body. Its primary mechanism is actin sequestration — it binds G-actin monomers to regulate the actin/G-actin equilibrium, which promotes cell migration, differentiation, and tissue repair. Unlike locally-acting peptides, TB-500 distributes systemically via the bloodstream, meaning a single injection can stimulate healing throughout the entire body simultaneously.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the correct TB-500 dosage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The standard TB-500 protocol consists of a loading phase and a maintenance phase. During the loading phase (weeks 1–6), dose 2–5mg twice weekly for a total of 4–10mg per week. During the maintenance phase (weeks 7+), reduce to 2mg once weekly. The loading phase rapidly saturates tissues and establishes elevated systemic Thymosin Beta-4 levels. Maintenance dosing sustains those levels during ongoing repair.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does TB-500 take to work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most users notice improved range of motion and reduced inflammation within the first two weeks of the loading phase. Significant tissue repair — muscle, tendon, ligament — becomes apparent between weeks 3 and 6. Neural healing and flexibility improvements continue to develop through weeks 8–12. TB-500 is notably faster-acting than many recovery peptides due to its systemic distribution mechanism.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can TB-500 be stacked with BPC-157?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — TB-500 and BPC-157 are widely regarded as the most synergistic healing peptide combination available. Their mechanisms complement each other precisely: BPC-157 acts locally at the injury site through angiogenesis and growth factor receptor upregulation, while TB-500 works systemically through actin regulation and cell migration. Together they form the Wolverine Stack, providing both targeted local repair and body-wide tissue regeneration simultaneously.',
          },
        },
      ],
    },
  ],
}

const accent = '#a78bfa'

const mechanisms = [
  {
    title: 'Actin Sequestration & Cell Migration',
    body: 'TB-500\'s defining mechanism is its ability to bind G-actin monomers — the individual building blocks of actin filaments. By regulating the G-actin/F-actin equilibrium, TB-500 promotes the kind of dynamic cytoskeletal remodeling that enables cells to migrate toward injury sites. This cell migration is the fundamental prerequisite for tissue repair: without it, the right repair cells simply never arrive at damaged tissue.',
  },
  {
    title: 'Systemic Distribution via Bloodstream',
    body: 'Unlike BPC-157, which exerts its most potent effects locally at or near the injection site, TB-500 distributes throughout the body via the bloodstream after a single injection. This systemic reach means TB-500 can stimulate healing in multiple tissue beds simultaneously — a property that makes it uniquely valuable for athletes dealing with multiple injury sites, or for anyone seeking comprehensive body-wide recovery optimization.',
  },
  {
    title: 'Anti-Inflammatory Signaling',
    body: 'Thymosin Beta-4 downregulates the NF-κB inflammatory signaling pathway, one of the master regulators of the inflammatory cascade. By reducing NF-κB activity, TB-500 blunts the chronic low-grade inflammation that impairs tissue healing in overused joints, tendons, and muscles. This anti-inflammatory action works in parallel with the pro-repair cell migration mechanisms — simultaneously removing what impedes healing while activating what drives it.',
  },
  {
    title: 'Stem Cell Activation & Differentiation',
    body: 'TB-500 promotes stem cell activation and differentiation, particularly in muscle satellite cells and cardiac progenitor cells. This is the mechanism behind its remarkable cardiovascular and neural healing properties. By recruiting and differentiating local stem cell populations, TB-500 enables regeneration of tissue types — including cardiac muscle and peripheral nerve — that have minimal self-repair capacity under normal physiological conditions.',
  },
]

const timeline = [
  {
    week: 'Weeks 1–2',
    musculoskeletal: 'Anti-inflammatory effects activate early. Swelling reduces, range of motion improves. Acute pain diminishes significantly as the inflammatory cascade is modulated.',
    systemic: 'Systemwide G-actin binding begins establishing elevated repair-readiness throughout tissue beds. Users often notice improved flexibility in areas unrelated to a primary injury.',
    note: 'The anti-inflammatory and cell migration signaling mechanisms activate first — structural repair follows.',
  },
  {
    week: 'Weeks 3–4',
    musculoskeletal: 'Measurable improvement in strength and function. Satellite cell activation drives muscle fiber repair. Tendon and ligament fibroblast activity increases with enhanced collagen deposition.',
    systemic: 'Flexibility and range of motion gains become pronounced. Neural healing begins in peripheral tissue. Hair follicle activation may be observed as a secondary effect.',
    note: 'The window where most users report the most dramatic and perceptible improvement in injury function.',
  },
  {
    week: 'Weeks 5–8',
    musculoskeletal: 'Structural tissue remodeling peaks. Collagen cross-linking and fiber alignment improve mechanical strength of healed tendons and ligaments. Chronic injuries show significant regression.',
    systemic: 'Cardiovascular tissue benefits become measurable. Neural conduction improvement in peripheral nerves. Overall body mobility and recovery between training sessions is substantially enhanced.',
    note: 'For acute injuries, this is often the point of full functional recovery. Chronic injuries require the full 12-week cycle.',
  },
  {
    week: 'Weeks 9–12',
    musculoskeletal: 'Maximum regenerative benefit for musculoskeletal tissue. Scar tissue remodeling continues to improve mechanical properties. Pre-injury range of motion and strength largely restored.',
    systemic: 'Full systemic tissue optimization. Long-term anti-fibrotic effects from sustained TB-500 exposure. Transition to maintenance dosing to sustain elevated repair capacity.',
    note: 'Complete the 12-week cycle for chronic, severe, or multi-site injuries. 6–8 weeks often sufficient for acute injuries.',
  },
]

const injuryCards = [
  {
    title: 'Muscle Tears & Strains',
    color: accent,
    icon: '◈',
    body: 'TB-500\'s satellite cell activation makes it exceptionally powerful for muscle repair. Muscle tears — from acute trauma or cumulative overuse — respond rapidly to the cell migration and differentiation cascade TB-500 initiates. The systemic distribution mechanism is particularly valuable here: satellite cells are activated throughout the affected muscle belly, not just at the injection site. Grade I and II muscle strains typically resolve within 4–6 weeks on TB-500. Grade III tears benefit from the full 8–12 week cycle. Users consistently report that muscle tissue healed with TB-500 shows less scar formation and more complete architectural restoration compared to conventional recovery.',
  },
  {
    title: 'Tendon & Ligament Injuries',
    color: '#6090ff',
    icon: '◈',
    body: 'Tendons and ligaments present one of the most challenging healing problems in sports medicine — their poor vascularization severely limits the delivery of repair signals and metabolic substrates. TB-500 addresses this through multiple mechanisms: its anti-inflammatory action reduces the chronic low-grade inflammation that perpetually impairs tendon healing, while cell migration signaling drives tenocyte and ligament fibroblast activity. The result is measurably faster collagen synthesis and superior mechanical strength recovery. TB-500 pairs particularly well with BPC-157 for tendon injuries — BPC-157 drives local angiogenesis (creating new blood vessels into the tendon), while TB-500 provides systemic anti-inflammatory support and cell migration signaling. Together, they address the two main limiting factors in tendon repair.',
  },
  {
    title: 'Peripheral Nerve Regeneration',
    color: '#40c090',
    icon: '◈',
    body: 'One of TB-500\'s most underappreciated properties is its capacity to support peripheral nerve regeneration — a tissue type with notoriously limited self-repair ability. Thymosin Beta-4 has been shown to promote neurite outgrowth, Schwann cell migration, and remyelination of damaged peripheral nerves. This makes TB-500 valuable for a surprisingly broad range of conditions: nerve impingement injuries, peripheral neuropathy, post-surgical nerve damage, and the chronic peripheral nerve dysfunction that develops from long-standing musculoskeletal injuries. Users with chronic nerve pain or numbness from old injuries often report improvement beginning at weeks 3–4, with continued gains through 8–12 weeks. Neural healing is slower than musculoskeletal repair but the improvements, once achieved, tend to be durable.',
  },
  {
    title: 'Cardiovascular Tissue',
    color: '#d4a043',
    icon: '◈',
    body: 'The cardiovascular applications of Thymosin Beta-4 are supported by substantial clinical research. TB-4 promotes cardiac progenitor cell activation and differentiation, endothelial cell migration (essential for vessel repair), and has shown cardioprotective effects in ischemia models. For athletes, this translates to enhanced cardiac tissue resilience, faster recovery from high-intensity training, and improved vascular health. The peptide\'s ability to activate endothelial progenitor cells means it contributes to new capillary formation — improving blood supply to previously ischemic or poorly-perfused tissue beds. This is not a primary use case for most users, but it represents one of the more medically significant properties of the Thymosin Beta-4 system.',
  },
]

export default function Tb500CompletePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#a78bfa] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Recovery & Systemic Regeneration Peptide</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            TB-500:<br />
            <span className="italic" style={{ color: accent }}>Complete Protocol Guide</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            Mechanism, systemic dosing protocol, results timeline, and why TB-500 is the most powerful body-wide healing peptide available — repairing muscle, tendon, nerve, and cardiovascular tissue with a single injection.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — WHAT IT DOES */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What TB-500 Actually Does</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>TB-500 is a synthetic analogue of Thymosin Beta-4 — a naturally occurring 43-amino acid peptide encoded by the TMSB4X gene and found in virtually every cell in the human body. Thymosin Beta-4 was first isolated in the 1960s as part of the thymosin fraction of thymus tissue, and has since become one of the most extensively studied peptides in regenerative medicine. The synthetic TB-500 fragment retains the core biological activity of the full Thymosin Beta-4 molecule while offering improved stability and bioavailability.</p>
            <p>The defining mechanism of TB-500 is actin sequestration. Actin exists in two states inside cells: G-actin (globular, monomeric, soluble) and F-actin (filamentous, polymerized, structural). The balance between these two states governs cytoskeletal dynamics — the cell&apos;s ability to change shape, migrate, and divide. TB-500 binds G-actin monomers with high affinity, regulating this equilibrium in a way that promotes the dynamic cytoskeletal remodeling required for directed cell migration. When repair cells can migrate efficiently toward damaged tissue, healing accelerates dramatically.</p>
            <p>What separates TB-500 from virtually every other healing peptide is its distribution profile. After subcutaneous injection, TB-500 enters systemic circulation and distributes throughout the body — reaching every tissue bed simultaneously. This is in direct contrast to locally-acting peptides like BPC-157, which exert their most concentrated effects at or near the injection site. A single TB-500 injection effectively signals repair processes throughout the entire body. This makes it uniquely valuable for athletes with multiple injury sites, for systemic inflammatory conditions, and for anyone seeking comprehensive regenerative optimization rather than targeted spot treatment.</p>
            <p>Beyond actin regulation, TB-500 modulates the NF-κB inflammatory signaling pathway, promotes stem cell activation and differentiation in muscle and cardiac tissue, supports peripheral nerve regeneration through neurite outgrowth and Schwann cell migration, and stimulates hair follicle stem cells — a secondary effect that users frequently report as an unexpected benefit. The breadth of these mechanisms explains why TB-500 has attracted serious research interest across sports medicine, cardiology, neurology, and dermatology simultaneously.</p>
          </div>

          <div className="pl-10 mt-8 grid sm:grid-cols-2 gap-4">
            {mechanisms.map((m, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-white text-[14px] mb-2" style={{ color: accent }}>{m.title}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 02 — TB-500 VS BPC-157 */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>TB-500 vs BPC-157: How They Differ</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">
              TB-500 and BPC-157 are the two most commonly discussed healing peptides, and they are frequently conflated — but their mechanisms, distribution profiles, and ideal use cases are substantially different. Understanding the distinction is essential for selecting the right peptide for a given injury type, and for understanding why they work so powerfully in combination.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[15px] mb-3">TB-500</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">ORIGIN</p>
                    <p className="text-[#aaaabc] text-[13px]">Synthetic analogue of Thymosin Beta-4, a 43-amino acid peptide. Naturally found throughout the body.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">PRIMARY MECHANISM</p>
                    <p className="text-[#aaaabc] text-[13px]">Actin sequestration → cell migration. Anti-inflammatory via NF-κB. Stem cell activation.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DISTRIBUTION</p>
                    <p className="text-[#aaaabc] text-[13px] font-600" style={{ color: accent }}>Systemic — distributes throughout the entire body via bloodstream.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">STRONGEST FOR</p>
                    <p className="text-[#aaaabc] text-[13px]">Muscle, nerve, cardiovascular, flexibility, multi-site injury, comprehensive recovery.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DOSING FREQUENCY</p>
                    <p className="text-[#aaaabc] text-[13px]">2–5mg twice weekly (loading), 2mg weekly (maintenance).</p>
                  </div>
                </div>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #40c090' }}>
                <p className="text-white font-700 text-[15px] mb-3">BPC-157</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">ORIGIN</p>
                    <p className="text-[#aaaabc] text-[13px]">Synthetic 15-amino acid peptide derived from a protective protein in human gastric juice.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">PRIMARY MECHANISM</p>
                    <p className="text-[#aaaabc] text-[13px]">Angiogenesis. Growth factor receptor upregulation. Nitric oxide system activation.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DISTRIBUTION</p>
                    <p className="text-[#aaaabc] text-[13px] font-600" style={{ color: '#40c090' }}>Local — concentrates effects at or near the injection site.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">STRONGEST FOR</p>
                    <p className="text-[#aaaabc] text-[13px]">Tendon, ligament, GI tract, targeted joint repair, gastric protection.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DOSING FREQUENCY</p>
                    <p className="text-[#aaaabc] text-[13px]">250–500mcg daily (split morning/evening for tendons).</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">The Practical Implication</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">If you have a single, well-defined injury — a specific tendon, a particular ligament, a gut condition — BPC-157 injected locally is often the higher-priority choice. If you have multiple injury sites, systemic inflammation, muscle damage across a training area, or neural healing needs, TB-500 provides coverage that no locally-acting peptide can match. For comprehensive recovery, the most effective approach combines both: local BPC-157 precision plus systemic TB-500 coverage simultaneously.</p>
            </div>
            <Link href="/bpc-157-complete-guide" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
              Read the full BPC-157 Complete Guide →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 03 — RESULTS TIMELINE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Results Timeline</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed mb-6">
            <p>TB-500 follows a characteristic progression pattern that differs from daily-dose peptides like BPC-157. Because it is dosed less frequently but at higher amounts, the loading phase creates a rising tide of systemic Thymosin Beta-4 activity that accumulates over the first four to six weeks before plateauing. Results become progressively more pronounced as each bi-weekly dose builds on the tissue levels established by previous doses.</p>
          </div>
          <div className="pl-10 space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{t.week}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-2">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">MUSCULOSKELETAL</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.musculoskeletal}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">SYSTEMIC / FLEXIBILITY</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.systemic}</p>
                  </div>
                </div>
                <p className="text-[#50505e] text-[12px] italic">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 04 — DOSING PROTOCOL */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dosing Protocol</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>TB-500 uses a two-phase dosing structure — a loading phase to saturate tissues and establish elevated systemic Thymosin Beta-4 levels, followed by a maintenance phase to sustain those levels during ongoing repair. This loading/maintenance structure is different from BPC-157&apos;s daily flat dosing and reflects TB-500&apos;s longer half-life and systemic distribution pharmacokinetics.</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[14px] mb-3">Loading Phase</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DURATION</p>
                    <p className="text-[#aaaabc] text-[13px]">4–6 weeks</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                    <p className="text-[#aaaabc] text-[13px]">2–5mg twice weekly</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">TOTAL WEEKLY</p>
                    <p className="text-[#aaaabc] text-[13px]">4–10mg per week</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">PURPOSE</p>
                    <p className="text-[#aaaabc] text-[13px]">Rapidly saturate tissues with Thymosin Beta-4 analogue. Establish elevated systemic repair-signaling environment.</p>
                  </div>
                </div>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #505070' }}>
                <p className="text-white font-700 text-[14px] mb-3">Maintenance Phase</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DURATION</p>
                    <p className="text-[#aaaabc] text-[13px]">Weeks 7–12 (or ongoing)</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                    <p className="text-[#aaaabc] text-[13px]">2mg once weekly</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">TOTAL WEEKLY</p>
                    <p className="text-[#aaaabc] text-[13px]">2mg per week</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">PURPOSE</p>
                    <p className="text-[#aaaabc] text-[13px]">Sustain elevated tissue levels during ongoing structural repair. Continue healing while reducing total peptide usage.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {[
                { label: 'Reconstitution', val: 'Mix with 1–2ml bacteriostatic water per 5mg vial. Each 0.2ml of solution delivers 0.5mg if mixed with 2ml. Use an insulin syringe (29–31 gauge) for injection.' },
                { label: 'Storage', val: 'Lyophilized powder: refrigerate or freeze. Reconstituted solution: refrigerate, use within 28 days. Do not freeze reconstituted solution. Store unmixed vials frozen for long-term preservation.' },
                { label: 'Injection Site', val: 'Subcutaneous injection anywhere — abdomen, thigh, deltoid. Because TB-500 distributes systemically, injection site proximity to injury does not affect results. Rotate sites between doses.' },
                { label: 'Injection Timing', val: 'Twice-weekly dosing on non-consecutive days (e.g., Monday and Thursday) maintains more consistent plasma levels than back-to-back days. Time of day is not critical for systemic peptides.' },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <p className="text-white font-600 text-[13px] mb-1">{item.label}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.val}</p>
                </div>
              ))}
            </div>

            <div className="card rounded-xl p-5 mt-2">
              <p className="text-white font-600 text-[14px] mb-2">One Injection, Whole-Body Effect</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed mb-3">
                The most practically significant implication of TB-500&apos;s systemic distribution is that injection site selection is irrelevant to therapeutic outcome. Inject in the abdomen, thigh, or anywhere convenient — TB-500 will distribute through the bloodstream to every tissue bed in the body regardless. This is categorically different from BPC-157, where injection location near the injury site is a meaningful clinical variable.
              </p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">
                For athletes managing multiple simultaneous injury sites — a common situation in serious training — this property makes TB-500 especially valuable. A single twice-weekly injection addresses the shoulder, the knee, the hamstring, and the lower back simultaneously. No locally-acting peptide can achieve that breadth of coverage regardless of how many injection sites are used.
              </p>
            </div>
            <Link href="/how-to-inject-peptides-beginners-guide" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
              Complete injection technique guide for beginners →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 05 — INJURY-SPECIFIC APPLICATIONS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Injury-Specific Applications</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed mb-6">
            <p>TB-500&apos;s systemic mechanism makes it broadly applicable across tissue types that other healing peptides cannot reliably reach. The four primary application areas — muscle, tendon/ligament, nerve, and cardiovascular tissue — each benefit from different aspects of the Thymosin Beta-4 mechanism.</p>
          </div>
          <div className="pl-10 space-y-4">
            {injuryCards.map((c, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${c.color}` }}>
                <p className="text-white font-700 text-[15px] mb-3">{c.title}</p>
                <p className="text-[#8888a0] text-[14px] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="pl-10 mt-6">
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Hair Growth — An Unexpected Benefit</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">
                TB-500 users consistently report hair growth stimulation — a secondary effect that is mechanistically well-explained. Thymosin Beta-4 activates hair follicle stem cells, promoting follicle cycling from telogen (resting) to anagen (active growth) phase. This effect is most pronounced in areas of hair thinning where follicles are dormant but still viable. While not TB-500&apos;s primary application, users undergoing healing cycles frequently report improved hair density as a welcome secondary outcome. The effect is systemic — distributed via bloodstream to scalp follicles just as to musculoskeletal tissue.
              </p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — WOLVERINE STACK */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>The Wolverine Stack: TB-500 + BPC-157</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">
              The Wolverine Stack — TB-500 combined with BPC-157 — is the gold standard healing peptide protocol in the performance and biohacking community. The name reflects what users report: an almost comic-book-level acceleration of recovery that seems to resolve injuries faster than seems physiologically possible. The mechanism behind this is not hype — it is the precise complementarity of two distinct repair pathways operating simultaneously.
            </p>
            <p className="text-[#8888a0] text-[16px] leading-relaxed">
              BPC-157 operates locally. It drives angiogenesis — the formation of new blood vessels into injured tissue — which is the rate-limiting factor for tendon and ligament repair. It upregulates growth factor receptors, making injured tissue hyper-responsive to the body&apos;s repair signals. It activates the nitric oxide system for cytoprotection. All of this happens at or near the injection site, delivering concentrated repair signaling to a specific anatomical location.
            </p>
            <p className="text-[#8888a0] text-[16px] leading-relaxed">
              TB-500 operates systemically. It floods the entire body with Thymosin Beta-4 signaling — cell migration, anti-inflammatory modulation, stem cell activation — reaching every tissue bed simultaneously. While BPC-157 is executing precision repair on the primary injury, TB-500 is simultaneously addressing the compensatory injuries, the systemic inflammation, the secondary muscle damage, and the peripheral neural stress that accumulate around a primary injury site over time. These two peptides do not compete or overlap — they address entirely different limiting factors in the healing process.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #40c090' }}>
                <p className="text-white font-700 text-[14px] mb-2">BPC-157 — Local Precision</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">Targeted repair at the injury site. Creates new blood supply. Amplifies growth factor signaling. Ideal for tendons, ligaments, GI tract.</p>
                <p className="text-[#50505e] text-[11px] mb-1">DOSE IN STACK</p>
                <p className="text-[#aaaabc] text-[13px]">250–500mcg daily, injected near injury site</p>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[14px] mb-2">TB-500 — Systemic Coverage</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">Body-wide repair signaling. Cell migration and stem cell activation throughout all tissues. Ideal for muscle, nerve, multi-site injury.</p>
                <p className="text-[#50505e] text-[11px] mb-1">DOSE IN STACK</p>
                <p className="text-[#aaaabc] text-[13px]">2–5mg twice weekly (loading), 2mg weekly (maintenance)</p>
              </div>
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Stack Safety & Interactions</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">TB-500 and BPC-157 have no known negative interactions. They can be injected at the same time (separate syringes, same session) or at different times of day — the combination does not require complex timing management. Both peptides have clean safety profiles with no documented adverse effects at therapeutic doses. Neither affects hormonal axes or requires PCT. They can be run simultaneously for the duration of a full 8–12 week healing cycle.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mt-2">
              {[
                { label: 'Add CJC-1295 + Ipamorelin', desc: 'Growth hormone optimization amplifies the cellular repair environment established by the Wolverine Stack. GH peptides increase IGF-1, which accelerates tissue remodeling.', href: '/products/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg' },
                { label: 'Add GHK-Cu', desc: 'Copper peptide GHK-Cu adds collagen synthesis stimulation, anti-fibrotic remodeling, and skin/connective tissue regeneration to complement TB-500\'s systemic healing.', href: '/products/ghk-cu-50mg' },
                { label: 'Advanced Stacking Guide', desc: 'How to sequence and combine healing peptides for comprehensive recovery optimization across multiple injury types and training goals.', href: '/peptide-stacking-guide' },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="card rounded-xl p-4 group hover:border-[#d4a043]/20 transition-colors">
                  <p className="text-[13px] font-600 mb-1 group-hover:underline" style={{ color: accent }}>{item.label} →</p>
                  <p className="text-[#8888a0] text-[12px] leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>

            <Link href="/wolverine-stack-bpc-157-tb-500-guide" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
              Full Wolverine Stack Protocol — complete dosing guide →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 07 — GET TB-500 */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get TB-500</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">TB-500</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Lyophilized pharmaceutical-grade powder. Certificate of analysis verified. The most powerful systemic healing peptide available for athletes and biohackers.</p>
              <div className="flex gap-3">
                <a href="/go/tb-500-thymosin-beta-4-10mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/tb-500-thymosin-beta-4-10mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Wolverine Stack</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">TB-500 + BPC-157 together. The complete healing protocol for serious recovery optimization — precision local repair combined with systemic regeneration.</p>
              <div className="flex gap-3">
                <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Stack →</a>
                <Link href="/products/bpc-157-10mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">BPC-157 Info</Link>
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
                q: 'Does TB-500 need to be injected near the injury?',
                a: 'No — this is the most common misconception about TB-500. Unlike BPC-157, which benefits from local injection near the injury site, TB-500 distributes systemically via the bloodstream after injection. You can inject anywhere that is convenient — abdomen, thigh, deltoid — and TB-500 will reach every tissue in the body with equal efficiency. Injection site proximity to injury is irrelevant to the therapeutic outcome.',
              },
              {
                q: 'Is TB-500 the same as Thymosin Beta-4?',
                a: 'TB-500 is a synthetic analogue of Thymosin Beta-4 (TB-4), not the full peptide. The synthetic analogue contains the core active sequence of the full 43-amino acid TB-4 molecule and retains its primary biological activity — particularly the actin-binding domain responsible for cell migration promotion. TB-500 offers practical advantages over full-length TB-4 including improved stability and bioavailability, and is the form used in essentially all research and user protocols.',
              },
              {
                q: 'Can TB-500 help with old, chronic injuries?',
                a: 'Yes — TB-500 is frequently used specifically for chronic injuries that have not responded to conventional treatment. By activating cell migration signaling throughout the body and downregulating the chronic NF-κB-driven inflammation that perpetuates old injuries, TB-500 can restart repair processes in tissue that has been in a stalled healing state for months or years. Chronic injuries typically require the full 12-week cycle (6-week loading followed by 6-week maintenance) for maximum benefit. Many users report resolution of injuries they had accepted as permanent.',
              },
              {
                q: 'Does TB-500 require a PCT or cycle break?',
                a: 'TB-500 does not suppress the endocrine system, does not affect testosterone or other hormone production, and does not cause receptor desensitization that would require a post-cycle therapy protocol. There is no physiological reason for a mandatory cycle break from a hormonal standpoint. Standard practice is to run an 8–12 week cycle, take a 4–8 week break before repeating, and use the break period to assess healing outcomes before deciding whether to run another cycle.',
              },
              {
                q: 'What results should I realistically expect from TB-500?',
                a: 'Realistic expectations vary by injury type and severity. For acute muscle strains and soft-tissue injuries, most users experience significant functional improvement within 2–4 weeks and near-complete recovery by 6–8 weeks. For chronic tendon and ligament injuries, meaningful improvement typically emerges at weeks 3–6, with full results requiring 8–12 weeks. Flexibility and range of motion improvements are often reported as early as week 2. Neural healing effects are slower — significant improvement in peripheral nerve symptoms typically takes 6–10 weeks. The results that most surprise users are improvements in tissue quality and flexibility across the entire body, not just at the primary injury site.',
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
              { href: '/wolverine-stack-bpc-157-tb-500-guide', label: 'The Wolverine Stack', desc: 'Full TB-500 + BPC-157 combination protocol with injury-specific dosing and stacking rationale' },
              { href: '/bpc-157-complete-guide', label: 'BPC-157 Complete Guide', desc: 'The complementary healing peptide — local precision repair for tendons, ligaments, and GI tract' },
              { href: '/how-to-inject-peptides-beginners-guide', label: 'How to Inject Peptides', desc: 'Reconstitution, needle selection, injection technique, and storage — complete beginner guide' },
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'How to combine TB-500 with GH peptides, GHK-Cu, and other compounds for maximum recovery' },
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin', desc: 'Add growth hormone optimization to create the ideal hormonal environment for TB-500 healing' },
              { href: '/blog', label: 'All Peptide Guides', desc: 'Browse every in-depth protocol, research article, and results guide on PeptidesMuscle' },
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
