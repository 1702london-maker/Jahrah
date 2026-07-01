import Link from 'next/link'

const CATEGORIES = [
  { label: 'Electrician', icon: 'bolt', count: 48 },
  { label: 'Plumber', icon: 'plumbing', count: 36 },
  { label: 'Painter', icon: 'format_paint', count: 29 },
  { label: 'AC Repair', icon: 'ac_unit', count: 22 },
  { label: 'Carpenter', icon: 'carpenter', count: 31 },
  { label: 'House Cleaner', icon: 'cleaning_services', count: 54 },
  { label: 'Security', icon: 'security', count: 18 },
  { label: 'TV/Electronics', icon: 'tv', count: 27 },
  { label: 'Generator', icon: 'electric_bolt', count: 15 },
  { label: 'Gutter/Roofing', icon: 'roofing', count: 20 },
  { label: 'Glass/Aluminium', icon: 'window', count: 12 },
  { label: 'Landscaping', icon: 'park', count: 9 },
]

const PROS = [
  { id: '1', name: 'Chidi O.', role: 'Electrician', rating: 4.9, jobs: 124, from: 15000, verified: true, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80', coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=640&q=80' },
  { id: '2', name: 'Kemi P.', role: 'Plumber', rating: 4.8, jobs: 89, from: 12000, verified: true, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80', coverImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=640&q=80' },
  { id: '3', name: 'Emeka N.', role: 'Painter', rating: 4.7, jobs: 67, from: 10000, verified: true, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80', coverImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=640&q=80' },
  { id: '4', name: 'Taiwo A.', role: 'AC Technician', rating: 4.9, jobs: 201, from: 20000, verified: true, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80', coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&q=80' },
]

export default function FixPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80" alt="Fix hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 max-w-container-max mx-auto px-margin-desktop w-full">
          <h1 className="font-display-lg text-display-lg text-white mb-4">Home Services,<br />Done Right.</h1>
          <p className="font-body-lg text-body-lg text-white/80 mb-8 max-w-xl">Verified professionals for every home repair need. Fixed prices, guaranteed quality.</p>
          <div className="bg-white p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-2xl">
            <div className="flex-1 w-full px-6 py-3 flex items-center">
              <span className="material-symbols-outlined text-outline mr-2">search</span>
              <input className="w-full border-none outline-none bg-transparent font-body-md text-body-md" placeholder="What service do you need?" type="text" />
            </div>
            <div className="px-6 py-3 flex items-center md:border-l border-outline-variant">
              <span className="material-symbols-outlined text-outline mr-2">location_on</span>
              <input className="w-full border-none outline-none bg-transparent font-body-md text-body-md" placeholder="Your location" type="text" />
            </div>
            <button className="bg-sunset-orange text-white px-8 py-4 rounded-full font-label-lg text-label-lg hover:scale-95 transition-all w-full md:w-auto flex items-center gap-2">
              <span className="material-symbols-outlined">search</span>
              Find a Pro
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid - 4 columns */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg mb-8">What do you need fixed?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <button key={cat.label} className="bg-white p-6 rounded-xl shadow-card hover:shadow-premium transition-shadow flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl transition-colors">{cat.icon}</span>
              </div>
              <span className="font-label-lg text-label-lg text-center">{cat.label}</span>
              <span className="text-on-surface-variant text-xs">{cat.count} pros</span>
            </button>
          ))}
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-section-gap bg-royal-indigo text-white">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <h2 className="font-headline-lg text-headline-lg mb-4">The JAHRAH Fix Guarantee</h2>
          <p className="font-body-lg text-body-lg opacity-80 mb-12 max-w-2xl mx-auto">Every pro is background-checked, insured, and reviewed by real customers. If you are not satisfied, we make it right.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'verified_user', title: 'Verified Pros', desc: 'Every professional is background-checked and identity-verified.' },
              { icon: 'price_check', title: 'Fixed Pricing', desc: 'No hidden fees. You agree on the price before work begins.' },
              { icon: 'thumb_up', title: 'Satisfaction Promise', desc: 'Not happy? We will send another pro at no extra cost.' },
            ].map((g) => (
              <div key={g.title} className="flex flex-col items-center">
                <span className="material-symbols-outlined text-5xl mb-4 text-white/80">{g.icon}</span>
                <h3 className="font-headline-md text-headline-md mb-2">{g.title}</h3>
                <p className="font-body-md text-body-md opacity-70">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Pros */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-headline-lg text-headline-lg">Top Pros Near You</h2>
          <Link href="#" className="text-primary font-label-lg text-label-lg hover:underline">View all</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {PROS.map((pro) => (
            <Link key={pro.id} href={`/pro/${pro.id}`} className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-shadow block">
              <div className="relative h-40">
                <img src={pro.coverImage} alt={pro.role} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-center">
                <div className="relative -mt-10 mb-4 flex justify-center">
                  <div className="relative">
                    <img src={pro.image} alt={pro.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
                    {pro.verified && (
                      <span className="absolute bottom-0 right-0 bg-secondary text-white p-1 rounded-full">
                        <span className="material-symbols-outlined text-xs fill-icon">verified</span>
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="font-headline-md text-lg mb-1">{pro.name}</h3>
                <p className="text-primary font-label-lg text-label-lg uppercase mb-2">{pro.role}</p>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <span className="material-symbols-outlined text-gold-leaf text-sm">star</span>
                  <span className="font-label-lg text-sm">{pro.rating} ({pro.jobs} jobs)</span>
                </div>
                <div className="text-sm text-on-surface-variant mb-4">From ₦ {pro.from.toLocaleString()}</div>
                <button className="w-full py-3 border border-sunset-orange text-sunset-orange rounded-full font-label-lg text-sm hover:bg-sunset-orange hover:text-white transition-all">
                  Book Now
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
