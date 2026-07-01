'use client'

const VEHICLE_TYPES = [
  { label: 'Economy', icon: 'directions_car', capacity: '1-4', eta: '3 min', price: 2500, description: 'Affordable everyday rides' },
  { label: 'Comfort', icon: 'airport_shuttle', capacity: '1-4', eta: '5 min', price: 4500, description: 'Premium sedan experience' },
  { label: 'Executive', icon: 'local_taxi', capacity: '1-3', eta: '8 min', price: 8000, description: 'Luxury vehicles, professional drivers' },
  { label: 'SUV', icon: 'rv_hookup', capacity: '1-6', eta: '7 min', price: 12000, description: 'Spacious rides for groups & families' },
  { label: 'Intercity', icon: 'directions_bus', capacity: '1-4', eta: '15 min', price: 25000, description: 'Lagos to Abuja, PH & more' },
  { label: 'Charter', icon: 'flight', capacity: '1-8', eta: '1 hr', price: 85000, description: 'Private air & premium charter' },
]

const POPULAR_ROUTES = [
  { from: 'Victoria Island', to: 'Lagos Airport (MMIA)', time: '35 min', price: 8500 },
  { from: 'Ikoyi', to: 'Lekki Phase 1', time: '20 min', price: 3500 },
  { from: 'Yaba', to: 'VI Business District', time: '40 min', price: 5000 },
  { from: 'Ajah', to: 'Lagos Island', time: '55 min', price: 7500 },
]

export default function RidePage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col overflow-hidden h-screen">
      {/* Map Background (full height behind sheet) */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-surface-container-high flex items-center justify-center">
          <div className="text-center text-on-surface-variant">
            <span className="material-symbols-outlined text-8xl mb-4 block opacity-20">map</span>
            <p className="font-headline-md text-headline-md opacity-40">Interactive Map</p>
            <p className="font-body-md text-body-md opacity-30">Lagos, Nigeria</p>
          </div>
        </div>

        {/* Pickup/Drop markers */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <span className="material-symbols-outlined text-primary text-4xl fill-icon">location_on</span>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-md font-label-lg text-xs whitespace-nowrap">Victoria Island</div>
          </div>
        </div>

        {/* Bottom Sheet */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl">
          <div className="w-12 h-1 bg-outline-variant rounded-full mx-auto mt-3 mb-4" />

          <div className="px-6 pb-6">
            {/* Where to? */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 bg-surface-container rounded-xl p-4">
                <span className="material-symbols-outlined text-secondary fill-icon">circle</span>
                <input className="flex-1 bg-transparent border-none outline-none font-body-md text-body-md" placeholder="Your location" defaultValue="Victoria Island, Lagos" />
              </div>
              <div className="flex items-center gap-3 bg-surface-container rounded-xl p-4">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <input className="flex-1 bg-transparent border-none outline-none font-body-md text-body-md" placeholder="Where to?" />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 bg-surface-container-high rounded-full p-1 mb-6">
              {['Now', 'Schedule'].map((tab, i) => (
                <button key={tab} className={`flex-1 py-2 rounded-full font-label-lg text-label-lg transition-colors ${i === 0 ? 'bg-white shadow-sm text-on-surface' : 'text-on-surface-variant'}`}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Vehicle Types */}
            <div className="overflow-x-auto hide-scrollbar -mx-6 px-6">
              <div className="flex gap-3 pb-2">
                {VEHICLE_TYPES.map((v, i) => (
                  <div
                    key={v.label}
                    className={`flex-shrink-0 w-[160px] p-4 rounded-xl border-2 cursor-pointer transition-all ${i === 1 ? 'border-primary bg-primary-fixed' : 'border-outline-variant bg-white hover:border-primary'}`}
                  >
                    <span className="material-symbols-outlined text-primary text-2xl block mb-2">{v.icon}</span>
                    <div className="font-label-lg text-label-lg mb-1">{v.label}</div>
                    <div className="text-xs text-on-surface-variant mb-2">{v.capacity} seats · {v.eta}</div>
                    <div className="font-price-display text-sm text-primary font-bold">₦{v.price.toLocaleString()}</div>
                    <div className="text-xs text-on-surface-variant">{v.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full mt-6 bg-primary text-on-primary py-4 rounded-full font-label-lg text-label-lg hover:bg-terracotta-clay transition-colors">
              Request Ride
            </button>
          </div>
        </div>
      </div>

      {/* Popular Routes (below map on scroll) */}
      <div className="bg-surface py-12 px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-headline-lg mb-6">Popular Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {POPULAR_ROUTES.map((r) => (
              <div key={r.from} className="bg-white rounded-xl p-5 shadow-card flex items-center justify-between cursor-pointer hover:shadow-premium transition-shadow">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">route</span>
                  <div>
                    <p className="font-label-lg text-label-lg">{r.from} → {r.to}</p>
                    <p className="text-on-surface-variant text-sm">{r.time} · ₦{r.price.toLocaleString()}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
