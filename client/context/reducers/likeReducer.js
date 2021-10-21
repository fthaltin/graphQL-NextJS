import * as Actions from '../actions/likeActions';
export function likeReducer(state, action) {
  switch (action.type) {
    case Actions.SET_LIKED:
      return { ...state, liked: [...state.liked, action.payload] };
    case Actions.SET_UNLIKED:
      return {
        ...state,
        liked: [
          ...state.liked.filter(
            (item) => item.productId !== action.payload.productId,
          ),
        ],
      };
    default:
      return state;
  }
}
