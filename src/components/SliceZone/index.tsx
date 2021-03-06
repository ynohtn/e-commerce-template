import classNames from 'classnames/bind';
import css from './styles.module.scss';
import TextSlice from './TextSlice'
import Hero from './Hero'
import BannerSlice from './BannerSlice';
import MarqueeSlice from './MarqueeSlice';
import { ProductType } from '~/lib/interfaces';

const cx = classNames.bind(css);

export interface SliceZoneProps {
  className?: string;
  slices?: any
  featured: ProductType[]
}

const SliceZone = ({ className, slices, featured }: SliceZoneProps) => {
  return <div className={cx(className, css.SliceZone)}>
    {slices.map((slice, index) => {
      switch (slice.slice_type) {
        case 'hero':
          return <Hero slice={slice} key={index} />;
        case 'text':
          return <TextSlice slice={slice} key={index} />;
        case 'banner_with_caption':
          return <BannerSlice slice={slice} key={index} />;
        case 'marquee_slice':
          return <MarqueeSlice slice={slice} featured={featured} key={index} />;
        default:
          return null;
      }
    })}
  </div>;
}

SliceZone.defaultProps = {};

export default SliceZone;
