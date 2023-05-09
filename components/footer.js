// Import required dependencies and components
import React from 'react';
import Link from 'next/link';
import SocialMediaLinks from './SocialMediaLinks';

// Define the Footer component
const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl px-4 py-10 mx-auto space-y-5 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <SocialMediaLinks>
            </SocialMediaLinks>
        </div>
        <div className="mt-8 text-center">
          <p className="text-base leading-6 text-gray-500">
            &copy; {new Date().getFullYear()} Demi Matos <span class="middle-dot">·</span> Althesia Hylton <span class="middle-dot">·</span> Elizabeth Oluwasanmi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;