'use client'
import { useState } from 'react'

export function ImageGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square rounded-3xl overflow-hidden bg-surface-container flex items-center justify-center">
        <span className="material-symbols-outlined text-8xl text-outline">shopping_bag</span>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="aspect-square rounded-3xl overflow-hidden bg-surface-container relative">
        <img
          src={images[active]}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-200"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActive((a) => (a - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface/80 backdrop-blur flex items-center justify-center shadow-md hover:bg-surface transition-colors"
            >
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <button
              onClick={() => setActive((a) => (a + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface/80 backdrop-blur flex items-center justify-center shadow-md hover:bg-surface transition-colors"
            >
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: active === i ? 20 : 6,
                    height: 6,
                    background: active === i ? '#b02f00' : 'rgba(255,255,255,0.6)',
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all"
              style={{ borderColor: active === i ? '#b02f00' : 'transparent', opacity: active === i ? 1 : 0.65 }}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
