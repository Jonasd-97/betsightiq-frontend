import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>BetSightIQ - Smart Sports Betting Analytics</title>
        <meta name="description" content="Get data-driven insights to improve your sports betting performance" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-100 to-gray-300 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              <span className="block">Welcome to</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-green-600">
                BetSightIQ
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto">
              Your <span className="font-semibold">data-driven edge</span> in the world of sports betting
            </p>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">95%</p>
              <p className="text-gray-600">Accuracy</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-green-600">10K+</p>
              <p className="text-gray-600">Users</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-blue-600">24/7</p>
              <p className="text-gray-600">Updates</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-purple-600">15+</p>
              <p className="text-gray-600">Sports</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              href="/signup"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium shadow-lg hover:shadow-xl"
              aria-label="Sign up for BetSightIQ"
            >
              Get Started - It's Free
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium shadow-sm hover:shadow-md"
              aria-label="View demo of BetSightIQ"
            >
              Watch Demo
            </Link>
          </div>

          {/* Testimonial */}
          <div className="bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-xl max-w-2xl mx-auto">
            <p className="text-gray-700 italic mb-4">
              "BetSightIQ transformed my betting strategy. I've seen a 40% increase in my ROI since I started using their analytics."
            </p>
            <p className="font-medium text-gray-900">- Michael T., Professional Bettor</p>
          </div>
        </div>
      </main>
    </>
  );
}

