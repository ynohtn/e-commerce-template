import { memo, useContext } from 'react';
import classNames from 'classnames/bind';
import css from './styles.module.scss';
import CartContext from '~/contexts/cartContext';
import { ActionType } from '~/reducers/cartReducer';
import { itemsInCart } from '~/utils';

const cx = classNames.bind(css);

export interface CartTogglerProps {
  className?: string;
}

function CartToggler({ className }: CartTogglerProps) {
  const { isOpen, products, dispatchProducts } = useContext(CartContext);

  return (
    <button
      className={cx(className, css.CartToggler)}
      onClick={() =>
        dispatchProducts({ isOpen, type: ActionType.TOGGLE_CART })
      }>
      {isOpen ? 'Close' : `Cart ( ${itemsInCart(products)} )`}
    </button>
  );
}

CartToggler.defaultProps = {};

export default memo(CartToggler);
