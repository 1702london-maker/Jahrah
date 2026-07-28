'use client'
import { useCart } from '@/lib/market/cart'
import { formatPrice } from '@/lib/market/format'
import Link from 'next/link'
import { useEffect } from 'react'

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, removeItem, updateQuantity, subtotal, serviceFee, total } = useCart()

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-surface z-50 flex flex-col shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-outline-variant">
          <h2 className="font-headline-md text-lg font-semibold">Your Cart ({items.length})</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-surface-container">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-on-surface-variant">
            <span className="material-symbols-outlined text-6xl">shopping_cart</span>
            <p className="font-semibold">Your cart is empty</p>
            <button onClick={onClose} className="text-sm text-primary underline">Continue shopping</button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden flex-shrink-0">
                    {item.product?.images?.[0] ? (
                      <img src={item.product.images[0]} alt={item.product?.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl text-outline">shopping_bag</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm line-clamp-1">{item.product?.name}</p>
                    <p className="text-xs text-on-surface-variant mb-1">{item.product?.vendor?.store_name}</p>
                    {Object.entries(item.variant_selection).map(([k, v]) => (
                      <p key={k} className="text-xs text-on-surface-variant">{k}: {v}</p>
                    ))}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-sm font-bold"
                      >-</button>
                      <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-sm font-bold"
                      >+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span className="font-bold text-sm text-primary">{formatPrice(item.unit_price * item.quantity)}</span>
                    <button onClick={() => removeItem(item.product_id)} className="text-error p-0.5">
                      <span className="material-symbols-outlined text-base">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-outline-variant p-5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Subtotal</span>
                <span className="font-semibold">{formatPrice(subtotal())}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Service fee (5%)</span>
                <span className="font-semibold">{formatPrice(serviceFee())}</span>
              </div>
              <div className="flex justify-between font-bold text-base border-t border-outline-variant pt-3">
                <span>Total</span>
                <span className="text-primary">{formatPrice(total())}</span>
              </div>
              <Link
                href="/market/checkout"
                onClick={onClose}
                className="block w-full py-3 bg-primary text-on-primary text-center font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}
