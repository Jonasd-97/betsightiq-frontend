import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>BetSightIQ - Advanced Sports Betting Intelligence</title>
        <meta name="description" content="Leverage pro-grade analytics to dominate the sportsbooks" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-gray-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-900 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-green-900 rounded-full filter blur-3xl opacity-15"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
          {/* Navigation */}
          <nav className="flex justify-between items-center mb-24">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-indigo-500 bg-clip-text text-transparent">
              BetSightIQ
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="/analytics" className="hover:text-green-400 transition-colors">Analytics</Link>
              <Link href="/pricing" className="hover:text-green-400 transition-colors">Pricing</Link>
              <Link href="/odds" className="hover:text-green-400 transition-colors">Live Odds</Link>
            </div>
            <Link 
              href="/login" 
              className="px-5 py-2 border border-indigo-400 rounded-lg hover:bg-indigo-900/30 transition-colors"
            >
              Pro Login
            </Link>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="block">Beat The</span>
              <span className="bg-gradient-to-r from-green-400 to-indigo-500 bg-clip-text text-transparent">Sportsbooks</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
              Real-time <span className="text-green-400">betting intelligence</span> powered by machine learning and 
              <span className="text-indigo-400"> sharp money tracking</span>
            </p>

            {/* Live odds ticker */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-12 max-w-4xl mx-auto">
              <div className="flex overflow-x-auto space-x-8 py-2">
                {['NFL: KC -3.5 • 56% sharp', 'NBA: BOS -2 • 72% PRO', 'MLB: LAD +120 • Money coming in', 'UFC: Jones -150 • 85% confidence'].map((item, i) => (
                  <div key={i} className="flex items-center whitespace-nowrap">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-indigo-600 text-white rounded-lg hover:from-green-600 hover:to-indigo-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Start Free Trial
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/dashboard"
                className="px-8 py-4 bg-gray-800/70 border border-gray-700 text-gray-100 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium shadow-sm hover:shadow-md flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Dashboard
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {[
              { value: "3.8%", label: "Avg. ROI Increase", color: "text-green-400" },
              { value: "92%", label: "Pick Accuracy", color: "text-indigo-400" },
              { value: "10.2x", label: "Value Bets/Day", color: "text-green-400" },
              { value: "47ms", label: "Line Delay Advantage", color: "text-indigo-400" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                <p className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Market Cards */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Covering All Major Markets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { sport: "Football", matches: "1,240+", icon: "🏈" },
                { sport: "Basketball", matches: "980+", icon: "🏀" },
                { sport: "Baseball", matches: "1,750+", icon: "⚾" }
              ].map((card, index) => (
                <div key={index} className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 hover:border-indigo-500 transition-colors">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{card.sport}</h3>
                  <p className="text-gray-400">{card.matches} matches analyzed daily</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


