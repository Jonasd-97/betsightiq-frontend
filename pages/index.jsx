import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { ErrorBoundary } from "react-error-boundary";
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MarketCard } from '../components/MarketCard';

// Removed TypeScript interfaces - JavaScript will handle props dynamically
const MARKET_DATA = [
  { title: "NBA: LAL vs. BOS", odds: "-110", confidence: "87%" },
  { title: "NFL: KC vs. BUF", odds: "+120", confidence: "82%" },
  { title: "MLB: NYY vs. BOS", odds: "-150", confidence: "80%" },
];

const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
  </div>
);

const ErrorFallback = () => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
    <h2 className="font-bold">Something went wrong</h2>
    <p>Please refresh the page or try again later.</p>
  </div>
);

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Head>
        <title>BetSightIQ - Smarter Betting Analytics</title>
        <meta
          name="description"
          content="Find the smartest bets with AI-driven market analytics."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-12">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <section className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Smarter Betting Insights, Powered by Data.
            </h1>
            <p className="text-lg text-gray-400">
              BetSightIQ scans the markets to find value bets before everyone else.
            </p>
            <div className="mt-6">
              <Link
                href="/dashboard"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold"
                aria-label="Navigate to betting dashboard"
              >
                Get Started
              </Link>
            </div>
          </section>

          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MARKET_DATA.map((card) => (
              <MarketCard
                key={card.title}
                title={card.title}
                odds={card.odds}
                confidence={card.confidence}
              />
            ))}
          </section>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
}