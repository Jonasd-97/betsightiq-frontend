// pages/index.jsx
import Head from 'next/head';
import '@/styles/globals.css'; // Make sure styles are globally imported somewhere like _app.js

const features = [
  {
    title: "Real-Time Odds Monitoring",
    description: "Track line movements across sportsbooks in real-time to identify early market signals."
  },
  {
    title: "AI-Powered Value Detection",
    description: "Spot high-EV opportunities using our proprietary machine learning algorithms trained on years of betting data."
  },
  {
    title: "Custom Alerts",
    description: "Set betting thresholds and get instant alerts when profitable edges appear across any major league."
  },
  {
    title: "Multi-Sport Insights",
    description: "Supports NFL, NBA, MLB, NHL, UFC and more. Expand your strategy with cross-sport analysis and trends."
  }
];

function FeatureCard({ title, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>BetSightIQ | Bet Smarter</title>
        <meta name="description" content="AI-powered betting edge detection" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold">Bet Smarter with BetSightIQ</h1>
          <p className="mt-4 text-lg text-gray-300">
            Leverage real-time odds, machine learning models, and betting market inefficiencies to make sharper plays.
            Built for serious bettors.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="/signup" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-medium">Get Started</a>
            <a href="/dashboard" className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-md font-medium">Live Dashboard</a>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </main>

        <footer className="text-center mt-16 text-gray-500">
          &copy; 2025 BetSightIQ. All rights reserved.
        </footer>
      </div>
    </>
  );
}
