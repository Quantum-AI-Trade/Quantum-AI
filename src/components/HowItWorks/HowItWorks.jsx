import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: '1',
      titleKey: 'step1.title',
      descriptionKey: 'step1.description'
    },
    {
      number: '2',
      titleKey: 'step2.title',
      descriptionKey: 'step2.description'
    },
    {
      number: '3',
      titleKey: 'step3.title',
      descriptionKey: 'step3.description'
    }
  ];

  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{t('howItWorks.title')}</h2>
          <p className={styles.subtitle}>{t('howItWorks.subtitle')}</p>
        </div>
        
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{t(`howItWorks.${step.titleKey}`)}</h3>
              <p className={styles.stepDescription}>{t(`howItWorks.${step.descriptionKey}`)}</p>
              {index < steps.length - 1 && <div className={styles.stepConnector}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;