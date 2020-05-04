import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';
function Title() {
  return (
    <div className="Title">
      <header>
        <h1>SFPOPS</h1>
        <div className="Title-Subtitle">
          <h3>San Francisco Privately Owned Public Open Spaces</h3>
          <div className="navLinkBar">
            <NavLink
              className="navLinks"
              activeClassName="nav-link-active"
              to="/"
            >
              List
            </NavLink>
            <NavLink
              className="navLinks"
              activeClassName="nav-link-active"
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}

export { Title };
