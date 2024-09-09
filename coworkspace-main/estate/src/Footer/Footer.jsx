import React from 'react';
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import logo from "../assets/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
   <>
   <div className="footer">
    <div className="foot">
      <div className="foot1">
        <img src={logo} alt="" />
        <p href="">Carries</p>
        <p href="">Blog</p>
        <p href="">Term & condition</p>
        <p href="">Privacy policy</p>
        <p href="">Refund</p>
        <p href="">FAQs</p>
        <p href="">About us</p>
        <p href="">Contact us</p>
      </div>
      <div className="foot1">
        <h2>Products</h2>
        <p href="">Day Pass</p>
        <p href="">Crowing Space</p>
        <p href="">Manged Office</p>
        <p href="">Team Plan</p>
        <p href="">Virtual Office</p>
      </div>
      <div className="foot1">
        <h2>mHQ Community</h2>
        <p href="">Community Benifits</p>
        <p href="">Reopning Office</p>
        <p href="">Refar & Earn</p>
      </div>
      <div className="foot1">
        <h2>Join the newsletter</h2>
        <input type="text" placeholder='Enter Your Email' />
        <input type="button" value="Subscribe" className='button'/>
        <br />
        <a href="">Feel Free to Contact with us</a>
        <p>+9189764553</p>
      </div>
    </div>
    <div className="touch">
      <p>Keep in Touch</p>
      <img src={icon1} alt="" />
      <img src={icon2} alt="" />
      <img src={icon3} alt="" />
      <img src={icon4} alt="" />
    </div>
   </div>
   </>
  )
}

export default Footer