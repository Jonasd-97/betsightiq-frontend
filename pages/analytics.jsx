'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, Tooltip, 
  Legend, Label 
} from 'recharts';
import Layout from '@/components/Layout';
import { FiRefreshCw } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const COLORS = ['#34d399', '#f87171', '#60a5fa', '#fbbf24', '#a78bfa'];

export default function Analytics() {
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem('access_token');
      if (!token) {
        router.push('/login');
        return;
      }

      const response = await fetch('/api/stats');
      if (!response.ok) throw new Error('Failed to fetch stats');

      const result = await response.json();
      if (result.success) {
        setStats(result.data);
        setLastUpdated(new Date(result.data.lastUpdated));
      } else {
        throw new Error(result.error || 'Unknown error');
      }
    } catch (err) {
      console.error('Failed to fetch stats', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [router]);

  const processChartData = () => {
    if (!stats) return { winRate: [], roiData: [] };

    return {
      winRate: [
        { name: 'Wins', value: stats.winRate },
        { name: 'Losses', value: 100 - stats.winRate }
      ],
      roiData: stats.monthlyRoi.map((roi, index) => ({
        name: new Date(2023, index).toLocaleString('default', { month: 'short' }),
        roi
      }))
    };
  };

  const { winRate, roiData } = processChartData();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <div className="flex items-center gap-3">
            {lastUpdated && (
              <p className="text-sm text-muted-foreground">
                Last updated: {lastUpdated.toLocaleString()}
              </p>
            )}
            <button
              onClick={fetchStats}
              disabled={loading}
              className="flex items-center gap-2 px-3 py-2 bg-card rounded-md hover:bg-accent/10 transition-colors"
              aria-label="Refresh data"
            >
              <FiRefreshCw className={`${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        {error ? (
          <div className="bg-destructive/10 border border-destructive p-4 rounded-md">
            <p className="text-destructive">{error}</p>
            <button 
              onClick={fetchStats}
              className="mt-2 text-sm text-primary hover:underline"
            >
              Try again
            </button>
          </div>
        ) : loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-card p-6 rounded-lg shadow-md h-[300px]">
                <Skeleton height={30} width={150} className="mb-4" />
                <Skeleton height={200} />
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg shadow-md text-center">
                <p className="text-lg text-muted-foreground mb-2">Total Bets</p>
                <p className="text-2xl font-bold">{stats.totalBets}</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md text-center">
                <p className="text-lg text-muted-foreground mb-2">Profit</p>
                <p className="text-2xl font-bold">${stats.profit}</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md text-center">
                <p className="text-lg text-muted-foreground mb-2">Current Streak</p>
                <p className="text-2xl font-bold">{stats.streak.current} Wins</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md text-center">
                <p className="text-lg text-muted-foreground mb-2">Longest Streak</p>
                <p className="text-2xl font-bold">{stats.streak.longest} Wins</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Win Rate Pie Chart */}
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Win Rate</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={winRate}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      innerRadius={60}
                      paddingAngle={2}
                      label={({ name, percent }) => 
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      labelLine={false}
                    >
                      {winRate.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={COLORS[index % COLORS.length]} 
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Percentage']}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* ROI Bar Chart */}
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Monthly ROI</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={roiData}>
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#94a3b8' }}
                    />
                    <YAxis 
                      tick={{ fill: '#94a3b8' }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'ROI']}
                      labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Bar 
                      dataKey="roi" 
                      fill="#60a5fa" 
                      radius={[4, 4, 0, 0]}
                    >
                      {roiData.map((entry, index) => (
                        <Label 
                          key={`label-${index}`}
                          value={`${entry.roi}%`}
                          position="top"
                          fill="#64748b"
                          fontSize={12}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
