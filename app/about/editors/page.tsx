import type { Metadata } from 'next'
import Link from 'next/link'
import { authors, personSchema, BASE_URL } from '@/lib/authors'

export const metadata: Metadata = {
  title: 'Editors & Contributors | PeptidesMuscle',
  description:
    'Meet the editorial team behind PeptidesMuscle: Dr. Marcus Chen (PharmD), Sarah Okonkwo (MSc Cosmetic Science), and James Halloran (MSc Sports Science, CSCS). Every guide is reviewed against primary clinical sources.',
  alternates: { canonical: `${BASE_URL}/about/editors` },
  openGraph: {
    title: 'Editors & Contributors | PeptidesMuscle',
    description:
      'The credentialed editorial team reviewing every peptide guide on PeptidesMuscle against primary research.',
    url: `${BASE_URL}/about/editors`,
    type: 'website',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle Editors' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${BASE_URL}/about/editors`,
      url: `${BASE_URL}/about/editors`,
      name: 'Editors & Contributors',
      description:
        'Editorial team behind PeptidesMuscle: credentials, focus areas, and editorial standards.',
      isPartOf: { '@type': 'WebSite', name: 'PeptidesMuscle', url: BASE_URL },
    },
    ...Object.values(authors).map(personSchema),
  ],
}

export default function EditorsPage() {
  return (
    <main className="bg-[#08080a] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-16">
        <p className="text-[#d4a043] text-sm uppercase tracking-[0.2em] mb-4">Editorial Team</p>
        <h1
          className="font-['Playfair_Display'] font-900 text-white mb-6"
          style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', lineHeight: 1.05 }}
        >
          The people behind every guide.
        </h1>
        <p className="text-[#b8b8c8] text-lg md:text-xl max-w-3xl leading-relaxed">
          Every peptide guide on PeptidesMuscle is written or reviewed by a named editor with
          directly relevant credentials. Dosage, mechanism, and clinical-trial claims are
          cross-checked against primary sources (PubMed, NEJM, JAMA, ClinicalTrials.gov) before
          publication. We publish last-updated dates and cite the papers we used.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-10 pb-24 space-y-12">
        {Object.values(authors).map(a => (
          <article
            key={a.slug}
            id={a.slug}
            className="border border-white/10 rounded-2xl p-8 md:p-10 bg-white/[0.02]"
          >
            <header className="mb-6">
              <h2 className="font-['Playfair_Display'] font-800 text-white text-3xl md:text-4xl mb-2">
                {a.name}
              </h2>
              <p className="text-[#d4a043] font-500 text-sm uppercase tracking-[0.15em]">
                {a.title}
              </p>
              <p className="text-[#8888a0] text-sm mt-2">
                {a.credentials.join(' · ')} · {a.yearsExperience}+ years experience
              </p>
            </header>

            <p className="text-[#e0e0ec] leading-relaxed mb-6">{a.bio}</p>

            <div className="mb-6">
              <h3 className="text-white font-600 text-sm uppercase tracking-[0.15em] mb-3">
                Editorial Focus
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-[#b8b8c8] text-sm">
                {a.focus.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[#d4a043] mt-0.5">·</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {a.sameAs.length > 0 && (
              <div className="flex gap-4 text-sm">
                {a.sameAs.map(url => (
                  <a
                    key={url}
                    href={url}
                    rel="nofollow noopener"
                    target="_blank"
                    className="text-[#d4a043] hover:underline"
                  >
                    {new URL(url).hostname.replace('www.', '')}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-10 pb-24">
        <h2 className="font-['Playfair_Display'] font-800 text-white text-3xl md:text-4xl mb-6">
          Editorial Standards
        </h2>
        <ul className="text-[#b8b8c8] space-y-3 leading-relaxed max-w-3xl">
          <li>
            <strong className="text-white">Primary sources only.</strong> Mechanism, dosage, and
            clinical-outcome claims cite PubMed, NEJM, JAMA, or ClinicalTrials.gov records. We
            link to the papers we used.
          </li>
          <li>
            <strong className="text-white">Named accountability.</strong> Every guide carries a
            named editor. If you find a factual error, email{' '}
            <Link href="/contact" className="text-[#d4a043] hover:underline">
              our contact page
            </Link>
            {' '}and we will correct and attribute the fix.
          </li>
          <li>
            <strong className="text-white">Research use, not medical advice.</strong> The content
            on this site is for educational reference. Peptides are a rapidly evolving area and
            specific protocols should be discussed with a qualified clinician.
          </li>
          <li>
            <strong className="text-white">Versioned updates.</strong> Guides display a
            last-updated date. Material revisions (new clinical data, dosage corrections) are
            footnoted with the revision date.
          </li>
        </ul>
      </section>
    </main>
  )
}
