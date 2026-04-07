'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data'
import { clsx } from 'clsx'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
        scrolled
          ? 'bg-obsidian-800/90 backdrop-blur-2xl border-b border-crimson-900/30 shadow-[0_1px_40px_rgba(139,26,26,0.1)]'
          : 'bg-transparent'
      )}
      style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(-20px)', transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s, background 0.7s, border-color 0.7s, box-shadow 0.7s' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Rotating outer diamond */}
            <div className="absolute inset-0 border border-crimson-700/50 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700 ease-out" />
            {/* Inner diamond */}
            <div className="absolute inset-1.5 border border-gold-600/40 -rotate-12 group-hover:rotate-[168deg] transition-transform duration-700 delay-75 ease-out" />
            {/* Center letter */}
            <span className="relative z-10 font-display text-sm font-bold text-crimson-400 group-hover:text-gold-400 transition-colors duration-300">C</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold text-stone-100 tracking-[0.2em] uppercase">
              Continental
            </span>
            <span className="font-mono text-[8px] tracking-[0.15em] text-crimson-700 uppercase">
              Est. 2022
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.filter(l => l.label !== 'Contact').map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'relative px-4 py-2 text-xs font-body tracking-[0.2em] uppercase transition-all duration-300',
                'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-px after:transition-all after:duration-400',
                pathname === link.href
                  ? 'text-crimson-400 after:w-full after:bg-crimson-500'
                  : 'text-stone-500 hover:text-stone-200 after:w-0 after:bg-crimson-600 hover:after:w-full'
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className={clsx(
              'ml-4 px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-semibold border transition-all duration-400 relative overflow-hidden group',
              pathname === '/contact'
                ? 'bg-crimson-700 border-crimson-600 text-stone-100'
                : 'bg-crimson-900/20 border-crimson-800/50 text-crimson-400 hover:bg-crimson-800/40 hover:border-crimson-600/70 hover:text-crimson-200 hover:shadow-[0_0_20px_rgba(139,26,26,0.3)]'
            )}
          >
            Enter System
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-stone-500 hover:text-crimson-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={clsx(
        'md:hidden overflow-hidden transition-all duration-500 ease-in-out',
        menuOpen ? 'max-h-screen border-t border-crimson-900/30' : 'max-h-0'
      )}>
        <div className="bg-obsidian-800/98 backdrop-blur-2xl px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                'text-xs tracking-[0.25em] uppercase transition-all duration-200 py-3 border-b border-stone-900/40',
                pathname === link.href ? 'text-crimson-400' : 'text-stone-500 hover:text-stone-200'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
