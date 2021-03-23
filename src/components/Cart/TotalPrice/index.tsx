import { useContext } from "react";
import classNames from "classnames/bind";
import CartContext from "~/contexts/cartContext";
import css from "./styles.module.scss";

const cx = classNames.bind(css);

export interface TotalPriceProps {
  className?: string;
}

function TotalPrice({ className }: TotalPriceProps) {
  const { products } = useContext(CartContext);
  // INFERRED TYPE HERE
  // Calculate total price of the cart
  const calculatePrice = () => {
    return products.reduce(
      (price: number, product) => price + product.price * product.quantity,
      0
    );
  };
  // Format price
  const formatPrice = (value: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR"
    }).format(value);

  return (
    <div className={cx(className, css.Total)}>
      TOTAL: {formatPrice(calculatePrice())}
    </div>
  );
}

TotalPrice.defaultProps = {};

export default TotalPrice;
