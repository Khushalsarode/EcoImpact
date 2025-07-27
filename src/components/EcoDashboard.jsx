import React from 'react';

const EcoDashboard = ({
  userName = 'Khushal',
  co2Score = 85,
  impact = {
    co2Saved: '4.2 kg',
    plasticAvoided: 6,
    waterSaved: '25 liters'
  },
  challengesCompleted = 5,
  badges = ['Green Commuter', 'Plastic-Free Hero'],
  rank = 3,
  city = 'Pune',
  scoreTillNow = 320,
  streak = 4,
  geminiMessage = "By switching to metro, you save 17 kg CO₂/month — equal to 3 trees 🌳!",
  quote = "The Earth is what we all have in common. – Wendell Berry",
  nextWeekTip = "Try a digital detox day next week and reduce energy use from screens!"
}) => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 text-gray-800 dark:text-gray-200">
      {/* Score and Impact */}
      <section className="bg-green-100 dark:bg-purple-800 p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold">🌿 CO₂ Score</h2>
          <p className="text-4xl font-extrabold text-green-700 dark:text-green-300">{co2Score} pts</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Positive impact left by {userName}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">🏅 Total Credits</h2>
          <p className="text-3xl font-extrabold text-purple-700 dark:text-purple-200">{scoreTillNow}</p>
          <p className="mt-2">Rank #{rank} in {city}</p>
        </div>
      </section>

      {/* Gemini Message */}
      <section className="bg-white dark:bg-gray-900 p-6 rounded-xl border-l-8 border-green-500 shadow">
        <h3 className="text-xl font-semibold">📩 Gemini says:</h3>
        <p className="mt-2 italic text-lg">“{geminiMessage}”</p>
      </section>

      {/* Challenge Completion */}
      <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold">✅ Challenges Completed</h3>
        <p className="mt-2">You completed <strong>{challengesCompleted}</strong> out of 30 eco-challenges this week! Great job staying sustainable 🌱</p>
      </section>

      {/* Impact Overview */}
      <section className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div>
          <h4 className="text-lg font-semibold">CO₂ Saved</h4>
          <p className="text-xl">{impact.co2Saved}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Plastics Avoided</h4>
          <p className="text-xl">{impact.plasticAvoided}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Water Saved</h4>
          <p className="text-xl">{impact.waterSaved}</p>
        </div>
      </section>

      {/* Eco Badges */}
      <section className="bg-yellow-50 dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold">🏆 Gemini-generated Badges</h3>
        <div className="mt-4 flex flex-wrap gap-4">
          {badges.map((badge, index) => (
            <div key={index} className="px-4 py-2 bg-green-200 dark:bg-purple-700 rounded-full font-semibold text-sm shadow hover:scale-105 transition">
              {badge}
            </div>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-600">Streak: {streak} days 🔥</p>
      </section>

      {/* Quote of the Week */}
      <section className="bg-indigo-100 dark:bg-gray-700 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold">📖 Quote of the Week</h3>
        <p className="mt-2 italic">“{quote}”</p>
      </section>

      {/* Suggestions for Next Week */}
      <section className="bg-pink-100 dark:bg-gray-700 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold">🔮 Next Week’s Eco Tip</h3>
        <p className="mt-2">{nextWeekTip}</p>
      </section>
    </div>
  );
};

export default EcoDashboard;
