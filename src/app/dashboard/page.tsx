export const metadata = { title: "My JAHRAH â€” User Dashboard" }

const stitchHtml = `<!-- TopNavBar from Shared Components -->
<header class="bg-surface dark:bg-surface-dim shadow-sm docked full-width top-0 sticky z-50">
<nav class="flex justify-between items-center px-margin-desktop py-4 w-full max-w-container-max mx-auto">
<div class="flex items-center gap-8">
<span class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">JAHRAH</span>
<div class="hidden md:flex gap-6">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/stays">Stays</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/ride">Ride</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/eats">Eats</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/fix">Fix</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/glow">Glow</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/events">Events</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/market">Market</a>
</div>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">location_on</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">notifications</span>
<div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed shadow-sm">
<img class="w-full h-full object-cover" data-alt="A sophisticated close-up portrait of Chioma, a young Nigerian woman with elegant braided hair, smiling warmly. She is wearing a modern silk scarf with vibrant African patterns. The lighting is soft and golden, characteristic of a high-end lifestyle photography shoot, set against a blurred, minimalist architectural background in Lagos." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMRWRnJ3f8QdNlm7_ivt6yTjOZW92J2tSuV5w48PtXL9fITFwiyV1H5NTWTPSKYsADW-WPJcIWRfHdgN_1MZl39sAPUY__p72mp9REwCGUmLy8_wcWveG4B8NHvcGxZkLF_pMQ2QtiC4O9on8ugV4QgMI-lo4W3uFTqIekqn1n2TI-ruWgSoz2-g1c71zog3pGnxMlbPFguEQCObF0OkrbOUq06pt4w6hPSGH3wpvVjmoRapc0Hlg72Bq97JOAQQwZQU_hpS6BOJk"/>
</div>
</div>
</nav>
</header>
<div class="flex max-w-container-max mx-auto px-margin-desktop min-h-screen pt-8">
<!-- Sidebar Navigation -->
<aside class="w-64 flex-shrink-0 hidden md:block">
<div class="space-y-2 sticky top-28">
<a class="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-container text-on-primary-container font-bold transition-all" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">calendar_today</span>
<span class="font-label-lg">My Bookings</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined">home_work</span>
<span class="font-label-lg">My Stays (Host)</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined">account_balance_wallet</span>
<div class="flex flex-col">
<span class="font-label-lg">JAHRAH Wallet</span>
<span class="text-xs text-primary font-bold">â‚¦ 12,500</span>
</div>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined">star</span>
<span class="font-label-lg">My Reviews</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined">group_add</span>
<span class="font-label-lg">Referrals</span>
</a>
<div class="pt-8 border-t border-outline-variant mt-8">
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-lg">Settings</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span class="material-symbols-outlined">help</span>
<span class="font-label-lg">Help</span>
</a>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-grow md:pl-12 pb-20">
<!-- Header Section -->
<section class="mb-12">
<div class="flex justify-between items-end">
<div>
<h1 class="font-headline-lg text-headline-lg text-on-surface mb-1">Good morning, Chioma ðŸ‘‹</h1>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-sm">location_on</span>
<span class="font-label-lg">Lagos, Nigeria</span>
</div>
</div>
<div class="hidden lg:flex items-center gap-4 bg-terracotta-clay text-white px-6 py-4 rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform">
<span class="material-symbols-outlined">bolt</span>
<div>
<p class="text-[10px] uppercase tracking-wider font-bold opacity-80">Quick Recharge</p>
<p class="font-label-lg">Add to Wallet</p>
</div>
</div>
</div>
</section>
<!-- Quick Action Icons -->
<section class="mb-section-gap">
<div class="grid grid-cols-2 md:grid-cols-5 gap-4">
<button class="flex flex-col items-center justify-center p-6 rounded-xl bg-surface-container border border-outline-variant hover:bg-white hover:shadow-xl hover:border-sunset-orange transition-all group">
<span class="material-symbols-outlined text-4xl mb-3 text-primary group-hover:scale-110 transition-transform">bed</span>
<span class="font-label-lg text-on-surface">Book a Stay</span>
</button>
<button class="flex flex-col items-center justify-center p-6 rounded-xl bg-surface-container border border-outline-variant hover:bg-white hover:shadow-xl hover:border-sunset-orange transition-all group">
<span class="material-symbols-outlined text-4xl mb-3 text-primary group-hover:scale-110 transition-transform">directions_car</span>
<span class="font-label-lg text-on-surface">Get a Ride</span>
</button>
<button class="flex flex-col items-center justify-center p-6 rounded-xl bg-surface-container border border-outline-variant hover:bg-white hover:shadow-xl hover:border-sunset-orange transition-all group">
<span class="material-symbols-outlined text-4xl mb-3 text-primary group-hover:scale-110 transition-transform">restaurant</span>
<span class="font-label-lg text-on-surface">Order Food</span>
</button>
<button class="flex flex-col items-center justify-center p-6 rounded-xl bg-surface-container border border-outline-variant hover:bg-white hover:shadow-xl hover:border-sunset-orange transition-all group">
<span class="material-symbols-outlined text-4xl mb-3 text-primary group-hover:scale-110 transition-transform">handyman</span>
<span class="font-label-lg text-on-surface">Fix Something</span>
</button>
<button class="flex flex-col items-center justify-center p-6 rounded-xl bg-surface-container border border-outline-variant hover:bg-white hover:shadow-xl hover:border-sunset-orange transition-all group col-span-2 md:col-span-1">
<span class="material-symbols-outlined text-4xl mb-3 text-primary group-hover:scale-110 transition-transform">verified</span>
<span class="font-label-lg text-on-surface">Book a Pro</span>
</button>
</div>
</section>
<!-- Upcoming Bookings Timeline -->
<section class="mb-section-gap">
<h2 class="font-headline-md text-headline-md text-on-surface mb-6">Your Upcoming Bookings</h2>
<div class="space-y-4">
<!-- Booking 1 -->
<div class="flex items-start gap-6 p-6 rounded-xl border border-outline-variant bg-white shadow-sm hover:shadow-md transition-all">
<div class="w-14 h-14 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">hotel</span>
</div>
<div class="flex-grow">
<div class="flex justify-between items-start mb-2">
<div>
<h3 class="font-bold text-lg text-on-surface">The Ikoyi Sanctuary - Penthouse</h3>
<p class="text-on-surface-variant font-label-lg">Nov 12 - Nov 15, 2024</p>
</div>
<span class="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[12px] font-bold uppercase tracking-tight">Confirmed</span>
</div>
<div class="flex gap-4 pt-4 border-t border-surface-container mt-4">
<button class="text-primary font-bold text-sm hover:underline">View Details</button>
<button class="text-on-surface-variant font-bold text-sm hover:text-primary transition-colors">Reschedule</button>
</div>
</div>
</div>
<!-- Booking 2 -->
<div class="flex items-start gap-6 p-6 rounded-xl border border-outline-variant bg-white shadow-sm hover:shadow-md transition-all">
<div class="w-14 h-14 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined text-3xl">electric_car</span>
</div>
<div class="flex-grow">
<div class="flex justify-between items-start mb-2">
<div>
<h3 class="font-bold text-lg text-on-surface">Luxury Airport Transfer</h3>
<p class="text-on-surface-variant font-label-lg">Nov 12, 10:00 AM</p>
</div>
<span class="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-[12px] font-bold uppercase tracking-tight">Pending</span>
</div>
<div class="flex gap-4 pt-4 border-t border-surface-container mt-4">
<button class="text-primary font-bold text-sm hover:underline">View Details</button>
<button class="text-on-surface-variant font-bold text-sm hover:text-primary transition-colors">Reschedule</button>
</div>
</div>
</div>
</div>
</section>
<!-- Recent Activity with Rating -->
<section class="mb-section-gap">
<div class="flex items-center justify-between mb-6">
<h2 class="font-headline-md text-headline-md text-on-surface">Recent Activity</h2>
<a class="text-primary font-bold text-sm" href="#">See All</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="p-8 rounded-xl bg-parchment border border-outline-variant flex flex-col items-center text-center">
<div class="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
<img class="w-full h-full object-cover" data-alt="A lush and decadent food photography shot of Jollof Rice served with succulent grilled chicken and fried plantains in a high-end restaurant setting. The colors are rich oranges, deep reds, and vibrant greens. The lighting is warm and inviting, emphasizing the texture and luxury of the meal, styled with minimalist gold cutlery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC13TD-EtsaP1LjUTUaipCTmJQ5oGPS1OajU_vtC0V4_XtsNVTnwls4gpgUmL7YhCK4eflDaKSA6l5irt_4Oubh0S-PTwgEhMzoKp6TTrEM84IPBdufRdPE3T86X3fJL7GZhyyU3zo2KX9KJv47aez7neeLSwBrZ9LmBmEyyZ0BxOTw9XB8CL2EFXWSdBd3PvIK8kPYIW_zqDQUPR36LFZTPOikEdAqF_MciK7Lca04DDxScZH_6HaZ1QcseRE4ypZI3YhVDWJv1lo"/>
</div>
<p class="font-label-lg text-on-surface-variant mb-2">How was your meal from</p>
<h4 class="font-bold text-xl text-on-surface mb-6">Taste of Africa</h4>
<div class="flex gap-2 mb-6">
<span class="material-symbols-outlined text-gold-leaf cursor-pointer hover:scale-125 transition-transform" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf cursor-pointer hover:scale-125 transition-transform" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf cursor-pointer hover:scale-125 transition-transform" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf cursor-pointer hover:scale-125 transition-transform" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-outline-variant cursor-pointer hover:scale-125 transition-transform">star</span>
</div>
<button class="w-full py-3 bg-white border border-primary text-primary font-bold rounded-lg hover:bg-primary-fixed transition-colors">Submit Review</button>
</div>
<div class="p-8 rounded-xl bg-parchment border border-outline-variant flex flex-col items-center text-center">
<div class="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
<img class="w-full h-full object-cover" data-alt="A professional close-up of a skilled technician's hands working on a modern, high-tech air conditioning unit. The setting is a clean, bright, and upscale apartment interior. The aesthetic is crisp and professional, highlighting reliability and expertise in home maintenance services. Soft, natural light fills the space." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-jZaD8Lu_86uZaUjnzCEE519Zkzb4L2OvK0ae9hmkSboCJv2e5dhdaXgE8nRXuPkzkl8qwN8_2RxQ4NMtAknfM50NmoYCGUX1fmx6scplv3Tr3h3zqvkc8Rv0DvddhPGDSYjzrBAgrr4aG5NbxdiiH8JFDTdThtvN6incJqtd_nmwkj9rIEUunO3mITgWkDDSV2KhitLR-lRI1Q8S8ECUydUXaM-auXZNCUMZKr7svnbExpAg9SspSGmooqPx6IhBItMcTfeD_qA"/>
</div>
<p class="font-label-lg text-on-surface-variant mb-2">Service feedback for</p>
<h4 class="font-bold text-xl text-on-surface mb-6">ProFix AC Maintenance</h4>
<div class="flex gap-2 mb-6">
<span class="material-symbols-outlined text-gold-leaf cursor-pointer hover:scale-125 transition-transform" style="font-variation-settings: 'FILL' 0;">star</span>
<span class="material-symbols-outlined text-gold-leaf cursor-pointer hover:scale-125 transition-transform" style="font-variation-settings: 'FILL' 0;">star</span>
<span class="material-symbols-outlined text-gold-leaf cursor-pointer hover:scale-125 transition-transform" style="font-variation-settings: 'FILL' 0;">star</span>
<span class="material-symbols-outlined text-gold-leaf cursor-pointer hover:scale-125 transition-transform" style="font-variation-settings: 'FILL' 0;">star</span>
<span class="material-symbols-outlined text-gold-leaf cursor-pointer hover:scale-125 transition-transform" style="font-variation-settings: 'FILL' 0;">star</span>
</div>
<button class="w-full py-3 bg-white border border-primary text-primary font-bold rounded-lg hover:bg-primary-fixed transition-colors">Rate Now</button>
</div>
</div>
</section>
<!-- Saved / Wishlist -->
<section class="mb-section-gap overflow-hidden">
<div class="flex items-center justify-between mb-6">
<h2 class="font-headline-md text-headline-md text-on-surface">Saved / Wishlist</h2>
<a class="text-primary font-bold text-sm" href="#">Manage List</a>
</div>
<div class="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
<!-- Wishlist Item 1 -->
<div class="flex-shrink-0 w-72 rounded-xl bg-white border border-outline-variant overflow-hidden group">
<div class="relative h-48">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A breathtaking infinity pool overlooking the coastline of Cape Town at sunset. The architectural design is ultra-modern with clean lines, glass balustrades, and luxury outdoor furniture. The sky is a palette of sunset orange and deep indigo, perfectly reflecting the brand's premium aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS2XLcwIUWGTJePvbFGFIY8_phKQfhdi0VAGgYh8SOcnmbiV0Xcx7rFtaZayM52RvBVEF57Zum2P0nSiBYT30QhEpiAa_NmJpgx7N5WrUVGAIZCiOV0qtzDPHXZtBeRSepnEi2BrmYBRhqn_T1StHTcs0KfASkwMuUMhkQTrkD_XFY6gInu9xE-tMhQnHfz0zyRQfPRmgK_ovnwdCWzO6w5x8aDLKtr_Ipr1qTPX5_gjskki22xJfSSYurhjfzrDfzUPV8ZMWg_Co"/>
<button class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">favorite</span>
</button>
</div>
<div class="p-4">
<h5 class="font-bold text-on-surface truncate">Atlantic View Villa</h5>
<p class="text-on-surface-variant text-sm mb-3">Cape Town, SA</p>
<p class="font-bold text-primary">â‚¦ 155,000 <span class="font-normal text-on-surface-variant text-xs">/ night</span></p>
</div>
</div>
<!-- Wishlist Item 2 -->
<div class="flex-shrink-0 w-72 rounded-xl bg-white border border-outline-variant overflow-hidden group">
<div class="relative h-48">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A luxury desert oasis resort in Kenya, featuring traditional thatched roofs combined with contemporary glass walls. The resort is surrounded by acacia trees and golden savannah. The image captures a serene, high-end travel experience with soft morning light illuminating the textured materials." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN1oEHNVMY4uqHi9AJbE1OZ2Cz2ZBer1RR2XDaotjQdGPrgzovvVxS2ACV9PjJa28vNyUYustmkUxO5dxdLiJ63ODEHKT59trtrb8G3AwuFxllqWnfm6_rSMRbRMgSsvAMLQACPucE68cmIyXAPiugCiW7KF4cZxnf0mw9lGuN4cAUZdTQlpulQQsZVkvdDmGM5U7khmVBeFUHJnKNMp6tZKHLnqZntfMk2mnf3O5xlwZ8auFVTBQKAZ0wk9o_mMbyO7VvX9GHJzE"/>
<button class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">favorite</span>
</button>
</div>
<div class="p-4">
<h5 class="font-bold text-on-surface truncate">Mara Luxury Camp</h5>
<p class="text-on-surface-variant text-sm mb-3">Maasai Mara, KE</p>
<p class="font-bold text-primary">â‚¦ 210,000 <span class="font-normal text-on-surface-variant text-xs">/ night</span></p>
</div>
</div>
<!-- Wishlist Item 3 -->
<div class="flex-shrink-0 w-72 rounded-xl bg-white border border-outline-variant overflow-hidden group">
<div class="relative h-48">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A modern urban lofts space in downtown Nairobi with high ceilings, exposed brick, and large industrial windows. The interior is decorated with contemporary African art and high-quality handmade furniture. The lighting is cinematic, highlighting the blend of industrial and artisanal styles." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXgx4dlGet2uD9zhChYI1ANzjXfcN0abPx7KDJKa0bTTcCPRdN74Eu4nXJMd3XGgg-bZbUxNF-Uee9IbDDL-iz2gMwA9LKIlD5efg41rpzyA5-eMYN-3gzON2ZFaQDGx-s2Jy6OP_uAWjS3eyJakuJeIIjGNj7J5fg5oHnYMhujwEImQHJPZSVKfac0RGxTN31sS456Dqsw26qXvjj-NQuXQJPF1_sHGjFDcs_Q599g0RZPKYhLgV3nbjRF8dJdjr1C4kpd0V52zU"/>
<button class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">favorite</span>
</button>
</div>
<div class="p-4">
<h5 class="font-bold text-on-surface truncate">The Artisan Loft</h5>
<p class="text-on-surface-variant text-sm mb-3">Nairobi, KE</p>
<p class="font-bold text-primary">â‚¦ 85,000 <span class="font-normal text-on-surface-variant text-xs">/ night</span></p>
</div>
</div>
</div>
</section>
</main>
</div>
<!-- Footer from Shared Components -->
<footer class="bg-surface-container dark:bg-surface-container-highest py-section-gap full-width">
<div class="max-w-container-max mx-auto px-margin-desktop">
<div class="grid grid-cols-2 md:grid-cols-5 gap-gutter mb-12">
<div class="col-span-2">
<span class="font-headline-md text-headline-md font-bold text-primary mb-6 block">JAHRAH</span>
<p class="text-on-surface-variant font-body-md max-w-sm">Elevating the African lifestyle experience through seamless services, luxury stays, and cultural leadership.</p>
</div>
<div class="flex flex-col gap-4">
<h6 class="font-bold uppercase text-xs tracking-widest text-on-surface mb-2">Company</h6>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/about">About</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/story">Story</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/careers">Careers</a>
</div>
<div class="flex flex-col gap-4">
<h6 class="font-bold uppercase text-xs tracking-widest text-on-surface mb-2">Services</h6>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/stays">Stays</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/ride">Ride</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/eats">Eats</a>
</div>
<div class="flex flex-col gap-4">
<h6 class="font-bold uppercase text-xs tracking-widest text-on-surface mb-2">Support</h6>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/help">Help Centre</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Safety</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Contact</a>
</div>
</div>
<div class="border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-on-surface-variant text-sm">Â© 2024 JAHRAH. All rights reserved. Nigeria | Ghana | Kenya | South Africa | â‚¦ NGN</p>
<div class="flex gap-6">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">face_nod</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">language</span>
</div></div></div></footer>`

export default function MyJahrahUserDashboardPage() {
  return <div dangerouslySetInnerHTML={{ __html: stitchHtml }} />
}

