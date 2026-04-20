import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptides Muscle FAQ',
  description: 'Answers to the most common questions about peptides — how they work, how to inject, what to stack, dosing protocols, side effects, sourcing, and results timelines.',
  alternates: { canonical: 'https://www.peptidesmuscle.com/faq' },
  openGraph: {
    title: 'Peptides Muscle FAQ',
    description: 'Answers to the most common questions about peptides — protocols, dosing, stacking, and results.',
    url: 'https://www.peptidesmuscle.com/faq',
    type: 'website',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides Muscle FAQ',
    description: 'Answers to the most common questions about peptides — protocols, dosing, stacking, and results.',
    images: ['/max-avatar.png'],
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
