import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-5">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;