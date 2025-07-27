import React, { useState } from 'react';

const allRewards = [
  {
    id: 1,
    title: 'Plant a Tree 🌳',
    credits: 100,
    category: 'nature',
    description: 'Offset your footprint by planting a real tree in a deforested area.',
  },
  {
    id: 2,
    title: 'Clean Water Donation 💧',
    credits: 80,
    category: 'donation',
    description: 'Support mock clean water projects in underdeveloped regions.',
  },
  {
    id: 3,
    title: 'Green Badge NFT 🪙',
    credits: 120,
    category: 'digital',
    description: 'Get a unique eco-themed NFT badge for your profile.',
  },
  {
    id: 4,
    title: 'Eco Product Coupon 🧼',
    credits: 90,
    category: 'product',
    description: 'Get mock coupon for sustainable product store.',
  },
  {
    id: 5,
    title: 'Community Tree Sponsor 🏞️',
    credits: 150,
    category: 'nature',
    description: 'Sponsor a mini grove in a community park.',
  },
  {
    id: 6,
    title: 'Digital Eco-Certificate 📜',
    credits: 70,
    category: 'digital',
    description: 'Earn a mock certificate of green effort contribution.',
  },
  {
    id: 7,
    title: 'Mock Ocean Cleanup Token 🌊',
    credits: 110,
    category: 'donation',
    description: 'Support mock marine plastic cleanup initiative.',
  },
  {
    id: 1,
    title: 'Plant a Tree 🌳',
    credits: 100,
    category: 'nature',
    description: 'Offset your footprint by planting a real tree in a deforested area.',
  },
  {
    id: 2,
    title: 'Clean Water Donation 💧',
    credits: 80,
    category: 'donation',
    description: 'Support mock clean water projects in underdeveloped regions.',
  },
  {
    id: 3,
    title: 'Green Badge NFT 🪙',
    credits: 120,
    category: 'digital',
    description: 'Get a unique eco-themed NFT badge for your profile.',
  },
  {
    id: 4,
    title: 'Eco Product Coupon 🧼',
    credits: 90,
    category: 'product',
    description: 'Get mock coupon for sustainable product store.',
  },
  {
    id: 5,
    title: 'Community Tree Sponsor 🏞️',
    credits: 150,
    category: 'nature',
    description: 'Sponsor a mini grove in a community park.',
  },
  {
    id: 6,
    title: 'Digital Eco-Certificate 📜',
    credits: 70,
    category: 'digital',
    description: 'Earn a mock certificate of green effort contribution.',
  },
  {
    id: 7,
    title: 'Mock Ocean Cleanup Token 🌊',
    credits: 110,
    category: 'donation',
    description: 'Support mock marine plastic cleanup initiative.',
  },
];

const geminiQuotes = [
  "Every green step is a leap toward healing 🌿",
  "One seed planted, many lives changed 🌱",
  "Digital actions, real-world impacts 💚",
  "Eco-choices echo across generations 🌍",
];

const categories = ['all', 'nature', 'donation', 'digital', 'product'];

const CarbonOffsetMarketplace = () => {
  const [userCredits, setUserCredits] = useState(250);
  const [redeemedItem, setRedeemedItem] = useState(null);
  const [quote, setQuote] = useState('');
  const [filter, setFilter] = useState('all');

  const handleRedeem = (item) => {
    if (userCredits >= item.credits) {
      setUserCredits((prev) => prev - item.credits);
      setRedeemedItem(item.title);
      const randomQuote = geminiQuotes[Math.floor(Math.random() * geminiQuotes.length)];
      setQuote(randomQuote);
    } else {
      alert('Not enough credits! 💡 Complete eco-challenges to earn more.');
    }
  };

  const filteredRewards = filter === 'all' ? allRewards : allRewards.filter(r => r.category === filter);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">🛍️ Carbon Offset Marketplace</h2>

      <div className="text-center text-green-600 font-semibold mb-6">
        Your Credits: <span className="text-2xl">{userCredits}</span> 🌿
        <div className="mt-2 w-64 mx-auto bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="bg-green-500 h-full transition-all duration-300" style={{ width: `${(userCredits / 300) * 100}%` }}></div>
        </div>
      </div>

      <div className="flex justify-center gap-3 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1 rounded-full text-sm border ${
              filter === cat ? 'bg-green-600 text-white' : 'bg-white text-green-600 border-green-600'
            } hover:bg-green-500 hover:text-white transition`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRewards.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition-all bg-white dark:bg-gray-900"
          >
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
            <p className="mt-2 font-medium text-gray-800 dark:text-gray-200">🔸 {item.credits} Credits</p>
            <button
              onClick={() => handleRedeem(item)}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
            >
              Redeem
            </button>
          </div>
        ))}
      </div>

      {redeemedItem && (
        <div className="mt-8 text-center bg-green-100 border border-green-300 p-4 rounded-xl shadow-md dark:bg-green-800 dark:text-white">
          <p className="text-lg font-bold">✅ You redeemed: {redeemedItem}</p>
          <p className="mt-2 italic">💬 Gemini says: “{quote}”</p>
        </div>
      )}
    </div>
  );
};

export default CarbonOffsetMarketplace;
