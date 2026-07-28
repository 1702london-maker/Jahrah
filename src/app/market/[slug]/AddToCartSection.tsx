'use client'
import { useState } from 'react'
import { useCart } from '@/lib/market/cart'
import { CartDrawer } from '@/components/market/CartDrawer'
import type { Product } from '@/types/market'

export function AddToCartSection({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [variants, setVariants] = useState<Record<string, string>>({})
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem(product, qty, variants)
    setAdded(true)
    setDrawerOpen(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      {/* Variants */}
      {product.variants?.map((v) => (
        <div key={v.name} className="space-y-2">
          <p className="text-sm font-semibold">{v.name}</p>
          <div className="flex flex-wrap gap-2">
            {v.options.map((opt) => (
              <button
                key={opt}
                onClick={() => setVariants((prev) => ({ ...prev, [v.name]: opt }))}
                className="px-3 py-1.5 rounded-full text-sm border-2 transition-all"
                style={{
                  borderColor: variants[v.name] === opt ? '#b02f00' : '#e4beb4',
                  background: variants[v.name] === opt ? '#ffdbd1' : 'transparent',
                  color: variants[v.name] === opt ? '#b02f00' : '#1c1b1b',
                  fontWeight: variants[v.name] === opt ? '600' : '400',
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Qty + Add */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border-2 border-outline-variant rounded-full overflow-hidden">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2 text-lg font-bold hover:bg-surface-container">-</button>
          <span className="px-4 font-semibold">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="px-4 py-2 text-lg font-bold hover:bg-surface-container">+</button>
        </div>
        <button
          onClick={handleAdd}
          disabled={product.stock_status === 'out_of_stock'}
          className="flex-1 py-3 bg-primary text-on-primary rounded-full font-semibold hover:opacity-90 transition-opacity disabled:opacity-40"
        >
          {added ? 'Added to Cart!' : 'Add to Cart'}
        </button>
      </div>

      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
