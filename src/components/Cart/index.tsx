import { FC, useContext } from 'react';
import classNames from 'classnames/bind';
import CartContext from '~/contexts/cartContext';
import css from './styles.module.scss';
import ProductInCartCard from '~/components/Cart/ProductInCartCard';
import TotalPrice from './TotalPrice';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
const cx = classNames.bind(css);

export interface CartProps {
  className?: string;
}

const Cart: FC<CartProps> = ({ className }) => {
  const { isOpen, products } = useContext(CartContext);

  return (
    <div className={cx(className, css.Cart, { isOpen })}>
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
