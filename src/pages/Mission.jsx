// src/pages/Mission.js
import React from 'react';
import '../styles/Mission.css';

const Mission = () => {
  return (
    <div className="mission-page">
      <div className="mission-hero">
        <h1>Our Mission</h1>
        <p>Empowering education through technology and innovation.</p>
      </div>

      <div className="mission-content glass">
        <h2>Our Goal</h2>
        <p>
          SmartCampus is committed to making education smarter, more engaging, and accessible for every learner.
        </p>

        <h2>How We Achieve It</h2>
        <ul>
          <li>🚀 Integrating AI to personalize learning experiences</li>
          <li>💬 Connecting teachers, students, and parents seamlessly</li>
          <li>📊 Providing data-driven insights to improve outcomes</li>
          <li>🌍 Building digital campuses that transcend boundaries</li>
        </ul>
      </div>
    </div>
  );
};

export default Mission;
