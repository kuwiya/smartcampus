// src/pages/TermsOfService.js
import React from 'react';
import '../styles/TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-page">
      <div className="terms-container glass">
        <h1 className="ph1" >Terms of Service</h1>
        <p className="pp" >Welcome to SmartCampus! By using our platform, you agree to the following terms.</p>

        <section>
          <h2 className="ph2" >1. Use of Services</h2>
          <p className="pp" >Our services are designed for students, teachers, and parents for educational purposes only.</p>
        </section>

        <section>
          <h2 className="ph2" >2. Account Responsibility</h2>
          <p className="pp" >You are responsible for maintaining the confidentiality of your login credentials.</p>
        </section>

        <section>
          <h2 className="ph2" >3. Termination</h2>
          <p className="pp" >We reserve the right to suspend accounts that violate these terms or misuse our platform.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
