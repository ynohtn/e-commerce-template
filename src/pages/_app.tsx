import '~/styles/globals.scss';
import CartProvider from '~/components/CartProvider';
import Page from '~/components/Page';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </CartProvider>
  );
}

export default MyApp;
