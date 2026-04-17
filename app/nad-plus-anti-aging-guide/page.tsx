import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'NAD+ Complete Guide: Anti-Aging, Cellular Energy, Sirtuins & Dosing Protocol | PeptidesMuscle',
  description: 'The definitive NAD+ guide. How NAD+ powers every cell, why it drops 50%+ with age, sirtuin activation, IV vs SubQ protocols, results timeline, and the ultimate longevity stack with Epithalon.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/nad-plus-anti-aging-guide' },
  keywords: 'NAD+ guide, NAD+ anti-aging, NAD+ dosage, NAD+ sirtuins, NAD+ benefits, nicotinamide adenine dinucleotide, NAD+ IV protocol, NAD+ longevity, NMN vs NAD, NAD+ mitochondria',
  openGraph: {
    title: 'NAD+ Complete Guide: Anti-Aging, Cellular Energy & Sirtuins | PeptidesMuscle',
    description: 'How NAD+ powers every cell in your body, why levels collapse with age, and the protocols that restore them for maximum longevity.',
    url: 'https://www.peptidesmuscle.com/nad-plus-anti-aging-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAD+ Complete Guide | PeptidesMuscle',
    description: 'The master coenzyme of aging — how NAD+ works, why it declines, and how to restore it.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'NAD+ Complete Guide: Anti-Aging, Cellular Energy, Sirtuins & Dosing Protocol',
      datePublished: '2026-03-29',
      dateModified: '2026-03-29',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com', logo: { '@type': 'ImageObject', url: 'https://www.peptidesmuscle.com/max-avatar.png' } },
      author: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent', name: 'LooksMax Agent', url: 'https://www.peptidesmuscle.com/about/editors' },
      reviewedBy: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#looksmax-agent' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is NAD+ and why does it matter for aging?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NAD+ (Nicotinamide Adenine Dinucleotide) is the master coenzyme present in every living cell. It is the central electron carrier in mitochondrial energy production, a required cofactor for the sirtuin family of longevity proteins, and a critical substrate consumed during DNA damage repair. NAD+ levels decline by more than 50% between young adulthood and middle age, and this decline is now recognized as a primary driver of the aging phenotype — reduced energy, cognitive decline, slower repair, and accelerating cellular deterioration.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between NAD+, NMN, and NR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NAD+ is the active molecule your cells use directly. NMN (Nicotinamide Mononucleotide) and NR (Nicotinamide Riboside) are precursors — the body must convert them into NAD+ through enzymatic steps before they can be used. Direct NAD+ supplementation (particularly IV or subcutaneous) bypasses these conversion steps entirely and raises intracellular NAD+ levels more rapidly and reliably than oral precursors. For individuals with impaired conversion pathways — which becomes more common with age — direct NAD+ is the superior option.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does the NAD+ flush sensation mean?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The flush — a warm, tingling sensation often felt during IV NAD+ infusions — is a normal physiological response. It results from the rapid increase in cellular NAD+ levels activating downstream signaling cascades, particularly in tissues with high energy demand. The flush is harmless, typically peaks at 20–40 minutes into an IV infusion, and resolves completely. Slowing the infusion rate reduces the intensity. The flush is often described as a reliable indicator that the infusion is active and tissue uptake is occurring.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does NAD+ take to show results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Energy improvements are typically felt within the first session or within the first week of daily subcutaneous dosing. Cognitive clarity, mood, and focus improvements emerge over weeks 2–4. Measurable changes in body composition, sleep quality, and physical performance become apparent at weeks 4–8. The deeper anti-aging effects — improved biomarkers, enhanced DNA repair efficiency, mitochondrial density changes — require a sustained 8–12 week protocol and are best assessed through before/after blood work.',
          },
        },
      ],
    },
  ],
}

const accent = '#a060ff'

