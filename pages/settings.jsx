// pages/settings.jsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // App Router import for Next.js 14
import { useTheme } from 'next-themes';       // next-themes for better dark/light mode control

export default function Settings() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme(); // get theme and setter

  // Authentication Check
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.push('/login');
      return;
    }
    setMounted(true); // Only set mounted after auth check
  }, [router]);

  if (!mounted) {
    // Prevent hydration mismatch
    return null;
  }

  const isDark = theme === 'dark';

  const toggleDarkMode = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        
        <div className="space-y-6">
          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/10 transition-colors">
            <div>
              <h2 className="font-medium">Dark Mode</h2>
              <p className="text-sm text-muted-foreground">
                Toggle between light and dark theme
              </p>
            </div>
            <button
              onClick={toggleDarkMode}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Toggle dark mode"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                  isDark ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Future settings can go here */}
        </div>
      </div>
    </div>
  );
}
