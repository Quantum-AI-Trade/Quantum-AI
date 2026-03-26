import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: 'public', href: '#', label: 'Website' },
    { icon: 'share', href: '#', label: 'Share' },
    { icon: 'mail', href: '#', label: 'Email' }
  ];

  const platformLinks = [
    { text: 'aiAnalysis', href: '#' },
    { text: 'botsMarketplace', href: '#' },
    { text: 'riskManagement', href: '#' },
    { text: 'exchanges', href: '#' }
  ];

  const companyLinks = [
    { text: 'aboutUs', href: '#' },
    { text: 'careers', href: '#' },
    { text: 'security', href: '#' },
    { text: 'pressKit', href: '#' }
  ];

  const supportLinks = [
    { text: 'helpCenter', href: '#' },
    { text: 'apiDocs', href: '#' },
    { text: 'terms', href: '#' },
    { text: 'privacy', href: '#' }
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <span className="material-symbols-outlined" aria-hidden="true">query_stats</span>
              <span className={styles.logoText}>QuantumAI</span>
            </div>
            <p className={styles.brandDescription}>{t('footer.description')}</p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className={styles.socialLink}
                  aria-label={link.label}
                  title={link.label}
                >
                  <span className="material-symbols-outlined" aria-hidden="true">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={styles.linkGroupTitle}>{t('footer.platform')}</h4>
            <ul className={styles.linkList}>
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>{t(`footer.${link.text}`)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.linkGroupTitle}>{t('footer.company')}</h4>
            <ul className={styles.linkList}>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>{t(`footer.${link.text}`)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.linkGroupTitle}>{t('footer.support')}</h4>
            <ul className={styles.linkList}>
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>{t(`footer.${link.text}`)}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.disclaimer}>{t('footer.disclaimer')}</p>
          <p className={styles.copyright}>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;