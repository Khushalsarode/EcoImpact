import React, { useState } from 'react';

const sampleCities = [
  { id: 1, name: 'Pune', impact: 4250, trees: 310, carbon: '1.2T' },
  { id: 2, name: 'Bangalore', impact: 3900, trees: 285, carbon: '1.0T' },
  { id: 3, name: 'Delhi', impact: 3600, trees: 250, carbon: '0.9T' },
  { id: 4, name: 'Mumbai', impact: 3400, trees: 240, carbon: '0.85T' },
];

const sampleIndividuals = [
  { id: 1, name: 'Khushal Sarode', impact: 1120, trees: 80, carbon: '0.3T' },
  { id: 2, name: 'Aarav Mehta', impact: 980, trees: 68, carbon: '0.25T' },
  { id: 3, name: 'Sanya Kapoor', impact: 910, trees: 64, carbon: '0.22T' },
  { id: 4, name: 'Vikram Nair', impact: 870, trees: 60, carbon: '0.20T' },
];

const Leaderboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('individuals');

  const data =
    category === 'cities' ? sampleCities : sampleIndividuals;

  const filteredData = data.filter((entry) =>
    entry.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700 dark:text-green-300">
        🌍 Eco Impact Leaderboard
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder={`Search ${category === 'cities' ? 'City' : 'Name'}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-1/2 p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        />

        <div className="flex space-x-2">
          <button
            onClick={() => setCategory('individuals')}
            className={`px-4 py-2 rounded font-semibold ${
              category === 'individuals'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
            }`}
          >
            Individuals
          </button>
          <button
            onClick={() => setCategory('cities')}
            className={`px-4 py-2 rounded font-semibold ${
              category === 'cities'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
            }`}
          >
            Cities
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-green-100 dark:bg-green-800 text-gray-700 dark:text-white">
              <th className="p-3 text-left">Rank 🏆</th>
              <th className="p-3 text-left">
                {category === 'cities' ? 'City' : 'Name'}
              </th>
              <th className="p-3 text-left">Impact Points 🌱</th>
              <th className="p-3 text-left">Trees Planted 🌳</th>
              <th className="p-3 text-left">CO₂ Offset 🫧</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((entry, index) => (
                <tr
                  key={entry.id}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-green-50 dark:hover:bg-green-900"
                >
                  <td className="p-3 font-bold text-green-600 dark:text-green-300">
                    #{index + 1}
                  </td>
                  <td className="p-3 font-semibold dark:text-white">{entry.name}</td>
                  <td className="p-3 dark:text-white">{entry.impact}</td>
                  <td className="p-3 dark:text-white">{entry.trees}</td>
                  <td className="p-3 dark:text-white">{entry.carbon}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500 dark:text-gray-300">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
