import { FC } from 'react';
import classNames from 'classnames/bind';
import { ProductType } from '~/data';
import css from './styles.module.scss';
import AddToCartButton from './AddToCartButton';
const cx = classNames.bind(css);

export interface ProductCardProps {
  className?: string;
  product: ProductType;
  fromProductGrid?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({ className, product }) => {
  return (
    <li className={cx(className, css.Product)}>
      <figure>
        <img src={product.image} alt="" />
      </figure>
      <div>
        <h2>{product.name}</h2>
        <h3>{product.price} €</h3>
        <AddToCartButton product={product} />
      </div>
    </li>
  );
};

ProductCard.defaultProps = {};

export default ProductCard;
