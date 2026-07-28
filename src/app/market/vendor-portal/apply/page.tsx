'use client'
import { useState } from 'react'
import Link from 'next/link'

const CATEGORIES = [
  'fashion', 'beauty', 'food_drinks', 'electronics', 'home_living',
  'health', 'art_crafts', 'kids', 'sports', 'automotive',
]

export default function VendorApplyPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    store_name: '', email: '', description: '', category: '',
    product_types: '', monthly_volume: '',
    has_cac: false, cac_number: '', id_type: '', id_number: '',
    phone: '', whatsapp: '', city: '', state: '',
  })

  function update(key: string, val: string | boolean) {
    setForm((p) => ({ ...p, [key]: val }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/market/vendor-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Submission failed')
      setSubmitted(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-4 gap-6">
        <div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-4xl text-secondary">check_circle</span>
        </div>
        <h1 className="font-headline-lg text-2xl font-bold text-center">Application Submitted!</h1>
        <p className="text-on-surface-variant text-center max-w-sm">
          We'll review your application within 3–5 business days and reach out via email.
        </p>
        <Link href="/market" className="px-6 py-3 bg-primary text-on-primary rounded-full font-semibold">Back to Market</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur border-b border-outline-variant px-6 py-3 flex items-center gap-4">
        <Link href="/market" className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface text-sm">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Market
        </Link>
        <h1 className="font-semibold">Become a Vendor</h1>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Steps */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                style={{ background: step >= s ? '#b02f00' : '#e5e2e1', color: step >= s ? '#fff' : '#5b4039' }}
              >
                {s}
              </div>
              {s < 3 && <div className="flex-1 h-0.5 w-12" style={{ background: step > s ? '#b02f00' : '#e5e2e1' }} />}
            </div>
          ))}
          <span className="ml-2 text-sm text-on-surface-variant">Step {step} of 3</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {step === 1 && (
            <>
              <h2 className="font-headline-md text-lg font-bold">Store Information</h2>
              {[
                { key: 'store_name', label: 'Store Name', required: true },
                { key: 'email', label: 'Email Address', type: 'email', required: true },
                { key: 'phone', label: 'Phone Number', type: 'tel', required: true },
                { key: 'whatsapp', label: 'WhatsApp Number' },
              ].map(({ key, label, type = 'text', required }) => (
                <div key={key}>
                  <label className="block text-sm font-semibold mb-1">{label}{required && ' *'}</label>
                  <input
                    type={type} required={required} value={(form as any)[key]}
                    onChange={(e) => update(key, e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-outline-variant focus:border-primary outline-none bg-surface"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold mb-1">Category *</label>
                <select
                  required value={form.category}
                  onChange={(e) => update('category', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-outline-variant focus:border-primary outline-none bg-surface capitalize"
                >
                  <option value="">Select a category</option>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c.replace(/_/g, ' ')}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Store Description *</label>
                <textarea
                  required rows={3} value={form.description}
                  onChange={(e) => update('description', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-outline-variant focus:border-primary outline-none bg-surface resize-none"
                  placeholder="Tell us what you sell..."
                />
              </div>
              <button type="button" onClick={() => setStep(2)} className="w-full py-3 bg-primary text-on-primary rounded-full font-semibold">
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="font-headline-md text-lg font-bold">Business Details</h2>
              {[
                { key: 'product_types', label: 'What products do you sell?' },
                { key: 'monthly_volume', label: 'Expected monthly orders' },
                { key: 'city', label: 'City', required: true },
                { key: 'state', label: 'State', required: true },
              ].map(({ key, label, required }) => (
                <div key={key}>
                  <label className="block text-sm font-semibold mb-1">{label}{required && ' *'}</label>
                  <input
                    type="text" required={required} value={(form as any)[key]}
                    onChange={(e) => update(key, e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-outline-variant focus:border-primary outline-none bg-surface"
                  />
                </div>
              ))}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox" checked={form.has_cac}
                  onChange={(e) => update('has_cac', e.target.checked)}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm font-semibold">I have a CAC registration</span>
              </label>
              {form.has_cac && (
                <div>
                  <label className="block text-sm font-semibold mb-1">CAC Number</label>
                  <input
                    type="text" value={form.cac_number}
                    onChange={(e) => update('cac_number', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-outline-variant focus:border-primary outline-none bg-surface"
                  />
                </div>
              )}
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 border-2 border-outline-variant rounded-full font-semibold">Back</button>
                <button type="button" onClick={() => setStep(3)} className="flex-1 py-3 bg-primary text-on-primary rounded-full font-semibold">Next</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="font-headline-md text-lg font-bold">Identity Verification</h2>
              <p className="text-sm text-on-surface-variant">We verify all vendors to ensure buyer trust and safety.</p>
              <div>
                <label className="block text-sm font-semibold mb-1">ID Type</label>
                <select
                  value={form.id_type}
                  onChange={(e) => update('id_type', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-outline-variant focus:border-primary outline-none bg-surface"
                >
                  <option value="">Select ID type</option>
                  <option value="nin">NIN</option>
                  <option value="bvn">BVN</option>
                  <option value="passport">Passport</option>
                  <option value="drivers_license">Driver's License</option>
                </select>
              </div>
              {form.id_type && (
                <div>
                  <label className="block text-sm font-semibold mb-1">ID Number</label>
                  <input
                    type="text" value={form.id_number}
                    onChange={(e) => update('id_number', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-outline-variant focus:border-primary outline-none bg-surface"
                  />
                </div>
              )}
              {error && <p className="text-sm text-error bg-error-container px-3 py-2 rounded-xl">{error}</p>}
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)} className="flex-1 py-3 border-2 border-outline-variant rounded-full font-semibold">Back</button>
                <button type="submit" disabled={loading} className="flex-1 py-3 bg-primary text-on-primary rounded-full font-semibold disabled:opacity-60">
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </>
          )}
        </form>
      </main>
    </div>
  )
}
