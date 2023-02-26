import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import "./Searchneigh.scss"

const Searchneigh = () => {
  return (
    <div className="search-neighbour container text-center">
      <div className="text-center pt-8">
        <h4>See how Trulia can help</h4>
      </div>
      <Form className="d-flex pt-3 justify-content-center">
          <Form.Control className="searchform"
            type="search"
            placeholder="Search for City, Neighborhood, Zip, Country"
            aria-label="Search "
          />
          <Button className="search-section">
            <FaSearch />
          </Button>
        </Form>
    </div>
  );
};

export default Searchneigh;
