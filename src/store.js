import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { userRegisterReducer } from './reducers/userReducers/registerReducers';
import { userLoginReducer } from './reducers/userReducers/loginReducers';
import { postListReducer } from './reducers/postReducers/postListReducers';
import { postCreateReducer } from './reducers/postReducers/postCreateReducers';
import { postDetailsReducer } from './reducers/postReducers/postDetailsReducers';
import { commentCreateReducer } from './reducers/postReducers/commentCreateReducers';

const initialState = {
  userLogin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
};

const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    postList: postListReducer,
    postCreate: postCreateReducer,
    postDetails: postDetailsReducer,
    commentCreate: commentCreateReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