const functions = [
  {
    title: 'Mitochondrial Energy Production',
    body: 'NAD+ is the primary electron carrier in oxidative phosphorylation — the process by which mitochondria convert nutrients into ATP. In the electron transport chain, NAD+ accepts electrons (becoming NADH), which are then transferred down the chain to drive ATP synthase. Without adequate NAD+, this process slows, ATP output drops, and every energy-dependent function in the cell degrades. This is why NAD+ decline is felt so viscerally as fatigue — it is literally a reduction in the cell\'s ability to produce fuel.',
  },
  {
    title: 'Sirtuin Activation',
    body: 'Sirtuins (SIRT1–SIRT7) are a family of NAD+-dependent deacylase enzymes often called the "longevity proteins." They regulate gene expression, promote DNA repair, suppress inflammation, stimulate mitochondrial biogenesis, and modulate metabolic homeostasis. Every sirtuin requires NAD+ as a co-substrate to function — when NAD+ falls, sirtuin activity falls with it. Restoring NAD+ is effectively restoring the activity of your body\'s most powerful endogenous anti-aging machinery.',
  },
  {
    title: 'DNA Repair via PARP Enzymes',
    body: 'PARP enzymes (Poly ADP-Ribose Polymerases) are the first responders to DNA strand breaks. When DNA is damaged, PARPs consume NAD+ to build repair scaffolding — a process that is absolutely essential for genomic integrity. The problem with aging: DNA damage accumulates faster, PARPs run continuously, and NAD+ is consumed at an accelerating rate. This creates a vicious cycle — less NAD+ means less repair efficiency, which means more damage, which means even more NAD+ is consumed. Supplementing NAD+ directly interrupts this cycle.',
  },
  {
    title: 'Circadian Rhythm Regulation',
    body: 'The circadian clock — the internal 24-hour cycle that governs sleep, metabolism, hormonal pulses, and cellular maintenance — is directly dependent on NAD+ oscillations. SIRT1 and CLOCK/BMAL1 proteins work in a feedback loop that requires adequate NAD+ to maintain rhythm fidelity. When NAD+ levels fall, circadian amplitude decreases: sleep quality worsens, metabolic timing breaks down, and the cellular maintenance that occurs during sleep (autophagy, DNA repair) becomes less efficient. This is why NAD+ restoration often improves sleep architecture before other benefits appear.',
  },
]

const deficiencyCards = [
  {
    sign: 'Chronic Fatigue',
    detail: 'The most universal symptom. When mitochondrial NAD+ is inadequate, ATP production is throttled at its source. Cells operating at reduced energy output creates a systemic fatigue that is not resolved by sleep, caffeine, or willpower — because it is a metabolic limitation at the cellular level.',
  },
  {
    sign: 'Brain Fog & Cognitive Decline',
    detail: 'The brain is the most metabolically expensive organ in the body, consuming roughly 20% of total energy despite being only 2% of body mass. Neurons are exquisitely sensitive to NAD+ decline. SIRT1 and SIRT3 activity in the brain supports synaptic plasticity, neuronal survival, and protection against oxidative stress. Insufficient NAD+ manifests as difficulty concentrating, poor working memory, and reduced mental clarity.',
  },
  {
    sign: 'Slow Recovery & Repair',
    detail: 'Athletes and active individuals notice this first: training recovery that used to take 24–48 hours extends to 72 hours or longer. Muscle soreness lingers. Connective tissue feels perpetually tight. PARP-mediated DNA repair and SIRT1-driven muscle protein synthesis both require NAD+. When levels are suboptimal, the molecular machinery of recovery operates below capacity.',
  },
  {
    sign: 'Metabolic Dysregulation',
    detail: 'SIRT1 and SIRT3 regulate insulin sensitivity, fatty acid oxidation, and glucose metabolism. NAD+ decline impairs these pathways, contributing to insulin resistance, difficulty losing body fat, and altered metabolic rate. This is mechanistically linked to why metabolic health tends to deteriorate with age even in individuals who maintain consistent diet and exercise habits.',
  },
  {
    sign: 'Accelerated Skin Aging',
    detail: 'Skin cells are highly proliferative and have enormous DNA repair requirements. NAD+ decline reduces the skin\'s ability to repair UV-induced damage, maintain collagen synthesis, and regulate the epigenetic programs that control cellular aging. The visible result: accelerated formation of fine lines, loss of elasticity, and uneven skin tone.',
  },
  {
    sign: 'Immune Dysfunction',
    detail: 'Immune cells — particularly T-cells and macrophages — have high metabolic demands during activation. SIRT1 and SIRT6 regulate inflammatory gene expression and immune homeostasis. NAD+ deficiency impairs the immune system\'s ability to mount rapid, effective responses while simultaneously losing restraint over chronic low-grade inflammation — the pattern known as inflammaging.',
  },
]

