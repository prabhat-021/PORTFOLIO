import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Mid1 from "../Components/Mid1";
// import Testimonial from "../Components/Testimonial";

export default function About() {
    return (
        <section>
            <Navbar />
            <div className="bg-gradient-to-r from-primary to-secondary text-center py-24">
                <h1 className="text-white text-5xl font-bold mb-6">About Me</h1>
                <header className="flex justify-center items-center">
                    <div><Link className="no-underline text-white text-base mx-2 hover:text-gray-200 transition-colors duration-300" to="/">Home </Link></div>
                    <div className="text-white text-3xl mx-2">🠒</div>
                    <div><Link className="no-underline text-white text-base mx-2 hover:text-gray-200 transition-colors duration-300" to="/about">About </Link></div>
                </header>
            </div>
            <Mid1 />
            <div className="mx-12 my-5 bg-background p-8 rounded-lg shadow-sm">
                <p className="text-sm mb-4 leading-relaxed text-gray-700">Demonstrating a comprehensive proficiency in diverse programming languages and frameworks such as Java, JavaScript, React Js, Redux, Node Js, and MongoDB, my portfolio underscores a versatile skill set adept at navigating various technology stacks. This breadth of technical acumen not only showcases adaptability but also ensures a robust foundation for addressing multifaceted project requirements effectively. Through mastery of these tools, I have consistently delivered high-quality solutions across a spectrum of projects, highlighting a commitment to excellence and continuous learning in the ever-evolving landscape of web development.</p>
                <p className="text-sm mb-4 leading-relaxed text-gray-700">With a focus on crafting secure and scalable MERN stack applications, my portfolio reflects extensive experience in leveraging Redux for efficient state management. Through the execution of numerous freelance projects, I've honed this expertise, delivering solutions that not only meet but exceed client expectations. Notably, I've integrated advanced authentication mechanisms like JWT, Google Authentication, and Auth0, fortifying applications with robust security measures while optimizing scalability for efficient request handling. By enhancing MERN stack projects with these features, I prioritize not only the functionality but also the integrity and performance of the solutions I deliver, ensuring they stand resilient in dynamic and demanding environments.</p>
                <div className="p-0 text-base mt-6">
                    <p className="font-medium mb-3">▪️ Some small details:-</p>
                    <ul className="list-none">
                        <li className="pl-4 text-sm mb-2">➣<span className="font-bold">Age:-</span> 21 year</li>
                        <li className="pl-4 text-sm mb-2">➣<span className="font-bold">Birthday:-</span> 2 June 2003</li>
                        <li className="pl-4 text-sm mb-2">➣<span className="font-bold">Website:-</span> https://prabhat-021portfolio.netlify.app/</li>
                        <li className="pl-4 text-sm mb-2">➣<span className="font-bold">Phone:-</span> +91 8445580308</li>
                        <li className="pl-4 text-sm mb-2">➣<span className="font-bold">Email:-</span> theprabhatsehrawat@gmail.com</li>
                        <li className="pl-4 text-sm mb-2">➣<span className="font-bold">City:-</span> Meerut</li>
                    </ul>
                </div>
            </div>
            {/* <Testimonial /> */}
            <Footer />
        </section>
    );
}