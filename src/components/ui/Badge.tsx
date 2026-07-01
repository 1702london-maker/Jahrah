interface BadgeProps {
  variant?: 'superhost' | 'elite' | 'toprated' | 'verified' | 'available' | 'sale' | 'featured' | 'new'
  children: React.ReactNode
  className?: string
}

export function Badge({ variant = 'featured', children, className = '' }: BadgeProps) {
  const styles: Record<string, string> = {
    superhost: 'bg-gold-leaf text-on-surface text-[11px] font-bold px-2 py-0.5 rounded-full',
    elite:     'bg-gold-leaf text-on-surface text-[11px] font-bold px-2 py-0.5 rounded-full',
    toprated:  'bg-secondary text-on-secondary text-[11px] font-bold px-2 py-0.5 rounded-full',
    verified:  'border border-secondary text-secondary text-[11px] font-semibold px-2 py-0.5 rounded-full',
    available: 'bg-secondary-container text-on-secondary-container text-[11px] font-semibold px-2 py-0.5 rounded-full',
    sale:      'bg-error text-on-error text-[11px] font-bold px-2 py-0.5 rounded-full',
    featured:  'bg-primary text-on-primary text-[11px] font-bold px-2 py-0.5 rounded-full',
    new:       'bg-royal-indigo text-white text-[11px] font-bold px-2 py-0.5 rounded-full',
  }
  return <span className={`${styles[variant]} ${className}`}>{children}</span>
}
