import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/stitch/homepage.html' },
        { source: '/stays', destination: '/stitch/stays.html' },
        { source: '/stays/:id', destination: '/stitch/stays-detail.html' },
        { source: '/ride', destination: '/stitch/ride.html' },
        { source: '/eats', destination: '/stitch/eats.html' },
        { source: '/fix', destination: '/stitch/fix.html' },
        { source: '/glow', destination: '/stitch/glow.html' },
        { source: '/events', destination: '/stitch/events.html' },
        { source: '/market', destination: '/stitch/market.html' },
        { source: '/mobile', destination: '/stitch/mobile.html' },
        { source: '/dashboard', destination: '/stitch/dashboard.html' },
        { source: '/pro-dashboard', destination: '/stitch/pro-dashboard.html' },
        { source: '/pro-onboarding', destination: '/stitch/pro-onboarding.html' },
        { source: '/pro/:id', destination: '/stitch/pro-detail.html' },
        { source: '/booking-confirmed', destination: '/stitch/booking-confirmed.html' },
      ],
    }
  },
}

export default nextConfig
