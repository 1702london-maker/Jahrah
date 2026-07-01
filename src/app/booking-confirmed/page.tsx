import Link from 'next/link'

export default function BookingConfirmedPage() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center py-12 px-margin-mobile overflow-x-hidden">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
        {/* Success Animation */}
        <div className="mb-8 fade-in-up">
          <div className="w-32 h-32 rounded-full bg-secondary-container flex items-center justify-center text-secondary relative mx-auto">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
              <polyline className="success-checkmark-draw" points="20 6 9 17 4 12" />
            </svg>
            <div className="absolute inset-0 border-4 border-secondary/20 rounded-full animate-ping" />
          </div>
        </div>

        <div className="fade-in-up delay-1">
          <p className="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-3">Booking Confirmed</p>
          <h1 className="font-display-lg text-5xl mb-4">You&apos;re all set!</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto mb-8">
            Your booking has been confirmed and your host has been notified. Get ready for an incredible experience.
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="w-full bg-white rounded-2xl shadow-premium p-8 mb-8 fade-in-up delay-2">
          <div className="flex items-center gap-4 pb-6 border-b border-outline-variant mb-6">
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&q=80"
              alt="The Eko Loft"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div className="text-left">
              <h3 className="font-headline-md text-headline-md">The Eko Loft</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">Victoria Island, Lagos</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-gold-leaf text-sm">star</span>
                <span className="font-label-lg text-sm">4.9 · Superhost</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              { label: 'Booking Ref', value: 'JAH-2024-12345', icon: 'confirmation_number' },
              { label: 'Check-in', value: 'Dec 20, 2024', icon: 'login' },
              { label: 'Check-out', value: 'Dec 25, 2024', icon: 'logout' },
              { label: 'Guests', value: '2 Adults', icon: 'group' },
              { label: 'Total Paid', value: '₦687,500', icon: 'payments' },
              { label: 'Payment', value: 'Visa ····4421', icon: 'credit_card' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center gap-2 text-on-surface-variant mb-1">
                  <span className="material-symbols-outlined text-sm">{item.icon}</span>
                  <span className="font-label-lg text-xs uppercase tracking-wide">{item.label}</span>
                </div>
                <p className="font-label-lg text-label-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What's Next */}
        <div className="w-full bg-surface-container rounded-2xl p-6 mb-8 text-left fade-in-up delay-3">
          <h3 className="font-headline-md text-headline-md mb-4">What&apos;s Next</h3>
          <div className="space-y-4">
            {[
              { icon: 'email', title: 'Check your email', desc: 'A confirmation has been sent to your email with all booking details.' },
              { icon: 'chat', title: 'Message your host', desc: 'Chat with Chioma A. to coordinate check-in time and any special requests.' },
              { icon: 'calendar_today', title: 'Add to calendar', desc: 'Save your booking dates so you never miss your trip.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-sm">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg mb-1">{item.title}</h4>
                  <p className="text-on-surface-variant font-body-md text-body-md text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Link href="/dashboard" className="flex-1 bg-primary text-on-primary py-4 rounded-full font-label-lg text-label-lg text-center hover:bg-terracotta-clay transition-colors">
            View My Bookings
          </Link>
          <Link href="/" className="flex-1 border border-outline py-4 rounded-full font-label-lg text-label-lg text-center hover:bg-surface-container transition-colors">
            Back to Home
          </Link>
        </div>

        {/* More suggestions */}
        <div className="mt-12 w-full">
          <h3 className="font-headline-md text-headline-md mb-6">You might also need</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Airport Ride', icon: 'flight', href: '/ride' },
              { label: 'Order Food', icon: 'restaurant', href: '/eats' },
              { label: 'Hire a Pro', icon: 'build', href: '/fix' },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="bg-white rounded-xl p-4 shadow-card text-center hover:shadow-premium transition-shadow flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                <span className="font-label-lg text-xs">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
