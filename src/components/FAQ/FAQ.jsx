import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './FAQ.module.css';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);
  const detailsRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e, index) => {
      const details = detailsRefs.current[index];
      if (details) {
        const rect = details.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        details.style.setProperty('--x', `${x}%`);
        details.style.setProperty('--y', `${y}%`);
      }
    };

    detailsRefs.current.forEach((details, index) => {
      if (details) {
        details.addEventListener('mousemove', (e) => handleMouseMove(e, index));
      }
    });

    return () => {
      detailsRefs.current.forEach((details, index) => {
        if (details) {
          details.removeEventListener('mousemove', (e) => handleMouseMove(e, index));
        }
      });
    };
  }, []);

  const faqs = [
    { questionKey: 'q1', answerKey: 'a1' },
    { questionKey: 'q2', answerKey: 'a2' },
    { questionKey: 'q3', answerKey: 'a3' },
    { questionKey: 'q4', answerKey: 'a4' }
  ];

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <h2 className={styles.title}>{t('faq.title')}</h2>
        
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className={styles.details}
              open={index === openIndex}
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex(openIndex === index ? -1 : index);
              }}
              ref={el => detailsRefs.current[index] = el}
            >
              <summary className={styles.summary}>
                {t(`faq.${faq.questionKey}`)}
                <span className={`material-symbols-outlined ${styles.summaryIcon}`}>
                  expand_more
                </span>
              </summary>
              <div className={styles.answer}>
                {t(`faq.${faq.answerKey}`)}
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className={styles.particle} style={{ left: '5%', top: '10%' }}></div>
      <div className={styles.particle} style={{ left: '15%', top: '30%' }}></div>
      <div className={styles.particle} style={{ left: '25%', top: '60%' }}></div>
      <div className={styles.particle} style={{ left: '35%', top: '80%' }}></div>
      <div className={styles.particle} style={{ left: '45%', top: '20%' }}></div>
      <div className={styles.particle} style={{ left: '55%', top: '45%' }}></div>
      <div className={styles.particle} style={{ left: '65%', top: '70%' }}></div>
      <div className={styles.particle} style={{ left: '75%', top: '15%' }}></div>
      <div className={styles.particle} style={{ left: '85%', top: '50%' }}></div>
      <div className={styles.particle} style={{ left: '95%', top: '85%' }}></div>
    </section>
  );
};

export default FAQ;