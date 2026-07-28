export const dynamic = 'force-dynamic'

import { getVendorBySlug, getProducts } from '@/lib/market/supabase'
import { TrustScore } from '@/components/market/TrustScore'
import { VendorTabs } from './VendorTabs'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const vendor = await getVendorBySlug(params.slug)
  if (!vendor) return { title: 'Vendor Not Found | JAHRAH Market' }
  return {
    title: `${vendor.store_name} | JAHRAH Market`,
    description: vendor.description ?? `Shop from ${vendor.store_name} on JAHRAH Market`,
    openGraph: { images: vendor.banner_url ? [vendor.banner_url] : [] },
  }
}

export default async function VendorPage({ params }: { params: { slug: string } }) {
  const [vendor, products] = await Promise.all([
    getVendorBySlug(params.slug),
    getProducts({ vendorSlug: params.slug }),
  ])
  if (!vendor) notFound()

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur border-b border-outline-variant px-6 py-3 flex items-center gap-3">
        <Link href="/market" className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface text-sm">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Market
        </Link>
        <span className="text-outline-variant">/</span>
        <span className="text-sm font-semibold text-on-surface">{vendor.store_name}</span>
      </header>

      {/* Banner */}
      <div className="relative h-52 bg-surface-container overflow-hidden">
        {vendor.banner_url ? (
          <img src={vendor.banner_url} alt="" className="w-full h-full object-cover" />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, #ffdbd1 0%, #f3e8fd 50%, #e3f0fd 100%)',
            }}
          />
        )}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main className="max-w-6xl mx-auto px-4">
        {/* Store header */}
        <div className="flex items-end gap-4 -mt-12 mb-6 relative z-10">
          <div
            className="w-24 h-24 rounded-2xl border-4 border-surface shadow-lg flex-shrink-0 overflow-hidden flex items-center justify-center font-bold text-3xl"
            style={{ background: '#b02f00', color: '#fff' }}
          >
            {vendor.logo_url ? (
              <img src={vendor.logo_url} alt={vendor.store_name} className="w-full h-full object-cover" />
            ) : (
              vendor.store_name[0]
            )}
          </div>
          <div className="pb-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-headline-lg text-2xl font-bold">{vendor.store_name}</h1>
              {vendor.id_verified && (
                <span className="flex items-center gap-1 text-xs font-semibold text-secondary">
                  <span className="material-symbols-outlined text-base">verified</span>
                  Verified
                </span>
              )}
            </div>
            {vendor.city && (
              <p className="text-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-base">location_on</span>
                {vendor.city}{vendor.state ? `, ${vendor.state}` : ''}
              </p>
            )}
          </div>
          <div className="ml-auto pb-1 flex-shrink-0">
            <TrustScore score={vendor.trust_score} tier={vendor.trust_tier} size="md" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="p-4 bg-surface-container-low rounded-2xl text-center">
            <p className="text-2xl font-bold text-primary">{(vendor.total_sales ?? 0).toLocaleString()}</p>
            <p className="text-xs text-on-surface-variant mt-0.5">Total Sales</p>
          </div>
          <div className="p-4 bg-surface-container-low rounded-2xl text-center">
            <p className="text-2xl font-bold text-secondary">{vendor.delivery_rate ?? 0}%</p>
            <p className="text-xs text-on-surface-variant mt-0.5">Delivery Rate</p>
          </div>
          <div className="p-4 bg-surface-container-low rounded-2xl text-center">
            <p className="text-2xl font-bold text-tertiary">{vendor.response_time_hours ?? '—'}h</p>
            <p className="text-xs text-on-surface-variant mt-0.5">Response Time</p>
          </div>
        </div>

        {/* Tabs: Products + About */}
        <VendorTabs vendor={vendor} products={products} />
      </main>
    </div>
  )
}
