'use client'

import { useState } from 'react'
import Link from 'next/link'
import { stacks } from '@/lib/stacks'

// ─── Reconstitution Calculator ────────────────────────────────────────────────

function ReconstitutionCalc() {
  const [vialMg, setVialMg]     = useState('')
  const [bacMl, setBacMl]       = useState('')
  const [doseMcg, setDoseMcg]   = useState('')

  const vial  = parseFloat(vialMg)
  const bac   = parseFloat(bacMl)
  const dose  = parseFloat(doseMcg)

  const concMcgMl  = (!isNaN(vial) && !isNaN(bac) && bac > 0) ? (vial * 1000) / bac : null
  const injectMl   = (concMcgMl && !isNaN(dose) && dose > 0) ? dose / concMcgMl : null
  const injectUnits = injectMl ? injectMl * 100 : null // 100-unit syringe = 1 mL

  return (
    <div className="card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(212,160,67,0.12)', border: '1px solid rgba(212,160,67,0.25)' }}>
          <svg className="w-4 h-4" style={{ color: '#d4a043' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="label-gold mb-0.5">Tool 01</p>
          <h2 className="text-white font-700 text-[17px]">Reconstitution Calculator</h2>
        </div>
      </div>
      <p className="text-[#8888a0] text-[13px] mb-6 leading-relaxed">
        Enter your vial size, how much BAC water you add, and your target dose — get the exact volume to draw on an insulin syringe.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="label block mb-2">Vial Size (mg)</label>
          <input
            type="number" min="0" placeholder="e.g. 5"
            value={vialMg} onChange={e => setVialMg(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-white text-[14px] outline-none transition-all"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,160,67,0.5)')}
            onBlur={e  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
          />
        </div>
        <div>
          <label className="label block mb-2">BAC Water Added (mL)</label>
          <input
            type="number" min="0" step="0.1" placeholder="e.g. 2"
            value={bacMl} onChange={e => setBacMl(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-white text-[14px] outline-none transition-all"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,160,67,0.5)')}
            onBlur={e  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
          />
        </div>
        <div>
          <label className="label block mb-2">Desired Dose (mcg)</label>
          <input
            type="number" min="0" placeholder="e.g. 250"
            value={doseMcg} onChange={e => setDoseMcg(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-white text-[14px] outline-none transition-all"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,160,67,0.5)')}
            onBlur={e  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
          />
        </div>
      </div>

      {concMcgMl !== null && (
        <div className="rounded-xl p-5" style={{ background: 'rgba(212,160,67,0.06)', border: '1px solid rgba(212,160,67,0.2)' }}>
          <p className="label-gold mb-4">Results</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-[#8888a0] text-[12px] mb-1">Concentration</p>
              <p className="text-white font-700 text-[22px]">{concMcgMl.toFixed(0)}<span className="text-[#8888a0] text-[13px] font-400 ml-1">mcg/mL</span></p>
            </div>
            {injectMl !== null && (
              <>
                <div>
                  <p className="text-[#8888a0] text-[12px] mb-1">Volume to Inject</p>
                  <p className="text-white font-700 text-[22px]">{injectMl.toFixed(3)}<span className="text-[#8888a0] text-[13px] font-400 ml-1">mL</span></p>
                </div>
                <div>
                  <p className="text-[#8888a0] text-[12px] mb-1">Insulin Syringe Units</p>
                  <p style={{ color: '#d4a043' }} className="font-700 text-[22px]">{injectUnits!.toFixed(1)}<span className="text-[#8888a0] text-[13px] font-400 ml-1">units</span></p>
                </div>
              </>
            )}
          </div>
          {injectMl !== null && (
            <p className="text-[#8888a0] text-[12px] mt-4 leading-relaxed">
              Draw to the <strong className="text-white">{injectUnits!.toFixed(1)} unit</strong> mark on a 100-unit (1mL) insulin syringe to get exactly {dose}mcg per injection.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Goal → Stack Matcher ─────────────────────────────────────────────────────

const GOALS = [
  { id: 'fat-loss',    label: 'Fat Loss',        icon: '⚡', keys: ['weight', 'fat', 'metabolic', 'glp', 'sema', 'tirze', 'retat'] },
  { id: 'muscle',      label: 'Muscle & Body',   icon: '💪', keys: ['muscle', 'body comp', 'anabolic', 'igf', 'sculptor'] },
  { id: 'looks',       label: 'Looks Maxing',    icon: '✨', keys: ['looks', 'skin', 'collagen', 'ghk', 'snap', 'appearance'] },
  { id: 'recovery',    label: 'Recovery',        icon: '🔄', keys: ['recover', 'heal', 'tendon', 'wolverine', 'bpc', 'tb-500'] },
  { id: 'anti-aging',  label: 'Anti-Aging',      icon: '🧬', keys: ['longevity', 'telomere', 'nad', 'epithalon', 'aging'] },
  { id: 'beginner',    label: 'Just Starting',   icon: '🚀', keys: ['beginner'] },
]

function GoalMatcher() {
  const [selected, setSelected] = useState<string[]>([])

  function toggle(id: string) {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const matched = selected.length === 0 ? [] : stacks.filter(s => {
    const text = (s.name + s.goal + s.tagline + s.id + s.difficulty + s.outcomes.join(' ')).toLowerCase()
    return selected.some(g => {
      const goal = GOALS.find(x => x.id === g)!
      return goal.keys.some(k => text.includes(k))
    })
  })

  return (
    <div className="card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(96,144,255,0.12)', border: '1px solid rgba(96,144,255,0.25)' }}>
          <svg className="w-4 h-4" style={{ color: '#6090ff' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <div>
          <p className="label mb-0.5" style={{ color: '#6090ff' }}>Tool 02</p>
          <h2 className="text-white font-700 text-[17px]">Stack Matcher</h2>
        </div>
      </div>
      <p className="text-[#8888a0] text-[13px] mb-6 leading-relaxed">
        Select your goals and get matched to the right protocol stack.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {GOALS.map(g => {
          const active = selected.includes(g.id)
          return (
            <button key={g.id} onClick={() => toggle(g.id)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-500 transition-all duration-150"
              style={{
                background: active ? 'rgba(96,144,255,0.15)' : 'rgba(255,255,255,0.04)',
                border: active ? '1px solid rgba(96,144,255,0.5)' : '1px solid rgba(255,255,255,0.08)',
                color: active ? '#6090ff' : '#8888a0',
              }}>
              <span>{g.icon}</span>
              {g.label}
            </button>
          )
        })}
      </div>

      {selected.length > 0 && (
        matched.length > 0 ? (
          <div className="space-y-3">
            {matched.map(s => (
              <Link key={s.id} href={`/stacks/${s.id}`}
                className="flex items-start justify-between gap-4 p-4 rounded-xl transition-all duration-200 group"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(96,144,255,0.35)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)' }}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-white font-600 text-[14px]">{s.name}</p>
                    <span className="text-[11px] px-2 py-0.5 rounded-full font-500"
                      style={{ background: 'rgba(96,144,255,0.1)', color: '#6090ff' }}>
                      {s.difficulty}
                    </span>
                  </div>
                  <p className="text-[#8888a0] text-[12px] leading-relaxed">{s.tagline}</p>
                  <p className="text-[#8888a0] text-[11px] mt-1.5">{s.duration} · {s.compounds.length} compounds</p>
                </div>
                <svg className="w-4 h-4 text-[#8888a0] group-hover:text-[#6090ff] flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-4 rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-[#8888a0] text-[13px]">No exact stack match — <button onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))} className="underline" style={{ color: '#6090ff' }}>ask Max</button> for a custom protocol.</p>
          </div>
        )
      )}
    </div>
  )
}

// ─── Peptide Reference Card ───────────────────────────────────────────────────

const PEPTIDE_PROTOCOLS: Record<string, {
  dose: string; frequency: string; timing: string; cycle: string; breakPeriod: string; route: string; category: string
}> = {
  'BPC-157':          { dose: '200–500mcg', frequency: 'Daily',          timing: 'Any time, near injury site preferred', cycle: '4–8 weeks',  breakPeriod: '4 weeks',  route: 'SubQ or IM', category: 'Recovery & Healing' },
  'TB-500':           { dose: '2–5mg',      frequency: '2× per week',    timing: 'Any time',                            cycle: '4–8 weeks',  breakPeriod: '4 weeks',  route: 'SubQ',       category: 'Recovery & Healing' },
  'GHK-Cu':           { dose: '1–2mg',      frequency: '3–5× per week',  timing: 'Any time',                            cycle: '12 weeks',   breakPeriod: '4 weeks',  route: 'SubQ',       category: 'Looks Maxing' },
  'CJC-1295/Ipam':    { dose: '100mcg each', frequency: '2× daily',       timing: 'Fasted — morning & pre-sleep',       cycle: '12–16 wks',  breakPeriod: '8 weeks',  route: 'SubQ',       category: 'Body Composition' },
  'IGF-1 LR3':        { dose: '20–50mcg',   frequency: 'Daily',          timing: 'Post-workout',                        cycle: '4 weeks',    breakPeriod: '4 weeks',  route: 'SubQ or IM', category: 'Body Composition' },
  'Epithalon':        { dose: '5–10mg',      frequency: 'Daily',          timing: 'Any time',                            cycle: '10–20 days', breakPeriod: '6 months', route: 'SubQ',       category: 'Anti-Aging' },
  'NAD+':             { dose: '100–500mg',   frequency: 'Daily or 2–3×/wk', timing: 'Morning, fasted',                 cycle: 'Ongoing',    breakPeriod: 'None req.', route: 'SubQ or IV', category: 'Anti-Aging' },
  'Selank':           { dose: '250–500mcg',  frequency: 'Daily',          timing: 'Morning',                             cycle: '2–4 weeks',  breakPeriod: '2 weeks',  route: 'Intranasal', category: 'Cognitive' },
  'Semax':            { dose: '100–300mcg',  frequency: 'Daily',          timing: 'Morning',                             cycle: '2–4 weeks',  breakPeriod: '2 weeks',  route: 'Intranasal', category: 'Cognitive' },
  'Semaglutide':      { dose: '0.25–2.4mg',  frequency: 'Once weekly',    timing: 'Same day each week',                  cycle: 'Ongoing',    breakPeriod: 'None req.', route: 'SubQ',       category: 'Weight Loss' },
  'Tirzepatide':      { dose: '2.5–15mg',    frequency: 'Once weekly',    timing: 'Same day each week',                  cycle: 'Ongoing',    breakPeriod: 'None req.', route: 'SubQ',       category: 'Weight Loss' },
  'Retatrutide':      { dose: '1–12mg',      frequency: 'Once weekly',    timing: 'Same day each week',                  cycle: 'Ongoing',    breakPeriod: 'None req.', route: 'SubQ',       category: 'Weight Loss' },
  'SNAP-8':           { dose: 'Topical 10mg vial', frequency: '2× daily', timing: 'Morning & evening',                  cycle: '8–12 weeks', breakPeriod: '4 weeks',  route: 'Topical',    category: 'Looks Maxing' },
}

const CATEGORY_COLOR: Record<string, string> = {
  'Recovery & Healing': '#40c090',
  'Looks Maxing':       '#d4a043',
  'Body Composition':   '#6090ff',
  'Anti-Aging':         '#a060ff',
  'Cognitive':          '#40c0ff',
  'Weight Loss':        '#e05080',
}

function ProtocolReference() {
  const [active, setActive] = useState<string | null>(null)
  const info = active ? PEPTIDE_PROTOCOLS[active] : null

  return (
    <div className="card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(160,96,255,0.12)', border: '1px solid rgba(160,96,255,0.25)' }}>
          <svg className="w-4 h-4" style={{ color: '#a060ff' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <div>
          <p className="label mb-0.5" style={{ color: '#a060ff' }}>Tool 03</p>
          <h2 className="text-white font-700 text-[17px]">Protocol Reference</h2>
        </div>
      </div>
      <p className="text-[#8888a0] text-[13px] mb-6 leading-relaxed">
        Select a peptide for instant dosing, timing, cycle length, and administration guide.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(PEPTIDE_PROTOCOLS).map(name => {
          const cat = PEPTIDE_PROTOCOLS[name].category
          const color = CATEGORY_COLOR[cat] ?? '#d4a043'
          const isActive = active === name
          return (
            <button key={name} onClick={() => setActive(isActive ? null : name)}
              className="px-3.5 py-2 rounded-xl text-[12px] font-500 transition-all duration-150"
              style={{
                background: isActive ? `${color}18` : 'rgba(255,255,255,0.04)',
                border: isActive ? `1px solid ${color}60` : '1px solid rgba(255,255,255,0.08)',
                color: isActive ? color : '#8888a0',
              }}>
              {name}
            </button>
          )
        })}
      </div>

      {info && active && (
        <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${CATEGORY_COLOR[info.category] ?? '#d4a043'}30` }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-white font-700 text-[16px]">{active}</p>
            <span className="text-[11px] px-2.5 py-1 rounded-full font-600"
              style={{ background: `${CATEGORY_COLOR[info.category] ?? '#d4a043'}18`, color: CATEGORY_COLOR[info.category] ?? '#d4a043' }}>
              {info.category}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Dose',        value: info.dose },
              { label: 'Frequency',   value: info.frequency },
              { label: 'Timing',      value: info.timing },
              { label: 'Cycle',       value: info.cycle },
              { label: 'Break',       value: info.breakPeriod },
              { label: 'Route',       value: info.route },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="label mb-1">{label}</p>
                <p className="text-white text-[13px] font-500">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ToolsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="label-gold mb-3">Peptide Tools</p>
          <h1 className="display text-[38px] md:text-[52px] text-white mb-4">
            Research <span className="gold-text">Calculators</span>
          </h1>
          <p className="text-[#8888a0] text-[15px] max-w-xl leading-relaxed">
            Practical tools for planning and running peptide protocols — dosing math, stack matching, and quick protocol references.
          </p>
        </div>

        {/* Tools */}
        <div className="space-y-6">
          <ReconstitutionCalc />
          <GoalMatcher />
          <ProtocolReference />
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 rounded-2xl text-center" style={{ background: 'rgba(212,160,67,0.05)', border: '1px solid rgba(212,160,67,0.15)' }}>
          <p className="text-white font-600 mb-2">Need a custom protocol?</p>
          <p className="text-[#8888a0] text-[13px] mb-4">Chat with Max for personalized dosing guidance based on your goals and experience level.</p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
            className="btn-primary text-[13px] py-2.5 px-6">
            Chat with Max
          </button>
        </div>

      </div>
    </main>
  )
}