const timeline = [
  {
    phase: 'Week 1–2',
    primary: 'Energy and alertness improvement. Many users report a noticeable lift in physical and mental energy within the first session (IV) or within the first 5–7 days of daily subcutaneous dosing. The mechanism is direct: ATP production upregulates as cellular NAD+ is restored.',
    secondary: 'Sleep quality often improves first, before other benefits appear. Circadian NAD+ oscillations begin normalizing, which restores SIRT1-dependent sleep architecture. Reduced time to sleep onset and improved deep sleep density are commonly reported.',
    note: 'Mitochondrial energy production and circadian normalization activate first.',
  },
  {
    phase: 'Weeks 3–4',
    primary: 'Cognitive clarity sharpens. Working memory, focus duration, and mental processing speed improve as SIRT1 activity in the brain increases. The neuronal protection and synaptic plasticity effects of adequate NAD+ become measurable at this window.',
    secondary: 'Mood stability improves. NAD+-dependent sirtuin activity influences neurotransmitter regulation and stress resilience. Users frequently report reduced anxiety, improved emotional regulation, and elevated baseline mood without stimulant-like highs.',
    note: 'Neurological and mood benefits emerge as sirtuin activity increases across weeks.',
  },
  {
    phase: 'Weeks 5–8',
    primary: 'Body composition changes become apparent. SIRT1 and SIRT3 regulate insulin sensitivity and fatty acid oxidation. Improved metabolic flexibility — the ability to efficiently switch between glucose and fat as fuel — contributes to leaner body composition even without caloric changes.',
    secondary: 'Physical performance and recovery improve measurably. Strength output increases as muscle cells produce more ATP per contraction cycle. Recovery time between sessions shortens as DNA repair and protein synthesis efficiency increase.',
    note: 'Metabolic and performance adaptations peak during this window.',
  },
  {
    phase: 'Weeks 9–12',
    primary: 'Anti-aging biomarker improvements. Epigenetic aging clocks, inflammatory markers (CRP, IL-6), and metabolic panels show measurable improvement with before/after blood work. SIRT6-mediated DNA repair efficiency is measurably enhanced.',
    secondary: 'Skin quality, hair texture, and physical appearance changes become noticeable to others, not just to the individual. Collagen synthesis and cellular maintenance at the tissue level accumulate to visible thresholds over this timeframe.',
    note: 'A complete 12-week protocol is required to capture the full anti-aging benefit layer.',
  },
]

const dosingCards = [
  {
    label: 'IV Protocol (Loading)',
    detail: 'IV NAD+ infusions: 250–500mg in 250–500ml saline, infused over 2–4 hours. A standard loading protocol is 4–10 consecutive daily infusions. This delivers the highest peak plasma levels and most rapid cellular saturation. The flush sensation is normal — reduce infusion rate if it becomes uncomfortable.',
  },
  {
    label: 'SubQ Protocol (Ongoing)',
    detail: 'Subcutaneous injection of 50–100mg NAD+ daily. Inject into abdominal subcutaneous fat, rotating sites. SubQ provides more practical ongoing dosing than IV and maintains elevated NAD+ levels with consistent daily administration. Most longevity protocols use SubQ as the primary delivery method after an IV loading phase.',
  },
  {
    label: 'Loading Schedule',
    detail: 'Begin with an IV loading phase of 4–5 infusions over 1–2 weeks to rapidly restore cellular NAD+ to optimal levels. Transition to daily SubQ dosing of 50–100mg for 8–12 weeks as the maintenance phase. This two-phase approach saturates tissue rapidly, then sustains elevated levels throughout the protocol.',
  },
  {
    label: 'Maintenance & Reconstitution',
    detail: 'Reconstitute lyophilized NAD+ powder with bacteriostatic water (1ml per 100mg). Use an insulin syringe (29–31 gauge) for SubQ. Refrigerate reconstituted solution and use within 28 days. Store unmixed vials at -20°C for long-term storage. Rotate injection sites to prevent local irritation.',
  },
]

