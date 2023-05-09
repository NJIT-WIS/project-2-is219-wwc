// Import required dependencies and components
import React from 'react';
import Link from 'next/link';
import SocialMediaLinks from './SocialMediaLinks';

// Define the Footer component
const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl px-4 py-10 mx-auto space-y-5 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link href="/AboutPage">
              <a className="text-base leading-6 text-gray-500 hover:text-gray-900">
                About Us
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/blog">
              <a className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Blog
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/partnerships">
              <a className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Partnerships & Collaborations
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/resources">
              <a className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Resources & Tools
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/contact">
              <a className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Contact Us
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/privacy-policy">
              <a className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Privacy Policy
              </a>
            </Link>
          </div>
        </nav>
        <div className="flex justify-center">
          <SocialMediaLinks>
            </SocialMediaLinks>
        </div>
        <div className="mt-8 text-center">
          <p className="text-base leading-6 text-gray-500">
            &copy; {new Date().getFullYear()} Demi Matos <span class="middle-dot">·</span> Althesia Hylton <span class="middle-dot">·</span> Elizabeth Oluwasanmi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;