import {
    POST_COMMENT_CREATE_REQUEST,
    POST_COMMENT_CREATE_SUCCESS,
    POST_COMMENT_CREATE_FAIL,
    POST_COMMENT_CREATE_RESET
} from '../../constants/postConstants';

export const commentCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case POST_COMMENT_CREATE_REQUEST:
        return { loading: true };
      case POST_COMMENT_CREATE_SUCCESS:
        return { loading: false, success: true, comment: action.payload };
      case POST_COMMENT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case POST_COMMENT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };