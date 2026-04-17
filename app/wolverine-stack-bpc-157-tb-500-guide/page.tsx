import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'The Wolverine Stack: BPC-157 + TB-500 Complete Protocol — Dosing, Injury Guide & Results | PeptidesMuscle',
  description: 'The definitive Wolverine Stack guide. BPC-157 + TB-500 dosing protocols, injury-specific approaches for tendons, joints and muscle, week-by-week results timeline, and loading vs maintenance phases.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/wolverine-stack-bpc-157-tb-500-guide' },
  keywords: 'wolverine stack bpc-157 tb-500, wolverine peptide stack protocol, bpc-157 tb-500 dosage, wolverine stack healing results, bpc-157 tb-500 injury recovery',
  openGraph: {
    title: 'The Wolverine Stack: BPC-157 + TB-500 Complete Protocol | PeptidesMuscle',
    description: 'Injury-specific protocols, loading phases, and week-by-week results timeline for the gold standard recovery stack.',
    url: 'https://www.peptidesmuscle.com/wolverine-stack-bpc-157-tb-500-guide',
    type: 'article', siteName: 'PeptidesMuscle',
  },
  twitter: { card: 'summary_large_image', title: 'The Wolverine Stack: BPC-157 + TB-500 Complete Protocol', description: 'The definitive guide to the gold standard injury recovery stack.', images: ['/max-avatar.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'The Wolverine Stack: BPC-157 + TB-500 Complete Protocol',
      datePublished: '2026-03-21',
      dateModified: '2026-03-21',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com', logo: { '@type': 'ImageObject', url: 'https://www.peptidesmuscle.com/max-avatar.png' } },
      author: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#dr-marcus-chen', name: 'Dr. Marcus Chen', url: 'https://www.peptidesmuscle.com/about/editors' },
      reviewedBy: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#dr-marcus-chen' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is the Wolverine Stack?', acceptedAnswer: { '@type': 'Answer', text: 'The Wolverine Stack is the combination of BPC-157 and TB-500 — two peptides with complementary healing mechanisms. BPC-157 provides targeted local healing at the injury site while TB-500 distributes systemically through the bloodstream to repair tissue throughout the body simultaneously. Together they create the most comprehensive peptide recovery protocol available.' } },
        { '@type': 'Question', name: 'What is the Wolverine Stack dosage?', acceptedAnswer: { '@type': 'Answer', text: 'Standard Wolverine Stack protocol: BPC-157 at 250–500mcg daily, injected subcutaneously near the injury site or abdominally for systemic effects. TB-500 at 2–5mg per week (split into 2 injections) during the loading phase for 4–6 weeks, followed by 2mg weekly for maintenance. Both are run concurrently for 8–12 weeks.' } },
        { '@type': 'Question', name: 'How long does the Wolverine Stack take to work?', acceptedAnswer: { '@type': 'Answer', text: 'Most users notice initial pain reduction and improved mobility within 1–2 weeks. Significant structural repair — for tendons, ligaments, and chronic injury — typically requires 4–6 weeks. Full protocol completion at 8–12 weeks delivers the maximum tissue regeneration benefit.' } },
      ],
    },
  ],
}


