import React, { useContext } from 'react';
import { Context } from '../../context/state';
import styles from '../../styles/Home.module.css';
import IconHeart from '../icons/icon-heart';

export default function LikeCount({ length }) {
  const { state } = useContext(Context);
  return (
    <div className={styles.likeCount}>
      <IconHeart isLiked={true} size={2} />
      <span style={{ marginLeft: 10 }}>{length} Ürün </span>
    </div>
  );
}
