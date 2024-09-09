import React from 'react';
import hero from "../Images/hero.png";
import Faq from "../Pages/Faq";
import Layout from "../Pages/Layout";
import Localities from "../Pages/Localities";
import OfficeSolutions from "../Pages/OfficeSoluctions";
import TestiMonals from "../Pages/TestiMonals";
import '../Styles/Home.css';
import OffersSection from './OfferSection';

function Home() {
  return (
    <>
    <div className="home-content">
      <div className="home-content__banner">
        <img src={hero} alt="Coworking Space" className="banner__image" />
        <div className="banner__overlay">
          <h1>Book coworking day pass in Balewadi</h1>
          <div className="filters">
            <select className="filters__dropdown">
              <option>Day Pass</option>
              <option>Mitting room</option>
              <option>Crowing space</option>
              <option>Virtual Office</option>
            </select>
            <select type="date" className="filters__dropdown">
              <option value="">Today 06 sep</option>
              <option><input type="date" name="date" id="date" /></option>
            </select>
            <select className="filters__dropdown">
              <option>Pune</option>
              <option>Ahemdabad</option>
              <option>Hydrabad</option>
              <option>Nashik</option>
            </select>
            <select className="filters__dropdown">
              <option>Balewadi</option>
              {/* Add more options if needed */}
            </select>
            <button className="filters__button">View Workspaces</button>
          </div>
        </div>
      </div>
    </div>
    <OffersSection />
    <div className="works1"></div>
    <Layout/>
    <div className="works"></div>
    <OfficeSolutions />
    
    <div className="works1"></div>
    <TestiMonals />
    <div className="works1"></div>
    <Localities />
    
    <div className="works1"></div>
    <Faq />
    </>
  );
}

export default Home;
