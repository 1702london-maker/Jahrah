import { formatPrice } from '@/lib/market/format'

export function PriceDisplay({
  price,
  compareAt,
  currency = 'NGN',
  size = 'md',
}: {
  price: number
  compareAt?: number | null
  currency?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizes = { sm: 'text-sm', md: 'text-base', lg: 'text-xl' }
  const discount = compareAt && compareAt > price
    ? Math.round(((compareAt - price) / compareAt) * 100)
    : null

  return (
    <div className="flex items-baseline gap-2 flex-wrap">
      <span className={`font-bold text-primary font-price-display ${sizes[size]}`}>
        {formatPrice(price, currency)}
      </span>
      {compareAt && compareAt > price && (
        <span className="text-on-surface-variant line-through text-sm">
          {formatPrice(compareAt, currency)}
        </span>
      )}
      {discount && (
        <span className="text-xs font-bold text-secondary bg-secondary-container px-1.5 py-0.5 rounded">
          -{discount}%
        </span>
      )}
    </div>
  )
}
