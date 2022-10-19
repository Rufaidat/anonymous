import { BrowserRouter as Router, Link } from "react-router-dom";
import IconSvgComponent from "../images/icon";
import MenuIcon from "../images/menu";
import CloseIcon from "../images/close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  const handleClick = () => {
    setHamburger(!hamburger);
  };
  const Icon = () => {
    if (hamburger) {
      return (
        <div className="flex justify-between">
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
            <Link className=" block text-lg">Home</Link>
            <Link className=" block text-lg">Features</Link>
            <Link className=" block text-lg">Contact</Link>
            <Link className=" block text-lg">login</Link>
            <Link className=" block text-lg">Register</Link>
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
