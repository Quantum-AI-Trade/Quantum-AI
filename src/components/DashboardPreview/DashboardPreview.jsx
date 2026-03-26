import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './DashboardPreview.module.css';

const DashboardPreview = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: 'analytics',
      titleKey: 'profitTracking.title',
      descriptionKey: 'profitTracking.description'
    },
    {
      icon: 'troubleshoot',
      titleKey: 'riskManagement.title',
      descriptionKey: 'riskManagement.description'
    },
    {
      icon: 'history',
      titleKey: 'tradeLogs.title',
      descriptionKey: 'tradeLogs.description'
    }
  ];

  useEffect(() => {
    const particles = document.querySelectorAll(`.${styles.particle}`);
    particles.forEach((particle, index) => {
      particle.style.animationDelay = `${index * 2}s`;
    });
  }, []);

  return (
    <section className={styles.dashboardPreview}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV3Ii4A1nCroFCkPhg5OYVByyoNvIv9QQQcYaIo0tySDeBAuBcT_cEg6RwUcThyCfKy0GV-mfx0ILmJ_Q2i9kmx2OD2omBL2yyVolVbMwpXkJ9QPSPQwD53McxOekw41Swg06aWRlFqp2PM8QBnUWBr5gdsetYMQgNC9AIZ7g7eNAWEtpN0IAtXHAw991z3dyjSWLj52wPypxGFb2KkEK2Syo142vq4zBlps8F-gH3731lc5SxJicAhbaS3UQLJ5TT2odVvCBy6CA"
              alt="Dashboard preview"
              className={styles.image}
            />
          </div>
          
          <div className={styles.content}>
            <h2 className={styles.title}>
              {t('dashboard.title')} <br />
              <span className={styles.titleAccent}>{t('dashboard.titleAccent')}</span>
            </h2>
            
            <div className={styles.featuresList}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <span className={`material-symbols-outlined ${styles.featureIcon}`}>
                    {feature.icon}
                  </span>
                  <div>
                    <h4 className={styles.featureTitle}>{t(`dashboard.${feature.titleKey}`)}</h4>
                    <p className={styles.featureDescription}>{t(`dashboard.${feature.descriptionKey}`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.particle} style={{ left: '10%' }}></div>
      <div className={styles.particle} style={{ left: '30%' }}></div>
      <div className={styles.particle} style={{ left: '50%' }}></div>
      <div className={styles.particle} style={{ left: '70%' }}></div>
      <div className={styles.particle} style={{ left: '90%' }}></div>
    </section>
  );
};

export default DashboardPreview;