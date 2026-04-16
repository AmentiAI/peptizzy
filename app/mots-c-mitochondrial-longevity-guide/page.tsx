import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MOTS-c: Mitochondrial Peptide for Longevity, Fat Loss & Metabolic Health | PeptidesMuscle',
  description: 'The complete MOTS-c guide. How this mitochondria-encoded peptide activates AMPK, targets visceral fat, extends healthspan, and stacks with Epithalon and CJC-1295 for longevity.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/mots-c-mitochondrial-longevity-guide' },
  keywords: 'MOTS-c peptide guide, MOTS-c dosage, MOTS-c fat loss, MOTS-c longevity, MOTS-c AMPK, mitochondrial peptide, MOTS-c vs metformin, MOTS-c stacking Epithalon',
  openGraph: {
    title: 'MOTS-c: Mitochondrial Peptide for Longevity, Fat Loss & Metabolic Health | PeptidesMuscle',
    description: 'MOTS-c is the only mitochondria-encoded peptide known to function as an exercise mimetic. Full guide to dosing, stacking, longevity protocols, and metabolic health applications.',
    url: 'https://www.peptidesmuscle.com/mots-c-mitochondrial-longevity-guide',
    type: 'article',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOTS-c: Mitochondrial Peptide for Longevity, Fat Loss & Metabolic Health | PeptidesMuscle',
    description: 'How the mitochondria-encoded MOTS-c peptide activates AMPK, targets visceral fat, and supports longevity. Full 2026 protocol guide.',
    images: ['/max-avatar.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'MOTS-c: Mitochondrial Peptide for Longevity, Fat Loss & Metabolic Health',
      description: 'The complete 2026 guide to MOTS-c — AMPK activation, visceral fat targeting, longevity applications, athletic performance, and stacking protocols.',
      url: 'https://www.peptidesmuscle.com/mots-c-mitochondrial-longevity-guide',
      datePublished: '2026-04-14',
      dateModified: '2026-04-14',
      author: { '@type': 'Organization', name: 'PeptidesMuscle' },
      publisher: { '@type': 'Organization', name: 'PeptidesMuscle', url: 'https://www.peptidesmuscle.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does MOTS-c feel like?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most users report a noticeable improvement in energy levels and exercise endurance within the first 1–2 weeks of MOTS-c use. Sleep quality commonly improves, and morning energy is often described as cleaner and more sustained. Unlike stimulants, MOTS-c does not produce a jittery or anxious quality — the energy shift feels metabolic rather than neurological. Fat loss, particularly around the midsection and visceral area, becomes noticeable from weeks 3–6 with consistent use and concurrent exercise.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is MOTS-c better than metformin?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MOTS-c and metformin share overlapping mechanisms — both activate AMPK — but through different upstream pathways and with meaningfully different profiles. Metformin primarily inhibits mitochondrial complex I, indirectly activating AMPK with a GI side effect burden and potential B12 depletion. MOTS-c activates AMPK more directly via a mitochondrial signaling cascade, with no reported GI side effects and additional benefits including telomere protection, mitochondrial biogenesis, and stress response modulation. MOTS-c is also exercise-synergistic, amplifying results with physical activity in a way metformin does not. The two can be used complementarily.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can MOTS-c reverse metabolic damage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Research in animal models and early human data suggests MOTS-c can meaningfully improve insulin resistance, normalize fasting glucose in metabolically impaired subjects, reduce visceral fat accumulation, and improve mitochondrial function in aged or metabolically stressed cells. The term "reverse" is mechanistically supported for improving markers of metabolic syndrome — improving insulin sensitivity, reducing systemic inflammation, and normalizing lipid metabolism. Complete reversal of long-standing damage depends on duration, dose, lifestyle factors, and individual genetics.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I inject MOTS-c?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most common MOTS-c protocols are 3 injections per week (e.g., Monday/Wednesday/Friday) or a 5-days-on/2-days-off schedule. Weekly total dose is 5–10mg, split accordingly — approximately 2–3.3mg per injection. Injection timing on training days should be 30–60 minutes before exercise to maximize the synergy between MOTS-c\'s AMPK activation and exercise-induced AMPK signaling. Subcutaneous injection in the abdomen or thigh is standard.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is MOTS-c safe long-term?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MOTS-c has a favorable safety profile in available research. As a naturally occurring peptide encoded in the human mitochondrial genome, it operates within existing physiological pathways rather than forcing supraphysiological states. Human centenarian studies show naturally elevated MOTS-c levels correlate with exceptional healthspan and longevity without adverse effects. Long-term formal human safety trials are still limited — most data comes from rodent studies and early human research. Standard practice is to cycle (12 weeks on, 4 off) and monitor metabolic markers.',
          },
        },
      ],
    },
  ],
}

