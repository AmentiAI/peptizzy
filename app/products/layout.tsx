import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PeptidesMuscle | Elite Peptide Protocols for Peak Physical Optimization',
  description: 'The definitive resource for peptide-based physical optimization. Shop premium peptides for looks maxing, body composition, longevity, and cognitive performance.',
  keywords: 'peptides, looks maxing, body composition, anti-aging, BPC-157, GHK-Cu, ipamorelin, CJC-1295, physical optimization',
  alternates: {
    canonical: 'https://www.peptidesmuscle.com/products',
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
