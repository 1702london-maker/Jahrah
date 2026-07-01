import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-surface-container">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-gutter mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-headline-md text-headline-md font-bold text-primary mb-6">JAHRAH</div>
            <p className="font-body-md text-on-surface-variant text-body-md">
              The cultural leader in lifestyle and professional services across the continent.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-label-lg text-label-lg mb-6 uppercase tracking-wider text-primary">Company</h4>
            <ul className="space-y-4">
              {['About', 'Story', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-label-lg text-label-lg mb-6 uppercase tracking-wider text-primary">Services</h4>
            <ul className="space-y-4">
              {[
                { label: 'Stays', href: '/stays' },
                { label: 'Ride', href: '/ride' },
                { label: 'Eats', href: '/eats' },
                { label: 'Fix', href: '/fix' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pros */}
          <div>
            <h4 className="font-label-lg text-label-lg mb-6 uppercase tracking-wider text-primary">Pros</h4>
            <ul className="space-y-4">
              {[
                { label: 'Become a Pro', href: '/pro-onboarding' },
                { label: 'Pro Dashboard', href: '/pro-dashboard' },
                { label: 'Pro Academy', href: '#' },
                { label: 'Partner', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-label-lg text-label-lg mb-6 uppercase tracking-wider text-primary">Support</h4>
            <ul className="space-y-4">
              {['Help Centre', 'Safety Centre', 'Cancellation Policy', 'Privacy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body-md text-on-surface-variant text-sm text-center md:text-left">
            © 2024 JAHRAH. All rights reserved. Nigeria | Ghana | Kenya | South Africa | ₦ NGN
          </p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">language</span>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">share</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
