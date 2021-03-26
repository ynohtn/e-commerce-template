import { Reducer } from 'react'
import { CartContent } from '~/contexts/cartContext'
import { ProductType } from '~/data'
import {
  addProduct,
  removeOneProduct,
  removeProduct,
  toggleCart,
} from './cartReducerActions'

export enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  DECREMENT_QTY = 'DECREMENT_QTY',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  TOGGLE_CART = 'TOGGLE_CART',
}

interface PayloadReducer {
  product: ProductType
}

export interface IReducer {
  type: ActionType
  payload: PayloadReducer
}

const cartReducer: Reducer<CartContent, IReducer> = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return addProduct(state, action)
    case ActionType.DECREMENT_QTY:
      return removeOneProduct(state, action)
    case ActionType.REMOVE_FROM_CART:
      return removeProduct(state, action)
    case ActionType.TOGGLE_CART:
      return toggleCart(state)
    default:
      return state
  }
}

export default cartReducer
