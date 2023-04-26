import Image from 'next/image';
import Script from 'next/script';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

import Header from './header';
import Footer from './footer';

const name = '[WWC]';
export const siteTitle = 'MyWebClass.org';

export default function Layout({ children}) {
  return (
    <>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <MetaTags
        title="MyWebClass - Pioneering the Future of Education"
        description="MyWebClass is a foundation committed to revolutionizing education by incorporating Agile and Lean principles into the classroom."
        imageURL="https://example.com/path-to-your-image.jpg"
        imageAlt="A description of the image"
        url="https://example.com"
      />
      <Header />
      <div className={styles.container}>
      <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}