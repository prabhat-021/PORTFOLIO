import "./styles.css";
import img1 from "./images/download.webp";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <section >
      <div className="navbar">
        <img src={img1} className="nav-img" />
        <ul className="nav-item">
          <li className="item">
            <NavLink to="/">Home </NavLink>
          </li>
          <li className="item">
            <NavLink to="/about">About </NavLink>
          </li>
          <li className="item">
            <NavLink to="/project">Projects </NavLink>
          </li>
          <li className="item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}
