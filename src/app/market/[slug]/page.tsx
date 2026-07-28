import { getProductBySlug, getProducts } from '@/lib/market/supabase'
import { PriceDisplay } from '@/components/market/PriceDisplay'
import { TrustScore } from '@/components/market/TrustScore'
import { AddToCartSection } from './AddToCartSection'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

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

  const related = await getProducts({ category: product.category, limit: 4 })
  const otherProducts = related.filter((p) => p.id !== product.id)

  return (
    <div className="min-h-screen bg-surface">
      {/* Nav */}
      <header className="sticky top-0 z-20 bg-surface/90 backdrop-blur border-b border-outline-variant px-6 py-3 flex items-center gap-4">
        <Link href="/market" className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface text-sm">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Market
        </Link>
        <span className="text-outline-variant">/</span>
        <Link href={`/market/category/${product.category}`} className="text-sm text-on-surface-variant hover:text-on-surface capitalize">
          {product.category.replace(/_/g, ' ')}
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Images */}
          <div className="space-y-3">
            <div className="aspect-square rounded-3xl overflow-hidden bg-surface-container">
              {product.images?.[0] ? (
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-8xl text-outline">shopping_bag</span>
                </div>
              )}
            </div>
            {product.images?.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.slice(1).map((img, i) => (
                  <div key={i} className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-surface-container">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-5">
            {product.vendor && (
              <Link href={`/market/vendor/${product.vendor.slug}`} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
                  {product.vendor.store_name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">{product.vendor.store_name}</p>
                  <p className="text-xs text-on-surface-variant">{product.vendor.city}</p>
                </div>
                {product.vendor.trust_tier && (
                  <TrustScore score={product.vendor.trust_score} tier={product.vendor.trust_tier} />
                )}
              </Link>
            )}

            <div>
              <h1 className="font-headline-lg text-2xl font-bold text-on-surface mb-1">{product.name}</h1>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm fill-icon" style={{ color: i < Math.round(product.avg_rating ?? 0) ? '#FFD700' : '#e5e2e1' }}>star</span>
                  ))}
                </div>
                <span className="text-sm text-on-surface-variant">({product.review_count ?? 0} reviews) · {product.total_sold ?? 0} sold</span>
              </div>
            </div>

            <PriceDisplay price={product.price} compareAt={product.compare_at_price} size="lg" />

            {product.stock_status === 'low_stock' && (
              <p className="text-sm text-tertiary font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-base">warning</span>
                Only a few left!
              </p>
            )}
            {product.stock_status === 'out_of_stock' && (
              <p className="text-sm text-error font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-base">remove_shopping_cart</span>
                Out of stock
              </p>
            )}

            {product.description && (
              <p className="text-on-surface-variant text-sm leading-relaxed">{product.description}</p>
            )}

            <AddToCartSection product={product} />

            <div className="p-4 bg-surface-container rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-secondary text-base">location_on</span>
                <span className="text-on-surface-variant">Collect from Jahrah Hubs — no home delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-secondary text-base">shield</span>
                <span className="text-on-surface-variant">Buyer protection on all orders</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-secondary text-base">verified</span>
                <span className="text-on-surface-variant">Vendor identity verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        {(product as any).reviews?.length > 0 && (
          <section className="mb-16">
            <h2 className="font-headline-md text-xl font-bold mb-6">Customer Reviews</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {((product as any).reviews as any[]).slice(0, 6).map((review: any) => (
                <div key={review.id} className="p-4 bg-surface-container-low rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm fill-icon" style={{ color: i < review.rating ? '#FFD700' : '#e5e2e1' }}>star</span>
                    ))}
                    {review.verified_purchase && (
                      <span className="text-xs text-secondary font-semibold ml-auto">Verified Purchase</span>
                    )}
                  </div>
                  {review.title && <p className="font-semibold text-sm mb-1">{review.title}</p>}
                  {review.body && <p className="text-sm text-on-surface-variant">{review.body}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related */}
        {otherProducts.length > 0 && (
          <section>
            <h2 className="font-headline-md text-xl font-bold mb-6">More in {product.category.replace(/_/g, ' ')}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {otherProducts.map((p) => (
                <Link key={p.id} href={`/market/${p.slug}`} className="group">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container mb-2">
                    {p.images?.[0] ? (
                      <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl text-outline">shopping_bag</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-semibold line-clamp-1">{p.name}</p>
                  <PriceDisplay price={p.price} size="sm" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
