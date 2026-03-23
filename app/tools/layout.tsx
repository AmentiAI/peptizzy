import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide Tools: Dose Calculator, Stack Matcher & Protocol Reference | PeptidesMuscle',
  description: 'Free peptide research tools — reconstitution calculator, goal-based stack matcher, and quick protocol reference for dosing, timing, and cycle length.',
  alternates: {
    canonical: 'https://www.peptidesmuscle.com/tools',
  },
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children
}
