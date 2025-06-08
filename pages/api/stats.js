// pages/api/stats.js
import { getSession } from 'next-auth/react'; // If using NextAuth.js

export default async function handler(req, res) {
  // 1. Authentication Check
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // 2. Request Method Check
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // 3. Generate more realistic mock data
    const baseWinRate = 60; // Base win rate around 60%
    const winRateVariation = Math.sin(Date.now() / 10000000) * 5; // Slow oscillation
    const winRate = Math.min(Math.max(
      Math.floor(baseWinRate + winRateVariation + (Math.random() * 6 - 3)),
      45, 80
    ));

    // 4. Generate realistic monthly ROI with seasonality
    const monthlyRoi = Array.from({ length: 12 }, (_, i) => {
      const seasonalFactor = 0.8 * Math.sin((i - 3) * Math.PI / 6); // seasonal waves
      const trendFactor = i * 0.3; // slight upward trend
      const randomFactor = (Math.random() * 4 - 2); // random noise
      return parseFloat((seasonalFactor + trendFactor + randomFactor).toFixed(1));
    });

    // 5. Additional realistic metrics
    const totalBets = Math.floor(Math.random() * 500) + 100;
    const profit = parseFloat((totalBets * (winRate / 100) * 0.91).toFixed(2)); // assuming 0.91 odds

    // 6. Set Cache Control (good practice for API performance)
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');

    // 7. Send Response
    res.status(200).json({
      success: true,
      data: {
        winRate,
        monthlyRoi,
        totalBets,
        profit,
        streak: {
          current: Math.floor(Math.random() * 5) + 1,     // 1 - 5 games
          longest: Math.floor(Math.random() * 10) + 3     // 3 - 12 games
        },
        lastUpdated: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Stats API error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}
