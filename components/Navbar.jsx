// components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-primary hover:opacity-75 transition">
              BetSightIQ
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition">
              About
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary transition">
              Pricing
            </Link>
            <Link href="/odds" className="text-gray-700 hover:text-primary transition">
              Live Odds
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
