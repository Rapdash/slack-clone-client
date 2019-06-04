import React from 'react';

import styles from './styles.module.css';

const HomePage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Flak Chat</h1>
    <h3 className={styles.subtitle}>
      A Slack Clone built by Frederick {'"'}Fritz{'"'} Johnson
    </h3>
  </div>
);

export default HomePage;
