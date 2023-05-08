import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { client } from "../lib/sanity.client";
import { groq } from "next-sanity";
import { PreviewSuspense } from 'next-sanity/preview';
import PreviewBlogList from "../components/PreviewBlogList";
import BlogList from "../components/BlogList";

const query = groq`
*[_type=='post'] {
    ...,
    author->,
    categories[]->
} | order(_createdAt desc)
`;
export const revalidate = 60; //revalitating the page every 60 seconds

export default function Blog({ allPostsData, preview }) {
  if (preview) {
    return <PreviewSuspense fallback={<div><p>Loading Preview Data</p></div>}>
    <PreviewBlogList query={query}/>
  </PreviewSuspense>;
  }
  { /* BlogList */}
  return  <BlogList posts={allPostsData}/>;
}

export async function getStaticProps({ preview = false }) {
  const allPostsData = await client.fetch(query);
  return {
    props: {
      allPostsData,
      preview,
    },
  };
}
