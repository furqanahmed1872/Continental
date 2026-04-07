'use client'

import { useEffect, useRef, useState } from 'react'
import { timelineEntries } from '@/data'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { clsx } from 'clsx'

const years = Array.from(new Set(timelineEntries.map((e) => e.year))).sort()

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function TimelineCard({ entry, above }: { entry: typeof timelineEntries[0]; above: boolean }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={clsx(
        'w-52 transition-all duration-700',
        above ? 'mb-4 self-end' : 'mt-4 self-start',
        visible ? 'opacity-100 translate-y-0' : above ? 'opacity-0 -translate-y-6' : 'opacity-0 translate-y-6'
      )}
    >
      {/* Connector line */}
      <div className={clsx('flex flex-col items-center', above ? 'flex-col-reverse' : 'flex-col')}>
        <div
          className={clsx(
            'group relative glass-card p-4 w-full cursor-default',
            'hover:border-crimson-700/50 hover:bg-crimson-950/30 transition-all duration-400',
            entry.milestone && 'border-gold-700/30'
          )}
        >
          {entry.milestone && (
            <div className={clsx('absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent', above ? 'bottom-0' : 'top-0')} />
          )}
          <p className="font-mono text-[10px] text-gold-700 tracking-wider mb-1.5">{entry.date}</p>
          <h4 className="font-display text-sm font-semibold text-stone-100 mb-1.5 leading-tight group-hover:text-crimson-300 transition-colors">
            {entry.title}
          </h4>
          <p className="text-stone-500 text-[11px] leading-relaxed mb-2">{entry.description}</p>
          <StatusBadge status={entry.status} animated={entry.status === 'in-progress'} className="scale-90 origin-left" />
        </div>

        {/* Connector to spine */}
        <div className={clsx(
          'w-px flex-1 min-h-[28px]',
          entry.status === 'completed' ? 'bg-gradient-to-b from-emerald-700/60 to-transparent' :
          entry.status === 'in-progress' ? 'bg-gradient-to-b from-gold-600/60 to-transparent' :
          'bg-gradient-to-b from-stone-700/40 to-transparent',
          above && 'rotate-180'
        )} />
      </div>
    </div>
  )
}

export default function TimelinePage() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el
      setScrollPct(scrollLeft / (scrollWidth - clientWidth))
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen pt-32 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <SectionHeading
          eyebrow="Operational History"
          title="The Timeline"
          subtitle="Every milestone in order — scroll horizontally to traverse the full history."
        />
      </div>

      {/* Progress bar */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="h-px bg-stone-900 relative">
          <div
            className="absolute left-0 top-0 h-px bg-gradient-to-r from-crimson-700 to-gold-500 transition-all duration-100"
            style={{ width: `${scrollPct * 100}%` }}
          />
        </div>
        <p className="font-mono text-[10px] text-stone-700 tracking-widest mt-2 uppercase">
          ← Drag or scroll horizontally →
        </p>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="overflow-x-auto overflow-y-hidden pb-8 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#5c1010 #020203' }}
      >
        <div className="inline-flex items-stretch min-h-[480px] px-16" style={{ gap: 0 }}>
          {years.map((year) => {
            const yearEntries = timelineEntries.filter((e) => e.year === year)
            const above = yearEntries.filter((_, i) => i % 2 === 0)
            const below = yearEntries.filter((_, i) => i % 2 !== 0)

            return (
              <div key={year} className="flex flex-col" style={{ minWidth: '260px' }}>
                {/* Above spine: cards */}
                <div className="flex-1 flex flex-row items-end gap-3 pb-0">
                  {above.map((e) => (
                    <TimelineCard key={e.id} entry={e} above={true} />
                  ))}
                </div>

                {/* Center spine with year marker */}
                <div className="relative flex items-center h-16">
                  {/* Horizontal spine line */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-crimson-900/60 via-crimson-700/40 to-crimson-900/60" />

                  {/* Year bubble */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-12 h-12 border-2 border-crimson-700/60 bg-obsidian-700 flex items-center justify-center rotate-45 group">
                        <div className="w-8 h-8 border border-gold-700/30 flex items-center justify-center -rotate-45">
                          <span className="font-mono text-[9px] text-gold-500 tracking-wide font-bold">{year}</span>
                        </div>
                      </div>
                      {/* Glow */}
                      <div className="absolute inset-0 w-12 h-12 border border-crimson-600/20 rotate-45 blur-sm" />
                    </div>
                  </div>
                </div>

                {/* Below spine: cards */}
                <div className="flex-1 flex flex-row items-start gap-3 pt-0">
                  {below.map((e) => (
                    <TimelineCard key={e.id} entry={e} above={false} />
                  ))}
                </div>
              </div>
            )
          })}

          {/* End cap */}
          <div className="flex items-center px-16">
            <div className="flex flex-col items-center gap-3 opacity-30">
              <div className="w-px h-20 bg-gradient-to-b from-crimson-700 to-transparent" />
              <div className="w-3 h-3 rotate-45 border border-crimson-600" />
              <span className="font-mono text-[10px] text-stone-600 tracking-widest uppercase">
                Future
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap gap-6 border-t border-stone-900/60">
        {(['completed','in-progress','upcoming'] as const).map(s => (
          <div key={s} className="flex items-center gap-2">
            <StatusBadge status={s} animated={false} />
          </div>
        ))}
        <div className="flex items-center gap-2 text-xs font-mono text-gold-700 tracking-wider">
          <div className="w-3 h-px bg-gold-600" />
          Major Milestone
        </div>
      </div>
    </div>
  )
}
