import { useState, useEffect } from 'react';

function useMediaQuery(width: number) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < width);
    };

    window.addEventListener('resize', handleResize);

    // Check the size initially
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return isSmallScreen;
}

export default useMediaQuery;
