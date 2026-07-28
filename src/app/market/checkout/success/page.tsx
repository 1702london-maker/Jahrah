import Link from 'next/link'

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { reference?: string; order_number?: string }
}) {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center mx-auto">
          <svg viewBox="0 0 52 52" className="w-14 h-14">
            <circle cx="26" cy="26" r="25" fill="none" stroke="#286c1e" strokeWidth="2" />
            <path
              fill="none" stroke="#286c1e" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round"
              d="M14 27l9 9 15-18"
              className="success-checkmark-draw"
            />
          </svg>
        </div>

        <div>
          <h1 className="font-headline-lg text-2xl font-bold text-on-surface mb-2">Payment Successful!</h1>
          <p className="text-on-surface-variant">Your order has been placed and is being processed.</p>
        </div>

        {searchParams.order_number && (
          <div className="bg-surface-container-low p-5 rounded-2xl space-y-3">
            <p className="text-sm text-on-surface-variant">Order number</p>
            <p className="font-mono font-bold text-xl text-primary">{searchParams.order_number}</p>
            <p className="text-sm text-on-surface-variant">Save this code — you'll need it to collect your order at the Jahrah Hub.</p>
          </div>
        )}

        <div className="bg-secondary-container p-4 rounded-2xl">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">location_on</span>
            <p className="text-sm text-on-secondary-container">
              Your order will be ready for collection at your chosen Jahrah Hub. We'll notify you when it's ready.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {searchParams.order_number && (
            <Link
              href={`/market/orders/${searchParams.order_number}`}
              className="flex-1 py-3 bg-primary text-on-primary rounded-full font-semibold hover:opacity-90 transition-opacity text-center"
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
