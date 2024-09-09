import React, { useRef } from 'react';
import offer1 from "../Images/offer1.jpg";
import '../Styles/OfferSection.css';

const offers = [
  {
    title: 'Get 50% OFF',
    description: 'On your first desk booking at WEWORK, AWFIS or OYO Innov8 using coupon FIRSTHQ50',
    image: offer1,
    backgroundColor: '#5AC8FA',
  },
  {
    title: 'BUY 2 GET 1 FREE',
    description: 'Book for more than 2 dates, get 1 date FREE. Use coupon BUY2GET1. *Offer valid on WeWork, Awfis & Innov8',
    image: offer1,
    backgroundColor: '#013243',
  },
  {
    title: 'Get 20% OFF',
    description: 'On Wednesday bookings at OYO INNOV8 using coupon MIDWEEK20',
    image: offer1,
    backgroundColor: '#8B572A',
  },
  {
    title: 'Get 20% OFF',
    description: 'On Thu and Fri bookings at WEWORK using coupon GETWW20',
    image: offer1,
    backgroundColor: '#00A6A6',
  },
];

const OffersSection = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300, // Adjust the value for desired scroll distance
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300, // Adjust the value for desired scroll distance
      behavior: 'smooth',
    });
  };

  return (
    <div className="offers-section">
      <h2>Get Exciting Offers on Your Bookings</h2>
      <div className="offers-navigation">
        <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
        <div className="offers-container" ref={containerRef}>
          {offers.map((offer, index) => (
            <div
              className="offer-card"
              style={{ backgroundColor: offer.backgroundColor }}
              key={index}
            >
              <div className="offer-content">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </div>
              <div className="offer-image">
                <img src={offer.image} alt={offer.title} />
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default OffersSection;
