import type { ProductReview } from '@/types/market'
import { formatRelativeTime } from '@/lib/market/format'

export function ReviewCard({ review }: { review: ProductReview }) {
  return (
    <div className="p-4 bg-surface-container-low rounded-2xl">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="material-symbols-outlined text-sm fill-icon"
              style={{ color: i < review.rating ? '#FFD700' : '#e5e2e1' }}>
              star
            </span>
          ))}
        </div>
        {review.verified_purchase && (
          <span className="text-xs font-semibold text-secondary flex items-center gap-0.5 ml-auto">
            <span className="material-symbols-outlined text-xs">verified</span> Verified Purchase
          </span>
        )}
      </div>
      {review.title && <p className="font-semibold text-sm mb-1">{review.title}</p>}
      {review.body && <p className="text-sm text-on-surface-variant leading-relaxed">{review.body}</p>}
      {review.images?.length > 0 && (
        <div className="flex gap-2 mt-3 flex-wrap">
          {review.images.map((img, i) => (
            <div key={i} className="w-14 h-14 rounded-lg overflow-hidden bg-surface-container">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center gap-3 mt-3">
        <button className="flex items-center gap-1 text-xs text-on-surface-variant hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-sm">thumb_up</span>
          Helpful ({review.helpful_count})
        </button>
        <span className="text-xs text-on-surface-variant ml-auto">{formatRelativeTime(review.created_at)}</span>
      </div>
    </div>
  )
}
