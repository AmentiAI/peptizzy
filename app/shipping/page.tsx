import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shipping Information | PeptidesMuscle',
  description: 'How peptide orders ship — fulfilment partner, dispatch times, transit, packaging, international availability, and what to do if your order is delayed.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/shipping' },
  openGraph: {
    title: 'Shipping Information | PeptidesMuscle',
    description: 'Dispatch times, transit, packaging, and international policies.',
    url: 'https://www.peptidesmuscle.com/shipping',
    type: 'website',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  robots: { index: true, follow: true },
}

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <section className="pt-20 sm:pt-32 pb-10">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Logistics</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-4" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}>
            Shipping Information
          </h1>
          <p className="text-[#50505e] text-[13px]">Last updated: 2026-04-29</p>
        </div>
      </section>

      <div className="rule" />

      <article className="max-w-3xl mx-auto px-6 md:px-10 py-12 space-y-8 text-[#aaaabc] text-[15px] leading-relaxed">

        <section className="card rounded-xl p-5 border-l-4 border-l-[#d4a043]">
          <p className="text-white font-600 mb-1">Fulfilment partner</p>
          <p>
            Orders placed via outbound links on PeptidesMuscle are fulfilled by{' '}
            <strong className="text-white">Phiogen</strong>, the partner vendor we refer to. The shipping policies below
            reflect their published service levels at the time of writing. Authoritative policy lives on the vendor&apos;s
            site at checkout.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">Dispatch time</h2>
          <p>
            <strong className="text-white">Same-business-day dispatch</strong> on orders placed before the cut-off in
            Phiogen&apos;s warehouse time zone. Orders placed on weekends or holidays ship the next business day.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">Transit</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Domestic US:</strong> typically 2–5 business days via expedited courier.</li>
            <li><strong className="text-white">International:</strong> availability and transit varies by country. Some jurisdictions restrict importation of research peptides — Phiogen&apos;s checkout will indicate eligibility before order completion.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">Packaging</h2>
          <p>
            Orders ship in temperature-controlled packaging appropriate for lyophilized peptides. Lyophilized vials are
            stable at room temperature in transit. Cold-chain shipping is added for liquid solutions where required.
            Packaging is discreet — outer cartons do not identify product contents.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">Tracking</h2>
          <p>
            A tracking number is emailed once your label is generated, typically within hours of dispatch. If you do not
            receive tracking within 48 hours of placing an order, contact the vendor directly via the support channel on
            their site.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">Lost or damaged shipments</h2>
          <p>
            If a package arrives damaged, photograph the outer carton and contents before opening further and contact
            Phiogen support immediately. Lost shipments confirmed by carrier scan are replaced or refunded under the
            vendor&apos;s policy. See <Link href="/refund" className="text-[#d4a043] hover:underline">refund policy</Link> for full terms.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">Customs and duties</h2>
          <p>
            International buyers are responsible for any customs duties, taxes, or fees imposed at the destination
            country. We are not the seller of record and cannot pre-pay duties on your behalf.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">Questions</h2>
          <p>
            For order-status questions, contact the vendor via your order confirmation email. For editorial or general
            questions, email{' '}
            <a href="mailto:support@peptidesmuscle.com" className="text-[#d4a043] hover:underline">support@peptidesmuscle.com</a>{' '}
            or use the <Link href="/contact" className="text-[#d4a043] hover:underline">contact form</Link>.
          </p>
        </section>

      </article>
    </div>
  )
}
