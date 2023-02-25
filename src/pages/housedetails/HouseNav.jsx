import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.scss"
const Navbarr = () => {
  return (
    <>
    <div className="header-inner">
        <div className="main-navbar">
          <nav className="navbar navbar-expand-lg my-navbar">
            <div className="main">
              <p className="navbar-brand" href="#">
                <span className="logo">
                  Minutes
                </span>
              </p>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="fas fa-bars"></i>
                </span>
              </button>
            </div>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  nav-items">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    SERVICES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    INFO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FEATURES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TESTIMONIALS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PRICING
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    BLOG
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
              <div className="top-contact">
                <div className="icon-phone">
                </div>
                <div>
                  <span>Call us today</span>
                  9803639943
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </>
  );
}





export default Navbarr