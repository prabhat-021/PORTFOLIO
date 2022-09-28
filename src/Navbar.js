import "./styles.css";
import img1 from "./images/download.webp";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <section className="navbar">
      <div>
        <img src={img1} />
        <ul>
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/about">About </NavLink>
          </li>
          <li>
            <NavLink to="/project">Projects </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Me </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}
