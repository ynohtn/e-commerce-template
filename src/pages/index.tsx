import { products } from '~/data'
import ProductGrid from '~/components/ProductGrid'
import Cart from '~/components/Cart'

export default function Home() {
  return (
    <div className="home">
      <ProductGrid products={products} />
      <Cart />
    </div>
  )
}
