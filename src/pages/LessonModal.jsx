import React, { useState } from "react";

const LessonModal = ({ course, onClose }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 hover:text-red-500"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{course.content}</p>

        {!showQuiz ? (
          <button
            className="bg-green-600 text-white px-4 py-2 rounded mt-4"
            onClick={() => setShowQuiz(true)}
          >
            Take Quiz
          </button>
        ) : (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Quiz: {course.quiz.question}</h3>
            <ul className="space-y-2">
              {course.quiz.options.map((option, idx) => (
                <li key={idx}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded border ${
                      selectedAnswer === option
                        ? option === course.quiz.answer
                          ? "bg-green-200 border-green-500"
                          : "bg-red-200 border-red-500"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => handleAnswer(option)}
                    disabled={showResult}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            {showResult && (
              <p className="mt-3 font-medium">
                {selectedAnswer === course.quiz.answer ? "✅ Correct!" : "❌ Try Again!"}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonModal;
