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

const AFF = (slug: string) => `https://apollopeptidesciences.com/product/${slug}/?rfsn=9016964.3f1b1e`

export const products: Product[] = [

  // ── RECOVERY & HEALING ──────────────────────────────────────────────────────

  {
    slug: 'bpc-157',
    name: 'BPC-157',
    tagline: 'The Universal Healing Peptide',
    price: '$59.99',
    category: 'Recovery & Healing',
    tags: ['Recovery', 'Gut Health', 'Joint Health', 'Anti-Inflammatory'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/bpc157_10mg.webp',
    affiliateUrl: AFF('bpc157-10mg'),
    badge: 'Elite Recovery',
    featured: true,
    shortDescription: 'The gold standard in biological performance optimization. BPC-157 accelerates healing at a cellular level, rebuilding tissue faster than the body can on its own.',
    fullDescription: `BPC-157 — Body Protection Compound 157 — is a 15 amino acid synthetic pentadecapeptide that operates as one of nature's most potent biological repair mechanisms. Derived from a gastric protein sequence, it has become the cornerstone protocol for elite athletes, biohackers, and high-performance individuals seeking accelerated recovery and structural integrity.

What separates BPC-157 from conventional recovery agents is its mechanism: it directly promotes angiogenesis (new blood vessel formation), upregulates growth factor receptor expression, and modulates nitric oxide synthesis — creating an environment where damaged tissue heals at a rate simply not possible through diet and training alone.

The compound has demonstrated effects on tendons, ligaments, muscles, bone, the gastric lining, and neural tissue. This makes it uniquely comprehensive — whether the goal is recovering from a training injury, optimizing gut health, or maintaining the structural integrity that underpins elite physique development.

For those optimizing their physical appearance and performance, BPC-157 works at the foundational level — addressing the inflammation, tendon fragility, and micro-damage that limit physique development and longevity. It is found in virtually every advanced stack for good reason: it repairs the cellular environment so everything else works better.

Available in 10mg vials from Apollo Peptide Sciences — pharmaceutical-grade lyophilized powder with full certificate of analysis.`,
    benefits: [
      'Dramatically accelerates tendon, ligament, and muscle repair',
      'Reduces systemic and localized inflammation throughout the body',
      'Heals gut lining and addresses digestive dysfunction at the mucosal level',
      'Supports joint mobility and cartilage health long-term',
      'Promotes neurological recovery and peripheral nerve regeneration',
      'Enhances blood flow to healing tissues via powerful angiogenesis',
      'Protects against stomach ulcers and intestinal permeability',
      'Synergizes with every training protocol to push past recovery plateaus',
    ],
    protocol: 'Typical protocols range from 200–500mcg per day, administered subcutaneously or intramuscularly near the site of injury. For systemic benefits, abdominal SubQ injection is standard. Cycles of 4–8 weeks on, 4 weeks off.',
    synergies: ['tb-500', 'ghk-cu', 'cjc-1295-ipamorelin'],
  },

  {
    slug: 'tb-500',
    name: 'TB-500',
    tagline: 'Systemic Tissue Regeneration',
    price: '$59.99',
    category: 'Recovery & Healing',
    tags: ['Recovery', 'Systemic Healing', 'Flexibility', 'Anti-Inflammatory'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/TB500_10mg.webp',
    affiliateUrl: AFF('tb500-10mg'),
    shortDescription: 'Thymosin Beta-4 analogue that travels systemically to repair tissue throughout the body. Unmatched for flexibility, range of motion, and full-body recovery.',
    fullDescription: `TB-500 is a synthetic analogue of Thymosin Beta-4, a naturally occurring 43 amino acid protein found in virtually every cell in the body. Where BPC-157 excels at localized healing, TB-500's defining characteristic is its ability to travel systemically — reaching injury sites throughout the body through the bloodstream rather than requiring local injection.

The mechanism centers on actin regulation. TB-500 upregulates actin expression and promotes cell migration to injury sites, accelerating the formation of new blood vessels and muscle fibers while reducing inflammation across all tissue types simultaneously. This systemic reach makes it uniquely valuable for athletes and individuals with multiple concurrent injuries or areas of chronic inflammation.

Research has demonstrated TB-500's effects across a remarkable range of tissue types: cardiac muscle regeneration, tendon and ligament healing, skin wound repair, corneal tissue recovery, and bone healing — all through the same systemic distribution mechanism. This breadth of application is unmatched in the peptide category.

For physique development, TB-500 addresses the full-body recovery limitation that training intensity creates — enabling higher frequency and volume by reducing the cumulative structural stress that inevitably limits training progression. Combined with BPC-157, the two peptides create complementary local and systemic repair coverage.`,
    benefits: [
      'Systemic tissue repair — heals multiple injury sites from a single injection',
      'Dramatically improves flexibility and range of motion within weeks',
      'Accelerates recovery from muscle tears, sprains, and overuse injuries',
      'Reduces chronic inflammation throughout the body simultaneously',
      'Promotes new blood vessel formation to all areas of damaged tissue',
      'Enhances hair growth and skin repair as secondary benefits',
      'Enables higher training frequency by accelerating structural recovery',
      'Synergizes powerfully with BPC-157 for complete recovery coverage',
    ],
    protocol: 'Loading phase: 2–2.5mg twice per week for 4–6 weeks. Maintenance: 2–2.5mg every 2 weeks. SubQ injection — systemic distribution means injection site is not critical. Often cycled 8 weeks on, 4 weeks off.',
    synergies: ['bpc-157', 'cjc-1295-ipamorelin', 'igf-1-lr3'],
  },

  {
    slug: 'bacteriostatic-water',
    name: 'Bacteriostatic Water 10ml',
    tagline: 'Essential Peptide Reconstitution Solution',
    price: '$9.99',
    category: 'Recovery & Healing',
    tags: ['Reconstitution', 'Essential', 'Injectable', 'Peptide Prep'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/reconsitution_solution_10ml.webp',
    affiliateUrl: 'https://apollopeptidesciences.com/product/bacteriostatic-water-reconstitution-solution-10ml/?rfsn=9016964.3f1b1e',
    shortDescription: 'The non-negotiable companion for every injectable peptide. Pharmaceutical-grade 0.9% benzyl alcohol solution that reconstitutes lyophilized peptides and preserves them across multiple uses.',
    fullDescription: `Bacteriostatic Water is the foundational tool that makes every injectable peptide protocol possible. Before any lyophilized (freeze-dried) peptide — semaglutide, tirzepatide, BPC-157, CJC-1295/Ipamorelin, or any other compound in this catalog — can be administered, it must be reconstituted with a sterile, preservative-containing solution. Bacteriostatic Water is the pharmaceutical standard for exactly this purpose.

The critical distinction from plain sterile water is the 0.9% benzyl alcohol content. This bacteriostatic preservative prevents microbial growth in the vial between uses, maintaining sterility across multiple draws over 28+ days when stored correctly. Standard water for injection offers no such protection — each use risks contaminating the entire vial. For multi-dose protocols involving weekly or daily administration, bacteriostatic water is not optional.

Pharmaceutical-grade manufacture ensures the absence of pyrogens, endotoxins, and particulate contamination that would compromise research integrity or safety. Apollo Peptide Sciences supplies this in a 10ml sterile vial — sufficient to reconstitute multiple peptide vials with careful technique. Each 10ml vial allows precise dosing calculations by adjusting the volume added to achieve the desired concentration per unit of the reconstituted compound.

No serious peptide research protocol is complete without it. Whether working with GLP-1 compounds requiring weekly dosing over months-long protocols, or short-cycle performance peptides dosed multiple times per day, bacteriostatic water ensures every injection draws from a sterile, stable, accurately concentrated solution. Add one to every order — it is the one consumable no protocol can function without.`,
    benefits: [
      'Preserves reconstituted peptides across 28+ days of multi-dose use',
      '0.9% benzyl alcohol content inhibits bacterial growth between draws',
      'Pharmaceutical-grade manufacture — pyrogen and endotoxin tested',
      'Compatible with all lyophilized injectable peptides in this catalog',
      'Enables precise concentration calculation by adjusting reconstitution volume',
      'Maintains chemical stability of reconstituted peptides under refrigeration',
      'Single 10ml vial reconstitutes multiple peptide vials efficiently',
      'The non-negotiable foundation for every injectable peptide protocol',
    ],
    protocol: 'Add 1–2ml of bacteriostatic water per 5mg peptide vial as a starting point — adjust volume based on desired injection concentration. Use a clean alcohol-wiped septum before each draw. Inject the water slowly down the inside of the peptide vial wall to avoid disrupting the lyophilized powder. Swirl gently — do not shake. Store reconstituted vials refrigerated at 2–8°C.',
    synergies: ['bpc-157', 'semaglutide', 'tirzepatide'],
  },

  // ── LOOKS MAXING ────────────────────────────────────────────────────────────

  {
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    tagline: 'The Collagen & Skin Optimizer',
    price: '$50.00',
    category: 'Looks Maxing',
    tags: ['Skin', 'Collagen', 'Anti-Aging', 'Looks Maxing'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/ghk-cu_50mg.webp',
    affiliateUrl: AFF('ghk-cu'),
    badge: 'Skin Gold Standard',
    featured: true,
    shortDescription: 'Activates 4,000+ genes involved in skin repair, stimulates fibroblast collagen production. Up to 121% increase in skin density documented. The gold standard anti-aging skin peptide.',
    fullDescription: `GHK-Cu — Glycyl-L-Histidyl-L-Lysine copper complex — is the most comprehensively studied skin optimization peptide in existence. Naturally occurring in human plasma, it declines dramatically with age, coinciding precisely with the measurable decline in skin quality that characterizes aging. Supplementation restores the signaling environment associated with younger, structurally superior skin.

The mechanism is profound: GHK-Cu activates over 4,000 human genes associated with skin repair, collagen synthesis, and cellular renewal. It directly stimulates dermal fibroblasts — the cells responsible for collagen and elastin production — while simultaneously breaking down damaged, cross-linked collagen and replacing it with fresh structural protein. This dual action of removal and replacement is what produces measurable improvements in skin density rather than just surface-level hydration.

Clinical data has documented a 121% increase in skin density with GHK-Cu application, alongside significant reductions in fine lines, improved skin elasticity, and enhanced wound healing. The compound also demonstrates potent anti-inflammatory and antioxidant properties that protect dermal tissue from the UV, pollution, and oxidative stress that accelerate visible aging.

For looks maximization, GHK-Cu addresses the structural variable that no diet, hydration, or training protocol can change: dermal collagen architecture. Available in 50mg vials from Apollo Peptide Sciences for research purposes.`,
    benefits: [
      'Up to 121% increase in skin density with regular use',
      'Activates 4,000+ genes associated with skin repair and regeneration',
      'Directly stimulates fibroblast collagen and elastin production',
      'Removes damaged, cross-linked collagen and replaces with new structural protein',
      'Reduces fine lines and wrinkles at the structural level, not just topically',
      'Powerful antioxidant protection against UV and environmental damage',
      'Accelerates wound healing and scar tissue remodeling',
      'Improves hair follicle health and may slow hair thinning',
    ],
    protocol: 'SubQ injection: 1–2mg per injection, 3–5× weekly. Many researchers also use topically at lower concentrations. Cycles of 8–12 weeks produce the most significant structural results. Can be run year-round at lower frequency.',
    synergies: ['snap-8', 'bpc-157', 'epithalon'],
  },

  {
    slug: 'snap-8',
    name: 'SNAP-8',
    tagline: 'The Anti-Wrinkle Peptide',
    price: '$45.00',
    category: 'Looks Maxing',
    tags: ['Skin', 'Anti-Wrinkle', 'Looks Maxing', 'Collagen'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/snap-8_10mg.webp',
    affiliateUrl: AFF('snap-8'),
    shortDescription: 'Acetyl Glutamyl Heptapeptide-3 — blocks neuromuscular signals that cause expression lines. Reduces wrinkle depth by up to 63%. The research peptide alternative to Botox.',
    fullDescription: `SNAP-8 — Acetyl Glutamyl Heptapeptide-3 — is a synthetic octapeptide that addresses the neuromuscular mechanism behind expression-line wrinkle formation. While GHK-Cu works on collagen architecture, SNAP-8 targets the source of dynamic wrinkles: the repetitive muscle contractions of facial expressions that, over years, engrave permanent lines into the skin.

The mechanism is elegant: SNAP-8 competitively inhibits the SNARE protein complex, the molecular machinery that facilitates neuromuscular signal transmission. By blocking this complex, it reduces the intensity of muscle contractions that create crow's feet, forehead lines, and glabellar creases — without paralysis, without needles in the face, and without the systemic effects of neurotoxin injections.

Research data demonstrates wrinkle depth reductions of up to 63% with consistent SNAP-8 application. The effect is gradual and natural — a softening of expression lines rather than the frozen appearance associated with neurotoxin overuse. For biohackers and looks maximizers, SNAP-8 is the peptide-based entry point for neuromuscular wrinkle intervention.

Available in 10mg vials from Apollo Peptide Sciences for research applications.`,
    benefits: [
      'Reduces expression line depth by up to 63% with consistent use',
      'Blocks the SNARE complex mechanism behind dynamic wrinkle formation',
      'Works on crow\'s feet, forehead lines, and glabellar creases',
      'Gradual, natural-looking softening without paralysis effects',
      'Complements GHK-Cu for a dual collagen + neuromuscular wrinkle protocol',
      'No systemic hormonal or metabolic interference',
      'Suitable for sensitive skin types and all skin tones',
      'Research peptide with documented cosmetic efficacy in laboratory settings',
    ],
    protocol: 'Typically dissolved and applied topically to target areas twice daily, or used in research formulations at 4–10 ppm concentration. Some researchers use diluted SubQ injection near target muscle groups. Consistent daily use for 4+ weeks produces measurable results.',
    synergies: ['ghk-cu', 'epithalon', 'bpc-157'],
  },

  {
    slug: 'snap-8-2-pack',
    name: 'SNAP-8 (2-Pack)',
    tagline: 'Double Supply — Best Value for Extended Wrinkle Research',
    price: '$80.00',
    category: 'Looks Maxing',
    tags: ['Skin', 'Anti-Wrinkle', 'Looks Maxing', 'Collagen', 'Bundle'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/snap-8_10mg_2pack.webp',
    affiliateUrl: 'https://apollopeptidesciences.com/product/snap-8-2-pack/?rfsn=9016964.3f1b1e',
    shortDescription: 'Two 10mg SNAP-8 vials at a reduced bundle price. The practical format for researchers running the 4+ week protocols required to see measurable wrinkle depth reduction results.',
    fullDescription: `The SNAP-8 2-Pack bundles two 10mg vials of Acetyl Glutamyl Heptapeptide-3 — delivering double the research supply at a price that reflects the bundle discount. It is the practical supply format for researchers who understand that SNAP-8's wrinkle-reduction mechanism requires sustained, consistent application over 4+ weeks to produce the measurable results documented in research — and who want the supply continuity to execute a full protocol without a mid-course reorder.

SNAP-8's mechanism of action — competitive inhibition of the SNARE protein complex to reduce neuromuscular signal intensity behind expression-line formation — is time-dependent. A single vial supports initial research but falls short of the consistent, multi-week exposure required to observe wrinkle depth reductions of the magnitude (up to 63%) documented in laboratory settings. The 2-pack provides the supply bridge between a single exploratory dose and a complete protocol cycle.

The economics are simple: two vials at the bundle price represent a meaningful saving over two individual purchases, while delivering twice the research material in a single order. For researchers combining SNAP-8 with GHK-Cu in a comprehensive skin optimization protocol — targeting both collagen architecture (GHK-Cu) and neuromuscular wrinkle formation (SNAP-8) simultaneously — the 2-pack is the natural SNAP-8 entry point for sustained parallel use.`,
    benefits: [
      '2x the SNAP-8 supply in a single bundle purchase at a reduced per-vial price',
      'Supports the 4+ week consistent application required for measurable wrinkle reduction',
      'Eliminates mid-protocol reorder gaps that disrupt cumulative SNARE inhibition effects',
      'Ideal for researchers running SNAP-8 alongside GHK-Cu in a dual skin protocol',
      'Blocks SNARE complex mechanism behind crow\'s feet, forehead lines, and glabellar creases',
      'Each vial contains 10mg Acetyl Glutamyl Heptapeptide-3 (CAS 868844-74-0)',
      'Cost-effective format for the sustained daily application that produces documented results',
      'Practical supply for researchers testing both topical and SubQ research protocols',
    ],
    protocol: 'Dissolve and apply topically to target areas twice daily, or use in formulations at 4–10 ppm concentration. Some researchers use diluted SubQ injection near target muscle groups. Consistent daily use for 4+ weeks produces measurable results. The 2-pack provides approximately 8+ weeks of research supply depending on application method.',
    synergies: ['snap-8', 'ghk-cu', 'epithalon', 'bpc-157'],
  },

  // ── BODY COMPOSITION ────────────────────────────────────────────────────────

  {
    slug: 'cjc-1295-ipamorelin',
    name: 'CJC-1295 / Ipamorelin',
    tagline: 'The Gold Standard GH Stack',
    price: '$50.00',
    category: 'Body Composition',
    tags: ['GH Optimization', 'Muscle Growth', 'Fat Loss', 'Sleep', 'Body Composition'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/cjc1295_5-5mg.webp',
    affiliateUrl: AFF('cjc1295-ipamorelin'),
    badge: 'Best Seller',
    featured: true,
    shortDescription: 'Pre-blended GHRH + GHRP combo — the most synergistic growth hormone protocol. Dual-receptor stimulation produces GH pulses far beyond either peptide alone for lean mass and recovery.',
    fullDescription: `The CJC-1295 / Ipamorelin combination is widely regarded as the most effective and safest growth hormone optimization protocol available in peptide form. Apollo Peptide Sciences supplies this as a pre-blended 5mg/5mg vial, eliminating the need to source and combine two separate compounds.

The synergy is pharmacological: CJC-1295 is a GHRH (Growth Hormone Releasing Hormone) analogue that activates the GHRH receptor on pituitary somatotrophs, while Ipamorelin is a ghrelin-mimetic GHRP that activates the ghrelin receptor through a completely different pathway. When both receptors are stimulated simultaneously, the resulting GH pulse is substantially greater than either compound alone — a "double stimulus" that researchers have described as approaching pharmaceutical GH levels while remaining entirely within the body's own regulatory feedback mechanisms.

Critically, Ipamorelin provides this potent GH stimulation with extraordinary selectivity: unlike other GHRPs (GHRP-6, GHRP-2), it does not elevate cortisol, prolactin, or ACTH — ensuring the full benefit of GH elevation without hormonal interference. This selectivity is why Ipamorelin has become the standard GHRP component in premium GH protocols.

The downstream effects of optimized GH pulsatility are comprehensive: enhanced fat mobilization and lipolysis, improved lean muscle preservation and growth via IGF-1 elevation, dramatically improved deep sleep architecture, faster recovery from training, and improved skin thickness and elasticity as collateral benefits of increased IGF-1.`,
    benefits: [
      'Dual-receptor GH stimulation produces synergistic GH elevation beyond either compound alone',
      'Ipamorelin component: zero cortisol, prolactin, or ACTH elevation — pure GH selectivity',
      'Significantly improved deep sleep quality within the first week of use',
      'Enhanced fat mobilization and lipolysis across all body fat depots',
      'Improved lean muscle retention and growth via elevated IGF-1',
      'Faster recovery between training sessions — sustains higher training frequency',
      'Improved skin thickness and elasticity as a secondary GH/IGF-1 benefit',
      'Pre-blended 5mg/5mg ratio eliminates the need for two separate compounds',
    ],
    protocol: '100mcg CJC-1295 + 100mcg Ipamorelin per injection (from blended vial), 2–3× daily. Best timed: upon waking, pre-workout, and 30–60 min before bed. The bedtime dose leverages the natural GH pulse during sleep. Cycles of 12–16 weeks on, 4–8 weeks off.',
    synergies: ['igf-1-lr3', 'bpc-157', 'epithalon'],
  },

  {
    slug: 'igf-1-lr3',
    name: 'IGF-1 LR3',
    tagline: 'Direct Anabolic Signal',
    price: '$79.99',
    category: 'Body Composition',
    tags: ['Muscle Growth', 'Anabolic', 'Body Composition', 'IGF-1'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/igf-1lr3-1mg.webp',
    affiliateUrl: AFF('igf-1lr3'),
    shortDescription: 'Long-acting IGF-1 analogue that directly activates muscle hypertrophy pathways. The most anabolic peptide available — promotes lean mass growth and visceral fat reduction.',
    fullDescription: `IGF-1 LR3 — Long Arg3-Insulin-like Growth Factor-1 — is the most directly anabolic peptide available in research applications. Where growth hormone peptides like CJC-1295/Ipamorelin work upstream by stimulating GH production (which then drives IGF-1), IGF-1 LR3 delivers the anabolic signal directly to muscle tissue, bypassing the entire GH axis.

The "LR3" designation refers to key structural modifications that distinguish it from native IGF-1: an arginine substitution at position 3 and an extended 13 amino acid N-terminal sequence. These modifications dramatically reduce binding to IGF-binding proteins — the proteins that sequester and limit native IGF-1's activity. The result is a bioactive half-life of 20–30 hours (vs. minutes for native IGF-1) and a systemic distribution that reaches muscle cells throughout the body rather than acting only locally.

At the cellular level, IGF-1 LR3 binds the IGF-1 receptor on muscle cells, activating the PI3K/Akt/mTOR signaling cascade — the primary molecular pathway driving both muscle hypertrophy (growth of existing fibers) and hyperplasia (formation of new fibers). This dual mechanism of action is why IGF-1 LR3 produces muscle density and fullness that GH peptides alone cannot achieve — it acts at the terminal effector level of the GH/IGF-1 axis.

Stacked with CJC-1295/Ipamorelin, IGF-1 LR3 creates a comprehensive anabolic environment: elevated GH drives endogenous IGF-1 production throughout the day, while direct IGF-1 LR3 delivers a concentrated anabolic signal post-workout.`,
    benefits: [
      'Directly activates mTOR and muscle protein synthesis pathways',
      'Extended 20–30 hour half-life provides sustained anabolic signaling',
      'Reduces visceral fat via IGF-1 receptor activation in adipose tissue',
      'Promotes both muscle hypertrophy (fiber growth) and hyperplasia (new fiber formation)',
      'Bypasses GH axis — works independently of endogenous GH levels',
      'Systemic distribution reaches all muscle groups from a single injection',
      'Significantly amplifies results when stacked with CJC-1295/Ipamorelin',
      'Improves nitrogen retention and amino acid uptake in muscle cells',
    ],
    protocol: '20–50mcg SubQ or IM, administered post-workout when muscle cells are maximally insulin-sensitive and IGF-1 receptor-upregulated. Short cycles recommended: 4–6 weeks on, 4–6 weeks off to maintain receptor sensitivity. Not suitable for continuous long-term use.',
    synergies: ['cjc-1295-ipamorelin', 'bpc-157', 'tb-500'],
  },

  // ── WEIGHT MANAGEMENT ───────────────────────────────────────────────────────

  {
    slug: 'semaglutide',
    name: 'Semaglutide',
    tagline: 'GLP-1 Fat Loss Compound',
    price: '$79.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'GLP-1', 'Appetite'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/10/semaglutide_5mg.webp',
    affiliateUrl: AFF('glp-1s-5mg'),
    badge: 'Clinical Grade',
    featured: true,
    shortDescription: 'The compound behind Ozempic/Wegovy. GLP-1 receptor agonist producing significant appetite suppression, fat loss, and metabolic improvement with once-weekly dosing.',
    fullDescription: `Semaglutide is the active compound in the pharmaceutical products Ozempic and Wegovy — now widely available as a research peptide through Apollo Peptide Sciences. It is a GLP-1 (Glucagon-Like Peptide-1) receptor agonist with a C18 fatty diacid side chain modification that extends its half-life to approximately 7 days, enabling the once-weekly dosing protocol that defines its clinical use.

The mechanism of action is multi-dimensional. At the hypothalamic level, semaglutide activates GLP-1 receptors in the appetite and satiety centers, producing powerful reductions in hunger signals and food intake — without the stimulant side effects or psychological dependence of traditional appetite suppressants. Simultaneously, it slows gastric emptying (prolonging satiety after meals), reduces glucagon secretion, and improves insulin sensitivity at peripheral tissues.

Clinical data from the STEP trial program demonstrated an average of 14.9% body weight reduction over 68 weeks in research subjects — the most significant weight loss outcomes ever documented for a pharmaceutical compound until the subsequent emergence of dual and triple receptor agonists. For individuals with significant excess body fat, semaglutide produces metabolic improvements (reduced HbA1c, improved lipid profiles, lower blood pressure) that extend well beyond aesthetics.

Apollo Peptide Sciences offers semaglutide in 5mg, 10mg, and 15mg formats. The 5mg vial is the standard entry point for research protocols — ideal for dose escalation and establishing individual tolerance before moving to higher-volume formats.`,
    benefits: [
      'Average 14.9% body weight reduction demonstrated in clinical research',
      'Powerful appetite suppression via hypothalamic GLP-1 receptor activation',
      'Once-weekly dosing enabled by extended half-life modification',
      'Slows gastric emptying for prolonged satiety after meals',
      'Improves insulin sensitivity and glucose metabolism',
      'Reduces visceral fat preferentially over subcutaneous fat',
      'Improves cardiovascular risk markers — lipids, blood pressure, HbA1c',
      'Available in 5mg, 10mg, and 15mg formats for different research durations',
    ],
    protocol: 'Dose escalation protocol: start at 0.25mg weekly for 4 weeks, increase to 0.5mg, then 1mg, then up to 2.4mg at maintenance. Subcutaneous injection once weekly. Reconstitute with bacteriostatic water. The escalation protocol minimizes GI side effects during adaptation.',
    synergies: ['cagrilintide-semaglutide', 'bpc-157', 'cjc-1295-ipamorelin'],
  },

  {
    slug: 'semaglutide-10mg',
    name: 'Semaglutide 10mg',
    tagline: 'Intermediate Dose — Where Real Results Begin',
    price: '$99.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'GLP-1', 'Appetite', 'Intermediate'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/10/semaglutide_10mg-1.webp',
    affiliateUrl: 'https://apollopeptidesciences.com/product/glp-1s-10mg/?rfsn=9016964.3f1b1e',
    shortDescription: 'The intermediate format for researchers who have completed the escalation from 5mg and are now in the therapeutic range where meaningful, sustained fat loss occurs.',
    fullDescription: `The 10mg semaglutide vial represents the pivot point in any serious research protocol — the transition from dose escalation into the therapeutic range where clinically significant fat loss is achieved and sustained. Researchers who have completed the initial 5mg escalation protocol have already adapted to the compound's GI profile; the 10mg vial provides the volume needed to operate confidently at doses of 1–2mg weekly without the pressure of a smaller vial running short mid-protocol.

At therapeutic doses of 1–2mg weekly, semaglutide's GLP-1 receptor engagement reaches the level demonstrated in the STEP trial program to drive meaningful, clinically significant weight reduction. The 10mg vial provides approximately 5–10 weeks of research supply at 1–2mg weekly dosing — the sustained duration needed for the compound's cumulative appetite-modulating effects to produce measurable body composition changes.

The cost advantage over purchasing two 5mg vials for the same total volume is meaningful for longer research programs. A single 10mg vial is not only more economical per milligram but also more practical: fewer reconstitution events mean less handling, fewer opportunities for contamination, and a cleaner protocol management workflow. Paired with bacteriostatic water, it reconstitutes cleanly to any desired concentration.

For those running the standard dose escalation from 0.25mg to 2.4mg, the 10mg vial serves as the ideal bridge between the entry-level 5mg and the long-term maintenance 15mg format — covering the critical months where the body's response to semaglutide is most actively established.`,
    benefits: [
      'Covers the full therapeutic dose range (1–2mg weekly) for 5–10 weeks of research',
      'Lower cost per milligram than two separate 5mg vials',
      'Fewer reconstitution events reduce handling and contamination risk',
      'Ideal transition format from entry-level 5mg escalation protocols',
      'Supports dosing flexibility — concentrate adjustment for any target dose',
      'The dose range where STEP trial fat loss outcomes were meaningfully achieved',
      'Efficient single-vial management for mid-protocol research continuity',
      'Bridges the gap between 5mg starter and 15mg long-term maintenance vials',
    ],
    protocol: 'Intended for researchers who have completed dose escalation on the 5mg vial and are dosing at 1–2mg weekly. Reconstitute with 1–2ml bacteriostatic water for a working concentration of 5–10mg/ml. SubQ injection once weekly. Continue escalation to 2.4mg maintenance as tolerated.',
    synergies: ['semaglutide', 'cagrilintide-semaglutide', 'bacteriostatic-water'],
  },

  {
    slug: 'semaglutide-15mg',
    name: 'Semaglutide 15mg',
    tagline: 'Maximum Dose — Long-Term Maintenance Format',
    price: '$159.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'GLP-1', 'Maintenance', 'Long-Term'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/semaglutide_15mg.webp',
    affiliateUrl: 'https://apollopeptidesciences.com/product/glp-1s-15mg/?rfsn=9016964.3f1b1e',
    shortDescription: 'The maximum volume format — 15mg matches the complete STEP trial maintenance dose (2.4mg weekly × 6 weeks+). Best value per mg for serious long-term research protocols.',
    fullDescription: `The 15mg semaglutide vial is engineered for the serious long-term researcher: it provides the maximum vial volume available, delivers the lowest cost per milligram across all three semaglutide formats, and contains enough compound to sustain the maximum 2.4mg weekly maintenance dose — exactly as used in the STEP trials — for more than six weeks of uninterrupted research.

The STEP trial program's pivotal 2.4mg weekly maintenance dose is the reference standard for semaglutide's full therapeutic potential. Achieving and sustaining this dose is where the 14.9% average body weight reduction data was generated. The 15mg vial is precisely sized for this phase — not dose escalation, not experimentation, but full-scale maintenance-phase research where the compound's metabolic and body composition effects are most completely expressed.

At the 2.4mg weekly maintenance dose, semaglutide's hypothalamic GLP-1 engagement is at maximum intensity: appetite suppression is profound and consistent, gastric emptying is significantly slowed, and the hormonal environment driving fat mobilization is continuously maintained between weekly injections. The 15mg vial's supply duration at this dose — approximately 6 weeks — aligns with the natural assessment intervals for body composition response.

For cost-conscious researchers running multi-month protocols, the 15mg vial offers the most rational economics: a single vial costs less per milligram than any other semaglutide format in the Apollo catalog. Combined with the logistical simplicity of fewer vials to manage, reconstitute, and track, the 15mg format is the standard choice for established, ongoing semaglutide research.`,
    benefits: [
      'Lowest cost per milligram across all three semaglutide vial sizes',
      'Matches the 2.4mg weekly STEP trial maintenance dose for 6+ weeks',
      'Optimal for established protocols at full therapeutic maintenance dosing',
      'Fewer vials to manage for multi-month research programs',
      'Maximum uninterrupted supply duration — avoids mid-protocol gaps',
      'Full expression of semaglutide\'s appetite suppression and metabolic effects',
      'Ideal for researchers who have completed escalation and confirmed tolerability',
      'Best format for comparing long-term body composition outcomes across time',
    ],
    protocol: 'For researchers at established maintenance dose of 1.7–2.4mg weekly. Reconstitute with 1.5–2ml bacteriostatic water. SubQ injection once weekly at consistent intervals for stable plasma levels. Store refrigerated; use within 28 days of reconstitution.',
    synergies: ['semaglutide-10mg', 'cagrilintide-semaglutide', 'bacteriostatic-water'],
  },

  {
    slug: 'tirzepatide',
    name: 'Tirzepatide',
    tagline: 'Dual GLP-1/GIP Agonist',
    price: '$149.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'GLP-1', 'GIP', 'Appetite', 'Metabolic'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/04/tirzepatide_15mg-1.webp',
    affiliateUrl: AFF('glp-2t-15m'),
    badge: 'Most Effective',
    featured: true,
    shortDescription: 'The compound behind Mounjaro/Zepbound. Dual GLP-1 and GIP receptor agonist producing dramatic fat loss, appetite suppression, and metabolic improvements beyond semaglutide alone.',
    fullDescription: `Tirzepatide — marketed as Mounjaro for diabetes and Zepbound for weight loss — represents the next evolution in GLP-1-based fat loss compounds. While semaglutide activates only the GLP-1 receptor, tirzepatide is a "twincretin" that simultaneously activates both GLP-1 and GIP (Glucose-dependent Insulinotropic Polypeptide) receptors, producing superior fat loss outcomes through dual receptor engagement.

The GIP receptor activation provides additive and potentially synergistic mechanisms beyond GLP-1 alone: improved insulin secretion (glucose-dependent), enhanced fat storage inhibition at adipose tissue, and potentially improved tolerability compared to pure GLP-1 agonism. The combination produces fat loss effects that significantly exceed semaglutide in head-to-head comparisons.

The SURMOUNT-1 trial — the pivotal tirzepatide weight loss study — demonstrated an average body weight reduction of 22.5% at the highest dose (15mg weekly), representing the highest fat loss efficacy ever documented for any pharmaceutical compound in a large clinical trial until retatrutide emerged. At the 5mg dose, average weight reduction was 15% — already exceeding semaglutide's maximum efficacy.

Beyond weight loss, tirzepatide produces dramatic metabolic improvements: HbA1c reductions of 2.1–2.4%, significant reductions in triglycerides and LDL cholesterol, and blood pressure improvements that make it one of the most comprehensively metabolically beneficial compounds in research.

Available from Apollo Peptide Sciences in 15mg vials.`,
    benefits: [
      'Up to 22.5% body weight reduction demonstrated in clinical research',
      'Dual GLP-1/GIP receptor activation for superior fat loss vs. semaglutide alone',
      'Significant improvement in insulin sensitivity and glucose metabolism',
      'Reduces triglycerides and improves lipid profiles comprehensively',
      'Powerful, sustained appetite suppression through dual receptor pathways',
      'May have better GI tolerability than pure GLP-1 agonists due to GIP activation',
      'Available in multiple formats including 4-pack and 10-pack bulk options',
      'Weekly subcutaneous injection protocol — minimal administration burden',
    ],
    protocol: 'Dose escalation: 2.5mg weekly for 4 weeks, then 5mg for 4 weeks, then 7.5mg, 10mg, 12.5mg, and 15mg at 4-week intervals. Slower escalation reduces GI side effects. Maintenance at 10–15mg weekly. SubQ injection once weekly.',
    synergies: ['bpc-157', 'cjc-1295-ipamorelin', 'nad-plus'],
  },

  {
    slug: 'tirzepatide-15mg-4-pack',
    name: 'Tirzepatide 15mg (4-Pack)',
    tagline: 'Multi-Vial Bundle — Best Value for Sustained Research',
    price: '$569.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'GLP-1', 'GIP', 'Bundle', 'Cost-Effective'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_15mg_multi.webp',
    affiliateUrl: 'https://apollopeptidesciences.com/product/glp-2t-15mg-4-pack/?rfsn=9016964.3f1b1e',
    shortDescription: 'Four 15mg tirzepatide vials bundled for maximum value. Provides a 4-month supply at 15mg weekly maintenance dosing — the most cost-effective format for sustained dual GLP-1/GIP research.',
    fullDescription: `The Tirzepatide 15mg 4-Pack delivers four standard 15mg vials as a single bundled purchase — the optimal format for researchers who have completed dose escalation and are committed to sustained maintenance-phase protocols. At 15mg weekly dosing (the peak dose from the SURMOUNT-1 trial documenting 22.5% average body weight reduction), this 4-pack provides a full 4 weeks of uninterrupted supply per vial, translating to approximately 4 months of research continuity from a single order.

The bundle economics are straightforward: four vials purchased together cost meaningfully less per milligram than four individual 15mg purchases, reducing the per-dose cost at the most effective maintenance tier. For serious tirzepatide researchers who have established tolerability and are executing long-term protocols, the 4-pack eliminates the reordering friction that interrupts protocol continuity.

Tirzepatide's dual GLP-1/GIP receptor mechanism — the compound behind Mounjaro and Zepbound — produces its most significant metabolic and body composition effects through sustained, uninterrupted dosing. Each vial reconstituted with bacteriostatic water provides a precise working concentration for weekly SubQ injections, maintaining the consistent hormonal signaling environment required for compounding metabolic benefit over time.`,
    benefits: [
      '4 vials of 15mg tirzepatide — approximately 4 months of supply at maintenance dosing',
      'Lower cost per milligram vs. four individual 15mg purchases',
      'Eliminates reordering gaps that interrupt sustained protocol continuity',
      'Supports full maintenance-phase research at the SURMOUNT-1 peak efficacy dose',
      'Each vial individually sealed for storage integrity across the multi-month supply',
      'Dual GLP-1/GIP mechanism delivers 22.5% average body weight reduction in clinical data',
      'Single order manages the full supply horizon for a sustained research program',
      'Compatible with bacteriostatic water for precise reconstitution at any working concentration',
    ],
    protocol: 'For researchers at confirmed 15mg weekly maintenance dose. Reconstitute one vial at a time with 1.5ml bacteriostatic water (10mg/ml) or 3ml (5mg/ml). SubQ injection once weekly. Store unopened vials at room temperature or refrigerated; refrigerate reconstituted vials immediately and use within 28 days.',
    synergies: ['tirzepatide-60mg', 'bpc-157', 'bacteriostatic-water'],
  },

  {
    slug: 'tirzepatide-15mg-10-pack',
    name: 'Tirzepatide 15mg (10-Pack)',
    tagline: 'Maximum Bundle — Lowest Cost Per Vial',
    price: '$1,399.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'GLP-1', 'GIP', 'Bundle', 'Long-Term'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_15mg_multi.webp',
    affiliateUrl: 'https://apollopeptidesciences.com/product/glp-2t-15mg-10-pack/?rfsn=9016964.3f1b1e',
    shortDescription: 'Ten 15mg vials — the maximum bundle for serious long-term tirzepatide research programs. Over 2 months of supply at 15mg weekly. Deepest per-vial discount available.',
    fullDescription: `The Tirzepatide 15mg 10-Pack is the apex of the Apollo tirzepatide bundle lineup — ten standard 15mg vials at the deepest per-vial discount available for this compound. It exists for one purpose: to supply serious, committed long-term research programs with the volume needed to execute multi-month maintenance-phase protocols without supply interruption or reordering overhead.

At 15mg weekly maintenance dosing — the maximum dose from the SURMOUNT-1 trial that documented 22.5% average body weight reduction — ten vials deliver approximately 10 weeks of uninterrupted research supply from a single order. For researchers running tirzepatide as a primary, sustained metabolic intervention, this represents the most financially efficient and operationally streamlined way to supply a serious long-term program.

The per-vial cost at the 10-pack tier is substantially lower than any smaller bundle or individual purchase, making the economics compelling for researchers who have confirmed tirzepatide tolerability and are committed to the extended protocol duration required to observe the compound's full body composition and metabolic effects. Tirzepatide's dual GLP-1/GIP mechanism produces compounding benefits over months — not weeks — and the 10-pack ensures the supply continuity required to realize those cumulative outcomes.`,
    benefits: [
      '10 vials of 15mg tirzepatide — approximately 10 weeks of supply at 15mg weekly',
      'Deepest per-vial discount in the Apollo tirzepatide catalog',
      'Eliminates all supply management overhead for a full research program cycle',
      'Supports sustained protocols at the SURMOUNT-1 peak efficacy maintenance dose',
      'Maximum cost efficiency for researchers committed to long-term tirzepatide use',
      'Single order covers the supply horizon for a serious multi-month protocol',
      'Each vial individually sealed to maintain stability across the extended supply',
      'Lowest cost-per-dose for dual GLP-1/GIP receptor research at scale',
    ],
    protocol: 'For experienced researchers at confirmed 15mg weekly maintenance dose. Reconstitute one vial at a time with bacteriostatic water; refrigerate immediately after reconstitution. Store remaining sealed vials at room temperature or refrigerated. Use each reconstituted vial within 28 days before opening the next. SubQ injection once weekly.',
    synergies: ['tirzepatide-60mg', 'bpc-157', 'bacteriostatic-water'],
  },

  {
    slug: 'tirzepatide-20mg-5-pack',
    name: 'Tirzepatide 20mg (5-Pack)',
    tagline: 'High-Dose Bundle — Extended Maintenance Supply',
    price: '$699.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'GLP-1', 'GIP', 'Bundle', 'High-Dose'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_20mg_multi.webp',
    affiliateUrl: 'https://apollopeptidesciences.com/product/glp-2t-20mg-5-pack/?rfsn=9016964.3f1b1e',
    shortDescription: 'Five 20mg tirzepatide vials — higher-dose format for researchers who have titrated above the standard 15mg ceiling. Exceptional value for advanced maintenance-phase research programs.',
    fullDescription: `The Tirzepatide 20mg 5-Pack delivers five higher-volume 20mg vials in a single bundled purchase, designed for researchers whose maintenance protocols operate above the standard 15mg dose ceiling explored in SURMOUNT-1. Each 20mg vial provides greater per-vial supply flexibility for researchers at 10–20mg weekly dosing, enabling precise reconstitution at higher concentrations or accommodating protocol flexibility without the overhead of managing multiple smaller vials simultaneously.

At 10mg weekly dosing, each 20mg vial provides two weeks of supply; at 15mg weekly, each vial covers approximately 10 days; at higher experimental doses, the 20mg vial delivers a meaningful single-vial supply buffer. The 5-pack consolidates five of these high-dose vials into a single order — eliminating frequent reordering and delivering cost savings over individual 20mg purchases.

Tirzepatide's dual GLP-1/GIP mechanism produces its metabolic and body composition effects through sustained, consistent dosing. The 5-pack's extended supply horizon ensures that researchers at any dose within the 10–20mg weekly range can maintain uninterrupted protocol continuity — the prerequisite for observing tirzepatide's cumulative effects on visceral fat, insulin sensitivity, and metabolic markers.`,
    benefits: [
      '5 high-dose 20mg vials — flexible supply for researchers at 10–20mg weekly dosing',
      'Greater per-vial compound volume vs. standard 15mg format for extended single-vial use',
      'Bundle pricing provides cost savings vs. five individual 20mg purchases',
      'Accommodates higher-dose research protocols above the standard 15mg ceiling',
      'Supports 2+ weeks of supply per vial at 10mg weekly dosing',
      'Single order eliminates reordering overhead across a sustained research block',
      'Compatible with bacteriostatic water for any working concentration',
      'Dual GLP-1/GIP receptor agonism for comprehensive metabolic research',
    ],
    protocol: 'For researchers operating at 10–20mg weekly dosing. Reconstitute with bacteriostatic water to desired working concentration (e.g., 2ml per vial for 10mg/ml). SubQ injection once weekly. Refrigerate reconstituted vials immediately; store sealed vials at room temperature or refrigerated. Use reconstituted vials within 28 days.',
    synergies: ['tirzepatide-60mg', 'bpc-157', 'bacteriostatic-water'],
  },

  {
    slug: 'tirzepatide-30mg',
    name: 'Tirzepatide 30mg',
    tagline: 'Bulk Format — Extended Protocol Supply',
    price: '$279.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'GLP-1', 'GIP', 'Bulk', 'Cost-Effective'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_30mg.webp',
    affiliateUrl: 'https://apollopeptidesciences.com/product/glp-2t-30mg/?rfsn=9016964.3f1b1e',
    shortDescription: 'Double the standard 15mg vial in a single container. The most practical bulk format for researchers at maintenance dosing who need supply continuity without repeat ordering.',
    fullDescription: `The 30mg tirzepatide vial delivers exactly double the compound volume of the standard 15mg vial in a single unit — designed for researchers who have established their maintenance dose and need extended supply without the friction of frequent reordering. At 10–15mg weekly maintenance dosing, a single 30mg vial provides approximately 2–3 weeks of uninterrupted research supply, making it the preferred format for sustained protocols.

Tirzepatide's dual GLP-1/GIP mechanism — responsible for the SURMOUNT-1 trial's landmark 22.5% body weight reduction — is at its most consistently expressed during long, uninterrupted maintenance-phase research. Protocol interruptions caused by vial shortages compromise both research continuity and the sustained hormonal signaling environment that produces tirzepatide's cumulative metabolic effects. The 30mg format directly addresses this operational risk.

The economics are compelling: the 30mg vial costs meaningfully less per milligram than two individual 15mg vials, and the reduction in reconstitution events cuts both handling time and the cumulative contamination risk that comes with managing multiple vials across a multi-week protocol. For researchers running tirzepatide as a primary fat loss compound — rather than a starter protocol — the 30mg vial is the natural operating format.

Paired with bacteriostatic water for reconstitution, the 30mg vial accommodates precise concentration targeting regardless of the researcher's specific maintenance dose within the 10–15mg weekly range. Whether the target is 10mg (yielding 3 weeks of supply) or 15mg (yielding 2 weeks), a single vial covers the full interval cleanly.`,
    benefits: [
      '2x the volume of the standard 15mg vial in a single unit',
      'Lower cost per milligram than two separate 15mg vials',
      'Provides 2–3 weeks of supply at 10–15mg weekly maintenance dosing',
      'Reduces reconstitution frequency and associated handling risk',
      'Eliminates mid-protocol supply gaps that compromise research continuity',
      'Ideal for researchers who have established tirzepatide tolerability and maintenance dose',
      'Fewer total vials to track, store, and manage across extended protocols',
      'Best value entry point for bulk tirzepatide research supply',
    ],
    protocol: 'For researchers at established maintenance dose of 10–15mg weekly. Reconstitute with 2–3ml bacteriostatic water for a working concentration of 10–15mg/ml. SubQ injection once weekly. Store reconstituted vial refrigerated; draw from the same vial across multiple weeks of dosing.',
    synergies: ['tirzepatide-60mg', 'bpc-157', 'bacteriostatic-water'],
  },

  {
    slug: 'tirzepatide-60mg',
    name: 'Tirzepatide 60mg',
    tagline: 'Maximum Bulk — Lowest Cost Per Mg',
    price: '$489.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'GLP-1', 'GIP', 'Bulk', 'Long-Term'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/12/tirzepatide_60mg-1.webp',
    affiliateUrl: 'https://apollopeptidesciences.com/product/glp-2-t-60mg/?rfsn=9016964.3f1b1e',
    shortDescription: 'The maximum bulk format — 4x the standard 15mg vial. Lowest cost per milligram available for tirzepatide, designed for serious long-term research programs at therapeutic maintenance doses.',
    fullDescription: `The 60mg tirzepatide vial is the apex of the Apollo tirzepatide lineup — four times the volume of the standard 15mg, and representing the single lowest cost-per-milligram available for this compound in any format. It exists for one purpose: to supply serious, committed long-term research programs with the volume needed to run weeks-long maintenance-phase protocols without operational interruption.

At 15mg weekly maintenance dosing — the maximum dose at which SURMOUNT-1 documented 22.5% average body weight reduction — a single 60mg vial provides four full weeks of research supply. At 10mg weekly, that extends to six weeks. For researchers treating tirzepatide as a sustained metabolic intervention rather than a short-cycle experiment, the 60mg vial eliminates the administrative overhead of multi-vial management entirely.

The financial calculus is straightforward. The 60mg vial's per-milligram cost is substantially lower than the 15mg, 30mg, or multiple-vial combinations that would be required to achieve the same total compound volume. Over the course of a six-month research program — a realistic minimum for observing tirzepatide's full body composition and metabolic effects — the cost differential between 60mg bulk purchasing and smaller vial formats is significant.

Reconstitution with bacteriostatic water at precise concentrations enables the 60mg vial to serve any maintenance dose within the 10–15mg weekly range with equal precision. Stored refrigerated and drawn from methodically, the vial maintains stability across the multi-week protocols it is designed to support. The 60mg tirzepatide vial is not for the curious beginner — it is the supply format of the serious long-term tirzepatide researcher.`,
    benefits: [
      'Lowest cost per milligram of any tirzepatide format in the Apollo catalog',
      '4x the volume of the standard 15mg vial in a single unit',
      'Provides 4 weeks at 15mg weekly or 6 weeks at 10mg weekly',
      'Eliminates multi-vial management complexity for long-term protocols',
      'Minimum reordering frequency — reduces protocol disruption risk',
      'Bacteriostatic water reconstitution maintains stability across multi-week use',
      'Designed for researchers at confirmed maintenance dose with established tolerance',
      'The most cost-efficient way to supply a serious long-term tirzepatide program',
    ],
    protocol: 'For experienced researchers at confirmed 10–15mg weekly maintenance dose. Reconstitute with 4–6ml bacteriostatic water for manageable working concentrations. SubQ injection once weekly. Refrigerate immediately after reconstitution; stable for 28+ days when stored correctly. Pair with fresh bacteriostatic water for each new vial.',
    synergies: ['tirzepatide-30mg', 'bpc-157', 'bacteriostatic-water'],
  },

  {
    slug: 'retatrutide',
    name: 'Retatrutide',
    tagline: 'Triple Agonist — Maximum Fat Loss',
    price: '$189.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'GLP-1', 'GIP', 'Glucagon', 'Triple Agonist'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/retatrutide_15mg.webp',
    affiliateUrl: AFF('glp-3r-15mg'),
    shortDescription: 'The most advanced weight loss peptide — triple GLP-1/GIP/Glucagon receptor agonist. Phase 2 trials show up to 24% body weight reduction. The strongest fat loss compound available.',
    fullDescription: `Retatrutide represents the frontier of metabolic peptide research — a triple GIP/GLP-1/Glucagon receptor agonist that surpasses both semaglutide and tirzepatide in documented fat loss efficacy. Where tirzepatide added GIP activation to GLP-1, retatrutide adds glucagon receptor agonism as a third mechanism, producing fat oxidation effects through three independent pathways simultaneously.

The glucagon receptor component is the key differentiator. Glucagon classically drives glycogenolysis and fat mobilization from the liver — the "fasting signal." By combining glucagon receptor activation with GLP-1's appetite suppression and GIP's insulin sensitization, retatrutide creates a metabolic state that simultaneously reduces caloric intake (GLP-1) and dramatically increases fat oxidation (glucagon) while maintaining metabolic homeostasis (GIP). The theoretical elegance is matched by the clinical results.

Phase 2 trial data published in the New England Journal of Medicine demonstrated a mean body weight reduction of 24.2% at 48 weeks with the 12mg dose — the highest fat loss efficacy ever documented for any compound in peer-reviewed clinical research. At the 8mg dose, average reduction was 22.8%. These outcomes represent approximately 2–5% greater absolute weight loss than tirzepatide at equivalent timeframes.

The compound also demonstrated significant reductions in liver fat (critical for metabolic health), improvements in cardiovascular risk markers, and reductions in waist circumference that exceed the scale weight reductions alone.`,
    benefits: [
      'Up to 24.2% body weight reduction in Phase 2 clinical trials — highest ever documented',
      'Triple receptor activation: GLP-1 (appetite) + GIP (insulin) + Glucagon (fat oxidation)',
      'Significantly reduces hepatic fat — addressing metabolic liver disease',
      'Superior visceral fat reduction vs. dual GLP-1/GIP compounds',
      'Improves cardiovascular risk markers across all measured parameters',
      'Maintains lean muscle mass during fat loss phase better than diet alone',
      'Weekly injection protocol — same convenience as semaglutide/tirzepatide',
      'Available in 10mg, 15mg, 30mg, and 60mg vials from Apollo',
    ],
    protocol: 'Dose escalation: 1mg weekly for 4 weeks, increasing gradually to target doses of 4–12mg weekly over 12–24 weeks. The extended escalation is essential with retatrutide due to its potency. Maintenance at 8–12mg weekly. SubQ injection once weekly.',
    synergies: ['bpc-157', 'cjc-1295-ipamorelin', 'nad-plus'],
  },

  {
    slug: 'retatrutide-10mg',
    name: 'Retatrutide 10mg',
    tagline: 'Entry Point for Triple Agonist Research',
    price: '$149.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'Triple Agonist', 'GLP-1', 'Glucagon', 'Entry Level'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/04/retatrutide_10mg-1.webp',
    affiliateUrl: 'https://apollopeptidesciences.com/product/glp-3r-10mg/?rfsn=9016964.3f1b1e',
    badge: 'Out of Stock',
    shortDescription: 'The lower-cost entry point for retatrutide research. Designed for the very gradual dose escalation that the most potent triple agonist demands — start slow, build carefully.',
    fullDescription: `Retatrutide is the most potent fat loss compound in research — and that potency demands respect. The 10mg vial exists for a specific and important purpose: to provide a lower-cost entry point that enables the gradual, careful dose escalation that every new retatrutide researcher requires before reaching therapeutic maintenance doses.

Unlike semaglutide, where researchers commonly reach 1mg weekly within the first 4 weeks, retatrutide's triple receptor activation — engaging GLP-1, GIP, and glucagon simultaneously — requires an extended, conservative escalation protocol. The starting dose of 1mg weekly may seem trivial, but the compound's glucagon agonism creates GI sensitivity profiles distinct from pure GLP-1 or dual GLP-1/GIP compounds. Rushing escalation produces avoidable side effects; patience during the escalation phase determines long-term protocol success.

The 10mg vial accommodates the full initial escalation phase: at 1mg weekly escalating to 2–4mg weekly over the first 8–12 weeks, a 10mg vial covers the critical adaptation window at a price point appropriate for exploratory research. Researchers learn how their physiology responds to retatrutide's unique triple-mechanism action before committing to the higher-volume 15mg, 30mg, or 60mg formats for maintenance-phase work.

For researchers transitioning from semaglutide or tirzepatide who want to explore the compound that produced the highest fat loss outcomes in clinical history without a large upfront investment, the 10mg vial is the rational starting point. The Phase 2 NEJM data showing 24.2% body weight reduction at 12mg weekly remains the most compelling finding in obesity pharmacology — and the 10mg vial is the entry ticket for that research journey.`,
    benefits: [
      'Lower-cost entry format for first-time retatrutide researchers',
      'Covers the full initial escalation phase at 1–4mg weekly dosing',
      'Appropriate supply volume for the 8–12 week GI adaptation window',
      'Reduces financial commitment during the exploratory phase of triple agonist research',
      'Ideal for researchers transitioning from semaglutide or tirzepatide protocols',
      'Allows careful assessment of glucagon agonist sensitivity before scaling dose',
      'Aligns with clinical escalation protocols from the Phase 2 NEJM study',
      'The starting point for accessing the highest documented fat loss efficacy in research',
    ],
    protocol: 'Escalation entry: 1mg weekly for 4 weeks, then 2mg for 4 weeks, then 4mg for 4 weeks. The 10mg vial covers approximately 8–10 weeks of gradual escalation. SubQ injection once weekly. Monitor GI response carefully at each dose step. Transition to 15mg or 30mg vials for continuation toward maintenance dosing at 8–12mg weekly.',
    synergies: ['retatrutide', 'bpc-157', 'bacteriostatic-water'],
  },

  {
    slug: 'retatrutide-30mg',
    name: 'Retatrutide 30mg',
    tagline: 'Intermediate Bulk — Therapeutic Maintenance Supply',
    price: '$349.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'Triple Agonist', 'GLP-1', 'Glucagon', 'Bulk'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/12/retatrutide_30mg.webp',
    affiliateUrl: 'https://apollopeptidesciences.com/product/glp-3-r-30mg/?rfsn=9016964.3f1b1e',
    shortDescription: 'Double the standard 15mg vial. Purpose-built for researchers who have completed escalation and are operating at the 8–12mg weekly maintenance range where retatrutide\'s peak efficacy is expressed.',
    fullDescription: `The 30mg retatrutide vial is the operational format for researchers who have completed the escalation phase and arrived at therapeutic maintenance dosing. At 8–12mg weekly — the range where Phase 2 clinical data documented 22.8–24.2% body weight reduction — a single 30mg vial provides approximately 2.5–4 weeks of uninterrupted supply. It represents the natural volume step up from the 15mg starter format, and the intermediate bulk tier before the full-scale 60mg.

Retatrutide's triple receptor mechanism — GLP-1, GIP, and glucagon agonism simultaneously — produces its most impressive metabolic effects during sustained, uninterrupted maintenance-phase research. The compound's cumulative effects on hepatic fat, visceral adiposity, and cardiovascular risk markers are time-dependent; protocol interruptions during the maintenance phase undermine the sustained hormonal signaling environment that drives these outcomes. The 30mg vial's extended supply buffer directly reduces this risk.

At 2x the volume of the standard 15mg vial and available at a lower cost per milligram than two separate 15mg purchases, the 30mg format offers genuine economic and operational advantages for researchers who have confirmed their maintenance dose and tolerability. The 30mg is the efficient choice: enough volume for meaningful research continuity, at a cost level appropriate for the intermediate researcher who has validated the protocol and is now optimizing for sustained results.

The glucagon component of retatrutide's mechanism creates an ongoing fat oxidation drive between weekly doses that neither semaglutide nor tirzepatide produces — but only when dosing continuity is maintained. The 30mg vial supports the protocol consistency that allows this third-receptor mechanism to fully express itself over time.`,
    benefits: [
      '2x the volume of the standard 15mg retatrutide vial',
      'Provides 2.5–4 weeks of supply at 8–12mg weekly maintenance dosing',
      'Lower cost per milligram than two individual 15mg vials',
      'Supports the sustained dosing continuity required for glucagon-mediated fat oxidation',
      'Ideal for researchers who have confirmed tolerability and maintenance dose',
      'Reduces reconstitution frequency and protocol management burden',
      'Intermediate bulk format between 15mg and 60mg for flexible commitment scaling',
      'Aligns with the 8–12mg weekly range from Phase 2 NEJM efficacy data',
    ],
    protocol: 'For researchers at established maintenance dose of 8–12mg weekly. Reconstitute with 2–3ml bacteriostatic water. SubQ injection once weekly at consistent intervals. Refrigerate immediately after reconstitution. Do not freeze. The 30mg vial supports 2–4 consecutive weekly injections from a single reconstituted source.',
    synergies: ['retatrutide-60mg', 'bpc-157', 'bacteriostatic-water'],
  },

  {
    slug: 'retatrutide-60mg',
    name: 'Retatrutide 60mg',
    tagline: 'Maximum Bulk — The Most Advanced Compound at Scale',
    price: '$589.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'Triple Agonist', 'GLP-1', 'Glucagon', 'Long-Term'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/12/retatrutide_60mg.webp',
    affiliateUrl: 'https://apollopeptidesciences.com/product/glp-3-r-60mg/?rfsn=9016964.3f1b1e',
    shortDescription: 'The maximum bulk format for retatrutide — lowest cost per milligram available, designed for serious long-term research at the frontier of fat loss pharmacology.',
    fullDescription: `Retatrutide 60mg is the pinnacle of the Apollo weight management lineup — the maximum bulk format for the most pharmacologically advanced fat loss compound in research, carrying the lowest cost per milligram across all retatrutide vial sizes. It is the supply format for researchers who have moved beyond exploration and are executing sustained, long-term protocols with the compound that produced the highest documented fat loss outcomes in peer-reviewed clinical history.

At 8–12mg weekly maintenance dosing, a single 60mg vial provides five to seven and a half weeks of uninterrupted research supply — a meaningful protocol block that enables proper assessment of retatrutide's cumulative effects on body composition, hepatic fat, visceral adiposity, and metabolic markers. The Phase 2 NEJM data documenting 24.2% average body weight reduction was generated over 48 weeks of sustained dosing; protocols of that ambition demand bulk supply logistics.

Retatrutide's glucagon receptor component is what separates it categorically from semaglutide and tirzepatide. Glucagon receptor agonism creates active, continuous fat oxidation pressure between weekly doses — the liver is signaled to mobilize stored fat even in the absence of the caloric deficit that GLP-1 compounds depend on to work. Over weeks and months, this third mechanism produces visceral fat and hepatic fat reductions that exceed what appetite suppression alone can achieve. The 60mg vial exists to supply the duration required for this mechanism to fully express itself.

For the serious long-term retatrutide researcher, the per-milligram cost at the 60mg tier versus repeated purchases of smaller vials is the strongest financial argument in the catalog. The compound itself represents the frontier of fat loss pharmacology; the 60mg vial ensures you can pursue that frontier without operational constraints.`,
    benefits: [
      'Lowest cost per milligram of any retatrutide format in the Apollo catalog',
      'Provides 5–7.5 weeks of supply at 8–12mg weekly maintenance dosing',
      'Supports the extended protocol duration required for full glucagon-mediated effects',
      'Eliminates supply gaps that interrupt retatrutide\'s cumulative metabolic impact',
      'The scale-appropriate format for protocols modeled on 48-week Phase 2 research design',
      'Minimum reordering burden for researchers committed to long-term protocols',
      'Best economics for multi-month retatrutide research programs',
      'The most advanced compound in research, at the most efficient supply scale',
    ],
    protocol: 'Exclusively for experienced researchers at confirmed 8–12mg weekly maintenance dose. Reconstitute with 4–6ml bacteriostatic water for precise working concentrations. SubQ injection once weekly. Store reconstituted vial refrigerated; draw from the single vial across consecutive weeks. Maintain strict cold chain — do not allow the reconstituted vial to reach room temperature between uses.',
    synergies: ['retatrutide-30mg', 'bpc-157', 'bacteriostatic-water'],
  },

  {
    slug: 'cagrilintide-semaglutide',
    name: 'Cagrilintide + Semaglutide',
    tagline: 'Dual-Mechanism Satiety Stack',
    price: '$109.99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Fat Loss', 'GLP-1', 'Amylin', 'Appetite', 'Satiety'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/cagri_sema_5_5mg-1.webp',
    affiliateUrl: AFF('glp-1cglp-1s-5mg'),
    shortDescription: 'Cagrilintide (long-acting amylin analogue) + Semaglutide (GLP-1 agonist) — two complementary satiety pathways combined for additive fat loss beyond either compound alone.',
    fullDescription: `The Cagrilintide + Semaglutide combination — the basis for the pharmaceutical compound CagriSema currently in Phase 3 trials — represents a sophisticated dual-pathway approach to appetite and weight regulation. While semaglutide operates through the GLP-1 receptor system, cagrilintide acts through an entirely separate mechanism: the amylin receptor pathway.

Cagrilintide is a long-acting analogue of amylin — a hormone co-secreted with insulin from pancreatic beta cells that signals satiety through the hindbrain. Amylin complements GLP-1's hypothalamic satiety signals with brainstem-level fullness signaling — creating satiety through two anatomically and mechanistically distinct pathways simultaneously. The combination is not merely additive: early clinical data from the CagriSema program suggests the two compounds produce synergistic satiety effects that exceed what either compound achieves alone.

The SCALE program demonstrated that CagriSema (2.4mg semaglutide + 2.4mg cagrilintide weekly) achieved up to 15.6% weight loss in 32 weeks — with ongoing Phase 3 trials suggesting outcomes potentially approaching tirzepatide. The dual-mechanism approach also appears to be particularly effective for individuals who have experienced plateau effects with semaglutide alone.

Apollo supplies this as a 5mg/5mg blended vial, providing both compounds in a single convenient formulation.`,
    benefits: [
      'Dual satiety pathway activation: GLP-1 receptor + amylin receptor simultaneously',
      'Synergistic appetite suppression beyond semaglutide monotherapy',
      'Additive fat loss vs. either compound used alone',
      'Pre-blended 5mg/5mg vial — single injection covers both compounds',
      'Particularly effective for individuals who have plateaued on semaglutide',
      'Slows gastric emptying via both amylin and GLP-1 mechanisms',
      'Based on the CagriSema pharmaceutical program — Phase 3 clinical data pending',
      'Weekly dosing protocol maintains semaglutide\'s convenient administration schedule',
    ],
    protocol: 'Dose escalation: 0.25mg each component weekly for 4 weeks, escalating gradually. Target maintenance dose 1–2.4mg of each component weekly. SubQ injection once weekly. The slower escalation vs. semaglutide alone helps minimize GI side effects from dual receptor activation.',
    synergies: ['semaglutide', 'tirzepatide', 'cjc-1295-ipamorelin'],
  },

  // ── ANTI-AGING ──────────────────────────────────────────────────────────────

  {
    slug: 'epithalon',
    name: 'Epithalon',
    tagline: 'The Telomere Lengthening Protocol',
    price: '$139.99',
    category: 'Anti-Aging',
    tags: ['Anti-Aging', 'Longevity', 'Telomeres', 'Sleep', 'Cellular Health'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/epithalon_50mg.webp',
    affiliateUrl: AFF('epithalon-50mg'),
    badge: 'Longevity Essential',
    featured: true,
    shortDescription: 'Activates telomerase to rebuild telomere caps — the only known compound to achieve measurable telomere lengthening. Profound sleep improvement and biological age reversal.',
    fullDescription: `Epithalon — L-Alanyl-L-glutamyl-L-aspartyl-glycine — is a synthetic tetrapeptide derived from the pineal gland hormone Epithalamin. It holds a unique position in peptide research as the only compound with published human data demonstrating measurable telomere lengthening — the lengthening of the chromosomal caps whose progressive shortening is one of the primary molecular mechanisms of cellular aging.

Telomeres are the protective end-caps on chromosomes that shorten with each cell division. When they become critically short, cells enter senescence or apoptosis — unable to divide and maintain tissue function. Telomere length is one of the most reliable biological markers of cellular age, and telomere shortening is causally linked to cancer risk, cardiovascular disease, and immune dysfunction. Epithalon activates telomerase — the enzyme that rebuilds telomere caps — creating the conditions for cellular renewal rather than degeneration.

Beyond telomere biology, Epithalon demonstrates remarkable breadth of anti-aging effects: it normalizes melatonin production (which declines with age, explaining the sleep architecture improvements users consistently report), exhibits antioxidant activity, modulates immune function, and has demonstrated oncostatic (cancer-limiting) properties in animal models.

Human data from Russian longevity researcher Vladimir Khavinson's 12-year study showed reduced cancer incidence and all-cause mortality in elderly subjects receiving periodic Epithalon treatment — the most significant human longevity data published for any peptide compound. Apollo's 50mg vial provides substantial research quantities at accessible cost.`,
    benefits: [
      'Only known compound with human data demonstrating measurable telomere lengthening',
      'Activates telomerase — the enzyme responsible for rebuilding chromosomal end-caps',
      'Normalizes age-related melatonin decline for dramatically improved sleep quality',
      'Antioxidant activity protects against oxidative damage at the cellular level',
      'Modulates immune function — may reduce age-related immune dysregulation',
      'Demonstrated oncostatic properties in multiple animal model studies',
      'Associated with reduced all-cause mortality in 12-year human follow-up research',
      'Available in 50mg vials — exceptional value for extended research protocols',
    ],
    protocol: 'Standard research protocol: 5–10mg per day for 10–20 consecutive days, 1–2× per year. Some researchers use 100mcg/kg body weight per day. SubQ injection. The annual or bi-annual cycle protocol is aligned with the original Khavinson research showing long-term benefits from periodic treatment.',
    synergies: ['ghk-cu', 'nad-plus', 'cjc-1295-ipamorelin'],
  },

  {
    slug: 'nad-plus',
    name: 'NAD+',
    tagline: 'Cellular Energy & Longevity Coenzyme',
    price: '$69.99',
    category: 'Anti-Aging',
    tags: ['Anti-Aging', 'Energy', 'Longevity', 'DNA Repair', 'Mitochondrial', 'Cognitive'],
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/nad_500mg.webp',
    affiliateUrl: AFF('nad'),
    shortDescription: 'Nicotinamide adenine dinucleotide — the master coenzyme driving cellular energy production, DNA repair, and sirtuin activation. Critical for metabolic health and biological age reversal.',
    fullDescription: `NAD+ (Nicotinamide Adenine Dinucleotide) is not a peptide in the classical sense but the master coenzyme present in every cell in the body, serving as the essential cofactor for hundreds of metabolic reactions and representing one of the most extensively researched longevity interventions in modern biology.

NAD+ operates at the core of cellular energy metabolism — it is the electron carrier that drives the mitochondrial electron transport chain, converting nutrients into ATP (cellular fuel). As NAD+ levels decline with age (by 50% or more between youth and middle age in many tissues), cellular energy production becomes progressively impaired — contributing to fatigue, cognitive decline, metabolic dysfunction, and the hallmarks of biological aging.

Beyond energy metabolism, NAD+ serves as the substrate for sirtuins (SIRT1–7) — the "longevity proteins" that regulate gene expression in response to cellular stress, control DNA repair, modulate inflammation, and mediate many of the life-extending benefits associated with caloric restriction and exercise. NAD+ is also consumed by PARP enzymes during DNA damage repair — creating a competitive demand on NAD+ availability during cellular stress.

Direct NAD+ supplementation bypasses the metabolic steps required to convert oral NMN or NR into NAD+, delivering the coenzyme directly for research applications. Apollo's 500mg vial represents exceptional value for NAD+ research protocols.`,
    benefits: [
      'Restores declining NAD+ levels — drops 50%+ between youth and middle age',
      'Activates sirtuin longevity proteins (SIRT1–7) for comprehensive anti-aging effects',
      'Enhances mitochondrial efficiency and cellular energy production',
      'Supports DNA damage repair via PARP enzyme activity',
      'Improves cognitive function and mental clarity via brain energy metabolism',
      'Modulates inflammation through sirtuin-regulated gene expression',
      'Synergizes with exercise — exercise increases NAD+ demand and utilization',
      'Direct NAD+ bypasses metabolic conversion steps required with oral precursors',
    ],
    protocol: 'IV or SubQ injection: 250–500mg per session, 2–5× per week for initial loading, then 1–2× per week for maintenance. IV administration provides the most rapid increase in circulating NAD+. SubQ is more practical for ongoing research protocols. Flush sensation with IV administration is normal and transient.',
    synergies: ['epithalon', 'cjc-1295-ipamorelin', 'bpc-157'],
  },
]

export const categories = [
  { name: 'Recovery & Healing',   icon: '🔬' },
  { name: 'Looks Maxing',         icon: '✨' },
  { name: 'Body Composition',     icon: '💪' },
  { name: 'Weight Management',    icon: '⚡' },
  { name: 'Anti-Aging',           icon: '🧬' },
]

export function getProduct(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

// alias used by product detail pages
export const getProductBySlug = getProduct

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}
