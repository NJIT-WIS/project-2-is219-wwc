// Import required libraries and modules
import React from 'react';
import Head from 'next/head';
import Link from "next/link";
import styles from '/components/AboutPage.module.css';

// Create the AboutPage component
const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | MyWebClass.org</title>
        <meta name="description" content="Learn more about MyWebClass.org and our mission to revolutionize education for the AI-driven world." />
      </Head>
      <main>
      <section class="text-gray-600 body-font">
      <div class="container px-4 py-16 mx-auto flex flex-wrap">
        <div class="lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="feature" class="object-cover object-center h-full w-full" src="/images/logo.png"/>
        </div>
        <div class="flex flex-col flex-wrap lg:py-4 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">About Us</h2>
              <p class="leading-relaxed text-sm">At MyWebClass.org, our vision is to foster a global transformation in education by embracing innovative approaches and emerging technologies. We envision a future where students are empowered with the necessary skills to excel in an AI-driven world, fostering creativity, adaptability, and collaboration.
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Mission</h2>
              <p class="leading-relaxed text-sm">Our mission at MyWebClass.org is to revolutionize education by integrating Agile and Lean principles into classrooms worldwide. We focus on conducting research, developing cutting-edge resources and tools, and collaborating with schools and educators to cultivate a culture of continuous improvement and adaptability.
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Vision</h2>
              <p class="leading-relaxed text-sm">MyWebClass.org strives to make a lasting impact by driving the paradigm shift needed for a more effective educational system. By providing resources, tools, and professional development opportunities, we are building a network of dedicated professionals committed to preparing students for success in the rapidly evolving, AI-driven world.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
      </main>
    </>
  );
};

// Export the AboutPage component
export default AboutPage;
