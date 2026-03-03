import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If we're on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update hash in URL
        window.location.hash = sectionId;
      }
    } else {
      // If on another page, navigate to home with state
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <a href="/" onClick={handleHomeClick} className={styles.logo}>
            <span className="material-symbols-outlined">query_stats</span>
            <span className={styles.logoText}>Quantum<span className={styles.logoAccent}>AI</span></span>
          </a>
          
          <div className={styles.navLinks}>
            <a 
              href="/" 
              onClick={handleHomeClick}
              className={styles.navLink}
            >
              Home
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleSectionClick(e, 'features')}
              className={styles.navLink}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleSectionClick(e, 'how-it-works')}
              className={styles.navLink}
            >
              How It Works
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => handleSectionClick(e, 'reviews')}
              className={styles.navLink}
            >
              Reviews
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleSectionClick(e, 'faq')}
              className={styles.navLink}
            >
              FAQ
            </a>
          </div>

          <button onClick={handleGetStarted} className={styles.ctaButton}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;