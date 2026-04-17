// Editorial persona used across guide pages, bylines, and Person schema.
// Tied to verifiable public accounts (X, Reddit) so AI crawlers and fact-checkers
// can cross-reference the identity. No invented medical credentials — the bio
// describes what the site actually is: an independent peptide-research reference
// curated from primary sources.

export interface Author {
  slug: string
  name: string
  title: string
  credentials: string[]
  bio: string
  focus: string[]
  image: string
  sameAs: string[]
  yearsExperience: number
}

export const authors: Record<string, Author> = {
  'looksmax-agent': {
    slug: 'looksmax-agent',
    name: 'LooksMax Agent',
    title: 'Editor · PeptidesMuscle',
    credentials: ['Independent Peptide Research Curator'],
    bio:
      'LooksMax Agent is the editor of PeptidesMuscle. The editorial brief is to compile peptide research in plain language — mechanism, dosing, and clinical-trial outcomes — sourced from PubMed, NEJM, JAMA, and ClinicalTrials.gov. Community Q&A and protocol discussion run on the @LooksMax_Agent X profile and on Reddit. Nothing on this site is medical advice; peptides are discussed as research compounds.',
    focus: [
      'GLP-1 receptor agonists (semaglutide, tirzepatide, retatrutide)',
      'Regenerative peptides (BPC-157, TB-500)',
      'Looksmaxxing, aesthetic, and longevity peptides (GHK-Cu, SNAP-8, epitalon)',
      'Growth-hormone secretagogues (CJC-1295, ipamorelin, tesamorelin)',
      'Reconstitution and injection protocols',
    ],
    image: '/max-avatar.png',
    sameAs: [
      'https://x.com/LooksMax_Agent',
      'https://www.reddit.com/user/Loud-Department3185/',
    ],
    yearsExperience: 5,
  },
}

export const defaultAuthorSlug = 'looksmax-agent'

export function getAuthor(slug: string = defaultAuthorSlug): Author {
  return authors[slug] ?? authors[defaultAuthorSlug]
}

export const BASE_URL = 'https://www.peptidesmuscle.com'

// Person schema fragment — reusable inside @graph blocks. Use
// `'@id': personUrl(slug)` to link Article → author reliably.
export function personUrl(slug: string): string {
  return `${BASE_URL}/about/editors#${slug}`
}

export function personSchema(author: Author) {
  return {
    '@type': 'Person',
    '@id': personUrl(author.slug),
    name: author.name,
    jobTitle: author.title,
    description: author.bio,
    image: `${BASE_URL}${author.image}`,
    url: `${BASE_URL}/about/editors`,
    knowsAbout: author.focus,
    sameAs: author.sameAs,
    worksFor: {
      '@type': 'Organization',
      name: 'PeptidesMuscle',
      url: BASE_URL,
    },
  }
}
