import "../pages/styles.css";
import img1 from "../images/projectImage/logo.png";
import { NavLink } from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
export default function Navbar() {
  const [icons, setIcon] = React.useState(false);
  return (
    <section className="nav-sec">
      <div className="navbar">
        <img src={img1} className="nav-img" alt="navIcon" />
        <ul className={icons ? "nav-item-mobile" : "nav-item "}
          onClick={() => setIcon(false)}>
          <NavLink className="item" to="/">Home </NavLink>
          <NavLink className="item" to="/about">About </NavLink>
          <NavLink className="item" to="/project">Projects </NavLink>
          <NavLink className="item" to="/contact">Contact</NavLink>
        </ul>
        <button className="nav-icon"
          onClick={() => setIcon(!icons)}>
          {icons ? <CloseIcon /> : <DehazeIcon />}
        </button>
      </div>
    </section>
  );
}
