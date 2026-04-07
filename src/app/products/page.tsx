import { products, ProjectStatus } from '@/data'
import { ProductCard } from '@/components/ui/ProductCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatusBadge } from '@/components/ui/StatusBadge'

export const metadata = {
  title: 'Products — Continental',
  description: 'All systems and products built by Continental.',
}

export default function ProductsPage() {
  const completed  = products.filter((p) => p.status === 'completed')
  const inProgress = products.filter((p) => p.status === 'in-progress')
  const upcoming   = products.filter((p) => p.status === 'upcoming')

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative">
      {/* Atmosphere */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(139,26,26,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="System Directory"
            title="All Products"
            subtitle="Every system Continental has engineered — from active deployments to queued operations."
          />
        </div>

        {/* Status overview */}
        <div className="grid grid-cols-3 gap-px bg-crimson-950/40 border border-crimson-950/40 mb-24">
          {[
            { status: 'completed'   as ProjectStatus, count: completed.length,  label: 'Deployed' },
            { status: 'in-progress' as ProjectStatus, count: inProgress.length, label: 'In Dev' },
            { status: 'upcoming'    as ProjectStatus, count: upcoming.length,   label: 'Queued' },
          ].map((s, i) => (
            <div key={s.status} className="bg-obsidian-800 p-8 text-center group hover:bg-crimson-950/20 transition-colors duration-400">
              <p className="font-display text-5xl font-semibold text-gradient-gold mb-3">{s.count}</p>
              <StatusBadge status={s.status} animated={false} />
              <p className="text-stone-700 text-[10px] tracking-[0.3em] uppercase mt-2 font-mono">{s.label}</p>
            </div>
          ))}
        </div>

        <ProductGroup title="Deployed Systems"   status="completed"   items={completed} />
        <ProductGroup title="Active Development" status="in-progress" items={inProgress} />
        <ProductGroup title="Queued Operations"  status="upcoming"    items={upcoming} />
      </div>
    </div>
  )
}

function ProductGroup({ title, status, items }: {
  title: string; status: ProjectStatus; items: typeof products
}) {
  if (!items.length) return null
  return (
    <div className="mb-20">
      <div className="flex items-center gap-5 mb-8">
        <StatusBadge status={status} />
        <h3 className="font-display text-2xl font-light text-stone-400">{title}</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-crimson-900/40 to-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
