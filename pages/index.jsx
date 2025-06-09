export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl w-full text-center transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Live Betting Odds
          </span>
        </h1>
        
        <div className="flex justify-center items-center py-4">
          <div className="animate-pulse flex space-x-2">
            <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
            <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="h-4 w-4 bg-blue-600 rounded-full"></div>
          </div>
          <span className="ml-3 text-gray-600 text-lg font-medium">Loading odds...</span>
        </div>
        
        <p className="mt-6 text-gray-500 text-sm">
          Real-time odds updating every 30 seconds
        </p>
      </div>
    </div>
  );
}

