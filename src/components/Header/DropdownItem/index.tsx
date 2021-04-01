import Link from 'next/link'
import classNames from 'classnames/bind';
import css from './styles.module.scss';
import { DropdownItemType } from '~/data';

const cx = classNames.bind(css);

export interface DropDownItemProps {
  className?: string;
  item?: DropdownItemType
}

function DropDownItem({ className, item }: DropDownItemProps) {
  return (
    <li className={cx(className, css.DropDownItem)}>
      <Link href={item.href}>
        <a>{item.text}</a>
      </Link>
    </li>
  );
}

DropDownItem.defaultProps = {};

export default DropDownItem;
