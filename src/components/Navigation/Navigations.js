import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import '../Navigation/Navigations.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className="nav">
      <NavLink className="navLink" to="/" exact="true">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="navLink" to="/contacts" exact="true">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
