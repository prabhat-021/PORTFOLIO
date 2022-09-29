import img2 from "./images/mid-img.jpg";
import { Link } from "react-router-dom";

export default function Mid1(){
    return (
    <section className="mid">
        <div className="mid-img">
            <img src={img2} alt="mid section image" className="mid-img-1"/>
        </div>
        <div className="mid-text head-text">
            <h6 className="head-h1">ABOUT ME</h6>
            <h1 className="head-h2">PERSONAL DETAILS</h1>
            <p className="head-p1">Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <Link to="/about" className="head-btn">VIEW FULL DETAILS</Link>
        </div>
    </section>
    );
}