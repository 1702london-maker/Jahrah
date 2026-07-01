import Link from 'next/link'

const CATEGORIES = [
  { label: 'Fashion', icon: 'checkroom' },
  { label: 'Beauty', icon: 'face_retouching_natural' },
  { label: 'Food & Drink', icon: 'local_grocery_store' },
  { label: 'Art & Craft', icon: 'palette' },
  { label: 'Home Decor', icon: 'home' },
  { label: 'Electronics', icon: 'devices' },
  { label: 'Books', icon: 'menu_book' },
  { label: 'Health', icon: 'favorite' },
]

const PRODUCTS = [
  { id: '1', name: 'Aso-Oke Handbag', vendor: 'LagosLux', price: 45000, rating: 4.8, reviews: 34, badge: 'Handmade', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80' },
  { id: '2', name: 'African Print Dress', vendor: 'Kente Studios', price: 28000, rating: 4.7, reviews: 61, badge: null, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80' },
  { id: '3', name: 'Shea Butter Set', vendor: 'Naija Beauty', price: 12500, rating: 5.0, reviews: 128, badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80' },
  { id: '4', name: 'Kolanut Candles', vendor: 'AfriScents', price: 8900, rating: 4.9, reviews: 42, badge: 'New', image: 'https://images.unsplash.com/photo-1602607144535-17577ab5cdab?w=400&q=80' },
  { id: '5', name: 'Ankara Backpack', vendor: 'LagosLux', price: 35000, rating: 4.6, reviews: 27, badge: null, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80' },
  { id: '6', name: 'Gele Head Wrap', vendor: 'Aso Ibadan', price: 15000, rating: 4.8, reviews: 89, badge: 'Trending', image: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=400&q=80' },
  { id: '7', name: 'Moringa Tea Pack', vendor: 'WellnessNaija', price: 6500, rating: 4.9, reviews: 215, badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80' },
  { id: '8', name: 'Adire Wall Art', vendor: 'Yoruba Arts', price: 55000, rating: 5.0, reviews: 18, badge: 'Exclusive', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80' },
]

export default function MarketPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=80" alt="Market hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 max-w-container-max mx-auto px-margin-desktop w-full">
          <h1 className="font-display-lg text-display-lg text-white mb-4">Shop JAHRAH Market.</h1>
          <p className="font-body-lg text-body-lg text-white/80 mb-8 max-w-xl">Premium Pan-African goods from verified local vendors. Fashion, beauty, art, food and more.</p>
          <div className="bg-white rounded-full shadow-2xl flex items-center max-w-xl">
            <div className="flex-1 px-6 py-4 flex items-center">
              <span className="material-symbols-outlined text-outline mr-2">search</span>
              <input className="w-full border-none outline-none bg-transparent font-body-md" placeholder="Search products..." type="text" />
            </div>
            <button className="bg-sunset-orange text-white px-8 py-4 rounded-full font-label-lg text-label-lg hover:scale-95 transition-all m-1">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <div className="sticky top-[73px] z-40 bg-surface border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-desktop py-3 flex gap-3 overflow-x-auto hide-scrollbar">
          {CATEGORIES.map((cat) => (
            <button key={cat.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container hover:bg-primary-fixed font-label-lg text-label-lg whitespace-nowrap transition-colors">
              <span className="material-symbols-outlined text-sm">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-headline-lg text-headline-lg">Trending Now</h2>
          <select className="border border-outline rounded-full px-4 py-2 font-label-lg text-label-lg bg-surface">
            <option>Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          {PRODUCTS.map((p) => (
            <Link key={p.id} href="#" className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-shadow block group">
              <div className="relative">
                <img src={p.image} alt={p.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-primary text-on-primary text-xs font-bold px-2 py-1 rounded-full">{p.badge}</span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface-variant hover:text-sunset-orange transition-colors">
                  <span className="material-symbols-outlined text-sm">favorite_border</span>
                </button>
              </div>
              <div className="p-4">
                <p className="text-secondary font-label-lg text-xs uppercase mb-1">{p.vendor}</p>
                <h3 className="font-label-lg text-label-lg mb-2 line-clamp-2">{p.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <span className="material-symbols-outlined text-gold-leaf text-xs">star</span>
                  <span className="text-xs font-label-lg">{p.rating} ({p.reviews})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-price-display text-price-display text-primary">₦{p.price.toLocaleString()}</span>
                  <button className="bg-primary text-on-primary p-2 rounded-full hover:bg-terracotta-clay transition-colors">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
