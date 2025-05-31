import React from "react";

interface MarketCardProps {
  title: string;
  odds: string;
  confidence: string;
}

export const MarketCard: React.FC<MarketCardProps> = ({ title, odds, confidence }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400 mb-4">Odds: {odds}</p>
      <p className="text-green-400 font-bold">Confidence: {confidence}</p>
    </div>
  );
};