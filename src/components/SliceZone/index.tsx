import classNames from 'classnames/bind';
import css from './styles.module.scss';
import TextSlice from './TextSlice'
import Hero from './Hero'
import BannerSlice from './BannerSlice';

const cx = classNames.bind(css);

export interface SliceZoneProps {
  className?: string;
  slices?: any
}

const SliceZone = ({ className, slices }: SliceZoneProps) => {
  return <div className={cx(className, css.SliceZone)}>
    {slices.map((slice, index) => {
      switch (slice.slice_type) {
        case 'hero':
          return <Hero slice={slice} key={index} />;
        case 'text':
          return <TextSlice slice={slice} key={index} />;
        case 'banner_with_caption':
          return <BannerSlice slice={slice} key={index} />;
        default:
          return null;
      }
    })}
  </div>;
}

SliceZone.defaultProps = {};

export default SliceZone;
