import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Terms.module.css';

const Terms = () => {
  const { t } = useTranslation();
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
          <h1 className={styles.title}>{t('terms.title')}</h1>
          <p className={styles.lastUpdated}>{t('terms.lastUpdated')}</p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className="material-symbols-outlined">gavel</span>
              {t('terms.sections.acceptance.title')}
            </h2>
            <div className={styles.sectionContent}>
              <p>{t('terms.sections.acceptance.content')}</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className="material-symbols-outlined">psychology</span>
              {t('terms.sections.aiServices.title')}
            </h2>
            <div className={styles.sectionContent}>
              <p>{t('terms.sections.aiServices.content')}</p>
              <ul className={styles.list}>
                {t('terms.sections.aiServices.points', { returnObjects: true }).map((point, index) => (
                  <li key={index} className={styles.listItem}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className="material-symbols-outlined">shield</span>
              {t('terms.sections.riskDisclosure.title')}
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.important}>
                <strong className={styles.highlight}>{t('terms.sections.riskDisclosure.important')}</strong>{' '}
                {t('terms.sections.riskDisclosure.content')}
              </div>
              <p>{t('terms.sections.riskDisclosure.advice')}</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className="material-symbols-outlined">encrypted</span>
              {t('terms.sections.dataPrivacy.title')}
            </h2>
            <div className={styles.sectionContent}>
              <p>{t('terms.sections.dataPrivacy.content')}</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className="material-symbols-outlined">sync_alt</span>
              {t('terms.sections.apiUsage.title')}
            </h2>
            <div className={styles.sectionContent}>
              <p>{t('terms.sections.apiUsage.content')}</p>
              <ul className={styles.list}>
                {t('terms.sections.apiUsage.points', { returnObjects: true }).map((point, index) => (
                  <li key={index} className={styles.listItem}>{point}</li>
                ))}
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
                {t('terms.agreement.text')} <Link to="/privacy">{t('terms.agreement.privacyLink')}</Link>
              </span>
            </label>
          </div>

          <div className={styles.buttonGroup}>
            <button 
              className={styles.acceptButton}
              onClick={handleAccept}
              disabled={!accepted}
            >
              {t('terms.buttons.accept')}
            </button>
            <Link to="/register" className={styles.declineButton}>
              {t('terms.buttons.decline')}
            </Link>
          </div>

          <Link to="/register" className={styles.backLink}>
            <span className={`material-symbols-outlined ${styles.backIcon}`}>arrow_back</span>
            {t('terms.backLink')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;