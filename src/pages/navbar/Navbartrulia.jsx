import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.scss";
import Modal from 'react-bootstrap/Modal';
import {AiFillFacebook} from "react-icons/ai";
import {BsGoogle} from "react-icons/bs"
import { Link, Outlet } from "react-router-dom";


function Signinlogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="signin-login">
      <Button onClick={handleShow}>
        Sign in
      </Button>

      <Modal  show={show} className="signin"  keyboard={false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex justify-content-between"><span>Sign Up or Login </span></Modal.Title> 
        </Modal.Header>
        <Modal.Body >
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Button>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button  onClick={handleClose}> <AiFillFacebook/>
           <span>Continue with facebook</span> 
          </Button>
          <Button  onClick={handleClose}>
           <BsGoogle/> <span>Sign with Google</span> 
          </Button>
          <span>I accept Trulia's  Terms of Use and Privacy Policy.</span>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}
const Navbartrulia = () => {
  return (
    <div>
      <>
        <Navbar expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#" className="trulia-logo"><Nav.Link href="/">trulia</Nav.Link> </Navbar.Brand>
            <Outlet/>
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
                  <Nav.Link href="#" disabled>
              Atlanta
            </Nav.Link>
                    <Nav.Link href="#">House For sale</Nav.Link>
                    <Nav.Link href="#">Open Houses</Nav.Link>
                    <Nav.Link href="#">New Houses</Nav.Link>
            
                  </div>
                </div>
                <div class="dropdown">
                  <button class="dropbtn">Rent</button>
                  <div class="dropdown-content">
                  <Nav.Link href="#" disabled>Atlanta</Nav.Link>
                  <Nav.Link href="#">All Rentals</Nav.Link>
                  <Nav.Link href="#">Apartment For Rent</Nav.Link>
                  <Nav.Link href="#">Houses for Rent</Nav.Link>
                  <Nav.Link href="#">Post A Rental Listing</Nav.Link>
                  </div>
                </div>
                <div class="dropdown">
                  <button class="dropbtn">Mortgage</button>
                  <div class="dropdown-content">
                  <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
            <Nav.Link href="#">Morgage </Nav.Link>
            <Nav.Link href="#">Get Pre-Qualified</Nav.Link>
            <Nav.Link href="#">Mortgage Rates</Nav.Link>
            <Nav.Link href="#">Refinance Rates</Nav.Link>

                  </div>
                </div>
              </Nav>
              <Nav className="align-items-center">
                <Nav.Link href="#">Saved Homes</Nav.Link>
                <Nav.Link  href="#">Saved Searches</Nav.Link>
                <Nav.Link ><Signinlogin/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Navbartrulia;
