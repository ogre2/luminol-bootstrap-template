import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from ".";

const Layout = () => {
  return (
    <div className="app-wrapper">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
