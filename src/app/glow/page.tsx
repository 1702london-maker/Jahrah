import Link from 'next/link'

const CATEGORIES = [
  { label: 'Hair Stylist', icon: 'content_cut', count: 67 },
  { label: 'Makeup Artist', icon: 'brush', count: 54 },
  { label: 'Nail Technician', icon: 'pan_tool_alt', count: 43 },
  { label: 'Barber', icon: 'cut', count: 38 },
  { label: 'Lash Technician', icon: 'visibility', count: 29 },
  { label: 'Massage Therapist', icon: 'spa', count: 22 },
  { label: 'Skincare Specialist', icon: 'face', count: 31 },
  { label: 'Body Artist', icon: 'gesture', count: 18 },
]

const PROS = [
  { id: '2', name: 'Amaka Bello', role: 'Makeup Artist', rating: 5.0, reviews: 82, from: 25000, verified: true, image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80' },
  { id: '5', name: 'Kofi Mensah', role: 'Master Stylist', rating: 4.9, reviews: 95, from: 20000, verified: true, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80' },
  { id: '6', name: 'Adaeze Obi', role: 'Nail Technician', rating: 4.8, reviews: 61, from: 12000, verified: true, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
  { id: '7', name: 'Seun Martins', role: 'Barber', rating: 4.9, reviews: 143, from: 8000, verified: true, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
  { id: '8', name: 'Nadia Hassan', role: 'Skincare Specialist', rating: 4.7, reviews: 44, from: 30000, verified: true, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80' },
  { id: '9', name: 'Chinyere A.', role: 'Lash Tech', rating: 4.8, reviews: 72, from: 18000, verified: true, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
]

export default function GlowPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 z-10" />
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80" alt="Glow hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 max-w-container-max mx-auto px-margin-desktop w-full">
          <h1 className="font-display-lg text-display-lg text-white mb-4">Beauty, Delivered<br />to Your Door.</h1>
          <p className="font-body-lg text-body-lg text-white/80 mb-8 max-w-xl">Premium beauty professionals available on-demand. Hair, makeup, nails and more.</p>
          <div className="bg-white p-2 rounded-full shadow-2xl flex items-center gap-2 max-w-xl">
            <div className="flex-1 px-6 py-3 flex items-center">
              <span className="material-symbols-outlined text-outline mr-2">search</span>
              <input className="w-full border-none outline-none bg-transparent font-body-md" placeholder="Search beauty services..." type="text" />
            </div>
            <button className="bg-sunset-orange text-white px-8 py-4 rounded-full font-label-lg text-label-lg hover:scale-95 transition-all">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Bento Category Grid */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg mb-8">Browse by Service</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <button key={cat.label} className="bg-white p-6 rounded-xl shadow-card hover:shadow-premium transition-all flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl transition-colors">{cat.icon}</span>
              </div>
              <span className="font-label-lg text-label-lg">{cat.label}</span>
              <span className="text-on-surface-variant text-xs">{cat.count} pros</span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Pros */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-headline-lg text-headline-lg">Top Beauty Pros</h2>
            <Link href="#" className="text-primary font-label-lg text-label-lg hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-gutter">
            {PROS.map((pro) => (
              <Link key={pro.id} href={`/pro/${pro.id}`} className="bg-white rounded-xl p-6 shadow-card text-center flex flex-col items-center hover:shadow-premium transition-shadow block">
                <div className="relative mb-4">
                  <img src={pro.image} alt={pro.name} className="w-20 h-20 rounded-full object-cover" />
                  {pro.verified && (
                    <span className="absolute bottom-0 right-0 bg-secondary text-white p-1 rounded-full">
                      <span className="material-symbols-outlined text-xs fill-icon">verified</span>
                    </span>
                  )}
                </div>
                <h3 className="font-headline-md text-sm font-semibold mb-1">{pro.name}</h3>
                <p className="text-primary font-label-lg text-[11px] uppercase mb-2">{pro.role}</p>
                <div className="flex items-center gap-1 mb-3">
                  <span className="material-symbols-outlined text-gold-leaf text-xs">star</span>
                  <span className="text-xs font-label-lg">{pro.rating} ({pro.reviews})</span>
                </div>
                <div className="text-xs text-on-surface-variant mb-4">From ₦{pro.from.toLocaleString()}</div>
                <button className="w-full py-2 border border-sunset-orange text-sunset-orange rounded-full text-xs font-label-lg hover:bg-sunset-orange hover:text-white transition-all">
                  Book
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg mb-12 text-center">How JAHRAH Glow Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', icon: 'search', title: 'Find Your Pro', desc: 'Browse verified beauty professionals by service, location, and availability.' },
            { step: '02', icon: 'calendar_today', title: 'Book & Confirm', desc: 'Choose your service, date and time. Pay securely through JAHRAH.' },
            { step: '03', icon: 'auto_awesome', title: 'Glow Up', desc: 'Your pro arrives at your location with all equipment ready to work.' },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="text-6xl font-display-lg text-primary-fixed mb-4 font-bold">{s.step}</div>
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">{s.icon}</span>
              <h3 className="font-headline-md text-headline-md mb-3">{s.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
