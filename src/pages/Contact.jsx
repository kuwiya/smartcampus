// src/pages/Contact.js
import React from 'react';
import '../styles/Contact.css';
import bgImage from '../assets/class_alt1.png';

const Contact = () => {
  return (
    <div
      className="contact-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="contact-overlay">
        <div className="contact-info-container glass">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you!</p>
          <div className="contact-details">
            <p><strong>📞 Phone:</strong> +234 803 188 7935</p>
            <p><strong>💬 WhatsApp:</strong> 
              <a
                href="https://wa.me/2348123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              > +234 812 345 6789</a>
            </p>
            <p><strong>✉️ Email:</strong> smartcampus@kuwiya.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
