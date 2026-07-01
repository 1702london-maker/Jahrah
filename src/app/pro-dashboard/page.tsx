export const metadata = { title: "JAHRAH Pro Dashboard â€” Earnings & Bookings" }

const stitchHtml = `<!-- Top Navigation Bar (Shared Component Strategy) -->
<header class="bg-surface dark:bg-surface-dim shadow-sm docked full-width top-0 sticky z-50">
<div class="flex justify-between items-center px-margin-desktop py-4 w-full max-w-container-max mx-auto">
<div class="flex items-center gap-8">
<span class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed tracking-tight">JAHRAH</span>
<nav class="hidden md:flex gap-6 items-center">
<a class="font-label-lg text-label-lg text-primary font-bold border-b-2 border-primary pb-1" href="/pro-dashboard">Pro Dashboard</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Academy</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Community</a>
</nav>
</div>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">notifications</button>
<div class="h-10 w-10 rounded-full overflow-hidden border-2 border-outline-variant">
<img class="h-full w-full object-cover" data-alt="A professional headshot of a stylish West African man in a minimalist office setting. He is wearing a tailored linen shirt, looking confident and friendly. The lighting is soft and natural, with a shallow depth of field focusing on his welcoming expression, reflecting a high-end service professional persona for the JAHRAH brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARTgphZk3RfyKkYNc158TBC3Up9-Cu5e5k9EoJlCsYn6ySUdRKafVbaCFxUqD8L9EELpEesCD6vCD2xfJ8qZA7R30KwCyIV2ddT5eNrkeVs2Z5g-UnthTMRpwi8dAXSlqcClKdAwas9_NXXH3P8owvNyUg6dOsWOnTNyAlpxCYbA9rtQIAo4zItWNbj-9i8tdakd-dGA8Bu8aShYQBIPW8Qy0tGjIMiugdswGXwVJOjfEjGfNIZXcXoIsw69ePq1jdU7yxc8RxERc"/>
</div>
</div>
</div>
</header>
<div class="dashboard-grid">
<!-- Sidebar Navigation -->
<aside class="bg-surface-container-low border-r border-outline-variant px-6 py-8 hidden md:block">
<div class="space-y-1">
<a class="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-container text-on-primary-container font-semibold transition-all" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">dashboard</span>
<span class="font-label-lg">Overview</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-all" href="#">
<span class="material-symbols-outlined">calendar_month</span>
<span class="font-label-lg">My Bookings</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-all" href="#">
<span class="material-symbols-outlined">payments</span>
<span class="font-label-lg">Earnings</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-all" href="#">
<span class="material-symbols-outlined">person</span>
<span class="font-label-lg">My Profile</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-all" href="#">
<span class="material-symbols-outlined">photo_library</span>
<span class="font-label-lg">Portfolio</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-all" href="#">
<span class="material-symbols-outlined">star</span>
<span class="font-label-lg">Reviews</span>
</a>
<div class="pt-6 pb-2">
<p class="px-4 text-[10px] font-bold uppercase tracking-widest text-outline">Management</p>
</div>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-all" href="#">
<span class="material-symbols-outlined">event_available</span>
<span class="font-label-lg">Availability</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-all" href="#">
<span class="material-symbols-outlined">campaign</span>
<span class="font-label-lg">Promotions</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-all" href="#">
<span class="material-symbols-outlined">help_center</span>
<span class="font-label-lg">Help</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-all" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-lg">Settings</span>
</a>
</div>
<div class="mt-12 p-6 rounded-xl bg-forest-deep text-white relative overflow-hidden">
<div class="relative z-10">
<p class="font-label-lg text-secondary-fixed">Pro Academy</p>
<h4 class="font-headline-md text-headline-md mt-2">Scale your business</h4>
<button class="mt-4 px-4 py-2 bg-sunset-orange text-white rounded-lg font-label-lg text-sm hover:scale-105 transition-transform">Learn More</button>
</div>
<div class="absolute -right-4 -bottom-4 opacity-20 transform rotate-12">
<span class="material-symbols-outlined !text-7xl">school</span>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="p-margin-mobile md:p-12 space-y-section-gap overflow-y-auto">
<!-- Header Section -->
<section class="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 class="font-headline-lg text-headline-lg text-on-background">Welcome back, Amara</h1>
<p class="text-on-surface-variant font-body-lg">Hereâ€™s whatâ€™s happening with your business today.</p>
</div>
<div class="flex items-center gap-3">
<button class="px-6 py-3 border border-forest-deep text-forest-deep rounded-lg font-label-lg hover:bg-forest-deep hover:text-white transition-all flex items-center gap-2">
<span class="material-symbols-outlined">add</span>
                        Create Listing
                    </button>
<button class="px-6 py-3 bg-sunset-orange text-white rounded-lg font-label-lg hover:scale-95 transition-all shadow-lg shadow-sunset-orange/20">
                        Go Online
                    </button>
</div>
</section>
<!-- Stats Bento Grid -->
<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div class="p-8 bg-surface-container rounded-xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
<div>
<p class="text-on-surface-variant font-label-lg">This Month's Earnings</p>
<h2 class="font-price-display text-headline-lg mt-2 text-primary">â‚¦ 342,000</h2>
</div>
<div class="mt-4 flex items-center gap-2 text-secondary font-bold text-sm">
<span class="material-symbols-outlined !text-sm">trending_up</span>
<span>+12.5% from June</span>
</div>
</div>
<div class="p-8 bg-surface-container rounded-xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
<div>
<p class="text-on-surface-variant font-label-lg">Total Bookings</p>
<h2 class="font-price-display text-headline-lg mt-2">28</h2>
</div>
<div class="mt-4 flex items-center gap-2 text-on-surface-variant text-sm">
<span class="material-symbols-outlined !text-sm">history</span>
<span>8 pending confirmation</span>
</div>
</div>
<div class="p-8 bg-surface-container rounded-xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
<div>
<p class="text-on-surface-variant font-label-lg">Avg Rating</p>
<div class="flex items-center gap-2 mt-2">
<h2 class="font-price-display text-headline-lg">4.9</h2>
<span class="material-symbols-outlined text-gold-leaf !text-3xl" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
</div>
<div class="mt-4 text-on-surface-variant text-sm">
<span>Based on 142 reviews</span>
</div>
</div>
<div class="p-8 bg-surface-container rounded-xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
<div>
<p class="text-on-surface-variant font-label-lg">Profile Views</p>
<h2 class="font-price-display text-headline-lg mt-2">1,847</h2>
</div>
<div class="mt-4 flex items-center gap-2 text-primary font-bold text-sm">
<span class="material-symbols-outlined !text-sm">visibility</span>
<span>Trending in Lagos</span>
</div>
</div>
</section>
<!-- Middle Section: Timeline & Earnings Chart -->
<section class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<!-- Today's Schedule -->
<div class="lg:col-span-2 bg-surface-container-low rounded-xl p-8 border border-outline-variant/30">
<div class="flex items-center justify-between mb-8">
<h3 class="font-headline-md text-headline-md">Today's Schedule</h3>
<button class="text-primary font-label-lg flex items-center gap-1">
                            Full Calendar
                            <span class="material-symbols-outlined !text-sm">arrow_forward</span>
</button>
</div>
<div class="space-y-6">
<!-- Timeline Item 1 -->
<div class="flex gap-6 group">
<div class="w-20 pt-1 flex-shrink-0">
<span class="font-label-lg text-primary">09:00 AM</span>
<div class="h-full w-px bg-outline-variant mx-auto mt-4 mb-2"></div>
</div>
<div class="flex-grow bg-white p-6 rounded-xl border border-outline-variant/50 group-hover:border-primary transition-all shadow-sm">
<div class="flex flex-wrap justify-between items-start gap-4">
<div class="flex gap-4">
<div class="h-12 w-12 rounded-full overflow-hidden bg-surface-variant">
<img class="w-full h-full object-cover" data-alt="Portrait of a sophisticated female client for a high-end lifestyle service. She is wearing elegant traditional West African attire with contemporary styling. The background is a luxury hotel lobby in Lagos. The image is bright, with vibrant colors and sharp focus, conveying a premium hospitality experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBILukAI383YQCyRG4-oxPHhsfAVjqQp_8IG9y32T50CTQprKYbInfSLJVbXX3QxEs6ryJW2knCxjy1K7cf3Og2pUKDoLEqk_RitBcIYmvVbwfqlPstjzutIHA09hnJDfchE6m4yU-YFCqr6LoTKGeg3wOyVSHjcsMjRJ_XzffmY7A53TOBqBPWxEkCS_ZxW3JqBFc90VdEUkJRu2Zw5-cfEIhaMp9wnhqa7EhSjiVrvqd0ZVOS5fS0P3AeyyAlpa81u_shr6zJb_s"/>
</div>
<div>
<h4 class="font-bold text-body-lg">Chioma Adeyemi</h4>
<p class="text-on-surface-variant text-sm">Glow Ritual Spa Treatment â€¢ Victoria Island</p>
</div>
</div>
<div class="text-right">
<p class="font-price-display text-lg">â‚¦ 45,000</p>
<span class="px-2 py-1 bg-secondary/10 text-secondary rounded text-[10px] font-bold uppercase">Confirmed</span>
</div>
</div>
<div class="mt-6 flex gap-3">
<button class="flex-1 py-2 rounded-lg border border-outline text-on-surface font-label-lg flex items-center justify-center gap-2 hover:bg-surface-variant transition-all">
<span class="material-symbols-outlined !text-lg">call</span> Call
                                    </button>
<button class="flex-1 py-2 rounded-lg border border-outline text-on-surface font-label-lg flex items-center justify-center gap-2 hover:bg-surface-variant transition-all">
<span class="material-symbols-outlined !text-lg">chat_bubble</span> Message
                                    </button>
</div>
</div>
</div>
<!-- Timeline Item 2 -->
<div class="flex gap-6 group">
<div class="w-20 pt-1 flex-shrink-0">
<span class="font-label-lg text-on-surface-variant">02:30 PM</span>
<div class="h-full w-px bg-outline-variant mx-auto mt-4 mb-2"></div>
</div>
<div class="flex-grow bg-white p-6 rounded-xl border border-outline-variant/50 group-hover:border-primary transition-all shadow-sm">
<div class="flex flex-wrap justify-between items-start gap-4">
<div class="flex gap-4">
<div class="h-12 w-12 rounded-full overflow-hidden bg-surface-variant">
<img class="w-full h-full object-cover" data-alt="Close-up of a stylish young businessman with a well-groomed beard, wearing a crisp white dress shirt. He is looking at his phone in a modern urban cafe. High-contrast lighting, sharp details, and a sophisticated color palette of whites and deep browns to match the JAHRAH brand aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbO0OX6nKvNRmPU9nlQ3Ew09RXutykz__Uk0JDrSjvERo4gsSRqt_I9IUeBNMr8ENVRwH-bDM9NJf-S5S6WoJAyoYT9eijrQD3VJRNrYfvAolt79JlQZussYX9o_OYq5Qx8A_rOgg0rn-JGa1moSpn7IBXn8bVrujtA3z5pMWI5l1DsRwh2Sjogdjmjqem2a7PnhB6gxhpBQNd4JjiTF-YsoLb4fwI5zQ9LYHstXpu6gTNQaQlEy6FcWBEkfssz0IRbIJx0PL3vLM"/>
</div>
<div>
<h4 class="font-bold text-body-lg">Kofi Mensah</h4>
<p class="text-on-surface-variant text-sm">Signature Glow Facial â€¢ Ikoyi</p>
</div>
</div>
<div class="text-right">
<p class="font-price-display text-lg">â‚¦ 32,500</p>
<span class="px-2 py-1 bg-tertiary/10 text-tertiary rounded text-[10px] font-bold uppercase">Pending</span>
</div>
</div>
<div class="mt-6 flex gap-3">
<button class="px-4 py-2 rounded-lg bg-sunset-orange text-white font-label-lg flex-grow hover:opacity-90 transition-all">Accept Booking</button>
<button class="px-4 py-2 rounded-lg border border-outline text-on-surface font-label-lg hover:bg-surface-variant transition-all">Decline</button>
</div>
</div>
</div>
</div>
</div>
<!-- Earnings Chart & Withdrawal -->
<div class="bg-surface-container rounded-xl p-8 border border-outline-variant/30 flex flex-col h-full">
<div class="flex items-center justify-between mb-8">
<h3 class="font-headline-md text-headline-md">Earnings Trend</h3>
<select class="bg-transparent border-none font-label-lg text-primary focus:ring-0">
<option>Last 30 Days</option>
<option>Last 90 Days</option>
</select>
</div>
<div class="chart-container flex items-end justify-between gap-1 h-48 mb-8">
<div class="w-full bg-primary-fixed hover:bg-primary transition-colors h-[40%] rounded-t-sm" title="â‚¦ 12,000"></div>
<div class="w-full bg-primary-fixed hover:bg-primary transition-colors h-[65%] rounded-t-sm" title="â‚¦ 18,500"></div>
<div class="w-full bg-primary-fixed hover:bg-primary transition-colors h-[50%] rounded-t-sm" title="â‚¦ 15,000"></div>
<div class="w-full bg-primary-fixed hover:bg-primary transition-colors h-[85%] rounded-t-sm" title="â‚¦ 28,000"></div>
<div class="w-full bg-primary-fixed hover:bg-primary transition-colors h-[45%] rounded-t-sm" title="â‚¦ 13,000"></div>
<div class="w-full bg-primary-fixed hover:bg-primary transition-colors h-[95%] rounded-t-sm" title="â‚¦ 32,000"></div>
<div class="w-full bg-primary-fixed hover:bg-primary transition-colors h-[70%] rounded-t-sm" title="â‚¦ 21,000"></div>
<div class="w-full bg-primary-fixed hover:bg-primary transition-colors h-[60%] rounded-t-sm" title="â‚¦ 18,000"></div>
<div class="w-full bg-primary-fixed hover:bg-primary transition-colors h-[75%] rounded-t-sm" title="â‚¦ 22,000"></div>
<div class="w-full bg-primary-fixed hover:bg-primary transition-colors h-[100%] rounded-t-sm" title="â‚¦ 34,000"></div>
<div class="w-full bg-primary-fixed hover:bg-primary transition-colors h-[80%] rounded-t-sm" title="â‚¦ 26,000"></div>
<div class="w-full bg-primary-fixed hover:bg-primary transition-colors h-[55%] rounded-t-sm" title="â‚¦ 16,000"></div>
</div>
<div class="mt-auto space-y-4">
<div class="p-4 bg-white rounded-lg border border-outline-variant/30 flex justify-between items-center">
<div>
<p class="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Available for Payout</p>
<p class="font-price-display text-2xl text-forest-deep">â‚¦ 128,450</p>
</div>
<span class="material-symbols-outlined text-forest-deep !text-3xl">account_balance_wallet</span>
</div>
<button class="w-full py-4 bg-forest-deep text-white rounded-xl font-label-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2">
<span class="material-symbols-outlined">account_balance</span>
                            Withdraw to bank account
                        </button>
</div>
</div>
</section>
<!-- Bottom Section: Reviews & Feedback -->
<section class="space-y-8">
<div class="flex items-center justify-between">
<h3 class="font-headline-md text-headline-md">Recent Reviews</h3>
<button class="text-primary font-label-lg">View All</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<!-- Review Card 1 -->
<div class="bg-surface-container rounded-xl p-6 border border-outline-variant/30">
<div class="flex justify-between items-start mb-4">
<div class="flex items-center gap-3">
<div class="h-10 w-10 rounded-full overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A portrait of a elegant older woman with graying hair and a kind, satisfied expression. She is wearing a modern African print dress and is positioned in a sunlit conservatory. High-end, warm lighting, very clean background, cinematic quality, reflecting luxury and satisfaction." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLXCiI4zzEtLgyvVU-9LAvRcyk2yY9rcLA-33aGI8eBtmOKGPlqjRxPzDkblBmg38wkSVqveQXRA97z9_yW4uRZJSKM0C5RbdbFoSGE5rMGNrjo0vFiXNiUdqdHE0j-PXTewulIK43OmLBu3QtVs_ee9rsKezOfKclCHrjwgBlLQId3yWpQp6iNP90YTW2Otxn-IOSx9RDPPtJ2G0sXjk39VpdiSTjtYsiQIuVW7hyk_oNWT0TFoMWChQ7Mn-5IBOxH3GqeZjsubc"/>
</div>
<div>
<h5 class="font-bold text-sm">Yemisi Bakare</h5>
<p class="text-[10px] text-on-surface-variant">2 days ago</p>
</div>
</div>
<div class="flex text-gold-leaf">
<span class="material-symbols-outlined !text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-sm" style="font-variation-settings: 'FILL' 1;"></span></div></div></div></div></section></main></div>`

export default function ProDashboardEarningsBookingsPage() {
  return <div dangerouslySetInnerHTML={{ __html: stitchHtml }} />
}

