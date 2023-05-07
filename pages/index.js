import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Hero from "../components/hero";
import Modal from "../components/modal";
import { useState, useEffect } from "react";
import CallToAction from "../components/cta";
import Cookies from "js-cookie";

export default function Home({ allPostsData }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!Cookies.get("cookieConsent")) {
      setShowModal(true);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const actions = (
    <>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => {
          closeModal();
          Cookies.remove("cookieConsent");
        }}
      >
        I Decline
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          closeModal();
          Cookies.set("cookieConsent", "true", { expires: 365 });
        }}
      >
        I Agree
      </button>
    </>
  );

  const modalContent = (
    <p className="mb-4">
      We use cookies to ensure that we give you the best experience on our
      website. If you continue to use this site, we will assume that you are
      happy with it.
    </p>
  );

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero
        title="Example Card"
        description="This is an example card component in a Next.js application."
        image="/images/example.png"
      />
      <Modal
        show={showModal}
        onClose={closeModal}
        title="Cookie Consent"
        content={modalContent}
        actions={actions}
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
