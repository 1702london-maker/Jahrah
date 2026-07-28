import type { Product } from '@/types/market'
import { ProductCard, ProductCardSkeleton } from './ProductCard'
import Link from 'next/link'

export function ProductGrid({
  products,
  loading = false,
  skeletonCount = 8,
  emptyMessage = 'No products found yet.',
  emptyAction,
}: {
  products: Product[]
  loading?: boolean
  skeletonCount?: number
  emptyMessage?: string
  emptyAction?: { label: string; href: string }
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (!products.length) {
    return (
      <div className="py-20 text-center">
        <span className="material-symbols-outlined text-5xl text-outline mb-3 block">inventory_2</span>
        <p className="text-on-surface-variant mb-4">{emptyMessage}</p>
        {emptyAction && (
          <Link href={emptyAction.href}
            className="inline-block px-6 py-3 bg-primary text-on-primary rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
            {emptyAction.label}
          </Link>
        )}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
