'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '/products',     label: 'All Peptides' },
  { href: '/looks-maxing', label: 'Looks Maxing' },
  { href: '/stacks',       label: 'Stacks' },
  { href: '/guide',        label: 'Guide' },
  { href: '/faq',          label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#07070a]/85 backdrop-blur-2xl border-b border-white/[0.05]' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="PeptidesMuscle home">
          {/* Hex icon */}
          <div className="relative w-8 h-8 flex-shrink-0">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M16 2 L28.7 9.5 L28.7 22.5 L16 30 L3.3 22.5 L3.3 9.5 Z"
                fill="none" stroke="#d4a043" strokeWidth="1.25"/>
              <circle cx="16" cy="16" r="4" fill="#d4a043" opacity="0.9"/>
              <circle cx="16" cy="16" r="7" fill="none" stroke="#d4a043" strokeWidth="0.5" opacity="0.3"/>
            </svg>
          </div>
          <span className="font-['Playfair_Display'] text-[20px] font-900 tracking-tight text-white">
            Peptides<span className="gold-shimmer">Muscle</span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="px-4 py-2 text-[13px] font-500 text-[#8888a0] hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-150">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-600 transition-all duration-200"
            style={{ background: 'rgba(212,160,67,0.1)', border: '1px solid rgba(212,160,67,0.3)', color: '#d4a043' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(212,160,67,0.18)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(212,160,67,0.1)')}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Chat with Max
          </button>
          <a href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary text-[12px] py-2.5 px-5">
            Shop Now
          </a>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className={`w-5 h-[1.5px] bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <div className={`w-5 h-[1.5px] bg-white mt-1.5 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-[1.5px] bg-white mt-1.5 transition-all duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#07070a]/96 backdrop-blur-2xl border-t border-white/[0.05] px-6 py-6">
          <nav className="flex flex-col">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="py-4 text-base text-[#8888a0] hover:text-white border-b border-white/[0.05] transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => { setOpen(false); window.dispatchEvent(new CustomEvent('open-chat')) }}
            className="w-full mt-6 py-3.5 rounded-xl text-[14px] font-600 flex items-center justify-center gap-2"
            style={{ background: 'rgba(212,160,67,0.1)', border: '1px solid rgba(212,160,67,0.3)', color: '#d4a043' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Chat with Max
          </button>
          <a href="https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary w-full mt-3 text-center">
            Shop Apollo Peptides
          </a>
        </div>
      )}
    </header>
  )
}
