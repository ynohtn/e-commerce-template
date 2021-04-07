import '~/styles/globals.scss';
import CartProvider from '~/components/CartProvider';
import Page from '~/components/Page';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
      <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=ecommerce-template-repo"></script>
    </CartProvider>
  );
}

export default MyApp;
