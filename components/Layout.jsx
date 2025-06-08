'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiLogOut, FiHome, FiSettings, FiBarChart2 } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client before accessing localStorage
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    if (isClient) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      router.push('/login');
      router.refresh(); // Ensure page updates after logout
    }
  };

  // Navigation items
  const navItems = [
    { href: '/odds', icon: <FiHome size={20} />, label: 'Home' },
    { href: '/analytics', icon: <FiBarChart2 size={20} />, label: 'Analytics' },
    { href: '/settings', icon: <FiSettings size={20} />, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border/50 shadow-lg">
        <div className="h-16 flex items-center justify-center text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          BetSightIQ
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-accent/10 transition-colors cursor-pointer ${
                  pathname === item.href ? 'bg-accent/20 font-semibold text-primary' : ''
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-border/50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 btn btn-secondary"
          >
            <FiLogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar for Mobile */}
        <header className="md:hidden flex justify-between items-center bg-card px-4 py-3 border-b border-border/50 shadow-md sticky top-0 z-10">
          <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            BetSightIQ
          </h1>
          <button
            onClick={handleLogout}
            className="btn btn-secondary btn-sm flex items-center gap-2"
          >
            <FiLogOut size={18} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 pb-20 md:pb-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border/50 text-center text-sm py-4 hidden md:block">
          <div className="container mx-auto px-6">
            © {new Date().getFullYear()} BetSightIQ — All rights reserved.
            <div className="mt-2 text-muted-foreground text-xs">
              v{process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0'}
            </div>
          </div>
        </footer>

        {/* Bottom Nav for Mobile */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border/50 flex justify-around py-2 z-10">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={`flex flex-col items-center p-2 text-xs ${
                  pathname === item.href ? 'text-primary' : ''
                }`}
              >
                {item.icon}
                <span className="mt-1">{item.label}</span>
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
