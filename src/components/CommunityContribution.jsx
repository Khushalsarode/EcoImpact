import React, { useState } from 'react';

const CommunityContribution = () => {
  const [formData, setFormData] = useState({
    type: 'issue',
    title: '',
    description: '',
    location: '',
    image: null,
    tags: '',
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      const file = files[0];
      setFormData({ ...formData, image: file });
      setImagePreview(file ? URL.createObjectURL(file) : null);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedTags = formData.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');

    const submissionData = {
      ...formData,
      tags: parsedTags,
    };

    console.log('Submitted:', submissionData);

    setSuccessMessage('✅ Thanks for your contribution!');
    setTimeout(() => setSuccessMessage(''), 5000);

    setFormData({
      type: 'issue',
      title: '',
      description: '',
      location: '',
      image: null,
      tags: '',
    });
    setImagePreview(null);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2 text-green-600 dark:text-green-400">
        🌱 Community Contribution
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Submit any local environmental issue or share a green activity you or your community is involved in.
      </p>

      {successMessage && (
        <div className="mb-4 p-3 rounded bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 transition">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contribution Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            <option value="issue">Local Issue</option>
            <option value="activity">Green Activity</option>
            <option value="event">Eco Event</option>
            <option value="initiative">Community Initiative</option>
            <option value="volunteering">Volunteering Opportunity</option>
            <option value="awareness">Awareness Campaign</option>
            <option value="recycling">Recycling Drive</option>
            <option value="plantation">Tree Plantation</option>
            <option value="cleanup">Clean-up Drive</option>
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g., Illegal dumping in park"
            className="w-full mt-1 p-2 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Description <span className="text-xs text-gray-500">({formData.description.length}/500)</span>
          </label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
            maxLength={500}
            placeholder="Describe the issue or activity..."
            className="w-full mt-1 p-2 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="City / Area / Landmark"
            className="w-full mt-1 p-2 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Tags / Categories <span className="text-xs text-gray-500">(comma separated)</span>
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="e.g., water, waste, awareness, school"
            className="w-full mt-1 p-2 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Upload Image (optional)
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 text-sm"
          />
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="h-40 w-auto rounded shadow-md object-cover"
              />
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition font-semibold"
        >
          Submit Contribution
        </button>
      </form>
    </div>
  );
};

export default CommunityContribution;
