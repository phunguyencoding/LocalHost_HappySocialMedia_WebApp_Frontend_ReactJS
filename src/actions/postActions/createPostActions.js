import Axios from 'axios';
import {
    POST_CREATE_REQUEST,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,
} from '../../constants/postConstants';

export const createPost = (postName, description) => async (dispatch, getState) => {
    dispatch({ type: POST_CREATE_REQUEST,});
    const {
        userLogin: { userInfo },
      } = getState();
    try {
      const { data } = await Axios.post('/api/posts', {
        postName,
        description,
      },
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.authenticationToken}` },
      });
      dispatch({ type: POST_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: POST_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };