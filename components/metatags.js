// components/MetaTags.js
import Head from 'next/head';

const MetaTags = ({ title, description, imageURL, imageAlt, url }) => {
  return (
    <Head>
      {/* OpenGraph meta tags */}
      <meta property="og:title" content={"Innovate and Transform Education - MyWebClass"} />
      <meta property="og:description" content={"Unleash the potential of Agile and Lean methodologies in your classroom. Join MyWebClass to explore groundbreaking strategies that revolutionize teaching and empower students for the AI-driven world."} />
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
