import type { OrderStatus } from '@/types/market'

const STATUS_CONFIG: Record<OrderStatus, { bg: string; color: string; label: string }> = {
  pending_payment:      { bg: '#fde289', color: '#554500', label: 'Awaiting Payment' },
  payment_confirmed:    { bg: '#c4eeaf', color: '#0e4808', label: 'Paid' },
  processing:           { bg: '#e3f0fd', color: '#0d3d80', label: 'Processing' },
  ready_for_collection: { bg: '#a8f294', color: '#032100', label: 'Ready to Collect' },
  collected:            { bg: '#e5e2e1', color: '#1c1b1b', label: 'Collected' },
  cancelled:            { bg: '#ffdad6', color: '#410002', label: 'Cancelled' },
  refunded:             { bg: '#e5e2e1', color: '#5b4039', label: 'Refunded' },
}

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const cfg = STATUS_CONFIG[status] ?? { bg: '#e5e2e1', color: '#1c1b1b', label: status }
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{ background: cfg.bg, color: cfg.color }}>
      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: cfg.color }} />
      {cfg.label}
    </span>
  )
}
