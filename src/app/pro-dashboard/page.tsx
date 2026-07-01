import Link from 'next/link'

const PRO = {
  name: 'Chidi Okonkwo',
  role: 'Master Electrician',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  rating: 4.9,
  totalEarnings: 1250000,
  thisMonth: 185000,
  completedJobs: 312,
  pendingJobs: 4,
}

const UPCOMING_BOOKINGS = [
  { id: '1', client: 'Emeka T.', service: 'Fault Detection', date: 'Today, 2:00 PM', location: 'Lekki Phase 1', price: 15000, status: 'confirmed', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80' },
  { id: '2', client: 'Ngozi A.', service: 'Panel Upgrade', date: 'Dec 22, 9:00 AM', location: 'Victoria Island', price: 60000, status: 'pending', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80' },
  { id: '3', client: 'Bayo F.', service: 'Fan Installation', date: 'Dec 23, 11:00 AM', location: 'Ikoyi', price: 8000, status: 'confirmed', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80' },
]

const EARNINGS_CHART = [85000, 120000, 95000, 145000, 110000, 185000]
const MONTHS = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const MAX = Math.max(...EARNINGS_CHART)

const NAV_ITEMS = [
  { icon: 'dashboard', label: 'Dashboard', active: true },
  { icon: 'calendar_today', label: 'Bookings', active: false },
  { icon: 'payments', label: 'Earnings', active: false },
  { icon: 'reviews', label: 'Reviews', active: false },
  { icon: 'bar_chart', label: 'Analytics', active: false },
  { icon: 'school', label: 'Academy', active: false },
  { icon: 'person', label: 'Profile', active: false },
  { icon: 'settings', label: 'Settings', active: false },
]

export default function ProDashboardPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop py-8">
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px', minHeight: '80vh' }}>
          {/* Sidebar */}
          <aside className="bg-white rounded-2xl shadow-card p-6 h-fit sticky top-[100px]">
            <div className="text-center pb-6 border-b border-outline-variant mb-4">
              <div className="relative inline-block mb-3">
                <img src={PRO.image} alt={PRO.name} className="w-20 h-20 rounded-full object-cover" />
                <span className="absolute bottom-0 right-0 w-5 h-5 bg-secondary rounded-full border-2 border-white" />
              </div>
              <h3 className="font-label-lg text-label-lg">{PRO.name}</h3>
              <p className="text-primary text-xs font-label-lg uppercase">{PRO.role}</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <span className="material-symbols-outlined text-gold-leaf text-sm">star</span>
                <span className="text-sm font-label-lg">{PRO.rating}</span>
              </div>
            </div>
            <nav className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <button key={item.label} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-label-lg text-label-lg transition-colors ${item.active ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container'}`}>
                  <span className="material-symbols-outlined text-sm">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-outline-variant">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-label-lg ${'bg-secondary-container text-secondary'}`}>
                <span className="w-2 h-2 bg-secondary rounded-full" />
                Available for Jobs
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'This Month', value: `₦${(PRO.thisMonth / 1000).toFixed(0)}k`, icon: 'trending_up', color: 'text-secondary bg-secondary-container' },
                { label: 'Total Earned', value: `₦${(PRO.totalEarnings / 1000).toFixed(0)}k`, icon: 'payments', color: 'text-primary bg-primary-fixed' },
                { label: 'Jobs Done', value: PRO.completedJobs.toString(), icon: 'check_circle', color: 'text-royal-indigo bg-royal-indigo/10' },
                { label: 'Pending', value: PRO.pendingJobs.toString(), icon: 'schedule', color: 'text-tertiary bg-tertiary-fixed' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-5 shadow-card">
                  <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center mb-3`}>
                    <span className="material-symbols-outlined text-sm">{stat.icon}</span>
                  </div>
                  <div className="font-price-display text-price-display text-on-surface">{stat.value}</div>
                  <div className="text-on-surface-variant text-sm font-label-lg mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Earnings Chart */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <h2 className="font-headline-md text-headline-md mb-6">Earnings Overview</h2>
              <div className="flex items-end gap-3 h-48">
                {EARNINGS_CHART.map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className={`w-full rounded-t-lg transition-all ${i === EARNINGS_CHART.length - 1 ? 'bg-primary' : 'bg-primary-fixed'}`}
                      style={{ height: `${(val / MAX) * 100}%` }}
                    />
                    <span className="text-xs text-on-surface-variant font-label-lg">{MONTHS[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Bookings */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-headline-md text-headline-md">Upcoming Jobs</h2>
                <button className="text-primary font-label-lg text-label-lg hover:underline">View all</button>
              </div>
              <div className="space-y-4">
                {UPCOMING_BOOKINGS.map((b) => (
                  <div key={b.id} className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
                    <img src={b.image} alt={b.client} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-label-lg text-label-lg">{b.client}</h4>
                      <p className="text-on-surface-variant text-sm">{b.service} · {b.date}</p>
                      <div className="flex items-center gap-1 text-xs text-on-surface-variant mt-1">
                        <span className="material-symbols-outlined text-xs">location_on</span>
                        {b.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-price-display text-primary text-sm mb-2">₦{b.price.toLocaleString()}</div>
                      <span className={`text-xs px-3 py-1 rounded-full font-bold ${b.status === 'confirmed' ? 'bg-secondary-container text-secondary' : 'bg-tertiary-fixed text-tertiary'}`}>
                        {b.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full hover:bg-surface-container">
                        <span className="material-symbols-outlined text-sm">chat</span>
                      </button>
                      <button className="p-2 rounded-full hover:bg-surface-container">
                        <span className="material-symbols-outlined text-sm">more_vert</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips Banner */}
            <div className="bg-royal-indigo rounded-2xl p-6 text-white flex items-center justify-between">
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">Boost your visibility</h3>
                <p className="font-body-md text-body-md opacity-80">Complete your profile to appear in more searches and get more bookings.</p>
              </div>
              <Link href="/pro-onboarding" className="bg-white text-royal-indigo px-6 py-3 rounded-full font-label-lg text-label-lg whitespace-nowrap hover:bg-primary-fixed transition-colors ml-6">
                Complete Profile
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
