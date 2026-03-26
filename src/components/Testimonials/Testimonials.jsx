import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      rating: 5,
      text: "The AI analysis is frighteningly accurate. It caught the market pivot 3 hours before it happened. Best investment I've made.",
      name: "David Chen",
      role: "Quantitative Analyst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&auto=format"
    },
    {
      rating: 5,
      text: "As a beginner, I was scared of trading. Quantum AI's simple interface and automated bots took the stress away entirely.",
      name: "Sarah Jenkins",
      role: "Retail Investor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&auto=format"
    },
    {
      rating: 4.5,
      text: "The execution speed is unmatched. I've tried other bots, but Quantum's low-latency connection actually delivers results.",
      name: "Michael Ross",
      role: "Full-time Crypto Trader",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&auto=format"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className={`material-symbols-outlined ${styles.starFilled}`}>
          star
        </span>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className={`material-symbols-outlined ${styles.starHalf}`}>
          star_half
        </span>
      );
    }

    return stars;
  };

  return (
    <section className={styles.testimonials} id="reviews">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{t('testimonials.title')}</h2>
          <p className={styles.subtitle}>{t('testimonials.subtitle')}</p>
        </div>
        
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.rating}>
                {renderStars(testimonial.rating)}
                <span className={styles.ratingValue}>{testimonial.rating}</span>
              </div>
              <p className={styles.quote}>"{testimonial.text}"</p>
              <div className={styles.author}>
                <div className={styles.authorImageWrapper}>
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={styles.authorImage}
                    loading="lazy"
                  />
                  <div className={styles.imageGlow}></div>
                </div>
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{testimonial.name}</p>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;