import { productRating } from '@/lib/rating'

interface Props {
  slug: string
  size?: 'sm' | 'md' | 'lg'
  showCount?: boolean
  className?: string
}

export default function Rating({ slug, size = 'sm', showCount = true, className = '' }: Props) {
  const { stars, count } = productRating(slug)
  const full = Math.floor(stars)
  const hasHalf = stars - full >= 0.5
  const dims = size === 'lg' ? 18 : size === 'md' ? 14 : 12
  const textCls = size === 'lg' ? 'text-[13px]' : size === 'md' ? 'text-[12px]' : 'text-[11px]'

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center" style={{ gap: 1 }}>
        {[0, 1, 2, 3, 4].map(i => {
          const isFull = i < full
          const isHalf = i === full && hasHalf
          return (
            <svg key={i} width={dims} height={dims} viewBox="0 0 24 24" aria-hidden>
              <defs>
                <linearGradient id={`half-${slug}-${i}`}>
                  <stop offset="50%" stopColor="#d4a043" />
                  <stop offset="50%" stopColor="#2a2a32" />
                </linearGradient>
              </defs>
              <path
                d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.5l7.1-.6z"
                fill={isFull ? '#d4a043' : isHalf ? `url(#half-${slug}-${i})` : '#2a2a32'}
              />
            </svg>
          )
        })}
      </div>
      <span className={`${textCls} font-600 text-[#d4a043]`}>{stars.toFixed(1)}</span>
      {showCount && (
        <span className={`${textCls} text-[#50505e]`}>({count})</span>
      )}
    </div>
  )
}
