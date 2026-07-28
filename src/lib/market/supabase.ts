import { createClient } from '@supabase/supabase-js'
import type { Product, Vendor, CollectionPoint, Order, CartItem } from '@/types/market'

// Lazy initializers — never called at module-load time so build doesn't need env vars
const getClient = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

export const supabaseAdmin = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

// Products
export async function getProducts(opts: {
  category?: string
  vendorSlug?: string
  featured?: boolean
  limit?: number
  offset?: number
  search?: string
} = {}): Promise<Product[]> {
  const db = getClient()
  let q = db
    .from('products')
    .select('*, vendor:vendors(id,store_name,slug,trust_score,trust_tier,city,state)')
    .eq('is_active', true)

  if (opts.category) q = q.eq('category', opts.category)
  if (opts.featured) q = q.eq('is_featured', true)
  if (opts.search) q = q.ilike('name', `%${opts.search}%`)
  if (opts.limit) q = q.limit(opts.limit)
  if (opts.offset) q = q.range(opts.offset, opts.offset + (opts.limit ?? 20) - 1)

  if (opts.vendorSlug) {
    const { data: vendor } = await db
      .from('vendors')
      .select('id')
      .eq('slug', opts.vendorSlug)
      .single()
    if (vendor) q = q.eq('vendor_id', vendor.id)
  }

  const { data, error } = await q.order('created_at', { ascending: false })
  if (error) throw error
  return (data ?? []) as unknown as Product[]
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await getClient()
    .from('products')
    .select('*, vendor:vendors(*), reviews:product_reviews(id,rating,title,body,verified_purchase,created_at,user_id)')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()
  if (error) return null
  return data as unknown as Product
}

// Vendors
export async function getVendors(opts: { category?: string; featured?: boolean } = {}): Promise<Vendor[]> {
  const db = getClient()
  let q = db.from('vendors').select('*').eq('is_active', true)
  if (opts.category) q = q.eq('category', opts.category)
  if (opts.featured) q = q.eq('is_featured', true)
  const { data, error } = await q.order('trust_score', { ascending: false })
  if (error) throw error
  return (data ?? []) as Vendor[]
}

export async function getVendorBySlug(slug: string): Promise<Vendor | null> {
  const { data, error } = await getClient()
    .from('vendors')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()
  if (error) return null
  return data as Vendor
}

// Collection points
export async function getCollectionPoints(): Promise<CollectionPoint[]> {
  const { data, error } = await getClient()
    .from('collection_points')
    .select('*')
    .eq('is_active', true)
    .order('name')
  if (error) throw error
  return (data ?? []) as CollectionPoint[]
}

// Market Orders — uses market_orders / market_order_items (separate from eats orders)
export async function getOrderByNumber(orderNumber: string, userId: string): Promise<Order | null> {
  const { data, error } = await getClient()
    .from('market_orders')
    .select('*, collection_point:collection_points(*), items:market_order_items(*, product:products(id,name,images,slug))')
    .eq('order_number', orderNumber)
    .eq('user_id', userId)
    .single()
  if (error) return null
  return data as unknown as Order
}

export async function getUserOrders(userId: string): Promise<Order[]> {
  const { data, error } = await getClient()
    .from('market_orders')
    .select('*, collection_point:collection_points(name,city), items:market_order_items(id,product_name,product_image,quantity,unit_price)')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data ?? []) as unknown as Order[]
}

// Create a market order (called from API route with service-role key)
export async function createOrder(payload: {
  user_id: string
  items: CartItem[]
  collection_point_id: string
  customer_name: string
  customer_email: string
  customer_phone: string
  notes?: string
  subtotal: number
  service_fee: number
  total: number
}): Promise<Order> {
  const admin = supabaseAdmin()

  const { data: orderNum } = await admin.rpc('generate_market_order_number')
  const collectionCode = Math.random().toString(36).substring(2, 8).toUpperCase()
  const deadline = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()

  const { data: order, error: orderError } = await admin
    .from('market_orders')
    .insert({
      order_number: orderNum,
      user_id: payload.user_id === 'guest' ? null : payload.user_id,
      status: 'pending_payment',
      subtotal: payload.subtotal,
      service_fee: payload.service_fee,
      total: payload.total,
      currency: 'NGN',
      collection_point_id: payload.collection_point_id,
      collection_code: collectionCode,
      collection_deadline: deadline,
      customer_name: payload.customer_name,
      customer_email: payload.customer_email,
      customer_phone: payload.customer_phone,
      notes: payload.notes ?? null,
    })
    .select()
    .single()

  if (orderError) throw orderError

  const orderItems = payload.items.map((item) => ({
    order_id: order.id,
    product_id: item.product_id,
    vendor_id: (item.product as any)?.vendor_id ?? null,
    quantity: item.quantity,
    unit_price: item.unit_price,
    total_price: item.unit_price * item.quantity,
    variant_selection: item.variant_selection,
    product_name: (item.product as any)?.name ?? '',
    product_image: (item.product as any)?.images?.[0] ?? null,
  }))

  const { error: itemsError } = await admin.from('market_order_items').insert(orderItems)
  if (itemsError) throw itemsError

  return order as Order
}
