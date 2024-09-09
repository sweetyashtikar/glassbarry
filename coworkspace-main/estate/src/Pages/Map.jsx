// Map.js
import React from 'react';
import "../Styles/Map.css";

const Map = () => {
  return (
    <div className="map">
      <div className="map-container">
        <iframe
           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30276.37464815354!2d73.81975039999999!3d18.4588737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725704498076!5m2!1sen!2sin"
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Custom Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
