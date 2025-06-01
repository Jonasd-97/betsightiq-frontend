'use client';

import styles from '../styles/HomeView.module.css'; 
import Link from 'next/link';
import Head from 'next/head';

const HomeView = () => {
  const features = [
    {
      icon: "📊",
      title: "Real-Time Alerts",
      description: "Stay ahead of the market with AI-driven value alerts."
    },
    {
      icon: "🤖",
      title: "Machine Learning Models",
      description: "Predict betting edges with precision."
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Your data is protected with industry standards."
    }
  ];

  return (
    <>
      <Head>
        <title>BetSightIQ - AI Sports Betting Intelligence</title>
        <meta name="description" content="AI-driven insights for sports betting to maximize your edge in the market." />
      </Head>
      
      <div className={styles['home-view']}>
        {/* Hero Section */}
        <section className={styles['hero-section']}>
          <h1>Real-Time Sports Betting Intelligence <span role="img" aria-label="rocket">🚀</span></h1>
          <p className={styles.subtitle}>
            BetSightIQ delivers AI-driven insights and high-value alerts to maximize your edge in the betting market.
          </p>
          <div className={styles['button-group']}>
            <Link href="/signup" className={styles['primary-button']}>
              Get Started
            </Link>
            <Link href="/pricing" className={styles['secondary-button']}>
              View Pricing
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles['features-section']}>
          <h2>Why Choose BetSightIQ?</h2>
          <div className={styles['features-grid']}>
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles['cta-section']}>
          <h2>Ready to Elevate Your Game?</h2>
          <Link href="/signup" className={styles['primary-button']}>
            Get Started Today
          </Link>
        </section>
      </div>
    </>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className={styles['feature-card']}>
      <h3>
        <span role="img" aria-hidden="true">{icon}</span> {title}
      </h3>
      <p>{description}</p>
    </article>
  );
};

export default HomeView;
