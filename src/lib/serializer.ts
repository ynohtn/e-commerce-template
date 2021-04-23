import { RichText } from 'prismic-reactjs';
import { ImageType, ProductType } from '~/lib/interfaces';

// Format product object from Prismic
export const formatProduct = (product): ProductType => ({
  id: product.id,
  name: RichText.asText(product.data.name),
  price: parseFloat(RichText.asText(product.data.price)),
  images: product.data.images.map((image) => formatImage(image))
});

// Format image object from Prismic
export const formatImage = ({ image }): ImageType => ({
  url: image.url,
  alt: image.alt
});
