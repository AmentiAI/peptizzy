import Link from 'next/link'
import type { Metadata } from 'next'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Peptides for Cognitive Performance: Brain Optimization Guide | PeptidesMuscle',
  description: 'The definitive guide to nootropic peptides. How NAD+, Epithalon, CJC-1295/Ipamorelin, and BPC-157 optimize brain function, protect against cognitive decline, and sharpen focus, memory, and mental clarity.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/peptides-cognitive-performance-guide' },
  keywords: 'peptides cognitive performance, nootropic peptides, NAD+ brain, Epithalon cognition, peptides memory, peptides focus, brain optimization peptides, neuroprotection, cognitive decline peptides',
  openGraph: {
    title: 'Peptides for Cognitive Performance: Brain Optimization Guide | PeptidesMuscle',
    description: 'How NAD+, Epithalon, CJC-1295/Ipamorelin, and BPC-157 enhance brain function, reverse cognitive decline, and sharpen focus, memory, and processing speed.',
    url: 'https://www.peptidesmuscle.com/peptides-cognitive-performance-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Cognitive Performance | PeptidesMuscle',
    description: 'The complete nootropic peptide guide — NAD+, Epithalon, CJC-1295/Ipamorelin, and BPC-157 for brain optimization.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      headline: 'Peptides for Cognitive Performance: Brain Optimization Guide',
      datePublished: '2026-03-29',
      dateModified: '2026-03-29',
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com', logo: { '@type': 'ImageObject', url: 'https://www.peptidesmuscle.com/max-avatar.png' } },
      author: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#dr-marcus-chen', name: 'Dr. Marcus Chen', url: 'https://www.peptidesmuscle.com/about/editors' },
      reviewedBy: { '@type': 'Person', '@id': 'https://www.peptidesmuscle.com/about/editors#dr-marcus-chen' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which peptides are best for cognitive performance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The four most evidence-supported peptides for cognitive performance are NAD+ (restores neuronal energy metabolism), Epithalon (activates telomerase in brain cells and restores pineal melatonin regulation), CJC-1295/Ipamorelin (elevates growth hormone and IGF-1, both of which have direct neurotrophic effects), and BPC-157 (reduces neuroinflammation and supports dopamine/serotonin pathway recovery). These compounds address different mechanisms of cognitive decline and are highly synergistic when stacked together.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does NAD+ improve brain function?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Neurons are among the highest-energy-demand cells in the body, relying almost exclusively on NAD+-driven mitochondrial ATP production. As NAD+ levels decline with age and stress, neuronal metabolism slows — producing brain fog, mental fatigue, and impaired executive function. NAD+ supplementation restores this mitochondrial energy production and also activates SIRT1, a neuroprotective sirtuin deacetylase that reduces neuroinflammation, supports synaptic plasticity, and promotes neuronal survival.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can peptides reverse age-related cognitive decline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research indicates that peptides targeting the root mechanisms of cognitive decline — mitochondrial dysfunction, neuroinflammation, reduced neurogenesis, telomere shortening in brain cells, and disrupted sleep architecture — can meaningfully slow and in some cases partially reverse age-related cognitive deterioration. Epithalon has shown telomerase activation in neural tissue. NAD+ restores mitochondrial function in neurons. CJC-1295/Ipamorelin elevates IGF-1, which crosses the blood-brain barrier and exerts neuroprotective effects. No peptide protocol claims to fully reverse severe neurodegeneration, but for age-related performance decline, the evidence is compelling.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long before I notice cognitive improvements from peptides?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The timeline varies by mechanism. NAD+ often produces noticeable energy and clarity improvements within 1–2 weeks. Improved sleep quality from Epithalon and CJC-1295/Ipamorelin typically becomes apparent within 2–3 weeks, with downstream cognitive benefits (better memory consolidation, improved processing speed) following in weeks 4–8. Deeper structural benefits — improved synaptic plasticity, reduced neuroinflammation, enhanced neurogenesis — develop over a 2–4 month sustained protocol.',
          },
        },
      ],
    },
  ],
}

const accent = '#40c0ff'

