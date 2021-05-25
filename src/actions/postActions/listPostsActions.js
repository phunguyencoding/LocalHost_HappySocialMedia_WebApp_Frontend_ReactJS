import Axios from 'axios';
import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAIL,
} from '../../constants/postConstants';

export const listPosts = () => async (dispatch) => {
    dispatch({
      type: POST_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get('/api/posts');
      dispatch({ type: POST_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: POST_LIST_FAIL, payload: error.message });
    }
  };