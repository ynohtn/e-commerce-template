import { FC } from 'react';
import classNames from 'classnames/bind';
import { ProductType } from '~/data';
import css from './styles.module.scss';
import ProductCard from '~/components/ProductGrid/ProductCard';
const cx = classNames.bind(css);

export interface ProductGridProps {
  className?: string;
  products: ProductType[];
}

const ProductGrid: FC<ProductGridProps> = ({ className, products }) => {
  return (
    <div className={cx(className, css.ProductGrid)}>
      <h1 className={cx(className, css.title)}>
        SHOP <span>({products.length})</span>
      </h1>
      <div>
        <ul>
          {products.map((product) => (
            <ProductCard
              className={cx(className, css.product)}
              key={product.id}
              product={product}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

ProductGrid.defaultProps = {};

export default ProductGrid;
