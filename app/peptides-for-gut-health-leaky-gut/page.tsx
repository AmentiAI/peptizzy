import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BPC-157 for Gut Health & Leaky Gut: The Complete Protocol | PeptidesMuscle',
  description: 'How BPC-157 heals leaky gut, intestinal permeability, and IBD. Complete oral and subcutaneous protocols, timeline for gut healing, and supporting peptides including KPV and Thymosin Alpha-1.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/peptides-for-gut-health-leaky-gut' },
  keywords: 'BPC-157 leaky gut, BPC-157 gut health, intestinal permeability peptide, BPC-157 oral protocol, KPV peptide IBD, peptides for gut healing, BPC-157 tight junctions',
  openGraph: {
    title: 'BPC-157 for Gut Health & Leaky Gut: Complete Protocol | PeptidesMuscle',
    description: 'How BPC-157 repairs intestinal permeability, restores tight junctions, and resolves gut inflammation — oral and injectable protocols.',
    url: 'https://www.peptidesmuscle.com/peptides-for-gut-health-leaky-gut',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 for Gut Health & Leaky Gut | PeptidesMuscle',
    description: 'Oral and injectable BPC-157 protocols for intestinal permeability, leaky gut, and IBD — complete healing timeline and supporting peptides.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'BPC-157 for Gut Health & Leaky Gut: The Complete Protocol',
      datePublished: '2026-04-13',
      dateModified: '2026-04-13',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does BPC-157 heal leaky gut?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. BPC-157 has extensive preclinical evidence for repairing intestinal permeability (leaky gut). Its mechanisms directly address the root causes of gut barrier dysfunction: it activates the nitric oxide pathway to protect mucosal cells, stimulates angiogenesis in the gut wall to restore blood supply, reduces inflammatory cytokine signaling (TNF-α, IL-6), and promotes fibroblast proliferation in the mucosal lining. Animal studies demonstrate repair of chemically induced gut damage, fistula healing, and IBD symptom resolution.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I take BPC-157 orally or by injection for gut health?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For gut-specific conditions — leaky gut, IBD, GERD, gastric ulcers, intestinal permeability — oral administration is the preferred route. Oral BPC-157 travels through the GI tract before being absorbed systemically, delivering the peptide directly to the mucosal surface where it is most needed. The standard oral protocol is 250mcg twice daily in a small amount of water on an empty stomach. Subcutaneous abdominal injection is an alternative for those who prefer injectable or who also need systemic healing effects.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does BPC-157 take to heal leaky gut?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Initial symptom improvement — reduced bloating, improved digestion, less gut pain — typically occurs within days to 1 week. Measurable repair of mucosal integrity takes 2–4 weeks. Structural resolution of significant gut permeability requires a full 8–12 week protocol. Users with chronic gut conditions (years of damage) should plan for the full 12-week cycle and may benefit from a repeat cycle after a 4-week break.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is KPV peptide and how does it help gut inflammation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'KPV (Lys-Pro-Val) is a tripeptide derived from the C-terminus of alpha-melanocyte-stimulating hormone (α-MSH). It is a potent anti-inflammatory compound with specific affinity for intestinal tissue. KPV reduces NF-κB activation, lowers pro-inflammatory cytokines (IL-1β, TNF-α, IL-6), and directly inhibits inflammatory cell infiltration in the gut wall. It is particularly effective for IBD (Crohn\'s disease and ulcerative colitis) and colitis. Used alongside BPC-157, KPV addresses the inflammatory component while BPC-157 drives structural repair.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can peptides replace conventional IBD treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BPC-157 and KPV are research compounds, not FDA-approved treatments. They should not replace prescribed IBD medications without medical supervision. However, many users report significant symptom improvement and reduced medication requirements when using gut-healing peptides alongside conventional care. The mechanisms are complementary to, not conflicting with, standard IBD therapies. Always consult a gastroenterologist before modifying a treatment regimen for diagnosed IBD.',
          },
        },
      ],
    },
  ],
}

const AFF = (s: string) => `https://phiogen.is/products/${s}?ref=PEPS`
const accent = '#40c090'

