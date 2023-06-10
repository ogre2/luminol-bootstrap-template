import React from "react";

import { Link } from "react-router-dom";
import { Logo } from "../assets/";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-default py-5">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Luminol Logo" className="navbar-brand-logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMenu"
          aira-controls="offcanvasMenu"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ms-auto d-flex justify-content-end align-items-center">
            <li className="nav-item">
              <Link className="nav-link">Company</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Customers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Hire us</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary btn-padded">Buy now</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
