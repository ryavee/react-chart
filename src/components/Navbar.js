import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">CNAPP Dashboard</div>
      <div className="navbar-buttons">
        <button className="navbar-add-widget">
          Add Widget +
        </button>
        <button className="navbar-reload">
          ↻
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
