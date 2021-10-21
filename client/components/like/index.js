import React, { useContext } from 'react';
import { Context } from '../../context/state';
import IconHeart from '../icons/icon-heart';
import * as Actions from '../../context/actions/likeActions';

export default function Like({ product }) {
  const { state, dispatch } = useContext(Context);

  function onLiked(e) {
    e.preventDefault();
    const isLiked = getIsLiked();
    dispatch({
      type: !isLiked ? Actions.SET_LIKED : Actions.SET_UNLIKED,
      payload: product,
    });
  }

  function getIsLiked() {
    if (
      state &&
      state.liked &&
      Array.isArray(state.liked) &&
      state.liked.length > 0
    ) {
      return state.liked.some((item) => item.productId === product.productId);
    }

    return false;
  }

  return (
    <div onClick={onLiked}>
      <IconHeart isLiked={getIsLiked()} />
    </div>
  );
}
