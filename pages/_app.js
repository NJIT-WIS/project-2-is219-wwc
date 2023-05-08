import '../styles/global.css'
import Layout from '../components/layout'
import '../styles/tailwind.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const handleError = (error) => {
      gtag.event('js_error', {
        event_category: 'Error',
        event_label: `${error.message} at ${error.filename}:${error.lineno}:${error.colno}`,
      });
    };

    window.addEventListener('error', handleError);
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
