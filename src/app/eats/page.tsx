export const metadata = { title: "JAHRAH EATS â€” Food & Private Chefs" }

const stitchHtml = `<!-- TopNavBar -->
<header class="bg-surface dark:bg-surface-dim shadow-sm docked full-width top-0 sticky z-50">
<div class="flex justify-between items-center px-margin-desktop py-4 w-full max-w-container-max mx-auto">
<div class="flex items-center gap-8">
<h1 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">JAHRAH</h1>
<nav class="hidden md:flex items-center gap-6">
<a class="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="/stays">Stays</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="/ride">Ride</a>
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-label-lg text-label-lg" href="/eats">Eats</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="/fix">Fix</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="/glow">Glow</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="/events">Events</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg" href="/market">Market</a>
</nav>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-4 text-on-surface-variant">
<span class="material-symbols-outlined cursor-pointer hover:text-primary transition-all">location_on</span>
<span class="material-symbols-outlined cursor-pointer hover:text-primary transition-all">notifications</span>
</div>
<a href="/pro-onboarding" class="hidden lg:block text-primary font-label-lg text-label-lg hover:underline transition-all">List your space</a>
<a href="/dashboard" class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-lg text-label-lg hover:scale-95 transition-transform duration-200">Sign in / Register</a>
</div>
</div>
</header>
<main class="max-w-container-max mx-auto px-margin-desktop py-12">
<!-- Header & Toggle Section -->
<div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
<div class="space-y-4">
<h2 class="font-headline-lg text-headline-lg text-on-background">Eats â€” Food & Private Chefs</h2>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined">location_on</span>
<span class="font-label-lg text-label-lg">Delivering to: Victoria Island, Lagos</span>
<span class="material-symbols-outlined text-primary cursor-pointer">expand_more</span>
</div>
</div>
<!-- Tab Toggle -->
<div class="bg-surface-container-high p-1 rounded-full flex relative overflow-hidden w-full md:w-auto min-w-[320px]">
<button class="relative z-10 flex-1 px-6 py-3 font-label-lg text-label-lg text-on-primary transition-colors duration-300" id="btn-delivery">
                    Restaurant Delivery
                </button>
<button class="relative z-10 flex-1 px-6 py-3 font-label-lg text-label-lg text-on-surface-variant transition-colors duration-300" id="btn-chef">
                    Book a Private Chef
                </button>
<div class="absolute top-1 left-1 bottom-1 w-[calc(50%-4px)] bg-sunset-orange rounded-full active-tab-indicator" id="tab-pill"></div>
</div>
</div>
<!-- Restaurant Delivery View -->
<div class="space-y-10" id="delivery-view">
<!-- Filter Pills -->
<div class="flex items-center gap-3 overflow-x-auto pb-4 custom-scrollbar no-scrollbar">
<button class="bg-primary text-on-primary px-6 py-2 rounded-full whitespace-nowrap font-label-lg text-label-lg">All</button>
<button class="bg-white border border-outline-variant text-on-surface-variant px-6 py-2 rounded-full whitespace-nowrap font-label-lg text-label-lg hover:border-primary hover:text-primary transition-all">Nigerian</button>
<button class="bg-white border border-outline-variant text-on-surface-variant px-6 py-2 rounded-full whitespace-nowrap font-label-lg text-label-lg hover:border-primary hover:text-primary transition-all">Chinese</button>
<button class="bg-white border border-outline-variant text-on-surface-variant px-6 py-2 rounded-full whitespace-nowrap font-label-lg text-label-lg hover:border-primary hover:text-primary transition-all">Fast Food</button>
<button class="bg-white border border-outline-variant text-on-surface-variant px-6 py-2 rounded-full whitespace-nowrap font-label-lg text-label-lg hover:border-primary hover:text-primary transition-all">Continental</button>
<button class="bg-white border border-outline-variant text-on-surface-variant px-6 py-2 rounded-full whitespace-nowrap font-label-lg text-label-lg hover:border-primary hover:text-primary transition-all">Healthy</button>
<button class="bg-white border border-outline-variant text-on-surface-variant px-6 py-2 rounded-full whitespace-nowrap font-label-lg text-label-lg hover:border-primary hover:text-primary transition-all">Desserts</button>
</div>
<!-- Restaurant Grid -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
<!-- Restaurant Card 1 -->
<div class="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row h-full">
<div class="relative w-full md:w-2/5 min-h-[240px]">
<img class="absolute inset-0 w-full h-full object-cover" data-alt="A vibrant, top-down photograph of premium Jollof Rice served in a heavy earthenware bowl, garnished with fresh herbs and grilled chicken. The lighting is warm and golden, reminiscent of a high-end Lagos bistro. The composition is modern and artistic, using rich oranges and deep greens against a minimalist light wood background, embodying the JAHRAH luxury aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3kTEMoUdtE6xhjPlbilbOwE0GWgKmqNtQyrWHQco4UYWk6ruqUBhB8wa4Sp_ugS1UxW6u06Gn4IGaiwsLyCNuZwj_8nwqHS2ppX3sRmJS80lPH-2wZrXcPyLAQBD4ByTUX4VzNdDgUS8td_aHTwY8H3iqcp-bVrl6Mqcuq95mYmftRAKDVM_m8cFXEv_f-NyKfPRClItmXGhyTV7vuOYkA4-6v7f8JyXOXuoumFbwPfV7sJzKRE8NC_p2lBrI10VG_oI9ml5kmH0"/>
<div class="absolute top-4 left-4 bg-terracotta-clay text-white px-3 py-1 rounded-sm font-label-lg text-[10px] uppercase tracking-widest">JAHRAH Pick</div>
</div>
<div class="p-8 flex flex-col justify-between flex-1">
<div>
<div class="flex justify-between items-start mb-2">
<h3 class="font-headline-md text-headline-md text-on-background">Terra Kulture</h3>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-gold-leaf" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-bold text-on-surface">4.8</span>
<span class="text-on-surface-variant text-sm">(500+)</span>
</div>
</div>
<p class="text-on-surface-variant mb-4">Nigerian â€¢ Traditional â€¢ Grill</p>
<div class="grid grid-cols-2 gap-4 mb-6">
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-primary">schedule</span>
<span class="text-sm">25â€“40 mins</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-primary">delivery_dining</span>
<span class="text-sm">Free Delivery</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-primary">shopping_bag</span>
<span class="text-sm">Min â‚¦ 3,500</span>
</div>
</div>
</div>
<button class="w-full bg-sunset-orange text-on-primary py-4 rounded-lg font-label-lg text-label-lg hover:bg-terracotta-clay transition-colors uppercase tracking-widest">Order Now</button>
</div>
</div>
<!-- Restaurant Card 2 -->
<div class="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row h-full">
<div class="relative w-full md:w-2/5 min-h-[240px]">
<img class="absolute inset-0 w-full h-full object-cover" data-alt="A professional food photography shot of steaming Dim Sum and artisan noodles from a contemporary Asian restaurant. The scene features deep indigo ceramics on a textured stone table, lit by soft ambient side lighting that highlights the delicate steam and textures. The overall mood is sophisticated and clean, perfectly aligned with a premium pan-African luxury brand's global perspective." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcv7hvUO0aNCNnSu5KolaF9dNDbdgiwSy_OxQa4BzzrH616OhZ1lgYRDOCP-oXiRuDmMiQDpy-N8ZGWvTYS349g039OZt3Tl0ZOBlOGudJ7HBNLLUyPNO1OuJ3RkvQgdDIXddHIChBSVcM7_GSA70Ml93FCP_O7PMSVgMr3xfq4FVodKx10qX-G1CSSv0RXQUEjwRR0jnUwA7PCfZSIUpqThLtaL0xnwL2EgtO-AEuymLBWA2CSSCQkYfG7i6vKQ3eNFCS9cHo6SQ"/>
</div>
<div class="p-8 flex flex-col justify-between flex-1">
<div>
<div class="flex justify-between items-start mb-2">
<h3 class="font-headline-md text-headline-md text-on-background">Zen Garden</h3>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-gold-leaf" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-bold text-on-surface">4.6</span>
<span class="text-on-surface-variant text-sm">(320+)</span>
</div>
</div>
<p class="text-on-surface-variant mb-4">Chinese â€¢ Asian Fusion â€¢ Dim Sum</p>
<div class="grid grid-cols-2 gap-4 mb-6">
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-primary">schedule</span>
<span class="text-sm">30â€“50 mins</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-primary">delivery_dining</span>
<span class="text-sm">â‚¦ 800 Fee</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-primary">shopping_bag</span>
<span class="text-sm">Min â‚¦ 5,000</span>
</div>
</div>
</div>
<button class="w-full bg-sunset-orange text-on-primary py-4 rounded-lg font-label-lg text-label-lg hover:bg-terracotta-clay transition-colors uppercase tracking-widest">Order Now</button>
</div>
</div>
<!-- Restaurant Card 3 -->
<div class="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row h-full">
<div class="relative w-full md:w-2/5 min-h-[240px]">
<img class="absolute inset-0 w-full h-full object-cover" data-alt="A high-end burger assembly with artisanal brioche buns, wagyu beef, and melted aged cheddar, presented on a dark slate plate. The lighting is moody and dramatic with high contrast, highlighting the glossy textures of the food. The backdrop is a minimalist interior with warm ambient tones, staying true to the JAHRAH brand's commitment to high-quality visual storytelling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0birdk2P5jo_D3Gpq9g_l9ECNxvA4zYp3jT7Qe9Hg_EVXa-pqK1_Egi9EIh1b0T8I84RVgQQ1fqdkfXFCUjCQiMMDMlfZhrdmdo9tjRJNUJXu6hrmalZBPA7veVaNj4_f-y88kTC6Ej9cfFP0wFrLWQjCduVmuTWRzDphxDZf3mA660la5jLeHAVMi_UvHVnaR4YrrBv0oTrWdBeji2N795KXjpF1DwoexvJrtEoJp5wflswbDVsVFaegHV9FrnvG4KuIcy1qkgE"/>
</div>
<div class="p-8 flex flex-col justify-between flex-1">
<div>
<div class="flex justify-between items-start mb-2">
<h3 class="font-headline-md text-headline-md text-on-background">Burg Co.</h3>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-gold-leaf" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-bold text-on-surface">4.9</span>
<span class="text-on-surface-variant text-sm">(1.2k)</span>
</div>
</div>
<p class="text-on-surface-variant mb-4">Fast Food â€¢ Gourmet Burgers â€¢ Wings</p>
<div class="grid grid-cols-2 gap-4 mb-6">
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-primary">schedule</span>
<span class="text-sm">20â€“35 mins</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-primary">delivery_dining</span>
<span class="text-sm">â‚¦ 500 Fee</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-primary">shopping_bag</span>
<span class="text-sm">Min â‚¦ 3,500</span>
</div>
</div>
</div>
<button class="w-full bg-sunset-orange text-on-primary py-4 rounded-lg font-label-lg text-label-lg hover:bg-terracotta-clay transition-colors uppercase tracking-widest">Order Now</button>
</div>
</div>
<!-- Restaurant Card 4 -->
<div class="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row h-full">
<div class="relative w-full md:w-2/5 min-h-[240px]">
<img class="absolute inset-0 w-full h-full object-cover" data-alt="A refreshing display of healthy Mediterranean salads, hummus, and grilled seafood on an outdoor terrace overlooking a garden. The photography is bright, airy, and saturated with natural sunlight, creating a fresh and inviting atmosphere. The color palette emphasizes greens, vibrant yellows, and crisp whites, reflecting a premium health-conscious lifestyle within a modern African context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUqByugBOr0awzZRu9W4uHcWXlkKs81AD32d83W1TW7v0JZfRjxnSRKuaoP0htxBL8s-iCnkmSstBRF3F-Q5cRc6QTL4lOGBWHzhTbj4nAaPYaaSTJUYFcLLeEG0NEhjEDL4xijubNavKmgwExv1JVajenmg_up89Pfph-Axf3yJkmgFNX91aPRqJrXtoHvAkeBlTgjceDiIj3Jub8aAvv7rL62D945IabKL31V_Ueb4_o0OGe4Rq6mocv2ztS36nDkdblgSloonQ"/>
<div class="absolute top-4 left-4 bg-terracotta-clay text-white px-3 py-1 rounded-sm font-label-lg text-[10px] uppercase tracking-widest">JAHRAH Pick</div>
</div>
<div class="p-8 flex flex-col justify-between flex-1">
<div>
<div class="flex justify-between items-start mb-2">
<h3 class="font-headline-md text-headline-md text-on-background">The Orchid Bistro</h3>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-gold-leaf" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-bold text-on-surface">4.7</span>
<span class="text-on-surface-variant text-sm">(850+)</span>
</div>
</div>
<p class="text-on-surface-variant mb-4">Continental â€¢ Bistro â€¢ Coffee</p>
<div class="grid grid-cols-2 gap-4 mb-6">
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-primary">schedule</span>
<span class="text-sm">35â€“55 mins</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-primary">delivery_dining</span>
<span class="text-sm">Free Delivery</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-primary">shopping_bag</span>
<span class="text-sm">Min â‚¦ 4,000</span>
</div>
</div>
</div>
<button class="w-full bg-sunset-orange text-on-primary py-4 rounded-lg font-label-lg text-label-lg hover:bg-terracotta-clay transition-colors uppercase tracking-widest">Order Now</button>
</div>
</div>
</div>
</div>
<!-- Private Chef View (Hidden by default) -->
<div class="hidden space-y-10" id="chef-view">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<!-- Chef Card 1 -->
<div class="bg-white rounded-lg shadow-sm border border-outline-variant hover:shadow-md transition-all overflow-hidden">
<div class="h-64 relative">
<img class="w-full h-full object-cover" data-alt="A professional portrait of a confident African chef in a pristine white uniform, smiling warmly in a high-end designer kitchen. The lighting is soft and cinematic, with warm bokeh highlights in the background. The aesthetic is clean, premium, and focused on professionalism, representing the top-tier 'Pro' talent curated by the JAHRAH platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOMOnRzsRgmPphEH_-Meo7HUN_MbAWrRQNgxB9oNawrQ0_VZTa4tftaIkhm3L5u7ye-agDU6kXGvw2l6ZUbWkcKs1WG3sBZSM4g_jFJHY01OBOVGcjiPJ0CMJvfnFyd5EMBFNn64cFHr0F9Urtyz3YvD103WVeaCN9LC5KLCyVu_85xlnTM4mDxqHmQPhSt0BhxP_v0_Ji4iFLXd84JWRSAXFI1o2PcRAZMs_iUXS7Xn-kDdmdAa1gOTx4LrRqgzGohL-twQYndYI"/>
<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
<h3 class="font-headline-md text-headline-md text-white">Chef Tunde Balogun</h3>
<p class="text-white/80 font-label-lg">Master of Modern Nigerian Cuisine</p>
</div>
</div>
<div class="p-8 space-y-6">
<div class="flex justify-between items-center pb-4 border-b border-surface-container">
<div>
<p class="text-on-surface-variant text-sm uppercase tracking-wider mb-1">Starting from</p>
<p class="font-price-display text-price-display text-primary">â‚¦ 75,000 <span class="text-sm font-normal text-on-surface-variant">/ event</span></p>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-gold-leaf" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-bold">4.9</span>
</div>
</div>
<div class="space-y-4">
<div>
<p class="font-label-lg text-on-surface mb-2">Specialties</p>
<div class="flex flex-wrap gap-2">
<span class="bg-surface-container px-3 py-1 rounded text-xs text-on-surface-variant">Afro-Fusion</span>
<span class="bg-surface-container px-3 py-1 rounded text-xs text-on-surface-variant">Private Dinners</span>
<span class="bg-surface-container px-3 py-1 rounded text-xs text-on-surface-variant">Fine Dining</span>
</div>
</div>
<div>
<p class="font-label-lg text-on-surface mb-2">Event Types</p>
<p class="text-on-surface-variant text-sm">Weddings, Corporate, Romantic Dinners, Birthdays</p>
</div>
</div>
<button class="w-full bg-forest-deep text-on-primary py-4 rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-opacity uppercase tracking-widest">Book Chef</button>
</div>
</div>
<!-- Chef Card 2 -->
<div class="bg-white rounded-lg shadow-sm border border-outline-variant hover:shadow-md transition-all overflow-hidden">
<div class="h-64 relative">
<img class="w-full h-full object-cover" data-alt="A female chef of African descent meticulously plating a delicate, colorful dessert in a minimalist, sun-drenched culinary studio. The shot is a close-up focusing on her concentration and the artistry of the food. The background is a mix of marble and polished brass, creating a luxurious and sophisticated atmosphere that highlights the premium quality of the service." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuWZeUJviTsZS3QeBBxua9FXcnPiKJrsujZQtlvOuZeYNPasVK899XbW6bGLcw1BIS4UB717ivZ_vQ2BSRpp7BFaR4yzCZwcp_vTJ_6zvwY9Q67BkuCI18DnOCOoSCfwGo1HJz0YowfTF4n2XawwGkWgGoEJvzu_MJAilKhnVWueUvhm1V9yftH08VOwrI4vOhRWZlo9bXbuts3IIAvRtqHJwdaR0mOMnF-EGPvcQVNY01GsN0nN9YkFrE9Sx0f9shR4YK_FfnhZs"/>
<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
<h3 class="font-headline-md text-headline-md text-white">Chef Amara Okeke</h3>
<p class="text-white/80 font-label-lg">Pastry & Pan-African Fusion Specialist</p>
</div>
</div>
<div class="p-8 space-y-6">
<div class="flex justify-between items-center pb-4 border-b border-surface-container">
<div>
<p class="text-on-surface-variant text-sm uppercase tracking-wider mb-1">Starting from</p>
<p class="font-price-display text-price-display text-primary">â‚¦ 60,000 <span class="text-sm font-normal text-on-surface-variant">/ event</span></p>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-gold-leaf" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-bold">4.8</span>
</div>
</div>
<div class="space-y-4">
<div>
<p class="font-label-lg text-on-surface mb-2">Specialties</p>
<div class="flex flex-wrap gap-2">
<span class="bg-surface-container px-3 py-1 rounded text-xs text-on-surface-variant">Pastry Arts</span>
<span class="bg-surface-container px-3 py-1 rounded text-xs text-on-surface-variant">Dessert Tables</span>
<span class="bg-surface-container px-3 py-1 rounded text-xs text-on-surface-variant">Cocktails</span>
</div>
</div>
<div>
<p class="font-label-lg text-on-surface mb-2">Event Types</p>
<p class="text-on-surface-variant text-sm">Baby Showers, Launch Parties, Tea Parties</p>
</div>
</div>
<button class="w-full bg-forest-deep text-on-primary py-4 rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-opacity uppercase tracking-widest">Book Chef</button>
</div>
</div>
<!-- Chef Card 3 -->
<div class="bg-white rounded-lg shadow-sm border border-outline-variant hover:shadow-md transition-all overflow-hidden">
<div class="h-64 relative">
<img class="w-full h-full object-cover" data-alt="A charismatic chef preparing grilled seafood over an open flame in a high-end outdoor terrace setting. The scene is filled with vibrant colors from fresh ingredients and the warm glow of the fire. The photography captures a sense of energy and artisanal craftsmanship, reflecting a premium lifestyle brand that values heritage and modern luxury." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW-eL6jUffLk-1O_dxVYFWKTcP8fixnUWPFoZydxfKUUIJnn0-VbGWL4Vwj-VhlcY40YYviyOhAMe5pgYnl5IN8gylsYXswtE-1Asj-8gdimCpNNA6by_NDeINJKGeu12hcSJOdxTXqMbq3Zb8HInqJz5htm4dci70dIr5wt-mbRb6NUYCznRIp7yqJLG_UBNK5fjN0glSVfzZRBFKVxrodnYB79L9pgbLutlDnz-2a6l45fuhMfxRG4roA1NgT54XjoZPdB60yN4"/>
<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
<h3 class="font-headline-md text-headline-md text-white">Chef Kofi Mensah</h3>
<p class="text-white/80 font-label-lg">Coastal Grill & Seafood Maestro</p>
</div>
</div>
<div class="p-8 space-y-6">
<div class="flex justify-between items-center pb-4 border-b border-surface-container">
<div>
<p class="text-on-surface-variant text-sm uppercase tracking-wider mb-1">Starting from</p>
<p class="font-price-display text-price-display text-primary">â‚¦ 90,000 <span class="text-sm font-normal text-on-surface-variant">/ event</span></p>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-gold-leaf" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-bold">5.0</span>
</div>
</div>
<div class="space-y-4">
<div>
<p class="font-label-lg text-on-surface mb-2">Specialties</p>
<div class="flex flex-wrap gap-2">
<span class="bg-surface-container px-3 py-1 rounded text-xs text-on-surface-variant">Grilled Seafood</span>
<span class="bg-surface-container px-3 py-1 rounded text-xs text-on-surface-variant">Garden BBQ</span>
<span class="bg-surface-container px-3 py-1 rounded text-xs text-on-surface-variant">Gourmet Grilling</span>
</div>
</div>
<div>
<p class="font-label-lg text-on-surface mb-2">Event Types</p>
<p class="text-on-surface-variant text-sm">Outdoor Events, Private Parties, Weekend Retreats</p>
</div>
</div>
<button class="w-full bg-forest-deep text-on-primary py-4 rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-opacity uppercase tracking-widest">Book Chef</button>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-surface-container dark:bg-surface-container-highest full-width mt-section-gap">
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter px-margin-desktop py-section-gap max-w-container-max mx-auto">
<div class="col-span-2 lg:col-span-1 space-y-6">
<h2 class="font-headline-md text-headline-md font-bold text-primary">JAHRAH</h2>
<p class="text-on-surface-variant font-body-md">The cultural leader in premium lifestyle experiences across Africa. Discover, book, and enjoy the best of the continent.</p>
</div>
<div class="space-y-4">
<p class="font-label-lg text-on-surface font-semibold">About</p>
<nav class="flex flex-col gap-2">
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/about">About</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/story">Story</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/careers">Careers</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Investor Relations</a>
</nav>
</div>
<div class="space-y-4">
<p class="font-label-lg text-on-surface font-semibold">Services</p>
<nav class="flex flex-col gap-2">
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/stays">Stays</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/ride">Ride</a>
<a class="text-primary font-semibold font-body-md" href="/eats">Eats</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/glow">Glow</a>
</nav>
</div>
<div class="space-y-4">
<p class="font-label-lg text-on-surface font-semibold">Partners</p>
<nav class="flex flex-col gap-2">
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/pro-onboarding">Become a Pro</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Host Your Space</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Driver Sign-Up</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/partner">Partner</a>
</nav>
</div>
<div class="space-y-4">
<p class="font-label-lg text-on-surface font-semibold">Support</p>
<nav class="flex flex-col gap-2">
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/help">Help Centre</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/safety">Safety Centre</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Terms of Service</a>
</nav>
</div>
</div>
<div class="border-t border-outline-variant/30 px-margin-desktop py-8 max-w-container-max mx-auto text-center lg:text-left">
<p class="text-on-surface-variant text-sm font-body-md">Â© 2024 JAHRAH. All rights reserved. Nigeria | Ghana | Kenya | South Africa | â‚¦ NGN</p>
</div>
</footer>
<script>
        function toggleView(view) {
            const deliveryView = document.getElementById('delivery-view');
            const chefView = document.getElementById('chef-view');
            const tabPill = document.getElementById('tab-pill');
            const btnDelivery = document.getElementById('btn-delivery');
            const btnChef = document.getElementById('btn-chef');

            if (view === 'delivery') {
                deliveryView.classList.remove('hidden');
                chefView.classList.add('hidden');
                tabPill.style.transform = 'translateX(0)';
                btnDelivery.classList.add('text-on-primary');
                btnDelivery.classList.remove('text-on-surface-variant');
                btnChef.classList.add('text-on-surface-variant');
                btnChef.classList.remove('text-on-primary');
            } else {
                deliveryView.classList.add('hidden');
                chefView.classList.remove('hidden');
                tabPill.style.transform = 'translateX(100%)';
                btnChef.classList.add('text-on-primary');
                btnChef.classList.remove('text-on-surface-variant');
                btnDelivery.classList.add('text-on-surface-variant');
                btnDelivery.classList.remove('text-on-primary');
            }
        }
    </script>`

export default function EatsFoodPrivateChefsPage() {
  return <div dangerouslySetInnerHTML={{ __html: stitchHtml }} />
}

