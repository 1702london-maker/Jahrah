'use client'
import { useState } from 'react'
import { CartDrawer } from '@/components/market/CartDrawer'
import { CartButton } from '@/components/market/CartButton'

export default function MarketLayout({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      {/* Floating cart button — visible on all market sub-pages */}
      <div className="fixed bottom-6 right-4 z-30 md:hidden">
        <CartButton onClick={() => setCartOpen(true)} />
      </div>
      {children}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
