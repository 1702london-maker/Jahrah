export const dynamic = 'force-dynamic'

import { getProductBySlug, getProducts, supabaseAdmin } from '@/lib/market/supabase'
import { FulfilmentBadge } from '@/components/market/FulfilmentBadge'
import { PriceDisplay } from '@/components/market/PriceDisplay'
import { TrustScore } from '@/components/market/TrustScore'
import { ReviewCard } from '@/components/market/ReviewCard'
import { ImageGallery } from './ImageGallery'
import { AddToCartSection } from './AddToCartSection'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import type { FulfilmentType } from '@/types/market'

const CATEGORY_LABELS: Record<string, string> = {
  fashion: 'Fashion', beauty: 'Beauty', food_drinks: 'Food & Drinks',
  electronics: 'Electronics', home_living: 'Home & Living', health: 'Health',
  art_crafts: 'Art & Crafts', kids: 'Kids', sports: 'Sports', automotive: 'Automotive',
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProductBySlug(params.slug)
  if (!product) return { title: 'Product Not Found | JAHRAH Market' }
  return {
    title: `${product.name} | JAHRAH Market`,
    description: product.description ?? undefined,
    openGraph: { images: product.images?.[0] ? [product.images[0]] : [] },
  }
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)
  if (!product) notFound()

  // Increment view count (fire-and-forget, don't block render)
  void supabaseAdmin()
    .from('products')
    .update({ view_count: ((product as any).view_count ?? 0) + 1 })
    .eq('id', product.id)

  const related = await getProducts({ category: product.category, limit: 5 })
  const otherProducts = related.filter((p) => p.id !== product.id).slice(0, 4)
  const reviews = (product as any).reviews ?? []
  const fulfilmentType = (product as any).fulfilment_type as FulfilmentType | undefined
  const categoryLabel = CATEGORY_LABELS[product.category] ?? product.category.replace(/_/g, ' ')

  const avgRating = reviews.length > 0
    ? reviews.reduce((s: number, r: any) => s + r.rating, 0) / reviews.length
    : (product as any).avg_rating ?? 0

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur border-b border-outline-variant px-6 py-3 flex items-center gap-3">
        <Link href="/market" className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface text-sm">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Market
        </Link>
        <span className="text-outline-variant">/</span>
        <Link
          href={`/market/category/${product.category}`}
          className="text-sm text-on-surface-variant hover:text-on-surface"
        >
          {categoryLabel}
        </Link>
        <span className="text-outline-variant">/</span>
        <span className="text-sm font-semibold line-clamp-1 text-on-surface">{product.name}</span>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[60%_40%] gap-10 mb-16">
          {/* Image gallery */}
          <ImageGallery images={product.images ?? []} name={product.name} />

          {/* Purchase panel */}
          <div className="space-y-5 lg:max-h-screen lg:overflow-y-auto lg:pr-2">
            {/* Vendor */}
            {product.vendor && (
              <Link href={`/market/vendor/${product.vendor.slug}`} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {product.vendor.logo_url ? (
                    <img src={product.vendor.logo_url} alt="" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    product.vendor.store_name[0]
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">{product.vendor.store_name}</p>
                  <p className="text-xs text-on-surface-variant">{product.vendor.city}</p>
                </div>
                {product.vendor.trust_tier && (
                  <div className="ml-auto flex-shrink-0">
                    <TrustScore score={product.vendor.trust_score} tier={product.vendor.trust_tier} size="sm" />
                  </div>
                )}
              </Link>
            )}

            {/* Title + rating */}
            <div>
              <div className="flex items-start gap-2 mb-1">
                {(product as any).is_jahrah_choice && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ background: '#fff4e6', color: '#b54708' }}>
                    <span className="material-symbols-outlined text-xs">verified</span>
                    Jahrah Choice
                  </span>
                )}
              </div>
              <h1 className="font-headline-lg text-2xl font-bold text-on-surface mb-2">{product.name}</h1>
              {(reviews.length > 0 || (product as any).review_count > 0) && (
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-sm"
                        style={{
                          color: i < Math.round(avgRating) ? '#FFD700' : '#e5e2e1',
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-on-surface-variant">
                    {avgRating.toFixed(1)} ({(product as any).review_count ?? reviews.length} reviews)
                    {(product as any).total_sold > 0 && ` · ${(product as any).total_sold} sold`}
                  </span>
                </div>
              )}
            </div>

            {/* Price */}
            <PriceDisplay price={product.price} compareAt={product.compare_at_price} size="lg" />

            {/* Fulfilment */}
            {fulfilmentType && (
              <div className="flex items-center gap-2">
                <FulfilmentBadge type={fulfilmentType} />
                {(product as any).delivery_days_min && (
                  <span className="text-xs text-on-surface-variant">
                    Ready in {(product as any).delivery_days_min}
                    {(product as any).delivery_days_max ? `–${(product as any).delivery_days_max}` : '+'} days
                  </span>
                )}
              </div>
            )}

            {/* Stock warnings */}
            {product.stock_status === 'low_stock' && (
              <p className="text-sm font-semibold flex items-center gap-1" style={{ color: '#E65100' }}>
                <span className="material-symbols-outlined text-base">warning</span>
                Only a few left — order soon
              </p>
            )}
            {product.stock_status === 'out_of_stock' && (
              <p className="text-sm font-semibold flex items-center gap-1 text-error">
                <span className="material-symbols-outlined text-base">remove_shopping_cart</span>
                Out of stock
              </p>
            )}

            {/* Description */}
            {product.description && (
              <p className="text-on-surface-variant text-sm leading-relaxed">{product.description}</p>
            )}

            {/* Add to cart */}
            <AddToCartSection product={product} />

            {/* Guarantees */}
            <div className="p-4 bg-surface-container rounded-2xl space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm">
                <span className="material-symbols-outlined text-secondary text-base">location_on</span>
                <span className="text-on-surface-variant">Collect from Jahrah Hubs — no home delivery</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <span className="material-symbols-outlined text-secondary text-base">shield</span>
                <span className="text-on-surface-variant">Buyer protection on all orders</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <span className="material-symbols-outlined text-secondary text-base">verified</span>
                <span className="text-on-surface-variant">Vendor identity verified by Jahrah</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <span className="material-symbols-outlined text-secondary text-base">lock</span>
                <span className="text-on-surface-variant">Secure payment via Paystack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews section */}
        {reviews.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-headline-md text-xl font-bold">Customer Reviews</h2>
              <span className="text-sm text-on-surface-variant">({reviews.length})</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {reviews.slice(0, 6).map((review: any) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            {reviews.length > 6 && (
              <p className="text-sm text-on-surface-variant mt-4 text-center">
                Showing 6 of {reviews.length} reviews
              </p>
            )}
          </section>
        )}

        {/* Related products */}
        {otherProducts.length > 0 && (
          <section>
            <h2 className="font-headline-md text-xl font-bold mb-6">More in {categoryLabel}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {otherProducts.map((p) => (
                <Link key={p.id} href={`/market/${p.slug}`} className="group">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container mb-2.5">
                    {p.images?.[0] ? (
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl text-outline">shopping_bag</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-semibold line-clamp-2 mb-1">{p.name}</p>
                  <PriceDisplay price={p.price} compareAt={p.compare_at_price} size="sm" />
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="h-16" />
      </main>
    </div>
  )
}
