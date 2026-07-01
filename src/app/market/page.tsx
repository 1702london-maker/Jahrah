export const metadata = { title: "JAHRAH Market | Premium Pan-African Marketplace" }

const stitchHtml = `<!-- TopNavBar -->
<header class="bg-surface dark:bg-surface-dim shadow-sm docked full-width top-0 sticky z-50">
<div class="flex justify-between items-center px-margin-desktop py-4 w-full max-w-container-max mx-auto">
<div class="flex items-center gap-8">
<a class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed" href="#">JAHRAH</a>
<nav class="hidden md:flex items-center gap-6">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/stays">Stays</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/ride">Ride</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/eats">Eats</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/fix">Fix</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/glow">Glow</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/events">Events</a>
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-label-lg text-label-lg" href="/market">Market</a>
</nav>
</div>
<div class="flex items-center gap-6">
<div class="hidden lg:flex items-center bg-surface-container rounded-full px-4 py-2 w-64">
<span class="material-symbols-outlined text-on-surface-variant mr-2">search</span>
<input class="bg-transparent border-none focus:ring-0 text-label-lg w-full" placeholder="Search..." type="text"/>
</div>
<div class="flex items-center gap-4 text-on-surface-variant">
<span class="material-symbols-outlined hover:text-primary cursor-pointer">location_on</span>
<span class="material-symbols-outlined hover:text-primary cursor-pointer">notifications</span>
<div class="h-8 w-8 rounded-full bg-surface-container-high overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A clean, professional headshot of a stylish West African man in a minimalist office setting with soft natural lighting, reflecting a premium lifestyle aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCELg-v-1LC6Sh8_Lzm9Ht7DWygj2K1a9ZgdKOpsbJ-4g4bRp_wfIW2O1R7qdDYpVBoQ-LWrgYWacEpGCmbck7Tnv9rXGbbDXFKYiYljsAwTAefeFIhaJ-7D2X9PSjaQ0VH7Y4tvztZsFb07GxCu_dTYwEpc3UcgYuKNG617a2e-Cmf68jCqgTyq6nG9WJ7U7PiOGANCJdZKl36cwAetOiE-Jq22eyVgUVMe3E_iXCFfF_rPk9ubdeXpTiBTL68YQQ-z6SCQC63978"/>
</div>
</div>
<button class="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-label-lg hover:scale-95 transition-transform"onclick="window.location.href='/dashboard'">Sign in / Register</button>
</div>
</div>
</header>
<main class="max-w-container-max mx-auto px-margin-desktop py-8">
<!-- Marketplace Header & Search -->
<div class="mb-section-gap">
<h1 class="font-display-lg text-display-lg text-on-surface mb-6">Market â€” Shop JAHRAH</h1>
<div class="relative max-w-2xl">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-2xl">search</span>
<input class="w-full pl-14 pr-6 py-5 rounded-xl border-outline-variant focus:border-terracotta-clay focus:ring-1 focus:ring-terracotta-clay bg-surface-container-lowest font-body-lg shadow-sm transition-all" placeholder="Search for products, brands, sellers..." type="text"/>
</div>
</div>
<!-- Category Pills -->
<div class="flex items-center gap-3 overflow-x-auto no-scrollbar mb-10 pb-2">
<button class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-lg whitespace-nowrap">All</button>
<button class="bg-surface-container-high text-on-surface px-6 py-2 rounded-full font-label-lg whitespace-nowrap hover:bg-primary-fixed transition-colors">Home & Living</button>
<button class="bg-surface-container-high text-on-surface px-6 py-2 rounded-full font-label-lg whitespace-nowrap hover:bg-primary-fixed transition-colors">Beauty</button>
<button class="bg-surface-container-high text-on-surface px-6 py-2 rounded-full font-label-lg whitespace-nowrap hover:bg-primary-fixed transition-colors">Fashion & Fabric</button>
<button class="bg-surface-container-high text-on-surface px-6 py-2 rounded-full font-label-lg whitespace-nowrap hover:bg-primary-fixed transition-colors">Food & Groceries</button>
<button class="bg-surface-container-high text-on-surface px-6 py-2 rounded-full font-label-lg whitespace-nowrap hover:bg-primary-fixed transition-colors">Electronics</button>
<button class="bg-surface-container-high text-on-surface px-6 py-2 rounded-full font-label-lg whitespace-nowrap hover:bg-primary-fixed transition-colors">Wellness</button>
<button class="bg-surface-container-high text-on-surface px-6 py-2 rounded-full font-label-lg whitespace-nowrap hover:bg-primary-fixed transition-colors">Art & Collectibles</button>
</div>
<!-- Hero Banner: Featured Seller -->
<section class="relative h-[480px] rounded-3xl overflow-hidden mb-section-gap group">
<div class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
<img class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A high-end cinematic lifestyle shot featuring premium handcrafted African pottery and textiles displayed in a sun-drenched, architectural concrete villa. The lighting is warm and directional, emphasizing textures and the sunset-orange and royal-indigo palette of the brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY4c9FTt2riVra18EL-RwRiu712NBwp0z3SUe6YKogz7n1Ouf7zdvtRnA7lIUlFqMrNN29ESUcqiGWRhLIm5KcqHM5AHvgxy8-6wmZ2cPnO1UPEDqE0MUFhDL2MDFsnk3ewKPE7zysXJM31gmtcs2K_fHk4KJ6ASs9xDu54T_R_kqrhts6IHJjJd9Rg8e1SVGJuUCLlmXVlD861MdiuZAHJqPFflzA1Qxsii-zrl8ORVjRxru0svXHj4YtiBgY1mMMUfcsLIqSWPM"/>
<div class="relative z-20 h-full flex flex-col justify-center px-12 max-w-xl text-white">
<span class="font-label-lg text-sunset-orange bg-white/10 backdrop-blur-md px-4 py-1 rounded-full w-fit mb-4">Featured Seller: OMO LABS</span>
<h2 class="font-headline-lg text-headline-lg mb-4">Handcrafted Excellence from Lagos</h2>
<p class="font-body-lg text-body-lg mb-8 opacity-90">Discover the exclusive 'Heritage Collection'â€”where traditional weaving meets contemporary industrial design.</p>
<button class="bg-sunset-orange hover:bg-primary text-white font-label-lg px-8 py-4 rounded-lg w-fit transition-all flex items-center gap-2">
                    Shop Collection
                    <span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</section>
<!-- Flash Deals -->
<section class="mb-section-gap">
<div class="flex items-center justify-between mb-8">
<div class="flex items-center gap-6">
<h3 class="font-headline-md text-headline-md">Flash Deals</h3>
<div class="flex items-center gap-2 bg-terracotta-clay text-white px-4 py-1 rounded-lg">
<span class="material-symbols-outlined text-sm">schedule</span>
<span class="font-label-lg tabular-nums" id="countdown">04:12:45</span>
</div>
</div>
<a class="text-primary font-label-lg hover:underline" href="#">View All</a>
</div>
<div class="flex gap-6 overflow-x-auto no-scrollbar pb-4">
<!-- Deal Card 1 -->
<div class="flex-none w-64 bg-surface-container-low rounded-xl overflow-hidden card-shadow group">
<div class="relative h-64">
<div class="absolute top-3 left-3 bg-error text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">-40%</div>
<img class="w-full h-full object-cover transition-transform group-hover:scale-105" data-alt="A close-up product shot of a luxury leather travel bag in a rich mahogany brown, featuring artisanal stitching. The background is a clean, neutral parchment color with soft shadows, creating a high-end editorial feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtLJuYtYkTt_NDMAEchBHuZHJeVkrm_YEwz1h-gQcEc270jdbUmX4tvbHBAXBUqgqICBV-kRb7OohL6aDDQ6FSAkS2t3zamh4eHOSWbwGGnH8z7Vmar53bLTQP1PVHaaT9Jf4_UGE_x14aq1wcHxwbVVpTedCsysll_Ab-FgsWG97CZPftV-07MBums0kbAtocifCecUoJrvh7qmSs3K5BH3qX38ym_Z7fpczxurjiz6CTk1w7MWwRMysxZqjvj0KKS4A6HHAsYng"/>
</div>
<div class="p-4">
<h4 class="font-label-lg text-on-surface truncate">Artisan Leather Weekend Bag</h4>
<div class="mt-2">
<span class="font-price-display text-primary">â‚¦ 85,000</span>
<span class="text-xs line-through text-on-surface-variant ml-2">â‚¦ 142,000</span>
</div>
</div>
</div>
<!-- Deal Card 2 -->
<div class="flex-none w-64 bg-surface-container-low rounded-xl overflow-hidden card-shadow group">
<div class="relative h-64">
<div class="absolute top-3 left-3 bg-error text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">-25%</div>
<img class="w-full h-full object-cover transition-transform group-hover:scale-105" data-alt="A sleek, modern wireless speaker with a unique textured fabric finish in forest green. The product is shot against a minimalist architectural background with warm, atmospheric lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEwDLNeZw7tEZSCwpHBdcpqWNG7_b2RR8hl-W2jQt5B2MfCZEY8lLIafecGpqRWqs3JTWVcVyf7ha5JQPoQoGDg33owFn7IjS9RlV5zUbyD_8HNtv6T3KPnP13l-Km3Jwoe7eeI4fmJoCFJjlb9JiN-k1ZInuoYnj7AtipmGVgvc_7WJFjyquXi9E8WcahTd-QIXZkX0WBkstZbTLvonVne3mit7La8LeQtEE5UKJLlTZN5rFFgZn--7CeWJQbpNBQXlWbjKqmr8c"/>
</div>
<div class="p-4">
<h4 class="font-label-lg text-on-surface truncate">Studio-Z Audio Hub</h4>
<div class="mt-2">
<span class="font-price-display text-primary">â‚¦ 112,000</span>
<span class="text-xs line-through text-on-surface-variant ml-2">â‚¦ 149,000</span>
</div>
</div>
</div>
<!-- Deal Card 3 -->
<div class="flex-none w-64 bg-surface-container-low rounded-xl overflow-hidden card-shadow group">
<div class="relative h-64">
<div class="absolute top-3 left-3 bg-error text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">-50%</div>
<img class="w-full h-full object-cover transition-transform group-hover:scale-105" data-alt="Exotic silk scarf featuring intricate geometric African patterns in royal indigo and gold leaf. The scarf is draped elegantly over a marble pedestal in a bright, high-contrast minimalist space." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs6sQfD41W205tYS31YNCyTEXfILKGk47C2NV-Pv231AN511l8DOl0ZqAhL3MFBfD2CTk_XQqyivhnAeB-5dtJ7rBSdZbCcvAXNl2qjrokV9R5DRV4IAlBYSKNCrDwIVKJk4etoLk_iZa21Io2egNQhGSRreGq3O5kuEfF5vQhSYyxak-eFJigm7L_9aDzjWBxNS_XqYinpwdv7l-2kLYdDpQsDTixhyyqLDM4IaC9nI6PLrvjVdNZZLmc0wtIa8bIA52Tdr_QucI"/>
</div>
<div class="p-4">
<h4 class="font-label-lg text-on-surface truncate">Imperial Silk Scarf</h4>
<div class="mt-2">
<span class="font-price-display text-primary">â‚¦ 24,500</span>
<span class="text-xs line-through text-on-surface-variant ml-2">â‚¦ 49,000</span>
</div>
</div>
</div>
<!-- Deal Card 4 -->
<div class="flex-none w-64 bg-surface-container-low rounded-xl overflow-hidden card-shadow group">
<div class="relative h-64">
<div class="absolute top-3 left-3 bg-error text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">-15%</div>
<img class="w-full h-full object-cover transition-transform group-hover:scale-105" data-alt="Set of architectural candle holders carved from dark volcanic rock. Minimalist design with glowing tea lights, set on a dark wood table with deep, dramatic shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFH8pvkWkQjbBzgkgcJrYOtwBYVZJo6Zvi0xqTMSCWNgNVbOLEU-VTEk4JKh7ZEbICt0OatsdybrgVO7ly-6vnl_AKMpl-LCYZGi4YlysBxJL5BTBI9GlDYoBdGnkPD844fSmqnj0LGKasQzekC93-izwhcQ3DRtvez6FKfnxy0J97vfIVmELF55lsw2TkMUMDjrADYy_nEwNZxTxGUPYdZobEtM8bjWYSuEa38M8ztl8VO2BQplUHsnuxcLOTnuvIgOxzZ8ylUCU"/>
</div>
<div class="p-4">
<h4 class="font-label-lg text-on-surface truncate">Monolith Candle Set</h4>
<div class="mt-2">
<span class="font-price-display text-primary">â‚¦ 18,000</span>
<span class="text-xs line-through text-on-surface-variant ml-2">â‚¦ 21,200</span>
</div>
</div>
</div>
<!-- Deal Card 5 -->
<div class="flex-none w-64 bg-surface-container-low rounded-xl overflow-hidden card-shadow group">
<div class="relative h-64">
<div class="absolute top-3 left-3 bg-error text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">-30%</div>
<img class="w-full h-full object-cover transition-transform group-hover:scale-105" data-alt="High-performance athletic sneakers in a vibrant sunset orange and clean white colorway. The shoes are shown in dynamic mid-air placement against a crisp, light-mode background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUeS16ERCD78uLuufmWjG2D4CX7KZE_33xZx0kLAxO3R7D3boRUq0owXN_vRqrM434lHPOyHNEuIMIQ7pUDe1J7gKcbB6VYCz_s-Zgu4B10MUQf-tK_XENHyXOOVS5KoR6ZTEayPdL0bruxxHBah6NdGE2dzspYquITa5Xk8AFXgTpkZIjy4f0vpi66lvJ97FkwS8POphhkL1z35B3DeQ40pkvBlYNavksJPrGBCBs5wdPaXQ0qZGSTlS2C7bWwcl_JCYp9AguWVc"/>
</div>
<div class="p-4">
<h4 class="font-label-lg text-on-surface truncate">Pulse X Run Sneakers</h4>
<div class="mt-2">
<span class="font-price-display text-primary">â‚¦ 68,000</span>
<span class="text-xs line-through text-on-surface-variant ml-2">â‚¦ 97,000</span>
</div>
</div>
</div>
</div>
</section>
<!-- Main Product Grid -->
<section class="mb-section-gap">
<h3 class="font-headline-md text-headline-md mb-8">Curated for You</h3>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<!-- Product 1 -->
<div class="bg-surface-container-lowest rounded-2xl overflow-hidden card-shadow hover:-translate-y-1 transition-transform group">
<div class="relative aspect-[4/5]">
<img class="w-full h-full object-cover" data-alt="Elegant dining table set featuring hand-woven raffia placemats and ceramic bowls in a minimalist, sun-lit kitchen setting. The aesthetic is warm, clean, and luxurious." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbhoDzkcIGfzCSWeW13kzzhJNHrX0U9k0b0xF_ZKMk6fR-EEEizPdaj0TWHYVFLnj9Ui4SblYfUTgQ97wCI3A9M-khjvnoigz9VavZxBYeeUMy6OFYBTwezcSJz1rSYENGGOE1IPB1OwUdYHgw4Mj6lASBggIJ3R4i0eXh9bUTqu9UylN1G4OHgGS-HARm6iiKlLeTyIVEQnoj4fbFJRFZp6Jvh2q0wBXCaKm1_7Stp-P-6OuDcedXtxVNHGrtrNVFSQ7xeuBR5sU"/>
<button class="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-on-surface hover:text-primary transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
</div>
<div class="p-6">
<div class="flex items-center gap-2 mb-2">
<span class="font-label-lg text-xs text-on-surface-variant">Luxe Home Decor</span>
<span class="material-symbols-outlined text-blue-500 text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
<h4 class="font-body-lg font-bold mb-1">Raffia Weave Dining Set</h4>
<div class="flex items-center gap-1 mb-4">
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="text-xs font-bold">4.8</span>
<span class="text-xs text-on-surface-variant">(124 reviews)</span>
</div>
<div class="flex flex-col gap-1 mb-6">
<span class="font-price-display text-primary">â‚¦ 42,000</span>
<span class="text-xs text-secondary font-semibold">Delivery by Friday</span>
</div>
<button class="w-full bg-primary text-on-primary py-3 rounded-lg font-label-lg hover:bg-primary-container transition-colors">Add to Cart</button>
</div>
</div>
<!-- Product 2 -->
<div class="bg-surface-container-lowest rounded-2xl overflow-hidden card-shadow hover:-translate-y-1 transition-transform group">
<div class="relative aspect-[4/5]">
<img class="w-full h-full object-cover" data-alt="Luxury skincare set including botanical oils and creams in amber glass bottles, arranged on a textured stone surface with tropical leaves in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB61m4aEwdBmFCxudf6DDr_Vdw5U9gViVED4UwDiuIktJtjNhdZTppzEieKRL0EXaeGxYw_iVhrFWl-t5U3fJznMP5Wet9Ihk8HFazdQAvlSzWIwvSIot4pcFueRFKgIaIF82aa8Qn4ERxoqyZZ_ANs2_2auOloila1ZgV_-XOCcOSpqJ8MQi8_JUoYivjAQNWVAslfW25rjF6qRI6NL813KvTq3mOw7Ye0geqXJ4f9lNxzduRWQ0pZUNQpSXZZiTi83qOIJENoc3E"/>
<button class="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-on-surface hover:text-primary transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
</div>
<div class="p-6">
<div class="flex items-center gap-2 mb-2">
<span class="font-label-lg text-xs text-on-surface-variant">Bloom Beauty</span>
<span class="material-symbols-outlined text-blue-500 text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
<h4 class="font-body-lg font-bold mb-1">Baobab Revive Face Oil</h4>
<div class="flex items-center gap-1 mb-4">
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="text-xs font-bold">4.9</span>
<span class="text-xs text-on-surface-variant">(310 reviews)</span>
</div>
<div class="flex flex-col gap-1 mb-6">
<span class="font-price-display text-primary">â‚¦ 15,500</span>
<span class="text-xs text-secondary font-semibold">Instant Delivery</span>
</div>
<button class="w-full bg-primary text-on-primary py-3 rounded-lg font-label-lg hover:bg-primary-container transition-colors">Add to Cart</button>
</div>
</div>
<!-- Product 3 -->
<div class="bg-surface-container-lowest rounded-2xl overflow-hidden card-shadow hover:-translate-y-1 transition-transform group">
<div class="relative aspect-[4/5]">
<img class="w-full h-full object-cover" data-alt="Hand-carved wooden lounge chair with vibrant textile cushions, positioned in a contemporary architectural balcony overlooking a lush garden." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbGpGjCwoKKbcqNzrXR4gs1Ooz8dapZ9Hr99HkD2TXCrtInMulHRBWR0vaKHO95Rd5fAmBIfo3YOSbH_svgTHByGPj_WqQn6zh6hqU9s-4H_2zBzQ60XN9rvtMjazuEsRlso8GoB3mNHrdhOr8Enk2iHPQG0chOyoTBlhYb_usOdwqh0MktPQ6acxIBm9ZFdNk8umQayG-7_Jl08STTAVOlnamk1pkrHyhwhACBrm2EumSUuuAVl9yJQXxZ1fXwFEJlLOGii3D0ts"/>
<button class="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-on-surface hover:text-primary transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
</div>
<div class="p-6">
<div class="flex items-center gap-2 mb-2">
<span class="font-label-lg text-xs text-on-surface-variant">Asante Designs</span>
<span class="material-symbols-outlined text-blue-500 text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
<h4 class="font-body-lg font-bold mb-1">Nok Lounge Chair</h4>
<div class="flex items-center gap-1 mb-4">
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="text-xs font-bold">4.7</span>
<span class="text-xs text-on-surface-variant">(56 reviews)</span>
</div>
<div class="flex flex-col gap-1 mb-6">
<span class="font-price-display text-primary">â‚¦ 285,000</span>
<span class="text-xs text-secondary font-semibold">Pre-order: Ships in 7 days</span>
</div>
<button class="w-full bg-primary text-on-primary py-3 rounded-lg font-label-lg hover:bg-primary-container transition-colors">Add to Cart</button>
</div>
</div>
<!-- Product 4 -->
<div class="bg-surface-container-lowest rounded-2xl overflow-hidden card-shadow hover:-translate-y-1 transition-transform group">
<div class="relative aspect-[4/5]">
<img class="w-full h-full object-cover" data-alt="Premium organic coffee beans from the Ethiopian highlands, packaged in a sleek minimalist bag with bold typography. The setting is a coffee connoisseur's home station." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC_s0otVwO4L92JYJF5tgw14-vlRB3z2v41d71uVgvVCCcVd3Qe3QYboGyWaGyvDT9XPOF4pKcRo7L5vVeNMCRnly_Xc7S9-JMnG8LD7anFf1BTDBLujXN8ADVp1A9_zLZ_QXEnK4Qc7f0bT6VkGGVoD1BgrdqHffearcGpychuuef-ggQ7jh7noxlRngWXSXFYCAPYPAUq7dmUy5JauegEuN3GJdUeM_mFTCXBlMrhHd3jQMDHGOvGrEAaoPrnipjQDAKVPcv3dU"/>
<button class="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-on-surface hover:text-primary transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
</div>
<div class="p-6">
<div class="flex items-center gap-2 mb-2">
<span class="font-label-lg text-xs text-on-surface-variant">Origins Coffee</span>
<span class="material-symbols-outlined text-blue-500 text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
<h4 class="font-body-lg font-bold mb-1">Yirgacheffe Gold Roast</h4>
<div class="flex items-center gap-1 mb-4">
<span class="material-symbols-outlined text-gold-leaf text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="text-xs font-bold">5.0</span>
<span class="text-xs text-on-surface-variant">(890 reviews)</span>
</div>
<div class="flex flex-col gap-1 mb-6">
<span class="font-price-display text-primary">â‚¦ 12,000</span>
<span class="text-xs text-secondary font-semibold">Delivery tomorrow</span>
</div>
<button class="w-full bg-primary text-on-primary py-3 rounded-lg font-label-lg hover:bg-primary-container transition-colors">Add to Cart</button>
</div>
</div>
</div>
</section>
<!-- Seller Storefronts -->
<section class="mb-section-gap">
<div class="flex items-center justify-between mb-8">
<h3 class="font-headline-md text-headline-md">Top Seller Storefronts</h3>
<a class="text-primary font-label-lg hover:underline" href="#">Explore Sellers</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Seller Card 1 -->
<div class="bg-surface-container-high rounded-2xl p-6 card-shadow flex flex-col items-center text-center group">
<div class="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-white shadow-lg">
<img class="w-full h-full object-cover" data-alt="A sophisticated minimalist logo for a premium fashion brand, featuring clean geometric shapes in a terracotta and charcoal palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQNTI6_So4RGJIQMGVzNg1KykXIuEAMiwyeKw8elplgcG_I3vRMKfYkBlJGGvCeoKkWXRtH4c8xmvDBkOwMxGVdPkX9X9cq31IAXykBWo-NVdW94ZoWTCI2Y64qFNXuNnmGwwPsQ6JmGbLwLFqCWQ-BHZvsLA_dYKZyaH5evQOx3quLChjZ7HZJoeRLkRuh8pfQXUPx11prITF1pMeY_mJCzFWPEkjr5PGrBp71jYV2QFUaYsUaE8fJspMzN_xiZwVLK3ZUzcw8Bk"/>
</div>
<h4 class="font-headline-md text-xl mb-1">Urban Thread Lagos</h4>
<p class="text-on-surface-variant text-sm mb-4">Premium Fashion & Fabric</p>
<div class="flex gap-4 text-xs font-bold mb-6">
<span class="text-on-surface">12.5k Followers</span>
<span class="text-primary">4.9 Star Rating</span>
</div>
<button class="w-full py-3 border-2 border-forest-deep text-forest-deep rounded-lg font-label-lg hover:bg-forest-deep hover:text-white transition-all">Visit Store</button>
</div>
<!-- Seller Card 2 -->
<div class="bg-surface-container-high rounded-2xl p-6 card-shadow flex flex-col items-center text-center group">
<div class="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-white shadow-lg">
<img class="w-full h-full object-cover" data-alt="A modern artisanal logo for a home decor brand, inspired by traditional pottery marks and contemporary brushwork." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9fKgItbPx9OsraWk8HC9DxxqxIIhJzrZre_JYOQyqW4WpleYoqZWLFflnubaYSQMELjeoaVV3Ye0BfaNUm-lRK0OfplJ9lAMZ_fO1kfDPAKCvDWwB3MGeeQHKLNo25zdHhk87xu2OPbMTNfsLOU8A81cOr2oy0d5nj6rF-YSjbMslebvu0yfcacFqHnQxbddYqwtDzVsZUc08tx_pLpOvoWcbYkt7YsXagKF7r8TUBYAPti4WyvJ04ezcfEbqAWwQbMViB2qhRc4"/>
</div>
<h4 class="font-headline-md text-xl mb-1">Nile Sanctuary</h4>
<p class="text-on-surface-variant text-sm mb-4">Home & Living</p>
<div class="flex gap-4 text-xs font-bold mb-6">
<span class="text-on-surface">8.2k Followers</span>
<span class="text-primary">4.8 Star Rating</span>
</div>
<button class="w-full py-3 border-2 border-forest-deep text-forest-deep rounded-lg font-label-lg hover:bg-forest-deep hover:text-white transition-all">Visit Store</button>
</div>
<!-- Seller Card 3 -->
<div class="bg-surface-container-high rounded-2xl p-6 card-shadow flex flex-col items-center text-center group">
<div class="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-white shadow-lg">
<img class="w-full h-full object-cover" data-alt="A vibrant, energetic logo for a luxury organic food brand, featuring stylized fruit and botanical motifs in high-contrast greens and oranges." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHZOEnnfkvfmq8pa0RiaY5g_QnnbMsJXAJ3xruu-6OGwiQBLKT3vf4m6-ErkpQ7HNB45jiZNtJaVo1SfEliUOuFrX3lI76WPJNqedgZtdvZY5-fVxFvzI9CqsPm2XMSCGxnzX_ZHv93amXF_W4h-ALQjr9knPF46pR7nUX3zRY9z4ewoEVHY3IxL4JTQRLjdImOFDKEHe6djktHtCze2-tWdfCnfloCQszN7--tmXOTXkSMuR8idRjfx7AiEbaBgbCKIcNV1Ok12Y"/>
</div>
<h4 class="font-headline-md text-xl mb-1">Savanna Organics</h4>
<p class="text-on-surface-variant text-sm mb-4">Food & Groceries</p>
<div class="flex gap-4 text-xs font-bold mb-6">
<span class="text-on-surface">24.1k Followers</span>
<span class="text-primary">5.0 Star Rating</span>
</div>
<button class="w-full py-3 border-2 border-forest-deep text-forest-deep rounded-lg font-label-lg hover:bg-forest-deep hover:text-white transition-all">Visit Store</button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container dark:bg-surface-container-highest full-width py-section-gap">
<div class="grid grid-cols-2 md:grid-cols-5 gap-gutter px-margin-desktop max-w-container-max mx-auto">
<div class="col-span-2 md:col-span-1">
<a class="font-headline-md text-headline-md font-bold text-primary mb-6 block" href="#">JAHRAH</a>
<p class="text-on-surface-variant font-body-md opacity-80 mb-6">Africa's Cultural Leader in Premium Lifestyle & Commerce.</p>
</div>
<div class="flex flex-col gap-4">
<h5 class="font-label-lg text-on-surface uppercase tracking-widest">Company</h5>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/about">About</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/story">Story</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/careers">Careers</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Blog</a>
</div>
<div class="flex flex-col gap-4">
<h5 class="font-label-lg text-on-surface uppercase tracking-widest">Marketplace</h5>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/pro-onboarding">Become a Pro</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/pro-dashboard">Pro Dashboard</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/partner">Partner</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Host Your Space</a>
</div>
<div class="flex flex-col gap-4">
<h5 class="font-label-lg text-on-surface uppercase tracking-widest">Support</h5>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/help">Help Centre</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/safety">Safety Centre</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/cancellation">Cancellation Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Report an Issue</a>
</div>
<div class="flex flex-col gap-4">
<h5 class="font-label-lg text-on-surface uppercase tracking-widest">Legal</h5>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/privacy">Privacy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Terms</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Cookie Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Sitemap</a>
</div>
</div>
<div class="mt-section-gap pt-8 border-t border-outline-variant/30 px-margin-desktop max-w-container-max mx-auto">
<p class="text-on-surface-variant font-body-md opacity-60 text-center">Â© 2024 JAHRAH. All rights reserved. Nigeria | Ghana | Kenya | South Africa | â‚¦ NGN</p>
</div>
</footer>
<!-- FAB (Suppressed on this task-focused marketplace screen per mandate) -->
<script>
        // Micro-interaction: Simple Countdown Timer
        function startCountdown() {
            let hours = 4;
            let minutes = 12;
            let seconds = 45;
            
            const timerElement = document.getElementById('countdown');
            
            setInterval(() => {
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                    if (minutes < 0) {
                        minutes = 59;
                        hours--;
                    }
                }
                
                const h = hours.toString().padStart(2, '0');
                const m = minutes.toString().padStart(2, '0');
                const s = seconds.toString().padStart(2, '0');
                
                timerElement.textContent = \`\${h}:\${m}:\${s}\`;
            }, 1000);
        }
        
        document.addEventListener('DOMContentLoaded', startCountdown);
    </script>`

export default function MarketShopJahrahPage() {
  return <div dangerouslySetInnerHTML={{ __html: stitchHtml }} />
}