export default function WolverineStackPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[500px] h-[350px] bg-[#40c090] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Recovery & Healing Protocol</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.1 }}>
            The Wolverine Stack<br />
            <span className="italic" style={{ color: '#40c090' }}>BPC-157 + TB-500</span>
          </h1>
      <AuthorByline datePublished="2026-03-21" dateModified="2026-03-21" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            The gold standard peptide protocol for injury recovery. Local precision plus systemic coverage — the two mechanisms that no single peptide can replicate alone.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Why BPC-157 and TB-500 Work Better Together
            </h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>BPC-157 is a 15 amino acid synthetic peptide derived from a gastric protein sequence. When injected near an injury site, it triggers a cascade of localized healing: angiogenesis (new blood vessel formation), upregulation of growth factor receptors, and modulation of nitric oxide synthesis. The result is dramatically accelerated repair at the targeted location. Its limitation: it works best where you put it.</p>
            <p>TB-500 is a synthetic analogue of Thymosin Beta-4, a protein found in virtually every cell. Unlike BPC-157, TB-500 distributes systemically through the bloodstream — reaching every injury site, area of inflammation, and tissue in the body simultaneously. Its limitation: it is less concentrated at any single location.</p>
            <p>Together, they cover the complete recovery spectrum. BPC-157 handles acute, targeted repair with precision. TB-500 handles the systemic inflammatory burden and multi-site recovery that hard-training athletes accumulate. This is why the protocol outperforms either compound alone — they are genuinely complementary, not redundant.</p>
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Injury-Specific Protocols
            </h2>
          </div>
          <div className="pl-10 space-y-4">
            <p className="text-[#8888a0] text-[16px] leading-relaxed mb-6">The Wolverine Stack is not one-size-fits-all. Injection approach and dose prioritization vary by injury type.</p>
            {[
              { type: 'Tendon Injuries', bpc: '400–500mcg SubQ directly adjacent to the affected tendon', tb: '5mg/week loading for 6 weeks, then 2.5mg/week maintenance', note: 'Tendons have poor blood supply — BPC-157 local injection is especially critical here. Expect 6–8 weeks for meaningful structural repair.' },
              { type: 'Ligament Tears', bpc: '300–500mcg SubQ near joint site, daily', tb: '4mg/week split 2x for loading, 2mg/week maintenance', note: 'Ligaments respond well to the combined approach. Prioritize TB-500 more heavily for multi-ligament involvement.' },
              { type: 'Muscle Tears', bpc: '250–400mcg IM at tear site or SubQ adjacent', tb: '3–4mg/week, 2x injection', note: 'Muscle has better blood supply — systemic TB-500 works well here. BPC-157 accelerates initial inflammation resolution.' },
              { type: 'Joint Inflammation', bpc: '250–300mcg daily, SubQ near joint', tb: '2–3mg/week maintenance protocol', note: 'For chronic joint issues, a longer lower-dose protocol (12+ weeks) often outperforms aggressive short cycles.' },
              { type: 'Gut Health (Systemic)', bpc: '250mcg SubQ abdominal (NOT near injury)', tb: '2–3mg/week systemic', note: 'For systemic and gut applications, abdominal SubQ is preferred. TB-500 handles the systemic anti-inflammatory burden.' },
            ].map(p => (
              <div key={p.type} className="card rounded-xl p-5">
                <p className="text-white font-700 text-[15px] mb-3">{p.type}</p>
                <div className="space-y-2 mb-3">
                  <div className="flex gap-3"><span className="text-[#40c090] text-[12px] font-600 w-16 flex-shrink-0">BPC-157</span><span className="text-[#8888a0] text-[13px]">{p.bpc}</span></div>
                  <div className="flex gap-3"><span className="text-[#d4a043] text-[12px] font-600 w-16 flex-shrink-0">TB-500</span><span className="text-[#8888a0] text-[13px]">{p.tb}</span></div>
                </div>
                <p className="text-[#50505e] text-[12px] italic">{p.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Week-by-Week Results Timeline
            </h2>
          </div>
          <div className="pl-10 space-y-3">
            {[
              { week: 'Week 1–2', title: 'Acute Inflammation Resolution', what: 'Noticeable reduction in acute pain and swelling. TB-500 begins reducing systemic inflammation. BPC-157 initiates angiogenesis at the local injury site. Most users report improved range of motion within 10–14 days.' },
              { week: 'Week 3–4', title: 'Structural Repair Begins', what: 'Growth factor receptors upregulate at injury sites. Collagen synthesis begins in damaged tendons and ligaments. Many users can begin light loading of previously injured areas with reduced pain. Gut healing (if applicable) largely complete.' },
              { week: 'Week 5–8', title: 'Significant Tissue Regeneration', what: 'New blood vessel growth into damaged tissue is well established. Structural integrity of tendons and ligaments measurably improved. Most training injuries at this stage allow full return to training at modified intensity.' },
              { week: 'Week 8–12', title: 'Full Protocol Completion', what: 'Maximum tissue regeneration achieved. Chronic injuries that had resisted standard treatment typically show the most dramatic improvements in this phase. TB-500 transitions to maintenance dosing.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-5 card rounded-xl p-5">
                <div className="flex-shrink-0"><p className="text-[#d4a043] font-700 text-[14px]">{s.week}</p></div>
                <div>
                  <p className="text-white font-600 text-[14px] mb-1">{s.title}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{s.what}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Get the Wolverine Stack
            </h2>
          </div>
          <div className="pl-10 grid sm:grid-cols-2 gap-4">
            {[
              { name: 'BPC-157 10mg', desc: 'Targeted localized healing — the precision component', url: '/go/bpc-157-10mg', href: '/products/bpc-157-10mg' },
              { name: 'TB-500 10mg', desc: 'Systemic full-body coverage — the distribution component', url: '/go/tb-500-thymosin-beta-4-10mg', href: '/products/tb-500-thymosin-beta-4-10mg' },
            ].map(p => (
              <div key={p.name} className="card-elevated rounded-2xl p-6">
                <p className="text-white font-700 text-[16px] mb-2">{p.name}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">{p.desc}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center py-3 text-[13px] mb-2">
                  Buy Now →
                </a>
                <Link href={p.href} className="btn-ghost w-full justify-center py-2.5 text-[12px]">Learn More</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/peptides-for-hair-growth-loss', label: 'Peptides for Hair Growth', desc: 'TB-500 scalp vascularization as part of the hair protocol' },
              { href: '/looksmaxxing-routine-daily-protocol', label: 'Looksmaxxing Daily Routine', desc: 'Where BPC-157 and TB-500 fit in the full daily peptide schedule' },
              { href: '/how-to-inject-peptides-beginners-guide', label: 'How to Inject Peptides', desc: 'Reconstitution and injection technique for BPC-157 and TB-500' },
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'How the Wolverine Stack fits within broader multi-compound protocols' },
              { href: '/looksmaxxing-peptides-guide-men', label: 'Looksmaxxing Peptides: Men\'s Guide', desc: 'Recovery as the foundation layer of appearance optimization' },
              { href: '/blog', label: 'All Peptide Guides', desc: 'Browse every in-depth protocol and research article' },
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