const leakyGutMechanisms = [
  {
    title: 'Tight Junction Breakdown',
    body: 'The gut lining is a single cell layer thick — held together by protein complexes called tight junctions (ZO-1, occludin, claudin). When these junctions degrade, gaps form between intestinal epithelial cells. Bacteria, food antigens, endotoxins, and undigested particles pass through these gaps directly into systemic circulation — triggering immune activation, chronic inflammation, and the constellation of symptoms associated with leaky gut.',
  },
  {
    title: 'Zonulin Dysregulation',
    body: 'Zonulin is the primary regulator of tight junction permeability. It is produced in excess by both gliadin (gluten) exposure and bacterial dysbiosis. Elevated zonulin systematically opens tight junctions, increasing intestinal permeability. High-zonulin states are associated with autoimmune conditions, type 1 diabetes, celiac disease, IBS, and multiple sclerosis — reflecting how gut barrier dysfunction drives systemic disease far beyond the digestive tract.',
  },
  {
    title: 'LPS Translocation',
    body: 'Lipopolysaccharide (LPS) is a component of gram-negative bacterial cell walls. When the gut barrier is compromised, LPS translocates into systemic circulation — a phenomenon called endotoxemia. Even low-grade endotoxemia produces chronic, systemic inflammation, metabolic dysfunction (insulin resistance, obesity, NAFLD), neuroinflammation (brain fog, depression, cognitive impairment), and immune dysregulation. Restoring barrier integrity halts this inflammatory cycle.',
  },
  {
    title: 'Mucosal Immune Activation',
    body: 'Approximately 70% of the immune system resides in gut-associated lymphoid tissue (GALT). A compromised gut barrier chronically activates this immune machinery. The result is systemic immune dysfunction: overactivation in response to harmless antigens (food sensitivities, environmental triggers), underactivation against actual pathogens, and the misdirected autoimmune responses that drive conditions like Hashimoto\'s, rheumatoid arthritis, and psoriasis.',
  },
]

const bpcMechanisms = [
  {
    title: 'Nitric Oxide Pathway',
    body: 'BPC-157\'s most important gut mechanism is activation of the nitric oxide (NO) signaling pathway. NO has direct cytoprotective effects on GI mucosa — it vasodilates submucosal vessels, increases oxygen and nutrient delivery, prevents epithelial apoptosis, and modulates inflammatory cytokine cascades. This is the mechanism behind BPC-157\'s remarkable ability to prevent and reverse gastric ulcers, chemical gut damage, and NSAID-induced GI injury.',
  },
  {
    title: 'Mucosal Angiogenesis',
    body: 'BPC-157 stimulates VEGF (vascular endothelial growth factor) expression in gut tissue, driving formation of new blood vessels in the submucosal layer. Damaged gut tissue has impaired vasculature that limits repair capacity. BPC-157-driven angiogenesis restores this blood supply, delivering the metabolic substrates (oxygen, glucose, amino acids) needed for rapid cellular repair and mucosal regeneration.',
  },
  {
    title: 'Anti-Inflammatory Signaling',
    body: 'BPC-157 downregulates pro-inflammatory cytokines — including TNF-α, IL-1β, and IL-6 — that sustain mucosal inflammation in IBD and leaky gut. It does this without broadly suppressing the immune system (unlike corticosteroids), preserving pathogen defense while specifically reducing the self-perpetuating inflammation that drives barrier dysfunction. This selective anti-inflammatory action is critical for healing chronic gut conditions without the immunosuppressive risks of conventional treatment.',
  },
  {
    title: 'Fibroblast & Mucosal Cell Proliferation',
    body: 'BPC-157 directly upregulates fibroblast growth and activity in gut tissue, driving synthesis of new extracellular matrix and collagen to rebuild the submucosal scaffold. It simultaneously stimulates intestinal epithelial cell migration and proliferation — accelerating re-epithelialization of damaged mucosal surfaces. Together, these effects reconstruct both the structural support layer and the epithelial barrier of the gut wall from the ground up.',
  },
]

const gutTimeline = [
  {
    period: 'Days 1–7',
    what: 'Anti-inflammatory and cytoprotective effects activate first. Bloating, abdominal pain, and acid symptoms begin to reduce. Stool consistency often normalizes within the first week. Energy levels may begin to improve as inflammatory burden decreases.',
    note: 'First-week improvements reflect the anti-inflammatory and NO pathway effects — mucosal repair is just beginning.',
  },
  {
    period: 'Weeks 2–4',
    what: 'Mucosal lining begins structural repair. Intestinal permeability markers (zonulin, LPS-binding protein) measurably decline. Nutrient absorption improves — micronutrient deficiencies common in leaky gut begin to resolve. Food sensitivities may decrease as barrier integrity improves.',
    note: 'This is when most users notice the most significant functional improvement: better digestion, less reactivity to trigger foods, improved energy.',
  },
  {
    period: 'Weeks 5–8',
    what: 'Substantial restoration of gut lining architecture. Inflammatory markers continue declining. Gut microbiome composition improves secondary to reduced inflammatory signaling. Users with IBD typically report significant symptom reduction and may require less rescue medication.',
    note: 'Structural remodeling of the gut wall is active at this stage. Many users feel close to normal gut function by week 6–7.',
  },
  {
    period: 'Weeks 9–12',
    what: 'Full protocol completion. Maximal restoration of barrier integrity. Systemic effects of prior endotoxemia (brain fog, joint inflammation, skin issues, immune dysfunction) continue resolving as LPS translocation ends. Most users with moderate leaky gut report full resolution. Severe cases benefit from a repeat cycle.',
    note: 'Complete the full 12 weeks for chronic conditions. Maintenance with periodic 4-week cycles 2x per year is a common long-term approach.',
  },
]

