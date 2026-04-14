import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide Guides & Research Articles | PeptidesMuscle Blog',
  description: 'In-depth guides on peptide protocols, looksmaxxing stacks, anti-aging science, body composition, and injectable peptide how-tos. Evidence-based research articles for serious optimizers.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/blog' },
  openGraph: {
    title: 'Peptide Guides & Research Articles | PeptidesMuscle',
    description: 'Deep-dive guides on GHK-Cu, CJC-1295, BPC-157, looksmaxxing stacks, and the science behind peptide optimization.',
    url: 'https://www.peptidesmuscle.com/blog',
    type: 'website',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: { card: 'summary_large_image', title: 'Peptide Guides & Blog | PeptidesMuscle', description: 'Evidence-based peptide guides for looksmaxxing, anti-aging, and body composition.', images: ['/max-avatar.png'] },
}

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Looksmaxxing', value: 'looksmaxxing' },
  { label: 'Anti-Aging', value: 'anti-aging' },
  { label: 'Body Composition', value: 'body-comp' },
  { label: 'Protocols', value: 'protocols' },
  { label: 'Recovery', value: 'recovery' },
]

const articles = [
  {
    href: '/cagrilintide-semaglutide-complete-guide',
    title: 'CagriSema (Cagrilintide + Semaglutide) Complete Guide: Dual-Pathway Fat Loss',
    desc: 'Two completely different satiety pathways — GLP-1 and amylin — activated simultaneously for additive fat loss beyond semaglutide alone. Full protocol, titration schedule, and comparison to tirzepatide.',
    tags: ['Weight Loss', 'GLP-1'],
    category: 'body-comp',
    badge: 'New',
    color: '#e05080',
  },
  {
    href: '/bacteriostatic-water-peptide-reconstitution-guide',
    title: 'Bacteriostatic Water: How to Reconstitute Peptides Safely — Complete Guide',
    desc: 'The non-negotiable foundation for every injectable peptide protocol. Reconstitution math, concentration calculations, sterile technique, and storage guidelines for every compound.',
    tags: ['Protocols', 'Beginner'],
    category: 'protocols',
    badge: 'New',
    color: '#40c090',
  },
  {
    href: '/tb-500-complete-guide',
    title: 'TB-500 Complete Guide: Systemic Healing, Dosing & The Wolverine Stack',
    desc: 'Thymosin Beta-4 analogue that travels systemically to repair tissue throughout the body. Actin regulation, loading protocol, and why TB-500 + BPC-157 is the gold-standard recovery stack.',
    tags: ['Recovery', 'TB-500'],
    category: 'recovery',
    badge: 'New',
    color: '#40c090',
  },
  {
    href: '/nad-plus-anti-aging-guide',
    title: 'NAD+: The Anti-Aging Coenzyme That Powers Every Cell',
    desc: 'Why NAD+ drops 50%+ with age, how sirtuin longevity proteins depend on it, and the complete IV vs. SubQ dosing protocol for cellular restoration.',
    tags: ['Anti-Aging', 'NAD+'],
    category: 'anti-aging',
    badge: 'New',
    color: '#a060ff',
  },
  {
    href: '/tirzepatide-complete-guide',
    title: 'Tirzepatide Complete Guide: Dual GIP+GLP-1 Protocol & SURMOUNT Results',
    desc: 'The dual GIP and GLP-1 receptor agonist showing 20.9% average weight loss in clinical trials. Full titration schedule, side effect management, and body composition data.',
    tags: ['Weight Loss', 'Tirzepatide'],
    category: 'body-comp',
    badge: 'New',
    color: '#e05080',
  },
  {
    href: '/peptides-cognitive-performance-guide',
    title: 'Peptides for Cognitive Performance: Brain Optimization Stack Guide',
    desc: 'NAD+, Epithalon, CJC-1295/Ipamorelin, and BPC-157 for focus, memory, neuroprotection, and reversing cognitive decline. The science and the protocol.',
    tags: ['Cognitive', 'Anti-Aging'],
    category: 'anti-aging',
    badge: 'New',
    color: '#40c0ff',
  },
  {
    href: '/retatrutide-body-recomposition-looksmaxxing',
    title: 'Retatrutide for Body Recomposition & Looksmaxxing: The 28.7% Fat Loss Stack',
    desc: 'What 28.7% body weight reduction looks like in practice — and how stacking retatrutide with CJC-1295/Ipamorelin and GHK-Cu preserves muscle and tightens skin during fat loss.',
    tags: ['Body Comp', 'Looksmaxxing'],
    category: 'body-comp',
    badge: 'New',
    color: '#6090ff',
  },
  {
    href: '/bpc-157-complete-guide',
    title: 'BPC-157 Complete Guide: Dosing, Injury Protocols & Results',
    desc: 'Mechanism, injury-specific dosing for tendons, joints, gut, and muscle, week-by-week results timeline, and the Wolverine Stack combination with TB-500.',
    tags: ['Recovery', 'BPC-157'],
    category: 'recovery',
    badge: 'New',
    color: '#40c090',
  },
  {
    href: '/igf-1-lr3-muscle-growth-guide',
    title: 'IGF-1 LR3: Muscle Growth, Dosing & Complete Protocol',
    desc: 'How IGF-1 LR3 creates new muscle fibers via hyperplasia, cycle protocol, comparison to HGH and CJC-1295, and the Body Sculptor stack.',
    tags: ['Body Comp', 'Muscle Growth'],
    category: 'body-comp',
    badge: 'New',
    color: '#6090ff',
  },
  {
    href: '/semaglutide-complete-guide',
    title: 'Semaglutide (Ozempic/Wegovy): Complete Protocol Guide',
    desc: 'How GLP-1 agonism drives 14.9% weight loss, titration schedule, side effect management, muscle preservation, and comparison to tirzepatide and retatrutide.',
    tags: ['Weight Loss', 'GLP-1'],
    category: 'body-comp',
    badge: 'New',
    color: '#6090ff',
  },
  {
    href: '/celebrities-famous-people-using-peptides',
    title: 'Famous People & Celebrities Using Peptides: Athletes, Actors & Biohackers',
    desc: 'Joe Rogan, Andrew Huberman, Bryan Johnson, Peter Attia — who uses what, the compounds they discuss publicly, and the protocols behind the results.',
    tags: ['Looksmaxxing', 'Celebrity'],
    category: 'looksmaxxing',
    badge: 'New',
    color: '#d4a043',
  },
  {
    href: '/looksmaxxing-peptides-women',
    title: 'Looksmaxxing Peptides for Women: Skin, Body & Anti-Aging Guide',
    desc: 'Female-specific protocols — GHK-Cu for collagen, SNAP-8 for expression lines, CJC-1295 for body composition, Epithalon for hormonal anti-aging. Dosing adapted for women.',
    tags: ['Looksmaxxing', 'Women'],
    category: 'looksmaxxing',
    badge: 'New',
    color: '#d4a043',
  },
  {
    href: '/facial-looksmaxxing-peptides-guide',
    title: 'Facial Looksmaxxing Peptides: GHK-Cu, SNAP-8 & Collagen Protocol',
    desc: 'Peptides specifically for facial optimization — GHK-Cu collagen mechanisms, SNAP-8 expression line reduction, target area application, and 12-week timeline.',
    tags: ['Looksmaxxing', 'Skin'],
    category: 'looksmaxxing',
    badge: 'New',
    color: '#d4a043',
  },
  {
    href: '/looksmaxxing-routine-daily-protocol',
    title: 'Looksmaxxing Daily Routine: The Complete 2026 Peptide Protocol',
    desc: 'Morning-to-night schedule with exact timings, dosing, and the reasoning behind every decision. GHK-Cu, SNAP-8, CJC-1295, BPC-157.',
    tags: ['Looksmaxxing', 'Protocols'],
    category: 'looksmaxxing',
    color: '#d4a043',
  },
  {
    href: '/peptides-for-hair-growth-loss',
    title: 'Peptides for Hair Growth & Hair Loss Prevention',
    desc: 'GHK-Cu activates follicle stem cells and upregulates KGF/VEGF. TB-500 rebuilds scalp microvascularization. The complete hair protocol.',
    tags: ['Looksmaxxing', 'GHK-Cu', 'TB-500'],
    category: 'looksmaxxing',
    badge: 'New',
    color: '#d4a043',
  },
  {
    href: '/melanotan-2-looksmaxxing-tan',
    title: 'Melanotan 2 for Looksmaxxing: Tan, Libido & Appetite Guide',
    desc: 'A melanocortin receptor agonist with three simultaneous effects: deep melanin tan, libido enhancement, and appetite suppression.',
    tags: ['Looksmaxxing', 'MT-2'],
    category: 'looksmaxxing',
    badge: 'New',
    color: '#d4a043',
  },
  {
    href: '/looksmaxxing-peptides-guide-men',
    title: 'Looksmaxxing Peptides for Men: Complete Stack Guide',
    desc: 'GHK-Cu for skin collagen, SNAP-8 for wrinkle reduction, CJC-1295 for body recomp, BPC-157 for recovery — protocol stacks by goal and budget.',
    tags: ['Looksmaxxing', 'Stack'],
    category: 'looksmaxxing',
    color: '#d4a043',
  },
  {
    href: '/ghk-cu-before-and-after-guide',
    title: 'GHK-Cu Before & After: 12-Week Results Guide',
    desc: 'Injectable vs. topical comparison, skin density data, hair benefits, and a week-by-week timeline of what to expect.',
    tags: ['GHK-Cu', 'Skin', 'Looksmaxxing'],
    category: 'looksmaxxing',
    color: '#d4a043',
  },
  {
    href: '/snap-8-vs-botox-peptide-alternative',
    title: 'SNAP-8 vs. Botox: Can a Peptide Replace Neurotoxins?',
    desc: 'Honest comparison of SNAP-8 (acetyl octapeptide-3) against botulinum toxin for expression line reduction and wrinkle prevention.',
    tags: ['SNAP-8', 'Skin', 'Looksmaxxing'],
    category: 'looksmaxxing',
    color: '#d4a043',
  },
  {
    href: '/epithalon-anti-aging-telomere-peptide-guide',
    title: 'Epithalon: Anti-Aging, Telomere Science & Complete Protocol',
    desc: 'The only known compound that activates telomerase to rebuild telomere caps. Cellular longevity, melatonin regulation, and 10-day cycle protocol.',
    tags: ['Anti-Aging', 'Epithalon', 'Longevity'],
    category: 'anti-aging',
    color: '#a060ff',
  },
  {
    href: '/cjc-1295-ipamorelin-results-timeline',
    title: 'CJC-1295 + Ipamorelin: Results Timeline & Protocol',
    desc: 'Dual receptor GH optimization: week-by-week results for body composition, skin quality, sleep, and recovery.',
    tags: ['GH Peptides', 'Body Comp', 'CJC-1295'],
    category: 'body-comp',
    color: '#6090ff',
  },
  {
    href: '/tirzepatide-vs-semaglutide-vs-retatrutide',
    title: 'Tirzepatide vs Semaglutide vs Retatrutide: Complete Comparison',
    desc: 'The most thorough comparison of the three leading GLP-1 agonists for weight loss — mechanism, efficacy, side effects, and which to choose.',
    tags: ['Weight Loss', 'GLP-1', 'Body Comp'],
    category: 'body-comp',
    color: '#6090ff',
  },
  {
    href: '/retatrutide-complete-guide-results-dosage',
    title: 'Retatrutide: Complete Guide, Results & Dosage Protocol',
    desc: 'The triple receptor agonist (GLP-1R/GIPR/GCGR) showing the most dramatic weight loss results of any peptide. Full protocol and titration schedule.',
    tags: ['Weight Loss', 'Retatrutide'],
    category: 'body-comp',
    color: '#6090ff',
  },
  {
    href: '/wolverine-stack-bpc-157-tb-500-guide',
    title: 'The Wolverine Stack: BPC-157 + TB-500 Complete Guide',
    desc: 'The most powerful recovery combination in peptide protocols. Connective tissue repair, gut health, and systemic anti-inflammatory effects.',
    tags: ['Recovery', 'BPC-157', 'TB-500'],
    category: 'recovery',
    color: '#40c090',
  },
  {
    href: '/how-to-inject-peptides-beginners-guide',
    title: 'How to Inject Peptides: Complete Beginner\'s Guide',
    desc: 'Reconstitution, needle selection, injection sites, storage, and every step in between. The definitive first-injection guide.',
    tags: ['Protocols', 'Beginners'],
    category: 'protocols',
    color: '#8888a0',
  },
  {
    href: '/peptide-stacking-guide',
    title: 'Peptide Stacking Guide: Combinations, Synergies & Timing',
    desc: 'How to combine peptides safely and effectively. Receptor compatibility, synergistic mechanisms, and pre-built protocol stacks.',
    tags: ['Protocols', 'Stacking'],
    category: 'protocols',
    color: '#8888a0',
  },
  {
    href: '/glp-1-peptides-complete-guide',
    title: "GLP-1 Peptides: Complete Beginner's Guide to Semaglutide, Tirzepatide & Retatrutide",
    desc: 'Everything you need to know about GLP-1 receptor agonist peptides. How they work, comparing semaglutide vs tirzepatide vs retatrutide, results timelines, dosing protocols, and who should start with which compound.',
    tags: ['Weight Loss', 'GLP-1'],
    category: 'body-comp',
    badge: 'New',
    color: '#e05080',
  },
  {
    href: '/peptides-for-gut-health-leaky-gut',
    title: 'BPC-157 for Gut Health & Leaky Gut: The Complete Protocol',
    desc: 'How BPC-157 heals leaky gut, intestinal permeability, and IBD. Complete oral and subcutaneous protocols, timeline for gut healing, and supporting peptides including KPV and Thymosin Alpha-1.',
    tags: ['Recovery', 'BPC-157'],
    category: 'recovery',
    badge: 'New',
    color: '#40c090',
  },
  {
    href: '/thymosin-alpha-1-immune-peptide-guide',
    title: "Thymosin Alpha-1: The Immune System's Master Regulator",
    desc: 'Complete Thymosin Alpha-1 guide. FDA-approved in 36 countries for immune support, TA-1 mechanism, T-cell maturation, clinical applications for viral infections, autoimmunity, and chronic fatigue, with full dosing protocol.',
    tags: ['Anti-Aging', 'Immune'],
    category: 'anti-aging',
    badge: 'New',
    color: '#a78bfa',
  },
  {
    href: '/dsip-sleep-optimization-peptide-guide',
    title: 'DSIP: The Neuropeptide That Rewires Your Sleep Architecture',
    desc: 'DSIP directly induces delta-wave sleep — where 80% of GH is secreted and structural tissue repair occurs. Mechanism, protocols, and stack with Selank and Ipamorelin.',
    tags: ['Anti-Aging', 'Sleep'],
    category: 'anti-aging',
    badge: 'New',
    color: '#a78bfa',
  },
  {
    href: '/kisspeptin-10-testosterone-hormone-guide',
    title: 'Kisspeptin-10: The Hormone Master Switch for Testosterone & Fertility',
    desc: 'Kisspeptin-10 regulates the HPG axis above GnRH, LH, and FSH — the highest-leverage intervention point for natural testosterone optimization. Full protocol and TRT comparison.',
    tags: ['Anti-Aging', 'Hormones'],
    category: 'anti-aging',
    badge: 'New',
    color: '#f59e0b',
  },
  {
    href: '/peptides-for-joint-pain-arthritis',
    title: 'Peptides for Joint Pain & Arthritis: BPC-157, TB-500 & Cartilage Regeneration',
    desc: 'How BPC-157 and TB-500 repair joints that conventional medicine cannot. Angiogenesis, SOX-9 cartilage gene activation, synovial anti-inflammation, and full joint-specific protocols.',
    tags: ['Recovery', 'BPC-157'],
    category: 'recovery',
    badge: 'New',
    color: '#60a5fa',
  },
  {
    href: '/aod-9604-fat-loss-peptide-guide',
    title: 'AOD-9604 Fat Loss Peptide Guide: HGH Fragment Dosing & Results',
    desc: 'How the HGH C-terminal fragment activates lipolysis without blood sugar effects, body recomposition protocols, looksmaxxing applications, and stacking with CJC-1295.',
    tags: ['Weight Loss', 'AOD-9604'],
    category: 'body-comp',
    badge: 'New',
    color: '#f97316',
  },
  {
    href: '/ghrp-6-complete-guide',
    title: 'GHRP-6 Complete Guide: Dosage, Results & GH Secretagogue Protocol',
    desc: 'Ghrelin receptor activation for GH pulse generation, appetite stimulation, muscle growth, and full dosing protocols with CJC-1295 stacking.',
    tags: ['Growth Peptides', 'GHRP-6'],
    category: 'body-comp',
    badge: 'New',
    color: '#6090ff',
  },
  {
    href: '/hexarelin-growth-hormone-peptide-guide',
    title: 'Hexarelin Guide: The Most Potent GHRP — Dosage, Cardioprotection & Protocols',
    desc: 'Why Hexarelin is the most potent GHRP, its unique cardioprotective effects via CD36 receptor, desensitization management, and full dosing protocols.',
    tags: ['Growth Peptides', 'Hexarelin'],
    category: 'body-comp',
    badge: 'New',
    color: '#6090ff',
  },
  {
    href: '/ipamorelin-complete-guide',
    title: 'Ipamorelin Complete Guide: Protocol, Results & Anti-Aging Benefits',
    desc: "Why Ipamorelin is the cleanest GH secretagogue — selective GHS-R agonism with no cortisol or prolactin spike. Anti-aging and looksmaxxing protocols.",
    tags: ['Growth Peptides', 'Ipamorelin'],
    category: 'body-comp',
    badge: 'New',
    color: '#6090ff',
  },
  {
    href: '/looksmaxxing-research-peptides-beginners',
    title: 'Looksmaxxing Research Peptides: Complete Beginner Guide 2026',
    desc: "The definitive beginner's guide to looksmaxxing with research peptides. The 4 pillars of peptide-based appearance optimization and how to build your first stack safely.",
    tags: ['Looksmaxxing', 'Beginner'],
    category: 'looksmaxxing',
    badge: 'New',
    color: '#d4a043',
  },
  {
    href: '/mk-677-ibutamoren-guide',
    title: 'MK-677 Ibutamoren Guide: Dosage, Results, Looksmaxxing & Science',
    desc: 'How this oral GH secretagogue works, dosing protocols, week-by-week results timeline, looksmaxxing applications for skin, hair, and facial fullness.',
    tags: ['Growth Peptides', 'MK-677'],
    category: 'body-comp',
    badge: 'New',
    color: '#6090ff',
  },
  {
    href: '/peptides-for-collagen-skin-anti-aging',
    title: 'Peptides for Collagen, Skin & Anti-Aging: Complete Guide',
    desc: 'Science of skin aging, top 5 skin peptides ranked, complete injection protocols, and a week-by-week results timeline for collagen synthesis and wrinkle reduction.',
    tags: ['Looksmaxxing', 'Skin'],
    category: 'looksmaxxing',
    badge: 'New',
    color: '#d4a043',
  },
  {
    href: '/pt-141-bremelanotide-guide',
    title: 'PT-141 Bremelanotide Complete Guide: Libido, Dosing & Looksmaxxing',
    desc: 'How PT-141 activates MC3R/MC4R for libido and sexual function, intranasal vs SubQ dosing, tanning, appetite suppression, and looksmaxxing protocols.',
    tags: ['Looksmaxxing', 'PT-141'],
    category: 'looksmaxxing',
    badge: 'New',
    color: '#e879a0',
  },
  {
    href: '/selank-semax-nootropic-peptide-guide',
    title: 'Selank & Semax Nootropic Peptide Guide: Anxiety, Focus & Cognitive Enhancement',
    desc: 'Russian nootropic peptides for anxiety reduction, cognitive enhancement, focus, mood, and social confidence. Mechanism, dosing, intranasal protocol, and comparison.',
    tags: ['Cognitive', 'Nootropic'],
    category: 'anti-aging',
    badge: 'New',
    color: '#40c0ff',
  },
  {
    href: '/sermorelin-anti-aging-hgh-guide',
    title: 'Sermorelin Anti-Aging Guide: HGH Stimulation, Dosing & Results',
    desc: 'How this GHRH analogue stimulates natural HGH release, anti-aging benefits, body composition, sleep improvement, and full dosing protocols.',
    tags: ['Anti-Aging', 'Sermorelin'],
    category: 'anti-aging',
    badge: 'New',
    color: '#a060ff',
  },
  {
    href: '/peptides-for-women-complete-guide',
    title: 'Peptides for Women: Complete Guide to Hormones, Fat Loss, Skin & Recovery',
    desc: 'Female-specific protocols covering hormonal optimization, GHK-Cu for collagen, AOD-9604 for fat loss, Kisspeptin-10 for HPG axis, and CJC-1295/Ipamorelin for body composition — by life stage.',
    tags: ['Women', 'Looksmaxxing'],
    category: 'looksmaxxing',
    badge: 'New',
    color: '#e879a0',
  },
  {
    href: '/peptides-athletic-performance-sports',
    title: 'Peptides for Athletic Performance: Complete Sports Guide',
    desc: 'BPC-157 + TB-500 recovery stack, CJC-1295/Ipamorelin for GH optimization, Hexarelin for strength, and MOTS-c for endurance. The elite recovery protocol explained.',
    tags: ['Recovery', 'Body Comp'],
    category: 'recovery',
    badge: 'New',
    color: '#22d3ee',
  },
  {
    href: '/fat-loss-peptides-complete-guide',
    title: 'Fat Loss Peptides: Complete Ranking & Guide for 2026',
    desc: 'Every fat loss peptide ranked and explained — GLP-1 agonists, AOD-9604, MOTS-c, and CJC-1295/Ipamorelin. Comparison table, goal-based protocols, and realistic results timelines.',
    tags: ['Weight Loss', 'GLP-1'],
    category: 'body-comp',
    badge: 'New',
    color: '#f97316',
  },
  {
    href: '/mots-c-mitochondrial-longevity-guide',
    title: 'MOTS-c: Mitochondrial Peptide for Longevity, Fat Loss & Metabolic Health',
    desc: 'The only mitochondria-encoded peptide. AMPK activation, visceral fat targeting, centenarian genetics data, athletic performance effects, and the complete 5-10mg protocol.',
    tags: ['Anti-Aging', 'Longevity'],
    category: 'anti-aging',
    badge: 'New',
    color: '#34d399',
  },
]

const featured = articles.slice(0, 3)
const rest = articles.slice(3)

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] bg-[#d4a043] opacity-[0.035] top-0 right-[10%]" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Evidence-Based Guides</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-4" style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.08 }}>
            Peptide Research<br />
            <span className="italic" style={{ color: '#d4a043' }}>& Guides</span>
          </h1>
          <p className="text-[#8888a0] text-lg leading-relaxed max-w-2xl">
            Deep-dive protocols, mechanism breakdowns, and clinical-grade guides for looksmaxxing, anti-aging, body composition, and recovery.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        {/* Featured — top 3 */}
        <div className="mb-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Latest Articles</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {featured.map(a => (
              <Link key={a.href} href={a.href} className="card rounded-2xl p-6 group hover:border-[#d4a043]/25 transition-colors flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    {a.tags.slice(0, 2).map(t => (
                      <span key={t} className="tag text-[10px]">{t}</span>
                    ))}
                  </div>
                  {a.badge && <span className="tag-gold text-[10px]">{a.badge}</span>}
                </div>
                <h2 className="text-white font-700 text-[16px] leading-snug mb-3 group-hover:text-[#d4a043] transition-colors flex-1">
                  {a.title}
                </h2>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">{a.desc}</p>
                <p className="text-[#d4a043] text-[12px] font-600 flex items-center gap-1">
                  Read Guide
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rule my-12" />

        {/* All articles */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">All Guides</p>
          </div>
          <div className="space-y-3">
            {rest.map(a => (
              <Link key={a.href} href={a.href} className="card rounded-xl p-5 group hover:border-[#d4a043]/20 transition-colors flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {a.tags.slice(0, 2).map(t => (
                      <span key={t} className="tag text-[10px]">{t}</span>
                    ))}
                  </div>
                  <p className="text-white font-700 text-[15px] leading-snug mb-1 group-hover:text-[#d4a043] transition-colors">{a.title}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed line-clamp-2">{a.desc}</p>
                </div>
                <svg className="w-4 h-4 text-[#50505e] group-hover:text-[#d4a043] group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>

        <div className="rule my-16" />

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#8888a0] text-[15px] mb-6">Ready to start your protocol?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored" className="btn-primary">
              Shop All Peptides →
            </a>
            <Link href="/stacks" className="btn-secondary">
              View Protocol Stacks
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
