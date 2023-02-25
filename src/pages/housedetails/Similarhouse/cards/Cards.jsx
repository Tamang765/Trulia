import React, { Component, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsEmojiSunglasses } from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";
import Slider from "react-slick";
import CardData from "./CardData";
import "./Cards.scss";
import Modal from "react-bootstrap/Modal";

export default class Cards extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
    };
    return (
      <>
        <div className="Cards-testimonial pt-10">
          <Slider {...settings}>
            {CardData.map((item, index) => {
              return (
                <div key={index}>
                  <CardComponent item={item} />
                </div>
              );
            })}
          </Slider>
        </div>
      </>
    );
  }
}
export function CardComponent({ item }) {
  const [modalShow, setModalShow] = React.useState(false);
  const handleShowModal = () => {
    setModalShow(true);
  };
  const handleCloseModal = () => {
    setModalShow(false);
  };
  return (
    <>
      <Card style={{ width: "14rem",height:"49vh" }} onClick={handleShowModal}>
        <Card.Body>
          <Card.Title className="d-flex gap-2">
            <MdOutlinePersonOutline />
            <h2>
              {item.username}{" "}
              <span className="d-flex gap-3">
                Residency .<span> {item.time}</span>
              </span>
            </h2>{" "}
          </Card.Title>
          <Card.Text>
            {item.desc}
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
          </Card.Text>
          <div className="d-flex justify-content-between pt-3">
            <Card.Link href="#" className="d-flex pr-3">
              <BsEmojiSunglasses />
              <span className="pl-2">{item.likes}</span>
            </Card.Link>
            <Card.Link href="#">Flag</Card.Link>
          </div>
        </Card.Body>
      </Card>

      <Modal show={modalShow} onHide={handleCloseModal}>
      <Card.Body>
          <Card.Title className="d-flex gap-3">
            <MdOutlinePersonOutline />
            <h2>
              {item.username}{" "}
              <span className="d-flex gap-3">
                Residency .<span> {item.time}</span>
              </span>
            </h2>{" "}
          </Card.Title>
          <Card.Text>
            {item.desc}
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
          </Card.Text>
          <div className="d-flex justify-content-between pt-3 bottom-flag">
            <Card.Link href="#" className="d-flex pr-3">
              <BsEmojiSunglasses />
              <span className="pl-2">{item.likes}</span>
            </Card.Link>
            <Card.Link href="#">Flag</Card.Link>
          </div>
        </Card.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