const supportingPeptides = [
  {
    name: 'KPV',
    fullName: 'Lys-Pro-Val (α-MSH fragment)',
    role: 'IBD & Inflammatory Bowel Conditions',
    color: accent,
    mechanism: 'KPV is a tripeptide derived from the C-terminal sequence of alpha-MSH. It binds melanocortin receptors on intestinal immune cells, directly suppressing NF-κB activation and reducing production of TNF-α, IL-1β, and IL-6. Unlike BPC-157 which acts primarily through structural repair, KPV\'s mechanism is primarily immunological — making the two compounds highly complementary for inflammatory gut conditions.',
    dose: '250–500mcg orally, 2x daily. For severe IBD, injectable 500mcg SubQ is used.',
    best: 'Crohn\'s disease, ulcerative colitis, colitis, gut inflammation with an active immune component.',
    slug: 'kpv-10mg',
  },
  {
    name: 'Thymosin Alpha-1',
    fullName: 'Tα-1 (Zadaxin)',
    role: 'Immune Component of Gut Dysfunction',
    color: '#a78bfa',
    mechanism: 'The gut immune axis (GALT) is dysregulated in most leaky gut states. Thymosin Alpha-1 restores balanced Th1/Th2 cytokine signaling, reduces autoimmune gut responses, and improves mucosal immune surveillance. It is particularly valuable when leaky gut has triggered systemic autoimmunity — hashimoto\'s, reactive arthritis, systemic inflammation — where normalizing the gut immune response is as important as repairing the barrier.',
    dose: '1.6mg SubQ 2x weekly, 4–8 weeks alongside BPC-157 protocol.',
    best: 'Leaky gut with associated autoimmunity, chronic fatigue, or immune dysregulation.',
    slug: 'thymosin-alpha-1-10mg',
  },
  {
    name: 'Glutamine Peptides',
    fullName: 'L-Glutamine (amino acid)',
    role: 'Enterocyte Fuel & Barrier Support',
    color: '#d4a043',
    mechanism: 'Glutamine is the primary fuel source for intestinal enterocytes and colonocytes. During gut inflammation, glutamine depletion is a major driver of mucosal atrophy and barrier compromise. Supplemental glutamine (10–20g daily) supports enterocyte energy metabolism, maintains tight junction protein expression, and provides the raw material for mucosal cell proliferation. It is a foundational adjunct to peptide protocols rather than a replacement.',
    dose: '10–20g L-glutamine powder daily in divided doses, ideally on an empty stomach.',
    best: 'All gut healing protocols — particularly valuable when gut atrophy or malabsorption is present.',
    slug: null,
  },
]

export default function GutHealthLeakyGutPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[400px] bg-[#40c090] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Gut Healing Peptide Guide</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            BPC-157 for Gut Health<br />
            <span className="italic" style={{ color: accent }}>&amp; Leaky Gut</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            How the gut lining breaks down, why conventional medicine has no good answer for it, and why BPC-157 is uniquely suited to repair intestinal permeability from the inside out.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — WHAT LEAKY GUT IS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What Leaky Gut Actually Is</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>The gut lining is a selectively permeable barrier — it lets nutrients through while keeping bacteria, undigested food particles, and toxins contained within the intestinal lumen. This function depends on intact tight junction complexes between adjacent epithelial cells. When these junctions degrade, the gut becomes non-selectively permeable: the wrong things get through.</p>
            <p>The clinical term is intestinal hyperpermeability. The mainstream term is &quot;leaky gut.&quot; Despite being dismissed by some physicians, the mechanism is extensively documented in peer-reviewed literature and measurable via biomarkers including serum zonulin, LPS-binding protein, fatty acid binding protein (FABP), and intestinal alkaline phosphatase.</p>
            <p>Leaky gut is not a standalone condition — it is a driver of systemic pathology. The inflammatory and autoimmune consequences of bacterial endotoxin entering systemic circulation (endotoxemia) affect nearly every organ system: liver, brain, joints, skin, and the immune system itself.</p>
          </div>

          <div className="pl-10 mt-8 grid sm:grid-cols-2 gap-4">
            {leakyGutMechanisms.map((m, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{m.title}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 02 — BPC-157 MECHANISM IN THE GUT */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>How BPC-157 Heals the Gut</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>BPC-157 is a 15-amino-acid peptide derived from a cytoprotective protein found in gastric juice — meaning the body already produces it endogenously in the gut. The synthetic version amplifies these naturally occurring protective and regenerative effects dramatically, enabling the repair of structural gut damage that exceeds what endogenous production can address.</p>
            <p>Its gut-healing efficacy stems from four simultaneous mechanisms that operate across different aspects of mucosal biology — from blood supply restoration to immune modulation to direct cellular proliferation.</p>
          </div>

          <div className="pl-10 mt-6 grid sm:grid-cols-2 gap-4">
            {bpcMechanisms.map((m, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{m.title}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 03 — GUT HEALING TIMELINE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Gut Healing Timeline</h2>
          </div>
          <div className="pl-10 space-y-4">
            {gutTimeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{t.period}</p>
                <p className="text-[#aaaabc] text-[13px] leading-relaxed mb-3">{t.what}</p>
                <p className="text-[#50505e] text-[12px] italic">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 04 — OTHER GUT PEPTIDES */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Other Gut-Healing Peptides</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed mb-6">
            <p>BPC-157 is the primary and most versatile gut healing peptide — but for specific gut conditions, particularly those with a strong inflammatory or immune component, it works synergistically with other compounds.</p>
          </div>
          <div className="pl-10 space-y-4">
            {supportingPeptides.map((p, i) => (
              <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${p.color}` }}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="text-white font-700 text-[16px]">{p.name}</p>
                    <p className="text-[#50505e] text-[12px]">{p.fullName}</p>
                  </div>
                  <span className="tag text-[11px] px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: `${p.color}18`, color: p.color }}>{p.role}</span>
                </div>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">{p.mechanism}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                    <p className="text-[#aaaabc] text-[13px]">{p.dose}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">BEST FOR</p>
                    <p className="text-[#aaaabc] text-[13px]">{p.best}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 05 — PROTOCOL */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>The Gut Healing Protocol</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">
              BPC-157 for gut health is unusual among peptides in that oral administration is not just viable — for gut-specific conditions, it is often preferable to injection. Unlike most peptides that are degraded in the GI tract, BPC-157 retains significant biological activity when taken orally. This means the peptide is in direct contact with the mucosal surface it is intended to heal before absorption into systemic circulation.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[15px] mb-3">Oral BPC-157 Protocol</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                    <p className="text-[#aaaabc] text-[13px]">250mcg twice daily (500mcg total)</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">TIMING</p>
                    <p className="text-[#aaaabc] text-[13px]">Morning and evening, on an empty stomach. Dissolve in 50–100ml water and drink.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DURATION</p>
                    <p className="text-[#aaaabc] text-[13px]">8–12 weeks for leaky gut, IBD, or chronic GI conditions.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">BEST FOR</p>
                    <p className="text-[#aaaabc] text-[13px]">Leaky gut, gastric ulcers, GERD, SIBO, IBD, intestinal permeability.</p>
                  </div>
                </div>
              </div>

              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #6090ff' }}>
                <p className="text-white font-700 text-[15px] mb-3">SubQ Abdominal Injection Protocol</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                    <p className="text-[#aaaabc] text-[13px]">250–500mcg daily (single or split dose)</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">TIMING</p>
                    <p className="text-[#aaaabc] text-[13px]">Once or twice daily, subcutaneously in abdominal fat. Rotate injection sites.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DURATION</p>
                    <p className="text-[#aaaabc] text-[13px]">8–12 weeks. Provides systemic coverage beyond the GI tract.</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">BEST FOR</p>
                    <p className="text-[#aaaabc] text-[13px]">Combined gut + musculoskeletal or neurological healing goals.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Reconstitution for Oral Use</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">
                Reconstitute BPC-157 powder with bacteriostatic water — use 1ml bac water per 5mg vial for a 5,000mcg/ml concentration, making 250mcg doses easy to measure (0.05ml per dose). To take orally, draw up the desired volume in an insulin syringe, squirt directly into a small glass of water, and drink. The peptide is stable in room-temperature water for short periods — consume immediately. Store reconstituted vials refrigerated and use within 28 days.
              </p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — PRODUCT CARDS */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get Gut-Healing Peptides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-[#50505e] text-[12px] uppercase tracking-widest mb-2">Primary Protocol</p>
              <p className="text-white font-700 text-[18px] mb-1">BPC-157</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">
                The gold-standard gut healing peptide. Pharmaceutical-grade lyophilized powder. Certificate of analysis verified. Effective both orally (for gut) and via SubQ injection (for systemic healing).
              </p>
              <div className="flex gap-3">
                <a href="/go/bpc-157" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/bpc-157-10mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-[#50505e] text-[12px] uppercase tracking-widest mb-2">IBD & Inflammation</p>
              <p className="text-white font-700 text-[18px] mb-1">KPV</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">
                The anti-inflammatory tripeptide for IBD and gut inflammation. Targets NF-κB and pro-inflammatory cytokines directly in intestinal tissue. Ideal alongside BPC-157 for inflammatory bowel conditions.
              </p>
              <div className="flex gap-3">
                <a href="/go/kpv" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/kpv-10mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
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
                q: 'Does BPC-157 actually heal leaky gut?',
                a: 'The preclinical evidence is extensive. BPC-157 repairs chemically-induced gut damage, heals intestinal fistulas, reverses colitis in animal models, and restores gut mucosal integrity across multiple experimental paradigms. Its mechanisms directly address leaky gut pathology: nitric oxide pathway cytoprotection, submucosal angiogenesis, anti-inflammatory cytokine modulation, and epithelial cell proliferation. Anecdotal reports from users mirror the animal research — gut symptoms commonly improve within days to weeks.',
              },
              {
                q: 'Should I take BPC-157 orally or by injection for gut health?',
                a: 'For gut-specific goals, oral administration is the most direct route — BPC-157 contacts the mucosal surface before systemic absorption. The standard oral protocol is 250mcg twice daily dissolved in water, taken on an empty stomach. Subcutaneous abdominal injection is equally valid and preferred by users who also want systemic healing effects (tendon, muscle, neurological) alongside gut repair.',
              },
              {
                q: 'How long does BPC-157 take to heal leaky gut?',
                a: 'Symptom improvement (bloating, pain, reflux) begins within days to a week. Structural mucosal repair requires 4–8 weeks of consistent use. Chronic gut conditions — years of accumulated damage — warrant a full 12-week cycle, sometimes repeated after a 4-week break. Leaky gut markers (serum zonulin, LPS-binding protein) typically normalize over 8–12 weeks of treatment.',
              },
              {
                q: 'What is KPV and how does it help gut inflammation?',
                a: 'KPV (Lys-Pro-Val) is a tripeptide from alpha-MSH that acts directly on intestinal immune cells to suppress NF-κB activation and reduce pro-inflammatory cytokines (TNF-α, IL-1β, IL-6). Unlike BPC-157 which drives structural repair, KPV primarily addresses the inflammatory immune component of gut dysfunction. Together they cover both the immune and structural dimensions of IBD and leaky gut.',
              },
              {
                q: 'Can peptides replace conventional IBD treatment?',
                a: 'BPC-157 and KPV are research compounds, not FDA-approved IBD treatments. They should not replace prescribed medications without medical guidance. However, their mechanisms are complementary to standard therapies — many users report meaningful improvement in symptoms and quality of life alongside (not instead of) conventional care. Always work with a gastroenterologist for diagnosed IBD.',
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
              { href: '/bpc-157-complete-guide', label: 'BPC-157 Complete Guide', desc: 'Full BPC-157 protocol including injury, musculoskeletal, neurological, and gut applications' },
              { href: '/tb-500-complete-guide', label: 'TB-500 Complete Guide', desc: 'Systemic tissue regeneration peptide — complements BPC-157 for comprehensive healing' },
              { href: '/bacteriostatic-water-peptide-reconstitution-guide', label: 'Reconstitution Guide', desc: 'Step-by-step guide to preparing BPC-157 and KPV for oral and injectable use' },
              { href: '/thymosin-alpha-1-immune-peptide-guide', label: 'Thymosin Alpha-1 Guide', desc: 'The immune regulator peptide — critical when gut dysfunction has driven systemic autoimmunity' },
              { href: '/wolverine-stack-bpc-157-tb-500-guide', label: 'The Wolverine Stack', desc: 'BPC-157 + TB-500 combination protocol for maximizing total healing output' },
              { href: '/blog', label: 'All Peptide Guides', desc: 'Browse every in-depth protocol and research article on PeptidesMuscle' },
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
