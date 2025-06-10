import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>BetSightIQ - Elite Sports Betting Analytics</title>
        <meta name="description" content="Dominate sportsbooks with real-time edge detection" />
      </Head>

      <main className="min-h-screen bg-black text-gray-100">
        {/* Glowing accents */}
        <div className="absolute inset-0 overflow-hidden opacity-60">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-900 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-red-900 rounded-full filter blur-3xl opacity-15"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
          {/* Navigation */}
          <nav className="flex justify-between items-center mb-24">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent">
              BetSightIQ
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="/analytics" className="hover:text-amber-400 transition-colors">Edge Finder</Link>
              <Link href="/pricing" className="hover:text-amber-400 transition-colors">Pro Plans</Link>
              <Link href="/odds" className="hover:text-amber-400 transition-colors">Betting Intel</Link>
            </div>
            <Link 
              href="/login" 
              className="px-5 py-2 border border-amber-400 rounded-lg hover:bg-amber-900/20 transition-colors"
            >
              VIP Access
            </Link>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="block text-gray-300">Crush The</span>
              <span className="bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent">Closing Line</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
              <span className="text-amber-400 font-medium">Real-time sharp money alerts</span> and 
              <span className="text-red-400 font-medium"> +EV bet detection</span> powered by institutional models
            </p>
            
            {/* Live odds ticker */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-12 max-w-4xl mx-auto">
              <div className="flex overflow-x-auto space-x-8 py-2">
                {['NFL: KC -3.5 • 82% sharp', 'NBA: BOS -2 • ⚡️Hot Money', 'MLB: LAD +120 • 9.2% EV', 'UFC: Jones -150 • Limit Triggered'].map((item, i) => (
                  <div key={i} className="flex items-center whitespace-nowrap">
                    <span className={`w-2 h-2 rounded-full mr-2 ${i % 2 === 0 ? 'bg-amber-400' : 'bg-red-500'}`}></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-red-600 text-black rounded-lg hover:from-amber-600 hover:to-red-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Get 7-Day Pro Trial
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/dashboard"
                className="px-8 py-4 bg-gray-900 border border-amber-400/30 text-amber-400 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium shadow-sm hover:shadow-md flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                See The Edge
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {[
              { value: "5.2%", label: "Avg. ROI Boost", color: "text-amber-400" },
              { value: "94%", label: "Closing Line Win Rate", color: "text-red-400" },
              { value: "18.7x", label: "Value Alerts/Day", color: "text-amber-400" },
              { value: "32ms", label: "Line Move Prediction", color: "text-red-400" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-amber-400/40 transition-colors">
                <p className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
