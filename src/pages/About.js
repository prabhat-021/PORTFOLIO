import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Mid1 from "../Components/Mid1";
import Testimonial from "../Components/Testimonial";
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
    <Mid1 />
    <div className="about-description">
        <li className="about-description-p1">I am Prabhat Sehrawat. I am from Meerut I have done my Schooling at St. John's Senior Secondary School. Currently, I am Pursuing B.tech in Computer Science From the KIET Group Of Institutions. I am a Second Year student. I love to do Coding. I have Completed Web-Development Course(MERN-stack).In my free time, I love to Explore GeoPolitics.</li>
        <li className="about-description-p1">My Web Development journey started in January(2022). Starting from Html/CSS. I have Completed React.js and made some projects on it. Also, I have tried Backend Development and made a small project on it. 
        In the  Backend, I  have done Node js with Express and For the  database,I have done MongoDB. Also, have Knowledge of MySQL(basics). I Have started Coding in C++ and practicing programs on it . and Know the basics of Python/java also,as I have done both of these languages in my Schooling only. </li>
        <ul className="about-ul">▪️ Some small details:-
            <li className="about-ls">➣<span className="bold">Age:-</span>19 year</li>
            <li className="about-ls">➣<span className="bold">Birthday:-</span>2 June 2003</li>
            <li className="about-ls">➣<span className="bold">Website:-</span>https://prabhat-021portfolio.netlify.app/</li>
            <li className="about-ls">➣<span className="bold">Phone:-</span>+91 9084539879</li>
            <li className="about-ls">➣<span className="bold">Email:-</span>prabhatsahrawat010203@gmail.com</li>
            <li className="about-ls">➣<span className="bold">City:-</span>Meerut</li>
        </ul>
    </div>
    <Testimonial />
    <Footer />
    </section>
    );
}