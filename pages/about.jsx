"use client";
import React from "react";
import Link from "next/link";  // Correct next/link import

export default function About() {
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "Chief Data Scientist",
      bio: "Former sportsbook oddsmaker with 10+ years experience in predictive modeling",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop"
    },
    {
      name: "Jamie Chen",
      role: "Head of Analytics",
      bio: "Sports analytics PhD with specialization in machine learning applications",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=200&h=200&fit=crop"
    },
    {
      name: "Taylor Smith",
      role: "Professional Bettor",
      bio: "Turned $5k into $250k using data-driven strategies before joining our team",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
    }
  ];

  const stats = [
    { value: "8.7%", label: "Average member ROI increase" },
    { value: "12,500+", label: "Value bets identified monthly" },
    { value: "94%", label: "Member satisfaction rate" },
    { value: "2.3s", label: "Average edge detection speed" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-800 to-purple-700 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Smarter Betting Through <span className="text-yellow-300">Advanced Analytics</span>
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            We combine cutting-edge AI with sports betting expertise to give you a measurable edge over the bookmakers
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-bold text-indigo-600">{stat.value}</p>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Origin Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              BetSightIQ was born in 2018 when our founders — a former sportsbook oddsmaker, a machine learning expert, and a professional bettor — realized the immense potential of applying advanced analytics to sports betting markets.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              After consistently beating the books with their proprietary models, they decided to build a platform that would democratize this edge for serious bettors everywhere.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Today, our algorithms process over 2.3 million data points daily across 12 sports and 45 bookmakers to identify mispriced odds and value betting opportunities.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Data analytics dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Our Winning Methodology</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "🔍",
                title: "Market Scanning",
                description: "Our systems monitor odds movements across 45+ bookmakers in real-time, identifying discrepancies and value opportunities the moment they appear."
              },
              {
                icon: "🧠",
                title: "AI Prediction",
                description: "Proprietary machine learning models analyze team performance, player stats, market trends and historical data to calculate true probabilities."
              },
              {
                icon: "⚡",
                title: "Edge Detection",
                description: "We compare our calculated probabilities against market odds to pinpoint bets with positive expected value (+EV) and quantify the exact edge."
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
                <div className="bg-indigo-100 dark:bg-indigo-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 text-2xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet Our Expert Team</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The minds behind our winning algorithms and betting strategies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Gain Your Edge?</h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Join thousands of bettors who are already making smarter, more profitable wagers with BetSightIQ
          </p>
          <Link href="/pricing" className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105">
              Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}