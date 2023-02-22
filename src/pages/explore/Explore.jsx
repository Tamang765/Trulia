import React, { Component } from "react";
import Slider from "react-slick";
import Explorehouse from "../explorehouse/Explorehouse";

const Explore = () => {

    
  return (
    <container>
        <div className="explore text-center">
            <h2>Explore homes on Trulia</h2>
            <p>Take a deep dive and browse homes for sale, original neighborhood photos, resident <br /> reviews and local insights to find what is right for you.</p>
        </div>
        <div className="explorehouse">
          <Explorehouse/>
        </div>
    </container>
  )
}


export default Explore