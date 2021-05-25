import Axios from 'axios';
import {
    POST_COMMENT_CREATE_REQUEST,
    POST_COMMENT_CREATE_SUCCESS,
    POST_COMMENT_CREATE_FAIL,
} from '../../constants/postConstants';

export const createComment = (postId, text) => async (
    dispatch,
    getState
  ) => {
    dispatch({ type: POST_COMMENT_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        '/api/comments',
        {postId, text},
        {
          headers: { Authorization: `Bearer ${userInfo.authenticationToken}` },
        }
      );
      dispatch({
        type: POST_COMMENT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: POST_COMMENT_CREATE_FAIL, payload: message });
    }
  };
  