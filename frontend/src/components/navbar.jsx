import { BrowserRouter as Router, Link } from "react-router-dom";
import { HashLink as HLink } from "react-router-hash-link";
import IconSvgComponent from "../images/icon";
import MenuIcon from "../images/menu";
import CloseIcon from "../images/close";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { useSelector } from "react-redux";
import { removelogged } from "../reducers/loggedReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const loggedState = useSelector((state) => state.logged);
  const [hamburger, setHamburger] = useState(true);
  const handleClick = () => {
    setHamburger(!hamburger);
  };

  const logout = () => {
    setHamburger(true);
    dispatch(removelogged());
    nav("/login");
    window.localStorage.removeItem("loggedAnonappUser");
  };

  const Icon = () => {
    if (hamburger) {
      return (
        <div className="flex justify-between ">
          <IconSvgComponent /> <MenuIcon onClick={handleClick} />
        </div>
      );
    } else {
      return (
        <div className="relative">
          <div className="flex justify-between">
            <IconSvgComponent />
            <CloseIcon onClick={handleClick} />
          </div>
          <div className="absolute right-0 p-6 space-y-4 bg-gradient-to-r from-purple-200 to-purple-100 mt-5 w-60 min-w-[70vw] text-white z-10 text-center rounded">
            {" "}
            <Link
              className=" block text-lg"
              to="/"
              onClick={() => setHamburger(true)}
            >
              Home
            </Link>
            <HLink
              className=" block text-lg"
              to="#features"
              onClick={() => setHamburger(true)}
            >
              Features
            </HLink>
            <Link className=" block text-lg" onClick={() => setHamburger(true)}>
              Contact
            </Link>
            <Link
              className={"text-lg"}
              style={loggedState ? { display: "none" } : { display: "block" }}
              to="/login"
              onClick={() => setHamburger(true)}
            >
              Get started
            </Link>
            <Link
              className="text-lg "
              style={!loggedState ? { display: "none" } : { display: "block" }}
              onClick={() => {
                setHamburger(true);
              }}
              to="/messages"
            >
              Messages
            </Link>
            <Link
              className="text-lg "
              style={!loggedState ? { display: "none" } : { display: "block" }}
              onClick={() => {
                setHamburger(true);
              }}
              to="/settings"
            >
              settings
            </Link>
            <Link
              className="text-lg"
              style={!loggedState ? { display: "none" } : { display: "block" }}
              onClick={logout}
            >
              log out
            </Link>
          </div>
        </div>
      );
    }
  };
  return (
    <div className=" block text-lg">
      <Icon />
    </div>
  );
};
export default Navbar;
