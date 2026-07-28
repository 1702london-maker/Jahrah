export const dynamic = 'force-dynamic'

import { getProducts } from '@/lib/market/supabase'
import { ProductGrid } from '@/components/market/ProductGrid'
import { CategorySort } from './CategorySort'
import Link from 'next/link'
import type { Metadata } from 'next'
import type { Product } from '@/types/market'

const CATEGORIES = [
  { slug: 'fashion', label: 'Fashion', icon: 'checkroom' },
  { slug: 'beauty', label: 'Beauty', icon: 'face_retouching_natural' },
  { slug: 'food_drinks', label: 'Food & Drinks', icon: 'restaurant' },
  { slug: 'electronics', label: 'Electronics', icon: 'devices' },
  { slug: 'home_living', label: 'Home & Living', icon: 'chair' },
  { slug: 'health', label: 'Health', icon: 'favorite' },
  { slug: 'art_crafts', label: 'Art & Crafts', icon: 'palette' },
  { slug: 'kids', label: 'Kids', icon: 'child_care' },
  { slug: 'sports', label: 'Sports', icon: 'sports_soccer' },
  { slug: 'automotive', label: 'Automotive', icon: 'directions_car' },
]

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  fashion: 'Clothing, footwear and accessories from verified Nigerian vendors.',
  beauty: 'Skincare, makeup, hair products and wellness essentials.',
  food_drinks: 'Artisan food, beverages, spices and specialty groceries.',
  electronics: 'Phones, gadgets, accessories and tech gear.',
  home_living: 'Furniture, décor, kitchenware and home essentials.',
  health: 'Supplements, fitness equipment and health devices.',
  art_crafts: 'Handmade crafts, prints, sculptures and bespoke creations.',
  kids: 'Toys, clothing, books and accessories for children.',
  sports: 'Equipment, apparel and accessories for every sport.',
  automotive: 'Car accessories, spare parts and vehicle care products.',
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const cat = CATEGORIES.find((c) => c.slug === params.category)
  const label = cat?.label ?? params.category.replace(/_/g, ' ')
  return {
    title: `${label} | JAHRAH Market`,
    description: CATEGORY_DESCRIPTIONS[params.category],
  }
}

function sortProducts(products: Product[], sort: string): Product[] {
  const copy = [...products]
  switch (sort) {
    case 'price_asc':
      return copy.sort((a, b) => a.price - b.price)
    case 'price_desc':
      return copy.sort((a, b) => b.price - a.price)
    case 'popular':
      return copy.sort((a, b) => ((b as any).total_sold ?? 0) - ((a as any).total_sold ?? 0))
    default:
      return copy.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string }
  searchParams: { sort?: string }
}) {
  const sort = searchParams.sort ?? 'newest'
  const cat = CATEGORIES.find((c) => c.slug === params.category)
  const label = cat?.label ?? params.category.replace(/_/g, ' ')
  const description = CATEGORY_DESCRIPTIONS[params.category]

  const rawProducts = await getProducts({ category: params.category })
  const products = sortProducts(rawProducts, sort)

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur border-b border-outline-variant px-6 py-3 flex items-center gap-3">
        <Link href="/market" className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface text-sm">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Market
        </Link>
        <span className="text-outline-variant">/</span>
        <span className="text-sm font-semibold text-on-surface">{label}</span>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="mb-8">
          <h1 className="font-headline-lg text-3xl font-bold mb-1">{label}</h1>
          {description && <p className="text-on-surface-variant text-sm">{description}</p>}
        </div>

        {/* Category chips */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 hide-scrollbar">
          {CATEGORIES.map((c) => {
            const isActive = c.slug === params.category
            return (
              <Link
                key={c.slug}
                href={`/market/category/${c.slug}`}
                className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all border-2"
                style={{
                  borderColor: isActive ? '#b02f00' : 'transparent',
                  background: isActive ? '#ffdbd1' : '#f4f0ef',
                  color: isActive ? '#b02f00' : '#4a4543',
                }}
              >
                <span className="material-symbols-outlined text-base">{c.icon}</span>
                {c.label}
              </Link>
            )
          })}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-on-surface-variant">
            {products.length} {products.length === 1 ? 'product' : 'products'}
          </p>
          <CategorySort current={sort} />
        </div>

        <ProductGrid
          products={products}
          emptyMessage={`No products yet in ${label}`}
          emptyAction={{ label: 'Browse all categories', href: '/market' }}
        />

        <div className="h-16" />
      </main>
    </div>
  )
}
