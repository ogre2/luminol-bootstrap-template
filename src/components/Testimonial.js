import React from "react";

const Testimonial = ({ image, logo, quote, name, role }) => {
  return (
    <div className="d-flex align-items-center">
      <div className="col-md-5 d-none d-md-block">
        <img
          src={`${image}`}
          alt="Person"
          className="img-fluid rounded-2"
          style={{
            height: "500px",
            width: "400px",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="col-md-7">
        <figure className="pe-md-5">
          <div className="mb-4">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "32px", width: "auto" }}
            />
          </div>

          <blockquote className="blockquote blockquote-lg">
            " {quote} "
          </blockquote>

          <figcaption className="blockquote-footer mt-3">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 d-md-none">
                <img
                  src={image}
                  alt=""
                  className="rounded-circle"
                  style={{
                    height: "50px",
                    width: "50px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="flex-grow-1 ms-3 ms-md-0">
                <span className="d-block text-1 fw-600 text-gray-800">
                  {name}
                </span>
                <span className="blockquote-footer-source">{role}</span>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Testimonial;
