import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import VerificationScreen from './screens/VerificationScreen';
import LoginScreen from './screens/LoginScreen';
import PostListScreen from './screens/PostListScreen';
import PostScreen from './screens/PostScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import { logout } from './actions/userActions/logoutActions';
import UserRoute from './routes/UserRoute';

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="appName" to="/">
              <i className="fa fa-spinner fa-spin"></i>
                Homepage
              <i className="fa fa-spinner fa-spin"></i>
            </Link>
          </div>
          <div>
            <Link className="home" to="/posts">
            <img src={process.env.PUBLIC_URL + '/HappySocialMedia_Logo.png'} id='homeLogo' alt='Homepage Logo'/> 
            </Link>
          </div>
          {userInfo ? (
            <div className="dropdown">
            <Link to="#">
              {userInfo.username} <i className="fa fa-caret-down"></i>{' '}
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/posts">View Posts</Link>
              </li>
              <li>
                <Link to="/create">Create Posts</Link>
              </li>
              <li>
                <Link to="#logout" onClick={logoutHandler}>
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
          ) : (
            <div className="rightHeader">  
            <Link to="/login">Login</Link>        
            <Link to="/register">Register</Link>
          </div>
          )}
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/verification" component={VerificationScreen}></Route>
          <Route path="/login" component={LoginScreen}></Route>
          <Route path="/posts" component={PostListScreen}></Route>
          <Route path="/post/:id" component={PostScreen} exact></Route>
          <UserRoute path="/create" component={CreatePostScreen}></UserRoute>
        </main>
        <footer className="row center">Happy Social Media Application - All right reserved for Team LocalHost</footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
