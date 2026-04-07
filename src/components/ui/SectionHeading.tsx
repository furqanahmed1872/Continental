import { clsx } from 'clsx'

export function SectionHeading({
  eyebrow, title, subtitle, centered = false, className,
}: {
  eyebrow?: string; title: string; subtitle?: string; centered?: boolean; className?: string
}) {
  return (
    <div className={clsx(centered && 'text-center', className)}>
      {eyebrow && (
        <p className="text-[10px] tracking-[0.4em] uppercase text-crimson-700 font-mono mb-3">
          — {eyebrow} —
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-light text-stone-100 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-stone-500 text-base leading-relaxed max-w-2xl">{subtitle}</p>
      )}
      <div className={clsx(
        'mt-5 h-px w-12 bg-gradient-to-r from-crimson-700 to-transparent',
        centered && 'mx-auto bg-gradient-to-r from-transparent via-crimson-700 to-transparent w-20'
      )} />
    </div>
  )
}
