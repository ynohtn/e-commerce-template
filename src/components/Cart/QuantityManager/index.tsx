import { FC, useContext, useMemo } from "react";
import classNames from "classnames/bind";
import { ActionType } from "~/reducers/cartReducer";
import css from "./styles.module.scss";
import CartContext, { ProductInCart } from "~/contexts/cartContext";
const cx = classNames.bind(css);

export interface QuantityManagerProps {
  className?: string;
  product: ProductInCart;
}

interface DispatchActionsParams {
  action: ActionType
  product: ProductInCart
}

const QuantityManager: FC<QuantityManagerProps> = ({
  className,
  product,
}) => {
  const { dispatchProducts } = useContext(CartContext)

  const dispatchActions = ({ action, product }: DispatchActionsParams) => {
    switch (action) {
      case ActionType.ADD_TO_CART:
        return dispatchProducts({
          type: ActionType.ADD_TO_CART,
          payload: {
            product,
          },
        })
      case ActionType.DECREMENT_QTY:
        return dispatchProducts({
          type: ActionType.DECREMENT_QTY,
          payload: {
            product,
          },
        })
      case ActionType.REMOVE_FROM_CART:
        return dispatchProducts({
          type: ActionType.REMOVE_FROM_CART,
          payload: {
            product,
          },
        })
      default:
        return null
    }
  }

  return (
    <div className={cx(className, css.QuantityManager)}>
      <div>
        <button
          className={cx(className, css.button)}
          onClick={() => dispatchActions({ action: ActionType.DECREMENT_QTY, product })}
        >
          -
        </button>
        <p className={cx(className, css.quantity)}>{product.quantity}</p>
        <button
          className={cx(className, css.button)}
          onClick={() => dispatchActions({ action: ActionType.ADD_TO_CART, product })}
        >
          +
        </button>
      </div>
      <button
        className={cx(className, css.button)}
        onClick={() => dispatchActions({ action: ActionType.REMOVE_FROM_CART, product })}
      >
        X
      </button>
    </div>
  );
};

QuantityManager.defaultProps = {};

export default QuantityManager;
