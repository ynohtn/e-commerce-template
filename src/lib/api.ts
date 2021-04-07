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
