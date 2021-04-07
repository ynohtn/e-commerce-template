import { useState } from 'react';
import classNames from 'classnames/bind';
import { useWindowSize } from 'react-use';
import { DropdownType } from '~/lib/interfaces';
import css from './styles.module.scss';
import Dropdown from '../Dropdown';
import { nav } from '~/data';

const cx = classNames.bind(css);

export interface NavProps {
  className?: string;
}

function Nav({ className }: NavProps) {
  const { width } = useWindowSize();
  const isMobile = (width <= 768);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cx(className, css.Nav)}>
      <button className={css.burger} onClick={() => setIsOpen(!isOpen)}>
        <div className={cx(css.icon, isOpen ? 'open' : '')}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <nav className={cx(className, isMobile ? css.mobileNav : css.desktopNav, { isOpen })}>
        <ul className={css.items}>
          {nav.map((dropdown: DropdownType) => <Dropdown key={dropdown.text} dropdown={dropdown} />)}
        </ul>
      </nav>
    </div>
  );
}

Nav.defaultProps = {};

export default Nav;
