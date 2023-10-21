import React from "react";
import Aiden from "../assests/Aiden.png";
import Ethel from "../assests/Ethel.png";
import Fannie from "../assests/Fannie.png";

export default function Group2() {
  return (
    <div>
      <div className="group2">
        <div className="container">
          {/* row 1 */}
          <div className="row">
            <div className="col-1 col-lg-4 col-md-3 col-sm-2" />
            <div className="col-10 col-lg-4 col-md-6 col-sm-8 mt-5">
              <p className="title_group2 d-flex justify-content-center">
                Our Chef
              </p>
            </div>
            <div className="col-1 col-lg-4 col-md-3 col-sm-2" />
          </div>
          {/* row 2 */}
          <div className="row">
            <div className="col-lg-2 col-md-1 col-sm-0" />
            <div className="col-12 col-lg-8 col-md-10 col-sm-12">
              <p className="bodytext_group2 d-flex text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
              </p>
            </div>
            <div className="col-lg-2 col-md-1 col-sm-0" />
          </div>
          {/* row 3 cards */}
          <div className="row mt-5">
            <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
              <img
                className="rounded-circle card1_img_group2"
                src={Aiden}
                alt="Aiden"
              />
              <p className="mt-2 cards_title_group2">AIDEN HUNTER</p>
              <p className="cards_bodytext_group2">Founder</p>
            </div>
            <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
              <img
                className="rounded-circle card2_img_group2"
                src={Ethel}
                alt="Ethel"
              />
              <p className="mt-2 cards_title_group2">ETHEL RAMSEY</p>
              <p className="cards_bodytext_group2">Co-Founder</p>
            </div>
            <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-center">
              <img
                className="rounded-circle card3_img_group2"
                src={Fannie}
                alt="Fannie"
              />
              <p className="mt-2 cards_title_group2">FANNIE STEWART</p>
              <p className="cards_bodytext_group2">Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
