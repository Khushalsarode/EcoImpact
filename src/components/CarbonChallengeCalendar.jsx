import { useState, useEffect } from 'react';
import { FaCheckCircle, FaQuoteLeft, FaSync } from 'react-icons/fa';

const challenges = [
    "Go meatless today 🌱",
    "Take a 5-minute shower 🚿",
    "Recycle an item ♻️",
    "Use public transport or walk 🚶",
    "Turn off electronics when not in use 🔌",
    "Avoid single-use plastic for the day 🚯",
    "Spend time in nature 🌳",
    "Bring your own bag when shopping 🛍️",
    "Use a reusable water bottle 💧",
    "Eat locally grown food 🍎",
    "Compost your food waste 🍂",
    "Air-dry your clothes 🌬️",
    "Take the stairs instead of elevator 🧗",
    "Fix a leaky tap to save water 🚰",
    "Repurpose or upcycle something ♻️",
    "Plant a tree or plant 🌱",
    "Support an eco-friendly business 🛒",
    "Switch to LED bulbs 💡",
    "Unsubscribe from junk mail 📭",
    "Donate unused items 🎁",
    "Avoid fast fashion for a week 👚",
    "Host a zero-waste meal 🥗",
    "Use natural cleaning products 🧼",
    "Pick up litter in your neighborhood 🧤",
    "Start a home herb garden 🌿",
    "Batch cook to save energy 🍲",
    "Read a sustainability article or blog 📖",
    "Have a no-driving day 🚴",
    "Calculate your carbon footprint 🌍",
    "Share your eco-tip on social media 📲"
];

const ecoFacts = [
    "LED bulbs use at least 75% less energy than incandescent lighting.",
    "Recycling one aluminum can saves enough energy to run a TV for 3 hours.",
    "Producing 1 kg of beef emits 60 kg of CO₂ equivalent.",
    "Composting can reduce food waste and enrich soil naturally.",
    "Fast fashion contributes 10% of global carbon emissions.",
    "Using a reusable bag can eliminate 22,000 plastic bags in a lifetime.",
    "Public transport emits 45% less CO₂ than cars per mile.",
    "An average shower uses 2.1 gallons per minute—shorter showers save water.",
    "Meatless days can cut personal carbon footprints by 8%.",
    "One tree can absorb around 48 lbs of CO₂ per year.",
    "The fashion industry uses 93 billion cubic meters of water annually.",
    "Plastic takes over 400 years to degrade.",
    "Biking to work just once a week cuts emissions drastically.",
    "Organic waste in landfills creates methane, a potent greenhouse gas.",
    "Switching to green energy reduces carbon footprint significantly."
];

const CarbonChallengeCalendar = () => {
    const [todayChallenge, setTodayChallenge] = useState('');
    const [quote, setQuote] = useState('');
    const [completed, setCompleted] = useState(false);
    const [swapCount, setSwapCount] = useState(0);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [todayIndex, setTodayIndex] = useState(0);

    const maxSwapsPerWeek = 2;
    const daysInMonth = 30;

    useEffect(() => {
        const today = new Date();
        const index = today.getDate() - 1;
        setTodayIndex(index);
        setTodayChallenge(challenges[index] || "🎉 Take your own eco-action!");
        setQuote(ecoFacts[Math.floor(Math.random() * ecoFacts.length)]);
    }, []);

    const handleComplete = () => {
        setCompleted(true);
    };
    
    const handleImageUpload = (e) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result); // ✅ ADDED
    };
    reader.readAsDataURL(file);
  }
};


    const handleSwap = () => {
        if (swapCount >= maxSwapsPerWeek) return;

        const unusedChallenges = challenges.filter(c => c !== todayChallenge);
        const randomIndex = Math.floor(Math.random() * unusedChallenges.length);
        const newChallenge = unusedChallenges[randomIndex];

        setTodayChallenge(newChallenge);
        setSwapCount(prev => prev + 1);
    };

    const renderCalendar = () => {
        return [...Array(daysInMonth)].map((_, i) => (
            <div
                key={i}
                className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-xl p-3 text-sm flex flex-col justify-between shadow-sm"
            >
                <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    Day {i + 1}
                </div>
                <div className="text-zinc-700 dark:text-white mt-1 font-medium">
                    {challenges[i] || "Take any custom action"}
                </div>
            </div>
        ));
    };

    return (
        <div className="max-w-5xl mx-auto my-10 px-4">
            {/* Top Section */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">
                    🌍 Carbon Challenge Calendar
                </h2>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Today’s Challenge:</h3>
                    <p className="text-lg mt-1">{todayChallenge}</p>
                </div>

                {/* Swap Button */}
                <button
                    onClick={handleSwap}
                    disabled={swapCount >= maxSwapsPerWeek}
                    className="mt-2 px-4 py-1 text-sm bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
                >
                    🔁 Swap Challenge ({maxSwapsPerWeek - swapCount} left)
                </button>

                {/* Complete Button */}
                <button
                    onClick={handleComplete}
                    disabled={completed}
                    className={`mt-3 ml-2 px-5 py-2 rounded-lg font-semibold transition ${completed
                            ? 'bg-green-500 text-white cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                >
                    {completed ? (
                        <span className="flex items-center gap-2">
                            <FaCheckCircle /> Completed
                        </span>
                    ) : (
                        'Mark as Completed'
                    )}
                </button>

                {/* Quote */}
                <div className="mt-6 p-4 border-l-4 border-green-600 bg-green-50 dark:bg-zinc-800 dark:border-green-500">
                    <p className="flex items-start gap-2 text-md italic">
                        <FaQuoteLeft className="mt-1 text-green-600 dark:text-green-400" />
                        {quote}
                    </p>
                </div>

                {/* Photo Upload */}
                <div className="mt-6">
                    <label className="block font-semibold mb-2">📷 Upload proof (optional):</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="mb-2"
                    />
                    {uploadedImage && (
                        <img
                            src={uploadedImage}
                            alt="Uploaded proof"
                            className="mt-2 max-w-sm rounded-lg shadow-md"
                        />
                    )}
                </div>

                {/* Share */}
                <div className="mt-6 text-right">
                    <button
                        onClick={() =>
                            navigator.share
                                ? navigator.share({
                                    title: "Today's Eco Challenge",
                                    text: `${todayChallenge} — Join the Carbon Challenge!`,
                                    url: window.location.href,
                                })
                                : alert('Share not supported on this browser.')
                        }
                        className="text-sm underline text-green-700 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
                    >
                        📤 Share your challenge
                    </button>
                </div>
            </div>

            {/* Monthly Calendar Grid */}
            <div>
                <h3 className="text-xl font-bold mb-4 text-zinc-800 dark:text-white">
                    🗓️ This Month’s Eco Challenges
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {renderCalendar()}
                </div>
            </div>
        </div>
    );
};

export default CarbonChallengeCalendar;
