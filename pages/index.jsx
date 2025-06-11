import React from 'react';
import Head from 'next/head'; // Only needed for Next.js

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
        <header className="header">
          <div className="header-content">
            <h1>Institutional-Grade Sports Trading</h1>
            <p>
              BetSightIQ Pro gives you the same analytical edge used by
              professional betting syndicates and hedge funds to consistently
              beat the market.
            </p>
            <div className="cta-buttons">
              <a href="/signup" className="btn btn-primary">
                Start 7-Day Pro Trial
              </a>
              <a href="/demo" className="btn btn-secondary">
                View Platform Demo
              </a>
            </div>
          </div>
        </header>

        <section className="stats">
          {[
            ['5.8%', 'Average Monthly ROI'],
            ['94.3%', 'Closing Line Value'],
            ['47ms', 'Odds Latency'],
            ['18.3x', 'Daily Value Bets'],
          ].map(([value, label], idx) => (
            <div className="stat-card" key={idx}>
              <div className="stat-value">{value}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </section>

        <section className="features">
          <div className="container">
            <div className="section-header">
              <h2>Professional Betting Tools</h2>
              <p>
                Our platform combines institutional-grade analytics with
                execution tools designed for serious bettors
              </p>
            </div>
            <div className="features-grid">
              {[
                ['fas fa-chart-line', 'Real-Time Market Scanner', 'Monitor 50+ sportsbooks...'],
                ['fas fa-brain', 'AI Value Detection', 'Our machine learning models...'],
                ['fas fa-bell', 'Custom Alert System', 'Set triggers for specific edge...'],
                ['fas fa-exchange-alt', 'Arbitrage & Trading', 'Advanced tools for identifying...'],
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

        <section className="demo">
          <div className="container">
            <div className="demo-content">
              <div className="demo-text">
                <h2>Professional Trading Interface</h2>
                <p>
                  Our dashboard gives you real-time visibility into betting
                  market inefficiencies...
                </p>
                <p>
                  Monitor sharp money flows, track line movement history, and
                  execute bets faster...
                </p>
                <div className="cta-buttons" style={{ justifyContent: 'flex-start' }}>
                  <a href="/signup" className="btn btn-primary">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="demo-image">
                <div
                  style={{
                    background: 'var(--bg-light)',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                  }}
                >
                  <i className="fas fa-chart-bar" style={{ fontSize: '3rem' }}></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <div className="section-header">
              <h2>Trusted By Professional Bettors</h2>
              <p>
                Hear from syndicate managers, professional bettors, and sports
                traders who use BetSightIQ Pro daily
              </p>
            </div>

            <div className="testimonials-grid">
              {[
                {
                  text: `"Since implementing BetSightIQ into our betting operations, we've seen a 22% increase in ROI..."`,
                  name: 'Michael Chen',
                  title: 'Head of Trading, Atlantic Sports Group',
                },
                {
                  text: `"The edge detection algorithms have transformed how we identify value. We're consistently beating..."`,
                  name: 'Sarah Williamson',
                  title: 'Professional Sports Bettor',
                },
                {
                  text: `"As a solo bettor, having access to institutional tools has leveled the playing field..."`,
                  name: 'David Rodriguez',
                  title: 'Elite Member Since 2023',
                },
              ].map(({ text, name, title }, idx) => (
                <div className="testimonial-card" key={idx}>
                  <div className="testimonial-text">{text}</div>
                  <div className="testimonial-author">
                    <div className="author-avatar"></div>
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

        <section className="cta">
          <div className="cta-content">
            <h2>Ready to Gain Your Edge?</h2>
            <p>
              Join 1,200+ professional bettors and syndicates using BetSightIQ
              Pro to make smarter, more profitable betting decisions.
            </p>
            <div className="cta-buttons">
              <a href="/signup" className="btn btn-primary">
                Start 7-Day Pro Trial
              </a>
              <a href="/contact" className="btn btn-secondary">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-about">
                <div className="footer-logo">
                  BetSightIQ<span>Pro</span>
                </div>
                <p>
                  Institutional-grade sports betting analytics and execution
                  platform for professional bettors and syndicates.
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
              ].map(([title, links], idx) => (
                <div className="footer-links" key={idx}>
                  <h3>{title}</h3>
                  <ul>
                    {links.map((link, i) => (
                      <li key={i}>
                        <a href="#">{link}</a>
                      </li>
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
