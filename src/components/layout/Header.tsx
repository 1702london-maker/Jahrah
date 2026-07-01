'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Stays', href: '/stays' },
  { label: 'Ride', href: '/ride' },
  { label: 'Eats', href: '/eats' },
  { label: 'Fix', href: '/fix' },
  { label: 'Glow', href: '/glow' },
  { label: 'Events', href: '/events' },
  { label: 'Market', href: '/market' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="bg-surface shadow-sm sticky top-0 z-50">
        <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-container-max mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
              JAHRAH
            </Link>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">location_on</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">notifications</span>
            </div>
            <Link
              href="/pro-onboarding"
              className="hidden lg:block text-primary font-label-lg text-label-lg hover:underline transition-all"
            >
              List your space
            </Link>
            <Link
              href="/dashboard"
              className="hidden md:block bg-primary text-on-primary px-5 py-2 rounded-full font-label-lg text-label-lg hover:bg-terracotta-clay transition-colors"
            >
              Sign in
            </Link>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-surface-container transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-on-surface">menu</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="relative bg-surface w-72 h-full shadow-2xl flex flex-col p-6 z-10">
            <div className="flex justify-between items-center mb-8">
              <span className="font-headline-md text-headline-md font-bold text-primary">JAHRAH</span>
              <button onClick={() => setMobileOpen(false)} className="p-2">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-on-surface font-label-lg text-label-lg py-2 border-b border-outline-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <Link
                href="/pro-onboarding"
                onClick={() => setMobileOpen(false)}
                className="text-center border border-primary text-primary px-5 py-3 rounded-full font-label-lg text-label-lg"
              >
                Become a Pro
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="text-center bg-primary text-on-primary px-5 py-3 rounded-full font-label-lg text-label-lg"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
