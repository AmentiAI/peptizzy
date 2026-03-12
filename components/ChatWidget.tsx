'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PeptideCard {
  slug: string
  name: string
  category: string
  price: string
  tagline: string
  short_description: string
  image: string
  affiliate_url: string
}

interface Message {
  role: 'user' | 'assistant'
  content: string
  products?: PeptideCard[]
}

const CATEGORY_ACCENT: Record<string, string> = {
  'Looks Maxing':           '#d4a043',
  'Body Composition':       '#6090ff',
  'Weight Management':      '#e05080',
  'Recovery & Healing':     '#40c090',
  'Anti-Aging':             '#a060ff',
  'Cognitive Performance':  '#40c0ff',
  'Immune & Vitality':      '#60d090',
  'Performance & Vitality': '#ff8040',
}

const STARTERS = [
  'Best peptide for skin & looks?',
  'How do I start looks maxing?',
  'Best stack for fat loss?',
  'BPC-157 vs TB-500 — which one?',
]

function ProductCard({ p }: { p: PeptideCard }) {
  const accent = CATEGORY_ACCENT[p.category] ?? '#d4a043'
  return (
    <div className="rounded-xl overflow-hidden flex-shrink-0" style={{
      width: '180px',
      background: '#0a0a0e',
      border: `1px solid ${accent}30`,
    }}>
      {/* Image */}
      <div className="relative" style={{ height: '110px',
        background: `radial-gradient(ellipse at 50% 70%, ${accent}25, #070709)` }}>
        <Image src={p.image} alt={p.name} fill className="object-contain p-3" />
        <div className="absolute top-2 left-2">
          <span className="text-[9px] font-600 tracking-wider uppercase px-2 py-0.5 rounded-full"
            style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}35` }}>
            {p.category}
          </span>
        </div>
      </div>
      {/* Body */}
      <div className="p-3">
        <p className="text-white font-700 text-[12px] leading-tight mb-0.5">{p.name}</p>
        <p className="text-[10px] leading-snug mb-2.5" style={{ color: accent }}>{p.tagline}</p>
        <p className="text-[#8888a0] text-[10px] leading-relaxed mb-3 line-clamp-2">{p.short_description}</p>
        <div className="flex items-center justify-between">
          <span className="font-700 text-[12px]" style={{ color: accent }}>{p.price}</span>
        </div>
        <div className="flex gap-1.5 mt-2">
          <Link href={`/products/${p.slug}`} target="_blank"
            className="flex-1 text-center text-[10px] py-1.5 rounded-lg font-600 transition-colors"
            style={{ background: 'rgba(255,255,255,0.06)', color: '#c0c0d0', border: '1px solid rgba(255,255,255,0.08)' }}>
            Details
          </Link>
          <a href={p.affiliate_url} target="_blank" rel="noopener noreferrer"
            className="flex-1 text-center text-[10px] py-1.5 rounded-lg font-700 transition-all"
            style={{ background: `linear-gradient(135deg, #c08020, #e8b840)`, color: '#07070a' }}>
            Buy
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey — I'm Max, your peptide optimization expert. Tell me your goal and I'll build you the perfect protocol. Looking to look better, perform better, recover faster, or all three?",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [hasUnread, setHasUnread] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setHasUnread(false)
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function send(text?: string) {
    const content = (text ?? input).trim()
    if (!content || loading) return
    setInput('')

    const newMessages: Message[] = [...messages, { role: 'user', content }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.reply,
        products: data.products?.length ? data.products : undefined,
      }])
      if (!open) setHasUnread(true)
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection error — try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ── Floating toggle button ── */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Open peptide advisor"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        style={{
          background: open
            ? 'linear-gradient(135deg, #1a1a22, #0f0f13)'
            : 'linear-gradient(135deg, #c08020, #e8b840)',
          boxShadow: open
            ? '0 8px 32px rgba(0,0,0,0.5)'
            : '0 8px 32px rgba(212,160,67,0.5), 0 0 60px rgba(212,160,67,0.2)',
          border: open ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}>
        {open ? (
          <svg className="w-5 h-5 text-[#8888a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-6 h-6 text-[#07070a]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 border-2 border-[#07070a]" />
            )}
          </>
        )}
      </button>

      {/* ── Chat panel ── */}
      <div
        className="fixed bottom-24 right-6 z-50 flex flex-col"
        style={{
          width: 'min(420px, calc(100vw - 24px))',
          height: '580px',
          opacity: open ? 1 : 0,
          transform: open ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(16px)',
          transition: 'opacity 0.25s ease, transform 0.25s cubic-bezier(.22,.68,0,1.2)',
          pointerEvents: open ? 'auto' : 'none',
          borderRadius: '20px',
          background: '#0f0f13',
          border: '1px solid rgba(212,160,67,0.18)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(212,160,67,0.06) inset',
          overflow: 'hidden',
        }}>

        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b flex-shrink-0"
          style={{ borderColor: 'rgba(212,160,67,0.1)', background: '#0a0a0e' }}>
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-[#07070a] font-black text-[14px]"
            style={{ background: 'linear-gradient(135deg, #c08020, #f0c858)' }}>
            M
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-700 text-[14px] leading-tight">Max</p>
            <p className="text-[11px]" style={{ color: '#d4a043' }}>Peptide Optimization Expert · PeptiZzy AI</p>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-[#50505e]">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0"
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(212,160,67,0.15) transparent' }}>
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              {m.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[#07070a] font-black text-[11px] mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #c08020, #f0c858)' }}>
                  M
                </div>
              )}
              <div className="flex flex-col gap-2 max-w-[86%]">
                <div
                  className="px-4 py-3 text-[13px] leading-relaxed"
                  style={{
                    borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '4px 16px 16px 16px',
                    background: m.role === 'user'
                      ? 'linear-gradient(135deg, rgba(212,160,67,0.18), rgba(212,160,67,0.10))'
                      : 'rgba(255,255,255,0.04)',
                    border: m.role === 'user'
                      ? '1px solid rgba(212,160,67,0.22)'
                      : '1px solid rgba(255,255,255,0.06)',
                    color: m.role === 'user' ? '#f4f4f6' : '#c8c8d8',
                    whiteSpace: 'pre-wrap',
                  }}>
                  {m.content}
                </div>

                {/* Product cards — horizontal scroll */}
                {m.products && m.products.length > 0 && (
                  <div className="flex gap-3 overflow-x-auto pb-1"
                    style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(212,160,67,0.15) transparent' }}>
                    {m.products.map(p => (
                      <ProductCard key={p.slug} p={p} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Loading dots */}
          {loading && (
            <div className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[#07070a] font-black text-[11px]"
                style={{ background: 'linear-gradient(135deg, #c08020, #f0c858)' }}>
                M
              </div>
              <div className="px-4 py-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex gap-1.5 items-center h-5">
                  {[0, 1, 2].map(j => (
                    <span key={j} className="w-1.5 h-1.5 rounded-full bg-[#d4a043] animate-bounce"
                      style={{ animationDelay: `${j * 0.15}s`, animationDuration: '0.9s' }} />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Starter prompts */}
        {messages.length === 1 && (
          <div className="px-4 py-2 flex flex-wrap gap-1.5 flex-shrink-0">
            {STARTERS.map(s => (
              <button key={s} onClick={() => send(s)} disabled={loading}
                className="text-[11px] px-3 py-1.5 rounded-full transition-all duration-150 hover:scale-105 disabled:opacity-50"
                style={{
                  background: 'rgba(212,160,67,0.08)',
                  border: '1px solid rgba(212,160,67,0.2)',
                  color: '#d4a043',
                }}>
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input area */}
        <div className="px-4 pb-4 pt-3 border-t flex-shrink-0" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="flex gap-2 items-center rounded-2xl px-4 py-2.5 transition-all"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
              placeholder="Ask about peptides, goals, stacks..."
              disabled={loading}
              className="flex-1 bg-transparent text-[13px] text-white outline-none placeholder:text-[#50505e] disabled:opacity-50"
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-150 disabled:opacity-30 hover:scale-110 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #c08020, #e8b840)' }}>
              <svg className="w-3.5 h-3.5 text-[#07070a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-[#50505e] text-center mt-2">
            Powered by PeptiZzy AI · Not medical advice
          </p>
        </div>
      </div>
    </>
  )
}
