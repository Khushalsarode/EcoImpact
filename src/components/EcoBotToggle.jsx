import { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';
import EcoBot from './EcoBot'; // assuming EcoBot is the chat UI

const EcoBotToggle = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 z-50"
        aria-label="Toggle EcoBot"
      >
        <FaLeaf size={24} />
      </button>

      {/* Chat Window */}
      {open && (
       <div className="fixed bottom-20 right-6 w-[350px] max-h-[80vh] z-40">
  <EcoBot />
</div>
      )}
    </>
  );
};

export default EcoBotToggle;
