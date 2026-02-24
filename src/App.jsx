import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Favicon from './components/Favicon';
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
import Registration from './pages/Registration/Registration';
import Terms from './pages/Terms/Terms';
import styles from './App.module.css';
import Success from './pages/Success/Success';
// Component to handle scrolling to sections
const ScrollHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a hash in the URL (for sections)
    if (location.hash && location.hash.startsWith('#')) {
      const hash = location.hash.substring(1); // Remove the # symbol
      
      // Check if it's a section hash (not a route)
      if (!hash.includes('/') && hash !== '') {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
    
    // Check for scroll state from navigation
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL with hash without triggering navigation
          window.location.hash = sectionId;
        }
      }, 100);
      
      // Clear the state
      navigate(location.pathname, { replace: true, state: {} });
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
    <div className={styles.app}>
      <Favicon />
      <Navbar />
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/success" element={<Success />} />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;