import '../styles/global.css';
import Layout from '../components/layout';
import '../styles/tailwind.css';

// Function to send error event to Google Analytics
function trackError(error) {
  if (window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
    });
  }
}

export default function App({ Component, pageProps }) {
  // Attach error event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      trackError(event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      trackError(event.reason);
    });
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
