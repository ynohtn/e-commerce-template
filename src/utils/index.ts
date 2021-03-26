import { ProductInCart } from '~/contexts/cartContext';

export const formatPrice = (value: number) =>
  new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(value);

export const itemsInCart = (products: ProductInCart[]) => {
  return products.reduce(
    (quantity: number, product) => quantity + product.quantity,
    0
  );
};
