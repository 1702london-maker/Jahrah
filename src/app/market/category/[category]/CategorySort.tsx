'use client'
import { useRouter, usePathname } from 'next/navigation'

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
]

export function CategorySort({ current }: { current: string }) {
  const router = useRouter()
  const pathname = usePathname()

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.push(`${pathname}?sort=${e.target.value}`)
  }

  return (
    <select
      value={current}
      onChange={handleChange}
      className="px-3 py-2 rounded-xl border-2 border-outline-variant bg-surface text-on-surface text-sm font-semibold outline-none focus:border-primary cursor-pointer"
    >
      {SORT_OPTIONS.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  )
}
