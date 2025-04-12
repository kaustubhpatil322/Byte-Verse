import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">RasaSetu</div>

      <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><a href="#mood-selector" onClick={toggleMenu}>Mood Selector</a></li>
        <li><a href="#journal" onClick={toggleMenu}>Journal</a></li>
        <li><a href="#content-feed" onClick={toggleMenu}>Feed</a></li>
        <li><a href="#express" onClick={toggleMenu}>Express Mode</a></li>
        <li><a href="#uplift" onClick={toggleMenu}>Uplift</a></li>
        <div className="mobile-auth">
          <button className="btn login">Login</button>
          <button className="btn signup">Sign Up</button>
        </div>
      </div>

      <div className="navbar-auth desktop-auth">
        <button className="btn login">Login</button>
        <button className="btn signup">Sign Up</button>
      </div>

      <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
