import Link from 'next/link'

const PRO = {
  id: '1',
  name: 'Chidi Okonkwo',
  role: 'Master Electrician',
  city: 'Lagos, Nigeria',
  rating: 4.9,
  reviews: 124,
  jobs: 312,
  responseTime: '< 1 hour',
  from: 15000,
  verified: true,
  elite: true,
  bio: 'With over 12 years of experience in residential and commercial electrical installations, I bring precision, safety, and professionalism to every job. Fully certified with COREN and insured for your peace of mind.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
  portfolio: [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
    'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&q=80',
    'https://images.unsplash.com/photo-1503328427499-d92d1ac3d96b?w=400&q=80',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80',
  ],
  services: [
    { name: 'Wiring & Rewiring', price: 25000, duration: '3-5 hours' },
    { name: 'Fault Detection & Repair', price: 15000, duration: '1-3 hours' },
    { name: 'Light & Fan Installation', price: 8000, duration: '1-2 hours' },
    { name: 'Inverter/Solar Setup', price: 45000, duration: '1 day' },
    { name: 'Panel Upgrade', price: 60000, duration: '1-2 days' },
  ],
}

const REVIEWS = [
  { name: 'Tunde B.', rating: 5, text: 'Chidi arrived on time, diagnosed the issue quickly, and fixed everything in under 2 hours. Very professional!', date: 'Dec 2024', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80' },
  { name: 'Ngozi A.', rating: 5, text: 'Excellent work on our full house rewiring. Very clean, neat and professional. Highly recommended.', date: 'Nov 2024', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80' },
  { name: 'Femi O.', rating: 4, text: 'Good quality work. Fixed our inverter issue same day. Would use again.', date: 'Nov 2024', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80' },
]

export default function ProProfilePage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Banner */}
      <div className="relative h-[350px]">
        <img src={PRO.coverImage} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* Profile Header */}
        <div className="flex flex-col lg:flex-row gap-8 pb-8 border-b border-outline-variant -mt-16 relative">
          <div className="lg:w-[calc(100%-420px)]">
            <div className="flex items-end gap-6 mb-6">
              <div className="relative">
                <img src={PRO.image} alt={PRO.name} className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl" />
                {PRO.verified && (
                  <span className="absolute bottom-2 right-2 bg-royal-indigo text-white p-2 rounded-full shadow-md">
                    <span className="material-symbols-outlined fill-icon">verified</span>
                  </span>
                )}
              </div>
              <div className="pb-2">
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="font-headline-lg text-headline-lg">{PRO.name}</h1>
                  {PRO.elite && (
                    <span className="bg-gold-leaf text-on-surface text-xs font-bold px-3 py-1 rounded-full">Elite Pro</span>
                  )}
                </div>
                <p className="text-primary font-label-lg text-label-lg uppercase mb-2">{PRO.role}</p>
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-gold-leaf text-sm">star</span>
                    <span className="font-label-lg text-sm">{PRO.rating} ({PRO.reviews} reviews)</span>
                  </div>
                  <span>·</span>
                  <span className="font-body-md text-body-md">{PRO.jobs} jobs</span>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="font-body-md text-body-md">{PRO.city}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">{PRO.bio}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 py-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* Portfolio */}
            <div className="mb-10">
              <h2 className="font-headline-md text-headline-md mb-6">Portfolio</h2>
              <div className="columns-2 md:columns-3 gap-3 space-y-3">
                {PRO.portfolio.map((img, i) => (
                  <img key={i} src={img} alt={`Work ${i + 1}`} className="w-full rounded-lg object-cover break-inside-avoid" />
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="mb-10">
              <h2 className="font-headline-md text-headline-md mb-6">Services & Pricing</h2>
              <div className="overflow-hidden rounded-xl border border-outline-variant">
                <table className="w-full">
                  <thead className="bg-surface-container">
                    <tr>
                      <th className="text-left p-4 font-label-lg text-label-lg">Service</th>
                      <th className="text-left p-4 font-label-lg text-label-lg">Est. Duration</th>
                      <th className="text-right p-4 font-label-lg text-label-lg">Starting Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRO.services.map((s, i) => (
                      <tr key={s.name} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="p-4 font-body-md text-body-md">{s.name}</td>
                        <td className="p-4 text-on-surface-variant font-body-md text-body-md">{s.duration}</td>
                        <td className="p-4 text-right font-price-display text-primary">₦ {s.price.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Reviews */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-gold-leaf text-2xl">star</span>
                <h2 className="font-headline-md text-headline-md">{PRO.rating} · {PRO.reviews} reviews</h2>
              </div>
              <div className="space-y-6">
                {REVIEWS.map((r) => (
                  <div key={r.name} className="flex gap-4">
                    <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-label-lg text-label-lg">{r.name}</span>
                        <span className="text-on-surface-variant text-sm">{r.date}</span>
                        <div className="flex">
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-gold-leaf text-sm fill-icon">star</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-on-surface-variant font-body-md text-body-md">{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:w-[380px]">
            <div className="sticky top-[100px] bg-white rounded-2xl p-8 shadow-premium border border-outline-variant">
              <div className="text-center mb-6">
                <div className="font-price-display text-price-display text-primary mb-1">
                  From ₦ {PRO.from.toLocaleString()}
                </div>
                <p className="text-on-surface-variant font-body-md text-body-md">per visit</p>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-6">
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
                  <div key={d} className="text-center text-xs font-label-lg text-on-surface-variant py-1">{d}</div>
                ))}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <button
                    key={day}
                    className={`text-center text-sm py-2 rounded-full font-label-lg transition-colors ${
                      [5, 12, 19, 26].includes(day) ? 'text-on-surface-variant/40 cursor-not-allowed' :
                      day === 15 ? 'bg-primary text-white' :
                      'hover:bg-primary-fixed'
                    }`}
                    disabled={[5, 12, 19, 26].includes(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="mb-4">
                <label className="font-label-lg text-label-lg block mb-2">Service</label>
                <select className="w-full border border-outline rounded-xl p-3 font-body-md text-body-md bg-surface">
                  {PRO.services.map((s) => (
                    <option key={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="font-label-lg text-label-lg block mb-2">Time Slot</label>
                <div className="grid grid-cols-3 gap-2">
                  {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM'].map((t) => (
                    <button key={t} className="py-2 px-2 border border-outline rounded-lg font-label-lg text-xs hover:border-primary hover:text-primary transition-colors">
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                href="/booking-confirmed"
                className="w-full bg-sunset-orange text-white py-4 rounded-full font-label-lg text-label-lg text-center block hover:bg-terracotta-clay transition-colors mb-4"
              >
                Book {PRO.name.split(' ')[0]}
              </Link>
              <button className="w-full border border-outline py-4 rounded-full font-label-lg text-label-lg hover:bg-surface-container transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">chat</span>
                Message
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span>Responds in {PRO.responseTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
