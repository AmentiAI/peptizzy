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

  // ── RECOVERY & HEALING ──────────────────────────────────────────────────────

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

The compound has been shown to heal tendons, ligaments, muscles, bone, the gastric lining, and even neural tissue. This makes it uniquely comprehensive — whether the goal is recovering from a training injury, optimizing gut health, or maintaining the structural integrity that underpins elite physique development.

For those optimizing their physical appearance and performance, BPC-157 works at the foundational level — addressing the inflammation, tendon fragility, and micro-damage that limit physique development and longevity. It is found in virtually every advanced stack for good reason: it repairs the cellular environment so everything else works better.

Clinical data consistently shows BPC-157 accelerating tendon-to-bone healing, reducing inflammation in mucosal tissue, and supporting neurological recovery — making it the most broadly applicable healing peptide available.`,
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
    synergies: ['TB-500', 'GHK-Cu', 'Ipamorelin'],
  },

  {
    slug: 'bpc-157-oral',
    name: 'BPC-157 Oral',
    tagline: 'The Gut Healing Protocol — No Injection Required',
    price: 'From $59',
    category: 'Recovery & Healing',
    tags: ['Gut Health', 'Oral', 'Recovery', 'Anti-Inflammatory', 'No Injection'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/11/BPC-157-500mcg-Oral-1.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'All the gut-healing and anti-inflammatory power of BPC-157 in a convenient oral capsule format — the ideal choice for gut optimization without injections.',
    fullDescription: `BPC-157 Oral delivers the profound healing properties of Body Protection Compound 157 in an oral capsule format, specifically optimized for the gastrointestinal tract. While injectable BPC-157 provides systemic tissue repair, oral BPC-157 exerts its most powerful effects locally along the entire digestive pathway — making it the superior format for gut health optimization.

The mechanism is direct: oral BPC-157 travels through the gastrointestinal tract in contact with the tissues it heals. It activates nitric oxide pathways, promotes mucosal integrity, reduces intestinal permeability (leaky gut), and resolves inflammation along the entire GI tract from esophagus to colon.

For anyone dealing with gut dysfunction — whether from stress, processed food consumption, NSAID use, alcohol, or chronic inflammation — BPC-157 Oral addresses the root structural damage rather than just managing symptoms. A healthy gut is a foundational prerequisite for optimal absorption of nutrients, hormones, and other peptides.

The oral format also provides practical advantages: no reconstitution, no needles, and no injection site management. For the peptide protocol newcomer, BPC-157 Oral is often the ideal starting point — delivering measurable improvements in gut function, energy, and systemic inflammation before adding injectable protocols.`,
    benefits: [
      'Heals intestinal permeability and leaky gut syndrome at the mucosal level',
      'Reduces GI inflammation including IBD, gastritis, and colitis',
      'Accelerates recovery from gut damage caused by NSAIDs, alcohol, and stress',
      'Improves nutrient absorption and gut microbiome environment',
      'No injection required — convenient daily oral dosing',
      'Anti-inflammatory effects reduce bloating, cramping, and discomfort',
      'Promotes healing of esophageal, gastric, and intestinal tissue',
      'Synergizes with injectable protocols by improving peptide absorption',
    ],
    protocol: '500mcg–1mg oral capsule daily, taken on an empty stomach in the morning or before sleep. Cycles of 4–8 weeks. For gut-specific conditions, can be taken with food to maximize contact with affected tissue.',
    synergies: ['BPC-157', 'TB-500', 'Thymosin Alpha-1'],
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
    shortDescription: 'Systemic regeneration at scale. TB-500 travels through the bloodstream to find and repair damaged tissue anywhere in the body — the ultimate full-body recovery compound.',
    fullDescription: `TB-500 is a synthetic peptide derived from Thymosin Beta-4, a protein found in virtually every cell of the human body. Where BPC-157 excels locally, TB-500 operates systemically — circulating through the bloodstream to identify and accelerate healing wherever damage exists throughout the body.

The mechanism is profound: TB-500 promotes cell migration and differentiation by upregulating actin — the protein responsible for cellular movement and structure. This means damaged muscle fibers, tendons, cardiac tissue, and even neural pathways experience accelerated reconstruction. The result is a compound that benefits the entire body simultaneously rather than targeting a single injury site.

For the physique-focused individual, TB-500 enables training at intensities that would otherwise break the body down. Elite athletes consistently report dramatically reduced downtime from injuries, improved range of motion and flexibility, and a noticeable enhancement in overall physical resilience and durability.

The compound also exhibits potent anti-inflammatory effects, reducing the chronic low-grade inflammation that accelerates aging, impairs muscle growth, and degrades joint health over time. Combined with BPC-157, the two peptides create a comprehensive repair system — local healing from BPC-157 complemented by systemic regeneration from TB-500.

Studies on TB-500 have demonstrated benefits in cardiac muscle repair, hair follicle regeneration, and even neural tissue recovery — positioning it as one of the most comprehensively useful healing peptides available.`,
    benefits: [
      'Systemic tissue repair throughout the entire body — not just at injection site',
      'Dramatic improvement in flexibility and range of motion',
      'Accelerated wound, injury, and post-surgical healing',
      'Reduces chronic inflammation that impairs performance and aging',
      'Supports cardiac muscle recovery and function after intense training',
      'Enhances endurance capacity by improving blood vessel formation',
      'Promotes hair follicle stimulation and growth',
      'Works synergistically with BPC-157 for comprehensive regeneration',
    ],
    protocol: 'Loading phase: 2–2.5mg twice weekly for 4–6 weeks. Maintenance: 2–2.5mg once weekly or every two weeks. Administer subcutaneously. Commonly cycled with BPC-157 for maximum tissue repair effect.',
    synergies: ['BPC-157', 'Ipamorelin', 'IGF-1 LR3'],
  },

  {
    slug: 'bpc-157-tb-500',
    name: 'BPC-157 + TB-500',
    tagline: 'The Ultimate Recovery Stack — Combo Vial',
    price: 'From $79',
    category: 'Recovery & Healing',
    tags: ['Recovery', 'Combo', 'Tissue Repair', 'Healing', 'Best Value'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/BPC-157-2mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Best Stack',
    featured: true,
    shortDescription: 'The most powerful healing combination in peptide optimization — BPC-157 and TB-500 in a single pre-mixed vial for maximum tissue repair at the best value.',
    fullDescription: `The BPC-157 + TB-500 combination represents the pinnacle of peptide-based recovery optimization. This pre-combined vial delivers both compounds simultaneously, exploiting their complementary mechanisms for a synergistic healing effect that exceeds what either compound achieves alone.

BPC-157 provides targeted local healing: it promotes angiogenesis at the injury site, upregulates growth factor receptors, and repairs tissue structure with extraordinary specificity. TB-500 provides systemic amplification: it circulates throughout the body to accelerate repair across multiple tissue types simultaneously, improving flexibility and reducing the chronic inflammation that impairs recovery.

Together, the combination addresses recovery from every angle. Acute injuries heal faster and more completely. Chronic conditions that resist single-compound treatment respond to the complementary mechanisms. Training volume that would normally cause overuse injuries becomes sustainable. The physical resilience required for consistent, progressive physique development becomes accessible.

Elite athletes, high-performance individuals, and serious looks maxers who understand that the limitation on progress is usually recovery rather than effort consistently reach for the BPC-157 + TB-500 stack. It is the recovery foundation that makes everything else in a protocol possible.`,
    benefits: [
      'Synergistic local (BPC-157) and systemic (TB-500) tissue repair',
      'Fastest possible recovery from acute injuries and training stress',
      'Addresses chronic conditions that resist single-compound protocols',
      'Reduces recovery time between training sessions by up to 50%',
      'Comprehensive anti-inflammatory effects across all tissue types',
      'Best value combination — single vial for both compounds',
      'Foundational stack for any serious looks maxing or performance protocol',
      'Improves joint health, flexibility, and connective tissue durability',
    ],
    protocol: '1–2mg of the combined vial subcutaneously, daily or every other day. For acute injuries: daily for 4–6 weeks. For maintenance recovery: 3–4x weekly. Site inject near injury or abdomen for systemic effect.',
    synergies: ['Ipamorelin', 'GHK-Cu', 'IGF-1 LR3'],
  },

  {
    slug: 'll-37',
    name: 'LL-37',
    tagline: 'The Antimicrobial Immune Peptide',
    price: 'From $69',
    category: 'Immune & Vitality',
    tags: ['Immune Support', 'Antimicrobial', 'Wound Healing', 'Gut Health', 'Skin'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/10/LL37-5mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'The body\'s natural antimicrobial peptide — LL-37 strengthens immune defenses, promotes wound healing, and reduces chronic inflammation at the foundational cellular level.',
    fullDescription: `LL-37 is a cathelicidin antimicrobial peptide — one of the immune system's primary front-line defense molecules. It is naturally produced by epithelial cells and immune cells as an immediate response to infection, injury, or inflammation, representing one of the body's most fundamental protective mechanisms.

What makes LL-37 exceptional for optimization protocols is its multi-modal activity. As an antimicrobial, it disrupts bacterial and viral cell membranes with broad-spectrum effectiveness. As an immune modulator, it orchestrates the innate immune response — recruiting immune cells, regulating inflammation, and initiating tissue repair. As a wound healing agent, it promotes re-epithelialization, angiogenesis, and cellular migration to damaged sites.

The implications for physical optimization are significant. Chronic low-grade infections, gut dysbiosis, and persistent inflammation are common hidden saboteurs of physique goals — elevating cortisol, impairing nutrient absorption, and diverting metabolic resources away from muscle growth and fat loss. LL-37 addresses these foundational immune challenges directly.

