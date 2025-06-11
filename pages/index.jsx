import React from 'react';
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <main>
        {/* Navigation Bar */}
        <nav style={{
          background: '#1e40af',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}>
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
              <a style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}>
                {label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Hero Section */}
        <header className="header">
          <div className="header-content">
            <h1>Institutional-Grade Sports Trading</h1>
            <p>
              BetSightIQ Pro gives you the same analytical edge used by
              professional betting syndicates and hedge funds to consistently
              beat the market.
            </p>
            <div className="cta-buttons">
              <Link href="/signup" passHref>
                <a className="btn btn-primary">Start 7-Day Pro Trial</a>
              </Link>
              <Link href="/demo" passHref>
                <a className="btn btn-secondary">View Platform Demo</a>
              </Link>
            </div>
          </div>
        </header>

        {/* Stats */}
        <section className="stats">
          {[
            ['5.8%', 'Average Monthly ROI'],
            ['94.3%', 'Closing Line Value'],
            ['47ms', 'Odds Latency'],
            ['18.3x', 'Daily Value Bets'],
          ].map(([value, label], i) => (
            <div className="stat-card" key={i}>
              <div className="stat-value">{value}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </section>

        {/* Features */}
        <section className="features">
          <div className="container">
            <div className="section-header">
              <h2>Professional Betting Tools</h2>
              <p>
                Our platform combines institutional-grade analytics with
                execution tools designed for serious bettors.
              </p>
            </div>
            <div className="features-grid">
              {[
                ['fas fa-chart-line', 'Real-Time Market Scanner', 'Monitor 50+ sportsbooks simultaneously...'],
                ['fas fa-brain', 'AI Value Detection', 'Machine learning models analyze market trends...'],
                ['fas fa-bell', 'Custom Alert System', 'Set triggers for edge thresholds or line moves...'],
                ['fas fa-exchange-alt', 'Arbitrage & Trading', 'Find and execute arbitrage with one click...'],
              ].map(([icon, title, desc], i) => (
                <div className="feature-card" key={i}>
                  <div className={`feature-icon icon-${i + 1}`}>
                    <i className={icon}></i>
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo */}
        <section className="demo">
          <div className="container">
            <div className="demo-content">
              <div className="demo-text">
                <h2>Professional Trading Interface</h2>
                <p>
                  Real-time visibility into market inefficiencies with execution tools.
                </p>
                <p>
                  Track line movements, monitor sharp money flows, and execute faster.
                </p>
                <div className="cta-buttons" style={{ justifyContent: 'flex-start' }}>
                  <Link href="/signup" passHref>
                    <a className="btn btn-primary">Get Started</a>
                  </Link>
                </div>
              </div>
              <div className="demo-image">
                <div style={{
                  background: 'var(--bg-light)',
                  height: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)'
                }}>
                  <i className="fas fa-chart-bar" style={{ fontSize: '3rem' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="container">
            <div className="section-header">
              <h2>Trusted By Professional Bettors</h2>
              <p>Feedback from pro bettors and syndicate managers.</p>
            </div>
            <div className="testimonials-grid">
              {[
                ['"22% ROI increase with better bankroll allocation."', 'Michael Chen', 'Head of Trading, Atlantic Sports Group'],
                ['"Beating closing lines by 2–3% across NFL/NBA."', 'Sarah Williamson', 'Professional Sports Bettor'],
                ['"Institutional tools leveled the field for solo betting."', 'David Rodriguez', 'Elite Member Since 2023'],
              ].map(([quote, name, title], i) => (
                <div className="testimonial-card" key={i}>
                  <div className="testimonial-text">{quote}</div>
                  <div className="testimonial-author">
                    <div className="author-avatar" />
                    <div className="author-info">
                      <h4>{name}</h4>
                      <p>{title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="cta-content">
            <h2>Ready to Gain Your Edge?</h2>
            <p>
              Join 1,200+ pro bettors using BetSightIQ Pro for smarter decisions.
            </p>
            <div className="cta-buttons">
              <Link href="/signup" passHref>
                <a className="btn btn-primary">Start 7-Day Pro Trial</a>
              </Link>
              <Link href="/contact" passHref>
                <a className="btn btn-secondary">Contact Sales</a>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-about">
                <div className="footer-logo">
                  BetSightIQ<span>Pro</span>
                </div>
                <p>
                  Institutional-grade sports betting analytics and execution tools.
                </p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fab fa-discord" /></a>
                  <a href="#"><i className="fab fa-telegram" /></a>
                </div>
              </div>

              {[
                ['Platform', ['Features', 'Pricing', 'API', 'Integrations']],
                ['Resources', ['Documentation', 'Tutorials', 'Blog', 'Research']],
                ['Company', ['About', 'Careers', 'Legal', 'Contact']],
              ].map(([title, links], i) => (
                <div className="footer-links" key={i}>
                  <h3>{title}</h3>
                  <ul>
                    {links.map((link, j) => (
                      <li key={j}><a href="#">{link}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="footer-bottom">
              &copy; 2025 BetSightIQ Technologies. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
