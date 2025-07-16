import img1 from "../images/projectImage/logo.png";
import { NavLink } from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import React from "react";

export default function Navbar() {
  const [icons, setIcon] = React.useState(false);
  return (
    <section className="px-4 py-3">
      <div className="flex">
        <img src={img1} className="w-20 mx-10 my-2" alt="navIcon" />
        <ul className={icons ? 
          "absolute z-10 block list-none transition-all duration-500 ease-out pl-0 mr-0 pr-10 w-80 left-0 top-20 bg-gray-600 sm:bg-gray-600 md:flex md:justify-end md:mr-12 md:w-full md:static md:bg-transparent md:top-0 md:pl-0 md:pr-0 md:w-auto" : 
          "hidden md:flex md:justify-end md:mr-12 md:w-full"
        }
          onClick={() => setIcon(false)}>
          <NavLink className={({ isActive }) => `flex px-4 py-8 items-center no-underline text-white md:text-text md:py-0 md:px-4 hover:text-primary transition-all duration-300 ease-in-out ${isActive ? 'text-primary' : ''}`} to="/">Home </NavLink>
          <NavLink className={({ isActive }) => `flex px-4 py-8 items-center no-underline text-white md:text-text md:py-0 md:px-4 hover:text-primary transition-all duration-300 ease-in-out ${isActive ? 'text-primary' : ''}`} to="/about">About </NavLink>
          <NavLink className={({ isActive }) => `flex px-4 py-8 items-center no-underline text-white md:text-text md:py-0 md:px-4 hover:text-primary transition-all duration-300 ease-in-out ${isActive ? 'text-primary' : ''}`} to="/project">Projects </NavLink>
          <NavLink className={({ isActive }) => `flex px-4 py-8 items-center no-underline text-white md:text-text md:py-0 md:px-4 hover:text-primary transition-all duration-300 ease-in-out ${isActive ? 'text-primary' : ''}`} to="/contact">Contact</NavLink>
        </ul>
        <button className="md:hidden block absolute text-3xl border-none outline-none top-4 right-6"
          onClick={() => setIcon(!icons)}>
          {icons ? <CloseIcon /> : <DehazeIcon />}
        </button>
      </div>
    </section>
  );
}
