import { useContext } from 'react'
import classNames from 'classnames/bind'
import css from './styles.module.scss'
import { ProductType } from '~/data'
import CartContext from '~/contexts/cartContext'
import { ActionType } from '~/reducers/cartReducer'

const cx = classNames.bind(css)

export interface AddToCartButtonProps {
  className?: string
  product: ProductType
}

function AddToCartButton({ className, product }: AddToCartButtonProps) {
  const { dispatchProducts } = useContext(CartContext)

  const addToCart = (product: ProductType) => {
    dispatchProducts({
      type: ActionType.ADD_TO_CART,
      payload: {
        product,
      },
    })
  }

  return (
    <button
      className={cx(className, css.AddToCartButton)}
      onClick={() => addToCart(product)}
    >
      Add to cart
    </button>
  )
}

AddToCartButton.defaultProps = {}

export default AddToCartButton
