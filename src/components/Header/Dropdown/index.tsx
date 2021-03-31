import classNames from 'classnames/bind';
import css from './styles.module.scss';
import { DropdownItemType, DropdownType } from '~/data';
import DropDownItem from '../DropdownItem';

const cx = classNames.bind(css);

export interface DropDownProps {
  className?: string;
  dropdown?: DropdownType
}

function DropDown({ className, dropdown }: DropDownProps) {

  return (
    <li className={cx(className, css.DropDown)}>
      <button className={css.label}>{dropdown.text}</button>
      <div className={cx(css.inner)}>
        <ul className={css.items}>
          {dropdown.dropdown.map((dropdownItem: DropdownItemType) => <DropDownItem key={dropdownItem.text} item={dropdownItem} />)}
        </ul>
      </div>
    </li>
  );
}

DropDown.defaultProps = {};

export default DropDown;
