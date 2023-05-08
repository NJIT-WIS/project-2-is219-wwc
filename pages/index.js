import Head from "next/head";
import { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Hero from "../components/hero";
import MetaTags from "../components/metatags";
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
    <div>
      <p className="mb-4">
        We use cookies to ensure that we give you the best experience on our
        website. If you continue to use this site, we will assume that you are
        happy with it.
      </p>
      <a href="privacy-policy/" className="text-blue-500 font-bold">
        Read More
      </a>
    </div>
  );

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <MetaTags
        title="MyWebClass | Innovate Education"
        description="Unleash the potential of Agile and Lean methodologies in your classroom. Join MyWebClass to explore groundbreaking strategies that revolutionize teaching and empower students for the AI-driven world."
        imageURL="https://github.com/NJIT-WIS/project-2-is219-wwc/images/hero_image.png"
        imageAlt="hero_image"
        url="https://github.com/NJIT-WIS/project-2-is219-wwc/images/hero_image.png"
      />
      <Hero
        title="Innovate and Transform Education"
        description="Unleash the potential of Agile and Lean methodologies in your classroom. Join MyWebClass to explore groundbreaking 
        strategies that revolutionize teaching and empower students for the AI-driven world."
        image="/images/hero_image.png"
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
