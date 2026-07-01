interface StarRatingProps {
  rating: number
  reviews?: number
  size?: 'sm' | 'md'
}

export function StarRating({ rating, reviews, size = 'sm' }: StarRatingProps) {
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm'
  return (
    <span className={`flex items-center gap-1 ${textSize} font-label-lg`}>
      <span className="text-gold-leaf">★</span>
      <span className="font-semibold text-on-surface">{rating}</span>
      {reviews !== undefined && (
        <span className="text-on-surface-variant">({reviews.toLocaleString()} reviews)</span>
      )}
    </span>
  )
}
