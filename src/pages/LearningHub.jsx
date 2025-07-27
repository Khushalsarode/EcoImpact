import React, { useState } from "react";
import { microcourses } from "../data/microcourses"; // separated for clean code
import LessonModal from "./LessonModal";

const LearningHub = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">📚 Sustainability Learning Hub</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Explore Gemini-curated microcourses & test your knowledge with fun quizzes.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {microcourses.map((course, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{course.summary}</p>
            <p className="text-xs text-green-600">{course.duration}</p>
            <button
              className="mt-3 bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-4 rounded"
              onClick={() => setSelectedCourse(course)}
            >
              Start Learning
            </button>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <LessonModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </section>
  );
};

export default LearningHub;
