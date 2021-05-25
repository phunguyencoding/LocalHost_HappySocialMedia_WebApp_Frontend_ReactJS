import Axios from 'axios';
import {
    POST_DETAILS_REQUEST,
    POST_DETAILS_SUCCESS,
    POST_DETAILS_FAIL,
} from '../../constants/postConstants';

export const detailsPost = (postId) => async (dispatch) => {
    dispatch({ type: POST_DETAILS_REQUEST, payload: postId });
    try {
      const { data } = await Axios.get(`/api/comments/by-post/${postId}`);
      dispatch({ type: POST_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: POST_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };