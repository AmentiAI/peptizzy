'use client'

import Link from 'next/link'
import { useState } from 'react'

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What are peptides and how do they work for looks maxing?',
        a: 'Peptides are short chains of amino acids that act as biological signaling molecules. Unlike supplements that provide raw materials, peptides send precise instructions to your cells — triggering collagen synthesis, growth hormone release, melanin production, or tissue repair. For looks maxing, this means targeting the exact biological mechanisms that determine skin quality, body composition, pigmentation, and cellular age simultaneously. The results are measurable, predictable, and compound over time.',
      },
      {
        q: 'I\'ve never used peptides before. Where do I start?',
        a: 'The ideal beginner entry point is the Ipamorelin + CJC-1295 combination for GH optimization, paired with BPC-157 for foundation recovery and gut health. These three compounds address body composition, sleep, recovery, and overall optimization without the complexity of advanced stacking. Run this for 3 months, assess results, then layer in GHK-Cu for skin quality and Melanotan 2 for pigmentation.',
      },
      {
        q: 'Do I need to inject peptides or are there oral options?',
        a: 'Most peptides require subcutaneous (under-skin) injection for reliable bioavailability — oral digestion breaks down most peptide bonds before absorption. Exceptions include MK-677 (orally bioavailable), BPC-157 for gut-specific effects, and Semax/Selank which are effective intranasally. Subcutaneous injection is straightforward once learned — a short, thin insulin needle at a 45° angle into the abdomen or thigh.',
      },
      {
        q: 'How long until I see results?',
        a: 'Timeline varies by compound and goal. Melanotan 2 produces visible pigmentation within 1–2 weeks of loading. BPC-157 shows noticeable recovery improvements within 2–4 weeks. GHK-Cu skin improvements become measurable at 4–8 weeks. GH peptide body composition changes take 8–12 weeks to become clearly visible. Epithalon\'s cellular effects operate on a longer timeline — months to years — but the sleep and energy improvements are often felt within the first cycle.',
      },
    ],
  },
  {
    category: 'Looks Maxing',
    questions: [
      {
        q: 'What is the best peptide stack for looks maxing?',
        a: 'The complete looks max protocol addresses all four pillars: GHK-Cu for skin quality and collagen (3× weekly), Melanotan 2 for deep eumelanin pigmentation (loading then maintenance), Ipamorelin + CJC-1295 for GH optimization and body composition (2–3× daily), BPC-157 for foundation healing (daily), and Epithalon for cellular age reversal (twice yearly cycles). This stack comprehensively targets every measurable component of physical attractiveness.',
      },
      {
        q: 'Can peptides actually improve skin quality and reduce aging?',
        a: 'Yes — with extensive clinical backing. GHK-Cu has over 50 years of clinical investigation demonstrating collagen stimulation, elastin synthesis, and skin thickness increases of up to 121% in controlled studies. It activates more than 4,000 genes related to skin repair and remodeling. This is not a topical cosmetic effect — it\'s biological restructuring at the cellular level. Results compound with consistent use over 8–12+ weeks.',
      },
      {
        q: 'How does Melanotan 2 compare to natural tanning?',
        a: 'Melanotan 2 activates MC1R receptors to stimulate eumelanin production — the same deep, olive-toned pigmentation that develops with natural sun exposure, but requiring 80% less UV exposure to achieve. The tan develops more evenly, lasts significantly longer, and provides authentic UV protection once melanin is saturated. The pigmentation type is identical to natural tan — not orange or artificial-looking. Additional benefits include libido enhancement, appetite suppression, and mood elevation via dopaminergic pathways.',
      },
      {
        q: 'What\'s the difference between GHK-Cu injection and topical copper peptide skincare?',
        a: 'Topical GHK-Cu has limited penetration depth — most stays in the epidermis. Subcutaneous GHK-Cu reaches dermal fibroblasts directly, where collagen synthesis actually occurs. The mechanisms are similar, but injection provides systemic delivery that topical products cannot match. That said, topical GHK-Cu is a useful complement to injectable protocols — addressing surface texture while injections restructure deeper skin architecture.',
      },
    ],
  },
  {
    category: 'Specific Compounds',
    questions: [
      {
        q: 'What is BPC-157 and why is it in every stack?',
        a: 'BPC-157 (Body Protective Compound 157) is a synthetic peptide derived from a protective protein in gastric juice. It accelerates healing of muscle, tendon, ligament, bone, and neural tissue through multiple mechanisms: increased VEGF (blood vessel formation), upregulation of growth hormone receptors, and anti-inflammatory signaling. It\'s included in every stack as a "foundation layer" because it optimizes the cellular environment so other peptides work more effectively, while also protecting gut integrity and accelerating recovery from training.',
      },
      {
        q: 'Is MK-677 a peptide? How does it compare to injectable GH peptides?',
        a: 'MK-677 (Ibutamoren) is a non-peptide growth hormone secretagogue — it activates the same ghrelin receptor as GHRP peptides but is orally bioavailable. It produces sustained GH and IGF-1 elevation over 24 hours compared to the pulse-based elevation from injectable GHRPs. Advantages: convenient oral dosing, significant sleep quality improvement, strong anabolic drive. Trade-offs: water retention and hunger increase (especially initially), and the sustained (non-pulsatile) GH pattern differs from the more physiological pulse pattern produced by Ipamorelin/CJC-1295. Many users run both.',
      },
      {
        q: 'What is Epithalon and how does it reverse aging?',
        a: 'Epithalon is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) that activates telomerase — the enzyme responsible for maintaining telomere length. Telomeres are the protective caps on chromosomes that shorten with each cell division; shortened telomeres produce lower-quality cellular replication and are a primary driver of biological aging. Epithalon is the only known compound that measurably lengthens telomeres. Clinical studies show improvements in sleep quality, immune function, hormone regulation, and antioxidant capacity, in addition to the telomere effects. Administered in 10–20 day cycles, twice yearly.',
      },
      {
        q: 'Can I stack Semax and Selank together?',
        a: 'Yes — Semax and Selank have complementary mechanisms that stack well. Semax primarily increases BDNF and NGF for cognitive enhancement, focus, and mental clarity. Selank provides anxiolytic and anti-anxiety effects by modulating GABA and serotonin signaling. Together, the combination produces a "sharp but calm" cognitive state: enhanced focus and performance without stimulant-like anxiety. Both are administered intranasally. A typical combined protocol is Semax in the morning for cognitive drive, Selank mid-day or as needed for stress management.',
      },
    ],
  },
  {
    category: 'Cycling & Safety',
    questions: [
      {
        q: 'Do I need to cycle peptides, or can I run them continuously?',
        a: 'Most peptides benefit from cycling to maintain receptor sensitivity. GH peptides (Ipamorelin, CJC-1295): 3 months on, 4–6 weeks off. IGF-1 LR3: maximum 4–6 weeks on due to rapid receptor downregulation. BPC-157 and TB-500: 4–8 weeks on, 4 weeks off. Melanotan 2: loading phase followed by maintenance doses. MK-677: 5 days on / 2 days off, or 3-month continuous cycles monitored by IGF-1 bloodwork. Epithalon: 10–20 day cycles, twice yearly. The cycling structure is part of the optimization protocol — not a limitation.',
      },
      {
        q: 'How do I store reconstituted peptides?',
        a: 'Lyophilized (freeze-dried) peptide powder is stable at room temperature for months when kept dry and away from light. Once reconstituted with bacteriostatic water: store in the refrigerator (2–8°C), use within 30–60 days, keep away from light, and never freeze reconstituted peptides. Use a new sterile needle for each draw. Vials that appear cloudy or have visible particulate should be discarded. Bacteriostatic water (with 0.9% benzyl alcohol) extends reconstituted stability versus sterile water.',
      },
      {
        q: 'What bloodwork should I monitor while running peptides?',
        a: 'Baseline and periodic monitoring recommended: IGF-1 levels (primary marker for GH axis activity — run with MK-677, IGF-1 LR3, or GH peptides), fasting glucose and insulin (GH elevation can affect insulin sensitivity), complete blood count (immune peptides, thymosin), and a comprehensive metabolic panel annually. Epithalon protocols may warrant telomere length testing to quantify results. Most users run bloodwork before starting a protocol, at 6–8 weeks, and at the end of each cycle.',
      },
      {
        q: 'Can I run multiple stacks simultaneously?',
        a: 'Yes, with strategic layering. The key principle is additive mechanisms, not redundant receptor targeting. For example: GHK-Cu (collagen receptor) + Melanotan 2 (melanocortin receptor) + Ipamorelin (GHRH receptor) + BPC-157 (multiple pathways) all operate through different mechanisms and stack without competition. Where you want to be cautious is stacking multiple GHRPs (Ipamorelin + GHRP-2) or multiple GHRH analogs simultaneously — this risks receptor saturation with diminishing returns. The stacks on this site are pre-designed with non-overlapping mechanisms.',
      },
    ],
  },
]

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[300px] bg-[#d4a043] opacity-[0.04] top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Knowledge Base</p>
          </div>
          <h1 className="display text-white mb-5" style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>
            FAQ
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-xl">
            Everything you need to know about peptide protocols, looks maxing stacks, cycling, administration, and getting started.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-16">
        {faqs.map(section => (
          <div key={section.category}>
            <p className="label-gold mb-6">{section.category}</p>
            <div className="space-y-3">
              {section.questions.map((item, i) => {
                const id = `${section.category}-${i}`
                const isOpen = open === id
                return (
                  <div key={i} className="card rounded-xl overflow-hidden">
                    <button
                      className="w-full flex items-start justify-between gap-4 p-5 text-left"
                      onClick={() => setOpen(isOpen ? null : id)}
                    >
                      <span className="text-white font-600 text-[15px] leading-snug">{item.q}</span>
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full border border-[#d4a043]/40 flex items-center justify-center mt-0.5 transition-transform duration-200"
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M5 1v8M1 5h8" stroke="#d4a043" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-white/[0.05]">
                        <p className="text-[#8888a0] text-[15px] leading-relaxed pt-4">{item.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Ready to start your protocol?
          </h2>
          <p className="text-[#8888a0] text-[16px] mb-8">
            Browse all peptides or explore our curated stack protocols below.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/products" className="btn-secondary text-[13px] px-6 py-3">Browse All Peptides</Link>
            <Link href="/stacks" className="btn-secondary text-[13px] px-6 py-3">Stack Protocols</Link>
            <Link href="/guide" className="btn-secondary text-[13px] px-6 py-3">Protocol Guide</Link>
            <a href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary text-[13px] px-6 py-3">
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
