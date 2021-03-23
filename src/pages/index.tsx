import Head from 'next/head'
import ProductGrid from '~/components/ProductGrid'
import { products } from '~/data'
export default function Home() {
  return <ProductGrid products={products} />
}
