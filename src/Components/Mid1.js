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
        <section className="flex items-center justify-center flex-col md:flex-row py-8 px-4">
            <img src={img2} alt="mid-section-image" className="flex items-center justify-center rounded-full max-w-md mb-8 md:mb-0 md:mr-8" />
            <div className="flex flex-wrap flex-col items-start md:items-start items-center ml-0 md:ml-8 leading-10 text-center md:text-left">
                <h6 className="font-normal tracking-wider text-base text-text mt-10 mb-0">ABOUT ME</h6>
                <h1 className="my-4 text-4xl text-text mt-10 leading-tight">PERSONAL DETAILS</h1>
                <p className="text-gray text-sm mt-10 my-4">Skilled Frontend Developer proficient in Java, JavaScript, SQL, HTML/CSS and EJS. Specializing in
                    React.js, Redux, Express, Node.js, and Next.js, with expertise in building dynamic, responsive web apps.
                    Experienced in MongoDB, SQL, Git, GitHub, Docker, VS Code, and Chrome Dev Tools. Proficient in
                    Prisma ORM for efficient data management.</p>
                {!about && (
                    <Link to="/about" className="inline-block mt-2 no-underline transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-r from-primary to-secondary leading-10 px-8 border-none rounded-md text-white font-medium hover:shadow-lg">VIEW FULL DETAILS</Link>
                )}
            </div>
        </section>
    );
}