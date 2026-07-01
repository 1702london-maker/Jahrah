export interface Property {
  id: string
  name: string
  location: string
  price: number
  rating: number
  reviews: number
  superhost: boolean
  type?: string
  image?: string
}

export interface Pro {
  id: string
  name: string
  role: string
  city: string
  rating: number
  reviews: number
  jobs?: number
  from: number
  verified: boolean
  image?: string
}

export interface Restaurant {
  id: string
  name: string
  cuisine: string
  minOrder: number
  delivery: string
  deliveryFee: number
  rating: number
  reviews: string
  image?: string
}

export interface Product {
  id: string
  name: string
  vendor: string
  price: number
  rating: number
  reviews: number
  badge?: string | null
  image?: string
}
