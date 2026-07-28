import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { validatePaystackWebhookSignature } from '@/lib/market/paystack'

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const signature = req.headers.get('x-paystack-signature') ?? ''

    if (!validatePaystackWebhookSignature(body, signature)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const event = JSON.parse(body)
    const admin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    if (event.event === 'charge.success') {
      const reference = event.data.reference
      const transactionId = String(event.data.id)

      // Find order by reference
      const { data: order, error } = await admin
        .from('market_orders')
        .select('id, status, items:market_order_items(product_id, vendor_id, quantity)')
        .eq('paystack_reference', reference)
        .single()

      if (error || !order) {
        console.error('Order not found for reference:', reference)
        return NextResponse.json({ received: true })
      }

      if (order.status === 'pending_payment') {
        await admin.from('market_orders').update({
          status: 'payment_confirmed',
          paystack_transaction_id: transactionId,
        }).eq('id', order.id)

        // Update vendor stats
        for (const item of (order as any).items ?? []) {
          await admin.rpc('update_vendor_sales', {
            vendor_id_input: item.vendor_id,
            qty: item.quantity,
          }).catch(() => null)
        }
      }
    }

    if (event.event === 'charge.failed') {
      const reference = event.data.reference
      await admin.from('market_orders').update({ status: 'cancelled' }).eq('paystack_reference', reference).eq('status', 'pending_payment')
    }

    return NextResponse.json({ received: true })
  } catch (err: any) {
    console.error('Webhook error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
