import { FC, memo } from 'react';
import classNames from 'classnames/bind';
import { ProductInCart } from '~/contexts/cartContext';
import css from './styles.module.scss';
import { formatPrice } from '~/utils';
import QuantityManager from '../QuantityManager';
const cx = classNames.bind(css);

export interface ProductInCartCardProps {
  className?: string;
  product: ProductInCart;
  fromProductGrid?: boolean;
}

const ProductInCartCard: FC<ProductInCartCardProps> = ({
  className,
  product
}) => {
  const displayProductTotalPrice = (price: number, quantity: number) => {
    return formatPrice(price * quantity);
  };

  return (
    <li className={cx(className, css.ProductInCartCard)}>
      <figure className={css.miniature}>
        <img src={product.image} alt="" />
      </figure>
      <div className={css.content}>
        <div>
          <h2>{product.name}</h2>
          <h3>{displayProductTotalPrice(product.price, product.quantity)}</h3>
        </div>
        <QuantityManager product={product} />
      </div>
    </li>
  );
};

ProductInCartCard.defaultProps = {};

export default memo(ProductInCartCard);
