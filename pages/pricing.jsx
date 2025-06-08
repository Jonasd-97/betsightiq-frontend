"use client";
import React from "react";
import Link from "next/link";  // <== Correct Link import

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 0,
      description: "Dip your toes into smart betting with basic alerts",
      features: [
        "5 value alerts per week",
        "Basic performance stats",
        "Community forum access",
        "Email support",
        "72-hour delay on premium alerts"
      ],
      popular: false,
      cta: "Start Free"
    },
    {
      name: "Pro Bettor",
      price: 29,
      description: "Serious tools for serious bettors",
      features: [
        "Unlimited value alerts",
        "Advanced analytics dashboard",
        "Real-time notifications",
        "Priority email & chat support",
        "Custom alert filters",
        "Weekly betting reports"
      ],
      popular: true,
      cta: "Get Edge Now"
    },
    {
      name: "High Roller",
      price: 99,
      description: "VIP treatment for maximum profitability",
      features: [
        "All Pro features plus:",
        "Exclusive high-edge alerts (+15%)",
        "Weekly 1-on-1 strategy sessions",
        "Dedicated account manager",
        "Early access to new features",
        "Personalized bankroll plan"
      ],
      popular: false,
      cta: "Go Premium"
    }
  ];

  const testimonials = [
    {
      name: "Mike T.",
      profit: "+$12,450",
      text: "The Pro plan paid for itself in the first week. 27% ROI last month!",
      plan: "Pro Bettor"
    },
    {
      name: "Sarah K.",
      profit: "+$8,200",
      text: "The High Roller consultations transformed my betting strategy completely.",
      plan: "High Roller"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          <span className="block">Bet Smarter,</span>
          <span className="block text-indigo-600 dark:text-indigo-400">Win More</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Join <span className="font-semibold">2,300+</span> bettors who increased their ROI by an average of <span className="font-semibold">8.7%</span> in their first month
        </p>
      </div>

      {/* Pricing cards */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`relative rounded-2xl shadow-xl overflow-hidden ${
              plan.popular ? "ring-2 ring-indigo-600" : "ring-1 ring-gray-200"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-semibold px-4 py-1 transform rotate-45 translate-x-12 translate-y-6 origin-bottom-left">
                MOST POPULAR
              </div>
            )}
            
            <div className="p-8 bg-white dark:bg-gray-900">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{plan.description}</p>
              
              <div className="mt-8">
                <p className="text-5xl font-extrabold text-gray-900 dark:text-white">
                  {plan.price === 0 ? 'Free' : `$${plan.price}`}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {plan.price === 0 ? 'forever' : 'per month'}
                </p>
              </div>
              
              <Link href="/signup" legacyBehavior>
                <a className={`mt-8 w-full inline-block py-3 px-6 rounded-md font-medium text-center ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-white'
                  }`}>
                  {plan.cta}
                </a>
              </Link>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-8">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">What's included</h4>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="h-5 w-5 text-green-500 dark:text-green-400 mr-3">✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto mt-24">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12">Proven Results</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-800 rounded-full h-12 w-12 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-indigo-600 dark:text-indigo-400">{testimonial.plan} Member</p>
                </div>
                <div className="ml-auto bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.profit} profit
                </div>
              </div>
              <blockquote className="mt-6">
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.text}"</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ section */}
      <div className="max-w-7xl mx-auto mt-24">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12">Frequently Asked Questions</h2>
        <div className="bg-white dark:bg-gray-900 shadow overflow-hidden rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
          {[
            {
              question: "How quickly can I expect results?",
              answer: "Most members see improved results within their first month. Our average member increases ROI by 5-10% in the first 30 days."
            },
            {
              question: "Can I cancel anytime?",
              answer: "Yes, you can cancel your subscription at any time with no penalties. All plans come with a 30-day money-back guarantee."
            },
            {
              question: "Do you offer discounts for long-term commitments?",
              answer: "We offer 15% off for annual subscriptions. Just select the annual billing option at checkout."
            }
          ].map((faq, index) => (
            <div key={index} className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto mt-24 bg-indigo-700 rounded-xl shadow-xl overflow-hidden">
        <div className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your betting?</span>
            <span className="block">Start your 7-day free trial today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            No credit card required. Cancel anytime.
          </p>
          <Link href="/signup" legacyBehavior>
            <a className="mt-8 inline-block bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105">
              Get Started Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
