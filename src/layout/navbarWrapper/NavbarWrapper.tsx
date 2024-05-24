import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";

function NavbarWrapper() {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  );
}

export default NavbarWrapper;
