import { memo, useContext } from 'react';
import classNames from 'classnames/bind';
import css from './styles.module.scss';
import CartContext from '~/contexts/cartContext';
import { ActionType } from '~/reducers/cartReducer';

const cx = classNames.bind(css);

export interface CartTogglerProps {
  className?: string;
}

function CartToggler({ className }: CartTogglerProps) {
  const { isOpen, dispatchProducts } = useContext(CartContext);

  return (
    <button
      className={cx(className, css.CartToggler)}
      onClick={() =>
        dispatchProducts({ isOpen, type: ActionType.TOGGLE_CART })
      }>
      {isOpen ? 'Close' : 'Open Cart'}
    </button>
  );
}

CartToggler.defaultProps = {};

export default memo(CartToggler);
