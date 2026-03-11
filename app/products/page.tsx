import Link from 'next/link';

const products = [
  {
    id: 'bpc157',
    name: 'BPC-157',
    tagline: 'The Healing Compound',
    category: 'Recovery',
    description: 'Body Protection Compound - accelerates healing and recovery of muscles, tendons, and gut tissue',
    benefits: ['Accelerated Recovery', 'Joint Health', 'Gut Repair', 'Tendon Healing'],
    price: 79,
    purity: '99.9%',
    dosage: '250-500mcg daily',
    popular: true,
    stock: 'In Stock'
  },
  {
    id: 'tb500',
    name: 'TB-500',
    tagline: 'Performance Optimizer',
    category: 'Recovery',
    description: 'Thymosin Beta-4 fragment - promotes tissue repair, flexibility, and reduces inflammation',
    benefits: ['Muscle Recovery', 'Injury Healing', 'Flexibility', 'Reduced Inflammation'],
    price: 89,
    purity: '99.8%',
    dosage: '2-5mg weekly',
    popular: false,
    stock: 'In Stock'
  },
  {
    id: 'ghkcu',
    name: 'GHK-Cu',
    tagline: 'Anti-Aging Powerhouse',
    category: 'Anti-Aging',
    description: 'Copper peptide complex - rejuvenates skin, promotes hair growth, and accelerates wound healing',
    benefits: ['Skin Rejuvenation', 'Hair Growth', 'Wound Healing', 'Collagen Production'],
    price: 69,
    purity: '99.9%',
    dosage: '1-3mg daily',
    popular: false,
    stock: 'In Stock'
  },
  {
    id: 'cjc1295',
    name: 'CJC-1295',
    tagline: 'Growth Hormone Booster',
    category: 'Performance',
    description: 'Long-acting GHRH analog - increases growth hormone levels for enhanced recovery and fat loss',
    benefits: ['GH Release', 'Fat Loss', 'Muscle Growth', 'Recovery'],
    price: 95,
    purity: '99.7%',
    dosage: '1-2mg weekly',
    popular: true,
    stock: 'In Stock'
  },
  {
    id: 'ipamorelin',
    name: 'Ipamorelin',
    tagline: 'Clean GH Secretagogue',
    category: 'Performance',
    description: 'Selective ghrelin receptor agonist - promotes natural GH release without hunger or cortisol spikes',
    benefits: ['Natural GH Boost', 'Fat Loss', 'Better Sleep', 'No Side Effects'],
    price: 85,
    purity: '99.8%',
    dosage: '200-300mcg daily',
    popular: false,
    stock: 'In Stock'
  },
  {
    id: 'melanotan2',
    name: 'Melanotan II',
    tagline: 'Tanning & Libido',
    category: 'Aesthetics',
    description: 'Alpha-MSH analog - promotes melanogenesis for natural tanning and enhanced libido',
    benefits: ['Natural Tan', 'Enhanced Libido', 'Appetite Control', 'UV Protection'],
    price: 65,
    purity: '99.5%',
    dosage: '250-500mcg as needed',
    popular: true,
    stock: 'In Stock'
  },
  {
    id: 'pt141',
    name: 'PT-141',
    tagline: 'Libido Enhancement',
    category: 'Performance',
    description: 'Bremelanotide - melanocortin receptor agonist for sexual function enhancement',
    benefits: ['Enhanced Libido', 'Sexual Function', 'Arousal', 'Confidence'],
    price: 75,
    purity: '99.6%',
    dosage: '0.5-2mg as needed',
    popular: false,
    stock: 'In Stock'
  },
  {
    id: 'selank',
    name: 'Selank',
    tagline: 'Cognitive Enhancer',
    category: 'Nootropic',
    description: 'Anxiolytic peptide - reduces anxiety, enhances focus, and improves cognitive performance',
    benefits: ['Reduced Anxiety', 'Enhanced Focus', 'Mood Support', 'Memory'],
    price: 70,
    purity: '99.4%',
    dosage: '250-1000mcg daily',
    popular: false,
    stock: 'In Stock'
  },
  {
    id: 'semax',
    name: 'Semax',
    tagline: 'Brain Booster',
    category: 'Nootropic',
    description: 'ACTH analog - enhances cognitive function, memory, and neuroprotection',
    benefits: ['Cognitive Enhancement', 'Neuroprotection', 'Focus', 'Learning'],
    price: 72,
    purity: '99.5%',
    dosage: '300-600mcg daily',
    popular: false,
    stock: 'In Stock'
  }
];

const categories = ['All', 'Recovery', 'Performance', 'Anti-Aging', 'Aesthetics', 'Nootropic'];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Premium Research Peptides
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Lab-tested, pharmaceutical-grade peptides for performance optimization and longevity
          </p>
        </div>

        {/* Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: '🔬', text: '99%+ Purity Guaranteed' },
            { icon: '📦', text: 'Same-Day Dispatch' },
            { icon: '🏆', text: 'cGMP Certified' },
            { icon: '🔐', text: 'Secure Checkout' }
          ].map((item) => (
            <div key={item.text} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-white/80 text-sm font-medium">{item.text}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              {product.popular && (
                <div className="absolute -top-3 -right-3 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-xs font-bold shadow-lg">
                  BESTSELLER
                </div>
              )}

              <div className="mb-4">
                <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-xs font-semibold mb-3">
                  {product.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                <p className="text-purple-300 text-sm mb-3">{product.tagline}</p>
                <p className="text-white/70 text-sm mb-4">{product.description}</p>
              </div>

              <div className="space-y-2 mb-4">
                {product.benefits.slice(0, 3).map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/80 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-white/5 rounded-lg p-2">
                  <div className="text-white/60 text-xs">Purity</div>
                  <div className="text-white font-semibold">{product.purity}</div>
                </div>
                <div className="bg-white/5 rounded-lg p-2">
                  <div className="text-white/60 text-xs">Dosage</div>
                  <div className="text-white font-semibold text-xs">{product.dosage}</div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-white">${product.price}</span>
                    <span className="text-white/60 ml-1">/ vial</span>
                  </div>
                  <div className="text-green-400 text-sm font-semibold">{product.stock}</div>
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="block w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Add to Cart
                </Link>

                <button className="w-full mt-2 py-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Peptide is Right for You?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free consultation with our peptide specialists
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Talk to an Expert
          </Link>
          <div className="mt-6 text-white/80 text-sm">
            Response within 24 hours • Expert guidance • Zero pressure
          </div>
        </div>
      </div>
    </main>
  );
}
