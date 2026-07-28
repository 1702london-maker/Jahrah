import Link from 'next/link'

export const dynamic = 'force-dynamic'

async function verifyOrder(reference: string, orderNumber: string): Promise<boolean> {
  try {
    const base = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'
    const res = await fetch(
      `${base}/api/market/verify?reference=${reference}&order_number=${orderNumber}`,
      { cache: 'no-store' }
    )
    const data = await res.json()
    return data.verified === true
  } catch {
    return false
  }
}

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { reference?: string; order_number?: string }
}) {
  const { reference, order_number } = searchParams

  let verified = false
  if (reference && order_number) {
    verified = await verifyOrder(reference, order_number)
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">

        {/* Icon */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto"
          style={{ background: verified ? '#e8f5e4' : '#fff4e6' }}
        >
          {verified ? (
            <svg viewBox="0 0 52 52" className="w-14 h-14">
              <circle cx="26" cy="26" r="25" fill="none" stroke="#286c1e" strokeWidth="2" />
              <path
                fill="none"
                stroke="#286c1e"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 27l9 9 15-18"
              />
            </svg>
          ) : (
            <span className="material-symbols-outlined text-5xl" style={{ color: '#E65100' }}>
              schedule
            </span>
          )}
        </div>

        {/* Heading */}
        <div>
          <h1 className="font-headline-lg text-2xl font-bold text-on-surface mb-2">
            {verified ? 'Payment Confirmed!' : 'Order Received'}
          </h1>
          <p className="text-on-surface-variant">
            {verified
              ? 'Your payment was successful and your order is being processed.'
              : 'Your order has been placed. Payment confirmation will update shortly.'}
          </p>
        </div>

        {/* Order number card */}
        {order_number && (
          <div className="bg-surface-container-low p-5 rounded-2xl space-y-2">
            <p className="text-sm text-on-surface-variant">Order number</p>
            <p className="font-mono font-bold text-xl text-primary">{order_number}</p>
            <p className="text-xs text-on-surface-variant">
              Save this — you'll need it to collect your order at the Jahrah Hub.
            </p>
          </div>
        )}

        {/* Collection info */}
        <div className="p-4 rounded-2xl" style={{ background: '#e8f5e4' }}>
          <div className="flex items-start gap-3 text-left">
            <span className="material-symbols-outlined mt-0.5" style={{ color: '#286c1e' }}>location_on</span>
            <p className="text-sm" style={{ color: '#1a4a12' }}>
              Your order will be ready for collection at your chosen Jahrah Hub. We'll notify you once it's ready.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          {order_number && (
            <Link
              href={`/market/orders/${order_number}`}
              className="flex-1 py-3 text-center font-semibold rounded-full hover:opacity-90 transition-opacity"
              style={{ background: '#b02f00', color: '#fff' }}
            >
              Track Order
            </Link>
          )}
          <Link
            href="/market"
            className="flex-1 py-3 border-2 border-outline-variant text-on-surface rounded-full font-semibold hover:bg-surface-container transition-colors text-center"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
