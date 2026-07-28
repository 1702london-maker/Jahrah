import { getProducts } from '@/lib/market/supabase'
import { ProductGrid } from '@/components/market/ProductGrid'
import Link from 'next/link'
import type { Metadata } from 'next'

const CATEGORIES = [
  'fashion', 'beauty', 'food_drinks', 'electronics', 'home_living',
  'health', 'art_crafts', 'kids', 'sports', 'automotive',
]

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c }))
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const label = params.category.replace(/_/g, ' ')
  return { title: `${label} | JAHRAH Market` }
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const label = params.category.replace(/_/g, ' ')
  const products = await getProducts({ category: params.category })

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur border-b border-outline-variant px-6 py-3 flex items-center gap-4">
        <Link href="/market" className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface text-sm">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Market
        </Link>
        <span className="text-outline-variant">/</span>
        <span className="text-sm font-semibold capitalize">{label}</span>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="font-headline-lg text-2xl font-bold mb-2 capitalize">{label}</h1>
        <p className="text-on-surface-variant text-sm mb-8">{products.length} products</p>
        <ProductGrid products={products} />
      </main>
    </div>
  )
}
