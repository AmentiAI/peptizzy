import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Peptides | Shop Elite Research Peptides | PeptidesMuscle',
  description: 'The definitive resource for peptide-based physical optimization. Shop premium peptides for looks maxing, body composition, longevity, and cognitive performance.',
  keywords: 'peptides, looks maxing, body composition, anti-aging, BPC-157, GHK-Cu, ipamorelin, CJC-1295, physical optimization',
  alternates: {
    canonical: 'https://www.peptidesmuscle.com/products',
  },
  openGraph: {
    title: 'All Peptides | Shop Elite Research Peptides | PeptidesMuscle',
    description: 'Shop premium peptides for looks maxing, body composition, longevity, and cognitive performance.',
    url: 'https://www.peptidesmuscle.com/products',
    type: 'website',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Peptides | Shop Elite Research Peptides | PeptidesMuscle',
    description: 'Shop premium peptides for looks maxing, body composition, longevity, and cognitive performance.',
    images: ['/max-avatar.png'],
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
