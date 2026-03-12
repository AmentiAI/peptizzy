export interface Product {
  slug: string
  name: string
  tagline: string
  price: string
  category: string
  tags: string[]
  image: string
  affiliateUrl: string
  shortDescription: string
  fullDescription: string
  benefits: string[]
  protocol: string
  synergies: string[]
  badge?: string
  featured?: boolean
}

const AFFILIATE_BASE = 'https://pantheonpeptides.com/partner/AmentiAI/'

export const products: Product[] = [
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    tagline: 'The Tissue Regeneration Protocol',
    price: 'From $49',
    category: 'Recovery & Healing',
    tags: ['Recovery', 'Gut Health', 'Joint Health', 'Anti-Inflammatory'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/BPC-157-2mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Elite Recovery',
    featured: true,
    shortDescription: 'The gold standard in biological performance optimization. BPC-157 accelerates healing at a cellular level, rebuilding tissue faster than the body can on its own.',
    fullDescription: `BPC-157 — Body Protection Compound 157 — is a 15 amino acid peptide that operates as one of nature's most potent biological repair mechanisms. Originally derived from a gastric protein, it has become the cornerstone protocol for elite athletes, biohackers, and high-performance individuals seeking accelerated recovery and structural integrity.

What separates BPC-157 from conventional recovery agents is its mechanism: it directly promotes angiogenesis (new blood vessel formation), upregulates growth factor receptor expression, and modulates nitric oxide synthesis — creating an environment where damaged tissue heals at a rate that simply isn't possible through diet and training alone.

For those optimizing their physical appearance and performance, BPC-157 works at the foundational level — addressing the inflammation, tendon fragility, and micro-damage that limit physique development and longevity.`,
    benefits: [
      'Dramatically accelerates tendon, ligament, and muscle repair',
      'Reduces systemic and localized inflammation',
      'Heals gut lining and addresses digestive dysfunction',
      'Supports joint mobility and cartilage health',
      'Promotes neurological recovery and nerve regeneration',
      'Enhances blood flow to healing tissues via angiogenesis',
      'Protects against stomach ulcers and intestinal damage',
      'Synergizes with training to push past recovery plateaus',
    ],
    protocol: 'Typical protocols range from 200–500mcg per day, administered subcutaneously or intramuscularly near the site of injury. Cycles of 4–6 weeks are common.',
    synergies: ['TB-500', 'GHK-Cu', 'Ipamorelin'],
  },
  {
    slug: 'tb-500',
    name: 'TB-500',
    tagline: 'The Systemic Regenerator',
    price: 'From $59',
    category: 'Recovery & Healing',
    tags: ['Muscle Repair', 'Flexibility', 'Wound Healing', 'Recovery'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/TD-500-2mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    featured: true,
    shortDescription: 'Systemic regeneration at scale. TB-500 travels through the bloodstream to find and repair damaged tissue anywhere in the body — the ultimate recovery compound.',
    fullDescription: `TB-500 is a synthetic peptide derived from Thymosin Beta-4, a protein found in virtually every cell of the human body. Where BPC-157 excels locally, TB-500 operates systemically — circulating through the bloodstream to identify and accelerate healing wherever damage exists.

The mechanism is profound: TB-500 promotes cell migration and differentiation by upregulating actin — the protein responsible for cellular movement and structure. This means damaged muscle fibers, tendons, cardiac tissue, and even neural pathways experience accelerated reconstruction.

For the physique-focused individual, TB-500 enables training at intensities that would otherwise break the body down. Elite athletes report dramatically reduced downtime from injuries, improved range of motion, and a noticeable enhancement in overall physical resilience. The compound also exhibits potent anti-inflammatory effects, reducing the chronic low-grade inflammation that accelerates aging and impairs muscle growth.`,
    benefits: [
      'Systemic tissue repair throughout the entire body',
      'Dramatic improvement in flexibility and range of motion',
      'Accelerated wound and injury healing',
      'Reduces chronic inflammation that impairs performance',
      'Supports cardiac muscle recovery and function',
      'Enhances endurance by improving blood vessel formation',
      'Promotes hair growth through follicle stimulation',
      'Works synergistically with BPC-157 for comprehensive recovery',
    ],
    protocol: 'Loading phase: 2–2.5mg twice weekly for 4–6 weeks. Maintenance: 2–2.5mg once weekly. Typically cycled with BPC-157 for maximum effect.',
    synergies: ['BPC-157', 'Ipamorelin', 'IGF-1 LR3'],
  },
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    tagline: 'The Ultimate Skin Transformation Protocol',
    price: 'From $69',
    category: 'Looks Maxing',
    tags: ['Anti-Aging', 'Skin', 'Collagen', 'Hair Growth'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/GHKCU-50mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Looks Max',
    featured: true,
    shortDescription: 'The most powerful peptide for skin quality, collagen synthesis, and anti-aging. GHK-Cu is the looks maxer\'s secret weapon — reversing years of skin aging at the molecular level.',
    fullDescription: `GHK-Cu (Copper Peptide GHK-Cu) is arguably the most significant discovery in looks maximization and anti-aging peptide science. This naturally occurring tripeptide-copper complex has been shown in over 50 years of clinical investigation to fundamentally reverse the aging process at a cellular and structural level.

What makes GHK-Cu extraordinary is its multi-modal mechanism. It activates over 4,000 human genes — resetting the expression patterns of aging cells toward a more youthful state. It stimulates collagen and elastin production, increases skin firmness, reduces wrinkles, and triggers the remodeling of aged, damaged skin into fresh, healthy tissue.

For anyone serious about maximizing their physical appearance, GHK-Cu addresses the skin component that training and nutrition cannot: structural dermal quality. It increases skin density, reduces hyperpigmentation, shrinks pore size, and gives skin the luminous quality that distinguishes exceptional looks from average ones.

Beyond aesthetics, GHK-Cu promotes hair follicle enlargement and hair growth, making it invaluable for maintaining density. Its powerful antioxidant and anti-inflammatory properties also protect against the oxidative damage that accelerates visible aging.`,
    benefits: [
      'Stimulates type I and III collagen synthesis — the foundation of youthful skin',
      'Activates elastin and proteoglycans for skin firmness and bounce',
      'Reduces fine lines, wrinkles, and skin laxity visibly',
      'Increases skin thickness and density by up to 121% in studies',
      'Promotes hair follicle growth and increases hair density',
      'Powerful antioxidant protection against free radical damage',
      'Accelerates wound healing and scar remodeling',
      'Reduces hyperpigmentation and evens skin tone',
      'Anti-inflammatory properties reduce redness and irritation',
      'Resets gene expression of aging skin toward youthful profiles',
    ],
    protocol: 'For systemic anti-aging: 1–3mg subcutaneous injection 2–3x weekly. Topically: apply 1–5% concentration daily. Can be combined with microneedling for dramatic results.',
    synergies: ['Epithalon', 'BPC-157', 'Ipamorelin'],
  },
  {
    slug: 'melanotan-2',
    name: 'Melanotan 2',
    tagline: 'The Bronze Optimization Protocol',
    price: 'From $45',
    category: 'Looks Maxing',
    tags: ['Tanning', 'Libido', 'Appetite Control', 'Body Composition'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/MT2-10mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Top Seller',
    shortDescription: 'Achieve a deep, natural-looking tan while enhancing libido and supporting lean body composition. MT-2 activates the melanocortin system for comprehensive looks optimization.',
    fullDescription: `Melanotan 2 is a synthetic analogue of alpha-melanocyte stimulating hormone (α-MSH) that activates the melanocortin system — the master control system governing skin pigmentation, sexual function, appetite regulation, and body composition.

At the looks maxing level, Melanotan 2 delivers three critical benefits simultaneously: it stimulates melanin production for a deep, even tan without excessive UV exposure; it activates MC4R receptors to enhance libido and sexual confidence; and it suppresses appetite through central mechanisms, making lean body composition significantly easier to maintain.

The pigmentation effect of MT-2 is particularly noteworthy for looks maximization. It creates a eumelanin-rich tan — the same deep, olive-toned pigmentation associated with high attractiveness ratings. This tan is protective against UV damage, develops with minimal sun exposure, and fades gradually rather than peeling.

The confidence and mood enhancement effects are an additional benefit, with users reporting improved social presence and reduced social anxiety — effects mediated through the melanocortin system's interaction with dopaminergic pathways.`,
    benefits: [
      'Stimulates deep, natural-looking melanin-based tan',
      'Provides UV protection by increasing photoprotective melanin',
      'Enhances libido and sexual function in men and women',
      'Suppresses appetite via central melanocortin receptor activation',
      'Supports fat loss while preserving lean muscle mass',
      'Improves confidence and mood through dopaminergic pathways',
      'Reduces required UV exposure for tan development by up to 80%',
      'Creates an even, streak-free pigmentation response',
    ],
    protocol: 'Loading: 0.25–0.5mg subcutaneous daily for 1–2 weeks while building tan. Maintenance: 0.5–1mg 2–3x weekly. Start with minimal UV exposure during loading.',
    synergies: ['PT-141', 'Tesamorelin', 'BPC-157'],
  },
  {
    slug: 'epithalon',
    name: 'Epithalon',
    tagline: 'The Telomere Extension Protocol',
    price: 'From $79',
    category: 'Anti-Aging',
    tags: ['Anti-Aging', 'Longevity', 'Sleep', 'Immune Support'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/EPITALON-10mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Longevity',
    shortDescription: 'The only known compound that activates telomerase — the enzyme responsible for telomere lengthening. Epithalon is the foundation of biological age reversal.',
    fullDescription: `Epithalon (Epitalon) is a tetrapeptide — Ala-Glu-Asp-Gly — that stands apart from every other anti-aging compound by virtue of a singular, extraordinary capability: it activates telomerase, the enzyme that lengthens telomeres.

Telomeres are the protective caps at the ends of chromosomes. They shorten with every cell division, and their length is the most accurate biological marker of aging. When telomeres become critically short, cells enter senescence — they stop dividing and begin secreting inflammatory signals that accelerate aging throughout the body. This is why telomere length is directly correlated with lifespan, health span, and biological age.

Epithalon reverses this process. By activating telomerase, it enables cells to rebuild their telomeres — literally reversing one of the fundamental mechanisms of aging. Studies have demonstrated telomere lengthening in subjects following Epithalon protocols, along with improvements in sleep quality, immune function, antioxidant defense, and hormone regulation.

For the looks maximizer, Epithalon addresses aging at its root cause. Longer telomeres mean cells that replicate accurately for longer — producing skin, muscle, and hair with the quality of a younger biological age.`,
    benefits: [
      'Activates telomerase for measurable telomere lengthening',
      'Reverses biological aging at the cellular level',
      'Dramatically improves sleep quality and circadian regulation',
      'Potent antioxidant properties reducing oxidative damage',
      'Strengthens immune function and disease resistance',
      'Normalizes hormone production including melatonin and cortisol',
      'Shown to increase maximum lifespan in multiple animal models',
      'Protects retinal cells and supports visual health',
      'Improves cellular regeneration across all tissue types',
    ],
    protocol: '5–10mg per day via subcutaneous injection for 10–20 days, 1–2 times per year. Some protocols use 2–3mg daily for longer cycles. Often combined with GHK-Cu for comprehensive anti-aging.',
    synergies: ['GHK-Cu', 'BPC-157', 'Thymosin Alpha-1'],
  },
  {
    slug: 'ipamorelin',
    name: 'Ipamorelin',
    tagline: 'The Clean Growth Hormone Pulse',
    price: 'From $49',
    category: 'Body Composition',
    tags: ['Growth Hormone', 'Muscle Growth', 'Fat Loss', 'Sleep', 'Skin'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/IPAMORELIN-2mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    featured: true,
    shortDescription: 'The most selective growth hormone secretagogue available. Ipamorelin triggers potent GH pulses with no cortisol or prolactin elevation — pure anabolic and anti-aging signaling.',
    fullDescription: `Ipamorelin is a pentapeptide growth hormone releasing peptide (GHRP) that represents the gold standard in GH optimization. Its defining characteristic is extraordinary selectivity: it stimulates powerful growth hormone pulses from the pituitary without triggering the cortisol, prolactin, or ACTH elevation seen with other GHRPs.

This selectivity makes Ipamorelin the ideal foundation for any looks maxing or body composition protocol. Clean GH pulses drive lipolysis (fat breakdown), muscle protein synthesis, collagen production, and cellular repair — without the stress hormone interference that blunts these benefits.

The downstream effects of optimized GH secretion are comprehensive: enhanced muscle definition, reduced body fat (particularly stubborn subcutaneous fat), improved skin thickness and elasticity, accelerated recovery from training, better sleep architecture, and the general vitality associated with youthful GH levels.

Ipamorelin is most powerfully deployed at night, capitalizing on the body's natural GH peak during deep sleep, and can be further amplified by pairing with CJC-1295 for sustained GH elevation throughout the night.`,
    benefits: [
      'Triggers potent, selective GH pulses without cortisol elevation',
      'Promotes significant lean muscle mass development',
      'Accelerates fat loss especially in stubborn areas',
      'Enhances skin elasticity and thickness via GH-collagen signaling',
      'Dramatically improves sleep quality and recovery depth',
      'Accelerates healing of injuries and surgical recovery',
      'Increases IGF-1 levels for cellular regeneration',
      'Anti-aging effects through GH-mediated tissue renewal',
      'Safe for extended use due to high selectivity profile',
    ],
    protocol: '200–300mcg subcutaneous injection, 2–3x daily. Most effective when administered 30–45 minutes before sleep and immediately post-workout. Cycle 3 months on, 1 month off.',
    synergies: ['CJC-1295', 'TB-500', 'BPC-157', 'MK-677'],
  },
  {
    slug: 'pt-141',
    name: 'PT-141',
    tagline: 'The Central Desire Activator',
    price: 'From $59',
    category: 'Performance & Vitality',
    tags: ['Libido', 'Sexual Health', 'Confidence', 'Performance'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/PT141-10mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'PT-141 works directly on the central nervous system to ignite desire, confidence, and sexual performance — through a completely different pathway than any other compound.',
    fullDescription: `PT-141 (Bremelanotide) is a melanocortin agonist that achieves what no other compound can: it activates sexual desire through the central nervous system, not through vascular mechanisms. This fundamental difference makes it effective for both men and women and addresses desire at its neurological root.

While conventional approaches work peripherally (increasing blood flow), PT-141 activates MC3R and MC4R receptors in the hypothalamus and limbic system — the brain regions that govern desire, motivation, and arousal. The result is genuine, centrally-mediated enhancement of libido and sexual function.

For looks maximization, sexual confidence and vitality are often the missing variable. PT-141 addresses this directly, with users reporting dramatically enhanced desire, arousal intensity, and performance. The compound also has mood-elevating effects via its dopaminergic actions, contributing to the overall confidence and presence that defines elite-level magnetism.

PT-141's effects last significantly longer than peripheral compounds and work regardless of hormonal status, making it one of the most reliable tools for optimizing this critical dimension of human performance.`,
    benefits: [
      'Centrally mediated libido enhancement for both men and women',
      'Increases desire and arousal through CNS melanocortin activation',
      'Effective independent of hormonal status',
      'Long-lasting effects (6–72 hours depending on dose)',
      'Mood elevation via dopaminergic pathway stimulation',
      'Enhances confidence and social magnetism',
      'Works synergistically with Melanotan 2 for combined benefits',
      'No cardiovascular mechanism — safer for those with vascular concerns',
    ],
    protocol: '1–2mg subcutaneous injection 1–2 hours before desired activity. Start with 0.5mg to assess response. Effects onset 30–60 minutes and last 6–24 hours.',
    synergies: ['Melanotan 2', 'Kisspeptin-10', 'BPC-157'],
  },
  {
    slug: 'mk-677',
    name: 'MK-677',
    tagline: 'The Nocturnal Sculptor',
    price: 'From $89',
    category: 'Body Composition',
    tags: ['Growth Hormone', 'Muscle', 'Sleep', 'Anti-Aging', 'Oral'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/MK-677-15mg-Oral-1.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Oral',
    shortDescription: 'The only orally bioavailable GH secretagogue. MK-677 elevates GH and IGF-1 around the clock, transforming sleep into your most productive anabolic window.',
    fullDescription: `MK-677 (Ibutamoren) is a non-peptide growth hormone secretagogue that achieves something unique in the world of GH optimization: it works orally. As a ghrelin receptor agonist, it mimics the action of the hunger hormone ghrelin at the pituitary, triggering sustained GH and IGF-1 elevation for up to 24 hours per dose.

This sustained GH elevation profile differentiates MK-677 from injectable peptides that produce acute pulses. The result is a chronic anabolic and anti-catabolic environment — muscle protein synthesis is elevated around the clock, fat metabolism is continuously enhanced, and the regenerative processes associated with GH are persistently activated.

For looks maximization, the most notable effect of MK-677 is on sleep architecture. Users consistently report deeper, more restorative sleep with vivid dreams — a direct consequence of GH's role in sleep regulation. Deep sleep is the single most important factor in hormonal optimization and tissue repair, and MK-677 dramatically improves this foundation.

The compound also produces consistent, progressive improvements in muscle fullness and definition, skin quality, and the overall physical presentation that reflects excellent hormonal health.`,
    benefits: [
      'Oral administration — no injections required',
      'Significantly increases GH and IGF-1 levels for 24 hours',
      'Dramatically improves sleep depth and recovery quality',
      'Builds lean muscle mass with consistent, long-term use',
      'Reduces body fat through sustained GH-mediated lipolysis',
      'Improves bone density — critical for long-term structural integrity',
      'Enhances skin elasticity and thickness',
      'Anti-catabolic effects protect muscle during cutting phases',
      'Improves hair quality and growth rate',
    ],
    protocol: '15–25mg orally before sleep. Take consistently for minimum 3–6 months to see full body composition benefits. The enhanced hunger is manageable when dosed at night.',
    synergies: ['Ipamorelin', 'CJC-1295', 'Tesamorelin'],
  },
  {
    slug: 'igf-1-lr3',
    name: 'IGF-1 LR3',
    tagline: 'The Cellular Growth Amplifier',
    price: 'From $99',
    category: 'Body Composition',
    tags: ['Muscle Growth', 'Fat Loss', 'Recovery', 'Cell Growth'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/image_2024_10_24T01_11_01_146Z.png',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Advanced',
    shortDescription: 'IGF-1 LR3 is the downstream mediator of GH — the molecule that actually executes muscle growth at the cellular level. For serious physique development, nothing competes.',
    fullDescription: `IGF-1 LR3 (Insulin-like Growth Factor 1 Long R3) is a modified form of IGF-1 with a 13 amino acid extension that prevents binding to IGF-1 binding proteins, dramatically extending its half-life from minutes to hours and amplifying its potency.

IGF-1 is the primary mediator of growth hormone's anabolic effects. When GH is elevated, the liver produces IGF-1, which then travels to muscle tissue and directly activates muscle protein synthesis, hyperplasia (the actual creation of new muscle cells), and hypertrophy. This makes IGF-1 LR3 the most direct pathway to genuine muscle development available.

For looks maximization at an advanced level, IGF-1 LR3 achieves results that no other compound matches in terms of muscle quality and density. The hyperplastic effect — actual creation of new muscle fibers — creates the structural foundation for physique improvements that persist long-term.

Beyond muscle, IGF-1 LR3 accelerates fat metabolism, speeds recovery from training and injury, improves bone density, and enhances the regeneration of virtually all tissues. It is the compound of choice for those seeking elite-level physical transformation.`,
    benefits: [
      'Directly stimulates muscle hyperplasia — creation of new muscle cells',
      'Powerful lean mass gains with simultaneous fat loss',
      'Dramatically accelerates recovery between training sessions',
      'Extended half-life (20–30 hours) vs. regular IGF-1',
      'Improves muscle density and hardness',
      'Enhances bone mineral density',
      'Accelerates healing of cartilage, tendons, and ligaments',
      'Systemic regenerative effects across all tissues',
    ],
    protocol: '20–50mcg subcutaneous or intramuscular injection immediately post-workout. Cycle 4–6 weeks maximum due to desensitization. Commonly used in combination with GH peptides.',
    synergies: ['Ipamorelin', 'CJC-1295', 'TB-500', 'BPC-157'],
  },
  {
    slug: 'tesamorelin',
    name: 'Tesamorelin',
    tagline: 'The Abdominal Sculptor',
    price: 'From $69',
    category: 'Body Composition',
    tags: ['Fat Loss', 'Abdominal', 'Growth Hormone', 'Body Composition'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/TESAMORELIN-2mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'The only GH peptide with FDA-approved efficacy for visceral fat reduction. Tesamorelin targets the deep abdominal fat that no diet or exercise protocol can fully address.',
    fullDescription: `Tesamorelin is a synthetic analogue of Growth Hormone Releasing Hormone (GHRH) that stands apart with a unique distinction: it is the only GH-releasing peptide that has received FDA approval for its body composition effects, specifically for reducing visceral abdominal fat.

Visceral fat — the fat stored deep within the abdominal cavity — is the most metabolically harmful and aesthetically significant fat depot in the body. It is hormonally active, producing inflammatory cytokines that accelerate aging and impair health, and it is notoriously resistant to conventional diet and exercise.

Tesamorelin addresses this directly through its potent GHRH-mimicking activity. By stimulating consistent GH pulses, it shifts the body's metabolic set point toward fat oxidation, with particularly pronounced effects on visceral adiposity. Clinical studies demonstrate consistent 15–20% reductions in visceral fat with Tesamorelin protocols.

For the looks maximizer, eliminating visceral fat is the key to achieving the sharp abdominal definition that represents elite physical development. Tesamorelin makes this possible even when other approaches have failed, while simultaneously delivering the full spectrum of GH benefits: improved skin quality, lean muscle preservation, and enhanced recovery.`,
    benefits: [
      'FDA-supported evidence for visceral abdominal fat reduction',
      'Reduces the stubborn deep abdominal fat that resists diet/exercise',
      'Creates sharper, more defined abdominal appearance',
      'Improves waist-to-hip ratio and overall physique proportions',
      'Maintains metabolic rate during caloric restriction',
      'Preserves and builds lean muscle mass',
      'Improves skin elasticity and quality',
      'Enhances cognitive function and mental clarity',
      'Improves lipid profiles and metabolic health markers',
    ],
    protocol: '1–2mg subcutaneous injection daily, administered in the evening. Cycles of 3–6 months show the most dramatic visceral fat reductions. Combine with Ipamorelin for comprehensive GH optimization.',
    synergies: ['Ipamorelin', 'CJC-1295', 'MK-677'],
  },
  {
    slug: 'semax',
    name: 'Semax',
    tagline: 'The Neural Performance Optimizer',
    price: 'From $59',
    category: 'Cognitive Performance',
    tags: ['Nootropic', 'Focus', 'Memory', 'Neuroprotection', 'BDNF'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/SEMAX-10mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'A synthetic analogue of ACTH that enhances BDNF, elevates mental performance, and provides neuroprotection. Semax is the foundation of cognitive looks maxing.',
    fullDescription: `Semax is a heptapeptide derived from the adrenocorticotropic hormone (ACTH) fragment that has been extensively developed for cognitive enhancement and neuroprotection. Originally developed in Russia and widely used in clinical settings there, it has earned a reputation as one of the most effective nootropic peptides available.

The mechanism behind Semax's cognitive effects is multi-layered. Most critically, it dramatically increases BDNF (Brain-Derived Neurotrophic Factor) — the primary growth factor for neurons. BDNF is essential for neuroplasticity, memory consolidation, learning, and the maintenance of existing neural circuits. Low BDNF is associated with cognitive decline, depression, and reduced mental performance.

Semax also modulates dopaminergic and serotonergic systems, producing clean, non-stimulant mental clarity and focus without the anxiety or crash associated with conventional stimulants. Users report enhanced working memory, faster cognitive processing, improved verbal fluency, and a notable reduction in mental fatigue.

For the looks maxer focused on comprehensive optimization, cognitive performance is a force multiplier for everything else. The mental sharpness, confidence, and presence that Semax enables are themselves components of peak physical attractiveness.`,
    benefits: [
      'Dramatically increases BDNF for enhanced neuroplasticity',
      'Improves working memory, recall, and cognitive processing speed',
      'Clean, non-stimulant focus enhancement without crash',
      'Neuroprotective against oxidative and ischemic damage',
      'Reduces mental fatigue and cognitive burnout',
      'Improves mood via serotonergic and dopaminergic modulation',
      'Enhances learning capacity and information retention',
      'Supports recovery from neurological stress and overwork',
    ],
    protocol: '200–600mcg intranasally or subcutaneously, 1–2x daily. Intranasal route provides rapid onset. Cycles of 2–4 weeks on, 1–2 weeks off. Stack with Selank for comprehensive neuro optimization.',
    synergies: ['Selank', 'Epithalon', 'BPC-157'],
  },
  {
    slug: 'selank',
    name: 'Selank',
    tagline: 'The Anxiolytic Performance Enhancer',
    price: 'From $55',
    category: 'Cognitive Performance',
    tags: ['Anti-Anxiety', 'Cognitive', 'Mood', 'Sleep', 'Immune'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/SELANK-5mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'A tuftsin-derived peptide that eliminates anxiety without sedation, enhancing cognitive performance, mood stability, and social confidence simultaneously.',
    fullDescription: `Selank is a synthetic analogue of the immunomodulatory peptide tuftsin, developed by the Institute of Molecular Genetics in Russia. Its most remarkable property is its ability to provide profound anxiolytic (anti-anxiety) effects without the sedation, dependency, or cognitive blunting associated with conventional anxiolytics.

The mechanism involves enhancement of GABA transmission, regulation of serotonin and dopamine metabolism, and modulation of enkephalins — natural opioid peptides involved in stress regulation. This creates a state of calm alertness that is both cognitively optimal and emotionally balanced.

For looks maximization, anxiety is a hidden saboteur. Chronic stress and anxiety elevate cortisol, which directly promotes fat storage, suppresses testosterone, impairs sleep, and accelerates aging. More directly, anxiety manifests in social contexts as reduced presence, poor eye contact, and diminished charisma — all components of physical attractiveness that go beyond purely structural features.

Selank addresses this comprehensively. Users report feeling socially confident and present without the blunted affect of pharmaceutical anxiolytics, with simultaneous improvements in sleep quality, focus, and immune function.`,
    benefits: [
      'Powerful anxiolytic effects without sedation or dependency',
      'Enhances social confidence and presence',
      'Reduces cortisol-mediated stress that impairs body composition',
      'Improves cognitive function and working memory',
      'Stabilizes mood without emotional blunting',
      'Enhances immune system function',
      'Improves sleep onset and sleep quality',
      'Neuroprotective and BDNF-modulating properties',
    ],
    protocol: '250–500mcg intranasally 1–2x daily. Best used before high-stress situations or as a daily optimization tool. Can be combined with Semax for comprehensive neuro enhancement.',
    synergies: ['Semax', 'DSIP', 'BPC-157'],
  },
  {
    slug: 'thymosin-alpha-1',
    name: 'Thymosin Alpha-1',
    tagline: 'The Immune System Elite Protocol',
    price: 'From $79',
    category: 'Immune & Vitality',
    tags: ['Immune Support', 'Antiviral', 'Longevity', 'Anti-Aging'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/BPC-157-2mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'The thymus-derived peptide that engineers an elite immune system. Thymosin Alpha-1 is used by longevity practitioners and elite performers worldwide for immune optimization.',
    fullDescription: `Thymosin Alpha-1 (Tα1) is a 28 amino acid peptide naturally produced by the thymus gland — the master organ of immune development. As we age, the thymus atrophies and Tα1 production declines, directly contributing to the immune deterioration associated with aging.

Supplementing with Tα1 restores this signaling, producing effects that span the full spectrum of immune function: enhanced T-cell production and activation, improved natural killer cell activity, upregulation of cytokine production, and a balanced inflammatory response.

For the high-performance individual, a suboptimal immune system is a constant drag on progress. Illness interrupts training cycles, inflammation impairs recovery, and immune dysfunction accelerates biological aging. Thymosin Alpha-1 addresses all of these factors.

Beyond immunity, Tα1 exhibits antioxidant and anti-inflammatory properties that directly support longevity and healthy aging. It synergizes powerfully with Epithalon for a comprehensive anti-aging protocol and with BPC-157 for accelerated recovery.`,
    benefits: [
      'Significantly enhances T-cell production and activation',
      'Improves natural killer cell activity against pathogens',
      'Reduces frequency and severity of illness',
      'Balances inflammatory response for optimal recovery',
      'Powerful antioxidant properties protecting cellular integrity',
      'Anti-aging effects via thymic regeneration signaling',
      'Enhances response to vaccines and immune challenges',
      'Supports recovery from chronic illness and immune depletion',
    ],
    protocol: '1.6mg subcutaneous injection, 2–3x weekly. Cycles of 4–8 weeks with breaks. Often used in combination with Epithalon for comprehensive longevity protocols.',
    synergies: ['Epithalon', 'BPC-157', 'GHK-Cu'],
  },
  {
    slug: 'cjc-1295',
    name: 'CJC-1295',
    tagline: 'The Sustained GH Elevation Protocol',
    price: 'From $55',
    category: 'Body Composition',
    tags: ['Growth Hormone', 'Muscle', 'Fat Loss', 'Anti-Aging'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/IPAMORELIN-2mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'A modified GHRH analogue that extends GH elevation for days rather than hours. CJC-1295 creates the sustained anabolic environment that transforms physique and longevity.',
    fullDescription: `CJC-1295 Without DAC is a modified Growth Hormone Releasing Hormone analogue that produces potent GH pulses while maintaining a half-life superior to native GHRH. When paired with Ipamorelin, it creates a synergistic effect that produces GH elevations far greater than either compound alone.

The mechanism exploits the body's natural GH axis: GHRH (mimicked by CJC-1295) signals the pituitary to produce GH, while Ipamorelin amplifies this pulse through a separate receptor (the ghrelin receptor). The combination produces a "double stimulus" that results in GH levels approaching those seen with direct GH administration, while maintaining the natural pulsatile pattern that protects receptor sensitivity.

For physique development, sustained GH elevation is transformative. Fat cells become increasingly mobilized for energy, muscle protein synthesis is continuously elevated, recovery is dramatically accelerated, and the anti-aging benefits of optimal GH levels manifest progressively over months.

The CJC-1295 + Ipamorelin stack is considered the gold standard entry point into peptide-based body optimization, and for good reason — it reliably produces visible body composition changes while supporting comprehensive health optimization.`,
    benefits: [
      'Synergistic GH elevation when combined with Ipamorelin',
      'Creates sustained anabolic environment for continuous progress',
      'Significant lean mass gains with consistent use',
      'Accelerated fat loss across all body depots',
      'Enhanced recovery allowing higher training frequency',
      'Improved sleep architecture and recovery depth',
      'Anti-aging effects through sustained GH and IGF-1 elevation',
      'Better skin quality, thickness, and elasticity',
    ],
    protocol: '100–200mcg subcutaneous injection, 2–3x daily. Always combine with Ipamorelin (in same injection or separately). Most effective when dosed before sleep and post-workout.',
    synergies: ['Ipamorelin', 'MK-677', 'TB-500'],
  },
  {
    slug: 'dsip',
    name: 'DSIP',
    tagline: 'The Sleep Architecture Optimizer',
    price: 'From $49',
    category: 'Recovery & Healing',
    tags: ['Sleep', 'Recovery', 'Anti-Aging', 'Stress Reduction'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/SELANK-5mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'Delta Sleep Inducing Peptide — the endogenous compound that engineers deep, restorative sleep. DSIP transforms sleep into your most powerful looks maxing protocol.',
    fullDescription: `DSIP (Delta Sleep Inducing Peptide) is a nonapeptide that the brain naturally produces to regulate sleep architecture, specifically to induce and maintain delta wave (deep) sleep — the sleep stage where growth hormone is released, cellular repair occurs, and memory consolidation happens.

Sleep quality is the single most underestimated variable in looks maximization. Every hormonal optimization, every training session, every nutritional protocol is processed and amplified during sleep. DSIP ensures this processing occurs at its maximum potential by engineering the deep sleep architecture that the modern lifestyle chronically disrupts.

Beyond sleep, DSIP exhibits remarkable stress-buffering effects, normalizing cortisol patterns and reducing the allostatic load that chronic stress places on the body. Elevated cortisol is the enemy of every looks maxing goal — it promotes fat storage, catabolizes muscle, impairs collagen synthesis, and accelerates skin aging. DSIP addresses this directly.

Users report falling asleep faster, achieving deeper sleep with more vivid dreams (REM enhancement), waking more refreshed, and noticing progressive improvements in body composition and recovery over weeks of use.`,
    benefits: [
      'Induces and maintains deep delta wave sleep',
      'Dramatically improves sleep onset — falls asleep faster',
      'Enhances GH release during sleep for overnight recovery',
      'Normalizes cortisol patterns and reduces chronic stress',
      'Improves morning cognitive clarity and alertness',
      'Antioxidant and neuroprotective properties',
      'Shown to normalize disturbed sleep in multiple models',
      'Non-habit forming with no next-day grogginess',
    ],
    protocol: '100–200mcg subcutaneous injection 30–60 minutes before sleep. Can be used nightly or 3–5x weekly for sleep optimization. Combines powerfully with Ipamorelin for maximum overnight recovery.',
    synergies: ['Ipamorelin', 'Selank', 'MK-677'],
  },
  {
    slug: 'mots-c',
    name: 'MOTS-c',
    tagline: 'The Mitochondrial Optimization Protocol',
    price: 'From $89',
    category: 'Anti-Aging',
    tags: ['Mitochondria', 'Metabolic Health', 'Fat Loss', 'Longevity'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/EPITALON-10mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Cutting Edge',
    shortDescription: 'A mitochondrial-derived peptide that activates AMPK pathways, improves metabolic flexibility, and extends cellular health span at the deepest level.',
    fullDescription: `MOTS-c is a mitochondrial-derived peptide — encoded not in nuclear DNA but in the mitochondrial genome itself — that acts as a metabolic regulator with profound effects on cellular energy metabolism, fat utilization, and aging.

Its primary mechanism is activation of AMPK (AMP-activated protein kinase) — the master metabolic switch that promotes fat burning, improves insulin sensitivity, enhances mitochondrial function, and activates autophagy (cellular clean-up). These are the same pathways activated by caloric restriction and intense exercise, but MOTS-c does this directly at the cellular level.

The implications for body composition and aging are significant. MOTS-c improves the body's ability to use fat as fuel, directly supporting leanness. It improves insulin sensitivity, reducing fat storage and improving energy stability. And it activates the cellular maintenance programs that extend health span and slow biological aging.

MOTS-c also exhibits muscle-protective effects, preventing the age-related muscle loss that compromises physical appearance over time. It is a cutting-edge compound used by longevity practitioners for its comprehensive metabolic and anti-aging properties.`,
    benefits: [
      'Activates AMPK — the master metabolic optimization switch',
      'Improves metabolic flexibility between fat and glucose fuel',
      'Enhances insulin sensitivity and glucose uptake',
      'Supports mitochondrial function and cellular energy production',
      'Promotes autophagy for cellular clean-up and renewal',
      'Protects against age-related muscle loss (sarcopenia)',
      'Anti-inflammatory effects reducing metabolic inflammation',
      'Longevity effects through mitochondrial genome signaling',
    ],
    protocol: '5–10mg subcutaneous injection, 3–5x weekly. Best used as part of a comprehensive anti-aging protocol. Often combined with Epithalon for synergistic longevity benefits.',
    synergies: ['Epithalon', 'BPC-157', 'Ipamorelin'],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export const categories = [
  { name: 'Looks Maxing', icon: '✦', description: 'Peptides engineered for skin, tan, and physical transformation' },
  { name: 'Body Composition', icon: '◈', description: 'Lean muscle, fat loss, and physique optimization protocols' },
  { name: 'Recovery & Healing', icon: '⬡', description: 'Accelerated tissue repair and regeneration compounds' },
  { name: 'Anti-Aging', icon: '◉', description: 'Longevity and cellular age reversal protocols' },
  { name: 'Cognitive Performance', icon: '◎', description: 'Neural optimization and mental performance enhancement' },
  { name: 'Performance & Vitality', icon: '◆', description: 'Energy, drive, and peak performance compounds' },
]
