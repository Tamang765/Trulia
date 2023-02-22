import React, { Component } from "react";
import Slider from "react-slick";
import bgone from "../../media/bgone.jpg";
import smone from "../../media/smone.jpg";
import "./Newlylisted.scss"
import {FaBed} from "react-icons/fa"
import {AiFillUnlock} from "react-icons/ai"
import {VscTriangleLeft} from "react-icons/vsc"
import Newlist from "./Newlist";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", color: "black", right: "2px",top:"81px" }}
      onClick={onClick}
    />
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

export default class Newlylisted extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      dots: false,
      infinite: true,
      centerMode: false,
      slidesToShow: 4,
      slidesToScroll: 2,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
      variableWidth: true,
    };
    return (
        <>
     <div className="container-fluid newlylisted">
        <container>
          <div className="text-center pt-8">
            <h1>Explore homes on Trulia</h1>
          </div>
        </container>
        <Slider {...settings}>
            { Newlist.map((val,index)=>{
            return(
          <div className="row" key={val.id} style={{}}>
            <div className="col-sm-12 relative">
              <div className="newlylisted-house">
                <img  src={val.images} alt="" />
              </div>
              <h2>{val.posted}</h2>
            </div>
            <div>
                <span>{val.price}</span>
                <div className="house-detail d-flex">
                    <div className="d-flex"><FaBed className="icon"/>{val.bed}</div>
                    <div className="d-flex"><AiFillUnlock className="icon"/>{val.lock}</div>
                    <div className="d-flex"><VscTriangleLeft className="icon"/>{val.sqft}</div>
                </div>
                <a href="">
                    <span>{val.place} </span>
                </a>
                <div className="house-address">{val.location}</div>
            </div>
          </div>
            )
        }
            )
    }

        </Slider>
      </div>
      </>
    );
  }
}
