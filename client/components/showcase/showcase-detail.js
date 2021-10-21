import React from 'react';
import styles from '../../styles/Showcase.module.css';

export default function ShowcaseDetail({ children }) {
  return <div className={styles.showcaseDetail}>{children}</div>;
}
