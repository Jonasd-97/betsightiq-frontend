<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>BetSightIQ - Smarter Sports Betting Insights</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #1e3a8a;
      --accent: #3b82f6;
      --bg: #f9fafb;
      --text: #1f2937;
      --muted: #6b7280;
      --card: #ffffff;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: var(--bg);
      color: var(--text);
    }

    header {
      background: linear-gradient(to right, var(--primary), var(--accent));
      color: white;
      padding: 4rem 2rem;
      text-align: center;
    }

    header h1 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    header p {
      font-size: 1.2rem;
      max-width: 700px;
      margin: 0 auto;
      opacity: 0.95;
    }

    .cta-buttons {
      margin-top: 2rem;
    }

    .cta-buttons a {
      text-decoration: none;
      background: white;
      color: var(--primary);
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      margin: 0 0.5rem;
      display: inline-block;
      transition: background 0.2s ease-in-out;
    }

    .cta-buttons a:hover {
      background: #e0e7ff;
    }

    main {
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: var(--card);
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease;
    }

    .feature-card:hover {
      transform: translateY(-4px);
    }

    .feature-card h3 {
      margin-top: 0;
      color: var(--primary);
    }

    footer {
      text-align: center;
      padding: 2rem;
      background: #e5e7eb;
      color: var(--muted);
      font-size: 0.9rem;
    }
  </style>
</head>
<body>

  <header>
    <h1>Bet Smarter with BetSightIQ</h1>
    <p>Leverage real-time odds, machine learning models, and betting market inefficiencies to make sharper plays. Built for serious bettors.</p>
    <div class="cta-buttons">
      <a href="/signup">Get Started</a>
      <a href="/dashboard">Live Dashboard</a>
    </div>
  </header>

  <main>
    <div class="features">
      <div class="feature-card">
        <h3>Real-Time Odds Monitoring</h3>
        <p>Track line movements across sportsbooks in real-time to identify early market signals.</p>
      </div>
      <div class="feature-card">
        <h3>AI-Powered Value Detection</h3>
        <p>Spot high-EV opportunities using our proprietary machine learning algorithms trained on years of betting data.</p>
      </div>
      <div class="feature-card">
        <h3>Custom Alerts</h3>
        <p>Set betting thresholds and get instant alerts when profitable edges appear across any major league.</p>
      </div>
      <div class="feature-card">
        <h3>Multi-Sport Insights</h3>
        <p>Supports NFL, NBA, MLB, NHL, UFC and more. Expand your strategy with cross-sport analysis and trends.</p>
      </div>
    </div>
  </main>

  <footer>
    &copy; 2025 BetSightIQ. All rights reserved.
  </footer>

</body>
</html>

