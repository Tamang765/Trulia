import React, { Component, useEffect, useState } from "react";
import { AiFillUnlock, AiOutlineCalendar } from "react-icons/ai";
import {
  FaBed,
  FaMobileAlt,
  FaParking,
  FaTemperatureHigh,
} from "react-icons/fa";
import { MdOutdoorGrill } from "react-icons/md";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import ImageList from "../explorehomesection/homeimages/Images";
import Newlist from "../newlylisted/Newlist";
import Newlylisted from "../newlylisted/Newlylisted";
import "./Housedetails.scss";
import { Localsays } from "./Localsays";
import Pricetable from "./Pricetable";

export const Imageitem = () => {
  const { category } = useParams();
  const filterimg = ImageList.filter((item) => item.category === category);
  return (
    <>
      <div className=" row housedetailsimg container-fluid d-flex justify-content-center">
        {filterimg[0].activethreeimg.map((image, index) => (
          <div className="imgdetail" key={index}>
            <img src={image} alt="" />
            <h2>{image.posted}</h2>
          </div>
        ))}
      </div>
    </>
  );
};
export const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253827.34701148184!2d-0.24168100384161664!3d51.528771841017085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM1DDuDEyJzU2LjgiTiAwwrA1Myc0Ni4xIlc!5e0!3m2!1sen!2sus!4v1617154347313!5m2!1sen!2sus"
        width="85%"
        height="250"
        loading="lazy"
      />
    </div>
  );
};

