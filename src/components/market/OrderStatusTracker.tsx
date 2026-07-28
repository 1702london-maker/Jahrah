'use client'
import type { Order, OrderStatus } from '@/types/market'
import { formatOrderStatus, formatRelativeTime } from '@/lib/market/format'
import { QRCodeSVG } from 'qrcode.react'

const STEPS: { status: OrderStatus; icon: string; label: string }[] = [
  { status: 'pending_payment', icon: 'receipt', label: 'Order Placed' },
  { status: 'payment_confirmed', icon: 'payments', label: 'Payment Confirmed' },
  { status: 'processing', icon: 'inventory_2', label: 'Processing' },
  { status: 'ready_for_collection', icon: 'store', label: 'Ready for Collection' },
  { status: 'collected', icon: 'check_circle', label: 'Collected' },
]

export function OrderStatusTracker({ order }: { order: Order }) {
  const isCancelled = order.status === 'cancelled' || order.status === 'refunded'
  const currentIdx = STEPS.findIndex((s) => s.status === order.status)

  if (isCancelled) {
    return (
      <div className="p-5 bg-error-container rounded-2xl text-center">
        <span className="material-symbols-outlined text-4xl text-error block mb-2">cancel</span>
        <p className="font-bold text-on-error-container">{formatOrderStatus(order.status)}</p>
      </div>
    )
  }

  return (
    <div className="space-y-1">
      {STEPS.map((step, idx) => {
        const done = currentIdx >= 0 && idx < currentIdx
        const active = idx === currentIdx
        const isReadyStep = step.status === 'ready_for_collection'

        return (
          <div key={step.status}>
            <div className="flex items-start gap-3 py-2">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: done ? '#286c1e' : active ? '#b02f00' : '#e5e2e1',
                    color: done || active ? '#fff' : '#907067',
                  }}>
                  {done ? (
                    <span className="material-symbols-outlined text-lg">check</span>
                  ) : (
                    <span className="material-symbols-outlined text-lg">{step.icon}</span>
                  )}
                </div>
                {idx < STEPS.length - 1 && (
                  <div className="w-0.5 h-5 mt-1"
                    style={{ background: done ? '#286c1e' : '#e5e2e1' }} />
                )}
              </div>
              <div className="flex-1 pt-1">
                <p className="text-sm font-semibold"
                  style={{ color: active ? '#b02f00' : done ? '#286c1e' : '#907067' }}>
                  {step.label}
                </p>
                {active && step.status !== 'ready_for_collection' && (
                  <p className="text-xs text-on-surface-variant mt-0.5">In progress…</p>
                )}
              </div>
            </div>

            {isReadyStep && active && order.collection_code && (
              <div className="ml-12 mb-3 p-5 bg-primary text-on-primary rounded-2xl">
                <p className="text-sm opacity-80 mb-2">Your Collection Code</p>
                <p className="font-mono font-bold text-4xl tracking-[0.3em] mb-4">{order.collection_code}</p>
                <div className="flex gap-4 items-start">
                  <div className="bg-white p-2 rounded-xl">
                    <QRCodeSVG value={order.collection_code} size={80} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm opacity-90 mb-2">Show this code at your Jahrah Hub to collect your order.</p>
                    {order.collection_deadline && (
                      <p className="text-xs opacity-75">
                        Hold until: {new Date(order.collection_deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    )}
                    {order.collection_point && (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(order.collection_point.address + ', ' + order.collection_point.city)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-sm">directions</span>
                        Get Directions
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
