import { products } from '~/data'
import ProductGrid from '~/components/ProductGrid'

export default function Home() {
  return (
    <div className="home">
      <ProductGrid products={products} />
    </div>
  )
}
