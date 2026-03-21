import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide FAQ | Everything You Need to Know | PeptidesMuscle',
  description: 'Answers to the most common questions about peptides — how they work, how to inject, what to stack, dosing protocols, side effects, sourcing, and results timelines.',
  alternates: { canonical: 'https://peptidesmuscle.com/faq' },
  openGraph: {
    title: 'Peptide FAQ | PeptidesMuscle',
    description: 'Answers to the most common questions about peptides — protocols, dosing, stacking, and results.',
    url: 'https://peptidesmuscle.com/faq',
    type: 'website',
    siteName: 'PeptidesMuscle',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide FAQ | PeptidesMuscle',
    description: 'Answers to the most common questions about peptides — protocols, dosing, stacking, and results.',
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
