import { useContext } from 'react';
import classNames from 'classnames/bind';
import css from './styles.module.scss';
import CartContext from '~/contexts/cartContext';
import { itemsInCart } from '~/lib';
import CartToggler from '~/components/CartToggler';

const cx = classNames.bind(css);

export interface CartHeaderProps {
  className?: string;
}

function CartHeader({ className }: CartHeaderProps) {
  const { products } = useContext(CartContext);

  return (
    <div className={cx(className, css.CartHeader)}>
      <h1 className={cx(className, css.title)}>CART ({itemsInCart(products)})</h1>
      <CartToggler />
    </div>
  );
}

CartHeader.defaultProps = {};

export default CartHeader;
