// src/pages/About.js
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About SmartCampus</h1>
        <p>Revolutionizing how schools connect, learn, and grow.</p>
      </div>

      <div className="about-content glass">
        <h2>Who We Are</h2>
        <p>
          SmartCampus is the next-generation digital platform for schools.
          We bring together students, teachers, and parents into a single connected ecosystem powered by AI, automation, and analytics.
        </p>

        <h2>Our Vision</h2>
        <p>
          To create intelligent campuses that inspire creativity, innovation, and continuous learning across Nigeria and beyond.
        </p>
      </div>
    </div>
  );
};

export default About;