export default function NadPlusAntiAgingPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] bg-[#a060ff] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Anti-Aging & Longevity</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            NAD+:<br />
            <span className="italic" style={{ color: accent }}>The Master Molecule of Aging</span>
          </h1>
      <AuthorByline datePublished="2026-03-29" dateModified="2026-03-29" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            Every cell in your body depends on NAD+ to produce energy, repair DNA, and activate the longevity proteins that determine how fast you age. Here is why levels collapse — and exactly how to restore them.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — WHAT NAD+ IS AND WHY IT DECLINES */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>What NAD+ Is and Why It Declines</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Nicotinamide Adenine Dinucleotide — NAD+ — is a coenzyme found in every living cell on earth. It is not a single-purpose molecule. It does not do one thing and do it well. It is the central metabolic currency of the cell, required for hundreds of enzymatic reactions, present in two interconverting forms (NAD+ and NADH), and so fundamental to life that organisms from yeast to mammals have conserved it across billions of years of evolution. When researchers at the Sinclair Lab at Harvard and the de Cabo Lab at the NIH identified NAD+ decline as a primary driver of mammalian aging, it was not a fringe theory — it was the convergence of decades of research in metabolism, epigenetics, and DNA biology pointing at the same molecule.</p>
            <p>In your twenties, your cells maintain robust NAD+ levels. The mitochondria hum with activity, producing ATP efficiently. SIRT1 and its sibling sirtuins patrol the genome, silencing inflammatory genes and activating repair. PARP enzymes fix DNA strand breaks as fast as they appear. The circadian clock ticks with clean amplitude, ensuring the cellular maintenance work of sleep runs on schedule. The system works because NAD+ is abundant.</p>
            <p>By your forties and fifties, NAD+ levels have fallen by more than 50% relative to peak levels. This is not a minor perturbation — it is a systematic collapse of the molecule that powers the entire anti-aging apparatus. The decline is not caused by a single mechanism but by at least three converging processes that accelerate with age.</p>
            <p>The first is PARP overconsumption. As we age, the rate of DNA damage increases — UV radiation, oxidative stress, environmental toxins, and metabolic byproducts all accumulate. PARP enzymes respond to every strand break by consuming NAD+ to build repair scaffolding. The more damage, the more PARP activity, the more NAD+ consumed. This creates a self-reinforcing downward spiral: NAD+ depletion reduces repair efficiency, which allows damage to accumulate faster, which activates more PARPs, which depletes NAD+ further.</p>
            <p>The second is CD38 upregulation. CD38 is an enzyme that degrades NAD+ — and its expression increases dramatically with age and with chronic inflammation. Studies in mice show that CD38 knockout animals maintain significantly higher NAD+ levels into old age. In humans, elevated CD38 activity driven by senescent cells and inflammatory cytokines is a major accelerant of age-related NAD+ decline that is entirely independent of biosynthesis capacity.</p>
            <p>The third is reduced biosynthesis. The salvage pathway — the primary route by which cells recycle NAD+ from breakdown products — becomes less efficient with age. NAMPT (Nicotinamide Phosphoribosyltransferase), the rate-limiting enzyme in this pathway, declines in expression and activity in multiple tissues. The result is that even if consumption were constant, production capacity falls short. With consumption simultaneously increasing, the gap between supply and demand widens with every passing year.</p>
            <p>The consequence of this triple-mechanism collapse is that by middle age, your cells are attempting to run every energy, repair, and regulatory process on half the molecular fuel they once had. This is not a metaphor. It is a measurable biochemical reality — and it is addressable.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 02 — THE FOUR CRITICAL FUNCTIONS */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>The Four Critical Functions of NAD+</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>To understand why restoring NAD+ has such broad and profound effects, you need to understand the scope of what it does. NAD+ is not a supplement that supports one pathway. It is the substrate for four of the most fundamental biological processes involved in aging, energy, and health.</p>
          </div>
          <div className="pl-10 mt-6 grid sm:grid-cols-2 gap-4">
            {functions.map((f, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{f.title}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="pl-10 mt-6 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>The sirtuin story deserves particular emphasis. There are seven human sirtuins (SIRT1–SIRT7), each localized to different cellular compartments and performing overlapping but distinct functions. SIRT1, primarily nuclear, regulates gene expression by deacetylating histones — essentially controlling which genes are switched on and off. SIRT3, in the mitochondrial matrix, activates the enzymes of the electron transport chain and protects against mitochondrial oxidative stress. SIRT6, also nuclear, is perhaps the most powerful DNA repair sirtuin — mice overexpressing SIRT6 live significantly longer than controls, and SIRT6 activity directly determines the efficiency of base excision repair and double-strand break repair.</p>
            <p>Every one of these sirtuins requires NAD+ as a co-substrate — not as a cofactor that is regenerated, but as a substrate that is consumed. The activity of the entire sirtuin longevity system is therefore directly proportional to intracellular NAD+ availability. This is the mechanistic bridge between cellular metabolic state and the rate of biological aging. It is why NAD+ restoration is not simply about feeling more energetic — it is about reactivating the molecular machinery that determines how fast your genome deteriorates and how well your cells maintain themselves over time.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 03 — SIGNS OF NAD+ DEFICIENCY */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Signs of NAD+ Deficiency</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Because NAD+ underpins so many fundamental processes, its deficiency does not present as a single discrete symptom — it presents as a broad deterioration of multiple systems simultaneously. The clinical picture of NAD+ decline is recognizable precisely because it matches what we commonly attribute to "just getting older." That attribution, while understandable, obscures a mechanistically actionable cause.</p>
          </div>
          <div className="pl-10 mt-6 grid sm:grid-cols-2 gap-4">
            {deficiencyCards.map((d, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{d.sign}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{d.detail}</p>
              </div>
            ))}
          </div>
          <div className="pl-10 mt-6 card rounded-xl p-5">
            <p className="text-white font-600 text-[14px] mb-2">The Cascade Effect</p>
            <p className="text-[#8888a0] text-[14px] leading-relaxed">These signs rarely appear in isolation. NAD+ deficiency creates a cascade: reduced mitochondrial efficiency causes fatigue, which reduces physical activity, which reduces the metabolic signaling that stimulates NAD+ biosynthesis, which further reduces energy, which further reduces activity. Simultaneously, the cognitive decline reduces motivation and executive function, making it harder to adopt the lifestyle interventions that would otherwise help. Recognizing NAD+ decline as a root-cause driver — rather than treating each symptom individually — is the shift in framing that makes restoration strategies so effective.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 04 — RESULTS TIMELINE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>NAD+ Results Timeline</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed mb-6">
            <p>NAD+ restoration does not produce a linear dose-response. Different biological systems reach saturation at different rates, and the downstream effects of sirtuin reactivation accumulate over weeks and months. Understanding the timeline helps set accurate expectations and prevents premature discontinuation before the deeper anti-aging benefits have time to manifest.</p>
          </div>
          <div className="pl-10 space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-3" style={{ color: accent }}>{t.phase}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-2">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">PRIMARY EFFECTS</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.primary}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">SECONDARY EFFECTS</p>
                    <p className="text-[#aaaabc] text-[13px] leading-relaxed">{t.secondary}</p>
                  </div>
                </div>
                <p className="text-[#50505e] text-[12px] italic mt-2">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 05 — DOSING PROTOCOL */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Dosing Protocol</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>NAD+ can be delivered through three primary routes: intravenous infusion, subcutaneous injection, and oral supplementation (as direct NAD+ or as precursors NMN/NR). Each has a distinct pharmacokinetic profile, and the optimal choice depends on your goals, access, and whether you are in a loading or maintenance phase.</p>
            <p>IV infusion is the gold standard for acute NAD+ restoration. It delivers the highest plasma concentration, achieves cellular saturation fastest, and produces the most immediate symptomatic response — many users report the energy and clarity lift beginning within 30–60 minutes of starting an infusion. IV protocols are used by longevity clinics as loading phases before transitioning patients to self-administered SubQ maintenance. The flush sensation — warmth and tingling, most intense in the chest, face, and extremities — is universally reported and universally harmless. It results from NAD+-driven signaling cascades activating in high-metabolic-demand tissues and can be controlled by adjusting infusion rate.</p>
            <p>Subcutaneous injection is the practical backbone of ongoing NAD+ protocols. It bypasses the digestive system entirely (unlike oral NMN/NR), delivers NAD+ directly into tissue, and achieves systemic levels that oral supplementation cannot reliably match — particularly in older individuals with reduced conversion enzyme activity. Daily SubQ dosing of 50–100mg is the standard maintenance protocol following an IV loading phase.</p>
            <p>The case for direct NAD+ over NMN and NR is straightforward: precursors require enzymatic conversion steps — NMN to NAD+ requires NMNAT enzymes; NR to NAD+ requires both NRK and NMNAT. These conversion enzymes decline with age and vary between individuals. Direct NAD+ supplementation eliminates this variability and ensures the molecule your cells actually use is what reaches them.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {dosingCards.map((item, i) => (
                <div key={i} className="card rounded-xl p-4">
                  <p className="text-white font-600 text-[13px] mb-1">{item.label}</p>
                  <p className="text-[#8888a0] text-[13px] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="card rounded-xl p-5 mt-4">
              <p className="text-white font-600 text-[14px] mb-2">NAD+ vs NMN vs NR: The Direct Advantage</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed mb-3">
                Oral NMN and NR have meaningful evidence behind them — primarily in younger, healthy populations where conversion enzymes are intact. But the population most in need of NAD+ restoration — older individuals with declining conversion capacity — is precisely the population where precursor conversion is least reliable. Injectable direct NAD+ sidesteps this problem entirely.
              </p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">
                For a complete longevity protocol, direct NAD+ (IV or SubQ) forms the foundation, while oral NMN or NR can serve as a cost-effective supplement on days between injections. The two approaches are additive, not mutually exclusive.
              </p>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — STACKING WITH EPITHALON */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Stacking NAD+ with Epithalon: The Longevity Stack</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">
              NAD+ and Epithalon operate through complementary and non-overlapping mechanisms, making them the most scientifically coherent longevity combination available. Together they address two distinct but converging aging processes: the metabolic collapse of cellular energy and sirtuin activity (NAD+) and the progressive shortening and dysfunction of telomeres that limits cellular replication capacity (Epithalon).
            </p>
            <p className="text-[#8888a0] text-[16px] leading-relaxed">
              Epithalon (Epitalon) is a tetrapeptide — Ala-Glu-Asp-Gly — originally derived from the pineal gland extract Epithalamin in Russian research that spans more than four decades. Its primary mechanism is upregulation of telomerase, the enzyme that extends telomeric DNA and restores telomere length. In human studies, Epithalon administration has been associated with telomere lengthening, reduced oxidative stress markers, and measurable improvements in immune function and neuroendocrine parameters.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[14px] mb-2">NAD+</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">Restores cellular energy production and sirtuin longevity protein activity. Addresses metabolic aging and DNA repair capacity. Works at the coenzyme level to power the cell&apos;s own maintenance machinery.</p>
                <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                <p className="text-[#aaaabc] text-[13px]">50–100mg SubQ daily; or 250–500mg IV (loading)</p>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #e0a0ff' }}>
                <p className="text-white font-700 text-[14px] mb-2">Epithalon</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed mb-3">Upregulates telomerase to extend telomeres and restore replicative capacity. Addresses structural genomic aging at the chromosome level. Also modulates the pineal-neuroendocrine axis, normalizing melatonin and cortisol rhythms.</p>
                <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                <p className="text-[#aaaabc] text-[13px]">5–10mg/day SubQ for 10–20 days, 1–2× per year</p>
              </div>
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Why They Work Better Together</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">
                NAD+ addresses the metabolic and epigenetic drivers of aging — insufficient energy, declining sirtuin activity, impaired DNA repair. Epithalon addresses the structural limitation on cellular lifespan — telomere attrition. A cell can have perfect NAD+ levels but still reach replicative senescence if its telomeres are critically short. Conversely, extended telomere length provides no benefit if the cell cannot produce enough ATP or maintain its genome. The combination targets aging at both the metabolic and structural levels simultaneously.
              </p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed mt-2">
                Additionally, Epithalon&apos;s neuroendocrine normalization — particularly its effect on circadian melatonin amplitude — may synergize with NAD+&apos;s circadian clock restoration effects. Both compounds independently improve circadian rhythm fidelity, and the combination may produce additive benefits to sleep quality and the nighttime cellular maintenance programs that depend on it.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/epithalon-anti-aging-telomere-peptide-guide" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
                Full Epithalon Protocol Guide →
              </Link>
              <Link href="/products/epitalon-50mg" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
                Epithalon Product Page →
              </Link>
            </div>
            <div className="card rounded-xl p-5 mt-2">
              <p className="text-white font-600 text-[14px] mb-3">Expanding the Stack: CJC-1295 + Ipamorelin</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed mb-3">
                For individuals building a comprehensive anti-aging protocol, adding a growth hormone secretagogue stack — CJC-1295 combined with Ipamorelin — to NAD+ and Epithalon creates a three-axis longevity approach. CJC-1295/Ipamorelin restores the growth hormone pulse amplitude that declines with age, driving IGF-1 production, muscle protein synthesis, adipose tissue reduction, and the cellular repair processes that growth hormone governs overnight. Growth hormone secretion is tightly linked to both sleep quality and circadian rhythm — the same systems that NAD+ and Epithalon support — making the combination particularly coherent.
              </p>
              <Link href="/cjc-1295-ipamorelin-results-timeline" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
                CJC-1295 + Ipamorelin Results Timeline →
              </Link>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 07 — GET NAD+ */}
        <div>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>Get NAD+</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">NAD+</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Pharmaceutical-grade lyophilized NAD+. Certificate of analysis verified. The direct coenzyme — no conversion steps required. For IV or SubQ administration.</p>
              <div className="flex gap-3">
                <a href="/go/nad-500mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/nad-500mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Longevity Stack</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">NAD+ paired with Epithalon — the most complete anti-aging peptide combination targeting both metabolic aging and telomere length simultaneously.</p>
              <div className="flex gap-3">
                <a href="/go/nad-500mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Stack →</a>
                <Link href="/products/epitalon-50mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Epithalon Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">BPC-157</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Add BPC-157 to your NAD+ protocol for systemic tissue repair and gut integrity. Supports the physical recovery aspect of the longevity stack.</p>
              <div className="flex gap-3">
                <a href="/go/nad-500mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/bpc-157-10mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">CJC-1295 + Ipamorelin</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Restore growth hormone pulse amplitude. The GH secretagogue combination that completes the comprehensive anti-aging and body recomposition protocol.</p>
              <div className="flex gap-3">
                <a href="/go/nad-500mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rule" />

        {/* 08 — FAQ */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">08</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Frequently Asked Questions</h2>
          </div>
          <div className="pl-10 space-y-4">
            {[
              {
                q: 'Does NAD+ need to be cycled?',
                a: 'NAD+ does not require cycling in the conventional sense — there is no receptor downregulation, hormonal suppression, or tolerance development. Many longevity protocols run continuous daily SubQ dosing year-round, using periodic IV loading phases (every 3–6 months) to ensure full cellular saturation. The body\'s NAD+ biosynthesis pathways continue to function alongside supplementation and are not suppressed by exogenous administration. That said, a practical approach is 12 weeks on, 4 weeks off, during which oral NMN or NR can bridge the gap.',
              },
              {
                q: 'Is NAD+ safe?',
                a: 'NAD+ has a well-established safety profile. It is an endogenous molecule present in every cell of the human body — supplementation increases levels of a compound already present, rather than introducing a foreign substance. Published clinical trials including those from the Washington University School of Medicine have administered NMN (which raises NAD+) to older adults without adverse effects. Direct NAD+ IV infusions are routinely administered in clinical settings globally. The flush sensation associated with IV delivery is harmless and self-resolving.',
              },
              {
                q: 'Can I test my NAD+ levels?',
                a: 'Yes. Whole-blood NAD+ testing is available through specialist longevity labs and some direct-to-consumer panels. Baseline testing before starting a protocol — and repeat testing at 8–12 weeks — provides objective data on restoration efficacy and helps calibrate dosing. Intracellular NAD+ in peripheral blood mononuclear cells (PBMCs) is the most clinically meaningful measure, though whole-blood NAD+ is more accessible. Working with a longevity-focused physician to interpret results and adjust protocols accordingly is ideal.',
              },
              {
                q: 'How does NAD+ compare to rapamycin for longevity?',
                a: 'NAD+ and rapamycin (an mTOR inhibitor used off-label in longevity medicine) target entirely different aging pathways and are used simultaneously in many advanced longevity protocols. Rapamycin suppresses mTOR signaling to promote autophagy and reduce cellular senescence burden. NAD+ restores the energetic and sirtuin-dependent foundation of cellular function. The two approaches are not in competition — they are complementary, addressing distinct mechanisms. NAD+ restoration can be thought of as increasing the cell\'s energy and maintenance capacity, while rapamycin shifts how that capacity is allocated.',
              },
              {
                q: 'What lifestyle factors support NAD+ levels?',
                a: 'Several lifestyle interventions have demonstrated capacity to increase endogenous NAD+ production. Caloric restriction and intermittent fasting upregulate NAMPT expression and increase NAD+ biosynthesis flux. High-intensity exercise acutely raises skeletal muscle NAD+ and stimulates SIRT1 activity. Cold exposure activates brown adipose tissue, which has particularly high NAD+ turnover. Avoiding excessive alcohol consumption is important — alcohol metabolism consumes NAD+, and chronic consumption chronically depletes it. These interventions are additive with, not substitutes for, direct supplementation protocols.',
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
              { href: '/epithalon-anti-aging-telomere-peptide-guide', label: 'Epithalon Anti-Aging Guide', desc: 'Telomere extension, telomerase upregulation, and the longevity peptide from decades of Russian research' },
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin Timeline', desc: 'Growth hormone restoration protocol and week-by-week results for body recomposition and anti-aging' },
              { href: '/how-to-inject-peptides-beginners-guide', label: 'How to Inject Peptides', desc: 'Reconstitution, needle selection, injection technique, and storage — complete beginner guide' },
              { href: '/bpc-157-complete-guide', label: 'BPC-157 Complete Guide', desc: 'Injury repair, gut healing, and the most versatile healing peptide — full protocol and timeline' },
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'How to build synergistic peptide stacks for anti-aging, body recomposition, and recovery' },
              { href: '/blog', label: 'All Peptide Guides', desc: 'Browse every in-depth protocol, research article, and results guide' },
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
