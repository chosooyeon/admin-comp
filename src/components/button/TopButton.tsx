import { useEffect, useState } from 'react';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 w-10 h-10 bg-blue-600 text-white rounded-full 
                   flex items-center justify-center text-xl shadow-lg hover:bg-blue-700 
                   transition-colors duration-300 focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:ring-offset-2"
          aria-label="맨 위로 이동"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default TopButton;