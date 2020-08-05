import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER } from './types';

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};
export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=5'
      );
      const json = await response.json();
      setTimeout(() => {
        dispatch({ type: FETCH_POSTS, payload: json });
        dispatch(hideLoader());
      }, 500);
    } catch (e) {
      dispatch(hideLoader());
    }
  };
};
