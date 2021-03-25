import { FC, useContext } from "react";
import classNames from "classnames/bind";
import CartContext from "~/contexts/cartContext";
import css from "./styles.module.scss";
import ProductInCartCard from "~/components/Cart/ProductInCartCard";
import TotalPrice from "./TotalPrice";
const cx = classNames.bind(css);

export interface CartProps {
  className?: string;
}

const Cart: FC<CartProps> = ({ className }) => {
  const { products } = useContext(CartContext);

  const itemsInCart = () => {
    return products.reduce(
      (quantity: number, product) => quantity + product.quantity,
      0
    );
  };

  return (
    <div className={cx(className, css.Cart)}>
      <h1 className={cx(className, css.title)}>CART ({itemsInCart()})</h1>
      <ul>
        {products.map((product, index: number) => (
          <ProductInCartCard
            className={cx(className, css.product)}
            key={`cartItem-${index}`}
            product={product}
          />
        ))}
      </ul>
      <TotalPrice />
    </div>
  );
};

Cart.defaultProps = {};

export default Cart;
