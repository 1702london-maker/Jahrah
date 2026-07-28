import type { FulfilmentType } from '@/types/market'
import { getFulfilmentConfig } from '@/lib/market/fulfilment'

export function FulfilmentBadge({ type }: { type: FulfilmentType }) {
  const cfg = getFulfilmentConfig(type)
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{ background: cfg.bgColor, color: cfg.textColor }}
    >
      <span className="material-symbols-outlined text-[14px]">{cfg.icon}</span>
      {cfg.shortLabel}
    </span>
  )
}
