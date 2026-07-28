'use client'
import Link from 'next/link'
import type { Product } from '@/types/market'
import { PriceDisplay } from './PriceDisplay'
import { TrustScore } from './TrustScore'
import { FulfilmentBadge } from './FulfilmentBadge'
import { useCart } from '@/lib/market/cart'
import { useState } from 'react'
import type { FulfilmentType } from '@/types/market'

function Skeleton() {
  return (
    <div className="bg-surface-container-low rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-square bg-surface-container" />
      <div className="p-3 space-y-2">
        <div className="h-3 bg-surface-container rounded w-2/3" />
        <div className="h-4 bg-surface-container rounded" />
        <div className="h-3 bg-surface-container rounded w-1/2" />
        <div className="h-8 bg-surface-container rounded-xl mt-3" />
      </div>
    </div>
  )
}

export function ProductCardSkeleton() { return <Skeleton /> }

export function ProductCard({ product }: { product: Product }) {
  const { addItem, items } = useCart()
  const [added, setAdded] = useState(false)
  const inCart = items.some((i) => i.product_id === product.id)

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault()
    addItem(product, 1, {})
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  const fulfilmentType = (product as any).fulfilment_type as FulfilmentType | undefined

  return (
    <Link href={`/market/${product.slug}`} className="group block">
      <div className="bg-surface-container-low rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-surface-container">
          {product.images?.[0] ? (
            <img src={product.images[0]} alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-outline">shopping_bag</span>
            </div>
          )}
          {product.stock_status === 'out_of_stock' && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-semibold text-sm bg-black/70 px-3 py-1 rounded-full">Out of Stock</span>
            </div>
          )}
          {product.compare_at_price && product.compare_at_price > product.price && (
            <span className="absolute top-2 left-2 bg-secondary text-on-secondary text-[10px] font-bold px-2 py-0.5 rounded-full">
              SALE
            </span>
          )}
          {(product as any).is_jahrah_choice && (
            <span className="absolute top-2 right-2 bg-[#b02f00] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[10px]">verified</span> Choice
            </span>
          )}
        </div>

        <div className="p-3 flex-1 flex flex-col">
          <div className="flex items-center gap-1 mb-1">
            <p className="text-xs text-on-surface-variant flex-1 truncate">{product.vendor?.store_name}</p>
            {product.vendor && (
              <TrustScore score={product.vendor.trust_score} tier={product.vendor.trust_tier} size="sm" />
            )}
          </div>
          <h3 className="font-semibold text-sm text-on-surface line-clamp-2 mb-2 flex-1">{product.name}</h3>

          {fulfilmentType && (
            <div className="mb-2">
              <FulfilmentBadge type={fulfilmentType} />
            </div>
          )}

          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="material-symbols-outlined text-sm fill-icon"
                style={{ color: i < Math.round(product.avg_rating ?? 0) ? '#FFD700' : '#e5e2e1' }}>
                star
              </span>
            ))}
            <span className="text-xs text-on-surface-variant ml-1">({product.review_count ?? 0})</span>
          </div>

          <PriceDisplay price={product.price} compareAt={product.compare_at_price} size="sm" />

          <button onClick={handleAdd} disabled={product.stock_status === 'out_of_stock'}
            className="mt-3 w-full py-2 rounded-xl text-sm font-semibold transition-all disabled:opacity-40"
            style={{ background: added || inCart ? '#286c1e' : '#b02f00', color: '#fff' }}>
            {added ? '✓ Added!' : inCart ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </Link>
  )
}
