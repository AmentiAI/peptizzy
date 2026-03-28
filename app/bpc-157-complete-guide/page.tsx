import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BPC-157 Complete Guide: Dosing, Results, Injury Protocols & Science | PeptidesMuscle',
  description: 'The definitive BPC-157 guide. Mechanism of action, injury-specific dosing protocols for tendons, joints, gut, and muscle, week-by-week results timeline, and the Wolverine Stack combination.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/bpc-157-complete-guide' },
  keywords: 'BPC-157 guide, BPC-157 dosage, BPC-157 results, BPC-157 tendon healing, BPC-157 gut health, BPC-157 protocol, body protection compound',
  openGraph: {
    title: 'BPC-157 Complete Guide: Dosing, Protocols & Results | PeptidesMuscle',
    description: 'Injury-specific protocols, dosing guide, results timeline, and the science behind the most versatile healing peptide.',
    url: 'https://www.peptidesmuscle.com/bpc-157-complete-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 Complete Guide | PeptidesMuscle',
    description: 'Injury-specific protocols, results timeline, and the science behind the most versatile healing peptide.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'BPC-157 Complete Guide: Dosing, Results, Injury Protocols & Science',
      datePublished: '2026-03-28',
      dateModified: '2026-03-28',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is BPC-157 and what does it do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BPC-157 (Body Protection Compound-157) is a 15-amino-acid peptide derived from a protein found in gastric juice. It accelerates healing of tendons, ligaments, muscles, bone, and the gastrointestinal tract by stimulating angiogenesis, upregulating growth factor receptors, and activating the nitric oxide system. It has potent anti-inflammatory and cytoprotective effects.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the correct BPC-157 dosage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The standard BPC-157 dosage is 250–500mcg per day. For localized injuries (tendon, joint, muscle), inject subcutaneously as close to the injury site as safely possible. For systemic effects including gut healing, inject subcutaneously in the abdomen. Split dosing (morning and evening) provides more stable tissue levels than a single daily dose.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does BPC-157 take to work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most users report noticeable pain reduction and improved function within 1–2 weeks. Gut symptoms typically improve within days to a week. Significant structural repair of tendons and ligaments requires 4–8 weeks of consistent use. A complete 8–12 week cycle delivers maximum regenerative benefit for chronic injuries.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can BPC-157 be taken orally?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BPC-157 retains activity when taken orally — a property that makes it uniquely useful for gastrointestinal conditions. Oral BPC-157 reaches the gut lining directly before entering systemic circulation. However, for systemic effects including tendon, joint, and muscle healing, subcutaneous injection provides more reliable bioavailability. For GI-specific conditions, oral administration is an effective primary method.',
          },
        },
      ],
    },
  ],
}

const AFF = (s: string) => `https://apollopeptidesciences.com/product/${s}/?rfsn=9016964.3f1b1e`
const accent = '#40c090'

const mechanisms = [
  {
    title: 'Angiogenesis Activation',
    body: 'BPC-157 powerfully stimulates the formation of new blood vessels — a process called angiogenesis. Injured tissue heals slowly partly because damaged vasculature limits nutrient and oxygen delivery. BPC-157 upregulates VEGF (vascular endothelial growth factor) expression and accelerates capillary growth into the injury site, dramatically increasing the metabolic substrate available for repair.',
  },
  {
    title: 'Growth Factor Receptor Upregulation',
    body: 'Healing requires growth factors — but growth factors are only as effective as the receptors that bind them. BPC-157 upregulates EGF (epidermal growth factor) receptors and other growth factor binding sites, effectively making injured tissue more responsive to the body\'s own repair signals. This amplification effect explains why BPC-157 accelerates healing even without adding exogenous growth factors.',
  },
  {
    title: 'Nitric Oxide System',
    body: 'BPC-157 activates the nitric oxide (NO) pathway, producing vasodilation, reduced inflammatory signaling, and cytoprotective effects throughout the gastrointestinal tract and systemic tissue. This is the primary mechanism behind its remarkable GI protective properties — it essentially creates a protective chemical environment that prevents mucosal damage and accelerates restoration of the gut lining.',
  },
  {
    title: 'Tendon-to-Bone Healing',
    body: 'One of BPC-157\'s most clinically documented properties is acceleration of tendon-to-bone healing. Tendons and ligaments — notoriously slow to repair due to poor vascularization — show significantly faster healing rates with BPC-157 administration. Studies demonstrate increased tendon fibroblast survival, collagen organization, and mechanical strength recovery following BPC-157 treatment.',
  },
]

const timeline = [
  {
    week: 'Days 1–7',
    injury: 'Pain reduction begins, particularly for acute injuries. Anti-inflammatory effect reduces swelling and improves range of motion.',
    gut: 'Gut symptoms — bloating, pain, acid reflux — often improve significantly within the first week.',
    note: 'The anti-inflammatory and cytoprotective effects activate first.',
  },
  {
    week: 'Weeks 2–4',
    injury: 'Measurable improvement in function and mobility. New capillary growth increases nutrient delivery to injury site. Fibroblast activity ramps up.',
    gut: 'Mucosal lining integrity restoring. Leaky gut markers improve. Energy levels typically increase as nutrient absorption improves.',
    note: 'Most users notice the most dramatic functional improvement during this window.',
  },
  {
    week: 'Weeks 5–8',
    injury: 'Structural repair of collagen architecture. Tendon and ligament mechanical strength recovering toward pre-injury levels. Chronic injury sites showing significant regression.',
    gut: 'Substantial restoration of gut lining. Inflammation markers down. Many users report full resolution of GI symptoms.',
    note: 'Structural tissue remodeling peaks here.',
  },
  {
    week: 'Weeks 9–12',
    injury: 'Maximum regenerative benefit. Scar tissue remodeling. Restored range of motion in previously impaired joints. Most chronic injuries fully resolved or dramatically improved.',
    gut: 'Full protocol completion. Protective and regenerative effects maximized for GI tract health.',
    note: 'Complete 12-week cycle for chronic/severe injuries. 8 weeks often sufficient for acute injuries.',
  },
]

const protocols = [
  {
    injury: 'Tendon & Ligament',
    color: accent,
    dose: '250–500mcg daily',
    route: 'SubQ near injury site',
    duration: '8–12 weeks',
    notes: 'Inject as close to the injury as safely possible. Split into morning/evening for tendons. The local injection route delivers higher concentration to the specific tissue.',
  },
  {
    injury: 'Joint (Knee, Shoulder, Hip)',
    color: '#a78bfa',
    dose: '250–500mcg daily',
    route: 'SubQ near joint or abdominal',
    duration: '8–10 weeks',
    notes: 'For joints, periarticular injection (around the joint capsule) is preferred. Avoid intra-articular injection without medical supervision. Abdominal injection provides good systemic coverage.',
  },
  {
    injury: 'Muscle Tears & Strains',
    color: '#6090ff',
    dose: '250–500mcg daily',
    route: 'SubQ near muscle belly',
    duration: '4–8 weeks',
    notes: 'Muscle repairs faster than tendons. Most acute muscle injuries respond within 4–6 weeks. Inject near but not into the muscle belly.',
  },
  {
    injury: 'Gut / GI Tract',
    color: '#d4a043',
    dose: '250mcg twice daily',
    route: 'Oral or SubQ abdominal',
    duration: '4–8 weeks',
    notes: 'BPC-157 is uniquely effective orally for gut conditions. Oral administration reaches the GI lining directly. Subcutaneous abdominal injection is an alternative for those preferring injectable.',
  },
]

export default function Bpc157CompletePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#40c090] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Recovery & Healing Peptide</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            BPC-157:<br />
            <span className="italic" style={{ color: accent }}>Complete Protocol Guide</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            Mechanism, injury-specific dosing, results timeline, and why BPC-157 is the first peptide serious athletes and biohackers reach for when injured.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — WHAT IT DOES */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What BPC-157 Actually Does</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>BPC-157 (Body Protection Compound-157) is a synthetic 15-amino-acid peptide derived from a protective protein found in human gastric juice. The body produces it endogenously in the gut — where it plays a role in maintaining mucosal integrity and protecting tissue from damage. The synthetic version amplifies these effects systemically, making it useful far beyond the GI tract.</p>
            <p>Unlike most recovery compounds that target a single pathway, BPC-157 operates through multiple simultaneous mechanisms: it stimulates new blood vessel formation to injured tissue, upregulates growth factor receptors to amplify the body&apos;s natural repair signals, activates the nitric oxide system for cytoprotection, and directly accelerates fibroblast activity in tendons, ligaments, and muscles. The breadth of its action explains why it works on such a wide range of injury types.</p>
            <p>The research record is substantial — over 70 published studies across tendon healing, ligament repair, bone regeneration, gut protection, and neurological recovery. No side effects have been documented in human use at therapeutic doses.</p>
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

        {/* 02 — RESULTS TIMELINE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Results Timeline</h2>
          </div>
          <div className="pl-10 space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{t.week}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-2">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">INJURY / MUSCULOSKELETAL</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.injury}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">GUT / GI TRACT</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.gut}</p>
                  </div>
                </div>
                <p className="text-[#50505e] text-[12px] italic">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 03 — INJURY-SPECIFIC PROTOCOLS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Injury-Specific Protocols</h2>
          </div>
          <div className="pl-10 space-y-4">
            {protocols.map((p, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${p.color}` }}>
                <p className="text-white font-700 text-[15px] mb-3">{p.injury}</p>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                    <p className="text-[#aaaabc] text-[13px] font-600">{p.dose}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">ROUTE</p>
                    <p className="text-[#aaaabc] text-[13px]">{p.route}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DURATION</p>
                    <p className="text-[#aaaabc] text-[13px]">{p.duration}</p>
                  </div>
                </div>
                <p className="text-[#8888a0] text-[12px] leading-relaxed">{p.notes}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 04 — DOSING GUIDE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dosing & Reconstitution</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Standard BPC-157 dosing is 250–500mcg per day. Lower doses (250mcg/day) are appropriate for maintenance and general gut health protocols. Higher doses (500mcg/day) are used for acute injuries, severe tendon damage, and chronic conditions.</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {[
                { label: 'Reconstitution', val: 'Mix with 1–2ml bacteriostatic water per 5mg vial. Use an insulin syringe (29–31 gauge) for injection.' },
                { label: 'Storage', val: 'Lyophilized (dry) powder: refrigerate. Reconstituted solution: refrigerate, use within 28 days. Freeze unmixed vials for long-term storage.' },
                { label: 'Injection Site', val: 'Subcutaneous injection in the abdomen, or near (not into) the injury site. Rotate injection sites to prevent tissue irritation.' },
                { label: 'Split Dosing', val: 'Split into two doses (morning and evening) for more stable tissue concentrations. Single daily dosing also effective for most applications.' },
              ].map((item, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <p className="text-white font-600 text-[13px] mb-1">{item.label}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.val}</p>
                </div>
              ))}
            </div>

            <div className="card rounded-xl p-5 mt-4">
              <p className="text-white font-600 text-[14px] mb-2">Oral vs. Injectable: When to Choose Each</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed mb-3">
                BPC-157 is one of the only peptides that retains significant activity when taken orally. For gut-specific conditions — leaky gut, IBD, GERD, gastric ulcers — oral administration delivers the compound directly to the GI lining before it reaches systemic circulation, which is precisely the target tissue.
              </p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">
                For systemic and musculoskeletal effects (tendon, joint, muscle), subcutaneous injection provides more reliable and consistent bioavailability. Many advanced users run both simultaneously during a gut-healing protocol that also addresses musculoskeletal injury.
              </p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 05 — WOLVERINE STACK */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>BPC-157 + TB-500: The Wolverine Stack</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">
              BPC-157 and TB-500 (Thymosin Beta-4) are the two most powerful healing peptides available — and their mechanisms are complementary rather than overlapping. Together, they form what the peptide community calls the Wolverine Stack: the closest thing to accelerated regeneration that current science has produced.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[14px] mb-2">BPC-157</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">Targeted local repair — works at the injury site. Strongest for tendons, ligaments, and GI tract.</p>
                <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                <p className="text-[#aaaabc] text-[13px]">250–500mcg daily</p>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #a78bfa' }}>
                <p className="text-white font-700 text-[14px] mb-2">TB-500</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">Systemic tissue regeneration — distributes throughout the body via bloodstream. Strongest for muscles, nerves, and comprehensive healing.</p>
                <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                <p className="text-[#aaaabc] text-[13px]">2–5mg twice weekly (loading), 2mg weekly (maintenance)</p>
              </div>
            </div>
            <div className="card rounded-xl p-4">
              <p className="text-white font-600 text-[14px] mb-2">Why They Work Better Together</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">BPC-157 concentrates repair at the specific injury site. TB-500 simultaneously heals tissue throughout the body — including the compensatory stress injuries that develop around a primary injury. Running both creates a two-front healing response: precision repair at the injury and systemic tissue restoration systemically.</p>
            </div>
            <Link href="/wolverine-stack-bpc-157-tb-500-guide" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
              Full Wolverine Stack Protocol →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — BUY */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get BPC-157</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">BPC-157</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Lyophilized pharmaceutical-grade powder. Certificate of analysis verified. The most-researched healing peptide available.</p>
              <div className="flex gap-3">
                <a href="/go/bpc-157" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/bpc-157" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Wolverine Stack</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">BPC-157 + TB-500 together. The complete healing protocol for serious recovery optimization.</p>
              <div className="flex gap-3">
                <a href="/go/wolverine" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Stack →</a>
                <Link href="/stacks/wolverine" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Stack Details</Link>
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
                q: 'Does BPC-157 need to be cycled?',
                a: 'BPC-157 does not require cycling in the traditional sense — there is no receptor desensitization or endocrine suppression to manage. Most protocols run 8–12 weeks continuously. After a complete cycle, a break of 4–8 weeks before repeating is common practice, though not strictly required for safety reasons.',
              },
              {
                q: 'Is BPC-157 safe?',
                a: 'BPC-157 has an exceptionally clean safety profile across all published research. No adverse effects have been documented in human use at therapeutic doses. It does not affect hormonal axes, does not require PCT, and has no known drug interactions at standard doses. It is one of the most well-tolerated peptides in clinical and self-administration use.',
              },
              {
                q: 'Can BPC-157 heal old or chronic injuries?',
                a: 'Yes — and this is one of BPC-157\'s most notable properties. Where conventional medicine often writes off chronic injuries as permanent damage, BPC-157 appears capable of reactivating repair processes in old scar tissue. Users with years-old tendon and ligament injuries frequently report significant improvement. Full resolution of chronic injuries typically requires a longer protocol (10–12 weeks) than acute injuries.',
              },
              {
                q: 'Should I inject near the injury or in the abdomen?',
                a: 'For maximum effect at a specific injury site, inject subcutaneously as close to the injury as safely possible. For systemic effects — gut health, general healing, neurological recovery — abdominal injection delivers reliable systemic distribution. Many users with a targeted injury use both: local injection for the injury and abdominal injection once daily for systemic coverage.',
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
              { href: '/wolverine-stack-bpc-157-tb-500-guide', label: 'The Wolverine Stack', desc: 'Full BPC-157 + TB-500 combination protocol with injury-specific dosing' },
              { href: '/how-to-inject-peptides-beginners-guide', label: 'How to Inject Peptides', desc: 'Reconstitution, needle selection, injection technique, and storage guide' },
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'How to combine BPC-157 with other compounds for synergistic effects' },
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin', desc: 'Add growth hormone optimization to accelerate BPC-157 healing results' },
              { href: '/looksmaxxing-routine-daily-protocol', label: 'Daily Peptide Protocol', desc: 'Where BPC-157 fits in a comprehensive daily peptide schedule' },
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
