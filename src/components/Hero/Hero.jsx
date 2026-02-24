import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow}></div>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.pulse}></span>
              NEXT-GEN ALGORITHMIC TRADING
            </div>
            
            <h1 className={styles.title}>
              Master the Markets with{' '}
              <span className={styles.gradientText}>Quantum AI</span>
            </h1>
            
            <p className={styles.description}>
              Experience the future of fintech with high-precision automated trading. 
              Our neural networks analyze millions of data points to execute perfect trades 24/7.
            </p>
            
            <div className={styles.buttons}>
              <button 
                onClick={() => navigate('/register')} 
                className={styles.primaryButton}
              >
                Start Now <span className="material-symbols-outlined">trending_up</span>
              </button>
            </div>
          </div>
          
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDod2PLkmohxS7GUSfOPvwd0wjsmB39S2cz4NivSMU3xRMeKH12Euz6lM3lmCH06EkAY176WXSaWcwTaH05a7tJybz2lgpVmaCDF3hRsYAVYrP19A5UjEG5LmCokWRGQcwbRoSNInP0xdIKap8o5f3yFbnRm9okn5vUK-_71AaOVV-wf05YIo0AEEaooldFFuyPA4i_wlgkESLhQ7KYhxheMQf5r28-TSgQgY6rmcxp1gzmt88WxnMDlOvb1m1shicjXZgZwwvOGKE"
                alt="AI trading dashboard"
                className={styles.image}
              />
            </div>
            
            <div className={styles.statsCard}>
              <div className={styles.statsIcon}>
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <div>
                <p className={styles.statsLabel}>Market Speed</p>
                <p className={styles.statsValue}>0.02ms Execution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;