import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - MyWebClass</title>
      </Head>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="mb-8">
          We at mywebclass.org are committed to protecting your privacy. This
          Privacy Policy explains what information we collect from you when you
          visit our website, how we use it, and how we protect it. By using our
          website, you agree to the terms of this Privacy Policy.
        </p>
        <h2 className="text-xl font-bold mb-4">Information we collect</h2>
        <p className="mb-8">
          We may collect the following information from you when you visit our
          website:
        </p>
        <ul className="list-disc list-inside mb-8">
          <li>
            Personal information such as your name and email address, if you
            choose to provide it to us.
          </li>
          <li>
            Information about your use of the website, such as pages visited,
            time spent on the site, and links clicked.
          </li>
          <li>
            Information about your device, such as your IP address, browser
            type, and operating system.
          </li>
        </ul>
        <h2 className="text-xl font-bold mb-4">How we use your information</h2>
        <p className="mb-8">
          We use the information we collect from you for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-8">
          <li>To improve our website and the user experience.</li>
          <li>
            To analyze user behavior and measure the effectiveness of our
            content and marketing efforts.
          </li>
          <li>
            To communicate with you about our products and services, if you have
            provided us with your contact information.
          </li>
          <li>To comply with legal obligations.</li>
        </ul>
        <h2 className="text-xl font-bold mb-4">Google Analytics</h2>
        <p className="mb-8">
          We use Google Analytics to collect information about your use of our
          website. Google Analytics collects information such as how often users
          visit the site, what pages they visit when they do so, and what other
          sites they used prior to coming to our website. We use the information
          we get from Google Analytics to improve our website and the user
          experience. Google Analytics collects only the IP address assigned to
          you on the date you visit our website, rather than your name or other
          identifying information. We do not combine the information collected
          through the use of Google Analytics with personally identifiable
          information. Google Analytics plants a permanent cookie on your web
          browser to identify you as a unique user the next time you visit our
          website. This cookie cannot be used by anyone other than Google.
          Googles ability to use and share information collected by Google
          Analytics about your visits to our website is restricted by the Google
          Analytics Terms of Use and the Google Privacy Policy.
        </p>
        <h2 className="text-xl font-bold mb-4">Data retention and security</h2>
        <p className="mb-8">
          We retain the information we collect for as long as necessary to
          fulfill the purposes for which it was collected, unless a longer
          retention period is required by law. We take reasonable measures to
          protect the information we collect from loss, theft
        </p>
        <h2 className="text-xl font-bold mb-4">Data retention and security</h2>
        <p className="mb-8">
          We retain the information we collect for as long as necessary to
          fulfill the purposes for which it was collected, unless a longer
          retention period is required by law. We take reasonable measures to
          protect the information we collect from loss, theft, misuse, and
          unauthorized access, disclosure, alteration, and destruction.
        </p>
        <h2 className="text-xl font-bold mb-4">Your rights</h2>
        <p className="mb-8">
          You have the right to access, correct, and delete your personal
          information. You also have the right to object to the processing of
          your personal information and to withdraw your consent to the
          processing of your personal information. To exercise these rights,
          please contact us at{" "}
          <a href="mailto:privacy@mywebclass.org" className="text-blue-500">
            privacy@mywebclass.org
          </a>
          .
        </p>
        <h2 className="text-xl font-bold mb-4">
          Changes to this Privacy Policy
        </h2>
        <p className="mb-8">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. We
          recommend that you review this Privacy Policy periodically for any
          changes.
        </p>
        <h2 className="text-xl font-bold mb-4">Contact us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a href="mailto:privacy@mywebclass.org" className="text-blue-500">
            privacy@mywebclass.org
          </a>
          .
        </p>
      </div>
    </>
  );
}
