import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ProjectData from "../data/ProjectData.js";

function ncard(val) {
    return (
        <ProjectCard
            src={val.imgsrc}
            tittle={val.title}
            details={val.details}
            link={val.link}
        />
    );
}

function ProjectCard(props) {
    return (
        <div className="project-card">
            <div>
                <img className="project-img" src={props.src} alt="picture" />
            </div>
            <div className="project-title centre">
                {props.tittle}
            </div>
            <div className="project-details centre">{props.details}</div>
            <div className="centre"><a href={props.link} className="project-link " target="_blank">GitHub Link</a></div>
        </div>
    );
}


export default function Project() {


    return (
        <section>
            <Navbar />
            <header className="about-header-1">
                <h1 className="about-h1">Projects</h1>
                <div className="about-header">
                    <div><Link className="about-link" to="/home">Home </Link></div>
                    <div className="about-link sy1">🠒</div>
                    <div><Link className="about-link" to="/project">Project </Link></div>
                </div>
            </header>
            <section className="project-main">
                <h1 className="head-h2 centre">My Latest Featured Projects</h1>
                <p className="a-para centre">You can also go to My <a href="https://github.com/prabhat-021" className="a-link">GitHub</a> to check my Progress</p>
                <section className="project-card-1">
                    {ProjectData.map(ncard)}
                </section>  
            </section>
            <Footer />
        </section>
    );
}