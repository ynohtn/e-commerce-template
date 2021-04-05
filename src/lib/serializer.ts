import { RichText } from 'prismic-reactjs';
import { ImageType, ProductType } from '~/lib/interfaces';

// Format products object from Prismic
export const formatProducts = (products): ProductType[] => {
  const formattedProducts: ProductType[] = products.map((product) => {
    const data = {
      id: product.id,
      name: RichText.asText(product.data.name),
      price: parseFloat(RichText.asText(product.data.price)),
      images: formatImages(product.data.images)
    };
    return data;
  });
  return formattedProducts;
};

// Format images object from Prismic
export const formatImages = (images): ImageType[] => {
  const formattedImages: ImageType[] = images.map(({ image }) => {
    const data = { url: image.url, alt: image.alt };
    return data;
  });
  return formattedImages;
};
