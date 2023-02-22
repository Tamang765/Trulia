import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Pricetable.scss"
import Tableprice from "./Tableprice";

const Pricetable = () => {
  return (
    <div className="price-table">
      <table>
        <thead className="d-flex ">
          <tr>
            <th>Date</th>
            <th>Price</th>
            <th>Event</th>
            <th>Source</th>
          </tr>
        </thead>

        <Accordion defaultActiveKey="0">
          {Tableprice.map((item, index) => (
              <>
          <Accordion.Item eventKey={item.id}>

                <Accordion.Header key={index}>
                  <th>{item.date}</th>
                  <th>{item.price}</th>
                  <th>{item.event}</th>
                  <th>{item.source}</th>
                </Accordion.Header>
                <Accordion.Body>
                  <span>Price</span>
                  <p>{item.pricechange}</p>
                </Accordion.Body>
         
          </Accordion.Item>
          </>
            ))}
        </Accordion>
      </table>
    </div>
  );
};

export default Pricetable;
