'use client'
import { useState } from 'react'
import type { Vendor, Product } from '@/types/market'
import { ProductGrid } from '@/components/market/ProductGrid'
import { formatRelativeTime } from '@/lib/market/format'

const TABS = ['Products', 'About'] as const

export function VendorTabs({ vendor, products }: { vendor: Vendor; products: Product[] }) {
  const [tab, setTab] = useState<'Products' | 'About'>('Products')

  return (
    <div>
      {/* Tab bar */}
      <div className="flex border-b border-outline-variant mb-8">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="px-6 py-3 text-sm font-semibold transition-colors relative"
            style={{ color: tab === t ? '#b02f00' : '#6b6463' }}
          >
            {t}
            {t === 'Products' && products.length > 0 && (
              <span className="ml-1.5 text-xs text-on-surface-variant">({products.length})</span>
            )}
            {tab === t && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                style={{ background: '#b02f00' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Products tab */}
      {tab === 'Products' && (
        <ProductGrid
          products={products}
          emptyMessage="This vendor has no active products yet"
          emptyAction={{ label: 'Browse Market', href: '/market' }}
        />
      )}

      {/* About tab */}
      {tab === 'About' && (
        <div className="max-w-2xl space-y-6">
          {vendor.description && (
            <div>
              <h3 className="font-semibold mb-2">About this store</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{vendor.description}</p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            {vendor.city && (
              <div className="p-4 bg-surface-container-low rounded-2xl">
                <p className="text-xs text-on-surface-variant mb-1">Location</p>
                <p className="font-semibold text-sm">{vendor.city}{vendor.state ? `, ${vendor.state}` : ''}</p>
              </div>
            )}
            {vendor.response_time_hours && (
              <div className="p-4 bg-surface-container-low rounded-2xl">
                <p className="text-xs text-on-surface-variant mb-1">Average Response Time</p>
                <p className="font-semibold text-sm">{vendor.response_time_hours} hours</p>
              </div>
            )}
            {vendor.delivery_rate !== undefined && (
              <div className="p-4 bg-surface-container-low rounded-2xl">
                <p className="text-xs text-on-surface-variant mb-1">On-time Delivery Rate</p>
                <p className="font-semibold text-sm">{vendor.delivery_rate}%</p>
              </div>
            )}
            {vendor.return_rate !== undefined && (
              <div className="p-4 bg-surface-container-low rounded-2xl">
                <p className="text-xs text-on-surface-variant mb-1">Return Rate</p>
                <p className="font-semibold text-sm">{vendor.return_rate}%</p>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Trust & Verification</h3>
            <div className="space-y-2">
              {vendor.id_verified && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-base text-secondary">verified_user</span>
                  <span>Identity verified</span>
                </div>
              )}
              {vendor.bvn_verified && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-base text-secondary">account_balance</span>
                  <span>BVN verified</span>
                </div>
              )}
              {vendor.cac_number && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-base text-secondary">business</span>
                  <span>CAC registered — {vendor.cac_number}</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2">
              {vendor.whatsapp && (
                <a
                  href={`https://wa.me/${vendor.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  WhatsApp
                </a>
              )}
              {vendor.email && (
                <a href={`mailto:${vendor.email}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <span className="material-symbols-outlined text-base">mail</span>
                  {vendor.email}
                </a>
              )}
            </div>
          </div>

          <p className="text-xs text-on-surface-variant">
            Member since {formatRelativeTime(vendor.created_at)}
          </p>
        </div>
      )}

      <div className="h-16" />
    </div>
  )
}
