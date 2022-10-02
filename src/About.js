import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Mid1 from "./Mid1";
import Testimonial from "./Testimonial";
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
        <li className="about-description-p1">I am Prabhat Sehrawat,I am from Meerut , I have done my Schooling from St. John's Senior Secondary School.Currently i am Pursuing B.tech in Computer Science From KIET Group Of Institition. I am a Second Year student .I love to do Coding . I have Completed Web-Devleopment Course(MERN-stack).In my free time I love to Explore about GeoPolitics.</li>
        <li className="about-description-p1">My Web Devleopment journy started in january(2022). Starting from Html/css. I have Completed React.js and made some project on it . Also i have tried Backend Development and made small project on it . 
        In Backend i  have done Node js with Express and For database i have done MongoDb . Also have Knowledge of MySQL(basics). I Have started Coding in C++ and practicing program on it . and Know basics of Python/java also,as i have done both of these languages in my Schooling only . </li>
        <ul className="about-ul">▪️ Some small details:-
            <li className="about-ls">➣<span className="bold">Age:-</span>19 year</li>
            <li className="about-ls">➣<span className="bold">Birthday:-</span>2 June 2004</li>
            <li className="about-ls">➣<span className="bold">Website:-</span>www.example.com</li>
            <li className="about-ls">➣<span className="bold">Phone:-</span>+91 9084539879</li>
            <li className="about-ls">➣<span className="bold">Emial:-</span>prabhatsahrawat010203@gmail.com</li>
            <li className="about-ls">➣<span className="bold">City:-</span>Meerut</li>
        </ul>
    </div>
    <Testimonial />
    <Footer />
    </section>
    );
}