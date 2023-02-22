import React, { Component } from "react";
import Slider from "react-slick";
import "./Explorehouse.scss";
import bgone from "../../media/bgone.jpg";
import smone from "../../media/smone.jpg";
import { Link } from "react-router-dom";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", color: "black", right: "2px" }}
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
        
      }}
      onClick={onClick}
    />
  );
}

export default class Explorehouse extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      dots: false,
      infinite: true,
      centerMode: false,
      slidesToShow: 6,
      slidesToScroll: 5,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
      variableWidth: true,
    };
    return (
      <div className="container-fluid house-discover">
        <Slider {...settings}>
        <a href="../explorehomesection/Exploresection" className="row" style={{}}>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img className="bgcard" src={bgone} alt="" />
              </div>
              <a href="./explorehomesection/Exploresection"></a>
              <h2>Atlanta GA</h2>
              <button>View House</button>
            </div>
          </a>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative mb-3">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img className="bgcard" src={bgone} alt="" />
              </div>

              <h2>Atlanta GA</h2>
              <button>View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative mb-3">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img className="bgcard" src={bgone} alt="" />
              </div>

              <h2>Atlanta GA</h2>
              <button>View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative mb-3">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img className="bgcard" src={bgone} alt="" />
              </div>

              <h2>Atlanta GA</h2>
              <button>View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative mb-3">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img className="bgcard" src={bgone} alt="" />
              </div>

              <h2>Atlanta GA</h2>
              <button>View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative mb-3">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img className="bgcard" src={bgone} alt="" />
              </div>

              <h2>Atlanta GA</h2>
              <button>View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative mb-3">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img className="bgcard" src={bgone} alt="" />
              </div>

              <h2>Atlanta GA</h2>
              <button>View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative mb-3">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img className="bgcard" src={bgone} alt="" />
              </div>

              <h2>Atlanta GA</h2>
              <button>View House</button>
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col-sm-12 relative mb-3">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
            <div className="col-sm-12 relative">
              <div className="individual-house">
                <img src={smone} alt="" />
              </div>
              <h2>Atlanta GA</h2>
              <button className="smallcard-btn">View House</button>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}
