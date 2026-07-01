import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'indigo'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-label-lg text-label-lg rounded-full transition-all cursor-pointer active:scale-95'
  const sizes = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-10 py-5',
  }
  const variants = {
    primary: 'bg-primary text-on-primary hover:bg-terracotta-clay',
    secondary: 'bg-secondary text-on-secondary hover:bg-forest-deep',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-on-primary',
    ghost: 'text-primary hover:underline',
    indigo: 'bg-royal-indigo text-white hover:bg-indigo-700',
  }
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
