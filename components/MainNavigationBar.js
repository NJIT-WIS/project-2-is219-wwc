// Import required dependencies and components
import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "./header.module.css";

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
      </nav>
    </header>
  );
};

export default Header;
