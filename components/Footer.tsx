import Link from 'next/link'

const col1 = [
  { href: '/products/bpc-157',      label: 'BPC-157' },
  { href: '/products/ghk-cu',       label: 'GHK-Cu' },
  { href: '/products/cjc-1295-ipamorelin', label: 'CJC-1295 / Ipamorelin' },
  { href: '/products/tirzepatide',   label: 'Tirzepatide' },
  { href: '/products/epithalon',     label: 'Epithalon' },
  { href: '/products',               label: 'View All →' },
]
const col2 = [
  { href: '/looks-maxing', label: 'Looks Maxing Guide' },
  { href: '/stacks',       label: 'Stack Protocols' },
  { href: '/guide',        label: 'Protocol Guide' },
  { href: '/anti-aging',        label: 'Anti-Aging' },
  { href: '/body-composition',  label: 'Body Composition' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#07070a] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <path d="M16 2 L28.7 9.5 L28.7 22.5 L16 30 L3.3 22.5 L3.3 9.5 Z"
                  fill="none" stroke="#d4a043" strokeWidth="1.25"/>
                <circle cx="16" cy="16" r="3.5" fill="#d4a043" opacity="0.9"/>
              </svg>
              <span className="font-['Playfair_Display'] text-[18px] font-900 text-white">
                Peptides<span className="gold-text">Muscle</span>
              </span>
            </div>
            <p className="text-[#8888a0] text-[14px] leading-relaxed mb-5 max-w-[220px]">
              Elite peptide protocols for looks maximization, body composition, and longevity.
            </p>
            <p className="text-[11px] text-[#50505e] uppercase tracking-widest">Premium Peptide Protocols</p>
          </div>

          {/* Peptides */}
          <div>
            <p className="label mb-5">Peptides</p>
            <ul className="space-y-3">
              {col1.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#8888a0] hover:text-white text-[14px] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Protocols */}
          <div>
            <p className="label mb-5">Protocols</p>
            <ul className="space-y-3">
              {col2.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#8888a0] hover:text-white text-[14px] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="label mb-5">Start Your Protocol</p>
            <p className="text-[#8888a0] text-[14px] leading-relaxed mb-5">
              Pharmaceutical-grade, certificate of analysis verified, shipped to your door.
            </p>
            <a href="/go/shop"
                          target="_blank" rel="noopener nofollow sponsored"
              className="btn-primary text-[12px] py-3 px-5">
              Shop Now
            </a>
          </div>
        </div>

        <div className="rule mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#50505e] text-[13px]">© 2025 PeptidesMuscle.</p>
          <div className="flex items-center gap-5">
            <a href="/sitemap.xml" className="text-[#50505e] text-[13px] hover:text-[#8888a0] transition-colors">
              Sitemap
            </a>
            <p className="text-[#50505e] text-[13px]">
              For personal use only. Individual results may vary.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
