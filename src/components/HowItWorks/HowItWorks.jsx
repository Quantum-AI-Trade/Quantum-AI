import React from 'react';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Connect Account',
      description: 'Securely link your favorite exchange via encrypted API keys.'
    },
    {
      number: '2',
      title: 'Pick a Strategy',
      description: 'Choose from pre-set AI models or build your own custom bot.'
    },
    {
      number: '3',
      title: 'Launch Bot',
      description: 'Activate your AI and watch it execute trades with surgical precision.'
    }
  ];

  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Start Trading in Minutes</h2>
          <p className={styles.subtitle}>Our streamlined onboarding process gets you in the market faster.</p>
        </div>
        
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {index < steps.length - 1 && <div className={styles.stepConnector}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;