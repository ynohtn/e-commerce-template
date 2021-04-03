import { products } from '~/data';
import ProductGrid from '~/components/ProductGrid';

const Shop = () => {
  return (
    <div className="page">
      <ProductGrid products={products} />
    </div>
  );
}

export default Shop;