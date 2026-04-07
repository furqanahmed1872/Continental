import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { products } from '@/data'
import { ProductCard } from '@/components/ui/ProductCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured)
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Selected Systems"
            title="Active Operations"
            subtitle="Products currently deployed or in active development."
          />
          <Link href="/products" className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-crimson-600 hover:text-crimson-400 transition-colors shrink-0">
            View All Systems
            <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
