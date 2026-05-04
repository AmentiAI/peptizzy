import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | PeptidesMuscle',
  description: 'How PeptidesMuscle collects, uses, and protects information — analytics, cookies, affiliate tracking, contact form data, and your privacy rights.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/privacy' },
  openGraph: {
    title: 'Privacy Policy | PeptidesMuscle',
    description: 'How PeptidesMuscle handles personal data, cookies, and analytics.',
    url: 'https://www.peptidesmuscle.com/privacy',
    type: 'website',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <section className="pt-20 sm:pt-32 pb-10">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Legal</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-4" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}>
            Privacy Policy
          </h1>
          <p className="text-[#50505e] text-[13px]">Effective date: 2026-04-29</p>
        </div>
      </section>

      <div className="rule" />

      <article className="max-w-3xl mx-auto px-6 md:px-10 py-12 space-y-8 text-[#aaaabc] text-[15px] leading-relaxed">

        <section>
          <h2 className="text-white font-700 text-xl mb-3">1. What we collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Analytics:</strong> aggregate page views, referrer, country, device type, and time-on-page via Google Analytics 4.</li>
            <li><strong className="text-white">Affiliate clicks:</strong> we record outbound clicks on <code className="text-[#d4a043]">/go/</code> redirect URLs to attribute commissions.</li>
            <li><strong className="text-white">Contact form / email:</strong> if you message us, we receive the name, email, and message you provide.</li>
            <li><strong className="text-white">Chat widget:</strong> the &quot;Chat with Max&quot; widget records your queries to operate the assistant. Conversations are not used for marketing.</li>
          </ul>
          <p className="mt-3">We do not collect payment information. Purchases happen on the third-party vendor&apos;s site under their privacy policy.</p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">2. How we use it</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To improve the editorial coverage, fix broken links, and prioritise the next guides we write.</li>
            <li>To respond to messages you send us.</li>
            <li>To attribute affiliate commissions to outbound clicks.</li>
          </ul>
          <p className="mt-3">We do not sell personal information. We do not run targeted advertising.</p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">3. Cookies</h2>
          <p>
            Cookies are used by Google Analytics (anonymised IP) and by our affiliate-attribution layer for outbound
            clicks. Disabling cookies in your browser will not prevent you from reading content but may break the
            affiliate redirect attribution.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">4. Data retention</h2>
          <p>
            Analytics data is retained for 14 months as configured in GA4. Email correspondence is retained for as long
            as needed to address your inquiry. Affiliate click logs are retained for 90 days.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">5. Your rights</h2>
          <p>
            Depending on your jurisdiction (GDPR, CCPA), you may have the right to access, correct, or delete the data
            we hold about you, and to opt out of analytics. Email{' '}
            <a href="mailto:support@peptidesmuscle.com" className="text-[#d4a043] hover:underline">support@peptidesmuscle.com</a>{' '}
            with your request. We respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">6. Third-party services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Google Analytics — see Google&apos;s <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-[#d4a043] hover:underline">privacy policy</a>.</li>
            <li>Vercel — site hosting; standard server logs apply.</li>
            <li>Phiogen (affiliate partner) — operates under its own privacy policy on its site.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">7. Changes</h2>
          <p>
            We may update this policy from time to time. The effective date at the top reflects the most recent
            revision.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">8. Contact</h2>
          <p>
            Questions or data requests:{' '}
            <a href="mailto:support@peptidesmuscle.com" className="text-[#d4a043] hover:underline">support@peptidesmuscle.com</a>{' '}
            or via the <Link href="/contact" className="text-[#d4a043] hover:underline">contact form</Link>.
          </p>
        </section>

      </article>
    </div>
  )
}
