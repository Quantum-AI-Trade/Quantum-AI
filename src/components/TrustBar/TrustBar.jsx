import React from 'react';
import styles from './TrustBar.module.css';

const TrustBar = () => {
  const exchanges = [
    { icon: 'currency_bitcoin', name: 'BINANCE' },
    { icon: 'account_balance', name: 'COINBASE' },
    { icon: 'token', name: 'KRAKEN' },
    { icon: 'shield_moon', name: 'BYBIT' },
    { icon: 'auto_graph', name: 'OKX' }
  ];

  return (
    <section className={styles.trustBar}>
      <div className="container">
        <p className={styles.title}>Trusted by traders worldwide</p>
        <div className={styles.logos}>
          {exchanges.map((exchange, index) => (
            <div key={index} className={styles.logoItem}>
              <span className="material-symbols-outlined">{exchange.icon}</span>
              {exchange.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;