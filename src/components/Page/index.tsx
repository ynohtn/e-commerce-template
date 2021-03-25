import { ReactNode } from "react";
import classNames from "classnames/bind";
import css from "./styles.module.scss";
import { useRouter } from "next/router";
import Cart from "~/components/Cart";
const cx = classNames.bind(css);

export interface PageProps {
  className?: string;
  children: ReactNode | ReactNode[];
}

function Page({ className, children }: PageProps) {
  const { asPath } = useRouter();
  return (
    <div className={cx(className, css.Page)}>
      <div className={cx(className, css.layout)}>
        <div key={asPath} className={css.container}>
          {children}
        </div>
        <Cart />
      </div>
    </div>
  );
}

Page.defaultProps = {} as PageProps;

export default Page;
