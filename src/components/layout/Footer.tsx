import Link from 'next/link'
import { navLinks, orgData } from '@/data'

export function Footer() {
  return (
    <footer className="relative border-t border-crimson-950/60 bg-obsidian-800/80 mt-32 overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson-800/50 to-transparent" />

      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-crimson-950/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-semibold text-stone-100 tracking-[0.2em] uppercase mb-1">
              Continental
            </p>
            <p className="font-mono text-[10px] tracking-widest text-crimson-700 uppercase mb-4">
              Est. {orgData.founded}
            </p>
            <p className="text-stone-600 text-sm leading-relaxed max-w-xs">
              {orgData.tagline} {orgData.subTagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-crimson-700 mb-5 font-mono">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-600 hover:text-crimson-400 text-sm tracking-wider uppercase transition-colors duration-300 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-crimson-700 mb-5 font-mono">
              Status
            </p>
            <div className="space-y-3 text-stone-600 text-sm font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-pulse" />
                <span>All systems operational</span>
              </div>
              <p className="text-stone-700">{orgData.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-crimson-950/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-700 text-[10px] tracking-[0.25em] font-mono uppercase">
            © {new Date().getFullYear()} Continental. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-crimson-800" />
            <p className="text-stone-800 text-[10px] tracking-[0.2em] font-mono uppercase">
              Secure — Encrypted — Continental Protocol v2.4
            </p>
            <span className="w-1 h-1 rounded-full bg-gold-800" />
          </div>
        </div>
      </div>
    </footer>
  )
}
