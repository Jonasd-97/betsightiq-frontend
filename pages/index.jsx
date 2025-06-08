// pages/index.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

// Import your styled UI components
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOdds = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/test-odds');
      setGames(response.data);
    } catch (error) {
      console.error('Error fetching odds:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOdds();
    const intervalId = setInterval(fetchOdds, 60000); // Refresh every 60 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Live Betting Odds</h1>
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card key={game.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{game.home_team} vs {game.away_team}</CardTitle>
                  <p className="text-gray-500 text-sm">
                    {format(new Date(game.commence_time), 'MMM d, yyyy h:mm a')}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {game.bookmakers.map((bookmaker) => (
                      <div key={bookmaker.key} className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold">{bookmaker.title}</p>
                          <Badge className="text-xs">{format(new Date(bookmaker.last_update), 'h:mm a')}</Badge>
                        </div>
                        <ul className="space-y-1">
                          {bookmaker.markets[0]?.outcomes.map((outcome) => (
                            <li key={outcome.name} className="flex justify-between text-gray-700">
                              <span>{outcome.name}</span>
                              <span className="font-bold">{outcome.price > 0 ? `+${outcome.price}` : outcome.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

