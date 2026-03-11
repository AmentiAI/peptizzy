import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Premium Research Peptides</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Unlock Your Body's
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Ultimate Potential
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Premium research-grade peptides for performance optimization, recovery, and longevity. 
              Trusted by athletes, biohackers, and health enthusiasts worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/products" 
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                Shop Premium Peptides
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              
              <Link 
                href="/learn" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '99.9%', label: 'Purity' },
                { number: '24hr', label: 'Fast Shipping' },
                { number: '10K+', label: 'Happy Customers' },
                { number: '100%', label: 'Lab Tested' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Most Popular Peptides
            </h2>
            <p className="text-xl text-white/70">
              Research-grade compounds trusted by professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'BPC-157',
                tagline: 'The Healing Compound',
                benefits: ['Accelerated Recovery', 'Joint Health', 'Gut Support'],
                price: '$79',
                popular: true
              },
              {
                name: 'TB-500',
                tagline: 'Performance Optimizer',
                benefits: ['Muscle Recovery', 'Injury Healing', 'Flexibility'],
                price: '$89',
                popular: false
              },
              {
                name: 'GHK-Cu',
                tagline: 'Anti-Aging Powerhouse',
                benefits: ['Skin Rejuvenation', 'Hair Growth', 'Wound Healing'],
                price: '$69',
                popular: false
              }
            ].map((product) => (
              <div 
                key={product.name}
                className="relative group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-purple-300 text-sm">{product.tagline}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {product.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-white">{product.price}</span>
                    <span className="text-white/60 ml-2">/ vial</span>
                  </div>
                  
                  <Link 
                    href={`/products/${product.name.toLowerCase().replace('-', '')}`}
                    className="block w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300"
            >
              View All Products
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Peptizzy?
            </h2>
            <p className="text-xl text-white/70">
              The gold standard in research peptides
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔬',
                title: '99.9% Purity',
                description: 'Every batch is third-party tested and comes with a certificate of analysis'
              },
              {
                icon: '⚡',
                title: 'Fast Shipping',
                description: 'Same-day dispatch on orders placed before 2pm. Discreet packaging guaranteed'
              },
              {
                icon: '🏆',
                title: 'Premium Quality',
                description: 'Manufactured in cGMP-certified facilities with strict quality control'
              },
              {
                icon: '💊',
                title: 'Lyophilized',
                description: 'Freeze-dried for maximum stability and extended shelf life'
              },
              {
                icon: '🔐',
                title: 'Secure Checkout',
                description: 'SSL encrypted payments. Your data is always protected'
              },
              {
                icon: '📚',
                title: 'Expert Support',
                description: 'Free consultation with our peptide specialists. We guide you every step'
              }
            ].map((benefit) => (
              <div 
                key={benefit.title}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-gradient-to-b from-black/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted By Thousands
            </h2>
            <p className="text-xl text-white/70">
              Real results from real customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael R.',
                role: 'Competitive Athlete',
                review: 'BPC-157 completely changed my recovery game. Back to training in half the time.',
                rating: 5
              },
              {
                name: 'Sarah L.',
                role: 'Biohacker',
                review: 'Best quality peptides on the market. Lab reports prove it. Will never shop elsewhere.',
                rating: 5
              },
              {
                name: 'David K.',
                role: 'Fitness Enthusiast',
                review: 'Fast shipping, incredible customer service. TB-500 has been a game changer for my joints.',
                rating: 5
              }
            ].map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 mb-4">{testimonial.review}</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Optimize?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join 10,000+ customers who trust Peptizzy for premium research peptides
              </p>
              <Link 
                href="/products"
                className="inline-block px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Shop Now
              </Link>
              
              <div className="mt-8 text-white/80 text-sm">
                Free shipping on orders over $150 • Same-day dispatch • 30-day guarantee
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
