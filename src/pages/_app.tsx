import '~/styles/globals.scss'
import CartProvider from '~/components/CartProvider'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
