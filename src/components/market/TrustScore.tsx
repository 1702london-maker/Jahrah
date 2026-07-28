'use client'

const scoreColor = (score: number) => {
  if (score >= 90) return '#286c1e'
  if (score >= 75) return '#1565C0'
  if (score >= 60) return '#E65100'
  return '#907067'
}

const scoreLabel = (score: number) => {
  if (score >= 90) return 'Elite'
  if (score >= 75) return 'Trusted'
  if (score >= 60) return 'Rising'
  return 'New'
}

const SIZE: Record<string, number> = { sm: 24, md: 40, lg: 64 }

export function TrustScore({
  score,
  tier,
  size = 'md',
}: {
  score: number
  tier?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const px = SIZE[size]
  const r = 15.9
  const circumference = 2 * Math.PI * r
  const filled = (score / 100) * circumference
  const gap = circumference - filled
  const color = scoreColor(score)
  const label = tier ? String(tier).replace(/_/g, ' ') : scoreLabel(score)

  if (size === 'sm') {
    return (
      <svg width={px} height={px} viewBox="0 0 36 36" className="-rotate-90 flex-shrink-0">
        <circle cx="18" cy="18" r={r} fill="none" stroke="#e5e2e1" strokeWidth="4" />
        <circle cx="18" cy="18" r={r} fill="none" stroke={color} strokeWidth="4"
          strokeDasharray={`${filled} ${gap}`} strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-shrink-0" style={{ width: px, height: px }}>
        <svg width={px} height={px} viewBox="0 0 36 36" className="-rotate-90">
          <circle cx="18" cy="18" r={r} fill="none" stroke="#e5e2e1" strokeWidth="4" />
          <circle cx="18" cy="18" r={r} fill="none" stroke={color} strokeWidth="4"
            strokeDasharray={`${filled} ${gap}`} strokeLinecap="round" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-bold"
          style={{ color, fontSize: size === 'lg' ? 14 : 10 }}>
          {score}
        </span>
      </div>
      <span className="text-xs font-semibold px-2 py-0.5 rounded-full capitalize"
        style={{ color, background: color + '22' }}>
        {label}
      </span>
    </div>
  )
}
