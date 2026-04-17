import Link from 'next/link'
import { getAuthor } from '@/lib/authors'

interface Props {
  slug?: string
  datePublished?: string
  dateModified?: string
  reviewedBy?: string
}

// Visible author byline rendered at the top of every guide. Mirrors the
// Person schema already emitted in JSON-LD so humans and AI crawlers see the
// same attribution.
export default function AuthorByline({ slug, datePublished, dateModified, reviewedBy }: Props) {
  const author = getAuthor(slug)
  const reviewer = reviewedBy ? getAuthor(reviewedBy) : author

  const fmt = (iso?: string) => {
    if (!iso) return null
    const [y, m, d] = iso.split('-').map(Number)
    const date = new Date(Date.UTC(y, m - 1, d))
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
  }

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#8888a0] border-y border-white/[0.06] py-4 my-8">
      <span>
        By{' '}
        <Link href={`/about/editors#${author.slug}`} className="text-white hover:text-[#d4a043] font-500">
          {author.name}
        </Link>
        <span className="text-[#50505e]">, {author.credentials.join(', ')}</span>
      </span>

      {reviewer && reviewer.slug !== author.slug && (
        <span>
          · Reviewed by{' '}
          <Link href={`/about/editors#${reviewer.slug}`} className="text-white hover:text-[#d4a043] font-500">
            {reviewer.name}
          </Link>
        </span>
      )}

      {datePublished && (
        <span>· Published <time dateTime={datePublished}>{fmt(datePublished)}</time></span>
      )}
      {dateModified && dateModified !== datePublished && (
        <span>· Updated <time dateTime={dateModified}>{fmt(dateModified)}</time></span>
      )}
    </div>
  )
}
