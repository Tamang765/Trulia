import React, { useState } from "react";
import { FiFacebook } from "react-icons/fi";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="container footer mt-20">
      <div className="real-estate">
        <h3>Real Estate Markets</h3>
        <div className="list">
          <a href="">AlaskaReal Estate</a>
          <a href="">AlaskaReal Estate</a>
          <a href="">AlaskaReal Estate</a>
          <span id="more">
          <a href="">AlaskaReal Estate</a>
          <a href="">AlaskaReal Estate</a>
          <a href="">AlaskaReal Estate</a></span> 
          <button id="morebtn">More</button> 
        </div>
      </div>

      <div className="popular-searches">
        <h3>Real Estate Markets</h3>
        <div className="list">
          <a href="">AlaskaReal Estate</a>
          <a href="">AlaskaReal Estate</a>
          <a href="">AlaskaReal Estate</a>
        </div>
      </div>

      <div className="explore-trulia-footer">
        <h3>Explore Trulia</h3>
        <div className="list">
          <a href="">
            <FiFacebook />
            AlaskaReal Estate
          </a>
          <a href=""><FiFacebook />AlaskaReal Estate</a>
          <a href=""><FiFacebook />AlaskaReal Estate</a>
        </div>
      </div>
      <div className="for-professionals">
      <h3>For Professionals</h3>
        <div className="list">
          
          <a href="">AlaskaReal Estate</a>
          <a href="">AlaskaReal Estate</a>
          <a href="">AlaskaReal Estate</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
