import Head from "next/head";
import Layout, { siteTitle } from '../components/layout'
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Hero from "../components/hero";
import CookieConsentBanner from "../components/cookieConsentBanner";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <CookieConsentBanner />
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
