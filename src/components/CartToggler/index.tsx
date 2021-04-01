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
  const productsAdded = itemsInCart(products);

  return (
    <button
      className={cx(className, css.CartToggler)}
      onClick={() =>
        dispatchProducts({ isOpen, type: ActionType.TOGGLE_CART })
      }>
      {isOpen ?
        'Close'
        :
        <div>
          <span>Cart</span>
          {productsAdded > 0 &&
            <span className={css.notification}>{productsAdded}</span>
          }
        </div>
      }
    </button>
  );
}

CartToggler.defaultProps = {};

export default memo(CartToggler);
