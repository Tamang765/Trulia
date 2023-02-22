import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Request.scss"
const Request = () => {
  return (
    <div>
      <Form className="d-flex justify-content-between gap-5">
        <div className="email-phone-req">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="Phone" />
        </Form.Group>
        </div>
        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        <Form.Check type="checkbox" label="
A licensed lender will call you soon" />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Request;
