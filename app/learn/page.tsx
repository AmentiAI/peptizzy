import Link from 'next/link';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide Education Center | Learn About Peptides | PeptidesMuscle',
  description: 'In-depth guides on peptide science, mechanisms of action, stacking strategies, injection protocols, and optimization frameworks for looks, performance, and longevity.',
  alternates: { canonical: 'https://peptidesmuscle.com/learn' },
  openGraph: {
    title: 'Peptide Education Center | PeptidesMuscle',
    description: 'In-depth guides on peptide science, stacking strategies, and optimization frameworks.',
    url: 'https://peptidesmuscle.com/learn',
    type: 'website',
    siteName: 'PeptidesMuscle',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Education Center | PeptidesMuscle',
    description: 'In-depth guides on peptide science, stacking strategies, and optimization frameworks.',
  },
}

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 sm:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Peptide Education Center
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Everything you need to know about research peptides
          </p>
        </div>

        {/* What Are Peptides */}
        <div className="mb-20">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">What Are Peptides?</h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/80 leading-relaxed mb-4">
                Peptides are short chains of amino acids that act as signaling molecules in your body. They're smaller than proteins but incredibly powerful, telling your cells what to do and when to do it.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                Research peptides have gained massive popularity in performance optimization, recovery, anti-aging, and longevity communities because they work with your body's natural processes - not against them.
              </p>
              <p className="text-white/80 leading-relaxed">
                Unlike synthetic hormones, peptides are highly specific and targeted, allowing you to optimize particular functions without disrupting your entire endocrine system.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">Popular Peptide Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Recovery & Healing',
                description: 'Accelerate tissue repair, reduce inflammation, and heal injuries faster',
                examples: 'BPC-157, TB-500',
                icon: '🏥',
                link: '/products#recovery'
              },
              {
                title: 'Performance Enhancement',
                description: 'Boost growth hormone, improve muscle growth, and enhance fat loss',
                examples: 'CJC-1295, Ipamorelin',
                icon: '💪',
                link: '/products#performance'
              },
              {
                title: 'Anti-Aging',
                description: 'Rejuvenate skin, promote collagen, and reverse signs of aging',
                examples: 'GHK-Cu, Epitalon',
                icon: '✨',
                link: '/products#anti-aging'
              },
              {
                title: 'Cognitive Enhancement',
                description: 'Improve focus, reduce anxiety, and enhance mental clarity',
                examples: 'Selank, Semax',
                icon: '🧠',
                link: '/products#nootropic'
              },
              {
                title: 'Sexual Health',
                description: 'Enhance libido, improve function, and boost confidence',
                examples: 'PT-141, Melanotan II',
                icon: '❤️',
                link: '/products#performance'
              },
              {
                title: 'Aesthetics',
                description: 'Natural tanning, hair growth, and body composition',
                examples: 'Melanotan II, GHK-Cu',
                icon: '🌟',
                link: '/products#aesthetics'
              }
            ].map((category) => (
              <Link
                key={category.title}
                href={category.link}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-white/70 mb-3">{category.description}</p>
                <div className="text-purple-300 text-sm font-semibold">
                  Examples: {category.examples}
                </div>
                <div className="mt-4 text-purple-400 group-hover:translate-x-2 transition-transform inline-block">
                  Shop Now →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Safety & Quality */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Our Quality Promise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: '99%+ Purity',
                  description: 'Every batch is tested by independent third-party labs',
                  icon: '🔬'
                },
                {
                  title: 'cGMP Certified',
                  description: 'Manufactured in FDA-compliant facilities with strict protocols',
                  icon: '🏭'
                },
                {
                  title: 'COA Included',
                  description: 'Certificate of Analysis provided with every single order',
                  icon: '📜'
                }
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dosage Guide */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Dosage Guidelines</h2>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white font-semibold">Peptide</th>
                  <th className="text-left py-4 px-4 text-white font-semibold">Typical Dosage</th>
                  <th className="text-left py-4 px-4 text-white font-semibold">Frequency</th>
                  <th className="text-left py-4 px-4 text-white font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'BPC-157', dosage: '250-500mcg', frequency: 'Daily', duration: '4-6 weeks' },
                  { name: 'TB-500', dosage: '2-5mg', frequency: 'Weekly', duration: '4-8 weeks' },
                  { name: 'GHK-Cu', dosage: '1-3mg', frequency: 'Daily', duration: 'Ongoing' },
                  { name: 'CJC-1295', dosage: '1-2mg', frequency: 'Weekly', duration: '12+ weeks' },
                  { name: 'Ipamorelin', dosage: '200-300mcg', frequency: 'Daily', duration: '12+ weeks' }
                ].map((item, i) => (
                  <tr key={item.name} className={i % 2 === 0 ? 'bg-white/5' : ''}>
                    <td className="py-4 px-4 text-white font-medium">{item.name}</td>
                    <td className="py-4 px-4 text-white/70">{item.dosage}</td>
                    <td className="py-4 px-4 text-white/70">{item.frequency}</td>
                    <td className="py-4 px-4 text-white/70">{item.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-white/60 mt-6 text-sm">
            *These are general guidelines for research purposes only. Consult with a healthcare professional before use.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Shop premium research peptides with confidence
          </p>
          <Link
            href="/products"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Browse All Products
          </Link>
          <div className="mt-6 text-white/80 text-sm">
            Free consultation • Expert support • Fast shipping
          </div>
        </div>
      </div>
    </main>
  );
}
