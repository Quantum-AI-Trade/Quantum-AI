import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Features.module.css';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: 'touch_app',
      titleKey: 'userFriendly.title',
      descriptionKey: 'userFriendly.description',
      badge: null
    },
    {
      icon: 'smart_toy',
      titleKey: 'automated.title',
      descriptionKey: 'automated.description',
      badge: null
    },
    {
      icon: 'verified',
      titleKey: 'trusted.title',
      descriptionKey: 'trusted.description',
      badge: null
    },
    {
      icon: 'memory',
      titleKey: 'quantum.title',
      descriptionKey: 'quantum.description',
      badge: 'certified'
    },
    {
      icon: 'payments',
      titleKey: 'deposit.title',
      descriptionKey: 'deposit.description',
      badge: null
    },
    {
      icon: 'security',
      titleKey: 'security.title',
      descriptionKey: 'security.description',
      badge: 'guidance'
    }
  ];

  return (
    <section className={styles.features} id="features">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{t('features.title')}</h2>
          <p className={styles.subtitle}>{t('features.subtitle')}</p>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIconWrapper}>
                <span className={`material-symbols-outlined ${styles.cardIcon}`}>
                  {feature.icon}
                </span>
              </div>
              
              {feature.badge === 'certified' && (
                <div className={styles.certifiedBadge}>
                  <span className="material-symbols-outlined">verified</span>
                  {t('features.certifiedBadge')}
                </div>
              )}
              
              {feature.badge === 'guidance' && (
                <div className={styles.guidanceBadge}>
                  <span className="material-symbols-outlined">psychology_alt</span>
                  {t('features.guidanceBadge')}
                </div>
              )}
              
              <h3 className={styles.cardTitle}>{t(`features.${feature.titleKey}`)}</h3>
              <p className={styles.cardDescription}>{t(`features.${feature.descriptionKey}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;