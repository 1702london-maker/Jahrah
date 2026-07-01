export const metadata = { title: "Booking Confirmed | JAHRAH" }

const stitchHtml = `<!-- NAVIGATION SHELL SUPPRESSED FOR TRANSACTIONAL SUCCESS PAGE -->
<main class="min-h-screen flex flex-col items-center justify-center py-12 px-margin-mobile md:px-margin-desktop">
<!-- Animated Background Ornament -->
<div class="fixed inset-0 pointer-events-none overflow-hidden -z-10">

</div>
<div class="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
<!-- Success Icon -->
<div class="mb-8 fade-in-up">
<div class="w-32 h-32 rounded-full bg-secondary-container flex items-center justify-center text-secondary relative">
<svg class="w-16 h-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewbox="0 0 24 24">
<polyline class="success-checkmark-draw" points="20 6 9 17 4 12"></polyline>
</svg>
<!-- Decorative Ring -->
<div class="absolute inset-0 border-4 border-secondary/20 rounded-full animate-ping"></div>
</div>
</div>
<!-- Confirmed Header -->
<div class="fade-in-up delay-1">
<h1 class="font-headline-lg text-headline-lg text-primary mb-2">You're booked, Chidi!</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">Your lifestyle experience is confirmed and weâ€™ve notified your professional.</p>
</div>
<!-- Summary Card -->
<div class="w-full mt-12 bg-surface-container rounded-xl p-8 md:p-10 shadow-sm text-left fade-in-up delay-2 border border-outline-variant/30">
<div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-outline-variant pb-6 mb-6">
<div>
<h2 class="font-headline-md text-headline-md mb-1">Your summary</h2>
<p class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">REF #JAHRAH-2025-00847</p>
</div>
<div class="mt-4 md:mt-0 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-label-lg">
                        Payment Successful
                    </div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
<div class="flex items-start gap-4">
<div class="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-primary">calendar_today</span>
</div>
<div>
<p class="font-label-lg text-label-lg text-on-surface-variant">Date &amp; Time</p>
<p class="font-body-md font-bold mt-1">Saturday, April 12, 2025</p>
<p class="font-body-md text-on-surface-variant">10:00 AM â€” 1:00 PM</p>
</div>
</div>
<div class="flex items-start gap-4">
<div class="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-primary">location_on</span>
</div>
<div>
<p class="font-label-lg text-label-lg text-on-surface-variant">Address</p>
<p class="font-body-md font-bold mt-1">15 Ikoyi Crescent, Ikoyi</p>
<p class="font-body-md text-on-surface-variant">Lagos, Nigeria</p>
</div>
</div>
</div>
<div class="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-surface rounded-lg border border-outline-variant/20">
<div class="flex items-center gap-4 w-full">
<div class="relative w-16 h-16">
<img class="w-full h-full object-cover rounded-full" data-alt="A professional headshot of a premium lifestyle service provider in Lagos, Nigeria. The lighting is warm and cinematic, reflecting the brand's luxury African heritage. The individual is dressed in modern, sophisticated attire against a minimalist studio background with subtle terracotta accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhwmg0BzQS3dsxflgifKBVGFkoaqVczKds0xB4hNhHr0JjaAPDxF3wa1iIFOYf0igA51r6iDXFX3bzCa41m1g7wTmkY7Qwj6A5qXEo9m2tDXZ94r5JjMRVZffrrRouEKtS4QS4A_eLwZWtFsFzTEWuVDpnAUVfoLHRSKmORAXCMXd2jMAHcbRdECcvGwxwed-SD8IZG3E7Uy30rlNYwceL8ck-20MuL4yC0KjdMWMWYmObMWwxYuf2eU_i5ij8wXA6sZRQVSrP5t0"/>
<div class="absolute -bottom-1 -right-1 w-6 h-6 bg-gold-leaf rounded-full flex items-center justify-center border-2 border-surface">
<span class="material-symbols-outlined text-[14px] text-on-background" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
</div>
<div class="text-left">
<p class="font-label-lg text-label-lg text-on-surface-variant">Service Professional</p>
<p class="font-body-md font-bold">Kemi Adeyemi</p>
<p class="font-body-md text-on-surface-variant">Certified Glow Specialist</p>
</div>
</div>
<div class="w-full md:w-auto text-right md:text-right border-t md:border-t-0 md:border-l border-outline-variant pt-4 md:pt-0 md:pl-8">
<p class="font-label-lg text-label-lg text-on-surface-variant">Total Paid</p>
<p class="font-price-display text-price-display text-primary mt-1">â‚¦ 135,000</p>
</div>
</div>
</div>
<!-- Next Steps -->
<div class="w-full mt-16 text-left fade-in-up delay-3">
<h3 class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest mb-6 px-2">What happens next</h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="flex gap-4 p-2">
<div class="flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold">1</div>
<div>
<p class="font-body-md font-bold">Check WhatsApp</p>
<p class="font-body-md text-on-surface-variant text-sm mt-1">We've sent a detailed confirmation and receipt to your linked phone number.</p>
</div>
</div>
<div class="flex gap-4 p-2">
<div class="flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold">2</div>
<div>
<p class="font-body-md font-bold">Pro Notified</p>
<p class="font-body-md text-on-surface-variant text-sm mt-1">Kemi has received your booking and will reach out to confirm arrival details.</p>
</div>
</div>
<div class="flex gap-4 p-2">
<div class="flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold">3</div>
<div>
<p class="font-body-md font-bold">Track Activity</p>
<p class="font-body-md text-on-surface-variant text-sm mt-1">Monitor your service progress and manage dates in the 'My JAHRAH' dashboard.</p>
</div>
</div>
</div>
</div>
<!-- Actions -->
<div class="w-full mt-16 flex flex-col md:flex-row gap-4 justify-center items-center fade-in-up delay-3">
<button class="w-full md:w-auto h-[56px] px-8 bg-sunset-orange text-white rounded-lg font-label-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined">calendar_add_on</span>
                    Add to Calendar
                </button>
<button class="w-full md:w-auto h-[56px] px-8 border-2 border-secondary text-secondary rounded-lg font-label-lg hover:bg-secondary/5 active:scale-95 transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined">share</span>
                    Share Booking
                </button>
</div>
<!-- Tertiary Links -->
<div class="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 fade-in-up delay-3">
<a class="font-label-lg text-primary hover:underline flex items-center gap-2" href="#">
                    View My Bookings
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
<a class="font-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">
                    Back to Home
                </a>
</div>
</div>
</main>
<!-- Footer from JSON -->
<footer class="bg-surface-container dark:bg-surface-container-highest mt-section-gap">
<div class="grid grid-cols-2 md:grid-cols-5 gap-gutter px-margin-desktop py-section-gap max-w-container-max mx-auto">
<div class="col-span-2 md:col-span-1">
<span class="font-headline-md text-headline-md font-bold text-primary">JAHRAH</span>
<p class="font-body-md text-on-surface-variant mt-4 max-w-xs">Elevating African lifestyle through premium stays, experiences, and professional services.</p>
</div>
<div class="flex flex-col gap-4">
<p class="font-label-lg text-on-surface font-bold uppercase tracking-wider mb-2">Company</p>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/about">About</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/story">Story</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/careers">Careers</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Blog</a>
</div>
<div class="flex flex-col gap-4">
<p class="font-label-lg text-on-surface font-bold uppercase tracking-wider mb-2">Services</p>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/stays">Stays</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/glow">Glow</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/eats">Eats</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/market">Market</a>
</div>
<div class="flex flex-col gap-4">
<p class="font-label-lg text-on-surface font-bold uppercase tracking-wider mb-2">For Pros</p>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/pro-onboarding">Become a Pro</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/pro-dashboard">Pro Dashboard</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Host Your Space</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Success Stories</a>
</div>
<div class="flex flex-col gap-4">
<p class="font-label-lg text-on-surface font-bold uppercase tracking-wider mb-2">Support</p>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/help">Help Centre</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/safety">Safety Centre</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Trust &amp; Verification</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/cancellation">Cancellation Policy</a>
</div>
</div>
<div class="px-margin-desktop py-8 border-t border-outline-variant/30 max-w-container-max mx-auto text-center md:text-left">
<p class="font-body-md text-on-surface-variant opacity-80">Â© 2024 JAHRAH. All rights reserved. Nigeria | Ghana | Kenya | South Africa | â‚¦ NGN</p>
<div class="flex flex-wrap gap-4 mt-4 md:mt-2 justify-center md:justify-start">
<a class="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/privacy">Privacy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Terms</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Cookie Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Sitemap</a>
</div>
</div>
</footer>
<script>
        // Simple micro-interaction for buttons
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function(e) {
                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;
                let ripples = document.createElement('span');
                ripples.style.left = x + 'px';
                ripples.style.top = y + 'px';
                this.appendChild(ripples);
                setTimeout(() => { ripples.remove() }, 1000);
            });
        });

        // Background Atmosphere Shift
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const opacity = Math.max(0.1, 0.1 + scrolled / 1000);
            const bg = document.querySelector('webgl-shader');
            if (bg) bg.style.opacity = opacity;
        });
    </script>`

export default function BookingConfirmedPage() {
  return <div dangerouslySetInnerHTML={{ __html: stitchHtml }} />
}

