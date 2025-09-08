import { useEffect, useState } from "react";
import img2 from "../images/mid-img.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Mid1() {
    const [about, setAbout] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/about") {
            setAbout(true);
        }
    }, [location]);

    return (
        <section id="about" className="py-20 bg-white relative overflow-hidden border-b border-gray-100">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Image Section */}
                    <div className="flex-shrink-0 relative group">
                        <div className="relative">
                            <div className="relative bg-white p-2 rounded-3xl shadow-xl border border-gray-200">
                                <img
                                    src={img2}
                                    alt="About Prabhat"
                                    className="w-72 h-72 lg:w-96 lg:h-96 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                        {/* Minimal Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow p-3 border-l-4 border-primary">
                            <div className="text-xl font-bold text-primary">10+</div>
                            <div className="text-xs text-gray-600">Projects</div>
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow p-3 border-l-4 border-secondary">
                            <div className="text-xl font-bold text-secondary">1+</div>
                            <div className="text-xs text-gray-600">Years Experience</div>
                        </div>
                    </div>
                    {/* Content Section */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block">
                                <span className="text-primary font-semibold text-lg tracking-widest">
                                    ABOUT ME
                                </span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Personal <span className="text-primary">Details</span>
                            </h2>
                            <div className="max-w-2xl mx-auto lg:mx-0">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Skilled <span className="font-semibold text-primary">Frontend Developer</span> proficient in
                                    <span className="font-semibold text-secondary"> Java, JavaScript, SQL, HTML/CSS</span> and
                                    <span className="font-semibold text-primary"> EJS</span>. Specializing in
                                    <span className="font-semibold text-secondary"> React.js, Redux, Express, Node.js</span>, and
                                    <span className="font-semibold text-primary"> Next.js</span>, with expertise in building dynamic, responsive web applications.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                                    Experienced in <span className="font-semibold text-primary">MongoDB, Git, GitHub, Docker</span>,
                                    and <span className="font-semibold text-secondary">Chrome Dev Tools</span>. Proficient in
                                    <span className="font-semibold text-primary"> Prisma ORM</span> for efficient data management.
                                </p>
                            </div>
                        </div>
                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            {['React.js', 'Node.js', 'JavaScript', 'MongoDB', 'Express', 'Next.js', 'Java', 'Git'].map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-gray-100 text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-200 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        {/* CTA Button */}
                        {!about && (
                            <div className="flex justify-center lg:justify-start">
                                <Link
                                    to="/about"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 shadow"
                                >
                                    <span className="flex items-center gap-2">
                                        VIEW FULL DETAILS
                                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
