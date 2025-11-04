// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">⚡</div>
          <span className="logo-text">SmartCampus</span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/students" 
            className={`nav-link ${location.pathname === '/students' ? 'active' : ''}`}
          >
            Students
          </Link>
          <Link 
            to="/teachers" 
            className={`nav-link ${location.pathname === '/teachers' ? 'active' : ''}`}
          >
            Teachers
          </Link>
          <Link 
            to="/parents" 
            className={`nav-link ${location.pathname === '/parents' ? 'active' : ''}`}
          >
            Parents
          </Link>
          {/* <Link 
            to="/login" 
            className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
          >
            Login
          </Link> */}
        </div>

        <div className="nav-auth">
          {user ? (
            <div className="user-menu">
              <span className="welcome-text">Welcome, {user.name}</span>
              <button 
                onClick={() => setUser(null)}
                className="btn-outline"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          )}
        </div>

        <div 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;