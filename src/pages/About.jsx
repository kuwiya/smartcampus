import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About SmartCampus</h1>
        <p>Transforming schools into fully connected, intelligent digital campuses.</p>
      </div>

      <div className="about-content glass">
        <h2>Who We Are</h2>
        <p>
          SmartCampus is a next generation platform that transforms traditional schools into connected, 
          digital learning communities. Powered by AI, automation, and data-driven insights, it unites students, teachers, 
          and parents, offering virtual classrooms, real-time progress tracking, streamlined administration, 
          and enhanced parent engagement — all designed to support student growth and school efficiency.
        </p>

        <h2>Our Vision</h2>
        <p>
          To create intelligent, future ready campuses that foster creativity, 
          innovation, and continuous learning — empowering schools across Nigeria and Africa to prepare students for a 
          digital, global future.
        </p>
      </div>
    </div>
  );
};

export default About;
