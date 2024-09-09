// OfficeSolutions.js
import React from 'react';
import offer2 from "../Images/offer2.png";
import offer3 from "../Images/offer3.png";
import offer4 from "../Images/offer4.png";
import "../Styles/OfficeSoluctions.css";

const OfficeSolutions = () => {
  const solutions = [
    {
      title: 'Meeting Room',
      description: 'Book by-the-hour or by the day\nMeeting, conference and training rooms for teams\nModern amenities for a seamless experience\nIdeal for remote & hybrid teams',
      link: 'Explore Meeting Room',
      discount: 'Get 50% OFF on your 1st booking using FIRSTMR50',
      image: offer2, // Replace with your image paths
    },
    {
      title: 'Coworking Space',
      description: 'Full-time offices for teams of all sizes\nDedicated seats & private cabins\nFully-equipped coworking spaces\nIdeal for individual or small teams',
      link: 'Explore Coworking Space',
      discount: 'Get a free consulting professional if looking for 6+ desks',
      image: offer3, // Replace with your image paths
    },
    {
      title: 'Virtual Office',
      description: 'Professional address & business services\nCompany registration & GST solutions for new businesses\nNo physical office costs or high monthly rents',
      link: 'Explore Virtual Office',
      discount: 'Money Back Guarantee, in case of GST/ Company registration rejection',
      image: offer4, // Replace with your image paths
    },
  ];

  return (
    <div className="office-solutions">
      {solutions.map((solution, index) => (
        <div key={index} className="solution-card">
          <img src={solution.image} alt={solution.title} className="solution-image" />
          <div className="solution-content">
            <h3>{solution.title}</h3>
            <p>{solution.description.split('\n').map((line, idx) => (
              <span key={idx}>{line}<br /></span>
            ))}</p>
            <a href="#" className="solution-link">{solution.link} →</a>
            <div className="solution-discount">{solution.discount}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfficeSolutions;
