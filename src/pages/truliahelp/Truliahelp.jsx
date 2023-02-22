import React from "react";
import "./Truliahelp.scss";
import buyhomeimg from "../../media/BuyAHome.jpg";
import renthouseimg from "../../media/renthouse.jpg"
import seeneb from "../../media/seeneb.JPG"
const Truliahelp = () => {
  return (
    <div className="truliahelp container">
      <div>
        <div className="text-center pt-8">
          <h1>See how Trulia can help</h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="buy-help">
            <div className="d-flex justify-content-center">
              <img src={buyhomeimg} alt="" />
            </div>
            <h3>Buy a Home</h3>
            <p>With over 1 million+ homes </p>
            <button>Find a home</button>
          </div>
          <div className="rent-help">
            <div className="d-flex justify-content-center">
              <img src={renthouseimg} alt="" />
            </div>
            <h3>Buy a Home</h3>
            <p>With over 1 million+ homes</p>
            <button>Find a home</button>
          </div>
          <div className="seeneighbor-help">
            <div className="d-flex justify-content-center">
              <img src={seeneb} alt="" />
            </div>
            <h3>Buy a Home</h3>
            <p>With over 1 million+ homes</p>
            <button>Find a home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Truliahelp;
