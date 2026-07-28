'use client'
import type { CollectionPoint } from '@/types/market'

export function CollectionPointSelector({
  points,
  selectedId,
  onChange,
}: {
  points: CollectionPoint[]
  selectedId: string
  onChange: (id: string) => void
}) {
  return (
    <div className="space-y-3">
      {points.map((point) => (
        <label
          key={point.id}
          className="flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all"
          style={{
            borderColor: selectedId === point.id ? '#b02f00' : '#e4beb4',
            background: selectedId === point.id ? '#ffdbd1' : '#fcf9f8',
          }}
        >
          <input
            type="radio"
            name="collection_point"
            value={point.id}
            checked={selectedId === point.id}
            onChange={() => onChange(point.id)}
            className="mt-0.5 accent-primary"
          />
          <div className="flex-1">
            <p className="font-semibold text-sm">{point.name}</p>
            <p className="text-xs text-on-surface-variant mt-0.5">{point.address}, {point.city}</p>
            {point.phone && (
              <p className="text-xs text-on-surface-variant mt-0.5">
                <span className="material-symbols-outlined text-xs align-middle mr-0.5">phone</span>
                {point.phone}
              </p>
            )}
          </div>
          {selectedId === point.id && (
            <span className="material-symbols-outlined text-primary text-lg flex-shrink-0">check_circle</span>
          )}
        </label>
      ))}
    </div>
  )
}
