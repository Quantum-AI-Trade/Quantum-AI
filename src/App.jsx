import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Favicon from './components/Favicon';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustBar from './components/TrustBar/TrustBar';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import DashboardPreview from './components/DashboardPreview/DashboardPreview';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Terms from './pages/Terms/Terms';
import Success from './pages/Success/Success';
import styles from './App.module.css';

// Component to handle scrolling to sections
const ScrollHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.location.hash = sectionId;
        }
      }, 100);
      navigate(location.pathname, { replace: true, state: {} });
    }
    
    if (window.location.hash && window.location.hash !== '#') {
      const hash = window.location.hash.substring(1);
      if (!hash.includes('/') && hash !== '') {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [location, navigate]);

  return null;
};

// Home page component
const HomePage = () => (
  <main>
    <Hero />
    <TrustBar />
    <Features />
    <HowItWorks />
    <DashboardPreview />
    <Testimonials />
    <FAQ />
    <CTA />
  </main>
);

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className={styles.app}>
          <Favicon />
          <Navbar />
          <ScrollToTop />
          <ScrollHandler />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;