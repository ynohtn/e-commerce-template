import { FC } from "react";
import classNames from "classnames/bind";
import { ProductType } from "~/data";
import { ProductInCart } from "~/contexts/cartContext";
import ProductControls from "./ProductControls"
import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface ProductProps {
  className?: string
  product: ProductType | ProductInCart
  fromProductGrid?: boolean
}

const Product: FC<ProductProps> = ({ className, product, fromProductGrid, children }) => {
  return (
    <li className={cx(className, css.Product)}>
      <figure>
        <img src={product.image} alt="" />
      </figure>
      <div>
        <h2>{product.name}</h2>
        <h3>{product.price} €</h3>
        <ProductControls product={product} fromProductGrid={fromProductGrid} />
        {children}
      </div>
    </li>
  );
};

Product.defaultProps = {};

export default Product;

