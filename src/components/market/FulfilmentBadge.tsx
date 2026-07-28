import type { OrderStatus } from '@/types/market'
import { formatOrderStatus } from '@/lib/market/format'

const statusColors: Record<OrderStatus, { bg: string; color: string }> = {
  pending_payment: { bg: '#fde289', color: '#554500' },
  payment_confirmed: { bg: '#c4eeaf', color: '#0e4808' },
  processing: { bg: '#ffdbd1', color: '#541200' },
  ready_for_collection: { bg: '#a8f294', color: '#032100' },
  collected: { bg: '#e5e2e1', color: '#1c1b1b' },
  cancelled: { bg: '#ffdad6', color: '#410002' },
  refunded: { bg: '#e5e2e1', color: '#5b4039' },
}

export function FulfilmentBadge({ status }: { status: OrderStatus }) {
  const cfg = statusColors[status]
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{ background: cfg.bg, color: cfg.color }}
    >
      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: cfg.color }} />
      {formatOrderStatus(status)}
    </span>
  )
}
