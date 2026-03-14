import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Protocol Guide | PeptidesMuscle',
  description: 'The complete guide to peptide protocols — from beginner fundamentals to advanced stacking strategies.',
}

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* HERO */}
      <section className="relative pt-32 pb-20">
        <div className="spot w-[500px] h-[300px] bg-[#d4a043] opacity-[0.04] top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Complete Reference</p>
          </div>
          <h1 className="display text-white mb-5" style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>
            Protocol Guide
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-xl">
            Everything you need to know about peptide optimization — mechanisms, administration, cycling, and protocols for elite physical transformation.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — What Are Peptides */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              What Are Peptides?
            </h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Peptides are short chains of amino acids — the same building blocks as proteins, but shorter (typically 2–50 amino acids). What makes peptides special is not their composition, but their function: they act as biological signaling molecules, binding to specific receptors and triggering precisely defined cellular responses.</p>
            <p>Your body naturally produces hundreds of peptide signaling molecules that govern virtually every biological process: growth hormone release, tissue repair, immune activation, sleep regulation, appetite, libido, and more. Optimization protocols use compounds that are identical to or structurally similar to these endogenous signals — leveraging the body&apos;s own machinery.</p>
            <p>This is the fundamental advantage: precision. Where a blunt intervention affects systems broadly, a peptide targets a specific receptor to trigger a specific response. The result is measurable, predictable outcomes with minimal off-target effects.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 02 — Categories */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              Peptide Categories
            </h2>
          </div>
          <div className="pl-10 grid sm:grid-cols-2 gap-4">
            {[
              { cat: 'GH Secretagogues', ex: 'Ipamorelin, CJC-1295, Tesamorelin, MK-677', desc: 'Stimulate growth hormone release from the pituitary. The foundation of body composition optimization.' },
              { cat: 'Tissue Repair', ex: 'BPC-157, TB-500', desc: 'Accelerate healing and regeneration of muscle, tendon, ligament, and neural tissue.' },
              { cat: 'Anti-Aging', ex: 'Epithalon, GHK-Cu, MOTS-c', desc: 'Address biological aging at the cellular level — telomere extension, gene expression reset, mitochondrial optimization.' },
              { cat: 'Melanocortin', ex: 'Melanotan 2, PT-141', desc: 'Activate melanocortin receptors governing pigmentation, libido, and appetite regulation.' },
              { cat: 'Nootropic', ex: 'Semax, Selank, DSIP', desc: 'Optimize cognitive function, reduce anxiety, improve sleep architecture, and enhance neural performance.' },
              { cat: 'Immune', ex: 'Thymosin Alpha-1, Thymulin', desc: 'Enhance immune function, T-cell production, and systemic defense capabilities.' },
            ].map(c => (
              <div key={c.cat} className="card rounded-xl p-5">
                <p className="text-white font-700 text-[15px] mb-1">{c.cat}</p>
                <p className="text-[#d4a043] text-[12px] mb-2">{c.ex}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 03 — Administration */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              Administration Methods
            </h2>
          </div>
          <div className="pl-10 space-y-3">
            {[
              { method: 'Subcutaneous Injection', detail: 'The most common method. Inject into fatty tissue just beneath the skin — abdomen, outer thigh, or deltoid. Provides consistent, reliable absorption and is the standard for GH peptides, BPC-157, and most others.' },
              { method: 'Intramuscular Injection', detail: 'BPC-157 for specific injuries can be injected near the target muscle. Provides faster onset and more concentrated local effect.' },
              { method: 'Intranasal', detail: 'Semax and Selank are highly effective intranasally. The nasal mucosa provides direct bloodstream access with rapid onset. Administered via nasal applicator after reconstitution.' },
              { method: 'Oral', detail: 'MK-677 is the primary orally bioavailable compound in this class. BPC-157 also has oral forms effective specifically for gut health.' },
            ].map(a => (
              <div key={a.method} className="card rounded-xl p-5 flex gap-4">
                <div className="w-5 h-5 rounded-full border border-[#d4a043]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4a043]" />
                </div>
                <div>
                  <p className="text-white font-600 text-[15px] mb-1">{a.method}</p>
                  <p className="text-[#8888a0] text-[14px] leading-relaxed">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 04 — Cycling */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              Cycling Protocols
            </h2>
          </div>
          <div className="pl-10 space-y-3">
            {[
              { compound: 'GH Peptides (Ipamorelin, CJC-1295)', cycle: '3 months on, 4–6 weeks off', reason: 'Prevents pituitary desensitization and maintains response magnitude' },
              { compound: 'MK-677', cycle: '5 days on, 2 days off — or 3 months continuous', reason: 'Maintains ghrelin receptor sensitivity; IGF-1 levels can be monitored' },
              { compound: 'IGF-1 LR3', cycle: '4–6 weeks max, then 4–6 weeks off', reason: 'IGF-1 receptor downregulation occurs rapidly; break required for re-sensitization' },
              { compound: 'BPC-157 / TB-500', cycle: '4–8 weeks on, 4 weeks off', reason: 'Therapeutic effect achieved; receptor sensitivity maintained with breaks' },
              { compound: 'Epithalon', cycle: '10–20 day cycle, 2× per year', reason: 'Telomerase activation effect persists; infrequent cycles are sufficient' },
              { compound: 'Melanotan 2', cycle: 'Loading (1–2 weeks) + Maintenance doses', reason: 'Melanin loading requires initial saturation; maintenance preserves tan' },
            ].map(c => (
              <div key={c.compound} className="card rounded-xl p-4">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <p className="text-white font-600 text-[14px]">{c.compound}</p>
                  <p className="text-[#d4a043] font-500 text-[13px]">{c.cycle}</p>
                </div>
                <p className="text-[#8888a0] text-[13px]">{c.reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 05 — Beginner Start */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              Where to Start
            </h2>
          </div>
          <div className="pl-10">
            <p className="text-[#8888a0] text-[16px] leading-relaxed mb-7">
              For those new to peptide optimization, the ideal entry point combines safety, effectiveness, and comprehensive benefits. This beginner protocol addresses body composition, recovery, and general optimization without the complexity of advanced stacking.
            </p>
            <div className="card-elevated rounded-2xl overflow-hidden mb-7">
              <p className="label-gold px-6 pt-6 mb-0">The Entry Protocol</p>
              <div className="divide-y divide-white/[0.05]">
                {[
                  { name: 'Ipamorelin + CJC-1295', purpose: 'GH optimization — body composition and sleep', timing: 'Pre-sleep daily', slug: 'ipamorelin' },
                  { name: 'BPC-157', purpose: 'Foundation recovery, gut health, injury prevention', timing: '200–500mcg daily', slug: 'bpc-157' },
                  { name: 'GHK-Cu', purpose: 'Skin quality and anti-aging from week 4 onwards', timing: '3× weekly', slug: 'ghk-cu' },
                ].map(item => (
                  <div key={item.name} className="flex items-start gap-5 p-5">
                    <div className="w-5 h-5 rounded-full border border-[#d4a043]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4a043]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-600 text-[15px] mb-0.5">{item.name}</p>
                      <p className="text-[#8888a0] text-[13px]">{item.purpose}</p>
                    </div>
                    <p className="mono text-[11px] text-[#50505e] mt-0.5">{item.timing}</p>
                  </div>
                ))}
              </div>
              <div className="p-5 border-t border-white/[0.05]">
                <a href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary w-full justify-center py-3.5 text-[13px]">
                  Shop This Protocol
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="rule" />
        <div className="text-center">
          <p className="text-[#8888a0] text-[16px] mb-6">Ready to go deeper?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/products" className="btn-secondary text-[13px] px-6 py-3">Browse All Peptides</Link>
            <Link href="/stacks" className="btn-secondary text-[13px] px-6 py-3">Stack Protocols</Link>
            <Link href="/looks-maxing" className="btn-primary text-[13px] px-6 py-3">Looks Max Guide</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
