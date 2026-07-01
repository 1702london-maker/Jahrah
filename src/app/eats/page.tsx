import Link from 'next/link'

const TABS = ['Delivery', 'Private Chef', 'Catering', 'Pick Up']

const RESTAURANTS = [
  { id: '1', name: 'Heritage Kitchen', cuisine: 'Contemporary Nigerian', minOrder: 4500, delivery: '35-45 min', rating: 4.6, reviews: '1.2k+', fee: 500, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=640&q=80' },
  { id: '2', name: 'Umi Sushi Bar', cuisine: 'Japanese', minOrder: 8000, delivery: '25-35 min', rating: 4.8, reviews: '850+', fee: 800, image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=640&q=80' },
  { id: '3', name: 'The Grill Room', cuisine: 'Continental Grill', minOrder: 12000, delivery: '40-50 min', rating: 4.9, reviews: '430+', fee: 1000, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=640&q=80' },
  { id: '4', name: 'Afrique Bistro', cuisine: 'Pan-African Fusion', minOrder: 5000, delivery: '30-40 min', rating: 4.7, reviews: '620+', fee: 600, image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=640&q=80' },
  { id: '5', name: 'Eko Burgers', cuisine: 'American • Fast Food', minOrder: 2500, delivery: '20-30 min', rating: 4.5, reviews: '2.1k+', fee: 300, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=640&q=80' },
  { id: '6', name: 'Naija Pepper Soup', cuisine: 'Nigerian Street Food', minOrder: 3000, delivery: '25-35 min', rating: 4.6, reviews: '980+', fee: 400, image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=640&q=80' },
]

const CHEFS = [
  { id: '1', name: 'Chef Tunde', specialty: 'Nigerian Cuisine', rating: 5.0, bookings: 128, from: 50000, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { id: '2', name: 'Chef Adaeze', specialty: 'Continental & African', rating: 4.9, bookings: 94, from: 75000, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
  { id: '3', name: 'Chef Kwame', specialty: 'West African Fusion', rating: 4.8, bookings: 72, from: 60000, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80' },
]

export default function EatsPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1920&q=80" alt="Eats hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 max-w-container-max mx-auto px-margin-desktop w-full">
          <h1 className="font-display-lg text-display-lg text-white mb-4">Food That Moves<br />With You.</h1>
          <p className="font-body-lg text-body-lg text-white/80 mb-8 max-w-xl">From local jollof to private chef experiences — JAHRAH Eats delivers Africa to your door.</p>
          <div className="bg-white p-2 rounded-full shadow-2xl flex items-center gap-2 max-w-xl">
            <div className="flex-1 px-6 py-3 flex items-center">
              <span className="material-symbols-outlined text-outline mr-2">search</span>
              <input className="w-full border-none outline-none bg-transparent font-body-md" placeholder="Search restaurants or dishes..." type="text" />
            </div>
            <button className="bg-sunset-orange text-white px-8 py-4 rounded-full font-label-lg text-label-lg hover:scale-95 transition-all">
              Find Food
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-[73px] z-40 bg-surface border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex gap-8 overflow-x-auto hide-scrollbar">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                className={`py-4 font-label-lg text-label-lg border-b-2 transition-colors whitespace-nowrap ${
                  i === 0 ? 'border-primary text-primary font-bold' : 'border-transparent text-on-surface-variant hover:text-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Restaurant Grid */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-headline-lg text-headline-lg">Order Now</h2>
          <p className="text-on-surface-variant font-body-md text-body-md">Delivering to Victoria Island</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {RESTAURANTS.map((r) => (
            <Link key={r.id} href="#" className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-shadow block">
              <div className="relative">
                <img src={r.image} alt={r.name} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">{r.delivery}</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline-md text-xl">{r.name}</h3>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-gold-leaf text-sm">star</span>
                    <span className="font-label-lg text-sm">{r.rating}</span>
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm mb-3">{r.cuisine}</p>
                <div className="flex justify-between text-xs text-on-surface-variant font-label-lg">
                  <span>Min. ₦{r.minOrder.toLocaleString()}</span>
                  <span>·</span>
                  <span>Delivery ₦{r.fee.toLocaleString()}</span>
                  <span>·</span>
                  <span>{r.reviews} reviews</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Private Chef */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg">Book a Private Chef</h2>
              <p className="text-on-surface-variant font-body-md text-body-md mt-2">World-class chefs for intimate dinners, parties, and events</p>
            </div>
            <Link href="#" className="text-primary font-label-lg text-label-lg hover:underline">See all chefs</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {CHEFS.map((chef) => (
              <Link key={chef.id} href={`/pro/${chef.id}`} className="bg-white rounded-xl p-8 shadow-card text-center flex flex-col items-center hover:shadow-premium transition-shadow block">
                <img src={chef.image} alt={chef.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                <h3 className="font-headline-md text-xl mb-1">{chef.name}</h3>
                <p className="text-primary font-label-lg text-label-lg uppercase mb-3">{chef.specialty}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-gold-leaf text-sm">star</span>
                  <span className="font-label-lg text-sm">{chef.rating} · {chef.bookings} bookings</span>
                </div>
                <div className="text-on-surface-variant text-sm mb-6">From ₦{chef.from.toLocaleString()} per event</div>
                <button className="w-full py-3 border border-sunset-orange text-sunset-orange rounded-full font-label-lg text-sm hover:bg-sunset-orange hover:text-white transition-all">
                  Book Chef
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
