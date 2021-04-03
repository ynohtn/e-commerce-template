import { useContext } from 'react';
import classNames from 'classnames/bind';
import css from './styles.module.scss';
import { ProductType } from '~/data';
import CartContext from '~/contexts/cartContext';
import { ActionType } from '~/reducers/cartReducer';

const cx = classNames.bind(css);

export interface AddToCartButtonProps {
  className?: string;
  product: ProductType | any;
}

function AddToCartButton({ className, product }: AddToCartButtonProps) {
  const { products, dispatchProducts } = useContext(CartContext);

  const isInCart = (product: ProductType) => {
    return !!products.find(item => item.id === product.id);
  }

  const addToCart = (product: ProductType) => {
    dispatchProducts({
      type: ActionType.ADD_TO_CART,
      payload: {
        product
      }
    });
  };

  return (
    <button
      className={cx(className, css.AddToCartButton)}
      onClick={() => { addToCart(product) }}
    >
      {isInCart(product) ? 'Add more' : 'Add to cart'}
    </button>
  );
}

AddToCartButton.defaultProps = {};

export default AddToCartButton;
