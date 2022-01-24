import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import AboutPage from '../AboutPage/AboutPage';
import Today from '../Today/Today';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
        <h2 className="nav-title">BAL</h2>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <LogOutButton className="navLink" />
          
            <Link className="navLink" to="/about">
              About
            </Link>

            <Link className="navLink" to="/today">
              Today
            </Link>

          </>
        )}

      </div>
    </div>
  );
}

export default Nav;
