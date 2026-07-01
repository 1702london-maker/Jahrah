export const metadata = { title: "JAHRAH | The Pan-African Lifestyle Hub" }

const stitchHtml = `<!-- TopNavBar -->
<nav class="bg-surface dark:bg-surface-dim shadow-sm docked full-width top-0 sticky z-50">
<div class="flex justify-between items-center px-margin-desktop py-4 w-full max-w-container-max mx-auto">
<div class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">JAHRAH</div>
<div class="hidden md:flex items-center gap-8">
<a class="font-label-lg text-label-lg text-primary font-bold border-b-2 border-primary pb-1" href="/stays">Stays</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/ride">Ride</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/eats">Eats</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/fix">Fix</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/glow">Glow</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/events">Events</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/market">Market</a>
</div>
<div class="flex items-center gap-6">
<div class="flex gap-4 items-center">
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">location_on</span>
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">notifications</span>
</div>
<a href="/pro-onboarding" class="font-label-lg text-label-lg text-primary hover:opacity-80 hidden lg:block">List your space</a>
<a href="/dashboard" class="bg-sunset-orange text-white px-6 py-2 rounded-full font-label-lg text-label-lg hover:scale-95 transition-all">Sign in / Register</a>
</div>
</div>
</nav>
<!-- Hero Section -->
<section class="relative h-[600px] flex items-center justify-center">
<div class="absolute inset-0 z-0 overflow-hidden">
<div class="absolute inset-0 bg-black/40 z-10"></div>
<img class="w-full h-full object-cover" data-alt="A cinematic, high-resolution wide shot of a luxury villa in Lagos with modern African architecture, surrounded by lush palm trees and a clear blue swimming pool at sunset. The lighting is warm and golden, creating a premium and inviting atmosphere that captures high-end travel and luxury hospitality in Nigeria. The image should feel spacious and clean with a focus on sophisticated design elements." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcYlAMfnS7OYAifxmK-P4eqfYwfiiwBpordpC04Zf-HEIOI41vXSi1Sji5PsCxsXlReDze5VIapxiCMUZdA6svVsYbL4JdnjS5Vy5MQYwoyVu8eSw6an5nxLcdw4ejQCUW5-zTds_3usFyfEdw9jxens1eEnCBBcRQAGbRHh24iTnFP9XMUH75QEafUMqQQwJmycKL_o2wiqQDJe4RQmywcnUjjpRn6AuCK0LQgijxItyyHw4TBujewMVJTtl9pdUxlHOFrUvgFJg"/>
</div>
<div class="relative z-20 w-full max-w-4xl px-margin-mobile text-center">
<h1 class="font-display-lg text-display-lg text-white mb-8">Elevate your everyday.</h1>
<div class="bg-white p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2">
<div class="flex-1 w-full px-6 py-3 flex items-center border-r border-outline-variant">
<span class="material-symbols-outlined text-outline mr-2">location_on</span>
<input class="w-full border-none focus:ring-0 bg-transparent text-on-surface font-body-md" placeholder="Where are you going?" type="text"/>
</div>
<div class="flex-1 w-full px-6 py-3 flex items-center border-r border-outline-variant">
<span class="material-symbols-outlined text-outline mr-2">apps</span>
<select class="w-full border-none focus:ring-0 bg-transparent text-on-surface font-body-md appearance-none">
<option>What do you need?</option>
<option>Stays</option>
<option>Eats</option>
<option>Repair Services</option>
</select>
</div>
<div class="flex-1 w-full px-6 py-3 flex items-center border-r border-outline-variant">
<span class="material-symbols-outlined text-outline mr-2">calendar_today</span>
<input class="w-full border-none focus:ring-0 bg-transparent text-on-surface font-body-md" placeholder="When?" type="text"/>
</div>
<a href="/stays" class="bg-sunset-orange text-white px-8 py-4 rounded-full font-label-lg text-label-lg hover:scale-95 transition-all w-full md:w-auto flex items-center justify-center gap-2"><span class="material-symbols-outlined">search</span> Search JAHRAH</a>
</div>
</div>
</section>
<!-- Quick Access Pills -->
<section class="py-12 bg-parchment">
<div class="max-w-container-max mx-auto px-margin-desktop overflow-x-auto hide-scrollbar flex justify-center gap-6">
<a href="/stays" class="flex flex-col items-center gap-2 group min-w-[80px]">
<div class="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
<span class="material-symbols-outlined text-primary text-3xl">house</span>
</div>
<span class="font-label-lg text-label-lg">Stays</span>
</a>
<a href="/ride" class="flex flex-col items-center gap-2 group min-w-[80px]">
<div class="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
<span class="material-symbols-outlined text-primary text-3xl">car_rental</span>
</div>
<span class="font-label-lg text-label-lg">Ride</span>
</a>
<a href="/eats" class="flex flex-col items-center gap-2 group min-w-[80px]">
<div class="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
<span class="material-symbols-outlined text-primary text-3xl">restaurant</span>
</div>
<span class="font-label-lg text-label-lg">Eats</span>
</a>
<a href="/fix" class="flex flex-col items-center gap-2 group min-w-[80px]">
<div class="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
<span class="material-symbols-outlined text-primary text-3xl">build</span>
</div>
<span class="font-label-lg text-label-lg">Fix</span>
</a>
<a href="/glow" class="flex flex-col items-center gap-2 group min-w-[80px]">
<div class="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
<span class="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
</div>
<span class="font-label-lg text-label-lg">Glow</span>
</a>
<a href="/events" class="flex flex-col items-center gap-2 group min-w-[80px]">
<div class="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
<span class="material-symbols-outlined text-primary text-3xl">celebration</span>
</div>
<span class="font-label-lg text-label-lg">Events</span>
</a>
<a href="/market" class="flex flex-col items-center gap-2 group min-w-[80px]">
<div class="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
<span class="material-symbols-outlined text-primary text-3xl">shopping_bag</span>
</div>
<span class="font-label-lg text-label-lg">Market</span>
</a>
</div>
</section>
<!-- Top Stays in Lagos -->
<section class="py-section-gap max-w-container-max mx-auto px-margin-desktop">
<div class="flex justify-between items-end mb-8">
<h2 class="font-headline-lg text-headline-lg">Top Stays in Lagos</h2>
<a class="text-primary font-label-lg text-label-lg hover:underline" href="/stays">View all</a>
</div>
<div class="flex gap-gutter overflow-x-auto hide-scrollbar pb-8">
<!-- Property Card 1 -->
<div class="min-w-[320px] bg-white rounded-lg premium-card-shadow overflow-hidden group">
<div class="relative h-64">
<img class="w-full h-full object-cover" data-alt="A luxury penthouse interior in Victoria Island, Lagos, featuring floor-to-ceiling windows with a view of the Atlantic Ocean. The decor is contemporary Afro-chic with designer furniture, neutral tones, and rich wood textures. High-end lighting fixtures and premium finishes emphasize a world-class hospitality experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo6YdJmiWhf1GQ9v3clkpbol-zcDi5PrVMC-T5jSXR-ZLGeh9bO-37xRP7X44jLC_xkawiwnx1cgf1DH265k0YPfuZBN0r6aHHjx1a4tNLKbUE4tbNA9Whl1z7w8vD6nmMGGF8fENmdv23x0b19uSPHJy23r1GLB_A5wdsXAGhFBafs5G_A0DiILvNrSXO-EGWnHDL96b7X2MzCU0_xSwBSA3_T_jiEQW9bdFQX4TP7waAplZnliD7q2vVpQ2H9aQfr7j9o5J8wJo"/>
<span class="absolute top-4 left-4 bg-white px-3 py-1 rounded-full font-label-lg text-xs font-bold text-on-surface">Superhost</span>
<button class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-sunset-orange transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
</div>
<div class="p-6">
<div class="flex justify-between items-start mb-2">
<a href="/stays/1"><h3 class="font-headline-md text-xl" style="cursor:pointer">The Eko Loft</h3></a>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-gold-leaf text-lg">star</span>
<span class="font-label-lg text-sm">4.9</span>
</div>
</div>
<p class="text-on-surface-variant mb-4">Victoria Island, Lagos</p>
<div class="font-price-display text-primary text-xl">â‚¦ 125,000 <span class="text-on-surface-variant text-sm font-normal">/ night</span></div>
</div>
</div>
<!-- Additional property cards would follow similar structure... (4 total as requested) -->
<div class="min-w-[320px] bg-white rounded-lg premium-card-shadow overflow-hidden group">
<div class="relative h-64">
<img class="w-full h-full object-cover" data-alt="A serene private beach cottage in Lekki, Lagos, with white-washed walls and traditional thatched roofing. The interior is bright and airy with turquoise accents and local Nigerian artwork. Soft afternoon sunlight filters through the windows, creating a relaxing vacation mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTdB-uUTI_bQUO7z1TQ2zdX_68hoXYLcuG-sFwgPBY5tPx2JmJzd-ohOJfatkNKwe0EMujcPGqYfieLdH8FyHpWHzIc17Yc_Oz4EtD87XZvUGcA0XGtQ3N-BcAc-TdeLmQUJuCUGjc-ZuAOdtMyDtxYFVJigykPj0Iz7rNS6c6QSXxW_lzagljHh8DPsqkOPiBb8knYgvYEN9wREUnrrRcW4k7XMJLICkjhMqjhSNpaMEfv8oDgVUUYzp6lGLeC-7GKl6gmXmBQPU"/>
<button class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-sunset-orange transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
</div>
<div class="p-6">
<div class="flex justify-between items-start mb-2">
<a href="/stays/2"><h3 class="font-headline-md text-xl" style="cursor:pointer">Azure Sands Cottage</h3></a>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-gold-leaf text-lg">star</span>
<span class="font-label-lg text-sm">4.8</span>
</div>
</div>
<p class="text-on-surface-variant mb-4">Lekki Phase 1, Lagos</p>
<div class="font-price-display text-primary text-xl">â‚¦ 85,000 <span class="text-on-surface-variant text-sm font-normal">/ night</span></div>
</div>
</div>
<!-- More Property Cards -->
<div class="min-w-[320px] bg-white rounded-lg premium-card-shadow overflow-hidden">
<div class="relative h-64">
<img class="w-full h-full object-cover" data-alt="An upscale modern apartment in Ikoyi, Lagos, showcasing minimalist architecture and high-quality materials like marble and glass. The lighting is sophisticated, emphasizing the clean lines and spacious layout of the living area. The view shows a quiet, leafy Ikoyi street." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJjTsdvNa_mikbhu0p7_fv8z2ZJZxk2jYXEs-6JU8eCCw4VpfZhhMt464AmsVeI2wjRQg-F4CGsepv_r86ggkZZP4uIpZlATLJ67F9RkXj4Uikuc2GL2NpOVybemlFjl6d1WohBsNY8RN2Sqxg9wQcdjjln5uEnpmzn3gO8C0qITD21mnb-pJSLZEwI0rJQk_gHLwLCFg00snO5mvhtNoTh40RnMUH8dWHMUTe9_cAcYH3_8jDU59BN9fpuwKbRCxu7Y1TA0rBamg"/>
<span class="absolute top-4 left-4 bg-white px-3 py-1 rounded-full font-label-lg text-xs font-bold text-on-surface">Superhost</span>
<button class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-sunset-orange transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
</div>
<div class="p-6">
<div class="flex justify-between items-start mb-2">
<a href="/stays/3"><h3 class="font-headline-md text-xl" style="cursor:pointer">Ikoyi Zen Suite</h3></a>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-gold-leaf text-lg">star</span>
<span class="font-label-lg text-sm">5.0</span>
</div>
</div>
<p class="text-on-surface-variant mb-4">Ikoyi, Lagos</p>
<div class="font-price-display text-primary text-xl">â‚¦ 150,000 <span class="text-on-surface-variant text-sm font-normal">/ night</span></div>
</div>
</div>
<div class="min-w-[320px] bg-white rounded-lg premium-card-shadow overflow-hidden">
<div class="relative h-64">
<img class="w-full h-full object-cover" data-alt="A vibrant and colorful boutique hotel room in Lagos Mainland, inspired by Fela Kuti's Kalakuta Republic. The room features bold murals, eclectic furniture, and vintage Nigerian music posters. The atmosphere is energetic and culturally rich." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaI_iCDAiGey727LKOVH7kcJ8LDEnzoGSFgrv0MFuGdjfGm7_gxxe1PVs0xT_UTeKB3CNd4cdSkCGLeRKYOJGl8EuXC0QW_fk54vf4qYFBrCYtrAoPCowSLt0dgKze10YjDOd1KPPW7b6O4k1sR7uuSsA_DGw3cVzskRjyT8IyFKVXYRsPW8f7MsQANYNECB3DRs_vjMPUQYwDpxe03b-DV1ZLqZtET72Fc8oNIfxHWrEIcTyMmUIcTVrTDIX9XclVcMiciOO-GRs"/>
<button class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-sunset-orange transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
</div>
<div class="p-6">
<div class="flex justify-between items-start mb-2">
<a href="/stays/4"><h3 class="font-headline-md text-xl" style="cursor:pointer">Kalakuta Boutique</h3></a>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-gold-leaf text-lg">star</span>
<span class="font-label-lg text-sm">4.7</span>
</div>
</div>
<p class="text-on-surface-variant mb-4">Ikeja, Lagos</p>
<div class="font-price-display text-primary text-xl">â‚¦ 45,000 <span class="text-on-surface-variant text-sm font-normal">/ night</span></div>
</div>
</div>
</div>
</section>
<!-- JAHRAH Pros Near You -->
<section class="py-section-gap bg-surface-container-low">
<div class="max-w-container-max mx-auto px-margin-desktop">
<h2 class="font-headline-lg text-headline-lg mb-8">JAHRAH Pros Near You</h2>
<div class="flex gap-gutter overflow-x-auto hide-scrollbar pb-8">
<!-- Pro Profile 1 -->
<div class="min-w-[240px] bg-white p-8 rounded-xl premium-card-shadow text-center flex flex-col items-center">
<div class="relative mb-4">
<img class="w-24 h-24 rounded-full object-cover" data-alt="A professional headshot of a friendly Nigerian male electrician in a clean uniform, smiling confidently. The background is a soft-focus workshop. He represents high-quality artisanal service and reliability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVWJ0cLIqXt_PY61fLXn8aKRGVmCiMP0UFLwJXX2nwJtNzJnB0C2pKqbtYRdrR8EAUz5s2x3Y9Up9K9Q9qhYnd1HCXQ3MpivpNNXlUegblasLMfny6jLRPwjIP1I4LmxMvsqEsrZMPtl1jvR7iHK3Hef6CzgA2Ck9Umy2Whor4bvtu_QvTWMYZz8JPPjscQthU4FFsx5P848NKBB2GHwqIwlkm5FPtUSAymnoloR68f0nsVI3E-YToy49l1f_2S6_1SuTN5oQX8p0"/>
<span class="absolute bottom-0 right-0 bg-secondary text-white p-1 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
</span>
</div>
<a href="/pro/1"><h3 class="font-headline-md text-lg mb-1" style="cursor:pointer">Chidi O.</h3></a>
<p class="text-primary font-label-lg text-xs uppercase mb-2">Master Electrician</p>
<div class="flex items-center gap-1 mb-4">
<span class="material-symbols-outlined text-gold-leaf text-sm">star</span>
<span class="font-label-lg text-sm">4.9 (124)</span>
</div>
<div class="text-sm text-on-surface-variant mb-6">Starts from â‚¦ 15,000</div>
<a href="/pro/1" class="w-full py-3 border border-sunset-orange text-sunset-orange rounded-full font-label-lg text-sm hover:bg-sunset-orange hover:text-white transition-all">Book Now</a>
</div>
<!-- Repeating for 5 pros... -->
<div class="min-w-[240px] bg-white p-8 rounded-xl premium-card-shadow text-center flex flex-col items-center">
<div class="relative mb-4">
<img class="w-24 h-24 rounded-full object-cover" data-alt="A portrait of a professional female makeup artist with flawless skin, wearing a modern black apron and holding a makeup brush. She is smiling warmly against a bright, minimalist studio backdrop, radiating expertise and creativity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7dZzHuBZfKeuLHXC2H9L0mo6CiisfDLWOeQI3quggHgbQb-f-KBZDlKn4PSKVS2ZjfygZcnBUasyjgNYQ2lH-T84yqstBykeQYHFjqFkTU_eo0DVH4rDZXr-yyJ9rMicj73ukn1wT3NyqIVSpeArM4uRVI2lcBM9Ck1E2Sh6z7o6madbiudM_Y5TL1XXKzkJmC6lJb9SF4tNUTJW44jlZzJP6wsimmAgr5fETTwCqRXUznLR3RFHt9PnOr3URtjGzhiKF3A0wmQQ"/>
<span class="absolute bottom-0 right-0 bg-secondary text-white p-1 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
</span>
</div>
<a href="/pro/2"><h3 class="font-headline-md text-lg mb-1" style="cursor:pointer">Amaka B.</h3></a>
<p class="text-primary font-label-lg text-xs uppercase mb-2">Makeup Artist</p>
<div class="flex items-center gap-1 mb-4">
<span class="material-symbols-outlined text-gold-leaf text-sm">star</span>
<span class="font-label-lg text-sm">5.0 (82)</span>
</div>
<div class="text-sm text-on-surface-variant mb-6">Starts from â‚¦ 25,000</div>
<a href="/pro/1" class="w-full py-3 border border-sunset-orange text-sunset-orange rounded-full font-label-lg text-sm hover:bg-sunset-orange hover:text-white transition-all">Book Now</a>
</div>
<div class="min-w-[240px] bg-white p-8 rounded-xl premium-card-shadow text-center flex flex-col items-center">
<div class="relative mb-4">
<img class="w-24 h-24 rounded-full object-cover" data-alt="A skilled male plumber in professional attire, looking directly at the camera with a helpful and experienced expression. He is in a clean, modern bathroom setting, representing trust and technical competence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2PXzapzIKW6IESk8ImonRvcXlnDx8AxOZm_CKTf6BYAhK-FVJBH0bPeOThsZ0tnHpz_P4ReuBC1xI5ZRTDp-DEpRo9V3BLPR8nYlThNQ4vCOyJ8l_4Tvz3QckzcHsRJIrF9zaZ4IlntgVE8KN6QsntEc-Muw_bV4mX3nPriaa3IOMRsTegMIlDNKzMWeZmpukBOITIQQKgFwcLFjqzdCQXVg_8-SZcaGDc33ZdcRDqANKqlGa5726hhWjp_vncKVDUe3Ql6lvEoc"/>
<span class="absolute bottom-0 right-0 bg-secondary text-white p-1 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
</span>
</div>
<a href="/pro/3"><h3 class="font-headline-md text-lg mb-1" style="cursor:pointer">Tunde K.</h3></a>
<p class="text-primary font-label-lg text-xs uppercase mb-2">Expert Plumber</p>
<div class="flex items-center gap-1 mb-4">
<span class="material-symbols-outlined text-gold-leaf text-sm">star</span>
<span class="font-label-lg text-sm">4.7 (56)</span>
</div>
<div class="text-sm text-on-surface-variant mb-6">Starts from â‚¦ 12,000</div>
<a href="/pro/1" class="w-full py-3 border border-sunset-orange text-sunset-orange rounded-full font-label-lg text-sm hover:bg-sunset-orange hover:text-white transition-all">Book Now</a>
</div>
<div class="min-w-[240px] bg-white p-8 rounded-xl premium-card-shadow text-center flex flex-col items-center">
<div class="relative mb-4">
<img class="w-24 h-24 rounded-full object-cover" data-alt="A cheerful African woman in professional cleaning attire, holding eco-friendly cleaning supplies. She has a warm smile and is standing in a bright, spotless modern living room. Her presence suggests reliability and thoroughness." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Tjq_A4JUsnZCAzEJw4BuniBadnoUOjLJf01_KPk-cD7LF6fZ6FUC0pU-lQ8y5nqJQr3z2zGJeMeIYyv8XL8N7VAR4niAzywdHDDhw6BU7a-vGT0TxYlfHLrVEQmIw3eHj_xB5b-BBdl4Op-Cy94krPrRjapyKHCqQFGGVT90JcfEGy0Hks1hIjrQgASQvvH-d_HRo7AHtvjnybchoBjUYwg0imt8AEfdfnLew46e0sRNlKV4PkiEVkGIIKbZcQEwFHDyjZgScSU"/>
<span class="absolute bottom-0 right-0 bg-secondary text-white p-1 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
</span>
</div>
<a href="/pro/4"><h3 class="font-headline-md text-lg mb-1" style="cursor:pointer">Zainab A.</h3></a>
<p class="text-primary font-label-lg text-xs uppercase mb-2">Home Specialist</p>
<div class="flex items-center gap-1 mb-4">
<span class="material-symbols-outlined text-gold-leaf text-sm">star</span>
<span class="font-label-lg text-sm">4.8 (210)</span>
</div>
<div class="text-sm text-on-surface-variant mb-6">Starts from â‚¦ 8,000</div>
<a href="/pro/1" class="w-full py-3 border border-sunset-orange text-sunset-orange rounded-full font-label-lg text-sm hover:bg-sunset-orange hover:text-white transition-all">Book Now</a>
</div>
<div class="min-w-[240px] bg-white p-8 rounded-xl premium-card-shadow text-center flex flex-col items-center">
<div class="relative mb-4">
<img class="w-24 h-24 rounded-full object-cover" data-alt="A trendy male hair stylist with a stylish haircut himself, wearing a denim apron and holding professional shears. He is in a high-end, urban barbershop with industrial decor. He looks professional, artistic, and attentive." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD41Lukml37hrsbyuFS_BS1z1gKbyMzKb-nATnBWN2385TQCUscJhZmmk1MSR8wSOuXnBoXQoiKkbf9k5rU41FLEYfQr68T9-VQuZS673mKkbZ0U36zG4fVZZMd_nlJ3p1eCzjz_9bkKuBL65_n-D3PaNSdAxEMaYMbVdvwIXJDdWg04OKJEMpoP_rKrl9vHBHSZQq_l-xrKu5s09dqBsBlweUHXggszJsdPgee_fWTV9wuPSrfjTovTF4-6xm-Lw3ljqpVe-Lgw-k"/>
<span class="absolute bottom-0 right-0 bg-secondary text-white p-1 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
</span>
</div>
<a href="/pro/5"><h3 class="font-headline-md text-lg mb-1" style="cursor:pointer">Kofi M.</h3></a>
<p class="text-primary font-label-lg text-xs uppercase mb-2">Master Stylist</p>
<div class="flex items-center gap-1 mb-4">
<span class="material-symbols-outlined text-gold-leaf text-sm">star</span>
<span class="font-label-lg text-sm">4.9 (95)</span>
</div>
<div class="text-sm text-on-surface-variant mb-6">Starts from â‚¦ 20,000</div>
<a href="/pro/1" class="w-full py-3 border border-sunset-orange text-sunset-orange rounded-full font-label-lg text-sm hover:bg-sunset-orange hover:text-white transition-all">Book Now</a>
</div>
</div>
</div>
</section>
<!-- Order Food Now -->
<section class="py-section-gap max-w-container-max mx-auto px-margin-desktop">
<h2 class="font-headline-lg text-headline-lg mb-8">Order Food Now</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Food Card 1 -->
<div class="bg-white rounded-lg premium-card-shadow overflow-hidden">
<img class="w-full h-48 object-cover" data-alt="A gourmet presentation of traditional Nigerian Jollof rice with grilled chicken and plantains, served on a luxury ceramic plate. The lighting is rich and saturated, highlighting the vibrant colors and textures of the food. The setting is a high-end restaurant with a contemporary African aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChUvx6-x5b-HTBDHna5gklj8CW2m4-hJ_rih9px2362XrjPrYcG9kabuteWqDIH_3N9abJx-y9Ny8x7WKHgfDLKlSLiLmsVuQfnUjrWWSDfkhuavWQnw6V-fXQEarVO7y90ETx-d9EtyEMtf7BijbSG4WMxRpOg36oBrp9BqmfLMzeWnnGUZ11XoF5Em7j2jTRhxnlX0WrPWP6mkdu9rL4TyjkH3ijmLJ4wNH_3PTS_-ZAcLSZIttgE-L3KH9oD1Q2APhx7Asqrc8"/>
<div class="p-6">
<div class="flex justify-between items-center mb-2">
<h3 class="font-headline-md text-xl">Heritage Kitchen</h3>
<div class="bg-surface-container-high px-2 py-1 rounded text-xs font-bold text-on-surface">35-45 min</div>
</div>
<p class="text-on-surface-variant text-sm mb-4">Contemporary Nigerian â€¢ â‚¦ 4,500 min</p>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-gold-leaf text-sm">star</span>
<span class="font-label-lg text-sm">4.6 (1.2k+)</span>
</div>
</div>
</div>
<!-- Food Card 2 -->
<div class="bg-white rounded-lg premium-card-shadow overflow-hidden">
<img class="w-full h-48 object-cover" data-alt="A tray of artisanal assorted sushi and sashimi, beautifully arranged with edible flowers and wasabi. The lighting is clean and bright, showcasing the freshness of the seafood. The background is a minimalist, upscale sushi bar in Lagos." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrErwfbo_JhYnRpbKRtM3KPTuyU2OEHQ1_flJQmT7JtYdlpDu8dfoe8dLUMCaoWTBGijNHjC7UU5eSyDj-E4BaaDEVy4iQ9IHCQJe2eR6Ewv01K1INRJKsofRzpjLYLRUOPefclMNkQaN6K6JWeZYb6Vw4_Sp9wCKBPlKBbXTLZHwHoCdwct-X-GrbFhwQ9W1GHjP-DqRhTIVUmzAZ1cEzDAJH2Y4hK1dkZAq2OuGX6qUE1pDTju2eNhppTmtbzETnxgm8hXRbOZE"/>
<div class="p-6">
<div class="flex justify-between items-center mb-2">
<h3 class="font-headline-md text-xl">Umi Sushi Bar</h3>
<div class="bg-surface-container-high px-2 py-1 rounded text-xs font-bold text-on-surface">25-35 min</div>
</div>
<p class="text-on-surface-variant text-sm mb-4">Japanese â€¢ â‚¦ 8,000 min</p>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-gold-leaf text-sm">star</span>
<span class="font-label-lg text-sm">4.8 (850+)</span>
</div>
</div>
</div>
<!-- Food Card 3 -->
<div class="bg-white rounded-lg premium-card-shadow overflow-hidden">
<img class="w-full h-48 object-cover" data-alt="A succulent, perfectly grilled steak with a side of truffle fries and asparagus, served in a sophisticated steakhouse setting. The lighting is dramatic and moody, emphasizing the premium quality of the meat. Dark wood and leather accents are visible in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMDlI-YpgCy9IFtiVVN9rB5tQVUmzhpHhDA7Ld8hG2JUo8lGXszOjW6cMA85SrvygpiY0NJl97MumFThp3WL8PKzce2Dv7w9VLBr4DYWlxl0dg--DH_xJquQrGNmCqO70cbqy9xak7USuij7MtidChULwWinsLZNMrbTwpTHHuU_TYqkQkvpXPIRkMIJ2E3nGy2dBsHIuAmGZxy6w_TTgBWQE3GhUSmMuX0gQl8fyaEOWGZxQnhInDgUgfV66wH_ZIWirl9yCL_BQ"/>
<div class="p-6">
<div class="flex justify-between items-center mb-2">
<h3 class="font-headline-md text-xl">The Grill Room</h3>
<div class="bg-surface-container-high px-2 py-1 rounded text-xs font-bold text-on-surface">40-50 min</div>
</div>
<p class="text-on-surface-variant text-sm mb-4">Continental Grill â€¢ â‚¦ 12,000 min</p>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-gold-leaf text-sm">star</span>
<span class="font-label-lg text-sm">4.9 (430+)</span>
</div>
</div>
</div>
</div>
</section>
<!-- Popular Services Icon Grid -->
<section class="py-section-gap bg-parchment">
<div class="max-w-container-max mx-auto px-margin-desktop">
<h2 class="font-headline-lg text-headline-lg mb-8">Popular Services</h2>
<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
<div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 cursor-pointer">
<span class="material-symbols-outlined text-terracotta-clay text-3xl">plumbing</span>
<span class="font-label-lg">Plumber</span>
</div>
<div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 cursor-pointer">
<span class="material-symbols-outlined text-terracotta-clay text-3xl">bolt</span>
<span class="font-label-lg">Electrician</span>
</div>
<div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 cursor-pointer">
<span class="material-symbols-outlined text-terracotta-clay text-3xl">format_paint</span>
<span class="font-label-lg">Painter</span>
</div>
<div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 cursor-pointer">
<span class="material-symbols-outlined text-terracotta-clay text-3xl">ac_unit</span>
<span class="font-label-lg">AC Repair</span>
</div>
<div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 cursor-pointer">
<span class="material-symbols-outlined text-terracotta-clay text-3xl">content_cut</span>
<span class="font-label-lg">Hair Stylist</span>
</div>
<div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 cursor-pointer">
<span class="material-symbols-outlined text-terracotta-clay text-3xl">brush</span>
<span class="font-label-lg">Makeup Artist</span>
</div>
<div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 cursor-pointer">
<span class="material-symbols-outlined text-terracotta-clay text-3xl">pan_tool_alt</span>
<span class="font-label-lg">Nail Tech</span>
</div>
<div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 cursor-pointer">
<span class="material-symbols-outlined text-terracotta-clay text-3xl">cleaning_services</span>
<span class="font-label-lg">House Cleaner</span>
</div>
</div>
</div>
</section>
<!-- Plan Your Next Event Banner -->
<section class="py-section-gap max-w-container-max mx-auto px-margin-desktop">
<div class="relative rounded-2xl overflow-hidden h-[400px]">
<img class="w-full h-full object-cover" data-alt="A vibrant collage of upscale African events: a glamorous wedding reception with floral arrangements, a high-energy corporate product launch with neon lights, and an intimate garden dinner party with hanging lanterns. The style is sophisticated, celebratory, and culturally rich, using a palette of gold, deep blue, and terracotta." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoN1Vl_upMWowhmoMsW597mtrEb9dQF6zpmwmIKJphuXSB-nwVZ4Z7U7MgvWH3bNYxLveoJEx5GqMOxmo-e9kQ0UDlDmVcwyO9DJME7tDqUI8O5bv4wnXmnJTYWqjz4B3LMJojAFm3FeZ0UbJXDNwzfXJLlXJhhrTol7NB2rnIZbvXtV2SpLKJKcllMMoO2muMbGquSp5NBOriAFn0ZvoG7GMumsLFKfBLRFUUFdF9NhEi61hc9_IZH3-5fnyqu0YwEGiXofxz1XE"/>
<div class="absolute inset-0 bg-gradient-to-r from-royal-indigo/80 to-transparent flex flex-col justify-center px-12 text-white">
<h2 class="font-display-lg text-4xl mb-4 max-w-md">Plan Your Next Event with Ease.</h2>
<p class="font-body-lg mb-8 max-w-md opacity-90">From intimate gatherings to grand celebrations, JAHRAH connects you with the best planners and venues.</p>
<a href="/events" class="bg-white text-royal-indigo px-8 py-4 rounded-full font-label-lg text-label-lg hover:bg-sunset-orange hover:text-white transition-all w-fit">Start Planning</a>
</div>
</div>
</section>
<!-- Become a JAHRAH Pro -->
<section class="py-section-gap max-w-container-max mx-auto px-margin-desktop">
<div class="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden premium-card-shadow">
<div class="md:w-1/2 p-16 flex flex-col justify-center">
<h2 class="font-headline-lg text-headline-lg mb-6 text-primary">Your Skill, Your Schedule, Your Success.</h2>
<p class="font-body-lg text-on-surface-variant mb-10">Join thousands of professionals across Africa growing their business on JAHRAH. Reach new customers and manage your workflow seamlessly.</p>
<a href="/pro-onboarding" class="bg-sunset-orange text-white px-10 py-5 rounded-full font-label-lg text-lg hover:scale-95 transition-all w-fit">Join as a Pro</a>
</div>
<div class="md:w-1/2 h-[500px]">
<img class="w-full h-full object-cover" data-alt="A group of smiling, diverse African professionals standing together in a bright, modern office space. The group includes a female photographer, a male carpenter with tools, a chef in a white coat, and a female tech professional. They look confident, happy, and empowered, representing the community of JAHRAH Pros." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYQJa5RtIhOrNO3HKCc_mZur1PV-bQE7yz0QuE2zKw7Qg3kqmdTx7SWCIbXF3KNU-dlHGaiwIi3cfh_G6KQ788qRCoVi5CmkvHXkv02HqZoelOB5KnQkLiXUGGsISYZYjVSRYCPTyv88zjVFV6Gm5kbZa5XXClIKhHlWlKzrY2KojA4olVyRSoW0kVrU3FBAwo7BZXygmAcCdIgAxLGIqN4dPrvhQnnratHRKNDZrh9PVG8pMWm-C5_DDQkAZ16uDG8DcJB_HiUzs"/>
</div>
</div>
</section>
<!-- Download the App -->
<section class="py-section-gap bg-primary text-white overflow-hidden">
<div class="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row items-center">
<div class="md:w-1/2 mb-12 md:mb-0">
<h2 class="font-display-lg text-5xl mb-6">Everything, and then some.</h2>
<p class="font-body-lg opacity-80 mb-10 max-w-lg">Get the full JAHRAH experience on your phone. Book stays, track orders, and chat with pros on the go.</p>
<div class="flex flex-wrap gap-4">
<div class="h-14 w-44 bg-black rounded-lg flex items-center justify-center cursor-pointer border border-white/20 hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined mr-2">apps</span>
<div class="text-left">
<div class="text-[10px] uppercase">Download on the</div>
<div class="text-lg font-bold leading-none">App Store</div>
</div>
</div>
<div class="h-14 w-44 bg-black rounded-lg flex items-center justify-center cursor-pointer border border-white/20 hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined mr-2">google_chat</span>
<div class="text-left">
<div class="text-[10px] uppercase">Get it on</div>
<div class="text-lg font-bold leading-none">Google Play</div>
</div>
</div>
</div>
</div>
<div class="md:w-1/2 relative">
<!-- App Mockup Visual -->
<div class="relative mx-auto w-64 h-[500px] bg-black rounded-[40px] border-[8px] border-white/20 shadow-2xl overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A sleek smartphone display showing the JAHRAH mobile app interface. The screen displays a beautiful home dashboard with vibrant icons for Stays, Ride, and Eats, a search bar, and a 'Top Deals' section with high-quality photography. The UI is clean, modern, and high-contrast, following the brand's luxury aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5jxAb9MgDdpsCqGP9LyuQEGYZvqSVdmdTXoP7T4up9De_QFBEdbou3C-oZMX25l6uwCA2jHsuABPpq5xkrp1yVhPZQ_WzOuFzGGF5gAmIJiXUH3eQ9MeXaThfC2vZmm3EHLHqZXrMr7qG9cQaqYfe9tLceHvowgflZ-ZXgsdQ3NH3EZbFZRqMvmdGS4JXALYlwZY-QANLx9scCFMN55Zn6lx9iQtOz8tTY_p9OOQyB_q_uAIlqYwrCAUT1BMpSveNyjm8LC1amHE"/>
</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-surface-container dark:bg-surface-container-highest">
<div class="max-w-container-max mx-auto px-margin-desktop py-section-gap">
<div class="grid grid-cols-2 md:grid-cols-5 gap-gutter mb-16">
<div class="col-span-2 md:col-span-1">
<div class="font-headline-md text-headline-md font-bold text-primary mb-6">JAHRAH</div>
<p class="font-body-md text-on-surface-variant">The cultural leader in lifestyle and professional services across the continent.</p>
</div>
<div>
<h4 class="font-label-lg text-sm mb-6 uppercase tracking-wider text-primary">Company</h4>
<ul class="space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/about">About</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/story">Story</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/careers">Careers</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/press">Press</a></li>
</ul>
</div>
<div>
<h4 class="font-label-lg text-sm mb-6 uppercase tracking-wider text-primary">Services</h4>
<ul class="space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/stays">Stays</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/ride">Ride</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/eats">Eats</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/fix">Fix</a></li>
</ul>
</div>
<div>
<h4 class="font-label-lg text-sm mb-6 uppercase tracking-wider text-primary">Pros</h4>
<ul class="space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/pro-onboarding">Become a Pro</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/pro-dashboard">Pro Dashboard</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/pro-academy">Pro Academy</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/partner">Partner</a></li>
</ul>
</div>
<div>
<h4 class="font-label-lg text-sm mb-6 uppercase tracking-wider text-primary">Support</h4>
<ul class="space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/help">Help Centre</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/safety">Safety Centre</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/cancellation">Cancellation Policy</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="/privacy">Privacy</a></li>
</ul>
</div>
</div>
<div class="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
<p class="font-body-md text-on-surface-variant text-sm text-center md:text-left">Â© 2024 JAHRAH. All rights reserved. Nigeria | Ghana | Kenya | South Africa | â‚¦ NGN</p>
<div class="flex gap-6">
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">language</span>
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">share</span>
</div>
</div>
</div>
</footer>
<script>
        // Micro-interactions and subtle effects
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                btn.style.transform = 'scale(0.95)';
            });
            btn.addEventListener('mouseup', () => {
                btn.style.transform = 'scale(1)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'scale(1)';
            });
        });
        
        // Sticky Header Effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
        });
    </script>`

export default function HomepagePage() {
  return <div dangerouslySetInnerHTML={{ __html: stitchHtml }} />
}

