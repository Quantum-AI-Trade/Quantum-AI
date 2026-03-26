import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    navigate('/register');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update hash without causing navigation
        window.location.hash = sectionId;
      }
    } else {
      // If on another page, navigate to home with the section as state
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <a href="#/" onClick={handleHomeClick} className={styles.logo}>
            <span className="material-symbols-outlined">query_stats</span>
            <span className={styles.logoText}>Quantum<span className={styles.logoAccent}>AI</span></span>
          </a>
          
          <div className={styles.navLinks}>
            <a 
              href="#/" 
              onClick={handleHomeClick}
              className={styles.navLink}
            >
              {t('navbar.home')}
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className={styles.navLink}
            >
              {t('navbar.features')}
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className={styles.navLink}
            >
              {t('navbar.howItWorks')}
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => handleNavClick(e, 'reviews')}
              className={styles.navLink}
            >
              {t('navbar.reviews')}
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleNavClick(e, 'faq')}
              className={styles.navLink}
            >
              {t('navbar.faq')}
            </a>
          </div>

          <div className={styles.rightSection}>
            <LanguageSwitcher />
            <button onClick={handleGetStarted} className={styles.ctaButton}>
              {t('navbar.getStarted')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;