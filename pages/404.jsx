import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-white mb-6">404</h1>
      <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
      <p className="text-lg text-white max-w-md mb-8">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link href="/" className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-105">
          Back to Home
      </Link>
    </div>
  );
}