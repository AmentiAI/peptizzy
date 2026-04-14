import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptides for Joint Pain & Arthritis: BPC-157, TB-500 & The Science of Cartilage Regeneration | PeptidesMuscle',
  description: 'How BPC-157 and TB-500 repair joints that conventional medicine cannot. Angiogenesis, SOX-9 cartilage gene activation, synovial anti-inflammation, and full joint-specific protocols.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/peptides-for-joint-pain-arthritis' },
  keywords: 'peptides for joint pain, BPC-157 joint repair, TB-500 arthritis, cartilage regeneration peptide, peptides for arthritis, joint healing peptides, BPC-157 knee, TB-500 shoulder',
  openGraph: {
    title: 'Peptides for Joint Pain & Arthritis: BPC-157, TB-500 & Cartilage Regeneration | PeptidesMuscle',
    description: 'How BPC-157 and TB-500 repair joints that conventional medicine cannot. Full protocols, results timeline, and the science.',
    url: 'https://www.peptidesmuscle.com/peptides-for-joint-pain-arthritis',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Joint Pain & Arthritis | PeptidesMuscle',
    description: 'BPC-157 and TB-500 protocols for cartilage regeneration, synovial inflammation, and structural joint repair.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Peptides for Joint Pain & Arthritis: BPC-157, TB-500 & The Science of Cartilage Regeneration',
      datePublished: '2026-04-14',
      dateModified: '2026-04-14',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can BPC-157 actually regenerate cartilage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BPC-157 does not directly regenerate cartilage like a stem cell therapy, but it creates the biological conditions for cartilage repair that normally do not exist. By stimulating angiogenesis into avascular cartilage tissue and upregulating SOX-9 — the master transcription factor governing chondrocyte differentiation and cartilage matrix production — BPC-157 activates repair pathways that cartilage cannot access on its own. Combined with reduced synovial inflammation, this produces measurable structural improvements over an 8–12 week cycle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I use BPC-157 or TB-500 for joint pain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both peptides address joint pain through different mechanisms, and they work best together. BPC-157 targets the local injury site — stimulating angiogenesis, activating the SOX-9 cartilage repair gene, and directly reducing synovial inflammation. TB-500 provides systemic tissue regeneration via actin regulation and cell migration, and its anti-inflammatory action on Cox-2 reduces pain signals throughout all affected joints simultaneously. Running both in the Wolverine Stack protocol produces faster and more comprehensive results than either alone.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I inject BPC-157 for a knee or shoulder joint?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For joint-specific injection, inject subcutaneously as close to the joint capsule as safely possible — into the fat layer above the knee, or the deltoid region for shoulder. Do not attempt intra-articular (inside the joint) injection without medical supervision. SubQ periarticular injection still delivers significantly higher local concentrations than abdominal injection and is the standard protocol for joint-targeted BPC-157 use.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does joint repair with peptides take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pain reduction typically begins within 1–2 weeks. Improved range of motion becomes measurable at weeks 3–4. Functional recovery — the ability to load the joint without significant pain — generally occurs at weeks 6–8. Structural repair of cartilage and synovial tissue, which is the deepest layer of change, requires the full 10–12 week cycle. Chronic joint conditions may require a second cycle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can peptides help with osteoarthritis specifically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Osteoarthritis is characterized by cartilage degradation, chronic synovial inflammation, and subchondral bone changes — all of which are directly addressed by BPC-157 and TB-500. BPC-157\'s SOX-9 activation is particularly relevant to OA because SOX-9 is the master regulator of chondrocyte activity, and OA fundamentally involves chondrocyte dysfunction. TB-500\'s systemic anti-inflammatory action on Cox-2 mirrors the mechanism of NSAIDs but without GI side effects. While peptides are not a substitute for severe end-stage OA requiring replacement, they are highly relevant for mild to moderate disease and post-surgical recovery.',
          },
        },
      ],
    },
  ],
}

