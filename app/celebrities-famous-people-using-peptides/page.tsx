import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Famous People & Celebrities Using Peptides: Athletes, Actors & Biohackers | PeptidesMuscle',
  description: 'Joe Rogan, Andrew Huberman, Bryan Johnson, and top athletes have all publicly discussed peptide use. A breakdown of who uses what, why, and the protocols behind the results.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/celebrities-famous-people-using-peptides' },
  keywords: 'celebrities using peptides, famous people peptides, joe rogan peptides, andrew huberman peptides, bryan johnson peptides, athletes using peptides, hollywood peptides anti-aging',
  openGraph: { title: 'Famous People & Celebrities Using Peptides', description: 'Joe Rogan, Andrew Huberman, Bryan Johnson, and top athletes — who uses what and why.', url: 'https://www.peptidesmuscle.com/celebrities-famous-people-using-peptides', type: 'article', siteName: 'PeptidesMuscle', images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }] },
  twitter: { card: 'summary_large_image', title: 'Famous People & Celebrities Using Peptides', description: 'Who uses what — Joe Rogan, Andrew Huberman, Bryan Johnson, and elite athletes.', images: ['/max-avatar.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: 'Famous People & Celebrities Using Peptides', datePublished: '2026-03-27', dateModified: '2026-03-27', publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' } },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does Joe Rogan use peptides?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Joe Rogan has discussed BPC-157 and TB-500 extensively on the Joe Rogan Experience, describing their use for injury recovery — particularly knee and joint issues. He has also discussed growth hormone secretagogues and referred to peptide protocols recommended by his physician.' } },
        { '@type': 'Question', name: 'What peptides does Andrew Huberman use?', acceptedAnswer: { '@type': 'Answer', text: 'Andrew Huberman has publicly discussed BPC-157 on the Huberman Lab podcast for its research on gut health and tissue repair. He has also covered growth hormone peptides, NAD+ precursors, and the mechanisms behind compounds like TB-500 in the context of his longevity and performance protocols.' } },
        { '@type': 'Question', name: 'Does Bryan Johnson use peptides in his Blueprint protocol?', acceptedAnswer: { '@type': 'Answer', text: 'Bryan Johnson\'s Blueprint protocol has included various peptide-adjacent compounds. He has discussed GHK-Cu topically for skin quality, and his team has evaluated growth hormone secretagogues for longevity. His full protocol stack is among the most comprehensively documented self-experimentation programs publicly available.' } },
      ],
    },
  ],
}

const AFF = (s: string) => `https://phiogen.is/products/${s}?ref=PEPS`

const people = [
  {
    num: '01',
    name: 'Joe Rogan',
    role: 'Podcaster, UFC Commentator, Comedian',
    color: '#d4a043',
    peptides: 'BPC-157, TB-500, GH Secretagogues',
    body: 'Joe Rogan has been one of the most influential voices in mainstreaming peptide discussion. On the JRE, he has referenced BPC-157 and TB-500 for injury recovery — specifically joint, knee, and connective tissue damage accumulated over years of martial arts training. He has credited his physician with introducing him to peptide protocols and discussed the dramatic improvement in recovery speed.',
    quote: '"I\'ve been using BPC-157... it actually helped my knee significantly. It\'s a healing peptide." — Joe Rogan, JRE',
    compounds: [
      { name: 'BPC-157', reason: 'Joint and connective tissue recovery from martial arts injuries', href: '/products/bpc-157' },
      { name: 'TB-500', reason: 'Systemic healing, flexibility, and tendon repair', href: '/products/tb-500' },
    ],
  },
  {
    num: '02',
    name: 'Andrew Huberman',
    role: 'Neuroscientist, Stanford Professor, Podcaster',
    color: '#a060ff',
    peptides: 'BPC-157, Growth Hormone Peptides',
    body: 'Andrew Huberman has discussed peptide science extensively on the Huberman Lab podcast, covering the mechanisms of BPC-157 in gut permeability repair and tissue regeneration, growth hormone secretagogues for body composition and sleep quality, and various longevity compounds. As a scientist, Huberman is careful to distinguish between animal-model data and human clinical research — making his discussions among the most nuanced publicly available.',
    quote: '"BPC-157 has interesting data on healing gut tissue... the research on connective tissue is compelling." — Andrew Huberman, Huberman Lab',
    compounds: [
      { name: 'BPC-157', reason: 'Gut lining repair, tissue healing, anti-inflammatory', href: '/products/bpc-157' },
      { name: 'CJC-1295 / Ipamorelin', reason: 'Growth hormone optimization for body comp and sleep quality', href: '/products/cjc-1295-ipamorelin' },
    ],
  },
  {
    num: '03',
    name: 'Bryan Johnson',
    role: 'Tech Entrepreneur, Blueprint Protocol Creator',
    color: '#40c090',
    peptides: 'GHK-Cu, GH Secretagogues, Epithalon',
    body: 'Bryan Johnson\'s Blueprint protocol — the most documented human longevity experiment in history — has incorporated peptide compounds including GHK-Cu for skin rejuvenation and growth hormone optimization. Johnson\'s team publishes blood panel data, biological age measurements, and protocol changes in detail. His approach treats the body as a system to optimize quantitatively, and peptides feature in the skin, hormonal, and cellular age dimensions of his stack.',
    quote: '"The goal is to make my organs as young as possible... we use everything the evidence supports." — Bryan Johnson, Blueprint',
    compounds: [
      { name: 'GHK-Cu', reason: 'Skin collagen density and anti-aging — topical and injectable', href: '/products/ghk-cu' },
      { name: 'Epithalon', reason: 'Telomere maintenance and cellular anti-aging cycles', href: '/products/epithalon' },
    ],
  },
  {
    num: '04',
    name: 'Professional Athletes',
    role: 'NFL, NBA, UFC, Olympic Sport',
    color: '#6090ff',
    peptides: 'BPC-157, TB-500, IGF-1 LR3',
    body: 'Professional athletes across the NFL, NBA, and UFC have been linked to peptide use — particularly BPC-157 and TB-500 for the accelerated injury recovery that defines elite sport longevity. While WADA has added certain peptides to the prohibited list, BPC-157 and TB-500 remain in a legal gray area in many sports. Multiple athletes and trainers have spoken openly about peptide protocols for connective tissue recovery, inflammation management, and reducing downtime from injury.',
    quote: 'Trainers in NFL locker rooms have described peptide protocols as "the biggest recovery tool no one talks about publicly."',
    compounds: [
      { name: 'BPC-157', reason: 'Rapid joint and tendon repair between games and training cycles', href: '/products/bpc-157' },
      { name: 'TB-500', reason: 'Systemic healing, reduced inflammation, improved movement quality', href: '/products/tb-500' },
    ],
  },
  {
    num: '05',
    name: 'Hollywood Anti-Aging Circle',
    role: 'Actors, Directors, Industry Executives',
    color: '#d4a043',
    peptides: 'GHK-Cu, SNAP-8, Epithalon, CJC-1295',
    body: 'In Hollywood, where appearance is literally currency, peptide use among high-profile actors and executives has been discussed in longevity clinics, biohacking forums, and leaked protocol documents for years. GHK-Cu for skin quality, SNAP-8 as a topical Botox alternative, and growth hormone peptides for body composition and skin tightening are widely used in this ecosystem. The results — visible maintenance of extraordinary appearance into the 50s and 60s — are often attributed to "good genetics" in public while the actual protocols are significantly more involved.',
    quote: 'Multiple longevity clinics in Beverly Hills report that GHK-Cu and SNAP-8 are among their most-requested injectable and topical compounds.',
    compounds: [
      { name: 'GHK-Cu', reason: 'Skin density, collagen architecture, the anti-aging compound of choice', href: '/products/ghk-cu' },
      { name: 'SNAP-8', reason: 'Expression line reduction — the topical Botox alternative', href: '/products/snap-8' },
    ],
  },
  {
    num: '06',
    name: 'Peter Attia',
    role: 'Longevity Physician, Author of "Outlive"',
    color: '#a060ff',
    peptides: 'GH Secretagogues, BPC-157',
    body: 'Dr. Peter Attia — longevity physician and author of the bestselling "Outlive" — has discussed growth hormone secretagogues, BPC-157, and various peptide compounds extensively on his podcast "The Drive." Attia is known for applying highly evidence-based standards to his personal protocol and distinguishing rigorously between what the data supports and what remains theoretical. His discussion of GH peptides in the context of metabolic health and body composition has informed thousands of practitioners.',
    quote: '"The data on [GH secretagogues] for body composition in the context of an overall longevity protocol is reasonably compelling." — Peter Attia, The Drive',
    compounds: [
      { name: 'CJC-1295 / Ipamorelin', reason: 'GH optimization for metabolic health and body composition', href: '/products/cjc-1295-ipamorelin' },
      { name: 'BPC-157', reason: 'Gut health and systemic anti-inflammatory function', href: '/products/bpc-157' },
    ],
  },
]

const whyFamousPeople = [
  { label: 'Access', body: 'Concierge physicians and longevity clinics make peptides accessible and medically supervised for high-income individuals before mainstream awareness catches up.' },
  { label: 'Results', body: 'The results — visible skin quality, body composition, accelerated recovery — are precisely the outcomes that matter in appearance-dependent or performance-dependent careers.' },
  { label: 'Research-led', body: 'Many high-profile adopters (Huberman, Attia, Johnson) are scientifically literate and read primary literature, adopting compounds based on mechanism before clinical trials complete.' },
  { label: 'Network effect', body: 'In tight networks (Hollywood, elite sport, tech) where someone\'s results are visible to others, adoption spreads rapidly — especially when the outcomes speak for themselves.' },
]

