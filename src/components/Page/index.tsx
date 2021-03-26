import { memo, ReactNode, useContext } from 'react';
import classNames from 'classnames/bind';
import css from './styles.module.scss';
import { useRouter } from 'next/router';
import Cart from '~/components/Cart';
import CartToggler from '../CartToggler';
import CartContext from '~/contexts/cartContext';
const cx = classNames.bind(css);

export interface PageProps {
  className?: string;
  children: ReactNode | ReactNode[];
}

function Page({ className, children }: PageProps) {
  const { isOpen } = useContext(CartContext);
  const { asPath } = useRouter();
  return (
    <div className={cx(className, css.Page)}>
      <div className={cx(className, css.layout)}>
        <div key={asPath} className={cx(className, css.container, { isOpen })}>
          {children}
        </div>
        <Cart />
        <CartToggler />
      </div>
    </div>
  );
}

Page.defaultProps = {} as PageProps;

export default memo(Page);
