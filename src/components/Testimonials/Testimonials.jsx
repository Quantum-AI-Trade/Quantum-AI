import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "The AI analysis is frighteningly accurate. It caught the market pivot 3 hours before it happened. Best investment I've made.",
      name: "David Chen",
      role: "Quantitative Analyst",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbA7s8H45wKYOeldw_oTb-k2QRncfOCQD-RMdXbAlpfw5UXqYKUke8fKDjOBXSFshl13PkqjtJwfb84TwEzOLs0Dlv6hs1IMrsUzJTagICJT5JaTLc__kKhCTWf3lVcK2BD-HU7sCwZYpepjHNHs5b4C5iV5Njk5KHRPhDaorGRM8sNKjs48763Y5cxMA-_GcumFwaC21OxMDEZ5ltn-G-nGURnao88LXl_SS5jYJIsrBn6LDEP-03YhU7a0BmUF2tZoV8FtebN_w"
    },
    {
      rating: 5,
      text: "As a beginner, I was scared of trading. Quantum AI's simple interface and automated bots took the stress away entirely.",
      name: "Sarah Jenkins",
      role: "Retail Investor",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLnJGQTQTKen51umoK94AUqRB2uU0NYEf7guIydOmPEaWpYVJG47pXV2ojiZ0IkrTinj6cUlITWMT7P-Nbk_H1slMPIqav-cA4Dr9h9DxpfkWvSecPHw9ba58AhroIctyAPT-yG0WPjkgbrR_Uz2UCw3pB0hiyynvzDHjW-kUskodb8EBWnVzx48PnclpiEBcsVEehVaJvGYFhc4IgpHylqhlG_OvhCwQi2dTXgZ4FoZkQPFUUaQCLU584GqGXG9SDHsaazAC2QLE"
    },
    {
      rating: 4.5,
      text: "The execution speed is unmatched. I've tried other bots, but Quantum's low-latency connection actually delivers results.",
      name: "Michael Ross",
      role: "Full-time Crypto Trader",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIffF0q8xjn0JIjkZwgAeqCuQe5dnRdmr2j1tfVISGygP6HYgAuBDrFTIQf7iB16f5AEsv3Vpgup5rvW0PYJAmKbxcZI_YNMjUHJW31yNga8iPvKceqLPqnUBvBZyYuSj0og690TKWyHUu1QEo6JTMgjNgyU2L4R_GCqDXlQIYIMiLBgnw_q_uZyiARIF2ScaJ1bsucWme-UusGvpGNLxqzsEQryS3SOs1r14i5gACVYNQ_0dgGbGdxV9iInwedcUB1i7y-ShT1KQ"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`star-${i}`} className="material-symbols-outlined fill-current">star</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half-star" className="material-symbols-outlined">star_half</span>);
    }

    return stars;
  };

  return (
    <section className={styles.testimonials} id="reviews">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Traders Say</h2>
          <p className={styles.subtitle}>Join 50,000+ active users globally.</p>
        </div>
        
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.rating}>
                {renderStars(testimonial.rating)}
              </div>
              <p className={styles.quote}>"{testimonial.text}"</p>
              <div className={styles.author}>
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.authorImage}
                />
                <div>
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