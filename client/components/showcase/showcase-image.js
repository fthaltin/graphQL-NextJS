import React from 'react';
import styles from '../../styles/Showcase.module.css';

export default function ShowcaseImage({ image }) {
  return (
    <div className={styles.showcaseImage}>
      <img src={image.url} alt={image.alt ? image.alt : ''} />
    </div>
  );
}
