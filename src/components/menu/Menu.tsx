import ResponsiveLayout from "./ResponsiveLayout";
import homeIcon from "../../assets/img/menu/menu-home.svg";
import aboutIcon from "../../assets/img/menu/menu-about.svg";
import workIcon from "../../assets/img/menu/menu-work.svg";
import xpIcon from "../../assets/img/menu/menu-xp.svg";
import contactIcon from "../../assets/img/menu/menu-contact-1.svg";
import Navigation from "./Navigation";
import { route } from "../../common/app-constants";

const Menu = () => {
  return (
    <ResponsiveLayout>
      <Navigation to={route.HOME}>
        <img src={homeIcon} className="size-6 md:hidden" alt="" />
        <p className="hidden transition-all duration-300 hover:-translate-y-1 md:block">Home</p>
      </Navigation>

      <Navigation to={route.ABOUT_PERSONAL}>
        <img src={aboutIcon} className="size-6 md:hidden" alt="" />
        <p className="hidden transition-all duration-300 hover:-translate-y-1 md:block">About me</p>
      </Navigation>

      <Navigation to={route.ABOUT_PROFESSIONAL}>
        <img src={workIcon} className="size-7 md:hidden" alt="" />
        <p className="hidden transition-all duration-300 hover:-translate-y-1 md:block">What I do</p>
      </Navigation>

      <Navigation to={route.XP}>
        <img src={xpIcon} className="size-6 md:hidden" alt="" />
        <p className="hidden transition-all duration-300 hover:-translate-y-1 md:block">Experience</p>
      </Navigation>

      <Navigation to={route.CONTACT}>
        <img src={contactIcon} className="size-6 scale-110 md:hidden" alt="" />
        <p className="hidden transition-all duration-300 hover:-translate-y-1 md:block">Contact</p>
      </Navigation>

      {/* <Navigation to="/">
        <img src={xpIcon} className="size-6" alt="" />
      </Navigation> */}
    </ResponsiveLayout>
  );
};

export default Menu;
