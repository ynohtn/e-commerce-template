import { GetStaticProps } from "next";
import { Client } from "prismic";
import React from "react";
import SliceZone from "~/components/SliceZone";

export default function Home({ doc }) {
  // console.log(doc)
  const slices = doc.data.body;
  return (
    <div className="page">
      <SliceZone slices={slices} />
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