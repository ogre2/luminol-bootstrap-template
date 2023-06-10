import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
const Offcavas = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasMenu"
      aria-labelledby="offcanvasMenuLabel"
    >
      <div className="offcanvas-header border-bottom">
        <Link className="offcanvas-brand" to="/">
          <img src={Logo} alt="Luminol Logo" className="offcanvas-brand-logo" />
        </Link>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item mb-2">
            <Link className="nav-link fw-500">Company</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link fw-500">Services</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link fw-500">Customers</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link fw-500">Blog</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link fw-500">Hire us</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link fw-500">Careers</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link fw-500">Support</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link fw-500">Contact</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link fw-500">Customer Service</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link fw-500">Privacy Policy</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link fw-500">Terms of Use</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link fw-500">Security</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link fw-500">API</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Offcavas;
