import React from 'react';
import classNames from 'classnames/bind';
import css from './styles.module.scss';
import TotalPrice from '../TotalPrice';

const cx = classNames.bind(css);

export interface CartFooterProps {
  className?: string;
}

function CartFooter({ className }: CartFooterProps) {
  return (
    <div className={cx(className, css.CartFooter)}>
      <TotalPrice />
      <button>CHECKOUT</button>
    </div>
  );
}

CartFooter.defaultProps = {};

export default CartFooter;
