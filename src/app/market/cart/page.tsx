'use client'
import { useCart } from '@/lib/market/cart'
import { formatPrice } from '@/lib/market/format'
import Link from 'next/link'

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, serviceFee, total, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-4 text-on-surface-variant">
        <span className="material-symbols-outlined text-8xl">shopping_cart</span>
        <h1 className="font-headline-lg text-2xl font-bold text-on-surface">Your cart is empty</h1>
        <Link href="/market" className="mt-2 px-6 py-3 bg-primary text-on-primary rounded-full font-semibold hover:opacity-90 transition-opacity">
          Browse Market
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur border-b border-outline-variant px-6 py-3 flex items-center justify-between">
        <Link href="/market" className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface text-sm">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Market
        </Link>
        <h1 className="font-semibold">Cart ({items.length} items)</h1>
        <button onClick={clearCart} className="text-sm text-error">Clear all</button>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 bg-surface-container-low rounded-2xl">
              <div className="w-20 h-20 rounded-xl bg-surface-container overflow-hidden flex-shrink-0">
                {item.product?.images?.[0] ? (
                  <img src={item.product.images[0]} alt={item.product?.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl text-outline">shopping_bag</span>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <Link href={`/market/${item.product?.slug}`} className="font-semibold text-sm hover:text-primary transition-colors line-clamp-2">{item.product?.name}</Link>
                <p className="text-xs text-on-surface-variant mb-1">{item.product?.vendor?.store_name}</p>
                {Object.entries(item.variant_selection).map(([k, v]) => (
                  <span key={k} className="text-xs text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full mr-1">{k}: {v}</span>
                ))}
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => updateQuantity(item.product_id, item.quantity - 1)} className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center font-bold">-</button>
                  <span className="w-6 text-center font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product_id, item.quantity + 1)} className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center font-bold">+</button>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="font-bold text-primary">{formatPrice(item.unit_price * item.quantity)}</span>
                <button onClick={() => removeItem(item.product_id)} className="text-error">
                  <span className="material-symbols-outlined text-base">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-low rounded-2xl p-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Subtotal</span>
            <span className="font-semibold">{formatPrice(subtotal())}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Service fee (5%)</span>
            <span className="font-semibold">{formatPrice(serviceFee())}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t border-outline-variant pt-3">
            <span>Total</span>
            <span className="text-primary">{formatPrice(total())}</span>
          </div>
          <Link
            href="/market/checkout"
            className="block w-full py-3.5 bg-primary text-on-primary text-center font-semibold rounded-full hover:opacity-90 transition-opacity text-base mt-4"
          >
            Proceed to Checkout
          </Link>
        </div>
      </main>
    </div>
  )
}
