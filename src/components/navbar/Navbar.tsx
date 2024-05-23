import { NavLink } from "react-router-dom";
import style from "./navbar.module.scss";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { useState } from "react";

function Navbar() {
const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <div className={navColour ? style.sticky : style.navWrapper }>
      <ul className={style.leftNav}>
        <li><NavLink to={"/"}>MyPortfolio.</NavLink></li>
      </ul>
      <ul className={style.rightNav}>
        <li><NavLink to={"/"} className={style.rightNavLink}><AiOutlineHome className={style.rightNavIcon}/>Home</NavLink></li>
        <li><NavLink to={"/about"} className={style.rightNavLink}><AiOutlineUser className={style.rightNavIcon}/>About</NavLink></li>
        <li><NavLink to={"/projects"} className={style.rightNavLink}><BsBriefcase  className={style.rightNavIconProject}/>Projects</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;
