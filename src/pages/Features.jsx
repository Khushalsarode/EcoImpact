import React from "react";

const features = [
  {
    title: "Real-Time Monitoring",
    description:
      "Track critical water quality parameters in real-time using IoT-enabled sensors. View data for pH, temperature, heavy metals, and more — all from a unified dashboard.",
    icon: "💧",
  },
  {
    title: "Smart Alerts & Notifications",
    description:
      "Receive instant alerts when parameters exceed safe thresholds. Stay ahead of compliance risks with proactive insights and suggestions.",
    icon: "⚠️",
  },
  {
    title: "AI-Powered Reports",
    description:
      "Use AI to generate readable reports, identify anomalies, and suggest preventive measures. Ensure sustainability with data-backed decisions.",
    icon: "🧠",
  },
  {
    title: "Compliance Dashboard",
    description:
      "Track and visualize compliance status against local/state pollution board regulations. Submit digital forms and manage documentation easily.",
    icon: "📋",
  },
  {
    title: "Collaboration Tools",
    description:
      "Invite team members, assign roles, and collaborate on reports, maintenance activities, and safety tasks with built-in teamwork support.",
    icon: "🤝",
  },
  {
    title: "Eco Challenges & Leaderboards",
    description:
      "Participate in green challenges, earn badges, and feature on leaderboards for sustainable practices and efficient water management.",
    icon: "🏆",
  },
];

const Features = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-center mb-10 text-green-600 dark:text-green-400">
        Features That Empower You
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h2 className="text-xl font-semibold text-green-500 mb-2">
              {feature.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