const AFF = (s: string) => `https://phiogen.is/products/${s}?ref=PEPS`
const accent = '#60a5fa'

const whyHardCards = [
  {
    title: 'Avascular Cartilage',
    body: 'Cartilage has no direct blood supply. Unlike muscle or bone, it cannot recruit the immune and repair cells that travel through the bloodstream — because there are no blood vessels to carry them. Nutrients arrive only by diffusion from synovial fluid, making cartilage repair orders of magnitude slower than vascularized tissue.',
  },
  {
    title: 'Synovial Inflammation Loops',
    body: 'Damaged joints trigger cytokine release — particularly IL-1β and TNF-α — which inflames the synovial membrane lining the joint. This inflammation itself causes further cartilage breakdown, creating a self-perpetuating damage cycle. Breaking this loop is as important as stimulating repair.',
  },
  {
    title: 'Slow Chondrocyte Renewal',
    body: 'Chondrocytes — the cells responsible for cartilage maintenance — renew at a fraction of the rate of muscle cells. Studies suggest cartilage collagen in adults has a half-life of over a century, meaning damage simply accumulates. Stimulating chondrocyte activity is the key lever conventional medicine has largely failed to pull.',
  },
  {
    title: 'Constant Mechanical Load',
    body: 'Muscle tears can be immobilized. Joints cannot — they bear load with every step. This continuous mechanical stress disrupts the repair cycle before it can complete, explaining why conservative rest-and-wait treatment produces such poor outcomes for joint injuries in active individuals.',
  },
]

const bpcMechanisms = [
  {
    title: 'Angiogenesis Into Avascular Tissue',
    body: 'BPC-157\'s most impactful effect for joints is its ability to drive new blood vessel formation into tissue that normally has none. By upregulating VEGF and activating the nitric oxide pathway, BPC-157 creates capillary networks that reach cartilage and joint tissue — delivering the repair cells and metabolic substrates that cartilage cannot normally access.',
  },
  {
    title: 'SOX-9 Gene Upregulation',
    body: 'SOX-9 is the master transcription factor governing chondrocyte differentiation and cartilage matrix production. BPC-157 directly upregulates SOX-9 expression in joint tissue — essentially activating the biological program responsible for making and maintaining cartilage. This is the most targeted cartilage-repair mechanism of any currently available compound.',
  },
  {
    title: 'Collagen Organization',
    body: 'BPC-157 accelerates fibroblast activity and improves collagen fiber alignment in joint tissue. Disorganized, weak collagen is a hallmark of joint degeneration. BPC-157 promotes the formation of properly structured collagen networks, restoring the mechanical integrity of tendons, ligaments, and the cartilage matrix around the joint.',
  },
  {
    title: 'Synovial Anti-Inflammatory Signaling',
    body: 'BPC-157 directly downregulates the cytokine storm in inflamed synovial tissue — reducing IL-1β, TNF-α, and NF-κB activity that perpetuate joint damage. This breaks the inflammatory loop at the source, halting the ongoing destruction of cartilage that makes synovial inflammation so damaging over time.',
  },
]

const tb500Mechanisms = [
  {
    title: 'Actin Regulation & Cell Migration',
    body: 'Thymosin Beta-4 — the active component of TB-500 — sequesters G-actin monomers and regulates actin polymerization in cells. This directly promotes cell migration to injury sites, accelerating the arrival of repair cells including tenocytes, synoviocytes, and fibroblasts that carry out structural joint regeneration.',
  },
  {
    title: 'Systemic Distribution to All Joint Sites',
    body: 'Unlike BPC-157 which concentrates repair locally, TB-500 distributes systemically via the bloodstream. This means a single injection addresses multiple joints simultaneously — critical for athletes and arthritis patients with polyarticular (multiple joint) involvement. Compensatory joint stress from a primary injury is also addressed.',
  },
  {
    title: 'Cox-2 Anti-Inflammatory Action',
    body: 'TB-500 exerts anti-inflammatory effects through downregulation of Cox-2 — the same enzyme targeted by NSAIDs like ibuprofen and naproxen. Unlike NSAIDs, however, TB-500\'s Cox-2 suppression comes without gastrointestinal damage, cardiovascular risk, or inhibition of the prostaglandins necessary for healing.',
  },
  {
    title: 'Synergy with BPC-157',
    body: 'BPC-157 and TB-500 operate through different pathways with minimal overlap — BPC-157 concentrates on local vascularization and SOX-9 activation while TB-500 drives systemic cell migration and anti-inflammation. Running both simultaneously creates complementary repair signals: local precision repair plus systemic tissue regeneration.',
  },
]

