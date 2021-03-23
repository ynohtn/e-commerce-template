import { FC } from "react";
import classNames from "classnames/bind";
import { ActionType } from "~/reducers/cartReducer";
import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface CounterProps {
  className?: string;
  quantity: number;
  onClick: (action: ActionType) => void;
}

const QuantityManager: FC<CounterProps> = ({
  className,
  quantity,
  onClick
}) => {
  return (
    <div className={cx(className, css.QuantityManager)}>
      <div>
        <button
          className={cx(className, css.button)}
          onClick={() => onClick(ActionType.DECREMENT_QTY)}
        >
          -
        </button>
        <p className={cx(className, css.quantity)}> {quantity} </p>
        <button
          className={cx(className, css.button)}
          onClick={() => onClick(ActionType.ADD_TO_CART)}
        >
          +
        </button>
      </div>
      <button
        className={cx(className, css.button)}
        onClick={() => onClick(ActionType.REMOVE_FROM_CART)}
      >
        X
      </button>
    </div>
  );
};

QuantityManager.defaultProps = {};

export default QuantityManager;
