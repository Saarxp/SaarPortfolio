import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import ScrollToTop from "../../components/scrollToTop/scrollToTop";

function NavbarWrapper() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  );
}

export default NavbarWrapper;
