// components/MetaTags.js
import Head from 'next/head';

const MetaTags = ({ title, description, imageURL, imageAlt, url }) => {
  return (
    <Head>
      {/* OpenGraph meta tags */}
      <meta property="og:title" content={"Innovate and Transform Education - MyWebClass"} />
      <meta property="og:description" content={"MyWebClass empowers you to transform your vision into reality using Agile and Lean methodologies, revolutionizing the way you teach and learn. Join us on this journey to explore groundbreaking strategies that unleash your creativity, ignite your passion, and inspire others to do the same."} />
      <meta property="og:image" content={"https://github.com/NJIT-WIS/project-2-is219-wwc/images/hero_image.png"} />
      <meta property="og:image:alt" content={"hero_image"} />
      <meta property="og:url" content={"https://github.com/NJIT-WIS/project-2-is219-wwc/images/hero_image.png"} />
      <meta property="og:type" content="website" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={"Innovate and Transform Education - MyWebClass"} />
      <meta name="twitter:description" content={"Empower students for AI-driven world"} />
      <meta name="twitter:image" content={imageURL} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Head>
  );
};

export default MetaTags;
