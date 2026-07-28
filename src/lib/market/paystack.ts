export function getPaystackPublicKey(): string {
  return process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? ''
}

export function buildPaystackReference(orderNumber: string): string {
  return `JAHRAH-${orderNumber}-${Date.now()}`
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
  const crypto = require('crypto')
  const hash = crypto
    .createHmac('sha512', process.env.PAYSTACK_WEBHOOK_SECRET ?? '')
    .update(body)
    .digest('hex')
  return hash === signature
}
