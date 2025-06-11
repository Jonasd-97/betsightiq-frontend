import '../styles/globals.css';
import Script from 'next/script';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Global meta tags */}
      <Head>
        <title>BetSightIQ</title>
        <meta name="description" content="Smarter betting insights powered by AI and real-time odds analysis." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Optional global scripts */}
      {/* Example: Google Analytics, etc. */}
      {/* <Script src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID" strategy="afterInteractive" /> */}

      {/* Layout wrapper (optional) */}
      <main className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Component {...pageProps} />
      </main>
    </>
  );
}

