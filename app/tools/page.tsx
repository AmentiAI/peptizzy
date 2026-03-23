'use client'

import { useState } from 'react'
import Link from 'next/link'
import { stacks } from '@/lib/stacks'

// ─── Shared ───────────────────────────────────────────────────────────────────

function Input({ label, placeholder, value, onChange, step }: {
  label: string; placeholder: string; value: string
  onChange: (v: string) => void; step?: string
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label className="label block mb-2">{label}</label>
      <input
        type="number" min="0" step={step ?? 'any'} placeholder={placeholder}
        value={value} onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className="w-full px-4 py-3.5 rounded-xl text-white text-[14px] outline-none transition-all duration-200 placeholder:text-[#383848]"
        style={{
          background: 'rgba(255,255,255,0.035)',
          border: `1px solid ${focused ? 'rgba(212,160,67,0.55)' : 'rgba(255,255,255,0.07)'}`,
          boxShadow: focused ? '0 0 0 3px rgba(212,160,67,0.07)' : 'none',
        }}
      />
    </div>
  )
}

function StatBlock({ label, value, unit, accent }: {
  label: string; value: string; unit: string; accent?: boolean
}) {
  return (
    <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
      <p className="label mb-2">{label}</p>
      <p className={`font-['Playfair_Display'] font-900 leading-none ${accent ? 'gold-text' : 'text-white'}`}
        style={{ fontSize: 'clamp(28px, 4vw, 38px)' }}>
        {value}
      </p>
      <p className="text-[#50505e] text-[12px] font-500 mt-1">{unit}</p>
    </div>
  )
}

// ─── Tool 01 — Reconstitution Calculator ─────────────────────────────────────

