import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide Tools: Dose Calculator, Stack Matcher & Protocol Reference | PeptidesMuscle',
  description: 'Free peptide research tools — reconstitution calculator, goal-based stack matcher, and quick protocol reference for dosing, timing, and cycle length.',
  alternates: {
    canonical: 'https://www.peptidesmuscle.com/tools',
  },
  openGraph: {
    title: 'Peptide Tools: Dose Calculator, Stack Matcher & Protocol Reference | PeptidesMuscle',
    description: 'Free peptide research tools — reconstitution calculator, goal-based stack matcher, and quick protocol reference for dosing, timing, and cycle length.',
    url: 'https://www.peptidesmuscle.com/tools',
    type: 'website',
    siteName: 'PeptidesMuscle',
    images: [{ url: '/max-avatar.png', width: 1200, height: 630, alt: 'PeptidesMuscle' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Tools: Dose Calculator, Stack Matcher & Protocol Reference | PeptidesMuscle',
    description: 'Free peptide research tools — reconstitution calculator, goal-based stack matcher, and quick protocol reference.',
    images: ['/max-avatar.png'],
  },
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children
}