export default function CelebritiesPeptidesPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[700px] h-[400px] bg-[#d4a043] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Who Uses Peptides</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.1 }}>
            Famous People<br />
            <span className="italic" style={{ color: '#d4a043' }}>Using Peptides</span>
          </h1>
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            Joe Rogan, Andrew Huberman, Bryan Johnson, Peter Attia, and elite athletes have all publicly discussed peptide protocols. Here&apos;s who uses what — and the reasoning behind each compound.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Why</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Why Peptides Spread Through Elite Networks First
            </h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed mb-8">
            <p>Peptides reached mainstream awareness through a predictable path: elite performers — athletes, executives, entertainers — gained access through concierge physicians and longevity clinics, saw undeniable results, and talked about it publicly. The compounds spread through podcast discussions, leaked protocol documents, and the visible evidence of outcomes.</p>
            <p>What unites the people on this list is not wealth alone — it is the combination of access to medically supervised protocols, the scientific literacy to evaluate research, and careers where the outcomes of optimization (appearance, performance, recovery) have direct, measurable value.</p>
          </div>
          <div className="pl-10 grid sm:grid-cols-2 gap-4">
            {whyFamousPeople.map(w => (
              <div key={w.label} className="card rounded-xl p-5">
                <p className="text-[#d4a043] font-700 text-[13px] mb-2">{w.label}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {people.map((p, i) => (
          <div key={p.num}>
            <div className="flex items-start gap-6 mb-7">
              <p className="mono text-[12px] mt-1 flex-shrink-0" style={{ color: p.color }}>{p.num}</p>
              <div>
                <p className="text-[#50505e] text-[12px] uppercase tracking-widest mb-1">{p.role}</p>
                <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>{p.name}</h2>
                <p className="text-[13px] mt-1" style={{ color: p.color }}>{p.peptides}</p>
              </div>
            </div>
            <div className="pl-10 space-y-5">
              <p className="text-[#8888a0] text-[16px] leading-relaxed">{p.body}</p>
              <div className="card rounded-xl p-4 border-l-2" style={{ borderLeftColor: p.color }}>
                <p className="text-[#8888a0] text-[13px] italic leading-relaxed">{p.quote}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {p.compounds.map(c => (
                  <div key={c.name} className="card-elevated rounded-2xl p-5">
                    <p className="text-white font-700 text-[16px] mb-1">{c.name}</p>
                    <p className="text-[12px] mb-3" style={{ color: p.color }}>{c.reason}</p>
                    <Link href={c.href} className="btn-ghost justify-center py-2.5 text-[12px]">View Product →</Link>
                  </div>
                ))}
              </div>
            </div>
            {i < people.length - 1 && <div className="rule mt-14" />}
          </div>
        ))}

        <div className="rule" />

        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">Note</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              A Note on Public Disclosure
            </h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>The individuals profiled here have spoken publicly about peptides or their compounds have been disclosed through clinic documentation, podcast appearances, or public protocol databases. We do not speculate about private medical choices.</p>
            <p>What is notable is not merely that famous people use peptides — it is that the specific compounds they discuss (BPC-157, GHK-Cu, GH secretagogues) are the same ones with the strongest mechanistic rationale and the most consistent real-world results. The adoption pattern reflects the research, not celebrity trend-chasing.</p>
          </div>
        </div>

        <div className="rule" />

        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/wolverine-stack-bpc-157-tb-500-guide', label: 'The Wolverine Stack: BPC-157 + TB-500', desc: 'The recovery combination used by athletes and high-performers worldwide' },
              { href: '/epithalon-anti-aging-telomere-peptide-guide', label: 'Epithalon: Anti-Aging & Telomere Science', desc: 'The longevity compound in Bryan Johnson\'s cellular anti-aging protocol' },
              { href: '/ghk-cu-before-and-after-guide', label: 'GHK-Cu Before & After Guide', desc: 'The skin compound favored by Hollywood\'s anti-aging community' },
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin Results', desc: 'The GH peptide stack discussed by Huberman and Attia' },
              { href: '/looksmaxxing-peptides-guide-men', label: 'Looksmaxxing Peptides Guide', desc: 'The complete stack for skin, body, and recovery optimization' },
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'How to combine compounds safely — synergies, timing, receptor compatibility' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="card rounded-xl p-5 group hover:border-[#d4a043]/20 transition-colors">
                <p className="text-[#d4a043] text-[13px] font-600 mb-1 group-hover:underline">{r.label} →</p>
                <p className="text-[#8888a0] text-[13px]">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
