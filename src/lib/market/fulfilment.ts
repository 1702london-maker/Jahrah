import type { FulfilmentType } from '@/types/market'

export interface FulfilmentConfig {
  type: FulfilmentType
  label: string
  shortLabel: string
  description: string
  icon: string
  color: string
  bgColor: string
  textColor: string
}

const FULFILMENT_CONFIG: Record<FulfilmentType, FulfilmentConfig> = {
  warehouse: {
    type: 'warehouse',
    label: 'Warehouse Ready',
    shortLabel: 'In Stock',
    description: 'This product is held at a Jahrah warehouse and ready to go. Once your order is confirmed it will be ready for collection within 24 hours.',
    icon: 'warehouse',
    color: '#286c1e',
    bgColor: '#e8f5e4',
    textColor: '#1a4a12',
  },
  express: {
    type: 'express',
    label: 'Express 24hr',
    shortLabel: 'Express',
    description: 'Order before 2pm and your item will be ready for collection at your chosen Jahrah Hub the next business day.',
    icon: 'bolt',
    color: '#1565C0',
    bgColor: '#e3f0fd',
    textColor: '#0d3d80',
  },
  sourced: {
    type: 'sourced',
    label: 'Sourced',
    shortLabel: 'Sourced',
    description: 'This product is sourced to order. Delivery times vary by supplier — typically 7–14 days from order confirmation.',
    icon: 'public',
    color: '#6a1b9a',
    bgColor: '#f3e8fd',
    textColor: '#4a1070',
  },
  vendor_ships: {
    type: 'vendor_ships',
    label: 'Seller Ships',
    shortLabel: 'Seller Ships',
    description: 'The seller ships this product directly to your chosen Jahrah Hub. Delivery time depends on the seller\'s location and handling time.',
    icon: 'local_shipping',
    color: '#5d4037',
    bgColor: '#efebe9',
    textColor: '#3e2723',
  },
}

export function getFulfilmentConfig(type: FulfilmentType): FulfilmentConfig {
  return FULFILMENT_CONFIG[type]
}

export function getAllFulfilmentConfigs(): FulfilmentConfig[] {
  return Object.values(FULFILMENT_CONFIG)
}
