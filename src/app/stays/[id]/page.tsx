import Link from 'next/link'

const PROPERTY = {
  id: '1',
  name: 'The Eko Loft',
  location: 'Victoria Island, Lagos, Nigeria',
  price: 125000,
  rating: 4.9,
  reviews: 48,
  type: '2-Bedroom Penthouse',
  superhost: true,
  images: [
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1280&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=640&q=80',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=640&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&q=80',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=640&q=80',
  ],
  description: 'Experience Lagos from the pinnacle of luxury. The Eko Loft is a meticulously designed penthouse offering panoramic views of the Atlantic Ocean and Victoria Island skyline. Every detail has been curated for the discerning traveller.',
  amenities: ['pool', 'wifi', 'ac_unit', 'local_parking', 'kitchen', 'balcony', 'security', 'generator'],
  amenityLabels: ['Pool', 'High-Speed WiFi', 'Air Conditioning', 'Private Parking', 'Full Kitchen', 'Private Balcony', '24/7 Security', 'Standby Generator'],
  host: { name: 'Chioma A.', superhost: true, image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80' },
}

const REVIEWS = [
  { name: 'Emeka', rating: 5, text: 'Absolutely stunning apartment. Views are incredible, host was incredibly responsive.', date: 'November 2024', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  { name: 'Sarah K.', rating: 5, text: 'Best stay in Lagos by far. The space is exactly as shown. Would definitely return.', date: 'October 2024', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' },
  { name: 'Bayo T.', rating: 4, text: 'Great location and amenities. Check-in was smooth. Highly recommend for business travellers.', date: 'October 2024', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80' },
]

export default function PropertyDetailPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-on-surface-variant font-label-lg text-label-lg mb-6">
          <Link href="/stays" className="hover:text-primary">Stays</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-on-surface">{PROPERTY.name}</span>
        </div>

        {/* Title */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="font-headline-lg text-headline-lg mb-2">{PROPERTY.name}</h1>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-gold-leaf text-sm">star</span>
                <span className="font-label-lg text-sm">{PROPERTY.rating} · {PROPERTY.reviews} reviews</span>
              </div>
              <span>·</span>
              {PROPERTY.superhost && <span className="font-label-lg text-sm underline">Superhost</span>}
              <span>·</span>
              <span className="underline">{PROPERTY.location}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline hover:bg-surface-container font-label-lg text-label-lg">
              <span className="material-symbols-outlined text-sm">share</span> Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline hover:bg-surface-container font-label-lg text-label-lg">
              <span className="material-symbols-outlined text-sm">favorite_border</span> Save
            </button>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[500px] rounded-2xl overflow-hidden mb-8">
          <div className="col-span-2 row-span-2">
            <img src={PROPERTY.images[0]} alt="Main" className="w-full h-full object-cover" />
          </div>
          {PROPERTY.images.slice(1, 5).map((img, i) => (
            <div key={i}>
              <img src={img} alt={`View ${i + 2}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Content + Booking Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {/* Host + Property Info */}
            <div className="flex justify-between items-center pb-8 border-b border-outline-variant">
              <div>
                <h2 className="font-headline-md text-headline-md mb-1">Hosted by {PROPERTY.host.name}</h2>
                <p className="text-on-surface-variant font-body-md text-body-md">{PROPERTY.type} · Entire place</p>
              </div>
              <div className="relative">
                <img src={PROPERTY.host.image} alt={PROPERTY.host.name} className="w-16 h-16 rounded-full object-cover" />
                {PROPERTY.host.superhost && (
                  <span className="absolute -bottom-1 -right-1 bg-secondary text-white p-1 rounded-full">
                    <span className="material-symbols-outlined text-xs fill-icon">verified</span>
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="py-8 border-b border-outline-variant">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{PROPERTY.description}</p>
            </div>

            {/* Amenities */}
            <div className="py-8 border-b border-outline-variant">
              <h3 className="font-headline-md text-headline-md mb-6">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {PROPERTY.amenities.map((icon, i) => (
                  <div key={icon} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">{icon}</span>
                    <span className="font-body-md text-body-md">{PROPERTY.amenityLabels[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="py-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-gold-leaf text-2xl">star</span>
                <h3 className="font-headline-md text-headline-md">{PROPERTY.rating} · {PROPERTY.reviews} reviews</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {REVIEWS.map((r) => (
                  <div key={r.name}>
                    <div className="flex items-center gap-3 mb-3">
                      <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <div className="font-label-lg text-label-lg">{r.name}</div>
                        <div className="text-on-surface-variant text-sm">{r.date}</div>
                      </div>
                    </div>
                    <p className="text-on-surface-variant font-body-md text-body-md">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:w-[380px]">
            <div className="sticky top-[100px] bg-white rounded-2xl p-8 shadow-premium border border-outline-variant">
              <div className="flex justify-between items-center mb-6">
                <div className="font-price-display text-price-display text-primary">
                  ₦ {PROPERTY.price.toLocaleString()}
                </div>
                <span className="text-on-surface-variant font-body-md text-body-md">/ night</span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-gold-leaf text-sm">star</span>
                <span className="font-label-lg text-sm">{PROPERTY.rating} · {PROPERTY.reviews} reviews</span>
              </div>

              {/* Date Picker */}
              <div className="border border-outline rounded-xl overflow-hidden mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-4 border-r border-outline">
                    <div className="font-label-lg text-label-lg text-xs uppercase mb-1">Check-in</div>
                    <div className="font-body-md text-body-md text-on-surface-variant">Add date</div>
                  </div>
                  <div className="p-4">
                    <div className="font-label-lg text-label-lg text-xs uppercase mb-1">Checkout</div>
                    <div className="font-body-md text-body-md text-on-surface-variant">Add date</div>
                  </div>
                </div>
                <div className="p-4 border-t border-outline">
                  <div className="font-label-lg text-label-lg text-xs uppercase mb-1">Guests</div>
                  <div className="font-body-md text-body-md text-on-surface-variant">1 guest</div>
                </div>
              </div>

              <Link
                href="/booking-confirmed"
                className="w-full bg-sunset-orange text-white py-4 rounded-full font-label-lg text-label-lg text-center block hover:bg-terracotta-clay transition-colors"
              >
                Reserve
              </Link>

              <p className="text-center text-on-surface-variant text-sm mt-3 font-body-md">You won&apos;t be charged yet</p>

              <div className="mt-6 space-y-3 border-t border-outline-variant pt-6">
                <div className="flex justify-between font-body-md text-body-md">
                  <span className="text-on-surface-variant underline">₦125,000 × 5 nights</span>
                  <span>₦625,000</span>
                </div>
                <div className="flex justify-between font-body-md text-body-md">
                  <span className="text-on-surface-variant underline">JAHRAH service fee</span>
                  <span>₦62,500</span>
                </div>
                <div className="flex justify-between font-label-lg text-label-lg border-t border-outline-variant pt-3">
                  <span>Total before taxes</span>
                  <span>₦687,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
