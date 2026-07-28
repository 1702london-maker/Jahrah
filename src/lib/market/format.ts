export function formatPrice(amount: number, currency = 'NGN'): string {
  if (currency === 'NGN') {
    return '₦' + amount.toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
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
