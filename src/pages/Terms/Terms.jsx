import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Terms.module.css';

const Terms = () => {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleAccept = () => {
    if (accepted) {
      navigate('/register');
    }
  };

  return (
    <div className={styles.termsPage}>
      <div className={styles.container}>
        <div className={styles.termsCard}>
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.lastUpdated}>Last Updated: February 2026</p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className="material-symbols-outlined">gavel</span>
              1. Acceptance of Terms
            </h2>
            <div className={styles.sectionContent}>
              <p>By accessing and using Quantum AI Trading Platform, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className="material-symbols-outlined">psychology</span>
              2. AI Trading Services
            </h2>
            <div className={styles.sectionContent}>
              <p>Our platform provides AI-powered trading tools and analytics. Important points to understand:</p>
              <ul className={styles.list}>
                <li className={styles.listItem}>The AI predictions are for informational purposes only</li>
                <li className={styles.listItem}>Past performance does not guarantee future results</li>
                <li className={styles.listItem}>You are solely responsible for your trading decisions</li>
                <li className={styles.listItem}>We do not guarantee profits or protect against losses</li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className="material-symbols-outlined">shield</span>
              3. Risk Disclosure
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.important}>
                <strong className={styles.highlight}>IMPORTANT:</strong> Trading cryptocurrencies and other financial instruments carries significant risk. You may lose some or all of your invested capital.
              </div>
              <p>You should carefully consider whether trading is suitable for you in light of your financial circumstances.</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className="material-symbols-outlined">encrypted</span>
              4. Data Privacy
            </h2>
            <div className={styles.sectionContent}>
              <p>We take your privacy seriously. Your personal information is encrypted and never shared with third parties without your consent. Read our full <Link to="/privacy" className={styles.link}>Privacy Policy</Link> for more details.</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className="material-symbols-outlined">sync_alt</span>
              5. API Usage
            </h2>
            <div className={styles.sectionContent}>
              <p>When connecting exchange APIs:</p>
              <ul className={styles.list}>
                <li className={styles.listItem}>We only require read and trade permissions</li>
                <li className={styles.listItem}>Withdrawal permissions are never requested</li>
                <li className={styles.listItem}>You can revoke access at any time</li>
              </ul>
            </div>
          </div>

          <div className={styles.agreementCheck}>
            <label className={styles.checkboxWrapper}>
              <input 
                type="checkbox" 
                className={styles.checkbox}
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <span className={styles.checkboxLabel}>
                I have read and agree to the Terms & Conditions and <Link to="/privacy">Privacy Policy</Link>
              </span>
            </label>
          </div>

          <div className={styles.buttonGroup}>
            <button 
              className={styles.acceptButton}
              onClick={handleAccept}
              disabled={!accepted}
            >
              Accept & Continue
            </button>
            <Link to="/register" className={styles.declineButton}>
              Decline
            </Link>
          </div>

          <Link to="/register" className={styles.backLink}>
            <span className={`material-symbols-outlined ${styles.backIcon}`}>arrow_back</span>
            Back to Registration
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;