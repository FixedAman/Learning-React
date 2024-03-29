import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className=" text-dark px-4 py-5 text-center section">
        <div class="py-5">
          <h1 class="display-5 fw-bold text-white">Hello Rem</h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                class="btn btn-outline-dark   btn-lg px-4 me-sm-3 fw-bold"
              >
                Custom button
              </button>
              <button type="button" class="btn btn-dark  btn-lg px-4">
                Secondary
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
