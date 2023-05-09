// Import required dependencies and components
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Head from 'next/head';
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company Name"
          title="Company Name"
          class="inline-flex items-center"
        >
          <Image src="/images/logo.png" width={40} height={40} alt="Logo" className="your-css-class" />
          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            MyWebClass.org
          </span>
        </a>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Home"
              title="Home"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              aria-label="About Us"
              title="About Us"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/blog"
              aria-label="Blog"
              title="Blog"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              aria-label="Privacy"
              title="Privacy"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
            >
              Privacy 
            </a>
          </li>
        </ul>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/Volunteer"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >
              Sign up
            </a>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 left-0 w-full">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company Name"
                      title="Company Name"
                      class="inline-flex items-center"
                    >
                      <svg
                        class="w-8 text-blue-500"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        MyWebClass.org
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                        <a
                          href="/"
                          aria-label="Home"
                          title="Home"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
                        >
                          Home
                        </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        aria-label="About Us"
                        title="About Us"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog"
                        aria-label="Blog"
                        title="Blog"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacy-policy"
                        aria-label="Privacy"
                        title="Privacy"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
                      >
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Volunteer"
                        class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Sign up
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
{/*

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
      </nav>
    </header>
  );
};

export default Header;
*/
}
