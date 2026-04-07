import { clsx } from 'clsx'
import { ProjectStatus } from '@/data'

const config: Record<ProjectStatus, { label: string; classes: string; dot: string }> = {
  completed: {
    label: 'Completed',
    classes: 'border-emerald-800/40 text-emerald-500 bg-emerald-950/30',
    dot: 'bg-emerald-500',
  },
  'in-progress': {
    label: 'In Progress',
    classes: 'border-gold-800/50 text-gold-400 bg-gold-950/30',
    dot: 'bg-gold-400',
  },
  upcoming: {
    label: 'Upcoming',
    classes: 'border-stone-800/50 text-stone-500 bg-stone-950/30',
    dot: 'bg-stone-600',
  },
}

export function StatusBadge({
  status, className, animated = true,
}: { status: ProjectStatus; className?: string; animated?: boolean }) {
  const c = config[status]
  return (
    <span className={clsx(
      'inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold border font-body backdrop-blur-sm',
      c.classes, className
    )}>
      <span className={clsx('w-1.5 h-1.5 rounded-full shrink-0', c.dot, animated && status === 'in-progress' && 'status-pulse')} />
      {c.label}
    </span>
  )
}
