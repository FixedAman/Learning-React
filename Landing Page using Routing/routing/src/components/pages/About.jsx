import React from "react";
import "./About.css"
const About = () => {
  return (
    <>
      <div className=" text-dark px-4 py-5 text-center about">
        <div class="py-5">
          <h1 class="display-5 fw-bold text-white">About us</h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              fugit corporis facilis eius eveniet, alias dolorum accusantium ea
              quo adipisci earum iure? Similique vel sit nisi excepturi, beatae
              voluptatum quam.
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                class="btn btn-outline-dark   btn-lg px-4 me-sm-3 fw-bold"
              >
                Show me
              </button>
              <button type="button" class="btn btn-dark  btn-lg px-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
