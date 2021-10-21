import React from 'react';
import styles from '../../styles/Showcase.module.css';

export default function ProductPrice({ price }) {
  return <div className={styles.showcasePrice}>{price}</div>;
}
