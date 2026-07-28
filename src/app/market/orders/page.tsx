export const dynamic = 'force-dynamic'

import { createClient } from '@supabase/supabase-js'
import { getUserOrders } from '@/lib/market/supabase'
import { FulfilmentBadge } from '@/components/market/FulfilmentBadge'
import { formatPrice, formatRelativeTime } from '@/lib/market/format'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'
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

export const metadata = { title: 'My Orders | JAHRAH Market' }

export default async function OrdersPage() {
  const user = await getUser()
  if (!user) redirect('/dashboard')

  const orders = await getUserOrders(user.id)

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur border-b border-outline-variant px-6 py-3 flex items-center gap-4">
        <Link href="/market" className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface text-sm">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Market
        </Link>
        <h1 className="font-semibold">My Orders</h1>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {orders.length === 0 ? (
          <div className="text-center py-20 space-y-4">
            <span className="material-symbols-outlined text-6xl text-outline block">receipt_long</span>
            <p className="text-on-surface-variant">You haven't placed any orders yet.</p>
            <Link href="/market" className="inline-block px-6 py-3 bg-primary text-on-primary rounded-full font-semibold">Browse Market</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <Link key={order.id} href={`/market/orders/${order.order_number}`} className="block">
                <div className="p-5 bg-surface-container-low rounded-2xl hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="font-mono text-sm font-bold text-primary">{order.order_number}</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">{formatRelativeTime(order.created_at)}</p>
                    </div>
                    <FulfilmentBadge status={order.status as OrderStatus} />
                  </div>

                  <div className="flex gap-2 mb-3 overflow-hidden">
                    {((order as any).items ?? []).slice(0, 3).map((item: any, i: number) => (
                      <div key={i} className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
                        {item.product_image ? (
                          <img src={item.product_image} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-xl text-outline">shopping_bag</span>
                          </div>
                        )}
                      </div>
                    ))}
                    {((order as any).items?.length ?? 0) > 3 && (
                      <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-xs font-semibold text-on-surface-variant flex-shrink-0">
                        +{(order as any).items.length - 3}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-on-surface-variant">
                      {(order as any).collection_point?.name}
                    </p>
                    <p className="font-bold text-primary">{formatPrice(order.total)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
