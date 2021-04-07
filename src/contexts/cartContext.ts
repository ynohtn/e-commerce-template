import { createContext } from 'react';
import { ImageType, ProductType } from '~/lib/interfaces';

export interface CartContent {
  products: ProductInCart[];
  dispatchProducts?: any;
  isOpen?: boolean;
}

export interface ProductInCart extends ProductType {
  quantity: number;
}

const CartContext = createContext<CartContent>({
  products: [],
  isOpen: false,
  dispatchProducts: () => {}
});

export default CartContext;
