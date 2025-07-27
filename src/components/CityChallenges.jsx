import React, { useState } from 'react';

const suggestions = [
  { title: "🌳 Urban Green Spaces", description: "Expand community gardens and rooftop greenery to combat heat islands and improve air quality.", type: "Policy Action" },
  { title: "♻️ Waste Management Challenge", description: "Introduce segregated bins and incentives for zero-waste neighborhoods.", type: "City Challenge" },
  { title: "🚲 Sustainable Transportation", description: "Develop more bike lanes and incentivize electric vehicle usage.", type: "Policy Action" },
  { title: "💧 Water Conservation", description: "Install community rainwater harvesting systems and promote efficient water use.", type: "City Challenge" },
  { title: "🌞 Solar Rooftop Program", description: "Subsidize solar panel installations for homes and public buildings.", type: "Policy Action" },
  { title: "🚌 Clean Public Transit", description: "Electrify public buses and reduce fares for eco-friendly commuting.", type: "Policy Action" },
  { title: "🚮 Litter-Free Zones", description: "Organize monthly clean-up drives and deploy smart dustbins.", type: "City Challenge" },
  { title: "🌬️ Air Quality Monitoring", description: "Install real-time air quality monitors in public areas and schools.", type: "Policy Action" },
  { title: "🧪 Eco Education Week", description: "Run campaigns in schools and communities about sustainability.", type: "City Challenge" },
  { title: "🛍️ Ban on Single-Use Plastic", description: "Implement local bans and promote biodegradable alternatives.", type: "Policy Action" },
  { title: "🌾 Urban Farming Hubs", description: "Promote hydroponics and rooftop farming initiatives.", type: "City Challenge" },
  { title: "🧹 Community Composting", description: "Set up neighborhood composting sites with workshops.", type: "City Challenge" },
  { title: "🛠️ Repair and Reuse Center", description: "Encourage repair cafes to reduce electronic and furniture waste.", type: "City Challenge" },
  { title: "📦 Eco Packaging Rules", description: "Mandate eco-friendly packaging for local businesses.", type: "Policy Action" },
  { title: "🚶 Walkable City Zones", description: "Pedestrian-only zones in busy areas for cleaner air and safer streets.", type: "Policy Action" },
  { title: "🔋 E-Waste Collection Drive", description: "Monthly e-waste drop-off centers in each ward.", type: "City Challenge" },
  { title: "🌐 Smart Water Meters", description: "Install smart meters to monitor household water usage.", type: "Policy Action" },
  { title: "🦋 Biodiversity Corridors", description: "Connect parks and forests with green corridors to support wildlife.", type: "Policy Action" },
  { title: "🚱 Leak Detection Initiative", description: "Track and fix municipal water pipeline leaks.", type: "City Challenge" },
  { title: "🏘️ Green Building Incentives", description: "Provide tax benefits for eco-certified constructions.", type: "Policy Action" },
  { title: "🌦️ Rain Garden Installations", description: "Create rain gardens to manage stormwater runoff.", type: "City Challenge" },
  { title: "📊 Green Score Dashboard", description: "Launch a public platform showing area-wise eco scores.", type: "Policy Action" },
  { title: "🌌 Dark Sky Zones", description: "Reduce light pollution to restore night skies.", type: "Policy Action" },
  { title: "🏞️ Park Adoption Program", description: "Let communities 'adopt' local parks for maintenance.", type: "City Challenge" },
  { title: "🌿 Tree Tagging Project", description: "Tag trees with QR codes to promote care and education.", type: "City Challenge" },
  { title: "🎓 Youth Climate Council", description: "Empower youth to advise on green policies and awareness.", type: "Policy Action" },
  { title: "💼 Green Job Fair", description: "Connect citizens with green startups and training programs.", type: "City Challenge" },
  { title: "🔌 EV Charging Network", description: "Expand accessible charging stations across neighborhoods.", type: "Policy Action" },
  { title: "🎥 Eco Film Festival", description: "Host local screenings of environmental documentaries.", type: "City Challenge" },
  { title: "📢 Eco Complaint Portal", description: "Online portal for reporting pollution and violations.", type: "Policy Action" }
];

const generateTasks = () => {
  const tasks = [];
  for (let i = 1; i <= 30; i++) {
    const random = suggestions[Math.floor(Math.random() * suggestions.length)];
    tasks.push({
      day: i,
      title: random.title,
      description: random.description,
      type: random.type,
      completed: false,
      upvotes: 0
    });
  }
  return tasks;
};

const CityChallenges = () => {
  const [tasks, setTasks] = useState(generateTasks());

  const handleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const handleUpvote = (index) => {
    const updated = [...tasks];
    updated[index].upvotes += 1;
    setTasks(updated);
  };

  const typeBadgeColor = (type) => {
    return type === "Policy Action"
      ? "bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-300"
      : "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-300";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700 dark:text-green-300">
        🏙️ Gemini-Suggested 30-Day City Improvement Plan
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition duration-300 p-5"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
                Day {task.day}
              </h3>
              <span className={`text-xs px-2 py-1 rounded-full font-semibold ${typeBadgeColor(task.type)}`}>
                {task.type}
              </span>
            </div>
            <p className="text-base font-medium text-gray-800 dark:text-white mb-1">{task.title}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{task.description}</p>

            <div className="flex justify-between mt-auto">
              <button
                onClick={() => handleComplete(index)}
                className={`text-xs px-3 py-1 rounded-md font-medium transition-all ${
                  task.completed
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white dark:bg-gray-700 dark:text-white"
                }`}
              >
                {task.completed ? "✅ Completed" : "Mark Complete"}
              </button>

              <button
                onClick={() => handleUpvote(index)}
                className="text-xs px-3 py-1 rounded-md bg-green-700 text-white hover:bg-green-700 transition"
              >
                👍 {task.upvotes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityChallenges;
