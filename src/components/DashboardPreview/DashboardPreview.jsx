import React from 'react';
import styles from './DashboardPreview.module.css';

const DashboardPreview = () => {
  const features = [
    {
      icon: 'analytics',
      title: 'Live Profit Tracking',
      description: 'Monitor your realized and unrealized PNL in real-time across all your connected accounts.'
    },
    {
      icon: 'troubleshoot',
      title: 'Risk Management Controls',
      description: 'Advanced stop-loss, take-profit, and trailing-drawdown settings to protect your capital.'
    },
    {
      icon: 'history',
      title: 'Comprehensive Trade Logs',
      description: 'Audit every single move the AI makes with detailed reasoning for each execution.'
    }
  ];

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
              A Control Center <br />
              <span className={styles.titleAccent}>Built for Winners</span>
            </h2>
            
            <div className={styles.featuresList}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <span className={`material-symbols-outlined ${styles.featureIcon}`}>
                    {feature.icon}
                  </span>
                  <div>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;