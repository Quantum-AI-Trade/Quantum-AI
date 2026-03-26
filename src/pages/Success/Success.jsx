import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Success.module.css';

const Success = () => {
  const { t } = useTranslation();

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
          <h1 className={styles.title}>{t('success.title')}</h1>
          <p className={styles.message}>{t('success.message')}</p>
          <div className={styles.buttons}>
            <Link to="/" className={styles.primaryButton}>
              {t('success.buttons.homepage')}
            </Link>
            <Link to="/login" className={styles.secondaryButton}>
              {t('success.buttons.login')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;