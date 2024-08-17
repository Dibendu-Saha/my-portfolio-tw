import React from "react";
import homeIcon from "../../assets/img/menu/menu-home.svg";
import aboutIcon from "../../assets/img/menu/menu-about.svg";
import workIcon from "../../assets/img/menu/menu-work.svg";
import xpIcon from "../../assets/img/menu/menu-xp.svg";
import contactIcon from "../../assets/img/menu/menu-contact-1.svg";
import { NavLink } from "react-router-dom";
import { route } from "../../common/app-constants";

const Menu = () => {
  return (
    <div className="fixed bottom-0 left-0 flex h-12 w-full items-center justify-evenly rounded-t-lg bg-[#574c3c] shadow-[#574c3c_0_0_20px_0] md:left-0 md:top-0 md:justify-end md:gap-12 md:bg-transparent md:pr-6 md:shadow-none">
      <NavLink to={route.HOME}>
        <img src={homeIcon} className="size-6 md:hidden" alt="" />
        <p className="hidden font-light uppercase tracking-widest md:block">Home</p>
      </NavLink>

      <NavLink to={route.ABOUT_PERSONAL}>
        <img src={aboutIcon} className="size-6 md:hidden" alt="" />
        <p className="hidden font-light uppercase tracking-widest md:block">About me</p>
      </NavLink>

      <NavLink to={route.ABOUT_PROFESSIONAL}>
        <img src={workIcon} className="size-7 md:hidden" alt="" />
        <p className="hidden font-light uppercase tracking-widest md:block">What I do</p>
      </NavLink>

      <NavLink to={route.XP}>
        <img src={xpIcon} className="size-6 md:hidden" alt="" />
        <p className="hidden font-light uppercase tracking-widest md:block">Experience</p>
      </NavLink>

      {/* <NavLink to="/">
        <img src={xpIcon} className="size-6" alt="" />
      </NavLink> */}

      <NavLink to={route.CONTACT}>
        <img src={contactIcon} className="size-6 scale-110 md:hidden" alt="" />
        <p className="hidden font-light uppercase tracking-widest md:block">Contact</p>
      </NavLink>
    </div>
  );
};

export default Menu;
