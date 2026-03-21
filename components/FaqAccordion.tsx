'use client'

import { useState } from 'react'

interface FaqItem { q: string; a: string }

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {faqs.map((item, i) => (
        <div key={i} className="card rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-white text-[15px] font-500 group-hover:text-[#d4a043] transition-colors pr-4">
              {item.q}
            </span>
            <svg
              className={`w-4 h-4 text-[#d4a043] flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <p className="text-[#8888a0] text-[14px] leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
