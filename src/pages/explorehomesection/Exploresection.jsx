import Newlist from "../newlylisted/Newlist";
import React, { Component } from "react";
import { FaBed } from "react-icons/fa";
import { AiFillUnlock } from "react-icons/ai";
import { VscTriangleLeft } from "react-icons/vsc";
import bgone from "../../media/bgone.jpg";
import "./Exploresection.scss";
import Slider from "react-slick";
import Images from "./homeimages/Images";
import ImageList from "./homeimages/Images";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { Row, Col, NavDropdown, Container, Navbar, Nav } from "react-bootstrap";
import "react-bootstrap-submenu/dist/index.css";
import Footer from "../footer/Footer";
import Footerlast from "../footerlast/Footerlast";
import { NavLink } from "react-router-dom";
import Navbartrulia from "../navbar/Navbartrulia";

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
    <div className="exploresection-card" key={id}>
      <div className="exploreimg row">
        <SimpleSlider categoryslider={category} />
      </div>
      <h2>{posted}</h2>
      <div>
        <span>{price}</span>
        <div className=" d-flex gap-2">
          <div className="d-flex">
            <FaBed className="icon" />
            {bed}
          </div>
          <div className="d-flex">
            <AiFillUnlock className="icon" />
            {lock}
          </div>
          <div className="d-flex">
            <VscTriangleLeft className="icon" />
            {sqft}
          </div>
        </div>
        <a href="">
          <span>{place} </span>
        </a>
        <div className="house-address">{location}</div>
      </div>
    </div>
  );
};

class SimpleSlider extends Component {
  render() {
    const { categoryslider } = this.props;

    // Filter images by category
    const filteredImages = ImageList.filter(
      (item) => item.category === categoryslider
    );

    // Settings for the slider
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    // Render a slider for each image set
    return (
      
      <div>
        {filteredImages.map((item, index) => (
          
          <Slider {...settings} key={index}>
            
            {item.images.map((image, index) => (
              <NavLink to={`/housedetails/${item.category}`}>
              <div key={index}>
                <img src={image} height="400px" width="500px" alt="" />
              </div>
              </NavLink>

            ))}
          </Slider>
        ))}
      </div>
    );
  }
}
export default class Exploresection extends Component {
  render() {
    return (
      <>
        <div className="spacer" />
        <br/>
        <br/>
        <br/>
          <Container className="navigator-explore">

              <div class="m-4">
                <div class="btn-group">
                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="radio1"
                    autocomplete="off"
                  />
                  <label class="btn btn-outline-secondary" for="radio1">
                    Radio 1
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="radio2"
                    autocomplete="off"
                    checked
                  />
                  <label class="btn btn-outline-secondary" for="radio2">
                    Radio 2
                  </label>
                </div>
              </div>
              <Nav className="me-auto">
                <NavDropdownMenu title="Any Price" id="collasible-nav-dropdown">
                  <DropdownSubmenu
                    href="#action/3.7"
                    title="No Min"
                    id="collasible-nav-dropdown"
                    className="subsmenu"
                  >
                    <NavDropdown.Item href="#action/9.1">
                      Sub 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/9.1">
                      Sub 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/9.1">
                      Sub 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/9.1">
                      Sub 2
                    </NavDropdown.Item>
                  </DropdownSubmenu>
                  <span> - </span>
                  <DropdownSubmenu
                    href="#action/3.7"
                    title="No Max"
                    id="collasible-nav-dropdown"
                    className="subsmenu"
                  >
                    <NavDropdown.Item href="#action/9.1">
                      Sub 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/9.1">
                      Sub 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/9.1">
                      Sub 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/9.1">
                      Sub 2
                    </NavDropdown.Item>
                  </DropdownSubmenu>
                </NavDropdownMenu>
                <NavDropdownMenu title="Any Beds" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdownMenu>
                <NavDropdownMenu
                  title="Any House"
                  id="collasible-nav-dropdown"
                  className="homes-beds"
                >
                  <form role="form" className="px-2">
                    <label class="radio-inline">
                      <input
                        type="radio"
                        name="gr"
                        value="0"
                        onchange="val(this)"
                      />
                      Popular first
                    </label>
                    <label class="radio-inline">
                      <input
                        type="radio"
                        name="gr"
                        value="1"
                        onchange="val(this)"
                      />
                      Newest first
                    </label>
                    <label class="radio-inline">
                      <input
                        type="radio"
                        name="gr"
                        value="2"
                        onchange="val(this)"
                      />
                      Newest first
                    </label>
                    <label class="radio-inline">
                      <input
                        type="radio"
                        name="gr"
                        value="3"
                        onchange="val(this)"
                      />
                      Newest first
                    </label>
                  </form>
                </NavDropdownMenu>
              </Nav>
          </Container>
        <div className="exploresection">
          <div className="text-center py-8">
            <h1>Explore homes on Trulia</h1>
          </div>
          <div className="container-fluid d-flex">
            <div className="explorehouse-section row">
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
                />
              ))}
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                  <li class="page-item disabled">
                    <a
                      class="page-link"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
              <div>
                <p>
                  Listings identified with the FMLS IDX logo come from FMLS and
                  are held by brokerage firms other than the owner of this
                  website. The listing brokerage is identified in any listing
                  details. Information is deemed reliable but is not guaranteed.
                  If you believe any FMLS listing contains material that
                  infringes your copyrighted work please click here to review
                  our DMCA policy and learn how to submit a takedown request. ©
                  2023 First Multiple Listing Service, Inc. Click here for more
                </p>
              </div>
              <Footer />
              <Footerlast />
            </div>
            <div></div>
            <div className="map d-flex">
              <iframe
                width="700"
                height="640"
                src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=London%2C%20United%20Kingdom+(Austin%20)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </>
    );
  }
}
