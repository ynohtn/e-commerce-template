import { useContext } from 'react'
import classNames from 'classnames/bind'
import css from './styles.module.scss'
import QuantityManager from './QuantityManager'
import CartContext, { ProductInCart } from '~/contexts/cartContext'
import { ProductType } from '~/data'
import { ActionType } from '~/reducers/cartReducer'

const cx = classNames.bind(css)

export interface ProductControlsProps {
  className?: string
  product: ProductType | ProductInCart
  fromProductGrid?: boolean
}

interface DispatchActionsParams {
  action:
  | ActionType.ADD_TO_CART
  | ActionType.DECREMENT_QTY
  | ActionType.REMOVE_FROM_CART
  product: ProductType | ProductInCart
}

function ProductControls({
  className,
  product,
  fromProductGrid,
}: ProductControlsProps) {
  const { dispatchProducts } = useContext(CartContext)

  const addToCart = (product: ProductType | ProductInCart) => {
    dispatchProducts({
      type: ActionType.ADD_TO_CART,
      payload: {
        product,
      },
    })
  }

  const dispatchActions = ({ action, product }: DispatchActionsParams) => {
    switch (action) {
      case ActionType.ADD_TO_CART:
        return dispatchProducts({
          type: ActionType.ADD_TO_CART,
          payload: {
            product,
          },
        })
      case ActionType.DECREMENT_QTY:
        return dispatchProducts({
          type: ActionType.DECREMENT_QTY,
          payload: {
            product,
          },
        })
      case ActionType.REMOVE_FROM_CART:
        return dispatchProducts({
          type: ActionType.REMOVE_FROM_CART,
          payload: {
            product,
          },
        })
      default:
        return null
    }
  }

  return (
    <div className={cx(className, css.ProductControls)}>
      {fromProductGrid ? (
        <button
          className={css.button}
          onClick={() => addToCart(product)}>
          Add to cart
        </button>
      ) : (
        <QuantityManager
          quantity={product.quantity}
          onClick={(action) => dispatchActions({ action, product })}
        />
      )
      }
    </div >
  )
}

ProductControls.defaultProps = {}

export default ProductControls
