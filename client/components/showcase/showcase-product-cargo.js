import React from 'react';
import IconTruck from '../icons/icon-truck';
import styles from '../../styles/Showcase.module.css';

export default function ProductCargo({ cargo }) {
  return (
    <div className={styles.showcaseCargo}>
      {cargo && cargo.isFree && (
        <>
          <IconTruck />
          <span> {cargo.text} </span>
        </>
      )}
    </div>
  );
}
