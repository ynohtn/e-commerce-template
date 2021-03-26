import { createContext } from 'react'
import { ProductType } from '~/data'

export interface CartContent {
  products: ProductInCart[]
  dispatchProducts?: any
  isOpen?: boolean
}

export interface ProductInCart extends ProductType {
  quantity: number
}

const CartContext = createContext<CartContent>({
  products: [],
  isOpen: false,
  dispatchProducts: () => {},
})

export default CartContext
