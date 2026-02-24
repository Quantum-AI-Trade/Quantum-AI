import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Is my capital safe with Quantum AI?',
      answer: 'Yes. We never have direct access to your funds. The platform connects to your exchange via API keys with restricted withdrawal permissions. Your assets stay in your own exchange wallet.'
    },
    {
      question: 'What is the minimum investment required?',
      answer: 'There is no minimum to use the platform itself, but most exchanges require at least $50-$100 to begin executing trades effectively.'
    },
    {
      question: 'Do I need prior trading experience?',
      answer: 'Not at all. While experienced traders can use our advanced tools, beginners can start with our "AI-Smart" pre-configured bots that require zero technical knowledge.'
    },
    {
      question: 'Which exchanges are supported?',
      answer: 'We currently support Binance, Coinbase, Kraken, OKX, and Bybit. More exchanges are being added monthly.'
    }
  ];

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className={styles.details}
              open={index === openIndex}
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex(openIndex === index ? -1 : index);
              }}
            >
              <summary className={styles.summary}>
                {faq.question}
                <span className={`material-symbols-outlined ${styles.summaryIcon}`}>
                  expand_more
                </span>
              </summary>
              <div className={styles.answer}>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;