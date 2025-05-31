import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} BetSightIQ. All rights reserved.
    </footer>
  );
};