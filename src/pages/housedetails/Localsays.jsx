import React, { Component, useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";
import "./Localsays.scss"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Explore from "../explore/Explore";
import Exploresection from "../explorehomesection/Exploresection";
import Explorehouse from "../explorehouse/Explorehouse";
import Cards from "./Similarhouse/cards/Cards";
import Contact from "./Similarhouse/Contact/Contact";

function Localsay({ content1, content2, content3, content4, content5 }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedContent = showMore
    ? [content1, content2]
    : [content1, content2,content3, content4, content5];

  return (
    <div className="content pb-9">
      {displayedContent.map((content, index) => (
        <div key={index}>{content}</div>
      ))}
      {showMore && (
        <div className="btn show" onClick={toggleShowMore}>
          Show More
        </div>
      )}
      {!showMore && (
        <div className="btn show" onClick={toggleShowMore}>
          Show Less
        </div>
      )}
    </div>
  );
}
function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Cards />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Cards />
      </Tab>
    </Tabs>
  );
}
export function Localsays() {
  return (
    <>
    <div className="Local-testimonials">
      <h2>What Locals Say About underwood Hills</h2>
      <Localsay
        content1={
          <div className="row user-votes">
            <div className="votes-details">
              <ul className="deep-details d-flex">
                <li>
                  <div>
                    <AiOutlineLike /> 96%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineLike /> 96%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineLike />12%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
              </ul>
            </div>
          </div>
        }
        content2={
          <div className="row user-votes">
            <div className="votes-details">
              <ul className="deep-details d-flex">
                <li>
                  <div>
                    <AiOutlineLike />12%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineLike />87%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineLike />98%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
              </ul>
            </div>
          </div>
        }
        content3={
          <div className="row user-votes">
            <div className="votes-details">
              <ul className="deep-details d-flex">
                <li>
                  <div>
                    <AiOutlineLike /> 76%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineLike /> 76%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineLike /> 76%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
              </ul>
            </div>
          </div>
        }
        content4={
          <div className="row user-votes">
            <div className="votes-details">
              <ul className="deep-details d-flex">
                <li>
                  <div>
                    <AiOutlineLike /> 76%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineLike /> 76%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineLike /> 76%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
              </ul>
            </div>
          </div>
        }
        content5={
          <div className="row user-votes">
            <div className="votes-details">
              <ul className="deep-details d-flex">
                <li>
                  <div>
                    <AiOutlineLike /> 76%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineLike /> 76%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineLike /> 76%
                  </div>
                  <div>
                    <FaPaw /> it's dog friendly
                  </div>
                </li>
              </ul>
            </div>
          </div>
        }
      />
      <ControlledTabs/>
      
    </div>
    <Contact/>

      </>
  );
}
