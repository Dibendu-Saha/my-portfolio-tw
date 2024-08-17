import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ children, to }) => {
  return (
    <NavLink className={(navData) => navData.isActive && "scale-x-110 border-b border-[#6b5d4a]"} to={to}>
      {children}
    </NavLink>
  );
};

export default Navigation;
