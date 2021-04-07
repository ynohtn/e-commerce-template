import { GetStaticProps } from 'next';
import ProductGrid from '~/components/ProductGrid';
import { getAllProducts } from '~/lib/api';
import { formatProducts } from '~/lib/serializer';

const Shop = ({ doc }) => {
  const products = doc.results

  return (
    <>
      <ProductGrid products={formatProducts(products)} />
    </>
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