import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CTA.module.css';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <div className={styles.backgroundPattern}></div>
          
          <h2 className={styles.title}>
            Start your AI trading <br />journey today
          </h2>
          
          <p className={styles.description}>
            Join thousands of smart investors who have automated their financial future with Quantum AI.
          </p>
          
          <div className={styles.buttons}>
            <button 
              onClick={() => navigate('/register')} 
              className={styles.primaryButton}
            >
              Create Free Account
            </button>
          </div>
          
          <p className={styles.disclaimer}>No credit card required</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;