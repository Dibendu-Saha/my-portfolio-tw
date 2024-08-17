import React from "react";
import ResponsiveLayout from "./ResponsiveLayout";
import homeIcon from "../../assets/img/menu/menu-home.svg";
import aboutIcon from "../../assets/img/menu/menu-about.svg";
import workIcon from "../../assets/img/menu/menu-work.svg";
import xpIcon from "../../assets/img/menu/menu-xp.svg";
import contactIcon from "../../assets/img/menu/menu-contact-1.svg";
import { NavLink } from "react-router-dom";
import { route } from "../../common/app-constants";

const Menu = () => {
  return (
    <ResponsiveLayout>
      <NavLink to={route.HOME}>
        <img src={homeIcon} className="size-6 md:hidden" alt="" />
        <p className="hidden md:block">Home</p>
      </NavLink>

      <NavLink to={route.ABOUT_PERSONAL}>
        <img src={aboutIcon} className="size-6 md:hidden" alt="" />
        <p className="hidden md:block">About me</p>
      </NavLink>

      <NavLink to={route.ABOUT_PROFESSIONAL}>
        <img src={workIcon} className="size-7 md:hidden" alt="" />
        <p className="hidden md:block">What I do</p>
      </NavLink>

      <NavLink to={route.XP}>
        <img src={xpIcon} className="size-6 md:hidden" alt="" />
        <p className="hidden md:block">Experience</p>
      </NavLink>

      {/* <NavLink to="/">
        <img src={xpIcon} className="size-6" alt="" />
      </NavLink> */}

      <NavLink to={route.CONTACT}>
        <img src={contactIcon} className="size-6 scale-110 md:hidden" alt="" />
        <p className="hidden md:block">Contact</p>
      </NavLink>
    </ResponsiveLayout>
  );
};

export default Menu;
