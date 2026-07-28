import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const admin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await admin.from('vendor_applications').insert({
      email: body.email,
      store_name: body.store_name,
      description: body.description || null,
      category: body.category,
      product_types: body.product_types || null,
      monthly_volume: body.monthly_volume || null,
      has_cac: body.has_cac ?? false,
      cac_number: body.cac_number || null,
      id_type: body.id_type || null,
      id_number: body.id_number || null,
      phone: body.phone || null,
      whatsapp: body.whatsapp || null,
      city: body.city || null,
      state: body.state || null,
      status: 'submitted',
    })

    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? 'Submission failed' }, { status: 500 })
  }
}
