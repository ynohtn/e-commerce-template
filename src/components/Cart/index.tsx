import { FC, useContext } from "react";
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

interface DispatchActionsParams {
  action:
  | ActionType.ADD_TO_CART
  | ActionType.DECREMENT_QTY
  | ActionType.REMOVE_FROM_CART;
  product: ProductType | ProductInCart;
}

const Cart: FC<CartProps> = ({ className }) => {
  const { products, dispatchProducts } = useContext(CartContext);

  const itemsInCart = () => {
    return products.reduce(
      (quantity: number, product) => quantity + product.quantity,
      0
    );
  };

  const dispatchActions = ({ action, product }: DispatchActionsParams) => {
    switch (action) {
      case ActionType.ADD_TO_CART:
        return dispatchProducts({
          type: ActionType.ADD_TO_CART,
          payload: {
            product
          }
        });
      case ActionType.DECREMENT_QTY:
        return dispatchProducts({
          type: ActionType.DECREMENT_QTY,
          payload: {
            product
          }
        });
      case ActionType.REMOVE_FROM_CART:
        return dispatchProducts({
          type: ActionType.REMOVE_FROM_CART,
          payload: {
            product
          }
        });
      default:
        return null;
    }
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
          />
        ))}
      </ul>
      <TotalPrice />
    </div>
  );
};

Cart.defaultProps = {};

export default Cart;
