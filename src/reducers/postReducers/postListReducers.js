import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAIL,
} from '../../constants/postConstants';

export const postListReducer = (
    state = { loading: true, posts: [] },
    action
  ) => {
    switch (action.type) {
      case POST_LIST_REQUEST:
        return { loading: true };
      case POST_LIST_SUCCESS:
        return {
          loading: false,
          posts: action.payload,
        };
      case POST_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };