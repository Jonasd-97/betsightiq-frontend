import Head from 'next/head';
import Link from 'next/link';

export default function BetSightIQHome() {
  return (
    <>
      <Head>
        <title>BetSightIQ | AI-Powered Betting Intelligence</title>
        <meta name="description" content="Real-time value betting alerts powered by machine learning" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
        {/* Premium Header */}
        <header className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                BetSightIQ
              </span>
              <span className="bg-emerald-400/10 text-emerald-400 text-xs px-2 py-1 rounded-full border border-emerald-400/30">
                +</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#" className="text-sm font-medium hover:text-emerald-400 transition-colors">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Value Bets</span>
                </div>
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-emerald-400 transition-colors">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span>Analytics</span>
                </div>
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-emerald-400 transition-colors">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Leaderboard</span>
                </div>
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="px-3 py-1.5 bg-emerald-400/10 hover:bg-emerald-400/20 border border-emerald-400/30 rounded-full text-xs font-medium text-emerald-400 transition-colors flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Export Data</span>
              </button>
              <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </header>

        {/* ...rest of the layout remains unchanged... */}
      </main>
    </>
  );
}
