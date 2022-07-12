
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

const Nav = () => {
  return (
      <div className="navbar">
          <div className="logo">
              <h1>TakeNotes</h1>
          </div>
          <div className="navlinks">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/Contact">Contact</Link>
          </div>
      </div>
  )
}

export default Nav;