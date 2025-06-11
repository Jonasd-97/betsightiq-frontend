import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>BetSightIQ Pro | Institutional-Grade Sports Trading</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-primary text-white py-4 px-6 flex flex-wrap justify-center gap-6 font-medium text-sm">
        {[
          ['/', 'Home'],
          ['/about', 'About'],
          ['/analytics', 'Analytics'],
          ['/dashboard', 'Dashboard'],
          ['/odds', 'Odds'],
          ['/pricing', 'Pricing'],
          ['/settings', 'Settings'],
          ['/login', 'Login'],
          ['/signup', 'Signup'],
        ].map(([href, label]) => (
          <Link key={href} href={href} passHref>
            <span className="hover:text-white/80 cursor-pointer">{label}</span>
          </Link>
        ))}
      </nav>

      {/* Hero */}
      <header className="bg-primary-dark text-white text-center py-20 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Institutional-Grade Sports Trading
        </h1>
        <p className="max-w-2xl mx-auto text-muted text-lg">
          BetSightIQ Pro gives you the same analytical edge used by professional betting syndicates and hedge funds to consistently beat the market.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/signup">
            <span className="btn btn-primary">Start 7-Day Pro Trial</span>
          </Link>
          <Link href="/demo">
            <span className="btn btn-secondary">View Platform Demo</span>
          </Link>
        </div>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-12 px-6 bg-background text-center">
        {[
          ['5.8%', 'Average Monthly ROI'],
          ['94.3%', 'Closing Line Value'],
          ['47ms', 'Odds Latency'],
          ['18.3x', 'Daily Value Bets'],
        ].map(([value, label], i) => (
          <div key={i} className="card">
            <div className="text-3xl font-bold text-gradient">{value}</div>
            <p className="text-muted mt-2 text-sm">{label}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-muted">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Professional Betting Tools
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-12">
            Our platform combines institutional-grade analytics with execution tools designed for serious bettors.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['fas fa-chart-line', 'Real-Time Market Scanner', 'Monitor 50+ sportsbooks simultaneously.'],
              ['fas fa-brain', 'AI Value Detection', 'Surface EV+ bets with predictive models.'],
              ['fas fa-bell', 'Custom Alert System', 'Get notified when conditions match your edge.'],
              ['fas fa-exchange-alt', 'Arbitrage & Trading', 'Trade between books with one-click execution.'],
            ].map(([icon, title, desc], i) => (
              <div key={i} className="card text-center">
                <div className="text-2xl text-primary mb-4">
                  <i className={icon}></i>
                </div>
                <h3 className="font-semibold text-lg text-foreground">{title}</h3>
                <p className="text-muted text-sm mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="py-20 px-6 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-foreground mb-4">Professional Trading Interface</h2>
            <p className="text-muted mb-4">
              Our dashboard gives you real-time visibility into betting market inefficiencies with institutional-grade analytics and execution tools.
            </p>
            <p className="text-muted mb-6">
              Monitor sharp money flows, track line movement history, and execute bets faster than public money moves the line.
            </p>
            <Link href="/signup">
              <span className="btn btn-primary">Get Started</span>
            </Link>
          </div>
          <div className="border rounded-lg bg-muted h-64 flex items-center justify-center text-muted text-4xl">
            <i className="fas fa-chart-bar" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-muted">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Trusted By Professional Bettors</h2>
          <p className="text-muted max-w-xl mx-auto mb-12">
            Hear from syndicate managers, professional bettors, and sports traders who use BetSightIQ Pro daily.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {[
              ['"Since implementing BetSightIQ, our ROI rose 22% with better bankroll allocation."', 'Michael Chen', 'Head of Trading, Atlantic Sports Group'],
              ['"We beat closing lines by 2–3% in NFL/NBA. That’s real edge."', 'Sarah Williamson', 'Professional Sports Bettor'],
              ['"It leveled the playing field for a solo bettor like me."', 'David Rodriguez', 'Elite Member Since 2023'],
            ].map(([quote, name, title], i) => (
              <div key={i} className="card">
                <p className="italic text-muted mb-4">{quote}</p>
                <div>
                  <p className="font-semibold text-foreground">{name}</p>
                  <p className="text-muted text-sm">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Gain Your Edge?</h2>
        <p className="max-w-xl mx-auto text-white/80 mb-6">
          Join 1,200+ professional bettors using BetSightIQ Pro to make smarter, more profitable decisions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/signup">
            <span className="btn btn-primary">Start 7-Day Pro Trial</span>
          </Link>
          <Link href="/contact">
            <span className="btn btn-secondary">Contact Sales</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border text-muted py-10 px-6 text-sm text-center">
        &copy; 2025 BetSightIQ Technologies. All rights reserved.
      </footer>
    </>
  );
}
