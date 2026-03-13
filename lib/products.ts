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
    synergies: ['TB-500', 'GHK-Cu', 'CJC-1295 / Ipamorelin'],
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
    synergies: ['BPC-157', 'CJC-1295 / Ipamorelin', 'IGF-1 LR3'],
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
    synergies: ['SNAP-8', 'BPC-157', 'Epithalon'],
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
    synergies: ['GHK-Cu', 'Epithalon', 'BPC-157'],
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
    synergies: ['IGF-1 LR3', 'BPC-157', 'Epithalon'],
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
    synergies: ['CJC-1295 / Ipamorelin', 'BPC-157', 'TB-500'],
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

Apollo Peptide Sciences offers semaglutide in 5mg, 10mg, and 15mg formats. The 5mg vial is the standard entry point for research protocols; the 10mg and 15mg vials offer better value for longer-term research.`,
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
    synergies: ['Cagrilintide + Semaglutide', 'BPC-157', 'CJC-1295 / Ipamorelin'],
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
    synergies: ['BPC-157', 'CJC-1295 / Ipamorelin', 'NAD+'],
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
      'Available in 10mg, 15mg, and 30mg vials from Apollo',
    ],
    protocol: 'Dose escalation: 1mg weekly for 4 weeks, increasing gradually to target doses of 4–12mg weekly over 12–24 weeks. The extended escalation is essential with retatrutide due to its potency. Maintenance at 8–12mg weekly. SubQ injection once weekly.',
    synergies: ['BPC-157', 'CJC-1295 / Ipamorelin', 'NAD+'],
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
    synergies: ['BPC-157', 'Tirzepatide', 'CJC-1295 / Ipamorelin'],
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
    synergies: ['GHK-Cu', 'NAD+', 'CJC-1295 / Ipamorelin'],
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
    synergies: ['Epithalon', 'CJC-1295 / Ipamorelin', 'BPC-157'],
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
