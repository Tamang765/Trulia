import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.scss";
const Navbartrulia = () => {
  return (
    <div>
      <>
        <Navbar expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#" className="trulia-logo">trulia</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <div class="dropdown">
                  <button class="dropbtn">Buy</button>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
                <div class="dropdown">
                  <button class="dropbtn">Rent</button>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
                <div class="dropdown">
                  <button class="dropbtn">Mortgage</button>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Saved Homes</Nav.Link>
                <Nav.Link  href="#memes">Saved Searches</Nav.Link>
                <Nav.Link className="btn login-signin-btn" href="#memes">Sign up or log in</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Navbartrulia;