const accent = '#34d399'

export default function MotsCLongevityPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden pt-20 sm:pt-32 pb-16 px-4">
        <div className="spot" style={{ background: accent, top: '-10%', right: '-5%', opacity: 0.10 }} />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="label-gold mb-4">MITOCHONDRIAL PEPTIDE · 2026 GUIDE</div>
            <h1 className="font-['Playfair_Display'] text-[clamp(2rem,5vw,3.5rem)] font-900 leading-[1.08] tracking-tight text-white mb-6">
              MOTS-c:<br />
              <span style={{ color: accent }}>The Mitochondrial</span> Longevity Peptide
            </h1>
            <p className="text-[#8888a0] text-lg leading-relaxed mb-8 max-w-xl">
              The only peptide encoded in mitochondrial DNA. MOTS-c activates AMPK, mimics the metabolic effects of exercise, targets visceral fat, and correlates with exceptional longevity in centenarian populations.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="tag-gold">AMPK Activation</span>
              <span className="tag-gold">Exercise Mimetic</span>
              <span className="tag">Visceral Fat</span>
              <span className="tag">Longevity</span>
              <span className="tag">Mitochondrial Health</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Origin', stat: 'mtDNA', sub: 'mitochondria-encoded — unique among peptides' },
              { label: 'Primary Target', stat: 'AMPK', sub: 'master metabolic regulator activated' },
              { label: 'Fat Effect', stat: 'Visceral', sub: 'preferential visceral adipose reduction' },
              { label: 'Centenarians', stat: '↑ Levels', sub: 'elevated in Japanese 100+ year olds' },
            ].map(({ label, stat, sub }) => (
              <div key={label} className="card p-4 flex flex-col gap-1">
                <div className="text-[#8888a0] text-xs mono uppercase">{label}</div>
                <div className="text-2xl font-700" style={{ color: accent }}>{stat}</div>
                <div className="text-[#8888a0] text-xs">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 1: WHAT MAKES MOTS-C UNIQUE */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="label-gold mb-3">SECTION 01</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-6">
            What Makes MOTS-c Unique
          </h2>
          <p className="text-[#8888a0] text-lg leading-relaxed mb-10">
            Discovered in 2015 by researchers at USC, MOTS-c is unlike any other peptide in the research toolkit. Its origin — the mitochondrial genome rather than the nuclear genome — makes it an entirely different class of signaling molecule.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: '⬡',
                title: 'Mitochondria-Encoded',
                body: 'MOTS-c is a 16-amino-acid peptide encoded within the 12S ribosomal RNA gene of human mitochondrial DNA. No other characterized peptide originates from the mitochondrial genome. This origin means MOTS-c is produced inside the energy organelle itself — a direct signal from the mitochondria to the rest of the cell and even to distant tissues via circulation.',
              },
              {
                icon: '⚡',
                title: 'AMPK Activation Pathway',
                body: 'MOTS-c translocates to the nucleus during metabolic stress and activates AMPK — the master energy sensor that modulates glucose uptake, fat oxidation, mitochondrial biogenesis, and autophagy. This cascade is the same pathway activated by exercise, caloric restriction, and metformin — but triggered with greater specificity and without the side effects of pharmacological AMPK activators.',
              },
              {
                icon: '🏃',
                title: 'Exercise Mimetic Effect',
                body: 'MOTS-c has been classified as an "exercise mimetic" — a compound that reproduces cellular adaptations of physical training at the molecular level. In mouse studies, MOTS-c improved endurance, increased muscle mitochondrial density, and reduced fat mass even in sedentary animals. When combined with actual exercise, the effects are synergistic rather than simply additive.',
              },
              {
                icon: '📅',
                title: 'Discovered 2015 — Still Emerging',
                body: 'MOTS-c was characterized and named by the Chang lab at USC in 2015, making it one of the newer peptides in research use. Human clinical trials are actively ongoing. Centenarian studies have linked higher circulating MOTS-c levels to exceptional longevity, particularly in Japanese populations where supercentenarians show measurably elevated MOTS-c versus age-matched controls.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="card p-6 flex flex-col gap-3">
                <div className="text-2xl">{icon}</div>
                <h3 className="text-white font-700 text-lg">{title}</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 2: METABOLIC HEALTH */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="label-gold mb-3">SECTION 02</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-6">
            MOTS-c and Metabolic Health
          </h2>
          <p className="text-[#8888a0] text-lg leading-relaxed mb-10">
            MOTS-c operates at the intersection of insulin sensitivity, glucose metabolism, and fat storage regulation — making it one of the most comprehensive metabolic interventions available in peptide research.
          </p>
          <div className="flex flex-col gap-5">
            <div className="card p-6 grid sm:grid-cols-3 gap-6">
              <div className="sm:col-span-2">
                <h3 className="text-white font-700 text-lg mb-3">Insulin Sensitization via AMPK</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">
                  MOTS-c's AMPK activation drives GLUT4 translocation to muscle cell membranes — the same mechanism responsible for exercise-induced glucose uptake. This bypasses the insulin receptor pathway entirely, meaning MOTS-c can improve glucose disposal even in insulin-resistant individuals where the receptor pathway is impaired. In diabetic mouse models, MOTS-c administration normalized fasting glucose and improved HbA1c-equivalent markers within weeks.
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Pathway</span><span className="text-white">AMPK → GLUT4</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Insulin dep.</span><span style={{ color: accent }} className="text-white font-600">Independent</span></div>
                <div className="flex justify-between py-2"><span className="text-[#8888a0]">Effect</span><span className="text-white">Glucose normalization</span></div>
              </div>
            </div>

            <div className="card p-6 grid sm:grid-cols-3 gap-6">
              <div className="sm:col-span-2">
                <h3 className="text-white font-700 text-lg mb-3">Visceral Fat Targeting</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">
                  Unlike many fat loss compounds that reduce subcutaneous fat uniformly, MOTS-c shows a preferential effect on visceral adipose tissue — the metabolically active fat depot surrounding abdominal organs. Visceral fat is the primary driver of insulin resistance, systemic inflammation, and cardiovascular risk. MOTS-c's AMPK-driven upregulation of fat oxidation pathways appears to preferentially target visceral depots, likely due to the higher mitochondrial density and AMPK sensitivity of visceral adipocytes.
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Target fat</span><span style={{ color: accent }} className="font-600">Visceral</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Subcutaneous</span><span className="text-white">Secondary</span></div>
                <div className="flex justify-between py-2"><span className="text-[#8888a0]">CVD risk</span><span className="text-white">Reduced</span></div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-white font-700 text-lg mb-3">MOTS-c vs. Metformin: Mechanism Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#1e1e2a]">
                      {['Feature', 'MOTS-c', 'Metformin'].map(h => (
                        <th key={h} className="text-left py-2 px-3 text-[#8888a0] font-600">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['AMPK activation', 'Direct mitochondrial signaling', 'Via complex I inhibition'],
                      ['GI side effects', 'None reported', 'Common (nausea, diarrhea)'],
                      ['B12 depletion', 'No', 'Yes — long-term concern'],
                      ['Exercise synergy', 'Strongly amplified', 'Minimal'],
                      ['Longevity data', 'Centenarian correlation', 'C. elegans + rodent data'],
                      ['Telomere effects', 'Protective', 'Limited data'],
                    ].map(([feat, mots, met], i) => (
                      <tr key={i} className="border-b border-[#1e1e2a]">
                        <td className="py-2 px-3 text-[#8888a0]">{feat}</td>
                        <td className="py-2 px-3 text-white font-600" style={{ color: accent }}>{mots}</td>
                        <td className="py-2 px-3 text-[#8888a0]">{met}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 3: LONGEVITY */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="label-gold mb-3">SECTION 03</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-6">
            MOTS-c and Longevity
          </h2>
          <p className="text-[#8888a0] text-lg leading-relaxed mb-10">
            Beyond metabolic health, MOTS-c operates at multiple longevity-relevant biological axes — from telomere dynamics to mitochondrial biogenesis and cellular stress resilience.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Telomere Protection',
                body: 'MOTS-c nuclear translocation during oxidative stress has been shown to upregulate protective gene expression associated with DNA repair and telomere maintenance. Telomere attrition — the progressive shortening of chromosome caps with each cell division — is one of the primary biomarkers of biological aging. MOTS-c does not rebuild telomeres (that is Epithalon\'s domain) but appears to slow their rate of attrition under stress conditions.',
              },
              {
                title: 'Mitochondrial Biogenesis',
                body: 'AMPK activation by MOTS-c upregulates PGC-1α, the master regulator of mitochondrial biogenesis. More mitochondria per cell means greater energy production capacity, better fat oxidation, more efficient ROS management, and slower cellular aging. Mitochondrial density decline is both a cause and consequence of aging — MOTS-c directly addresses this feedback loop.',
              },
              {
                title: 'Stress Response Hormesis',
                body: 'MOTS-c appears to induce a mild hormetic stress response — activating cellular defense programs that improve long-term resilience. This mirrors the mechanism of exercise and caloric restriction. By repeatedly triggering AMPK and downstream protective cascades, MOTS-c trains cells to handle oxidative stress more efficiently. This is a core mechanism of longevity interventions.',
              },
              {
                title: 'Centenarian Genetics Data',
                body: 'Landmark research from USC and collaborating Japanese institutions found that individuals living past 100 — particularly in Okinawa and other Japanese longevity hotspots — show measurably higher circulating MOTS-c levels compared to healthy 70-year-old controls. Additionally, specific MOTS-c gene variants are significantly overrepresented in centenarian populations, suggesting both elevated expression and functional variants contribute to exceptional healthspan.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="card p-6 flex flex-col gap-3">
                <div className="w-2 h-2 rounded-full mb-1" style={{ background: accent }} />
                <h3 className="text-white font-700 text-lg">{title}</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 4: ATHLETIC PERFORMANCE */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="label-gold mb-3">SECTION 04</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-6">
            Athletic Performance Effects
          </h2>
          <p className="text-[#8888a0] text-lg leading-relaxed mb-8">
            MOTS-c's classification as an exercise mimetic isn't metaphorical — it reproduces measurable physiological adaptations of endurance training at the cellular level, then amplifies them when combined with actual exercise.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {[
              {
                num: '01',
                title: 'Endurance Enhancement',
                body: 'Sedentary mice given MOTS-c showed significant improvements in run-to-exhaustion tests — approximately 30% greater endurance versus controls. The mechanism is increased mitochondrial density in skeletal muscle and upregulated fat oxidation pathways, allowing muscle to sustain output longer before glycogen depletion.',
              },
              {
                num: '02',
                title: 'AMPK-Driven Fat Oxidation',
                body: 'During exercise, AMPK activation shifts fuel preference toward fat oxidation at lower exercise intensities — sparing glycogen for high-intensity efforts. MOTS-c primes this shift, making trained individuals more metabolically flexible and efficient. The result is improved exercise performance and enhanced fat loss simultaneously.',
              },
              {
                num: '03',
                title: 'VO2 Max Considerations',
                body: 'While direct VO2 max data in humans is limited, the mechanism pathway (mitochondrial biogenesis + improved oxygen utilization in muscle) is the same upstream cascade that endurance training improves. MOTS-c likely improves VO2 max indirectly via mitochondrial density gains over extended use, particularly in individuals with impaired mitochondrial function.',
              },
              {
                num: '04',
                title: 'Recovery Improvements',
                body: 'MOTS-c reduces oxidative stress markers post-exercise through AMPK-mediated antioxidant enzyme upregulation. Faster clearance of exercise-induced ROS translates to less muscle damage, less inflammation, and faster subjective recovery between training sessions. This is amplified when stacked with BPC-157 which addresses tissue-level repair.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="card p-6 flex flex-col gap-3">
                <div className="mono text-2xl font-700" style={{ color: accent }}>{num}</div>
                <h3 className="text-white font-700 text-lg">{title}</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="card-elevated p-6">
            <div className="label-gold mb-3">AMPLIFICATION PRINCIPLE</div>
            <p className="text-[#8888a0] text-sm leading-relaxed">
              MOTS-c's effects are not simply additive with exercise — they are synergistic. Exercise independently activates AMPK; MOTS-c independently activates AMPK. Together, the combined AMPK signal is substantially greater than either alone. This means users who train while on MOTS-c experience disproportionately greater improvements in fat oxidation, mitochondrial density, and performance than users who are sedentary. For maximum efficacy, inject MOTS-c 30–60 minutes before your training session.
            </p>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 5: PROTOCOL */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="label-gold mb-3">SECTION 05</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-6">
            MOTS-c Protocol Details
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="card p-6 flex flex-col gap-4">
              <h3 className="text-white font-700 text-lg">Dosing</h3>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Weekly total</span><span className="text-white font-600">5–10mg</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Per injection</span><span className="text-white">2–3.3mg</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Beginner start</span><span className="text-white">5mg/week</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Advanced dose</span><span className="text-white">10mg/week</span></div>
                <div className="flex justify-between py-2"><span className="text-[#8888a0]">Route</span><span className="text-white">Subcutaneous injection</span></div>
              </div>
            </div>
            <div className="card p-6 flex flex-col gap-4">
              <h3 className="text-white font-700 text-lg">Timing & Cycling</h3>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Schedule A</span><span className="text-white">5 days on / 2 off</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Schedule B</span><span className="text-white">Mon / Wed / Fri</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Training day timing</span><span style={{ color: accent }} className="font-600">30–60 min pre-workout</span></div>
                <div className="flex justify-between py-2 border-b border-[#1e1e2a]"><span className="text-[#8888a0]">Rest day timing</span><span className="text-white">Morning fasted</span></div>
                <div className="flex justify-between py-2"><span className="text-[#8888a0]">Cycle length</span><span className="text-white">12 wks on / 4 off</span></div>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-white font-700 mb-3">Reconstitution & Storage</h3>
            <p className="text-[#8888a0] text-sm leading-relaxed">
              Reconstitute lyophilized MOTS-c with bacteriostatic water (BW). For a 10mg vial: add 2ml BW for a 5mg/ml concentration (each 0.1ml injection = 0.5mg). Store reconstituted peptide refrigerated at 2–8°C, protected from light. Use within 28 days of reconstitution. Never freeze reconstituted peptide. Lyophilized (dry) powder is stable at room temperature for short periods but should be refrigerated for storage longer than 2 weeks.
            </p>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 6: STACKING */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="label-gold mb-3">SECTION 06</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-6">
            MOTS-c Stacking Guide
          </h2>
          <p className="text-[#8888a0] text-lg leading-relaxed mb-8">
            MOTS-c stacks logically with several other peptides, with each combination targeting a distinct axis of metabolic health or longevity. Three high-synergy combinations are documented below.
          </p>
          <div className="flex flex-col gap-6">
            <div className="card-elevated p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-700 text-black" style={{ background: accent }}>L</div>
                <div>
                  <div className="tag-gold mb-2 w-fit">LONGEVITY AXIS</div>
                  <h3 className="text-white font-700 text-lg">MOTS-c + Epithalon</h3>
                </div>
              </div>
              <p className="text-[#8888a0] text-sm leading-relaxed mb-4">
                The most comprehensive longevity-focused stack in peptide research. MOTS-c targets the mitochondrial-metabolic axis (AMPK, energy metabolism, visceral fat, cellular stress resilience). Epithalon — the tetrapeptide derived from the pineal gland's epithalamin — works via a distinct pathway: telomerase activation and circadian/melatonin regulation. Together they address two of the primary hallmarks of aging: mitochondrial dysfunction and telomere attrition. Use MOTS-c 3x/week (5–10mg total) alongside Epithalon cycles (10–20mg for 10–20 days, 2–3x/year).
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">MOTS-c 5–10mg/week</span>
                <span className="tag">Epithalon 10–20mg / 10–20 day cycle</span>
                <span className="tag">Complementary pathways — no overlap</span>
                <span className="tag">Best longevity stack</span>
              </div>
            </div>

            <div className="card-elevated p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-700 text-black" style={{ background: accent }}>P</div>
                <div>
                  <div className="tag-gold mb-2 w-fit">PERFORMANCE + METABOLIC</div>
                  <h3 className="text-white font-700 text-lg">MOTS-c + CJC-1295 / Ipamorelin</h3>
                </div>
              </div>
              <p className="text-[#8888a0] text-sm leading-relaxed mb-4">
                Combining MOTS-c's AMPK-driven metabolic optimization with GH-axis stimulation creates a powerful body composition and performance stack. CJC-1295/Ipamorelin pre-sleep amplifies the overnight GH pulse — driving muscle recovery, fat oxidation, and IGF-1 signaling. MOTS-c pre-workout enhances fat metabolism and mitochondrial performance during training. The two compounds work on completely independent pathways with no interference. Result: improved body composition, enhanced recovery, better athletic performance, and metabolic health benefits.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">MOTS-c 30–60 min pre-workout</span>
                <span className="tag">CJC-1295 100–200mcg pre-sleep</span>
                <span className="tag">Ipamorelin 200–300mcg pre-sleep</span>
                <span className="tag">Independent pathways — additive</span>
              </div>
            </div>

            <div className="card-elevated p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-700 text-black" style={{ background: accent }}>G</div>
                <div>
                  <div className="tag-gold mb-2 w-fit">GUT-MITOCHONDRIAL AXIS</div>
                  <h3 className="text-white font-700 text-lg">MOTS-c + BPC-157</h3>
                </div>
              </div>
              <p className="text-[#8888a0] text-sm leading-relaxed mb-4">
                The gut-brain-mitochondrial axis is increasingly recognized as central to metabolic health. BPC-157 repairs gut barrier integrity, reduces systemic inflammation, and modulates the gut microbiome — all of which directly affect insulin sensitivity and metabolic function. Pairing BPC-157's gut repair with MOTS-c's AMPK activation creates a bottom-up (gut) and top-down (cellular energy sensing) approach to metabolic health restoration. Particularly effective for individuals with gut dysbiosis, food intolerances, or metabolic syndrome.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">MOTS-c 5–10mg/week</span>
                <span className="tag">BPC-157 250–500mcg/day oral or SC</span>
                <span className="tag">Gut + mitochondrial synergy</span>
                <span className="tag">Metabolic syndrome protocol</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 7: RESULTS TIMELINE */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="label-gold mb-3">SECTION 07</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-8">
            Results Timeline: What to Expect
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { phase: 'Weeks 1–2', title: 'Energy & Sleep', body: 'The most consistent early effect: improved energy levels — particularly during afternoon periods when energy typically dips — and better sleep quality. Some users report vivid or more restful dreams. Exercise performance begins improving, with noticeable reduced perceived effort at the same intensity. No visible body composition changes yet.' },
              { phase: 'Weeks 3–4', title: 'Body Composition Shift', body: 'Early reduction in abdominal bloating and improved midsection appearance. Visceral fat reduction often manifests as a flatter abdomen before significant subcutaneous fat loss is visible. Fasting glucose begins normalizing in those with insulin resistance. Exercise recovery accelerates — soreness duration decreases noticeably.' },
              { phase: 'Weeks 6–8', title: 'Measurable Metabolic Markers', body: 'By this point, metabolic marker improvements become measurable: fasting insulin, HOMA-IR (insulin resistance score), fasting glucose, and triglycerides show improvement in most users. Body fat percentage measurably lower. Athletic performance — endurance, fat oxidation efficiency, recovery — at a new baseline. Lean muscle quality often visually improved.' },
              { phase: 'Weeks 12+', title: 'Longevity Marker Changes', body: 'With extended consistent use, broader longevity markers begin shifting: inflammatory markers (CRP, IL-6), mitochondrial function markers, and for those running comprehensive panels, early signs of improved telomere maintenance under stress. The full benefit of MOTS-c\'s mitochondrial biogenesis effects — more mitochondria per cell — takes 12+ weeks to manifest fully at a structural level.' },
            ].map(({ phase, title, body }, i) => (
              <div key={i} className="card p-6 flex gap-5 items-start">
                <div className="shrink-0 w-20 text-center">
                  <div className="mono text-xs text-[#8888a0] mb-1">TIMELINE</div>
                  <div className="font-700 text-sm" style={{ color: accent }}>{phase}</div>
                </div>
                <div>
                  <div className="text-white font-700 mb-2">{title}</div>
                  <p className="text-[#8888a0] text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 8: PRODUCT CARDS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="label-gold mb-3">SECTION 08</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-8">
            Research-Grade Compounds for This Protocol
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="card-elevated p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="label-gold mb-2">PRIMARY COMPOUND</div>
                  <h3 className="text-white font-700 text-xl">MOTS-c</h3>
                  <p className="text-[#8888a0] text-sm mt-1">Mitochondria-encoded AMPK activator — exercise mimetic, visceral fat, longevity</p>
                </div>
              </div>
              <a href={'/go/mots-c-10mg'} target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary text-center block">View on Phiogen →</a>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
                className="btn-ghost text-center block text-sm">Browse All Peptides</a>
            </div>

            <div className="card-elevated p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="label-gold mb-2">LONGEVITY STACK</div>
                  <h3 className="text-white font-700 text-xl">Epithalon</h3>
                  <p className="text-[#8888a0] text-sm mt-1">Telomerase activator from pineal peptides — anti-aging via telomere axis</p>
                </div>
              </div>
              <a href={'/go/epitalon-10mg'} target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary text-center block">View on Phiogen →</a>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
                className="btn-ghost text-center block text-sm">Browse All Peptides</a>
            </div>

            <div className="card-elevated p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="label-gold mb-2">PERFORMANCE STACK</div>
                  <h3 className="text-white font-700 text-xl">CJC-1295</h3>
                  <p className="text-[#8888a0] text-sm mt-1">GHRH analogue — amplifies overnight GH pulse for recomp and recovery</p>
                </div>
              </div>
              <a href={'/go/cjc-1295-no-dac-5mg'} target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary text-center block">View on Phiogen →</a>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
                className="btn-ghost text-center block text-sm">Browse All Peptides</a>
            </div>

            <div className="card-elevated p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="label-gold mb-2">GUT-METABOLIC STACK</div>
                  <h3 className="text-white font-700 text-xl">BPC-157</h3>
                  <p className="text-[#8888a0] text-sm mt-1">Gut barrier repair + systemic anti-inflammatory — metabolic health synergy</p>
                </div>
              </div>
              <a href={'/go/bpc-157-10mg'} target="_blank" rel="noopener nofollow sponsored"
                className="btn-primary text-center block">View on Phiogen →</a>
              <a href="/go/shop" target="_blank" rel="noopener nofollow sponsored"
                className="btn-ghost text-center block text-sm">Browse All Peptides</a>
            </div>

          </div>
        </div>
      </section>

      <div className="rule" />

      {/* SECTION 9: FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="label-gold mb-3">FAQ</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-5">
            {[
              {
                q: 'What does MOTS-c feel like?',
                a: 'Most users report improved energy levels (particularly sustained afternoon energy), better sleep quality, and reduced perceived effort during exercise within the first 1–2 weeks. The energy shift feels metabolic rather than stimulant-like — no jitter or crash. Body composition improvements become noticeable from weeks 3–6 with concurrent exercise.',
              },
              {
                q: 'Is MOTS-c better than metformin?',
                a: 'Both activate AMPK but through different upstream pathways. MOTS-c activates AMPK via direct mitochondrial signaling with no GI side effects, no B12 depletion, and strong exercise synergy. Metformin inhibits mitochondrial complex I with common GI side effects and long-term B12 concerns. MOTS-c also provides additional benefits (telomere protection, mitochondrial biogenesis) that metformin does not. The two can be used complementarily.',
              },
              {
                q: 'Can MOTS-c reverse metabolic damage?',
                a: 'Yes — MOTS-c has shown the ability to normalize insulin resistance, reduce visceral fat accumulation, and restore mitochondrial function in metabolically impaired models. The degree of improvement depends on duration, dose, concurrent lifestyle factors, and individual baseline. Complete reversal of long-standing damage is possible for some markers; others require sustained use.',
              },
              {
                q: 'How often should I inject MOTS-c?',
                a: 'Most protocols use 3 injections per week (e.g., Mon/Wed/Fri) or 5 days on/2 off, for a weekly total of 5–10mg. On training days, inject 30–60 minutes before exercise to maximize AMPK synergy. On rest days, inject fasted in the morning. Subcutaneous injection in the abdomen or thigh is standard.',
              },
              {
                q: 'Is MOTS-c safe long-term?',
                a: 'MOTS-c is a naturally occurring peptide with an endogenous physiological role. Centenarian studies show naturally elevated levels correlate with exceptional healthspan. Available research shows a favorable safety profile. Standard practice is to cycle 12 weeks on / 4 off and monitor metabolic markers. Formal long-term human safety trials are still limited.',
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-white font-700 mb-3">{q}</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* RELATED GUIDES */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="label-gold mb-3">EXPLORE MORE</div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2.2rem)] font-700 text-white mb-8">
            Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { href: '/fat-loss-peptides-complete-guide', label: 'Fat Loss Peptides', sub: 'Complete tier ranking & protocols' },
              { href: '/peptides-athletic-performance-sports', label: 'Athletic Performance', sub: 'Peptides for endurance & strength' },
              { href: '/glp-1-peptides-complete-guide', label: 'GLP-1 Peptides', sub: 'Semaglutide, tirzepatide & beyond' },
              { href: '/sermorelin-anti-aging-hgh-guide', label: 'Sermorelin Guide', sub: 'Anti-aging GH optimization' },
            ].map(({ href, label, sub }) => (
              <Link key={href} href={href} className="card p-5 flex flex-col gap-2 hover:border-[#34d399] transition-colors group">
                <div className="text-white font-700 group-hover:text-[#34d399] transition-colors">{label}</div>
                <div className="text-[#8888a0] text-sm">{sub}</div>
                <div className="text-sm mt-1" style={{ color: accent }}>Read guide →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
