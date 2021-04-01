import { memo, useState } from 'react';
import classNames from 'classnames/bind';
import css from './styles.module.scss';
import { DropdownItemType, DropdownType } from '~/data';
import DropDownItem from '../DropdownItem';

const cx = classNames.bind(css);

export interface DropDownProps {
  className?: string;
  dropdown: DropdownType
}

function DropDown({ className, dropdown }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className={cx(className, css.DropDown)}>
      <button onClick={() => setIsOpen(!isOpen)} className={css.label}>{dropdown.text}</button>
      <div className={cx(css.inner, { isOpen })}>
        <ul className={css.items}>
          {dropdown.dropdown.map((dropdownItem: DropdownItemType) => <DropDownItem key={dropdownItem.text} item={dropdownItem} />)}
        </ul>
      </div>
    </li>
  );
}

DropDown.defaultProps = {};

export default memo(DropDown);
