import React from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const Card = ({ image, title, description, items }) => {
  return (
    <div className="card card-sm card-shadow border border-light h-100 mb-3 mb-lg-0">
      <div className="p-2">
        <img src={image} alt="" className="card-img" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <ul className="list-pointer mb-0 text-gray-700">
          {items?.map((item) => {
            return (
              <li key={item} className="list-pointer-item">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <Link className="card-footer card-link border-top">
        Learn more <BsChevronRight className="small ms-1" />
      </Link>
    </div>
  );
};

export default Card;
