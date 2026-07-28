import type { Vendor } from '@/types/market'
import Link from 'next/link'
import { TrustScore } from './TrustScore'

export function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <div className="bg-surface-container-low rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
      {vendor.banner_url ? (
        <div className="h-20 overflow-hidden bg-surface-container">
          <img src={vendor.banner_url} alt="" className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="h-20 bg-gradient-to-br from-primary/10 to-secondary/10" />
      )}
      <div className="px-4 pb-4 -mt-6">
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface border-2 border-surface mb-3">
          {vendor.logo_url ? (
            <img src={vendor.logo_url} alt={vendor.store_name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary text-on-primary font-bold text-lg">
              {vendor.store_name[0]}
            </div>
          )}
        </div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <p className="font-bold text-sm truncate">{vendor.store_name}</p>
              {vendor.id_verified && (
                <span className="material-symbols-outlined text-secondary text-base flex-shrink-0">verified</span>
              )}
            </div>
            <p className="text-xs text-on-surface-variant">{vendor.city}{vendor.state ? `, ${vendor.state}` : ''}</p>
          </div>
          <TrustScore score={vendor.trust_score} tier={vendor.trust_tier} size="sm" />
        </div>
        <p className="text-xs text-on-surface-variant mb-1 capitalize">{vendor.category.replace(/_/g, ' ')}</p>
        {vendor.total_sales > 0 && (
          <p className="text-xs text-on-surface-variant mb-3">{vendor.total_sales.toLocaleString()} sales</p>
        )}
        <Link href={`/market/vendor/${vendor.slug}`}
          className="block w-full text-center py-2 border border-primary text-primary text-sm font-semibold rounded-full hover:bg-primary hover:text-on-primary transition-colors">
          Visit Store
        </Link>
      </div>
    </div>
  )
}
