import React from "react";
import {HiLocationMarker} from "react-icons/hi"
import {MdLocationCity} from "react-icons/md"
import {BsSuitHeartFill} from "react-icons/bs"
import "./Discoverplace.scss"
const Discoverplace = () => {
  return (
    <div>
      <div className="container text-center discoverplace">
        <div className="text-center pt-8">
          <h4 className="d-flex">discover <HiLocationMarker className="location-icon"/> a place <MdLocationCity className="city-icon"/>  you'll love <BsSuitHeartFill className="love-icon"/> to live</h4>
        </div>
      </div>
    </div>
  );
};

export default Discoverplace;
