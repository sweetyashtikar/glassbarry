import React from 'react';
import local2 from "../Images/local2.jpg";
import offer1 from "../Images/offer1.jpg";
import "../Styles/Results.css";

function Results() {
  return (
    <div className="results">
      <div className="result-item">
        <img src={offer1} alt="Geo Workspace" />
        <h4>Geo Workspace</h4>
        <p>Pimpri-Chinchwad, Pune | 1.65 Kms away</p>
        <p>Commute Friendly | Break Rooms | +2 more</p>
        <button className="book-button">Book Desk - 300 credits/day</button>
      </div>
      <div className="result-item">
        <img src={local2} alt="Oyo Workflo" />
        <h4>Oyo Workflo - Icon Tower</h4>
        <p>Baner, Pune | 1.5 Kms away</p>
        <p>Break Rooms | Parking Available</p>
        <button className="book-button">Book Desk - 300 credits/day</button>
      </div>
    </div>
  );
}

export default Results;
