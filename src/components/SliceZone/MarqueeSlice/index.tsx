import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import { RichText } from 'prismic-reactjs';
import ProductCard from '~/components/ProductGrid/ProductCard';
import { ProductType } from '~/lib/interfaces';
import css from './styles.module.scss';
import Marquee from "react-fast-marquee";

const cx = classNames.bind(css);

export interface MarqueeSliceProps {
  className?: string;
  slice?: any;
  featured: ProductType[]
}

const MarqueeSlice = ({ className, slice, featured }: MarqueeSliceProps) => {
  const [hovered, setHovered] = useState(false);
  const boxRef = useRef([]);
  boxRef.current = [];

  const addToRefs = (el) => {
    if (el && !boxRef.current.includes(el)) {
      boxRef.current.push(el)
    }
  }

  console.log(hovered)

  useEffect(() => {
    const marqueeAnimation =
      gsap.to(boxRef.current, {
        duration: 100,
        ease: "none",
        x: `-=${boxRef.current[0].clientWidth * featured.length}`,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % boxRef.current[0].clientWidth * featured.length)
        },
        repeat: -1
      });

    // if (hovered) {
    //   marqueeAnimation.pause();
    // } else {
    //   marqueeAnimation.resume();
    // }

  }, []);

  return (
    <section className={css.MarqueeSlice}>
      <Marquee
        className={css.overflowh}
        direction={"right"}
        speed={69}
        gradient={false}
      >
        <span>{RichText.asText(slice.primary.word)}</span>
        <span>{RichText.asText(slice.primary.word)}</span>
        <span>{RichText.asText(slice.primary.word)}</span>
        <span>{RichText.asText(slice.primary.word)}</span>
        <span>{RichText.asText(slice.primary.word)}</span>
      </Marquee>
      <div className={css.marquee_inner}>
        <ul
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {
            featured.map((product) => {
              return (
                <div
                  ref={addToRefs}
                  key={product.id}
                >
                  <ProductCard product={product} />
                </div>)
            })
          }
          {
            featured.map((product) => {
              return (
                <div
                  ref={addToRefs}
                  key={product.id}
                >
                  <ProductCard product={product} />
                </div>)
            })
          }
        </ul>
      </div>
    </section>
  );
}

MarqueeSlice.defaultProps = {};

export default MarqueeSlice;
