export const dynamic = 'force-dynamic'

import { createClient } from '@supabase/supabase-js'
import { OrderStatusBadge } from '@/components/market/OrderStatusBadge'
import { formatPrice, formatRelativeTime } from '@/lib/market/format'
import Link from 'next/link'
import type { OrderStatus } from '@/types/market'

async function getData() {
  const admin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const [
    { data: orders },
    { data: vendors },
    { data: applications },
    { data: products },
  ] = await Promise.all([
    admin.from('market_orders').select('id,order_number,status,total,customer_name,created_at').order('created_at', { ascending: false }).limit(20),
    admin.from('vendors').select('id,store_name,trust_score,trust_tier,total_sales,is_active').order('total_sales', { ascending: false }).limit(10),
    admin.from('vendor_applications').select('*').eq('status', 'submitted').order('created_at', { ascending: false }),
    admin.from('products').select('count', { count: 'exact', head: true }),
  ])

  return {
    orders: orders ?? [],
    vendors: vendors ?? [],
    applications: applications ?? [],
    productCount: (products as any)?.count ?? 0,
  }
}

export const metadata = { title: 'Market Admin | JAHRAH' }

export default async function MarketAdminPage() {
  const { orders, vendors, applications, productCount } = await getData()

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur border-b border-outline-variant px-6 py-3 flex items-center justify-between">
        <h1 className="font-semibold">Market Admin</h1>
        <Link href="/dashboard" className="text-sm text-primary">Dashboard</Link>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Active Vendors', value: vendors.filter((v: any) => v.is_active).length, icon: 'store', color: '#b02f00' },
            { label: 'Products', value: productCount, icon: 'inventory_2', color: '#286c1e' },
            { label: 'Pending Applications', value: applications.length, icon: 'pending', color: '#705d00' },
            { label: 'Recent Orders', value: orders.length, icon: 'receipt_long', color: '#3F51B5' },
          ].map(({ label, value, icon, color }) => (
            <div key={label} className="p-4 bg-surface-container-low rounded-2xl">
              <span className="material-symbols-outlined text-2xl mb-2 block" style={{ color }}>{icon}</span>
              <p className="text-2xl font-bold" style={{ color }}>{value}</p>
              <p className="text-xs text-on-surface-variant mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Pending Applications */}
        {applications.length > 0 && (
          <section>
            <h2 className="font-headline-md text-lg font-bold mb-4">Pending Applications ({applications.length})</h2>
            <div className="space-y-3">
              {(applications as any[]).map((app) => (
                <div key={app.id} className="p-4 bg-amber-50 border border-amber-200 rounded-2xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{app.store_name}</p>
                      <p className="text-sm text-on-surface-variant">{app.email} · {app.category}</p>
                      <p className="text-xs text-on-surface-variant mt-1">{formatRelativeTime(app.created_at)}</p>
                    </div>
                    <Link href={`/admin/market/applications/${app.id}`} className="text-xs bg-primary text-on-primary px-3 py-1.5 rounded-full font-semibold">Review</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Recent Orders */}
        <section>
          <h2 className="font-headline-md text-lg font-bold mb-4">Recent Orders</h2>
          <div className="space-y-3">
            {(orders as any[]).map((order) => (
              <div key={order.id} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl">
                <div className="flex-1">
                  <p className="font-mono font-bold text-sm text-primary">{order.order_number}</p>
                  <p className="text-xs text-on-surface-variant">{order.customer_name} · {formatRelativeTime(order.created_at)}</p>
                </div>
                <OrderStatusBadge status={order.status as OrderStatus} />
                <p className="font-bold text-sm">{formatPrice(order.total)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vendors */}
        <section>
          <h2 className="font-headline-md text-lg font-bold mb-4">Top Vendors</h2>
          <div className="space-y-3">
            {(vendors as any[]).map((v) => (
              <div key={v.id} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {v.store_name[0]}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{v.store_name}</p>
                  <p className="text-xs text-on-surface-variant">{v.total_sales} sales · Trust: {v.trust_score}</p>
                </div>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${v.is_active ? 'bg-secondary' : 'bg-error'}`} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

