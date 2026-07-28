import type { Order, OrderStatus } from '@/types/market'
import Link from 'next/link'
import { formatPrice, formatRelativeTime } from '@/lib/market/format'

const STATUS_COLOR: Record<OrderStatus, { bg: string; text: string }> = {
  pending_payment: { bg: '#fde289', text: '#554500' },
  payment_confirmed: { bg: '#c4eeaf', text: '#0e4808' },
  processing: { bg: '#e3f0fd', text: '#0d3d80' },
  ready_for_collection: { bg: '#a8f294', text: '#032100' },
  collected: { bg: '#e5e2e1', text: '#1c1b1b' },
  cancelled: { bg: '#ffdad6', text: '#410002' },
  refunded: { bg: '#e5e2e1', text: '#5b4039' },
}

const STATUS_LABEL: Record<OrderStatus, string> = {
  pending_payment: 'Awaiting Payment',
  payment_confirmed: 'Paid',
  processing: 'Processing',
  ready_for_collection: 'Ready to Collect',
  collected: 'Collected',
  cancelled: 'Cancelled',
  refunded: 'Refunded',
}

export function OrderCard({ order }: { order: Order }) {
  const cfg = STATUS_COLOR[order.status as OrderStatus] ?? { bg: '#e5e2e1', text: '#1c1b1b' }
  const label = STATUS_LABEL[order.status as OrderStatus] ?? order.status
  const itemCount = (order as any).items?.length ?? 0

  return (
    <div className="p-5 bg-surface-container-low rounded-2xl hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <p className="font-mono text-sm font-bold text-primary">{order.order_number}</p>
          <p className="text-xs text-on-surface-variant mt-0.5">{formatRelativeTime(order.created_at)}</p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
          style={{ background: cfg.bg, color: cfg.text }}>
          {label}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-3">
        {((order as any).items ?? []).slice(0, 3).map((item: any, i: number) => (
          <div key={i} className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
            {item.product_image ? (
              <img src={item.product_image} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="material-symbols-outlined text-xl text-outline">shopping_bag</span>
              </div>
            )}
          </div>
        ))}
        {itemCount > 3 && (
          <span className="text-xs text-on-surface-variant">+{itemCount - 3} more</span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="font-bold text-primary">{formatPrice(order.total)}</p>
        <Link href={`/market/orders/${order.order_number}`}
          className="flex items-center gap-1 text-xs font-semibold text-primary border border-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-on-primary transition-colors">
          <span className="material-symbols-outlined text-sm">local_shipping</span>
          Track Order
        </Link>
      </div>
    </div>
  )
}
