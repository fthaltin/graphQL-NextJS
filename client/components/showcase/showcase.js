import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Showcase.module.css';

export default function Showcase({ children }) {
  return (
    <div className={styles.showcase}>
      <Link href="/product">
        <a>{children}</a>
      </Link>
    </div>
  );
}
