import { GetStaticProps } from 'next';
import { Client } from 'prismic';
import { RichText } from 'prismic-reactjs';
import ProductGrid from '~/components/ProductGrid';
import { getAllProducts } from '~/utils/api';

const Shop = ({ doc }) => {
  const products = doc.results

  const formatProducts = (products) => {
    const formattedProducts = products.map((product) => {
      const data = {
        id: product.id,
        name: RichText.asText(product.data.name),
        price: parseFloat(RichText.asText(product.data.price)),
        images: formatImages(product.data.images),
      };
      return data;
    })
    return formattedProducts
  }

  const formatImages = (images) => {
    const formattedImages = images.map(({ image }) => {
      const data = { url: image.url, alt: image.alt }
      return data
    })
    return formattedImages
  }


  return (
    <div className="page">
      <ProductGrid products={formatProducts(products)} />
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