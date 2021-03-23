import React, { FC, useContext } from "react";
import classNames from "classnames/bind";
import { ProductType } from "~/data";
import css from "./styles.module.scss";
import Product from "~/components/Product";
import CartContext, { ProductInCart } from "~/contexts/cartContext";
import { ActionType } from "~/reducers/cartReducer";
const cx = classNames.bind(css);

export interface ProductGridProps {
  className?: string;
  products: ProductType[];
}

const ProductGrid: FC<ProductGridProps> = ({ className, products }) => {
  const { dispatchProducts } = useContext(CartContext);

  // Add product to cart
  const addToCart = (product: ProductType | ProductInCart) => {
    dispatchProducts({
      type: ActionType.ADD_TO_CART,
      payload: {
        product
      }
    });
  };

  return (
    <div className={cx(className, css.ProductGrid)}>
      <h1 className={cx(className, css.title)}>
        SHOP <span>({products.length})</span>
      </h1>
      <div>
        <ul>
          {products.map((product) => (
            <Product
              className={cx(className, css.product)}
              key={product.id}
              product={product}
            >
              <button
                className={cx(className, css.button)}
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </Product>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProductGrid.defaultProps = {};

export default ProductGrid;
