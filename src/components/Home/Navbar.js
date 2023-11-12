import logo from "../../imgs/logo.jpg";
import "@fortawesome/fontawesome-free";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="pt-1 pb-1 position-sticky top-0 z-3 ">
      <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between">
        <div className="logo">
          <img
            className="img-fluid rounded-circle w-100"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="links gap-3 fw-bold d-flex m-3 m-sm-0 ">
          <NavLink
            className={
              "align-items-center d-flex h-100 p-3 rounded-2 ps-2 gap-2"
            }
            to={"/"}>
            <i className="fa-solid fa-house"></i> Home
          </NavLink>
          <NavLink
            className={
              "align-items-center d-flex h-100 p-3 rounded-2 ps-2 gap-2"
            }
            to={"/gallery"}>
            <i className="fa-regular fa-image"></i> Gallery
          </NavLink>
          <NavLink
            className={
              "align-items-center d-flex h-100 p-3 rounded-2 ps-2 gap-2"
            }
            to={"/contact"}>
            <i className="fa-solid fa-phone"></i> Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
