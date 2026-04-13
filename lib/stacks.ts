export interface StackCompound {
  slug: string
  role: string
  timing: string
  why: string
}

export interface StackWeek {
  range: string
  title: string
  what: string
}

export interface Stack {
  id: string
  name: string
  tagline: string
  shortDesc: string
  badge: string
  accent: string
  compounds: StackCompound[]
  outcomes: string[]
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  goal: string
  fullDescription: string
  synergy: string
  whoIsItFor: string
  timeline: StackWeek[]
  keyBenefits: string[]
  cycleProtocol: string
  faqs: { q: string; a: string }[]
}

export function getStackById(id: string): Stack | undefined {
  return stacks.find(s => s.id === id)
}

export const stacks: Stack[] = [
  {
    id: 'looks-max',
    name: 'The Looks Max Stack',
    tagline: 'Comprehensive skin, collagen & cellular optimization',
    shortDesc: 'Addresses the biological pillars of physical appearance: skin collagen architecture, anti-wrinkle neuromuscular signaling, tissue repair, and cellular longevity.',
    badge: 'Most Popular',
    accent: '#d4a043',
    difficulty: 'Intermediate',
    goal: 'Full looks maximization',
    duration: '12 weeks',
    outcomes: ['Increased skin density & collagen', 'Reduced expression lines', 'Accelerated tissue recovery', 'Cellular anti-aging', 'Improved skin luminosity'],
    compounds: [
      {
        slug: 'ghk-cu-50mg',
        role: 'Skin & Collagen Foundation',
        timing: '1–2mg SubQ, 3–5× weekly',
        why: 'GHK-Cu is the structural architect of the stack. It operates directly on dermal fibroblasts — the cells responsible for collagen and elastin synthesis — activating over 4,000 skin-related genes and producing up to a 121% increase in skin density. This is the compound that changes the underlying architecture of your skin rather than just its surface appearance. No other peptide comes close to GHK-Cu\'s breadth of skin optimization data.',
      },
      {
        slug: 'snap-8-10mg',
        role: 'Anti-Wrinkle Neuromuscular Inhibitor',
        timing: 'Applied topically twice daily to target areas',
        why: 'SNAP-8 complements GHK-Cu by targeting the second major category of wrinkle formation: dynamic expression lines. While GHK-Cu rebuilds the dermal collagen structure, SNAP-8 blocks the neuromuscular mechanism that etches expression lines into the skin — reducing wrinkle depth by up to 63%. Together, the two compounds address both structural collagen decline and neuromuscular expression damage simultaneously.',
      },
      {
        slug: 'bpc-157-10mg',
        role: 'Cellular Repair & Anti-Inflammatory Foundation',
        timing: '200–300mcg SubQ, daily',
        why: 'BPC-157 is the foundation layer that makes everything else work better. It reduces systemic inflammation — creating the optimal cellular environment in which GHK-Cu stimulates collagen and SNAP-8 softens expression lines. BPC-157 also directly supports skin healing, wound repair, and connective tissue integrity, while optimizing gut function for better absorption of all compounds.',
      },
      {
        slug: 'epitalon-50mg',
        role: 'Telomere & Cellular Longevity Layer',
        timing: '5–10mg SubQ, daily × 10–20 days (cycle within cycle)',
        why: 'Epithalon addresses the cellular aging dimension — telomere shortening — that underlies the progressive decline in skin quality, regenerative capacity, and hormonal output that drives visible aging. By activating telomerase and restoring melatonin-driven sleep architecture, Epithalon amplifies the cellular renewal environment that GHK-Cu and BPC-157 create at the tissue level. The combination produces both structural and biological age improvements simultaneously.',
      },
    ],
    fullDescription: `The Looks Max Stack is the most comprehensive peptide protocol for physical appearance optimization. It was designed around a fundamental insight: physical attractiveness is not a single variable but a composite of distinct biological pillars — skin collagen architecture, neuromuscular expression line formation, tissue repair capacity, and cellular aging at the chromosomal level. Optimizing one without the others produces suboptimal results. This stack addresses all four simultaneously.

Skin quality is the most immediately visible component of physical appearance, and it declines measurably from the mid-20s as collagen and elastin production slow. GHK-Cu reverses this trajectory at the gene expression level — activating over 4,000 genes associated with skin repair, collagen synthesis, and cellular renewal. The result is skin that is structurally denser, more elastic, and more luminous than it would be at the same chronological age without intervention.

Expression lines represent the second major aesthetic concern for most individuals. SNAP-8's neuromuscular mechanism is fundamentally different from GHK-Cu's structural approach — it reduces the repetitive muscle contraction intensity that engrave permanent lines into the skin over years. The result is a natural softening of crow's feet, forehead lines, and glabellar creases without the frozen appearance of neurotoxin overuse.

BPC-157 operates as the infrastructure layer: its systemic anti-inflammatory and healing effects create the biological environment where GHK-Cu's fibroblast activation and SNAP-8's neuromuscular inhibition work most effectively. It also directly accelerates skin wound healing, scar remodeling, and gut health optimization — improving absorption of all compounds in the stack.

Epithalon provides the longevity dimension that surface-level skin compounds cannot address: it activates telomerase to rebuild the chromosomal telomere caps whose progressive shortening drives the biological aging that underpins every visible aging marker. The annual Epithalon cycle within the larger protocol is the compound that works at the deepest biological level — cellular DNA.`,
    synergy: `The synergy in this stack operates across multiple levels. GHK-Cu drives collagen synthesis from the outside in — directly stimulating the fibroblasts that produce structural skin proteins. BPC-157 optimizes the cellular environment by reducing inflammation that would otherwise blunt GHK-Cu's receptor signaling. SNAP-8 operates through an entirely orthogonal mechanism (neuromuscular, not structural), meaning it adds wrinkle reduction without competing with or displacing GHK-Cu's collagen benefits. Epithalon's telomerase activation creates the chromosomal environment for long-term cellular renewal — amplifying the collagen stimulation initiated by GHK-Cu by ensuring the skin cells doing the work are themselves biologically younger. The result is a layered, non-redundant protocol where each compound addresses a dimension the others cannot.`,
    whoIsItFor: `Designed for anyone who wants measurable, comprehensive physical appearance optimization beyond what training and nutrition can produce. Particularly effective for those in their late 20s and beyond who are beginning to notice skin quality changes — reduced elasticity, fine lines, loss of luminosity. Also highly relevant for anyone focused on looks maxing as a primary goal, or those who want to maintain their physical peak for as long as possible. Works for men and women equally with appropriate dose adjustments.`,
    timeline: [
      { range: 'Weeks 1–2', title: 'Foundation Activation', what: 'BPC-157 begins reducing inflammation and optimizing the healing environment. Epithalon cycle initiated — melatonin normalization begins improving sleep quality within the first week. GHK-Cu and SNAP-8 application begins.' },
      { range: 'Weeks 3–6', title: 'Early Structural Changes', what: 'GHK-Cu collagen remodeling becomes measurable — improved skin hydration, elasticity, and the beginning of increased skin density. SNAP-8 effects on expression line softening become noticeable with consistent twice-daily application. Epithalon cycle typically completes within this phase.' },
      { range: 'Weeks 7–10', title: 'Visible Transformation', what: 'Collagen density improvements from GHK-Cu are clearly visible — improved skin texture, reduced fine lines, and the characteristic luminous quality that structural collagen density produces. Expression line reduction from SNAP-8 is significant. Overall skin appearance is measurably younger and healthier.' },
      { range: 'Weeks 11–12', title: 'Full Protocol Compounding', what: 'All compounds have reached full expression. Skin quality represents the outcome of 12 weeks of active collagen stimulation, neuromuscular wrinkle inhibition, and anti-inflammatory optimization. Results from this phase typically persist for months after the cycle concludes.' },
    ],
    keyBenefits: [
      'GHK-Cu produces up to 121% increase in skin density with consistent use',
      'SNAP-8 reduces expression line depth by up to 63%',
      'BPC-157 creates the optimal inflammatory environment for all skin compounds',
      'Epithalon telomerase activation works at the cellular aging level',
      'All four compounds operate through distinct, non-competing mechanisms',
      'Improved sleep quality from Epithalon amplifies cellular repair overnight',
      'Dual collagen + neuromuscular wrinkle approach addresses both wrinkle types',
      'Results compound progressively over the full 12-week protocol',
    ],
    cycleProtocol: '12 weeks total. GHK-Cu and BPC-157: 8 weeks on, 4 weeks off within the cycle. SNAP-8: continuous daily topical use. Epithalon: 10–20 day intensive cycle within the first 4 weeks, then optionally repeated once more mid-cycle. Most run 2 full cycles per year.',
    faqs: [
      { q: 'Can I run this stack without the injections?', a: 'Yes, partially. SNAP-8 is effective topically. GHK-Cu also has topical research applications. BPC-157 and Epithalon require subcutaneous injection for full bioavailability. If you\'re injection-averse, starting with SNAP-8 and topical GHK-Cu provides meaningful benefits before progressing to injectable protocols.' },
      { q: 'How quickly does GHK-Cu show results?', a: 'Measurable hydration and elasticity improvements typically appear within 4–6 weeks. Structural collagen density increases take the full 8–12 weeks to become clearly visible. The characteristic luminous skin quality is usually noticeable around weeks 6–8.' },
      { q: 'When should I run the Epithalon cycle?', a: 'Start the Epithalon 10–20 day cycle during weeks 1–3 of the broader stack. This creates the cellular anti-aging environment early in the protocol. A second Epithalon cycle in the middle of the 12-week stack is optional but recommended for maximum effect.' },
      { q: 'Can women run all the compounds in this stack?', a: 'Yes — GHK-Cu, SNAP-8, BPC-157, and Epithalon are all appropriate for women at standard dosing. There are no hormonal compounds in this stack. GHK-Cu and SNAP-8 are particularly popular among female researchers due to their skin-specific mechanisms.' },
    ],
  },

  {
    id: 'body-comp',
    name: 'The Body Sculptor',
    tagline: 'GH optimization + direct anabolism for elite body composition',
    shortDesc: 'Dual growth hormone axis stimulation combined with direct IGF-1 delivery — the most comprehensive natural body composition transformation protocol.',
    badge: 'Advanced',
    accent: '#6090ff',
    difficulty: 'Advanced',
    goal: 'Maximum lean muscle + fat loss',
    duration: '12 weeks',
    outcomes: ['Significant lean muscle gains', 'Reduced body fat', 'Sharper muscle definition', 'Enhanced recovery capacity', 'Dramatically improved sleep quality'],
    compounds: [
      {
        slug: 'ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg',
        role: 'GH Axis Foundation — Dual Receptor Stimulation',
        timing: '100mcg each component, 2–3× daily (from blended vial)',
        why: 'The CJC-1295/Ipamorelin blend is the cornerstone of this stack — simultaneously activating the GHRH receptor (CJC-1295) and the ghrelin receptor (Ipamorelin) to produce GH pulses greater than either compound alone. Ipamorelin\'s selectivity is critical: zero cortisol, prolactin, or ACTH elevation means the full anabolic and lipolytic benefit of GH optimization is captured without hormonal interference. The pre-blended 5mg/5mg vial eliminates the complexity of managing two separate compounds.',
      },
      {
        slug: 'igf-1-lr3-1mg',
        role: 'Direct Anabolic Signal — Muscle Cell Level',
        timing: '20–50mcg SubQ or IM, post-workout',
        why: 'IGF-1 LR3 is the downstream executor of GH\'s anabolic effects — the compound that directly tells muscle cells to grow at the cellular level. Where CJC-1295/Ipamorelin drives GH production (and therefore endogenous IGF-1 throughout the day), direct IGF-1 LR3 delivers a concentrated anabolic signal post-workout when muscle cells are maximally receptive. This produces muscle hyperplasia — actual new fiber formation — that GH peptides alone cannot achieve. It\'s the advanced compound that separates this stack from a standard GH protocol.',
      },
      {
        slug: 'bpc-157-10mg',
        role: 'Recovery Infrastructure',
        timing: '200–300mcg SubQ, daily',
        why: 'The higher training intensity enabled by GH optimization creates proportionally higher structural stress. BPC-157 addresses this by accelerating the repair of micro-tears, reducing tendon and ligament inflammation, and optimizing gut integrity for maximum nutrient absorption. It is the compound that makes the training intensity and frequency required for elite body composition transformation sustainable over a 12-week cycle — and the one that protects the connective tissue under heavy loads that serious training demands.',
      },
    ],
    fullDescription: `The Body Sculptor is the definitive peptide protocol for those committed to elite physique development. It is built around the GH/IGF-1 axis — the most important hormonal system for simultaneous lean mass accumulation and fat reduction — and designed to maximize this axis.

The stack operates through two complementary mechanisms working simultaneously. The first is GH axis maximization: the CJC-1295/Ipamorelin blend creates the most potent GH elevation achievable through peptide protocols by stimulating two independent receptor pathways simultaneously. This elevated GH environment drives fat mobilization, preserves and builds lean muscle, improves sleep quality (in which GH is predominantly secreted), and enhances the recovery capacity that makes consistent high-intensity training sustainable.

The second mechanism is direct cellular anabolism through IGF-1 LR3. While GH optimization drives endogenous IGF-1 production throughout the day, direct IGF-1 LR3 post-workout delivers a concentrated, extended-duration IGF-1 signal directly to muscle cells — triggering the PI3K/Akt/mTOR cascade that drives both hypertrophy and hyperplasia. This is the compound that creates the muscle density and fullness defining elite physique development at the structural cellular level.

BPC-157 provides the infrastructure layer that makes everything sustainable — reducing training-related inflammation, protecting connective tissue, and ensuring the recovery capacity to maintain the training intensity that body composition transformation demands.

The combined effect over 12 weeks is a body composition transformation qualitatively different from what training and nutrition alone produce: leaner, harder, with measurably better recovery, and with the structural integrity to sustain the training frequency the results require.`,
    synergy: `The synergy architecture is precise and layered. CJC-1295/Ipamorelin provides both the GHRH and GHRP stimulation — producing GH pulses that drive endogenous IGF-1 production and fat mobilization throughout the day and during sleep. Post-workout IGF-1 LR3 then augments this with a direct, concentrated anabolic signal to the muscles that just trained, capitalizing on the post-exercise window when muscle cells are maximally insulin-sensitive and IGF-1-receptor upregulated. BPC-157 simultaneously clears the inflammatory environment that would otherwise blunt IGF-1 receptor signaling and prevents the connective tissue breakdown that limits training volume. The three compounds occupy non-overlapping mechanisms — each contributing a distinct signal the others cannot duplicate.`,
    whoIsItFor: `Designed for intermediate to advanced physique athletes who have a solid training foundation and want to accelerate past what training and nutrition can achieve alone. Ideal for those in body recomposition phases — simultaneously building lean mass and losing fat. Not recommended as a first peptide protocol — run CJC-1295/Ipamorelin alone for one cycle first to establish baseline GH response before adding IGF-1 LR3.`,
    timeline: [
      { range: 'Weeks 1–2', title: 'Foundation Activation', what: 'GH optimization via CJC-1295/Ipamorelin begins. Sleep quality improves within the first week — deeper, more restorative sleep within days. Appetite may increase as GH levels rise. Body weight may remain similar while composition begins shifting.' },
      { range: 'Weeks 3–6', title: 'Visible Body Composition Shift', what: 'Body fat reduction becomes clearly visible — particularly the characteristic "drying out" effect of GH optimization. Muscle fullness and training pumps improve noticeably. Add IGF-1 LR3 post-workout beginning week 3–4. Recovery between sessions is markedly faster.' },
      { range: 'Weeks 7–10', title: 'Peak Transformation Phase', what: 'Compound effects of all three protocols reach maximum expression. Muscle definition is significantly improved. Recovery capacity allows for training volume and frequency that would be unsustainable without peptide support. The recomposition effect — building muscle while losing fat — is clearly measurable.' },
      { range: 'Weeks 11–12', title: 'Consolidation & Results', what: 'IGF-1 LR3 cycle concludes (maximum 6 consecutive weeks). Maintain CJC-1295/Ipamorelin and BPC-157 through week 12. Final body composition represents the full transformation potential — lean mass and definition changes are significant and lasting.' },
    ],
    keyBenefits: [
      'Dual GHRH + GHRP stimulation produces maximum achievable GH elevation',
      'IGF-1 LR3 creates new muscle fibers through hyperplasia — beyond what GH alone achieves',
      'True simultaneous lean mass gain and fat loss — recomposition effect',
      'Dramatically improved sleep quality — the hormonal environment compounds overnight',
      'BPC-157 enables the training intensity and consistency transformation requires',
      'Progressive body composition changes compound over the full 12 weeks',
      'Pre-blended CJC/Ipa vial eliminates complexity of two-compound management',
      'Creates a lasting metabolic environment that favors lean tissue over fat storage',
    ],
    cycleProtocol: '12 weeks total. IGF-1 LR3: maximum 6 consecutive weeks — start at week 3, conclude by week 8 or 9, then reassess. CJC-1295/Ipamorelin and BPC-157: full 12 weeks. After the cycle: 4–6 weeks off GH peptides before repeating. Most run 1–2 full Body Sculptor cycles per year.',
    faqs: [
      { q: 'How much lean mass can I expect to gain?', a: 'Results vary with training quality, nutrition, and individual response. Users consistently report 5–10+ lbs of lean mass over 12 weeks, with simultaneous fat loss. The recomposition effect — gaining muscle while losing fat — is the defining outcome of this protocol.' },
      { q: 'Is IGF-1 LR3 safe?', a: 'IGF-1 LR3 is safe within recommended doses and cycle lengths. The critical parameter is cycle length: do not exceed 6 consecutive weeks due to receptor desensitization. Start at 20mcg and assess response before increasing. Monitor for hypoglycemia post-workout without food.' },
      { q: 'When should I take the CJC-1295/Ipamorelin?', a: 'The three most effective times: upon waking (taking advantage of the natural GH pulse), pre-workout (to prime the anabolic environment), and 30–60 minutes before bed (the most important dose — aligns with the body\'s primary nocturnal GH pulse).' },
      { q: 'Can I add more compounds to this stack?', a: 'TB-500 is an excellent addition for anyone with chronic injuries or high training volume — it adds systemic healing that BPC-157\'s more local mechanism doesn\'t fully cover. For those also focused on body weight, adding semaglutide creates a powerful fat loss amplification layer on top of the GH optimization.' },
    ],
  },

  {
    id: 'wolverine',
    name: 'The Wolverine Stack',
    tagline: 'Maximum tissue repair — local + systemic recovery',
    shortDesc: 'Combines the two most powerful tissue repair peptides for comprehensive local and systemic healing — enabling training frequency otherwise unattainable.',
    badge: 'Elite Recovery',
    accent: '#40c090',
    difficulty: 'Beginner',
    goal: 'Maximum recovery & injury healing',
    duration: '8 weeks',
    outcomes: ['Dramatically accelerated healing', 'Reduced chronic inflammation', 'Greater training frequency', 'Joint & connective tissue health', 'Injury resolution'],
    compounds: [
      {
        slug: 'bpc-157-10mg',
        role: 'Local & Systemic Tissue Repair',
        timing: '200–500mcg SubQ, daily',
        why: 'BPC-157 is the cornerstone of every serious recovery protocol. Its multi-mechanism approach — angiogenesis promotion, nitric oxide modulation, growth factor receptor upregulation — creates the most comprehensive healing environment available. For specific injuries, injection near the site dramatically concentrates the healing signal. For systemic optimization, abdominal SubQ provides whole-body anti-inflammatory and repair benefits that protect the entire system.',
      },
      {
        slug: 'tb-500-thymosin-beta-4-10mg',
        role: 'Systemic Regeneration & Flexibility',
        timing: '2–2.5mg SubQ, 2–3× weekly',
        why: 'TB-500 provides the systemic healing dimension that BPC-157\'s mechanism cannot fully cover. Where BPC-157 excels locally, TB-500 travels through the bloodstream to reach injury sites throughout the body — upregulating actin expression to accelerate cell migration and tissue reconstruction everywhere damage exists. The combination creates complete coverage: BPC-157 handles the local environment with precision while TB-500 addresses full-body healing from a single injection.',
      },
    ],
    fullDescription: `The Wolverine Stack is the gold standard recovery protocol — combining the two most studied and widely used tissue repair peptides in a complementary local-systemic pairing. It is ideal as a standalone recovery protocol, as an injury rehabilitation program, or as the recovery foundation layer beneath a more complex stack.

BPC-157 and TB-500 are the two most popular recovery peptides in the biohacking community for good reason: their mechanisms are complementary rather than redundant. BPC-157 provides concentrated local healing — angiogenesis, growth factor receptor upregulation, anti-inflammatory modulation — with the strongest effect near the injection site. TB-500's systemic distribution via actin upregulation and cell migration provides full-body healing that a locally-acting peptide cannot replicate.

Together, they create a recovery environment that addresses every type of tissue damage: acute injuries (strains, sprains, tears), chronic overuse injuries, gut lining dysfunction, neurological recovery, and the general structural wear that training and daily life accumulate. The speed of recovery in both acute and chronic injury contexts is the most consistent finding in user research.

For physique athletes, the practical benefit is stark: the Wolverine Stack enables training frequency and volume that would otherwise produce cumulative structural breakdown. It is the foundation that makes sustainable high-intensity training possible — allowing the body to absorb more stress than it can generate on its own.`,
    synergy: `BPC-157 and TB-500 occupy complementary anatomical and mechanistic niches. BPC-157 creates a superior healing environment locally — concentrated near the injection site for targeted repair of specific injuries, while also providing systemic anti-inflammatory benefits via abdominal SubQ. TB-500's actin-mediated mechanism drives cell migration to injury sites systemically — reaching areas that local BPC-157 injection cannot adequately address. The two peptides share no receptor pathways and do not compete — they are additive across every tissue type and injury presentation. Where one has gaps, the other fills them.`,
    whoIsItFor: `Ideal for: active athletes dealing with chronic or acute injuries; anyone who has exceeded their body's natural recovery capacity; individuals returning from injury who want to accelerate rehabilitation; and those who simply want to maintain the structural integrity required for consistent, high-frequency training. The Wolverine Stack is also the recommended starting point for peptide newcomers — both compounds are well-characterized, the protocol is simple, and the benefits are rapid and clearly measurable.`,
    timeline: [
      { range: 'Week 1–2', title: 'Anti-Inflammatory Foundation', what: 'BPC-157 begins reducing local and systemic inflammation within days. Gut health improvements are often the first noticed effect. TB-500 loading phase begins — 2 injections per week to saturate tissue levels.' },
      { range: 'Weeks 3–4', title: 'Accelerated Tissue Repair', what: 'Injury healing accelerates measurably. Users with chronic injuries typically notice significant pain reduction and improved range of motion during this phase. Training recovery between sessions improves noticeably.' },
      { range: 'Weeks 5–6', title: 'Structural Restoration', what: 'Tendon, ligament, and muscle repair progresses into consolidation phase. Flexibility and range of motion improvements from TB-500 become pronounced. Overall body feels structurally "younger" and more resilient.' },
      { range: 'Weeks 7–8', title: 'Peak Recovery State', what: 'Full protocol effects realized. Injuries that prompted the stack are typically resolved or significantly improved. Training capacity is at a new high — recovery between sessions is fast enough to sustain the frequency optimization requires.' },
    ],
    keyBenefits: [
      'Complementary local (BPC-157) + systemic (TB-500) healing for complete coverage',
      'Accelerates healing of tendons, ligaments, muscle, gut, and neural tissue',
      'Dramatically reduces chronic inflammation across all tissue types',
      'Enables higher training frequency by removing the recovery bottleneck',
      'Improves flexibility and range of motion — TB-500\'s defining benefit',
      'Simplest protocol in the catalog — two compounds, two injection schedules',
      'Ideal foundation stack for peptide protocol beginners',
      'Benefits are rapid — often measurable improvements within the first 2 weeks',
    ],
    cycleProtocol: '8 weeks on. BPC-157: 200–500mcg daily throughout. TB-500: loading phase of 2–2.5mg 2–3× per week for weeks 1–4, then maintenance of 2–2.5mg every 2 weeks for weeks 5–8. After the 8-week cycle, 4 weeks off before repeating. For chronic injury management, some researchers run lower-dose maintenance protocols continuously.',
    faqs: [
      { q: 'Where should I inject BPC-157?', a: 'For specific injuries: subcutaneous or intramuscular injection near the injury site concentrates the healing signal locally. For general gut, anti-inflammatory, and systemic benefits: abdominal subcutaneous injection. Many researchers use multiple injection sites to address both specific injuries and systemic optimization simultaneously.' },
      { q: 'How quickly does BPC-157 work?', a: 'Anti-inflammatory and gut healing effects are often noticeable within the first week. Structural tissue repair (tendons, ligaments) takes longer — typically 3–6 weeks of consistent use. Acute injuries heal significantly faster than chronic ones.' },
      { q: 'Can I add CJC-1295/Ipamorelin to this stack?', a: 'Absolutely — GH optimization amplifies BPC-157\'s healing effects because elevated GH drives IGF-1 production, which directly accelerates tissue repair. Adding CJC-1295/Ipamorelin creates the full Body Sculptor stack with a recovery foundation. This is the protocol for serious athletes.' },
      { q: 'Is this stack appropriate for non-athletes?', a: 'Yes — BPC-157 and TB-500 benefit anyone dealing with chronic pain, inflammation, gut dysfunction, or accelerated aging-related tissue decline. The recovery benefits extend well beyond athletic performance to quality of life.' },
    ],
  },

  {
    id: 'weight-loss',
    name: 'The Metabolic Reset',
    tagline: 'GLP-1 receptor agonist fat loss — clinical-grade results',
    shortDesc: 'Semaglutide or tirzepatide-based fat loss protocol producing clinically documented weight reductions of 15–22%+ through powerful appetite suppression and metabolic optimization.',
    badge: 'Clinical Results',
    accent: '#e05080',
    difficulty: 'Beginner',
    goal: 'Significant fat loss and metabolic improvement',
    duration: '24 weeks',
    outcomes: ['15–22%+ body weight reduction', 'Powerful appetite suppression', 'Improved insulin sensitivity', 'Reduced visceral fat', 'Improved metabolic markers'],
    compounds: [
      {
        slug: 'tirzepatide-15mg',
        role: 'Primary Fat Loss Agent — Dual GLP-1/GIP Agonist',
        timing: '2.5–15mg SubQ, once weekly',
        why: 'Tirzepatide is the most effective single-compound fat loss peptide — demonstrated 22.5% average weight reduction at the highest dose in clinical trials, exceeding semaglutide\'s outcomes. Dual GLP-1 and GIP receptor activation produces both the powerful appetite suppression of GLP-1 agonism and the metabolic improvements of GIP activation. For those who have never used a GLP-1-class compound, tirzepatide delivers the most impressive fat loss outcomes available.',
      },
      {
        slug: 'bpc-157-10mg',
        role: 'GI Tolerance & Gut Health Support',
        timing: '200–300mcg SubQ, daily during ramp-up',
        why: 'The most common side effects of tirzepatide and other GLP-1-class compounds are gastrointestinal: nausea, discomfort, and altered gut motility during dose escalation. BPC-157 directly addresses these through its profound gut-healing and anti-inflammatory effects. Running BPC-157 concurrently — especially during the first 8–12 weeks of dose escalation — significantly reduces GI side effects, improves tolerability, and allows for faster dose progression to therapeutic fat loss ranges.',
      },
    ],
    fullDescription: `The Metabolic Reset is the peptide protocol for significant, clinically-grounded fat loss. It is built around tirzepatide — the compound behind Mounjaro and Zepbound — which represents the current peak of GLP-1-class fat loss efficacy with its dual GLP-1/GIP receptor activation and 22.5% average weight reduction in clinical trials.

The protocol addresses the most important practical obstacle to GLP-1-class compound success: GI tolerability during dose escalation. The standard dose escalation approach (starting at 2.5mg weekly and increasing every 4 weeks) minimizes side effects for most users, but BPC-157 as a concurrent gut optimization compound dramatically reduces the nausea and GI discomfort that causes protocol abandonment. The result is a significantly more manageable escalation process and faster achievement of therapeutic dosing ranges.

Fat loss with tirzepatide occurs through multiple mechanisms simultaneously: appetite suppression via hypothalamic GLP-1 receptor activation, slowed gastric emptying extending meal satiety, improved peripheral insulin sensitivity reducing fat storage signals, and potential direct fat oxidation effects via GIP receptor activation in adipose tissue. The weight that is lost is predominantly fat — visceral fat in particular, which poses the greatest metabolic health risk and is the most resistant to diet and exercise alone.

For individuals who want a more aggressive protocol or have found semaglutide alone insufficient, Retatrutide (triple GLP-1/GIP/Glucagon agonist) can be substituted as the primary compound for the highest efficacy available — documented 24.2% weight reduction in Phase 2 trials.`,
    synergy: `BPC-157 and tirzepatide work synergistically through their respective GI mechanisms. Tirzepatide's slowed gastric emptying and altered gut motility creates the GI environment most prone to side effects during dose escalation. BPC-157's anti-inflammatory, mucosal healing, and nitric oxide modulating effects directly address the gut tissue changes that cause these symptoms — reducing nausea, improving motility regulation, and healing any mucosal irritation that GLP-1 receptor activation produces. The result is better tolerability, faster dose progression, and fewer protocol interruptions due to side effects.`,
    whoIsItFor: `Designed for anyone with significant excess body fat who wants clinical-grade fat loss outcomes. Ideal for those who have tried conventional diet and exercise protocols and encountered the metabolic adaptation that limits results, those with metabolic health concerns (insulin resistance, elevated triglycerides, high blood pressure), and those who want the most efficient path to substantial body fat reduction. Not suitable as a body composition "finisher" protocol — this is for those with meaningful fat loss goals.`,
    timeline: [
      { range: 'Weeks 1–4', title: 'Escalation Phase 1', what: 'Tirzepatide at 2.5mg weekly. BPC-157 daily for GI support. Appetite reduction begins — most users notice meaningful hunger reduction within the first 1–2 weeks. Body weight reduction of 1–3% typical in this phase.' },
      { range: 'Weeks 5–12', title: 'Dose Progression', what: 'Escalating tirzepatide: 5mg (weeks 5–8), 7.5mg (weeks 9–12). Fat loss accelerates with each dose increase. Appetite suppression deepens. Visceral fat reduction becomes visible — particularly reduced abdominal circumference.' },
      { range: 'Weeks 13–20', title: 'Therapeutic Range', what: 'Tirzepatide at 10–15mg weekly. Peak fat loss rate. Most users find this phase produces the most dramatic visible body composition changes. BPC-157 can be reduced to intermittent use if GI tolerance is established.' },
      { range: 'Weeks 21–24', title: 'Consolidation', what: 'Maintaining therapeutic dose. Fat loss continues, pace may moderate. Focus on establishing nutritional habits that will maintain results long-term. Total body weight reduction of 15–22%+ achievable across the full protocol.' },
    ],
    keyBenefits: [
      'Up to 22.5% body weight reduction demonstrated in clinical trials',
      'Dual GLP-1/GIP mechanism outperforms semaglutide in head-to-head comparison',
      'BPC-157 inclusion dramatically improves GI tolerability during escalation',
      'Visceral fat reduction is the primary outcome — the most metabolically important fat',
      'Improves insulin sensitivity, lipid profiles, and blood pressure simultaneously',
      'Once-weekly injection — minimal administration burden',
      'Dose escalation protocol minimizes side effects during the tolerance-building phase',
      'Option to upgrade to retatrutide for maximum efficacy if plateau occurs',
    ],
    cycleProtocol: 'Continuous protocol: tirzepatide is used at maintenance dosing until target weight is achieved. Unlike cycle-based compounds, GLP-1-class peptides are typically used continuously for the duration of the research period. After achieving target weight, dose can be tapered to the lowest dose that maintains outcomes. BPC-157 cycles 8 weeks on, 4 weeks off within the larger protocol.',
    faqs: [
      { q: 'What is the difference between semaglutide and tirzepatide for this protocol?', a: 'Semaglutide activates only GLP-1 receptors and produces ~15% weight loss. Tirzepatide activates both GLP-1 and GIP receptors and produces ~22.5% weight loss at peak dosing. Tirzepatide is the recommended primary compound for this protocol due to superior efficacy. Semaglutide is a good starting point for those who prefer to begin with the simpler compound.' },
      { q: 'Why does this stack include BPC-157?', a: 'GLP-1-class compounds frequently cause GI side effects (nausea, bloating, discomfort) especially during dose escalation. BPC-157\'s gut-healing and anti-inflammatory effects directly reduce these side effects, improve tolerability, and prevent protocol abandonment. It is one of the most practical additions to any GLP-1 protocol.' },
      { q: 'Will I lose muscle mass on this protocol?', a: 'GLP-1-class compounds primarily mobilize fat rather than muscle. Adding CJC-1295/Ipamorelin to the stack preserves and builds lean mass while the fat loss occurs — creating a superior body composition outcome vs. fat loss alone.' },
      { q: 'Can I use retatrutide instead of tirzepatide?', a: 'Yes — retatrutide (triple GLP-1/GIP/Glucagon agonist) is the most potent fat loss compound available, with 24.2% average weight reduction in Phase 2 trials. It requires a more gradual escalation protocol due to its potency. Substituting retatrutide for tirzepatide is appropriate for those seeking maximum efficacy.' },
    ],
  },

  {
    id: 'longevity',
    name: 'The Longevity Stack',
    tagline: 'Telomere lengthening, cellular energy & collagen — biological age reversal',
    shortDesc: 'Targets the three primary mechanisms of biological aging: telomere shortening, NAD+ depletion, and dermal collagen decline. The comprehensive anti-aging protocol.',
    badge: 'Anti-Aging',
    accent: '#a060ff',
    difficulty: 'Intermediate',
    goal: 'Biological age reversal and longevity',
    duration: '12 weeks',
    outcomes: ['Telomere lengthening (Epithalon)', 'Restored cellular energy (NAD+)', 'Improved skin structure (GHK-Cu)', 'Enhanced sleep architecture', 'Reduced biological aging markers'],
    compounds: [
      {
        slug: 'epitalon-50mg',
        role: 'Telomere Lengthening & Pineal Restoration',
        timing: '5–10mg SubQ daily × 10–20 days (cyclical)',
        why: 'Epithalon is the foundational compound of any serious longevity protocol — the only compound with human data demonstrating measurable telomere lengthening. Telomere shortening is one of the primary molecular mechanisms of aging; Epithalon\'s telomerase activation directly addresses this. Its pineal gland-derived origin also makes it the most effective compound for restoring age-related melatonin decline — dramatically improving sleep architecture, which is itself one of the most powerful levers for biological age reversal.',
      },
      {
        slug: 'nad-500mg',
        role: 'Cellular Energy Restoration & Sirtuin Activation',
        timing: '250–500mg IV or SubQ, 2–5× weekly',
        why: 'NAD+ depletion is the second major mechanism of biological aging — by age 50, NAD+ levels have often declined by 50% or more, impairing mitochondrial energy production, DNA repair, and sirtuin-regulated gene expression. Direct NAD+ supplementation restores the coenzyme that drives every energy-producing reaction in the cell, activates the SIRT1–7 longevity proteins, and provides the substrate for PARP-mediated DNA damage repair. The combination of Epithalon (telomere biology) + NAD+ (mitochondrial and sirtuin biology) covers the two most critical intracellular aging mechanisms simultaneously.',
      },
      {
        slug: 'ghk-cu-50mg',
        role: 'Dermal & Tissue Anti-Aging',
        timing: '1–2mg SubQ, 3–5× weekly',
        why: 'GHK-Cu addresses the most visible dimension of biological aging: the structural decline of dermal collagen and elastin. Its activation of 4,000+ skin-related genes includes pathways involved in wound healing, antioxidant defense, and cellular renewal that extend beyond skin into multiple tissue types. GHK-Cu\'s documented 121% increase in skin density represents visible biological age reversal — the external manifestation of the cellular renewal that Epithalon and NAD+ drive at the molecular level.',
      },
    ],
    fullDescription: `The Longevity Stack targets the three primary mechanisms of biological aging that modern peptide and coenzyme research has identified as most amenable to intervention: telomere shortening (Epithalon), NAD+ depletion (NAD+), and dermal collagen decline (GHK-Cu). Each compound addresses a distinct level of biological aging — chromosomal, mitochondrial, and structural — creating a comprehensive anti-aging protocol that operates at every level simultaneously.

Epithalon is the centerpiece — the only compound with published human data demonstrating measurable telomere lengthening. Dr. Vladimir Khavinson's 12-year follow-up study showed reduced cancer incidence and all-cause mortality in elderly subjects receiving periodic Epithalon treatment, making it the most compelling human longevity data for any peptide compound. Its pineal gland origin also makes it uniquely effective for restoring melatonin production — the age-related decline of which is responsible for much of the deterioration in sleep architecture that accelerates biological aging after 40.

NAD+ addresses the second pillar: the mitochondrial and sirtuin biology of aging. The sirtuins — particularly SIRT1 and SIRT3 — regulate hundreds of age-related gene expression pathways, and their activity is directly limited by NAD+ availability. Restoring NAD+ to youthful levels activates these longevity proteins, enhances mitochondrial biogenesis, improves DNA damage repair capacity, and creates the metabolic environment associated with cellular youth.

GHK-Cu provides the connective tissue and skin dimension — the visible, external expression of biological age. Its collagen stimulation, wound healing acceleration, and antioxidant protection create the dermal architecture associated with physical youth, while its broader gene expression effects extend anti-aging benefits to multiple tissue systems beyond skin alone.`,
    synergy: `The three compounds create a cross-level anti-aging system. Epithalon's telomerase activation and melatonin restoration work at the chromosomal and neuroendocrine levels — ensuring the cellular machinery is capable of sustained renewal. NAD+ provides the metabolic fuel for the sirtuin-regulated DNA repair and mitochondrial maintenance that cellular renewal requires. GHK-Cu executes structural renewal at the tissue level — stimulating the collagen synthesis and cellular regeneration that is the visible output of the cellular environment Epithalon and NAD+ create. Each compound addresses aging at a different biological level, and the combination produces effects at all levels simultaneously.`,
    whoIsItFor: `Designed for individuals who are serious about biological age optimization — those who want to address aging at its mechanisms rather than merely its symptoms. Particularly relevant from age 35+ when telomere shortening accelerates, NAD+ decline becomes measurable, and skin collagen loss becomes visible. Also highly relevant for anyone with strong longevity goals regardless of age. The stack is appropriate for both men and women with no hormonal or sex-specific contraindications.`,
    timeline: [
      { range: 'Weeks 1–3', title: 'Epithalon Cycle + Foundation', what: 'Epithalon 10–20 day cycle initiated. NAD+ and GHK-Cu begin simultaneously. Sleep improvements from melatonin normalization are typically the first noticed effect — often dramatic within the first week. Energy and cognitive clarity improvements from NAD+ begin within 2–3 weeks.' },
      { range: 'Weeks 4–6', title: 'Cellular Energy Restoration', what: 'NAD+ effects compound — improved energy metabolism, better stress tolerance, cognitive improvements. GHK-Cu skin improvements begin — hydration, elasticity, and early luminosity changes. Epithalon cycle complete.' },
      { range: 'Weeks 7–10', title: 'Structural Transformation', what: 'GHK-Cu collagen remodeling produces clearly visible skin quality improvements. NAD+ maintenance at twice-weekly provides sustained cellular energy and sirtuin activation. Overall physical presentation reflects improved biological age markers.' },
      { range: 'Weeks 11–12', title: 'Full Protocol Expression', what: 'Complete stack effects realized. Optional second Epithalon 10-day cycle in weeks 11–12 for enhanced telomere benefit. Skin quality, energy levels, and sleep quality represent the compound output of 12 weeks of three-level anti-aging intervention.' },
    ],
    keyBenefits: [
      'Epithalon: the only compound with human data showing measurable telomere lengthening',
      'NAD+ restoration activates SIRT1–7 longevity proteins for comprehensive anti-aging',
      'GHK-Cu 121% skin density increase — visible biological age reversal',
      'Three-level intervention: chromosomal, mitochondrial, and structural aging addressed',
      'Dramatic sleep quality improvement from Epithalon melatonin normalization',
      'Improved cognitive function and energy from NAD+ metabolic restoration',
      'Antioxidant protection at both cellular (NAD+/sirtuins) and dermal (GHK-Cu) levels',
      'Aligned with published human longevity research — not theoretical',
    ],
    cycleProtocol: '12-week protocol. Epithalon: 10–20 day intensive cycle at weeks 1–3, optional repeat at weeks 11–12. 1–2 Epithalon cycles per year aligns with the Khavinson research protocol. NAD+: 2–5× per week loading for 4 weeks, then 1–2× per week maintenance. GHK-Cu: 3–5× per week throughout. Most run this protocol 1–2× per year.',
    faqs: [
      { q: 'How does Epithalon actually lengthen telomeres?', a: 'Epithalon activates telomerase — the enzyme that adds telomere repeat sequences (TTAGGG) back to chromosome ends. Telomerase is normally active in stem cells and germline cells but suppressed in somatic cells. Epithalon restores partial telomerase activity in differentiated cells, slowing the telomere shortening that otherwise accumulates with each cell division.' },
      { q: 'What does NAD+ feel like when it works?', a: 'Most users report improved energy without the jitteriness of stimulants — a cleaner, more sustainable vitality. Cognitive clarity improvements are common. Some users notice enhanced exercise performance and faster recovery. The flush sensation during IV NAD+ administration is normal and indicates the compound is active.' },
      { q: 'How long do the results from this stack last after the cycle?', a: 'Telomere lengthening from Epithalon persists — the chromosomal changes are stable. NAD+ levels gradually decline back to baseline within weeks of stopping, which is why maintenance dosing is recommended. GHK-Cu collagen gains persist for months but require ongoing cycles to maintain the elevated collagen density.' },
      { q: 'Can I combine the Longevity Stack with the Body Sculptor?', a: 'Yes — they complement well. Epithalon and NAD+ are fully compatible with CJC-1295/Ipamorelin. The GH optimization from the Body Sculptor compounds adds an additional longevity dimension (GH and IGF-1 are directly anti-aging at the cellular level). Running GHK-Cu across both stacks is redundant but harmless.' },
    ],
  },
]
