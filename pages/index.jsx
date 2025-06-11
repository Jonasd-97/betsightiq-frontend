import Head from 'next/head';

export default function Home() {
  const statsData = [
    { title: "Today's Edge", value: "6.8%", subtext: "+1.2% from yesterday", isPositive: true },
    { title: "Active Bets", value: "14", subtext: "3 new since last hour", isPositive: false },
    { title: "Hit Rate", value: "62.3%", subtext: "Last 30 days", isPositive: true },
    { title: "ROI", value: "+18.7%", subtext: "This month", isPositive: true }
  ];

  return (
    <>
      <Head>
        <title>BetSightIQ | AI-Powered Betting Intelligence</title>
        <meta name="description" content="Real-time value betting alerts powered by machine learning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-700 pb-6">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                BetSightIQ
              </span>
              <span className="text-emerald-400 text-xs border border-emerald-400/30 px-2 py-1 rounded-full bg-emerald-400/10">
                +
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-emerald-400/10 text-emerald-400 text-xs px-3 py-1.5 rounded-full border border-emerald-400/30 hover:bg-emerald-400/20 transition">
                Export Data
              </button>
              <div className="w-8 h-8 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </header>

          {/* Stats Cards */}
          <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, i) => (
              <div
                key={i}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:bg-gray-800/70 transition-colors"
              >
                <div className="text-sm text-gray-400">{stat.title}</div>
                <div className={`text-2xl font-bold ${stat.isPositive ? 'text-emerald-400' : ''}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.subtext}</div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
