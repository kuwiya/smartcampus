// src/pages/PrivacyPolicy.js
import React from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <div className="policy-container glass">
        <h1 className="ph1" >Privacy Policy</h1>
        <p className="pp" >At SmartCampus, we respect your privacy and are committed to protecting your data.</p>

        <section>
          <h2 className="ph2" >1. Information We Collect</h2>
          <p className="pp" >We collect only necessary information such as name, email, and school-related data to enhance your learning experience.</p>
        </section>

        <section>
          <h2 className="ph2" >2. How We Use Your Data</h2>
          <p className="pp" >Your information helps us improve SmartCampus services, personalize content, and enhance your educational journey.</p>
        </section>

        <section>
          <h2 className="ph2" >3. Your Rights</h2>
          <p className="pp" >You can update or delete your account information anytime under account settings.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
