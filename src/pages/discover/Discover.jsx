import React from "react";
import { Container, Nav, Tab, Tabs } from "react-bootstrap";
import "./Discover.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Exploresection from "../explorehomesection/Exploresection";
import Explorehouse from "../explorehouse/Explorehouse";
import Buy from "./Events/Buy";
const Discover = () => {
  return (
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
          <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="/home" title="home">
        
      </Tab>
      <Tab eventKey="Sell" title="Sell">
      <Buy/>
      </Tab>
      <Tab eventKey="Rent" title="Rent">

      </Tab>
    </Tabs>

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
  );
};

export default Discover;
