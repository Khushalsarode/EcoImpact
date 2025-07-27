import React, { useState } from "react";

const LogDailyHabits = () => {
  const [category, setCategory] = useState("Travel");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image && !description.trim()) {
      alert("Please either upload an image or enter a description.");
      return;
    }

    const logEntry = {
      category,
      description: description.trim(),
      date,
      image,
    };

    // TODO: Integrate Gemini Vision API
    // Upload image to Firebase Storage (if any), get URL
    // Save logEntry to Firestore
    console.log("Habit logged:", logEntry);
    alert("Habit logged! Gemini Vision will analyze the image if uploaded.");
  };

  return (
    <div className="min-h-screen w-full px-4 py-8 bg-gray-50 dark:bg-gray-900 flex items-start justify-center overflow-auto">
      <div className="w-full max-w-4xl p-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl">
        {/* HEADER */}
        <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">
          Log Daily Habit 🌱
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category Dropdown */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
            >
              <option value="Travel">🚗 Travel</option>
              <option value="Food">🍔 Food</option>
              <option value="Energy">⚡ Energy</option>
              <option value="Shopping">🛍️ Shopping</option>
              <option value="Electronics">💻 Electronics</option>
              <option value="Water">🚿 Water</option>
              <option value="Waste">🗑️ Waste</option>
              <option value="Clothing">👚 Clothing</option>
              <option value="Other">📦 Other</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <input
              type="text"
              placeholder="e.g., Bought local veggies, Took train..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block mb-1 font-medium">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-1 font-medium">
              Upload Receipt / Image (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-2 rounded shadow-md w-full max-h-48 object-contain"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition duration-200"
          >
            Log Habit
          </button>
        </form>


        {/* Tips & Example Section */}
        <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-green-600 mb-2">📌 Tips for Logging Effectively</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-2">
            <li><strong>Be specific:</strong> Mention exact product, transport mode, quantity, or energy used.</li>
            <li><strong>Include numbers:</strong> e.g., “5 km traveled by car”, “2kg vegetables bought”, “3 hours of AC usage”.</li>
            <li><strong>Use clear images:</strong> Upload photos of receipts, transport tickets, product packaging, or meters.</li>
          </ul>

          <h4 className="mt-4 text-green-700 font-medium">📝 Example Logs:</h4>
          <div className="mt-2 text-sm space-y-1 text-gray-800 dark:text-gray-300">
            <p><strong>Travel:</strong> Took a 12 km cab ride to office.</p>
            <p><strong>Food:</strong> Ordered a chicken burger + fries (image of receipt attached).</p>
            <p><strong>Energy:</strong> Used electric heater for 4 hours. Set thermostat to 25°C.</p>
            <p><strong>Shopping:</strong> Bought 2 pairs of jeans from a local market.</p>
          </div>
        </div>

      </div>
      </div>

      );
};

      export default LogDailyHabits;
