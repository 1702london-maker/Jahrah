import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { verifyPaystackTransaction } from '@/lib/market/paystack'

export async function GET(req: NextRequest) {
  const reference = req.nextUrl.searchParams.get('reference')
  const orderNumber = req.nextUrl.searchParams.get('order_number')

  if (!reference || !orderNumber) {
    return NextResponse.json({ error: 'Missing reference or order_number' }, { status: 400 })
  }

  try {
    const admin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Get order from DB
    const { data: order, error } = await admin
      .from('market_orders')
      .select('id, status, total, paystack_reference')
      .eq('order_number', orderNumber)
      .single()

    if (error || !order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }

    // If already confirmed by webhook, return success
    if (order.status !== 'pending_payment') {
      return NextResponse.json({ verified: true, status: order.status })
    }

    // Verify with Paystack
    const result = await verifyPaystackTransaction(reference)

    if (result.status === 'success') {
      await admin
        .from('market_orders')
        .update({ status: 'payment_confirmed' })
        .eq('id', order.id)
        .eq('status', 'pending_payment')

      return NextResponse.json({ verified: true, status: 'payment_confirmed' })
    }

    return NextResponse.json({ verified: false, status: result.status })
  } catch (err: any) {
    console.error('Verify error:', err)
    return NextResponse.json({ error: err.message ?? 'Verification failed' }, { status: 500 })
  }
}
