import React, { Children, useState } from "react";
import { Container, Nav, Tab, Tabs } from "react-bootstrap";
import "./Discover.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import Home from "../Home/Home";
import Rent from "../Rent/Rent";
import Buy from "../Buy/Buy";
const Discover = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <Container
        fluid
        className="discover-section justify-content-center d-flex mb-12"
      >
        <div className="discover text-center">
          <h2>
            Discover a place <br /> you'll love to live
          </h2>
          <div className="discover-houses justify-content-center d-flex mt-9">
            <div className="select-category">
              <div className="bloc-tabs">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  Buy
                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  Rent
                </button>
                <button
                  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(3)}
                >
                  Sold
                </button>
              </div>
            </div>
          </div>
          <Form className="d-flex pt-3">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <FaSearch />
            </Button>
          </Form>
        </div>
      </Container>

      <div className="content-area">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="home-section">
            <Home />
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          this is rent section
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          this is sold section
        </div>
      </div>
    </>
  );
};

export default Discover;
