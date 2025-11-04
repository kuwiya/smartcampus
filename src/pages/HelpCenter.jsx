// src/pages/HelpCenter.js
import React from 'react';
import '../styles/HelpCenter.css';

const HelpCenter = () => {
  return (
    <div className="help-center-page">
      <div className="help-center-container glass">
        <h1>Help Center</h1>
        <p>Find answers, guides, and support for your SmartCampus experience.</p>

        <div className="help-sections">
          <div className="help-card">
            <h3>👩‍🎓 Students</h3>
            <p>Learn how to join classes, submit assignments, and track progress.</p>
          </div>
          <div className="help-card">
            <h3>👨‍🏫 Teachers</h3>
            <p>Discover tools for creating lessons, grading, and interacting with students.</p>
          </div>
          <div className="help-card">
            <h3>👨‍👩‍👧 Parents</h3>
            <p>Stay connected with your child’s learning journey in real time.</p>
          </div>
          <div className="help-card">
            <h3>🛠️ Technical Support</h3>
            <p>Need help? Contact our support team or visit our troubleshooting guide.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
