import type { Order, OrderStatus } from '@/types/market'
import { formatOrderStatus } from '@/lib/market/format'

const STEPS: OrderStatus[] = [
  'pending_payment',
  'payment_confirmed',
  'processing',
  'ready_for_collection',
  'collected',
]

export function OrderStatusTracker({ order }: { order: Order }) {
  const currentIdx = STEPS.indexOf(order.status)
  const isCancelled = order.status === 'cancelled' || order.status === 'refunded'

  if (isCancelled) {
    return (
      <div className="p-4 bg-error-container rounded-2xl text-center">
        <span className="material-symbols-outlined text-3xl text-error block mb-1">cancel</span>
        <p className="font-semibold text-on-error-container">{formatOrderStatus(order.status)}</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {STEPS.map((step, idx) => {
        const done = idx < currentIdx
        const active = idx === currentIdx
        return (
          <div key={step} className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
              style={{
                background: done ? '#286c1e' : active ? '#b02f00' : '#e5e2e1',
                color: done || active ? '#fff' : '#5b4039',
              }}
            >
              {done ? (
                <span className="material-symbols-outlined text-base">check</span>
              ) : (
                <span className="text-xs">{idx + 1}</span>
              )}
            </div>
            <div className="flex-1">
              <p
                className="text-sm font-semibold"
                style={{ color: active ? '#b02f00' : done ? '#286c1e' : '#5b4039' }}
              >
                {formatOrderStatus(step)}
              </p>
              {step === 'ready_for_collection' && active && order.collection_code && (
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Collection code: <strong className="text-on-surface font-mono">{order.collection_code}</strong>
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
