import { useContext } from 'react';
import classNames from 'classnames/bind';
import CartContext from '~/contexts/cartContext';
import { formatPrice } from '~/utils';
import css from './styles.module.scss';

const cx = classNames.bind(css);

export interface TotalPriceProps {
  className?: string;
}

function TotalPrice({ className }: TotalPriceProps) {
  const { products } = useContext(CartContext);

  const calculatePrice = () => {
    return products.reduce(
      (price: number, product) => price + product.price * product.quantity,
      0
    );
  };

  return (
    <div className={cx(className, css.TotalPrice)}>
      <p>Subtotal:</p>
      <p>{formatPrice(calculatePrice())}</p>
    </div>
  );
}

TotalPrice.defaultProps = {};

export default TotalPrice;
