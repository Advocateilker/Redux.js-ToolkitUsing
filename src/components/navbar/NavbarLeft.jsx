import React from "react";
import { Link } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <div className="text-4xl text-orange-600">
      <Link to={"/"}>@Reduxjs/Toolkit</Link>
    </div>
  );
};

export default NavbarLeft;