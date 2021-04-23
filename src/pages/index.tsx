import { GetStaticProps } from "next";
import { Client } from "prismic";
import SliceZone from "~/components/SliceZone";
import { getFeaturedProducts } from "~/lib/api";
import { formatProduct } from "~/lib/serializer";

export default function Home({ doc, featured }) {
  const slices = doc.data.body;
  return (
    <div className="page">
      <SliceZone slices={slices} featured={featured} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = null, previewData = {} }) => {
  const { ref } = previewData;
  const doc = (await Client().getSingle('home', ref ? { ref } : null)) || {};
  const featured = await getFeaturedProducts();

  return {
    props: {
      doc,
      featured: featured.results.map((product) => formatProduct(product)),
      preview
    },
    revalidate: 1
  };
}