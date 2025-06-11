import Head from 'next/head';
import Link from 'next/link';

export default function DashboardStyleHome() {
  return (
    <>
      <Head>
        <title>BetSightIQ Pro+ | AI-Powered Betting Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-card">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-primary">BetSightIQ</span>
            <span className="bg-primary text-white text-xs px-2 py-1 rounded-md">Pro+</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#" className="hover:text-primary">Opportunities</Link>
            <Link href="#" className="hover:text-primary">History</Link>
            <Link href="#" className="hover:text-primary">Leaderboard</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="btn btn-secondary text-xs">Install</button>
            <div className="w-8 h-8 rounded-full bg-muted"></div>
          </div>
        </header>

        {/* Main Content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-10">
          {/* Betting Opportunities */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Betting Opportunities</h2>
              <button className="btn btn-ghost text-sm">Refresh</button>
            </div>
            <div className="card">
              <table className="w-full text-sm">
                <thead className="text-muted text-left border-b border-border">
                  <tr>
                    <th className="py-2">Market</th>
                    <th>Teams</th>
                    <th>Odds</th>
                    <th>Edge</th>
                    <th>A+C</th>
                    <th>Pass</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { market: 'NBA', team: 'Liverpool', odds: '2.10', edge: '6.8%', rec: 'BET', pass: 'Bet' },
                    { market: 'NFL', team: 'Lakers', odds: 'EYP', edge: '6.6%', rec: 'BET', pass: 'Pass' },
                    { market: 'NFL', team: 'Packers', odds: '2.10', edge: '6.7%', rec: 'WIN', pass: 'Bet' },
                    { market: 'La Liga', team: 'FC Barcelona', odds: 'REL', edge: '4.3%', rec: 'PASS', pass: 'Bet' },
                  ].map((item, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="py-2 text-muted">{item.market}</td>
                      <td>{item.team}</td>
                      <td>{item.odds}</td>
                      <td className="text-green-500 font-medium">{item.edge}</td>
                      <td>
                        <span className={`px-2 py-1 rounded-md text-xs ${item.rec === 'PASS' ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'}`}>{item.rec}</span>
                      </td>
                      <td>
                        <button className="btn btn-secondary text-xs">{item.pass}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <div className="card">
              <h3 className="font-semibold text-sm mb-3">Community Leaderboard</h3>
              <div className="text-xs text-muted">Top performers based on prediction accuracy</div>
              <div className="mt-4 space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Top: Alice Smith</span>
                  <span className="text-green-500 font-semibold">57.1%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>#5 Ranking</span>
                  <span className="text-muted">Trending Bet: 2.40</span>
                </div>
              </div>
            </div>

            {/* Betting History */}
            <div className="card">
              <h3 className="font-semibold text-sm mb-3">My Betting History</h3>
              <table className="w-full text-xs">
                <thead className="text-muted border-b border-border">
                  <tr>
                    <th className="py-2">Date</th>
                    <th>Market</th>
                    <th>Action</th>
                    <th>Outcome</th>
                    <th>Edge</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['02/19/2024', 'NBA', 'BET', 'WIN', '4.5%'],
                    ['02/26/2024', 'NFL', 'BET', 'WIN', '4.5%'],
                    ['03/05/2024', 'UFC', 'BET', 'LOSS', '2.2u'],
                    ['03/10/2024', 'NHL', 'None', 'None', '5.2u'],
                  ].map(([date, market, action, outcome, edge], i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="py-2 text-muted">{date}</td>
                      <td>{market}</td>
                      <td>{action}</td>
                      <td>
                        <span className={`px-2 py-1 rounded-md text-xs ${outcome === 'WIN' ? 'bg-green-500/20 text-green-500' : outcome === 'LOSS' ? 'bg-red-500/20 text-red-500' : 'text-muted'}`}>{outcome}</span>
                      </td>
                      <td>{edge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
