import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import style from './navbarWrapper.module.scss';
import Footer from "../../components/footer/Footer";

function NavbarWrapper() {
  return (
    <>
      <div className={style.siteWrapper}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default NavbarWrapper;
