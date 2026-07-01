import Link from 'next/link'

const PROPERTIES = [
  { id: '1', name: 'The Eko Loft', location: 'Victoria Island, Lagos', price: 125000, rating: 4.9, reviews: 48, type: '2BR Penthouse', superhost: true, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=640&q=80' },
  { id: '2', name: 'Azure Sands Cottage', location: 'Lekki Phase 1, Lagos', price: 85000, rating: 4.8, reviews: 32, type: 'Private Cottage', superhost: false, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=640&q=80' },
  { id: '3', name: 'Ikoyi Zen Suite', location: 'Ikoyi, Lagos', price: 150000, rating: 5.0, reviews: 61, type: '3BR Apartment', superhost: true, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=640&q=80' },
  { id: '4', name: 'Kalakuta Boutique', location: 'Ikeja, Lagos', price: 45000, rating: 4.7, reviews: 29, type: 'Studio Room', superhost: false, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=640&q=80' },
  { id: '5', name: 'VI Skyline Loft', location: 'Victoria Island, Lagos', price: 200000, rating: 4.9, reviews: 77, type: 'Penthouse', superhost: true, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=640&q=80' },
  { id: '6', name: 'Ajah Beachfront', location: 'Ajah, Lagos', price: 65000, rating: 4.6, reviews: 44, type: 'Beach House', superhost: false, image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=640&q=80' },
]

const FILTERS = ['All', 'Apartments', 'Villas', 'Cottages', 'Hotels', 'Penthouses']

export default function StaysPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Sticky Filter Bar */}
      <div className="sticky top-[73px] z-40 bg-surface border-b border-outline-variant shadow-sm">
        <div className="max-w-container-max mx-auto px-margin-desktop py-4 flex items-center gap-4 overflow-x-auto hide-scrollbar">
          <div className="flex items-center bg-surface-container rounded-full px-4 py-2 flex-1 max-w-sm">
            <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
            <input className="bg-transparent border-none outline-none text-label-lg w-full" placeholder="Search Lagos..." type="text" />
          </div>
          <div className="flex gap-2">
            {FILTERS.map((f) => (
              <button key={f} className={`px-4 py-2 rounded-full font-label-lg text-label-lg whitespace-nowrap transition-all ${f === 'All' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface hover:bg-primary-fixed'}`}>
                {f}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline font-label-lg text-label-lg hover:bg-surface-container ml-auto whitespace-nowrap">
            <span className="material-symbols-outlined text-sm">tune</span>
            Filters
          </button>
        </div>
      </div>

      {/* Split View */}
      <div className="flex h-[calc(100vh-210px)] sticky top-[130px]">
        {/* Card List - 40% */}
        <div className="w-full lg:w-[40%] overflow-y-auto p-6 space-y-4">
          <p className="font-label-lg text-label-lg text-on-surface-variant mb-4">{PROPERTIES.length} stays in Lagos</p>
          {PROPERTIES.map((p) => (
            <Link key={p.id} href={`/stays/${p.id}`} className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-shadow block">
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    {p.superhost && <span className="text-xs font-bold text-secondary uppercase tracking-wide">Superhost</span>}
                    <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">{p.name}</h3>
                    <p className="text-on-surface-variant text-sm">{p.location} • {p.type}</p>
                  </div>
                  <button className="text-on-surface-variant hover:text-sunset-orange">
                    <span className="material-symbols-outlined">favorite_border</span>
                  </button>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-gold-leaf text-sm">star</span>
                    <span className="font-label-lg text-sm">{p.rating} ({p.reviews})</span>
                  </div>
                  <div className="font-price-display text-price-display text-primary">
                    ₦ {p.price.toLocaleString()} <span className="text-on-surface-variant text-sm font-normal">/night</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Map - 60% */}
        <div className="hidden lg:block lg:w-[60%] bg-surface-container-high relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-on-surface-variant">
              <span className="material-symbols-outlined text-6xl mb-4 block">map</span>
              <p className="font-label-lg text-label-lg">Interactive Map View</p>
              <p className="font-body-md text-body-md text-sm mt-1">Lagos, Nigeria</p>
            </div>
          </div>
          {/* Price pins */}
          {PROPERTIES.map((p, i) => (
            <div
              key={p.id}
              className="absolute bg-primary text-white px-3 py-1 rounded-full font-label-lg text-xs font-bold shadow-md cursor-pointer hover:bg-terracotta-clay transition-colors"
              style={{ top: `${20 + i * 12}%`, left: `${15 + (i % 3) * 25}%` }}
            >
              ₦{(p.price / 1000).toFixed(0)}k
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
