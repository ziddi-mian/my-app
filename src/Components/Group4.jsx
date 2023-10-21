import React from 'react';
import Burger from "../assests/Burger Group 3.png";

export default function Group4() {
    return (
        <div>
            <div className="group4 w-100 h-auto">
  <div className="container">
    {/* row1 */}
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 mt-lg-5">
        <p className="title_group4 mt-5 fw-bold">Big Burger</p>
        <p className="bodytext_group4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
        <button type="button" className="button_group4 mt-lg-5 fw-bold mb-5">ORDER NOW</button>
      </div>
      <div className="col-lg-1 col-md-0 col-sm-0 mt-lg-5" />
      <div className="col-lg-5 col-md-12 col-sm-12 mt-5">
        <img className="img_group4 rounded-circle img-fluid w-78 h-78 mb-5" src={Burger} alt="Burger" />
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
