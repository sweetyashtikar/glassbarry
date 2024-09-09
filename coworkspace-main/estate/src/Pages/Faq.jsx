// src/FAQ.js
import React, { useState } from 'react';
import "../Styles/Faq.css";

const faqs = [
  {
    question: 'What is myHQ Flexi Pass?',
    answer: 'The myHQ Flexi Pass allows you to access any coworking space for a day without any long-term commitments.',
  },
  {
    question: 'How do I book a flexi pass for a day?',
    answer: 'You can book a flexi pass by visiting our website, selecting your preferred location, and making a payment.',
  },
  {
    question: 'How do I find workspace for a day near me in Pune?',
    answer: 'Use our location search tool on the website to find available workspaces near you.',
  },
  {
    question: 'What amenities do I get when I book a day pass?',
    answer: 'Amenities include high-speed internet, refreshments, printing services, and access to common areas.',
  },
  {
    question: 'Am I guaranteed a desk at the coworking space?',
    answer: 'Yes, a desk is guaranteed upon booking your pass.',
  },
  {
    question: 'Can I also access meeting rooms with my booking?',
    answer: 'Meeting rooms can be booked separately as per availability and are not included in the standard pass.',
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
