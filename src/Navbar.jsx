// Navbar.jsx

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar ">
      {/* Left side items */}
      <div className="navbar-left">
        <a href="#home">Air X</a>
        <a href="#about">Lexo Z</a>
        <a href="#services">Gravity 9</a>
      </div>

      {/* Center logo */}
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" />
      </div>

      {/* Right side items */}
      <div className="navbar-right">
        <a href="#shop">Shop</a>
        <a href="#account">Account</a>
        <a href="#menu">
        <i class='bx bx-menu'></i>
      
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
