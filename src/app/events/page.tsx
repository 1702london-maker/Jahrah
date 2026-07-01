export const metadata = { title: "JAHRAH | Events â€” Plan Your Event" }

const stitchHtml = `<!-- TopNavBar -->
<nav class="bg-surface dark:bg-surface-dim shadow-sm docked full-width top-0 sticky z-50">
<div class="flex justify-between items-center px-margin-desktop py-4 w-full max-w-container-max mx-auto">
<div class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">JAHRAH</div>
<div class="hidden md:flex items-center gap-8">
<a class="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="/stays">Stays</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="/ride">Ride</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="/eats">Eats</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="/fix">Fix</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="/glow">Glow</a>
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-label-lg text-label-lg" href="/events">Events</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="/market">Market</a>
</div>
<div class="flex items-center gap-6">
<div class="flex gap-4">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">location_on</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">notifications</span>
</div>
<button class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-lg text-label-lg transition-transform active:scale-95"onclick="window.location.href='/dashboard'">Sign in / Register</button>
</div>
</div>
</nav>
<main>
<!-- Hero Section -->
<section class="relative w-full h-[819px] flex items-center overflow-hidden">
<div class="absolute inset-0 z-0">
<div class="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105" data-alt="A cinematic, high-fashion photograph of a vibrant Nigerian traditional wedding reception in a luxury Lagos ballroom. Guests in exquisite, colorful Aso-Ebi attire are celebrating under a canopy of golden fairy lights and lush floral arrangements. The lighting is warm and opulent, capturing a moment of pure joy and cultural heritage with a high-contrast, premium aesthetic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKQKmApZAwgaIs8RNxg25YtfvUyYXxWwF5ysr3kT3XDciznTrfVrmiNwN-4Ng3TXZ3A5lRlJvh75RTZTin_CU25N0atcU_wbUNXYW3DsCCpZ4QndIZBkd4stMaijBDajRrR3hLJ190N4QVS5HyyfrqmRjrk6_Yi9Aa_qAmwR_ZKKIjkJajFKDh-iNvs7L9Uf_XeGGNH29yLKUoH3w-nEm98BtSdC28avjIPqifg-9PfdHGFVWnGHc5ys28RCqdwDH3blipgltuJV0')">
</div>
<div class="absolute inset-0 bg-gradient-to-r from-on-background/80 to-transparent"></div>
</div>
<div class="relative z-10 px-margin-desktop w-full max-w-container-max mx-auto text-white">
<div class="max-w-2xl">
<h1 class="font-display-lg text-display-lg mb-6 leading-tight">Nigeria's biggest events start here.</h1>
<p class="font-body-lg text-body-lg text-surface-variant mb-10">From intimate gatherings to grand celebrations, we connect you with the finest vendors and venues across the continent.</p>
<a class="inline-flex items-center bg-sunset-orange text-white px-10 py-5 rounded-lg font-label-lg text-label-lg uppercase tracking-wider hover:bg-terracotta-clay transition-colors shadow-lg" href="#planner">
                        Start Planning
                        <span class="material-symbols-outlined ml-2">arrow_downward</span>
</a>
</div>
</div>
</section>
<!-- Event Type Horizontal Scroll -->
<section class="py-12 bg-parchment">
<div class="px-margin-desktop max-w-container-max mx-auto">
<h2 class="font-headline-md text-headline-md mb-8 text-on-surface">What are we celebrating?</h2>
<div class="flex gap-6 overflow-x-auto hide-scrollbar pb-6 snap-x">
<!-- Cards -->
<div class="flex-none w-48 h-56 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-outline-variant flex flex-col items-center justify-center gap-4 cursor-pointer snap-start group">
<div class="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-4xl" data-icon="favorite">favorite</span>
</div>
<span class="font-label-lg text-label-lg">Wedding</span>
</div>
<div class="flex-none w-48 h-56 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-outline-variant flex flex-col items-center justify-center gap-4 cursor-pointer snap-start group">
<div class="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-4xl" data-icon="cake">cake</span>
</div>
<span class="font-label-lg text-label-lg">Birthday</span>
</div>
<div class="flex-none w-48 h-56 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-outline-variant flex flex-col items-center justify-center gap-4 cursor-pointer snap-start group">
<div class="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-4xl" data-icon="celebration">celebration</span>
</div>
<span class="font-label-lg text-label-lg">Owambe</span>
</div>
<div class="flex-none w-48 h-56 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-outline-variant flex flex-col items-center justify-center gap-4 cursor-pointer snap-start group">
<div class="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-4xl" data-icon="business_center">business_center</span>
</div>
<span class="font-label-lg text-label-lg">Corporate</span>
</div>
<div class="flex-none w-48 h-56 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-outline-variant flex flex-col items-center justify-center gap-4 cursor-pointer snap-start group">
<div class="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-4xl" data-icon="rocket_launch">rocket_launch</span>
</div>
<span class="font-label-lg text-label-lg">Launch</span>
</div>
<div class="flex-none w-48 h-56 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-outline-variant flex flex-col items-center justify-center gap-4 cursor-pointer snap-start group">
<div class="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-4xl" data-icon="child_care">child_care</span>
</div>
<span class="font-label-lg text-label-lg">Baby Shower</span>
</div>
<div class="flex-none w-48 h-56 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-outline-variant flex flex-col items-center justify-center gap-4 cursor-pointer snap-start group">
<div class="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-4xl" data-icon="music_note">music_note</span>
</div>
<span class="font-label-lg text-label-lg">Concert</span>
</div>
</div>
</div>
</section>
<!-- Plan My Event Form Card -->
<section class="py-section-gap" id="planner">
<div class="px-margin-desktop max-w-container-max mx-auto">
<div class="bg-surface-container-low rounded-3xl p-12 shadow-sm border border-outline-variant/30 flex flex-col lg:flex-row gap-12 items-start relative overflow-hidden">
<div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
<div class="lg:w-1/3 relative z-10">
<h2 class="font-headline-lg text-headline-lg mb-4">Tell us about your dream event.</h2>
<p class="font-body-md text-on-surface-variant">Fill in the details and we'll match you with the perfect professional vendors for your specific needs and budget.</p>
<div class="mt-12 space-y-6">
<div class="flex items-center gap-4 text-forest-deep">
<span class="material-symbols-outlined">verified</span>
<span class="font-label-lg text-label-lg">Vetted Professional Vendors</span>
</div>
<div class="flex items-center gap-4 text-forest-deep">
<span class="material-symbols-outlined">payments</span>
<span class="font-label-lg text-label-lg">Secure Payment Escrow</span>
</div>
</div>
</div>
<form class="lg:w-2/3 w-full bg-white p-8 lg:p-12 rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
<div class="space-y-2">
<label class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-tighter">Event Type</label>
<select class="w-full border-b-2 border-outline-variant focus:border-terracotta-clay focus:ring-0 py-3 bg-transparent text-on-surface font-body-md transition-colors appearance-none">
<option>Select Event Type</option>
<option>Wedding</option>
<option>Birthday</option>
<option>Corporate Gala</option>
<option>Product Launch</option>
</select>
</div>
<div class="space-y-2">
<label class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-tighter">Event Date</label>
<input class="w-full border-b-2 border-outline-variant focus:border-terracotta-clay focus:ring-0 py-3 bg-transparent text-on-surface font-body-md transition-colors" type="date"/>
</div>
<div class="space-y-2">
<label class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-tighter">Expected Guests</label>
<input class="w-full border-b-2 border-outline-variant focus:border-terracotta-clay focus:ring-0 py-3 bg-transparent text-on-surface font-body-md transition-colors" placeholder="e.g. 200" type="number"/>
</div>
<div class="space-y-2">
<label class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-tighter">Location</label>
<input class="w-full border-b-2 border-outline-variant focus:border-terracotta-clay focus:ring-0 py-3 bg-transparent text-on-surface font-body-md transition-colors" placeholder="Lagos, Abuja, Accra..." type="text"/>
</div>
<div class="md:col-span-2 space-y-2">
<label class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-tighter">Estimated Budget (â‚¦)</label>
<div class="relative">
<span class="absolute left-0 top-3 font-bold">â‚¦</span>
<input class="w-full border-b-2 border-outline-variant focus:border-terracotta-clay focus:ring-0 py-3 pl-6 bg-transparent text-on-surface font-body-md transition-colors" placeholder="1,500,000" type="text"/>
</div>
</div>
<div class="md:col-span-2 pt-4">
<button class="w-full bg-primary text-on-primary h-16 rounded-xl font-headline-md text-headline-md hover:bg-terracotta-clay transition-all shadow-lg active:scale-95" type="submit">Find Vendors</button>
</div>
</form>
</div>
</div>
</section>
<!-- Vendor Categories Grid -->
<section class="py-section-gap bg-surface">
<div class="px-margin-desktop max-w-container-max mx-auto">
<div class="flex justify-between items-end mb-12">
<div>
<h2 class="font-headline-lg text-headline-lg">Top-Tier Vendors</h2>
<p class="font-body-lg text-on-surface-variant mt-2">Handpicked experts to bring your vision to life.</p>
</div>
<a class="text-primary font-label-lg text-label-lg border-b-2 border-primary pb-1 uppercase" href="#">Browse All Vendors</a>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
<!-- Vendor Tile -->
<div class="flex flex-col items-center gap-4 p-6 bg-surface-container rounded-2xl hover:bg-primary-fixed transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" data-icon="photo_camera">photo_camera</span>
<span class="font-label-lg text-label-lg text-center">Photographers</span>
</div>
<div class="flex flex-col items-center gap-4 p-6 bg-surface-container rounded-2xl hover:bg-primary-fixed transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" data-icon="videocam">videocam</span>
<span class="font-label-lg text-label-lg text-center">Videographers</span>
</div>
<div class="flex flex-col items-center gap-4 p-6 bg-surface-container rounded-2xl hover:bg-primary-fixed transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" data-icon="headphones">headphones</span>
<span class="font-label-lg text-label-lg text-center">DJs</span>
</div>
<div class="flex flex-col items-center gap-4 p-6 bg-surface-container rounded-2xl hover:bg-primary-fixed transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" data-icon="piano">piano</span>
<span class="font-label-lg text-label-lg text-center">Live Bands</span>
</div>
<div class="flex flex-col items-center gap-4 p-6 bg-surface-container rounded-2xl hover:bg-primary-fixed transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" data-icon="mic">mic</span>
<span class="font-label-lg text-label-lg text-center">MCs</span>
</div>
<div class="flex flex-col items-center gap-4 p-6 bg-surface-container rounded-2xl hover:bg-primary-fixed transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" data-icon="flower">floor</span>
<span class="font-label-lg text-label-lg text-center">Decorators</span>
</div>
<div class="flex flex-col items-center gap-4 p-6 bg-surface-container rounded-2xl hover:bg-primary-fixed transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" data-icon="restaurant">restaurant</span>
<span class="font-label-lg text-label-lg text-center">Caterers</span>
</div>
<div class="flex flex-col items-center gap-4 p-6 bg-surface-container rounded-2xl hover:bg-primary-fixed transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" data-icon="local_bar">local_bar</span>
<span class="font-label-lg text-label-lg text-center">Drinks &amp; Mixologists</span>
</div>
<div class="flex flex-col items-center gap-4 p-6 bg-surface-container rounded-2xl hover:bg-primary-fixed transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" data-icon="apartment">apartment</span>
<span class="font-label-lg text-label-lg text-center">Venues</span>
</div>
<div class="flex flex-col items-center gap-4 p-6 bg-surface-container rounded-2xl hover:bg-primary-fixed transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" data-icon="security">security</span>
<span class="font-label-lg text-label-lg text-center">Bouncers</span>
</div>
<div class="flex flex-col items-center gap-4 p-6 bg-surface-container rounded-2xl hover:bg-primary-fixed transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" data-icon="face_retouching_natural">face_retouching_natural</span>
<span class="font-label-lg text-label-lg text-center">Makeup Artists</span>
</div>
<div class="flex flex-col items-center gap-4 p-6 bg-surface-container rounded-2xl hover:bg-primary-fixed transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors" data-icon="more_horiz">more_horiz</span>
<span class="font-label-lg text-label-lg text-center">And more</span>
</div>
</div>
</div>
</section>
<!-- Recently Planned Showcase -->
<section class="py-section-gap bg-surface-container-highest/30">
<div class="px-margin-desktop max-w-container-max mx-auto">
<h2 class="font-headline-lg text-headline-lg mb-12 text-center">Recently Planned on JAHRAH</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Showcase Card 1 -->
<div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
<div class="h-80 overflow-hidden relative">
<div class="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" data-alt="A lush outdoor garden wedding ceremony in Nairobi, featuring a modern floral arch and minimalist seating. The lighting is bright and natural, capturing a fresh and elegant atmosphere. The scene highlights the sophistication of Kenyan event planning with high-end furniture and exquisite botanical design." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSCa6COTbodaXl6UanTQUwQUwXqZuAfx9Pobl6kYu8k9rxZuBytcLujdtrzMZ5caphQZ6XPYVDCcdv34g9OXe5HSjeaRZFVEFQ5UK6RFJ7P_t0QH3uuFDACUd-oKgOHYA_vmREDMrcZTRaws6Fdz-e5eMk3NBmlrqUUHe9LRjsHGDa7GbPguoDfPX5MpN5ymTTFgr7G1EkkiUIJbHKa0z4gettDO_Y8ULjyzjZwjdAHhBubtWsmh5t9sy2hj158LABptXfFE31VGY')">
</div>
<div class="absolute bottom-4 left-4 bg-white/90 premium-blur px-4 py-2 rounded-full font-label-lg text-label-lg text-primary">Nairobi, Kenya</div>
</div>
<div class="p-8">
<div class="flex items-center gap-1 mb-2">
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<h3 class="font-headline-md text-headline-md mb-4 text-on-surface">The Adewale Wedding</h3>
<p class="text-on-surface-variant mb-6">"Everything from the catering to the DJ was sourced on JAHRAH. The process was seamless and the results were stunning."</p>
<div class="flex justify-between items-center border-t border-outline-variant pt-6">
<span class="font-label-lg text-label-lg text-on-surface-variant uppercase">350 Guests</span>
<span class="text-primary font-bold font-price-display text-price-display">â‚¦ 8.5M+</span>
</div>
</div>
</div>
<!-- Showcase Card 2 -->
<div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
<div class="h-80 overflow-hidden relative">
<div class="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" data-alt="A professional corporate launch event in a high-rise venue in Victoria Island, Lagos. The space is sleek and modern, with blue and white LED branding elements, minimalist lounge seating, and a large stage with a high-resolution LED backdrop. The atmosphere is professional, tech-forward, and luxurious." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1-QO3-cSxHfediHGS5HHA4d-X3NfUjf9YiXW-oDNItCDqqtFjYXx44YBM0HXR9Z4xrWtoep5sQOcaX1k7WeA8x-ulSwCEcgAFA13ZON7PvnV1a5aglHU77qNcC4vANistKJZRRTycwsa10sIOms5OaklC5by0nX--ZhG0es1SbMziDUObizzzTmO3_j1Qlh-BLoENQEsicS8e_ckuTp1LXGk0oJT0zLkkd856aghJEXfMJOOZ591MpyOOhR1et6dR7J5s0m9RWJA')">
</div>
<div class="absolute bottom-4 left-4 bg-white/90 premium-blur px-4 py-2 rounded-full font-label-lg text-label-lg text-primary">Lagos, Nigeria</div>
</div>
<div class="p-8">
<div class="flex items-center gap-1 mb-2">
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<h3 class="font-headline-md text-headline-md mb-4 text-on-surface">TechConnect Summit</h3>
<p class="text-on-surface-variant mb-6">"We needed high-end audio-visual equipment and professional ushers on short notice. JAHRAH delivered within 24 hours."</p>
<div class="flex justify-between items-center border-t border-outline-variant pt-6">
<span class="font-label-lg text-label-lg text-on-surface-variant uppercase">500 Attendees</span>
<span class="text-primary font-bold font-price-display text-price-display">â‚¦ 12M+</span>
</div>
</div>
</div>
<!-- Showcase Card 3 -->
<div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
<div class="h-80 overflow-hidden relative">
<div class="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" data-alt="A chic, upscale garden birthday brunch in Accra, Ghana. Long communal tables are decorated with terracotta ceramics, woven chargers, and tropical floral arrangements. The lighting is soft morning sunlight, creating a warm and hospitable vibe. Stylish guests are seen laughing and enjoying a beautifully presented brunch spread." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqfpfu9Uex-ImZW2OzzSEbhxgYZPk5Y1yjkGLIDF_qf-gMm4TOnljik-KS8RlvsIFHHViRbqUknMMbgqsYj42mcwyU6hGpAu3ciFKMa82dc4b9U3nILhQekqq2-KIRP6UFbPA43dPggyZxk9iaLQOtQjnbZMevb8389V5bbH7F95x9IcKCzmibUSMzEcNqI5Tx40ebwxj5RN2GNcAopDqGPEfWomnGbt8b-N4OzGQha379k1AxeZ_GlcQH0DYeqFSsX417wj9Ka2Y')">
</div>
<div class="absolute bottom-4 left-4 bg-white/90 premium-blur px-4 py-2 rounded-full font-label-lg text-label-lg text-primary">Accra, Ghana</div>
</div>
<div class="p-8">
<div class="flex items-center gap-1 mb-2">
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<h3 class="font-headline-md text-headline-md mb-4 text-on-surface">Efua's 30th Birthday</h3>
<p class="text-on-surface-variant mb-6">"Found a hidden gem venue and a private chef who created a custom menu that my friends are still talking about weeks later."</p>
<div class="flex justify-between items-center border-t border-outline-variant pt-6">
<span class="font-label-lg text-label-lg text-on-surface-variant uppercase">50 Guests</span>
<span class="text-primary font-bold font-price-display text-price-display">â‚¦ 3.2M+</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container dark:bg-surface-container-highest pt-section-gap pb-12">
<div class="grid grid-cols-2 md:grid-cols-5 gap-gutter px-margin-desktop py-section-gap max-w-container-max mx-auto">
<div class="col-span-2 md:col-span-1">
<div class="font-headline-md text-headline-md font-bold text-primary mb-8">JAHRAH</div>
<p class="font-body-md text-on-surface-variant mb-6">The cultural heartbeat of Africa's premium lifestyle services.</p>
<div class="flex gap-4">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">public</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">favorite</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">share</span>
</div>
</div>
<div>
<h4 class="font-label-lg text-label-lg uppercase mb-6 text-on-surface">Company</h4>
<ul class="space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/about">About</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/story">Story</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/careers">Careers</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/press">Press</a></li>
</ul>
</div>
<div>
<h4 class="font-label-lg text-label-lg uppercase mb-6 text-on-surface">Pro Services</h4>
<ul class="space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/pro-onboarding">Become a Pro</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/pro-dashboard">Pro Dashboard</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/partner">Partner</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Host Your Space</a></li>
</ul>
</div>
<div>
<h4 class="font-label-lg text-label-lg uppercase mb-6 text-on-surface">Support</h4>
<ul class="space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/help">Help Centre</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/safety">Safety Centre</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Trust &amp; Verification</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/cancellation">Cancellation Policy</a></li>
</ul>
</div>
<div>
<h4 class="font-label-lg text-label-lg uppercase mb-6 text-on-surface">Legal</h4>
<ul class="space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="/privacy">Privacy</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Terms</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Cookie Policy</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Sitemap</a></li>
</ul>
</div>
</div>
<div class="px-margin-desktop max-w-container-max mx-auto pt-12 border-t border-outline-variant/30 text-center md:text-left">
<p class="font-body-md text-body-md text-on-surface-variant">Â© 2024 JAHRAH. All rights reserved. Nigeria | Ghana | Kenya | South Africa | â‚¦ NGN</p>
</div>
</footer>
<script>
        // Simple micro-interaction for vendor tiles
        const tiles = document.querySelectorAll('.group');
        tiles.forEach(tile => {
            tile.addEventListener('mousedown', () => {
                tile.style.transform = 'scale(0.95)';
            });
            tile.addEventListener('mouseup', () => {
                tile.style.transform = 'scale(1)';
            });
        });

        // Smooth scroll implementation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>`

export default function EventsPlanYourEventPage() {
  return <div dangerouslySetInnerHTML={{ __html: stitchHtml }} />
}

