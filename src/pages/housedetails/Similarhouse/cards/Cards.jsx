import React, { Component, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsEmojiSunglasses } from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";
import Slider from "react-slick";
import CardData from "./CardData";
import "./Cards.scss";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
 function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default class Cards extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
    };
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <div className="Cards-testimonial pt-10">
          <h2> Multiple items </h2>
          <Slider {...settings}>
            {CardData.map((item, index) => {
              return (
                <div>
                  <Card key={index} style={{ width: "14rem" }}>
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
                </div>
              );
            })}
          </Slider>
          <App/>
        </div>
      </>
    );
  }
}
