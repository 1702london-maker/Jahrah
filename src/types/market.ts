export type FulfilmentType = 'warehouse' | 'express' | 'sourced' | 'vendor_ships'

export type VendorStatus = 'active' | 'suspended' | 'pending' | 'rejected'

export type ProductCategory =
  | 'fashion'
  | 'beauty'
  | 'food_drinks'
  | 'electronics'
  | 'home_living'
  | 'health'
  | 'art_crafts'
  | 'kids'
  | 'sports'
  | 'automotive'

export type TrustTier = 'new' | 'rising' | 'trusted' | 'elite'

export interface Vendor {
  id: string
  user_id: string
  store_name: string
  slug: string
  description: string | null
  logo_url: string | null
  banner_url: string | null
  category: string
  sub_categories: string[]
  trust_score: number
  trust_tier: TrustTier
  id_verified: boolean
  cac_number: string | null
  bvn_verified: boolean
  total_sales: number
  total_revenue: number
  return_rate: number
  delivery_rate: number
  response_time_hours: number
  whatsapp: string | null
  email: string | null
  phone: string | null
  city: string | null
  state: string | null
  country: string
  is_active: boolean
  is_featured: boolean
  created_at: string
}

export interface Product {
  id: string
  vendor_id: string
  vendor?: Vendor
  name: string
  slug: string
  description: string | null
  category: string
  sub_category: string | null
  images: string[]
  price: number
  compare_at_price: number | null
  currency: string
  variants: ProductVariant[]
  stock_quantity: number
  stock_status: 'in_stock' | 'low_stock' | 'out_of_stock'
  weight_kg: number | null
  tags: string[]
  is_active: boolean
  is_featured: boolean
  avg_rating: number
  review_count: number
  total_sold: number
  created_at: string
}

export interface ProductVariant {
  name: string
  options: string[]
}

export interface CartItem {
  id: string
  product_id: string
  product?: Product
  quantity: number
  variant_selection: Record<string, string>
  unit_price: number
}

export interface CollectionPoint {
  id: string
  name: string
  address: string
  city: string
  state: string
  country: string
  lat: number | null
  lng: number | null
  opening_hours: Record<string, string>
  phone: string | null
  is_active: boolean
}

export type OrderStatus =
  | 'pending_payment'
  | 'payment_confirmed'
  | 'processing'
  | 'ready_for_collection'
  | 'collected'
  | 'cancelled'
  | 'refunded'

export interface Order {
  id: string
  order_number: string
  user_id: string
  status: OrderStatus
  subtotal: number
  service_fee: number
  total: number
  currency: string
  collection_point_id: string
  collection_point?: CollectionPoint
  collection_code: string | null
  collection_deadline: string | null
  collected_at: string | null
  paystack_reference: string | null
  paystack_transaction_id: string | null
  customer_name: string
  customer_email: string
  customer_phone: string
  notes: string | null
  items?: OrderItem[]
  created_at: string
  updated_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  product?: Product
  vendor_id: string
  quantity: number
  unit_price: number
  total_price: number
  variant_selection: Record<string, string>
  product_name: string
  product_image: string | null
}

export interface ProductReview {
  id: string
  product_id: string
  user_id: string
  rating: number
  title: string | null
  body: string | null
  images: string[]
  verified_purchase: boolean
  helpful_count: number
  created_at: string
}

export interface VendorApplication {
  id: string
  user_id: string
  email: string
  store_name: string
  description: string | null
  category: string
  product_types: string | null
  monthly_volume: string | null
  has_cac: boolean
  cac_number: string | null
  id_type: 'nin' | 'bvn' | 'passport' | 'drivers_license' | null
  id_number: string | null
  phone: string | null
  whatsapp: string | null
  city: string | null
  state: string | null
  status: 'submitted' | 'reviewing' | 'sample_requested' | 'sample_received' | 'approved' | 'rejected'
  admin_notes: string | null
  created_at: string
}

export interface CheckoutPayload {
  items: Array<{
    product_id: string
    quantity: number
    variant_selection: Record<string, string>
    unit_price: number
  }>
  collection_point_id: string
  customer_name: string
  customer_email: string
  customer_phone: string
  notes?: string
}

export interface PaystackInitResponse {
  authorization_url: string
  access_code: string
  reference: string
}
