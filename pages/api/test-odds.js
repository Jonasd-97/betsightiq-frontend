// pages/api/test-odds.js

export default async function handler(req, res) {
  const apiKey = process.env.NEXT_PUBLIC_THE_ODDS_API_KEY; // Loaded from .env.local

  if (!apiKey) {
    return res.status(500).json({ error: 'API key is missing. Make sure it is set in .env.local.' });
  }

  try {
    const sport = 'basketball_nba'; // You can adjust this sport key based on TheOddsAPI docs
    const region = 'us';            // 'us', 'uk', 'eu', 'au' supported
    const market = 'h2h';           // 'h2h', 'spreads', 'totals'

    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/${sport}/odds/?apiKey=${apiKey}&regions=${region}&markets=${market}`
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('API Error Body:', errorBody);
      return res.status(500).json({ error: 'Failed to fetch odds data from TheOddsAPI.' });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    console.error('Error fetching odds:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
}
