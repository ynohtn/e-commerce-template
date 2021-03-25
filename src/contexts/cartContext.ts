import { createContext } from 'react'
import { ProductType } from '~/data'

export interface CartContent {
  products: ProductInCart[]
  dispatchProducts?: any
}

export interface ProductInCart extends ProductType {
  quantity: number
}

const CartContext = createContext<CartContent>({
  products: [],
  dispatchProducts: () => {},
})

export default CartContext
