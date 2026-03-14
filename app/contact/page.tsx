export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get Expert Guidance
          </h1>
          <p className="text-xl text-white/70">
            Free consultation with our peptide specialists
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-white mb-2">Live Chat</h3>
            <p className="text-white/70 mb-4">
              Chat with us now for instant answers
            </p>
            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Start Chat
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-white/70 mb-4">
              support@peptidesmuscle.com
            </p>
            <p className="text-white/60 text-sm">
              Response within 24 hours
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-white mb-2 font-medium">Subject</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors">
                <option value="">Select a topic</option>
                <option value="product">Product Inquiry</option>
                <option value="consultation">Free Consultation</option>
                <option value="dosage">Dosage Guidance</option>
                <option value="shipping">Shipping Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2 font-medium">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
            >
              Send Message
            </button>

            <p className="text-center text-white/60 text-sm">
              We typically respond within 24 hours
            </p>
          </form>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🚚</div>
            <h4 className="font-semibold text-white mb-2">Fast Shipping</h4>
            <p className="text-white/60 text-sm">Same-day dispatch on all orders</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🔬</div>
            <h4 className="font-semibold text-white mb-2">Lab Tested</h4>
            <p className="text-white/60 text-sm">COA provided with every order</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">💯</div>
            <h4 className="font-semibold text-white mb-2">Quality Guarantee</h4>
            <p className="text-white/60 text-sm">30-day satisfaction guarantee</p>
          </div>
        </div>
      </div>
    </main>
  );
}
