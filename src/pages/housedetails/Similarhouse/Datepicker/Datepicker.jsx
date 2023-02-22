import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, setOptions } from "@mobiscroll/react";
import reqhouse from "../../../../media/requesthouse.JPG";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Datepicker.scss";
import React, { Component, useEffect, useState } from "react";
setOptions({
  theme: "ios",
  themeVariant: "light",
});

function CalendarPicker() {
  const [activeBtnIndex, setActiveBtnIndex] = useState(1);
  useEffect(() => {
    const header = document.getElementById("navbtn");
    const btns = header.getElementsByClassName("btn");
    const handleClick = (index) => {
      setActiveBtnIndex(index);
    };
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", () => handleClick(i));
    }
    return () => {
      for (let i = 0; i < btns.length; i++) {
        btns[i].removeEventListener("click", () => handleClick(i));
      }
    };
  }, []);
  return (
    <div
      className="d-flex justify-content-center datepicker"
      style={{ width: "100%" }}
    >
      <div>
        <img src={reqhouse} alt="" />
      </div>
      <div style={{ width: "50%" }}>
        <div id="navbtn" className="pb-10">
          <h4 className="pb-3">Local Information</h4>
          <div
            className={`btn ${activeBtnIndex === 0 ? "active" : ""}`}
            onClick={() => setActiveBtnIndex(0)}
          >
            Map
          </div>
          <div
            className={`btn ${activeBtnIndex === 1 ? "active" : ""}`}
            onClick={() => setActiveBtnIndex(1)}
          >
            Schools
          </div>
        </div>
        <Datepicker
          controls={["calendar"]}
          display="inline"
          calendarType="week"
          calendarSize={1}
        />
        <Form>
          <Form.Label>Select Time</Form.Label>
          <Form.Select>
            <option>10:12</option>
            <option>11:12</option>
            <option>12:12</option>
            <option>1:12</option>
            <option>2:12</option>
            <option>3:12</option>
            <option>4:12</option>
            <option>5:12</option>
            <option>6:12</option>
            <option>7:12</option>
            <option>8:12</option>
            <option>9:12</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="
A licensed lender will call you soon"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CalendarPicker;
