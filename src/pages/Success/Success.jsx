import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Success.module.css';

const Success = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className={styles.successPage}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <span className="material-symbols-outlined">check_circle</span>
          </div>
          <h1 className={styles.title}>Registration Successful!</h1>
          <p className={styles.message}>
            Thank you for joining Quantum AI Trading. Your account has been created successfully.
            We've sent a confirmation email to your inbox.
          </p>
          <div className={styles.buttons}>
            <Link to="/" className={styles.primaryButton}>
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;