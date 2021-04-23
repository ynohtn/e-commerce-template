import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames/bind';
import css from './styles.module.scss';
import { RichText } from 'prismic-reactjs';

const cx = classNames.bind(css);

export interface BannerSliceProps {
  className?: string;
  slice?: any;
}

const BannerSlice = ({ className, slice }: BannerSliceProps) => {
  const BannerSliceData = slice.primary
  return (
    <div className={cx(className, css.BannerSlice)}>
      <figure className={css.caption}>
        <Image
          src={BannerSliceData.bannerimage.url}
          alt={BannerSliceData.bannerimage.alt}
          layout="fill"
        />
      </figure>
      <div className={css.content}>
        {RichText.render(BannerSliceData.bannertitle)}
        {RichText.render(BannerSliceData.description)}
        {BannerSliceData.buttonlink &&
          <button>
            <Link href={`/${BannerSliceData.buttonlink.slug}`}>
              <a>{RichText.asText(BannerSliceData.buttonlabel)}</a>
            </Link>
          </button>
        }
      </div>
    </div>
  );
}

BannerSlice.defaultProps = {};

export default BannerSlice;
