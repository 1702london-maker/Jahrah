'use client'
import { useCart } from '@/lib/market/cart'
import { formatPrice } from '@/lib/market/format'
import { CollectionPointSelector } from '@/components/market/CollectionPointSelector'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { CollectionPoint } from '@/types/market'

export default function CheckoutPage() {
  const { items, subtotal, serviceFee, total, clearCart } = useCart()
  const router = useRouter()
  const [points, setPoints] = useState<CollectionPoint[]>([])
  const [selectedPoint, setSelectedPoint] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/market/checkout?action=points')
      .then((r) => r.json())
      .then((d) => {
        setPoints(d.points ?? [])
        if (d.points?.length) setSelectedPoint(d.points[0].id)
      })
  }, [])

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-4">
        <span className="material-symbols-outlined text-6xl text-outline">shopping_cart</span>
        <p className="font-semibold text-on-surface-variant">Your cart is empty</p>
        <Link href="/market" className="px-6 py-3 bg-primary text-on-primary rounded-full font-semibold">Browse Market</Link>
      </div>
    )
  }

  async function handleCheckout(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedPoint) { setError('Please select a collection point'); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/market/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({
            product_id: i.product_id,
            quantity: i.quantity,
            variant_selection: i.variant_selection,
            unit_price: i.unit_price,
          })),
          collection_point_id: selectedPoint,
          customer_name: form.name,
          customer_email: form.email,
          customer_phone: form.phone,
          notes: form.notes,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Checkout failed')
      clearCart()
      window.location.href = data.authorization_url
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur border-b border-outline-variant px-6 py-3 flex items-center gap-4">
        <Link href="/market/cart" className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface text-sm">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Cart
        </Link>
        <h1 className="font-semibold">Checkout</h1>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleCheckout} className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <section>
              <h2 className="font-headline-md text-lg font-bold mb-4">Your Details</h2>
              <div className="space-y-3">
                {(['name', 'email', 'phone'] as const).map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-semibold mb-1 capitalize">{field}</label>
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      required
                      value={form[field]}
                      onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border-2 border-outline-variant focus:border-primary outline-none bg-surface text-on-surface"
                      placeholder={field === 'phone' ? '08012345678' : ''}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold mb-1">Notes (optional)</label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-outline-variant focus:border-primary outline-none bg-surface text-on-surface resize-none"
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-headline-md text-lg font-bold mb-4">Collection Point</h2>
              <CollectionPointSelector points={points} selectedId={selectedPoint} onChange={setSelectedPoint} />
            </section>
          </div>

          <div>
            <h2 className="font-headline-md text-lg font-bold mb-4">Order Summary</h2>
            <div className="bg-surface-container-low rounded-2xl p-5 space-y-4 sticky top-20">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
                    {item.product?.images?.[0] ? (
                      <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl text-outline">shopping_bag</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold line-clamp-1">{item.product?.name}</p>
                    <p className="text-xs text-on-surface-variant">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-bold">{formatPrice(item.unit_price * item.quantity)}</span>
                </div>
              ))}

              <div className="border-t border-outline-variant pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span>{formatPrice(subtotal())}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Service fee</span>
                  <span>{formatPrice(serviceFee())}</span>
                </div>
                <div className="flex justify-between font-bold text-base border-t border-outline-variant pt-2">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(total())}</span>
                </div>
              </div>

              {error && <p className="text-sm text-error bg-error-container px-3 py-2 rounded-xl">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-primary text-on-primary rounded-full font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Processing...</>
                ) : (
                  <>Pay {formatPrice(total())} <span className="material-symbols-outlined text-base">arrow_forward</span></>
                )}
              </button>
              <p className="text-xs text-on-surface-variant text-center">Powered by Paystack · Secured payment</p>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}
