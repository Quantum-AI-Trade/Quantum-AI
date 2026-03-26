import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentLanguage = i18n.language;

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧', label: 'EN' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', label: 'FR' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.languageSwitcher} ref={dropdownRef}>
      <button
        className={styles.langButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <span className={styles.flagIcon}>{currentLang.flag}</span>
        <span className={styles.langText}>{currentLang.label}</span>
        <span className={`material-symbols-outlined ${styles.dropdownIcon}`}>
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.dropdownItem} ${currentLanguage === lang.code ? styles.active : ''}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className={styles.flagIcon}>{lang.flag}</span>
              <span className={styles.langName}>{lang.name}</span>
              {currentLanguage === lang.code && (
                <span className={`material-symbols-outlined ${styles.checkIcon}`}>check</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;