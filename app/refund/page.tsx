import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Refund & Return Policy | PeptidesMuscle',
  description: '30-day satisfaction guarantee. How to request a refund or return, what is eligible, the refund timeline, and the process for damaged or lost orders.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/refund' },
  openGraph: {
    title: 'Refund & Return Policy | PeptidesMuscle',
    description: '30-day satisfaction guarantee — how to request a refund or return.',
    url: 'https://www.peptidesmuscle.com/refund',
    type: 'website',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  robots: { index: true, follow: true },
}

const refundJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MerchantReturnPolicy',
  applicableCountry: 'US',
  returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
  merchantReturnDays: 30,
  returnMethod: 'https://schema.org/ReturnByMail',
  returnFees: 'https://schema.org/FreeReturn',
  url: 'https://www.peptidesmuscle.com/refund',
}

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(refundJsonLd) }}
      />
      <section className="pt-20 sm:pt-32 pb-10">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Buyer Protection</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-4" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}>
            Refund &amp; Return Policy
          </h1>
          <p className="text-[#50505e] text-[13px]">Last updated: 2026-04-29</p>
        </div>
      </section>

      <div className="rule" />

      <article className="max-w-3xl mx-auto px-6 md:px-10 py-12 space-y-8 text-[#aaaabc] text-[15px] leading-relaxed">

        <section className="card rounded-xl p-5 border-l-4 border-l-[#40c090]">
          <p className="text-white font-600 mb-1">30-Day Satisfaction Guarantee</p>
          <p>
            Orders fulfilled via our partner Phiogen carry a 30-day satisfaction guarantee. If your order arrives
            damaged, defective, or fails third-party verification, you are entitled to a refund or replacement at no
            cost. Return shipping on eligible items is free.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">Eligibility</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Damaged or defective product</strong> on arrival — full refund or replacement.</li>
            <li><strong className="text-white">Lost in transit</strong> (confirmed by carrier scan) — full refund or replacement.</li>
            <li><strong className="text-white">Wrong item shipped</strong> — full refund or replacement; we cover return shipping.</li>
            <li><strong className="text-white">Failed CoA / purity verification</strong> — full refund.</li>
          </ul>
          <p className="mt-3 text-[#50505e] text-[13px]">
            Opened lyophilized vials cannot be returned for stock-rotation reasons unless they fall into one of the
            categories above. This is a research-grade product handling rule, not a vendor preference.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">How to request</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Email <a href="mailto:support@peptidesmuscle.com" className="text-[#d4a043] hover:underline">support@peptidesmuscle.com</a> with your order number, the issue, and (for damage) photographs.</li>
            <li>We forward your case to Phiogen support within one business day.</li>
            <li>Phiogen issues a return label (if applicable) and a case number.</li>
            <li>Once the return is received and inspected, the refund is processed to the original payment method within 5–10 business days.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">Timeline</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Acknowledgement:</strong> within 1 business day.</li>
            <li><strong className="text-white">Return label issued:</strong> within 2 business days of acknowledgement.</li>
            <li><strong className="text-white">Refund processed:</strong> within 5–10 business days of receipt of returned item.</li>
            <li><strong className="text-white">Funds visible on your statement:</strong> typically 1–3 business days after processing, depending on your bank.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">Cancellations</h2>
          <p>
            Orders can be cancelled before they ship — typically within a few hours of placement. Once a tracking number
            is generated, the order must be processed as a return after delivery rather than a cancellation.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">Disputes</h2>
          <p>
            If you cannot reach a resolution through the process above, escalate by replying to your case thread with
            &quot;ESCALATION&quot; in the subject. We review all escalations within 3 business days. We are committed to a
            fair outcome on every case — our editorial credibility depends on it.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">Contact</h2>
          <p>
            <a href="mailto:support@peptidesmuscle.com" className="text-[#d4a043] hover:underline">support@peptidesmuscle.com</a>{' '}
            or via the <Link href="/contact" className="text-[#d4a043] hover:underline">contact form</Link>.
          </p>
        </section>

      </article>
    </div>
  )
}
