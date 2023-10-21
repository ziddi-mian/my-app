import React from "react";
import BurgerLogo from "../assests/Burger icon.png";

export default function Group1() {
  return (
    <div>
      <div className="bg_img">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={BurgerLogo} className="img-fluid logo" alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i
                  className="fas fa-bars"
                  style={{ color: "#ffff", fontSize: "28px" }}
                />
              </span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav">
                <li className="nav-item m-sm-0 mx-lg-5">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item m-sm-0 mx-lg-5">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item m-sm-0 mx-lg-5">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item m-sm-0 mx-lg-5">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Group 1 text  */}
        <div className="container Group1_text mt-5">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-8 col-sm-12">
              <p className="title_Group1 lh-sm fw-bold">
                Get Cashback up to 50%
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-lg-6 col-md-8 col-sm-12">
              <p className="bodytext_Group1 lh-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse consectetur justo eu nunc consequat.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3">
              <button className="button_group1">ORDER NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
