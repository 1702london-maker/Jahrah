import Link from 'next/link'

const SERVICES = [
  { label: 'Stays', icon: 'house', color: 'bg-primary-fixed', href: '/stays' },
  { label: 'Ride', icon: 'car_rental', color: 'bg-royal-indigo/10', href: '/ride' },
  { label: 'Eats', icon: 'restaurant', color: 'bg-secondary-container', href: '/eats' },
  { label: 'Fix', icon: 'build', color: 'bg-tertiary-fixed', href: '/fix' },
  { label: 'Glow', icon: 'auto_awesome', color: 'bg-error-container', href: '/glow' },
  { label: 'Events', icon: 'celebration', color: 'bg-surface-container-highest', href: '/events' },
  { label: 'Market', icon: 'shopping_bag', color: 'bg-surface-container-high', href: '/market' },
  { label: 'More', icon: 'apps', color: 'bg-outline-variant', href: '#' },
]

const RECENT = [
  { name: 'The Eko Loft', type: 'Stays', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&q=80' },
  { name: 'Heritage Kitchen', type: 'Eats', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&q=80' },
  { name: 'Chidi O.', type: 'Fix', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
]

const DEALS = [
  { name: 'Ikoyi Zen Suite', price: 150000, originalPrice: 200000, rating: 5.0, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80' },
  { name: 'Umi Sushi Bar', price: 5000, originalPrice: 6500, rating: 4.8, image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80' },
  { name: 'Azure Sands', price: 65000, originalPrice: 85000, rating: 4.8, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80' },
]

export default function MobilePage() {
  return (
    <div className="min-h-screen bg-surface pb-24">
      {/* Mobile Header (replaces global header on this page) */}
      <header className="sticky top-0 z-50 bg-surface px-margin-mobile pt-6 pb-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight block">JAHRAH</span>
            <span className="font-label-lg text-label-lg text-on-surface-variant">Good evening, Tunde</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-full hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-on-surface">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-sunset-orange rounded-full" />
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 bg-surface-container rounded-full px-4 py-3">
          <span className="material-symbols-outlined text-on-surface-variant">search</span>
          <input className="flex-1 bg-transparent border-none outline-none font-body-md text-body-md" placeholder="Search JAHRAH..." />
          <span className="material-symbols-outlined text-on-surface-variant">mic</span>
        </div>
      </header>

      <div className="px-margin-mobile">
        {/* Service Icon Grid */}
        <section className="mb-8">
          <h2 className="font-headline-md text-headline-md mb-4">Services</h2>
          <div className="grid grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link key={s.label} href={s.href} className="flex flex-col items-center gap-2 icon-grid-item">
                <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-on-surface text-xl">{s.icon}</span>
                </div>
                <span className="font-label-lg text-xs text-center">{s.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Promo Banner */}
        <div className="relative rounded-2xl overflow-hidden h-40 mb-8">
          <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" alt="Promo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center px-6 text-white">
            <div>
              <p className="font-label-lg text-xs uppercase tracking-wide mb-1">Limited Offer</p>
              <h3 className="font-headline-md text-lg mb-2">20% off all stays this week</h3>
              <Link href="/stays" className="bg-white text-primary text-xs font-bold px-4 py-2 rounded-full">Book Now</Link>
            </div>
          </div>
        </div>

        {/* Recent */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-headline-md text-headline-md">Recently Viewed</h2>
            <button className="text-primary font-label-lg text-xs">See all</button>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-5 px-5">
            {RECENT.map((item) => (
              <div key={item.name} className="flex-shrink-0 flex flex-col items-center gap-2 w-20">
                <div className="w-16 h-16 rounded-2xl overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <span className="font-label-lg text-xs text-center line-clamp-1">{item.name}</span>
                <span className="text-on-surface-variant text-[10px]">{item.type}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Top Deals */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-headline-md text-headline-md">Top Deals</h2>
            <button className="text-primary font-label-lg text-xs">See all</button>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-5 px-5">
            {DEALS.map((deal) => (
              <div key={deal.name} className="flex-shrink-0 w-48 bg-white rounded-xl overflow-hidden shadow-card">
                <img src={deal.image} alt={deal.name} className="w-full h-32 object-cover" />
                <div className="p-3">
                  <h4 className="font-label-lg text-sm mb-1 line-clamp-1">{deal.name}</h4>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="material-symbols-outlined text-gold-leaf text-xs">star</span>
                    <span className="text-xs font-label-lg">{deal.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-price-display text-primary text-sm">₦{(deal.price / 1000).toFixed(0)}k</span>
                    <span className="text-on-surface-variant line-through text-xs">₦{(deal.originalPrice / 1000).toFixed(0)}k</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-outline-variant px-4 py-3 flex justify-around">
        {[
          { icon: 'home', label: 'Home', active: true, href: '/mobile' },
          { icon: 'search', label: 'Explore', active: false, href: '#' },
          { icon: 'calendar_today', label: 'Bookings', active: false, href: '/dashboard' },
          { icon: 'favorite', label: 'Saved', active: false, href: '#' },
          { icon: 'person', label: 'Profile', active: false, href: '/dashboard' },
        ].map((item) => (
          <Link key={item.label} href={item.href} className={`flex flex-col items-center gap-1 ${item.active ? 'text-primary' : 'text-on-surface-variant'}`}>
            <span className={`material-symbols-outlined text-2xl ${item.active ? 'fill-icon' : ''}`}>{item.icon}</span>
            <span className="text-[10px] font-label-lg">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
