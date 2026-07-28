'use client'
import type { TrustTier } from '@/types/market'

const tierConfig: Record<TrustTier, { label: string; color: string; bg: string }> = {
  new: { label: 'New Seller', color: '#907067', bg: '#f0eded' },
  rising: { label: 'Rising Star', color: '#286c1e', bg: '#c4eeaf' },
  trusted: { label: 'Trusted', color: '#705d00', bg: '#fde289' },
  elite: { label: 'Elite Vendor', color: '#b02f00', bg: '#ffdbd1' },
}

export function TrustScore({ score, tier }: { score: number; tier: TrustTier }) {
  const cfg = tierConfig[tier]
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 36 36" className="w-10 h-10 -rotate-90">
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e2e1" strokeWidth="3" />
          <circle
            cx="18" cy="18" r="15.9" fill="none"
            stroke={cfg.color} strokeWidth="3"
            strokeDasharray={`${score} ${100 - score}`}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold" style={{ color: cfg.color }}>
          {score}
        </span>
      </div>
      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ color: cfg.color, background: cfg.bg }}>
        {cfg.label}
      </span>
    </div>
  )
}