Skin health is another compelling application: LL-37 is a key regulator of skin immune function, wound healing, and the inflammatory response that affects acne, redness, and skin quality. Users running LL-37 alongside GHK-Cu report synergistic improvements in skin clarity and wound resolution.`,
    benefits: [
      'Broad-spectrum antimicrobial protection against bacteria, viruses, and fungi',
      'Modulates innate immune response for optimal inflammatory balance',
      'Accelerates wound healing and skin repair through cellular migration',
      'Reduces chronic low-grade inflammation that impairs body composition',
      'Supports gut mucosal immunity and barrier function',
      'Improves skin health and reduces infection-related skin conditions',
      'Recruits and activates immune cells at sites of damage',
      'Promotes angiogenesis for improved blood flow to healing tissue',
    ],
    protocol: '1–5mg subcutaneous injection, 2–3x weekly. For skin applications, lower doses (0.5–1mg) topically applied. Cycles of 4–8 weeks. Often stacked with Thymosin Alpha-1 for comprehensive immune optimization.',
    synergies: ['Thymosin Alpha-1', 'BPC-157', 'GHK-Cu'],
  },

  // ── LOOKS MAXING ────────────────────────────────────────────────────────────

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

The collagen-stimulating effects are not merely cosmetic — collagen is the primary structural protein of all connective tissue, and GHK-Cu driven collagen synthesis benefits tendons, joints, and even bone quality. This dual aesthetic and structural benefit makes it uniquely valuable in any comprehensive optimization protocol.

Beyond aesthetics, GHK-Cu promotes hair follicle enlargement and hair growth, making it invaluable for maintaining density and reversing early thinning. Its powerful antioxidant and anti-inflammatory properties also protect against the oxidative damage that accelerates visible aging across all tissue types.`,
    benefits: [
      'Stimulates type I and III collagen synthesis — the structural proteins of youthful skin',
      'Activates elastin and proteoglycans for skin firmness and bounce',
      'Reduces fine lines, wrinkles, and skin laxity measurably',
      'Increases skin thickness and density by up to 121% in clinical studies',
      'Promotes hair follicle enlargement and increases hair growth density',
      'Powerful antioxidant protection against free radical skin damage',
      'Accelerates wound healing and scar remodeling',
      'Reduces hyperpigmentation for even, luminous skin tone',
      'Anti-inflammatory properties reduce redness and chronic irritation',
      'Resets gene expression of aging skin toward youthful cellular profiles',
    ],
    protocol: 'For systemic anti-aging and looks maxing: 1–3mg subcutaneous injection 2–3x weekly. Topically: 1–5% concentration applied daily. Can be combined with microneedling for dramatically enhanced penetration and results.',
    synergies: ['Epithalon', 'BPC-157', 'Ipamorelin'],
  },

  {
    slug: 'melanotan-2',
    name: 'Melanotan 2',
    tagline: 'The Bronze Optimization Protocol',
    price: 'From $45',
    category: 'Looks Maxing',
    tags: ['Tanning', 'Libido', 'Appetite Control', 'Pigmentation'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/MT2-10mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Top Seller',
    shortDescription: 'Achieve a deep, natural-looking tan while enhancing libido and supporting lean body composition. MT-2 activates the melanocortin system for comprehensive looks optimization.',
    fullDescription: `Melanotan 2 is a synthetic analogue of alpha-melanocyte stimulating hormone (α-MSH) that activates the melanocortin system — the master control system governing skin pigmentation, sexual function, appetite regulation, and body composition simultaneously.

At the looks maxing level, Melanotan 2 delivers three critical benefits simultaneously: it stimulates melanin production for a deep, even tan without excessive UV exposure; it activates MC4R receptors to enhance libido and sexual confidence; and it suppresses appetite through central mechanisms, making lean body composition significantly easier to maintain.

The pigmentation effect of MT-2 is particularly noteworthy for looks maximization. It creates a eumelanin-rich tan — the same deep, olive-toned pigmentation associated with high attractiveness ratings across cultures. This tan is protective against UV damage, develops with minimal sun exposure, and fades gradually rather than peeling like a surface tan.

Unlike spray tans or UV beds, Melanotan 2 works through the body's own melanocyte biology — producing authentic, even pigmentation that responds naturally to subsequent sun exposure. The color develops progressively over 1–2 weeks of loading, then maintains with minimal ongoing doses.

The confidence and mood enhancement effects are a significant additional benefit, with users reporting improved social presence, enhanced motivation, and reduced social anxiety — effects mediated through the melanocortin system's interaction with dopaminergic pathways in the limbic system.`,
    benefits: [
      'Stimulates deep, natural-looking eumelanin-based tan',
      'Provides UV protection by increasing photoprotective melanin pigment',
      'Enhances libido and sexual function via MC4R receptor activation',
      'Suppresses appetite centrally — making lean body composition easier',
      'Supports fat loss through melanocortin receptor modulation',
      'Improves confidence and mood through dopaminergic pathway activation',
      'Reduces required UV exposure for tan development by up to 80%',
      'Creates an even, streak-free, authentic pigmentation response',
    ],
    protocol: 'Loading: 0.25–0.5mg subcutaneous injection daily for 1–2 weeks while building tan with minimal UV exposure. Maintenance: 0.5–1mg 2–3x weekly. Start with the lowest dose to assess response to nausea side effect.',
    synergies: ['PT-141', 'Tesamorelin', 'BPC-157'],
  },

  // ── BODY COMPOSITION ────────────────────────────────────────────────────────

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

This selectivity makes Ipamorelin the ideal foundation for any looks maxing or body composition protocol. Clean GH pulses drive lipolysis (fat breakdown), muscle protein synthesis, collagen production, and cellular repair — without the stress hormone interference that blunts these benefits and adds unwanted side effects.

The downstream effects of optimized GH secretion are comprehensive: enhanced muscle definition, reduced body fat (particularly stubborn subcutaneous fat), improved skin thickness and elasticity, accelerated recovery from training, better sleep architecture, and the general vitality associated with youthful GH levels.

For skin quality specifically, GH-driven IGF-1 production stimulates dermal fibroblasts to produce collagen and hyaluronic acid — providing an indirect but powerful skin improvement effect that complements direct skin peptides like GHK-Cu. The two compounds working together provide a uniquely comprehensive skin optimization protocol.

Ipamorelin is most powerfully deployed at night, capitalizing on the body's natural GH peak during deep sleep, and can be further amplified by pairing with CJC-1295 for sustained GH elevation throughout the night — creating a transformation protocol that works while you sleep.`,
    benefits: [
      'Triggers potent, selective GH pulses without cortisol or prolactin elevation',
      'Promotes significant lean muscle mass development over 8–16 weeks',
      'Accelerates fat loss especially in stubborn subcutaneous deposits',
      'Enhances skin elasticity and thickness via GH-collagen pathway',
      'Dramatically improves sleep quality and recovery depth overnight',
      'Accelerates healing of injuries and post-surgical recovery',
      'Increases IGF-1 levels for comprehensive cellular regeneration',
      'Anti-aging effects through sustained GH-mediated tissue renewal',
      'Safe for extended use due to extraordinary selectivity profile',
    ],
    protocol: '200–300mcg subcutaneous injection, 2–3x daily. Most effective when administered 30–45 minutes before sleep and immediately post-workout. Cycle 3 months on, 1 month off. Combine with CJC-1295 for maximum effect.',
    synergies: ['CJC-1295', 'TB-500', 'BPC-157', 'MK-677'],
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
    shortDescription: 'A GHRH analogue that creates sustained GH elevation for hours. CJC-1295 pairs with Ipamorelin for the gold standard GH peptide stack.',
    fullDescription: `CJC-1295 Without DAC is a modified Growth Hormone Releasing Hormone analogue that produces potent GH pulses while maintaining a superior half-life compared to native GHRH. When paired with Ipamorelin, it creates a synergistic effect that produces GH elevations far greater than either compound alone — the definitive beginner GH optimization stack.

The mechanism exploits the body's natural GH axis: GHRH (mimicked by CJC-1295) signals the pituitary to produce GH, while Ipamorelin amplifies this pulse through the separate ghrelin receptor. The combination produces a powerful "double stimulus" that results in GH levels comparable to direct GH administration, while maintaining the natural pulsatile pattern that protects receptor sensitivity and avoids desensitization.

For physique development, sustained GH elevation is transformative. Fat cells become increasingly mobilized for energy, muscle protein synthesis is continuously elevated, recovery is dramatically accelerated, and the anti-aging benefits of optimal GH levels manifest progressively over months of consistent use.

The CJC-1295 + Ipamorelin stack is universally recognized as the gold standard entry point into peptide-based body optimization, and for good reason — it reliably produces visible body composition changes starting at 8–12 weeks while supporting comprehensive health optimization at every systemic level.`,
    benefits: [
      'Synergistic GH elevation when combined with Ipamorelin — greater than either alone',
      'Creates sustained anabolic environment for continuous physique progress',
      'Significant lean mass gains with consistent multi-month use',
      'Accelerated fat loss across all body depots including stubborn areas',
      'Enhanced recovery enabling higher training frequency and volume',
      'Improved deep sleep architecture and overnight recovery quality',
      'Anti-aging effects through sustained GH and IGF-1 elevation',
      'Better skin quality, thickness, and elasticity from GH signaling',
    ],
    protocol: '100–200mcg subcutaneous injection, 2–3x daily. Always combine with Ipamorelin (can be mixed in the same syringe). Most effective when dosed 30 minutes before sleep and post-workout.',
    synergies: ['Ipamorelin', 'MK-677', 'TB-500'],
  },

  {
    slug: 'cjc-1295-dac',
    name: 'CJC-1295 with DAC',
    tagline: 'The Long-Acting GH Elevation Protocol',
    price: 'From $65',
    category: 'Body Composition',
    tags: ['Growth Hormone', 'Muscle', 'Fat Loss', 'Long-Acting', 'Weekly Dosing'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/CJC1295-DAC-2mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'CJC-1295 with the Drug Affinity Complex for a 7–8 day half-life. One or two injections per week delivers continuous growth hormone elevation — the convenient long-acting GH protocol.',
    fullDescription: `CJC-1295 with DAC (Drug Affinity Complex) is a modified form of CJC-1295 engineered with a chemical modification that binds to plasma proteins in the bloodstream, dramatically extending its half-life from hours to 7–8 days. This single structural difference transforms the administration protocol: instead of daily injections, CJC-1295 DAC can be dosed 1–2 times per week while maintaining continuous GH elevation.

The DAC modification creates what is sometimes called a "GH bleed" — a sustained, continuous elevation of GH and IGF-1 levels over the entire week between doses. This contrasts with the pulsatile pattern of CJC-1295 Without DAC, making the two variants suitable for different optimization strategies.

The continuous GH elevation profile of CJC-1295 DAC provides persistent anabolic and lipolytic signaling — muscle protein synthesis and fat oxidation are elevated around the clock. For body composition transformation, this sustained effect creates a metabolic environment that continuously favors lean mass retention and fat mobilization.

The convenience of 1–2 weekly injections makes this variant particularly attractive for those who prefer a simpler protocol structure, while the long half-life ensures consistent GH optimization without the daily administration required by shorter-acting compounds.`,
    benefits: [
      'Once or twice weekly dosing — dramatically simplified protocol',
      'Continuous GH and IGF-1 elevation for 7–8 days per dose',
      'Sustained anabolic environment driving consistent lean mass gains',
      'Continuous fat oxidation and lipolysis for body composition improvement',
      'Improves sleep architecture and recovery quality',
      'Anti-aging effects from persistent IGF-1 elevation',
      'Enhanced skin quality and collagen synthesis',
      'Long half-life reduces injection frequency vs. shorter-acting alternatives',
    ],
    protocol: '1–2mg subcutaneous injection, 1–2x per week. Can be used as a standalone GH optimization compound or combined with Ipamorelin for enhanced GH pulse magnitude. Cycle 3 months on, 1 month off.',
    synergies: ['Ipamorelin', 'GHRP-2', 'MK-677'],
  },

  {
    slug: 'cjc-1295-ipamorelin',
    name: 'CJC-1295 + Ipamorelin',
    tagline: 'The Gold Standard GH Stack — Combo Vial',
    price: 'From $65',
    category: 'Body Composition',
    tags: ['Growth Hormone', 'Combo', 'Muscle Growth', 'Fat Loss', 'Best Value'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/IPAMORELIN-2mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Gold Standard',
    featured: true,
    shortDescription: 'The most popular GH peptide stack — pre-combined for convenience. CJC-1295 + Ipamorelin is the foundational body composition protocol trusted by elite physique athletes worldwide.',
    fullDescription: `The CJC-1295 + Ipamorelin combination is the definitive entry point for GH peptide optimization — a pre-mixed combo vial that delivers both GHRH agonism (CJC-1295) and GHRP agonism (Ipamorelin) in a single injection. This combination is widely regarded as the most effective, safest, and most comprehensive GH optimization protocol available.

The synergy is mechanistically precise: CJC-1295 stimulates the GHRH receptor, signaling the pituitary to produce and release GH. Ipamorelin simultaneously activates the ghrelin (GHSR) receptor, amplifying this GH pulse through a completely separate pathway. The combined "double stimulus" produces GH elevations that can approach those seen with pharmaceutical GH administration — but through the body's own physiological mechanisms.

This matters enormously: because GH is being produced by your own pituitary gland rather than injected exogenously, the natural pulsatile pattern is maintained. Receptor sensitivity is preserved. The GH that is released has the full biological spectrum of effects — not just the downstream metabolic effects of exogenous administration.

The results over 12–16 weeks of consistent use are well-documented: measurable reduction in body fat, meaningful increases in lean muscle mass, improved skin quality, dramatically better sleep, and the enhanced recovery capacity that makes progressive physique development sustainable.`,
    benefits: [
      'Pre-mixed combo vial — single injection delivers both compounds',
      'Maximum GH pulse via dual-receptor stimulation',
      'Greater lean muscle development than either compound alone',
      'Superior fat loss especially in stubborn areas',
      'Dramatically improved sleep quality within 1–2 weeks',
      'Enhanced recovery — train harder and more frequently',
      'Improves skin thickness, elasticity, and overall quality',
      'The most widely used and trusted GH peptide protocol worldwide',
    ],
    protocol: '200mcg CJC-1295 + 200mcg Ipamorelin per injection, 2–3x daily. Pre-sleep dose is most important — capitalizes on natural nocturnal GH peak. Add post-workout dose for enhanced recovery. 3 months on, 1 month off.',
    synergies: ['MK-677', 'TB-500', 'BPC-157', 'IGF-1 LR3'],
  },

  {
    slug: 'sermorelin',
    name: 'Sermorelin',
    tagline: 'The Natural GH Restoration Protocol',
    price: 'From $49',
    category: 'Body Composition',
    tags: ['Growth Hormone', 'Anti-Aging', 'Muscle', 'Fat Loss', 'Sleep'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/SERMORELIN-2mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'The 29-amino acid GHRH analogue that naturally restores youthful growth hormone patterns. Sermorelin is the gentle, physiological GH optimization protocol for long-term use.',
    fullDescription: `Sermorelin is a synthetic analogue of the first 29 amino acids of Growth Hormone Releasing Hormone (GHRH) — the exact portion responsible for receptor binding and GH release from the pituitary. As one of the oldest and most studied GH peptides, Sermorelin has decades of clinical data demonstrating its safety and efficacy for GH optimization.

What distinguishes Sermorelin from other GH peptides is its gentle, physiological mechanism. Rather than forcing maximum GH output, it restores the natural GHRH signaling that declines with age — returning GH secretion patterns toward youthful baseline rather than artificially maximizing them. This makes Sermorelin particularly suitable for long-term, conservative GH optimization protocols.

The practical effects of restored GH patterns are well-documented and substantial: improved body composition with both lean mass increase and fat reduction, better sleep quality (GH is primarily released during deep sleep), enhanced skin thickness and elasticity, improved energy and vitality, and accelerated recovery from exercise and injury.

Sermorelin also exhibits a favorable safety profile precisely because it works through the body's own regulatory mechanisms. The pituitary gland retains control over the GH response — if GH levels are already optimal, the response is blunted. This self-regulating mechanism means overdrive is inherently difficult, making Sermorelin the conservative practitioner's preferred GH compound.`,
    benefits: [
      'Restores youthful GH secretion patterns through physiological GHRH signaling',
      'Builds lean muscle mass progressively with consistent use',
      'Reduces body fat through improved GH-mediated lipolysis',
      'Significantly improves sleep quality and depth of recovery',
      'Enhances skin quality and collagen synthesis via GH/IGF-1 axis',
      'Self-regulating mechanism through pituitary feedback — inherently safe',
      'Improves energy, vitality, and exercise performance',
      'Decades of clinical data supporting safety and efficacy',
    ],
    protocol: '200–300mcg subcutaneous injection, once daily before sleep or 2x daily (pre-sleep and post-workout). Cycles of 3–6 months. Can be combined with GHRP-2 or Ipamorelin for amplified GH release.',
    synergies: ['Ipamorelin', 'GHRP-2', 'MK-677'],
  },

  {
    slug: 'ghrp-2',
    name: 'GHRP-2',
    tagline: 'The Powerful Growth Hormone Pulse Generator',
    price: 'From $45',
    category: 'Body Composition',
    tags: ['Growth Hormone', 'Muscle Growth', 'Fat Loss', 'Recovery', 'Appetite'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/GHRP-2-5mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'One of the most potent GHRPs available — GHRP-2 generates powerful growth hormone pulses for rapid body composition transformation and accelerated recovery.',
    fullDescription: `GHRP-2 (Growth Hormone Releasing Peptide 2) is a hexapeptide that activates the ghrelin receptor (GHSR) to produce powerful, dose-dependent growth hormone pulses from the pituitary gland. Among the GHRP class, GHRP-2 is known for producing some of the highest GH release magnitudes — making it a compound of choice for those seeking rapid, dramatic body composition changes.

The mechanism is straightforward but potent: GHRP-2 mimics ghrelin's action at the pituitary and hypothalamus, simultaneously triggering GH release and creating an appetite signal. The appetite effect is notable and can be leveraged strategically — for mass gain phases, the increased hunger facilitates the caloric surplus required for muscle building.

When combined with a GHRH analogue like Sermorelin or CJC-1295, GHRP-2's GH-releasing action is dramatically amplified. The dual-pathway stimulation produces GH pulses that approach pharmaceutical GH levels — driving significant lean mass development, accelerated fat mobilization, and comprehensive anabolic signaling.

GHRP-2 also stimulates IGF-1 production, the primary downstream mediator of GH's anabolic effects. Elevated IGF-1 promotes muscle protein synthesis, hyperplasia, and recovery at the cellular level — creating the physiological environment for sustained physique improvement.`,
    benefits: [
      'One of the most potent GH-releasing peptides available',
      'Dose-dependent GH pulse magnitude for titrated optimization',
      'Powerful lean muscle mass development with consistent use',
      'Significant fat loss through elevated GH-mediated lipolysis',
      'Accelerates recovery from training and injury',
      'Increases IGF-1 for cellular-level anabolic signaling',
      'Appetite stimulation useful for mass gain phases',
      'Synergizes powerfully with GHRH analogues for maximum GH output',
    ],
    protocol: '100–300mcg subcutaneous injection, 2–3x daily. Stack with Sermorelin or CJC-1295 for maximum GH response. Most effective 30–45 minutes pre-sleep and post-workout. Cycle 3 months on, 1 month off.',
    synergies: ['Sermorelin', 'CJC-1295', 'MK-677'],
  },

  {
    slug: 'mk-677',
    name: 'MK-677',
    tagline: 'The Nocturnal Sculptor — Oral GH Protocol',
    price: 'From $89',
    category: 'Body Composition',
    tags: ['Growth Hormone', 'Muscle', 'Sleep', 'Anti-Aging', 'Oral'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/MK-677-15mg-Oral-1.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Oral',
    shortDescription: 'The only orally bioavailable GH secretagogue. MK-677 elevates GH and IGF-1 around the clock, transforming sleep into your most productive anabolic window.',
    fullDescription: `MK-677 (Ibutamoren) is a non-peptide growth hormone secretagogue that achieves something unique in the world of GH optimization: it works orally. As a ghrelin receptor agonist, it mimics the action of the hunger hormone ghrelin at the pituitary, triggering sustained GH and IGF-1 elevation for up to 24 hours per dose.

This sustained GH elevation profile differentiates MK-677 from injectable peptides that produce acute pulses. The result is a chronic anabolic and anti-catabolic environment — muscle protein synthesis is elevated around the clock, fat metabolism is continuously enhanced, and the regenerative processes associated with optimal GH levels are persistently activated.

For looks maximization, the most notable and immediate effect of MK-677 is on sleep architecture. Users consistently report dramatically deeper, more restorative sleep with enhanced dream recall within the first week — a direct consequence of GH's role in sleep stage regulation. Deep sleep is the single most important factor in hormonal optimization and tissue repair, and MK-677 reliably improves this foundation.

The compound produces consistent, progressive improvements in muscle fullness and definition, skin quality and thickness, hair growth rate, and the overall physical presentation that reflects excellent hormonal health. These improvements compound significantly over 3–6+ months of consistent use.

For those who prefer to avoid injections entirely, MK-677 represents the most effective oral GH optimization available — and it can be combined with injectable GH peptides for synergistic effects when injections are also part of the protocol.`,
    benefits: [
      'Oral administration — no injections required',
      'Significantly increases GH and IGF-1 levels for 24 hours per dose',
      'Dramatically improves sleep depth and overnight recovery quality',
      'Builds lean muscle mass with consistent long-term use',
      'Reduces body fat through sustained GH-mediated lipolysis',
      'Improves bone mineral density — critical for structural integrity',
      'Enhances skin elasticity, thickness, and overall skin quality',
      'Anti-catabolic effects protect muscle during caloric restriction',
      'Improves hair quality and growth rate with consistent use',
    ],
    protocol: '15–25mg orally before sleep. Take consistently for minimum 3–6 months to see full body composition benefits. Start at 15mg to assess hunger and water retention response before increasing.',
    synergies: ['Ipamorelin', 'CJC-1295', 'Tesamorelin'],
  },

  {
    slug: 'igf-1-lr3',
    name: 'IGF-1 LR3',
    tagline: 'The Cellular Growth Amplifier',
    price: 'From $99',
    category: 'Body Composition',
    tags: ['Muscle Growth', 'Fat Loss', 'Recovery', 'Cell Growth', 'Hyperplasia'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/image_2024_10_24T01_11_01_146Z.png',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Advanced',
    shortDescription: 'IGF-1 LR3 is the downstream mediator of GH — the molecule that actually executes muscle growth at the cellular level. For serious physique development, nothing competes.',
    fullDescription: `IGF-1 LR3 (Insulin-like Growth Factor 1 Long R3) is a modified form of IGF-1 with a 13 amino acid extension that prevents binding to IGF-1 binding proteins, dramatically extending its half-life from minutes to 20–30 hours and amplifying its potency and reach significantly.

IGF-1 is the primary mediator of growth hormone's anabolic effects. When GH is elevated, the liver produces IGF-1, which then travels to muscle tissue and directly activates muscle protein synthesis, hyperplasia (the actual creation of new muscle cells), and hypertrophy. This makes IGF-1 LR3 the most direct pathway to genuine muscle development available — bypassing the upstream GH axis entirely.

For looks maximization at an advanced level, IGF-1 LR3 achieves results that no other compound matches in terms of muscle quality and density. The hyperplastic effect — actual creation of new muscle fibers, not just enlargement of existing ones — creates a structural foundation for physique improvements that persist significantly longer than hypertrophic gains alone.

Beyond muscle, IGF-1 LR3 accelerates fat metabolism through its effects on insulin sensitivity and lipid utilization, speeds recovery from training and injury, improves bone density, and enhances the regeneration of virtually all tissues. It is the compound of choice for those seeking elite-level physical transformation who have maximized their GH peptide protocols and are ready for the next level.`,
    benefits: [
      'Directly stimulates muscle hyperplasia — creation of entirely new muscle cells',
      'Powerful lean mass gains with simultaneous fat loss',
      'Dramatically accelerates recovery between high-intensity sessions',
      'Extended 20–30 hour half-life provides sustained anabolic signaling',
      'Improves muscle density, hardness, and definition',
      'Enhances bone mineral density for structural integrity',
      'Accelerates healing of cartilage, tendons, and ligaments',
      'Systemic regenerative effects across all tissues and organ systems',
    ],
    protocol: '20–50mcg subcutaneous or intramuscular injection immediately post-workout. Cycle 4–6 weeks maximum due to receptor desensitization, then 4–6 weeks off. Commonly used in combination with GH peptides for comprehensive anabolic optimization.',
    synergies: ['Ipamorelin', 'CJC-1295', 'TB-500', 'BPC-157'],
  },

  {
    slug: 'tesamorelin',
    name: 'Tesamorelin',
    tagline: 'The Abdominal Sculptor',
    price: 'From $69',
    category: 'Body Composition',
    tags: ['Fat Loss', 'Visceral Fat', 'Abdominal Definition', 'Growth Hormone'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/TESAMORELIN-2mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'The only GH peptide with FDA-recognized clinical data for visceral fat reduction. Tesamorelin targets the deep abdominal fat that no diet or exercise can fully address.',
    fullDescription: `Tesamorelin is a synthetic analogue of Growth Hormone Releasing Hormone (GHRH) that stands apart with a unique distinction: it is the only GH-releasing peptide that has received FDA approval for its body composition effects, specifically for reducing visceral abdominal fat in clinical populations.

Visceral fat — the fat stored deep within the abdominal cavity surrounding the organs — is the most metabolically harmful and aesthetically significant fat depot in the body. It is hormonally active, producing inflammatory cytokines that accelerate aging, impair insulin sensitivity, and directly limit the abdominal definition that represents elite physical development.

Tesamorelin addresses this directly through its potent GHRH-mimicking activity. By stimulating consistent GH pulses, it shifts the body's metabolic set point toward fat oxidation, with particularly pronounced effects on visceral adiposity. Clinical studies demonstrate consistent 15–20% reductions in visceral fat area with Tesamorelin protocols — reductions that are visible as improved abdominal definition and reduced waist circumference.

For the looks maximizer, eliminating visceral fat is the key to achieving the sharp abdominal definition that represents elite physical development. Tesamorelin achieves this even when aggressive diet and exercise protocols have failed, while simultaneously delivering the full spectrum of GH benefits: improved skin quality, lean muscle preservation, enhanced cognitive function, and accelerated recovery.`,
    benefits: [
      'Clinical evidence for visceral abdominal fat reduction',
      'Reduces deep abdominal fat that resists diet and exercise',
      'Creates sharper, more defined abdominal appearance',
      'Improves waist-to-hip ratio and overall physique proportions',
      'Maintains metabolic rate during caloric restriction phases',
      'Preserves and builds lean muscle mass simultaneously',
      'Improves skin elasticity and quality via GH signaling',
      'Enhances cognitive function and mental clarity',
    ],
    protocol: '1–2mg subcutaneous injection daily, administered in the evening. Cycles of 3–6 months show the most dramatic visceral fat reductions. Combine with Ipamorelin for comprehensive GH optimization across all body composition goals.',
    synergies: ['Ipamorelin', 'CJC-1295', 'MK-677'],
  },

  {
    slug: 'aod-9604',
    name: 'AOD-9604',
    tagline: 'The Fat Burning Fragment — Pure Lipolysis',
    price: 'From $55',
    category: 'Body Composition',
    tags: ['Fat Loss', 'Lipolysis', 'Metabolism', 'Body Composition', 'No Muscle'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/10/AOD9604-2mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'The isolated fat-burning fragment of growth hormone — AOD-9604 activates lipolysis without the blood sugar effects of full GH, making it the purest fat loss peptide available.',
    fullDescription: `AOD-9604 (Anti-Obesity Drug 9604) is a modified fragment of human growth hormone (hGH) — specifically amino acids 176–191 at the C-terminus of the GH molecule. This fragment contains the precise portion of GH responsible for its lipolytic (fat-burning) effects, completely separated from the portions that influence insulin and blood glucose.

This isolation is enormously significant for fat loss optimization. Full growth hormone administration creates IGF-1 elevation and insulin resistance as side effects, which can complicate body composition protocols. AOD-9604 delivers pure fat-burning signaling — stimulating lipolysis and inhibiting lipogenesis (new fat cell formation) without any impact on IGF-1, blood glucose, or insulin sensitivity.

The compound activates beta-3 adrenergic receptors on adipocytes, triggering the release of stored fat for oxidation as fuel. This mechanism targets both subcutaneous and visceral fat depots, with studies demonstrating particularly notable effects on abdominal adiposity — the most visible and most metabolically significant fat depot.

AOD-9604 also exhibits cartilage and bone healing properties discovered during clinical development, making it a useful adjunct to recovery protocols even beyond its primary fat loss application. For the physique-focused individual seeking targeted fat reduction without the complexity of full GH axis manipulation, AOD-9604 is an elegant, focused solution.`,
    benefits: [
      'Pure lipolysis activation without IGF-1 or insulin side effects',
      'Specifically targets subcutaneous and visceral fat for oxidation',
      'Inhibits lipogenesis — blocks the formation of new fat cells',
      'Dramatically reduces abdominal fat deposits',
      'No negative impact on blood glucose or insulin sensitivity',
      'Cartilage and bone healing properties as secondary benefits',
      'Joint health support making it compatible with heavy training',
      'Ideal for cutting phases with minimal risk of side effects',
    ],
    protocol: '300–500mcg subcutaneous injection daily, in the morning or before fasted cardio for maximum fat oxidation effect. Cycles of 3–6 months. Combine with Tesamorelin for comprehensive visceral fat reduction.',
    synergies: ['Tesamorelin', 'Ipamorelin', 'BPC-157'],
  },

  {
    slug: 'ace-031',
    name: 'ACE-031',
    tagline: 'The Myostatin Inhibitor — Unleash Genetic Muscle Limits',
    price: 'From $99',
    category: 'Body Composition',
    tags: ['Muscle Growth', 'Myostatin', 'Strength', 'Bone Density', 'Advanced'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/image_2024_09_14T03_02_12_168Z.png',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Advanced',
    shortDescription: 'A myostatin inhibitor that removes the body\'s natural ceiling on muscle growth. ACE-031 enables muscle development beyond what genetics normally permits.',
    fullDescription: `ACE-031 is a fusion protein that acts as a myostatin inhibitor — blocking the signaling of myostatin and related proteins (activin A, GDF-11) that limit muscle growth. Myostatin is the body's natural muscle growth suppressor: it functions to prevent excessive muscle development and maintains the genetic ceiling on how much muscle any individual can carry.

By blocking myostatin signaling, ACE-031 effectively raises or eliminates this genetic ceiling. Muscle cells receive less inhibitory signaling, allowing them to respond more fully to training stimulus with greater protein synthesis, increased satellite cell activation, and accelerated hypertrophy. The results of myostatin inhibition in animal models are dramatic — increases of 15–20% in muscle mass even without changes in training or nutrition.

In human studies, ACE-031 demonstrated significant lean mass increases and fat mass reductions, along with improvements in bone mineral density. The bone density benefit is particularly notable: myostatin/activin pathway inhibition activates bone-forming osteoblasts while reducing bone-resorbing osteoclasts, creating structural gains that support long-term physical capability.

For the advanced physique athlete who has maximized conventional optimization and is seeking the next level of transformation, ACE-031 represents access to muscle development beyond what the untreated body can achieve. Combined with GH peptides and IGF-1 optimization, the compound creates the most comprehensive anabolic environment available.`,
    benefits: [
      'Inhibits myostatin to remove the genetic ceiling on muscle growth',
      'Significant lean muscle mass gains beyond natural limits',
      'Simultaneous fat loss through improved metabolic signaling',
      'Increases bone mineral density for structural strength',
      'Enhances physical performance and strength output',
      'Activates satellite cell proliferation for accelerated muscle repair',
      'Reduces the inhibitory signaling that limits training adaptation',
      'Synergizes with GH peptides for comprehensive anabolic optimization',
    ],
    protocol: '1–3mg subcutaneous injection, 2–3x weekly. Advanced compound — start with lower doses to assess response. Cycles of 8–12 weeks with equal rest periods. Combine with protein-rich nutrition to maximize muscle-building potential.',
    synergies: ['Ipamorelin', 'IGF-1 LR3', 'TB-500'],
  },

  {
    slug: '5-amino-1mq',
    name: '5-Amino-1MQ',
    tagline: 'The NNMT Inhibitor — Metabolic Fat Loss Optimizer',
    price: 'From $79',
    category: 'Body Composition',
    tags: ['Fat Loss', 'Metabolism', 'NNMT', 'Insulin Sensitivity', 'Cellular Energy'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/10/5-AMINO-1MQ-5mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Cutting Edge',
    shortDescription: 'A novel NNMT inhibitor that activates fat cell metabolism, improves insulin sensitivity, and enhances cellular energy production — the metabolic optimization compound.',
    fullDescription: `5-Amino-1MQ is a small molecule that functions as a selective inhibitor of NNMT (Nicotinamide N-methyltransferase) — an enzyme that is highly upregulated in adipose tissue and plays a central role in fat cell metabolism and energy storage.

NNMT is a key regulator of the body's metabolic rate and fat storage capacity. When NNMT activity is elevated (as it commonly is in obesity and metabolic dysfunction), fat cells become more efficient at storing energy, less responsive to lipolytic signals, and resistant to fat loss interventions. 5-Amino-1MQ blocks this enzyme, shifting fat cells from a storage-dominant to a metabolism-dominant state.

The mechanism converges on NAD+ and AMPK pathways: by inhibiting NNMT, 5-Amino-1MQ preserves the NAD+ precursor pool, indirectly boosting cellular NAD+ levels. This activates AMPK and sirtuins — the same longevity and metabolic pathways activated by caloric restriction and fasting — producing improved insulin sensitivity, enhanced mitochondrial function, and increased cellular energy expenditure.

The practical result is that fat cells behave differently: they release stored fat more readily, accumulate new fat less efficiently, and respond more sensitively to the metabolic signals of training and nutrition. For those whose fat loss has plateaued despite optimal diet and exercise, 5-Amino-1MQ addresses the underlying cellular resistance that creates that plateau.`,
    benefits: [
      'Inhibits NNMT to shift fat cells from storage to metabolic mode',
      'Promotes fat breakdown by improving lipolytic signaling in adipocytes',
      'Enhances insulin sensitivity at the cellular level',
      'Boosts NAD+ precursors activating sirtuin and AMPK pathways',
      'Preserves lean muscle mass during fat loss phases',
      'Improves mitochondrial function and cellular energy production',
      'Addresses metabolic plateaus that resist conventional fat loss approaches',
      'Synergizes with caloric restriction and training for accelerated results',
    ],
    protocol: '5–10mg subcutaneous injection or oral administration, daily. Can be taken in the morning for metabolic benefits throughout the day. Cycles of 8–12 weeks. Combine with Tesamorelin or AOD-9604 for comprehensive fat loss protocol.',
    synergies: ['MOTS-c', 'AOD-9604', 'Tesamorelin'],
  },

  {
    slug: 'retatrutide',
    name: 'Retatrutide',
    tagline: 'The Triple Receptor Agonist — Next-Generation Weight Loss',
    price: 'From $99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'GLP-1', 'GIP', 'Glucagon', 'Metabolic Health', 'Triple Agonist'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2025/08/Retatrutide-5mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'New',
    shortDescription: 'The most advanced weight management peptide available — Retatrutide simultaneously activates GLP-1, GIP, and glucagon receptors for unparalleled fat loss and metabolic improvement.',
    fullDescription: `Retatrutide represents the cutting edge of metabolic peptide science — a triple agonist that simultaneously activates three complementary receptor systems: GLP-1 (glucagon-like peptide-1), GIP (glucose-dependent insulinotropic polypeptide), and glucagon receptors. No other single compound activates all three pathways simultaneously, making Retatrutide uniquely powerful for body composition transformation.

The GLP-1 receptor activation reduces appetite through central mechanisms, slows gastric emptying to increase satiety, and improves insulin secretion in response to meals. GIP receptor activation enhances GLP-1's effects and improves fat metabolism in adipose tissue. The glucagon receptor activation adds thermogenic (heat-generating, calorie-burning) effects and directly promotes fat oxidation in the liver.

Clinical data on Retatrutide in trial settings has shown weight loss outcomes that exceeded those of GLP-1 agonists alone — with participants achieving 20%+ body weight reduction over 48 weeks. These outcomes represent the most significant pharmacological fat loss results documented in modern peptide medicine.

Beyond weight loss, Retatrutide improves metabolic markers comprehensively: blood glucose control, lipid profiles, blood pressure, and cardiovascular risk markers all improve significantly. For the physique athlete seeking dramatic body recomposition, Retatrutide creates the caloric deficit and metabolic environment that makes extreme transformations achievable.`,
    benefits: [
      'Triple receptor activation (GLP-1/GIP/glucagon) for maximum fat loss',
      'Most potent weight loss outcomes documented among peptide compounds',
      'Powerful appetite suppression through central GLP-1 signaling',
      'Thermogenic glucagon activation burns additional calories',
      'Preserves lean muscle mass during significant caloric restriction',
      'Improves blood glucose control and insulin sensitivity',
      'Reduces cardiovascular risk markers significantly',
      'Progressive, sustainable weight loss without metabolic adaptation',
    ],
    protocol: '1–4mg subcutaneous injection, once weekly. Start at 1mg weekly and titrate up over 4–8 weeks based on response and tolerance. Combine with high-protein nutrition to preserve lean mass. Cycles of 3–6+ months.',
    synergies: ['Cagrilintide', 'AOD-9604', '5-Amino-1MQ'],
  },

  {
    slug: 'tirzepatide',
    name: 'Tirzepatide',
    tagline: 'The Dual GIP/GLP-1 Agonist — Elite Metabolic Control',
    price: 'From $89',
    category: 'Weight Management',
    tags: ['Weight Loss', 'GLP-1', 'GIP', 'Blood Sugar', 'Metabolic Health'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/TIRZEPTIDE-5mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'The dual GIP/GLP-1 receptor agonist with proven clinical results for weight management and metabolic health optimization — superior fat loss with muscle preservation.',
    fullDescription: `Tirzepatide is a novel dual agonist of both GLP-1 (glucagon-like peptide-1) and GIP (glucose-dependent insulinotropic polypeptide) receptors — two complementary incretin hormones that together regulate appetite, glucose metabolism, and fat storage with far greater precision than either receptor alone.

The GLP-1 component reduces appetite centrally, slows gastric emptying, and improves insulin secretion — mechanisms that create significant and sustained caloric deficit without willpower-dependent restriction. The GIP component amplifies these effects through a distinct pathway: GIP receptors in adipose tissue improve fat utilization and reduce fat storage, while central GIP signaling adds to the appetite-suppressant effects.

Clinical trials of Tirzepatide documented weight reductions of 15–22% of body weight over 72 weeks — outcomes that surpassed those of any previous GLP-1 agonist and established a new benchmark for pharmacological weight management. Crucially, the weight lost in these studies was predominantly fat, with lean mass well preserved due to the insulin-sensitizing effects.

For physique optimization, Tirzepatide addresses the metabolic component of body transformation: it creates the caloric deficit, improves insulin sensitivity, and enhances fat mobilization that enable the dramatic body recomposition that training and nutrition alone often cannot achieve for those with metabolic resistance.`,
    benefits: [
      'Dual GIP/GLP-1 activation for superior fat loss vs. single agonists',
      'Clinically demonstrated 15–22% body weight reduction over 72 weeks',
      'Powerful appetite suppression through complementary central mechanisms',
      'Dramatically improves insulin sensitivity and glucose metabolism',
      'Preserves lean muscle mass during significant weight loss',
      'Reduces visceral fat — the most metabolically harmful fat depot',
      'Improves lipid profiles, blood pressure, and cardiovascular markers',
      'Once-weekly injection for practical long-term adherence',
    ],
    protocol: '2.5–15mg subcutaneous injection, once weekly. Titrate upward by 2.5mg every 4 weeks based on tolerance. Start at lowest dose to minimize GI side effects. Maintain high protein intake to preserve lean mass.',
    synergies: ['Retatrutide', 'AOD-9604', 'BPC-157'],
  },

  {
    slug: 'mazdutide',
    name: 'Mazdutide',
    tagline: 'The GLP-1/Glucagon Dual Agonist — Fat Loss & Metabolic Reset',
    price: 'From $99',
    category: 'Weight Management',
    tags: ['Weight Loss', 'GLP-1', 'Glucagon', 'Metabolic Health', 'Appetite Control'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2025/10/Mazdutide-5mg-1-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'New',
    shortDescription: 'A GLP-1/glucagon dual receptor agonist combining powerful appetite control with thermogenic fat burning — sustainable weight loss through dual metabolic activation.',
    fullDescription: `Mazdutide is a dual GLP-1 and glucagon receptor co-agonist that combines the appetite-suppressing power of GLP-1 signaling with the thermogenic and fat-oxidizing effects of glucagon receptor activation. This combination addresses two fundamental challenges of weight management simultaneously: reducing caloric intake through appetite suppression while increasing caloric expenditure through metabolic activation.

The GLP-1 receptor component of Mazdutide reduces appetite through central signaling in the hypothalamus and brainstem, slows gastric emptying for prolonged satiety, and improves insulin sensitivity. The glucagon receptor component adds a thermogenic dimension that pure GLP-1 agonists lack — glucagon activates brown adipose tissue, increases metabolic rate, and promotes hepatic fat oxidation, creating a dual mechanism that addresses both sides of the energy balance equation.

This dual mechanism is particularly valuable for individuals with metabolic adaptation — those whose bodies have adjusted to caloric restriction by lowering metabolic rate. Mazdutide's glucagon component prevents this metabolic slowdown, maintaining elevated energy expenditure even as intake is reduced.

The net effect is sustainable fat loss that preserves lean mass, improves metabolic health markers, and creates lasting changes in body composition rather than transient weight reduction that reverses when the compound is discontinued.`,
    benefits: [
      'Dual GLP-1/glucagon activation for comprehensive metabolic optimization',
      'Powerful central appetite suppression through GLP-1 signaling',
      'Thermogenic glucagon receptor activation increases metabolic rate',
      'Prevents metabolic adaptation during caloric restriction',
      'Promotes hepatic fat oxidation for liver health improvement',
      'Preserves lean muscle mass during fat loss',
      'Improves insulin sensitivity and glucose metabolism',
      'Sustainable fat loss without the metabolic slowdown of restriction alone',
    ],
    protocol: '1–5mg subcutaneous injection, once weekly. Titrate upward from lowest effective dose every 4 weeks. Combine with resistance training and adequate protein intake to preserve lean mass throughout the protocol.',
    synergies: ['Retatrutide', 'Tirzepatide', 'AOD-9604'],
  },

  {
    slug: 'cagrilintide',
    name: 'Cagrilintide',
    tagline: 'The Amylin Analogue — Appetite & Metabolic Efficiency',
    price: 'From $89',
    category: 'Weight Management',
    tags: ['Weight Loss', 'Appetite Control', 'Amylin', 'Metabolic Health', 'Satiety'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2025/10/Cagrilintide-5mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'A long-acting amylin analogue that regulates appetite and metabolic efficiency through a completely different pathway than GLP-1 agonists — powerful standalone or combination therapy.',
    fullDescription: `Cagrilintide is a long-acting synthetic analogue of amylin — a peptide hormone co-secreted with insulin from pancreatic beta cells that plays a critical role in regulating appetite, gastric emptying, and postprandial blood glucose. As an amylin receptor agonist, Cagrilintide activates a completely different metabolic pathway than GLP-1 agonists, making it a highly synergistic companion to GLP-1-based protocols.

The amylin pathway's effects are distinct and complementary: amylin acts centrally in the area postrema and hypothalamus to reduce food intake and body weight, slows gastric emptying independently of GLP-1 mechanisms, and improves postprandial blood glucose through direct glucagon suppression (glucagon promotes glucose release — amylin inhibits this effect after meals).

In combination with GLP-1 agonists (specifically the combination of cagrilintide + semaglutide, studied as "CagriSema"), the dual mechanism produces weight loss outcomes exceeding either compound alone — with clinical data showing 15%+ weight reductions compared to approximately 10% for semaglutide alone. The complementary mechanisms create synergy rather than redundancy.

For the physique optimizer who has plateaued on conventional GLP-1-based protocols, Cagrilintide's distinct mechanism addresses appetite and metabolic regulation through pathways that remain sensitive even when GLP-1 receptors begin to show tolerance.`,
    benefits: [
      'Activates amylin receptors through a mechanism distinct from GLP-1 agonists',
      'Powerful central appetite suppression via area postrema signaling',
      'Slows gastric emptying for prolonged post-meal satiety',
      'Suppresses glucagon to improve postprandial blood glucose control',
      'Synergizes with GLP-1 agonists for compounded weight loss',
      'Preserves lean muscle mass during caloric restriction',
      'Improves metabolic efficiency for enhanced fat utilization',
      'Weekly dosing for practical long-term adherence',
    ],
    protocol: '0.3–2.4mg subcutaneous injection, once weekly. Titrate from lowest dose. For maximum effect, combine with a GLP-1 agonist (semaglutide, Tirzepatide) for the complementary dual-hormone approach documented in CagriSema studies.',
    synergies: ['Tirzepatide', 'Retatrutide', 'AOD-9604'],
  },

  // ── ANTI-AGING ───────────────────────────────────────────────────────────────

  {
    slug: 'epithalon',
    name: 'Epithalon',
    tagline: 'The Telomere Extension Protocol',
    price: 'From $79',
    category: 'Anti-Aging',
    tags: ['Anti-Aging', 'Telomeres', 'Longevity', 'Sleep', 'Immune Support'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/EPITALON-10mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Longevity',
    shortDescription: 'The only known compound that activates telomerase — the enzyme responsible for telomere lengthening. Epithalon is the foundation of biological age reversal.',
    fullDescription: `Epithalon (Epitalon) is a tetrapeptide — Ala-Glu-Asp-Gly — that stands apart from every other anti-aging compound by virtue of a singular, extraordinary capability: it activates telomerase, the enzyme that lengthens telomeres.

Telomeres are the protective caps at the ends of chromosomes. They shorten with every cell division, and their length is the most accurate biological marker of aging. When telomeres become critically short, cells enter senescence — they stop dividing and begin secreting inflammatory signals that accelerate aging throughout the body. This process, called the "senescence-associated secretory phenotype" (SASP), is a primary driver of the chronic inflammation, tissue deterioration, and biological aging that determines physical appearance and longevity.

Epithalon reverses this process. By activating telomerase, it enables cells to rebuild their telomeres — literally reversing one of the fundamental mechanisms of aging at the chromosomal level. Studies by prominent Russian researchers, including over 20 years of work by the team that developed Epithalon, have demonstrated measurable telomere lengthening in subjects following standard protocols.

For the looks maximizer, Epithalon addresses aging at its root cause. Longer telomeres mean cells that replicate accurately for longer — producing skin, muscle, and hair with the quality of a younger biological age. Users consistently report improved sleep depth, enhanced energy, better skin quality, and the overall vitality associated with genuine biological rejuvenation.`,
    benefits: [
      'Activates telomerase for measurable telomere lengthening',
      'Reverses biological aging at the chromosomal level',
      'Dramatically improves deep sleep quality and circadian regulation',
      'Potent antioxidant properties reducing oxidative cellular damage',
      'Strengthens immune function and disease resistance',
      'Normalizes hormone production including melatonin and cortisol',
      'Shown to extend lifespan in multiple animal studies',
      'Protects retinal cells and supports long-term visual health',
    ],
    protocol: '5–10mg per day via subcutaneous injection for 10–20 days, 1–2 times per year. The standard protocol is 10 days at 5mg daily, repeated 1–2x annually. Often combined with GHK-Cu for comprehensive anti-aging.',
    synergies: ['GHK-Cu', 'BPC-157', 'Thymosin Alpha-1'],
  },

  {
    slug: 'mots-c',
    name: 'MOTS-c',
    tagline: 'The Mitochondrial Optimization Protocol',
    price: 'From $89',
    category: 'Anti-Aging',
    tags: ['Mitochondria', 'Metabolic Health', 'Fat Loss', 'Longevity', 'AMPK'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/EPITALON-10mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Cutting Edge',
    shortDescription: 'A mitochondrial-derived peptide that activates AMPK pathways, improves metabolic flexibility, and extends cellular health span at the deepest mitochondrial level.',
    fullDescription: `MOTS-c is a mitochondrial-derived peptide — encoded not in nuclear DNA but in the mitochondrial genome itself — that acts as a metabolic regulator with profound effects on cellular energy metabolism, fat utilization, insulin sensitivity, and biological aging.

Its primary mechanism is activation of AMPK (AMP-activated protein kinase) — the master metabolic switch that promotes fat burning, improves insulin sensitivity, enhances mitochondrial biogenesis, and activates autophagy (cellular clean-up and recycling). These are the same pathways activated by caloric restriction, intermittent fasting, and intense aerobic exercise — but MOTS-c does this directly at the cellular level without requiring the physiological stress.

The implications for body composition are significant and multi-directional. MOTS-c improves the body's ability to use fat as fuel (metabolic flexibility), directly supporting leanness and energy stability. It improves insulin sensitivity, reducing the fat storage and energy dysregulation associated with insulin resistance. It activates the cellular maintenance programs that extend health span and slow biological aging.

MOTS-c also exhibits profound muscle-protective effects, preventing the age-related muscle loss (sarcopenia) that compromises physical appearance and function over time. Exercise performance data shows MOTS-c supplementation improving endurance capacity significantly through its mitochondrial enhancement effects.

As a mitochondrially-encoded peptide, MOTS-c represents a new class of biological signaling compounds — ones that communicate the energetic state of the mitochondria to the rest of the cell, orchestrating a comprehensive adaptive response that optimizes cellular function at the foundational energy level.`,
    benefits: [
      'Activates AMPK — the master metabolic optimization switch',
      'Improves metabolic flexibility between fat and glucose fuel utilization',
      'Enhances insulin sensitivity and glucose uptake at the cellular level',
      'Supports mitochondrial biogenesis and cellular energy production',
      'Promotes autophagy for cellular clean-up and renewal',
      'Protects against age-related muscle loss (sarcopenia)',
      'Significant anti-inflammatory effects reducing metabolic inflammation',
      'Exercise performance enhancement through mitochondrial amplification',
    ],
    protocol: '5–10mg subcutaneous injection, 3–5x weekly. Best used as part of a comprehensive anti-aging protocol alongside training. Often combined with Epithalon for synergistic longevity benefits that address both telomere length and mitochondrial function.',
    synergies: ['Epithalon', 'AICAR', 'Ipamorelin'],
  },

  {
    slug: 'aicar',
    name: 'AICAR',
    tagline: 'The Exercise Mimetic — Metabolic Transformation Without Limits',
    price: 'From $69',
    category: 'Anti-Aging',
    tags: ['AMPK', 'Endurance', 'Metabolic Health', 'Fat Loss', 'Exercise Mimetic'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/image_2024_09_14T03_02_18_646Z.png',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'AICAR activates AMPK with extraordinary potency — the metabolic pathway of aerobic exercise. It improves endurance, accelerates fat loss, and enhances mitochondrial health at the cellular level.',
    fullDescription: `AICAR (5-Aminoimidazole-4-carboxamide ribonucleoside) is a compound that directly activates AMPK by mimicking the cellular energy depletion signal that exercise produces. Where MOTS-c activates AMPK through mitochondrial signaling, AICAR activates it through direct nucleotide metabolism — producing some of the most potent AMPK activation achievable pharmacologically.

The AMPK pathway is often called the "exercise switch" because physical activity is its primary natural activator. When AMPK is activated, it initiates a coordinated cellular response: fatty acids are mobilized and oxidized for energy, glucose uptake improves, mitochondria increase in number and efficiency, and protein synthesis prioritizes lean tissue over fat storage. AICAR recreates this entire metabolic program.

Animal studies with AICAR demonstrated extraordinary results: sedentary mice treated with AICAR increased their running endurance by 44% and showed significant increases in muscle fiber composition toward the slow-twitch, endurance-adapted type — without any exercise. These findings established AICAR as the original "exercise in a bottle" compound and drove its adoption in biohacking and performance optimization communities.

For the physique-focused individual, AICAR's metabolic effects translate to improved fat oxidation during both exercise and rest, enhanced cardiovascular efficiency, and better metabolic health markers. Combined with MOTS-c, the two compounds create complementary AMPK activation that comprehensively optimizes cellular metabolism for body composition and longevity.`,
    benefits: [
      'Direct and potent AMPK activation — the metabolic pathway of exercise',
      'Increases endurance capacity by up to 44% in preclinical studies',
      'Enhances mitochondrial biogenesis — more mitochondria per cell',
      'Accelerates fat oxidation during rest and exercise',
      'Improves insulin sensitivity and glucose metabolism',
      'Promotes muscle fiber adaptation toward endurance type',
      'Cardiovascular health improvements through AMPK-mediated signaling',
      'Anti-aging effects through metabolic and mitochondrial optimization',
    ],
    protocol: '500mg–1g subcutaneous injection, 3–5x weekly. Best used in combination with regular exercise to amplify training adaptations. Can be stacked with MOTS-c for comprehensive AMPK-based metabolic optimization.',
    synergies: ['MOTS-c', 'Epithalon', 'Ipamorelin'],
  },

  // ── COGNITIVE PERFORMANCE ───────────────────────────────────────────────────

  {
    slug: 'semax',
    name: 'Semax',
    tagline: 'The Neural Performance Optimizer',
    price: 'From $59',
    category: 'Cognitive Performance',
    tags: ['Nootropic', 'Focus', 'Memory', 'Neuroprotection', 'BDNF'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/SEMAX-10mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'A synthetic ACTH analogue that enhances BDNF, elevates mental performance, and provides neuroprotection. Semax is the foundation of cognitive looks maxing.',
    fullDescription: `Semax is a heptapeptide derived from the adrenocorticotropic hormone (ACTH) fragment that has been extensively developed for cognitive enhancement and neuroprotection. Originally developed in Russia and widely used in clinical neurology settings there for decades, it has earned a global reputation as one of the most effective nootropic peptides available.

The mechanism behind Semax's cognitive effects is multi-layered and uniquely powerful. Most critically, it dramatically increases BDNF (Brain-Derived Neurotrophic Factor) — the primary growth factor for neurons. BDNF is essential for neuroplasticity (the brain's ability to form new connections), memory consolidation, learning, and the maintenance of existing neural circuits. Low BDNF is associated with cognitive decline, depression, reduced mental performance, and accelerated neurological aging.

Semax also modulates dopaminergic and serotonergic systems, producing clean, non-stimulant mental clarity and focus without the anxiety, cardiovascular effects, or crash associated with conventional stimulants like caffeine and amphetamine-class compounds. Users consistently report enhanced working memory, faster cognitive processing speed, improved verbal fluency, and a notable reduction in mental fatigue during demanding cognitive work.

For the looks maxer focused on comprehensive optimization, cognitive performance is a force multiplier for everything else. The mental sharpness, confidence, and social presence that Semax enables are themselves components of peak physical attractiveness — the difference between a body that gets noticed and a person who commands rooms.`,
    benefits: [
      'Dramatically increases BDNF for enhanced neuroplasticity and learning',
      'Improves working memory, recall speed, and cognitive processing',
      'Clean, non-stimulant focus enhancement without crash or dependency',
      'Neuroprotective against oxidative damage and ischemic stress',
      'Reduces mental fatigue and cognitive burnout during demanding work',
      'Improves mood via serotonergic and dopaminergic system modulation',
      'Enhances learning capacity and long-term information retention',
      'Supports recovery from neurological stress, overwork, and burnout',
    ],
    protocol: '200–600mcg intranasally (preferred) or subcutaneously, 1–2x daily. Intranasal route via nasal applicator provides rapid onset (15–30 minutes). Cycles of 2–4 weeks on, 1–2 weeks off. Stack with Selank for comprehensive cognitive and mood optimization.',
    synergies: ['Selank', 'Epithalon', 'BPC-157'],
  },

  {
    slug: 'selank',
    name: 'Selank',
    tagline: 'The Anxiolytic Performance Enhancer',
    price: 'From $55',
    category: 'Cognitive Performance',
    tags: ['Anti-Anxiety', 'Cognitive', 'Mood', 'Sleep', 'Confidence'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/SELANK-5mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'A tuftsin-derived peptide that eliminates anxiety without sedation, enhancing cognitive performance, mood stability, and social confidence simultaneously.',
    fullDescription: `Selank is a synthetic analogue of the immunomodulatory peptide tuftsin, developed by the Institute of Molecular Genetics in Moscow. Its most remarkable property is its ability to provide profound anxiolytic (anti-anxiety) effects without the sedation, cognitive blunting, dependency, or withdrawal associated with conventional anxiolytic medications.

The mechanism involves multi-level modulation: enhancement of GABA transmission for immediate anxiolytic effects, regulation of serotonin and dopamine metabolism for mood stabilization, and modulation of enkephalins — natural opioid peptides involved in stress regulation and emotional processing. This multi-pathway approach creates a state of calm alertness that is both cognitively optimal and emotionally balanced — genuinely functional.

For looks maximization, anxiety is a hidden saboteur that operates on multiple levels. Physiologically, chronic stress and anxiety elevate cortisol, which directly promotes abdominal fat storage, suppresses testosterone production, impairs sleep architecture, and accelerates collagen degradation. Behaviorally, anxiety manifests as reduced social presence, poor eye contact, defensive body language, and diminished personal magnetism — all components of physical attractiveness that extend beyond purely structural features.

Selank addresses both dimensions comprehensively. Users report feeling socially confident, present, and relaxed without the emotional numbness of pharmaceutical anxiolytics, with simultaneous improvements in sleep quality, immune function, and cognitive performance. The combination of Semax and Selank is considered the gold standard nootropic peptide stack.`,
    benefits: [
      'Powerful anxiolytic effects without sedation, dependency, or withdrawal',
      'Enhances social confidence, presence, and interpersonal magnetism',
      'Reduces cortisol-driven stress that impairs body composition goals',
      'Improves cognitive function, working memory, and focus',
      'Stabilizes mood without the emotional blunting of pharmaceuticals',
      'Enhances immune system function through tuftsin receptor activation',
      'Improves sleep onset speed and overall sleep quality',
      'Neuroprotective and BDNF-modulating properties for long-term brain health',
    ],
    protocol: '250–500mcg intranasally or subcutaneously, 1–2x daily. Best used before high-stress situations or as a daily optimization tool for consistent anxiety management. Combines synergistically with Semax for comprehensive neuro enhancement.',
    synergies: ['Semax', 'DSIP', 'BPC-157'],
  },

  {
    slug: 'selank-semax',
    name: 'Selank + Semax',
    tagline: 'The Ultimate Nootropic Stack — Combo Vial',
    price: 'From $79',
    category: 'Cognitive Performance',
    tags: ['Nootropic', 'Combo', 'Focus', 'Anti-Anxiety', 'BDNF', 'Cognitive'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/SELANK-5mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Top Stack',
    shortDescription: 'The gold standard cognitive optimization stack — Selank and Semax combined in one vial for the sharp-but-calm mental state that represents peak cognitive performance.',
    fullDescription: `The Selank + Semax combination is universally recognized as the gold standard nootropic peptide stack — two compounds with perfectly complementary mechanisms that, together, produce a cognitive state that neither achieves alone: sharp, fast, and clear-minded while simultaneously calm, socially confident, and free from anxiety.

Semax contributes the cognitive performance dimension: elevated BDNF for neuroplasticity, enhanced working memory and processing speed, improved focus and mental stamina. Selank contributes the emotional performance dimension: anxiety elimination without sedation, mood stabilization, social confidence, and the calm that allows full cognitive capacity to deploy without stress-induced interference.

The practical effect is a mental state that professionals, athletes, performers, and looks maxers consistently describe as "being in their best version" — sharp thinking, quick responses, social ease, physical presence, and complete absence of the mental friction that normally limits performance in demanding situations.

In pre-mixed combo vial format, the two compounds are administered simultaneously in a single injection or intranasal dose, simplifying the protocol while ensuring the complementary effects engage together for the full synergistic outcome.`,
    benefits: [
      'Combined BDNF elevation and anxiety reduction in a single dose',
      'Sharp cognitive performance with complete absence of anxious interference',
      'Enhanced social confidence, charisma, and interpersonal presence',
      'Improved working memory, processing speed, and mental stamina',
      'Mood stabilization without emotional blunting',
      'Neuroprotective effects from both compounds simultaneously',
      'Single vial convenience — no separate dosing required',
      'The most comprehensive cognitive optimization protocol available',
    ],
    protocol: '250–500mcg of each compound intranasally or subcutaneously, 1–2x daily. Intranasal administration via nasal applicator provides fastest onset (15–20 minutes). Cycles of 3–4 weeks on, 1–2 weeks off.',
    synergies: ['DSIP', 'Epithalon', 'BPC-157'],
  },

  {
    slug: 'dsip',
    name: 'DSIP',
    tagline: 'The Sleep Architecture Optimizer',
    price: 'From $49',
    category: 'Cognitive Performance',
    tags: ['Sleep', 'Recovery', 'Anti-Aging', 'Cortisol', 'Deep Sleep'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/SELANK-5mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'Delta Sleep Inducing Peptide — the endogenous compound that engineers deep, restorative sleep. DSIP transforms sleep into your most powerful looks maxing protocol.',
    fullDescription: `DSIP (Delta Sleep Inducing Peptide) is a nonapeptide that the brain naturally produces to regulate sleep architecture, specifically to induce and maintain delta wave (deep) sleep — the sleep stage where growth hormone is released, cellular repair occurs, memory consolidation happens, and the biological processes of physical restoration are most active.

Sleep quality is the single most underestimated variable in looks maximization. Every hormonal optimization, every training session, every nutritional protocol is processed and amplified during sleep. Poor sleep architecture — particularly insufficient deep sleep — creates a cascade of negative effects: reduced GH release, elevated cortisol, impaired muscle protein synthesis, accelerated collagen degradation, and diminished cognitive function.

DSIP addresses this directly by engineering the deep sleep architecture that the modern lifestyle chronically disrupts. Beyond sleep induction, DSIP exhibits remarkable stress-buffering effects, normalizing cortisol patterns and reducing the allostatic load that chronic stress places on the body. Cortisol is the enemy of every looks maxing goal — it promotes fat storage, catabolizes muscle, impairs collagen synthesis, and accelerates skin aging.

Users consistently report falling asleep faster, achieving deeper sleep with more vivid dreams (indicating enhanced REM), waking significantly more refreshed, and noticing progressive improvements in body composition, skin quality, and recovery over weeks of consistent use. As an endogenous peptide, DSIP has an extraordinary safety profile — it restores the sleep architecture the body was designed to have.`,
    benefits: [
      'Induces and maintains deep delta wave sleep for maximum overnight repair',
      'Dramatically improves sleep onset — falls asleep faster and more easily',
      'Enhances GH release during sleep for overnight recovery and regeneration',
      'Normalizes cortisol patterns and reduces the damage of chronic stress',
      'Improves morning cognitive clarity, alertness, and mental performance',
      'Potent antioxidant and neuroprotective properties',
      'Non-habit forming with no next-day grogginess or sedation',
      'Restores natural sleep architecture without pharmaceutical intervention',
    ],
    protocol: '100–200mcg subcutaneous injection 30–60 minutes before sleep. Can be used nightly or 3–5x weekly for sleep optimization. Combines powerfully with Ipamorelin for maximum overnight recovery — DSIP ensures the deep sleep during which Ipamorelin\'s GH pulse is most effective.',
    synergies: ['Ipamorelin', 'Selank', 'MK-677'],
  },

  {
    slug: 'cerebrolysin',
    name: 'Cerebrolysin',
    tagline: 'The Neuropeptide Infusion — Advanced Brain Optimization',
    price: 'From $89',
    category: 'Cognitive Performance',
    tags: ['Neuroprotection', 'BDNF', 'NGF', 'Cognitive', 'Brain Health', 'Neurotrophic'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/11/CEREBROLYSIN-60mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    badge: 'Advanced',
    shortDescription: 'A concentrate of neurotrophic neuropeptides that promotes neuronal growth, repair, and protection. Cerebrolysin is the most comprehensive brain optimization protocol available.',
    fullDescription: `Cerebrolysin is a unique neuropeptide preparation derived from porcine brain tissue, containing a complex mixture of low-molecular-weight peptides and amino acids that have been extensively studied for their neurotrophic and neuroprotective properties. Unlike single-compound peptides, Cerebrolysin delivers a blend of multiple brain-active peptides simultaneously — mimicking the complex neurotrophic factor environment of the brain itself.

The neurotrophic effects of Cerebrolysin are multi-dimensional. It elevates BDNF, NGF (Nerve Growth Factor), NT-3, and NT-4 — the full spectrum of neurotrophic factors responsible for neuronal survival, growth, and plasticity. This comprehensive neurotrophic support distinguishes Cerebrolysin from single-peptide nootropics: it addresses brain health from every angle simultaneously.

Clinical applications have included stroke recovery, traumatic brain injury rehabilitation, Alzheimer's disease, and vascular dementia — the highest-stakes neurological conditions where the need for neuroprotection and neural regeneration is most acute. The same mechanisms that provide therapeutic benefit in these conditions provide optimization benefits in healthy individuals: enhanced neuroplasticity, improved memory formation and recall, faster information processing, and protection against the neurological stress of modern life.

For the comprehensive looks maximizer who recognizes that cognitive performance and mental presence are as much a part of physical optimization as body composition, Cerebrolysin provides a uniquely deep level of neural enhancement that single nootropics cannot match.`,
    benefits: [
      'Delivers the full spectrum of neurotrophic factors (BDNF, NGF, NT-3, NT-4)',
      'Promotes neuronal growth, repair, and synaptic plasticity',
      'Enhances memory formation, consolidation, and recall',
      'Provides comprehensive neuroprotection against oxidative stress',
      'Reduces neuroinflammation for improved brain function',
      'Supports recovery from cognitive stress, overwork, and burnout',
      'Improves attention, processing speed, and executive function',
      'Clinically studied in the most demanding neurological conditions',
    ],
    protocol: '5–30mg intramuscular or intravenous injection, 5–10 days in a cycle, 2–4x per year. Lower doses (5–10mg) via IM injection for general cognitive optimization. Higher dose IV protocols for advanced neurological support.',
    synergies: ['Semax', 'Selank', 'Epithalon'],
  },

  // ── IMMUNE & VITALITY ────────────────────────────────────────────────────────

  {
    slug: 'thymosin-alpha-1',
    name: 'Thymosin Alpha-1',
    tagline: 'The Immune System Elite Protocol',
    price: 'From $79',
    category: 'Immune & Vitality',
    tags: ['Immune Support', 'Antiviral', 'Longevity', 'Anti-Aging', 'T-cells'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/BPC-157-2mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'The thymus-derived peptide that engineers an elite immune system. Thymosin Alpha-1 is used by longevity practitioners and elite performers worldwide for immune optimization.',
    fullDescription: `Thymosin Alpha-1 (Tα1) is a 28 amino acid peptide naturally produced by the thymus gland — the master organ of immune development and T-cell maturation. As we age, the thymus atrophies progressively after puberty, and Tα1 production declines — directly contributing to the immune deterioration associated with aging and the reduced capacity to fight infections, cancer cells, and inflammatory dysregulation.

Supplementing with Tα1 restores this thymic signaling, producing effects that span the full spectrum of immune function. It enhances T-helper cell activity, increases natural killer (NK) cell cytotoxicity, upregulates interferon production, and improves the overall coordination of innate and adaptive immunity. The result is an immune system that functions with the efficiency of a younger, fully active thymus.

For the high-performance individual, a suboptimal immune system is a constant drag on progress and appearance. Illness interrupts training cycles and derails protocols. Chronic low-grade inflammation from immune dysregulation impairs recovery, promotes fat storage, accelerates cellular aging, and degrades skin quality. Thymosin Alpha-1 addresses all of these factors by optimizing the immune system at its source.

Tα1 is the most clinically validated immune peptide available — approved as a pharmaceutical in 37 countries for hepatitis, immune deficiency, and cancer support. This clinical validation provides a depth of safety and efficacy data unmatched by experimental immune compounds.`,
    benefits: [
      'Significantly enhances T-helper cell production and activation',
      'Improves natural killer cell cytotoxicity against pathogens and cancer cells',
      'Reduces frequency and severity of illness and infection',
      'Balances inflammatory response for optimal recovery and health',
      'Powerful antioxidant properties protecting cellular integrity',
      'Anti-aging effects via thymic regeneration and T-cell renewal',
      'Improves vaccine response and immune challenge outcomes',
      'FDA-investigated and approved in 37 countries as a pharmaceutical',
    ],
    protocol: '1.6mg subcutaneous injection, 2–3x weekly. Cycles of 4–8 weeks with rest periods. Often combined with Epithalon for comprehensive longevity protocols addressing both immune function and cellular aging.',
    synergies: ['Epithalon', 'BPC-157', 'GHK-Cu'],
  },

  {
    slug: 'thymulin',
    name: 'Thymulin',
    tagline: 'The Thymus Restoration Protocol — Immune Architecture Reset',
    price: 'From $65',
    category: 'Immune & Vitality',
    tags: ['Immune Support', 'Thymus', 'Anti-Inflammatory', 'Autoimmune', 'Longevity'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/THYMULIN-10mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'A thymic nonapeptide that regulates immune architecture, reduces autoimmune activity, and restores the T-cell function that declines with thymus atrophy.',
    fullDescription: `Thymulin is a zinc-dependent nonapeptide produced exclusively by the thymic epithelium — the structural cells of the thymus that create the environment where T-cells mature and develop immune self-tolerance. It is the most specific thymic signal available: its production depends on an active, functioning thymus, and it directly instructs T-cells in immune regulation and self/non-self distinction.

The primary role of Thymulin in immune function is T-cell differentiation and regulation — particularly the development of regulatory T-cells (Tregs) that prevent autoimmune responses. Where Thymosin Alpha-1 primarily activates immune function, Thymulin additionally modulates it — ensuring immune responses are appropriately targeted and that self-tolerance is maintained.

This regulatory dimension makes Thymulin particularly valuable for those dealing with autoimmune conditions, chronic inflammation, or the immune dysregulation common with aging. The thymus atrophies significantly with age, reducing Thymulin production and allowing immune regulation to deteriorate — leading to the increased autoimmune activity, chronic inflammation, and reduced infection resistance that characterize immune aging.

The anti-inflammatory properties of Thymulin extend beyond immune regulation. It directly inhibits pro-inflammatory cytokine production (TNF-α, IL-1β, IL-6), reduces inflammatory pain signaling, and promotes tissue repair in inflamed tissue — benefits that directly support body composition, recovery, and the reduction of inflammation-driven aging.`,
    benefits: [
      'Regulates T-cell differentiation and immune tolerance mechanisms',
      'Reduces autoimmune activity through regulatory T-cell enhancement',
      'Powerful anti-inflammatory effects reducing chronic systemic inflammation',
      'Restores immune function that declines with thymus atrophy and aging',
      'Inhibits pro-inflammatory cytokines (TNF-α, IL-1β) directly',
      'Improves infection resistance through coordinated immune activation',
      'Supports tissue repair in chronically inflamed tissue',
      'Synergizes with Thymosin Alpha-1 for comprehensive immune optimization',
    ],
    protocol: '1–5mg subcutaneous injection, 2–3x weekly. Cycles of 4–8 weeks. Often combined with Thymosin Alpha-1 for complementary immune activation and regulation, or with Epithalon for comprehensive immune aging reversal.',
    synergies: ['Thymosin Alpha-1', 'Epithalon', 'BPC-157'],
  },

  // ── PERFORMANCE & VITALITY ───────────────────────────────────────────────────

  {
    slug: 'pt-141',
    name: 'PT-141',
    tagline: 'The Central Desire Activator',
    price: 'From $59',
    category: 'Performance & Vitality',
    tags: ['Libido', 'Sexual Health', 'Confidence', 'Performance', 'CNS'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/PT141-10mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'PT-141 works directly on the central nervous system to ignite desire, confidence, and sexual performance — through a completely different pathway than any other compound.',
    fullDescription: `PT-141 (Bremelanotide) is a melanocortin agonist that achieves what no other compound can: it activates sexual desire through the central nervous system, not through vascular mechanisms. This fundamental difference makes it effective for both men and women and addresses desire at its neurological root rather than its peripheral expression.

While conventional approaches work peripherally (increasing blood flow to genital tissue), PT-141 activates MC3R and MC4R receptors in the hypothalamus and limbic system — the brain regions that govern desire, motivation, and arousal. The result is genuine, centrally-mediated enhancement of libido and sexual function that works regardless of peripheral vascular status, hormonal levels, or psychological state.

For looks maximization, sexual confidence and vitality are often the missing variable that separates physical attractiveness from genuine magnetic presence. PT-141 addresses this directly, with users reporting dramatically enhanced desire, arousal intensity, and performance. The compound's effects are qualitatively different from peripheral compounds — the desire itself is genuine, not just facilitated.

PT-141 also has significant mood-elevating effects via its dopaminergic actions, contributing to the overall confidence, social presence, and personal magnetism that defines elite-level human attraction. Users consistently report feeling more socially energized, confident, and physically present in the hours following administration.

The FDA has approved bremelanotide (PT-141) for hypoactive sexual desire disorder in premenopausal women, providing clinical validation of its mechanism and safety profile.`,
    benefits: [
      'Centrally mediated libido enhancement for both men and women via CNS',
      'Activates genuine desire and arousal through hypothalamic melanocortin receptors',
      'Effective independent of hormonal status or peripheral vascular function',
      'Long-lasting effects (6–72 hours depending on individual response)',
      'Mood elevation and confidence enhancement via dopaminergic activation',
      'Enhances social presence and personal magnetism',
      'Works synergistically with Melanotan 2 for combined melanocortin benefits',
      'FDA-approved mechanism — validated in human clinical trials',
    ],
    protocol: '1–2mg subcutaneous injection 1–2 hours before desired activity. Start with 0.5mg to assess individual response. Effects onset 30–60 minutes, lasting 6–24 hours. Do not dose more than once per 72 hours.',
    synergies: ['Melanotan 2', 'Kisspeptin-10', 'BPC-157'],
  },

  {
    slug: 'kisspeptin-10',
    name: 'Kisspeptin-10',
    tagline: 'The Hormonal Cascade Initiator — Master Reproductive Signal',
    price: 'From $65',
    category: 'Performance & Vitality',
    tags: ['Testosterone', 'Libido', 'Fertility', 'Hormonal Health', 'LH', 'FSH'],
    image: 'https://pantheonpeptides.com/wp-content/uploads/2024/09/KISSPEPTINE-5mg-scaled.jpg',
    affiliateUrl: AFFILIATE_BASE,
    shortDescription: 'Kisspeptin-10 activates the master hormonal cascade controlling testosterone, LH, FSH, and libido. The foundational signal for complete male and female hormonal optimization.',
    fullDescription: `Kisspeptin-10 is a truncated form of Kisspeptin — the neuropeptide that serves as the master regulator of the hypothalamic-pituitary-gonadal (HPG) axis. It operates at the very top of the reproductive hormonal cascade: Kisspeptin signals the hypothalamus to release GnRH (Gonadotropin-releasing hormone), which in turn triggers the pituitary to produce LH (Luteinizing Hormone) and FSH (Follicle-Stimulating Hormone), which then stimulate the gonads to produce testosterone and other sex hormones.

This upstream position in the hormonal cascade makes Kisspeptin-10 fundamentally different from approaches that target lower in the pathway. Rather than directly supplementing testosterone (which suppresses the entire upstream cascade) or targeting LH/FSH specifically, Kisspeptin-10 activates the body's own hormonal production machinery from the top — supporting the entire physiological axis.

For men, optimized Kisspeptin-10 signaling means improved testosterone production through natural pathways, enhanced libido, and maintained hormonal function during periods of stress, intensive training, or other HPG-axis suppression. For women, Kisspeptin regulates menstrual cycle regularity, fertility, and the hormonal environment that governs energy, mood, skin quality, and body composition.

The mood and libido benefits are substantial: Kisspeptin receptors are found in limbic brain regions governing attraction, motivation, and emotional processing. Users report enhanced libido, mood elevation, and the general vitality associated with optimal hormonal function — effects that complement and amplify the physical optimization provided by other protocols.`,
    benefits: [
      'Activates the master HPG hormonal cascade from the top of the axis',
      'Stimulates natural testosterone production through physiological GnRH signaling',
      'Enhances libido and sexual desire through central kisspeptin receptor activation',
      'Supports fertility in both men and women through LH/FSH optimization',
      'Improves mood and motivation via limbic kisspeptin receptor effects',
      'Maintains hormonal function during training-induced HPG suppression',
      'Does not suppress endogenous production (upstream activation, not replacement)',
      'Enhances hormonal recovery after disruption or stress',
    ],
    protocol: '1–10mcg/kg subcutaneous injection, 2–3x weekly. Pulsatile dosing (short bursts rather than continuous) best maintains receptor sensitivity. Often used as part of hormonal optimization protocols alongside GH peptides.',
    synergies: ['PT-141', 'Ipamorelin', 'BPC-157'],
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
  { name: 'Looks Maxing',       icon: '✦', description: 'Peptides engineered for skin, pigmentation, and physical transformation' },
  { name: 'Body Composition',   icon: '◈', description: 'Lean muscle growth, fat loss, and physique optimization protocols' },
  { name: 'Weight Management',  icon: '◇', description: 'Next-generation GLP-1, GIP, and metabolic peptides for dramatic fat loss' },
  { name: 'Recovery & Healing', icon: '⬡', description: 'Accelerated tissue repair, joint health, and regeneration compounds' },
  { name: 'Anti-Aging',         icon: '◉', description: 'Longevity, cellular age reversal, and mitochondrial optimization' },
  { name: 'Cognitive Performance', icon: '◎', description: 'Neural optimization, BDNF, and mental performance enhancement' },
  { name: 'Immune & Vitality',  icon: '◆', description: 'Immune architecture, thymic optimization, and vitality compounds' },
  { name: 'Performance & Vitality', icon: '★', description: 'Libido, hormonal signaling, and peak performance optimization' },
]
