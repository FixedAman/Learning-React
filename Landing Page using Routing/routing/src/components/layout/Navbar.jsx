import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light background ">
      <a class="navbar-brand" href="#">
        Rem
      </a>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
