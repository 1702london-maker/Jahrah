import Link from 'next/link'

const USER = {
  name: 'Chioma Adeyemi',
  city: 'Victoria Island, Lagos',
  image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80',
  memberSince: '2022',
}

const BOOKINGS = [
  { id: '1', service: 'The Eko Loft', type: 'Stays', date: 'Dec 20-25, 2024', status: 'upcoming', price: 625000, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&q=80' },
  { id: '2', service: 'Chidi O. — Electrician', type: 'Fix', date: 'Dec 18, 2024', status: 'completed', price: 25000, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { id: '3', service: 'Heritage Kitchen', type: 'Eats', date: 'Dec 15, 2024', status: 'completed', price: 12500, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&q=80' },
]

const QUICK_ACTIONS = [
  { label: 'Book a Stay', icon: 'house', href: '/stays', color: 'bg-primary-fixed text-primary' },
  { label: 'Order Food', icon: 'restaurant', href: '/eats', color: 'bg-secondary-container text-secondary' },
  { label: 'Find a Pro', icon: 'build', href: '/fix', color: 'bg-tertiary-fixed text-tertiary' },
  { label: 'Book a Ride', icon: 'car_rental', href: '/ride', color: 'bg-royal-indigo/10 text-royal-indigo' },
  { label: 'Beauty', icon: 'auto_awesome', href: '/glow', color: 'bg-error-container text-error' },
  { label: 'Market', icon: 'shopping_bag', href: '/market', color: 'bg-surface-container-highest text-on-surface' },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop py-8">
        {/* Welcome Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary to-terracotta-clay text-white p-8 mb-8 flex items-center justify-between">
          <div>
            <p className="font-label-lg text-label-lg opacity-80 mb-1">Good evening,</p>
            <h1 className="font-headline-lg text-headline-lg mb-2">{USER.name.split(' ')[0]} ✨</h1>
            <p className="font-body-md text-body-md opacity-80 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">location_on</span>
              {USER.city}
            </p>
          </div>
          <div className="relative">
            <img src={USER.image} alt={USER.name} className="w-20 h-20 rounded-full object-cover border-4 border-white/30" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-72 space-y-4">
            {/* Profile Card */}
            <div className="bg-white rounded-xl p-6 shadow-card">
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-outline-variant">
                <img src={USER.image} alt={USER.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-label-lg text-label-lg">{USER.name}</h3>
                  <p className="text-on-surface-variant text-xs">Member since {USER.memberSince}</p>
                </div>
              </div>
              <nav className="space-y-1">
                {[
                  { icon: 'dashboard', label: 'Overview', active: true },
                  { icon: 'calendar_today', label: 'My Bookings', active: false },
                  { icon: 'favorite', label: 'Saved', active: false },
                  { icon: 'payments', label: 'Payments', active: false },
                  { icon: 'reviews', label: 'My Reviews', active: false },
                  { icon: 'person', label: 'Profile Settings', active: false },
                ].map((item) => (
                  <button key={item.label} className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl font-label-lg text-label-lg transition-colors ${item.active ? 'bg-primary-fixed text-primary' : 'text-on-surface-variant hover:bg-surface-container'}`}>
                    <span className="material-symbols-outlined text-sm">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-card">
              <h2 className="font-headline-md text-headline-md mb-4">Quick Access</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {QUICK_ACTIONS.map((action) => (
                  <Link key={action.label} href={action.href} className={`flex flex-col items-center gap-2 p-4 rounded-xl ${action.color} hover:scale-105 transition-transform`}>
                    <span className="material-symbols-outlined text-2xl">{action.icon}</span>
                    <span className="font-label-lg text-xs text-center">{action.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Upcoming Bookings */}
            <div className="bg-white rounded-xl p-6 shadow-card">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-headline-md text-headline-md">My Bookings</h2>
                <button className="text-primary font-label-lg text-label-lg hover:underline">View all</button>
              </div>
              <div className="space-y-4">
                {BOOKINGS.map((b) => (
                  <div key={b.id} className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
                    <img src={b.image} alt={b.service} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-label-lg text-label-lg mb-1">{b.service}</h4>
                      <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                        <span className="material-symbols-outlined text-xs">{b.type === 'Stays' ? 'house' : b.type === 'Fix' ? 'build' : 'restaurant'}</span>
                        <span>{b.type} · {b.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-price-display text-primary text-sm mb-1">₦{b.price.toLocaleString()}</div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${b.status === 'upcoming' ? 'bg-secondary-container text-secondary' : 'bg-surface-container text-on-surface-variant'}`}>
                        {b.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Become a Pro CTA */}
            <div className="bg-gradient-to-r from-royal-indigo to-indigo-700 text-white rounded-xl p-8 flex items-center justify-between">
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">Ready to earn on JAHRAH?</h3>
                <p className="font-body-md text-body-md opacity-80">Join thousands of pros growing their business.</p>
              </div>
              <Link href="/pro-onboarding" className="bg-white text-royal-indigo px-6 py-3 rounded-full font-label-lg text-label-lg hover:bg-primary-fixed transition-colors whitespace-nowrap">
                Become a Pro
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
