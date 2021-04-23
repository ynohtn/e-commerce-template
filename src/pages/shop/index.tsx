import { GetStaticProps } from 'next';
import ProductGrid from '~/components/ProductGrid';
import { getAllProducts } from '~/lib/api';
import { formatProduct } from '~/lib/serializer';

const Shop = ({ products }) => {
  return (
    <>
      <ProductGrid products={products} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = null, previewData = {} }) => {
  const { ref } = previewData;
  const doc = await getAllProducts();
  return {
    props: {
      products: doc.results.map((product) => formatProduct(product)),
      preview
    },
    revalidate: 1
  };
}

export default Shop;