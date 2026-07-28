import crypto from 'crypto'

export function getPaystackPublicKey(): string {
  return process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? ''
}

export function formatPaystackAmount(naira: number): number {
  return Math.round(naira * 100)
}

export function buildPaystackReference(orderNumber: string): string {
  return `JAHRAH-${orderNumber}-${Date.now()}`
}

export async function initializeTransaction(opts: {
  email: string
  amountNaira: number
  reference: string
  metadata?: Record<string, unknown>
  callbackUrl?: string
}): Promise<{ authorization_url: string; access_code: string; reference: string }> {
  const res = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: opts.email,
      amount: formatPaystackAmount(opts.amountNaira),
      reference: opts.reference,
      callback_url: opts.callbackUrl ?? `${process.env.NEXT_PUBLIC_URL}/market/checkout/success`,
      metadata: opts.metadata ?? {},
    }),
  })
  const data = await res.json()
  if (!data.status) throw new Error(data.message ?? 'Paystack initialization failed')
  return {
    authorization_url: data.data.authorization_url,
    access_code: data.data.access_code,
    reference: data.data.reference,
  }
}

export async function verifyPaystackTransaction(reference: string): Promise<{
  status: string
  amount: number
  currency: string
  metadata: Record<string, unknown>
}> {
  const res = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    },
  })
  const data = await res.json()
  if (!data.status) throw new Error(data.message ?? 'Paystack verification failed')
  return {
    status: data.data.status,
    amount: data.data.amount / 100,
    currency: data.data.currency,
    metadata: data.data.metadata ?? {},
  }
}

export function validatePaystackWebhookSignature(body: string, signature: string): boolean {
  const hash = crypto
    .createHmac('sha512', process.env.PAYSTACK_WEBHOOK_SECRET ?? '')
    .update(body)
    .digest('hex')
  return hash === signature
}
