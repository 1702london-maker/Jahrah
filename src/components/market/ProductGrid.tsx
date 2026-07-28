import type { Product } from '@/types/market'
import { ProductCard } from './ProductCard'

export function ProductGrid({ products, emptyMessage = 'No products found' }: { products: Product[]; emptyMessage?: string }) {
  if (!products.length) {
    return (
      <div className="py-20 text-center">
        <span className="material-symbols-outlined text-5xl text-outline mb-3 block">inventory_2</span>
        <p className="text-on-surface-variant">{emptyMessage}</p>
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
