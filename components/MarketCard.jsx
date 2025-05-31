import React from "react";

const MarketCard = ({ title, odds, confidence }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex justify-between">
        <span>Odds: {odds}</span>
        <span>Confidence: {confidence}</span>
      </div>
    </div>
  );
};

export default MarketCard;