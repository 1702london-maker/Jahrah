export const metadata = { title: "JAHRAH â€” App Home Screen" }

const stitchHtml = `<!-- Header Section -->
<header class="sticky top-0 z-50 bg-surface px-margin-mobile pt-6 pb-4">
<div class="flex justify-between items-center mb-4">
<div class="flex flex-col">
<span class="font-headline-md text-headline-md font-bold text-primary tracking-tight">JAHRAH</span>
<span class="font-label-lg text-label-lg text-on-surface-variant">Good evening, Tunde</span>
</div>
<div class="flex items-center gap-4">
<button class="relative p-2 rounded-full hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-on-surface">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-sunset-orange rounded-full"></span>
</button>
<div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed">
<img class="w-full h-full object-cover" data-alt="A professional close-up portrait of a stylish Nigerian man with a warm smile, wearing a modern linen shirt. The lighting is soft and golden, characteristic of a high-end lifestyle app's user profile image. The background is a clean, minimalist off-white, maintaining the brand's premium parchment aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSrWa-QdQE0jRU6_xCws2WBNnBU-S0CtVFAkof6wXhWDqMc5O5_ukRMf5ij4J5zHHCwLqc7mnekxhqwYK8dqGSjaMrM7klJfJRS3fx-92EPCXXEuTcdehX-QOtqDSMDEFoPpxhF5dhqH6_9rUbfPHlzp_1HslrYEqgv2Vw2P8ezbEPcTDwXG41d1p1eQAtQgtbBxuKMDs_0UKPFwTmaFxfDgSVaj-PEJmIAgws1O_m0d0JtydY30K_-p4fIPHNHBbl2OimiPeo8Go"/>
</div>
</div>
</div>
<!-- Location Bar -->
<div class="flex items-center gap-2 mb-4 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/30">
<span class="material-symbols-outlined text-primary text-sm">location_on</span>
<span class="text-label-lg font-label-lg text-on-surface">Lekki, Lagos</span>
<span class="material-symbols-outlined text-on-surface-variant text-sm ml-auto">expand_more</span>
</div>
<!-- Search Bar -->
<div class="relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input class="w-full pl-12 pr-4 py-4 rounded-xl border-none bg-surface-container-high text-body-md font-body-md focus:ring-2 focus:ring-terracotta-clay/50 placeholder:text-on-surface-variant/60" placeholder="What do you need today?" type="text"/>
</div>
</header>
<main class="space-y-section-gap pt-4">
<!-- Icon Grid -->
<section class="px-margin-mobile">
<div class="grid grid-cols-4 gap-y-6 gap-x-4">
<!-- Stays -->
<div class="icon-grid-item flex flex-col items-center gap-2">
<div class="w-14 h-14 bg-primary-fixed flex items-center justify-center rounded-2xl shadow-sm">
<span class="material-symbols-outlined text-on-primary-fixed text-3xl">bed</span>
</div>
<span class="font-label-lg text-xs font-semibold text-on-surface">Stays</span>
</div>
<!-- Ride -->
<div class="icon-grid-item flex flex-col items-center gap-2">
<div class="w-14 h-14 bg-secondary-fixed flex items-center justify-center rounded-2xl shadow-sm">
<span class="material-symbols-outlined text-on-secondary-fixed text-3xl">directions_car</span>
</div>
<span class="font-label-lg text-xs font-semibold text-on-surface">Ride</span>
</div>
<!-- Eats -->
<div class="icon-grid-item flex flex-col items-center gap-2">
<div class="w-14 h-14 bg-tertiary-fixed flex items-center justify-center rounded-2xl shadow-sm">
<span class="material-symbols-outlined text-on-tertiary-fixed text-3xl">restaurant</span>
</div>
<span class="font-label-lg text-xs font-semibold text-on-surface">Eats</span>
</div>
<!-- Fix -->
<div class="icon-grid-item flex flex-col items-center gap-2">
<div class="w-14 h-14 bg-surface-container-highest flex items-center justify-center rounded-2xl shadow-sm">
<span class="material-symbols-outlined text-on-surface text-3xl">home_repair_service</span>
</div>
<span class="font-label-lg text-xs font-semibold text-on-surface">Fix</span>
</div>
<!-- Glow -->
<div class="icon-grid-item flex flex-col items-center gap-2">
<div class="w-14 h-14 bg-primary-fixed-dim flex items-center justify-center rounded-2xl shadow-sm">
<span class="material-symbols-outlined text-on-primary-fixed-variant text-3xl">spa</span>
</div>
<span class="font-label-lg text-xs font-semibold text-on-surface">Glow</span>
</div>
<!-- Events -->
<div class="icon-grid-item flex flex-col items-center gap-2">
<div class="w-14 h-14 bg-secondary-fixed-dim flex items-center justify-center rounded-2xl shadow-sm">
<span class="material-symbols-outlined text-on-secondary-fixed-variant text-3xl">confirmation_number</span>
</div>
<span class="font-label-lg text-xs font-semibold text-on-surface">Events</span>
</div>
<!-- Market -->
<div class="icon-grid-item flex flex-col items-center gap-2">
<div class="w-14 h-14 bg-tertiary-fixed-dim flex items-center justify-center rounded-2xl shadow-sm">
<span class="material-symbols-outlined text-on-tertiary-fixed-variant text-3xl">shopping_bag</span>
</div>
<span class="font-label-lg text-xs font-semibold text-on-surface">Market</span>
</div>
<!-- More -->
<div class="icon-grid-item flex flex-col items-center gap-2">
<div class="w-14 h-14 bg-surface-container-low border border-outline-variant flex items-center justify-center rounded-2xl">
<span class="material-symbols-outlined text-on-surface-variant text-3xl">grid_view</span>
</div>
<span class="font-label-lg text-xs font-semibold text-on-surface">More</span>
</div>
</div>
</section>
<!-- JAHRAH Wallet Banner -->
<section class="px-margin-mobile">
<div class="relative overflow-hidden rounded-3xl bg-royal-indigo p-6 text-white shadow-xl">
<div class="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
<div class="flex justify-between items-start mb-6">
<div>
<p class="font-label-lg text-white/70 uppercase tracking-widest text-[10px]">JAHRAH Wallet</p>
<p class="font-price-display text-2xl mt-1">â‚¦ 128,450.00</p>
</div>
<div class="bg-white/20 p-2 rounded-xl backdrop-blur-md">
<span class="material-symbols-outlined text-white">account_balance_wallet</span>
</div>
</div>
<div class="flex gap-4">
<button class="flex-1 bg-sunset-orange py-3 rounded-xl font-label-lg text-sm font-bold shadow-lg shadow-sunset-orange/30">Top Up</button>
<button class="flex-1 bg-white/10 border border-white/20 py-3 rounded-xl font-label-lg text-sm font-bold backdrop-blur-sm">History</button>
</div>
</div>
</section>
<!-- Near You Horizontal Scroll -->
<section class="pl-margin-mobile">
<div class="flex justify-between items-end pr-margin-mobile mb-6">
<h2 class="font-headline-md text-headline-md text-on-surface">Near You</h2>
<a class="font-label-lg text-primary text-sm" href="#">See all</a>
</div>
<div class="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
<!-- Card 1: Stay -->
<div class="flex-shrink-0 w-72 bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/20">
<div class="h-44 relative">
<img class="w-full h-full object-cover" data-alt="A luxury contemporary villa in Lekki, Lagos, showcasing a stunning infinity pool at dusk. The architecture features clean lines and warm interior lighting that spills onto the deck. The sky is a deep indigo, and the overall atmosphere is one of exclusive serenity and high-end African luxury, perfectly aligned with the JAHRAH brand aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG-al16eAEFPUYpaKjkokXphGhVdsGn5dCZwWR8htpGjPiZJl7voK6cmrc53moUcXVBKn0OFi9EGRpar3ZyCXOVpe2x5VKufzo3ri15yKo25qMYg1KG6qHDrNw2p3jlUYmZByNMSs6ABafQSKSRi8dQKh3IAAOKthxv3dmY_evZy4F0idtmf5RxsHGk6y3rt19r8nkC19HIRSJhnct8N9Y9Feb8ytVck9v-qNcwy9OpeITRztxmix3CNNpZ-fzocCy6VXOLbH_9xE"/>
<div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="text-xs font-bold text-on-surface">4.9</span>
</div>
</div>
<div class="p-5">
<h3 class="font-label-lg text-base text-on-surface mb-1">Skyline Loft</h3>
<p class="text-on-surface-variant text-sm mb-3">Lekki Phase 1</p>
<div class="flex justify-between items-center">
<span class="font-price-display text-lg text-primary">â‚¦ 75,000<span class="text-xs font-normal text-on-surface-variant">/night</span></span>
<button class="p-2 bg-surface-container rounded-full"><span class="material-symbols-outlined text-primary">favorite</span></button>
</div>
</div>
</div>
<!-- Card 2: Eats -->
<div class="flex-shrink-0 w-72 bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/20">
<div class="h-44 relative">
<img class="w-full h-full object-cover" data-alt="A vibrant gourmet plate of modern African fusion cuisine, artistically presented with edible flowers and rich, colorful sauces on a textured ceramic plate. The setting is a dimly lit, high-end restaurant with warm wood textures and gold accents. The lighting focuses sharply on the textures of the food, creating a mouth-watering, premium visual experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn9U-pcEKt9T6E66PYEDSgwkA2D6x5MVIoAdS-eOYRgE9sv3LSBu6Q52-rrsgTSLT1prCERJGpP_SeIanJgfjx8uJJhz00EypKHvlOnlwQgGPjRBneSs5Dp0pSNeiVKRgmiedBvQiH0IcwXqn0gpYVZRz39vhN1sNQw_UGFX6oUVXP9K8bMOH3c00rOxBT-yiSScgRz6NS_yKnMoGv4XuyEewod8LZtsC_3iPSIg8tzmQKi08xKkTeo_qmqky5w6-4KMIcE0WAjZ0"/>
<div class="absolute top-4 left-4 bg-sunset-orange text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Trending</div>
</div>
<div class="p-5">
<h3 class="font-label-lg text-base text-on-surface mb-1">Terra Kulture Resto</h3>
<p class="text-on-surface-variant text-sm mb-3">Victoria Island</p>
<div class="flex justify-between items-center">
<span class="font-price-display text-lg text-primary">â‚¦ 12,000<span class="text-xs font-normal text-on-surface-variant"> avg.</span></span>
<span class="material-symbols-outlined text-on-surface-variant">schedule</span>
</div>
</div>
</div>
<!-- Card 3: Events -->
<div class="flex-shrink-0 w-72 bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/20">
<div class="h-44 relative">
<img class="w-full h-full object-cover" data-alt="A high-energy outdoor concert at night in Lagos, with a massive stage illuminated by vibrant purple and gold lights. A silhouette of a diverse, stylish crowd with their hands up is visible in the foreground against the bright stage. The atmosphere is electric and celebratory, capturing the essence of world-class African entertainment and nightlife." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyqdltFbGf9y3TZnFF2CxVknoH5VT4ao9K5BhkwnKkJmk1TPp7GkUB0GafJ4mJXI_VrAMlE7X4ukFnXfZC73GTHmT9t32TVuNAA3-9YCndtOf7dr-uPOGJwXKeZzIbcmzzt519C3-FM-tflNHTQhYE8xgkm3Ub01wzDnveAU-zIWUZN5lNITrs0KNaWjUIzVGrxQHyDxe0nvdtYpbYt6VgmYhnzqWalXgHnrlTuak1st8-x3pMZb3lPnaP6ZqnbWJ9dd6VEQqJ9qs"/>
</div>
<div class="p-5">
<h3 class="font-label-lg text-base text-on-surface mb-1">Lagos Jazz Night</h3>
<p class="text-on-surface-variant text-sm mb-3">Eko Hotels &amp; Suites</p>
<div class="flex justify-between items-center">
<span class="font-price-display text-lg text-primary">â‚¦ 25,000</span>
<span class="text-xs font-bold text-sunset-orange bg-sunset-orange/10 px-2 py-1 rounded">Tickets Selling Fast</span>
</div>
</div>
</div>
</div>
</section>
<!-- Recommended / More Context Section -->
<section class="px-margin-mobile pb-8">
<h2 class="font-headline-md text-headline-md text-on-surface mb-6">Curated for You</h2>
<div class="grid grid-cols-2 gap-4">
<div class="bg-surface-container-low p-4 rounded-3xl border border-outline-variant/20 aspect-square flex flex-col justify-between">
<span class="material-symbols-outlined text-forest-deep text-4xl">eco</span>
<div>
<h4 class="font-label-lg text-sm text-on-surface">Sustainable Living</h4>
<p class="text-[10px] text-on-surface-variant">Explore eco-friendly stays</p>
</div>
</div>
<div class="bg-primary-fixed p-4 rounded-3xl border border-outline-variant/20 aspect-square flex flex-col justify-between">
<span class="material-symbols-outlined text-primary text-4xl">celebration</span>
<div>
<h4 class="font-label-lg text-sm text-on-surface">Art &amp; Culture</h4>
<p class="text-[10px] text-on-surface-variant">Weekly gallery picks</p>
</div>
</div>
</div>
</section>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-xl border-t border-outline-variant/20 px-6 py-3 z-50">
<div class="flex justify-between items-center max-w-md mx-auto">
<!-- Home (Active) -->
<a class="flex flex-col items-center gap-1 text-primary" href="#">
<span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">home</span>
<span class="text-[10px] font-bold">Home</span>
</a>
<!-- Explore -->
<a class="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
<span class="material-symbols-outlined text-2xl">explore</span>
<span class="text-[10px] font-medium">Explore</span>
</a>
<!-- My Bookings -->
<a class="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
<span class="material-symbols-outlined text-2xl">calendar_month</span>
<span class="text-[10px] font-medium">Bookings</span>
</a>
<!-- Messages -->
<a class="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
<div class="relative">
<span class="material-symbols-outlined text-2xl">chat_bubble</span>
<span class="absolute -top-1 -right-1 w-2 h-2 bg-sunset-orange rounded-full"></span>
</div>
<span class="text-[10px] font-medium">Messages</span>
</a>
<!-- Profile -->
<a class="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
<span class="material-symbols-outlined text-2xl">person</span>
<span class="text-[10px] font-medium">Profile</span>
</a>
</div>
</nav>
<script>
        // Micro-interaction for cards
        document.querySelectorAll('.flex-shrink-0').forEach(card => {
            card.addEventListener('touchstart', () => {
                card.style.transform = 'scale(0.98)';
                card.style.transition = 'transform 0.2s ease';
            });
            card.addEventListener('touchend', () => {
                card.style.transform = 'scale(1)';
            });
        });

        // Search bar focus effect
        const searchInput = document.querySelector('input');
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.classList.add('ring-2', 'ring-primary/20');
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.classList.remove('ring-2', 'ring-primary/20');
        });
    </script>`

export default function MobileAppHomeScreenPage() {
  return <div dangerouslySetInnerHTML={{ __html: stitchHtml }} />
}

