import { useRef } from 'react';
import Head from 'next/head';
import Reviews from "../components/Reviews";
import CallToAction from '../components/cta';

export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    });
  };

  return (
      <>
        <Head>
          <title>Sign Up | MyWebClass.org</title>
          <meta name="description" content="Learn more about MyWebClass.org and our mission to revolutionize education for the AI-driven world." />
        </Head>
        <main>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex-wrap">
              <div class="flex flex-wrap w-full mb-10">
                <div class="lg:w-3/5 md:w-3/3 md:pr-10 md:pt-10">
                  <div class="flex relative pb-5">
                    <div class="flex-grow pl-6">
                      <p class="leading-relaxed">Stay updated on the latest AI advancements and their impact on education.</p>
                    </div>
                  </div>
                  <div class="flex relative pb-5">
                    <div class="flex-grow pl-6">
                      <p class="leading-relaxed">Join a community of like-minded educators who are passionate about transforming education with cutting-edge technology.</p>
                      </div>
                    </div>
                  <div class="flex relative pb-5">
                    <div class="flex-grow pl-6">
                        <p class="leading-relaxed">Discover new interdisciplinary learning approaches and opportunities for integrating AI across various subjects.</p>
                      </div>
                    </div>
                  <div class="flex relative pb-5">
                    <div class="flex-grow pl-6">
                        <p class="leading-relaxed">Participate in exclusive workshops and events that focus on AI-driven Agile and Lean strategies in education.</p>
                      </div>
                  </div>
                  <div class="flex relative pb-1">
                    <div class="flex-grow pl-6">
                        <p class="leading-relaxed">Access exclusive resources and tools to help integrate AI into curriculum design and teaching practices.</p>
                      </div>
                  </div>
                </div>
                <div className="relative z-10 max-w-lg mx-auto my-auto">
                  <h4 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-bold mb-6">
                    Sign up for our newsletter
                    </h4>
                  <div className="sm:flex items-center" >
                    <input
                      className="w-full mb-3 sm:mb-0 sm:mr-4 py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                      type="email"
                      placeholder="john@doe.com"
                      ref={inputRef}
                      required
                      autoCapitalize="off"
                      autoCorrect="off"
                    />
                    <div class="relative mx-1 px-1 py-1 group mb-1 md:mb-0" id="button_admin">
                      <button class="hover:bg-orange-500 flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-black relative z-10"className="hover:bg-orange-500 relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-blue-300 rounded-md overflow-hidden"
                      type="submit"
                      onClick={subscribeUser}
                      >
                        <div className="relative flex items-center justify-center text-center">
                        <span>Subscribe</span>
                        </div>
                      </button>
                      <div class="absolute left-0 top-0 mt-10 p-2 w-80 h-32 overflow-y-scroll bg-white z-10 hidden group-hover:block">
                        <p class="p-1 whitespace-normal text-xs md:text-sm text-gray-600">
                          By subscribing to our newsletter, you consent to receive periodic emails
                          from us containing information about our organization and related
                          topics. You understand that you may unsubscribe at any time by clicking
                          the unsubscribe link at the bottom of any email or by contacting us
                          directly. We value your privacy and will never share or sell your
                          information to any third parties without your explicit consent.
                        </p>
                      </div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <Reviews>
                </Reviews>
              </div>
          </div>
        </section>
        </main>
      </>
    );
};

