import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-6 w-12 h-12 flex items-center justify-center text-xl bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition z-50"
      aria-label="Back to Top"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
