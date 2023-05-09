// components/MetaTags.js
import Head from "next/head";

const MetaTags = ({ title, description, imageURL, imageAlt, url }) => {
  return (
    <Head>
      {/* OpenGraph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageURL} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageURL} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Head>
  );
};

export default MetaTags;
