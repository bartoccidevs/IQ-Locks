import { useState, useEffect } from 'react';

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    let newWidth = 0;
    function handleResize() {
      if (window.innerWidth < 640) {
        newWidth = 300
      } else if (window.innerWidth > 800) {
        newWidth = 800
      } else {
        newWidth = window.innerWidth
      }
      setWindowDimensions({
        width: newWidth,
        height: window.innerHeight,
      });
    }

    handleResize(); // Get initial dimensions on mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;