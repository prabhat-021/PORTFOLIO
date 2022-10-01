import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function About(){
    return (
        <section>
    <Navbar />
    <div className="about-header-1"> 
    <h1 className="about-h1">About Me</h1>
    <header className="about-header">
        <div><Link className="about-link" to="/home">Home </Link></div>
        <div className="about-link sy1">🠒</div>
        <div><Link className="about-link" to="/about">About </Link></div>
    </header>
    </div>
    <Footer />
    </section>
    );
}