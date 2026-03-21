import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const BASE_URL = 'https://peptidesmuscle.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'PeptidesMuscle | Elite Peptide Protocols for Peak Physical Optimization',
  description: 'The definitive resource for peptide-based physical optimization. Shop premium peptides for looks maxing, body composition, longevity, and cognitive performance.',
  keywords: 'peptides, looks maxing, body composition, anti-aging, BPC-157, GHK-Cu, ipamorelin, CJC-1295, physical optimization',
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'PeptidesMuscle | Elite Peptide Protocols',
    description: 'Premium peptide protocols for looks maximization, body composition, and longevity.',
    type: 'website',
    url: BASE_URL,
    siteName: 'PeptidesMuscle',
    images: [
      {
        url: '/max-avatar.png',
        width: 1200,
        height: 630,
        alt: 'PeptidesMuscle — Elite Peptide Protocols',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeptidesMuscle | Elite Peptide Protocols',
    description: 'Premium peptide protocols for looks maximization, body composition, and longevity.',
    images: ['/max-avatar.png'],
  },
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'PeptidesMuscle',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/max-avatar.png` },
      description: 'The definitive resource for peptide-based physical optimization — looks maxing, body composition, anti-aging, and recovery protocols.',
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'PeptidesMuscle',
      publisher: { '@id': `${BASE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/products?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EP33087SHB"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EP33087SHB');
        `}} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
