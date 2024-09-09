// src/App.js
import React from 'react';
import etsy from "../assets/etsy.svg";
import khelfie from "../assets/khelfie.svg";
import anirudh from "../Images/anirudh.jpg";
import himanshu from "../Images/himanshu.jpg";
import niraj from "../Images/niraj.jpg";
import spinny from "../Images/spinny.webp";
import "../Styles/TestiMonals.css";

function TestiMonals() {
  const testimonials = [
    {
      logo: spinny, // Replace with actual image URL or path
      quote: 'myHQ stitches together all key aspects of a productive workspace and networking opportunities. myHQ has helped us find the perfect office space for our team. Would strongly recommend myHQ to growing stage companies and startups.',
      author: 'Niraj Singh',
      position: 'Founder & CEO',
      company: 'Spinny',
      image: anirudh, // Replace with actual image URL or path
    },
    {
      logo: etsy,
      quote: 'myHQ helped us move into our new office that was custom-built with beautiful interiors. What impressed us the most was their inherent focus on quality service to help people perform at their peak capacity.',
      author: 'Himanshu Wardhan',
      position: 'India Managing Director',
      company: 'Etsy',
      image: himanshu,
    },
    {
      logo: khelfie,
      quote: 'I\'d recommend myHQ to freelancers, small and medium sized startups. The workspaces are lively and efficient, and oh, you won\'t believe their price-point.',
      author: 'Anirudh Arun',
      position: 'Co-Founder',
      company: 'Khelfie',
      image: niraj,
    },
  ];

  return (
    <div className="App">
      <h2>A word from our community</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.logo} alt={`${testimonial.company} Logo`} className="company-logo" />
            <p className="quote">{testimonial.quote}</p>
            <div className="profile">
              <img src={testimonial.image} alt={testimonial.author} className="profile-image" />
              <div className="profile-details">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}, {testimonial.company}</p>
                <p>Coworking Space</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestiMonals;
