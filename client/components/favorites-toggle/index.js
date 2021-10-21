import React from 'react';

import styles from '../../styles/Home.module.css';

export default function FavoritesToggle({ isActive, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={styles.myFavorites}
      style={{
        background: isActive ? 'red' : 'white',
        color: isActive ? 'white' : 'black',
      }}
    >
      Beğendiklerim
    </div>
  );
}
