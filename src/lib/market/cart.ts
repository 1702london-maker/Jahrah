'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, Product } from '@/types/market'

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, quantity: number, variants: Record<string, string>) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  subtotal: () => number
  serviceFee: () => number
  total: () => number
  itemCount: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem(product, quantity, variants) {
        set((state) => {
          const existing = state.items.find(
            (i) =>
              i.product_id === product.id &&
              JSON.stringify(i.variant_selection) === JSON.stringify(variants)
          )
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === existing.id ? { ...i, quantity: i.quantity + quantity } : i
              ),
            }
          }
          const newItem: CartItem = {
            id: `${product.id}-${Date.now()}`,
            product_id: product.id,
            product,
            quantity,
            variant_selection: variants,
            unit_price: product.price,
          }
          return { items: [...state.items, newItem] }
        })
      },

      removeItem(productId) {
        set((state) => ({ items: state.items.filter((i) => i.product_id !== productId) }))
      },

      updateQuantity(productId, quantity) {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        set((state) => ({
          items: state.items.map((i) => (i.product_id === productId ? { ...i, quantity } : i)),
        }))
      },

      clearCart() {
        set({ items: [] })
      },

      subtotal() {
        return get().items.reduce((sum, i) => sum + i.unit_price * i.quantity, 0)
      },

      serviceFee() {
        const sub = get().subtotal()
        return Math.round(sub * 0.05)
      },

      total() {
        return get().subtotal() + get().serviceFee()
      },

      itemCount() {
        return get().items.reduce((sum, i) => sum + i.quantity, 0)
      },
    }),
    { name: 'jahrah-cart' }
  )
)
