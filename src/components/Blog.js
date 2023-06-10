import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ image, title, description }) => {
  return (
    <Link className="card card-flush blog-box h-100">
      <img src={image} alt="Blog" className="card-img" />

      <div className="card-body">
        <span className="card-subtitle text-body">Read the blog</span>

        <div className="card-title text-inherit">{title}</div>

        <div className="card-text text-body">{description}</div>
      </div>
    </Link>
  );
};
export default Blog;
