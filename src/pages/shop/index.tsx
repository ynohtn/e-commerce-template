import { GetStaticProps } from 'next';
// import { products } from '~/data';
import ProductGrid from '~/components/ProductGrid';
import { getAllProducts } from '~/utils/api';

const Shop = ({ doc }) => {
  const products = doc.results

  console.log(products)
  return (
    <div className="page">
      <ProductGrid products={products} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = null, previewData = {} }) => {
  const { ref } = previewData;
  const doc = await getAllProducts();

  return {
    props: {
      doc,
      preview
    },
    revalidate: 1
  };
}

export default Shop;