import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { ProductType } from '~/data';
import css from './styles.module.scss';
import AddToCartButton from './AddToCartButton';
import { RichText } from 'prismic-reactjs';
const cx = classNames.bind(css);

export interface ProductCardProps {
  className?: string;
  product: ProductType | any;
}

const ProductCard = ({ className, product }: ProductCardProps) => {
  const productImage = product.data.images.find(data => data)
  return (
    <li className={cx(className, css.ProductCard)}>
      <figure className={css.image}>
        <Image
          src={productImage.image.url}
          alt={productImage.image.alt}
          layout='fill'
        />
      </figure>
      <div className={css.footer}>
        <h2>{RichText.asText(product.data.name)}</h2>
        <h3>{RichText.asText(product.data.price)} €</h3>
        <AddToCartButton product={product} />
      </div>
    </li>
  );
};

ProductCard.defaultProps = {};

export default ProductCard;
