'use client'
import type { CollectionPoint } from '@/types/market'

function HoursBadge({ is24hr }: { is24hr?: boolean }) {
  if (!is24hr) return null
  return (
    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full"
      style={{ background: '#c4eeaf', color: '#0e4808' }}>
      24hr
    </span>
  )
}

export function CollectionPointSelector({
  points,
  selectedId,
  onChange,
}: {
  points: CollectionPoint[]
  selectedId: string
  onChange: (id: string) => void
}) {
  if (!points.length) {
    return (
      <p className="text-on-surface-variant text-sm py-8 text-center">
        No collection points available right now.
      </p>
    )
  }

  return (
    <div className="space-y-3">
      {points.map((point) => {
        const selected = selectedId === point.id
        const hours = point.opening_hours as Record<string, string> | null
        const is24hr = hours ? Object.values(hours).some(h => h === '24hr' || h === '00:00-23:59') : false

        return (
          <button
            key={point.id}
            type="button"
            onClick={() => onChange(point.id)}
            className="w-full text-left flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all"
            style={{
              borderColor: selected ? '#b02f00' : '#e4beb4',
              background: selected ? '#ffdbd1' : 'var(--md-sys-color-surface-container-low, #fcf9f8)',
            }}>
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ borderColor: selected ? '#b02f00' : '#aaa' }}>
              {selected && <div className="w-2.5 h-2.5 rounded-full bg-[#b02f00]" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="font-semibold text-sm">{point.name}</p>
                <HoursBadge is24hr={is24hr} />
              </div>
              <p className="text-xs text-on-surface-variant">{point.address}, {point.city}</p>
              {(point as any).landmark && (
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Near: {(point as any).landmark}
                </p>
              )}
              {hours && (
                <p className="text-xs text-on-surface-variant mt-1">
                  <span className="material-symbols-outlined text-xs align-middle mr-0.5">schedule</span>
                  {hours['monday'] ?? hours['weekdays'] ?? 'See details'}
                </p>
              )}
              {point.phone && (
                <p className="text-xs text-on-surface-variant mt-0.5">
                  <span className="material-symbols-outlined text-xs align-middle mr-0.5">phone</span>
                  {point.phone}
                </p>
              )}
            </div>
            {selected && (
              <span className="material-symbols-outlined text-[#b02f00] text-xl flex-shrink-0">check_circle</span>
            )}
          </button>
        )
      })}
    </div>
  )
}
