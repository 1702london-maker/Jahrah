import { getVendorBySlug, getProducts } from '@/lib/market/supabase'
import { TrustScore } from '@/components/market/TrustScore'
import { ProductGrid } from '@/components/market/ProductGrid'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const vendor = await getVendorBySlug(params.slug)
  if (!vendor) return { title: 'Vendor Not Found | JAHRAH Market' }
  return { title: `${vendor.store_name} | JAHRAH Market`, description: vendor.description ?? undefined }
}

export default async function VendorPage({ params }: { params: { slug: string } }) {
  const [vendor, products] = await Promise.all([
    getVendorBySlug(params.slug),
    getProducts({ vendorSlug: params.slug }),
  ])
  if (!vendor) notFound()

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur border-b border-outline-variant px-6 py-3 flex items-center gap-4">
        <Link href="/market" className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface text-sm">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Market
        </Link>
      </header>

      {/* Vendor banner */}
      <div className="relative h-48 bg-primary overflow-hidden">
        {vendor.banner_url && <img src={vendor.banner_url} alt="" className="w-full h-full object-cover" />}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <main className="max-w-6xl mx-auto px-4">
        <div className="flex items-end gap-4 -mt-10 mb-8">
          <div className="w-20 h-20 rounded-2xl bg-primary text-on-primary flex items-center justify-center text-3xl font-bold border-4 border-surface shadow-lg">
            {vendor.logo_url ? (
              <img src={vendor.logo_url} alt={vendor.store_name} className="w-full h-full object-cover rounded-2xl" />
            ) : (
              vendor.store_name[0]
            )}
          </div>
          <div className="pb-1">
            <h1 className="font-headline-lg text-2xl font-bold">{vendor.store_name}</h1>
            <p className="text-sm text-on-surface-variant">{vendor.city}, {vendor.state}</p>
          </div>
          <div className="ml-auto pb-1">
            <TrustScore score={vendor.trust_score} tier={vendor.trust_tier} />
          </div>
        </div>

        {vendor.description && (
          <p className="text-on-surface-variant text-sm mb-8 max-w-2xl">{vendor.description}</p>
        )}

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="p-4 bg-surface-container-low rounded-2xl text-center">
            <p className="text-2xl font-bold text-primary">{vendor.total_sales}</p>
            <p className="text-xs text-on-surface-variant mt-1">Sales</p>
          </div>
          <div className="p-4 bg-surface-container-low rounded-2xl text-center">
            <p className="text-2xl font-bold text-secondary">{vendor.delivery_rate}%</p>
            <p className="text-xs text-on-surface-variant mt-1">Delivery Rate</p>
          </div>
          <div className="p-4 bg-surface-container-low rounded-2xl text-center">
            <p className="text-2xl font-bold text-tertiary">{vendor.response_time_hours}h</p>
            <p className="text-xs text-on-surface-variant mt-1">Response Time</p>
          </div>
        </div>

        <h2 className="font-headline-md text-xl font-bold mb-6">Products ({products.length})</h2>
        <ProductGrid products={products} emptyMessage="This vendor has no active products" />
        <div className="h-16" />
      </main>
    </div>
  )
}
