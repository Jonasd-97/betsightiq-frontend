'use client';

import styles from '../styles/homeview.module.css';
import Link from 'next/link';

const HomeView = () => {
  return (
    <div className={styles['home-view']}>
      {/* Header Section */}
      <section className={styles['header-section']}>
        <h1>Real-Time Sports Betting Intelligence 🚀</h1>
        <p className={styles['subtitle']}>
          BetSightIQ delivers AI-driven insights and high-value alerts to maximize your edge in the betting market.
        </p>
        <div className={styles['button-group']}>
          <Link href="/signup">
            <button className={styles['primary-button']}>Get Started</button>
          </Link>
          <Link href="/pricing">
            <button className={styles['secondary-button']}>View Pricing</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles['features-section']}>
        <h2>Why BetSightIQ?</h2>
        <div className={styles['features-grid']}>
          <FeatureCard 
            icon="📊" 
            title="Real-Time Alerts" 
            description="Stay ahead of the market with AI-driven value alerts." 
          />
          <FeatureCard 
            icon="🤖" 
            title="Machine Learning Models" 
            description="Predict betting edges with precision." 
          />
          <FeatureCard 
            icon="🔒" 
            title="Secure & Private" 
            description="Your data is protected with industry standards." 
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles['cta-section']}>
        <h2>Ready to Elevate Your Game?</h2>
        <Link href="/signup">
          <button className={styles['primary-button']}>Get Started Today</button>
        </Link>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={styles['feature-card']}>
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default HomeView;