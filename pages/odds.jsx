'use client';

import { useState, useEffect, useMemo } from 'react';
import { DataTable } from '@/components/ui/data-table';
import { Select } from '@/components/ui/select';
import { Alert } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Loader } from '@/components/ui/loader';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

const MARKET_DISPLAY_NAMES = {
  h2h: 'Moneyline',
  spreads: 'Spread',
  totals: 'Total (O/U)',
};

const columns = [
  {
    accessorKey: 'event',
    header: 'Event',
    cell: ({ row }) => (
      <div className="font-semibold">{row.getValue('event')}</div>
    ),
  },
  {
    accessorKey: 'market',
    header: 'Market',
    cell: ({ row }) => (
      <div>{MARKET_DISPLAY_NAMES[row.getValue('market')] || row.getValue('market')}</div>
    ),
  },
  {
    accessorKey: 'outcome',
    header: 'Outcome',
  },
  {
    accessorKey: 'point',
    header: 'Point',
    cell: ({ row }) => (
      <div>{row.original.point ?? '-'}</div>
    ),
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => (
      <div className="font-bold">
        {row.getValue('price') > 0 ? '+' : ''}
        {Number(row.getValue('price')).toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: 'last_update',
    header: 'Last Updated',
    cell: ({ row }) => (
      <div className="text-sm text-gray-500">
        {format(parseISO(row.getValue('last_update')), 'PPpp')}
      </div>
    ),
  },
];

export default function OddsPage() {
  const [games, setGames] = useState([]);
  const [filteredMarket, setFilteredMarket] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOdds = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/test-odds'); // Adjust to your backend API
      setGames(response.data);
    } catch (err) {
      console.error('Error fetching odds:', err);
      setError('Failed to load odds. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOdds();
    const intervalId = setInterval(fetchOdds, 30000); // Refresh every 30 seconds
    return () => clearInterval(intervalId);
  }, []);

  const tableData = useMemo(() => {
    return games.flatMap(game => {
      return game.bookmakers.flatMap(bookmaker => {
        const markets = filteredMarket === 'all' 
          ? bookmaker.markets 
          : bookmaker.markets.filter(market => market.key === filteredMarket);

        return markets.flatMap(market =>
          market.outcomes.map(outcome => ({
            event: `${game.home_team} vs ${game.away_team}`,
            market: market.key,
            outcome: outcome.name,
            point: outcome.point,
            price: outcome.price,
            last_update: market.last_update || game.commence_time,
          }))
        );
      });
    });
  }, [games, filteredMarket]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold">🧮 Live Betting Odds</h1>
        <div className="flex items-center gap-4">
          <Select options={['all', 'h2h', 'spreads', 'totals']} value={filteredMarket} onChange={setFilteredMarket} />
        </div>
      </div>

      <div className="rounded-md border">
        {loading ? (
          <div className="p-6 flex justify-center">
            <Loader />
          </div>
        ) : error ? (
          <Alert title="Error" description={error} />
        ) : tableData.length > 0 ? (
          <DataTable columns={columns} data={tableData} />
        ) : (
          <div className="p-6 text-center text-muted-foreground">
            No odds data available.
          </div>
        )}
      </div>
    </div>
  );
}


