'use client'
import { useCart } from '@/lib/market/cart'
import type { Product } from '@/types/market'
import { useState } from 'react'

export function CartButton({ onClick }: { onClick: () => void }) {
  const itemCount = useCart((s) => s.itemCount)
  const [count, setCount] = useState(0)

  // Hydration-safe: avoid SSR mismatch
  if (typeof window !== 'undefined') {
    const live = itemCount()
    if (live !== count) setCount(live)
  }

  return (
    <button onClick={onClick}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors"
      aria-label="Open cart">
      <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#b02f00] text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-0.5">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  )
}

export function AddToCartButton({
  product,
  variantSelection = {},
  quantity = 1,
  className = '',
}: {
  product: Product
  variantSelection?: Record<string, string>
  quantity?: number
  className?: string
}) {
  const { addItem, items } = useCart()
  const [added, setAdded] = useState(false)
  const inCart = items.some((i) => i.product_id === product.id)
  const outOfStock = product.stock_status === 'out_of_stock'

  function handleAdd() {
    if (outOfStock) return
    addItem(product, quantity, variantSelection)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <button onClick={handleAdd} disabled={outOfStock}
      className={`flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 disabled:opacity-40 ${className}`}
      style={{ background: added ? '#286c1e' : '#b02f00', color: '#fff' }}>
      <span className="material-symbols-outlined text-[18px]">
        {added ? 'check_circle' : outOfStock ? 'remove_shopping_cart' : 'add_shopping_cart'}
      </span>
      {outOfStock ? 'Out of Stock' : added ? 'Added to Cart!' : inCart ? 'Add More' : 'Add to Cart'}
    </button>
  )
}
