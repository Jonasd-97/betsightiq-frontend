import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>BetSightIQ - AI-Powered Betting Insights</title>
        <meta name="description" content="Anomaly detection and predictive analytics for sports betting" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero */}
        <header className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-center py-12 shadow-lg">
          <h1 className="text-4xl font-extrabold mb-2">BetSightIQ</h1>
          <p className="max-w-xl mx-auto text-lg opacity-90">
            AI-powered anomaly detection and predictive analytics for sports betting markets
          </p>
        </header>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "🔍", title: "Anomaly Detection", desc: "Real-time detection of unusual betting patterns using AI." },
            { icon: "📊", title: "Market Simulation", desc: "Predictive modeling of participant behavior and market shifts." },
            { icon: "⚖️", title: "Causal Analysis", desc: "Understand the 'why' behind each movement with inference models." },
            { icon: "⛓️", title: "Blockchain Verified", desc: "Tamper-proof anomaly records via Ethereum ledger." },
            { icon: "🧠", title: "Adaptive Learning", desc: "Continuously evolving intelligence from new market data." },
            { icon: "🛡️", title: "Security Focused", desc: "Enterprise-grade protection of your data and edges." },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-white py-16 text-center shadow-inner">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Betting Strategy?</h2>
          <p className="text-gray-600 mb-6">Join the future of intelligent sports betting with our cutting-edge AI platform.</p>
          <a
            href="/signup"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Get Started Today
          </a>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-8 mt-12">
          <p className="mb-1">&copy; {new Date().getFullYear()} BetSightIQ. All rights reserved.</p>
          <p className="text-sm text-gray-400">Powered by AI and Blockchain Technology</p>
        </footer>
      </main>
    </>
  );
}
