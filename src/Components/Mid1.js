import { useEffect, useState } from "react";
import img2 from "../images/mid-img.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Mid1() {

    const [about, setAbout] = useState(false);
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        if (location.pathname == "/about") {
            setAbout(true);
        }
    }, [location]);

    return (
        <section className="mid">
            <div className="mid-img-1">
                <img src={img2} alt="mid-section-image" />
            </div>
            <div className="mid-text head-text">
                <h6 className="head-h1 mid1-h1">ABOUT ME</h6>
                <h1 className="head-h2 mid-h2">PERSONAL DETAILS</h1>
                <p className="head-p1 mid-h2">Skilled Frontend Developer proficient in Java, JavaScript, SQL, HTML/CSS and EJS. Specializing in
                    React.js, Redux, Express, Node.js, and Next.js, with expertise in building dynamic, responsive web apps.
                    Experienced in MongoDB, SQL, Git, GitHub, Docker, VS Code, and Chrome Dev Tools. Proficient in
                    Prisma ORM for efficient data management.</p>
                {!about && (
                    <Link to="/about" className="head-btn mid-btn">VIEW FULL DETAILS</Link>
                )}
            </div>
        </section>
    );
}