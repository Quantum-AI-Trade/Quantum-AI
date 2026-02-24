import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Registration.module.css';
import GOOGLE_SCRIPT_URL from '../config/googleSheets';

const Registration = () => {
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
  
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

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
    const texts = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    return texts[passwordStrength - 1] || 'Very Weak';
  };

  const saveToGoogleSheet = async (data) => {
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      // With no-cors mode, we can't read the response
      // So we assume success if no error is thrown
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
        message: 'Please accept the Terms & Conditions to continue.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ show: false, success: false, message: '' });

    // Prepare data for Google Sheets (remove sensitive fields if needed)
    const sheetData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password, // Consider hashing or removing
      tradingLevel: formData.tradingLevel,
      termsAccepted: formData.termsAccepted ? 'Yes' : 'No'
    };

    const result = await saveToGoogleSheet(sheetData);
    
    if (result.success) {
      setSubmitStatus({
        show: true,
        success: true,
        message: 'Registration successful! Redirecting...'
      });
      
      // Clear form
      setFormData({
        fullName: '',
        email: '',
        password: '',
        tradingLevel: 'beginner',
        termsAccepted: false
      });
      
      // Redirect to success page or home after 2 seconds
      setTimeout(() => {
        navigate('/success');
      }, 2000);
    } else {
      setSubmitStatus({
        show: true,
        success: false,
        message: 'Registration failed. Please try again.'
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className={styles.registrationPage}>
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Left Side: Value Propositions */}
          <div className={styles.leftSection}>
            <div className={styles.header}>
              <h1 className={styles.title}>
                Start your <span className={styles.titleAccent}>AI-powered</span> trading journey.
              </h1>
              <p className={styles.subtitle}>
                Access institutional-grade insights and execute trades with precision using our advanced machine learning models.
              </p>
            </div>

            <div className={styles.features}>
              {/* Feature 1 */}
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <div>
                  <h3 className={styles.featureTitle}>Join 50k+ traders</h3>
                  <p className={styles.featureDescription}>
                    Become part of a global community of high-performance retail investors.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <h3 className={styles.featureTitle}>No hidden fees</h3>
                  <p className={styles.featureDescription}>
                    Transparent pricing with zero commission on major trading pairs.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <span className="material-symbols-outlined">notifications_active</span>
                </div>
                <div>
                  <h3 className={styles.featureTitle}>Real-time alerts</h3>
                  <p className={styles.featureDescription}>
                    Instant notifications for market shifts and AI-detected entry points.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Registration Card */}
          <div className={styles.rightSection}>
            <div className={styles.glowEffect}></div>
            <div className={styles.registrationCard}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>Create Free Account</h2>
                <p className={styles.cardSubtitle}>Fill in the details below to get started.</p>
              </div>

              {/* Status Message */}
              {submitStatus.show && (
                <div className={`${styles.statusMessage} ${submitStatus.success ? styles.successMessage : styles.errorMessage}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.passwordHeader}>
                    <label className={styles.label}>Password</label>
                    {formData.password && (
                      <span className={styles.strengthText}>Strength: {getStrengthText()}</span>
                    )}
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />
                  
                  {/* Strength Meter */}
                  {formData.password && (
                    <div className={styles.strengthMeter}>
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`${styles.strengthBar} ${level <= passwordStrength ? styles.active : ''}`}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Preferred Trading Level</label>
                  <select
                    name="tradingLevel"
                    value={formData.tradingLevel}
                    onChange={handleChange}
                    className={styles.select}
                    disabled={isSubmitting}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
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
                    I agree to the <Link to="/terms" className={styles.link}>Terms & Conditions</Link>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Create Free Account'}
                </button>
              </form>

              
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.copyright}>© 2024 AI Trader Inc. Advanced Trading Analytics.</p>
          <div className={styles.footerLinks}>
            <Link to="/privacy" className={styles.footerLink}>Privacy Policy</Link>
            <Link to="/security" className={styles.footerLink}>Security</Link>
            <Link to="/risk" className={styles.footerLink}>Risk Disclosure</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Registration;