import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={toggleMenu}><div className="navbar-logo">RasaSetu</div></Link>

      <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/mood" onClick={toggleMenu}>Mood Selector</Link></li> {/* ✅ UPDATED */}
        <li><Link to="/express-mode" onClick={toggleMenu}>Express Mode</Link></li>   {/* ✅ UPDATED */}
        <li><Link to="/journal" onClick={toggleMenu}>Journal</Link></li>


        <div className="mobile-auth">
          <Link to="/login" className="btn login">Login</Link>
          <Link to="/signup" className="btn signup">Sign Up</Link>
        </div>
      </div>

      <div className="navbar-auth desktop-auth">
        <Link to="/login" className="btn login">Login</Link>
        <Link to="/signup" className="btn signup">Sign Up</Link>
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
