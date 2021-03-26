import { FC, useContext, useRef } from 'react';
import classNames from 'classnames/bind';
import CartContext from '~/contexts/cartContext';
import { ActionType } from '~/reducers/cartReducer';
import { useClickAway } from 'react-use';
import css from './styles.module.scss';
import ProductInCartCard from '~/components/Cart/ProductInCartCard';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
const cx = classNames.bind(css);

export interface CartProps {
  className?: string;
}

const Cart: FC<CartProps> = ({ className }) => {
  const { isOpen, products, dispatchProducts } = useContext(CartContext);
  const ref = useRef(null);

  useClickAway(ref, () => {
    if (isOpen) dispatchProducts({ type: ActionType.TOGGLE_CART, isOpen })
  });

  return (
    <div ref={ref} className={cx(className, css.Cart, { isOpen })}>
      <CartHeader />
      {products.length > 0 ? (
        <ul className={css.cartContent}>
          {products.map((product) => (
            <ProductInCartCard
              className={cx(className, css.product)}
              key={`cart-${product.id}`}
              product={product}
            />
          ))}
        </ul>
      ) : (
        <div className={css.isEmpty}>
          <p>Cart is empty.</p>
        </div>
      )}
      <CartFooter />
    </div>
  );
};

Cart.defaultProps = {};

export default Cart;
