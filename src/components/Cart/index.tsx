import React, { FC, useContext } from "react";
import classNames from "classnames/bind";
import CartContext, { ProductInCart } from "~/contexts/cartContext";
import { ProductType } from "~/data";
import { ActionType } from "~/reducers/cartReducer";
import css from "./styles.module.scss";
import Product from "~/components/Product";
import TotalPrice from "./TotalPrice";
const cx = classNames.bind(css);

export interface CartProps {
  className?: string;
}

const Cart: FC<CartProps> = ({ className }) => {
  // Consume context
  const { products, dispatchProducts } = useContext(CartContext);

  // Returns total quantity of items in cart
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
          <Product
            className={cx(className, css.product)}
            key={`cartItem-${index}`}
            product={product}
          >
            {" "}
          </Product>
        ))}
      </ul>
      <TotalPrice />
    </div>
  );
};

Cart.defaultProps = {};

export default Cart;
