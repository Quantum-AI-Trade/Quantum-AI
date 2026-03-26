import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';
import GOOGLE_SCRIPT_URL from '../../config/googleSheets';

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    tradingLevel: 'beginner',
    termsAccepted: false
  });

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (name === 'password') {
      calculatePasswordStrength(value);
    }
    setSubmitStatus({ show: false, success: false, message: '' });
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++;
    if (password.match(/[0-9]+/)) strength++;
    if (password.match(/[$@#&!]+/)) strength++;
    setPasswordStrength(strength);
  };

  const getStrengthText = () => {
    const texts = [t('hero.form.veryWeak'), t('hero.form.weak'), t('hero.form.fair'), t('hero.form.good'), t('hero.form.strong')];
    return texts[passwordStrength - 1] || t('hero.form.veryWeak');
  };

  const getStrengthColor = () => {
    const colors = ['#f87171', '#fbbf24', '#fbbf24', '#4ade80', '#4ade80'];
    return colors[passwordStrength - 1] || '#f87171';
  };

  const saveToGoogleSheet = async (data) => {
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: 'hero_section'
        })
      });

      return { success: true };
    } catch (error) {
      console.error('Error saving to Google Sheet:', error);
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      setSubmitStatus({
        show: true,
        success: false,
        message: t('hero.form.termsError')
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ show: false, success: false, message: '' });

    const sheetData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      tradingLevel: formData.tradingLevel,
      termsAccepted: formData.termsAccepted ? 'Yes' : 'No',
      signupDate: new Date().toLocaleDateString(),
      signupTime: new Date().toLocaleTimeString()
    };

    const result = await saveToGoogleSheet(sheetData);
    
    if (result.success) {
      setSubmitStatus({
        show: true,
        success: true,
        message: t('hero.form.success')
      });
      
      setFormData({
        fullName: '',
        email: '',
        password: '',
        tradingLevel: 'beginner',
        termsAccepted: false
      });
      setPasswordStrength(0);
      
      setTimeout(() => {
        navigate('/Success');
      }, 2000);
    } else {
      setSubmitStatus({
        show: true,
        success: false,
        message: t('hero.form.error')
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow}></div>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Side: Content */}
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.pulse}></span>
              {t('hero.badge')}
            </div>
            
            <h1 className={styles.title}>
              <span className={styles.gradientText}>{t('hero.title')}</span>
            </h1>
            
            <p className={styles.description}>{t('hero.description1')}</p>
            <p className={styles.description}>{t('hero.description2')}</p>
            <p className={styles.description}>{t('hero.description3')}</p>
            <p className={styles.description}>{t('hero.description4')}</p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{t('hero.automatedTrades')}</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{t('hero.quantumComputing')}</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{t('hero.uptime')}</span>
              </div>
            </div>

            <p className={styles.disclaimer}>{t('hero.disclaimer')}</p>
          </div>

          {/* Right Side: Sign Up Form */}
          <div className={styles.heroForm}>
            <div className={styles.formGlow}></div>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>{t('hero.form.title')}</h2>
                <p className={styles.formSubtitle}>{t('hero.form.subtitle')}</p>
              </div>

              {submitStatus.show && (
                <div className={`${styles.statusMessage} ${submitStatus.success ? styles.successMessage : styles.errorMessage}`}>
                  <span className="material-symbols-outlined">
                    {submitStatus.success ? 'check_circle' : 'error'}
                  </span>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <span className="material-symbols-outlined">person</span>
                    {t('hero.form.fullName')}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t('hero.form.fullName')}
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <span className="material-symbols-outlined">email</span>
                    {t('hero.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('hero.form.email')}
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <span className="material-symbols-outlined">lock</span>
                    {t('hero.form.password')}
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder={t('hero.form.password')}
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />
                  
                  {formData.password && (
                    <div className={styles.passwordStrength}>
                      <div className={styles.strengthMeter}>
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`${styles.strengthBar} ${level <= passwordStrength ? styles.active : ''}`}
                            style={level <= passwordStrength ? { backgroundColor: getStrengthColor() } : {}}
                          ></div>
                        ))}
                      </div>
                      <span className={styles.strengthText} style={{ color: getStrengthColor() }}>
                        {getStrengthText()}
                      </span>
                    </div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <span className="material-symbols-outlined">analytics</span>
                    {t('hero.form.tradingLevel')}
                  </label>
                  <select
                    name="tradingLevel"
                    value={formData.tradingLevel}
                    onChange={handleChange}
                    className={styles.select}
                    disabled={isSubmitting}
                  >
                    <option value="beginner">{t('hero.form.beginner')}</option>
                    <option value="intermediate">{t('hero.form.intermediate')}</option>
                    <option value="expert">{t('hero.form.expert')}</option>
                  </select>
                </div>

                <div className={styles.checkboxGroup}>
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    id="terms"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className={styles.checkbox}
                    required
                    disabled={isSubmitting}
                  />
                  <label htmlFor="terms" className={styles.checkboxLabel}>
                    {t('hero.form.terms')} <a href="#/terms" className={styles.link}>{t('hero.form.termsLink')}</a>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner}></span>
                      {t('hero.form.creating')}
                    </>
                  ) : (
                    t('hero.form.button')
                  )}
                </button>
              </form>

              <div className={styles.signupStats}>
                <div className={styles.statItem}>
                  <span className={`${styles.statIcon} material-symbols-outlined`}>group</span>
                  <div className={styles.statInfo}>
                    <span className={styles.statNumber}>109</span>
                    <span className={styles.statLabel}>{t('hero.form.usersJoined')}</span>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <span className={`${styles.statIcon} material-symbols-outlined`}>sync_alt</span>
                  <div className={styles.statInfo}>
                    <span className={styles.statLabel}>{t('hero.form.withdraw')}</span>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <span className={`${styles.statIcon} material-symbols-outlined`}>encrypted</span>
                  <div className={styles.statInfo}>
                    <span className={styles.statLabel}>{t('hero.form.secure')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;