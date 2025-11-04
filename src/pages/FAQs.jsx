// src/pages/FAQs.js
import React, { useState } from 'react';
import '../styles/FAQs.css';

const FAQs = () => {
  const [active, setActive] = useState(null);
  const toggleFAQ = (i) => setActive(active === i ? null : i);

  const faqs = [
    { q: 'What is SmartCampus?', a: 'SmartCampus is a futuristic education platform that connects students, teachers, and parents in one digital ecosystem.' },
    { q: 'How can I join SmartCampus?', a: 'Simply sign up as a student, teacher, or parent to begin using our digital campus tools.' },
    { q: 'Is SmartCampus free?', a: 'Yes! Basic access is free, but premium features are available for schools.' },
    { q: 'Can I access SmartCampus on mobile?', a: 'Absolutely! Our web app is fully responsive and mobile-friendly.' }
  ];

  return (
    <div className="faq-page">
      <div className="faq-container glass">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${active === i ? 'active' : ''}`}
              onClick={() => toggleFAQ(i)}
            >
              <div className="faq-question">{faq.q}</div>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
