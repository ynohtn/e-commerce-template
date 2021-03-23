import { FC } from "react";
import classNames from "classnames/bind";
import { ProductType } from "~/data";
import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface ProductProps {
  className?: string;
  product: ProductType;
  // Typer children sans le type de react
  // children?: JSX.Element | JSX.Element[];
}
const Product: FC<ProductProps> = ({ className, product, children }) => {
  return (
    <li className={cx(className, css.Product)}>
      <figure>
        <img src={product.image} alt="" />
      </figure>
      <div>
        <h2>{product.name}</h2>
        <h3>{product.price} €</h3>
        {children}
      </div>
    </li>
  );
};

Product.defaultProps = {};

export default Product;

