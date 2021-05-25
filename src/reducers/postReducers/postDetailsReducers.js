import {
    POST_DETAILS_REQUEST,
    POST_DETAILS_SUCCESS,
    POST_DETAILS_FAIL,
} from '../../constants/postConstants';

export const postDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case POST_DETAILS_REQUEST:
        return { loading: true };
      case POST_DETAILS_SUCCESS:
        return { loading: false, comments: action.payload };
      case POST_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };