// Navbar.js

import React from 'react';
import '../css/NavBar.css';
import logoImage from '../images/logo.png'; // Adjust the path based on your project structure

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo-image" />
        <span className="logo-text">gosimracing.nl</span>
      </div>
      <div className="nav-items">
        <div>Home</div>
        <div>Webshop</div>
        <div>Over ons</div>
        <div>Contact</div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="account-options">Account options</div>
    </div>
  );
};

export default Navbar;
