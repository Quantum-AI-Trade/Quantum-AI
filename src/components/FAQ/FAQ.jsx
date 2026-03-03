import React, { useState, useEffect, useRef } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const detailsRefs = useRef([]);

  // Mouse move effect for glow on FAQ items
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

  // Animation for particles
  useEffect(() => {
    const particles = document.querySelectorAll(`.${styles.particle}`);
    particles.forEach((particle, index) => {
      particle.style.animationDelay = `${index * 2}s`;
    });
  }, []);

  const faqs = [
    {
      question: 'Is my capital safe with Quantum AI?',
      answer: 'Yes. We never have direct access to your funds. The platform connects to your exchange via API keys with restricted withdrawal permissions. Your assets stay in your own exchange wallet.'
    },
    {
      question: 'What is the minimum investment required?',
      answer: 'There is no minimum to use the platform itself, but most exchanges require at least $50-$100 to begin executing trades effectively.'
    },
    {
      question: 'Do I need prior trading experience?',
      answer: 'Not at all. While experienced traders can use our advanced tools, beginners can start with our "AI-Smart" pre-configured bots that require zero technical knowledge.'
    },
    {
      question: 'Which exchanges are supported?',
      answer: 'We currently support Binance, Coinbase, Kraken, OKX, and Bybit. More exchanges are being added monthly.'
    }
  ];

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        
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
                {faq.question}
                <span className={`material-symbols-outlined ${styles.summaryIcon}`}>
                  expand_more
                </span>
              </summary>
              <div className={styles.answer}>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Floating particles for background animation */}
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