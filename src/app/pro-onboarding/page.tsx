export const metadata = { title: "JAHRAH Pro Onboarding â€” Build Your Profile" }

const stitchHtml = `<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "surface-tint": "#b02f00",
                      "surface-container-high": "#eae7e7",
                      "secondary-fixed-dim": "#8fd87d",
                      "on-tertiary-fixed": "#221b00",
                      "royal-indigo": "#3F51B5",
                      "on-background": "#1c1b1b",
                      "tertiary-container": "#c8a900",
                      "surface-bright": "#fcf9f8",
                      "on-primary-fixed": "#3b0900",
                      "on-error-container": "#93000a",
                      "outline": "#907067",
                      "surface-container-highest": "#e5e2e1",
                      "on-tertiary-container": "#4b3e00",
                      "surface-container": "#f0eded",
                      "primary-fixed": "#ffdbd1",
                      "on-primary": "#ffffff",
                      "secondary-fixed": "#aaf596",
                      "surface-container-low": "#f6f3f2",
                      "on-tertiary-fixed-variant": "#544600",
                      "on-primary-fixed-variant": "#862200",
                      "background": "#fcf9f8",
                      "primary-container": "#ff5722",
                      "on-tertiary": "#ffffff",
                      "tertiary": "#705d00",
                      "inverse-on-surface": "#f3f0ef",
                      "surface-dim": "#dcd9d9",
                      "on-surface": "#1c1b1b",
                      "surface": "#fcf9f8",
                      "tertiary-fixed": "#ffe16d",
                      "surface-container-lowest": "#ffffff",
                      "on-secondary": "#ffffff",
                      "forest-deep": "#004D00",
                      "tertiary-fixed-dim": "#e9c400",
                      "secondary": "#286c1e",
                      "on-secondary-fixed-variant": "#095305",
                      "outline-variant": "#e4beb4",
                      "parchment": "#FDFBF7",
                      "secondary-container": "#a8f294",
                      "on-surface-variant": "#5b4039",
                      "on-error": "#ffffff",
                      "error-container": "#ffdad6",
                      "terracotta-clay": "#BF360C",
                      "gold-leaf": "#FFD700",
                      "error": "#ba1a1a",
                      "primary-fixed-dim": "#ffb5a0",
                      "surface-variant": "#e5e2e1",
                      "inverse-surface": "#313030",
                      "on-secondary-container": "#2c7022",
                      "on-secondary-fixed": "#002200",
                      "primary": "#b02f00",
                      "sunset-orange": "#FF5722",
                      "on-primary-container": "#541200",
                      "inverse-primary": "#ffb5a0"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "container-max": "1280px",
                      "margin-desktop": "64px",
                      "unit": "8px",
                      "margin-mobile": "20px",
                      "gutter": "24px",
                      "section-gap": "80px"
              },
              "fontFamily": {
                      "headline-lg": ["Playfair Display"],
                      "display-lg": ["Playfair Display"],
                      "price-display": ["Montserrat"],
                      "label-lg": ["Montserrat"],
                      "body-md": ["Montserrat"],
                      "headline-md": ["Playfair Display"],
                      "headline-lg-mobile": ["Playfair Display"],
                      "body-lg": ["Montserrat"]
              },
              "fontSize": {
                      "headline-lg": ["40px", {"lineHeight": "48px", "fontWeight": "700"}],
                      "display-lg": ["56px", {"lineHeight": "64px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                      "price-display": ["24px", {"lineHeight": "32px", "fontWeight": "700"}],
                      "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                      "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                      "headline-md": ["28px", {"lineHeight": "34px", "fontWeight": "600"}],
                      "headline-lg-mobile": ["32px", {"lineHeight": "38px", "fontWeight": "700"}],
                      "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}]
              }
            },
          },
        }
      </script>
<!-- Top Navigation (Reduced for Transactional Flow) -->
<nav class="sticky top-0 z-50 bg-surface shadow-sm px-margin-desktop py-4 flex justify-between items-center w-full">
<div class="flex items-center gap-4">
<span class="font-headline-md text-headline-md font-bold text-primary">JAHRAH</span>
<div class="h-6 w-px bg-outline-variant mx-2"></div>
<span class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Pro Onboarding</span>
</div>
<div class="flex items-center gap-6">
<a class="text-on-surface-variant hover:text-primary font-label-lg text-label-lg transition-colors" href="#">Help Center</a>
<button class="text-on-surface-variant font-label-lg text-label-lg px-4 py-2 hover:bg-surface-container rounded-full transition-all">Save & Exit</button>
</div>
</nav>
<!-- Global Progress Bar -->
<div class="w-full bg-surface-container-high h-1">
<div class="bg-primary h-full step-active" style="width: 40%;"></div>
</div>
<main class="max-w-container-max mx-auto px-margin-desktop py-12 flex gap-16 min-h-[calc(100vh-130px)] items-start">
<!-- Left Column: Live Preview (Phone Mockup) -->
<section class="hidden lg:flex w-[40%] sticky top-24 flex-col items-center">
<div class="relative w-[320px] h-[640px] bg-background rounded-[3rem] border-[8px] border-on-background shadow-2xl overflow-hidden">
<!-- Mockup Content -->
<div class="absolute inset-0 p-6 flex flex-col">
<div class="flex justify-between items-center mb-8">
<span class="material-symbols-outlined text-on-surface">menu</span>
<div class="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-xs">JD</div>
</div>
<div class="w-full aspect-[4/3] bg-surface-container-highest rounded-xl mb-6 overflow-hidden flex items-center justify-center relative">
<img class="w-full h-full object-cover opacity-60" data-alt="A premium close-up of a luxury African interior design detail, featuring warm terracotta clay walls and gold leaf accents. Soft evening light filters through a window, illuminating a handmade artisanal vase and high-end fabric textures. The mood is sophisticated, echoing a world-class heritage aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSVOBrC4KMvkiXHW9HV_kyJj43D6s_EcbcrlfA4hG7SE7hz6hqMR6Hhp1btSocK7u7tjxJ3mDWMF1ZdWF3atNMMTFI-vx-eEwy-IjPoR5EUGR3xKTtoFjTSdBG1o7-d7A2vWXXBj5Mhyvf5s1YNYYswNnzw4TlaSuKLIRyBMA82nSsXsq7jwUSv92oitJgktOASAurRKl3GNGNwzsJZPF0p0GVFRl5kNz8oEOEIuEOq0WcB-pcYPN5qsqG0nYFumnC9dnpwIWKwoU"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div class="absolute bottom-3 left-3 text-white">
<p class="text-[10px] font-bold opacity-80 uppercase tracking-tighter">Live Preview</p>
<h4 class="font-headline-md text-sm">Professional Profile</h4>
</div>
</div>
<div class="space-y-4">
<div class="h-2 w-2/3 bg-surface-container-highest rounded-full"></div>
<div class="h-2 w-full bg-surface-container-highest rounded-full opacity-60"></div>
<div class="grid grid-cols-2 gap-2 mt-4">
<div class="h-10 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-sm">check_circle</span>
</div>
<div class="h-10 bg-primary/10 rounded-lg border border-primary/20"></div>
</div>
</div>
<div class="mt-auto pb-4">
<div class="w-full h-12 bg-sunset-orange rounded-full flex items-center justify-center text-white font-bold text-xs">
                            BOOK SERVICE
                        </div>
</div>
</div>
<!-- Notch -->
<div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-on-background rounded-b-2xl"></div>
</div>
<p class="mt-8 font-label-lg text-label-lg text-on-surface-variant text-center max-w-[280px]">
                See how your profile looks to potential clients across Africa.
            </p>
</section>
<!-- Right Column: Form -->
<section class="w-full lg:w-[60%] bg-surface-container-lowest p-12 rounded-2xl shadow-sm border border-surface-container-high">
<!-- Step Indicator -->
<nav class="flex items-center justify-between mb-12">
<div class="flex items-center gap-2 group cursor-default">
<span class="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs">1</span>
<span class="font-label-lg text-label-lg text-secondary">Personal Info</span>
</div>
<div class="h-px bg-outline-variant flex-grow mx-4"></div>
<div class="flex items-center gap-2">
<span class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs shadow-md shadow-primary/20">2</span>
<span class="font-label-lg text-label-lg text-primary">Your Services</span>
</div>
<div class="h-px bg-outline-variant flex-grow mx-4"></div>
<div class="flex items-center gap-2 opacity-40">
<span class="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-xs">3</span>
<span class="font-label-lg text-label-lg text-on-surface-variant">Portfolio</span>
</div>
<div class="h-px bg-outline-variant flex-grow mx-4"></div>
<div class="flex items-center gap-2 opacity-40">
<span class="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-xs">4</span>
<span class="font-label-lg text-label-lg text-on-surface-variant">Pricing</span>
</div>
</nav>
<header class="mb-10">
<h1 class="font-headline-lg text-headline-lg text-on-surface mb-2">Define Your Expertise</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">Help clients find you by selecting the services you specialize in and where you operate.</p>
</header>
<form class="space-y-10" onsubmit="return false;">
<!-- Service Selection -->
<div class="space-y-4">
<label class="font-label-lg text-label-lg text-on-surface block">WHAT DO YOU OFFER?</label>
<div class="flex flex-wrap gap-3">
<button class="px-6 py-3 rounded-full border-2 border-primary bg-primary/5 text-primary font-label-lg text-label-lg transition-all flex items-center gap-2" type="button">
                            Interior Design <span class="material-symbols-outlined text-sm">close</span>
</button>
<button class="px-6 py-3 rounded-full border-2 border-primary bg-primary/5 text-primary font-label-lg text-label-lg transition-all flex items-center gap-2" type="button">
                            Architecture <span class="material-symbols-outlined text-sm">close</span>
</button>
<button class="px-6 py-3 rounded-full border-2 border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary font-label-lg text-label-lg transition-all" type="button">
                            Photography
                        </button>
<button class="px-6 py-3 rounded-full border-2 border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary font-label-lg text-label-lg transition-all" type="button">
                            Event Styling
                        </button>
<button class="px-6 py-3 rounded-full border-2 border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary font-label-lg text-label-lg transition-all" type="button">
                            Personal Styling
                        </button>
<button class="px-6 py-3 rounded-full bg-surface-container-high text-on-surface-variant flex items-center gap-2 font-label-lg text-label-lg px-4" type="button">
<span class="material-symbols-outlined text-sm">add</span> Add New
                        </button>
</div>
</div>
<!-- Work Mode Toggle -->
<div class="flex items-center justify-between p-6 bg-parchment rounded-xl border border-outline-variant">
<div>
<p class="font-label-lg text-label-lg text-on-surface">WHERE DO YOU WORK?</p>
<p class="text-sm text-on-surface-variant mt-1">Allow remote bookings or physical visits.</p>
</div>
<div class="relative inline-flex items-center cursor-pointer group">
<div class="w-12 h-6 bg-surface-container-highest rounded-full transition-colors duration-300"></div>
<span class="absolute left-0 w-6 h-6 bg-white border border-outline-variant rounded-full transition-transform duration-300 translate-x-0 shadow-sm"></span>
</div>
</div>
<!-- Cities Covered -->
<div class="space-y-4">
<label class="font-label-lg text-label-lg text-on-surface block uppercase">Cities Covered</label>
<div class="relative">
<span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">location_on</span>
<input class="w-full pl-12 pr-4 py-4 rounded-xl border border-outline-variant focus:border-terracotta-clay focus:ring-1 focus:ring-terracotta-clay transition-all outline-none" placeholder="Add a city..." type="text"/>
</div>
<div class="flex flex-wrap gap-2">
<span class="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg text-sm font-semibold text-on-surface">
                            Lagos, Nigeria <span class="material-symbols-outlined text-xs cursor-pointer">close</span>
</span>
<span class="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg text-sm font-semibold text-on-surface">
                            Nairobi, Kenya <span class="material-symbols-outlined text-xs cursor-pointer">close</span>
</span>
<span class="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg text-sm font-semibold text-on-surface">
                            Accra, Ghana <span class="material-symbols-outlined text-xs cursor-pointer">close</span>
</span>
</div>
</div>
<!-- Stats Row -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Stepper: Experience -->
<div class="space-y-4">
<label class="font-label-lg text-label-lg text-on-surface block uppercase">Years of Experience</label>
<div class="flex items-center border-2 border-outline-variant rounded-xl overflow-hidden h-14">
<button class="w-14 h-full flex items-center justify-center hover:bg-surface-container-high transition-colors text-on-surface" type="button">
<span class="material-symbols-outlined">remove</span>
</button>
<input class="flex-grow h-full text-center font-bold text-lg border-none focus:ring-0 bg-transparent" readonly="" type="number" value="5"/>
<button class="w-14 h-full flex items-center justify-center hover:bg-surface-container-high transition-colors text-on-surface" type="button">
<span class="material-symbols-outlined">add</span>
</button>
</div>
</div>
<!-- Languages -->
<div class="space-y-4">
<label class="font-label-lg text-label-lg text-on-surface block uppercase">Languages</label>
<select class="w-full h-14 px-4 py-2 rounded-xl border border-outline-variant focus:border-terracotta-clay focus:ring-1 focus:ring-terracotta-clay appearance-none outline-none custom-scrollbar" multiple="">
<option selected="">English</option>
<option>Yoruba</option>
<option>Swahili</option>
<option>French</option>
<option>Igbo</option>
<option>Hausa</option>
</select>
<p class="text-[10px] text-on-surface-variant italic">Hold Cmd/Ctrl to select multiple</p>
</div>
</div>
<!-- Actions -->
<div class="pt-8 space-y-6">
<button class="w-full bg-sunset-orange hover:bg-terracotta-clay text-white font-bold h-14 rounded-full transition-all shadow-lg shadow-sunset-orange/20 flex items-center justify-center gap-3 active:scale-95" type="button">
                        Next Step <span class="material-symbols-outlined">arrow_forward</span>
</button>
<div class="text-center">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors underline decoration-outline-variant underline-offset-4" href="#">Save and continue later</a>
</div>
</div>
</form>
</section>
</main>
<!-- Simple Footer for Transactional flow -->
<footer class="bg-surface-container-lowest border-t border-surface-container-high py-12 px-margin-desktop">
<div class="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<p class="font-body-md text-body-md text-on-surface-variant">Â© 2024 JAHRAH. All rights reserved. Nigeria | Ghana | Kenya | South Africa | â‚¦ NGN</p>
<div class="flex gap-8">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/privacy">Privacy</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Terms</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Safety</a>
</div>
</div>
</footer>
<script>
        // Micro-interaction for Multi-select chips
        document.querySelectorAll('button[type="button"]').forEach(btn => {
            btn.addEventListener('click', function() {
                if(this.classList.contains('border-outline-variant')) {
                    this.classList.remove('border-outline-variant', 'text-on-surface-variant');
                    this.classList.add('border-primary', 'bg-primary/5', 'text-primary');
                    // In a real app, we'd add the "X" icon here
                } else if(this.classList.contains('border-primary') && !this.classList.contains('bg-sunset-orange')) {
                    this.classList.add('border-outline-variant', 'text-on-surface-variant');
                    this.classList.remove('border-primary', 'bg-primary/5', 'text-primary');
                }
            });
        });
    </script>`

export default function ProOnboardingBuildYourProfilePage() {
  return <div dangerouslySetInnerHTML={{ __html: stitchHtml }} />
}

