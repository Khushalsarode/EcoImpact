import { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';

const EcoBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi 🌱 I’m EcoBot! Ask me anything about sustainability, CO₂ impact, or how to log your habits.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);

    // Simulate Gemini response (replace this with actual Gemini API call)
    const botReply = await fetchGeminiResponse(input); // Replace with real logic
    setMessages([...newMessages, { sender: 'bot', text: botReply }]);

    setInput('');
  };

  const fetchGeminiResponse = async (query) => {
    // TODO: Integrate Gemini Vision/Chat API
    if (query.toLowerCase().includes("almond milk")) {
      return "A glass of almond milk has approximately 0.14 kg CO₂e, which is significantly less than cow's milk. Great choice! 🌍";
    }
    return "That's a great question! 🌿 I'm still learning – stay tuned for updates!";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

const suggestedPrompts = [
  "What's the CO₂ impact of air travel?",
  "Suggest eco-friendly grocery items",
  "How much energy does LED lighting save?",
  "Compare carbon footprints: beef vs. tofu",
  "Tips to reduce plastic waste at home",
  "How green is electric car charging?"
];

  return (
    <div className="min-h-screen px-4 py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col h-[85vh]">
        <div className="flex items-center space-x-3 mb-4">
          <FaLeaf className="text-green-500 text-3xl" />
          <h1 className="text-2xl font-bold text-green-600">EcoBot Chat Assistant</h1>
        </div>

        <div className="flex-1 overflow-y-auto mb-4 space-y-3 p-2 bg-white dark:bg-gray-700 rounded">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.sender === 'bot'
                  ? 'bg-green-100 dark:bg-green-700 text-left text-sm'
                  : 'bg-blue-100 dark:bg-blue-700 ml-auto text-right text-sm'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask EcoBot anything..."
            className="flex-1 px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-900"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleSend}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Send
          </button>
        </div>

        {/* Suggested Prompts */}
        <div className="mt-4">
          <p className="text-sm font-semibold text-green-500 mb-1">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setInput(prompt)}
                className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-500 text-sm"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoBot;
