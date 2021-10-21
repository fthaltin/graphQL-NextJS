import React from 'react';
import styles from '../../styles/Showcase.module.css';

export default function ProductsContainer({ children, title }) {
  return (
    <section className={styles.showcaseContainer}>
      <div className={styles.containerHeader}>
        <h2>{title}</h2>
      </div>
      <div className={styles.containerBody}>{children}</div>
    </section>
  );
}
