
const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white px-4 py-8">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Track Your Carbon Footprint. Empower Your City.
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
          Log your daily habits, earn eco-badges, and see how your actions shape your city's score. Powered by AI and open data.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full border border-green-600 text-green-600 hover:bg-green-100 dark:hover:bg-gray-800 font-semibold transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 py-12">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">♻️ Daily Carbon Tracker</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Log what you eat, how you travel, and your lifestyle. AI calculates your CO₂ impact and trends.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">🏅 Gemini-Powered Badges</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Gemini suggests eco challenges and generates badges based on your personal habits and improvements.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">🌆 CityScore Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Compare carbon footprints across cities and help your city rank higher by contributing greener choices.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Join the mission. One action at a time.
        </p>
        <button className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition">
          Start Tracking
        </button>
      </section>
    </main>
  );
};

export default Home;
