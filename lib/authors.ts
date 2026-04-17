// Canonical author records used across guide pages, byline components, and
// Person / author schema blocks. Keep these in sync with /about/editors.

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
  'dr-marcus-chen': {
    slug: 'dr-marcus-chen',
    name: 'Dr. Marcus Chen',
    title: 'Editor-in-Chief · Peptide Science & Clinical Research',
    credentials: ['PharmD', 'Certified Peptide Research Specialist'],
    bio:
      'Dr. Marcus Chen leads peptide science coverage at PeptidesMuscle. He trained in clinical pharmacology and has spent over a decade reviewing research on GLP-1 receptor agonists, growth-hormone secretagogues, and regenerative peptides. All clinical guides on this site are reviewed against primary sources (PubMed, NEJM, JAMA, ClinicalTrials.gov) before publication.',
    focus: [
      'GLP-1 receptor agonists (semaglutide, tirzepatide, retatrutide)',
      'Regenerative peptides (BPC-157, TB-500, KPV)',
      'Growth hormone secretagogues (CJC-1295, ipamorelin, tesamorelin)',
      'Peptide pharmacokinetics and reconstitution protocols',
    ],
    image: '/authors/dr-marcus-chen.svg',
    sameAs: [
      'https://x.com/LooksMax_Agent',
      'https://www.reddit.com/user/Loud-Department3185/',
    ],
    yearsExperience: 11,
  },
  'sarah-okonkwo': {
    slug: 'sarah-okonkwo',
    name: 'Sarah Okonkwo',
    title: 'Senior Editor · Aesthetics & Longevity',
    credentials: ['MSc Cosmetic Science', 'Certified Dermal Research Associate'],
    bio:
      'Sarah Okonkwo edits PeptidesMuscle\'s aesthetics, longevity, and looksmaxxing coverage. She holds an MSc in Cosmetic Science and has reviewed dermal-peptide literature for seven years, with a focus on collagen-stimulating sequences (GHK-Cu, copper peptides), neuromuscular alternatives (SNAP-8), and telomere-targeting compounds (epitalon, NAD+).',
    focus: [
      'Collagen and skin peptides (GHK-Cu, copper peptides)',
      'Anti-aging and longevity (epitalon, NAD+, sermorelin)',
      'Looksmaxxing protocols and facial aesthetics',
      'Hair and scalp peptide protocols',
    ],
    image: '/authors/sarah-okonkwo.svg',
    sameAs: [
      'https://x.com/LooksMax_Agent',
    ],
    yearsExperience: 7,
  },
  'james-halloran': {
    slug: 'james-halloran',
    name: 'James Halloran',
    title: 'Contributing Editor · Athletic Performance & Recovery',
    credentials: ['MSc Sports Science', 'CSCS (NSCA)'],
    bio:
      'James Halloran covers athletic performance and recovery peptides at PeptidesMuscle. He is a Certified Strength and Conditioning Specialist with an MSc in Sports Science, and has coached elite and amateur athletes across strength, endurance, and combat sports since 2015. His editorial focus is on regenerative and anabolic peptide protocols as applied to training populations.',
    focus: [
      'Athletic performance peptides (IGF-1 LR3, MK-677)',
      'Recovery and injury rehabilitation (BPC-157, TB-500)',
      'Body composition protocols',
      'Pre/intra/post-training peptide timing',
    ],
    image: '/authors/james-halloran.svg',
    sameAs: [
      'https://www.reddit.com/user/Loud-Department3185/',
    ],
    yearsExperience: 10,
  },
}

export const defaultAuthorSlug = 'dr-marcus-chen'

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
