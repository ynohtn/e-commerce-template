import { CartContent } from '~/contexts/cartContext'
import { IReducer } from './cartReducer'
import { ActionType } from './cartReducer'

interface GetStateWithUpdatedProductsArrayParams {
  state: CartContent
  productId: string
  action: ActionType.ADD_TO_CART | ActionType.DECREMENT_QTY
}

export function getStateWithUpdatedProductsArray({
  state,
  productId,
  action,
}: GetStateWithUpdatedProductsArrayParams) {
  return {
    ...state,
    products: state.products.map((product) => {
      if (product.id === productId && product.quantity) {
        return {
          ...product,
          quantity:
            action === ActionType.ADD_TO_CART
              ? product.quantity + 1
              : product.quantity - 1,
        }
      } else return product
    }),
  }
}

export const getProductInCartById = (state: CartContent, action: IReducer) => {
  const productInCart =
    state.products.find(
      (product: { id: string }) => product.id === action.payload.product.id
    ) ?? null
  return productInCart
}

export const addProduct = (state: CartContent, action: IReducer) => {
  const productInCart = getProductInCartById(state, action)

  if (productInCart)
    return getStateWithUpdatedProductsArray({
      state,
      productId: productInCart.id,
      action: ActionType.ADD_TO_CART,
    })

  return {
    ...state,
    products: [...state.products, { ...action.payload.product, quantity: 1 }],
  }
}

export const removeProduct = (state: CartContent, action: IReducer) => {
  return {
    ...state,
    products: state.products.filter(
      (product: { id: string }) => product.id !== action.payload.product.id
    ),
  }
}

export const removeOneProduct = (state: CartContent, action: IReducer) => {
  const productInCart = getProductInCartById(state, action)

  if (!productInCart) return state

  if (productInCart.quantity && productInCart.quantity > 1)
    return getStateWithUpdatedProductsArray({
      state,
      productId: productInCart.id,
      action: ActionType.DECREMENT_QTY,
    })
  else return removeProduct(state, action)
}
