'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { orgData } from '@/data'

/* ─── Cinematic particle canvas ─────────────────── */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    type P = { x:number; y:number; vx:number; vy:number; alpha:number; size:number; hue:number }
    const pts: P[] = Array.from({ length: 100 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      vx:    (Math.random() - 0.5) * 0.25,
      vy:    (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.35 + 0.05,
      size:  Math.random() * 1.2 + 0.3,
      hue:   Math.random() > 0.6 ? 1 : 0, // 1=crimson, 0=gold
    }))

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const color = p.hue === 1
          ? `rgba(192,57,43,${p.alpha})`
          : `rgba(200,134,10,${p.alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      })

      // connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
          if (d < 130) {
            const a = 0.07 * (1 - d / 130)
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(150,50,30,${a})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 z-0" />
}

/* ─── Staggered text reveal ─────────────────────── */
function RevealLine({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div className="overflow-hidden">
      <div
        className={`transition-all duration-1000 ease-out ${className}`}
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(110%)',
          opacity: visible ? 1 : 0,
          transitionDelay: `0ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

/* ─── Typewriter ────────────────────────────────── */
function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, 40)
    return () => clearInterval(interval)
  }, [started, text])

  return (
    <span className="font-mono text-xs tracking-[0.3em] text-crimson-400">
      {displayed}
      <span className="animate-pulse">_</span>
    </span>
  )
}

/* ─── Main Hero ─────────────────────────────────── */
export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian-800">
      {/* Layered backgrounds */}
      <ParticleCanvas />

      {/* Deep red radial core */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(139,26,26,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_50%,rgba(200,134,10,0.05)_0%,transparent_60%)]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(192,57,43,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192,57,43,1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Horizontal center lines */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson-800/20 to-transparent" />
        <div className="absolute top-[48%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-800/10 to-transparent" />
      </div>

      {/* Scan line */}
      <div className="scanline" />

      {/* ── Content ─────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* System status badge */}
        <RevealLine delay={200}>
          <div className="inline-flex items-center gap-3 mb-10 px-5 py-2.5 border border-crimson-800/40 bg-crimson-950/50 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson-400 status-pulse" />
            <span className="font-mono text-xs tracking-[0.35em] uppercase text-crimson-400/80">
              Continental System — Secure Connection Active
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60" />
          </div>
        </RevealLine>

        {/* Main title */}
        <RevealLine delay={500} className="font-display font-light leading-none text-stone-100">
          <h1 style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: '0.9' }}>
            Every system
          </h1>
        </RevealLine>

        <RevealLine delay={700}>
          <h1
            className="font-display italic leading-none"
            style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: '0.9' }}
          >
            <span className="text-gradient-red animate-glow-pulse">has rules.</span>
          </h1>
        </RevealLine>

        {/* Divider ornament */}
        <RevealLine delay={900}>
          <div className="flex items-center justify-center gap-6 my-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-crimson-700/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-crimson-700/60" />
          </div>
        </RevealLine>

        {/* Tagline */}
        <RevealLine delay={1100}>
          <p className="font-body text-stone-300 text-xl md:text-3xl tracking-[0.1em] font-light mb-3">
            {orgData.subTagline}
          </p>
        </RevealLine>

        <RevealLine delay={1250}>
          <p className="text-stone-500 text-base max-w-xl mx-auto mb-12 leading-relaxed">
            {orgData.description}
          </p>
        </RevealLine>

        {/* Typewriter */}
        <RevealLine delay={1500}>
          <div className="mb-10">
            <Typewriter text="> INITIALIZING CONTINENTAL NETWORK INTERFACE..." delay={1600} />
          </div>
        </RevealLine>

        {/* CTA */}
        <RevealLine delay={2000}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products" className="btn-primary group">
              Enter System
              <svg width="12" height="12" viewBox="0 0 12 12" className="transition-transform group-hover:translate-x-1">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/about" className="btn-secondary">
              Our Mission
            </Link>
          </div>
        </RevealLine>

        {/* Stats */}
        <RevealLine delay={2400}>
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-0 border border-crimson-900/30">
            {orgData.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-8 py-6 text-center ${i < 3 ? 'border-r border-crimson-900/30' : ''} hover:bg-crimson-950/40 transition-colors duration-300`}
              >
                <p className="font-display text-4xl font-semibold text-gradient-gold mb-1">{stat.value}</p>
                <p className="text-stone-600 text-xs tracking-[0.25em] uppercase font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </RevealLine>
      </div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-obsidian-800 via-obsidian-800/60 to-transparent z-10 pointer-events-none" />

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 3s' }}
      >
        <div
          className="w-5 h-8 border border-crimson-800/50 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-crimson-500/80 animate-float" />
        </div>
        <span className="text-stone-700 text-[10px] tracking-[0.35em] uppercase font-mono">Scroll</span>
      </div>
    </section>
  )
}
