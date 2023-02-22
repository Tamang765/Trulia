import React from "react";
import { Container } from "react-bootstrap";
import "./Discover.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
const Discover = () => {
  return (
    <Container fluid className="discover-section justify-content-center d-flex">
      <div className="discover text-center">
        <h2>
          Discover a place <br /> you'll love to live
        </h2>
        <div className="discover-houses justify-content-center d-flex mt-9">
          <div className="select-category">
            <div className="btn buy-house decoration-white">Buy</div>
            <div className="btn rent-house decoration-white">Rent</div>
            <div className="btn sold-house decoration-white">Sold</div>
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
