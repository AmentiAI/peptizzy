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

export const stacks: Stack[] = [
  {
    id: 'looks-max',
    name: 'The Looks Max Stack',
    tagline: 'Comprehensive physical transformation — all four pillars',
    shortDesc: 'Addresses all four pillars of physical optimization: skin quality, pigmentation, body composition, and cellular longevity. The definitive looks maximization protocol.',
    badge: 'Most Popular',
    accent: '#d4a043',
    difficulty: 'Intermediate',
    goal: 'Full looks maximization',
    duration: '12 weeks',
    outcomes: ['Deep, even eumelanin tan', 'Increased skin thickness & collagen', 'Leaner body composition', 'Accelerated recovery', 'Improved skin luminosity'],
    compounds: [
      {
        slug: 'ghk-cu',
        role: 'Skin & Collagen Foundation',
        timing: '1–2mg SubQ, 3× weekly',
        why: 'GHK-Cu is the structural architect of the stack. While other compounds optimize hormones and pigmentation, GHK-Cu operates directly on dermal fibroblasts — the cells responsible for collagen and elastin synthesis. It activates 4,000+ skin-related genes, increases skin density by up to 121%, and creates the luminous skin quality that no training or nutrition protocol can achieve alone.',
      },
      {
        slug: 'melanotan-2',
        role: 'Pigmentation & Melanocortin Activation',
        timing: '0.25–0.5mg SubQ, loading then maintenance',
        why: 'Melanotan 2 provides the pigmentation dimension that makes every other physical improvement more visible. Deeper eumelanin pigmentation creates higher contrast with muscles, enhances perceived symmetry, and delivers the health signals that are universally associated with attractiveness. Its additional MC4R activation provides libido enhancement, appetite suppression, and mood elevation — making it one of the most comprehensively beneficial looks maxing compounds available.',
      },
      {
        slug: 'bpc-157',
        role: 'Foundation Recovery & Cellular Optimization',
        timing: '200–300mcg SubQ, daily',
        why: 'BPC-157 is the foundation layer that makes everything else work better. It optimizes the cellular environment by reducing inflammation, healing gut lining for better peptide absorption, and ensuring connective tissue integrity. Without this foundation, GH peptides and skin peptides operate in a suboptimal inflammatory environment. BPC-157 removes this limitation and accelerates recovery so training can be both consistent and intense.',
      },
      {
        slug: 'ipamorelin',
        role: 'GH Optimization & Body Composition',
        timing: '200–300mcg SubQ, 2–3× daily',
        why: 'Ipamorelin provides the hormonal engine driving body composition transformation. Clean GH pulses — without cortisol or prolactin elevation — drive lipolysis, muscle protein synthesis, improved skin thickness via IGF-1, and dramatically better sleep. GH optimization is the single most impactful hormonal intervention for physical appearance, and Ipamorelin is its most selective and safe delivery mechanism.',
      },
    ],
    fullDescription: `The Looks Max Stack is the most comprehensive and widely adopted peptide protocol for physical optimization. It was designed around a fundamental insight: physical attractiveness is not a single variable but a composite of four distinct biological pillars — skin quality, pigmentation, body composition, and cellular health. Optimizing one without the others produces suboptimal results. This stack addresses all four simultaneously.

Skin quality is the most immediately visible component of physical appearance, and it declines measurably from the mid-20s as collagen and elastin production slow. GHK-Cu reverses this trajectory at the gene expression level — activating over 4,000 genes associated with skin repair, collagen synthesis, and cellular renewal. The result is skin that is structurally denser, more elastic, and more luminous than it would be at the same chronological age without intervention.

Pigmentation is the multiplier that amplifies every other physical improvement. Deep, even eumelanin-based tan is consistently rated among the strongest attractiveness signals across cultures — it creates muscle definition contrast, signals metabolic health and UV resilience, and produces the bronzed aesthetic associated with peak physical condition. Melanotan 2 delivers this through the body's own melanocyte biology rather than UV damage, with the added benefits of libido enhancement, appetite suppression, and mood elevation via the melanocortin system.

Body composition is the structural foundation. The Ipamorelin component drives the hormonal environment in which lean muscle develops and fat diminishes — not through supraphysiological manipulation but through restoring the high GH pulsatility associated with youth. Simultaneously, BPC-157 ensures the recovery capacity to train with the intensity and frequency that body composition transformation requires, while reducing the inflammation that would otherwise blunt GH signaling.

The four compounds create a system where each supports the others: BPC-157 optimizes the environment for all other peptides, Ipamorelin drives the hormonal basis of skin quality and body composition, GHK-Cu executes the structural skin transformation, and Melanotan 2 provides the pigmentation and melanocortin activation that completes the physical picture.`,
    synergy: `The synergy in this stack is architectural. BPC-157 reduces systemic inflammation, improving the cellular environment in which GHK-Cu stimulates collagen and in which Ipamorelin's GH pulses drive IGF-1 signaling. Ipamorelin's GH elevation in turn amplifies skin thickness and elasticity independently of GHK-Cu — creating two parallel collagen-stimulating pathways simultaneously. Melanotan 2's appetite suppression makes the caloric management required for lean body composition effortless, while its MC4R activation improves mood and motivation — sustaining protocol adherence over the full 12 weeks. No compound is redundant; each operates through a distinct receptor mechanism to produce effects the others cannot.`,
    whoIsItFor: `This stack is designed for anyone who wants comprehensive, measurable physical transformation across all dimensions of appearance. Ideal for those who have plateaued on training and nutrition alone and are ready to address the underlying biological variables — hormonal GH levels, skin collagen architecture, melanin production — that training cannot change. Works exceptionally well for men in their mid-20s to 40s seeking the full looks maxing protocol, and women seeking skin quality, body composition, and confidence optimization.`,
    timeline: [
      { range: 'Weeks 1–2', title: 'Foundation & Early Signals', what: 'BPC-157 begins reducing inflammation and healing gut lining, improving absorption of all compounds. MT-2 loading initiates melanin production — some users notice subtle darkening by end of week 2. Ipamorelin improves sleep quality within the first week.' },
      { range: 'Weeks 3–4', title: 'Pigmentation & Sleep Transformation', what: 'Melanotan 2 tan becomes clearly visible, deepening progressively. Sleep quality dramatically improved with Ipamorelin — users report significantly deeper, more restorative sleep. GHK-Cu skin improvements begin — subtle but measurable increase in skin hydration and elasticity.' },
      { range: 'Weeks 5–8', title: 'Skin Quality & Body Composition Shift', what: 'GHK-Cu collagen remodeling becomes visible — improved skin texture, reduced fine lines, and the distinctive healthy luminosity that collagen density produces. Body composition begins shifting measurably: reduced body fat, improved muscle definition. Tan is fully saturated and maintained on low-dose maintenance.' },
      { range: 'Weeks 9–12', title: 'Full Protocol Compounding', what: 'All compounds reach full effect. Skin thickness increases are measurable. Body composition transformation is significant and visible. Recovery from training is substantially faster. Overall physical presentation is comprehensively optimized — the composite transformation across all four pillars becomes undeniable.' },
    ],
    keyBenefits: [
      'Addresses all four pillars of physical attractiveness in a single protocol',
      'GHK-Cu collagen stimulation increases skin thickness by up to 121%',
      'Eumelanin-based tan from Melanotan 2 with 80% less UV exposure',
      'Ipamorelin GH pulses drive simultaneous fat loss and lean mass development',
      'BPC-157 enables the training intensity and consistency transformation requires',
      'Improved sleep quality within 1–2 weeks — deeper, more restorative recovery',
      'Appetite suppression from MT-2 makes caloric management effortless',
      'All four compounds operate through distinct, non-competing receptor mechanisms',
    ],
    cycleProtocol: '12 weeks on. After the cycle: 4–6 weeks off Ipamorelin (maintaining MT-2 maintenance doses and GHK-Cu if desired). Most users run 2–3 cycles per year with excellent results. BPC-157 can be run for 8 weeks on, 4 weeks off within the larger cycle.',
    faqs: [
      { q: 'Can I run this stack as a beginner?', a: 'Yes, with a caveat: start with Ipamorelin and BPC-157 for the first 4 weeks before adding GHK-Cu and Melanotan 2. This lets you learn injection technique on the more forgiving compounds first and assess baseline response.' },
      { q: 'What does the Melanotan 2 tan look like?', a: 'Natural, deep, and even — identical to a genuine sun tan because it uses the same eumelanin biology. The color is not orange (like self-tanner) or red (like UV burn). Users with lighter skin tones typically reach a Mediterranean/olive tone. The tan lasts significantly longer than UV-induced tans.' },
      { q: 'Will I lose the results when I stop the cycle?', a: 'Structural results (skin collagen, body composition) are maintained significantly longer than the cycle duration, especially with continued training. GHK-Cu collagen gains can persist for months. Body composition gains from GH optimization are maintained with continued training and nutrition. MT-2 tan fades over weeks as melanin naturally degrades.' },
      { q: 'Can women run this stack?', a: 'Yes. GHK-Cu, BPC-157, and Ipamorelin are appropriate for women with standard dosing. Melanotan 2 dosing for women is typically lower (0.1–0.25mg loading doses) due to higher sensitivity to the melanocortin system. PT-141 effects are also applicable for women with MT-2.' },
    ],
  },

  {
    id: 'body-comp',
    name: 'The Body Sculptor',
    tagline: 'Elite lean mass and visceral fat elimination',
    shortDesc: 'Growth hormone optimization stacked for maximum body composition transformation. Build lean muscle while stripping fat — the dual recomposition effect.',
    badge: 'Advanced',
    accent: '#6090ff',
    difficulty: 'Advanced',
    goal: 'Maximum lean muscle + fat loss',
    duration: '16 weeks',
    outcomes: ['Significant lean muscle mass gains', 'Visceral fat reduction', 'Sharper muscle definition', 'Enhanced recovery capacity', 'Improved sleep quality'],
    compounds: [
      {
        slug: 'ipamorelin',
        role: 'GH Pulse Foundation',
        timing: '200–300mcg SubQ, 2–3× daily',
        why: 'Ipamorelin provides the clean, selective GH pulse foundation of the entire stack. Its extraordinary selectivity — triggering potent GH release without cortisol, prolactin, or ACTH elevation — means the full anabolic and lipolytic benefit of GH optimization is captured without the hormonal interference that blunts results. It is the most critical compound in the stack and the one that must not be skipped.',
      },
      {
        slug: 'cjc-1295',
        role: 'Sustained GH Elevation Amplifier',
        timing: '100–200mcg SubQ with Ipamorelin',
        why: 'CJC-1295 operates through the GHRH receptor — a completely different mechanism than Ipamorelin\'s ghrelin receptor. When the two are combined, the simultaneous activation of both pathways produces GH elevations far greater than either compound alone — sometimes approaching pharmaceutical GH levels. This "double stimulus" is the defining feature of the Body Sculptor\'s GH component and the reason body composition results are so significant.',
      },
      {
        slug: 'tesamorelin',
        role: 'Visceral Fat Elimination',
        timing: '1–2mg SubQ, daily (evening)',
        why: 'Tesamorelin is the only GH peptide with clinical evidence specifically for visceral fat reduction — the deep abdominal fat that no diet or training protocol can fully address. Added to a stack already optimizing GH levels through Ipamorelin/CJC-1295, Tesamorelin creates a redundant lipolytic signal specifically targeting visceral adiposity for elimination. The result is abdominal definition that reflects what\'s actually underneath.',
      },
      {
        slug: 'igf-1-lr3',
        role: 'Cellular Muscle Hyperplasia',
        timing: '20–50mcg SubQ or IM, post-workout',
        why: 'IGF-1 LR3 is the downstream executor of GH\'s anabolic effects — the compound that actually tells muscle cells to grow at the cellular level. Where Ipamorelin and CJC-1295 drive GH production (and therefore IGF-1), direct IGF-1 LR3 administration bypasses the axis entirely and delivers the growth signal directly to muscle tissue. The result is muscle hyperplasia — actual creation of new muscle fibers — that GH peptides alone cannot produce. This is the advanced compound that separates The Body Sculptor from a standard GH protocol.',
      },
    ],
    fullDescription: `The Body Sculptor is the definitive peptide protocol for those who have made their commitment to elite physique development and want the biological support to match that ambition. It is not a maintenance stack — it is a transformation protocol designed for those who want to make the most significant body composition changes possible within 16 weeks.

The stack operates through two complementary mechanisms working simultaneously. The first is GH axis maximization: Ipamorelin and CJC-1295 create the most potent GH elevation achievable through peptide protocols — the "double stimulus" of simultaneous GHRP and GHRH activation. This elevated GH environment drives fat mobilization across all depots, preserves and builds lean muscle, improves sleep quality, and enhances the recovery that makes consistent high-intensity training sustainable.

The second mechanism is direct cellular anabolism through IGF-1 LR3. While GH optimization drives IGF-1 production endogenously, direct IGF-1 LR3 administration delivers a concentrated, extended-duration IGF-1 signal directly to muscle cells post-workout — triggering hyperplasia (new fiber formation) and dramatically amplifying hypertrophy. This is the compound that creates the muscle density and fullness that defines elite physique development at the structural cellular level.

Tesamorelin adds the third dimension: visceral fat elimination. Even with optimal GH levels and excellent body composition, deep abdominal fat can resist reduction. Tesamorelin's clinical evidence specifically for visceral fat reduction makes it the targeted solution for the final frontier of abdominal definition — creating the sharp, detailed midsection that represents the pinnacle of body composition achievement.

The combined effect over 16 weeks is a body composition transformation that is qualitatively different from what training and nutrition alone can produce: leaner, harder, and with better recovery capacity than the body has experienced at any previous stage of development.`,
    synergy: `The synergy architecture is layered and precise. Ipamorelin provides the pulse; CJC-1295 amplifies and extends it through a separate receptor pathway — producing compound GH elevation. This elevated GH drives endogenous IGF-1 production throughout the day. Post-workout IGF-1 LR3 then augments this with a direct, concentrated anabolic signal to the muscles that just trained, capitalizing on the anabolic window when muscle cells are maximally receptive. Tesamorelin's GHRH activity adds a separate daily GH pulse specifically in the evening, maintaining a lipolytic metabolic environment overnight. The four compounds occupy non-overlapping mechanisms within the GH/IGF-1 axis — each contributing a distinct anabolic or lipolytic signal that the others do not fully duplicate.`,
    whoIsItFor: `Designed for intermediate to advanced physique athletes who have a solid training foundation and want to accelerate past what training and nutrition can achieve alone. Ideal for those in body recomposition phases — simultaneously building lean mass and losing fat. Also well-suited for those who have visible visceral fat and want targeted elimination alongside overall body composition improvement. Not recommended as a first peptide protocol — run Ipamorelin + CJC-1295 alone for one cycle first.`,
    timeline: [
      { range: 'Weeks 1–3', title: 'Foundation Activation', what: 'GH optimization via Ipamorelin + CJC-1295 begins. Sleep quality improves significantly within the first week. Appetite may increase slightly as GH levels rise. Body weight may remain similar while composition begins to shift — fat decreasing, muscle increasing.' },
      { range: 'Weeks 4–8', title: 'Visible Body Composition Shift', what: 'Body fat reduction becomes clearly visible — particularly around the abdomen from Tesamorelin\'s visceral fat targeting. Muscle fullness and pumps during training improve noticeably. Recovery between sessions is markedly faster. Add IGF-1 LR3 post-workout during this phase for maximum hyperplastic effect.' },
      { range: 'Weeks 9–12', title: 'Peak Transformation Phase', what: 'Compound effects of all four protocols reach maximum expression. Muscle definition is significantly improved. Visceral fat reduction creates visible abdominal definition. Recovery capacity allows for training volume and frequency that would be unsustainable without peptide support.' },
      { range: 'Weeks 13–16', title: 'Consolidation & Peak Results', what: 'IGF-1 LR3 cycle concludes at week 12–14 (maximum 6-week run). Maintain Ipamorelin + CJC-1295 + Tesamorelin through week 16. Final body composition represents the full transformation potential of the protocol — lean mass and definition changes are significant and lasting.' },
    ],
    keyBenefits: [
      'Dual GHRH + GHRP stimulation produces maximum GH elevation',
      'IGF-1 LR3 creates actual new muscle fibers through hyperplasia',
      'Tesamorelin specifically eliminates visceral abdominal fat',
      'Simultaneous lean mass gain and fat loss — true recomposition',
      'Dramatically faster recovery enabling higher training frequency',
      'Improved sleep quality amplifies all hormonal benefits overnight',
      'Progressive body composition changes compound over the full 16 weeks',
      'Creates a metabolic environment that favors lean tissue over fat storage',
    ],
    cycleProtocol: '16 weeks total. IGF-1 LR3: 4–6 weeks within the cycle, then pause (max 6 consecutive weeks). Ipamorelin + CJC-1295 + Tesamorelin: full 16 weeks. After the cycle: 4–6 weeks off all GH peptides before repeating. Most run 1–2 full Body Sculptor cycles per year.',
    faqs: [
      { q: 'How much muscle can I expect to gain?', a: 'Results vary with training quality, nutrition, and individual response. Users consistently report 5–10+ lbs of lean mass over 16 weeks, with simultaneous fat loss of similar magnitude. The recomposition effect — gaining muscle while losing fat — is the defining outcome of this protocol.' },
      { q: 'Is IGF-1 LR3 safe to use?', a: 'IGF-1 LR3 is safe within recommended doses and cycle lengths. The critical parameter is cycle length: do not exceed 6 consecutive weeks due to receptor desensitization. Start at 20mcg post-workout and assess response before increasing. Monitor for hypoglycemia (low blood sugar) especially when taking it post-workout without food.' },
      { q: 'When should I take the Tesamorelin injection?', a: 'Evening (6–9pm) injection is optimal for Tesamorelin — it aligns the GH pulse with the body\'s natural nocturnal GH elevation window and maximizes overnight lipolysis. This is separate from your Ipamorelin + CJC-1295 doses, which are best at pre-sleep and post-workout.' },
      { q: 'Can I add BPC-157 to this stack?', a: 'Absolutely — BPC-157 is an excellent addition to any Body Sculptor cycle. It will reduce the inflammation from high-volume training, protect connective tissue under heavy loads, and optimize the cellular environment for IGF-1\'s anabolic effects. Many advanced users run BPC-157 as a permanent foundation layer.' },
    ],
  },

  {
    id: 'wolverine',
    name: 'The Wolverine Stack',
    tagline: 'Maximum tissue repair — near-superhuman recovery',
    shortDesc: 'Near-superhuman recovery properties. Combines the two most powerful tissue repair peptides with GH optimization for training frequency otherwise unattainable.',
    badge: 'Elite Recovery',
    accent: '#40c090',
    difficulty: 'Intermediate',
    goal: 'Maximum recovery & injury healing',
    duration: '8 weeks',
    outcomes: ['Dramatically accelerated healing', 'Reduced inflammation', 'Greater training frequency', 'Joint & connective tissue health', 'Injury resolution'],
    compounds: [
      {
        slug: 'bpc-157',
        role: 'Local & Systemic Tissue Repair',
        timing: '200–500mcg SubQ, daily',
        why: 'BPC-157 is the cornerstone of every serious recovery protocol. Its multi-mechanism approach — angiogenesis promotion, nitric oxide modulation, growth factor receptor upregulation — creates the most comprehensive local healing environment available. For specific injuries, injection near the site dramatically concentrates the healing signal. For systemic recovery optimization, abdominal SubQ provides whole-body anti-inflammatory and repair benefits.',
      },
      {
        slug: 'tb-500',
        role: 'Systemic Regeneration & Flexibility',
        timing: '2–2.5mg SubQ, 2–3× weekly',
        why: 'TB-500 provides the systemic healing dimension that BPC-157\'s local mechanism cannot fully cover. As a derivative of Thymosin Beta-4, it circulates throughout the body — upregulating actin expression to accelerate cell migration and tissue reconstruction wherever damage exists. The result is whole-body regeneration rather than site-specific repair, and dramatic improvements in flexibility and range of motion that prevent future injury.',
      },
      {
        slug: 'ipamorelin',
        role: 'GH-Driven Recovery Amplification',
        timing: '200–300mcg SubQ, pre-sleep',
        why: 'Growth hormone is the body\'s master recovery hormone — it orchestrates tissue repair, protein synthesis, and cellular regeneration during sleep. Adding Ipamorelin to the recovery stack amplifies the GH signal during the nighttime repair window, essentially extending and deepening the recovery that BPC-157 and TB-500 initiate. The combination produces overnight tissue repair that would take the body multiple nights to achieve unassisted.',
      },
      {
        slug: 'ghk-cu',
        role: 'Connective Tissue & Collagen Repair',
        timing: '1–2mg SubQ, 2× weekly',
        why: 'Connective tissue — tendons, ligaments, and fascia — is the most commonly limiting factor in injury recovery and training longevity. GHK-Cu directly stimulates the collagen synthesis in these tissues that determines whether they rebuild stronger or merely scar over. By adding collagen quality to the comprehensive repair environment created by BPC-157 and TB-500, GHK-Cu ensures that repaired tissue is structurally superior to what it replaced.',
      },
    ],
    fullDescription: `The Wolverine Stack is named for a simple reason: it produces recovery properties that feel superhuman to those accustomed to conventional recovery methods. Injuries that normally sideline athletes for weeks resolve in days. Training volumes that should produce overuse injuries are sustained without breakdown. The body rebuilds faster, stronger, and more completely than biology normally permits.

This is not hyperbole — it is the predictable outcome of combining the two most powerful tissue repair peptides in existence (BPC-157 and TB-500) with GH optimization for overnight amplification and GHK-Cu for connective tissue collagen quality. Each compound addresses a different dimension of the recovery problem; together they create a comprehensive repair system with no gaps.

BPC-157 is the fastest-acting component. Within days of initiating the protocol, its angiogenic effects increase blood flow to damaged tissue, its anti-inflammatory actions reduce the swelling and pain that limit movement, and its growth factor receptor upregulation begins the structural repair process. Users with acute injuries frequently report pain reduction within the first week — not masking of pain, but actual structural resolution.

TB-500's systemic reach means the entire body benefits simultaneously. Rather than targeting a specific injury site, it identifies damaged tissue throughout the body and accelerates healing across all of them. This is particularly valuable for athletes with multiple chronic injury sites — the compound effectively rehabilitates the whole body in parallel. The flexibility improvements from TB-500's actin upregulation also directly prevent new injuries by improving range of motion and tissue extensibility.

Ipamorelin transforms the nighttime rest period into a maximally productive repair window. GH's role in tissue regeneration is well-established — it drives protein synthesis, activates satellite cells for muscle fiber repair, and coordinates the hormonal environment for healing. Pre-sleep Ipamorelin ensures that during the 7–9 hours of sleep, the body is operating with maximally elevated GH — compressing days of normal repair into each night.

GHK-Cu completes the protocol by ensuring the quality of repaired tissue. Connective tissue injuries are notorious for healing with inferior scar tissue — weaker, less elastic, and more prone to re-injury than the original structure. GHK-Cu's collagen stimulation drives the production of type I and III collagen in tendons and ligaments, ensuring that repaired tissue rebuilds with proper structural integrity.`,
    synergy: `BPC-157 and TB-500 have been described as the "perfect healing pair" because their mechanisms are entirely complementary rather than overlapping. BPC-157 operates through VEGF, EGF, and nitric oxide pathways; TB-500 operates through actin upregulation and cell migration. Together they address every stage of the healing cascade: inflammation resolution, cellular migration, tissue reconstruction, and vascularization. Ipamorelin then amplifies this entire process by elevating GH during sleep — essentially multiplying the repair rate achieved by BPC-157 and TB-500 during waking hours. GHK-Cu targets the collagen quality of the final repair product, ensuring longevity of the healed tissue.`,
    whoIsItFor: `Essential for anyone dealing with acute injuries, chronic overuse conditions, or post-surgical recovery. Ideal for strength athletes, CrossFit competitors, martial artists, and anyone whose training involves significant tissue stress. Also highly valuable as a preventive protocol for athletes who train intensively and want to maintain connective tissue health long-term. The Wolverine Stack is the protocol that lets serious athletes train as hard as they want without the injuries that would otherwise impose limits.`,
    timeline: [
      { range: 'Days 1–7', title: 'Rapid Inflammation Control', what: 'BPC-157 produces the fastest results of any compound in the stack. Pain and swelling from acute injuries typically reduce significantly within the first week. Gut health improvements are often noticed within days. Sleep quality improves from Ipamorelin within the first week.' },
      { range: 'Weeks 2–3', title: 'Structural Repair Initiated', what: 'TB-500 systemic effects become apparent — flexibility noticeably improves, multiple injury sites begin to resolve simultaneously. BPC-157 continues accelerating healing at primary injury sites. GHK-Cu collagen synthesis begins rebuilding connective tissue quality.' },
      { range: 'Weeks 4–6', title: 'Training Capacity Restoration', what: 'Most acute injuries are substantially resolved. Training volume and intensity can be progressively restored. Recovery between sessions is dramatically faster. The combination of resolved injuries and improved tissue quality creates a training capacity that exceeds what was possible before the protocol.' },
      { range: 'Weeks 7–8', title: 'Full Recovery & Tissue Optimization', what: 'Connective tissue quality is at its highest point of the cycle — GHK-Cu collagen gains are significant. Flexibility and range of motion are maximized. Athletes at this stage often report that their body feels better than it did before whatever injury initiated the protocol. End the cycle; maintain training at elevated capacity.' },
    ],
    keyBenefits: [
      'BPC-157 and TB-500 combined address every stage of the healing cascade',
      'Pain and inflammation reduction from acute injuries within days',
      'Systemic TB-500 healing rehabilitates multiple injury sites simultaneously',
      'Ipamorelin GH optimization amplifies overnight repair rate',
      'GHK-Cu ensures connective tissue rebuilds with superior structural quality',
      'Flexibility and range of motion improvements prevent future injuries',
      'Training capacity fully restored — often exceeds pre-injury baseline',
      'Connective tissue durability improvements persist beyond the cycle',
    ],
    cycleProtocol: '8 weeks on, 4 weeks off. BPC-157: daily throughout. TB-500: 2–2.5mg 2–3x weekly for 4 weeks (loading), then 2.5mg weekly for final 4 weeks (maintenance). Ipamorelin: pre-sleep throughout. GHK-Cu: 2x weekly throughout. For severe injuries, a second 8-week cycle can follow the 4-week break.',
    faqs: [
      { q: 'Should I inject BPC-157 near the injury site?', a: 'For specific injury sites (tendon, ligament, muscle), injecting within a few centimeters of the injury produces more concentrated local healing effects. For systemic benefits and gut health, abdominal SubQ works well. Many users do both — a local injection near the injury and a systemic abdominal injection — during the same protocol.' },
      { q: 'Can I train through injuries while on this stack?', a: 'The stack does not eliminate the need for smart training modification. It accelerates healing dramatically, but tissues under continuous excessive load cannot heal optimally. Reduce load on injured structures, maintain mobility work, and allow the peptides to work. You can typically maintain higher training volume than you could without the stack, but still respect genuine tissue damage signals.' },
      { q: 'How quickly does the pain reduction happen?', a: 'Most users report measurable pain reduction within 3–7 days of starting BPC-157. The speed depends on injury severity and location. Tendon injuries near the site of injection typically respond fastest. Systemic inflammation reduction is also rapid. TB-500\'s flexibility improvements become noticeable at 1–2 weeks.' },
      { q: 'Is this stack appropriate for post-surgical recovery?', a: 'Yes — the Wolverine Stack is one of the most valuable protocols for post-surgical recovery. The tissue repair mechanisms are identical to what benefits non-surgical injuries. Many users begin BPC-157 and TB-500 immediately post-surgery (with medical awareness). The accelerated healing can compress months of typical recovery into weeks.' },
    ],
  },

  {
    id: 'longevity',
    name: 'The Longevity Protocol',
    tagline: 'Comprehensive biological age reversal',
    shortDesc: 'The most comprehensive anti-aging protocol available. Combines telomere extension, mitochondrial optimization, immune enhancement, and skin rejuvenation.',
    badge: 'Longevity',
    accent: '#a060ff',
    difficulty: 'Intermediate',
    goal: 'Biological age reversal & longevity',
    duration: 'Ongoing / Annual Cycle',
    outcomes: ['Measurable telomere lengthening', 'Improved biological age markers', 'Enhanced immune function', 'Better sleep depth', 'Improved skin quality', 'Mitochondrial optimization'],
    compounds: [
      {
        slug: 'epithalon',
        role: 'Telomere Extension & Cellular Age Reversal',
        timing: '5–10mg SubQ, daily for 10–20 day cycles, 2× per year',
        why: 'Epithalon is the cornerstone of the Longevity Protocol because it addresses aging at the most fundamental level: telomere length. By activating telomerase, it enables cells throughout the body to rebuild their telomeres — reversing the chromosomal clock that determines biological age. No other compound in existence does this. Without Epithalon, this protocol addresses symptoms and biomarkers of aging; with it, the stack addresses the root cause at the chromosomal level.',
      },
      {
        slug: 'ghk-cu',
        role: 'Skin Rejuvenation & Gene Expression Reset',
        timing: '1–2mg SubQ, 3× weekly',
        why: 'GHK-Cu addresses aging from the gene expression dimension — resetting the activity of 4,000+ genes from an aged profile toward a youthful one. This is the most visible component of the Longevity Protocol: skin that thickens, firms, and develops the luminosity of younger biological age. GHK-Cu also provides powerful antioxidant protection against the oxidative damage that is a primary driver of aging across all tissues.',
      },
      {
        slug: 'thymosin-alpha-1',
        role: 'Immune System Optimization',
        timing: '1.6mg SubQ, 2–3× weekly',
        why: 'Immune function is a critical dimension of biological aging. The thymus atrophies with age, reducing T-cell production and quality — leading to increased susceptibility to infection, reduced cancer surveillance, and chronic immune dysregulation. Thymosin Alpha-1 restores the thymic signaling that drives T-cell optimization, directly reversing this immune aging component. A strong, well-regulated immune system is also a prerequisite for the other compounds\' full effectiveness — inflammation from immune dysregulation blunts every other optimization.',
      },
      {
        slug: 'mots-c',
        role: 'Mitochondrial Health & Metabolic Optimization',
        timing: '5–10mg SubQ, 3–5× weekly',
        why: 'Mitochondrial function is the energetic dimension of aging. Mitochondria accumulate damage with age — producing less energy, generating more reactive oxygen species, and triggering the cellular stress responses that accelerate senescence. MOTS-c, as a mitochondrially-encoded peptide, directly communicates with mitochondria to activate the repair, biogenesis, and efficiency programs that restore youthful energy metabolism. Combined with Epithalon\'s chromosomal optimization, MOTS-c addresses aging from both the genomic and energetic dimensions simultaneously.',
      },
    ],
    fullDescription: `The Longevity Protocol is built on a principle that distinguishes it from every anti-aging product ever marketed: it addresses the actual biological mechanisms of aging rather than merely masking its symptoms. Moisturizers, antioxidants, and even most supplements manage the appearance of aging. The Longevity Protocol reverses its underlying biology.

Aging occurs through four primary mechanisms: telomere shortening (the chromosomal clock), mitochondrial dysfunction (the energetic decline), immune deterioration (the loss of cellular surveillance), and epigenetic drift (the shift in gene expression toward aged patterns). The Longevity Protocol addresses all four simultaneously with the only compounds known to intervene at each level.

Epithalon's telomerase activation is the most remarkable intervention in the entire protocol — and in anti-aging science generally. Telomere lengthening has been the theoretical goal of longevity science for decades. Epithalon makes it pharmacologically achievable. Measurable telomere lengthening has been demonstrated in clinical work, and the downstream effects — improved cellular replication quality, reduced senescent cell burden, better sleep and immune function — are consistent with genuine biological rejuvenation.

MOTS-c addresses the mitochondrial dimension with equal precision. Mitochondrial dysfunction is not merely an energy problem — it is an aging accelerant that produces oxidative stress, triggers inflammatory signaling, and directly damages the cellular machinery that all other systems depend on. MOTS-c's AMPK activation and mitochondrial biogenesis effects restore the metabolic efficiency of younger cells, creating the energy foundation that allows every other biological process to function at its optimum.

GHK-Cu completes the visible component: while Epithalon and MOTS-c work at the cellular and chromosomal level, GHK-Cu produces the aesthetic expression of rejuvenation — skin that visibly thickens, firms, and brightens as its gene expression profile resets toward youth. The convergence of cellular age reversal and visible skin rejuvenation creates a comprehensive anti-aging transformation.`,
    synergy: `The Longevity Protocol's synergy is additive at every level. Epithalon and MOTS-c address aging from complementary dimensions — chromosomal (telomere length) and energetic (mitochondrial function) — so each operates on aging mechanisms the other does not directly target. Thymosin Alpha-1 ensures that the immune system is fully functional to take advantage of the cellular rejuvenation that Epithalon and MOTS-c drive — a rejuvenated cell in an inflammatory immune environment cannot fully express its improved biology. GHK-Cu translates the cellular-level rejuvenation into visible, measurable skin improvements that provide both feedback on the protocol's progress and tangible aesthetic reward for the investment in long-term biological health.`,
    whoIsItFor: `Designed for those who think long-term about their biological trajectory — people in their 30s–50s (and beyond) who want to actively manage their aging process rather than accept it. Ideal for those already optimizing their physical appearance who want to address the deep biological substrate that determines how well they age over the coming decades. Also valuable for anyone with specific longevity goals: improved energy and vitality, maintained immune function, preserved cognitive capacity, and the sustained physical quality associated with a younger biological age.`,
    timeline: [
      { range: 'Cycle 1 (Months 1–2)', title: 'Foundation Establishment', what: 'MOTS-c and Thymosin Alpha-1 begin continuously. Epithalon 10-day cycle completed. GHK-Cu ongoing 3× weekly. Initial improvements: sleep quality (Epithalon), energy and metabolic efficiency (MOTS-c), reduced illness susceptibility (TA1). Skin quality begins visibly improving from GHK-Cu.' },
      { range: 'Months 3–6', title: 'Compounding Biological Benefits', what: 'GHK-Cu skin improvements become significant — collagen density increases are visible. MOTS-c metabolic optimization produces improved body composition. Immune markers improve measurably. Sleep quality sustained at elevated baseline from first Epithalon cycle.' },
      { range: 'Month 6+ (Second Epithalon Cycle)', title: 'Second Telomere Cycle & Deepening', what: 'Second Epithalon 10–20 day cycle. If bloodwork or telomere testing was done at baseline, comparison at this point may show measurable changes. All compounds have had 6 months to compound their effects — the biological transformation is now comprehensive rather than individual-compound effects.' },
      { range: 'Ongoing', title: 'Annual Protocol Maintenance', what: 'Continue MOTS-c, GHK-Cu, and Thymosin Alpha-1 with appropriate cycling. Epithalon run twice yearly. Annual bloodwork baseline provides measurable tracking of biological age markers. The protocol is designed to run indefinitely — its value compounds with time.' },
    ],
    keyBenefits: [
      'Epithalon activates telomerase for measurable telomere lengthening',
      'MOTS-c restores mitochondrial function and metabolic youth',
      'Thymosin Alpha-1 reverses immune aging through thymic restoration',
      'GHK-Cu produces visible skin rejuvenation through gene expression reset',
      'Addresses four distinct mechanisms of aging simultaneously',
      'Improved sleep quality — one of the first and most consistent outcomes',
      'Enhanced energy and vitality from mitochondrial optimization',
      'The only stack that intervenes at the chromosomal level of aging',
    ],
    cycleProtocol: 'MOTS-c: 5–10mg 3–5× weekly, ongoing with 1-month breaks every 3 months. GHK-Cu: 1–2mg 3× weekly, ongoing. Thymosin Alpha-1: 1.6mg 2–3× weekly, 4–8 week cycles with breaks. Epithalon: 10–20 day cycles at 5–10mg/day, repeated twice yearly (e.g., spring and autumn). Annual bloodwork recommended to track biological age markers.',
    faqs: [
      { q: 'How do I know the protocol is working?', a: 'The most accessible markers are subjective: sleep quality improvement, energy levels, skin quality, and frequency of illness. For objective measurement: telomere length testing (available through commercial labs) before and after cycles provides direct data. IGF-1, inflammatory markers (CRP, IL-6), and immune panels also show measurable changes within 3–6 months.' },
      { q: 'At what age should I start a Longevity Protocol?', a: 'Biological aging begins in the mid-20s. The earlier the intervention, the more accumulated damage is prevented rather than reversed. Many practitioners recommend starting a basic Longevity Protocol (GHK-Cu + MOTS-c) in the 30s. Epithalon becomes particularly valuable from the mid-30s onward when telomere shortening rate accelerates.' },
      { q: 'Is there any risk to the Epithalon cycles?', a: 'Epithalon has an extraordinary safety profile — it is a naturally occurring tetrapeptide that restores telomerase activity toward normal rather than supraphysiological levels. Decades of clinical research have not identified significant adverse effects. The primary consideration is that the 10–20 day cycle structure should be respected rather than running it continuously.' },
      { q: 'Can I add other peptides to this stack?', a: 'Yes — the Longevity Protocol is a foundation that pairs well with other protocols. Adding Ipamorelin for GH optimization is the most common addition (GH declines with age and GH optimization has significant longevity benefits). BPC-157 is also complementary for the anti-inflammatory and tissue repair benefits. Build the longevity foundation first, then layer goal-specific compounds.' },
    ],
  },

  {
    id: 'neural',
    name: 'The Neural Edge',
    tagline: 'Peak cognitive performance & unshakeable confidence',
    shortDesc: 'Optimize the cognitive dimension of looks maxing — mental sharpness, confidence, and presence that converts physical transformation into total magnetism.',
    badge: 'Cognitive',
    accent: '#40c0ff',
    difficulty: 'Beginner',
    goal: 'Cognitive peak performance & confidence',
    duration: '6–8 weeks',
    outcomes: ['Enhanced focus and processing speed', 'Eliminated anxiety', 'Deeper sleep architecture', 'Improved social confidence', 'Enhanced memory and learning'],
    compounds: [
      {
        slug: 'semax',
        role: 'BDNF Elevation & Cognitive Performance',
        timing: '200–600mcg intranasal, 1–2× daily',
        why: 'Semax provides the cognitive performance elevation through a mechanism no conventional nootropic matches: dramatic BDNF (Brain-Derived Neurotrophic Factor) increase. BDNF is the growth factor for neurons — the protein responsible for neuroplasticity, memory formation, and the maintenance of cognitive capacity. By elevating BDNF, Semax doesn\'t just improve function today; it actively builds neural infrastructure for sustained cognitive improvement.',
      },
      {
        slug: 'selank',
        role: 'Anxiety Elimination & Confidence',
        timing: '250–500mcg intranasal, 1–2× daily',
        why: 'Selank addresses the anxiety dimension that Semax alone cannot. Where Semax drives cognitive performance, Selank removes the interference — the chronic anxiety, social stress, and cortisol burden that prevent full cognitive capacity from deploying in high-stakes situations. Its GABA-modulating, serotonin-stabilizing mechanism produces genuine anxiolysis without the sedation or blunting of pharmaceutical alternatives. The result is calm, confident, socially present performance.',
      },
      {
        slug: 'dsip',
        role: 'Deep Sleep Architecture Optimization',
        timing: '100–200mcg SubQ, pre-sleep',
        why: 'Sleep is where cognitive performance is built. BDNF elevation from Semax, synaptic potentiation from learning, and the emotional regulation improved by Selank — all of these are consolidated, optimized, and made permanent during deep sleep. DSIP ensures this deep sleep window is maximized every night, turning overnight recovery into the most productive phase of the cognitive optimization protocol. Without optimal sleep, the daytime cognitive gains from Semax and Selank are partially lost each night.',
      },
      {
        slug: 'epithalon',
        role: 'Neuroprotection & Long-Term Neural Health',
        timing: '10–20 day cycle protocol',
        why: 'Cognitive optimization has a long-term and a short-term dimension. Semax and Selank address the immediate daily performance; Epithalon addresses the long-term health of the neural architecture they\'re optimizing. Epithalon\'s neuroprotective effects — antioxidant protection, telomere maintenance in neural cells, sleep regulation — create the biological foundation that makes cognitive peak performance sustainable over years rather than months.',
      },
    ],
    fullDescription: `The Neural Edge is built on a recognition that looks maxing and cognitive optimization are the same project: the goal is to become the most compelling, high-performing version of yourself. Physical transformation gets noticed; cognitive and emotional excellence creates the actual impact. The Neural Edge addresses the brain with the same precision and biological sophistication that other protocols apply to the body.

The cognitive performance component is anchored by Semax — not because it produces the most immediate stimulant effect (it doesn't, and that's the point) but because it builds cognitive capacity rather than merely borrowing against it. By elevating BDNF, Semax actually increases the density and plasticity of neural connections. Working memory, processing speed, and verbal fluency improve because the underlying neural infrastructure is genuinely strengthened, not just temporarily stimulated.

Selank provides the emotional dimension that turns cognitive capability into actual performance. The most common bottleneck for high cognitive output is not insufficient intelligence — it is the anxiety, social stress, and cortisol overload that prevents existing intelligence from deploying. Selank eliminates this interference with the precision of a pharmaceutical anxiolytic but without any of the drawbacks: no sedation, no dependency, no tolerance, no cognitive blunting. What remains after Selank clears the anxiety interference is the user's full, unimpeded cognitive capacity, deployed with social ease and confidence.

DSIP's role in the stack is both supportive and foundational. Sleep is not a passive recovery process — it is the period when everything the Neural Edge protocol builds is consolidated, organized, and made permanent. Deep delta wave sleep is when BDNF-mediated synaptic changes are stabilized, when cortisol from the day is cleared, and when the neural architecture optimized by Semax and Selank is restructured for the next day's performance. Without optimal deep sleep, even the best daytime cognitive protocol produces inconsistent results.

Epithalon completes the Neural Edge with a long-term neuroprotective dimension. It maintains telomere length in neural cells, provides powerful antioxidant protection against neurological oxidative stress, and regulates the circadian rhythm that governs all of sleep's restorative functions. The four compounds together produce a cognitive optimization protocol that is simultaneously immediate (Semax + Selank within 20–30 minutes) and foundational (DSIP + Epithalon building a superior long-term neural platform).`,
    synergy: `Semax and Selank have been described as the most synergistic nootropic pair available because their mechanisms address completely different aspects of cognitive performance: Semax elevates capability (BDNF, processing speed, memory); Selank removes interference (anxiety, cortisol, social stress). Neither overlap, both compound. DSIP then maximizes the overnight consolidation of everything Semax and Selank accomplished during the day — turning what would be partially lost during disrupted sleep into permanently strengthened neural patterns. Epithalon's neuroprotective effects preserve the brain that all three other compounds are optimizing, ensuring the cognitive improvements compound over months rather than decaying.`,
    whoIsItFor: `Designed for anyone for whom cognitive performance, social confidence, and mental presence are as important as physical optimization. Ideal for professionals in high-stakes environments, performers, public speakers, and anyone who experiences performance-limiting anxiety in social or professional contexts. Also valuable for those experiencing cognitive fatigue, burnout, or the diffuse mental slowness that comes from chronic stress. The Neural Edge is the protocol that aligns mental performance with whatever physical optimization is already underway.`,
    timeline: [
      { range: 'Day 1–3', title: 'Immediate Cognitive Shift', what: 'Semax and Selank are among the fastest-acting peptides available — intranasal administration produces effects within 20–30 minutes. Users typically notice improved focus, reduced background anxiety, and enhanced social ease from the first doses. DSIP improves sleep quality immediately — deeper sleep is often noticeable on night one.' },
      { range: 'Week 1–2', title: 'Consistent Performance Foundation', what: 'Daily Semax builds BDNF levels progressively — cognitive performance improvement deepens with continued use as neural infrastructure builds. Selank\'s anxiety reduction becomes consistent and reliable. Sleep quality is measurably improved. Cognitive and emotional performance are both elevated and stable.' },
      { range: 'Weeks 3–6', title: 'Peak Cognitive State', what: 'Full BDNF elevation from consistent Semax use. The combination of enhanced cognitive performance and eliminated anxiety creates a mental state users describe as "operating at full capacity." Social confidence and presence are at their highest. Epithalon cycle can be run during this phase for neuroprotective foundation.' },
      { range: 'Weeks 7–8', title: 'Consolidation', what: 'Complete the Semax/Selank cycle and take 1–2 weeks off before resuming. The neural improvements from BDNF elevation are not immediately lost during the break — the structural synaptic changes persist significantly beyond the active dosing period. DSIP can be continued for ongoing sleep optimization.' },
    ],
    keyBenefits: [
      'Semax BDNF elevation builds neural capacity rather than just borrowing against it',
      'Selank eliminates anxiety without sedation, dependency, or cognitive blunting',
      'DSIP optimizes deep sleep where cognitive gains are consolidated nightly',
      'Intranasal administration provides rapid onset within 20–30 minutes',
      'Epithalon provides long-term neuroprotection for the brain being optimized',
      'Social confidence and presence enhanced without pharmaceutical side effects',
      'Cognitive improvements compound over the full cycle as BDNF rises',
      'Stress cortisol reduction protects body composition and physical optimization',
    ],
    cycleProtocol: 'Semax + Selank: 3–4 weeks on, 1–2 weeks off. DSIP: ongoing 3–5× weekly for sleep optimization (no cycling required). Epithalon: run one 10–20 day cycle within the Neural Edge protocol or separately. Most users run 2–3 Neural Edge cycles per year, often timing them with demanding professional or social periods.',
    faqs: [
      { q: 'Can I use Semax and Selank together in one intranasal dose?', a: 'Yes — Pantheon offers a pre-mixed Selank + Semax vial specifically for this purpose. Administering them together is convenient and the complementary mechanisms work simultaneously. Alternatively, some users dose Semax in the morning (for cognitive activation) and Selank mid-day or before social situations (for anxiety management).' },
      { q: 'Will I feel different immediately?', a: 'Most users notice effects from Semax and Selank within 20–60 minutes of their first intranasal dose — a combination of mental clarity, reduced anxiety, and improved focus. The initial effect is often described as removing a fog that wasn\'t noticed until it lifted. DSIP\'s sleep effects are typically noticed on the first night of use.' },
      { q: 'Does Selank cause sedation?', a: 'No — this is Selank\'s defining feature. It produces powerful anxiolytic effects through GABA and serotonin modulation without any sedation. Users can and should dose it during the day in demanding professional and social contexts. The result is calm alertness, not tranquilized performance.' },
      { q: 'Can I run the Neural Edge alongside a body composition stack?', a: 'Absolutely — the Neural Edge compounds do not interact with GH peptides, recovery peptides, or body composition compounds. Running Semax + Selank + DSIP alongside an Ipamorelin + CJC-1295 body composition protocol is a common and highly effective combination. Optimizing both body and mind simultaneously is the definition of comprehensive looks maxing.' },
    ],
  },

  {
    id: 'slim',
    name: 'The Slim Protocol',
    tagline: 'Next-generation peptide fat loss — the GLP-1 recomposition stack',
    shortDesc: 'The most advanced fat loss peptide protocol available. Combines next-gen GLP-1 weight management with direct lipolysis activation for dramatic, sustainable body transformation.',
    badge: 'Fat Loss',
    accent: '#e05080',
    difficulty: 'Beginner',
    goal: 'Maximum fat loss & weight management',
    duration: '12–24 weeks',
    outcomes: ['Significant body fat reduction', 'Reduced appetite', 'Improved metabolic health', 'Preserved lean muscle', 'Better insulin sensitivity'],
    compounds: [
      {
        slug: 'tirzepatide',
        role: 'Dual GIP/GLP-1 Appetite & Metabolic Control',
        timing: '2.5–15mg SubQ, once weekly',
        why: 'Tirzepatide provides the primary fat loss driver through the most clinically validated GLP-1-based mechanism available. Its dual GIP/GLP-1 activation produces powerful appetite suppression through central mechanisms — reducing caloric intake naturally rather than through willpower — while simultaneously improving insulin sensitivity and fat metabolism at the cellular level. Clinical evidence demonstrates 15–22% body weight reduction, making it the most effective pharmaceutical-grade fat loss compound documented.',
      },
      {
        slug: 'aod-9604',
        role: 'Direct Lipolysis Activation',
        timing: '300–500mcg SubQ, daily',
        why: 'AOD-9604 adds the direct lipolysis dimension that GLP-1 agonists alone do not provide. As the isolated fat-burning fragment of growth hormone, it directly activates beta-3 adrenergic receptors on fat cells — triggering the release of stored fat for oxidation independently of the caloric deficit created by Tirzepatide. The combination of reduced caloric intake (Tirzepatide) and direct fat cell activation (AOD-9604) creates a synergistic fat loss environment that exceeds what either achieves alone.',
      },
      {
        slug: 'bpc-157',
        role: 'Metabolic Health Foundation & GI Support',
        timing: '200–300mcg SubQ or oral, daily',
        why: 'GLP-1 agonists can cause gastrointestinal side effects — nausea, reduced gastric motility, and digestive discomfort. BPC-157 directly addresses this by healing and protecting the gut lining, reducing GI inflammation, and improving gut motility. Beyond GI support, BPC-157\'s systemic anti-inflammatory effects address the metabolic inflammation that accompanies obesity and fat loss — creating a healthier metabolic environment in which the other compounds work more effectively.',
      },
      {
        slug: '5-amino-1mq',
        role: 'NNMT Inhibition & Metabolic Resistance Reversal',
        timing: '5–10mg SubQ, daily',
        why: 'The defining feature of fat loss resistance — the plateau that defeats even aggressive caloric restriction — is often driven by upregulated NNMT activity in fat cells. 5-Amino-1MQ inhibits NNMT, shifting fat cells from their defensive, storage-dominant state toward a metabolism-dominant state. This directly addresses the most common reason fat loss plateaus and makes the caloric deficit created by Tirzepatide produce proportionally greater fat loss.',
      },
    ],
    fullDescription: `The Slim Protocol is the most scientifically advanced fat loss peptide stack available — designed for those who want dramatic, medically-informed body transformation that goes beyond what any previous generation of fat loss tools could achieve. It combines next-generation GLP-1 pharmacology with direct lipolysis activation and metabolic resistance reversal.

The protocol's design philosophy is mechanistic coverage: most fat loss efforts fail not because they don't create a caloric deficit, but because the body's adaptive responses — reduced metabolic rate, increased appetite, upregulated fat storage — eventually overcome the deficit. The Slim Protocol addresses these adaptive mechanisms directly rather than just increasing the caloric deficit indefinitely.

Tirzepatide's dual GLP-1/GIP activation drives the most powerful and sustained appetite suppression available — not through stimulant mechanisms that fade and produce rebounds, but through genuine hormonal satiety signaling that the body does not habituate to in the same way. Clinical participants maintained weight loss through 72 weeks of treatment, suggesting the mechanism is resistant to the short-term adaptation that defeats most approaches.

AOD-9604 adds a direct cellular activation that bypasses the entire hormonal calorie-in-calorie-out framework. By directly signaling fat cells to release their stored contents for oxidation, it creates fat burning that is not dependent on caloric deficit alone. This is particularly valuable for stubborn fat deposits — areas where receptors are downregulated and conventional deficit approaches produce minimal lipolysis.

5-Amino-1MQ addresses the mechanistic root of metabolic resistance. NNMT upregulation in obese adipose tissue is one of the most thoroughly documented reasons why body fat "defends itself" — why the same caloric deficit produces less fat loss as time goes on and why some fat seems essentially immune to conventional interventions. By inhibiting NNMT, the protocol removes this defensive mechanism, making the body's fat stores as metabolically accessible as they were before metabolic adaptation occurred.

BPC-157 completes the protocol as the safety and effectiveness foundation, ensuring GI health during GLP-1 treatment and providing the anti-inflammatory environment in which metabolic transformation occurs most completely.`,
    synergy: `The four compounds attack fat loss from four distinct angles simultaneously. Tirzepatide reduces caloric intake through hormonal appetite suppression. AOD-9604 directly activates fat oxidation independently of caloric deficit. 5-Amino-1MQ removes the NNMT-driven metabolic resistance that would otherwise limit the effectiveness of both. BPC-157 ensures GI health and reduces the metabolic inflammation that accompanies significant fat loss and GLP-1 treatment. Each compound's mechanism remains active regardless of the others — there is no receptor competition, no diminishing returns from duplication, and no single point of failure.`,
    whoIsItFor: `Designed for those who want the most effective, science-backed fat loss protocol available — particularly those who have tried conventional approaches (caloric restriction, cardio, standard weight loss medications) and found them insufficient or unsustainable. Highly valuable for those with significant amounts of fat to lose who want to use the most powerful tools available. Also excellent for those who have plateaued at a body fat level they cannot push past through diet and training alone — the metabolic resistance reversal mechanism makes this protocol uniquely effective for plateau-breaking.`,
    timeline: [
      { range: 'Weeks 1–4', title: 'Appetite Reset & Initiation', what: 'Tirzepatide titration from 2.5mg weekly to 5mg weekly. Appetite suppression becomes noticeable within the first 1–2 weeks. AOD-9604 and 5-Amino-1MQ begin shifting fat cell metabolism. BPC-157 addresses any initial GI adjustment from Tirzepatide. Body weight begins declining measurably.' },
      { range: 'Weeks 5–12', title: 'Accelerated Fat Loss Phase', what: 'Tirzepatide dose optimized for maximum effect. AOD-9604 direct lipolysis compounds with the caloric deficit from appetite suppression. 5-Amino-1MQ NNMT inhibition ensures metabolic rate remains elevated. Body fat reduction accelerates — particularly in visceral and stubborn subcutaneous deposits.' },
      { range: 'Weeks 12–24', title: 'Sustained Transformation', what: 'The compound protocol continues producing fat loss without the metabolic adaptation plateau that defeats conventional approaches. Lean mass is preserved through 5-Amino-1MQ\'s muscle-protective effects. Metabolic health markers (insulin sensitivity, blood glucose, lipids) improve measurably. Body recomposition — fat loss while maintaining or building lean mass — becomes the defining outcome.' },
    ],
    keyBenefits: [
      'Tirzepatide clinical evidence: 15–22% body weight reduction over 72 weeks',
      'AOD-9604 directly activates fat cell lipolysis independently of caloric deficit',
      '5-Amino-1MQ removes the metabolic resistance that causes fat loss plateaus',
      'BPC-157 prevents and resolves GI side effects of GLP-1 treatment',
      'Four non-overlapping mechanisms create cumulative fat loss effect',
      'Lean muscle mass preserved throughout the fat loss protocol',
      'Insulin sensitivity improvement creates lasting metabolic health',
      'Weekly Tirzepatide dosing makes the protocol practical and adherent',
    ],
    cycleProtocol: 'Tirzepatide: once weekly, titrate 2.5mg → 5mg → 7.5mg → 10mg over 8–12 weeks based on response. AOD-9604: daily throughout. 5-Amino-1MQ: daily throughout. BPC-157: daily throughout. Continue for 12–24 weeks. Maintenance protocol after goal weight: reduced Tirzepatide dose 1× every 2 weeks plus AOD-9604 to prevent rebound.',
    faqs: [
      { q: 'Will I regain the weight when I stop?', a: 'The weight loss mechanism of GLP-1 agonists is hormonal — appetite returns toward baseline when the compound is discontinued. The key to maintaining results is transitioning to a maintenance protocol (lower dose, less frequent) rather than abrupt cessation, combined with the metabolic improvements that 5-Amino-1MQ creates in fat cell biology. Body composition improvements from the recomposition effect also make weight maintenance easier than the starting point.' },
      { q: 'What about nausea from Tirzepatide?', a: 'Nausea is the most common initial side effect, particularly during dose escalation. BPC-157 (especially the oral format) directly reduces this by protecting gut lining. Starting at the lowest dose (2.5mg weekly) and titrating slowly also minimizes GI side effects. Most users find that nausea resolves as the body adjusts over 2–4 weeks at each dose level.' },
      { q: 'How much fat can I expect to lose?', a: 'Clinical data for Tirzepatide shows average weight loss of 15–22% of starting body weight over 72 weeks. With the addition of AOD-9604 and 5-Amino-1MQ for direct lipolysis and metabolic resistance reversal, results can exceed clinical trial outcomes in individuals who optimize the protocol with appropriate nutrition and training.' },
      { q: 'Do I need to change my diet?', a: 'The protocol creates powerful natural appetite suppression — most users find their caloric intake reduces effortlessly rather than through willpower. Supporting this with a high-protein diet (1.6–2g per kg body weight) preserves lean mass during fat loss. You do not need to follow a specific restrictive diet, but protein prioritization makes results significantly better.' },
    ],
  },

  {
    id: 'glow',
    name: 'The Glow Protocol',
    tagline: 'Total skin rejuvenation from within',
    shortDesc: 'The most comprehensive skin quality protocol available. GHK-Cu collagen restoration, BPC-157 anti-inflammatory foundation, and Epithalon cellular age reversal for exceptional skin at any age.',
    badge: 'Skin & Glow',
    accent: '#e8c060',
    difficulty: 'Beginner',
    goal: 'Maximum skin quality & rejuvenation',
    duration: '8–12 weeks',
    outcomes: ['Increased collagen density', 'Reduced fine lines & wrinkles', 'Improved skin thickness', 'Even skin tone', 'Luminous skin quality', 'Improved hair density'],
    compounds: [
      {
        slug: 'ghk-cu',
        role: 'Collagen Synthesis & Skin Architecture Rebuilding',
        timing: '1–3mg SubQ, 3× weekly',
        why: 'GHK-Cu is the most evidence-backed skin optimization compound in existence. Its ability to activate 4,000+ skin-related genes, stimulate type I and III collagen, increase skin thickness by up to 121%, and reset aged gene expression toward youthful profiles makes it the irreplaceable cornerstone of any serious skin protocol. The Glow Protocol is built around GHK-Cu because no other single compound produces comparable structural skin transformation.',
      },
      {
        slug: 'bpc-157',
        role: 'Anti-Inflammatory Foundation & Healing',
        timing: '200–300mcg SubQ, daily',
        why: 'Skin quality is dramatically impaired by chronic systemic inflammation — the same inflammatory environment that creates gut permeability, joint inflammation, and accelerated aging produces elevated cortisol and inflammatory cytokines that directly degrade collagen and impair skin barrier function. BPC-157 addresses this at the root, creating the anti-inflammatory environment in which GHK-Cu\'s collagen synthesis operates at maximum efficacy. It also directly accelerates wound healing and scar remodeling for active skin concerns.',
      },
      {
        slug: 'epithalon',
        role: 'Cellular Age Reversal & Antioxidant Protection',
        timing: '5–10mg/day, 10–20 day cycle within protocol',
        why: 'The deepest cause of skin aging is cellular: shortened telomeres produce lower-quality cell replication, senescent cells accumulate and secrete inflammatory signals, and the entire tissue regeneration machinery becomes less efficient. Epithalon addresses this at the chromosomal level — telomere lengthening improves the quality of all subsequent cell divisions, creating skin cells that divide with the accuracy and energy of younger biology. Its antioxidant protection also prevents the oxidative stress that is the primary environmental driver of skin aging.',
      },
      {
        slug: 'ipamorelin',
        role: 'GH-Driven Skin Thickness & Overnight Repair',
        timing: '200–300mcg SubQ, pre-sleep',
        why: 'GH has a well-documented role in skin quality: it stimulates IGF-1, which directly drives dermal fibroblast activity and collagen production independently of GHK-Cu\'s mechanism. Ipamorelin adds the endocrine dimension to what GHK-Cu provides through direct topical and injectable application — creating parallel collagen-stimulating pathways that together produce results neither achieves alone. Pre-sleep dosing ensures GH-driven overnight skin repair occurs during the period of maximum skin regeneration.',
      },
    ],
    fullDescription: `The Glow Protocol is the most scientifically rigorous and comprehensive skin rejuvenation protocol ever assembled — designed for those who treat skin quality as a genuine priority and want to address it with the precision and depth that only peptide-based interventions can provide.

Skin aging is not a single process — it is the cumulative result of four distinct mechanisms: structural deterioration (collagen and elastin loss), cellular aging (telomere shortening, senescent cell accumulation), inflammatory damage (cortisol, inflammatory cytokines), and hormonal decline (reduced GH and IGF-1 driving less fibroblast activity). The Glow Protocol addresses all four.

GHK-Cu is the protocol's structural cornerstone because its evidence base for skin is unmatched in the entire field of anti-aging science. Over 50 years of research have established its ability to stimulate collagen and elastin synthesis, activate skin remodeling enzymes, reduce hyperpigmentation, enlarge hair follicles, and reset the gene expression of aging skin cells toward youthful profiles. The practical results are measurable: increased skin thickness, reduced wrinkle depth, improved skin elasticity, and the luminous quality that high collagen density produces.

BPC-157 provides the inflammatory dimension — often the most overlooked but most impactful component of skin quality. Chronic systemic inflammation accelerates collagen degradation, impairs skin barrier function, and creates the dull, inflamed appearance that skin care products address superficially rather than structurally. BPC-157 resolves this inflammation systemically, creating the clear, healthy internal environment that allows skin to function and appear optimally.

Epithalon contributes the deepest level of skin rejuvenation by addressing the cellular quality of every skin cell being produced. When telomeres are shortened and cells are aged, new skin cells are lower-quality replications of impaired templates. Epithalon's telomerase activation improves the template itself — meaning every subsequent skin cell division produces higher-quality cells. This is the difference between patching an aging structure and replacing its blueprint.

Ipamorelin completes the protocol with the GH dimension: growth hormone is a fundamental regulator of skin quality and thickness, and its decline with age is a primary driver of the "aged skin" appearance. Ipamorelin's pre-sleep GH pulse drives overnight IGF-1 signaling in dermal fibroblasts, adding an endocrine collagen stimulation that compounds with GHK-Cu's direct mechanism.`,
    synergy: `GHK-Cu and Ipamorelin create two parallel, non-competing collagen synthesis pathways: GHK-Cu acts directly on fibroblasts through gene expression; Ipamorelin acts through GH/IGF-1 signaling to the same fibroblasts through a different receptor system. The two pathways together produce greater collagen synthesis than either alone. BPC-157's anti-inflammatory effects remove the inflammatory interference that limits how much collagen synthesis actually becomes permanent versus degraded by MMPs (matrix metalloproteinases). Epithalon ensures the quality of the cells executing all of this synthesis — improved telomere length means fibroblasts that divide with greater accuracy for longer, extending the duration and quality of the structural improvements the other compounds initiate.`,
    whoIsItFor: `Designed for anyone who prioritizes exceptional skin quality and wants to address it at a biological level beyond what topical skincare can achieve. Ideal for people in their 30s and 40s beginning to notice visible collagen loss and wanting to proactively reverse it. Also highly valuable for those in their 20s who want to build the collagen infrastructure that prevents visible aging from developing. Works for both men and women — collagen-based skin quality is equally important for male attractiveness (tight, clear skin) and female appearance.`,
    timeline: [
      { range: 'Weeks 1–2', title: 'Foundation & Early Signals', what: 'BPC-157 begins systemic inflammation reduction immediately. Ipamorelin improves sleep quality within days. Subtle improvements in skin hydration and barrier function from early GHK-Cu signaling. Epithalon cycle can be completed during this phase.' },
      { range: 'Weeks 3–5', title: 'Collagen Remodeling Begins', what: 'GHK-Cu collagen synthesis is building — users begin noticing improved skin texture and the subtle brightness that increased collagen density produces. Skin feels firmer and more hydrated without topical products. Fine lines become visibly reduced in the periorbital and perioral areas first.' },
      { range: 'Weeks 6–9', title: 'Visible Skin Transformation', what: 'Collagen density improvements are clearly visible and measurable. Skin thickness increases are significant. The luminous quality associated with high collagen density develops. Hair quality often improves from GHK-Cu\'s hair follicle stimulation. Hyperpigmentation and uneven tone have reduced. Skin looks noticeably younger than at baseline.' },
      { range: 'Weeks 10–12', title: 'Full Protocol Expression', what: 'All compounds have reached full effect. The composite outcome — structurally denser, brighter, firmer, and more even skin — is the product of all four pathways working together. Results at this stage represent the maximum achievable through peptide optimization and persist significantly beyond the active cycle.' },
    ],
    keyBenefits: [
      'GHK-Cu activates 4,000+ skin genes for comprehensive rejuvenation',
      'Collagen density increases up to 121% with consistent GHK-Cu use',
      'Epithalon cellular age reversal improves the quality of all new skin cells',
      'BPC-157 removes inflammatory interference that limits collagen permanence',
      'Parallel collagen pathways from GHK-Cu and Ipamorelin compound results',
      'Hair follicle stimulation improves hair density alongside skin quality',
      'Hyperpigmentation and uneven tone reduced through gene expression reset',
      'Results persist significantly after cycle completion due to structural collagen gains',
    ],
    cycleProtocol: '8–12 weeks. GHK-Cu: 3× weekly throughout. BPC-157: daily throughout. Ipamorelin: pre-sleep throughout. Epithalon: complete one 10–20 day cycle within the protocol (typically weeks 1–2 or 5–6). After completion: GHK-Cu can be maintained at reduced frequency (2× weekly) indefinitely for sustained collagen support.',
    faqs: [
      { q: 'Can I use topical GHK-Cu alongside the injectable protocol?', a: 'Yes — topical GHK-Cu (at 1–5% concentration in a serum) is an excellent complement to injectable GHK-Cu. Injectable reaches dermal fibroblasts systemically; topical provides surface-level penetration for fine lines and skin texture. The combination addresses both levels of skin architecture simultaneously. Microneedling before topical application dramatically improves penetration depth.' },
      { q: 'How is this different from regular anti-aging skincare?', a: 'Topical skincare operates in the epidermis — the surface layer. GHK-Cu injectable penetrates to the dermis where collagen is actually synthesized. The difference is structural rather than cosmetic: skin becomes physically thicker and denser, not just temporarily moisturized or plumped. The results are measurable by ultrasound and persist after the protocol — not dependent on continued product application.' },
      { q: 'Will the results last after I stop the protocol?', a: 'Collagen is a structural protein with a half-life measured in months to years. Collagen synthesized during the protocol persists significantly after cycle completion. GHK-Cu results are not immediately lost when dosing stops — structural skin improvements typically persist for 3–6+ months. Running maintenance doses (2× weekly GHK-Cu) after the full cycle extends results indefinitely.' },
      { q: 'Is this protocol appropriate for acne-prone skin?', a: 'Yes — and often highly beneficial. BPC-157\'s anti-inflammatory effects directly reduce the acne-driving inflammation, while GHK-Cu\'s wound healing and barrier repair mechanisms improve the skin repair that follows active breakouts. The scar remodeling properties of GHK-Cu are also relevant for post-acne scarring. Some users with inflammatory acne see significant improvement from BPC-157 alone.' },
    ],
  },
]

export function getStackById(id: string): Stack | undefined {
  return stacks.find(s => s.id === id)
}
