import classNames from 'classnames/bind';
import { RichText } from 'prismic-reactjs';
import css from './styles.module.scss';

const cx = classNames.bind(css);

export interface TextSliceProps {
  className?: string;
  slice?: any
}

const TextSlice = ({ className, slice }: TextSliceProps) => {
  return (
    <div className={cx(className, css.TextSlice)}>
      {RichText.render(slice.primary.text)}
    </div>
  );
}

TextSlice.defaultProps = {};

export default TextSlice;
