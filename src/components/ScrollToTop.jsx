import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setShowButton(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button 
      onClick={scrollToTop}
      className={`scroll-top-btn ${showButton ? 'show' : ''}`}
    >
      <FiArrowUp size={24} />
    </button>
  );
};