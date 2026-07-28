'use client'
import { useCart } from '@/lib/market/cart'
import { useEffect, useState } from 'react'

export function CartButton({ onClick }: { onClick: () => void }) {
  const itemCount = useCart((s) => s.itemCount)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(itemCount())
  }, [itemCount])

  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-1.5 bg-primary text-on-primary px-4 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
    >
      <span className="material-symbols-outlined text-base">shopping_cart</span>
      Cart
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-secondary text-on-secondary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  )
}
