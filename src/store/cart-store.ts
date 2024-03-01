import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { cartInMemory } from './helpers'

import { ProductProps } from '@/utils/data/products'

export type ProductCartProps = ProductProps & {
  quantity: number
}

type StateProps = {
  products: ProductCartProps[]
  add: (product: ProductProps) => void
  remove: (productId: string) => void
  reset: () => void
}

export const useCartStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],
      add: (product: ProductProps) =>
        set((state) => ({
          products: cartInMemory.add(state.products, product),
        })),
      remove: (productId: string) =>
        set((state) => ({
          products: cartInMemory.remove(state.products, productId),
        })),
      reset: () => set(() => ({ products: [] })),
    }),
    {
      name: 'nlw-expert:cart',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
