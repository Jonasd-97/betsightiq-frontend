// pages/_app.js
import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import * as gtag from '../lib/gtag';
import Layout from '../components/Layout';
import ErrorBoundary from '../components/ErrorBoundary';
import { SessionProvider } from 'next-auth/react'; // <--- 🔥 Add this

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  // Enhanced analytics tracking
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
      // Track custom events if needed
      gtag.event({
        action: 'page_view',
        category: 'engagement',
        label: url
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Add web vitals reporting
  function handleWebVitals({ id, name, label, value }) {
    gtag.event({
      action: name,
      category: label === 'web-vital' ? 'Web Vitals' : 'custom',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      label: id,
      nonInteraction: true,
    });
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#2563eb" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e3a8a" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" crossOrigin="use-credentials" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <SessionProvider session={session}> {/* 🛡️ Wrap everything inside this */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>
            <ErrorBoundary>
              <Component {...pageProps} onWebVitals={handleWebVitals} />
            </ErrorBoundary>
            <SpeedInsights />
            <Analytics />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
