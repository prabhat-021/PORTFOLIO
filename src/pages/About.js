import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Mid1 from "../Components/Mid1";
// import Testimonial from "../Components/Testimonial";
export default function About() {
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
                <li className="about-description-p1">I'm Prabhat Sehrawat from Meerut, currently a second-year B.Tech student majoring in Computer Science at KIET Group Of Institutions. I'm passionate about coding and have completed a Web Development course, specializing in MERN stack. In my free time, I delve into geopolitics. Welcome to my portfolio; let's explore my coding journey together.</li>
                <li className="about-description-p1">I embarked on my coding journey starting with HTML and CSS, gradually mastering the essentials of web development. I've since completed React.js, showcasing my skills through various projects. Venturing into the world of Backend Development, I've worked with Node.js and Express, harnessing the power of MongoDB for database management. My proficiency extends to MongoDb, laying a strong foundation in backend technologies. Alongside web development, I've delved into the realms of programming, honing my skills in Java while also gaining a fundamental understanding of Python and C++. My portfolio reflects this diverse skill set, offering a glimpse into my coding journey and project accomplishments</li>
                <ul className="about-ul">▪️ Some small details:-
                    <li className="about-ls">➣<span className="bold">Age:-</span>19 year</li>
                    <li className="about-ls">➣<span className="bold">Birthday:-</span>2 June 2003</li>
                    <li className="about-ls">➣<span className="bold">Website:-</span>https://prabhat-021portfolio.netlify.app/</li>
                    <li className="about-ls">➣<span className="bold">Phone:-</span>+91 9084539879</li>
                    <li className="about-ls">➣<span className="bold">Email:-</span>prabhatsahrawat010203@gmail.com</li>
                    <li className="about-ls">➣<span className="bold">City:-</span>Meerut</li>
                </ul>
            </div>
            {/* <Testimonial /> */}
            <Footer />
        </section>
    );
}