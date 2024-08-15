import React from "react";
import homeIcon from "../../assets/img/menu/menu-home.svg";
import aboutIcon from "../../assets/img/menu/menu-about.svg";
import workIcon from "../../assets/img/menu/menu-work.svg";
import xpIcon from "../../assets/img/menu/menu-xp.svg";
import contactIcon from "../../assets/img/menu/menu-contact-1.svg";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="fixed bottom-0 left-0 flex h-12 w-full items-center justify-evenly rounded-t-lg bg-[#574c3c] shadow-[#574c3c_0_0_20px_0] md:hidden">
      <NavLink to="/">
        <img src={homeIcon} className="size-6" alt="" />
      </NavLink>

      <NavLink to="/about-personal">
        <img src={aboutIcon} className="size-6" alt="" />
      </NavLink>

      <NavLink to="/about-professional">
        <img src={workIcon} className="size-7" alt="" />
      </NavLink>

      <NavLink to="/">
        <img src={xpIcon} className="size-6" alt="" />
      </NavLink>

      {/* <NavLink to="/">
        <img src={xpIcon} className="size-6" alt="" />
      </NavLink> */}

      <NavLink to="/contact">
        <img src={contactIcon} className="size-6 scale-110" alt="" />
      </NavLink>
    </div>
  );
};

export default Menu;
