'use client'

import { useState } from 'react'
import Link from 'next/link'

const STEPS = [
  { title: 'Your Category', desc: 'What service do you offer?' },
  { title: 'Your Info', desc: 'Tell us about yourself' },
  { title: 'Portfolio', desc: 'Show your best work' },
  { title: 'Pricing', desc: 'Set your rates' },
  { title: 'Go Live', desc: "You're ready!" },
]

const CATEGORIES = [
  { label: 'Electrician', icon: 'bolt' },
  { label: 'Plumber', icon: 'plumbing' },
  { label: 'AC Technician', icon: 'ac_unit' },
  { label: 'Painter', icon: 'format_paint' },
  { label: 'Makeup Artist', icon: 'brush' },
  { label: 'Hair Stylist', icon: 'content_cut' },
  { label: 'Nail Tech', icon: 'pan_tool_alt' },
  { label: 'Photographer', icon: 'photo_camera' },
  { label: 'Event Planner', icon: 'event' },
  { label: 'Private Chef', icon: 'restaurant' },
  { label: 'Personal Trainer', icon: 'fitness_center' },
  { label: 'House Cleaner', icon: 'cleaning_services' },
]

export default function ProOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selected, setSelected] = useState<string | null>(null)

  const progress = (currentStep / STEPS.length) * 100

  return (
    <div className="min-h-screen bg-surface font-body-md">
      {/* Custom Nav for Onboarding */}
      <nav className="sticky top-0 z-50 bg-surface shadow-sm px-margin-desktop py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-headline-md font-bold text-primary">JAHRAH</span>
          <div className="h-6 w-px bg-outline-variant mx-2" />
          <span className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Pro Onboarding</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-on-surface-variant hover:text-primary font-label-lg text-label-lg transition-colors">Help Center</a>
          <button className="text-on-surface-variant font-label-lg text-label-lg px-4 py-2 hover:bg-surface-container rounded-full transition-all">Save & Exit</button>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="w-full bg-surface-container-high h-1">
        <div
          className="bg-primary h-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-margin-mobile py-12">
        {/* Step Indicators */}
        <div className="flex items-center justify-between mb-12">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex items-center">
              <div className={`flex flex-col items-center gap-2 ${i + 1 <= currentStep ? 'text-primary' : 'text-on-surface-variant'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-label-lg text-label-lg border-2 transition-all ${
                  i + 1 < currentStep ? 'bg-primary border-primary text-white' :
                  i + 1 === currentStep ? 'border-primary text-primary' :
                  'border-outline-variant text-on-surface-variant'
                }`}>
                  {i + 1 < currentStep ? (
                    <span className="material-symbols-outlined text-sm fill-icon">check</span>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className="hidden md:block text-xs font-label-lg">{step.title}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-px mx-2 ${i + 1 < currentStep ? 'bg-primary' : 'bg-outline-variant'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        {currentStep === 1 && (
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-2">What service do you offer?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">Choose the category that best describes your expertise. You can add more later.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setSelected(cat.label)}
                  className={`p-6 rounded-xl border-2 text-center transition-all ${
                    selected === cat.label
                      ? 'border-primary bg-primary-fixed'
                      : 'border-outline-variant bg-white hover:border-primary'
                  }`}
                >
                  <span className={`material-symbols-outlined text-3xl mb-3 block ${selected === cat.label ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {cat.icon}
                  </span>
                  <span className="font-label-lg text-label-lg">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-2">Tell us about yourself</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">This information helps customers find and trust you.</p>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-label-lg text-label-lg block mb-2">First Name</label>
                  <input className="w-full border border-outline rounded-xl p-4 font-body-md text-body-md bg-white focus:border-primary outline-none" placeholder="Chidi" />
                </div>
                <div>
                  <label className="font-label-lg text-label-lg block mb-2">Last Name</label>
                  <input className="w-full border border-outline rounded-xl p-4 font-body-md text-body-md bg-white focus:border-primary outline-none" placeholder="Okonkwo" />
                </div>
              </div>
              <div>
                <label className="font-label-lg text-label-lg block mb-2">Professional Bio</label>
                <textarea className="w-full border border-outline rounded-xl p-4 font-body-md text-body-md bg-white focus:border-primary outline-none h-32 resize-none" placeholder="Tell customers about your experience and what makes you great..." />
              </div>
              <div>
                <label className="font-label-lg text-label-lg block mb-2">Years of Experience</label>
                <input type="number" className="w-full border border-outline rounded-xl p-4 font-body-md text-body-md bg-white focus:border-primary outline-none" placeholder="5" />
              </div>
              <div>
                <label className="font-label-lg text-label-lg block mb-2">Phone Number</label>
                <div className="flex">
                  <div className="border border-outline rounded-l-xl px-4 py-4 bg-surface-container font-body-md text-body-md flex items-center">🇳🇬 +234</div>
                  <input className="flex-1 border border-l-0 border-outline rounded-r-xl p-4 font-body-md text-body-md bg-white focus:border-primary outline-none" placeholder="801 234 5678" />
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-2">Show your best work</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">Upload photos of completed jobs to build trust with customers.</p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="aspect-square bg-surface-container rounded-xl border-2 border-dashed border-outline flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary-fixed transition-all">
                  <span className="material-symbols-outlined text-on-surface-variant text-3xl mb-2">add_photo_alternate</span>
                  <span className="text-xs text-on-surface-variant font-label-lg">Add Photo</span>
                </div>
              ))}
            </div>
            <p className="text-on-surface-variant text-sm font-body-md text-center">Upload up to 12 photos. JPG, PNG up to 10MB each.</p>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-2">Set your pricing</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">Be transparent with customers about your rates.</p>
            <div className="space-y-4">
              {['Consultation / Visit Fee', 'Main Service (per hour)', 'Minimum Job Price'].map((service) => (
                <div key={service} className="bg-white rounded-xl p-6 border border-outline-variant flex items-center justify-between">
                  <div>
                    <h4 className="font-label-lg text-label-lg mb-1">{service}</h4>
                    <p className="text-on-surface-variant text-sm">Set a starting price (customers negotiate from here)</p>
                  </div>
                  <div className="flex items-center border border-outline rounded-xl overflow-hidden">
                    <div className="bg-surface-container px-4 py-3 font-label-lg text-label-lg">₦</div>
                    <input type="number" className="w-28 px-4 py-3 border-none outline-none font-body-md text-body-md" placeholder="0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-secondary text-5xl fill-icon">check_circle</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">You&apos;re Live on JAHRAH!</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto mb-8">
              Congratulations! Your profile is now live. Start accepting bookings and growing your business today.
            </p>
            <Link href="/pro-dashboard" className="bg-sunset-orange text-white px-10 py-5 rounded-full font-label-lg text-lg inline-block">
              Go to Pro Dashboard
            </Link>
          </div>
        )}

        {/* Navigation */}
        {currentStep < 5 && (
          <div className="flex justify-between mt-12 pt-8 border-t border-outline-variant">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              className={`px-8 py-4 rounded-full font-label-lg text-label-lg border border-outline hover:bg-surface-container transition-all ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentStep === 1}
            >
              Back
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-lg text-label-lg hover:bg-terracotta-clay transition-colors"
            >
              {currentStep === 4 ? 'Submit Profile' : 'Continue'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
