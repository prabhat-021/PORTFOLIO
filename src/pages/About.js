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
                <li className="about-description-p1">Demonstrating a comprehensive proficiency in diverse programming languages and frameworks such as Java, JavaScript, React Js, Redux, Node Js, and MongoDB, my portfolio underscores a versatile skill set adept at navigating various technology stacks. This breadth of technical acumen not only showcases adaptability but also ensures a robust foundation for addressing multifaceted project requirements effectively. Through mastery of these tools, I have consistently delivered high-quality solutions across a spectrum of projects, highlighting a commitment to excellence and continuous learning in the ever-evolving landscape of web development.</li>
                <li className="about-description-p1">With a focus on crafting secure and scalable MERN stack applications, my portfolio reflects extensive experience in leveraging Redux for efficient state management. Through the execution of numerous freelance projects, I've honed this expertise, delivering solutions that not only meet but exceed client expectations. Notably, I've integrated advanced authentication mechanisms like JWT, Google Authentication, and Auth0, fortifying applications with robust security measures while optimizing scalability for efficient request handling. By enhancing MERN stack projects with these features, I prioritize not only the functionality but also the integrity and performance of the solutions I deliver, ensuring they stand resilient in dynamic and demanding environments.</li>
                <ul className="about-ul">▪️ Some small details:-
                    <li className="about-ls">➣<span className="bold">Age:-</span>21 year</li>
                    <li className="about-ls">➣<span className="bold">Birthday:-</span>2 June 2003</li>
                    <li className="about-ls">➣<span className="bold">Website:-</span>https://prabhat-021portfolio.netlify.app/</li>
                    <li className="about-ls">➣<span className="bold">Phone:-</span>+91 8445580308</li>
                    <li className="about-ls">➣<span className="bold">Email:-</span>theprabhatsehrawat@gmail.com</li>
                    <li className="about-ls">➣<span className="bold">City:-</span>Meerut</li>
                </ul>
            </div>
            {/* <Testimonial /> */}
            <Footer />
        </section>
    );
}