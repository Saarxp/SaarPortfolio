import { NavLink } from "react-router-dom";
import style from "./navbar.module.scss";
import { useState } from "react";
import HamburgerNav from "../navbarHamburger/HamburgerNav";

function Navbar() {
const [navColour, updateNavbar] = useState<boolean>(false);
const [navClosed, setNavClosed] = useState<boolean>(false);

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
        <li><NavLink to={"/SaarPortfolio/"}>MyPortfolio.</NavLink></li>
      </ul>
      <HamburgerNav setClosed={setNavClosed} closed={navClosed}/>
    </div>
  );
}

export default Navbar;
