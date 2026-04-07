import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Product } from '@/data'
import { StatusBadge } from './StatusBadge'
import { clsx } from 'clsx'

export function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  return (
    <div className="group relative glass-card glass-card-hover p-6 flex flex-col gap-4 h-full">
      {/* Top accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-crimson-700/70 via-gold-600/50 to-transparent" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-stone-700 font-mono mb-1">
            {product.category} · {product.year}
          </p>
          <h3 className={clsx(
            'font-display font-semibold text-stone-100 leading-tight transition-colors duration-300 group-hover:text-crimson-300',
            featured ? 'text-2xl' : 'text-xl'
          )}>
            {product.title}
          </h3>
        </div>
        <StatusBadge status={product.status} />
      </div>

      <p className="text-stone-500 text-sm leading-relaxed flex-1">
        {featured ? product.longDescription : product.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {product.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="text-[10px] px-2 py-0.5 border border-stone-800/80 text-stone-600 font-mono tracking-wider hover:border-crimson-800/50 hover:text-stone-500 transition-colors">
            {tag}
          </span>
        ))}
      </div>

      {product.link ? (
        <Link
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-crimson-500 hover:text-crimson-300 transition-colors group/link"
        >
          View System
          <ArrowUpRight size={11} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      ) : (
        <span className="text-[11px] tracking-[0.2em] uppercase text-stone-700 font-mono">
          {product.status === 'upcoming' ? '— Queued —' : '— Internal —'}
        </span>
      )}

      {/* Corner ornaments */}
      <div className="absolute top-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <div className="absolute top-0 right-0 w-full h-px bg-crimson-600/60" />
        <div className="absolute top-0 right-0 h-full w-px bg-crimson-600/60" />
      </div>
      <div className="absolute bottom-0 left-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gold-700/40" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gold-700/40" />
      </div>
    </div>
  )
}
