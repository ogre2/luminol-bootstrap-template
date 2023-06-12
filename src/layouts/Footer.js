import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { BsTwitter, BsFacebook, BsSlack, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer-default bg-light">
      <div className="container">
        <div className="row row-cols-sm-2 row-cols-md-5 d-flex flex-wrap">
          <div className="col-lg-3 mb-7 mb-lg-0">
            <div className="mb-5">
              <Link className="footer-brand" to="/">
                <img className="footer-brand-img" src={Logo} alt="Luminol" />
              </Link>

              <p className="text-gray-600 text-4 mt-3">
                Luminol is a fully responsive and premium Bootstrap 5 landing
                page theme.
              </p>
            </div>

            {/* <span className="d-block">
              <label
                htmlFor="selectLanguage"
                className="form-label text-white text-4 fw-500"
              >
                Choose language
              </label>
            </span> */}

            {/* <LanguageToggler /> */}
          </div>
          <div className="col mb-4 mb-md-0">
            <span className="fs=16 lh-19 fw-600">Resources</span>

            <ul className="list-unstyled list-py-1 mt-3 mb-0">
              <li>
                <Link className="link link-sm" to="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="link link-sm" to="#">
                  Guidance
                </Link>
              </li>
              <li>
                <Link className="link link-sm" to="#">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link className="link link-sm" to="#">
                  Support
                </Link>
              </li>
              <li>
                <Link className="link link-sm" to="#">
                  API <i className="bi bi-box-arrow-up-right ms-1"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-4 mb-md-0">
            <span className="fs=16 lh-19 fw-600">Company</span>

            <ul className="list-unstyled list-py-1 mt-3 mb-0">
              <li>
                <Link className="link link-sm" to="#">
                  Belonging <i className="bi bi-box-arrow-up-right ms-1"></i>
                </Link>
              </li>
              <li>
                <Link className="link link-sm" to="#">
                  Company
                </Link>
              </li>
              <li>
                <Link className="link link-sm d-flex" to="#">
                  Careers{" "}
                  <span
                    className="badge bg-secondary text-white rounded-pill ms-2"
                    style={{ padding: "7px 6px 5px" }}
                  >
                    We're hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link className="link link-sm" to="#">
                  Contacts
                </Link>
              </li>
              <li>
                <Link className="link link-sm" to="#">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div className="col col-md-2 mb-4 mb-md-0">
            <span className="fs=16 lh-19 fw-600">Platform</span>

            <ul className="list-unstyled list-py-1 mt-3 mb-0">
              <li>
                <Link className="link link-sm" to="#">
                  Web
                </Link>
              </li>
              <li>
                <Link className="link link-sm" to="#">
                  Mobile
                </Link>
              </li>
              <li>
                <Link className="link link-sm" to="#">
                  iOS
                </Link>
              </li>
              <li>
                <Link className="link link-sm" to="#">
                  Android
                </Link>
              </li>
              <li>
                <Link className="link link-sm" to="#">
                  Figma
                </Link>
              </li>
            </ul>
          </div>

          <div className="col col-md-2 mb-4 mb-md-0">
            <span className="fs=16 lh-19 fw-600">Legal</span>

            <ul className="list-unstyled list-py-1 my-3">
              <li>
                <Link className="link link-sm" to="#">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link className="link link-sm" to="#">
                  Privacy Policy{" "}
                  <i className="bi bi-box-arrow-up-right ms-1"></i>
                </Link>
              </li>
            </ul>

            <span className="fs=16 lh-19 fw-600">Docs</span>

            <ul className="list-unstyled list-py-1 mt-3 mb-0">
              <li>
                <Link className="link link-sm" to="#">
                  Documentation
                </Link>
              </li>
              <li>
                <Link className="link link-sm" to="#">
                  Snippets
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-5 border-top"></div>

        <div className="row align-items-md-end">
          <div className="col-md mb-3 mb-md-0">
            <p className="text-gray-700 text-4 mb-0">
              &copy; Luminol 2023, all rights reserved.
            </p>
          </div>
          <div className="col-md d-md-flex justify-content-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link className="btn btn-footer-icon rounded-circle" to="#">
                  <BsFacebook className="btn-icon" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="btn btn-footer-icon rounded-circle" to="#">
                  <BsTwitter className="btn-icon" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="btn btn-footer-icon rounded-circle" to="#">
                  <BsGithub className="btn-icon" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="btn btn-footer-icon rounded-circle" to="#">
                  <BsSlack className="btn-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
