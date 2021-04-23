import Prismic from 'prismic-javascript';
import { Client } from '../../prismic';

// PRISMIC QUERIES
// GET ALL PRODUCTS
export const getAllProducts = async () => {
  const products = await Client().query(
    Prismic.Predicates.at('document.type', 'product')
  );

  return products;
};

// GET FEATURED PRODUCTS
export const getFeaturedProducts = async () => {
  const products = await Client().query(
    Prismic.Predicates.at('document.tags', ['featured'])
  );

  return products;
};
