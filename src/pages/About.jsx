import React from 'react';

const About = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mx-auto text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600 dark:text-green-400">
        About Us
      </h1>

      <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 text-center">
        We're on a mission to help users track, reduce, and make sense of their environmental impact
        — from carbon footprint to sustainability challenges and more.
      </p>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-500">Our Vision</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            To empower individuals and organizations with data-driven tools to understand and act on climate-related issues, while making it engaging and accessible.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-500">Why This Project?</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Climate change is a real threat. Our app gives users a personalized way to measure their footprint, earn impact-based badges, and join global sustainability challenges.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-500">Built With 💚</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            We use cutting-edge tech like React, Tailwind, Auth0, MongoDB, and Gemini API to make data visual, intuitive, and actionable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
