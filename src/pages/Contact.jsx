import React from 'react';

const Contact = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mx-auto text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600 dark:text-green-400">
        Contact Us
      </h1>
      <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
        We'd love to hear from you. Reach out with any questions, feedback, or collaboration ideas!
      </p>

      <form className="space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          Or contact us directly at: <a href="mailto:contact@ecoimpact.org" className="underline">contact@ecoimpact.org</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
