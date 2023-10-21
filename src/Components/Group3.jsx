import React from "react";
import Burger from "../assests/Burger Group 3.png";

export default function Group3() {
  return (
    <div>
      <div className="group3">
        <div className="container">
          {/* row1 */}
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 mt-5">
              <img
                className="img_group3 rounded-circle img-fluid "
                src={Burger}
                alt="Burger"
              />
            </div>
            <div className="col-lg-1 col-md-0 col-sm-0 mt-lg-5" />
            <div className="col-lg-6 col-md-12 col-sm-12 mt-lg-5">
              <p className="title_group3 mt-5">Best Burger</p>
              <p className="bodytext_group3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
              </p>
              <button type="button" className="button_group3 mt-lg-5 mb-5">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
