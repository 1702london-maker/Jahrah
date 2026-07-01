export const NIGERIAN_CITIES = [
  'Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Kano',
  'Enugu', 'Benin City', 'Warri', 'Owerri', 'Kaduna', 'Uyo', 'Calabar'
]

export const SAMPLE_PROPERTIES = [
  { id: '1', name: 'The Palms Apartment', location: 'Lekki Phase 1, Lagos', price: 65000, rating: 4.9, reviews: 142, superhost: true },
  { id: '2', name: 'Maitama Executive Suite', location: 'Maitama, Abuja', price: 45000, rating: 4.8, reviews: 98, superhost: false },
  { id: '3', name: 'GRA Luxury Flat', location: 'GRA Phase 2, Port Harcourt', price: 38000, rating: 4.7, reviews: 76, superhost: true },
  { id: '4', name: 'Victoria Court Studio', location: 'Victoria Island, Lagos', price: 55000, rating: 4.9, reviews: 201, superhost: true },
]

export const SAMPLE_PROS = [
  { id: '1', name: 'Adaeze Okonkwo', category: 'Bridal Makeup Artist', city: 'Lagos', rating: 4.9, bookings: 312, from: 35000, tier: 'ELITE PRO' },
  { id: '2', name: 'Emeka Obi', category: 'Private Chef', city: 'Abuja', rating: 4.8, bookings: 198, from: 60000, tier: 'TOP PRO' },
  { id: '3', name: 'Biodun Ishola', category: 'Electrician', city: 'Lagos', rating: 4.7, bookings: 445, from: 8000, tier: 'VERIFIED' },
  { id: '4', name: 'Chiamaka Eze', category: 'Hair Stylist', city: 'Port Harcourt', rating: 4.9, bookings: 267, from: 15000, tier: 'ELITE PRO' },
  { id: '5', name: 'Kunle Adeyemi', category: 'Event Planner', city: 'Lagos', rating: 4.8, bookings: 134, from: 150000, tier: 'TOP PRO' },
]

export const SAMPLE_RESTAURANTS = [
  { id: '1', name: 'Bukka Hut', cuisine: 'Nigerian', minOrder: 2000, delivery: '25–35 mins', deliveryFee: 500, rating: 4.8 },
  { id: '2', name: 'Craft Grill', cuisine: 'Continental', minOrder: 5000, delivery: '30–45 mins', deliveryFee: 1000, rating: 4.7 },
  { id: '3', name: 'Suya Spot', cuisine: 'Nigerian · Grills', minOrder: 1500, delivery: '20–30 mins', deliveryFee: 400, rating: 4.9 },
  { id: '4', name: 'The Wrap House', cuisine: 'Fast Food', minOrder: 1800, delivery: '15–25 mins', deliveryFee: 600, rating: 4.6 },
]

export const formatNaira = (amount: number) =>
  `₦${amount.toLocaleString('en-NG')}`
