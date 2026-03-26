import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './CTA.module.css';

const CTA = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <div className={styles.backgroundPattern}></div>
          
          <h2 className={styles.title}>{t('cta.title')}</h2>
          
          <p className={styles.description}>{t('cta.description')}</p>
          
          <div className={styles.buttons}>
            <button 
              onClick={() => navigate('/register')} 
              className={styles.primaryButton}
            >
              {t('cta.createAccount')}
            </button>
            <button className={styles.secondaryButton}>
              {t('cta.viewPricing')}
            </button>
          </div>
          
          <p className={styles.disclaimer}>{t('cta.disclaimer')}</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;