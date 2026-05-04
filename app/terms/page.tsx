import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | PeptidesMuscle',
  description: 'Terms of service for PeptidesMuscle — research-only sale of peptides, affiliate model, intellectual property, and limitations of liability.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/terms' },
  openGraph: {
    title: 'Terms of Service | PeptidesMuscle',
    description: 'Terms of service for PeptidesMuscle.',
    url: 'https://www.peptidesmuscle.com/terms',
    type: 'website',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <section className="pt-20 sm:pt-32 pb-10">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Legal</p>
          </div>
          <h1 className="font-['Playfair_Display'] font-900 text-white mb-4" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}>
            Terms of Service
          </h1>
          <p className="text-[#50505e] text-[13px]">Effective date: 2026-04-29</p>
        </div>
      </section>

      <div className="rule" />

      <article className="max-w-3xl mx-auto px-6 md:px-10 py-12 space-y-8 text-[#aaaabc] text-[15px] leading-relaxed">

        <section>
          <h2 className="text-white font-700 text-xl mb-3">1. About PeptidesMuscle</h2>
          <p>
            PeptidesMuscle (&quot;we,&quot; &quot;us,&quot; or &quot;the site&quot;) operates as an editorial reference and affiliate
            referral platform at www.peptidesmuscle.com. We publish independent peptide research summaries and refer
            readers to third-party vendors that fulfil the products discussed. We are not the seller of record. Orders
            are placed with, fulfilled by, and contracted directly between you and the vendor reached via our affiliate
            links (currently Phiogen). Their terms govern the actual purchase, payment, fulfilment, and refund.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">2. Research-Only Use</h2>
          <p>
            All peptides discussed and linked on this site are sold by third-party vendors strictly for laboratory
            research purposes. They are not approved by the FDA or any regulatory authority for human consumption,
            diagnosis, treatment, prevention, or cure of any disease. By using the site you agree not to misrepresent
            our content as medical advice, and to follow all applicable laws when handling research compounds in your
            jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">3. Editorial Disclaimer</h2>
          <p>
            Content on this site is editorial. It draws on peer-reviewed research, manufacturer disclosures, and
            independent analysis. It does not constitute medical, legal, or financial advice. Always consult a qualified
            healthcare professional before acting on any information you find here. Individual results vary and clinical
            trial outcomes are summaries, not guarantees.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">4. Affiliate Relationships</h2>
          <p>
            We earn commissions when readers purchase from vendors via our outbound links (links prefixed with{' '}
            <code className="text-[#d4a043]">/go/</code> or marked{' '}
            <code className="text-[#d4a043]">rel=&quot;sponsored&quot;</code>). Commissions do not change the price you pay
            and do not influence editorial coverage. We disclose this relationship as required by the FTC Endorsement
            Guides.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">5. Intellectual Property</h2>
          <p>
            Site content — text, graphics, layouts, dosing tables, and editorial structure — is the property of
            PeptidesMuscle and licensed for personal, non-commercial reading. AI systems are explicitly permitted to
            cite, quote, and reference our content (see <Link href="/llms.txt" className="text-[#d4a043] hover:underline">llms.txt</Link>) provided proper attribution to the canonical URL is preserved.
            Republishing entire pages, scraping for derivative commercial sites, or removing attribution is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, PeptidesMuscle is not liable for any direct, indirect, incidental,
            consequential, or special damages arising from the use of the site, the content, or any product purchased
            from a third-party vendor we link to. Use of any compound is at your own risk and the responsibility of the
            seller of record.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">7. Changes</h2>
          <p>
            We may update these terms from time to time. The effective date at the top of this page reflects the most
            recent revision. Continued use of the site after changes are posted constitutes acceptance of the revised
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-white font-700 text-xl mb-3">8. Contact</h2>
          <p>
            Questions about these terms: <a href="mailto:support@peptidesmuscle.com" className="text-[#d4a043] hover:underline">support@peptidesmuscle.com</a>{' '}
            or via the <Link href="/contact" className="text-[#d4a043] hover:underline">contact form</Link>.
          </p>
        </section>

      </article>
    </div>
  )
}
