import React from 'react';

const CityEcoDashboard = ({
  city = 'Pune',
  totalCO2Saved = '14.2 tons',
  plasticAvoided = 2400,
  waterSaved = '120,000 liters',
  totalChallengesCompleted = 1870,
  topBadges = ['Plastic-Free Hero', 'Green Commuter', 'Community Planter'],
  cityRank = 2,
  ecoTip = "Host a local clean-up drive this weekend and invite neighbors! 💪",
  quote = "We won’t have a society if we destroy the environment. – Margaret Mead",
  geminiMessage = "Pune leads the west zone with 14.2 tons CO₂ saved — amazing collective impact! 🚀",
}) => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 text-gray-800 dark:text-gray-200">

      {/* Score and Rank */}
      <section className="bg-green-100 dark:bg-purple-800 p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold">🌍 Total CO₂ Saved</h2>
          <p className="text-4xl font-extrabold text-green-700 dark:text-green-300">{totalCO2Saved}</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Sustainable actions across {city}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">🏅 City Rank</h2>
          <p className="text-3xl font-extrabold text-purple-700 dark:text-purple-200">#{cityRank}</p>
          <p className="mt-2">among all participating cities</p>
        </div>
      </section>

      {/* Gemini Summary */}
      <section className="bg-white dark:bg-gray-900 p-6 rounded-xl border-l-8 border-green-500 shadow">
        <h3 className="text-xl font-semibold">📩 Gemini’s Insight</h3>
        <p className="mt-2 italic text-lg">“{geminiMessage}”</p>
      </section>

      {/* Challenge Completion Summary */}
      <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold">✅ Eco Challenges Completed</h3>
        <p className="mt-2">Citizens in {city} have completed <strong>{totalChallengesCompleted}</strong> eco-challenges collectively! 🎯</p>
      </section>

      {/* Environmental Impact Overview */}
      <section className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div>
          <h4 className="text-lg font-semibold">CO₂ Saved</h4>
          <p className="text-xl">{totalCO2Saved}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Plastic Avoided</h4>
          <p className="text-xl">{plasticAvoided} units</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Water Saved</h4>
          <p className="text-xl">{waterSaved}</p>
        </div>
      </section>

      {/* City Badges */}
      <section className="bg-yellow-50 dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold">🏆 Top City Badges</h3>
        <div className="mt-4 flex flex-wrap gap-4">
          {topBadges.map((badge, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-green-200 dark:bg-purple-700 rounded-full font-semibold text-sm shadow hover:scale-105 transition"
            >
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* Quote of the Week */}
      <section className="bg-indigo-100 dark:bg-gray-700 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold">📖 Quote of the Week</h3>
        <p className="mt-2 italic">“{quote}”</p>
      </section>

      {/* City-Level Weekly Tip */}
      <section className="bg-pink-100 dark:bg-gray-700 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold">🔮 Weekly Green Tip for {city}</h3>
        <p className="mt-2">{ecoTip}</p>
      </section>
    </div>
  );
};

export default CityEcoDashboard;
