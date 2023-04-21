import Head from "next/head";
import Layout, { siteTitle } from '../components/layout'
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Hero from "../components/hero";
import Card from '../components/card';
import CookieConsentBanner from "../components/cookieConsentBanner";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <CookieConsentBanner />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Card
          title="Example Card"
          description="This is an example card component in a Next.js application."
          image="/images/example.png"
        />
      </div>
      </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
