import React from "react";
import { NavLink } from "react-router-dom";

type NavigationComponentProp = {
  children: JSX.Element[];
  to: string;
};

const Navigation: React.FC<NavigationComponentProp> = ({ children, to }) => {
  return (
    <NavLink className={(navData) => (navData.isActive ? "scale-x-110 border-b border-[#6b5d4a] transition-transform duration-300" : "")} to={to}>
      {children}
    </NavLink>
  );
};

export default Navigation;
