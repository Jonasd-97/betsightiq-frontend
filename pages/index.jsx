import Head from "next/head";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 font-sans">
      <Head>
        <title>BetSightIQ Pro+ | AI Betting Intelligence</title>
        <meta name="description" content="Dominate sportsbooks with AI-powered edge detection and analytics" />
      </Head>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          BetSightIQ Pro+
        </h1>
        <p className="text-gray-400 mt-2">AI-Powered Sports Betting Insights</p>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Opportunities Card */}
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">Live Opportunities</h2>
          <div className="space-y-4">
            <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-500">
              <h3 className="font-medium">Install BetSightIQ Pro+</h3>
              <p className="text-sm text-gray-400">Get live alerts and faster access</p>
            </div>
            
            <table className="w-full text-sm">
              <thead className="text-gray-400 border-b border-gray-800">
                <tr>
                  <th className="text-left pb-2">League</th>
                  <th className="text-left pb-2">Teams</th>
                  <th className="text-right pb-2">Edge</th>
                  <th className="text-right pb-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  { league: 'NBA', teams: 'Liverpool', edge: '6.8%', action: 'BET' },
                  { league: 'NFL', teams: 'Green Bay Packers', edge: '6.7%', action: 'WIN' },
                  { league: 'La Liga', teams: 'FC Barcelona', edge: '4.3%', action: 'PASS' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-800/30">
                    <td className="py-3">{row.league}</td>
                    <td>{row.teams}</td>
                    <td className={`text-right font-mono ${parseFloat(row.edge) > 5 ? 'text-green-400' : 'text-amber-400'}`}>
                      {row.edge}
                    </td>
                    <td className="text-right">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        row.action === 'BET' ? 'bg-blue-900/50 text-blue-400' :
                        row.action === 'WIN' ? 'bg-green-900/50 text-green-400' :
                        'bg-gray-800 text-gray-400'
                      }`}>
                        {row.action}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Leaderboard Card */}
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h2 className="text-xl font-semibold mb-4 text-purple-400">Community Leaderboard</h2>
          <p className="text-sm text-gray-400 mb-4">Top performers based on prediction accuracy</p>
          <div className="space-y-3">
            {['Tyler (87.2%)', 'Alice (85.6%)', 'Marcus (83.1%)', 'Jin (81.9%)'].map((user, i) => (
              <div key={i} className="flex items-center p-3 bg-gray-800/30 rounded-lg">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                  i === 0 ? 'bg-amber-500/20 text-amber-400' :
                  i === 1 ? 'bg-purple-500/20 text-purple-400' :
                  'bg-gray-700 text-gray-300'
                }`}>
                  {i+1}
                </div>
                <div>
                  <p className="font-medium">{user.split(' ')[0]}</p>
                  <p className="text-xs text-gray-400">{user.split(' ')[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* History Card */}
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 lg:col-span-3">
          <h2 className="text-xl font-semibold mb-4 text-blue-400">My Betting History</h2>
          <p className="text-sm text-gray-400 mb-4">Track your predictions and outcomes</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-gray-400 border-b border-gray-800">
                <tr>
                  <th className="text-left pb-2">Date</th>
                  <th className="text-left pb-2">Market</th>
                  <th className="text-left pb-2">Teams</th>
                  <th className="text-left pb-2">Action</th>
                  <th className="text-left pb-2">Outcome</th>
                  <th className="text-right pb-2">Edge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  { date: '02/18/2024', market: 'NBA', teams: 'Milwaukee Bucks', action: 'BET', outcome: 'WIN', edge: '5.2%' },
                  { date: '02/19/2024', market: 'NHL', teams: 'Miami Heat', action: 'BET', outcome: 'WIN', edge: '4.3%' },
                  { date: '02/20/2024', market: 'NFL', teams: 'Kansas City Chiefs', action: 'PASS', outcome: 'LOSS', edge: '1.8%' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-800/30">
                    <td className="py-3">{row.date}</td>
                    <td>{row.market}</td>
                    <td>{row.teams}</td>
                    <td>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        row.action === 'BET' ? 'bg-blue-900/50 text-blue-400' : 'bg-gray-800 text-gray-400'
                      }`}>
                        {row.action}
                      </span>
                    </td>
                    <td>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        row.outcome === 'WIN' ? 'bg-green-900/50 text-green-400' :
                        row.outcome === 'LOSS' ? 'bg-red-900/50 text-red-400' :
                        'bg-gray-800 text-gray-400'
                      }`}>
                        {row.outcome}
                      </span>
                    </td>
                    <td className={`text-right font-mono ${
                      parseFloat(row.edge) > 3 ? 'text-green-400' : 'text-amber-400'
                    }`}>
                      {row.edge}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-3 text-xs text-gray-400 flex justify-between">
        <div>Last update: {new Date().toLocaleTimeString()}</div>
        <div>Edge threshold: ≥3.5% | API Status: <span className="text-green-400">Connected</span></div>
      </div>
    </div>
  );
}
