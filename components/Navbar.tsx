import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="font-bold text-lg">BetSightIQ</span>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/dashboard" className="hover:underline">Dashboard</a>
        </div>
      </div>
    </nav>
  );
};