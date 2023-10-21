import React from 'react';
import BurgerIcon from "../assests/Burger icon.png";

export default function Group6() {
    return (
        <div>
            <div className="group6 w-100">
  <div className="conatiner">
    {/* row1 */}
    <div className="row pt-5">
      <div className="col-1 col-lg-3 col-md-3 col-sm-2" />
      <div className="col-10 col-lg-6 col-md-6 col-sm-8 mt-5">
        <h1 className="title_group6 d-flex justify-content-center">
          Popular Package
        </h1>
      </div>
      <div className="col-1 col-lg-3 col-md-3 col-sm-2" />
    </div>
    {/* row2 */}
    <div className="row mt-3 gy-5 pb-5">
      <div className="col-12 col-lg-4 col-md-12 col-sm-12 justify-content-center d-flex">
        <div className="Packages d-flex justify-content-center align-items-center flex-column">
          <h1 className="group6_heading">PACKAGE I</h1>
          <img src={BurgerIcon} alt="Burgur-icon" />
          <h3>$10.00</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button type="button" className="button_group6 fw-bold">
            ORDER NOW
          </button>
        </div>
      </div>
      <div className="col-12 col-lg-4 col-md-12 col-sm-12 justify-content-center d-flex">
        <div className="Packages d-flex justify-content-center align-items-center flex-column">
          <h1 className="group6_heading">PACKAGE Ⅱ</h1>
          <img src={BurgerIcon} alt="Burgur-icon" />
          <h3>$10.00</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button type="button" className="button_group6 fw-bold">
            ORDER NOW
          </button>
        </div>
      </div>
      <div className="col-12 col-lg-4 col-md-12 col-sm-12 justify-content-center d-flex">
        <div className="Packages d-flex justify-content-center align-items-center flex-column">
          <h1 className="group6_heading">PACKAGE Ⅲ</h1>
          <img src={BurgerIcon} alt="Burgur-icon" />
          <h3>$10.00</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button type="button" className="button_group6 fw-bold">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
