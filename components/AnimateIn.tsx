'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  type?: 'up' | 'fade' | 'scale' | 'left' | 'right'
  threshold?: number
}

export default function AnimateIn({
  children, className = '', delay = 0,
  type = 'up', threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return

    // If already visible in viewport, skip hiding entirely
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.95) {
      return // already visible — no animation needed
    }

    // Below fold: add hidden state, then reveal when scrolled into view
    el.classList.add(`ani-${type}`)
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('ani-in')
          obs.unobserve(el)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, type, threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
