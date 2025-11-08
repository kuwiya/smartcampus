import React, { useState } from 'react';
import '../styles/FAQs.css';

const FAQs = () => {
  const [active, setActive] = useState(null);
  const toggleFAQ = (i) => setActive(active === i ? null : i);

  const faqs = [
    { 
      q: 'What is SmartCampus?', 
      a: 'SmartCampus is a next-generation platform that transforms traditional school websites into fully connected, intelligent digital campuses. It unites students, teachers, and parents in one ecosystem powered by AI, automation, and data-driven insights.' 
    },
    { 
      q: 'How does SmartCampus help my school?', 
      a: 'We help schools upgrade from simple websites to dynamic online campuses with virtual classrooms, real-time academic tracking, streamlined administration, and enhanced parent engagement.' 
    },
    { 
      q: 'Who can use SmartCampus?', 
      a: 'SmartCampus is designed for students, teachers, parents, and school administrators — anyone involved in the learning process can benefit from our platform.' 
    },
    { 
      q: 'Is SmartCampus mobile-friendly?', 
      a: 'Yes! Our platform is fully responsive, allowing students, teachers, and parents to access the campus from any device — desktop, tablet, or mobile.' 
    },
    { 
      q: 'Does SmartCampus use AI?', 
      a: 'Absolutely! SmartCampus integrates AI to personalize learning experiences, provide insights for teachers, and enhance student engagement.' 
    },
    { 
      q: 'How do we get started?', 
      a: 'Getting started is simple: Call +234 803 188 7934 or email smartcampus@kuwiya.com to schedule a demo and learn how SmartCampus can transform your school.' 
    }
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
