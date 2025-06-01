// pages/_app.js
import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag'; // Google Analytics
import Layout from '../components/Layout.jsx'; // Layout wrapper

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Google Analytics page view tracking
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window.gtag !== 'undefined') {
        gtag.pageview(url);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
