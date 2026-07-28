export const dynamic = 'force-dynamic'

import { createClient } from '@supabase/supabase-js'
import { getOrderByNumber } from '@/lib/market/supabase'
import { OrderStatusBadge } from '@/components/market/OrderStatusBadge'
import { OrderStatusTracker } from '@/components/market/OrderStatusTracker'
import { formatPrice, formatRelativeTime } from '@/lib/market/format'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import type { OrderStatus } from '@/types/market'

async function getUser() {
  const cookieStore = await cookies()
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { storage: { getItem: (k) => cookieStore.get(k)?.value ?? null, setItem: () => {}, removeItem: () => {} } } }
  )
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export default async function OrderDetailPage({ params }: { params: { orderNumber: string } }) {
  const user = await getUser()
  if (!user) redirect('/dashboard')

  const order = await getOrderByNumber(params.orderNumber, user.id)
  if (!order) notFound()

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur border-b border-outline-variant px-6 py-3 flex items-center gap-4">
        <Link href="/market/orders" className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface text-sm">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Orders
        </Link>
        <h1 className="font-semibold">Order {order.order_number}</h1>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Status */}
        <div className="p-5 bg-surface-container-low rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-headline-md text-base font-bold">Order Status</h2>
            <OrderStatusBadge status={order.status as OrderStatus} />
          </div>
          <OrderStatusTracker order={order} />
        </div>

        {/* Collection info */}
        {order.collection_code && (
          <div className="p-5 bg-primary text-on-primary rounded-2xl">
            <p className="text-sm opacity-80 mb-1">Collection Code</p>
            <p className="font-mono font-bold text-3xl tracking-widest">{order.collection_code}</p>
            <p className="text-sm opacity-80 mt-2">Show this code at the Jahrah Hub to collect your order.</p>
            {order.collection_point && (
              <p className="text-sm font-semibold mt-3">{order.collection_point.name} · {order.collection_point.city}</p>
            )}
          </div>
        )}

        {/* Items */}
        <div className="p-5 bg-surface-container-low rounded-2xl">
          <h2 className="font-headline-md text-base font-bold mb-4">Items ({order.items?.length ?? 0})</h2>
          <div className="space-y-3">
            {order.items?.map((item) => (
              <div key={item.id} className="flex gap-3">
                <div className="w-14 h-14 rounded-xl bg-surface-container overflow-hidden flex-shrink-0">
                  {item.product_image ? (
                    <img src={item.product_image} alt={item.product_name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl text-outline">shopping_bag</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{item.product_name}</p>
                  <p className="text-xs text-on-surface-variant">Qty: {item.quantity} × {formatPrice(item.unit_price)}</p>
                </div>
                <span className="font-bold text-sm">{formatPrice(item.total_price)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="p-5 bg-surface-container-low rounded-2xl space-y-3">
          <h2 className="font-headline-md text-base font-bold">Payment Summary</h2>
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Subtotal</span>
            <span>{formatPrice(order.subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Service fee</span>
            <span>{formatPrice(order.service_fee)}</span>
          </div>
          <div className="flex justify-between font-bold border-t border-outline-variant pt-3">
            <span>Total paid</span>
            <span className="text-primary">{formatPrice(order.total)}</span>
          </div>
          <div className="pt-2 space-y-1">
            <p className="text-xs text-on-surface-variant">Name: {order.customer_name}</p>
            <p className="text-xs text-on-surface-variant">Email: {order.customer_email}</p>
            <p className="text-xs text-on-surface-variant">Phone: {order.customer_phone}</p>
            <p className="text-xs text-on-surface-variant">Placed: {formatRelativeTime(order.created_at)}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
