import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  const features = [
    {
      icon: 'psychology',
      title: 'AI Analysis',
      description: 'Deep market insights driven by neural networks that predict trends before they happen.'
    },
    {
      icon: 'insights',
      title: 'Real-Time Data',
      description: 'Instant updates from global exchanges with millisecond precision latency tracking.'
    },
    {
      icon: 'precision_manufacturing',
      title: 'Automated Trading',
      description: 'Set your complex strategies and let the AI trade for you while you sleep comfortably.'
    },
    {
      icon: 'encrypted',
      title: 'Bank-Grade Security',
      description: 'Multi-sig wallets and end-to-end encryption ensure your assets are always protected.'
    },
    {
      icon: 'gesture',
      title: 'Beginner Friendly',
      description: 'Intuitive interface designed for everyone, from first-time traders to pro veterans.'
    },
    {
      icon: 'speed',
      title: 'Fast Execution',
      description: 'Ultra-low latency connection to major liquidity providers for near-zero slippage.'
    }
  ];

  return (
    <section className={styles.features} id="features">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Institutional Tools for Everyone</h2>
          <p className={styles.subtitle}>
            Our platform combines cutting-edge AI with lightning-fast execution to give you a competitive edge.
          </p>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <span className={`material-symbols-outlined ${styles.cardIcon}`}>
                {feature.icon}
              </span>
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