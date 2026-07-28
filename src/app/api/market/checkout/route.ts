import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { createOrder, getCollectionPoints } from '@/lib/market/supabase'
import { buildPaystackReference } from '@/lib/market/paystack'

const SERVICE_FEE_RATE = 0.05

export async function GET(req: NextRequest) {
  const action = req.nextUrl.searchParams.get('action')
  if (action === 'points') {
    const points = await getCollectionPoints()
    return NextResponse.json({ points })
  }
  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { items, collection_point_id, customer_name, customer_email, customer_phone, notes } = body

    if (!items?.length || !collection_point_id || !customer_name || !customer_email || !customer_phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Get user from auth header (or allow guest)
    const authHeader = req.headers.get('authorization')
    let userId = 'guest'
    if (authHeader?.startsWith('Bearer ')) {
      const token = authHeader.slice(7)
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )
      const { data: { user } } = await supabase.auth.getUser(token)
      if (user) userId = user.id
    }

    // Fetch product prices server-side (don't trust client prices)
    const admin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    const productIds = items.map((i: any) => i.product_id)
    const { data: products, error: pErr } = await admin
      .from('products')
      .select('id, name, price, stock_status, vendor_id, images')
      .in('id', productIds)
    if (pErr) throw pErr

    const productMap = Object.fromEntries((products ?? []).map((p: any) => [p.id, p]))

    const cartItems = items.map((i: any) => {
      const product = productMap[i.product_id]
      if (!product) throw new Error(`Product ${i.product_id} not found`)
      if (product.stock_status === 'out_of_stock') throw new Error(`${product.name} is out of stock`)
      return {
        id: `${i.product_id}-${Date.now()}`,
        product_id: i.product_id,
        product: {
          ...product,
          vendor_id: product.vendor_id,
          images: product.images,
          name: product.name,
        },
        quantity: i.quantity,
        variant_selection: i.variant_selection ?? {},
        unit_price: product.price,
      }
    })

    const subtotal = cartItems.reduce((s: number, i: any) => s + i.unit_price * i.quantity, 0)
    const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE)
    const total = subtotal + serviceFee

    // Create order
    const order = await createOrder({
      user_id: userId,
      items: cartItems,
      collection_point_id,
      customer_name,
      customer_email,
      customer_phone,
      notes,
      subtotal,
      service_fee: serviceFee,
      total,
    })

    // Initiate Paystack payment
    const reference = buildPaystackReference(order.order_number)
    const baseUrl = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'

    const psRes = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: customer_email,
        amount: total * 100,
        reference,
        currency: 'NGN',
        callback_url: `${baseUrl}/market/checkout/success?order_number=${order.order_number}&reference=${reference}`,
        metadata: {
          order_id: order.id,
          order_number: order.order_number,
          custom_fields: [
            { display_name: 'Order Number', variable_name: 'order_number', value: order.order_number },
          ],
        },
      }),
    })

    const psData = await psRes.json()
    if (!psData.status) throw new Error(psData.message ?? 'Paystack error')

    // Store reference on order
    await admin.from('market_orders').update({ paystack_reference: reference }).eq('id', order.id)

    return NextResponse.json({
      order_number: order.order_number,
      authorization_url: psData.data.authorization_url,
      reference,
    })
  } catch (err: any) {
    console.error('Checkout error:', err)
    return NextResponse.json({ error: err.message ?? 'Internal error' }, { status: 500 })
  }
}
