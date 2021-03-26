import classNames from 'classnames/bind';
import css from './styles.module.scss';
import CartToggler from '../CartToggler';

const cx = classNames.bind(css);

export interface HeaderProps {
  className?: string;
}

const logo: string = 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/8e/Swoosh.svg/1200px-Swoosh.svg.png'

function Header({ className }: HeaderProps) {
  return (
    <header className={cx(className, css.Header)}>
      <nav className={cx(className, css.navLeft)}>
        <ul>
          <li>Shop</li>
          <li>Info</li>
        </ul>
      </nav>
      <figure className={css.logo}>
        <img src={logo} alt="" />
      </figure>
      <nav className={css.navRight}>
        <ul>
          <li>Account</li>
          <li>
            <CartToggler />
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.defaultProps = {};

export default Header;