export const Imagehousedetail = ({
  interiorfeatures1,
  interiorfeatures2,
  interiorfeatures3,
  interiorfeatures4,
}) => {
  const { category } = useParams();
  const filterimg = ImageList.filter((item) => item.category === category);
  const [activeBtnIndex, setActiveBtnIndex] = useState(1);
  useEffect(() => {
    const header = document.getElementById("navBtn");
    const btns = header.getElementsByClassName("btn");
    const handleClick = (index) => {
      setActiveBtnIndex(index);
    };
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", () => handleClick(i));
    }
    return () => {
      for (let i = 0; i < btns.length; i++) {
        btns[i].removeEventListener("click", () => handleClick(i));
      }
    };
  }, []);
  return (
    <>
      <div className="row container exacthouse-detail d-flex">
        <div className="details-house-map">
          <div className="house-details">
            {filterimg.map((item, index) => (
              <>
                <div className="details d-flex gap-10" key={index}>
                  <h1>{item.posted}</h1>
                  <div className="d-flex house-info">
                    <div className="d-flex house-price-place">
                      <span className="pr-10">{item.place} </span>

                      <span className="pl-20">{item.price}</span>
                    </div>
                    <div className="house-address d-flex gap-10">
                      {item.location}
                      <span>Est. Mortgage $7,431</span>
                    </div>
                    <div className=" d-flex gap-6">
                      <div className="d-flex gap-2">
                        <FaBed className="icon" />
                        {item.bed}
                      </div>
                      <div className="d-flex gap-2">
                        <AiFillUnlock className="icon" />
                        {item.lock}
                      </div>
                      <div className="d-flex gap-2">
                        <VscTriangleLeft className="icon" />
                        {item.sqft}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div className="local-info">
              <div id="navBtn">
                <h4 className="pb-3">Local Information</h4>
                <div
                  className={`btn ${activeBtnIndex === 0 ? "active" : ""}`}
                  onClick={() => setActiveBtnIndex(0)}
                >
                  Map
                </div>
                <div
                  className={`btn ${activeBtnIndex === 1 ? "active" : ""}`}
                  onClick={() => setActiveBtnIndex(1)}
                >
                  Schools
                </div>
                <div
                  className={`btn ${activeBtnIndex === 2 ? "active" : ""}`}
                  onClick={() => setActiveBtnIndex(2)}
                >
                  Shop & Eat
                </div>
              </div>
              <div className="map pt-3">
                <Map />
                <p>This is map you can browse through this</p>
              </div>
              <div className="description">
                <h4>Description</h4>
                <p>
                  Luxury new construction located right near all the desired
                  destinations that Midtown has to offer! Walk to Ponce City
                  Market, Krog Street Market, The Beltline, and so much more!
                  This unit is move-in ready, with gorgeous, unbeatable, views
                  of Midtown Atlanta's skyline. Each unit has hardwood flooring
                  throughout all the 4 levels. On the main level you will find a
                  gourmet kitchen equipped with quartz countertops, a T-shaped
                  island with extra space for dining, luxurious gold finishes,
                  stainless steel appliances, a walk-in pantry, and a large
                  island overlooking the open-concept dining & living area with
                  tons of natural light pouring in from all the windows. The
                  third level features a spacious primary suite completed with
                  dual quartz vanities, gold finishes, a soaking tub, and a
                  large stand alone shower in the bathroom, as well as, two
                  walk-in closets. The secondary bedroom is finished with an
                  ensuite bathroom and walk-in closet. On the fourth level, you
                  can entertain your guests with a posh loft space that has
                  walk-out balconies on both sides of the home. You will WOW
                  your guests with the views! The terrace level has an
                  additional bedroom with another walk-in closet and full
                  bathroom, perfect for housing guests! On the terrace level,
                  you will also find a 2-car garage plus additional space for
                  storage, bikes, or a small car. Please note that there is
                  storage space on each level that aligns for future elevator
                  plans if desired. A must see in person!
                </p>
              </div>
              <div>
                <h3>Open House</h3>
                <div className="open-house d-flex gap-10 pt-3">
                  <h4>Sunday,February 19</h4>
                  <span>2:00 PM to 4:00 PM</span>
                  <AiOutlineCalendar className="calender" />
                </div>
              </div>
            </div>
          </div>
          <div className="schedule">
            <p>Request a tour as early as </p>
            <h3>Today at 11:00 AM</h3>
            <div className="btn btn-schedule">Schedule a Tour</div>
            <div className="btn btn-request">Schedule a Tour</div>
          </div>
        </div>
      </div>
      <div className="highlights mx-10">
        <div className="highlight-home">
          <h4>Home Highlights</h4>
          <div className="icon-detail d-flex">
            <div className="highlight">
              <span className="d-flex">
                <FaParking />
                <span>Parking</span> 3 car Garage
              </span>
              <span className="d-flex">
                <MdOutdoorGrill />
                <span>Parking</span> Yes
              </span>
              <span className="d-flex">
                <FaTemperatureHigh />
                <span>Parking</span> Heating & Cooling
              </span>
            </div>
            <div className="highlight">
              <span className="d-flex">
                <FaMobileAlt />
                <span>Parking</span> $20/Monthly
              </span>
              <span className="d-flex">
                <VscTriangleRight />
                <span>Parking</span> $7261
              </span>
              <span className="d-flex">
                <FaTemperatureHigh />
                <span>Parking</span> NO info
              </span>
            </div>
          </div>
        </div>
        <div className="updates">
          <span>Last check for updates: about 3 hours ago</span>
          <p>Listing Provided by: Keller Williams North Atlanta</p>
          <span>Paulina Muez</span>
          <span>Source: FMLS GA, MLS#7176927</span>
        </div>
        <Housefeatures />
        <Pricetable />
        <div className=" similar-house newlist">
          <span className="similar-home">Similar Homes You May Like</span>
          <Newlylisted />
        </div>
        <div className="newlist my-10">
          <span className="similar-home">
            New Listings near 1960 Tall Tree Dr
          </span>
          <Newlylisted />
        </div>
        <div className="property-taxes">
          <h4>Property Taxes and Assessment</h4>
          <div className="row">
            <table className="yearly-tax">
              <tbody>
                <tr>
                  <th>Year</th>
                  <td>123</td>
                </tr>
                <tr>
                  <th>Tax</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Assessment</th>
                  <td>1244445</td>
                </tr>
              </tbody>
            </table>
            <div className="row"></div>
          </div>
        </div>
        <Localsays />
      </div>
    </>
  );
};

export default class Housedetails extends Component {
  render() {
    return (
      <div className="container housedetail">
        <Imageitem />
        <div className="share d-flex">
          <button>Share</button>
          <button>Save</button>
        </div>
        <Imagehousedetail />
      </div>
    );
  }
}

function MyComponent({ content1, content2, content3, content4, content5 }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedContent = showMore
    ? [content1, content2, content3, content4, content5]
    : [content1, content2];

  return (
    <div>
      {displayedContent.map((content, index) => (
        <div key={index}>{content}</div>
      ))}
      {showMore && (
        <div className="btn show" onClick={toggleShowMore}>
          Show less
        </div>
      )}
      {!showMore && (
        <div className="btn show" onClick={toggleShowMore}>
          Show more
        </div>
      )}
    </div>
  );
}

export function Housefeatures() {
  return (
    <div className="house-features">
      <MyComponent
        content1={
          <div className="row interiorfeatures">
            <div className="heading">Interior Features</div>
            <div className="interior-details">
              <span>Interir Details</span>
              <ul className="deep-details d-flex">
                <li>Basement:NOne</li>
                <li>Basement:NOne</li>
                <li>Basement:NOne</li>
              </ul>
            </div>
          </div>
        }
        content2={
          <div className="row interiorfeatures">
            <div className="heading">Interior Features</div>
            <div className="interior-details">
              <span>Interir Details</span>
              <ul className="deep-details d-flex">
                <li>Basement:NOne</li>
                <li>Basement:NOne</li>
                <li>Basement:NOne</li>
              </ul>
            </div>
          </div>
        }
        content3={
          <div className="row interiorfeatures">
            <div className="heading">Interior Features</div>
            <div className="interior-details">
              <span>Interir Details</span>
              <ul className="deep-details d-flex">
                <li>Basement:NOne</li>
                <li>Basement:NOne</li>
                <li>Basement:NOne</li>
              </ul>
            </div>
          </div>
        }
        content4={
          <div className="row interiorfeatures">
            <div className="heading">Interior Features</div>
            <div className="interior-details">
              <span>Interir Details</span>
              <ul className="deep-details d-flex">
                <li>Basement:NOne</li>
                <li>Basement:NOne</li>
                <li>Basement:NOne</li>
              </ul>
            </div>
          </div>
        }
        content5={
          <div className="row interiorfeatures">
            <div className="heading">Interior Features</div>
            <div className="interior-details">
              <span>Interir Details</span>
              <ul className="deep-details d-flex">
                <li>Basement:NOne</li>
                <li>Basement:NOne</li>
                <li>Basement:NOne</li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
}
