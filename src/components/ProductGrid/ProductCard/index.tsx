import Image from 'next/image';
import classNames from 'classnames/bind';
import { ImageType, ProductType } from '~/lib/interfaces';
import css from './styles.module.scss';
import AddToCartButton from './AddToCartButton';
import { RichText } from 'prismic-reactjs';
const cx = classNames.bind(css);

export interface ProductCardProps {
  className?: string;
  product: ProductType;
}

const ProductCard = ({ className, product }: ProductCardProps) => {
  const [image] = product.images;
  return (
    <li className={cx(className, css.ProductCard)}>
      <figure className={css.image}>
        <Image
          src={image.url}
          alt={image.alt}
          layout='fill'
        />
      </figure>
      <div className={css.footer}>
        <h2>{product.name}</h2>
        <h3>{product.price} €</h3>
        <AddToCartButton product={product} />
      </div>
    </li>
  );
};

ProductCard.defaultProps = {};

export default ProductCard;
