// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and About */}
        <div className="footer-section">
          <div className="footer-logo">
            <div className="logo-icon">⚡</div>
            <span className="logo-text">SmartCampus</span>
          </div>
          <p className="footer-description">
            Reimagining Nigerian education with smart technology, AI-driven learning, and digital transformation for every school.
          </p>
          <div className="social-links">
            <span>📘</span>
            <span>🐦</span>
            <span>📷</span>
            <span>💼</span>
          </div>
        </div>

        {/* Platform Section */}
        <div className="footer-section">
          <h4>Platform</h4>
          <ul>
            <li><Link to="/students">For Students</Link></li>
            <li><Link to="/teachers">For Teachers</Link></li>
            <li><Link to="/parents">For Parents</Link></li>
            <li><Link to="/login">For Schools</Link></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/mission">Our Mission</Link></li>
            {/* <li><Link to="/careers">Careers</Link></li> */}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h4>FAQ</h4>
          <ul>
            {/* <li><Link to="/helpcenter">Help Center</Link></li> */}
            {/* <li><Link to="/privacypolicy">Privacy Policy</Link></li> */}
            {/* <li><Link to="/termsofservice">Terms of Service</Link></li> */}
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p>📍 Lagos, Nigeria</p>
            <p>📞 +234 803 188 7935</p>
            <p>💬<a
                href="https://wa.me/2348123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              > +234 812 345 6789</a></p>
            <p>✉️ smartcampus@kuwiya.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} SmartCampus Nigeria. All rights reserved. | 
          Empowering the Future of African Education by @kuwiya
        </p>
      </div>
    </footer>
  );
};

export default Footer;
