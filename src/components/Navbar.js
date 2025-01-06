import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={() => setIsOpen(false)}>Prashant Pathak</Link>
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" className={isActive('/')} onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/words" className={isActive('/words')} onClick={() => setIsOpen(false)}>Words</Link>
        <Link to="/about" className={isActive('/about')} onClick={() => setIsOpen(false)}>About Me</Link>
        <a href="/Prashant Pathak Product Designer.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Resume</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
