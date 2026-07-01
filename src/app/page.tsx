import Link from 'next/link'

const QUICK_ACCESS = [
  { label: 'Stays', icon: 'house', href: '/stays' },
  { label: 'Ride', icon: 'car_rental', href: '/ride' },
  { label: 'Eats', icon: 'restaurant', href: '/eats' },
  { label: 'Fix', icon: 'build', href: '/fix' },
  { label: 'Glow', icon: 'auto_awesome', href: '/glow' },
  { label: 'Events', icon: 'celebration', href: '/events' },
  { label: 'Market', icon: 'shopping_bag', href: '/market' },
]

const PROPERTIES = [
  { id: '1', name: 'The Eko Loft', location: 'Victoria Island, Lagos', price: 125000, rating: 4.9, superhost: true, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=640&q=80' },
  { id: '2', name: 'Azure Sands Cottage', location: 'Lekki Phase 1, Lagos', price: 85000, rating: 4.8, superhost: false, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=640&q=80' },
  { id: '3', name: 'Ikoyi Zen Suite', location: 'Ikoyi, Lagos', price: 150000, rating: 5.0, superhost: true, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=640&q=80' },
  { id: '4', name: 'Kalakuta Boutique', location: 'Ikeja, Lagos', price: 45000, rating: 4.7, superhost: false, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=640&q=80' },
]

const PROS = [
  { id: '1', name: 'Chidi O.', role: 'Master Electrician', rating: 4.9, reviews: 124, from: 15000, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { id: '2', name: 'Amaka B.', role: 'Makeup Artist', rating: 5.0, reviews: 82, from: 25000, image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80' },
  { id: '3', name: 'Tunde K.', role: 'Expert Plumber', rating: 4.7, reviews: 56, from: 12000, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
  { id: '4', name: 'Zainab A.', role: 'Home Specialist', rating: 4.8, reviews: 210, from: 8000, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80' },
  { id: '5', name: 'Kofi M.', role: 'Master Stylist', rating: 4.9, reviews: 95, from: 20000, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80' },
]

const RESTAURANTS = [
  { name: 'Heritage Kitchen', cuisine: 'Contemporary Nigerian', minOrder: 4500, delivery: '35-45 min', rating: 4.6, reviews: '1.2k+', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=640&q=80' },
  { name: 'Umi Sushi Bar', cuisine: 'Japanese', minOrder: 8000, delivery: '25-35 min', rating: 4.8, reviews: '850+', image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=640&q=80' },
  { name: 'The Grill Room', cuisine: 'Continental Grill', minOrder: 12000, delivery: '40-50 min', rating: 4.9, reviews: '430+', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=640&q=80' },
]

const SERVICES = [
  { label: 'Plumber', icon: 'plumbing' },
  { label: 'Electrician', icon: 'bolt' },
  { label: 'Painter', icon: 'format_paint' },
  { label: 'AC Repair', icon: 'ac_unit' },
  { label: 'Hair Stylist', icon: 'content_cut' },
  { label: 'Makeup Artist', icon: 'brush' },
  { label: 'Nail Tech', icon: 'pan_tool_alt' },
  { label: 'House Cleaner', icon: 'cleaning_services' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80"
            alt="Luxury villa Lagos"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 w-full max-w-4xl px-margin-mobile text-center">
          <h1 className="font-display-lg text-display-lg text-white mb-8">Elevate your everyday.</h1>
          <div className="bg-white p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 w-full px-6 py-3 flex items-center md:border-r border-outline-variant">
              <span className="material-symbols-outlined text-outline mr-2">location_on</span>
              <input className="w-full border-none outline-none bg-transparent text-on-surface font-body-md text-body-md" placeholder="Where are you going?" type="text" />
            </div>
            <div className="flex-1 w-full px-6 py-3 flex items-center md:border-r border-outline-variant">
              <span className="material-symbols-outlined text-outline mr-2">apps</span>
              <select className="w-full border-none outline-none bg-transparent text-on-surface font-body-md text-body-md appearance-none">
                <option>What do you need?</option>
                <option>Stays</option>
                <option>Eats</option>
                <option>Repair Services</option>
              </select>
            </div>
            <div className="flex-1 w-full px-6 py-3 flex items-center md:border-r border-outline-variant">
              <span className="material-symbols-outlined text-outline mr-2">calendar_today</span>
              <input className="w-full border-none outline-none bg-transparent text-on-surface font-body-md text-body-md" placeholder="When?" type="text" />
            </div>
            <button className="bg-sunset-orange text-white px-8 py-4 rounded-full font-label-lg text-label-lg hover:scale-95 transition-all w-full md:w-auto flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">search</span>
              Search JAHRAH
            </button>
          </div>
        </div>
      </section>

      {/* Quick Access Pills */}
      <section className="py-12 bg-parchment">
        <div className="max-w-container-max mx-auto px-margin-desktop overflow-x-auto hide-scrollbar flex justify-center gap-6">
          {QUICK_ACCESS.map((item) => (
            <Link key={item.href} href={item.href} className="flex flex-col items-center gap-2 group min-w-[80px]">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
              </div>
              <span className="font-label-lg text-label-lg">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Stays */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-headline-lg text-headline-lg">Top Stays in Lagos</h2>
          <Link href="/stays" className="text-primary font-label-lg text-label-lg hover:underline">View all</Link>
        </div>
        <div className="flex gap-gutter overflow-x-auto hide-scrollbar pb-8">
          {PROPERTIES.map((p) => (
            <Link key={p.id} href={`/stays/${p.id}`} className="min-w-[320px] bg-white rounded-lg premium-card-shadow overflow-hidden group block">
              <div className="relative h-64">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                {p.superhost && (
                  <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full font-label-lg text-xs font-bold text-on-surface">Superhost</span>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-sunset-orange transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline-md text-xl">{p.name}</h3>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-gold-leaf text-lg">star</span>
                    <span className="font-label-lg text-sm">{p.rating}</span>
                  </div>
                </div>
                <p className="text-on-surface-variant mb-4">{p.location}</p>
                <div className="font-price-display text-price-display text-primary">
                  ₦ {p.price.toLocaleString()} <span className="text-on-surface-variant text-sm font-normal">/ night</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* JAHRAH Pros Near You */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg mb-8">JAHRAH Pros Near You</h2>
          <div className="flex gap-gutter overflow-x-auto hide-scrollbar pb-8">
            {PROS.map((pro) => (
              <Link key={pro.id} href={`/pro/${pro.id}`} className="min-w-[240px] bg-white p-8 rounded-xl premium-card-shadow text-center flex flex-col items-center block">
                <div className="relative mb-4">
                  <img src={pro.image} alt={pro.name} className="w-24 h-24 rounded-full object-cover" />
                  <span className="absolute bottom-0 right-0 bg-secondary text-white p-1 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm fill-icon">verified</span>
                  </span>
                </div>
                <h3 className="font-headline-md text-lg mb-1">{pro.name}</h3>
                <p className="text-primary font-label-lg text-label-lg uppercase mb-2">{pro.role}</p>
                <div className="flex items-center gap-1 mb-4">
                  <span className="material-symbols-outlined text-gold-leaf text-sm">star</span>
                  <span className="font-label-lg text-sm">{pro.rating} ({pro.reviews})</span>
                </div>
                <div className="text-sm text-on-surface-variant mb-6">Starts from ₦ {pro.from.toLocaleString()}</div>
                <button className="w-full py-3 border border-sunset-orange text-sunset-orange rounded-full font-label-lg text-sm hover:bg-sunset-orange hover:text-white transition-all">
                  Book Now
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Order Food Now */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg mb-8">Order Food Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {RESTAURANTS.map((r) => (
            <Link key={r.name} href="/eats" className="bg-white rounded-lg premium-card-shadow overflow-hidden block">
              <img src={r.image} alt={r.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-headline-md text-xl">{r.name}</h3>
                  <div className="bg-surface-container-high px-2 py-1 rounded text-xs font-bold text-on-surface">{r.delivery}</div>
                </div>
                <p className="text-on-surface-variant text-sm mb-4">{r.cuisine} • ₦ {r.minOrder.toLocaleString()} min</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gold-leaf text-sm">star</span>
                  <span className="font-label-lg text-sm">{r.rating} ({r.reviews})</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-section-gap bg-parchment">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg mb-8">Popular Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.label} href="/fix" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 cursor-pointer">
                <span className="material-symbols-outlined text-terracotta-clay text-3xl">{s.icon}</span>
                <span className="font-label-lg">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Event Banner */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
        <div className="relative rounded-2xl overflow-hidden h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?w=1280&q=80"
            alt="Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-indigo/80 to-transparent flex flex-col justify-center px-12 text-white">
            <h2 className="font-display-lg text-4xl mb-4 max-w-md">Plan Your Next Event with Ease.</h2>
            <p className="font-body-lg text-body-lg mb-8 max-w-md opacity-90">
              From intimate gatherings to grand celebrations, JAHRAH connects you with the best planners and venues.
            </p>
            <Link href="/events" className="bg-white text-royal-indigo px-8 py-4 rounded-full font-label-lg text-label-lg hover:bg-sunset-orange hover:text-white transition-all w-fit">
              Start Planning
            </Link>
          </div>
        </div>
      </section>

      {/* Become a Pro */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden premium-card-shadow">
          <div className="md:w-1/2 p-16 flex flex-col justify-center">
            <h2 className="font-headline-lg text-headline-lg mb-6 text-primary">Your Skill, Your Schedule, Your Success.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
              Join thousands of professionals across Africa growing their business on JAHRAH. Reach new customers and manage your workflow seamlessly.
            </p>
            <Link href="/pro-onboarding" className="bg-sunset-orange text-white px-10 py-5 rounded-full font-label-lg text-lg hover:scale-95 transition-all w-fit">
              Join as a Pro
            </Link>
          </div>
          <div className="md:w-1/2 h-[400px] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="JAHRAH Pros"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="py-section-gap bg-primary text-white overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="font-display-lg text-5xl mb-6">Everything, and then some.</h2>
            <p className="font-body-lg text-body-lg opacity-80 mb-10 max-w-lg">
              Get the full JAHRAH experience on your phone. Book stays, track orders, and chat with pros on the go.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="h-14 w-44 bg-black rounded-lg flex items-center justify-center cursor-pointer border border-white/20 hover:bg-white/10 transition-colors px-4 gap-2">
                <span className="material-symbols-outlined">apps</span>
                <div className="text-left">
                  <div className="text-[10px] uppercase">Download on the</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
              </div>
              <div className="h-14 w-44 bg-black rounded-lg flex items-center justify-center cursor-pointer border border-white/20 hover:bg-white/10 transition-colors px-4 gap-2">
                <span className="material-symbols-outlined">android</span>
                <div className="text-left">
                  <div className="text-[10px] uppercase">Get it on</div>
                  <div className="text-lg font-bold leading-none">Google Play</div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-[500px] bg-black rounded-[40px] border-[8px] border-white/20 shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
                alt="JAHRAH App"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
