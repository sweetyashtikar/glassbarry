// src/Localities.js
import React from 'react';
import local1 from "../Images/local1.jpg";
import local2 from "../Images/local2.jpg";
import local3 from "../Images/local3.jpg";
import local4 from "../Images/local4.jpg";
import local5 from "../Images/local5.jpg";
import local6 from "../Images/local6.jpg";
import "../Styles/Localities.css";

const localities = [
  {
    image: local1, 
    title: 'Coworking Spaces in Baner',
    link: 'Explore 13+ options',
  },
  {
    image: local2,
    title: 'Coworking Spaces in Kharadi',
    link: 'Explore 6+ options',
  },
  {
    image: local3,
    title: 'Coworking Spaces in Kalyani Nagar',
    link: 'Explore 7+ options',
  },
  {
    image: local4,
    title: 'Coworking Spaces in Viman Nagar',
    link: 'Explore 5+ options',
  },
  {
    image: local5,
    title: 'Coworking Spaces in Yerawada',
    link: 'Explore 8+ options',
  },
  {
    image: local6,
    title: 'Coworking Spaces in Hadapsar',
    link: 'Explore 5+ options',
  },
];

function Localities() {
  return (
    <div className="localities">
      <h2>Explore More Localities in Pune</h2>
      <div className="localities-list">
        {localities.map((locality, index) => (
          <div key={index} className="locality-card">
            <img src={locality.image} alt={locality.title} className="locality-image" />
            <h3>{locality.title}</h3>
            <a href="#" className="locality-link">{locality.link} →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Localities;