const mechanisms = [
  {
    title: 'Mitochondrial Dysfunction in Neurons',
    body: 'Neurons are extraordinarily metabolically demanding — the human brain consumes roughly 20% of the body\'s total energy despite representing only 2% of body weight. This energy production is almost entirely dependent on mitochondrial oxidative phosphorylation, which requires adequate NAD+ as a cofactor. As NAD+ levels decline with age — falling by 40–60% between ages 20 and 60 — neuronal ATP production slows measurably, producing the subjective experience of brain fog, cognitive fatigue, and declining executive function.',
  },
  {
    title: 'Neuroinflammation',
    body: 'Chronic low-grade inflammation in neural tissue — neuroinflammation — is now recognized as a primary driver of cognitive aging. Activated microglia (the brain\'s immune cells) release pro-inflammatory cytokines that impair synaptic transmission, reduce BDNF expression, and accelerate neuronal death. Stress, poor sleep, environmental toxins, and metabolic dysfunction all drive neuroinflammation upward. BPC-157 and GHK-Cu both show meaningful anti-neuroinflammatory activity.',
  },
  {
    title: 'Reduced Neurogenesis (BDNF Decline)',
    body: 'The adult brain retains some capacity for neurogenesis — the formation of new neurons, particularly in the hippocampus. This process is regulated heavily by Brain-Derived Neurotrophic Factor (BDNF). BDNF expression falls with age, stress, sedentary behavior, and poor sleep. Growth hormone and IGF-1 — elevated by CJC-1295/Ipamorelin — are among the most potent upregulators of BDNF expression available, making peptide-mediated GH secretion directly relevant to cognitive performance.',
  },
  {
    title: 'Telomere Shortening in Brain Cells',
    body: 'Telomeres — the protective caps at the end of chromosomes — shorten with every cell division, eventually triggering cellular senescence. Brain cells are not exempt. Shortened telomeres in neural and glial cells correlate with accelerated cognitive aging and increased risk of neurodegenerative disease. Epithalon activates telomerase — the enzyme that rebuilds telomeres — in multiple tissue types including neural tissue, making it uniquely positioned to address this fundamental driver of brain aging.',
  },
  {
    title: 'Disrupted Synaptic Plasticity',
    body: 'Learning and memory depend on synaptic plasticity — the ability of neural connections to strengthen or weaken in response to activity. Long-term potentiation (LTP), the primary mechanism of memory consolidation, requires adequate BDNF signaling, optimal energy metabolism, and controlled inflammatory tone. All three of these prerequisites are compromised by the age-related changes described above, explaining why memory and learning capacity decline in tandem with the metabolic aging of the brain.',
  },
  {
    title: 'Blood-Brain Barrier Dysfunction',
    body: 'The blood-brain barrier (BBB) is a specialized endothelial cell layer that controls what enters the brain from systemic circulation. With age and chronic inflammation, BBB integrity deteriorates — allowing inflammatory cytokines, pathogens, and toxic metabolites to enter brain tissue. BPC-157 promotes tight junction integrity in endothelial cells and has shown BBB-protective effects in preclinical studies. IGF-1 (elevated by CJC-1295/Ipamorelin) crosses the BBB and exerts direct neuroprotective effects on the other side.',
  },
]

const peptideProfiles = [
  {
    name: 'NAD+',
    color: accent,
    tagline: 'Neuronal Energy Restoration',
    mechanism: 'NAD+ is the essential cofactor for Complex I and Complex III of the mitochondrial electron transport chain. Without sufficient NAD+, neuronal ATP production is rate-limited — neurons literally run out of metabolic fuel. Declining NAD+ also impairs SIRT1, a sirtuin deacetylase with profound neuroprotective roles: SIRT1 reduces neuroinflammation, promotes neuronal survival under oxidative stress, and maintains the epigenetic programming required for synaptic plasticity and memory consolidation.',
    keyBenefit: 'Brain energy, SIRT1 neuroprotection, mental clarity',
    dose: '500mg 2–3×/week',
    route: 'IV or SubQ injection',
    link: '/products/nad-500mg',
  },
  {
    name: 'Epithalon',
    color: '#a78bfa',
    tagline: 'Telomere Repair + Sleep Optimization',
    mechanism: 'Epithalon (Epitalon) is a tetrapeptide that activates telomerase, enabling cells to rebuild shortened telomeres. In neural tissue, this addresses one of the most fundamental mechanisms of brain aging. Equally important for cognition is Epithalon\'s regulation of the pineal gland — the epiphysis. Epithalon restores the pineal gland\'s capacity to produce melatonin, improving sleep architecture at a structural level. Deep, restorative sleep is the primary window for memory consolidation and neural waste clearance via the glymphatic system.',
    keyBenefit: 'Telomere repair in neurons, melatonin restoration, deep sleep quality',
    dose: '5–10mg/day for 10-day course',
    route: 'SubQ injection',
    link: '/products/epitalon-50mg',
  },
  {
    name: 'CJC-1295 / Ipamorelin',
    color: '#6090ff',
    tagline: 'BDNF Upregulation + Deep Sleep GH Pulse',
    mechanism: 'Growth hormone has direct neurotrophic effects on the brain. The primary downstream mediator — IGF-1 — crosses the blood-brain barrier and binds IGF-1 receptors throughout the cortex and hippocampus, promoting neuronal survival, dendritic branching, and BDNF expression. CJC-1295 and Ipamorelin together amplify the natural growth hormone pulse during deep slow-wave sleep, maximizing the timing of both GH secretion and the neural repair and memory consolidation processes that occur during the same sleep window.',
    keyBenefit: 'BDNF upregulation, IGF-1 neuroprotection, sleep-phase GH optimization',
    dose: '300mcg each, 5 nights/week, before bed',
    route: 'SubQ injection',
    link: '/products/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg',
  },
  {
    name: 'BPC-157',
    color: '#40d090',
    tagline: 'Neuroinflammation + Dopamine/Serotonin Recovery',
    mechanism: 'BPC-157 demonstrates significant neuroprotective and neuroregenerative properties that are distinct from its well-known musculoskeletal healing effects. It reduces neuroinflammation by modulating microglial activation and cytokine release. Critically for cognitive performance, BPC-157 has shown the ability to support recovery of dopaminergic and serotonergic pathways damaged by chronic stress, trauma, and oxidative damage — pathways directly governing motivation, focus, and executive function. Peripheral nerve regeneration is also a documented effect, and emerging research suggests BBB-crossing activity.',
    keyBenefit: 'Neuroinflammation reduction, dopamine/serotonin pathway repair, stress circuit recovery',
    dose: '250–500mcg daily',
    route: 'SubQ injection',
    link: '/products/bpc-157-10mg',
  },
]

