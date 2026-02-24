import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Use 'auto' for instant scroll, 'smooth' for animated
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;