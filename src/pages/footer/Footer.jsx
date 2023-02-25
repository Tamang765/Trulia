import React, { useState } from "react";
import { FiFacebook } from "react-icons/fi";
import "./Footer.scss";
import {AiOutlineDown} from "react-icons/ai"
import {IoIosArrowUp} from "react-icons/io"
function Footercomp({ content1, content2 }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedContent = showMore ? [content1] : [content1, content2];

  return (
    <div>
      {displayedContent.map((content, index) => (
        <div key={index}>{content}</div>
      ))}
      {showMore && (
        <div className="btn show d-flex align-items-center" onClick={toggleShowMore}>
          Show less <IoIosArrowUp/>
        </div>
      )}
      {!showMore && (
        <div className="btn show d-flex align-items-center" onClick={toggleShowMore}>
          Show more <AiOutlineDown/>
        </div>
      )}
    </div>
  );
}
const Footer = () => {
  return (
    <>
      <div className="container footer mt-20">
        <div className="real-estate">
          <h3>Real Estate Markets</h3>
          <div className="list">
            <Footercomp
              content1={
                <>
                  <a href="">AlaskaReal Estate</a>
                  <a href="">AlaskaReal Estate</a>
                  <a href="">AlaskaReal Estate</a>
                </>
              }
              content2={
                <>
                  <a href="">AlaskaReal Estate</a>
                  <a href="">AlaskaReal Estate</a>
                  <a href="">AlaskaReal Estate</a>
                </>
              }
            />
          </div>
        </div>

        <div className="popular-searches">
          <h3>Real Estate Markets</h3>
          <div className="list">
            <Footercomp
              content1={
                <>
                  <a href="">AlaskaReal Estate</a>
                  <a href="">AlaskaReal Estate</a>
                  <a href="">AlaskaReal Estate</a>
                </>
              }
              content2={
                <>
                  <a href="">AlaskaReal Estate</a>
                  <a href="">AlaskaReal Estate</a>
                  <a href="">AlaskaReal Estate</a>
                </>
              }
            />
          </div>
        </div>

        <div className="explore-trulia-footer">
          <h3>Explore Trulia</h3>
          <div className="list">
            <Footercomp
              content1={
                <>
                  <a href="">
                    <FiFacebook />
                    AlaskaReal Estate
                  </a>
                  <a href="">
                    <FiFacebook />
                    AlaskaReal Estate
                  </a>
                  <a href="">
                    <FiFacebook />
                    AlaskaReal Estate
                  </a>
                </>
              }
              content2={
                <>
                  <a href="">
                    <FiFacebook />
                    AlaskaReal Estate
                  </a>
                  <a href="">
                    <FiFacebook />
                    AlaskaReal Estate
                  </a>
                  <a href="">
                    <FiFacebook />
                    AlaskaReal Estate
                  </a>
                </>
              }
            />
          </div>
        </div>
        <div className="for-professionals">
          <h3>For Professionals</h3>
          <div className="list">
            <Footercomp
              content1={
                <>
                  {" "}
                  <a href="">AlaskaReal Estate</a>
                  <a href="">AlaskaReal Estate</a>
                  <a href="">AlaskaReal Estate</a>
                </>
              }
              content2={
                <>
                  {" "}
                  <a href="">AlaskaReal Estate</a>
                  <a href="">AlaskaReal Estate</a>
                  <a href="">AlaskaReal Estate</a>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
