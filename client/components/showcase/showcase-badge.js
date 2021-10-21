import React from 'react';
import styles from '../../styles/Showcase.module.css';
import Like from '../like';

export default function ShowcaseBadges({ product }) {
  return (
    <div className={styles.showcaseBadges}>
      <Like product={product} />
    </div>
  );
}
