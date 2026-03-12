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
    if (!el) return
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
  }, [delay, threshold])

  return (
    <div ref={ref} className={`ani-${type} ${className}`}>
      {children}
    </div>
  )
}
