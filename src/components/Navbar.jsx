import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Add scroll event listener to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="nav-brand">
          <Globe size={24} />
          <span>IP Finder</span>
        </Link>
        <ul className="nav-links">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/my-ip' ? 'active' : ''}>
            <Link to="/my-ip">My IP</Link>
          </li>
          <li className={location.pathname === '/location-ip' ? 'active' : ''}>
            <Link to="/location-ip">Find IP</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;