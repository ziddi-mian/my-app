import React from "react";

export default function Group8() {
  return (
    <div>
      <div className="group8 w-100">
        <div className="conatiner">
          {/* row1 */}
          <div className="row group7_row">
            <div className="col-1 col-lg-2 col-md-2 col-sm-2" />
            <div className="col-10 col-lg-8 col-md-8 col-sm-8 mt-5">
              <h1 className="title_group8 d-flex justify-content-center">
                Don't miss Our Update
              </h1>
            </div>
            <div className="col-1 col-lg-2 col-md-2 col-sm-2" />
          </div>
          {/* row2 */}
          <div className="row mt-4">
            <div className="col-lg-2 col-md-1 col-sm-0" />
            <div className="col-12 col-lg-8 col-md-10 col-sm-12">
              <p className="bodytext_group8 d-flex text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
              </p>
            </div>
            <div className="col-lg-2 col-md-1 col-sm-0" />
          </div>
          {/* row3 */}
          <div className="row">
            <div className="col-1 col-lg-3 col-md-3 col-sm-2" />
            <div className="col-10 col-lg-6 col-md-6 col-sm-8 mt-5">
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-pill w-75 email"
              />
              <button type="button" className="button_group8 fw-bold ">
                SUBSCRIBE
              </button>
            </div>
            <div className="col-1 col-lg-3 col-md-3 col-sm-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
