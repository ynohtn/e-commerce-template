import { GetStaticProps } from "next";
import { Client } from "prismic";

export default function Home({ doc }) {
  console.log(doc)
  return (
    <div className="page">
      Home
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = null, previewData = {} }) => {
  const { ref } = previewData;
  const client = Client();

  const doc = (await client.getSingle('home', ref ? { ref } : null)) || {};

  return {
    props: {
      doc,
      preview
    },
    revalidate: 1
  };
}