const timeline = [
  {
    phase: 'Weeks 1–2',
    color: accent,
    title: 'Metabolic Reset',
    changes: [
      'NAD+ begins restoring mitochondrial energy production in neurons — most users notice improved morning energy and reduced afternoon cognitive crashes within 10–14 days.',
      'Sleep quality starts improving as CJC-1295/Ipamorelin amplifies the natural GH pulse during slow-wave sleep.',
      'BPC-157 anti-inflammatory effects begin reducing baseline neuroinflammation — subtle improvements in mental clarity and reduced brain fog.',
    ],
    note: 'The energy and sleep benefits arrive first, before the deeper structural changes.',
  },
  {
    phase: 'Weeks 3–6',
    color: '#a78bfa',
    title: 'Focus & Clarity Emerge',
    changes: [
      'SIRT1 activation by NAD+ reaches meaningful levels — reduced neuroinflammatory signaling, improved cognitive endurance under stress.',
      'IGF-1 levels elevated by CJC-1295/Ipamorelin are now consistently elevated — users typically notice sharper focus, faster recall, and improved verbal fluency during this window.',
      'Epithalon (if run as a 10-day course starting in week 1 or 2) has completed its course — melatonin regulation is improving, glymphatic clearance during sleep is optimized.',
    ],
    note: 'This is the window where most users report the most subjectively dramatic cognitive improvements.',
  },
  {
    phase: 'Months 2–4',
    color: '#6090ff',
    title: 'Deep Structural Enhancement',
    changes: [
      'BDNF levels elevated by sustained IGF-1 signaling begin producing measurable changes in hippocampal neurogenesis — memory formation and spatial navigation improve.',
      'Synaptic plasticity metrics (speed of learning new information, retention under pressure) show consistent improvement.',
      'Telomere restoration from Epithalon\'s telomerase activation is now contributing to reduced cellular senescence in neural tissue.',
      'Processing speed improvements become apparent — faster reaction time, quicker pattern recognition, reduced cognitive load on complex tasks.',
    ],
    note: 'Deeper neurological remodeling is a months-long process — consistency compounds the results.',
  },
  {
    phase: 'Months 4–6',
    color: '#40d090',
    title: 'Consolidated Baseline Shift',
    changes: [
      'The combination of restored neuronal energy metabolism, reduced neuroinflammation, improved sleep architecture, and elevated neurotrophic factor signaling produces a new cognitive baseline — meaningfully higher than pre-protocol.',
      'Stress resilience improves markedly — the stress-buffering properties of BPC-157 on dopamine and serotonin circuits become evident under real-world pressure.',
      'Many users report qualitative changes in mood stability, creative thinking capacity, and sustained motivation — consistent with restored dopaminergic and serotonergic tone.',
    ],
    note: 'Long-term protocol completion yields a sustained and compounding benefit — not a temporary enhancement.',
  },
]

const stackItems = [
  {
    compound: 'NAD+',
    timing: '2–3× per week (morning)',
    dose: '500mg per session',
    role: 'Neuronal energy substrate, SIRT1 activation, mitochondrial restoration',
    color: accent,
  },
  {
    compound: 'Epithalon',
    timing: '10-day course every 6 months',
    dose: '5–10mg per day',
    role: 'Telomerase activation in neural tissue, pineal gland regulation, melatonin restoration',
    color: '#a78bfa',
  },
  {
    compound: 'CJC-1295 / Ipamorelin',
    timing: '5 nights per week, 30–60 min before sleep',
    dose: '300mcg each compound',
    role: 'GH pulse amplification, BDNF/IGF-1 upregulation, deep sleep optimization',
    color: '#6090ff',
  },
  {
    compound: 'BPC-157',
    timing: 'Daily (morning)',
    dose: '250–500mcg',
    role: 'Neuroinflammation control, dopamine/serotonin circuit repair, BBB support',
    color: '#40d090',
  },
]

