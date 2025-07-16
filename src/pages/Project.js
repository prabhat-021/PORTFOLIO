import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ProjectData from "../data/ProjectData.js";
import FolderIcon from '@mui/icons-material/Folder';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarIcon from '@mui/icons-material/Star';

function ncard(val) {
    return (
        <ProjectCard
            key={val.id}
            src={val.imgsrc}
            tittle={val.title}
            details={val.details}
            link={val.link}
        />
    );
}

function ProjectCard(props) {
    return (
        <div className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 overflow-hidden max-w-sm">
            {/* Image Container */}
            <div className="relative overflow-hidden">
                <img 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={props.src} 
                    alt={props.tittle}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <LaunchIcon className="text-white text-lg" />
                    </div>
                </div>
            </div>
            
            {/* Content Container */}
            <div className="p-6">
                {/* Title */}
                <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <FolderIcon className="text-white text-sm" />
                    </div>
                    <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors duration-300">
                        {props.tittle}
                    </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {props.details}
                </p>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                            <StarIcon className="text-yellow-400 text-sm" />
                            <span className="text-xs text-gray-500">Featured</span>
                        </div>
                    </div>
                    
                    <a 
                        href={props.link} 
                        className="group/link inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon className="text-sm" />
                        <span>View Code</span>
                        <LaunchIcon className="text-sm group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Project() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-background via-white to-indigo-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
            </div>

            <Navbar />
            
            {/* Enhanced Hero Section */}
            <div className="relative z-10 pt-20 pb-20 px-4">
                <div className="bg-gradient-to-r from-primary via-secondary to-indigo-600 text-center py-24 relative overflow-hidden rounded-3xl mx-4 md:mx-8">
                    {/* Hero background decorations */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                    </div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full mb-6">
                            <CodeIcon className="text-white text-2xl" />
                        </div>
                        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Projects
                        </h1>
                        <p className="text-white/90 text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                            A showcase of my latest work and innovative solutions built with modern technologies
                        </p>
                        
                        <div className="flex justify-center items-center space-x-4 mb-8">
                            <Link className="text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-2" to="/">
                                <span>Home</span>
                            </Link>
                            <div className="text-white/60 text-2xl">→</div>
                            <Link className="text-white hover:text-white/80 transition-colors duration-300 flex items-center space-x-2" to="/project">
                                <span>Projects</span>
                            </Link>
                        </div>
                        
                        <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="relative z-10 px-4 py-16">
                <div className="container mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                            My Latest Featured Projects
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                            Each project represents a unique challenge and solution, showcasing my expertise in full-stack development, modern frameworks, and innovative problem-solving approaches.
                        </p>
                        
                        {/* GitHub Link */}
                        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <GitHubIcon className="text-gray-600" />
                            <span className="text-gray-600">You can also check my progress on</span>
                            <a 
                                href="https://github.com/prabhat-021" 
                                className="text-primary font-semibold hover:text-secondary transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <LaunchIcon className="text-gray-400 text-sm" />
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {ProjectData.map(ncard)}
                    </div>
                    
                    {/* Bottom CTA */}
                    <div className="text-center mt-16">
                        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold text-text mb-4">
                                Interested in collaborating?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                            <Link 
                                to="/contact"
                                className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <span>Let's Connect</span>
                                <LaunchIcon className="text-sm" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </section>
    );
}