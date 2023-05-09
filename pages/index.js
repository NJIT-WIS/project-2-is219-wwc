import Head from "next/head";
import { siteTitle } from "../components/layout";
import Hero from "../components/hero";
import MetaTags from "../components/metatags";
import Modal from "../components/modal";
import { useState, useEffect } from "react";
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
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2"
        onClick={() => {
          closeModal();
          Cookies.remove("cookieConsent");
        }}
      >
        I Decline
      </button>
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
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
        Please read our Privacy Policy carefully before using our website. Do
        you agree to our Privacy Policy?
      </p>
      <a href="privacy-policy/" className="text-sky-500 font-bold">
        Read More
      </a>
    </div>
  );

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-K348SVP"></script>
      </Head>
      <MetaTags
        title="MyWebClass | Innovate Education"
        description="MyWebClass empowers you to transform your vision into reality using Agile and Lean methodologies, revolutionizing the way you teach and learn. Join us on this journey to explore groundbreaking strategies that unleash your creativity, ignite your passion, and inspire others to do the same."
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

