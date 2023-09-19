import img2 from "../images/mid-img.jpg";
import { Link } from "react-router-dom";

export default function Mid1() {
    return (
        <section className="mid">
            <div className="mid-img-1">
                <img src={img2} alt="mid-section-image" />
            </div>
            <div className="mid-text head-text">
                <h6 className="head-h1 mid1-h1">ABOUT ME</h6>
                <h1 className="head-h2 mid-h2">PERSONAL DETAILS</h1>
                <p className="head-p1 mid-h2">Strong in design and integration with intuitive problem-solving skills. Proficient in <span className="bold"> Java, JAVASCRIPT, Node/Express , SQL/MongoDb and C++/PYTHON(basic) .</span> Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.</p>
                <Link to="/about" className="head-btn mid-btn">VIEW FULL DETAILS</Link>
            </div>
        </section>
    );
}