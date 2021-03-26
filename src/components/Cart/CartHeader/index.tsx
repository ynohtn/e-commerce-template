import { useContext } from 'react';
import classNames from 'classnames/bind';
import css from './styles.module.scss';
import CartContext from '~/contexts/cartContext';
import { ActionType } from '~/reducers/cartReducer';

const cx = classNames.bind(css);

export interface CartHeaderProps {
  className?: string;
}

function CartHeader({ className }: CartHeaderProps) {
  const { isOpen, products, dispatchProducts } = useContext(CartContext);
  const itemsInCart = () => {
    return products.reduce(
      (quantity: number, product) => quantity + product.quantity,
      0
    );
  };
  return (
    <div className={cx(className, css.CartHeader)}>
      <h1 className={cx(className, css.title)}>CART ({itemsInCart()})</h1>
      <button
        className={cx(className, css.CartToggler)}
        onClick={() =>
          dispatchProducts({ isOpen, type: ActionType.TOGGLE_CART })
        }>
        Close
      </button>
    </div>
  );
}

CartHeader.defaultProps = {};

export default CartHeader;
