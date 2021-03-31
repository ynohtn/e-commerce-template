import classNames from 'classnames/bind';
import { nav, DropdownType } from '~/data'
import css from './styles.module.scss';
import CartToggler from '../CartToggler';
import Dropdown from './Dropdown';

const cx = classNames.bind(css);

export interface HeaderProps {
  className?: string;
}

const logo: string = '/logo.png'

function Header({ className }: HeaderProps) {
  return (
    <header className={cx(className, css.Header)}>
      <nav className={cx(className, css.navLeft)}>
        <ul>
          {nav.map((dropdown: DropdownType) => <Dropdown key={dropdown.text} dropdown={dropdown} />)}
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

