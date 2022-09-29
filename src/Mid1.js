import img2 from "./images/mid-img.jpg";
import { Link } from "react-router-dom";

export default function Mid1(){
    return (
    <section className="mid">
        <div className="mid-img">
            <img src={img2} alt="mid section image" className="mid-img-1"/>
        </div>
        <div className="mid-text head-text">
            <h6 className="head-h1 mid1-h1">ABOUT ME</h6>
            <h1 className="head-h2">PERSONAL DETAILS</h1>
            <p className="head-p1">Strong in design and integration with intuitive problem-solving skills. Proficient in <span className="bold"> C++, JAVASCRIPT, Node/Express , SQL/MongoDb and JAVA/PYTHON(basic) .</span> Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.</p>
            <Link to="/about" className="head-btn">VIEW FULL DETAILS</Link>
        </div>
    </section>
    );
}