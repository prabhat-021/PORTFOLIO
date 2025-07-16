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
        <div className="grid grid-rows-4 w-72 border-2 border-dark mb-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="row-span-2">
                <img className="w-full h-64 object-cover rounded-t-lg" src={props.src} alt="picture" />
            </div>
            <div className="text-center mt-2 text-2xl font-medium text-dark tracking-wider px-4">
                {props.tittle}
            </div>
            <div className="text-center text-sm font-light tracking-wider px-4 py-2 text-gray-600">
                {props.details}
            </div>
            <div className="text-center pb-4">
                <a href={props.link} className="underline text-dark font-medium hover:text-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                    GitHub Link
                </a>
            </div>
        </div>
    );
}

export default function Project() {
    return (
        <section>
            <Navbar />
            <header className="bg-gradient-to-r from-primary to-secondary text-center py-24">
                <h1 className="text-white text-5xl font-bold mb-6">Projects</h1>
                <div className="flex justify-center items-center">
                    <div><Link className="no-underline text-white text-base mx-2 hover:text-gray-200 transition-colors duration-300" to="/">Home </Link></div>
                    <div className="text-white text-3xl mx-2">🠒</div>
                    <div><Link className="no-underline text-white text-base mx-2 hover:text-gray-200 transition-colors duration-300" to="/project">Project </Link></div>
                </div>
            </header>
            <section className="bg-gray-50 py-5 px-4">
                <h1 className="my-5 text-4xl text-text mt-10 leading-tight text-center mb-8">My Latest Featured Projects</h1>
                <p className="tracking-wide text-sm mt-6 text-center mb-12">
                    You can also go to My <a href="https://github.com/prabhat-021" className="no-underline font-normal text-dark hover:text-primary transition-colors duration-300">GitHub</a> to check my Progress
                </p>
                <section className="flex flex-wrap justify-center gap-8 mx-12">
                    {ProjectData.map(ncard)}
                </section>
            </section>
            <Footer />
        </section>
    );
}