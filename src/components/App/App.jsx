import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Today from '../Today/Today';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        {/* If a user is logged in, show nav bar */}
        {user.id &&
          <Nav />
        } 
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}

          <Redirect exact from="/" to="/today" />

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the ProfilePage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
        
          {/* TODO uncomment when profile page is built */}
          {/* logged in shows ProfilePage, else shows LoginPage */}
          {/* <ProtectedRoute exact path="/profile">
            <ProfilePage/>
          </ProtectedRoute> */}

          {/* logged in shows Today page, else shows LoginPage */}
          <ProtectedRoute exact path="/today">
            <Today />
          </ProtectedRoute>


          <Route exact path="/login">
            {user.id ?
              // If the user is already logged in, redirect to the /today page
              <Redirect to="/today" /> :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route exact path="/registration">
            {user.id ?
              // If the user is already logged in, redirect them to the /today page
              <Redirect to="/today" /> :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>

      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