const timeline = [
  {
    phase: 'Weeks 1–2',
    color: accent,
    heading: 'Pain Reduction',
    detail: 'Anti-inflammatory effects of both peptides activate within days. BPC-157 begins downregulating synovial cytokines. TB-500\'s Cox-2 suppression reduces the inflammatory pain signal. Most users report 20–40% pain reduction and early improvement in stiffness. Joint warmth and swelling begin to subside.',
  },
  {
    phase: 'Weeks 3–4',
    color: '#a78bfa',
    heading: 'Improved Range of Motion',
    detail: 'New capillary growth from BPC-157\'s angiogenesis effect reaches joint tissue. Synovial fluid quality improves as inflammation resolves. Reduced scar tissue tension allows increased range of motion. Most users regain 15–30 degrees of previously restricted movement by end of week 4.',
  },
  {
    phase: 'Weeks 6–8',
    color: '#d4a043',
    heading: 'Functional Recovery',
    detail: 'SOX-9 upregulation begins producing measurable changes in cartilage matrix composition. Collagen organization improves — joint feels more stable under load. Functional capacity returns: climbing stairs, squatting, overhead pressing that were previously painful become manageable. TB-500 is completing tissue regeneration systemically.',
  },
  {
    phase: 'Weeks 10–12',
    color: '#40c090',
    heading: 'Structural Repair',
    detail: 'The deepest layer of change: cartilage matrix remodeling, restored mechanical integrity of ligaments and tendons surrounding the joint, and permanent reduction in the inflammatory baseline of the synovial tissue. Chronic joint conditions that have persisted for years show significant regression by week 12 of a full cycle.',
  },
]

