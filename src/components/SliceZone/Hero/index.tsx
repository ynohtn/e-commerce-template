import Image from 'next/image'
import classNames from 'classnames/bind';
import css from './styles.module.scss';
import { RichText } from 'prismic-reactjs';

const cx = classNames.bind(css);

export interface HeroProps {
  className?: string;
  slice?: any;
}

const Hero = ({ className, slice }: HeroProps) => {
  const heroData = slice.items.find(data => data)
  console.log(heroData)
  return (
    <div className={cx(className, css.Hero)}>
      <figure className={css.background}>
        <Image
          src={heroData.background.url}
          alt={heroData.background.alt}
          layout="fill"
        />
      </figure>
      {RichText.render(heroData.title)}
      {RichText.render(heroData.subtitle)}
    </div>
  );
}

Hero.defaultProps = {};

export default Hero;
