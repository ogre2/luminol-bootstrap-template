import React from "react";

import { Navbar, Offcanvas } from ".";
const Header = () => {
  return (
    <header className="default-header">
      <Navbar />
      <Offcanvas />
    </header>
  );
};

export default Header;
