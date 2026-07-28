import type { FulfilmentType } from '@/types/market'

export function formatPrice(amount: number, currency = 'NGN'): string {
  if (currency === 'NGN') {
    const formatted = Math.round(amount).toLocaleString('en-NG', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    return '₦ ' + formatted
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount)
}

export function formatSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function formatDeliveryLabel(type: FulfilmentType, deliveryDaysMin?: number | null, deliveryDaysMax?: number | null): string {
  if (type === 'warehouse') return 'Ready to ship'
  if (type === 'express') return 'Express — ships today'
  if (type === 'sourced') {
    if (deliveryDaysMin && deliveryDaysMax) return `${deliveryDaysMin}–${deliveryDaysMax} days`
    if (deliveryDaysMin) return `From ${deliveryDaysMin} days`
    return '7–14 days'
  }
  if (type === 'vendor_ships') {
    if (deliveryDaysMin && deliveryDaysMax) return `${deliveryDaysMin}–${deliveryDaysMax} days`
    return 'Ships from seller'
  }
  return 'See details'
}

export function formatOrderNumber(): string {
  const year = new Date().getFullYear()
  const rand = Math.floor(100000 + Math.random() * 900000)
  return `JHR-${year}-${rand}`
}

export function formatCollectionCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = 'JHR-'
  for (let i = 0; i < 4; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

export function formatOrderStatus(status: string): string {
  const map: Record<string, string> = {
    pending_payment: 'Awaiting Payment',
    payment_confirmed: 'Payment Confirmed',
    processing: 'Processing',
    ready_for_collection: 'Ready for Collection',
    collected: 'Collected',
    cancelled: 'Cancelled',
    refunded: 'Refunded',
  }
  return map[status] ?? status
}

export function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 30) return `${days} days ago`
  if (days < 365) return `${Math.floor(days / 30)} months ago`
  return `${Math.floor(days / 365)} years ago`
}

export function truncate(text: string, max: number): string {
  return text.length > max ? text.slice(0, max) + '…' : text
}
