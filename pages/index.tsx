import React from "react";
import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarketCard } from "@/components/MarketCard";

export default function Home() {
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
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Smarter Betting Insights, Powered by Data.
          </h1>
          <p className="text-lg text-gray-400">
            BetSightIQ scans the markets to find value bets before everyone else.
          </p>
          <div className="mt-6">
            <a
              href="/dashboard"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold"
            >
              Get Started
            </a>
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MarketCard title="NBA: LAL vs. BOS" odds="-110" confidence="87%" />
          <MarketCard title="NFL: KC vs. BUF" odds="+120" confidence="82%" />
          <MarketCard title="MLB: NYY vs. BOS" odds="-150" confidence="80%" />
        </section>
      </main>

      <Footer />
    </div>
  );
}