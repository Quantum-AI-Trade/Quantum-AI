import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  const features = [
    {
      icon: 'touch_app',
      title: 'User-friendly Interface',
      description: 'Our trading interface is so easy even a child can use it. A member of the platform will call you and guide you through the entire process to ensure maximum returns.'
    },
    {
      icon: 'smart_toy',
      title: 'Automated Trading',
      description: 'Our automated trading bots can do all the work for you. No need to be an expert at trading. Earn while you sleep.'
    },
    {
      icon: 'verified',
      title: 'Trusted Trading Platforms',
      description: 'Quantum AI is based in the UK, and we only work and partner with UK companies. Stringent and well-known platforms will be encouraged.'
    },
    {
      icon: 'memory',
      title: 'Quantum Volume (QV) Score',
      description: 'Our quantum computing system has achieved a quantum volume (QV) 14,802. Achieving a high score on the industry-recognised QV benchmark, developed by IBM to test quantum computers\' capability.'
    },
    {
      icon: 'payments',
      title: 'Minimum $250 Deposit',
      description: 'Try with a small deposit of $250. We allow small risk demos so you can test our trading bot on the market before larger deposits.'
    },
    {
      icon: 'security',
      title: 'Uncompromised Security',
      description: 'Your data is safe with us. Trust us; we keep our quantum computing secret; emails are safe.'
    }
  ];

  return (
    <section className={styles.features} id="features">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose Quantum AI</h2>
          <p className={styles.subtitle}>
            Experience the future of trading with our cutting-edge quantum computing technology
          </p>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIconWrapper}>
                <span className={`material-symbols-outlined ${styles.cardIcon}`}>
                  {feature.icon}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;