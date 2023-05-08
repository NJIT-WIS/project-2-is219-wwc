import Head from "next/head";
import Layout, { siteTitle } from '../components/layout'
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Hero from "../components/hero";
import Card from '../components/card';
import CookieConsentBanner from "../components/cookieConsentBanner";
import Modal from '../components/modal';
import { useState } from 'react';
import CallToAction from '../components/cta';


export default function Home({ allPostsData }) {
  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CookieConsentBanner />
      <div>
        <Link href="/posts/sample-blog-post">
          <a>Read the Sample Blog Post</a>
        </Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Card
          title="Example Card"
          description="This is an example card component in a Next.js application."
          image="/images/example.png"
        />
      </div>
      <Modal show={showModal} onClose={closeModal}>
        <h2>Example Modal</h2>
        <p>This is a basic modal component in a Next.js application.</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
      <CallToAction
      text="Join us in revolutionizing education! Become a volunteer today."
      onClick={() => {
        // Handle the sign-up action, e.g., navigate to the sign-up page.
      }}
    />
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
