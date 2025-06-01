'use client';
import { useEffect, useState, useCallback } from 'react';
import { io } from 'socket.io-client';
import Link from 'next/link';

export default function Dashboard() {
  const [alerts, setAlerts] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  const handleNewAlert = useCallback((newAlert) => {
    setAlerts((prev) => [newAlert, ...prev.slice(0, 99)]); // Keep max 100 alerts
  }, []);

  useEffect(() => {
    let socket;

    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        console.error('No access token found');
        return;
      }

      socket = io(process.env.NEXT_PUBLIC_WS_URL, {
        transports: ['websocket'],
        query: { token: accessToken },
      });

      socket.on('connect', () => {
        console.log('Connected to WebSocket');
        setIsConnected(true);
      });

      socket.on('disconnect', () => {
        setIsConnected(false);
      });

      socket.on('connect_error', (err) => {
        console.error('Connection error:', err);
      });

      socket.on('alert', handleNewAlert);

    } catch (err) {
      console.error('WebSocket initialization error:', err);
    }

    return () => {
      if (socket) {
        socket.off('alert', handleNewAlert);
        socket.disconnect();
      }
    };
  }, [handleNewAlert]);

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-muted p-6 hidden md:block">
        <nav className="space-y-6">
          <Link href="/dashboard" className="block text-lg font-semibold hover:text-primary transition-colors">Dashboard</Link>
          <Link href="/account" className="block text-lg font-semibold hover:text-primary transition-colors">Account</Link>
          <Link href="/graphql" className="block text-lg font-semibold hover:text-primary transition-colors">GraphQL API</Link>
          <Link href="/logout" className="block text-lg font-semibold hover:text-primary transition-colors">Logout</Link>
        </nav>
      </aside>
      
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Live Betting Alerts</h1>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            isConnected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </div>
        </div>

        {alerts.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            {isConnected ? 'No alerts yet. Waiting for signals...' : 'Disconnected from alert service'}
          </div>
        ) : (
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <AlertCard key={`${alert.timestamp}-${index}`} alert={alert} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function AlertCard({ alert }) {
  return (
    <div className="p-6 bg-background rounded-xl shadow-md border transition-transform hover:scale-[1.01]">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-semibold">{alert.teams}</h3>
          <p className="text-muted-foreground capitalize">{alert.sport.toLowerCase()}</p>
        </div>
        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
          {(alert.confidence * 100).toFixed(1)}%
        </span>
      </div>
      <div className="mt-4">
        <p className="text-xl font-bold text-primary">{alert.recommended.toUpperCase()}</p>
        <p className="text-sm text-muted-foreground mt-2">
          {new Date(alert.timestamp).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
