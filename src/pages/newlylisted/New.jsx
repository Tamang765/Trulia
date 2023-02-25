import React, { Component } from "react";
import Slider from "react-slick";
import bgone from "../../media/bgone.jpg";
import smone from "../../media/smone.jpg";
import "./Newlylisted.scss"
import {FaBed} from "react-icons/fa"
import {AiFillUnlock} from "react-icons/ai"
import {VscTriangleLeft} from "react-icons/vsc"
import Newlist from "./Newlist";
import { NavLink } from "react-router-dom";
import ImageList from "../explorehomesection/homeimages/Images";
import "./Newlylisted.scss";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", color: "black", right: "15px",top:"81px" }}
      onClick={onClick}
    />
  );
}
export const CardItem = ({
    id,
    posted,
    price,
    bed,
    lock,
    sqft,
    place,
    location,
    category,
  
  }) => {
    return (
          <div className="col-sm-10" key={id} style={{}}>
            <div className="relative">
              <div className="newlylisted-house">
              <SimpleSlider categoryslider={category} />
              </div>
              <h2>{posted}</h2>
            </div>
            <div>
                <span>{price}</span>
                <div className="house-detail d-flex">
                    <div className="d-flex"><FaBed className="icon"/>{bed}</div>
                    <div className="d-flex"><AiFillUnlock className="icon"/>{lock}</div>
                    <div className="d-flex"><VscTriangleLeft className="icon"/>{sqft}</div>
                </div>
                <a href="">
                    <span>{place} </span>
                </a>
                <div className="house-address">{location}</div>
            </div>
          </div>


    );
  };
  
  export  function SimpleSlider({ categoryslider }) {
    // Filter images by category
    const filteredImages = ImageList.filter(
      (item) => item.category === categoryslider
    );
  
    // Render a slider for each image set
    return (
      <div>
        {filteredImages.map((item, index) => (
          <div className="row" key={index}>
              <NavLink to={`/housedetails/${item.category}`} key={index}>
                <img src={item.newlylisted} alt="" />
              </NavLink>
          </div>
        ))}
      </div>
    );
  }
  
  

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        left: "1rem",
        zIndex: "2",
        top:"81px"
      }}
      onClick={onClick}
    />
  );
}

export default class New extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      dots: false,
      infinite: true,
      centerMode: false,
      slidesToShow: 4,
      slidesToScroll:4,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
      variableWidth: true,
    };

    return (
        <>
     <div className="container-fluid newlylisted">
        <container>
          <div className="text-center pt-8">
            <h1>Newly Listed Houses</h1>
          </div>
        </container>
        <div className="row">
        <Slider {...settings}>
        {Newlist.map((item) => (
                <CardItem
                  id={item.id}
                  posted={item.posted}
                  price={item.price}
                  bed={item.bed}
                  lock={item.lock}
                  sqft={item.sqft}
                  place={item.place}
                  location={item.location}
                  category={item.category}
                  images={item.images}
                  newlylisted={item.newlylisted}
                />
              ))}

        </Slider>
        </div>
      </div>

      </>
    );
  }
}
