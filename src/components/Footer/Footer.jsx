import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const socialLinks = [
    { icon: 'public', href: '#', label: 'Website' },
    { icon: 'share', href: '#', label: 'Share' },
    { icon: 'mail', href: '#', label: 'Email' }
  ];

  const platformLinks = [
    { text: 'AI Analysis', href: '#' },
    { text: 'Bots Marketplace', href: '#' },
    { text: 'Risk Management', href: '#' },
    { text: 'Supported Exchanges', href: '#' }
  ];

  const companyLinks = [
    { text: 'About Us', href: '#' },
    { text: 'Careers', href: '#' },
    { text: 'Security', href: '#' },
    { text: 'Press Kit', href: '#' }
  ];

  const supportLinks = [
    { text: 'Help Center', href: '#' },
    { text: 'API Docs', href: '#' },
    { text: 'Terms of Service', href: '#' },
    { text: 'Privacy Policy', href: '#' }
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Section - Full width on mobile, then adjusts */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <span className="material-symbols-outlined" aria-hidden="true">query_stats</span>
              <span className={styles.logoText}>QuantumAI</span>
            </div>
            <p className={styles.brandDescription}>
              Revolutionizing global trading through advanced artificial intelligence and low-latency infrastructure.
            </p>
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

          {/* Platform Links */}
          <div>
            <h4 className={styles.linkGroupTitle}>Platform</h4>
            <ul className={styles.linkList}>
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className={styles.linkGroupTitle}>Company</h4>
            <ul className={styles.linkList}>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className={styles.linkGroupTitle}>Support</h4>
            <ul className={styles.linkList}>
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.disclaimer}>
            Legal Disclaimer: Trading financial instruments involves significant risk and can result in the loss of invested capital. Quantum AI provides analytical tools and does not guarantee profits. Past performance is not indicative of future results.
          </p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Quantum AI Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;