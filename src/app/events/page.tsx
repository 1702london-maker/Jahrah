import Link from 'next/link'

const CATEGORIES = [
  { label: 'Wedding', icon: 'favorite', image: 'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?w=640&q=80' },
  { label: 'Corporate', icon: 'business_center', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=640&q=80' },
  { label: 'Birthday', icon: 'cake', image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=640&q=80' },
  { label: 'Cultural', icon: 'festival', image: 'https://images.unsplash.com/photo-1574155376612-bfa4ed8bf0b4?w=640&q=80' },
]

const SERVICES = [
  { label: 'Event Planner', icon: 'event', count: 34 },
  { label: 'Catering', icon: 'restaurant', count: 48 },
  { label: 'Photography', icon: 'photo_camera', count: 62 },
  { label: 'Videography', icon: 'videocam', count: 29 },
  { label: 'Decoration', icon: 'celebration', count: 41 },
  { label: 'DJ/Music', icon: 'music_note', count: 55 },
  { label: 'MC/Host', icon: 'mic', count: 23 },
  { label: 'Venue', icon: 'location_city', count: 37 },
]

const PLANNERS = [
  { id: '1', name: 'EventsbyFunmi', specialty: 'Weddings & Corporate', rating: 5.0, events: 148, from: 150000, image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80', cover: 'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?w=640&q=80' },
  { id: '2', name: 'Kelechi Events', specialty: 'Luxury & High-End', rating: 4.9, events: 92, from: 250000, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80', cover: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=640&q=80' },
  { id: '3', name: 'Abuja Celebrations', specialty: 'Cultural & Traditional', rating: 4.8, events: 76, from: 100000, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80', cover: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=640&q=80' },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-royal-indigo/80 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?w=1920&q=80" alt="Events hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 max-w-container-max mx-auto px-margin-desktop w-full">
          <h1 className="font-display-lg text-display-lg text-white mb-4">Plan Your Event<br />with Ease.</h1>
          <p className="font-body-lg text-body-lg text-white/80 mb-8 max-w-xl">From intimate gatherings to grand celebrations, JAHRAH connects you with Africa's finest event professionals.</p>
          <div className="bg-white p-2 rounded-full shadow-2xl flex items-center gap-2 max-w-2xl">
            <div className="flex-1 px-6 py-3 flex items-center">
              <span className="material-symbols-outlined text-outline mr-2">search</span>
              <input className="w-full border-none outline-none bg-transparent font-body-md" placeholder="What kind of event?" type="text" />
            </div>
            <div className="px-6 py-3 flex items-center border-l border-outline-variant">
              <span className="material-symbols-outlined text-outline mr-2">location_on</span>
              <input className="w-40 border-none outline-none bg-transparent font-body-md" placeholder="Location" type="text" />
            </div>
            <button className="bg-royal-indigo text-white px-8 py-4 rounded-full font-label-lg text-label-lg hover:scale-95 transition-all">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Event Type Cards */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg mb-8">What are you planning?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className="relative rounded-xl overflow-hidden h-48 cursor-pointer group">
              <img src={cat.image} alt={cat.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <span className="material-symbols-outlined text-white text-2xl block mb-1">{cat.icon}</span>
                  <h3 className="font-headline-md text-white text-xl">{cat.label}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg mb-8">Event Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <button key={s.label} className="bg-white p-6 rounded-xl shadow-card hover:shadow-premium transition-all flex flex-col items-center gap-3 cursor-pointer group">
                <div className="w-14 h-14 rounded-full bg-royal-indigo/10 flex items-center justify-center group-hover:bg-royal-indigo transition-colors">
                  <span className="material-symbols-outlined text-royal-indigo group-hover:text-white text-2xl transition-colors">{s.icon}</span>
                </div>
                <span className="font-label-lg text-label-lg text-center">{s.label}</span>
                <span className="text-on-surface-variant text-xs">{s.count} pros</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Top Planners */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-headline-lg text-headline-lg">Top Event Planners</h2>
          <Link href="#" className="text-primary font-label-lg text-label-lg hover:underline">View all</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {PLANNERS.map((p) => (
            <Link key={p.id} href={`/pro/${p.id}`} className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-shadow block">
              <img src={p.cover} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <div className="relative -mt-12 mb-4 flex justify-center">
                  <img src={p.image} alt={p.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
                </div>
                <h3 className="font-headline-md text-xl mb-1">{p.name}</h3>
                <p className="text-primary font-label-lg text-label-lg uppercase text-xs mb-3">{p.specialty}</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-gold-leaf text-sm">star</span>
                  <span className="font-label-lg text-sm">{p.rating} · {p.events} events</span>
                </div>
                <div className="text-sm text-on-surface-variant mb-5">From ₦{p.from.toLocaleString()}</div>
                <button className="w-full py-3 border border-royal-indigo text-royal-indigo rounded-full font-label-lg text-sm hover:bg-royal-indigo hover:text-white transition-all">
                  Get a Quote
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
