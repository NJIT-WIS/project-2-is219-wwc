// Import required dependencies and components
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './header.module.css';

// Define the siteTitle constant
const siteTitle = "Your Site Title";

// Define the Header component
const Header = () => {
  return (
    <header className={styles.header}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="MyWebClass"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <div class="cursor-pointer p-2 text-xl text-dark hover:text-primary"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg></div>
      </nav>
    </header>
  );
};

export default Header;
