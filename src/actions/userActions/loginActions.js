import Axios from 'axios';
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
} from '../../constants/userConstants';

export const login = (username, password) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { username, password } });
    try {
      const { data } = await Axios.post('/api/auth/login', { username, password });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };