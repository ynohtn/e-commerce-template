import classNames from 'classnames/bind';
import css from './styles.module.scss';
import CartToggler from '../CartToggler';
import Nav from './Nav'

const cx = classNames.bind(css);

export interface HeaderProps {
  className?: string;
}

const logo: string = '/logo.png'

function Header({ className }: HeaderProps) {
  return (
    <header className={cx(className, css.Header)}>
      <Nav />
      <figure className={css.logo}>
        <img src={logo} alt="TODO" />
      </figure>
      <nav className={css.navRight}>
        <ul>
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

