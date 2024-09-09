import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
       <Link to="/"><img src={logo} alt="myHQ Logo" /></Link> 
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search location or workspace in Pune" />
      </div>
      <div className="header__actions">
        <button className="header__requirement">Share requirement</button>
        <Link to="login"><button className="header__login">Login / Sign Up</button></Link>
      </div>
    </header>
  );
}

export default Header;
