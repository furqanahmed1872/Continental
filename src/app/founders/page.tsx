import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Linkedin, Github } from 'lucide-react'
import { founders } from '@/data'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata = {
  title: 'Founders — Continental',
  description: 'The team behind Continental.',
}

export default function FoundersPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">

      {/* Atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-crimson-950/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-24">
          <SectionHeading
            eyebrow="The Council"
            title="Meet the Founders"
            subtitle="The architects behind every system Continental has ever shipped."
            centered
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {founders.map((founder, i) => (
            <div key={founder.id} className="group glass-card relative overflow-hidden transition-all duration-500 hover:border-crimson-800/50 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(139,26,26,0.12)]">

              {/* Top border reveal */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson-600/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-center" />

              {/* Number */}
              <div className="absolute top-6 right-6 font-mono text-[10px] text-stone-800 tracking-widest">
                0{i + 1} / 04
              </div>

              <div className="p-8 flex flex-col sm:flex-row gap-8">
                {/* Avatar */}
                <div className="shrink-0 relative">
                  <div className="relative w-24 h-24">
                    {/* Animated border */}
                    <div className="absolute -inset-2 border border-crimson-800/30 rotate-6 group-hover:rotate-[186deg] transition-transform duration-700 ease-out" />
                    <div className="absolute -inset-2 border border-gold-800/20 -rotate-3 group-hover:rotate-[-183deg] transition-transform duration-700 delay-75 ease-out" />
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={96}
                      height={96}
                      className="w-24 h-24 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 relative z-10"
                    />
                    {/* Red overlay on hover vanish */}
                    <div className="absolute inset-0 bg-crimson-950/40 group-hover:opacity-0 transition-opacity duration-700 z-20" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold text-stone-100 mb-0.5 group-hover:text-crimson-300 transition-colors duration-400">
                    {founder.name}
                  </h3>
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-crimson-600 mb-4">
                    {founder.role}
                  </p>
                  <p className="text-stone-500 text-sm leading-relaxed mb-5">{founder.bio}</p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {founder.specialties.map((s) => (
                      <span key={s} className="text-[10px] px-2 py-0.5 border border-stone-800/70 text-stone-600 font-mono tracking-wider hover:border-crimson-800/50 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Social */}
                  <div className="flex items-center gap-4">
                    {founder.social.twitter && (
                      <Link href={founder.social.twitter} target="_blank" rel="noopener noreferrer"
                        className="text-stone-700 hover:text-crimson-400 transition-colors duration-300">
                        <Twitter size={13} />
                      </Link>
                    )}
                    {founder.social.linkedin && (
                      <Link href={founder.social.linkedin} target="_blank" rel="noopener noreferrer"
                        className="text-stone-700 hover:text-crimson-400 transition-colors duration-300">
                        <Linkedin size={13} />
                      </Link>
                    )}
                    {founder.social.github && (
                      <Link href={founder.social.github} target="_blank" rel="noopener noreferrer"
                        className="text-stone-700 hover:text-crimson-400 transition-colors duration-300">
                        <Github size={13} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom-left corner ornament */}
              <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div className="absolute bottom-0 left-0 w-full h-px bg-gold-700/40" />
                <div className="absolute bottom-0 left-0 h-full w-px bg-gold-700/40" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-28 text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-crimson-800/30 to-transparent mb-14" />
          <blockquote className="font-display text-3xl md:text-5xl font-light text-stone-400 italic max-w-3xl mx-auto leading-tight">
            "The best systems aren't built by individuals.{' '}
            <span className="text-gradient-red not-italic font-semibold">They're built by councils.</span>"
          </blockquote>
        </div>

      </div>
    </div>
  )
}
