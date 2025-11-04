// src/pages/Careers.js
import React from 'react';
import '../styles/Careers.css';

const Careers = () => {
  const openings = [
    { title: 'Frontend Developer', location: 'Remote', type: 'Full-Time' },
    { title: 'Backend Engineer', location: 'Lagos, Nigeria', type: 'Hybrid' },
    { title: 'UI/UX Designer', location: 'Remote', type: 'Contract' }
  ];

  return (
    <div className="careers-page">
      <div className="careers-hero">
        <h1>Join the SmartCampus Team</h1>
        <p>Be part of the future of education in Africa.</p>
      </div>

      <div className="careers-list glass">
        {openings.map((job, index) => (
          <div key={index} className="career-card">
            <h3>{job.title}</h3>
            <p>{job.location} • {job.type}</p>
            <button className="btn-primary">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