export default function PeptidesJointPainPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] bg-[#60a5fa] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Joint Repair & Arthritis</p>
          </div>
          <h1
            className="font-['Playfair_Display'] font-900 text-white mb-6"
            style={{ fontSize: 'clamp(30px, 5vw, 60px)', lineHeight: 1.1 }}
          >
            Peptides for Joint Pain<br />
            <span className="italic" style={{ color: accent }}>&amp; Arthritis</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl mb-8">
            Joints are uniquely resistant to healing — poor vascularity, slow chondrocyte renewal, and chronic inflammation conspire to make cartilage damage essentially permanent under conventional treatment. BPC-157 and TB-500 change this equation by addressing each of those barriers directly.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag-gold">BPC-157</span>
            <span className="tag">TB-500</span>
            <span className="tag">Cartilage Regeneration</span>
            <span className="tag">SOX-9 Activation</span>
            <span className="tag">Synovial Anti-Inflammation</span>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 01 — WHY JOINTS ARE HARD TO HEAL */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>01</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Why Joints Are So Hard To Heal
          </h2>
          <p className="text-[#8888a0] text-[16px] leading-relaxed mb-8 max-w-3xl">
            The medical system&apos;s poor track record with joint injuries is not a failure of effort — it reflects genuine biological barriers. Understanding them is the foundation for understanding why peptides succeed where anti-inflammatories, cortisone, and rest fail.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyHardCards.map((c, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{c.title}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="card rounded-xl p-5 mt-4">
            <p className="text-white font-600 text-[14px] mb-2">The Conventional Medicine Gap</p>
            <p className="text-[#8888a0] text-[14px] leading-relaxed">
              NSAIDs manage pain but accelerate cartilage degradation with long-term use. Cortisone injections reduce inflammation acutely but damage collagen structure with repeated application. PRP (platelet-rich plasma) and stem cell therapy address the biology more directly but are expensive, invasive, and inconsistent. BPC-157 and TB-500 address the same biological targets — angiogenesis, chondrocyte activation, inflammation resolution — at a fraction of the cost, with a subcutaneous injection protocol that takes under 60 seconds.
            </p>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 02 — HOW BPC-157 REPAIRS JOINTS */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>02</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            How BPC-157 Repairs Joints
          </h2>
          <p className="text-[#8888a0] text-[16px] leading-relaxed mb-8 max-w-3xl">
            BPC-157 (Body Protection Compound-157) is a 15-amino-acid peptide derived from gastric protein. Its repair mechanisms are remarkably matched to the specific biological barriers that make joint healing so difficult — this alignment is why it has become the most widely used peptide for joint recovery.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {bpcMechanisms.map((m, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="font-700 text-[14px] mb-2 text-white">{m.title}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 card rounded-xl p-5">
            <p className="text-white font-600 text-[14px] mb-3">Research Basis</p>
            <p className="text-[#8888a0] text-[14px] leading-relaxed">
              BPC-157 has over 70 peer-reviewed studies covering tendon-to-bone healing, ligament repair, cartilage protection, and synovial anti-inflammation. Studies in animal models consistently show accelerated healing across all joint tissue types, with histological analysis confirming improved collagen organization and reduced inflammatory markers. No adverse effects have been documented at therapeutic doses across any published study.
            </p>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 03 — HOW TB-500 COMPLEMENTS */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>03</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            How TB-500 Complements BPC-157
          </h2>
          <p className="text-[#8888a0] text-[16px] leading-relaxed mb-8 max-w-3xl">
            TB-500 (Thymosin Beta-4) is a naturally occurring 43-amino-acid peptide that serves different repair functions than BPC-157 — making their combination more powerful than either alone. Where BPC-157 works locally and precisely, TB-500 works systemically and broadly.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {tb500Mechanisms.map((m, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderTop: '2px solid #a78bfa' }}>
                <p className="font-700 text-[14px] mb-2 text-white">{m.title}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 04 — RESULTS TIMELINE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>04</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Results Timeline
          </h2>
          <p className="text-[#8888a0] text-[16px] leading-relaxed mb-8 max-w-3xl">
            Joint repair with BPC-157 and TB-500 follows a predictable biological progression. The anti-inflammatory effects activate first, then vascularization, then structural repair. This timeline applies to a full Wolverine Stack cycle run at therapeutic doses.
          </p>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0">
                  <p className="mono text-[11px] uppercase tracking-widest mb-1" style={{ color: t.color }}>{t.phase}</p>
                  <p className="font-['Playfair_Display'] font-700 text-white text-[16px]">{t.heading}</p>
                </div>
                <div className="sm:border-l sm:border-[#1a1a22] sm:pl-5">
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 05 — PROTOCOL GRID */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>05</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Joint Repair Protocol
          </h2>
          <p className="text-[#8888a0] text-[16px] leading-relaxed mb-8 max-w-3xl">
            The following protocol covers the standard joint-targeted Wolverine Stack. Adjust based on injury severity and bodyweight. Always use bacteriostatic water for reconstitution and insulin syringes (29–31 gauge) for injection.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            {/* BPC-157 Protocol */}
            <div className="card-elevated rounded-2xl p-6">
              <p className="mono text-[11px] uppercase tracking-widest mb-3" style={{ color: accent }}>BPC-157</p>
              <p className="font-['Playfair_Display'] font-700 text-white text-[18px] mb-4">Body Protection Compound</p>
              <div className="space-y-3">
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Loading Phase (Weeks 1–4)</p>
                  <p className="text-[#aaaabc] text-[14px]">500mcg daily, split AM/PM (250mcg each)</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Maintenance Phase (Weeks 5–12)</p>
                  <p className="text-[#aaaabc] text-[14px]">250–500mcg daily, single or split dose</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Injection Route</p>
                  <p className="text-[#aaaabc] text-[14px]">SubQ periarticular (near joint) or abdominal</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Cycle Length</p>
                  <p className="text-[#aaaabc] text-[14px]">8–12 weeks continuous</p>
                </div>
              </div>
            </div>

            {/* TB-500 Protocol */}
            <div className="card-elevated rounded-2xl p-6">
              <p className="mono text-[11px] uppercase tracking-widest mb-3" style={{ color: '#a78bfa' }}>TB-500</p>
              <p className="font-['Playfair_Display'] font-700 text-white text-[18px] mb-4">Thymosin Beta-4</p>
              <div className="space-y-3">
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Loading Phase (Weeks 1–4)</p>
                  <p className="text-[#aaaabc] text-[14px]">4–5mg twice weekly (8–10mg/week total)</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Maintenance Phase (Weeks 5–12)</p>
                  <p className="text-[#aaaabc] text-[14px]">2–2.5mg twice weekly (4–5mg/week total)</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Injection Route</p>
                  <p className="text-[#aaaabc] text-[14px]">SubQ abdominal or near primary injury site</p>
                </div>
                <div>
                  <p className="text-[#50505e] text-[11px] uppercase tracking-widest mb-1">Cycle Length</p>
                  <p className="text-[#aaaabc] text-[14px]">8–12 weeks, then 4 weeks off</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card rounded-xl p-5">
            <p className="text-white font-600 text-[14px] mb-2">Injection Placement for Common Joints</p>
            <div className="grid sm:grid-cols-3 gap-4 mt-3">
              {[
                { joint: 'Knee', instruction: 'Inject SubQ into the fat pad above the patella or medial to the joint line. Do not attempt intra-articular.' },
                { joint: 'Shoulder', instruction: 'Inject SubQ into the deltoid fat layer, anterior or lateral approach. Rotate sites each injection.' },
                { joint: 'Hip', instruction: 'Inject SubQ in the lateral hip/glute region, 2–4 inches from the joint capsule. Abdominal injection also provides strong coverage.' },
              ].map((j, i) => (
                <div key={i}>
                  <p className="font-600 text-white text-[13px] mb-1">{j.joint}</p>
                  <p className="text-[#8888a0] text-[12px] leading-relaxed">{j.instruction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 06 — PRODUCT CARDS */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>06</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Get the Wolverine Stack
          </h2>
          <p className="text-[#8888a0] text-[16px] leading-relaxed mb-8 max-w-3xl">
            Both peptides are available as lyophilized powder for reconstitution. Certificate of analysis verified.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card-elevated rounded-2xl p-6 flex flex-col gap-4">
              <p className="font-['Playfair_Display'] font-700 text-white text-lg">BPC-157 — 10mg</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">The primary joint-repair compound. Drives angiogenesis into avascular cartilage, activates SOX-9 for chondrocyte-mediated repair, and breaks the synovial cytokine loop. The most research-backed healing peptide available.</p>
              <div className="flex gap-3 mt-auto">
                <a href={AFF('bpc-157-10mg')} target="_blank" rel="noopener nofollow sponsored" className="btn-primary text-[13px] py-2.5 px-5 flex-1 justify-center">Buy Now</a>
                <Link href="/products/bpc-157-10mg" className="btn-secondary text-[13px] py-2.5 px-5">Details</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6 flex flex-col gap-4">
              <p className="font-['Playfair_Display'] font-700 text-white text-lg">TB-500 — 10mg</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">The systemic complement to BPC-157. Regulates actin for cell migration to all joint sites simultaneously, suppresses Cox-2 inflammatory signaling, and drives comprehensive tissue regeneration throughout the body during the recovery cycle.</p>
              <div className="flex gap-3 mt-auto">
                <a href={AFF('tb-500-thymosin-beta-4-10mg')} target="_blank" rel="noopener nofollow sponsored" className="btn-primary text-[13px] py-2.5 px-5 flex-1 justify-center">Buy Now</a>
                <Link href="/products/tb-500-thymosin-beta-4-10mg" className="btn-secondary text-[13px] py-2.5 px-5">Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* 07 — FAQ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-2">
            <p className="mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>07</p>
          </div>
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-8"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can BPC-157 actually regenerate cartilage?',
                a: 'BPC-157 does not directly regenerate cartilage like a stem cell therapy, but it creates the biological conditions for cartilage repair that normally do not exist. By driving angiogenesis into avascular tissue and upregulating SOX-9 — the master transcription factor for chondrocyte activity — BPC-157 activates repair pathways that cartilage cannot access independently. Combined with reduced synovial inflammation, this produces measurable structural improvements over an 8–12 week cycle.',
              },
              {
                q: 'Should I use BPC-157 or TB-500 for joint pain — or both?',
                a: 'Both peptides address joint pain through different mechanisms, and they work best together. BPC-157 targets the local injury site with angiogenesis and SOX-9 activation. TB-500 provides systemic tissue regeneration and reduces inflammation across all affected joints simultaneously via Cox-2 suppression. Running both in the Wolverine Stack protocol produces faster and more comprehensive results than either alone.',
              },
              {
                q: 'How do I inject BPC-157 for a knee or shoulder?',
                a: 'Inject subcutaneously as close to the joint capsule as safely possible — into the fat layer above the knee, or the deltoid region for shoulder. Do not attempt intra-articular injection without medical supervision. SubQ periarticular injection still delivers significantly higher local concentrations than abdominal injection and is the standard approach for joint-targeted use.',
              },
              {
                q: 'How long does joint repair with peptides take?',
                a: 'Pain reduction typically begins within 1–2 weeks. Improved range of motion is measurable at weeks 3–4. Functional recovery — loading the joint without significant pain — generally occurs at weeks 6–8. Structural repair of cartilage and synovial tissue requires the full 10–12 week cycle. Chronic conditions may require a second cycle.',
              },
              {
                q: 'Can peptides help with osteoarthritis specifically?',
                a: 'Osteoarthritis involves cartilage degradation, chronic synovial inflammation, and subchondral bone changes — all of which BPC-157 and TB-500 directly address. BPC-157\'s SOX-9 activation is especially relevant to OA because SOX-9 is the master regulator of chondrocyte activity, and OA fundamentally involves chondrocyte dysfunction. TB-500\'s Cox-2 suppression mirrors NSAID action without GI or cardiovascular side effects. Peptides are highly relevant for mild-to-moderate OA and post-surgical joint recovery.',
              },
            ].map((f, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="text-white font-600 text-[14px] mb-2">{f.q}</p>
                <p className="text-[#8888a0] text-[14px] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* RELATED GUIDES */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2
            className="font-['Playfair_Display'] font-900 text-white mb-6"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
          >
            Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/bpc-157-complete-guide', label: 'BPC-157 Complete Guide', desc: 'Full mechanism, all injury-specific protocols, reconstitution, and results timeline' },
              { href: '/tb-500-complete-guide', label: 'TB-500 Complete Guide', desc: 'How Thymosin Beta-4 drives systemic tissue regeneration and complements BPC-157' },
              { href: '/wolverine-stack-bpc-157-tb-500-guide', label: 'The Wolverine Stack', desc: 'Full BPC-157 + TB-500 combination protocol with loading and maintenance phases' },
              { href: '/how-to-inject-peptides-beginners-guide', label: 'How to Inject Peptides', desc: 'Reconstitution, needle selection, periarticular injection technique, and storage' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="card rounded-xl p-5 group hover:border-[#d4a043]/20 transition-colors">
                <p className="text-[13px] font-600 mb-1 group-hover:underline" style={{ color: accent }}>{r.label} →</p>
                <p className="text-[#8888a0] text-[13px]">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