function ReconstitutionCalc() {
  const [vialMg, setVialMg]   = useState('')
  const [bacMl, setBacMl]     = useState('')
  const [doseMcg, setDoseMcg] = useState('')

  const vial = parseFloat(vialMg)
  const bac  = parseFloat(bacMl)
  const dose = parseFloat(doseMcg)

  const concMcgMl   = (!isNaN(vial) && !isNaN(bac) && bac > 0) ? (vial * 1000) / bac : null
  const injectMl    = (concMcgMl !== null && !isNaN(dose) && dose > 0) ? dose / concMcgMl : null
  const injectUnits = injectMl !== null ? injectMl * 100 : null

  const fillPct = injectUnits !== null ? Math.min((injectUnits / 100) * 100, 100) : 0

  return (
    <div className="card-elevated rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-8 md:p-10 border-b border-white/[0.05] relative">
        <div className="absolute top-0 left-0 w-[3px] h-full rounded-l-2xl" style={{ background: '#d4a043' }} />
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="mono text-[11px] text-[#d4a043]">Tool 01</span>
              <span className="tag-gold text-[10px]">Essential</span>
            </div>
            <h2 className="font-['Playfair_Display'] font-900 text-white text-2xl md:text-3xl mb-2">
              Reconstitution Calculator
            </h2>
            <p className="font-['Playfair_Display'] italic text-[#d4a043] text-[16px]">
              Exact syringe volumes, every time
            </p>
          </div>
          <div className="text-right hidden md:block">
            <p className="label mb-1">Calculation Type</p>
            <p className="text-white font-600 text-[14px]">BAC Water · Insulin Syringe</p>
          </div>
        </div>
        <p className="text-[#8888a0] text-[14px] leading-relaxed mt-4 max-w-2xl">
          Enter your vial size, how much bacteriostatic water you add, and your target dose — the calculator outputs the exact volume and syringe unit mark to draw to.
        </p>
      </div>

      {/* Body */}
      <div className="p-8 md:p-10 grid lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div>
          <p className="label mb-5">Protocol Inputs</p>
          <div className="space-y-4">
            <Input label="Vial Size (mg)"       placeholder="e.g. 5"   value={vialMg}   onChange={setVialMg} />
            <Input label="BAC Water Added (mL)" placeholder="e.g. 2"   value={bacMl}    onChange={setBacMl}  step="0.1" />
            <Input label="Desired Dose (mcg)"   placeholder="e.g. 250" value={doseMcg}  onChange={setDoseMcg} />
          </div>

          {concMcgMl !== null && (
            <div className="mt-5 p-4 rounded-xl" style={{ background: 'rgba(212,160,67,0.05)', border: '1px solid rgba(212,160,67,0.15)' }}>
              <p className="label-gold text-[10px] mb-1">Concentration</p>
              <p className="text-white font-600 text-[14px]">
                {concMcgMl.toFixed(0)} mcg per mL
                <span className="text-[#50505e] font-400 ml-2">({(concMcgMl / 10).toFixed(1)} mcg per unit)</span>
              </p>
            </div>
          )}
        </div>

        {/* Results */}
        <div>
          <p className="label mb-5">Results</p>
          {injectMl !== null ? (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <StatBlock label="Volume to Inject" value={injectMl.toFixed(3)} unit="millilitres" />
                <StatBlock label="Syringe Units" value={injectUnits!.toFixed(1)} unit="units (100u syringe)" accent />
              </div>

              {/* Syringe visualiser */}
              <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="label">Syringe Fill Level</p>
                  <p className="mono text-[11px] text-[#d4a043]">{injectUnits!.toFixed(1)}u / 100u</p>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${fillPct}%`, background: 'linear-gradient(90deg, #c08020, #d4a043, #f0c858)' }} />
                </div>
                <div className="flex justify-between mt-1.5">
                  {[0, 25, 50, 75, 100].map(n => (
                    <span key={n} className="mono text-[10px] text-[#383848]">{n}</span>
                  ))}
                </div>
              </div>

              <p className="text-[#50505e] text-[12px] leading-relaxed">
                Draw to the <strong className="text-[#8888a0]">{injectUnits!.toFixed(1)} unit</strong> mark on a standard 100-unit insulin syringe to deliver exactly {dose}mcg per injection.
              </p>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center rounded-xl py-16"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.07)' }}>
              <div className="text-center">
                <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: 'rgba(212,160,67,0.08)', border: '1px solid rgba(212,160,67,0.15)' }}>
                  <svg className="w-5 h-5 text-[#d4a043]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-[#50505e] text-[13px]">Enter values to calculate</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Tool 02 — Stack Matcher ──────────────────────────────────────────────────

const GOALS = [
  { id: 'fat-loss',   label: 'Fat Loss',      keys: ['weight', 'fat', 'metabolic', 'glp', 'sema', 'tirze', 'retat'] },
  { id: 'muscle',     label: 'Muscle & Body', keys: ['muscle', 'body comp', 'anabolic', 'igf', 'sculptor'] },
  { id: 'looks',      label: 'Looks Maxing',  keys: ['looks', 'skin', 'collagen', 'ghk', 'snap', 'appearance'] },
  { id: 'recovery',   label: 'Recovery',      keys: ['recover', 'heal', 'tendon', 'wolverine', 'bpc', 'tb-500'] },
  { id: 'anti-aging', label: 'Anti-Aging',    keys: ['longevity', 'telomere', 'nad', 'epithalon', 'aging'] },
  { id: 'beginner',   label: 'Just Starting', keys: ['beginner'] },
]

const DIFFICULTY_COLOR: Record<string, string> = {
  Beginner:     '#40c090',
  Intermediate: '#d4a043',
  Advanced:     '#e05080',
}

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
    <div className="card-elevated rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-8 md:p-10 border-b border-white/[0.05] relative">
        <div className="absolute top-0 left-0 w-[3px] h-full rounded-l-2xl" style={{ background: '#6090ff' }} />
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="mono text-[11px]" style={{ color: '#6090ff' }}>Tool 02</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-600"
                style={{ background: 'rgba(96,144,255,0.1)', color: '#6090ff', border: '1px solid rgba(96,144,255,0.25)' }}>
                Interactive
              </span>
            </div>
            <h2 className="font-['Playfair_Display'] font-900 text-white text-2xl md:text-3xl mb-2">
              Stack Matcher
            </h2>
            <p className="font-['Playfair_Display'] italic text-[16px]" style={{ color: '#6090ff' }}>
              Find your protocol in seconds
            </p>
          </div>
          <div className="text-right hidden md:block">
            <p className="label mb-1">Protocols Available</p>
            <p className="text-white font-600 text-[14px]">{stacks.length} Curated Stacks</p>
          </div>
        </div>
        <p className="text-[#8888a0] text-[14px] leading-relaxed mt-4 max-w-2xl">
          Select one or more goals below. The matcher cross-references compound mechanisms to surface protocols specifically built for your objectives.
        </p>
      </div>

      {/* Body */}
      <div className="p-8 md:p-10">
        {/* Goal buttons */}
        <p className="label mb-4">Select Your Goals</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {GOALS.map(g => {
            const active = selected.includes(g.id)
            return (
              <button key={g.id} onClick={() => toggle(g.id)}
                className="px-4 py-2.5 rounded-xl text-[13px] font-500 transition-all duration-150"
                style={{
                  background: active ? 'rgba(96,144,255,0.12)' : 'rgba(255,255,255,0.04)',
                  border: active ? '1px solid rgba(96,144,255,0.45)' : '1px solid rgba(255,255,255,0.07)',
                  color: active ? '#6090ff' : '#8888a0',
                  boxShadow: active ? '0 0 0 3px rgba(96,144,255,0.07)' : 'none',
                }}>
                {g.label}
              </button>
            )
          })}
        </div>

        {/* Results */}
        {selected.length === 0 ? (
          <div className="rounded-xl py-14 text-center"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.07)' }}>
            <p className="text-[#50505e] text-[13px]">Select a goal above to see matching protocols</p>
          </div>
        ) : matched.length > 0 ? (
          <div>
            <p className="label mb-4">{matched.length} Protocol{matched.length !== 1 ? 's' : ''} Matched</p>
            <div className="space-y-3">
              {matched.map(s => {
                const diffColor = DIFFICULTY_COLOR[s.difficulty] ?? '#d4a043'
                return (
                  <Link key={s.id} href={`/stacks/${s.id}`}
                    className="flex items-center gap-5 p-5 rounded-xl transition-all duration-200 group"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(96,144,255,0.3)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)' }}>
                    {/* Accent dot */}
                    <div className="w-1.5 h-12 rounded-full flex-shrink-0" style={{ background: s.accent }} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <p className="text-white font-600 text-[15px]">{s.name}</p>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-600"
                          style={{ background: `${diffColor}15`, color: diffColor, border: `1px solid ${diffColor}30` }}>
                          {s.difficulty}
                        </span>
                      </div>
                      <p className="text-[#8888a0] text-[13px] leading-relaxed">{s.tagline}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="mono text-[11px] text-[#50505e]">{s.duration}</span>
                        <span className="mono text-[11px] text-[#50505e]">{s.compounds.length} compounds</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[12px] font-500 group-hover:opacity-100 opacity-0 transition-opacity" style={{ color: '#6090ff' }}>
                        View Protocol
                      </span>
                      <svg className="w-4 h-4 text-[#383848] group-hover:text-[#6090ff] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ) : (
          <div className="rounded-xl py-10 text-center"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-[#8888a0] text-[14px] mb-3">No pre-built stack matches exactly</p>
            <p className="text-[#50505e] text-[13px] mb-4">Talk to Max for a custom combination built around your specific goal set.</p>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
              className="btn-primary text-[12px] py-2.5 px-5">
              Ask Max for a Custom Protocol
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Tool 03 — Protocol Reference ────────────────────────────────────────────

type PeptideInfo = {
  dose: string; frequency: string; timing: string
  cycle: string; breakPeriod: string; route: string; category: string
}

const PEPTIDE_PROTOCOLS: Record<string, PeptideInfo> = {
  'BPC-157':       { dose: '200–500mcg',       frequency: 'Daily',            timing: 'Any time, near injury site preferred', cycle: '4–8 weeks',  breakPeriod: '4 weeks',   route: 'SubQ or IM', category: 'Recovery & Healing' },
  'TB-500':        { dose: '2–5mg',             frequency: '2× per week',      timing: 'Any time',                            cycle: '4–8 weeks',  breakPeriod: '4 weeks',   route: 'SubQ',       category: 'Recovery & Healing' },
  'GHK-Cu':        { dose: '1–2mg',             frequency: '3–5× per week',    timing: 'Any time',                            cycle: '12 weeks',   breakPeriod: '4 weeks',   route: 'SubQ',       category: 'Looks Maxing' },
  'SNAP-8':        { dose: 'Topical',           frequency: '2× daily',         timing: 'Morning & evening to target areas',   cycle: '8–12 weeks', breakPeriod: '4 weeks',   route: 'Topical',    category: 'Looks Maxing' },
  'CJC-1295/Ipam': { dose: '100mcg each',       frequency: '2× daily',         timing: 'Fasted — morning & pre-sleep',        cycle: '12–16 wks',  breakPeriod: '8 weeks',   route: 'SubQ',       category: 'Body Composition' },
  'IGF-1 LR3':     { dose: '20–50mcg',          frequency: 'Daily',            timing: 'Post-workout',                        cycle: '4 weeks',    breakPeriod: '4 weeks',   route: 'SubQ or IM', category: 'Body Composition' },
  'Epithalon':     { dose: '5–10mg',             frequency: 'Daily',            timing: 'Any time',                            cycle: '10–20 days', breakPeriod: '6 months',  route: 'SubQ',       category: 'Anti-Aging' },
  'NAD+':          { dose: '100–500mg',          frequency: 'Daily or 2–3×/wk', timing: 'Morning, fasted',                    cycle: 'Ongoing',    breakPeriod: 'None req.', route: 'SubQ or IV', category: 'Anti-Aging' },
  'Selank':        { dose: '250–500mcg',         frequency: 'Daily',            timing: 'Morning',                             cycle: '2–4 weeks',  breakPeriod: '2 weeks',   route: 'Intranasal', category: 'Cognitive' },
  'Semax':         { dose: '100–300mcg',         frequency: 'Daily',            timing: 'Morning',                             cycle: '2–4 weeks',  breakPeriod: '2 weeks',   route: 'Intranasal', category: 'Cognitive' },
  'Semaglutide':   { dose: '0.25–2.4mg',         frequency: 'Once weekly',      timing: 'Same day each week',                  cycle: 'Ongoing',    breakPeriod: 'None req.', route: 'SubQ',       category: 'Weight Loss' },
  'Tirzepatide':   { dose: '2.5–15mg',           frequency: 'Once weekly',      timing: 'Same day each week',                  cycle: 'Ongoing',    breakPeriod: 'None req.', route: 'SubQ',       category: 'Weight Loss' },
  'Retatrutide':   { dose: '1–12mg',             frequency: 'Once weekly',      timing: 'Same day each week',                  cycle: 'Ongoing',    breakPeriod: 'None req.', route: 'SubQ',       category: 'Weight Loss' },
}

const CATEGORY_COLOR: Record<string, string> = {
  'Recovery & Healing': '#40c090',
  'Looks Maxing':       '#d4a043',
  'Body Composition':   '#6090ff',
  'Anti-Aging':         '#a060ff',
  'Cognitive':          '#40c0ff',
  'Weight Loss':        '#e05080',
}

const CATEGORIES = Array.from(new Set(Object.values(PEPTIDE_PROTOCOLS).map(p => p.category)))

function ProtocolReference() {
  const [active, setActive] = useState<string | null>(null)
  const info = active ? PEPTIDE_PROTOCOLS[active] : null

  return (
    <div className="card-elevated rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-8 md:p-10 border-b border-white/[0.05] relative">
        <div className="absolute top-0 left-0 w-[3px] h-full rounded-l-2xl" style={{ background: '#a060ff' }} />
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="mono text-[11px]" style={{ color: '#a060ff' }}>Tool 03</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-600"
                style={{ background: 'rgba(160,96,255,0.1)', color: '#a060ff', border: '1px solid rgba(160,96,255,0.25)' }}>
                Reference
              </span>
            </div>
            <h2 className="font-['Playfair_Display'] font-900 text-white text-2xl md:text-3xl mb-2">
              Protocol Reference
            </h2>
            <p className="font-['Playfair_Display'] italic text-[16px]" style={{ color: '#a060ff' }}>
              Dosing, timing &amp; cycle guide
            </p>
          </div>
          <div className="text-right hidden md:block">
            <p className="label mb-1">Compounds Covered</p>
            <p className="text-white font-600 text-[14px]">{Object.keys(PEPTIDE_PROTOCOLS).length} Peptides</p>
          </div>
        </div>
        <p className="text-[#8888a0] text-[14px] leading-relaxed mt-4 max-w-2xl">
          Click any compound to instantly pull up its clinical dosing range, administration route, optimal timing, cycle length, and required break period.
        </p>
      </div>

      {/* Body */}
      <div className="p-8 md:p-10 grid lg:grid-cols-2 gap-10">
        {/* Peptide selector */}
        <div>
          <p className="label mb-5">Select Compound</p>
          <div className="space-y-5">
            {CATEGORIES.map(cat => {
              const color = CATEGORY_COLOR[cat] ?? '#d4a043'
              const peptides = Object.keys(PEPTIDE_PROTOCOLS).filter(n => PEPTIDE_PROTOCOLS[n].category === cat)
              return (
                <div key={cat}>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                    <p className="text-[11px] font-600 tracking-widest uppercase" style={{ color }}>{cat}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {peptides.map(name => {
                      const isActive = active === name
                      return (
                        <button key={name} onClick={() => setActive(isActive ? null : name)}
                          className="px-3.5 py-2 rounded-xl text-[12px] font-500 transition-all duration-150"
                          style={{
                            background: isActive ? `${color}15` : 'rgba(255,255,255,0.04)',
                            border: isActive ? `1px solid ${color}50` : '1px solid rgba(255,255,255,0.07)',
                            color: isActive ? color : '#8888a0',
                            boxShadow: isActive ? `0 0 0 3px ${color}09` : 'none',
                          }}>
                          {name}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div>
          <p className="label mb-5">Protocol Details</p>
          {info && active ? (
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${CATEGORY_COLOR[info.category] ?? '#d4a043'}25` }}>
              {/* Panel header */}
              <div className="px-5 py-4 flex items-center justify-between"
                style={{ background: `${CATEGORY_COLOR[info.category] ?? '#d4a043'}08`, borderBottom: `1px solid ${CATEGORY_COLOR[info.category] ?? '#d4a043'}15` }}>
                <p className="text-white font-700 text-[16px]">{active}</p>
                <span className="text-[10px] px-2.5 py-1 rounded-full font-600"
                  style={{ background: `${CATEGORY_COLOR[info.category] ?? '#d4a043'}18`, color: CATEGORY_COLOR[info.category] ?? '#d4a043' }}>
                  {info.category}
                </span>
              </div>
              {/* Fields */}
              <div className="divide-y divide-white/[0.05]">
                {([
                  { label: 'Dose Range',    value: info.dose },
                  { label: 'Frequency',     value: info.frequency },
                  { label: 'Best Timing',   value: info.timing },
                  { label: 'Cycle Length',  value: info.cycle },
                  { label: 'Break Period',  value: info.breakPeriod },
                  { label: 'Route',         value: info.route },
                ] as { label: string; value: string }[]).map(({ label, value }) => (
                  <div key={label} className="flex items-start justify-between gap-4 px-5 py-3.5">
                    <p className="label flex-shrink-0">{label}</p>
                    <p className="text-white text-[13px] font-500 text-right">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[280px] flex items-center justify-center rounded-xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.07)' }}>
              <div className="text-center">
                <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: 'rgba(160,96,255,0.08)', border: '1px solid rgba(160,96,255,0.15)' }}>
                  <svg className="w-5 h-5" style={{ color: '#a060ff' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-[#50505e] text-[13px]">Select a compound to view its protocol</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">

      {/* HERO */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20 overflow-hidden">
        <div className="spot w-[500px] h-[350px] bg-[#d4a043] opacity-[0.04] top-0 right-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-[#d4a043]" />
            <p className="label-gold">Research Utilities</p>
          </div>
          <h1 className="mb-5" style={{ lineHeight: '0.93' }}>
            <span className="display text-white block" style={{ fontSize: 'clamp(50px, 7vw, 100px)' }}>
              Peptide
            </span>
            <span className="display-italic gold-shimmer block" style={{ fontSize: 'clamp(50px, 7vw, 100px)' }}>
              Tools
            </span>
          </h1>
          <p className="text-[#8888a0] text-xl max-w-2xl leading-relaxed">
            Practical calculators and references for planning, dosing, and running peptide protocols — built for researchers who want precision.
          </p>
        </div>
      </section>

      <div className="rule" />

      {/* TOOLS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-8">
          <ReconstitutionCalc />
          <GoalMatcher />
          <ProtocolReference />
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-20 bg-[#0a0a0e]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="label-gold mb-4">Using These Tools</p>
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-12"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
            How to Get the Most Out of Each Calculator
          </h2>
          <div className="space-y-4">
            {[
              { n: '01', title: 'Reconstitution Calculator', body: 'Always use pharmaceutical-grade bacteriostatic water (BAC water) with 0.9% benzyl alcohol — not sterile water. The most common reconstitution ratios are 1mL per 5mg vial (1000mcg/mL) or 2mL per 5mg vial (500mcg/mL). The calculator handles any ratio instantly.' },
              { n: '02', title: 'Stack Matcher', body: 'You can select multiple goals simultaneously — the matcher will surface stacks built to address overlapping objectives. For goals that don\'t have a pre-built protocol, click "Ask Max" and the AI will generate a custom combination based on compound mechanism compatibility.' },
              { n: '03', title: 'Protocol Reference', body: 'Doses listed reflect the research range used in protocols across the biohacking and performance communities. Always start at the lower bound of any range, particularly for GLP-1 weight loss compounds (semaglutide, tirzepatide, retatrutide), which require slow dose escalation to manage tolerance.' },
            ].map(s => (
              <div key={s.n} className="card rounded-2xl p-6 flex gap-6">
                <p className="mono text-[#d4a043] text-[12px] flex-shrink-0 mt-0.5">{s.n}</p>
                <div>
                  <p className="text-white font-700 text-[16px] mb-2">{s.title}</p>
                  <p className="text-[#8888a0] text-[14px] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] font-900 text-white mb-4"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Need a custom protocol?
          </h2>
          <p className="text-[#8888a0] text-[16px] mb-8 leading-relaxed">
            Max — our AI peptide optimization expert — can design a personalized protocol based on your goals, experience level, and budget in real time.
          </p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
            className="btn-primary text-[13px] px-8 py-4 inline-flex items-center gap-2">
            Chat with Max
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

    </div>
  )
}
