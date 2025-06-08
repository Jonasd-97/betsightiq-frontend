import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="h-full" suppressHydrationWarning>
      <Head>
        {/* Meta tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* SEO and Open Graph */}
        <meta name="description" content="BetSightIQ — Smarter Sports Betting Analytics." />
        <meta property="og:title" content="BetSightIQ" />
        <meta property="og:description" content="Smarter Sports Betting Analytics Platform." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="h-full bg-white dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
