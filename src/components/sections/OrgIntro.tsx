import { orgData } from '@/data'
import { Shield, Eye, Hammer, Heart } from 'lucide-react'

const icons = [Shield, Eye, Hammer, Heart]

export function OrgIntro() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-crimson-900/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-8 mb-28">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-crimson-900/40" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-crimson-800 font-mono whitespace-nowrap">
            The Organization
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-crimson-900/40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <blockquote className="font-display text-3xl md:text-4xl font-light text-stone-200 leading-snug italic mb-8">
              "We don't build software.{' '}
              <span className="text-gradient-red not-italic font-semibold">We engineer certainty.</span>"
            </blockquote>
            <p className="text-stone-500 text-lg leading-relaxed mb-6">{orgData.description}</p>
            <p className="text-stone-600 text-base leading-relaxed">
              Founded in {orgData.founded}, operating across {orgData.location} —
              Continental exists at the intersection of precision engineering and purposeful design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {orgData.values.map((value, i) => {
              const Icon = icons[i % icons.length]
              return (
                <div key={value.title} className="group glass-card glass-card-hover p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-crimson-700/60 to-transparent" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-7 h-7 border border-crimson-800/50 flex items-center justify-center group-hover:border-crimson-600/70 transition-colors">
                      <Icon size={12} className="text-crimson-600 group-hover:text-crimson-400 transition-colors" />
                    </div>
                    <h4 className="font-display text-lg font-semibold text-stone-100">{value.title}</h4>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
