'use client'

import { useState } from 'react'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-white font-600 text-[16px] leading-snug">{q}</span>
        <svg
          className={`w-5 h-5 text-[#d4a043] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4"/>
        </svg>
      </button>
      {open && (
        <p className="text-[#8888a0] text-[15px] leading-relaxed pb-5 pr-8">{a}</p>
      )}
    </div>
  )
}

const FAQ_ITEMS = [
  { q: 'What exactly are peptides and how do they differ from supplements?', a: 'Peptides are short chains of amino acids — 2 to 50 — that function as biological signaling molecules. Unlike supplements that add nutrients, peptides communicate directly with cellular receptors to trigger precise, defined responses: collagen production, GH release, tissue repair, or immune modulation. The mechanism is specific, the outcome is measurable, and the effect is consistent.' },
  { q: 'Are peptides safe to use?', a: 'The peptides catalogued here are research compounds with well-documented safety profiles in the literature. They operate within natural biological pathways rather than overriding them — for example, peptide GH secretagogues pulse GH physiologically rather than flooding the system. As with any research compound, use requires understanding of protocols, dosing, and any individual contraindications.' },
  { q: 'How long until I see results from peptide protocols?', a: 'It depends on the compound and the system being targeted. BPC-157 shows tendon and gut effects within 2–4 weeks. GHK-Cu shows measurable skin improvement at 4–8 weeks. GH peptides improve sleep quality in week 1–2, body composition at 8–12 weeks. GLP-1 peptides begin reducing appetite within the first injection. Epitalon effects on sleep are noted within days; biological aging markers show change over months.' },
  { q: 'Can peptides be stacked together?', a: 'Yes — and strategic stacking significantly amplifies outcomes. BPC-157 and TB-500 are the canonical recovery stack, with complementary and non-competing mechanisms. CJC-1295 and Ipamorelin together produce a double-stimulus GH pulse neither achieves alone. The stack protocols on this site are designed around compounds with synergistic mechanisms.' },
  { q: "What's the difference between BPC-157 and TB-500?", a: 'BPC-157 is a 15-amino acid peptide that acts locally — most effective when administered near the injury site, particularly effective for gut, tendon, and neural repair. TB-500 (Thymosin Beta-4) distributes systemically throughout the body, making it ideal for full-body inflammation, multiple concurrent injury sites, and systemic recovery. Together they cover both local precision and systemic scope.' },
  { q: 'Do I need to inject peptides or are there other options?', a: 'Most peptides require subcutaneous injection for reliable bioavailability. Oral bioavailability is generally low due to enzymatic breakdown in the GI tract — though a few smaller peptides have nasal spray formulations (Selank, Semax). The peptide protocols on this site assume subcutaneous administration using insulin syringes, which is straightforward with proper technique.' },
]

export default function HomeFAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      {FAQ_ITEMS.map(item => (
        <FAQItem key={item.q} q={item.q} a={item.a} />
      ))}
    </div>
  )
}
