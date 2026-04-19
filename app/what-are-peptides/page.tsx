import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Are Peptides? Mechanisms, Receptor Targets & Research Context | PeptidesMuscle',
  description: 'A plain-language explainer on peptides — how short amino-acid chains act as biological signals, the receptor families they target, and how the category is studied in research settings.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/what-are-peptides' },
  keywords: 'what are peptides, peptide mechanism, peptide receptors, signaling peptides, research peptides explained',
  openGraph: {
    title: 'What Are Peptides? A Plain-Language Explainer | PeptidesMuscle',
    description: 'Short amino-acid chains, receptor-level signaling, and why the peptide class behaves differently from small molecules or proteins.',
    url: 'https://www.peptidesmuscle.com/what-are-peptides',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Are Peptides? A Plain-Language Explainer | PeptidesMuscle',
    description: 'Short amino-acid chains, receptor-level signaling, and why the peptide class behaves differently.',
    images: ['/max-avatar.png'],
  },
}

export default function WhatArePeptidesPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[300px] bg-[#d4a043] opacity-[0.04] top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Primer</p>
          </div>
          <h1 className="display text-white mb-5" style={{ fontSize: 'clamp(44px, 6.5vw, 88px)' }}>
            What Are Peptides?
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            Peptides are short chains of amino acids that act as biological signals. This is a plain-language explainer on what separates the peptide class from small molecules and full proteins — and why that distinction matters in research.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — Definition */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              The Short Definition
            </h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>A peptide is a chain of amino acids linked by peptide bonds. The cutoff between &quot;peptide&quot; and &quot;protein&quot; is fuzzy in practice, but a useful working definition is roughly 2 to 50 amino acids. Insulin, at 51 residues across two chains, sits right on the boundary and is often described either way depending on the audience.</p>
            <p>What distinguishes the class is not its chemistry but its role. Where a small molecule drug is typically an enzyme inhibitor or receptor modulator designed in a lab, most therapeutic peptides mimic — or are identical to — signaling molecules the body already makes. They are the language cells use to talk to each other.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 02 — Signal vs. Sledgehammer */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              Why &quot;Signal&quot; Is the Right Mental Model
            </h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>A small-molecule drug like ibuprofen works by inhibiting an enzyme (COX-1/2) everywhere in the body at once. The effect is broad because the mechanism is broad. Peptides generally work differently: they bind to a specific receptor on a specific cell type, and the downstream effect is whatever that receptor was already wired to do.</p>
            <p>GLP-1 peptides bind the GLP-1 receptor on pancreatic beta cells and in brainstem satiety centers. BPC-157 appears to act on angiogenic and growth-factor signaling at injury sites. GHK-Cu coordinates copper and modulates thousands of wound-healing genes in skin. The pattern is consistent: narrow receptor, specific tissue, defined downstream cascade.</p>
            <p>This is why peptides are often described as &quot;precision&quot; — not because they are inherently safer, but because the mechanism itself is tissue- and receptor-specific rather than systemic.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 03 — Families */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              Receptor Families You&apos;ll See Referenced
            </h2>
          </div>
          <div className="pl-10 grid sm:grid-cols-2 gap-4">
            {[
              { fam: 'GLP-1 / GIP / Glucagon', target: 'Incretin & glucagon receptors', ex: 'Semaglutide, tirzepatide, retatrutide, survodutide — studied in metabolic and obesity research.' },
              { fam: 'Growth Hormone Secretagogues', target: 'GHRH-R and ghrelin receptor', ex: 'Sermorelin, tesamorelin, ipamorelin, hexarelin — pulse-based GH release studied for body composition.' },
              { fam: 'Melanocortin', target: 'MC1R / MC3R / MC4R', ex: 'Melanotan II, PT-141 — pigmentation, appetite, sexual-function research.' },
              { fam: 'Thymic & Immune', target: 'TLR signaling and T-cell modulation', ex: 'Thymosin alpha-1, thymalin — studied in immune-modulation contexts.' },
              { fam: 'Tissue & Repair', target: 'Angiogenic & growth-factor pathways', ex: 'BPC-157, TB-500 — injury and regeneration models.' },
              { fam: 'Neuropeptides', target: 'Central nervous system receptors', ex: 'Selank, Semax, DSIP — cognition, stress, sleep research.' },
            ].map(f => (
              <div key={f.fam} className="card rounded-xl p-5">
                <p className="text-white font-700 text-[15px] mb-1">{f.fam}</p>
                <p className="text-[#d4a043] text-[12px] mb-2">{f.target}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{f.ex}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 04 — How they're studied */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              How Peptides Are Studied
            </h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Most clinical-grade peptides are delivered by subcutaneous or intramuscular injection because the gut degrades peptide bonds before absorption. A small number are orally bioavailable (MK-677, a small molecule often grouped with peptides; certain cyclic peptides engineered for stability), and a handful work intranasally (semax, selank) by exploiting direct nasal-to-brain transport.</p>
            <p>Research papers typically report peptide exposure in terms of receptor affinity (Kd / EC50), pharmacokinetics (half-life, Tmax, Cmax), and downstream biomarker movement rather than blanket &quot;effectiveness.&quot; The STEP-1 trial for semaglutide, for example, is reported as mean percent weight loss across a 68-week titration arm — not a single dose claim.</p>
            <p>Access and legality varies dramatically by compound and by jurisdiction. Some peptides are fully FDA-approved drugs (semaglutide, tirzepatide). Others are in active clinical development. Many are sold only as research-use chemicals and are not approved for human administration. Always verify the regulatory status of any specific compound in your jurisdiction.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 05 — Further reading */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              Further Reading
            </h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">
              For a broader reference library covering peptide categories, compound profiles, and research summaries, see Clavicular Peptides — an external resource with detailed coverage across the category.
            </p>
            <a
              href="https://www.clavicularspeptides.com/"
              target="_blank"
              rel="noopener"
              className="card-elevated rounded-2xl p-6 block hover:bg-white/[0.02] transition"
            >
              <p className="label-gold mb-2">External Resource</p>
              <p className="text-white font-700 text-[18px] mb-1">Clavicular Peptides</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed mb-3">
                Reference library covering peptide compounds, mechanisms, and research context. Visit clavicularspeptides.com for extended coverage.
              </p>
              <p className="text-[#d4a043] text-[13px] font-500">www.clavicularspeptides.com →</p>
            </a>
            <p className="text-[#50505e] text-[12px] leading-relaxed">
              Educational and research-context material only. Not medical advice. Not an endorsement of any specific protocol or product.
            </p>
          </div>
        </div>

        {/* Quick links */}
        <div className="rule" />
        <div className="text-center">
          <p className="text-[#8888a0] text-[16px] mb-6">Keep exploring</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/guide" className="btn-secondary text-[13px] px-6 py-3">Protocol Guide</Link>
            <Link href="/products" className="btn-secondary text-[13px] px-6 py-3">Browse Compounds</Link>
            <Link href="/learn" className="btn-primary text-[13px] px-6 py-3">Learn Hub</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
