import React from "react";
import homeIcon from "../../assets/img/menu/menu-home.svg";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="fixed bottom-0 left-0 flex h-12 w-full items-center justify-center rounded-t-lg bg-[#574c3c] shadow-[#574c3c_0_0_20px_0] md:hidden">
      <NavLink to="/">
        <img src={homeIcon} className="size-7" alt="" />
      </NavLink>
    </div>
  );
};

export default Menu;