export default function PeptidesCognitivePage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20">
        <div className="spot w-[600px] h-[400px] bg-[#40c0ff] opacity-[0.04] top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Cognitive Performance & Brain Optimization</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.1 }}>
            Peptides for<br />
            <span className="italic" style={{ color: accent }}>Cognitive Performance</span>
          </h1>
      <AuthorByline datePublished="2026-03-29" dateModified="2026-03-29" />
          <p className="text-[#8888a0] text-xl leading-relaxed max-w-2xl">
            The complete guide to nootropic peptides — how NAD+, Epithalon, CJC-1295/Ipamorelin, and BPC-157 address the root mechanisms of cognitive decline and rebuild brain performance from the inside out.
          </p>
        </div>
      </section>

      <div className="rule" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-20">

        {/* 01 — BIOLOGY OF COGNITIVE DECLINE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">01</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>The Biology of Cognitive Decline</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Cognitive performance does not decline in a linear, inevitable way — it declines for specific biological reasons that are increasingly well understood. The subjective experience of cognitive aging — the gradually worsening brain fog, the slower recall, the diminished focus under pressure, the flattening of motivation — is the downstream output of a set of converging cellular and molecular failures that can, to a meaningful degree, be targeted and reversed.</p>
            <p>The field of nootropic peptides approaches cognitive decline exactly this way: not as an inevitability to be accepted, but as a cascade of addressable mechanisms. The question is not whether you will experience cognitive aging, but which of the upstream drivers are most active in your biology — and which interventions will most effectively counter them.</p>
            <p>There are six primary mechanisms through which cognitive performance deteriorates. Each one has a corresponding peptide intervention. Understanding the biology is the prerequisite to using these tools intelligently.</p>
          </div>

          <div className="pl-10 mt-8 grid sm:grid-cols-2 gap-4">
            {mechanisms.map((m, i) => (
              <div key={i} className="card rounded-xl p-5">
                <p className="font-700 text-[14px] mb-2" style={{ color: accent }}>{m.title}</p>
                <p className="text-[#8888a0] text-[13px] leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>

          <div className="pl-10 mt-6 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>What makes these mechanisms particularly damaging is their interaction. Mitochondrial dysfunction produces oxidative stress that accelerates telomere shortening. Telomere erosion in microglia drives neuroinflammation. Neuroinflammation suppresses BDNF. Reduced BDNF impairs synaptic plasticity and neurogenesis. Disrupted sleep — which compromises glymphatic clearance and memory consolidation — compounds all of the above. The result is a self-reinforcing cascade that accelerates with age and stress.</p>
            <p>Peptide protocols for cognitive performance are designed to interrupt this cascade at multiple points simultaneously — a strategy that produces synergistic effects far greater than any single intervention alone.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 02 — THE FOUR BEST PEPTIDES */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">02</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>The Four Best Peptides for Cognitive Performance</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Four compounds stand out from the broader peptide landscape as having the strongest mechanistic and empirical case for cognitive enhancement. Each addresses different nodes in the cognitive decline cascade — which is precisely why they are most powerful when run together as a coordinated stack rather than individually.</p>
          </div>
          <div className="pl-10 mt-6 space-y-5">
            {peptideProfiles.map((p, i) => (
              <div key={i} className="card rounded-xl p-6" style={{ borderLeft: `2px solid ${p.color}` }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-white font-700 text-[18px]">{p.name}</p>
                    <p className="text-[12px] mt-0.5" style={{ color: p.color }}>{p.tagline}</p>
                  </div>
                  <Link href={p.link} className="text-[12px] font-600 hover:underline flex-shrink-0 mt-1" style={{ color: p.color }}>
                    Product Info →
                  </Link>
                </div>
                <p className="text-[#8888a0] text-[14px] leading-relaxed mb-4">{p.mechanism}</p>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">KEY BENEFIT</p>
                    <p className="text-[#aaaabc] text-[12px]">{p.keyBenefit}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                    <p className="text-[#aaaabc] text-[12px]">{p.dose}</p>
                  </div>
                  <div>
                    <p className="text-[#50505e] text-[11px] mb-1">ROUTE</p>
                    <p className="text-[#aaaabc] text-[12px]">{p.route}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 03 — MECHANISM DEEP DIVE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">03</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Mechanism Deep Dive: How Each Peptide Affects the Brain</h2>
          </div>
          <div className="pl-10 space-y-6">

            {/* NAD+ */}
            <div className="card rounded-xl p-6">
              <p className="text-white font-700 text-[16px] mb-1">NAD+ and the Neuronal Energy Crisis</p>
              <p className="text-[12px] mb-4" style={{ color: accent }}>Mitochondrial restoration, SIRT1 activation, PARP1 competition</p>
              <div className="space-y-3 text-[#8888a0] text-[14px] leading-relaxed">
                <p>The brain&apos;s energy crisis is a NAD+ crisis. Neurons are post-mitotic cells — they cannot easily be replaced when they die — and they depend almost entirely on oxidative phosphorylation for their ATP supply. Every step of this process requires NAD+ as an electron carrier. As NAD+ levels decline with age, the rate-limiting step in neuronal energy production slows, and the consequences manifest as the characteristic cognitive fatigue, brain fog, and reduced processing speed of aging.</p>
                <p>NAD+ restoration addresses this at the source. By repleting the NAD+ pool in neural tissue, mitochondrial Complex I activity recovers, ATP production normalizes, and neurons regain the metabolic capacity to sustain high-frequency synaptic firing — the substrate of focus, working memory, and executive function.</p>
                <p>But the energy story is only part of NAD+&apos;s cognitive role. SIRT1 — the most extensively studied member of the sirtuin family of NAD+-dependent deacetylases — is one of the brain&apos;s most important neuroprotective proteins. SIRT1 deacetylates and regulates p53 (reducing apoptosis under mild stress), NF-κB (reducing neuroinflammatory signaling), and multiple transcription factors governing synaptic plasticity. When NAD+ levels fall, SIRT1 activity falls proportionally — removing a critical layer of neural protection precisely when the brain needs it most.</p>
                <p>A third mechanism deserves attention: PARP1 competition. PARP1 is a DNA repair enzyme that consumes NAD+ at a high rate during oxidative stress. In an aging brain subject to chronic oxidative damage, PARP1 hyperactivation creates a catastrophic NAD+ drain — depleting the pool needed for SIRT1 activity and mitochondrial function. NAD+ supplementation replenishes this pool, allowing both repair and protective functions to proceed simultaneously rather than competing for a shrinking resource.</p>
              </div>
            </div>

            {/* Epithalon */}
            <div className="card rounded-xl p-6">
              <p className="text-white font-700 text-[16px] mb-1">Epithalon: The Pineal Gland, Sleep, and Telomere Repair</p>
              <p className="text-[12px] mb-4" style={{ color: '#a78bfa' }}>Telomerase activation, melatonin restoration, glymphatic optimization</p>
              <div className="space-y-3 text-[#8888a0] text-[14px] leading-relaxed">
                <p>Epithalon (also rendered as Epitalon) is a tetrapeptide — Ala-Glu-Asp-Gly — originally isolated from the pineal gland extract used in Khavinson&apos;s foundational work on peptide bioregulators. Its cognitive relevance operates through two distinct but interrelated mechanisms: telomerase activation in neural tissue, and restoration of pineal gland function.</p>
                <p>The telomere angle is perhaps the most fundamental. Telomere shortening in neural progenitor cells and glial cells is now recognized as a driver of cognitive aging and increased neurodegenerative disease risk. Epithalon activates telomerase — the enzyme that synthesizes new telomeric DNA — across multiple tissue types. In neural tissue, this translates to reduced cellular senescence, improved progenitor cell viability, and extended functional lifespan of neurons and supporting glial cells.</p>
                <p>The pineal gland connection is equally important for daily cognitive performance. The pineal gland (epiphysis) is the primary source of melatonin — the neuroendocrine signal that governs circadian rhythm and sleep architecture. With age, the pineal gland undergoes calcification and functional decline, reducing melatonin output and progressively disrupting sleep architecture. Deep slow-wave sleep — the stage most critical for hippocampal memory consolidation and glymphatic clearance of toxic neural waste products including amyloid-beta and tau protein — is the first casualty of pineal dysfunction.</p>
                <p>Epithalon directly stimulates pineal gland activity and restores melatonin regulatory capacity. Users consistently report dramatically improved sleep depth and architecture. The cognitive downstream effects — better memory consolidation, improved learning capacity, enhanced mood stability — follow predictably from restored sleep quality. For cognitive performance, optimizing sleep architecture may be the single highest-leverage intervention available, and Epithalon addresses it at the glandular level rather than through pharmacological sedation.</p>
              </div>
            </div>

            {/* CJC-1295/Ipamorelin */}
            <div className="card rounded-xl p-6">
              <p className="text-white font-700 text-[16px] mb-1">CJC-1295 / Ipamorelin: Growth Hormone, IGF-1, and the Neurotrophic Axis</p>
              <p className="text-[12px] mb-4" style={{ color: '#6090ff' }}>BDNF upregulation, IGF-1 BBB penetration, deep-sleep GH timing</p>
              <div className="space-y-3 text-[#8888a0] text-[14px] leading-relaxed">
                <p>Growth hormone&apos;s cognitive relevance is substantially underappreciated outside specialized research circles. GH itself has some central nervous system effects — GH receptors are expressed throughout the brain, and GH deficiency produces well-documented cognitive symptoms including impaired memory, reduced processing speed, and depression. But the primary mediator of GH&apos;s neurotrophic effects is IGF-1 (Insulin-like Growth Factor 1), which GH stimulates in both the liver and, critically, in the brain itself.</p>
                <p>IGF-1 crosses the blood-brain barrier with relative efficiency and binds IGF-1 receptors distributed throughout the cortex, hippocampus, cerebellum, and brainstem. The consequences of IGF-1 receptor activation in neural tissue are extensive: neuroprotection against apoptosis, promotion of dendritic arborization (the branching of neural connections), enhancement of myelination, and potent upregulation of BDNF expression. The BDNF connection is particularly significant — BDNF is often described as &quot;fertilizer for the brain,&quot; and sustained IGF-1 elevation is one of the most reliable ways to maintain BDNF expression as BDNF-stimulating behaviors (intense exercise, caloric restriction, novel learning) become more difficult with age.</p>
                <p>CJC-1295 (a long-acting GHRH analogue) and Ipamorelin (a selective ghrelin mimetic) work through complementary receptors to produce a amplified, clean GH pulse. Administered together at night 30–60 minutes before sleep, they synchronize with the natural GH secretion that peaks during slow-wave sleep — amplifying rather than disrupting the physiological pattern. This timing is not incidental: slow-wave sleep is simultaneously the window of maximum GH secretion and maximum neural repair, memory consolidation, and glymphatic waste clearance. Amplifying the GH pulse during this window optimizes all of these processes concurrently.</p>
                <p>The combination of elevated IGF-1 throughout the day and amplified GH during deep sleep produces a sustained neurotrophic environment that addresses both the metabolic maintenance of existing neural circuits and the formation of new ones.</p>
              </div>
            </div>

            {/* BPC-157 */}
            <div className="card rounded-xl p-6">
              <p className="text-white font-700 text-[16px] mb-1">BPC-157 and Neural Circuit Recovery</p>
              <p className="text-[12px] mb-4" style={{ color: '#40d090' }}>Neuroinflammation, dopamine/serotonin pathway repair, peripheral nerve regeneration</p>
              <div className="space-y-3 text-[#8888a0] text-[14px] leading-relaxed">
                <p>BPC-157 is best known in performance circles for its musculoskeletal healing properties — but its neuroprotective and neuroregenerative profile is substantial and mechanistically distinct. For cognitive performance, the most relevant properties are its anti-neuroinflammatory effects, its documented ability to support recovery of damaged monoaminergic pathways, and emerging evidence for BBB-crossing activity.</p>
                <p>Neuroinflammation — driven by chronically activated microglia releasing pro-inflammatory cytokines — is one of the primary suppressors of cognitive performance in both acute stress states and chronic aging. BPC-157 modulates microglial activation and cytokine release, reducing the inflammatory tone in neural tissue without the systemic immunosuppression associated with pharmaceutical anti-inflammatory agents. This creates a more permissive environment for synaptic plasticity, BDNF expression, and neurogenesis — all of which are suppressed by neuroinflammatory signaling.</p>
                <p>Perhaps the most compelling cognitive application of BPC-157 is its documented effect on monoaminergic pathways. Chronic psychological stress, trauma, and sustained oxidative damage progressively impair dopaminergic and serotonergic transmission — the neural circuits governing motivation, executive function, mood regulation, and sustained attention. BPC-157 has demonstrated the ability to counteract dopamine system dysregulation, restore dopamine receptor sensitivity, and support serotonergic pathway integrity in preclinical models of stress-induced dysfunction. For anyone whose cognitive performance has been degraded by high-stress periods, chronic sleep deprivation, or psychological trauma, this pathway is directly relevant.</p>
                <p>BPC-157 also promotes peripheral nerve regeneration — an effect that extends to the enteric nervous system (the gut&apos;s neural network), creating a bidirectional benefit through the gut-brain axis. Restoration of enteric nervous system integrity improves vagal tone and neurotransmitter precursor availability, both of which contribute to central cognitive function.</p>
              </div>
            </div>

            {/* GHK-Cu mention */}
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">GHK-Cu: Supporting Mention</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed">GHK-Cu (copper peptide GHK-Cu) deserves mention as a supporting cognitive compound. While not in the primary four, GHK-Cu demonstrates potent antioxidant activity in neural tissue — reducing reactive oxygen species that accelerate both mitochondrial dysfunction and telomere shortening. It also shows anti-inflammatory activity in brain tissue and upregulates antioxidant gene expression (SOD2, catalase) via Nrf2 pathway activation. For users building a comprehensive cognitive protection protocol, GHK-Cu can be incorporated as a systemic antioxidant support layer. <Link href="/products/ghk-cu-50mg" className="hover:underline" style={{ color: accent }}>View GHK-Cu →</Link></p>
            </div>

          </div>
        </div>

        <div className="rule" />

        {/* 04 — RESULTS TIMELINE */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">04</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Results Timeline: Week by Week</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed mb-6">
            <p>Cognitive enhancement via peptides is not an immediate pharmacological effect — it is a progressive biological restoration. The mechanisms described above require time to produce measurable changes in neural function. Understanding the timeline helps set accurate expectations and maintain protocol consistency during the earlier phases when results are present but more subtle.</p>
          </div>
          <div className="pl-10 space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <p className="font-700 text-[15px]" style={{ color: t.color }}>{t.phase}</p>
                  <p className="text-white font-600 text-[14px]">— {t.title}</p>
                </div>
                <ul className="space-y-2 mb-3">
                  {t.changes.map((c, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#aaaabc] text-[13px] leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#404050] flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="text-[#50505e] text-[12px] italic">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" />

        {/* 05 — THE COGNITIVE STACK */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">05</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>The Cognitive Performance Stack</h2>
          </div>
          <div className="pl-10 space-y-5">
            <p className="text-[#8888a0] text-[16px] leading-relaxed">
              The four peptides described above are not merely complementary — they are synergistic at the mechanistic level. NAD+ restores the energy supply that makes all other neural processes possible. Epithalon rebuilds telomere integrity and restores the sleep architecture through which all repair and consolidation occurs. CJC-1295/Ipamorelin amplifies the neurotrophic environment through GH and IGF-1. BPC-157 reduces the neuroinflammatory burden that would otherwise suppress the effects of all three. Together they constitute a comprehensive, multi-mechanism cognitive restoration protocol.
            </p>
            <div className="space-y-3">
              {stackItems.map((s, i) => (
                <div key={i} className="card rounded-xl p-5" style={{ borderLeft: `2px solid ${s.color}` }}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="text-white font-700 text-[15px]">{s.compound}</p>
                    <p className="text-[12px] font-600 mono" style={{ color: s.color }}>{s.timing}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <p className="text-[#50505e] text-[11px] mb-1">DOSE</p>
                      <p className="text-[#aaaabc] text-[13px]">{s.dose}</p>
                    </div>
                    <div>
                      <p className="text-[#50505e] text-[11px] mb-1">COGNITIVE ROLE</p>
                      <p className="text-[#8888a0] text-[13px] leading-relaxed">{s.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card rounded-xl p-5">
              <p className="text-white font-600 text-[14px] mb-2">Protocol Notes</p>
              <p className="text-[#8888a0] text-[14px] leading-relaxed">Run NAD+ in the morning (never at night — it is energizing). Inject CJC-1295/Ipamorelin at night on an empty stomach, 30–60 minutes before sleep — insulin spike suppresses GH release, so no carbohydrates or large meals in the 90 minutes prior. BPC-157 is best dosed in the morning to maintain consistent systemic levels throughout the day. Epithalon runs as a periodic 10-day course rather than daily — once every 6 months is the standard protocol, though some practitioners run it every 3 months in the first year. Do not run Epithalon indefinitely without breaks.</p>
            </div>
            <Link href="/peptide-stacking-guide" className="inline-flex items-center gap-2 text-[14px] hover:underline" style={{ color: accent }}>
              Full Peptide Stacking Guide →
            </Link>
          </div>
        </div>

        <div className="rule" />

        {/* 06 — NOOTROPIC VS. STRUCTURAL */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">06</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Nootropic vs. Structural: Two Types of Cognitive Enhancement</h2>
          </div>
          <div className="pl-10 space-y-5 text-[#8888a0] text-[16px] leading-relaxed">
            <p>Understanding the distinction between nootropic (direct cognitive enhancement) and structural (underlying neural architecture repair) approaches to brain optimization is essential for setting realistic expectations from any cognitive enhancement protocol — including peptides.</p>
            <p>Classical nootropics — racetams, modafinil, certain adaptogens — work primarily by modulating neurotransmitter availability, receptor sensitivity, or cerebral blood flow in the short term. They produce relatively immediate cognitive effects that diminish when the compound clears. The brain is not fundamentally changed; it is temporarily running on a different neurochemical substrate.</p>
            <p>Structural cognitive enhancement — which is the category peptides occupy — works at the level of neural architecture: energy metabolism, telomere integrity, neurotrophic factor expression, synaptic density, inflammatory tone. These changes develop more slowly but, critically, they persist and compound. A neuron with restored mitochondrial function and increased synaptic density does not revert to baseline when you stop dosing — the structural improvement is real and durable.</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="card rounded-xl p-5" style={{ borderTop: `2px solid ${accent}` }}>
                <p className="text-white font-700 text-[14px] mb-2">Structural Enhancement (Peptides)</p>
                <ul className="space-y-2">
                  {[
                    'Addresses root biological mechanisms',
                    'Effects develop over weeks to months',
                    'Changes persist beyond active dosing',
                    'Compounds over time — results improve with continued use',
                    'No tolerance development or receptor downregulation',
                    'Neuroprotective as well as performance-enhancing',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#8888a0] text-[13px]">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card rounded-xl p-5" style={{ borderTop: '2px solid #50505e' }}>
                <p className="text-white font-700 text-[14px] mb-2">Symptomatic Enhancement (Classical Nootropics)</p>
                <ul className="space-y-2">
                  {[
                    'Modulates neurotransmitter availability',
                    'Effects are rapid and immediate',
                    'Returns to baseline after compound clears',
                    'Risk of tolerance and dependency with some compounds',
                    'No structural repair or neuroprotection',
                    'Can mask underlying cognitive decline',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#8888a0] text-[13px]">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#404050] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p>The most sophisticated approach to cognitive optimization combines both strategies: peptides for structural repair and long-term neural health, alongside targeted symptomatic nootropics where immediate performance is required. But for anyone interested in long-term cognitive health — maintaining sharp cognition into their 60s, 70s, and beyond — the structural approach is not optional. No amount of modafinil addresses the mitochondrial dysfunction, neuroinflammation, and telomere shortening that underlie real cognitive aging.</p>
            <p>This is why peptides represent a genuinely different category in the cognitive enhancement landscape — not better versions of existing nootropics, but a fundamentally different approach to the problem of brain aging.</p>
          </div>
        </div>

        <div className="rule" />

        {/* 07 — GET STARTED / CTA */}
        <div>
          <div className="flex items-start gap-6 mb-7">
            <p className="mono text-[#d4a043] text-[12px] mt-1 flex-shrink-0">07</p>
            <h2 className="font-['Playfair_Display'] font-900 text-white" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Get Started: Build Your Cognitive Stack</h2>
          </div>
          <div className="pl-10 space-y-4 text-[#8888a0] text-[16px] leading-relaxed mb-6">
            <p>Each of the four primary cognitive peptides is available individually. For most users, starting with one or two compounds and adding others as you understand the protocol is the recommended approach. NAD+ and CJC-1295/Ipamorelin are the typical entry points — NAD+ for the immediate energy and clarity improvements, CJC-1295/Ipamorelin for the sustained neurotrophic and sleep benefits.</p>
          </div>
          <div className="pl-10 grid sm:grid-cols-2 gap-4">
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">NAD+</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">The foundational neuroenergetic compound. Restores mitochondrial ATP production in neurons, activates SIRT1 neuroprotection, and reverses the NAD+ decline driving cognitive fatigue and brain fog.</p>
              <div className="flex gap-3">
                <a href="/go/nad-500mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/nad-500mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">Epithalon</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Telomerase activator and pineal gland regulator. The deepest-acting longevity peptide for cognitive health — repairs neural telomeres and restores the sleep architecture that makes all other cognitive enhancement possible.</p>
              <div className="flex gap-3">
                <a href="/go/epitalon-50mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/epitalon-50mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">CJC-1295 / Ipamorelin</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">The neurotrophic peptide combination. Elevates growth hormone and IGF-1 to upregulate BDNF, support neurogenesis, and optimize the deep-sleep window for memory consolidation and neural repair.</p>
              <div className="flex gap-3">
                <a href="/go/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-6">
              <p className="text-white font-700 text-[18px] mb-1">BPC-157</p>
              <p className="text-[#8888a0] text-[13px] leading-relaxed mb-5">Neuroprotective and anti-neuroinflammatory. Reduces microglial activation, supports dopamine and serotonin pathway recovery, and creates the low-inflammation neural environment required for optimal cognitive performance.</p>
              <div className="flex gap-3">
                <a href="/go/bpc-157-10mg" target="_blank" rel="noopener nofollow sponsored" className="btn-primary flex-1 justify-center py-3 text-[13px]">Buy Now →</a>
                <Link href="/products/bpc-157-10mg" className="btn-ghost flex-1 justify-center py-3 text-[13px]">Product Info</Link>
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
                q: 'How do peptides for cognitive performance differ from conventional nootropics like racetams or modafinil?',
                a: 'Conventional nootropics modulate neurotransmitter availability, receptor sensitivity, or cerebral blood flow to produce short-term cognitive effects. When the compound clears, the brain returns to its pre-supplementation state. Cognitive peptides operate at the level of neural architecture — restoring mitochondrial energy metabolism, repairing telomeres in brain cells, upregulating neurotrophic factors, and reducing neuroinflammation. These changes are structural and persist beyond active dosing. Peptides are not faster-acting versions of nootropics — they are a fundamentally different approach to the same problem, operating on a longer timescale but producing more durable and compounding results.',
              },
              {
                q: 'Is it safe to combine all four peptides in the cognitive stack simultaneously?',
                a: 'The four-peptide cognitive stack — NAD+, Epithalon, CJC-1295/Ipamorelin, and BPC-157 — addresses non-overlapping mechanisms and does not involve compounds with known negative interactions. Each operates through distinct receptor systems and molecular pathways. That said, new users are advised to introduce compounds individually (starting with NAD+ and CJC-1295/Ipamorelin) before adding the full stack, allowing assessment of individual response. Epithalon is run as a finite 10-day course rather than daily, which naturally limits its overlap with continuously dosed compounds.',
              },
              {
                q: 'Will cognitive peptides interact with prescription medications or supplements?',
                a: 'NAD+, Epithalon, BPC-157, and CJC-1295/Ipamorelin do not have documented interactions with most common medications. CJC-1295/Ipamorelin elevates growth hormone, which can influence insulin sensitivity — users on insulin or diabetes medications should monitor blood glucose and consult a physician. NAD+ should not be co-administered with NAMPT inhibitors (experimental cancer drugs) or PDE inhibitors that affect NAD metabolism. As with any protocol, disclose all compounds to your healthcare provider, particularly for prescription medications with narrow therapeutic windows.',
              },
              {
                q: 'Do I need to cycle off the cognitive peptide stack?',
                a: 'Cycling requirements vary by compound. CJC-1295/Ipamorelin is typically run continuously for 3–6 months, followed by a 4–8 week break, then repeated. This prevents pituitary desensitization to GHRH signaling. NAD+ can be used indefinitely without cycling — there is no receptor system that downregulates. BPC-157 does not require cycling from a receptor standpoint, though most protocols run 8–12 week courses. Epithalon is already a pulsed protocol (10-day course every 3–6 months) by design and should not be run continuously.',
              },
              {
                q: 'Can younger users (under 35) benefit from cognitive peptide protocols, or are they only for older adults?',
                a: 'While the mechanisms described — NAD+ decline, telomere shortening, reduced BDNF — are most pronounced with age, they are not absent in younger adults. Chronic stress, sleep deprivation, environmental toxin exposure, and high cognitive load all accelerate these processes in individuals under 35. Many younger users report significant improvements from CJC-1295/Ipamorelin (sleep quality and focus) and BPC-157 (neuroinflammation from stress and lifestyle) specifically. For individuals under 30 with no symptoms of cognitive decline, a lighter protocol emphasizing CJC-1295/Ipamorelin and BPC-157 is more appropriate than the full four-compound stack designed for older adults.',
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
              { href: '/nad-plus-anti-aging-guide', label: 'NAD+ Anti-Aging Guide', desc: 'Deep dive into NAD+ mechanisms, dosing protocols, and the full science of cellular energy restoration' },
              { href: '/epithalon-anti-aging-telomere-peptide-guide', label: 'Epithalon Complete Guide', desc: 'Everything on Epithalon — telomere repair, pineal gland regulation, longevity dosing, and results timeline' },
              { href: '/cjc-1295-ipamorelin-results-timeline', label: 'CJC-1295 + Ipamorelin Results', desc: 'Week-by-week results timeline for the most popular growth hormone-optimizing peptide combination' },
              { href: '/bpc-157-complete-guide', label: 'BPC-157 Complete Guide', desc: 'Injury-specific protocols, dosing, and the full neuroprotective and anti-inflammatory science of BPC-157' },
              { href: '/peptide-stacking-guide', label: 'Peptide Stacking Guide', desc: 'How to design multi-compound protocols for synergistic cognitive, recovery, and longevity effects' },
              { href: '/blog', label: 'All Peptide Guides', desc: 'Browse every in-depth protocol, mechanism guide, and results article on PeptidesMuscle' },
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
