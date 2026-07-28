export const dynamic = 'force-dynamic'

import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'

async function getVendorData(userId: string) {
  const admin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const { data: vendor } = await admin.from('vendors').select('*').eq('user_id', userId).single()
  if (!vendor) return null

  const { data: recentOrders } = await admin
    .from('market_order_items')
    .select('*, order:market_orders(order_number,status,created_at,customer_name,total)')
    .eq('vendor_id', vendor.id)
    .order('created_at', { ascending: false })
    .limit(10)

  const { data: products } = await admin
    .from('products')
    .select('id,name,price,stock_quantity,stock_status,total_sold,images')
    .eq('vendor_id', vendor.id)
    .order('created_at', { ascending: false })
    .limit(10)

  return { vendor, recentOrders: recentOrders ?? [], products: products ?? [] }
}

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

export const metadata = { title: 'Vendor Dashboard | JAHRAH Market' }

export default async function VendorDashboardPage() {
  const user = await getUser()
  if (!user) redirect('/dashboard')

  const data = await getVendorData(user.id)
  if (!data) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-4 px-4">
        <span className="material-symbols-outlined text-6xl text-outline">store</span>
        <h1 className="font-headline-lg text-xl font-bold">Not a Vendor Yet</h1>
        <p className="text-on-surface-variant text-center">Apply to become a Jahrah Market vendor.</p>
        <Link href="/market/vendor-portal/apply" className="px-6 py-3 bg-primary text-on-primary rounded-full font-semibold">Apply Now</Link>
      </div>
    )
  }

  const { vendor, recentOrders, products } = data

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur border-b border-outline-variant px-6 py-3 flex items-center justify-between">
        <h1 className="font-semibold">{vendor.store_name} — Dashboard</h1>
        <Link href="/market" className="text-sm text-primary">View Store</Link>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Trust Score', value: vendor.trust_score, icon: 'verified', color: '#b02f00' },
            { label: 'Total Sales', value: vendor.total_sales, icon: 'shopping_bag', color: '#286c1e' },
            { label: 'Delivery Rate', value: `${vendor.delivery_rate}%`, icon: 'local_shipping', color: '#705d00' },
            { label: 'Response Time', value: `${vendor.response_time_hours}h`, icon: 'schedule', color: '#3F51B5' },
          ].map(({ label, value, icon, color }) => (
            <div key={label} className="p-4 bg-surface-container-low rounded-2xl">
              <span className="material-symbols-outlined text-2xl mb-2 block" style={{ color }}>{icon}</span>
              <p className="text-2xl font-bold" style={{ color }}>{value}</p>
              <p className="text-xs text-on-surface-variant mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Products */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-headline-md text-lg font-bold">Your Products</h2>
          </div>
          {products.length === 0 ? (
            <p className="text-on-surface-variant text-sm">No products yet.</p>
          ) : (
            <div className="space-y-3">
              {products.map((p: any) => (
                <div key={p.id} className="flex gap-3 p-3 bg-surface-container-low rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
                    {p.images?.[0] ? <img src={p.images[0]} alt="" className="w-full h-full object-cover" /> : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl text-outline">shopping_bag</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm line-clamp-1">{p.name}</p>
                    <p className="text-xs text-on-surface-variant">{p.total_sold} sold</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-sm text-primary">₦{Number(p.price).toLocaleString()}</p>
                    <p className="text-xs" style={{ color: p.stock_status === 'out_of_stock' ? '#ba1a1a' : '#286c1e' }}>
                      {p.stock_status.replace(/_/g, ' ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Recent orders */}
        <section>
          <h2 className="font-headline-md text-lg font-bold mb-4">Recent Orders</h2>
          {recentOrders.length === 0 ? (
            <p className="text-on-surface-variant text-sm">No orders yet.</p>
          ) : (
            <div className="space-y-3">
              {recentOrders.map((item: any) => (
                <div key={item.id} className="p-3 bg-surface-container-low rounded-xl flex justify-between items-center">
                  <div>
                    <p className="font-mono text-sm font-bold text-primary">{item.order?.order_number}</p>
                    <p className="text-xs text-on-surface-variant">{item.product_name} × {item.quantity}</p>
                    <p className="text-xs text-on-surface-variant">{item.order?.customer_name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">₦{Number(item.total_price).toLocaleString()}</p>
                    <p className="text-xs capitalize" style={{ color: item.order?.status === 'collected' ? '#286c1e' : '#705d00' }}>
                      {item.order?.status?.replace(/_/g, ' ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
